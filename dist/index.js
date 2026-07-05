/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function pn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const Z = {}, bt = [], je = () => {
}, xr = () => !1, Is = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Es = (e) => e.startsWith("onUpdate:"), de = Object.assign, gn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Hi = Object.prototype.hasOwnProperty, Y = (e, t) => Hi.call(e, t), k = Array.isArray, xt = (e) => ns(e) === "[object Map]", wr = (e) => ns(e) === "[object Set]", Dn = (e) => ns(e) === "[object Date]", F = (e) => typeof e == "function", ne = (e) => typeof e == "string", Ie = (e) => typeof e == "symbol", X = (e) => e !== null && typeof e == "object", Sr = (e) => (X(e) || F(e)) && F(e.then) && F(e.catch), Cr = Object.prototype.toString, ns = (e) => Cr.call(e), Bi = (e) => ns(e).slice(8, -1), Ir = (e) => ns(e) === "[object Object]", Ts = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jt = /* @__PURE__ */ pn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Wi = /-\w/g, Ee = Rs(
  (e) => e.replace(Wi, (t) => t.slice(1).toUpperCase())
), Ji = /\B([A-Z])/g, ot = Rs(
  (e) => e.replace(Ji, "-$1").toLowerCase()
), Er = Rs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ks = Rs(
  (e) => e ? `on${Er(e)}` : ""
), Ne = (e, t) => !Object.is(e, t), gs = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Tr = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, mn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let kn;
const Ps = () => kn || (kn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vn(e) {
  if (k(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = ne(n) ? Xi(n) : vn(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ne(e) || X(e))
    return e;
}
const Gi = /;(?![^(]*\))/g, Yi = /:([^]+)/, qi = /\/\*[^]*?\*\//g;
function Xi(e) {
  const t = {};
  return e.replace(qi, "").split(Gi).forEach((s) => {
    if (s) {
      const n = s.split(Yi);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function rt(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (k(e))
    for (let s = 0; s < e.length; s++) {
      const n = rt(e[s]);
      n && (t += n + " ");
    }
  else if (X(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const zi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Zi = /* @__PURE__ */ pn(zi);
function Rr(e) {
  return !!e || e === "";
}
function Qi(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = yn(e[n], t[n]);
  return s;
}
function yn(e, t) {
  if (e === t) return !0;
  let s = Dn(e), n = Dn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ie(e), n = Ie(t), s || n)
    return e === t;
  if (s = k(e), n = k(t), s || n)
    return s && n ? Qi(e, t) : !1;
  if (s = X(e), n = X(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !yn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Pr = (e) => !!(e && e.__v_isRef === !0), te = (e) => ne(e) ? e : e == null ? "" : k(e) || X(e) && (e.toString === Cr || !F(e.toString)) ? Pr(e) ? te(e.value) : JSON.stringify(e, Mr, 2) : String(e), Mr = (e, t) => Pr(t) ? Mr(e, t.value) : xt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[Vs(n, i) + " =>"] = r, s),
    {}
  )
} : wr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Vs(s))
} : Ie(t) ? Vs(t) : X(t) && !k(t) && !Ir(t) ? String(t) : t, Vs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ie(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ce;
class Ar {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ce && (ce.active ? (this.parent = ce, this.index = (ce.scopes || (ce.scopes = [])).push(
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
      const s = ce;
      try {
        return ce = this, t();
      } finally {
        ce = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ce, ce = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ce === this)
        ce = this.prevScope;
      else {
        let t = ce;
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
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Lr(e) {
  return new Ar(e);
}
function Or() {
  return ce;
}
function eo(e, t = !1) {
  ce && ce.cleanups.push(e);
}
let ee;
const Hs = /* @__PURE__ */ new WeakSet();
class $r {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ce && (ce.active ? ce.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Hs.has(this) && (Hs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || kr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Un(this), Ur(this);
    const t = ee, s = Te;
    ee = this, Te = !0;
    try {
      return this.fn();
    } finally {
      Fr(this), ee = t, Te = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        xn(t);
      this.deps = this.depsTail = void 0, Un(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Hs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    tn(this) && this.run();
  }
  get dirty() {
    return tn(this);
  }
}
let Dr = 0, Kt, Vt;
function kr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Vt, Vt = e;
    return;
  }
  e.next = Kt, Kt = e;
}
function _n() {
  Dr++;
}
function bn() {
  if (--Dr > 0)
    return;
  if (Vt) {
    let t = Vt;
    for (Vt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Kt; ) {
    let t = Kt;
    for (Kt = void 0; t; ) {
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
function Ur(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Fr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), xn(n), to(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function tn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Nr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Nr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Zt) || (e.globalVersion = Zt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !tn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = ee, n = Te;
  ee = e, Te = !0;
  try {
    Ur(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ne(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    ee = s, Te = n, Fr(e), e.flags &= -3;
  }
}
function xn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      xn(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function to(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Te = !0;
const jr = [];
function Ve() {
  jr.push(Te), Te = !1;
}
function He() {
  const e = jr.pop();
  Te = e === void 0 ? !0 : e;
}
function Un(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = ee;
    ee = void 0;
    try {
      t();
    } finally {
      ee = s;
    }
  }
}
let Zt = 0;
class so {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class wn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ee || !Te || ee === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== ee)
      s = this.activeLink = new so(ee, this), ee.deps ? (s.prevDep = ee.depsTail, ee.depsTail.nextDep = s, ee.depsTail = s) : ee.deps = ee.depsTail = s, Kr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = ee.depsTail, s.nextDep = void 0, ee.depsTail.nextDep = s, ee.depsTail = s, ee.deps === s && (ee.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Zt++, this.notify(t);
  }
  notify(t) {
    _n();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      bn();
    }
  }
}
function Kr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Kr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const vs = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ Symbol(
  ""
), sn = /* @__PURE__ */ Symbol(
  ""
), Qt = /* @__PURE__ */ Symbol(
  ""
);
function he(e, t, s) {
  if (Te && ee) {
    let n = vs.get(e);
    n || vs.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new wn()), r.map = n, r.key = s), r.track();
  }
}
function Ye(e, t, s, n, r, i) {
  const o = vs.get(e);
  if (!o) {
    Zt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (_n(), t === "clear")
    o.forEach(l);
  else {
    const c = k(e), d = c && Ts(s);
    if (c && s === "length") {
      const u = Number(n);
      o.forEach((h, b) => {
        (b === "length" || b === Qt || !Ie(b) && b >= u) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(Qt)), t) {
        case "add":
          c ? d && l(o.get("length")) : (l(o.get(dt)), xt(e) && l(o.get(sn)));
          break;
        case "delete":
          c || (l(o.get(dt)), xt(e) && l(o.get(sn)));
          break;
        case "set":
          xt(e) && l(o.get(dt));
          break;
      }
  }
  bn();
}
function no(e, t) {
  const s = vs.get(e);
  return s && s.get(t);
}
function gt(e) {
  const t = /* @__PURE__ */ G(e);
  return t === e ? t : (he(t, "iterate", Qt), /* @__PURE__ */ we(e) ? t : t.map(Re));
}
function Ms(e) {
  return he(e = /* @__PURE__ */ G(e), "iterate", Qt), e;
}
function Ue(e, t) {
  return /* @__PURE__ */ Ze(e) ? Et(/* @__PURE__ */ Xe(e) ? Re(t) : t) : Re(t);
}
const ro = {
  __proto__: null,
  [Symbol.iterator]() {
    return Bs(this, Symbol.iterator, (e) => Ue(this, e));
  },
  concat(...e) {
    return gt(this).concat(
      ...e.map((t) => k(t) ? gt(t) : t)
    );
  },
  entries() {
    return Bs(this, "entries", (e) => (e[1] = Ue(this, e[1]), e));
  },
  every(e, t) {
    return Be(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Be(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Ue(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Be(
      this,
      "find",
      e,
      t,
      (s) => Ue(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return Be(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Be(
      this,
      "findLast",
      e,
      t,
      (s) => Ue(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Be(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Be(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ws(this, "includes", e);
  },
  indexOf(...e) {
    return Ws(this, "indexOf", e);
  },
  join(e) {
    return gt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ws(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Be(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return $t(this, "pop");
  },
  push(...e) {
    return $t(this, "push", e);
  },
  reduce(e, ...t) {
    return Fn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Fn(this, "reduceRight", e, t);
  },
  shift() {
    return $t(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Be(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return $t(this, "splice", e);
  },
  toReversed() {
    return gt(this).toReversed();
  },
  toSorted(e) {
    return gt(this).toSorted(e);
  },
  toSpliced(...e) {
    return gt(this).toSpliced(...e);
  },
  unshift(...e) {
    return $t(this, "unshift", e);
  },
  values() {
    return Bs(this, "values", (e) => Ue(this, e));
  }
};
function Bs(e, t, s) {
  const n = Ms(e), r = n[t]();
  return n !== e && !/* @__PURE__ */ we(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const io = Array.prototype;
function Be(e, t, s, n, r, i) {
  const o = Ms(e), l = o !== e && !/* @__PURE__ */ we(e), c = o[t];
  if (c !== io[t]) {
    const h = c.apply(e, i);
    return l ? Re(h) : h;
  }
  let d = s;
  o !== e && (l ? d = function(h, b) {
    return s.call(this, Ue(e, h), b, e);
  } : s.length > 2 && (d = function(h, b) {
    return s.call(this, h, b, e);
  }));
  const u = c.call(o, d, n);
  return l && r ? r(u) : u;
}
function Fn(e, t, s, n) {
  const r = Ms(e), i = r !== e && !/* @__PURE__ */ we(e);
  let o = s, l = !1;
  r !== e && (i ? (l = n.length === 0, o = function(d, u, h) {
    return l && (l = !1, d = Ue(e, d)), s.call(this, d, Ue(e, u), h, e);
  }) : s.length > 3 && (o = function(d, u, h) {
    return s.call(this, d, u, h, e);
  }));
  const c = r[t](o, ...n);
  return l ? Ue(e, c) : c;
}
function Ws(e, t, s) {
  const n = /* @__PURE__ */ G(e);
  he(n, "iterate", Qt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ Ls(s[0]) ? (s[0] = /* @__PURE__ */ G(s[0]), n[t](...s)) : r;
}
function $t(e, t, s = []) {
  Ve(), _n();
  const n = (/* @__PURE__ */ G(e))[t].apply(e, s);
  return bn(), He(), n;
}
const oo = /* @__PURE__ */ pn("__proto__,__v_isRef,__isVue"), Vr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ie)
);
function lo(e) {
  Ie(e) || (e = String(e));
  const t = /* @__PURE__ */ G(this);
  return he(t, "has", e), t.hasOwnProperty(e);
}
class Hr {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (r ? i ? yo : Gr : i ? Jr : Wr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = k(t);
    if (!r) {
      let c;
      if (o && (c = ro[s]))
        return c;
      if (s === "hasOwnProperty")
        return lo;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ re(t) ? t : n
    );
    if ((Ie(s) ? Vr.has(s) : oo(s)) || (r || he(t, "get", s), i))
      return l;
    if (/* @__PURE__ */ re(l)) {
      const c = o && Ts(s) ? l : l.value;
      return r && X(c) ? /* @__PURE__ */ rn(c) : c;
    }
    return X(l) ? r ? /* @__PURE__ */ rn(l) : /* @__PURE__ */ As(l) : l;
  }
}
class Br extends Hr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const o = k(t) && Ts(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Ze(i);
      if (!/* @__PURE__ */ we(n) && !/* @__PURE__ */ Ze(n) && (i = /* @__PURE__ */ G(i), n = /* @__PURE__ */ G(n)), !o && /* @__PURE__ */ re(i) && !/* @__PURE__ */ re(n))
        return d || (i.value = n), !0;
    }
    const l = o ? Number(s) < t.length : Y(t, s), c = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ re(t) ? t : r
    );
    return t === /* @__PURE__ */ G(r) && c && (l ? Ne(n, i) && Ye(t, "set", s, n) : Ye(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = Y(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ye(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ie(s) || !Vr.has(s)) && he(t, "has", s), n;
  }
  ownKeys(t) {
    return he(
      t,
      "iterate",
      k(t) ? "length" : dt
    ), Reflect.ownKeys(t);
  }
}
class co extends Hr {
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
const ao = /* @__PURE__ */ new Br(), uo = /* @__PURE__ */ new co(), fo = /* @__PURE__ */ new Br(!0);
const nn = (e) => e, us = (e) => Reflect.getPrototypeOf(e);
function ho(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ G(r), o = xt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, d = r[e](...n), u = s ? nn : t ? Et : Re;
    return !t && he(
      i,
      "iterate",
      c ? sn : dt
    ), de(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: b } = d.next();
          return b ? { value: h, done: b } : {
            value: l ? [u(h[0]), u(h[1])] : u(h),
            done: b
          };
        }
      }
    );
  };
}
function fs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function po(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ G(i), l = /* @__PURE__ */ G(r);
      e || (Ne(r, l) && he(o, "get", r), he(o, "get", l));
      const { has: c } = us(o), d = t ? nn : e ? Et : Re;
      if (c.call(o, r))
        return d(i.get(r));
      if (c.call(o, l))
        return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && he(/* @__PURE__ */ G(r), "iterate", dt), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ G(i), l = /* @__PURE__ */ G(r);
      return e || (Ne(r, l) && he(o, "has", r), he(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ G(l), d = t ? nn : e ? Et : Re;
      return !e && he(c, "iterate", dt), l.forEach((u, h) => r.call(i, d(u), d(h), o));
    }
  };
  return de(
    s,
    e ? {
      add: fs("add"),
      set: fs("set"),
      delete: fs("delete"),
      clear: fs("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ G(this), o = us(i), l = /* @__PURE__ */ G(r), c = !t && !/* @__PURE__ */ we(r) && !/* @__PURE__ */ Ze(r) ? l : r;
        return o.has.call(i, c) || Ne(r, c) && o.has.call(i, r) || Ne(l, c) && o.has.call(i, l) || (i.add(c), Ye(i, "add", c, c)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ we(i) && !/* @__PURE__ */ Ze(i) && (i = /* @__PURE__ */ G(i));
        const o = /* @__PURE__ */ G(this), { has: l, get: c } = us(o);
        let d = l.call(o, r);
        d || (r = /* @__PURE__ */ G(r), d = l.call(o, r));
        const u = c.call(o, r);
        return o.set(r, i), d ? Ne(i, u) && Ye(o, "set", r, i) : Ye(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ G(this), { has: o, get: l } = us(i);
        let c = o.call(i, r);
        c || (r = /* @__PURE__ */ G(r), c = o.call(i, r)), l && l.call(i, r);
        const d = i.delete(r);
        return c && Ye(i, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ G(this), i = r.size !== 0, o = r.clear();
        return i && Ye(
          r,
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
  ].forEach((r) => {
    s[r] = ho(r, e, t);
  }), s;
}
function Sn(e, t) {
  const s = po(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    Y(s, r) && r in n ? s : n,
    r,
    i
  );
}
const go = {
  get: /* @__PURE__ */ Sn(!1, !1)
}, mo = {
  get: /* @__PURE__ */ Sn(!1, !0)
}, vo = {
  get: /* @__PURE__ */ Sn(!0, !1)
};
const Wr = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap();
function _o(e) {
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
function As(e) {
  return /* @__PURE__ */ Ze(e) ? e : Cn(
    e,
    !1,
    ao,
    go,
    Wr
  );
}
// @__NO_SIDE_EFFECTS__
function bo(e) {
  return Cn(
    e,
    !1,
    fo,
    mo,
    Jr
  );
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
  return Cn(
    e,
    !0,
    uo,
    vo,
    Gr
  );
}
function Cn(e, t, s, n, r) {
  if (!X(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = _o(Bi(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? n : s
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  return /* @__PURE__ */ Ze(e) ? /* @__PURE__ */ Xe(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function G(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ G(t) : e;
}
function In(e) {
  return !Y(e, "__v_skip") && Object.isExtensible(e) && Tr(e, "__v_skip", !0), e;
}
const Re = (e) => X(e) ? /* @__PURE__ */ As(e) : e, Et = (e) => X(e) ? /* @__PURE__ */ rn(e) : e;
// @__NO_SIDE_EFFECTS__
function re(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  return xo(e, !1);
}
function xo(e, t) {
  return /* @__PURE__ */ re(e) ? e : new wo(e, t);
}
class wo {
  constructor(t, s) {
    this.dep = new wn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ G(t), this._value = s ? t : Re(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ we(t) || /* @__PURE__ */ Ze(t);
    t = n ? t : /* @__PURE__ */ G(t), Ne(t, s) && (this._rawValue = t, this._value = n ? t : Re(t), this.dep.trigger());
  }
}
function H(e) {
  return /* @__PURE__ */ re(e) ? e.value : e;
}
const So = {
  get: (e, t, s) => t === "__v_raw" ? e : H(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return /* @__PURE__ */ re(r) && !/* @__PURE__ */ re(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Yr(e) {
  return /* @__PURE__ */ Xe(e) ? e : new Proxy(e, So);
}
// @__NO_SIDE_EFFECTS__
function Co(e) {
  const t = k(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = Eo(e, s);
  return t;
}
class Io {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Ie(s) ? s : String(s), this._raw = /* @__PURE__ */ G(t);
    let r = !0, i = t;
    if (!k(t) || Ie(this._key) || !Ts(this._key))
      do
        r = !/* @__PURE__ */ Ls(i) || /* @__PURE__ */ we(i);
      while (r && (i = i.__v_raw));
    this._shallow = r;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = H(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ re(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ re(s)) {
        s.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return no(this._raw, this._key);
  }
}
function Eo(e, t, s) {
  return new Io(e, t, s);
}
class To {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new wn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Zt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ee !== this)
      return kr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Nr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ro(e, t, s = !1) {
  let n, r;
  return F(e) ? n = e : (n = e.get, r = e.set), new To(n, r, s);
}
const ds = {}, ys = /* @__PURE__ */ new WeakMap();
let ft;
function Po(e, t = !1, s = ft) {
  if (s) {
    let n = ys.get(s);
    n || ys.set(s, n = []), n.push(e);
  }
}
function Mo(e, t, s = Z) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = s, d = (_) => r ? _ : /* @__PURE__ */ we(_) || r === !1 || r === 0 ? qe(_, 1) : qe(_);
  let u, h, b, x, I = !1, w = !1;
  if (/* @__PURE__ */ re(e) ? (h = () => e.value, I = /* @__PURE__ */ we(e)) : /* @__PURE__ */ Xe(e) ? (h = () => d(e), I = !0) : k(e) ? (w = !0, I = e.some((_) => /* @__PURE__ */ Xe(_) || /* @__PURE__ */ we(_)), h = () => e.map((_) => {
    if (/* @__PURE__ */ re(_))
      return _.value;
    if (/* @__PURE__ */ Xe(_))
      return d(_);
    if (F(_))
      return c ? c(_, 2) : _();
  })) : F(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (b) {
      Ve();
      try {
        b();
      } finally {
        He();
      }
    }
    const _ = ft;
    ft = u;
    try {
      return c ? c(e, 3, [x]) : e(x);
    } finally {
      ft = _;
    }
  } : h = je, t && r) {
    const _ = h, N = r === !0 ? 1 / 0 : r;
    h = () => qe(_(), N);
  }
  const A = Or(), O = () => {
    u.stop(), A && A.active && gn(A.effects, u);
  };
  if (i && t) {
    const _ = t;
    t = (...N) => {
      const ae = _(...N);
      return O(), ae;
    };
  }
  let P = w ? new Array(e.length).fill(ds) : ds;
  const M = (_) => {
    if (!(!(u.flags & 1) || !u.dirty && !_))
      if (t) {
        const N = u.run();
        if (_ || r || I || (w ? N.some((ae, oe) => Ne(ae, P[oe])) : Ne(N, P))) {
          b && b();
          const ae = ft;
          ft = u;
          try {
            const oe = [
              N,
              // pass undefined as the old value when it's changed for the first time
              P === ds ? void 0 : w && P[0] === ds ? [] : P,
              x
            ];
            P = N, c ? c(t, 3, oe) : (
              // @ts-expect-error
              t(...oe)
            );
          } finally {
            ft = ae;
          }
        }
      } else
        u.run();
  };
  return l && l(M), u = new $r(h), u.scheduler = o ? () => o(M, !1) : M, x = (_) => Po(_, !1, u), b = u.onStop = () => {
    const _ = ys.get(u);
    if (_) {
      if (c)
        c(_, 4);
      else
        for (const N of _) N();
      ys.delete(u);
    }
  }, t ? n ? M(!0) : P = u.run() : o ? o(M.bind(null, !0), !0) : u.run(), O.pause = u.pause.bind(u), O.resume = u.resume.bind(u), O.stop = O, O;
}
function qe(e, t = 1 / 0, s) {
  if (t <= 0 || !X(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ re(e))
    qe(e.value, t, s);
  else if (k(e))
    for (let n = 0; n < e.length; n++)
      qe(e[n], t, s);
  else if (wr(e) || xt(e))
    e.forEach((n) => {
      qe(n, t, s);
    });
  else if (Ir(e)) {
    for (const n in e)
      qe(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && qe(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function rs(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    Os(r, t, s);
  }
}
function Pe(e, t, s, n) {
  if (F(e)) {
    const r = rs(e, t, s, n);
    return r && Sr(r) && r.catch((i) => {
      Os(i, t, s);
    }), r;
  }
  if (k(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Pe(e[i], t, s, n));
    return r;
  }
}
function Os(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Z;
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
    if (i) {
      Ve(), rs(i, null, 10, [
        e,
        c,
        d
      ]), He();
      return;
    }
  }
  Ao(e, s, r, n, o);
}
function Ao(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const me = [];
let ke = -1;
const wt = [];
let st = null, vt = 0;
const qr = /* @__PURE__ */ Promise.resolve();
let _s = null;
function Xr(e) {
  const t = _s || qr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Lo(e) {
  let t = ke + 1, s = me.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = me[n], i = es(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function En(e) {
  if (!(e.flags & 1)) {
    const t = es(e), s = me[me.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= es(s) ? me.push(e) : me.splice(Lo(t), 0, e), e.flags |= 1, zr();
  }
}
function zr() {
  _s || (_s = qr.then(Qr));
}
function Oo(e) {
  k(e) ? wt.push(...e) : st && e.id === -1 ? st.splice(vt + 1, 0, e) : e.flags & 1 || (wt.push(e), e.flags |= 1), zr();
}
function Nn(e, t, s = ke + 1) {
  for (; s < me.length; s++) {
    const n = me[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      me.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Zr(e) {
  if (wt.length) {
    const t = [...new Set(wt)].sort(
      (s, n) => es(s) - es(n)
    );
    if (wt.length = 0, st) {
      st.push(...t);
      return;
    }
    for (st = t, vt = 0; vt < st.length; vt++) {
      const s = st[vt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    st = null, vt = 0;
  }
}
const es = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qr(e) {
  try {
    for (ke = 0; ke < me.length; ke++) {
      const t = me[ke];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), rs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ke < me.length; ke++) {
      const t = me[ke];
      t && (t.flags &= -2);
    }
    ke = -1, me.length = 0, Zr(), _s = null, (me.length || wt.length) && Qr();
  }
}
let Ce = null, ei = null;
function bs(e) {
  const t = Ce;
  return Ce = e, ei = e && e.type.__scopeId || null, t;
}
function $o(e, t = Ce, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && Xn(-1);
    const i = bs(t);
    let o;
    try {
      o = e(...r);
    } finally {
      bs(i), n._d && Xn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function kt(e, t) {
  if (Ce === null)
    return e;
  const s = Us(Ce), n = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = Z] = t[r];
    i && (F(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && qe(o), n.push({
      dir: i,
      instance: s,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function at(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[n];
    c && (Ve(), Pe(c, s, 8, [
      e.el,
      l,
      e,
      t
    ]), He());
  }
}
function Do(e, t) {
  if (ve) {
    let s = ve.provides;
    const n = ve.parent && ve.parent.provides;
    n === s && (s = ve.provides = Object.create(n)), s[e] = t;
  }
}
function Ht(e, t, s = !1) {
  const n = Pi();
  if (n || ht) {
    let r = ht ? ht._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && F(t) ? t.call(n && n.proxy) : t;
  }
}
function ko() {
  return !!(Pi() || ht);
}
const Uo = /* @__PURE__ */ Symbol.for("v-scx"), Fo = () => Ht(Uo);
function Bt(e, t, s) {
  return ti(e, t, s);
}
function ti(e, t, s = Z) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = de({}, s), c = t && n || !t && i !== "post";
  let d;
  if (ss) {
    if (i === "sync") {
      const x = Fo();
      d = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!c) {
      const x = () => {
      };
      return x.stop = je, x.resume = je, x.pause = je, x;
    }
  }
  const u = ve;
  l.call = (x, I, w) => Pe(x, u, I, w);
  let h = !1;
  i === "post" ? l.scheduler = (x) => {
    ye(x, u && u.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (x, I) => {
    I ? x() : En(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), h && (x.flags |= 2, u && (x.id = u.uid, x.i = u));
  };
  const b = Mo(e, t, l);
  return ss && (d ? d.push(b) : c && b()), b;
}
function No(e, t, s) {
  const n = this.proxy, r = ne(e) ? e.includes(".") ? si(n, e) : () => n[e] : e.bind(n, n);
  let i;
  F(t) ? i = t : (i = t.handler, s = t);
  const o = is(this), l = ti(r, i.bind(n), s);
  return o(), l;
}
function si(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const jo = /* @__PURE__ */ Symbol("_vte"), Ko = (e) => e.__isTeleport, Js = /* @__PURE__ */ Symbol("_leaveCb");
function Tn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Tn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Rt(e, t) {
  return F(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    de({ name: e.name }, t, { setup: e })
  ) : e;
}
function ni(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function jn(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const xs = /* @__PURE__ */ new WeakMap();
function Wt(e, t, s, n, r = !1) {
  if (k(e)) {
    e.forEach(
      (w, A) => Wt(
        w,
        t && (k(t) ? t[A] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (Jt(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Wt(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Us(n.component) : n.el, o = r ? null : i, { i: l, r: c } = e, d = t && t.r, u = l.refs === Z ? l.refs = {} : l.refs, h = l.setupState, b = /* @__PURE__ */ G(h), x = h === Z ? xr : (w) => jn(u, w) ? !1 : Y(b, w), I = (w, A) => !(A && jn(u, A));
  if (d != null && d !== c) {
    if (Kn(t), ne(d))
      u[d] = null, x(d) && (h[d] = null);
    else if (/* @__PURE__ */ re(d)) {
      const w = t;
      I(d, w.k) && (d.value = null), w.k && (u[w.k] = null);
    }
  }
  if (F(c)) {
    Ve();
    try {
      rs(c, l, 12, [o, u]);
    } finally {
      He();
    }
  } else {
    const w = ne(c), A = /* @__PURE__ */ re(c);
    if (w || A) {
      const O = () => {
        if (e.f) {
          const P = w ? x(c) ? h[c] : u[c] : I() || !e.k ? c.value : u[e.k];
          if (r)
            k(P) && gn(P, i);
          else if (k(P))
            P.includes(i) || P.push(i);
          else if (w)
            u[c] = [i], x(c) && (h[c] = u[c]);
          else {
            const M = [i];
            I(c, e.k) && (c.value = M), e.k && (u[e.k] = M);
          }
        } else w ? (u[c] = o, x(c) && (h[c] = o)) : A && (I(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const P = () => {
          O(), xs.delete(e);
        };
        P.id = -1, xs.set(e, P), ye(P, s);
      } else
        Kn(e), O();
    }
  }
}
function Kn(e) {
  const t = xs.get(e);
  t && (t.flags |= 8, xs.delete(e));
}
Ps().requestIdleCallback;
Ps().cancelIdleCallback;
const Jt = (e) => !!e.type.__asyncLoader, ri = (e) => e.type.__isKeepAlive;
function Vo(e, t) {
  ii(e, "a", t);
}
function Ho(e, t) {
  ii(e, "da", t);
}
function ii(e, t, s = ve) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if ($s(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      ri(r.parent.vnode) && Bo(n, t, s, r), r = r.parent;
  }
}
function Bo(e, t, s, n) {
  const r = $s(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ci(() => {
    gn(n[t], r);
  }, s);
}
function $s(e, t, s = ve, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ve();
      const l = is(s), c = Pe(t, s, e, o);
      return l(), He(), c;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Qe = (e) => (t, s = ve) => {
  (!ss || e === "sp") && $s(e, (...n) => t(...n), s);
}, Wo = Qe("bm"), oi = Qe("m"), Jo = Qe(
  "bu"
), Go = Qe("u"), li = Qe(
  "bum"
), ci = Qe("um"), Yo = Qe(
  "sp"
), qo = Qe("rtg"), Xo = Qe("rtc");
function zo(e, t = ve) {
  $s("ec", e, t);
}
const Zo = /* @__PURE__ */ Symbol.for("v-ndc");
function St(e, t, s, n) {
  let r;
  const i = s, o = k(e);
  if (o || ne(e)) {
    const l = o && /* @__PURE__ */ Xe(e);
    let c = !1, d = !1;
    l && (c = !/* @__PURE__ */ we(e), d = /* @__PURE__ */ Ze(e), e = Ms(e)), r = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      r[u] = t(
        c ? d ? Et(Re(e[u])) : Re(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (X(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, d = l.length; c < d; c++) {
        const u = l[c];
        r[c] = t(e[u], u, c, i);
      }
    }
  else
    r = [];
  return r;
}
const on = (e) => e ? Mi(e) ? Us(e) : on(e.parent) : null, Gt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ de(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => on(e.parent),
    $root: (e) => on(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ui(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      En(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Xr.bind(e.proxy)),
    $watch: (e) => No.bind(e)
  })
), Gs = (e, t) => e !== Z && !e.__isScriptSetup && Y(e, t), Qo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const b = o[t];
      if (b !== void 0)
        switch (b) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return i[t];
        }
      else {
        if (Gs(n, t))
          return o[t] = 1, n[t];
        if (r !== Z && Y(r, t))
          return o[t] = 2, r[t];
        if (Y(i, t))
          return o[t] = 3, i[t];
        if (s !== Z && Y(s, t))
          return o[t] = 4, s[t];
        ln && (o[t] = 0);
      }
    }
    const d = Gt[t];
    let u, h;
    if (d)
      return t === "$attrs" && he(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (s !== Z && Y(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = c.config.globalProperties, Y(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return Gs(r, t) ? (r[t] = s, !0) : n !== Z && Y(n, t) ? (n[t] = s, !0) : Y(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: o }
  }, l) {
    let c;
    return !!(s[l] || e !== Z && l[0] !== "$" && Y(e, l) || Gs(t, l) || Y(i, l) || Y(n, l) || Y(Gt, l) || Y(r.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : Y(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Vn(e) {
  return k(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let ln = !0;
function el(e) {
  const t = ui(e), s = e.proxy, n = e.ctx;
  ln = !1, t.beforeCreate && Hn(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: h,
    mounted: b,
    beforeUpdate: x,
    updated: I,
    activated: w,
    deactivated: A,
    beforeDestroy: O,
    beforeUnmount: P,
    destroyed: M,
    unmounted: _,
    render: N,
    renderTracked: ae,
    renderTriggered: oe,
    errorCaptured: K,
    serverPrefetch: B,
    // public API
    expose: se,
    inheritAttrs: Se,
    // assets
    components: Me,
    directives: et,
    filters: Mt
  } = t;
  if (d && tl(d, n, null), o)
    for (const V in o) {
      const Q = o[V];
      F(Q) && (n[V] = Q.bind(s));
    }
  if (r) {
    const V = r.call(s, s);
    X(V) && (e.data = /* @__PURE__ */ As(V));
  }
  if (ln = !0, i)
    for (const V in i) {
      const Q = i[V], lt = F(Q) ? Q.bind(s, s) : F(Q.get) ? Q.get.bind(s, s) : je, cs = !F(Q) && F(Q.set) ? Q.set.bind(s) : je, ct = nt({
        get: lt,
        set: cs
      });
      Object.defineProperty(n, V, {
        enumerable: !0,
        configurable: !0,
        get: () => ct.value,
        set: (Ae) => ct.value = Ae
      });
    }
  if (l)
    for (const V in l)
      ai(l[V], n, s, V);
  if (c) {
    const V = F(c) ? c.call(s) : c;
    Reflect.ownKeys(V).forEach((Q) => {
      Do(Q, V[Q]);
    });
  }
  u && Hn(u, e, "c");
  function ie(V, Q) {
    k(Q) ? Q.forEach((lt) => V(lt.bind(s))) : Q && V(Q.bind(s));
  }
  if (ie(Wo, h), ie(oi, b), ie(Jo, x), ie(Go, I), ie(Vo, w), ie(Ho, A), ie(zo, K), ie(Xo, ae), ie(qo, oe), ie(li, P), ie(ci, _), ie(Yo, B), k(se))
    if (se.length) {
      const V = e.exposed || (e.exposed = {});
      se.forEach((Q) => {
        Object.defineProperty(V, Q, {
          get: () => s[Q],
          set: (lt) => s[Q] = lt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === je && (e.render = N), Se != null && (e.inheritAttrs = Se), Me && (e.components = Me), et && (e.directives = et), B && ni(e);
}
function tl(e, t, s = je) {
  k(e) && (e = cn(e));
  for (const n in e) {
    const r = e[n];
    let i;
    X(r) ? "default" in r ? i = Ht(
      r.from || n,
      r.default,
      !0
    ) : i = Ht(r.from || n) : i = Ht(r), /* @__PURE__ */ re(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function Hn(e, t, s) {
  Pe(
    k(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function ai(e, t, s, n) {
  let r = n.includes(".") ? si(s, n) : () => s[n];
  if (ne(e)) {
    const i = t[e];
    F(i) && Bt(r, i);
  } else if (F(e))
    Bt(r, e.bind(s));
  else if (X(e))
    if (k(e))
      e.forEach((i) => ai(i, t, s, n));
    else {
      const i = F(e.handler) ? e.handler.bind(s) : t[e.handler];
      F(i) && Bt(r, i, e);
    }
}
function ui(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !r.length && !s && !n ? c = t : (c = {}, r.length && r.forEach(
    (d) => ws(c, d, o, !0)
  ), ws(c, t, o)), X(t) && i.set(t, c), c;
}
function ws(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && ws(e, i, s, !0), r && r.forEach(
    (o) => ws(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = sl[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const sl = {
  data: Bn,
  props: Wn,
  emits: Wn,
  // objects
  methods: Ut,
  computed: Ut,
  // lifecycle
  beforeCreate: pe,
  created: pe,
  beforeMount: pe,
  mounted: pe,
  beforeUpdate: pe,
  updated: pe,
  beforeDestroy: pe,
  beforeUnmount: pe,
  destroyed: pe,
  unmounted: pe,
  activated: pe,
  deactivated: pe,
  errorCaptured: pe,
  serverPrefetch: pe,
  // assets
  components: Ut,
  directives: Ut,
  // watch
  watch: rl,
  // provide / inject
  provide: Bn,
  inject: nl
};
function Bn(e, t) {
  return t ? e ? function() {
    return de(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function nl(e, t) {
  return Ut(cn(e), cn(t));
}
function cn(e) {
  if (k(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function pe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ut(e, t) {
  return e ? de(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Wn(e, t) {
  return e ? k(e) && k(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : de(
    /* @__PURE__ */ Object.create(null),
    Vn(e),
    Vn(t ?? {})
  ) : t;
}
function rl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = de(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = pe(e[n], t[n]);
  return s;
}
function fi() {
  return {
    app: null,
    config: {
      isNativeTag: xr,
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
let il = 0;
function ol(e, t) {
  return function(n, r = null) {
    F(n) || (n = de({}, n)), r != null && !X(r) && (r = null);
    const i = fi(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const d = i.app = {
      _uid: il++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Fl,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return o.has(u) || (u && F(u.install) ? (o.add(u), u.install(d, ...h)) : F(u) && (o.add(u), u(d, ...h))), d;
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), d;
      },
      component(u, h) {
        return h ? (i.components[u] = h, d) : i.components[u];
      },
      directive(u, h) {
        return h ? (i.directives[u] = h, d) : i.directives[u];
      },
      mount(u, h, b) {
        if (!c) {
          const x = d._ceVNode || ze(n, r);
          return x.appContext = i, b === !0 ? b = "svg" : b === !1 && (b = void 0), e(x, u, b), c = !0, d._container = u, u.__vue_app__ = d, Us(x.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (Pe(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return i.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = ht;
        ht = d;
        try {
          return u();
        } finally {
          ht = h;
        }
      }
    };
    return d;
  };
}
let ht = null;
const ll = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ee(t)}Modifiers`] || e[`${ot(t)}Modifiers`];
function cl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Z;
  let r = s;
  const i = t.startsWith("update:"), o = i && ll(n, t.slice(7));
  o && (o.trim && (r = s.map((u) => ne(u) ? u.trim() : u)), o.number && (r = s.map(mn)));
  let l, c = n[l = Ks(t)] || // also try camelCase event handler (#2249)
  n[l = Ks(Ee(t))];
  !c && i && (c = n[l = Ks(ot(t))]), c && Pe(
    c,
    e,
    6,
    r
  );
  const d = n[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Pe(
      d,
      e,
      6,
      r
    );
  }
}
const al = /* @__PURE__ */ new WeakMap();
function di(e, t, s = !1) {
  const n = s ? al : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!F(e)) {
    const c = (d) => {
      const u = di(d, t, !0);
      u && (l = !0, de(o, u));
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (X(e) && n.set(e, null), null) : (k(i) ? i.forEach((c) => o[c] = null) : de(o, i), X(e) && n.set(e, o), o);
}
function Ds(e, t) {
  return !e || !Is(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, ot(t)) || Y(e, t));
}
function Jn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: c,
    render: d,
    renderCache: u,
    props: h,
    data: b,
    setupState: x,
    ctx: I,
    inheritAttrs: w
  } = e, A = bs(e);
  let O, P;
  try {
    if (s.shapeFlag & 4) {
      const _ = r || n, N = _;
      O = Fe(
        d.call(
          N,
          _,
          u,
          h,
          x,
          b,
          I
        )
      ), P = l;
    } else {
      const _ = t;
      O = Fe(
        _.length > 1 ? _(
          h,
          { attrs: l, slots: o, emit: c }
        ) : _(
          h,
          null
        )
      ), P = t.props ? l : ul(l);
    }
  } catch (_) {
    Yt.length = 0, Os(_, e, 1), O = ze(it);
  }
  let M = O;
  if (P && w !== !1) {
    const _ = Object.keys(P), { shapeFlag: N } = M;
    _.length && N & 7 && (i && _.some(Es) && (P = fl(
      P,
      i
    )), M = Tt(M, P, !1, !0));
  }
  return s.dirs && (M = Tt(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(s.dirs) : s.dirs), s.transition && Tn(M, s.transition), O = M, bs(A), O;
}
const ul = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Is(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, fl = (e, t) => {
  const s = {};
  for (const n in e)
    (!Es(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function dl(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: l, patchFlag: c } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? Gn(n, o, d) : !!o;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const b = u[h];
        if (hi(o, n, b) && !Ds(d, b))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? Gn(n, o, d) : !0 : !!o;
  return !1;
}
function Gn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (hi(t, e, i) && !Ds(s, i))
      return !0;
  }
  return !1;
}
function hi(e, t, s) {
  const n = e[s], r = t[s];
  return s === "style" && X(n) && X(r) ? !yn(n, r) : n !== r;
}
function hl({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = n, e = r), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const pi = {}, gi = () => Object.create(pi), mi = (e) => Object.getPrototypeOf(e) === pi;
function pl(e, t, s, n = !1) {
  const r = {}, i = gi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), vi(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : /* @__PURE__ */ bo(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function gl(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ G(r), [c] = e.propsOptions;
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
        let b = u[h];
        if (Ds(e.emitsOptions, b))
          continue;
        const x = t[b];
        if (c)
          if (Y(i, b))
            x !== i[b] && (i[b] = x, d = !0);
          else {
            const I = Ee(b);
            r[I] = an(
              c,
              l,
              I,
              x,
              e,
              !1
            );
          }
        else
          x !== i[b] && (i[b] = x, d = !0);
      }
    }
  } else {
    vi(e, t, r, i) && (d = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !Y(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ot(h)) === h || !Y(t, u))) && (c ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[u] !== void 0) && (r[h] = an(
        c,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete r[h]);
    if (i !== l)
      for (const h in i)
        (!t || !Y(t, h)) && (delete i[h], d = !0);
  }
  d && Ye(e.attrs, "set", "");
}
function vi(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (jt(c))
        continue;
      const d = t[c];
      let u;
      r && Y(r, u = Ee(c)) ? !i || !i.includes(u) ? s[u] = d : (l || (l = {}))[u] = d : Ds(e.emitsOptions, c) || (!(c in n) || d !== n[c]) && (n[c] = d, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ G(s), d = l || Z;
    for (let u = 0; u < i.length; u++) {
      const h = i[u];
      s[h] = an(
        r,
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
function an(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const l = Y(o, "default");
    if (l && n === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && F(c)) {
        const { propsDefaults: d } = r;
        if (s in d)
          n = d[s];
        else {
          const u = is(r);
          n = d[s] = c.call(
            null,
            t
          ), u();
        }
      } else
        n = c;
      r.ce && r.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === ot(s)) && (n = !0));
  }
  return n;
}
const ml = /* @__PURE__ */ new WeakMap();
function yi(e, t, s = !1) {
  const n = s ? ml : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let c = !1;
  if (!F(e)) {
    const u = (h) => {
      c = !0;
      const [b, x] = yi(h, t, !0);
      de(o, b), x && l.push(...x);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !c)
    return X(e) && n.set(e, bt), bt;
  if (k(i))
    for (let u = 0; u < i.length; u++) {
      const h = Ee(i[u]);
      Yn(h) && (o[h] = Z);
    }
  else if (i)
    for (const u in i) {
      const h = Ee(u);
      if (Yn(h)) {
        const b = i[u], x = o[h] = k(b) || F(b) ? { type: b } : de({}, b), I = x.type;
        let w = !1, A = !0;
        if (k(I))
          for (let O = 0; O < I.length; ++O) {
            const P = I[O], M = F(P) && P.name;
            if (M === "Boolean") {
              w = !0;
              break;
            } else M === "String" && (A = !1);
          }
        else
          w = F(I) && I.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = w, x[
          1
          /* shouldCastTrue */
        ] = A, (w || Y(x, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return X(e) && n.set(e, d), d;
}
function Yn(e) {
  return e[0] !== "$" && !jt(e);
}
const Rn = (e) => e === "_" || e === "_ctx" || e === "$stable", Pn = (e) => k(e) ? e.map(Fe) : [Fe(e)], vl = (e, t, s) => {
  if (t._n)
    return t;
  const n = $o((...r) => Pn(t(...r)), s);
  return n._c = !1, n;
}, _i = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (Rn(r)) continue;
    const i = e[r];
    if (F(i))
      t[r] = vl(r, i, n);
    else if (i != null) {
      const o = Pn(i);
      t[r] = () => o;
    }
  }
}, bi = (e, t) => {
  const s = Pn(t);
  e.slots.default = () => s;
}, xi = (e, t, s) => {
  for (const n in t)
    (s || !Rn(n)) && (e[n] = t[n]);
}, yl = (e, t, s) => {
  const n = e.slots = gi();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (xi(n, t, s), s && Tr(n, "_", r, !0)) : _i(t, n);
  } else t && bi(e, t);
}, _l = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = Z;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : xi(r, t, s) : (i = !t.$stable, _i(t, r)), o = t;
  } else t && (bi(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Rn(l) && o[l] == null && delete r[l];
}, ye = Cl;
function bl(e) {
  return xl(e);
}
function xl(e, t) {
  const s = Ps();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: d,
    setElementText: u,
    parentNode: h,
    nextSibling: b,
    setScopeId: x = je,
    insertStaticContent: I
  } = e, w = (a, f, p, y = null, v = null, g = null, E = void 0, C = null, S = !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !Dt(a, f) && (y = as(a), Ae(a, v, g, !0), a = null), f.patchFlag === -2 && (S = !1, f.dynamicChildren = null);
    const { type: m, ref: D, shapeFlag: R } = f;
    switch (m) {
      case ks:
        A(a, f, p, y);
        break;
      case it:
        O(a, f, p, y);
        break;
      case qs:
        a == null && P(f, p, y, E);
        break;
      case fe:
        Me(
          a,
          f,
          p,
          y,
          v,
          g,
          E,
          C,
          S
        );
        break;
      default:
        R & 1 ? N(
          a,
          f,
          p,
          y,
          v,
          g,
          E,
          C,
          S
        ) : R & 6 ? et(
          a,
          f,
          p,
          y,
          v,
          g,
          E,
          C,
          S
        ) : (R & 64 || R & 128) && m.process(
          a,
          f,
          p,
          y,
          v,
          g,
          E,
          C,
          S,
          Lt
        );
    }
    D != null && v ? Wt(D, a && a.ref, g, f || a, !f) : D == null && a && a.ref != null && Wt(a.ref, null, g, a, !0);
  }, A = (a, f, p, y) => {
    if (a == null)
      n(
        f.el = l(f.children),
        p,
        y
      );
    else {
      const v = f.el = a.el;
      f.children !== a.children && d(v, f.children);
    }
  }, O = (a, f, p, y) => {
    a == null ? n(
      f.el = c(f.children || ""),
      p,
      y
    ) : f.el = a.el;
  }, P = (a, f, p, y) => {
    [a.el, a.anchor] = I(
      a.children,
      f,
      p,
      y,
      a.el,
      a.anchor
    );
  }, M = ({ el: a, anchor: f }, p, y) => {
    let v;
    for (; a && a !== f; )
      v = b(a), n(a, p, y), a = v;
    n(f, p, y);
  }, _ = ({ el: a, anchor: f }) => {
    let p;
    for (; a && a !== f; )
      p = b(a), r(a), a = p;
    r(f);
  }, N = (a, f, p, y, v, g, E, C, S) => {
    if (f.type === "svg" ? E = "svg" : f.type === "math" && (E = "mathml"), a == null)
      ae(
        f,
        p,
        y,
        v,
        g,
        E,
        C,
        S
      );
    else {
      const m = a.el && a.el._isVueCE ? a.el : null;
      try {
        m && m._beginPatch(), B(
          a,
          f,
          v,
          g,
          E,
          C,
          S
        );
      } finally {
        m && m._endPatch();
      }
    }
  }, ae = (a, f, p, y, v, g, E, C) => {
    let S, m;
    const { props: D, shapeFlag: R, transition: L, dirs: U } = a;
    if (S = a.el = o(
      a.type,
      g,
      D && D.is,
      D
    ), R & 8 ? u(S, a.children) : R & 16 && K(
      a.children,
      S,
      null,
      y,
      v,
      Ys(a, g),
      E,
      C
    ), U && at(a, null, y, "created"), oe(S, a, a.scopeId, E, y), D) {
      for (const z in D)
        z !== "value" && !jt(z) && i(S, z, null, D[z], g, y);
      "value" in D && i(S, "value", null, D.value, g), (m = D.onVnodeBeforeMount) && De(m, y, a);
    }
    U && at(a, null, y, "beforeMount");
    const J = wl(v, L);
    J && L.beforeEnter(S), n(S, f, p), ((m = D && D.onVnodeMounted) || J || U) && ye(() => {
      try {
        m && De(m, y, a), J && L.enter(S), U && at(a, null, y, "mounted");
      } finally {
      }
    }, v);
  }, oe = (a, f, p, y, v) => {
    if (p && x(a, p), y)
      for (let g = 0; g < y.length; g++)
        x(a, y[g]);
    if (v) {
      let g = v.subTree;
      if (f === g || Ii(g.type) && (g.ssContent === f || g.ssFallback === f)) {
        const E = v.vnode;
        oe(
          a,
          E,
          E.scopeId,
          E.slotScopeIds,
          v.parent
        );
      }
    }
  }, K = (a, f, p, y, v, g, E, C, S = 0) => {
    for (let m = S; m < a.length; m++) {
      const D = a[m] = C ? Ge(a[m]) : Fe(a[m]);
      w(
        null,
        D,
        f,
        p,
        y,
        v,
        g,
        E,
        C
      );
    }
  }, B = (a, f, p, y, v, g, E) => {
    const C = f.el = a.el;
    let { patchFlag: S, dynamicChildren: m, dirs: D } = f;
    S |= a.patchFlag & 16;
    const R = a.props || Z, L = f.props || Z;
    let U;
    if (p && ut(p, !1), (U = L.onVnodeBeforeUpdate) && De(U, p, f, a), D && at(f, a, p, "beforeUpdate"), p && ut(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    m && (!a.dynamicChildren || a.dynamicChildren.length !== m.length) && (S = 0, E = !1, m = null), (R.innerHTML && L.innerHTML == null || R.textContent && L.textContent == null) && u(C, ""), m ? se(
      a.dynamicChildren,
      m,
      C,
      p,
      y,
      Ys(f, v),
      g
    ) : E || Q(
      a,
      f,
      C,
      null,
      p,
      y,
      Ys(f, v),
      g,
      !1
    ), S > 0) {
      if (S & 16)
        Se(C, R, L, p, v);
      else if (S & 2 && R.class !== L.class && i(C, "class", null, L.class, v), S & 4 && i(C, "style", R.style, L.style, v), S & 8) {
        const J = f.dynamicProps;
        for (let z = 0; z < J.length; z++) {
          const q = J[z], le = R[q], ue = L[q];
          (ue !== le || q === "value") && i(C, q, le, ue, v, p);
        }
      }
      S & 1 && a.children !== f.children && u(C, f.children);
    } else !E && m == null && Se(C, R, L, p, v);
    ((U = L.onVnodeUpdated) || D) && ye(() => {
      U && De(U, p, f, a), D && at(f, a, p, "updated");
    }, y);
  }, se = (a, f, p, y, v, g, E) => {
    for (let C = 0; C < f.length; C++) {
      const S = a[C], m = f[C], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === fe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Dt(S, m) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? h(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      w(
        S,
        m,
        D,
        null,
        y,
        v,
        g,
        E,
        !0
      );
    }
  }, Se = (a, f, p, y, v) => {
    if (f !== p) {
      if (f !== Z)
        for (const g in f)
          !jt(g) && !(g in p) && i(
            a,
            g,
            f[g],
            null,
            v,
            y
          );
      for (const g in p) {
        if (jt(g)) continue;
        const E = p[g], C = f[g];
        E !== C && g !== "value" && i(a, g, C, E, v, y);
      }
      "value" in p && i(a, "value", f.value, p.value, v);
    }
  }, Me = (a, f, p, y, v, g, E, C, S) => {
    const m = f.el = a ? a.el : l(""), D = f.anchor = a ? a.anchor : l("");
    let { patchFlag: R, dynamicChildren: L, slotScopeIds: U } = f;
    U && (C = C ? C.concat(U) : U), a == null ? (n(m, p, y), n(D, p, y), K(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      p,
      D,
      v,
      g,
      E,
      C,
      S
    )) : R > 0 && R & 64 && L && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === L.length ? (se(
      a.dynamicChildren,
      L,
      p,
      v,
      g,
      E,
      C
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || v && f === v.subTree) && wi(
      a,
      f,
      !0
      /* shallow */
    )) : Q(
      a,
      f,
      p,
      D,
      v,
      g,
      E,
      C,
      S
    );
  }, et = (a, f, p, y, v, g, E, C, S) => {
    f.slotScopeIds = C, a == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      p,
      y,
      E,
      S
    ) : Mt(
      f,
      p,
      y,
      v,
      g,
      E,
      S
    ) : ls(a, f, S);
  }, Mt = (a, f, p, y, v, g, E) => {
    const C = a.component = Ll(
      a,
      y,
      v
    );
    if (ri(a) && (C.ctx.renderer = Lt), Ol(C, !1, E), C.asyncDep) {
      if (v && v.registerDep(C, ie, E), !a.el) {
        const S = C.subTree = ze(it);
        O(null, S, f, p), a.placeholder = S.el;
      }
    } else
      ie(
        C,
        a,
        f,
        p,
        v,
        g,
        E
      );
  }, ls = (a, f, p) => {
    const y = f.component = a.component;
    if (dl(a, f, p))
      if (y.asyncDep && !y.asyncResolved) {
        V(y, f, p);
        return;
      } else
        y.next = f, y.update();
    else
      f.el = a.el, y.vnode = f;
  }, ie = (a, f, p, y, v, g, E) => {
    const C = () => {
      if (a.isMounted) {
        let { next: R, bu: L, u: U, parent: J, vnode: z } = a;
        {
          const Oe = Si(a);
          if (Oe) {
            R && (R.el = z.el, V(a, R, E)), Oe.asyncDep.then(() => {
              ye(() => {
                a.isUnmounted || m();
              }, v);
            });
            return;
          }
        }
        let q = R, le;
        ut(a, !1), R ? (R.el = z.el, V(a, R, E)) : R = z, L && gs(L), (le = R.props && R.props.onVnodeBeforeUpdate) && De(le, J, R, z), ut(a, !0);
        const ue = Jn(a), Le = a.subTree;
        a.subTree = ue, w(
          Le,
          ue,
          // parent may have changed if it's in a teleport
          h(Le.el),
          // anchor may have changed if it's in a fragment
          as(Le),
          a,
          v,
          g
        ), R.el = ue.el, q === null && hl(a, ue.el), U && ye(U, v), (le = R.props && R.props.onVnodeUpdated) && ye(
          () => De(le, J, R, z),
          v
        );
      } else {
        let R;
        const { el: L, props: U } = f, { bm: J, m: z, parent: q, root: le, type: ue } = a, Le = Jt(f);
        ut(a, !1), J && gs(J), !Le && (R = U && U.onVnodeBeforeMount) && De(R, q, f), ut(a, !0);
        {
          le.ce && le.ce._hasShadowRoot() && le.ce._injectChildStyle(
            ue,
            a.parent ? a.parent.type : void 0
          );
          const Oe = a.subTree = Jn(a);
          w(
            null,
            Oe,
            p,
            y,
            a,
            v,
            g
          ), f.el = Oe.el;
        }
        if (z && ye(z, v), !Le && (R = U && U.onVnodeMounted)) {
          const Oe = f;
          ye(
            () => De(R, q, Oe),
            v
          );
        }
        (f.shapeFlag & 256 || q && Jt(q.vnode) && q.vnode.shapeFlag & 256) && a.a && ye(a.a, v), a.isMounted = !0, f = p = y = null;
      }
    };
    a.scope.on();
    const S = a.effect = new $r(C);
    a.scope.off();
    const m = a.update = S.run.bind(S), D = a.job = S.runIfDirty.bind(S);
    D.i = a, D.id = a.uid, S.scheduler = () => En(D), ut(a, !0), m();
  }, V = (a, f, p) => {
    f.component = a;
    const y = a.vnode.props;
    a.vnode = f, a.next = null, gl(a, f.props, y, p), _l(a, f.children, p), Ve(), Nn(a), He();
  }, Q = (a, f, p, y, v, g, E, C, S = !1) => {
    const m = a && a.children, D = a ? a.shapeFlag : 0, R = f.children, { patchFlag: L, shapeFlag: U } = f;
    if (L > 0) {
      if (L & 128) {
        cs(
          m,
          R,
          p,
          y,
          v,
          g,
          E,
          C,
          S
        );
        return;
      } else if (L & 256) {
        lt(
          m,
          R,
          p,
          y,
          v,
          g,
          E,
          C,
          S
        );
        return;
      }
    }
    U & 8 ? (D & 16 && At(m, v, g), R !== m && u(p, R)) : D & 16 ? U & 16 ? cs(
      m,
      R,
      p,
      y,
      v,
      g,
      E,
      C,
      S
    ) : At(m, v, g, !0) : (D & 8 && u(p, ""), U & 16 && K(
      R,
      p,
      y,
      v,
      g,
      E,
      C,
      S
    ));
  }, lt = (a, f, p, y, v, g, E, C, S) => {
    a = a || bt, f = f || bt;
    const m = a.length, D = f.length, R = Math.min(m, D);
    let L;
    for (L = 0; L < R; L++) {
      const U = f[L] = S ? Ge(f[L]) : Fe(f[L]);
      w(
        a[L],
        U,
        p,
        null,
        v,
        g,
        E,
        C,
        S
      );
    }
    m > D ? At(
      a,
      v,
      g,
      !0,
      !1,
      R
    ) : K(
      f,
      p,
      y,
      v,
      g,
      E,
      C,
      S,
      R
    );
  }, cs = (a, f, p, y, v, g, E, C, S) => {
    let m = 0;
    const D = f.length;
    let R = a.length - 1, L = D - 1;
    for (; m <= R && m <= L; ) {
      const U = a[m], J = f[m] = S ? Ge(f[m]) : Fe(f[m]);
      if (Dt(U, J))
        w(
          U,
          J,
          p,
          null,
          v,
          g,
          E,
          C,
          S
        );
      else
        break;
      m++;
    }
    for (; m <= R && m <= L; ) {
      const U = a[R], J = f[L] = S ? Ge(f[L]) : Fe(f[L]);
      if (Dt(U, J))
        w(
          U,
          J,
          p,
          null,
          v,
          g,
          E,
          C,
          S
        );
      else
        break;
      R--, L--;
    }
    if (m > R) {
      if (m <= L) {
        const U = L + 1, J = U < D ? f[U].el : y;
        for (; m <= L; )
          w(
            null,
            f[m] = S ? Ge(f[m]) : Fe(f[m]),
            p,
            J,
            v,
            g,
            E,
            C,
            S
          ), m++;
      }
    } else if (m > L)
      for (; m <= R; )
        Ae(a[m], v, g, !0), m++;
    else {
      const U = m, J = m, z = /* @__PURE__ */ new Map();
      for (m = J; m <= L; m++) {
        const _e = f[m] = S ? Ge(f[m]) : Fe(f[m]);
        _e.key != null && z.set(_e.key, m);
      }
      let q, le = 0;
      const ue = L - J + 1;
      let Le = !1, Oe = 0;
      const Ot = new Array(ue);
      for (m = 0; m < ue; m++) Ot[m] = 0;
      for (m = U; m <= R; m++) {
        const _e = a[m];
        if (le >= ue) {
          Ae(_e, v, g, !0);
          continue;
        }
        let $e;
        if (_e.key != null)
          $e = z.get(_e.key);
        else
          for (q = J; q <= L; q++)
            if (Ot[q - J] === 0 && Dt(_e, f[q])) {
              $e = q;
              break;
            }
        $e === void 0 ? Ae(_e, v, g, !0) : (Ot[$e - J] = m + 1, $e >= Oe ? Oe = $e : Le = !0, w(
          _e,
          f[$e],
          p,
          null,
          v,
          g,
          E,
          C,
          S
        ), le++);
      }
      const Ln = Le ? Sl(Ot) : bt;
      for (q = Ln.length - 1, m = ue - 1; m >= 0; m--) {
        const _e = J + m, $e = f[_e], On = f[_e + 1], $n = _e + 1 < D ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          On.el || Ci(On)
        ) : y;
        Ot[m] === 0 ? w(
          null,
          $e,
          p,
          $n,
          v,
          g,
          E,
          C,
          S
        ) : Le && (q < 0 || m !== Ln[q] ? ct($e, p, $n, 2) : q--);
      }
    }
  }, ct = (a, f, p, y, v = null) => {
    const { el: g, type: E, transition: C, children: S, shapeFlag: m } = a;
    if (m & 6) {
      ct(a.component.subTree, f, p, y);
      return;
    }
    if (m & 128) {
      a.suspense.move(f, p, y);
      return;
    }
    if (m & 64) {
      E.move(a, f, p, Lt);
      return;
    }
    if (E === fe) {
      n(g, f, p);
      for (let R = 0; R < S.length; R++)
        ct(S[R], f, p, y);
      n(a.anchor, f, p);
      return;
    }
    if (E === qs) {
      M(a, f, p);
      return;
    }
    if (y !== 2 && m & 1 && C)
      if (y === 0)
        C.persisted && !g[Js] ? n(g, f, p) : (C.beforeEnter(g), n(g, f, p), ye(() => C.enter(g), v));
      else {
        const { leave: R, delayLeave: L, afterLeave: U } = C, J = () => {
          a.ctx.isUnmounted ? r(g) : n(g, f, p);
        }, z = () => {
          const q = g._isLeaving || !!g[Js];
          g._isLeaving && g[Js](
            !0
            /* cancelled */
          ), C.persisted && !q ? J() : R(g, () => {
            J(), U && U();
          });
        };
        L ? L(g, J, z) : z();
      }
    else
      n(g, f, p);
  }, Ae = (a, f, p, y = !1, v = !1) => {
    const {
      type: g,
      props: E,
      ref: C,
      children: S,
      dynamicChildren: m,
      shapeFlag: D,
      patchFlag: R,
      dirs: L,
      cacheIndex: U,
      memo: J
    } = a;
    if (R === -2 && (v = !1), C != null && (Ve(), Wt(C, null, p, a, !0), He()), U != null && (f.renderCache[U] = void 0), D & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const z = D & 1 && L, q = !Jt(a);
    let le;
    if (q && (le = E && E.onVnodeBeforeUnmount) && De(le, f, a), D & 6)
      Vi(a.component, p, y);
    else {
      if (D & 128) {
        a.suspense.unmount(p, y);
        return;
      }
      z && at(a, null, f, "beforeUnmount"), D & 64 ? a.type.remove(
        a,
        f,
        p,
        Lt,
        y
      ) : m && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !m.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (g !== fe || R > 0 && R & 64) ? At(
        m,
        f,
        p,
        !1,
        !0
      ) : (g === fe && R & 384 || !v && D & 16) && At(S, f, p), y && Mn(a);
    }
    const ue = J != null && U == null;
    (q && (le = E && E.onVnodeUnmounted) || z || ue) && ye(() => {
      le && De(le, f, a), z && at(a, null, f, "unmounted"), ue && (a.el = null);
    }, p);
  }, Mn = (a) => {
    const { type: f, el: p, anchor: y, transition: v } = a;
    if (f === fe) {
      Ki(p, y);
      return;
    }
    if (f === qs) {
      _(a);
      return;
    }
    const g = () => {
      r(p), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (a.shapeFlag & 1 && v && !v.persisted) {
      const { leave: E, delayLeave: C } = v, S = () => E(p, g);
      C ? C(a.el, g, S) : S();
    } else
      g();
  }, Ki = (a, f) => {
    let p;
    for (; a !== f; )
      p = b(a), r(a), a = p;
    r(f);
  }, Vi = (a, f, p) => {
    const { bum: y, scope: v, job: g, subTree: E, um: C, m: S, a: m } = a;
    qn(S), qn(m), y && gs(y), v.stop(), g && (g.flags |= 8, Ae(E, a, f, p)), C && ye(C, f), ye(() => {
      a.isUnmounted = !0;
    }, f);
  }, At = (a, f, p, y = !1, v = !1, g = 0) => {
    for (let E = g; E < a.length; E++)
      Ae(a[E], f, p, y, v);
  }, as = (a) => {
    if (a.shapeFlag & 6)
      return as(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const f = b(a.anchor || a.el), p = f && f[jo];
    return p ? b(p) : f;
  };
  let js = !1;
  const An = (a, f, p) => {
    let y;
    a == null ? f._vnode && (Ae(f._vnode, null, null, !0), y = f._vnode.component) : w(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      p
    ), f._vnode = a, js || (js = !0, Nn(y), Zr(), js = !1);
  }, Lt = {
    p: w,
    um: Ae,
    m: ct,
    r: Mn,
    mt: Mt,
    mc: K,
    pc: Q,
    pbc: se,
    n: as,
    o: e
  };
  return {
    render: An,
    hydrate: void 0,
    createApp: ol(An)
  };
}
function Ys({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ut({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function wi(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (k(n) && k(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Ge(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && wi(o, l)), l.type === ks && (l.patchFlag === -1 && (l = r[i] = Ge(l)), l.el = o.el), l.type === it && !l.el && (l.el = o.el);
    }
}
function Sl(e) {
  const t = e.slice(), s = [0];
  let n, r, i, o, l;
  const c = e.length;
  for (n = 0; n < c; n++) {
    const d = e[n];
    if (d !== 0) {
      if (r = s[s.length - 1], e[r] < d) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        l = i + o >> 1, e[s[l]] < d ? i = l + 1 : o = l;
      d < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = t[o];
  return s;
}
function Si(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Si(t);
}
function qn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ci(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ci(t.subTree) : null;
}
const Ii = (e) => e.__isSuspense;
function Cl(e, t) {
  t && t.pendingBranch ? k(e) ? t.effects.push(...e) : t.effects.push(e) : Oo(e);
}
const fe = /* @__PURE__ */ Symbol.for("v-fgt"), ks = /* @__PURE__ */ Symbol.for("v-txt"), it = /* @__PURE__ */ Symbol.for("v-cmt"), qs = /* @__PURE__ */ Symbol.for("v-stc"), Yt = [];
let xe = null;
function j(e = !1) {
  Yt.push(xe = e ? null : []);
}
function Il() {
  Yt.pop(), xe = Yt[Yt.length - 1] || null;
}
let ts = 1;
function Xn(e, t = !1) {
  ts += e, e < 0 && xe && t && (xe.hasOnce = !0);
}
function Ei(e) {
  return e.dynamicChildren = ts > 0 ? xe || bt : null, Il(), ts > 0 && xe && xe.push(e), e;
}
function W(e, t, s, n, r, i) {
  return Ei(
    T(
      e,
      t,
      s,
      n,
      r,
      i,
      !0
    )
  );
}
function Ct(e, t, s, n, r) {
  return Ei(
    ze(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function Ti(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Dt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ri = ({ key: e }) => e ?? null, ms = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || /* @__PURE__ */ re(e) || F(e) ? { i: Ce, r: e, k: t, f: !!s } : e : null);
function T(e, t = null, s = null, n = 0, r = null, i = e === fe ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ri(t),
    ref: t && ms(t),
    scopeId: ei,
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
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ce
  };
  return l ? (Ss(c, s), i & 128 && e.normalize(c)) : s && (c.shapeFlag |= ne(s) ? 8 : 16), ts > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && xe.push(c), c;
}
const ze = El;
function El(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Zo) && (e = it), Ti(e)) {
    const l = Tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ss(l, s), ts > 0 && !i && xe && (l.shapeFlag & 6 ? xe[xe.indexOf(e)] = l : xe.push(l)), l.patchFlag = -2, l;
  }
  if (Ul(e) && (e = e.__vccOpts), t) {
    t = Tl(t);
    let { class: l, style: c } = t;
    l && !ne(l) && (t.class = rt(l)), X(c) && (/* @__PURE__ */ Ls(c) && !k(c) && (c = de({}, c)), t.style = vn(c));
  }
  const o = ne(e) ? 1 : Ii(e) ? 128 : Ko(e) ? 64 : X(e) ? 4 : F(e) ? 2 : 0;
  return T(
    e,
    t,
    s,
    n,
    r,
    o,
    i,
    !0
  );
}
function Tl(e) {
  return e ? /* @__PURE__ */ Ls(e) || mi(e) ? de({}, e) : e : null;
}
function Tt(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e, d = t ? Pl(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ri(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? k(i) ? i.concat(ms(t)) : [i, ms(t)] : ms(t)
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
    patchFlag: t && e.type !== fe ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Tt(e.ssContent),
    ssFallback: e.ssFallback && Tt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && n && Tn(
    u,
    c.clone(u)
  ), u;
}
function Rl(e = " ", t = 0) {
  return ze(ks, null, e, t);
}
function be(e = "", t = !1) {
  return t ? (j(), Ct(it, null, e)) : ze(it, null, e);
}
function Fe(e) {
  return e == null || typeof e == "boolean" ? ze(it) : k(e) ? ze(
    fe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ti(e) ? Ge(e) : ze(ks, null, String(e));
}
function Ge(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Tt(e);
}
function Ss(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (k(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ss(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !mi(t) ? t._ctx = Ce : r === 3 && Ce && (Ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (F(t)) {
    if (n & 65) {
      Ss(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ce }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [Rl(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function Pl(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = rt([t.class, n.class]));
      else if (r === "style")
        t.style = vn([t.style, n.style]);
      else if (Is(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(k(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Es(r) && (t[r] = o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function De(e, t, s, n = null) {
  Pe(e, t, 7, [
    s,
    n
  ]);
}
const Ml = fi();
let Al = 0;
function Ll(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Ml, i = {
    uid: Al++,
    vnode: e,
    type: n,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Ar(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: yi(n, r),
    emitsOptions: di(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Z,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Z,
    data: Z,
    props: Z,
    attrs: Z,
    slots: Z,
    refs: Z,
    setupState: Z,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = cl.bind(null, i), e.ce && e.ce(i), i;
}
let ve = null;
const Pi = () => ve || Ce;
let Cs, un;
{
  const e = Ps(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Cs = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ve = s
  ), un = t(
    "__VUE_SSR_SETTERS__",
    (s) => ss = s
  );
}
const is = (e) => {
  const t = ve;
  return Cs(e), e.scope.on(), () => {
    e.scope.off(), Cs(t);
  };
}, zn = () => {
  ve && ve.scope.off(), Cs(null);
};
function Mi(e) {
  return e.vnode.shapeFlag & 4;
}
let ss = !1;
function Ol(e, t = !1, s = !1) {
  t && un(t);
  const { props: n, children: r } = e.vnode, i = Mi(e);
  pl(e, n, i, t), yl(e, r, s || t);
  const o = i ? $l(e, t) : void 0;
  return t && un(!1), o;
}
function $l(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qo);
  const { setup: n } = s;
  if (n) {
    Ve();
    const r = e.setupContext = n.length > 1 ? kl(e) : null, i = is(e), o = rs(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Sr(o);
    if (He(), i(), (l || e.sp) && !Jt(e) && ni(e), l) {
      if (o.then(zn, zn), t)
        return o.then((c) => {
          Zn(e, c);
        }).catch((c) => {
          Os(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Zn(e, o);
  } else
    Ai(e);
}
function Zn(e, t, s) {
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : X(t) && (e.setupState = Yr(t)), Ai(e);
}
function Ai(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || je);
  {
    const r = is(e);
    Ve();
    try {
      el(e);
    } finally {
      He(), r();
    }
  }
}
const Dl = {
  get(e, t) {
    return he(e, "get", ""), e[t];
  }
};
function kl(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Dl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Us(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Yr(In(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Gt)
        return Gt[s](e);
    },
    has(t, s) {
      return s in t || s in Gt;
    }
  })) : e.proxy;
}
function Ul(e) {
  return F(e) && "__vccOpts" in e;
}
const nt = (e, t) => /* @__PURE__ */ Ro(e, t, ss), Fl = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let fn;
const Qn = typeof window < "u" && window.trustedTypes;
if (Qn)
  try {
    fn = /* @__PURE__ */ Qn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Li = fn ? (e) => fn.createHTML(e) : (e) => e, Nl = "http://www.w3.org/2000/svg", jl = "http://www.w3.org/1998/Math/MathML", We = typeof document < "u" ? document : null, er = We && /* @__PURE__ */ We.createElement("template"), Kl = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? We.createElementNS(Nl, e) : t === "mathml" ? We.createElementNS(jl, e) : s ? We.createElement(e, { is: s }) : We.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => We.createTextNode(e),
  createComment: (e) => We.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => We.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, r, i) {
    const o = s ? s.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      er.innerHTML = Li(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = er.content;
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
}, Vl = /* @__PURE__ */ Symbol("_vtc");
function Hl(e, t, s) {
  const n = e[Vl];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const tr = /* @__PURE__ */ Symbol("_vod"), Bl = /* @__PURE__ */ Symbol("_vsh"), Wl = /* @__PURE__ */ Symbol(""), Jl = /(?:^|;)\s*display\s*:/;
function Gl(e, t, s) {
  const n = e.style, r = ne(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (ne(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Ft(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Ft(n, o, "");
    for (const o in s) {
      o === "display" && (i = !0);
      const l = s[o];
      l != null ? ql(
        e,
        o,
        !ne(t) && t ? t[o] : void 0,
        l
      ) || Ft(n, o, l) : Ft(n, o, "");
    }
  } else if (r) {
    if (t !== s) {
      const o = n[Wl];
      o && (s += ";" + o), n.cssText = s, i = Jl.test(s);
    }
  } else t && e.removeAttribute("style");
  tr in e && (e[tr] = i ? n.display : "", e[Bl] && (n.display = "none"));
}
const sr = /\s*!important$/;
function Ft(e, t, s) {
  if (k(s))
    s.forEach((n) => Ft(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Yl(e, t);
    sr.test(s) ? e.setProperty(
      ot(n),
      s.replace(sr, ""),
      "important"
    ) : e[n] = s;
  }
}
const nr = ["Webkit", "Moz", "ms"], Xs = {};
function Yl(e, t) {
  const s = Xs[t];
  if (s)
    return s;
  let n = Ee(t);
  if (n !== "filter" && n in e)
    return Xs[t] = n;
  n = Er(n);
  for (let r = 0; r < nr.length; r++) {
    const i = nr[r] + n;
    if (i in e)
      return Xs[t] = i;
  }
  return t;
}
function ql(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ne(n) && s === n;
}
const rr = "http://www.w3.org/1999/xlink";
function ir(e, t, s, n, r, i = Zi(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(rr, t.slice(6, t.length)) : e.setAttributeNS(rr, t, s) : s == null || i && !Rr(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ie(s) ? String(s) : s
  );
}
function or(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Li(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = s == null ? (
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
    l === "boolean" ? s = Rr(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function yt(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Xl(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const lr = /* @__PURE__ */ Symbol("_vei");
function zl(e, t, s, n, r = null) {
  const i = e[lr] || (e[lr] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, c] = ec(t);
    if (n) {
      const d = i[t] = nc(
        n,
        r
      );
      yt(e, l, d, c);
    } else o && (Xl(e, l, o, c), i[t] = void 0);
  }
}
const Zl = /(Once|Passive|Capture)$/, Ql = /^on:?(?:Once|Passive|Capture)$/;
function ec(e) {
  let t, s;
  for (; (s = e.match(Zl)) && !Ql.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : ot(e.slice(2)), t];
}
let zs = 0;
const tc = /* @__PURE__ */ Promise.resolve(), sc = () => zs || (tc.then(() => zs = 0), zs = Date.now());
function nc(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const r = s.value;
    if (k(r)) {
      const i = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        i.call(n), n._stopped = !0;
      };
      const o = r.slice(), l = [n];
      for (let c = 0; c < o.length && !n._stopped; c++) {
        const d = o[c];
        d && Pe(
          d,
          t,
          5,
          l
        );
      }
    } else
      Pe(
        r,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = sc(), s;
}
const cr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, rc = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? Hl(e, n, o) : t === "style" ? Gl(e, s, n) : Is(t) ? Es(t) || zl(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ic(e, t, n, o)) ? (or(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ir(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (oc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ne(n))) ? or(e, Ee(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), ir(e, t, n, o));
};
function ic(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && cr(t) && F(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return cr(t) && ne(s) ? !1 : t in e;
}
function oc(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = Ee(t);
  return Array.isArray(s) ? s.some((r) => Ee(r) === n) : Object.keys(s).some((r) => Ee(r) === n);
}
const ar = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return k(t) ? (s) => gs(t, s) : t;
};
function lc(e) {
  e.target.composing = !0;
}
function ur(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Zs = /* @__PURE__ */ Symbol("_assign");
function fr(e, t, s) {
  return t && (e = e.trim()), s && (e = mn(e)), e;
}
const Nt = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, r) {
    e[Zs] = ar(r);
    const i = n || r.props && r.props.type === "number";
    yt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Zs](fr(e.value, s, i));
    }), (s || i) && yt(e, "change", () => {
      e.value = fr(e.value, s, i);
    }), t || (yt(e, "compositionstart", lc), yt(e, "compositionend", ur), yt(e, "change", ur));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: r, number: i } }, o) {
    if (e[Zs] = ar(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? mn(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (n && t === s || r && e.value.trim() === c) || (e.value = c);
  }
}, cc = ["ctrl", "shift", "alt", "meta"], ac = {
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
  exact: (e, t) => cc.some((s) => e[`${s}Key`] && !t.includes(s))
}, Oi = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = ac[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  });
}, uc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, $i = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (r) => {
    if (!("key" in r))
      return;
    const i = ot(r.key);
    if (t.some(
      (o) => o === i || uc[o] === i
    ))
      return e(r);
  });
}, fc = /* @__PURE__ */ de({ patchProp: rc }, Kl);
let dr;
function dc() {
  return dr || (dr = bl(fc));
}
const hc = (...e) => {
  const t = dc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = gc(n);
    if (!r) return;
    const i = t._component;
    !F(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, pc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function pc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function gc(e) {
  return ne(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Di;
const Fs = (e) => Di = e, ki = (
  /* istanbul ignore next */
  Symbol()
);
function dn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var qt;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(qt || (qt = {}));
function mc() {
  const e = Lr(!0), t = e.run(() => /* @__PURE__ */ Ke({}));
  let s = [], n = [];
  const r = In({
    install(i) {
      Fs(r), r._a = i, i.provide(ki, r), i.config.globalProperties.$pinia = r, n.forEach((o) => s.push(o)), n = [];
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
  return r;
}
const Ui = () => {
};
function hr(e, t, s, n = Ui) {
  e.push(t);
  const r = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), n());
  };
  return !s && Or() && eo(r), r;
}
function mt(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const vc = (e) => e(), pr = Symbol(), Qs = Symbol();
function hn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], r = e[s];
    dn(r) && dn(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ re(n) && !/* @__PURE__ */ Xe(n) ? e[s] = hn(r, n) : e[s] = n;
  }
  return e;
}
const yc = (
  /* istanbul ignore next */
  Symbol()
);
function _c(e) {
  return !dn(e) || !e.hasOwnProperty(yc);
}
const { assign: tt } = Object;
function bc(e) {
  return !!(/* @__PURE__ */ re(e) && e.effect);
}
function xc(e, t, s, n) {
  const { state: r, actions: i, getters: o } = t, l = s.state.value[e];
  let c;
  function d() {
    l || (s.state.value[e] = r ? r() : {});
    const u = /* @__PURE__ */ Co(s.state.value[e]);
    return tt(u, i, Object.keys(o || {}).reduce((h, b) => (h[b] = In(nt(() => {
      Fs(s);
      const x = s._s.get(e);
      return o[b].call(x, x);
    })), h), {}));
  }
  return c = Fi(e, d, t, s, n, !0), c;
}
function Fi(e, t, s = {}, n, r, i) {
  let o;
  const l = tt({ actions: {} }, s), c = { deep: !0 };
  let d, u, h = [], b = [], x;
  const I = n.state.value[e];
  !i && !I && (n.state.value[e] = {});
  let w;
  function A(K) {
    let B;
    d = u = !1, typeof K == "function" ? (K(n.state.value[e]), B = {
      type: qt.patchFunction,
      storeId: e,
      events: x
    }) : (hn(n.state.value[e], K), B = {
      type: qt.patchObject,
      payload: K,
      storeId: e,
      events: x
    });
    const se = w = Symbol();
    Xr().then(() => {
      w === se && (d = !0);
    }), u = !0, mt(h, B, n.state.value[e]);
  }
  const O = i ? function() {
    const { state: B } = s, se = B ? B() : {};
    this.$patch((Se) => {
      tt(Se, se);
    });
  } : (
    /* istanbul ignore next */
    Ui
  );
  function P() {
    o.stop(), h = [], b = [], n._s.delete(e);
  }
  const M = (K, B = "") => {
    if (pr in K)
      return K[Qs] = B, K;
    const se = function() {
      Fs(n);
      const Se = Array.from(arguments), Me = [], et = [];
      function Mt(V) {
        Me.push(V);
      }
      function ls(V) {
        et.push(V);
      }
      mt(b, {
        args: Se,
        name: se[Qs],
        store: N,
        after: Mt,
        onError: ls
      });
      let ie;
      try {
        ie = K.apply(this && this.$id === e ? this : N, Se);
      } catch (V) {
        throw mt(et, V), V;
      }
      return ie instanceof Promise ? ie.then((V) => (mt(Me, V), V)).catch((V) => (mt(et, V), Promise.reject(V))) : (mt(Me, ie), ie);
    };
    return se[pr] = !0, se[Qs] = B, se;
  }, _ = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: hr.bind(null, b),
    $patch: A,
    $reset: O,
    $subscribe(K, B = {}) {
      const se = hr(h, K, B.detached, () => Se()), Se = o.run(() => Bt(() => n.state.value[e], (Me) => {
        (B.flush === "sync" ? u : d) && K({
          storeId: e,
          type: qt.direct,
          events: x
        }, Me);
      }, tt({}, c, B)));
      return se;
    },
    $dispose: P
  }, N = /* @__PURE__ */ As(_);
  n._s.set(e, N);
  const oe = (n._a && n._a.runWithContext || vc)(() => n._e.run(() => (o = Lr()).run(() => t({ action: M }))));
  for (const K in oe) {
    const B = oe[K];
    if (/* @__PURE__ */ re(B) && !bc(B) || /* @__PURE__ */ Xe(B))
      i || (I && _c(B) && (/* @__PURE__ */ re(B) ? B.value = I[K] : hn(B, I[K])), n.state.value[e][K] = B);
    else if (typeof B == "function") {
      const se = M(B, K);
      oe[K] = se, l.actions[K] = B;
    }
  }
  return tt(N, oe), tt(/* @__PURE__ */ G(N), oe), Object.defineProperty(N, "$state", {
    get: () => n.state.value[e],
    set: (K) => {
      A((B) => {
        tt(B, K);
      });
    }
  }), n._p.forEach((K) => {
    tt(N, o.run(() => K({
      store: N,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), I && i && s.hydrate && s.hydrate(N.$state, I), d = !0, u = !0, N;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ns(e, t, s) {
  let n, r;
  const i = typeof t == "function";
  typeof e == "string" ? (n = e, r = i ? s : t) : (r = e, n = e.id);
  function o(l, c) {
    const d = ko();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (d ? Ht(ki, null) : null), l && Fs(l), l = Di, l._s.has(n) || (i ? Fi(n, t, r, l) : xc(n, r, l)), l._s.get(n);
  }
  return o.$id = n, o;
}
function wc() {
  return [
    { id: "netease", enabled: !0, priority: 0, config: { baseURL: "" } },
    { id: "local", enabled: !0, priority: 1, config: {} },
    { id: "custom", enabled: !1, priority: 2, config: { searchURL: "", resolveURL: "" } }
  ];
}
function en() {
  return {
    volume: 65,
    playMode: "list",
    position: null,
    autoPlayOnNewCue: !0,
    providers: wc(),
    customCueRules: []
  };
}
const ge = /* @__PURE__ */ Ns("settings", {
  state: () => ({
    settings: en(),
    storage: null
  }),
  getters: {
    defaults: () => en()
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = en();
      if (t) {
        const n = typeof SillyTavern < "u" && SillyTavern.getContext()?.libs?.lodash ? SillyTavern.getContext().libs.lodash : null;
        n ? this.settings = n.merge(structuredClone(s), t) : this.settings = {
          ...s,
          ...t,
          providers: s.providers.map((r) => {
            const i = t.providers?.find((o) => o.id === r.id);
            return i ? { ...i, config: i.config ?? r.config ?? {} } : r;
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
class Sc {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map(), this.audio = new Audio();
  }
  load(t) {
    this.audio.src = t;
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
    const r = s;
    return n.add(r), this.audio.addEventListener(t, r), () => {
      this.audio.removeEventListener(t, r), n.delete(r);
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
const gr = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function Cc(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const r = new RegExp(gr.source, "g"), i = [];
    let o;
    for (; (o = r.exec(n)) !== null; ) {
      const c = parseInt(o[1], 10), d = parseInt(o[2], 10), u = o[3] ?? "", h = u ? parseInt(u.padEnd(3, "0"), 10) : 0;
      i.push(c * 60 + d + h / 1e3);
    }
    if (i.length === 0) continue;
    const l = n.replace(new RegExp(gr.source, "g"), "").trim();
    if (l !== "")
      for (const c of i)
        s.push({ time: c, text: l });
  }
  s.sort((n, r) => n.time - r.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function mr(e, t) {
  if (e.length === 0) return null;
  let s = null;
  for (const n of e)
    if (n.time <= t)
      s = n;
    else
      break;
  return s;
}
class Ic {
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
      return this.ctx().extensionSettings[_t] ?? null;
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
      s.extensionSettings[_t] = t, s.saveSettingsDebounced();
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
      const n = this.ctx(), r = n.chatMetadata;
      r[t] = s, n.saveMetadata();
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
    const r = { value: s, expiresAt: Date.now() + n };
    await this.forage.setItem(this.cacheKey(t), r);
  }
  async clearCache() {
    const t = this.forage, s = this.cachePrefix(), n = await t.keys();
    await Promise.all(
      n.filter((r) => r.startsWith(s)).map((r) => t.removeItem(r))
    );
  }
  // ----- key helpers -----
  settingsKey() {
    return `${_t}__settings`;
  }
  cachePrefix() {
    return `${_t}:cache:`;
  }
  cacheKey(t) {
    return `${this.cachePrefix()}${t}`;
  }
}
function Ec() {
  return new Ic();
}
const _t = "st-music-player", vr = "stmp_cursor", yr = "stmp_userlist";
class Tc {
  constructor(t) {
    this.providers = t;
  }
  async searchAll(t) {
    const s = await Promise.allSettled(
      this.providers.map((i) => i.search(t))
    ), n = [], r = /* @__PURE__ */ new Map();
    return s.forEach((i) => {
      if (i.status === "fulfilled")
        for (const o of i.value) {
          const l = `${o.name}__${o.artist}`;
          r.get(l) === void 0 && (r.set(l, n.length), n.push(o));
        }
    }), n;
  }
  async resolve(t, s) {
    const n = this.getProvider(s);
    return n ? new Promise((r) => {
      const i = setTimeout(() => r(null), 5e3);
      n.resolve(t).then((o) => {
        clearTimeout(i), r(o);
      }).catch(() => {
        clearTimeout(i), r(null);
      });
    }) : null;
  }
  getProvider(t) {
    return this.providers.find((s) => s.id === t);
  }
}
class Rc {
  constructor(t) {
    this.id = "netease", this.name = "网易云", this.baseURL = t?.baseURL ?? "https://music-api.gdstudio.xyz/api.php";
  }
  async fetchJson(t, s = 5e3) {
    try {
      const n = new AbortController(), r = setTimeout(() => n.abort(), s), i = await fetch(t, { signal: n.signal });
      return clearTimeout(r), i.ok ? await i.json() : null;
    } catch {
      return null;
    }
  }
  async search(t) {
    const s = await this.fetchJson(
      `${this.baseURL}?types=search&name=${encodeURIComponent(t)}&count=20&pages=1`
    );
    return Array.isArray(s) ? s.map((n) => ({
      id: String(n.id ?? ""),
      name: String(n.name ?? ""),
      artist: Array.isArray(n.artist) ? n.artist.join(", ") : String(n.artist ?? ""),
      duration: n.duration ? Number(n.duration) : void 0,
      provider: this.id
    })) : [];
  }
  async resolve(t) {
    const s = await this.fetchJson(
      `${this.baseURL}?types=url&id=${encodeURIComponent(t)}`
    );
    if (!s || !s.url) return null;
    const [n, r] = await Promise.all([
      this.fetchJson(`${this.baseURL}?types=lyric&id=${encodeURIComponent(t)}`),
      this.fetchJson(`${this.baseURL}?types=pic&id=${encodeURIComponent(t)}`)
    ]);
    return {
      url: String(s.url),
      lyric: n?.lyric ? String(n.lyric) : void 0,
      cover: r?.url ? String(r.url) : void 0,
      name: "",
      artist: "",
      source: this.id
    };
  }
}
class Pc {
  constructor(t) {
    this.id = "local", this.name = "本地文件", this.storage = t?.storage ?? null;
  }
  async search(t) {
    return [];
  }
  async resolve(t) {
    if (!this.storage) return null;
    const s = await this.storage.getItem("stmp:audio:" + t);
    return s ? {
      url: URL.createObjectURL(s),
      name: "",
      artist: "",
      source: this.id
    } : null;
  }
}
class Mc {
  constructor(t) {
    this.id = "custom", this.name = "自定义 API", this.searchURL = t?.searchURL, this.resolveURL = t?.resolveURL;
  }
  async fetchJson(t, s = 5e3) {
    try {
      const n = new AbortController(), r = setTimeout(() => n.abort(), s), i = await fetch(t, { signal: n.signal });
      return clearTimeout(r), i.ok ? await i.json() : null;
    } catch {
      return null;
    }
  }
  async search(t) {
    if (!this.searchURL) return [];
    const s = this.searchURL.replace("{keyword}", encodeURIComponent(t)), n = await this.fetchJson(s);
    return Array.isArray(n) ? n.map((r) => ({
      id: String(r.id ?? ""),
      name: String(r.name ?? ""),
      artist: String(r.artist ?? ""),
      duration: r.duration ? Number(r.duration) : void 0,
      provider: this.id
    })) : [];
  }
  async resolve(t) {
    if (!this.resolveURL) return null;
    const s = this.resolveURL.replace("{id}", encodeURIComponent(t)), n = await this.fetchJson(s);
    return !n || !n.url ? null : {
      url: String(n.url),
      lyric: n.lyric ? String(n.lyric) : void 0,
      cover: n.cover ? String(n.cover) : void 0,
      name: String(n.name ?? ""),
      artist: String(n.artist ?? ""),
      source: this.id
    };
  }
}
function Ni(e) {
  const s = e.filter((n) => n.enabled).sort((n, r) => n.priority - r.priority).map((n) => {
    const r = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new Rc({ baseURL: r.baseURL });
      case "local":
        return new Pc({
          storage: r.storage ? r.storage : void 0
        });
      case "custom":
        return new Mc({
          searchURL: r.searchURL,
          resolveURL: r.resolveURL
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new Tc(s);
}
function hs() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const os = /* @__PURE__ */ Ns("playlist", {
  state: () => ({
    list: [],
    currentIndex: -1,
    playMode: "list",
    chatIndexer: null,
    chatId: null
  }),
  getters: {
    current(e) {
      return e.currentIndex >= 0 ? e.list[e.currentIndex] ?? null : null;
    },
    isEmpty(e) {
      return e.list.length === 0;
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
        const n = s.getMetadata(vr);
        n && n.chatId === e && this.chatIndexer?.setCursor(e, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const t = ge().storage;
      if (!t || !this.chatId) return;
      const s = t.getMetadata(yr);
      if (s && Array.isArray(s)) {
        const n = s.filter((r) => r && r.source === "user");
        this.list = [...this.list.filter((r) => r.source !== "user"), ...n];
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
        id: hs(),
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
        id: hs(),
        song: e.name,
        artist: e.artist,
        source: "user",
        providerId: e.provider,
        providerTrackId: e.id,
        addedAt: Date.now()
      };
      this.list.push(t), this.saveUserList();
    },
    addLocalFile(e, t) {
      const s = {
        id: hs(),
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
      let r = null;
      if (t.source === "local" && t.localBlobKey) {
        const o = await n.getBlob(t.localBlobKey);
        o && (r = {
          url: URL.createObjectURL(o),
          name: t.song,
          artist: t.artist ?? "",
          source: "local"
        });
      } else if (t.providerId && t.providerTrackId) {
        const o = `stmp:resolve:${t.providerId}:${t.providerTrackId}`, l = await n.getCache(o);
        l && (r = {
          url: l.url,
          lyric: l.lyric,
          cover: l.cover,
          name: t.song,
          artist: t.artist ?? "",
          source: t.providerId
        });
      }
      if (!r && t.providerId && t.providerTrackId) {
        const l = await Ni(s.settings.providers).resolve(t.providerTrackId, t.providerId);
        if (l) {
          l.name = t.song, l.artist = t.artist ?? l.artist, r = l;
          const c = `stmp:resolve:${t.providerId}:${t.providerTrackId}`;
          await n.setCache(c, {
            url: l.url,
            lyric: l.lyric,
            cover: l.cover
          }, 36e5);
        }
      }
      if (!r) {
        console.warn(`[playlist] resolve failed for "${t.song}"`);
        return;
      }
      await pt().loadAndPlay(r);
    },
    handleNewCues(e) {
      if (e.length === 0) return;
      const t = ge();
      let s = null;
      for (const n of e)
        for (const r of n.cues) {
          const i = {
            id: hs(),
            song: r.song,
            artist: r.artist,
            source: "chat",
            messageId: n.messageId,
            addedAt: Date.now()
          };
          this.list.push(i), s = i;
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
      const r = n[0], i = this.list[r];
      i.song = s.cue.song, i.artist = s.cue.artist;
      for (const o of [...n].reverse())
        o !== r && this.removeItem(o);
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
      t.setMetadata(yr, s);
    },
    getCursor() {
      return !this.chatIndexer || !this.chatId ? -1 : this.chatIndexer.getCursor(this.chatId);
    },
    setCursor(e) {
      if (!this.chatIndexer || !this.chatId) return;
      this.chatIndexer.setCursor(this.chatId, e);
      const s = ge().storage;
      s && s.setMetadata(vr, {
        chatId: this.chatId,
        lastScannedMessageId: e,
        updatedAt: Date.now()
      });
    }
  }
}), pt = /* @__PURE__ */ Ns("player", {
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
      const e = new Sc();
      this.audioEngine = e;
      const t = pt();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = mr(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        t.currentLyricIndex = n;
      }), e.on("ended", () => {
        os().next();
      }), e.on("play", () => {
        t.isPlaying = !0;
      }), e.on("pause", () => {
        t.isPlaying = !1;
      });
    },
    async loadAndPlay(e) {
      this.audioEngine || this.init();
      const t = this.audioEngine;
      t.load(e.url), this.currentTrack = e, e.lyric ? this.updateLyrics(e.lyric) : (this.lyrics = [], this.currentLyricIndex = -1), await t.play();
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
      this.lyrics = Cc(e), this.currentLyricIndex = -1;
    },
    getActiveLyric() {
      return mr(this.lyrics, this.currentTime);
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), Ac = /* @__PURE__ */ Ns("search", {
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
}), Lc = { class: "stmp-collapsed-title" }, Oc = ["aria-label"], $c = /* @__PURE__ */ Rt({
  __name: "CollapsedBar",
  emits: ["expand"],
  setup(e) {
    const t = pt(), s = nt(() => t.currentTrack?.name || "未播放");
    return (n, r) => (j(), W("div", {
      class: "stmp-collapsed-bar",
      onClick: r[1] || (r[1] = (i) => n.$emit("expand"))
    }, [
      T("span", Lc, te(s.value), 1),
      T("button", {
        class: "stmp-collapsed-btn",
        "aria-label": H(t).isPlaying ? "暂停" : "播放",
        onClick: r[0] || (r[0] = Oi((i) => H(t).togglePlay(), ["stop"]))
      }, te(H(t).isPlaying ? "⏸" : "▶"), 9, Oc)
    ]));
  }
}), Pt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, Dc = /* @__PURE__ */ Pt($c, [["__scopeId", "data-v-76d6990c"]]), kc = { class: "stmp-playlist" }, Uc = { class: "stmp-upload-area" }, Fc = {
  key: 0,
  class: "stmp-empty"
}, Nc = { class: "stmp-group-label" }, jc = ["onClick"], Kc = { class: "stmp-item-index" }, Vc = { class: "stmp-item-info" }, Hc = { class: "stmp-item-song" }, Bc = {
  key: 0,
  class: "stmp-item-artist"
}, Wc = ["onClick"], Jc = /* @__PURE__ */ Rt({
  __name: "PlaylistView",
  setup(e) {
    const t = os(), s = ge(), n = /* @__PURE__ */ Ke(null), r = () => {
      n.value?.click();
    }, i = async (u) => {
      const h = u.target;
      if (!h.files || !h.files[0]) return;
      const b = h.files[0], x = `stmp:audio:${Date.now()}-${b.name}`, I = s.storage;
      I && (await I.setBlob(x, b), t.addLocalFile(b.name, x)), h.value = "";
    }, o = nt(() => {
      const u = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((h, b) => {
        u[h.source] && u[h.source].push({ index: b, item: h });
      }), u;
    }), l = {
      chat: "From Chat",
      user: "My List",
      local: "Local Files"
    };
    function c(u) {
      t.play(u);
    }
    function d(u) {
      t.removeItem(u);
    }
    return (u, h) => (j(), W("div", kc, [
      T("div", Uc, [
        T("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: n,
          onChange: i,
          style: { display: "none" }
        }, null, 544),
        T("button", {
          class: "stmp-upload-btn",
          "aria-label": "上传本地音频",
          onClick: r
        }, " + 添加本地文件 ")
      ]),
      H(t).isEmpty ? (j(), W("div", Fc, "No Songs")) : (j(), W(fe, { key: 1 }, St(["chat", "user", "local"], (b) => T("div", {
        key: b,
        class: "stmp-group"
      }, [
        o.value[b].length ? (j(), W(fe, { key: 0 }, [
          T("div", Nc, te(l[b]), 1),
          (j(!0), W(fe, null, St(o.value[b], (x) => (j(), W("div", {
            key: x.item.id,
            class: rt(["stmp-item", { active: x.index === H(t).currentIndex }]),
            onClick: (I) => c(x.index)
          }, [
            T("span", Kc, te(x.index + 1), 1),
            T("div", Vc, [
              T("span", Hc, te(x.item.song), 1),
              x.item.artist ? (j(), W("span", Bc, te(x.item.artist), 1)) : be("", !0)
            ]),
            T("button", {
              class: "stmp-item-del",
              onClick: Oi((I) => d(x.index), ["stop"])
            }, "✕", 8, Wc)
          ], 10, jc))), 128))
        ], 64)) : be("", !0)
      ])), 64))
    ]));
  }
}), Gc = /* @__PURE__ */ Pt(Jc, [["__scopeId", "data-v-7303863f"]]), Yc = { class: "stmp-search" }, qc = { class: "stmp-search-bar" }, Xc = ["disabled"], zc = {
  key: 0,
  class: "stmp-search-error"
}, Zc = {
  key: 1,
  class: "stmp-search-loading"
}, Qc = {
  key: 2,
  class: "stmp-search-empty"
}, ea = {
  key: 3,
  class: "stmp-results"
}, ta = ["onClick"], sa = { class: "stmp-result-info" }, na = { class: "stmp-result-name" }, ra = {
  key: 0,
  class: "stmp-result-artist"
}, ia = { class: "stmp-result-provider" }, oa = /* @__PURE__ */ Rt({
  __name: "SearchView",
  setup(e) {
    const t = Ac(), s = os(), n = ge(), r = /* @__PURE__ */ Ke(t.keyword);
    async function i() {
      t.setKeyword(r.value);
      const c = Ni(n.settings.providers);
      await t.search(c);
    }
    const o = () => {
      i();
    };
    function l(c) {
      const d = s.list.length;
      s.addFromSearch(c);
      const u = s.list.length - 1;
      u >= d && s.play(u);
    }
    return (c, d) => (j(), W("div", Yc, [
      T("div", qc, [
        kt(T("input", {
          "onUpdate:modelValue": d[0] || (d[0] = (u) => r.value = u),
          class: "stmp-search-input",
          placeholder: "Search Song...",
          onKeydown: $i(i, ["enter"])
        }, null, 544), [
          [Nt, r.value]
        ]),
        T("button", {
          class: "stmp-search-btn",
          disabled: H(t).isSearching,
          onClick: i
        }, te(H(t).isSearching ? "..." : "🔍"), 9, Xc)
      ]),
      H(t).error ? (j(), W("div", zc, [
        T("span", null, te(H(t).error), 1),
        T("button", {
          class: "stmp-retry-btn",
          "aria-label": "重试搜索",
          onClick: o
        }, "重试")
      ])) : be("", !0),
      H(t).isSearching ? (j(), W("div", Zc, "Searching...")) : r.value && !H(t).results.length ? (j(), W("div", Qc, " No results ")) : be("", !0),
      H(t).results.length ? (j(), W("div", ea, [
        (j(!0), W(fe, null, St(H(t).results, (u) => (j(), W("div", {
          key: u.provider + u.id,
          class: "stmp-result",
          onClick: (h) => l(u)
        }, [
          T("div", sa, [
            T("span", na, te(u.name), 1),
            u.artist ? (j(), W("span", ra, te(u.artist), 1)) : be("", !0)
          ]),
          T("span", ia, te(u.provider), 1)
        ], 8, ta))), 128))
      ])) : be("", !0)
    ]));
  }
}), la = /* @__PURE__ */ Pt(oa, [["__scopeId", "data-v-305488cc"]]), ca = { class: "stmp-settings" }, aa = { class: "stmp-setting-group" }, ua = { class: "stmp-setting-row" }, fa = ["checked", "onChange"], da = ["onUpdate:modelValue"], ha = ["onUpdate:modelValue"], pa = ["onUpdate:modelValue"], ga = { class: "stmp-setting-group" }, ma = { class: "stmp-setting-label" }, va = ["value"], ya = { class: "stmp-setting-group" }, _a = ["value"], ba = ["value"], xa = { class: "stmp-setting-group" }, wa = { class: "stmp-setting-row" }, Sa = ["checked"], Ca = { class: "stmp-setting-group" }, Ia = { class: "stmp-rules" }, Ea = ["onClick"], Ta = { class: "stmp-rule-add" }, Ra = /* @__PURE__ */ Rt({
  __name: "SettingsView",
  setup(e) {
    const t = ge(), s = /* @__PURE__ */ Ke(""), n = [
      { value: "list", label: "List Loop" },
      { value: "random", label: "Random" },
      { value: "single", label: "Single Loop" }
    ], r = {
      netease: "NetEase",
      local: "Local Files",
      custom: "Custom API"
    };
    function i() {
      const I = s.value.trim();
      I && (t.addCustomCueRule(I), s.value = "");
    }
    function o(I) {
      t.removeCustomCueRule(I);
    }
    function l(I) {
      const w = I.target;
      t.setVolume(Number(w.value));
    }
    function c(I) {
      const w = I.target;
      t.setPlayMode(w.value);
    }
    function d(I) {
      const w = I.target;
      t.settings.autoPlayOnNewCue = w.checked, t.save();
    }
    const u = async () => {
      const I = t.storage;
      I && (await I.clearCache(), toastr.success("缓存已清理"));
    }, h = () => {
      const I = JSON.stringify(t.settings, null, 2), w = new Blob([I], { type: "application/json" }), A = URL.createObjectURL(w), O = document.createElement("a");
      O.href = A, O.download = "st-music-player-settings.json", O.click(), URL.revokeObjectURL(A);
    }, b = () => {
      const I = document.createElement("input");
      I.type = "file", I.accept = ".json", I.onchange = async (w) => {
        const A = w.target.files?.[0];
        if (!A) return;
        const O = await A.text();
        try {
          const P = JSON.parse(O);
          if (typeof P != "object" || P === null) throw new Error("Not an object");
          const M = ["volume", "playMode", "position", "autoPlayOnNewCue", "providers", "customCueRules"], _ = {};
          for (const ae of M)
            ae in P && (_[ae] = P[ae]);
          if (typeof _.volume != "number" || _.volume < 0 || _.volume > 100)
            throw new Error("Invalid volume");
          if (!["list", "random", "single"].includes(_.playMode))
            throw new Error("Invalid playMode");
          if (_.providers && !Array.isArray(_.providers))
            throw new Error("Invalid providers");
          if (_.customCueRules && !Array.isArray(_.customCueRules))
            throw new Error("Invalid customCueRules");
          const N = ge();
          Object.assign(N.settings, _), N.save(), toastr.success("设置已导入");
        } catch (P) {
          console.error("Import failed", P), toastr.error("导入失败: " + (P instanceof Error ? P.message : "JSON 格式错误"));
        }
      }, I.click();
    };
    function x(I) {
      const w = t.settings.providers.find((A) => A.id === I);
      w && (w.enabled = !w.enabled, t.save());
    }
    return (I, w) => (j(), W("div", ca, [
      T("div", aa, [
        w[4] || (w[4] = T("div", { class: "stmp-setting-label" }, "Providers", -1)),
        (j(!0), W(fe, null, St(H(t).settings.providers, (A) => (j(), W("div", {
          key: A.id,
          class: "stmp-provider-config"
        }, [
          T("label", ua, [
            T("span", null, te(r[A.id] || A.id), 1),
            T("input", {
              type: "checkbox",
              checked: A.enabled,
              onChange: (O) => x(A.id)
            }, null, 40, fa)
          ]),
          A.id === "netease" ? kt((j(), W("input", {
            key: 0,
            class: "stmp-provider-input",
            "onUpdate:modelValue": (O) => A.config.baseURL = O,
            placeholder: "API baseURL",
            onChange: w[0] || (w[0] = (O) => H(t).save())
          }, null, 40, da)), [
            [Nt, A.config.baseURL]
          ]) : be("", !0),
          A.id === "custom" ? (j(), W(fe, { key: 1 }, [
            kt(T("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (O) => A.config.searchURL = O,
              placeholder: "Search URL",
              onChange: w[1] || (w[1] = (O) => H(t).save())
            }, null, 40, ha), [
              [Nt, A.config.searchURL]
            ]),
            kt(T("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (O) => A.config.resolveURL = O,
              placeholder: "Resolve URL",
              onChange: w[2] || (w[2] = (O) => H(t).save())
            }, null, 40, pa), [
              [Nt, A.config.resolveURL]
            ])
          ], 64)) : be("", !0)
        ]))), 128))
      ]),
      T("div", ga, [
        T("div", ma, "Default Volume: " + te(H(t).settings.volume), 1),
        T("input", {
          type: "range",
          min: "0",
          max: "100",
          value: H(t).settings.volume,
          class: "stmp-range",
          onInput: l
        }, null, 40, va)
      ]),
      T("div", ya, [
        w[5] || (w[5] = T("div", { class: "stmp-setting-label" }, "Default Play Mode", -1)),
        T("select", {
          class: "stmp-select",
          value: H(t).settings.playMode,
          onChange: c
        }, [
          (j(), W(fe, null, St(n, (A) => T("option", {
            key: A.value,
            value: A.value
          }, te(A.label), 9, ba)), 64))
        ], 40, _a)
      ]),
      T("div", xa, [
        T("div", wa, [
          w[6] || (w[6] = T("span", null, "Auto-play on new cue", -1)),
          T("input", {
            type: "checkbox",
            checked: H(t).settings.autoPlayOnNewCue,
            onChange: d
          }, null, 40, Sa)
        ])
      ]),
      T("div", Ca, [
        w[7] || (w[7] = T("div", { class: "stmp-setting-label" }, "Custom Cue Rules (Regex)", -1)),
        T("div", Ia, [
          (j(!0), W(fe, null, St(H(t).settings.customCueRules, (A, O) => (j(), W("div", {
            key: O,
            class: "stmp-rule"
          }, [
            T("code", null, te(A), 1),
            T("button", {
              class: "stmp-rule-del",
              onClick: (P) => o(O)
            }, "✕", 8, Ea)
          ]))), 128))
        ]),
        T("div", Ta, [
          kt(T("input", {
            "onUpdate:modelValue": w[3] || (w[3] = (A) => s.value = A),
            class: "stmp-rule-input",
            placeholder: "Add regex rule...",
            onKeydown: $i(i, ["enter"])
          }, null, 544), [
            [Nt, s.value]
          ]),
          T("button", {
            class: "stmp-rule-add-btn",
            onClick: i
          }, "+")
        ])
      ]),
      T("div", { class: "stmp-setting-group" }, [
        w[8] || (w[8] = T("div", { class: "stmp-setting-label" }, "Data", -1)),
        T("div", { class: "stmp-data-btns" }, [
          T("button", {
            class: "stmp-data-btn",
            "aria-label": "清理缓存",
            onClick: u
          }, "清理缓存"),
          T("button", {
            class: "stmp-data-btn",
            "aria-label": "导出数据",
            onClick: h
          }, "导出数据"),
          T("button", {
            class: "stmp-data-btn",
            "aria-label": "导入数据",
            onClick: b
          }, "导入数据")
        ])
      ])
    ]));
  }
}), Pa = /* @__PURE__ */ Pt(Ra, [["__scopeId", "data-v-e6294cd3"]]), Ma = { class: "stmp-panel" }, Aa = { class: "stmp-topbar" }, La = { class: "stmp-cover" }, Oa = ["src"], $a = {
  key: 1,
  class: "stmp-cover-placeholder"
}, Da = { class: "stmp-track-info" }, ka = { class: "stmp-track-name" }, Ua = {
  key: 0,
  class: "stmp-track-artist"
}, Fa = {
  key: 0,
  class: "stmp-lyric-current"
}, Na = {
  key: 1,
  class: "stmp-lyric-next"
}, ja = {
  key: 2,
  class: "stmp-lyric-empty"
}, Ka = { class: "stmp-progress" }, Va = ["value"], Ha = { class: "stmp-time" }, Ba = { class: "stmp-controls" }, Wa = ["aria-label"], Ja = ["value"], Ga = { class: "stmp-tabs" }, Ya = { class: "stmp-tab-content" }, qa = /* @__PURE__ */ Rt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = pt(), s = os(), n = ge(), r = /* @__PURE__ */ Ke("list"), i = /* @__PURE__ */ Ke(!0), o = /* @__PURE__ */ Ke(!1), l = nt(() => t.currentTrack?.cover || ""), c = () => {
      o.value = !0;
    };
    Bt(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const d = nt(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), u = nt(
      () => t.currentLyricIndex >= 0 ? t.lyrics[t.currentLyricIndex]?.text ?? null : null
    ), h = nt(() => {
      const P = t.currentLyricIndex;
      return P < 0 ? null : t.lyrics[P + 1]?.text ?? null;
    });
    function b(P) {
      const M = Math.floor(P / 60), _ = Math.floor(P % 60);
      return M + ":" + _.toString().padStart(2, "0");
    }
    function x(P) {
      const M = P.target;
      t.seek(Number(M.value) / 100 * t.duration);
    }
    const I = ["list", "random", "single"], w = {
      list: "🔁",
      random: "🔀",
      single: "🔂"
    };
    function A() {
      const P = n.settings.playMode, M = I.indexOf(P), _ = I[(M + 1) % I.length];
      n.setPlayMode(_), s.playMode = _;
    }
    function O(P) {
      const M = P.target;
      t.setVolume(Number(M.value));
    }
    return (P, M) => (j(), W("div", Ma, [
      T("div", Aa, [
        T("div", La, [
          l.value && !o.value ? (j(), W("img", {
            key: 0,
            src: l.value,
            alt: "cover",
            onError: c
          }, null, 40, Oa)) : (j(), W("span", $a, "♪"))
        ]),
        T("div", Da, [
          T("div", ka, te(H(t).currentTrack?.name || "No Song"), 1),
          H(t).currentTrack?.artist ? (j(), W("div", Ua, te(H(t).currentTrack.artist), 1)) : be("", !0)
        ]),
        T("button", {
          class: "stmp-collapse-btn",
          "aria-label": "收起面板",
          onClick: M[0] || (M[0] = (_) => P.$emit("collapse"))
        }, "▾")
      ]),
      i.value ? (j(), W("div", {
        key: 0,
        class: "stmp-lyrics",
        onClick: M[1] || (M[1] = (_) => i.value = !1)
      }, [
        u.value ? (j(), W("div", Fa, te(u.value), 1)) : be("", !0),
        h.value ? (j(), W("div", Na, te(h.value), 1)) : be("", !0),
        !u.value && !h.value ? (j(), W("div", ja, "♪")) : be("", !0)
      ])) : (j(), W("div", {
        key: 1,
        class: "stmp-lyrics-toggle",
        onClick: M[2] || (M[2] = (_) => i.value = !0)
      }, "♪ show lyrics")),
      T("div", Ka, [
        T("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: d.value,
          class: "stmp-range",
          onInput: x
        }, null, 40, Va),
        T("div", Ha, [
          T("span", null, te(b(H(t).currentTime)), 1),
          T("span", null, te(b(H(t).duration)), 1)
        ])
      ]),
      T("div", Ba, [
        T("button", {
          class: "stmp-ctrl-btn",
          "aria-label": "上一首",
          onClick: M[3] || (M[3] = (_) => H(s).prev())
        }, "⏮"),
        T("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": H(t).isPlaying ? "暂停" : "播放",
          onClick: M[4] || (M[4] = (_) => H(t).togglePlay())
        }, te(H(t).isPlaying ? "⏸" : "▶"), 9, Wa),
        T("button", {
          class: "stmp-ctrl-btn",
          "aria-label": "下一首",
          onClick: M[5] || (M[5] = (_) => H(s).next())
        }, "⏭"),
        T("button", {
          class: "stmp-ctrl-btn",
          "aria-label": "切换播放模式",
          onClick: A
        }, te(w[H(n).settings.playMode]), 1),
        T("input", {
          type: "range",
          min: "0",
          max: "100",
          value: H(t).volume,
          class: "stmp-volume",
          onInput: O
        }, null, 40, Ja)
      ]),
      T("div", Ga, [
        T("button", {
          class: rt(["stmp-tab", { active: r.value === "list" }]),
          onClick: M[6] || (M[6] = (_) => r.value = "list")
        }, " List ", 2),
        T("button", {
          class: rt(["stmp-tab", { active: r.value === "search" }]),
          onClick: M[7] || (M[7] = (_) => r.value = "search")
        }, " Search ", 2),
        T("button", {
          class: rt(["stmp-tab", { active: r.value === "settings" }]),
          onClick: M[8] || (M[8] = (_) => r.value = "settings")
        }, " Settings ", 2)
      ]),
      T("div", Ya, [
        r.value === "list" ? (j(), Ct(Gc, { key: 0 })) : r.value === "search" ? (j(), Ct(la, { key: 1 })) : r.value === "settings" ? (j(), Ct(Pa, { key: 2 })) : be("", !0)
      ])
    ]));
  }
}), Xa = /* @__PURE__ */ Pt(qa, [["__scopeId", "data-v-05a9daa9"]]), za = /* @__PURE__ */ Rt({
  __name: "App",
  setup(e) {
    const t = ge(), s = pt(), n = /* @__PURE__ */ Ke(!1), r = /* @__PURE__ */ Ke(null), i = /* @__PURE__ */ Ke(typeof window < "u" && window.innerWidth < 768), o = () => {
      i.value = window.innerWidth < 768;
    }, l = (_) => {
      _.key === "Escape" && (n.value = !1), _.key === " " && _.target === document.body && (_.preventDefault(), s.togglePlay());
    };
    let c = 0, d = 0, u = 0, h = 0, b = !1, x = null, I = null;
    function w(_) {
      if (i.value || n.value || _.target.closest("button")) return;
      c = _.clientX, d = _.clientY;
      const N = t.settings.position;
      u = N?.x ?? r.value?.offsetLeft ?? 0, h = N?.y ?? r.value?.offsetTop ?? 0, b = !1, x = A, I = O, document.addEventListener("pointermove", x), document.addEventListener("pointerup", I);
    }
    function A(_) {
      if (!r.value) return;
      const N = _.clientX - c, ae = _.clientY - d;
      (Math.abs(N) > 5 || Math.abs(ae) > 5) && (b = !0);
      let oe = u + N, K = h + ae;
      const B = window.innerWidth - (r.value.offsetWidth || 60), se = window.innerHeight - (r.value.offsetHeight || 40);
      oe = Math.max(0, Math.min(oe, B)), K = Math.max(0, Math.min(K, se)), r.value.style.left = oe + "px", r.value.style.top = K + "px", r.value.style.right = "auto", r.value.style.bottom = "auto";
    }
    function O() {
      if (x && document.removeEventListener("pointermove", x), I && document.removeEventListener("pointerup", I), x = null, I = null, !b) {
        P();
        return;
      }
      r.value && t.setPosition({
        x: r.value.offsetLeft,
        y: r.value.offsetTop
      });
    }
    function P() {
      n.value = !n.value;
    }
    const M = () => {
      n.value = !n.value;
    };
    return oi(() => {
      const _ = t.settings.position;
      _ && r.value && !i.value && (r.value.style.left = _.x + "px", r.value.style.top = _.y + "px", r.value.style.right = "auto", r.value.style.bottom = "auto"), window.addEventListener("resize", o), window.addEventListener("keydown", l), window.addEventListener("stmp:toggle-expand", M);
    }), li(() => {
      O(), window.removeEventListener("resize", o), window.removeEventListener("keydown", l), window.removeEventListener("stmp:toggle-expand", M);
    }), (_, N) => (j(), W("div", {
      ref_key: "widgetRef",
      ref: r,
      class: rt(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-mobile": i.value
      }]),
      onPointerdown: w
    }, [
      n.value ? (j(), Ct(Xa, {
        key: 1,
        onCollapse: P
      })) : (j(), Ct(Dc, {
        key: 0,
        onExpand: P
      }))
    ], 34));
  }
}), Za = /* @__PURE__ */ Pt(za, [["__scopeId", "data-v-508efdb3"]]);
class Qa {
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
      const r = this.listeners.get(t);
      r && (r.delete(s), r.size === 0 && this.listeners.delete(t));
    };
  }
  /** Start bridging: register ST event listeners. Safe to call once. */
  start() {
    if (this.registered.length > 0) return;
    const t = SillyTavern.getContext(), s = t.eventSource, n = t.event_types, r = (i, o, l) => {
      const c = (...d) => {
        const u = l(d[0]);
        this.emit(o, u);
      };
      s.on(i, c), this.registered.push({ event: i, handler: c });
    };
    r(n.CHAT_CHANGED, "chat-changed", (i) => ({
      chatId: typeof i == "string" ? i : void 0
    })), r(n.GENERATION_ENDED, "message-generated", (i) => ({
      messageId: ps(i)
    })), r(n.MESSAGE_UPDATED, "message-updated", (i) => ({
      messageId: ps(i)
    })), r(n.MESSAGE_DELETED, "message-deleted", (i) => ({
      messageId: ps(i)
    })), r(n.MESSAGE_SWIPED, "message-swiped", (i) => ({
      messageId: ps(i)
    }));
  }
  /** Stop bridging: remove all ST event listeners. */
  stop() {
    if (this.registered.length === 0) return;
    const s = SillyTavern.getContext().eventSource;
    for (const { event: n, handler: r } of this.registered)
      s.removeListener(n, r);
    this.registered = [];
  }
  /** Invoke all listeners for an internal event. */
  emit(t, s) {
    const n = this.listeners.get(t);
    if (n)
      for (const r of n)
        try {
          r(s);
        } catch (i) {
          console.error("[STEventBridge] listener error:", i);
        }
  }
}
function ps(e) {
  if (e == null) return;
  const t = typeof e == "number" ? e : parseInt(String(e), 10);
  return Number.isFinite(t) ? t : void 0;
}
function eu() {
  return new Qa();
}
const tu = [
  /<bgm>当前bgm[:：](.+?) - (.+?)<\/bgm>/g,
  /<bgm>当前bgm[:：](.+?)<\/bgm>/g,
  /<bgm>(.+?) - (.+?)<\/bgm>/g,
  /<bgm>(.+?)<\/bgm>/g,
  /【BGM】(.+?)(?: - (.+?))?【\/BGM】/g,
  /\[music\](.+?)(?: - (.+?))?\[\/music\]/g
];
function _r(e, t) {
  const s = [], n = new RegExp(e.source, "g");
  let r;
  for (; (r = n.exec(t)) !== null; ) {
    r.index === n.lastIndex && n.lastIndex++;
    const i = r[1];
    if (i === void 0 || i === "") continue;
    const o = r[2], l = {
      song: i.trim(),
      artist: o !== void 0 && o !== "" ? o.trim() : void 0,
      raw: r[0]
    };
    s.push({ index: r.index, cue: l });
  }
  return s;
}
function br(e, t = []) {
  const s = /* @__PURE__ */ new Map(), n = (r) => {
    s.has(r.index) || s.set(r.index, r);
  };
  for (const r of tu)
    for (const i of _r(r, e)) n(i);
  for (const r of t)
    try {
      const i = new RegExp(r, "g");
      for (const o of _r(i, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((r, i) => r.index - i.index).map((r) => r.cue);
}
class su {
  constructor(t) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = t;
  }
  scanIncremental(t, s, n, r = []) {
    const i = [];
    for (let o = s; o <= n; o++) {
      const l = this.getChatMessage(o);
      if (l === void 0) continue;
      const c = br(l, r);
      if (c.length === 0) continue;
      const d = c.at(-1);
      i.push({ messageId: o, cues: [d] });
    }
    return this.cursors.set(t, {
      chatId: t,
      lastScannedMessageId: n,
      updatedAt: Date.now()
    }), i;
  }
  scanMessage(t, s, n = []) {
    const r = this.getChatMessage(s);
    if (r === void 0)
      return { messageId: s, cue: null };
    const i = br(r, n), o = i.length > 0 ? i.at(-1) : null;
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
let It = null, Je = null, Xt = null, zt = null;
const nu = `
<div class="inline-drawer">
  <div class="inline-drawer-toggle inline-drawer-header">
    <b data-i18n="悬浮音乐播放器">悬浮音乐播放器</b>
    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
  </div>
  <div class="inline-drawer-content stmp-ext-settings-content">
    <p>悬浮音乐播放器已加载。点击播放器浮窗进行操作。</p>
  </div>
</div>
`;
function ru() {
  const e = $("#extensions_settings2");
  !e || !e.length || (e.append(nu), zt = e.children(".inline-drawer").last()[0] ?? null, zt && zt.querySelector(".inline-drawer-toggle")?.addEventListener("click", () => {
    window.dispatchEvent(new CustomEvent("stmp:toggle-expand"));
  }));
}
function iu() {
  zt?.remove(), zt = null;
}
function ou(e, t, s) {
  Je = eu(), Je.on("chat-changed", () => {
    const n = SillyTavern.getContext(), r = n.chatId ?? String(Date.now());
    if (t.setChatId(r), t.getCursor() < 0 && n.chat.length > 0) {
      const i = e.scanIncremental(
        r,
        0,
        n.chat.length - 1,
        s.settings.customCueRules
      );
      t.handleNewCues(i), t.setCursor(n.chat.length - 1);
    }
  }), Je.on("message-generated", (n) => {
    const r = SillyTavern.getContext(), i = t.chatId ?? r.chatId ?? "";
    if (!i || n.messageId === void 0) return;
    const o = t.getCursor() + 1, l = n.messageId;
    if (l < o) return;
    const c = e.scanIncremental(
      i,
      o,
      l,
      s.settings.customCueRules
    );
    t.handleNewCues(c), t.setCursor(l);
  }), Je.on("message-updated", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), Je.on("message-deleted", (n) => {
    n.messageId !== void 0 && t.handleMessageDelete(n.messageId);
  }), Je.on("message-swiped", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), Je.start();
}
function lu(e, t, s) {
  const n = SillyTavern.getContext();
  if (n.chatId && n.chat.length > 0 && (t.setChatId(n.chatId), t.getCursor() < 0)) {
    const r = e.scanIncremental(
      n.chatId,
      0,
      n.chat.length - 1,
      s.settings.customCueRules
    );
    t.handleNewCues(r), t.setCursor(n.chat.length - 1);
  }
}
async function uu() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.body.appendChild(e);
    const t = mc();
    It = hc(Za), It.use(t), It.mount(e);
    const s = ge(), n = Ec();
    s.init(n);
    const r = pt();
    r.init(), r.setVolume(s.settings.volume);
    const i = new su((c) => SillyTavern.getContext().chat[c]?.mes), o = os();
    o.init(i), o.playMode = s.settings.playMode, ru();
    const l = SillyTavern.getContext();
    Xt = () => {
      ou(i, o, s), lu(i, o, s);
    }, l.eventSource.on(l.event_types.APP_READY, Xt), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function ji() {
  if (Xt) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, Xt);
    } catch {
    }
    Xt = null;
  }
  if (Je?.stop(), Je = null, It) {
    try {
      pt().destroy();
    } catch {
    }
    It.unmount(), It = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), iu();
}
function fu() {
  ji();
}
async function cu() {
  try {
    const e = SillyTavern.getContext();
    delete e.extensionSettings[_t], e.saveSettingsDebounced();
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to delete settings:", e);
  }
  try {
    const e = SillyTavern.libs?.localforage;
    if (e && typeof e.keys == "function") {
      const t = await e.keys();
      await Promise.all(
        t.filter((s) => s.startsWith(_t) || s.startsWith("stmp:")).map((s) => e.removeItem(s))
      );
    }
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to clear localforage:", e);
  }
}
async function du() {
  await cu(), ji();
}
export {
  cu as clean,
  du as delete,
  ji as destroy,
  fu as disable,
  uu as init
};
