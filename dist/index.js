/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function bn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const Q = {}, Ct = [], Ke = () => {
}, Ti = () => !1, Ms = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Rs = (e) => e.startsWith("onUpdate:"), he = Object.assign, _n = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Yr = Object.prototype.hasOwnProperty, G = (e, t) => Yr.call(e, t), F = Array.isArray, It = (e) => rs(e) === "[object Map]", Pi = (e) => rs(e) === "[object Set]", Vn = (e) => rs(e) === "[object Date]", j = (e) => typeof e == "function", se = (e) => typeof e == "string", Pe = (e) => typeof e == "symbol", X = (e) => e !== null && typeof e == "object", Mi = (e) => (X(e) || j(e)) && j(e.then) && j(e.catch), Ri = Object.prototype.toString, rs = (e) => Ri.call(e), qr = (e) => rs(e).slice(8, -1), Ai = (e) => rs(e) === "[object Object]", As = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ht = /* @__PURE__ */ bn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ls = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Xr = /-\w/g, Me = Ls(
  (e) => e.replace(Xr, (t) => t.slice(1).toUpperCase())
), Zr = /\B([A-Z])/g, ct = Ls(
  (e) => e.replace(Zr, "-$1").toLowerCase()
), Li = Ls((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ws = Ls(
  (e) => e ? `on${Li(e)}` : ""
), He = (e, t) => !Object.is(e, t), vs = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Oi = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, xn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Hn;
const Os = () => Hn || (Hn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function wn(e) {
  if (F(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = se(n) ? so(n) : wn(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (se(e) || X(e))
    return e;
}
const Qr = /;(?![^(]*\))/g, eo = /:([^]+)/, to = /\/\*[^]*?\*\//g;
function so(e) {
  const t = {};
  return e.replace(to, "").split(Qr).forEach((s) => {
    if (s) {
      const n = s.split(eo);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Be(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (F(e))
    for (let s = 0; s < e.length; s++) {
      const n = Be(e[s]);
      n && (t += n + " ");
    }
  else if (X(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const no = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", io = /* @__PURE__ */ bn(no);
function $i(e) {
  return !!e || e === "";
}
function ro(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Sn(e[n], t[n]);
  return s;
}
function Sn(e, t) {
  if (e === t) return !0;
  let s = Vn(e), n = Vn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Pe(e), n = Pe(t), s || n)
    return e === t;
  if (s = F(e), n = F(t), s || n)
    return s && n ? ro(e, t) : !1;
  if (s = X(e), n = X(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Sn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ki = (e) => !!(e && e.__v_isRef === !0), fe = (e) => se(e) ? e : e == null ? "" : F(e) || X(e) && (e.toString === Ri || !j(e.toString)) ? ki(e) ? fe(e.value) : JSON.stringify(e, Di, 2) : String(e), Di = (e, t) => ki(t) ? Di(e, t.value) : It(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[zs(n, r) + " =>"] = i, s),
    {}
  )
} : Pi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => zs(s))
} : Pe(t) ? zs(t) : X(t) && !F(t) && !Ai(t) ? String(t) : t, zs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pe(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ue;
class Ui {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ue && (ue.active ? (this.parent = ue, this.index = (ue.scopes || (ue.scopes = [])).push(
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
      const s = ue;
      try {
        return ue = this, t();
      } finally {
        ue = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ue, ue = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ue === this)
        ue = this.prevScope;
      else {
        let t = ue;
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
function Fi(e) {
  return new Ui(e);
}
function Ni() {
  return ue;
}
function oo(e, t = !1) {
  ue && ue.cleanups.push(e);
}
let te;
const Js = /* @__PURE__ */ new WeakSet();
class ji {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ue && (ue.active ? ue.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Js.has(this) && (Js.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Hi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Kn(this), Ki(this);
    const t = te, s = Re;
    te = this, Re = !0;
    try {
      return this.fn();
    } finally {
      Bi(this), te = t, Re = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        En(t);
      this.deps = this.depsTail = void 0, Kn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Js.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    on(this) && this.run();
  }
  get dirty() {
    return on(this);
  }
}
let Vi = 0, Kt, Bt;
function Hi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Bt, Bt = e;
    return;
  }
  e.next = Kt, Kt = e;
}
function Cn() {
  Vi++;
}
function In() {
  if (--Vi > 0)
    return;
  if (Bt) {
    let t = Bt;
    for (Bt = void 0; t; ) {
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
function Ki(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Bi(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), En(n), lo(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function on(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Wi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Wi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === es) || (e.globalVersion = es, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !on(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = te, n = Re;
  te = e, Re = !0;
  try {
    Ki(e);
    const i = e.fn(e._value);
    (t.version === 0 || He(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    te = s, Re = n, Bi(e), e.flags &= -3;
  }
}
function En(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      En(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function lo(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Re = !0;
const zi = [];
function We() {
  zi.push(Re), Re = !1;
}
function ze() {
  const e = zi.pop();
  Re = e === void 0 ? !0 : e;
}
function Kn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = te;
    te = void 0;
    try {
      t();
    } finally {
      te = s;
    }
  }
}
let es = 0;
class co {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Tn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!te || !Re || te === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== te)
      s = this.activeLink = new co(te, this), te.deps ? (s.prevDep = te.depsTail, te.depsTail.nextDep = s, te.depsTail = s) : te.deps = te.depsTail = s, Ji(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = te.depsTail, s.nextDep = void 0, te.depsTail.nextDep = s, te.depsTail = s, te.deps === s && (te.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, es++, this.notify(t);
  }
  notify(t) {
    Cn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      In();
    }
  }
}
function Ji(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Ji(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const _s = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ Symbol(
  ""
), ln = /* @__PURE__ */ Symbol(
  ""
), ts = /* @__PURE__ */ Symbol(
  ""
);
function ge(e, t, s) {
  if (Re && te) {
    let n = _s.get(e);
    n || _s.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new Tn()), i.map = n, i.key = s), i.track();
  }
}
function Xe(e, t, s, n, i, r) {
  const o = _s.get(e);
  if (!o) {
    es++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Cn(), t === "clear")
    o.forEach(l);
  else {
    const c = F(e), d = c && As(s);
    if (c && s === "length") {
      const u = Number(n);
      o.forEach((h, w) => {
        (w === "length" || w === ts || !Pe(w) && w >= u) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(ts)), t) {
        case "add":
          c ? d && l(o.get("length")) : (l(o.get(pt)), It(e) && l(o.get(ln)));
          break;
        case "delete":
          c || (l(o.get(pt)), It(e) && l(o.get(ln)));
          break;
        case "set":
          It(e) && l(o.get(pt));
          break;
      }
  }
  In();
}
function ao(e, t) {
  const s = _s.get(e);
  return s && s.get(t);
}
function bt(e) {
  const t = /* @__PURE__ */ J(e);
  return t === e ? t : (ge(t, "iterate", ts), /* @__PURE__ */ Ce(e) ? t : t.map(Ae));
}
function $s(e) {
  return ge(e = /* @__PURE__ */ J(e), "iterate", ts), e;
}
function je(e, t) {
  return /* @__PURE__ */ et(e) ? Rt(/* @__PURE__ */ Qe(e) ? Ae(t) : t) : Ae(t);
}
const uo = {
  __proto__: null,
  [Symbol.iterator]() {
    return Gs(this, Symbol.iterator, (e) => je(this, e));
  },
  concat(...e) {
    return bt(this).concat(
      ...e.map((t) => F(t) ? bt(t) : t)
    );
  },
  entries() {
    return Gs(this, "entries", (e) => (e[1] = je(this, e[1]), e));
  },
  every(e, t) {
    return Je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Je(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => je(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Je(
      this,
      "find",
      e,
      t,
      (s) => je(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return Je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Je(
      this,
      "findLast",
      e,
      t,
      (s) => je(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Je(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ys(this, "includes", e);
  },
  indexOf(...e) {
    return Ys(this, "indexOf", e);
  },
  join(e) {
    return bt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ys(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Dt(this, "pop");
  },
  push(...e) {
    return Dt(this, "push", e);
  },
  reduce(e, ...t) {
    return Bn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Bn(this, "reduceRight", e, t);
  },
  shift() {
    return Dt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Dt(this, "splice", e);
  },
  toReversed() {
    return bt(this).toReversed();
  },
  toSorted(e) {
    return bt(this).toSorted(e);
  },
  toSpliced(...e) {
    return bt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Dt(this, "unshift", e);
  },
  values() {
    return Gs(this, "values", (e) => je(this, e));
  }
};
function Gs(e, t, s) {
  const n = $s(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Ce(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const fo = Array.prototype;
function Je(e, t, s, n, i, r) {
  const o = $s(e), l = o !== e && !/* @__PURE__ */ Ce(e), c = o[t];
  if (c !== fo[t]) {
    const h = c.apply(e, r);
    return l ? Ae(h) : h;
  }
  let d = s;
  o !== e && (l ? d = function(h, w) {
    return s.call(this, je(e, h), w, e);
  } : s.length > 2 && (d = function(h, w) {
    return s.call(this, h, w, e);
  }));
  const u = c.call(o, d, n);
  return l && i ? i(u) : u;
}
function Bn(e, t, s, n) {
  const i = $s(e), r = i !== e && !/* @__PURE__ */ Ce(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(d, u, h) {
    return l && (l = !1, d = je(e, d)), s.call(this, d, je(e, u), h, e);
  }) : s.length > 3 && (o = function(d, u, h) {
    return s.call(this, d, u, h, e);
  }));
  const c = i[t](o, ...n);
  return l ? je(e, c) : c;
}
function Ys(e, t, s) {
  const n = /* @__PURE__ */ J(e);
  ge(n, "iterate", ts);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ds(s[0]) ? (s[0] = /* @__PURE__ */ J(s[0]), n[t](...s)) : i;
}
function Dt(e, t, s = []) {
  We(), Cn();
  const n = (/* @__PURE__ */ J(e))[t].apply(e, s);
  return In(), ze(), n;
}
const ho = /* @__PURE__ */ bn("__proto__,__v_isRef,__isVue"), Gi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pe)
);
function po(e) {
  Pe(e) || (e = String(e));
  const t = /* @__PURE__ */ J(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
}
class Yi {
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
      return n === (i ? r ? Co : Qi : r ? Zi : Xi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = F(t);
    if (!i) {
      let c;
      if (o && (c = uo[s]))
        return c;
      if (s === "hasOwnProperty")
        return po;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ne(t) ? t : n
    );
    if ((Pe(s) ? Gi.has(s) : ho(s)) || (i || ge(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ ne(l)) {
      const c = o && As(s) ? l : l.value;
      return i && X(c) ? /* @__PURE__ */ an(c) : c;
    }
    return X(l) ? i ? /* @__PURE__ */ an(l) : /* @__PURE__ */ ks(l) : l;
  }
}
class qi extends Yi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    const o = F(t) && As(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ et(r);
      if (!/* @__PURE__ */ Ce(n) && !/* @__PURE__ */ et(n) && (r = /* @__PURE__ */ J(r), n = /* @__PURE__ */ J(n)), !o && /* @__PURE__ */ ne(r) && !/* @__PURE__ */ ne(n))
        return d || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : G(t, s), c = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ ne(t) ? t : i
    );
    return t === /* @__PURE__ */ J(i) && c && (l ? He(n, r) && Xe(t, "set", s, n) : Xe(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = G(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && Xe(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Pe(s) || !Gi.has(s)) && ge(t, "has", s), n;
  }
  ownKeys(t) {
    return ge(
      t,
      "iterate",
      F(t) ? "length" : pt
    ), Reflect.ownKeys(t);
  }
}
class go extends Yi {
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
const mo = /* @__PURE__ */ new qi(), vo = /* @__PURE__ */ new go(), yo = /* @__PURE__ */ new qi(!0);
const cn = (e) => e, ds = (e) => Reflect.getPrototypeOf(e);
function bo(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ J(i), o = It(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, d = i[e](...n), u = s ? cn : t ? Rt : Ae;
    return !t && ge(
      r,
      "iterate",
      c ? ln : pt
    ), he(
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
function hs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _o(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ J(r), l = /* @__PURE__ */ J(i);
      e || (He(i, l) && ge(o, "get", i), ge(o, "get", l));
      const { has: c } = ds(o), d = t ? cn : e ? Rt : Ae;
      if (c.call(o, i))
        return d(r.get(i));
      if (c.call(o, l))
        return d(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ge(/* @__PURE__ */ J(i), "iterate", pt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ J(r), l = /* @__PURE__ */ J(i);
      return e || (He(i, l) && ge(o, "has", i), ge(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ J(l), d = t ? cn : e ? Rt : Ae;
      return !e && ge(c, "iterate", pt), l.forEach((u, h) => i.call(r, d(u), d(h), o));
    }
  };
  return he(
    s,
    e ? {
      add: hs("add"),
      set: hs("set"),
      delete: hs("delete"),
      clear: hs("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ J(this), o = ds(r), l = /* @__PURE__ */ J(i), c = !t && !/* @__PURE__ */ Ce(i) && !/* @__PURE__ */ et(i) ? l : i;
        return o.has.call(r, c) || He(i, c) && o.has.call(r, i) || He(l, c) && o.has.call(r, l) || (r.add(c), Xe(r, "add", c, c)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Ce(r) && !/* @__PURE__ */ et(r) && (r = /* @__PURE__ */ J(r));
        const o = /* @__PURE__ */ J(this), { has: l, get: c } = ds(o);
        let d = l.call(o, i);
        d || (i = /* @__PURE__ */ J(i), d = l.call(o, i));
        const u = c.call(o, i);
        return o.set(i, r), d ? He(r, u) && Xe(o, "set", i, r) : Xe(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ J(this), { has: o, get: l } = ds(r);
        let c = o.call(r, i);
        c || (i = /* @__PURE__ */ J(i), c = o.call(r, i)), l && l.call(r, i);
        const d = r.delete(i);
        return c && Xe(r, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ J(this), r = i.size !== 0, o = i.clear();
        return r && Xe(
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
    s[i] = bo(i, e, t);
  }), s;
}
function Pn(e, t) {
  const s = _o(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    G(s, i) && i in n ? s : n,
    i,
    r
  );
}
const xo = {
  get: /* @__PURE__ */ Pn(!1, !1)
}, wo = {
  get: /* @__PURE__ */ Pn(!1, !0)
}, So = {
  get: /* @__PURE__ */ Pn(!0, !1)
};
const Xi = /* @__PURE__ */ new WeakMap(), Zi = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new WeakMap();
function Io(e) {
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
function ks(e) {
  return /* @__PURE__ */ et(e) ? e : Mn(
    e,
    !1,
    mo,
    xo,
    Xi
  );
}
// @__NO_SIDE_EFFECTS__
function Eo(e) {
  return Mn(
    e,
    !1,
    yo,
    wo,
    Zi
  );
}
// @__NO_SIDE_EFFECTS__
function an(e) {
  return Mn(
    e,
    !0,
    vo,
    So,
    Qi
  );
}
function Mn(e, t, s, n, i) {
  if (!X(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = Io(qr(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? n : s
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return /* @__PURE__ */ et(e) ? /* @__PURE__ */ Qe(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function et(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ce(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ds(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function J(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ J(t) : e;
}
function Rn(e) {
  return !G(e, "__v_skip") && Object.isExtensible(e) && Oi(e, "__v_skip", !0), e;
}
const Ae = (e) => X(e) ? /* @__PURE__ */ ks(e) : e, Rt = (e) => X(e) ? /* @__PURE__ */ an(e) : e;
// @__NO_SIDE_EFFECTS__
function ne(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return To(e, !1);
}
function To(e, t) {
  return /* @__PURE__ */ ne(e) ? e : new Po(e, t);
}
class Po {
  constructor(t, s) {
    this.dep = new Tn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ J(t), this._value = s ? t : Ae(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ce(t) || /* @__PURE__ */ et(t);
    t = n ? t : /* @__PURE__ */ J(t), He(t, s) && (this._rawValue = t, this._value = n ? t : Ae(t), this.dep.trigger());
  }
}
function V(e) {
  return /* @__PURE__ */ ne(e) ? e.value : e;
}
const Mo = {
  get: (e, t, s) => t === "__v_raw" ? e : V(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ ne(i) && !/* @__PURE__ */ ne(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function er(e) {
  return /* @__PURE__ */ Qe(e) ? e : new Proxy(e, Mo);
}
// @__NO_SIDE_EFFECTS__
function Ro(e) {
  const t = F(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = Lo(e, s);
  return t;
}
class Ao {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Pe(s) ? s : String(s), this._raw = /* @__PURE__ */ J(t);
    let i = !0, r = t;
    if (!F(t) || Pe(this._key) || !As(this._key))
      do
        i = !/* @__PURE__ */ Ds(r) || /* @__PURE__ */ Ce(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = V(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ ne(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ ne(s)) {
        s.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return ao(this._raw, this._key);
  }
}
function Lo(e, t, s) {
  return new Ao(e, t, s);
}
class Oo {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Tn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = es - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    te !== this)
      return Hi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Wi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function $o(e, t, s = !1) {
  let n, i;
  return j(e) ? n = e : (n = e.get, i = e.set), new Oo(n, i, s);
}
const ps = {}, xs = /* @__PURE__ */ new WeakMap();
let ht;
function ko(e, t = !1, s = ht) {
  if (s) {
    let n = xs.get(s);
    n || xs.set(s, n = []), n.push(e);
  }
}
function Do(e, t, s = Q) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = s, d = (I) => i ? I : /* @__PURE__ */ Ce(I) || i === !1 || i === 0 ? Ze(I, 1) : Ze(I);
  let u, h, w, v, S = !1, b = !1;
  if (/* @__PURE__ */ ne(e) ? (h = () => e.value, S = /* @__PURE__ */ Ce(e)) : /* @__PURE__ */ Qe(e) ? (h = () => d(e), S = !0) : F(e) ? (b = !0, S = e.some((I) => /* @__PURE__ */ Qe(I) || /* @__PURE__ */ Ce(I)), h = () => e.map((I) => {
    if (/* @__PURE__ */ ne(I))
      return I.value;
    if (/* @__PURE__ */ Qe(I))
      return d(I);
    if (j(I))
      return c ? c(I, 2) : I();
  })) : j(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (w) {
      We();
      try {
        w();
      } finally {
        ze();
      }
    }
    const I = ht;
    ht = u;
    try {
      return c ? c(e, 3, [v]) : e(v);
    } finally {
      ht = I;
    }
  } : h = Ke, t && i) {
    const I = h, H = i === !0 ? 1 / 0 : i;
    h = () => Ze(I(), H);
  }
  const R = Ni(), k = () => {
    u.stop(), R && R.active && _n(R.effects, u);
  };
  if (r && t) {
    const I = t;
    t = (...H) => {
      const ae = I(...H);
      return k(), ae;
    };
  }
  let A = b ? new Array(e.length).fill(ps) : ps;
  const T = (I) => {
    if (!(!(u.flags & 1) || !u.dirty && !I))
      if (t) {
        const H = u.run();
        if (I || i || S || (b ? H.some((ae, oe) => He(ae, A[oe])) : He(H, A))) {
          w && w();
          const ae = ht;
          ht = u;
          try {
            const oe = [
              H,
              // pass undefined as the old value when it's changed for the first time
              A === ps ? void 0 : b && A[0] === ps ? [] : A,
              v
            ];
            A = H, c ? c(t, 3, oe) : (
              // @ts-expect-error
              t(...oe)
            );
          } finally {
            ht = ae;
          }
        }
      } else
        u.run();
  };
  return l && l(T), u = new ji(h), u.scheduler = o ? () => o(T, !1) : T, v = (I) => ko(I, !1, u), w = u.onStop = () => {
    const I = xs.get(u);
    if (I) {
      if (c)
        c(I, 4);
      else
        for (const H of I) H();
      xs.delete(u);
    }
  }, t ? n ? T(!0) : A = u.run() : o ? o(T.bind(null, !0), !0) : u.run(), k.pause = u.pause.bind(u), k.resume = u.resume.bind(u), k.stop = k, k;
}
function Ze(e, t = 1 / 0, s) {
  if (t <= 0 || !X(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ ne(e))
    Ze(e.value, t, s);
  else if (F(e))
    for (let n = 0; n < e.length; n++)
      Ze(e[n], t, s);
  else if (Pi(e) || It(e))
    e.forEach((n) => {
      Ze(n, t, s);
    });
  else if (Ai(e)) {
    for (const n in e)
      Ze(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ze(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function os(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Us(i, t, s);
  }
}
function Le(e, t, s, n) {
  if (j(e)) {
    const i = os(e, t, s, n);
    return i && Mi(i) && i.catch((r) => {
      Us(r, t, s);
    }), i;
  }
  if (F(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Le(e[r], t, s, n));
    return i;
  }
}
function Us(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Q;
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
      We(), os(r, null, 10, [
        e,
        c,
        d
      ]), ze();
      return;
    }
  }
  Uo(e, s, i, n, o);
}
function Uo(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const ve = [];
let Ne = -1;
const Et = [];
let it = null, xt = 0;
const tr = /* @__PURE__ */ Promise.resolve();
let ws = null;
function sr(e) {
  const t = ws || tr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Fo(e) {
  let t = Ne + 1, s = ve.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = ve[n], r = ss(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function An(e) {
  if (!(e.flags & 1)) {
    const t = ss(e), s = ve[ve.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ss(s) ? ve.push(e) : ve.splice(Fo(t), 0, e), e.flags |= 1, nr();
  }
}
function nr() {
  ws || (ws = tr.then(rr));
}
function No(e) {
  F(e) ? Et.push(...e) : it && e.id === -1 ? it.splice(xt + 1, 0, e) : e.flags & 1 || (Et.push(e), e.flags |= 1), nr();
}
function Wn(e, t, s = Ne + 1) {
  for (; s < ve.length; s++) {
    const n = ve[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ve.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function ir(e) {
  if (Et.length) {
    const t = [...new Set(Et)].sort(
      (s, n) => ss(s) - ss(n)
    );
    if (Et.length = 0, it) {
      it.push(...t);
      return;
    }
    for (it = t, xt = 0; xt < it.length; xt++) {
      const s = it[xt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    it = null, xt = 0;
  }
}
const ss = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function rr(e) {
  try {
    for (Ne = 0; Ne < ve.length; Ne++) {
      const t = ve[Ne];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), os(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ne < ve.length; Ne++) {
      const t = ve[Ne];
      t && (t.flags &= -2);
    }
    Ne = -1, ve.length = 0, ir(), ws = null, (ve.length || Et.length) && rr();
  }
}
let Ee = null, or = null;
function Ss(e) {
  const t = Ee;
  return Ee = e, or = e && e.type.__scopeId || null, t;
}
function jo(e, t = Ee, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && si(-1);
    const r = Ss(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Ss(r), n._d && si(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ft(e, t) {
  if (Ee === null)
    return e;
  const s = Vs(Ee), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, c = Q] = t[i];
    r && (j(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ze(o), n.push({
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
function ft(e, t, s, n) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let c = l.dir[n];
    c && (We(), Le(c, s, 8, [
      e.el,
      l,
      e,
      t
    ]), ze());
  }
}
function Vo(e, t) {
  if (ye) {
    let s = ye.provides;
    const n = ye.parent && ye.parent.provides;
    n === s && (s = ye.provides = Object.create(n)), s[e] = t;
  }
}
function Wt(e, t, s = !1) {
  const n = Dr();
  if (n || gt) {
    let i = gt ? gt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && j(t) ? t.call(n && n.proxy) : t;
  }
}
function Ho() {
  return !!(Dr() || gt);
}
const Ko = /* @__PURE__ */ Symbol.for("v-scx"), Bo = () => Wt(Ko);
function zt(e, t, s) {
  return lr(e, t, s);
}
function lr(e, t, s = Q) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = he({}, s), c = t && n || !t && r !== "post";
  let d;
  if (is) {
    if (r === "sync") {
      const v = Bo();
      d = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!c) {
      const v = () => {
      };
      return v.stop = Ke, v.resume = Ke, v.pause = Ke, v;
    }
  }
  const u = ye;
  l.call = (v, S, b) => Le(v, u, S, b);
  let h = !1;
  r === "post" ? l.scheduler = (v) => {
    be(v, u && u.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (v, S) => {
    S ? v() : An(v);
  }), l.augmentJob = (v) => {
    t && (v.flags |= 4), h && (v.flags |= 2, u && (v.id = u.uid, v.i = u));
  };
  const w = Do(e, t, l);
  return is && (d ? d.push(w) : c && w()), w;
}
function Wo(e, t, s) {
  const n = this.proxy, i = se(e) ? e.includes(".") ? cr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  j(t) ? r = t : (r = t.handler, s = t);
  const o = ls(this), l = lr(i, r.bind(n), s);
  return o(), l;
}
function cr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const zo = /* @__PURE__ */ Symbol("_vte"), Jo = (e) => e.__isTeleport, qs = /* @__PURE__ */ Symbol("_leaveCb");
function Ln(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ln(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function mt(e, t) {
  return j(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    he({ name: e.name }, t, { setup: e })
  ) : e;
}
function ar(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function zn(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Cs = /* @__PURE__ */ new WeakMap();
function Jt(e, t, s, n, i = !1) {
  if (F(e)) {
    e.forEach(
      (b, R) => Jt(
        b,
        t && (F(t) ? t[R] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (Gt(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Jt(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? Vs(n.component) : n.el, o = i ? null : r, { i: l, r: c } = e, d = t && t.r, u = l.refs === Q ? l.refs = {} : l.refs, h = l.setupState, w = /* @__PURE__ */ J(h), v = h === Q ? Ti : (b) => zn(u, b) ? !1 : G(w, b), S = (b, R) => !(R && zn(u, R));
  if (d != null && d !== c) {
    if (Jn(t), se(d))
      u[d] = null, v(d) && (h[d] = null);
    else if (/* @__PURE__ */ ne(d)) {
      const b = t;
      S(d, b.k) && (d.value = null), b.k && (u[b.k] = null);
    }
  }
  if (j(c)) {
    We();
    try {
      os(c, l, 12, [o, u]);
    } finally {
      ze();
    }
  } else {
    const b = se(c), R = /* @__PURE__ */ ne(c);
    if (b || R) {
      const k = () => {
        if (e.f) {
          const A = b ? v(c) ? h[c] : u[c] : S() || !e.k ? c.value : u[e.k];
          if (i)
            F(A) && _n(A, r);
          else if (F(A))
            A.includes(r) || A.push(r);
          else if (b)
            u[c] = [r], v(c) && (h[c] = u[c]);
          else {
            const T = [r];
            S(c, e.k) && (c.value = T), e.k && (u[e.k] = T);
          }
        } else b ? (u[c] = o, v(c) && (h[c] = o)) : R && (S(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const A = () => {
          k(), Cs.delete(e);
        };
        A.id = -1, Cs.set(e, A), be(A, s);
      } else
        Jn(e), k();
    }
  }
}
function Jn(e) {
  const t = Cs.get(e);
  t && (t.flags |= 8, Cs.delete(e));
}
Os().requestIdleCallback;
Os().cancelIdleCallback;
const Gt = (e) => !!e.type.__asyncLoader, ur = (e) => e.type.__isKeepAlive;
function Go(e, t) {
  fr(e, "a", t);
}
function Yo(e, t) {
  fr(e, "da", t);
}
function fr(e, t, s = ye) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Fs(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      ur(i.parent.vnode) && qo(n, t, s, i), i = i.parent;
  }
}
function qo(e, t, s, n) {
  const i = Fs(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  pr(() => {
    _n(n[t], i);
  }, s);
}
function Fs(e, t, s = ye, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      We();
      const l = ls(s), c = Le(t, s, e, o);
      return l(), ze(), c;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const tt = (e) => (t, s = ye) => {
  (!is || e === "sp") && Fs(e, (...n) => t(...n), s);
}, Xo = tt("bm"), dr = tt("m"), Zo = tt(
  "bu"
), Qo = tt("u"), hr = tt(
  "bum"
), pr = tt("um"), el = tt(
  "sp"
), tl = tt("rtg"), sl = tt("rtc");
function nl(e, t = ye) {
  Fs("ec", e, t);
}
const il = /* @__PURE__ */ Symbol.for("v-ndc");
function Tt(e, t, s, n) {
  let i;
  const r = s, o = F(e);
  if (o || se(e)) {
    const l = o && /* @__PURE__ */ Qe(e);
    let c = !1, d = !1;
    l && (c = !/* @__PURE__ */ Ce(e), d = /* @__PURE__ */ et(e), e = $s(e)), i = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      i[u] = t(
        c ? d ? Rt(Ae(e[u])) : Ae(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (X(e))
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
const un = (e) => e ? Ur(e) ? Vs(e) : un(e.parent) : null, Yt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ he(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => un(e.parent),
    $root: (e) => un(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => mr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      An(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = sr.bind(e.proxy)),
    $watch: (e) => Wo.bind(e)
  })
), Xs = (e, t) => e !== Q && !e.__isScriptSetup && G(e, t), rl = {
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
        if (Xs(n, t))
          return o[t] = 1, n[t];
        if (i !== Q && G(i, t))
          return o[t] = 2, i[t];
        if (G(r, t))
          return o[t] = 3, r[t];
        if (s !== Q && G(s, t))
          return o[t] = 4, s[t];
        fn && (o[t] = 0);
      }
    }
    const d = Yt[t];
    let u, h;
    if (d)
      return t === "$attrs" && ge(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (s !== Q && G(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = c.config.globalProperties, G(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return Xs(i, t) ? (i[t] = s, !0) : n !== Q && G(n, t) ? (n[t] = s, !0) : G(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let c;
    return !!(s[l] || e !== Q && l[0] !== "$" && G(e, l) || Xs(t, l) || G(r, l) || G(n, l) || G(Yt, l) || G(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : G(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Gn(e) {
  return F(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let fn = !0;
function ol(e) {
  const t = mr(e), s = e.proxy, n = e.ctx;
  fn = !1, t.beforeCreate && Yn(t.beforeCreate, e, "bc");
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
    activated: b,
    deactivated: R,
    beforeDestroy: k,
    beforeUnmount: A,
    destroyed: T,
    unmounted: I,
    render: H,
    renderTracked: ae,
    renderTriggered: oe,
    errorCaptured: K,
    serverPrefetch: W,
    // public API
    expose: le,
    inheritAttrs: Ie,
    // assets
    components: Oe,
    directives: st,
    filters: Lt
  } = t;
  if (d && ll(d, n, null), o)
    for (const B in o) {
      const ee = o[B];
      j(ee) && (n[B] = ee.bind(s));
    }
  if (i) {
    const B = i.call(s, s);
    X(B) && (e.data = /* @__PURE__ */ ks(B));
  }
  if (fn = !0, r)
    for (const B in r) {
      const ee = r[B], at = j(ee) ? ee.bind(s, s) : j(ee.get) ? ee.get.bind(s, s) : Ke, us = !j(ee) && j(ee.set) ? ee.set.bind(s) : Ke, ut = rt({
        get: at,
        set: us
      });
      Object.defineProperty(n, B, {
        enumerable: !0,
        configurable: !0,
        get: () => ut.value,
        set: ($e) => ut.value = $e
      });
    }
  if (l)
    for (const B in l)
      gr(l[B], n, s, B);
  if (c) {
    const B = j(c) ? c.call(s) : c;
    Reflect.ownKeys(B).forEach((ee) => {
      Vo(ee, B[ee]);
    });
  }
  u && Yn(u, e, "c");
  function ie(B, ee) {
    F(ee) ? ee.forEach((at) => B(at.bind(s))) : ee && B(ee.bind(s));
  }
  if (ie(Xo, h), ie(dr, w), ie(Zo, v), ie(Qo, S), ie(Go, b), ie(Yo, R), ie(nl, K), ie(sl, ae), ie(tl, oe), ie(hr, A), ie(pr, I), ie(el, W), F(le))
    if (le.length) {
      const B = e.exposed || (e.exposed = {});
      le.forEach((ee) => {
        Object.defineProperty(B, ee, {
          get: () => s[ee],
          set: (at) => s[ee] = at,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  H && e.render === Ke && (e.render = H), Ie != null && (e.inheritAttrs = Ie), Oe && (e.components = Oe), st && (e.directives = st), W && ar(e);
}
function ll(e, t, s = Ke) {
  F(e) && (e = dn(e));
  for (const n in e) {
    const i = e[n];
    let r;
    X(i) ? "default" in i ? r = Wt(
      i.from || n,
      i.default,
      !0
    ) : r = Wt(i.from || n) : r = Wt(i), /* @__PURE__ */ ne(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function Yn(e, t, s) {
  Le(
    F(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function gr(e, t, s, n) {
  let i = n.includes(".") ? cr(s, n) : () => s[n];
  if (se(e)) {
    const r = t[e];
    j(r) && zt(i, r);
  } else if (j(e))
    zt(i, e.bind(s));
  else if (X(e))
    if (F(e))
      e.forEach((r) => gr(r, t, s, n));
    else {
      const r = j(e.handler) ? e.handler.bind(s) : t[e.handler];
      j(r) && zt(i, r, e);
    }
}
function mr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !i.length && !s && !n ? c = t : (c = {}, i.length && i.forEach(
    (d) => Is(c, d, o, !0)
  ), Is(c, t, o)), X(t) && r.set(t, c), c;
}
function Is(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && Is(e, r, s, !0), i && i.forEach(
    (o) => Is(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = cl[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const cl = {
  data: qn,
  props: Xn,
  emits: Xn,
  // objects
  methods: Nt,
  computed: Nt,
  // lifecycle
  beforeCreate: me,
  created: me,
  beforeMount: me,
  mounted: me,
  beforeUpdate: me,
  updated: me,
  beforeDestroy: me,
  beforeUnmount: me,
  destroyed: me,
  unmounted: me,
  activated: me,
  deactivated: me,
  errorCaptured: me,
  serverPrefetch: me,
  // assets
  components: Nt,
  directives: Nt,
  // watch
  watch: ul,
  // provide / inject
  provide: qn,
  inject: al
};
function qn(e, t) {
  return t ? e ? function() {
    return he(
      j(e) ? e.call(this, this) : e,
      j(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function al(e, t) {
  return Nt(dn(e), dn(t));
}
function dn(e) {
  if (F(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Nt(e, t) {
  return e ? he(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Xn(e, t) {
  return e ? F(e) && F(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : he(
    /* @__PURE__ */ Object.create(null),
    Gn(e),
    Gn(t ?? {})
  ) : t;
}
function ul(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = he(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = me(e[n], t[n]);
  return s;
}
function vr() {
  return {
    app: null,
    config: {
      isNativeTag: Ti,
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
let fl = 0;
function dl(e, t) {
  return function(n, i = null) {
    j(n) || (n = he({}, n)), i != null && !X(i) && (i = null);
    const r = vr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const d = r.app = {
      _uid: fl++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Kl,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return o.has(u) || (u && j(u.install) ? (o.add(u), u.install(d, ...h)) : j(u) && (o.add(u), u(d, ...h))), d;
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
          const v = d._ceVNode || re(n, i);
          return v.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(v, u, w), c = !0, d._container = u, u.__vue_app__ = d, Vs(v.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (Le(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return r.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = gt;
        gt = d;
        try {
          return u();
        } finally {
          gt = h;
        }
      }
    };
    return d;
  };
}
let gt = null;
const hl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Me(t)}Modifiers`] || e[`${ct(t)}Modifiers`];
function pl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Q;
  let i = s;
  const r = t.startsWith("update:"), o = r && hl(n, t.slice(7));
  o && (o.trim && (i = s.map((u) => se(u) ? u.trim() : u)), o.number && (i = s.map(xn)));
  let l, c = n[l = Ws(t)] || // also try camelCase event handler (#2249)
  n[l = Ws(Me(t))];
  !c && r && (c = n[l = Ws(ct(t))]), c && Le(
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
    e.emitted[l] = !0, Le(
      d,
      e,
      6,
      i
    );
  }
}
const gl = /* @__PURE__ */ new WeakMap();
function yr(e, t, s = !1) {
  const n = s ? gl : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!j(e)) {
    const c = (d) => {
      const u = yr(d, t, !0);
      u && (l = !0, he(o, u));
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (X(e) && n.set(e, null), null) : (F(r) ? r.forEach((c) => o[c] = null) : he(o, r), X(e) && n.set(e, o), o);
}
function Ns(e, t) {
  return !e || !Ms(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), G(e, t[0].toLowerCase() + t.slice(1)) || G(e, ct(t)) || G(e, t));
}
function Zn(e) {
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
    inheritAttrs: b
  } = e, R = Ss(e);
  let k, A;
  try {
    if (s.shapeFlag & 4) {
      const I = i || n, H = I;
      k = Ve(
        d.call(
          H,
          I,
          u,
          h,
          v,
          w,
          S
        )
      ), A = l;
    } else {
      const I = t;
      k = Ve(
        I.length > 1 ? I(
          h,
          { attrs: l, slots: o, emit: c }
        ) : I(
          h,
          null
        )
      ), A = t.props ? l : ml(l);
    }
  } catch (I) {
    qt.length = 0, Us(I, e, 1), k = re(lt);
  }
  let T = k;
  if (A && b !== !1) {
    const I = Object.keys(A), { shapeFlag: H } = T;
    I.length && H & 7 && (r && I.some(Rs) && (A = vl(
      A,
      r
    )), T = At(T, A, !1, !0));
  }
  return s.dirs && (T = At(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(s.dirs) : s.dirs), s.transition && Ln(T, s.transition), k = T, Ss(R), k;
}
const ml = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Ms(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, vl = (e, t) => {
  const s = {};
  for (const n in e)
    (!Rs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function yl(e, t, s) {
  const { props: n, children: i, component: r } = e, { props: o, children: l, patchFlag: c } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? Qn(n, o, d) : !!o;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const w = u[h];
        if (br(o, n, w) && !Ns(d, w))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? Qn(n, o, d) : !0 : !!o;
  return !1;
}
function Qn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (br(t, e, r) && !Ns(s, r))
      return !0;
  }
  return !1;
}
function br(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && X(n) && X(i) ? !Sn(n, i) : n !== i;
}
function bl({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const _r = {}, xr = () => Object.create(_r), wr = (e) => Object.getPrototypeOf(e) === _r;
function _l(e, t, s, n = !1) {
  const i = {}, r = xr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Sr(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ Eo(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function xl(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ J(i), [c] = e.propsOptions;
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
        if (Ns(e.emitsOptions, w))
          continue;
        const v = t[w];
        if (c)
          if (G(r, w))
            v !== r[w] && (r[w] = v, d = !0);
          else {
            const S = Me(w);
            i[S] = hn(
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
    Sr(e, t, i, r) && (d = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !G(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ct(h)) === h || !G(t, u))) && (c ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[u] !== void 0) && (i[h] = hn(
        c,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (r !== l)
      for (const h in r)
        (!t || !G(t, h)) && (delete r[h], d = !0);
  }
  d && Xe(e.attrs, "set", "");
}
function Sr(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Ht(c))
        continue;
      const d = t[c];
      let u;
      i && G(i, u = Me(c)) ? !r || !r.includes(u) ? s[u] = d : (l || (l = {}))[u] = d : Ns(e.emitsOptions, c) || (!(c in n) || d !== n[c]) && (n[c] = d, o = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ J(s), d = l || Q;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      s[h] = hn(
        i,
        c,
        h,
        d[h],
        e,
        !G(d, h)
      );
    }
  }
  return o;
}
function hn(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const l = G(o, "default");
    if (l && n === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && j(c)) {
        const { propsDefaults: d } = i;
        if (s in d)
          n = d[s];
        else {
          const u = ls(i);
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
    ] && (n === "" || n === ct(s)) && (n = !0));
  }
  return n;
}
const wl = /* @__PURE__ */ new WeakMap();
function Cr(e, t, s = !1) {
  const n = s ? wl : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let c = !1;
  if (!j(e)) {
    const u = (h) => {
      c = !0;
      const [w, v] = Cr(h, t, !0);
      he(o, w), v && l.push(...v);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return X(e) && n.set(e, Ct), Ct;
  if (F(r))
    for (let u = 0; u < r.length; u++) {
      const h = Me(r[u]);
      ei(h) && (o[h] = Q);
    }
  else if (r)
    for (const u in r) {
      const h = Me(u);
      if (ei(h)) {
        const w = r[u], v = o[h] = F(w) || j(w) ? { type: w } : he({}, w), S = v.type;
        let b = !1, R = !0;
        if (F(S))
          for (let k = 0; k < S.length; ++k) {
            const A = S[k], T = j(A) && A.name;
            if (T === "Boolean") {
              b = !0;
              break;
            } else T === "String" && (R = !1);
          }
        else
          b = j(S) && S.name === "Boolean";
        v[
          0
          /* shouldCast */
        ] = b, v[
          1
          /* shouldCastTrue */
        ] = R, (b || G(v, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return X(e) && n.set(e, d), d;
}
function ei(e) {
  return e[0] !== "$" && !Ht(e);
}
const On = (e) => e === "_" || e === "_ctx" || e === "$stable", $n = (e) => F(e) ? e.map(Ve) : [Ve(e)], Sl = (e, t, s) => {
  if (t._n)
    return t;
  const n = jo((...i) => $n(t(...i)), s);
  return n._c = !1, n;
}, Ir = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (On(i)) continue;
    const r = e[i];
    if (j(r))
      t[i] = Sl(i, r, n);
    else if (r != null) {
      const o = $n(r);
      t[i] = () => o;
    }
  }
}, Er = (e, t) => {
  const s = $n(t);
  e.slots.default = () => s;
}, Tr = (e, t, s) => {
  for (const n in t)
    (s || !On(n)) && (e[n] = t[n]);
}, Cl = (e, t, s) => {
  const n = e.slots = xr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Tr(n, t, s), s && Oi(n, "_", i, !0)) : Ir(t, n);
  } else t && Er(e, t);
}, Il = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, o = Q;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : Tr(i, t, s) : (r = !t.$stable, Ir(t, i)), o = t;
  } else t && (Er(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !On(l) && o[l] == null && delete i[l];
}, be = Rl;
function El(e) {
  return Tl(e);
}
function Tl(e, t) {
  const s = Os();
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
    setScopeId: v = Ke,
    insertStaticContent: S
  } = e, b = (a, f, p, x = null, y = null, g = null, P = void 0, E = null, C = !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !Ut(a, f) && (x = fs(a), $e(a, y, g, !0), a = null), f.patchFlag === -2 && (C = !1, f.dynamicChildren = null);
    const { type: m, ref: D, shapeFlag: M } = f;
    switch (m) {
      case js:
        R(a, f, p, x);
        break;
      case lt:
        k(a, f, p, x);
        break;
      case ys:
        a == null && A(f, p, x, P);
        break;
      case Y:
        Oe(
          a,
          f,
          p,
          x,
          y,
          g,
          P,
          E,
          C
        );
        break;
      default:
        M & 1 ? H(
          a,
          f,
          p,
          x,
          y,
          g,
          P,
          E,
          C
        ) : M & 6 ? st(
          a,
          f,
          p,
          x,
          y,
          g,
          P,
          E,
          C
        ) : (M & 64 || M & 128) && m.process(
          a,
          f,
          p,
          x,
          y,
          g,
          P,
          E,
          C,
          $t
        );
    }
    D != null && y ? Jt(D, a && a.ref, g, f || a, !f) : D == null && a && a.ref != null && Jt(a.ref, null, g, a, !0);
  }, R = (a, f, p, x) => {
    if (a == null)
      n(
        f.el = l(f.children),
        p,
        x
      );
    else {
      const y = f.el = a.el;
      f.children !== a.children && d(y, f.children);
    }
  }, k = (a, f, p, x) => {
    a == null ? n(
      f.el = c(f.children || ""),
      p,
      x
    ) : f.el = a.el;
  }, A = (a, f, p, x) => {
    [a.el, a.anchor] = S(
      a.children,
      f,
      p,
      x,
      a.el,
      a.anchor
    );
  }, T = ({ el: a, anchor: f }, p, x) => {
    let y;
    for (; a && a !== f; )
      y = w(a), n(a, p, x), a = y;
    n(f, p, x);
  }, I = ({ el: a, anchor: f }) => {
    let p;
    for (; a && a !== f; )
      p = w(a), i(a), a = p;
    i(f);
  }, H = (a, f, p, x, y, g, P, E, C) => {
    if (f.type === "svg" ? P = "svg" : f.type === "math" && (P = "mathml"), a == null)
      ae(
        f,
        p,
        x,
        y,
        g,
        P,
        E,
        C
      );
    else {
      const m = a.el && a.el._isVueCE ? a.el : null;
      try {
        m && m._beginPatch(), W(
          a,
          f,
          y,
          g,
          P,
          E,
          C
        );
      } finally {
        m && m._endPatch();
      }
    }
  }, ae = (a, f, p, x, y, g, P, E) => {
    let C, m;
    const { props: D, shapeFlag: M, transition: O, dirs: N } = a;
    if (C = a.el = o(
      a.type,
      g,
      D && D.is,
      D
    ), M & 8 ? u(C, a.children) : M & 16 && K(
      a.children,
      C,
      null,
      x,
      y,
      Zs(a, g),
      P,
      E
    ), N && ft(a, null, x, "created"), oe(C, a, a.scopeId, P, x), D) {
      for (const Z in D)
        Z !== "value" && !Ht(Z) && r(C, Z, null, D[Z], g, x);
      "value" in D && r(C, "value", null, D.value, g), (m = D.onVnodeBeforeMount) && Fe(m, x, a);
    }
    N && ft(a, null, x, "beforeMount");
    const z = Pl(y, O);
    z && O.beforeEnter(C), n(C, f, p), ((m = D && D.onVnodeMounted) || z || N) && be(() => {
      try {
        m && Fe(m, x, a), z && O.enter(C), N && ft(a, null, x, "mounted");
      } finally {
      }
    }, y);
  }, oe = (a, f, p, x, y) => {
    if (p && v(a, p), x)
      for (let g = 0; g < x.length; g++)
        v(a, x[g]);
    if (y) {
      let g = y.subTree;
      if (f === g || Ar(g.type) && (g.ssContent === f || g.ssFallback === f)) {
        const P = y.vnode;
        oe(
          a,
          P,
          P.scopeId,
          P.slotScopeIds,
          y.parent
        );
      }
    }
  }, K = (a, f, p, x, y, g, P, E, C = 0) => {
    for (let m = C; m < a.length; m++) {
      const D = a[m] = E ? qe(a[m]) : Ve(a[m]);
      b(
        null,
        D,
        f,
        p,
        x,
        y,
        g,
        P,
        E
      );
    }
  }, W = (a, f, p, x, y, g, P) => {
    const E = f.el = a.el;
    let { patchFlag: C, dynamicChildren: m, dirs: D } = f;
    C |= a.patchFlag & 16;
    const M = a.props || Q, O = f.props || Q;
    let N;
    if (p && dt(p, !1), (N = O.onVnodeBeforeUpdate) && Fe(N, p, f, a), D && ft(f, a, p, "beforeUpdate"), p && dt(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    m && (!a.dynamicChildren || a.dynamicChildren.length !== m.length) && (C = 0, P = !1, m = null), (M.innerHTML && O.innerHTML == null || M.textContent && O.textContent == null) && u(E, ""), m ? le(
      a.dynamicChildren,
      m,
      E,
      p,
      x,
      Zs(f, y),
      g
    ) : P || ee(
      a,
      f,
      E,
      null,
      p,
      x,
      Zs(f, y),
      g,
      !1
    ), C > 0) {
      if (C & 16)
        Ie(E, M, O, p, y);
      else if (C & 2 && M.class !== O.class && r(E, "class", null, O.class, y), C & 4 && r(E, "style", M.style, O.style, y), C & 8) {
        const z = f.dynamicProps;
        for (let Z = 0; Z < z.length; Z++) {
          const q = z[Z], ce = M[q], de = O[q];
          (de !== ce || q === "value") && r(E, q, ce, de, y, p);
        }
      }
      C & 1 && a.children !== f.children && u(E, f.children);
    } else !P && m == null && Ie(E, M, O, p, y);
    ((N = O.onVnodeUpdated) || D) && be(() => {
      N && Fe(N, p, f, a), D && ft(f, a, p, "updated");
    }, x);
  }, le = (a, f, p, x, y, g, P) => {
    for (let E = 0; E < f.length; E++) {
      const C = a[E], m = f[E], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === Y || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ut(C, m) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? h(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      b(
        C,
        m,
        D,
        null,
        x,
        y,
        g,
        P,
        !0
      );
    }
  }, Ie = (a, f, p, x, y) => {
    if (f !== p) {
      if (f !== Q)
        for (const g in f)
          !Ht(g) && !(g in p) && r(
            a,
            g,
            f[g],
            null,
            y,
            x
          );
      for (const g in p) {
        if (Ht(g)) continue;
        const P = p[g], E = f[g];
        P !== E && g !== "value" && r(a, g, E, P, y, x);
      }
      "value" in p && r(a, "value", f.value, p.value, y);
    }
  }, Oe = (a, f, p, x, y, g, P, E, C) => {
    const m = f.el = a ? a.el : l(""), D = f.anchor = a ? a.anchor : l("");
    let { patchFlag: M, dynamicChildren: O, slotScopeIds: N } = f;
    N && (E = E ? E.concat(N) : N), a == null ? (n(m, p, x), n(D, p, x), K(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      p,
      D,
      y,
      g,
      P,
      E,
      C
    )) : M > 0 && M & 64 && O && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === O.length ? (le(
      a.dynamicChildren,
      O,
      p,
      y,
      g,
      P,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || y && f === y.subTree) && Pr(
      a,
      f,
      !0
      /* shallow */
    )) : ee(
      a,
      f,
      p,
      D,
      y,
      g,
      P,
      E,
      C
    );
  }, st = (a, f, p, x, y, g, P, E, C) => {
    f.slotScopeIds = E, a == null ? f.shapeFlag & 512 ? y.ctx.activate(
      f,
      p,
      x,
      P,
      C
    ) : Lt(
      f,
      p,
      x,
      y,
      g,
      P,
      C
    ) : as(a, f, C);
  }, Lt = (a, f, p, x, y, g, P) => {
    const E = a.component = Ul(
      a,
      x,
      y
    );
    if (ur(a) && (E.ctx.renderer = $t), Fl(E, !1, P), E.asyncDep) {
      if (y && y.registerDep(E, ie, P), !a.el) {
        const C = E.subTree = re(lt);
        k(null, C, f, p), a.placeholder = C.el;
      }
    } else
      ie(
        E,
        a,
        f,
        p,
        y,
        g,
        P
      );
  }, as = (a, f, p) => {
    const x = f.component = a.component;
    if (yl(a, f, p))
      if (x.asyncDep && !x.asyncResolved) {
        B(x, f, p);
        return;
      } else
        x.next = f, x.update();
    else
      f.el = a.el, x.vnode = f;
  }, ie = (a, f, p, x, y, g, P) => {
    const E = () => {
      if (a.isMounted) {
        let { next: M, bu: O, u: N, parent: z, vnode: Z } = a;
        {
          const De = Mr(a);
          if (De) {
            M && (M.el = Z.el, B(a, M, P)), De.asyncDep.then(() => {
              be(() => {
                a.isUnmounted || m();
              }, y);
            });
            return;
          }
        }
        let q = M, ce;
        dt(a, !1), M ? (M.el = Z.el, B(a, M, P)) : M = Z, O && vs(O), (ce = M.props && M.props.onVnodeBeforeUpdate) && Fe(ce, z, M, Z), dt(a, !0);
        const de = Zn(a), ke = a.subTree;
        a.subTree = de, b(
          ke,
          de,
          // parent may have changed if it's in a teleport
          h(ke.el),
          // anchor may have changed if it's in a fragment
          fs(ke),
          a,
          y,
          g
        ), M.el = de.el, q === null && bl(a, de.el), N && be(N, y), (ce = M.props && M.props.onVnodeUpdated) && be(
          () => Fe(ce, z, M, Z),
          y
        );
      } else {
        let M;
        const { el: O, props: N } = f, { bm: z, m: Z, parent: q, root: ce, type: de } = a, ke = Gt(f);
        dt(a, !1), z && vs(z), !ke && (M = N && N.onVnodeBeforeMount) && Fe(M, q, f), dt(a, !0);
        {
          ce.ce && ce.ce._hasShadowRoot() && ce.ce._injectChildStyle(
            de,
            a.parent ? a.parent.type : void 0
          );
          const De = a.subTree = Zn(a);
          b(
            null,
            De,
            p,
            x,
            a,
            y,
            g
          ), f.el = De.el;
        }
        if (Z && be(Z, y), !ke && (M = N && N.onVnodeMounted)) {
          const De = f;
          be(
            () => Fe(M, q, De),
            y
          );
        }
        (f.shapeFlag & 256 || q && Gt(q.vnode) && q.vnode.shapeFlag & 256) && a.a && be(a.a, y), a.isMounted = !0, f = p = x = null;
      }
    };
    a.scope.on();
    const C = a.effect = new ji(E);
    a.scope.off();
    const m = a.update = C.run.bind(C), D = a.job = C.runIfDirty.bind(C);
    D.i = a, D.id = a.uid, C.scheduler = () => An(D), dt(a, !0), m();
  }, B = (a, f, p) => {
    f.component = a;
    const x = a.vnode.props;
    a.vnode = f, a.next = null, xl(a, f.props, x, p), Il(a, f.children, p), We(), Wn(a), ze();
  }, ee = (a, f, p, x, y, g, P, E, C = !1) => {
    const m = a && a.children, D = a ? a.shapeFlag : 0, M = f.children, { patchFlag: O, shapeFlag: N } = f;
    if (O > 0) {
      if (O & 128) {
        us(
          m,
          M,
          p,
          x,
          y,
          g,
          P,
          E,
          C
        );
        return;
      } else if (O & 256) {
        at(
          m,
          M,
          p,
          x,
          y,
          g,
          P,
          E,
          C
        );
        return;
      }
    }
    N & 8 ? (D & 16 && Ot(m, y, g), M !== m && u(p, M)) : D & 16 ? N & 16 ? us(
      m,
      M,
      p,
      x,
      y,
      g,
      P,
      E,
      C
    ) : Ot(m, y, g, !0) : (D & 8 && u(p, ""), N & 16 && K(
      M,
      p,
      x,
      y,
      g,
      P,
      E,
      C
    ));
  }, at = (a, f, p, x, y, g, P, E, C) => {
    a = a || Ct, f = f || Ct;
    const m = a.length, D = f.length, M = Math.min(m, D);
    let O;
    for (O = 0; O < M; O++) {
      const N = f[O] = C ? qe(f[O]) : Ve(f[O]);
      b(
        a[O],
        N,
        p,
        null,
        y,
        g,
        P,
        E,
        C
      );
    }
    m > D ? Ot(
      a,
      y,
      g,
      !0,
      !1,
      M
    ) : K(
      f,
      p,
      x,
      y,
      g,
      P,
      E,
      C,
      M
    );
  }, us = (a, f, p, x, y, g, P, E, C) => {
    let m = 0;
    const D = f.length;
    let M = a.length - 1, O = D - 1;
    for (; m <= M && m <= O; ) {
      const N = a[m], z = f[m] = C ? qe(f[m]) : Ve(f[m]);
      if (Ut(N, z))
        b(
          N,
          z,
          p,
          null,
          y,
          g,
          P,
          E,
          C
        );
      else
        break;
      m++;
    }
    for (; m <= M && m <= O; ) {
      const N = a[M], z = f[O] = C ? qe(f[O]) : Ve(f[O]);
      if (Ut(N, z))
        b(
          N,
          z,
          p,
          null,
          y,
          g,
          P,
          E,
          C
        );
      else
        break;
      M--, O--;
    }
    if (m > M) {
      if (m <= O) {
        const N = O + 1, z = N < D ? f[N].el : x;
        for (; m <= O; )
          b(
            null,
            f[m] = C ? qe(f[m]) : Ve(f[m]),
            p,
            z,
            y,
            g,
            P,
            E,
            C
          ), m++;
      }
    } else if (m > O)
      for (; m <= M; )
        $e(a[m], y, g, !0), m++;
    else {
      const N = m, z = m, Z = /* @__PURE__ */ new Map();
      for (m = z; m <= O; m++) {
        const we = f[m] = C ? qe(f[m]) : Ve(f[m]);
        we.key != null && Z.set(we.key, m);
      }
      let q, ce = 0;
      const de = O - z + 1;
      let ke = !1, De = 0;
      const kt = new Array(de);
      for (m = 0; m < de; m++) kt[m] = 0;
      for (m = N; m <= M; m++) {
        const we = a[m];
        if (ce >= de) {
          $e(we, y, g, !0);
          continue;
        }
        let Ue;
        if (we.key != null)
          Ue = Z.get(we.key);
        else
          for (q = z; q <= O; q++)
            if (kt[q - z] === 0 && Ut(we, f[q])) {
              Ue = q;
              break;
            }
        Ue === void 0 ? $e(we, y, g, !0) : (kt[Ue - z] = m + 1, Ue >= De ? De = Ue : ke = !0, b(
          we,
          f[Ue],
          p,
          null,
          y,
          g,
          P,
          E,
          C
        ), ce++);
      }
      const Fn = ke ? Ml(kt) : Ct;
      for (q = Fn.length - 1, m = de - 1; m >= 0; m--) {
        const we = z + m, Ue = f[we], Nn = f[we + 1], jn = we + 1 < D ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Nn.el || Rr(Nn)
        ) : x;
        kt[m] === 0 ? b(
          null,
          Ue,
          p,
          jn,
          y,
          g,
          P,
          E,
          C
        ) : ke && (q < 0 || m !== Fn[q] ? ut(Ue, p, jn, 2) : q--);
      }
    }
  }, ut = (a, f, p, x, y = null) => {
    const { el: g, type: P, transition: E, children: C, shapeFlag: m } = a;
    if (m & 6) {
      ut(a.component.subTree, f, p, x);
      return;
    }
    if (m & 128) {
      a.suspense.move(f, p, x);
      return;
    }
    if (m & 64) {
      P.move(a, f, p, $t);
      return;
    }
    if (P === Y) {
      n(g, f, p);
      for (let M = 0; M < C.length; M++)
        ut(C[M], f, p, x);
      n(a.anchor, f, p);
      return;
    }
    if (P === ys) {
      T(a, f, p);
      return;
    }
    if (x !== 2 && m & 1 && E)
      if (x === 0)
        E.persisted && !g[qs] ? n(g, f, p) : (E.beforeEnter(g), n(g, f, p), be(() => E.enter(g), y));
      else {
        const { leave: M, delayLeave: O, afterLeave: N } = E, z = () => {
          a.ctx.isUnmounted ? i(g) : n(g, f, p);
        }, Z = () => {
          const q = g._isLeaving || !!g[qs];
          g._isLeaving && g[qs](
            !0
            /* cancelled */
          ), E.persisted && !q ? z() : M(g, () => {
            z(), N && N();
          });
        };
        O ? O(g, z, Z) : Z();
      }
    else
      n(g, f, p);
  }, $e = (a, f, p, x = !1, y = !1) => {
    const {
      type: g,
      props: P,
      ref: E,
      children: C,
      dynamicChildren: m,
      shapeFlag: D,
      patchFlag: M,
      dirs: O,
      cacheIndex: N,
      memo: z
    } = a;
    if (M === -2 && (y = !1), E != null && (We(), Jt(E, null, p, a, !0), ze()), N != null && (f.renderCache[N] = void 0), D & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const Z = D & 1 && O, q = !Gt(a);
    let ce;
    if (q && (ce = P && P.onVnodeBeforeUnmount) && Fe(ce, f, a), D & 6)
      Gr(a.component, p, x);
    else {
      if (D & 128) {
        a.suspense.unmount(p, x);
        return;
      }
      Z && ft(a, null, f, "beforeUnmount"), D & 64 ? a.type.remove(
        a,
        f,
        p,
        $t,
        x
      ) : m && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !m.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (g !== Y || M > 0 && M & 64) ? Ot(
        m,
        f,
        p,
        !1,
        !0
      ) : (g === Y && M & 384 || !y && D & 16) && Ot(C, f, p), x && Dn(a);
    }
    const de = z != null && N == null;
    (q && (ce = P && P.onVnodeUnmounted) || Z || de) && be(() => {
      ce && Fe(ce, f, a), Z && ft(a, null, f, "unmounted"), de && (a.el = null);
    }, p);
  }, Dn = (a) => {
    const { type: f, el: p, anchor: x, transition: y } = a;
    if (f === Y) {
      Jr(p, x);
      return;
    }
    if (f === ys) {
      I(a);
      return;
    }
    const g = () => {
      i(p), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (a.shapeFlag & 1 && y && !y.persisted) {
      const { leave: P, delayLeave: E } = y, C = () => P(p, g);
      E ? E(a.el, g, C) : C();
    } else
      g();
  }, Jr = (a, f) => {
    let p;
    for (; a !== f; )
      p = w(a), i(a), a = p;
    i(f);
  }, Gr = (a, f, p) => {
    const { bum: x, scope: y, job: g, subTree: P, um: E, m: C, a: m } = a;
    ti(C), ti(m), x && vs(x), y.stop(), g && (g.flags |= 8, $e(P, a, f, p)), E && be(E, f), be(() => {
      a.isUnmounted = !0;
    }, f);
  }, Ot = (a, f, p, x = !1, y = !1, g = 0) => {
    for (let P = g; P < a.length; P++)
      $e(a[P], f, p, x, y);
  }, fs = (a) => {
    if (a.shapeFlag & 6)
      return fs(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const f = w(a.anchor || a.el), p = f && f[zo];
    return p ? w(p) : f;
  };
  let Bs = !1;
  const Un = (a, f, p) => {
    let x;
    a == null ? f._vnode && ($e(f._vnode, null, null, !0), x = f._vnode.component) : b(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      p
    ), f._vnode = a, Bs || (Bs = !0, Wn(x), ir(), Bs = !1);
  }, $t = {
    p: b,
    um: $e,
    m: ut,
    r: Dn,
    mt: Lt,
    mc: K,
    pc: ee,
    pbc: le,
    n: fs,
    o: e
  };
  return {
    render: Un,
    hydrate: void 0,
    createApp: dl(Un)
  };
}
function Zs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function dt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Pl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pr(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (F(n) && F(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = qe(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && Pr(o, l)), l.type === js && (l.patchFlag === -1 && (l = i[r] = qe(l)), l.el = o.el), l.type === lt && !l.el && (l.el = o.el);
    }
}
function Ml(e) {
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
function ti(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Rr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Rr(t.subTree) : null;
}
const Ar = (e) => e.__isSuspense;
function Rl(e, t) {
  t && t.pendingBranch ? F(e) ? t.effects.push(...e) : t.effects.push(e) : No(e);
}
const Y = /* @__PURE__ */ Symbol.for("v-fgt"), js = /* @__PURE__ */ Symbol.for("v-txt"), lt = /* @__PURE__ */ Symbol.for("v-cmt"), ys = /* @__PURE__ */ Symbol.for("v-stc"), qt = [];
let Se = null;
function L(e = !1) {
  qt.push(Se = e ? null : []);
}
function Al() {
  qt.pop(), Se = qt[qt.length - 1] || null;
}
let ns = 1;
function si(e, t = !1) {
  ns += e, e < 0 && Se && t && (Se.hasOnce = !0);
}
function Lr(e) {
  return e.dynamicChildren = ns > 0 ? Se || Ct : null, Al(), ns > 0 && Se && Se.push(e), e;
}
function U(e, t, s, n, i, r) {
  return Lr(
    _(
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
function ot(e, t, s, n, i) {
  return Lr(
    re(
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
function Ut(e, t) {
  return e.type === t.type && e.key === t.key;
}
const $r = ({ key: e }) => e ?? null, bs = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || /* @__PURE__ */ ne(e) || j(e) ? { i: Ee, r: e, k: t, f: !!s } : e : null);
function _(e, t = null, s = null, n = 0, i = null, r = e === Y ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $r(t),
    ref: t && bs(t),
    scopeId: or,
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
    ctx: Ee
  };
  return l ? (Es(c, s), r & 128 && e.normalize(c)) : s && (c.shapeFlag |= se(s) ? 8 : 16), ns > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Se && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Se.push(c), c;
}
const re = Ll;
function Ll(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === il) && (e = lt), Or(e)) {
    const l = At(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Es(l, s), ns > 0 && !r && Se && (l.shapeFlag & 6 ? Se[Se.indexOf(e)] = l : Se.push(l)), l.patchFlag = -2, l;
  }
  if (Hl(e) && (e = e.__vccOpts), t) {
    t = Ol(t);
    let { class: l, style: c } = t;
    l && !se(l) && (t.class = Be(l)), X(c) && (/* @__PURE__ */ Ds(c) && !F(c) && (c = he({}, c)), t.style = wn(c));
  }
  const o = se(e) ? 1 : Ar(e) ? 128 : Jo(e) ? 64 : X(e) ? 4 : j(e) ? 2 : 0;
  return _(
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
  return e ? /* @__PURE__ */ Ds(e) || wr(e) ? he({}, e) : e : null;
}
function At(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: c } = e, d = t ? $l(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && $r(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? F(r) ? r.concat(bs(t)) : [r, bs(t)] : bs(t)
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
    patchFlag: t && e.type !== Y ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && At(e.ssContent),
    ssFallback: e.ssFallback && At(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && n && Ln(
    u,
    c.clone(u)
  ), u;
}
function kr(e = " ", t = 0) {
  return re(js, null, e, t);
}
function Qs(e, t) {
  const s = re(ys, null, e);
  return s.staticCount = t, s;
}
function xe(e = "", t = !1) {
  return t ? (L(), ot(lt, null, e)) : re(lt, null, e);
}
function Ve(e) {
  return e == null || typeof e == "boolean" ? re(lt) : F(e) ? re(
    Y,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Or(e) ? qe(e) : re(js, null, String(e));
}
function qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : At(e);
}
function Es(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (F(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Es(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !wr(t) ? t._ctx = Ee : i === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (j(t)) {
    if (n & 65) {
      Es(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ee }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [kr(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function $l(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = Be([t.class, n.class]));
      else if (i === "style")
        t.style = wn([t.style, n.style]);
      else if (Ms(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(F(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Rs(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Fe(e, t, s, n = null) {
  Le(e, t, 7, [
    s,
    n
  ]);
}
const kl = vr();
let Dl = 0;
function Ul(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || kl, r = {
    uid: Dl++,
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
    scope: new Ui(
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
    propsOptions: Cr(n, i),
    emitsOptions: yr(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Q,
    data: Q,
    props: Q,
    attrs: Q,
    slots: Q,
    refs: Q,
    setupState: Q,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = pl.bind(null, r), e.ce && e.ce(r), r;
}
let ye = null;
const Dr = () => ye || Ee;
let Ts, pn;
{
  const e = Os(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Ts = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ye = s
  ), pn = t(
    "__VUE_SSR_SETTERS__",
    (s) => is = s
  );
}
const ls = (e) => {
  const t = ye;
  return Ts(e), e.scope.on(), () => {
    e.scope.off(), Ts(t);
  };
}, ni = () => {
  ye && ye.scope.off(), Ts(null);
};
function Ur(e) {
  return e.vnode.shapeFlag & 4;
}
let is = !1;
function Fl(e, t = !1, s = !1) {
  t && pn(t);
  const { props: n, children: i } = e.vnode, r = Ur(e);
  _l(e, n, r, t), Cl(e, i, s || t);
  const o = r ? Nl(e, t) : void 0;
  return t && pn(!1), o;
}
function Nl(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, rl);
  const { setup: n } = s;
  if (n) {
    We();
    const i = e.setupContext = n.length > 1 ? Vl(e) : null, r = ls(e), o = os(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Mi(o);
    if (ze(), r(), (l || e.sp) && !Gt(e) && ar(e), l) {
      if (o.then(ni, ni), t)
        return o.then((c) => {
          ii(e, c);
        }).catch((c) => {
          Us(c, e, 0);
        });
      e.asyncDep = o;
    } else
      ii(e, o);
  } else
    Fr(e);
}
function ii(e, t, s) {
  j(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : X(t) && (e.setupState = er(t)), Fr(e);
}
function Fr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Ke);
  {
    const i = ls(e);
    We();
    try {
      ol(e);
    } finally {
      ze(), i();
    }
  }
}
const jl = {
  get(e, t) {
    return ge(e, "get", ""), e[t];
  }
};
function Vl(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, jl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Vs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(er(Rn(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Yt)
        return Yt[s](e);
    },
    has(t, s) {
      return s in t || s in Yt;
    }
  })) : e.proxy;
}
function Hl(e) {
  return j(e) && "__vccOpts" in e;
}
const rt = (e, t) => /* @__PURE__ */ $o(e, t, is), Kl = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let gn;
const ri = typeof window < "u" && window.trustedTypes;
if (ri)
  try {
    gn = /* @__PURE__ */ ri.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Nr = gn ? (e) => gn.createHTML(e) : (e) => e, Bl = "http://www.w3.org/2000/svg", Wl = "http://www.w3.org/1998/Math/MathML", Ge = typeof document < "u" ? document : null, oi = Ge && /* @__PURE__ */ Ge.createElement("template"), zl = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? Ge.createElementNS(Bl, e) : t === "mathml" ? Ge.createElementNS(Wl, e) : s ? Ge.createElement(e, { is: s }) : Ge.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Ge.createTextNode(e),
  createComment: (e) => Ge.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ge.querySelector(e),
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
      oi.innerHTML = Nr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = oi.content;
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
}, Jl = /* @__PURE__ */ Symbol("_vtc");
function Gl(e, t, s) {
  const n = e[Jl];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const li = /* @__PURE__ */ Symbol("_vod"), Yl = /* @__PURE__ */ Symbol("_vsh"), ql = /* @__PURE__ */ Symbol(""), Xl = /(?:^|;)\s*display\s*:/;
function Zl(e, t, s) {
  const n = e.style, i = se(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (se(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && jt(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && jt(n, o, "");
    for (const o in s) {
      o === "display" && (r = !0);
      const l = s[o];
      l != null ? ec(
        e,
        o,
        !se(t) && t ? t[o] : void 0,
        l
      ) || jt(n, o, l) : jt(n, o, "");
    }
  } else if (i) {
    if (t !== s) {
      const o = n[ql];
      o && (s += ";" + o), n.cssText = s, r = Xl.test(s);
    }
  } else t && e.removeAttribute("style");
  li in e && (e[li] = r ? n.display : "", e[Yl] && (n.display = "none"));
}
const ci = /\s*!important$/;
function jt(e, t, s) {
  if (F(s))
    s.forEach((n) => jt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Ql(e, t);
    ci.test(s) ? e.setProperty(
      ct(n),
      s.replace(ci, ""),
      "important"
    ) : e[n] = s;
  }
}
const ai = ["Webkit", "Moz", "ms"], en = {};
function Ql(e, t) {
  const s = en[t];
  if (s)
    return s;
  let n = Me(t);
  if (n !== "filter" && n in e)
    return en[t] = n;
  n = Li(n);
  for (let i = 0; i < ai.length; i++) {
    const r = ai[i] + n;
    if (r in e)
      return en[t] = r;
  }
  return t;
}
function ec(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && se(n) && s === n;
}
const ui = "http://www.w3.org/1999/xlink";
function fi(e, t, s, n, i, r = io(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(ui, t.slice(6, t.length)) : e.setAttributeNS(ui, t, s) : s == null || r && !$i(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Pe(s) ? String(s) : s
  );
}
function di(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Nr(s) : s);
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
    l === "boolean" ? s = $i(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function wt(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function tc(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const hi = /* @__PURE__ */ Symbol("_vei");
function sc(e, t, s, n, i = null) {
  const r = e[hi] || (e[hi] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [l, c] = rc(t);
    if (n) {
      const d = r[t] = cc(
        n,
        i
      );
      wt(e, l, d, c);
    } else o && (tc(e, l, o, c), r[t] = void 0);
  }
}
const nc = /(Once|Passive|Capture)$/, ic = /^on:?(?:Once|Passive|Capture)$/;
function rc(e) {
  let t, s;
  for (; (s = e.match(nc)) && !ic.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : ct(e.slice(2)), t];
}
let tn = 0;
const oc = /* @__PURE__ */ Promise.resolve(), lc = () => tn || (oc.then(() => tn = 0), tn = Date.now());
function cc(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const i = s.value;
    if (F(i)) {
      const r = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        r.call(n), n._stopped = !0;
      };
      const o = i.slice(), l = [n];
      for (let c = 0; c < o.length && !n._stopped; c++) {
        const d = o[c];
        d && Le(
          d,
          t,
          5,
          l
        );
      }
    } else
      Le(
        i,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = lc(), s;
}
const pi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ac = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? Gl(e, n, o) : t === "style" ? Zl(e, s, n) : Ms(t) ? Rs(t) || sc(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : uc(e, t, n, o)) ? (di(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && fi(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (fc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !se(n))) ? di(e, Me(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), fi(e, t, n, o));
};
function uc(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && pi(t) && j(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return pi(t) && se(s) ? !1 : t in e;
}
function fc(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = Me(t);
  return Array.isArray(s) ? s.some((i) => Me(i) === n) : Object.keys(s).some((i) => Me(i) === n);
}
const gi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return F(t) ? (s) => vs(t, s) : t;
};
function dc(e) {
  e.target.composing = !0;
}
function mi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const sn = /* @__PURE__ */ Symbol("_assign");
function vi(e, t, s) {
  return t && (e = e.trim()), s && (e = xn(e)), e;
}
const Vt = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[sn] = gi(i);
    const r = n || i.props && i.props.type === "number";
    wt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[sn](vi(e.value, s, r));
    }), (s || r) && wt(e, "change", () => {
      e.value = vi(e.value, s, r);
    }), t || (wt(e, "compositionstart", dc), wt(e, "compositionend", mi), wt(e, "change", mi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: r } }, o) {
    if (e[sn] = gi(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? xn(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === c) || (e.value = c);
  }
}, hc = ["ctrl", "shift", "alt", "meta"], pc = {
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
  exact: (e, t) => hc.some((s) => e[`${s}Key`] && !t.includes(s))
}, kn = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = pc[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  });
}, gc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, jr = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (i) => {
    if (!("key" in i))
      return;
    const r = ct(i.key);
    if (t.some(
      (o) => o === r || gc[o] === r
    ))
      return e(i);
  });
}, mc = /* @__PURE__ */ he({ patchProp: ac }, zl);
let yi;
function vc() {
  return yi || (yi = El(mc));
}
const Vr = (...e) => {
  const t = vc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = bc(n);
    if (!i) return;
    const r = t._component;
    !j(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = s(i, !1, yc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function yc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function bc(e) {
  return se(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Hr;
const Hs = (e) => Hr = e, Kr = (
  /* istanbul ignore next */
  Symbol()
);
function mn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Xt;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Xt || (Xt = {}));
function _c() {
  const e = Fi(!0), t = e.run(() => /* @__PURE__ */ Te({}));
  let s = [], n = [];
  const i = Rn({
    install(r) {
      Hs(i), i._a = r, r.provide(Kr, i), r.config.globalProperties.$pinia = i, n.forEach((o) => s.push(o)), n = [];
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
const Br = () => {
};
function bi(e, t, s, n = Br) {
  e.push(t);
  const i = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), n());
  };
  return !s && Ni() && oo(i), i;
}
function _t(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const xc = (e) => e(), _i = Symbol(), nn = Symbol();
function vn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    mn(i) && mn(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ ne(n) && !/* @__PURE__ */ Qe(n) ? e[s] = vn(i, n) : e[s] = n;
  }
  return e;
}
const wc = (
  /* istanbul ignore next */
  Symbol()
);
function Sc(e) {
  return !mn(e) || !e.hasOwnProperty(wc);
}
const { assign: nt } = Object;
function Cc(e) {
  return !!(/* @__PURE__ */ ne(e) && e.effect);
}
function Ic(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t, l = s.state.value[e];
  let c;
  function d() {
    l || (s.state.value[e] = i ? i() : {});
    const u = /* @__PURE__ */ Ro(s.state.value[e]);
    return nt(u, r, Object.keys(o || {}).reduce((h, w) => (h[w] = Rn(rt(() => {
      Hs(s);
      const v = s._s.get(e);
      return o[w].call(v, v);
    })), h), {}));
  }
  return c = Wr(e, d, t, s, n, !0), c;
}
function Wr(e, t, s = {}, n, i, r) {
  let o;
  const l = nt({ actions: {} }, s), c = { deep: !0 };
  let d, u, h = [], w = [], v;
  const S = n.state.value[e];
  !r && !S && (n.state.value[e] = {});
  let b;
  function R(K) {
    let W;
    d = u = !1, typeof K == "function" ? (K(n.state.value[e]), W = {
      type: Xt.patchFunction,
      storeId: e,
      events: v
    }) : (vn(n.state.value[e], K), W = {
      type: Xt.patchObject,
      payload: K,
      storeId: e,
      events: v
    });
    const le = b = Symbol();
    sr().then(() => {
      b === le && (d = !0);
    }), u = !0, _t(h, W, n.state.value[e]);
  }
  const k = r ? function() {
    const { state: W } = s, le = W ? W() : {};
    this.$patch((Ie) => {
      nt(Ie, le);
    });
  } : (
    /* istanbul ignore next */
    Br
  );
  function A() {
    o.stop(), h = [], w = [], n._s.delete(e);
  }
  const T = (K, W = "") => {
    if (_i in K)
      return K[nn] = W, K;
    const le = function() {
      Hs(n);
      const Ie = Array.from(arguments), Oe = [], st = [];
      function Lt(B) {
        Oe.push(B);
      }
      function as(B) {
        st.push(B);
      }
      _t(w, {
        args: Ie,
        name: le[nn],
        store: H,
        after: Lt,
        onError: as
      });
      let ie;
      try {
        ie = K.apply(this && this.$id === e ? this : H, Ie);
      } catch (B) {
        throw _t(st, B), B;
      }
      return ie instanceof Promise ? ie.then((B) => (_t(Oe, B), B)).catch((B) => (_t(st, B), Promise.reject(B))) : (_t(Oe, ie), ie);
    };
    return le[_i] = !0, le[nn] = W, le;
  }, I = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: bi.bind(null, w),
    $patch: R,
    $reset: k,
    $subscribe(K, W = {}) {
      const le = bi(h, K, W.detached, () => Ie()), Ie = o.run(() => zt(() => n.state.value[e], (Oe) => {
        (W.flush === "sync" ? u : d) && K({
          storeId: e,
          type: Xt.direct,
          events: v
        }, Oe);
      }, nt({}, c, W)));
      return le;
    },
    $dispose: A
  }, H = /* @__PURE__ */ ks(I);
  n._s.set(e, H);
  const oe = (n._a && n._a.runWithContext || xc)(() => n._e.run(() => (o = Fi()).run(() => t({ action: T }))));
  for (const K in oe) {
    const W = oe[K];
    if (/* @__PURE__ */ ne(W) && !Cc(W) || /* @__PURE__ */ Qe(W))
      r || (S && Sc(W) && (/* @__PURE__ */ ne(W) ? W.value = S[K] : vn(W, S[K])), n.state.value[e][K] = W);
    else if (typeof W == "function") {
      const le = T(W, K);
      oe[K] = le, l.actions[K] = W;
    }
  }
  return nt(H, oe), nt(/* @__PURE__ */ J(H), oe), Object.defineProperty(H, "$state", {
    get: () => n.state.value[e],
    set: (K) => {
      R((W) => {
        nt(W, K);
      });
    }
  }), n._p.forEach((K) => {
    nt(H, o.run(() => K({
      store: H,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), S && r && s.hydrate && s.hydrate(H.$state, S), d = !0, u = !0, H;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ks(e, t, s) {
  let n, i;
  const r = typeof t == "function";
  typeof e == "string" ? (n = e, i = r ? s : t) : (i = e, n = e.id);
  function o(l, c) {
    const d = Ho();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (d ? Wt(Kr, null) : null), l && Hs(l), l = Hr, l._s.has(n) || (r ? Wr(n, t, i, l) : Ic(n, i, l)), l._s.get(n);
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
function rn() {
  return {
    volume: 65,
    playMode: "list",
    position: null,
    autoPlayOnNewCue: !0,
    providers: Ec(),
    customCueRules: []
  };
}
const pe = /* @__PURE__ */ Ks("settings", {
  state: () => ({
    settings: rn(),
    storage: null
  }),
  getters: {
    defaults: () => rn()
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = rn();
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
class Tc {
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
const xi = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function Pc(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const i = new RegExp(xi.source, "g"), r = [];
    let o;
    for (; (o = i.exec(n)) !== null; ) {
      const c = parseInt(o[1], 10), d = parseInt(o[2], 10), u = o[3] ?? "", h = u ? parseInt(u.padEnd(3, "0"), 10) : 0;
      r.push(c * 60 + d + h / 1e3);
    }
    if (r.length === 0) continue;
    const l = n.replace(new RegExp(xi.source, "g"), "").trim();
    if (l !== "")
      for (const c of r)
        s.push({ time: c, text: l });
  }
  s.sort((n, i) => n.time - i.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function wi(e, t) {
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
      return this.ctx().extensionSettings[St] ?? null;
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
      s.extensionSettings[St] = t, s.saveSettingsDebounced();
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
    return `${St}__settings`;
  }
  cachePrefix() {
    return `${St}:cache:`;
  }
  cacheKey(t) {
    return `${this.cachePrefix()}${t}`;
  }
}
function Rc() {
  return new Mc();
}
const St = "st-music-player", Si = "stmp_cursor", Ci = "stmp_userlist";
class Ac {
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
  getProvider(t) {
    return this.providers.find((s) => s.id === t);
  }
}
class Lc {
  constructor(t) {
    this.id = "netease", this.name = "网易云", this.baseURL = t?.baseURL?.trim() || "https://music-api.gdstudio.xyz/api.php";
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
    for (let s = 0; s < 3; s++) {
      const n = await this.fetchJson(
        `${this.baseURL}?types=search&name=${encodeURIComponent(t)}&count=20&pages=1`
      );
      if (Array.isArray(n) && n.length > 0)
        return n.map((i) => ({
          id: String(i.id ?? ""),
          name: String(i.name ?? ""),
          artist: Array.isArray(i.artist) ? i.artist.join(", ") : String(i.artist ?? ""),
          duration: i.duration ? Number(i.duration) : void 0,
          provider: this.id,
          picId: i.pic_id ? String(i.pic_id) : void 0
        }));
      s < 2 && await new Promise((i) => setTimeout(i, 500));
    }
    return [];
  }
  async resolve(t, s) {
    let n = null;
    for (let o = 0; o < 3 && (n = await this.fetchJson(
      `${this.baseURL}?types=url&id=${encodeURIComponent(t)}&br=320`
    ), !(n && n.url)); o++)
      o < 2 && await new Promise((l) => setTimeout(l, 400));
    if (!n || !n.url)
      return console.warn(`[NetEase] resolve: url endpoint returned empty for id=${t}`), null;
    const [i, r] = await Promise.all([
      this.fetchJson(`${this.baseURL}?types=lyric&id=${encodeURIComponent(t)}`),
      s ? this.fetchJson(`${this.baseURL}?types=pic&id=${encodeURIComponent(s)}`) : Promise.resolve(null)
    ]);
    return {
      url: String(n.url),
      lyric: i?.lyric ? String(i.lyric) : void 0,
      cover: r?.url ? String(r.url) : void 0,
      name: "",
      artist: "",
      source: this.id
    };
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
class $c {
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
function yn(e) {
  const s = e.filter((n) => n.enabled).sort((n, i) => n.priority - i.priority).map((n) => {
    const i = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new Lc({ baseURL: i.baseURL });
      case "local":
        return new Oc({
          storage: i.storage ? i.storage : void 0
        });
      case "custom":
        return new $c({
          searchURL: i.searchURL,
          resolveURL: i.resolveURL
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new Ac(s);
}
function gs() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const cs = /* @__PURE__ */ Ks("playlist", {
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
      return pe().settings.playMode;
    }
  },
  actions: {
    init(e) {
      this.chatIndexer = e;
    },
    setChatId(e) {
      this.chatId = e, this.list = this.list.filter((n) => n.source !== "chat"), this.loadFromStorage();
      const s = pe().storage;
      if (s) {
        const n = s.getMetadata(Si);
        n && n.chatId === e && this.chatIndexer?.setCursor(e, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const t = pe().storage;
      if (!t || !this.chatId) return;
      const s = t.getMetadata(Ci);
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
        id: gs(),
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
        id: gs(),
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
        id: gs(),
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
      const s = pe(), n = s.storage;
      if (!n) return;
      let i = null;
      if (t.source === "local" && t.localBlobKey) {
        const o = await n.getBlob(t.localBlobKey);
        o && (i = {
          url: URL.createObjectURL(o),
          name: t.song,
          artist: t.artist ?? "",
          source: "local"
        });
      }
      if (!i && t.providerId && t.providerTrackId) {
        const l = await yn(s.settings.providers).resolve(t.providerId, t.providerTrackId, t.providerPicId);
        l && (l.name = t.song, l.artist = t.artist ?? l.artist, i = l);
      }
      if (!i && t.song) {
        const o = yn(s.settings.providers), l = t.artist ? `${t.song} ${t.artist}` : t.song, c = await o.searchAll(l);
        for (let d = 0; d < Math.min(c.length, 3); d++) {
          const u = c[d], h = await o.resolve(u.id, u.provider, u.picId);
          if (h) {
            t.providerId = u.provider, t.providerTrackId = u.id, t.providerPicId = u.picId, h.name = u.name, h.artist = u.artist, i = h;
            break;
          }
        }
      }
      if (!i) {
        console.warn(`[playlist] resolve failed for "${t.song}"`), typeof toastr < "u" && toastr.warning(`无法播放: ${t.song}`);
        return;
      }
      await vt().loadAndPlay(i);
    },
    handleNewCues(e) {
      if (e.length === 0) return;
      const t = pe();
      let s = null;
      for (const n of e)
        for (const i of n.cues) {
          const r = {
            id: gs(),
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
      const t = pe(), s = this.chatIndexer.scanMessage(
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
      const t = pe().storage;
      if (!t || !this.chatId) return;
      const s = this.list.filter((n) => n.source === "user");
      t.setMetadata(Ci, s);
    },
    getCursor() {
      return !this.chatIndexer || !this.chatId ? -1 : this.chatIndexer.getCursor(this.chatId);
    },
    setCursor(e) {
      if (!this.chatIndexer || !this.chatId) return;
      this.chatIndexer.setCursor(this.chatId, e);
      const s = pe().storage;
      s && s.setMetadata(Si, {
        chatId: this.chatId,
        lastScannedMessageId: e,
        updatedAt: Date.now()
      });
    }
  }
}), vt = /* @__PURE__ */ Ks("player", {
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
      const e = new Tc();
      this.audioEngine = e;
      const t = vt();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = wi(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        t.currentLyricIndex = n;
      }), e.on("ended", () => {
        cs().next();
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
      this.volume = e, this.audioEngine?.setVolume(e / 100), pe().setVolume(e);
    },
    updateLyrics(e) {
      this.lyrics = Pc(e), this.currentLyricIndex = -1;
    },
    getActiveLyric() {
      return wi(this.lyrics, this.currentTime);
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), kc = /* @__PURE__ */ Ks("search", {
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
}), Dc = ["width", "height"], Uc = {
  key: 0,
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}, Fc = {
  key: 10,
  points: "6 9 12 15 18 9"
}, Nc = {
  key: 11,
  points: "18 15 12 9 6 15"
}, jc = {
  key: 14,
  points: "20 6 9 17 4 12"
}, Vc = /* @__PURE__ */ mt({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (L(), U("svg", {
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
      e.name === "play" ? (L(), U("polygon", Uc)) : e.name === "pause" ? (L(), U(Y, { key: 1 }, [
        s[0] || (s[0] = _("rect", {
          x: "6",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[1] || (s[1] = _("rect", {
          x: "14",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1))
      ], 64)) : e.name === "prev" ? (L(), U(Y, { key: 2 }, [
        s[2] || (s[2] = _("polygon", {
          points: "19 20 9 12 19 4 19 20",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[3] || (s[3] = _("line", {
          x1: "5",
          y1: "19",
          x2: "5",
          y2: "5"
        }, null, -1))
      ], 64)) : e.name === "next" ? (L(), U(Y, { key: 3 }, [
        s[4] || (s[4] = _("polygon", {
          points: "5 4 15 12 5 20 5 4",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[5] || (s[5] = _("line", {
          x1: "19",
          y1: "5",
          x2: "19",
          y2: "19"
        }, null, -1))
      ], 64)) : e.name === "repeat" ? (L(), U(Y, { key: 4 }, [
        s[6] || (s[6] = _("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = _("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = _("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = _("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (L(), U(Y, { key: 5 }, [
        s[10] || (s[10] = Qs('<polyline points="17 1 21 5 17 9" data-v-c418e8c7></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-c418e8c7></path><polyline points="7 23 3 19 7 15" data-v-c418e8c7></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-c418e8c7></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-c418e8c7>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (L(), U(Y, { key: 6 }, [
        s[11] || (s[11] = Qs('<polyline points="16 3 21 3 21 8" data-v-c418e8c7></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-c418e8c7></line><polyline points="21 16 21 21 16 21" data-v-c418e8c7></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-c418e8c7></line><line x1="4" y1="4" x2="9" y2="9" data-v-c418e8c7></line>', 5))
      ], 64)) : e.name === "search" ? (L(), U(Y, { key: 7 }, [
        s[12] || (s[12] = _("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1)),
        s[13] || (s[13] = _("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1))
      ], 64)) : e.name === "plus" ? (L(), U(Y, { key: 8 }, [
        s[14] || (s[14] = _("line", {
          x1: "12",
          y1: "5",
          x2: "12",
          y2: "19"
        }, null, -1)),
        s[15] || (s[15] = _("line", {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12"
        }, null, -1))
      ], 64)) : e.name === "x" ? (L(), U(Y, { key: 9 }, [
        s[16] || (s[16] = _("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }, null, -1)),
        s[17] || (s[17] = _("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        }, null, -1))
      ], 64)) : e.name === "chevron-down" ? (L(), U("polyline", Fc)) : e.name === "chevron-up" ? (L(), U("polyline", Nc)) : e.name === "music" ? (L(), U(Y, { key: 12 }, [
        s[18] || (s[18] = _("path", { d: "M9 18V5l12-2v13" }, null, -1)),
        s[19] || (s[19] = _("circle", {
          cx: "6",
          cy: "18",
          r: "3"
        }, null, -1)),
        s[20] || (s[20] = _("circle", {
          cx: "18",
          cy: "16",
          r: "3"
        }, null, -1))
      ], 64)) : e.name === "volume" ? (L(), U(Y, { key: 13 }, [
        s[21] || (s[21] = _("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = _("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = _("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "check" ? (L(), U("polyline", jc)) : e.name === "loader" ? (L(), U(Y, { key: 15 }, [
        s[24] || (s[24] = Qs('<line x1="12" y1="2" x2="12" y2="6" data-v-c418e8c7></line><line x1="12" y1="18" x2="12" y2="22" data-v-c418e8c7></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-c418e8c7></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-c418e8c7></line><line x1="2" y1="12" x2="6" y2="12" data-v-c418e8c7></line><line x1="18" y1="12" x2="22" y2="12" data-v-c418e8c7></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-c418e8c7></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-c418e8c7></line>', 8))
      ], 64)) : xe("", !0)
    ], 8, Dc));
  }
}), yt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, _e = /* @__PURE__ */ yt(Vc, [["__scopeId", "data-v-c418e8c7"]]), Hc = { class: "stmp-collapsed-title" }, Kc = ["aria-label"], Bc = /* @__PURE__ */ mt({
  __name: "CollapsedBar",
  emits: ["expand"],
  setup(e) {
    const t = vt(), s = rt(() => t.currentTrack?.name || "未播放");
    return (n, i) => (L(), U("div", {
      class: "stmp-collapsed-bar",
      onClick: i[1] || (i[1] = (r) => n.$emit("expand"))
    }, [
      _("span", Hc, fe(s.value), 1),
      _("button", {
        class: "stmp-icon-btn",
        "aria-label": V(t).isPlaying ? "暂停" : "播放",
        onClick: i[0] || (i[0] = kn((r) => V(t).togglePlay(), ["stop"]))
      }, [
        re(_e, {
          name: V(t).isPlaying ? "pause" : "play",
          size: 16
        }, null, 8, ["name"])
      ], 8, Kc)
    ]));
  }
}), Wc = /* @__PURE__ */ yt(Bc, [["__scopeId", "data-v-926fa078"]]), zc = { class: "stmp-playlist" }, Jc = { class: "stmp-upload-area" }, Gc = {
  key: 0,
  class: "stmp-empty"
}, Yc = { class: "stmp-group-label" }, qc = ["onClick"], Xc = { class: "stmp-item-index" }, Zc = { class: "stmp-item-info" }, Qc = { class: "stmp-item-song" }, ea = {
  key: 0,
  class: "stmp-item-artist"
}, ta = ["onClick"], sa = /* @__PURE__ */ mt({
  __name: "PlaylistView",
  setup(e) {
    const t = cs(), s = pe(), n = /* @__PURE__ */ Te(null), i = () => {
      n.value?.click();
    }, r = async (u) => {
      const h = u.target;
      if (!h.files || !h.files[0]) return;
      const w = h.files[0], v = `stmp:audio:${Date.now()}-${w.name}`, S = s.storage;
      S && (await S.setBlob(v, w), t.addLocalFile(w.name, v)), h.value = "";
    }, o = rt(() => {
      const u = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((h, w) => {
        u[h.source] && u[h.source].push({ index: w, item: h });
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
    return (u, h) => (L(), U("div", zc, [
      _("div", Jc, [
        _("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: n,
          onChange: r,
          style: { display: "none" }
        }, null, 544),
        _("button", {
          class: "stmp-upload-btn",
          "aria-label": "上传本地音频",
          onClick: i
        }, " + 添加本地文件 ")
      ]),
      V(t).isEmpty ? (L(), U("div", Gc, "No Songs")) : (L(), U(Y, { key: 1 }, Tt(["chat", "user", "local"], (w) => _("div", {
        key: w,
        class: "stmp-group"
      }, [
        o.value[w].length ? (L(), U(Y, { key: 0 }, [
          _("div", Yc, fe(l[w]), 1),
          (L(!0), U(Y, null, Tt(o.value[w], (v) => (L(), U("div", {
            key: v.item.id,
            class: Be(["stmp-item", { active: v.index === V(t).currentIndex }]),
            onClick: (S) => c(v.index)
          }, [
            _("span", Xc, fe(v.index + 1), 1),
            _("div", Zc, [
              _("span", Qc, fe(v.item.song), 1),
              v.item.artist ? (L(), U("span", ea, fe(v.item.artist), 1)) : xe("", !0)
            ]),
            _("button", {
              class: "stmp-item-del",
              onClick: kn((S) => d(v.index), ["stop"])
            }, [
              re(_e, {
                name: "x",
                size: 14
              })
            ], 8, ta)
          ], 10, qc))), 128))
        ], 64)) : xe("", !0)
      ])), 64))
    ]));
  }
}), na = /* @__PURE__ */ yt(sa, [["__scopeId", "data-v-000dd110"]]), ia = { class: "stmp-search" }, ra = { class: "stmp-search-bar" }, oa = ["disabled"], la = {
  key: 0,
  class: "stmp-search-error"
}, ca = {
  key: 1,
  class: "stmp-search-loading"
}, aa = {
  key: 2,
  class: "stmp-search-empty"
}, ua = {
  key: 3,
  class: "stmp-results"
}, fa = ["onClick"], da = { class: "stmp-result-name" }, ha = {
  key: 0,
  class: "stmp-result-artist"
}, pa = ["aria-label", "onClick"], ga = /* @__PURE__ */ mt({
  __name: "SearchView",
  setup(e) {
    const t = kc(), s = cs(), n = pe(), i = /* @__PURE__ */ Te(t.keyword), r = /* @__PURE__ */ Te(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ Te(null);
    async function l() {
      t.setKeyword(i.value);
      const v = yn(n.settings.providers);
      await t.search(v);
    }
    const c = () => {
      l();
    };
    function d(v) {
      const S = v.provider + v.id;
      if (o.value === S) return;
      o.value = S;
      const b = s.list.length;
      s.addFromSearch(v);
      const R = s.list.length - 1;
      R >= b && s.play(R), setTimeout(() => {
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
    return (v, S) => (L(), U("div", ia, [
      _("div", ra, [
        Ft(_("input", {
          "onUpdate:modelValue": S[0] || (S[0] = (b) => i.value = b),
          class: "stmp-search-input",
          placeholder: "Search Song...",
          onKeydown: jr(l, ["enter"])
        }, null, 544), [
          [Vt, i.value]
        ]),
        _("button", {
          class: "stmp-icon-btn",
          disabled: V(t).isSearching,
          onClick: l
        }, [
          V(t).isSearching ? (L(), ot(_e, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (L(), ot(_e, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, oa)
      ]),
      V(t).error ? (L(), U("div", la, [
        _("span", null, fe(V(t).error), 1),
        _("button", {
          class: "stmp-retry-btn",
          "aria-label": "重试搜索",
          onClick: c
        }, "重试")
      ])) : xe("", !0),
      V(t).isSearching ? (L(), U("div", ca, "Searching...")) : i.value && !V(t).results.length ? (L(), U("div", aa, " No results ")) : xe("", !0),
      V(t).results.length ? (L(), U("div", ua, [
        (L(!0), U(Y, null, Tt(V(t).results, (b) => (L(), U("div", {
          key: b.provider + b.id,
          class: Be(["stmp-result", { "stmp-result-playing": w(b) }])
        }, [
          _("div", {
            class: "stmp-result-info",
            onClick: (R) => d(b)
          }, [
            _("span", da, fe(b.name), 1),
            b.artist ? (L(), U("span", ha, fe(b.artist), 1)) : xe("", !0)
          ], 8, fa),
          _("button", {
            class: Be(["stmp-icon-btn stmp-result-add", { added: h(b) }]),
            "aria-label": h(b) ? "已添加" : "加入列表",
            onClick: kn((R) => u(b), ["stop"])
          }, [
            re(_e, {
              name: h(b) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, pa)
        ], 2))), 128))
      ])) : xe("", !0)
    ]));
  }
}), ma = /* @__PURE__ */ yt(ga, [["__scopeId", "data-v-bbb98347"]]), va = { class: "stmp-panel" }, ya = { class: "stmp-topbar" }, ba = { class: "stmp-cover" }, _a = ["src"], xa = { class: "stmp-track-info" }, wa = { class: "stmp-track-name" }, Sa = {
  key: 0,
  class: "stmp-track-artist"
}, Ca = {
  key: 0,
  class: "stmp-lyric-current"
}, Ia = {
  key: 1,
  class: "stmp-lyric-next"
}, Ea = {
  key: 2,
  class: "stmp-lyric-empty"
}, Ta = { class: "stmp-progress" }, Pa = ["value"], Ma = { class: "stmp-time" }, Ra = { class: "stmp-controls" }, Aa = ["aria-label"], La = { class: "stmp-volume-wrap" }, Oa = ["value"], $a = { class: "stmp-tabs" }, ka = { class: "stmp-tab-content" }, Da = /* @__PURE__ */ mt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = vt(), s = cs(), n = pe(), i = /* @__PURE__ */ Te("list"), r = /* @__PURE__ */ Te(!0), o = /* @__PURE__ */ Te(!1), l = rt(() => t.currentTrack?.cover || ""), c = () => {
      o.value = !0;
    };
    zt(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const d = rt(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), u = rt(
      () => t.currentLyricIndex >= 0 ? t.lyrics[t.currentLyricIndex]?.text ?? null : null
    ), h = rt(() => {
      const A = t.currentLyricIndex;
      return A < 0 ? null : t.lyrics[A + 1]?.text ?? null;
    });
    function w(A) {
      const T = Math.floor(A / 60), I = Math.floor(A % 60);
      return T + ":" + I.toString().padStart(2, "0");
    }
    function v(A) {
      const T = A.target;
      t.seek(Number(T.value) / 100 * t.duration);
    }
    const S = ["list", "random", "single"], b = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function R() {
      const A = n.settings.playMode, T = S.indexOf(A), I = S[(T + 1) % S.length];
      n.setPlayMode(I);
    }
    function k(A) {
      const T = A.target;
      t.setVolume(Number(T.value));
    }
    return (A, T) => (L(), U("div", va, [
      _("div", ya, [
        _("div", ba, [
          l.value && !o.value ? (L(), U("img", {
            key: 0,
            src: l.value,
            alt: "cover",
            onError: c
          }, null, 40, _a)) : (L(), ot(_e, {
            key: 1,
            name: "music",
            size: 24
          }))
        ]),
        _("div", xa, [
          _("div", wa, fe(V(t).currentTrack?.name || "No Song"), 1),
          V(t).currentTrack?.artist ? (L(), U("div", Sa, fe(V(t).currentTrack.artist), 1)) : xe("", !0)
        ]),
        _("button", {
          class: "stmp-icon-btn",
          "aria-label": "收起面板",
          onClick: T[0] || (T[0] = (I) => A.$emit("collapse"))
        }, [
          re(_e, {
            name: "chevron-down",
            size: 18
          })
        ])
      ]),
      r.value ? (L(), U("div", {
        key: 0,
        class: "stmp-lyrics",
        onClick: T[1] || (T[1] = (I) => r.value = !1)
      }, [
        u.value ? (L(), U("div", Ca, fe(u.value), 1)) : xe("", !0),
        h.value ? (L(), U("div", Ia, fe(h.value), 1)) : xe("", !0),
        !u.value && !h.value ? (L(), U("div", Ea, [
          re(_e, {
            name: "music",
            size: 18
          })
        ])) : xe("", !0)
      ])) : (L(), U("div", {
        key: 1,
        class: "stmp-lyrics-toggle",
        onClick: T[2] || (T[2] = (I) => r.value = !0)
      }, [
        re(_e, {
          name: "chevron-up",
          size: 14
        }),
        T[8] || (T[8] = kr(" show lyrics ", -1))
      ])),
      _("div", Ta, [
        _("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: d.value,
          class: "stmp-range",
          onInput: v
        }, null, 40, Pa),
        _("div", Ma, [
          _("span", null, fe(w(V(t).currentTime)), 1),
          _("span", null, fe(w(V(t).duration)), 1)
        ])
      ]),
      _("div", Ra, [
        _("button", {
          class: "stmp-icon-btn",
          "aria-label": "上一首",
          onClick: T[3] || (T[3] = (I) => V(s).prev())
        }, [
          re(_e, {
            name: "prev",
            size: 20
          })
        ]),
        _("button", {
          class: "stmp-icon-btn stmp-play-btn",
          "aria-label": V(t).isPlaying ? "暂停" : "播放",
          onClick: T[4] || (T[4] = (I) => V(t).togglePlay())
        }, [
          re(_e, {
            name: V(t).isPlaying ? "pause" : "play",
            size: 22
          }, null, 8, ["name"])
        ], 8, Aa),
        _("button", {
          class: "stmp-icon-btn",
          "aria-label": "下一首",
          onClick: T[5] || (T[5] = (I) => V(s).next())
        }, [
          re(_e, {
            name: "next",
            size: 20
          })
        ]),
        _("button", {
          class: Be(["stmp-icon-btn", { active: V(n).settings.playMode !== "list" }]),
          "aria-label": "切换播放模式",
          onClick: R
        }, [
          re(_e, {
            name: b[V(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 2),
        _("div", La, [
          re(_e, {
            name: "volume",
            size: 16
          }),
          _("input", {
            type: "range",
            min: "0",
            max: "100",
            value: V(t).volume,
            class: "stmp-volume",
            onInput: k
          }, null, 40, Oa)
        ])
      ]),
      _("div", $a, [
        _("button", {
          class: Be(["stmp-tab", { active: i.value === "list" }]),
          onClick: T[6] || (T[6] = (I) => i.value = "list")
        }, " List ", 2),
        _("button", {
          class: Be(["stmp-tab", { active: i.value === "search" }]),
          onClick: T[7] || (T[7] = (I) => i.value = "search")
        }, " Search ", 2)
      ]),
      _("div", ka, [
        i.value === "list" ? (L(), ot(na, { key: 0 })) : i.value === "search" ? (L(), ot(ma, { key: 1 })) : xe("", !0)
      ])
    ]));
  }
}), Ua = /* @__PURE__ */ yt(Da, [["__scopeId", "data-v-5441b3ab"]]), Fa = /* @__PURE__ */ mt({
  __name: "App",
  setup(e) {
    const t = pe(), s = vt(), n = /* @__PURE__ */ Te(!1), i = /* @__PURE__ */ Te(null), r = /* @__PURE__ */ Te(typeof window < "u" && window.innerWidth < 768), o = () => {
      r.value = window.innerWidth < 768;
    }, l = (T) => {
      T.key === "Escape" && (n.value = !1), T.key === " " && T.target === document.body && (T.preventDefault(), s.togglePlay());
    };
    let c = 0, d = 0, u = 0, h = 0, w = !1, v = null, S = null;
    function b(T) {
      if (r.value || n.value || T.target.closest("button")) return;
      c = T.clientX, d = T.clientY;
      const I = t.settings.position;
      u = I?.x ?? i.value?.offsetLeft ?? 0, h = I?.y ?? i.value?.offsetTop ?? 0, w = !1, v = R, S = k, document.addEventListener("pointermove", v), document.addEventListener("pointerup", S);
    }
    function R(T) {
      if (!i.value) return;
      const I = T.clientX - c, H = T.clientY - d;
      (Math.abs(I) > 5 || Math.abs(H) > 5) && (w = !0);
      let ae = u + I, oe = h + H;
      const K = window.innerWidth - (i.value.offsetWidth || 60), W = window.innerHeight - (i.value.offsetHeight || 40);
      ae = Math.max(0, Math.min(ae, K)), oe = Math.max(0, Math.min(oe, W)), i.value.style.left = ae + "px", i.value.style.top = oe + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function k() {
      if (v && document.removeEventListener("pointermove", v), S && document.removeEventListener("pointerup", S), v = null, S = null, !w) {
        A();
        return;
      }
      i.value && t.setPosition({
        x: i.value.offsetLeft,
        y: i.value.offsetTop
      });
    }
    function A() {
      n.value = !n.value;
    }
    return dr(() => {
      const T = t.settings.position;
      T && i.value && !r.value && (i.value.style.left = T.x + "px", i.value.style.top = T.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), window.addEventListener("resize", o), window.addEventListener("keydown", l);
    }), hr(() => {
      k(), window.removeEventListener("resize", o), window.removeEventListener("keydown", l);
    }), (T, I) => (L(), U("div", {
      ref_key: "widgetRef",
      ref: i,
      class: Be(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-mobile": r.value
      }]),
      onPointerdown: b
    }, [
      n.value ? (L(), ot(Ua, {
        key: 1,
        onCollapse: A
      })) : (L(), ot(Wc, {
        key: 0,
        onExpand: A
      }))
    ], 34));
  }
}), Na = /* @__PURE__ */ yt(Fa, [["__scopeId", "data-v-3e08f2ab"]]), ja = { class: "stmp-settings" }, Va = { class: "stmp-setting-group" }, Ha = { class: "stmp-setting-row" }, Ka = ["checked", "onChange"], Ba = ["onUpdate:modelValue"], Wa = ["onUpdate:modelValue"], za = ["onUpdate:modelValue"], Ja = { class: "stmp-setting-group" }, Ga = { class: "stmp-setting-label" }, Ya = ["value"], qa = { class: "stmp-setting-group" }, Xa = ["value"], Za = ["value"], Qa = { class: "stmp-setting-group" }, eu = { class: "stmp-setting-row" }, tu = ["checked"], su = { class: "stmp-setting-group" }, nu = { class: "stmp-rules" }, iu = ["onClick"], ru = { class: "stmp-rule-add" }, ou = /* @__PURE__ */ mt({
  __name: "SettingsView",
  setup(e) {
    const t = pe(), s = /* @__PURE__ */ Te(""), n = [
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
      const b = S.target;
      t.setVolume(Number(b.value));
    }
    function c(S) {
      const b = S.target;
      t.setPlayMode(b.value);
    }
    function d(S) {
      const b = S.target;
      t.settings.autoPlayOnNewCue = b.checked, t.save();
    }
    const u = async () => {
      const S = t.storage;
      S && (await S.clearCache(), toastr.success("缓存已清理"));
    }, h = () => {
      const S = JSON.stringify(t.settings, null, 2), b = new Blob([S], { type: "application/json" }), R = URL.createObjectURL(b), k = document.createElement("a");
      k.href = R, k.download = "st-music-player-settings.json", k.click(), URL.revokeObjectURL(R);
    }, w = () => {
      const S = document.createElement("input");
      S.type = "file", S.accept = ".json", S.onchange = async (b) => {
        const R = b.target.files?.[0];
        if (!R) return;
        const k = await R.text();
        try {
          const A = JSON.parse(k);
          if (typeof A != "object" || A === null) throw new Error("Not an object");
          const T = ["volume", "playMode", "position", "autoPlayOnNewCue", "providers", "customCueRules"], I = {};
          for (const ae of T)
            ae in A && (I[ae] = A[ae]);
          if (typeof I.volume != "number" || I.volume < 0 || I.volume > 100)
            throw new Error("Invalid volume");
          if (typeof I.playMode != "string" || !["list", "random", "single"].includes(I.playMode))
            throw new Error("Invalid playMode");
          if (I.providers && !Array.isArray(I.providers))
            throw new Error("Invalid providers");
          if (I.customCueRules && !Array.isArray(I.customCueRules))
            throw new Error("Invalid customCueRules");
          const H = pe();
          Object.assign(H.settings, I), H.save(), toastr.success("设置已导入");
        } catch (A) {
          console.error("Import failed", A), toastr.error("导入失败: " + (A instanceof Error ? A.message : "JSON 格式错误"));
        }
      }, S.click();
    };
    function v(S) {
      const b = t.settings.providers.find((R) => R.id === S);
      b && (b.enabled = !b.enabled, t.save());
    }
    return (S, b) => (L(), U("div", ja, [
      _("div", Va, [
        b[4] || (b[4] = _("div", { class: "stmp-setting-label" }, "Providers", -1)),
        (L(!0), U(Y, null, Tt(V(t).settings.providers, (R) => (L(), U("div", {
          key: R.id,
          class: "stmp-provider-config"
        }, [
          _("label", Ha, [
            _("span", null, fe(i[R.id] || R.id), 1),
            _("input", {
              type: "checkbox",
              checked: R.enabled,
              onChange: (k) => v(R.id)
            }, null, 40, Ka)
          ]),
          R.id === "netease" ? Ft((L(), U("input", {
            key: 0,
            class: "stmp-provider-input",
            "onUpdate:modelValue": (k) => R.config.baseURL = k,
            placeholder: "API baseURL",
            onChange: b[0] || (b[0] = (k) => V(t).save())
          }, null, 40, Ba)), [
            [Vt, R.config.baseURL]
          ]) : xe("", !0),
          R.id === "custom" ? (L(), U(Y, { key: 1 }, [
            Ft(_("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (k) => R.config.searchURL = k,
              placeholder: "Search URL",
              onChange: b[1] || (b[1] = (k) => V(t).save())
            }, null, 40, Wa), [
              [Vt, R.config.searchURL]
            ]),
            Ft(_("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (k) => R.config.resolveURL = k,
              placeholder: "Resolve URL",
              onChange: b[2] || (b[2] = (k) => V(t).save())
            }, null, 40, za), [
              [Vt, R.config.resolveURL]
            ])
          ], 64)) : xe("", !0)
        ]))), 128))
      ]),
      _("div", Ja, [
        _("div", Ga, "Default Volume: " + fe(V(t).settings.volume), 1),
        _("input", {
          type: "range",
          min: "0",
          max: "100",
          value: V(t).settings.volume,
          class: "stmp-range",
          onInput: l
        }, null, 40, Ya)
      ]),
      _("div", qa, [
        b[5] || (b[5] = _("div", { class: "stmp-setting-label" }, "Default Play Mode", -1)),
        _("select", {
          class: "stmp-select",
          value: V(t).settings.playMode,
          onChange: c
        }, [
          (L(), U(Y, null, Tt(n, (R) => _("option", {
            key: R.value,
            value: R.value
          }, fe(R.label), 9, Za)), 64))
        ], 40, Xa)
      ]),
      _("div", Qa, [
        _("div", eu, [
          b[6] || (b[6] = _("span", null, "Auto-play on new cue", -1)),
          _("input", {
            type: "checkbox",
            checked: V(t).settings.autoPlayOnNewCue,
            onChange: d
          }, null, 40, tu)
        ])
      ]),
      _("div", su, [
        b[7] || (b[7] = _("div", { class: "stmp-setting-label" }, "Custom Cue Rules (Regex)", -1)),
        _("div", nu, [
          (L(!0), U(Y, null, Tt(V(t).settings.customCueRules, (R, k) => (L(), U("div", {
            key: k,
            class: "stmp-rule"
          }, [
            _("code", null, fe(R), 1),
            _("button", {
              class: "stmp-rule-del",
              onClick: (A) => o(k)
            }, "✕", 8, iu)
          ]))), 128))
        ]),
        _("div", ru, [
          Ft(_("input", {
            "onUpdate:modelValue": b[3] || (b[3] = (R) => s.value = R),
            class: "stmp-rule-input",
            placeholder: "Add regex rule...",
            onKeydown: jr(r, ["enter"])
          }, null, 544), [
            [Vt, s.value]
          ]),
          _("button", {
            class: "stmp-rule-add-btn",
            onClick: r
          }, "+")
        ])
      ]),
      _("div", { class: "stmp-setting-group" }, [
        b[8] || (b[8] = _("div", { class: "stmp-setting-label" }, "Data", -1)),
        _("div", { class: "stmp-data-btns" }, [
          _("button", {
            class: "stmp-data-btn",
            "aria-label": "清理缓存",
            onClick: u
          }, "清理缓存"),
          _("button", {
            class: "stmp-data-btn",
            "aria-label": "导出数据",
            onClick: h
          }, "导出数据"),
          _("button", {
            class: "stmp-data-btn",
            "aria-label": "导入数据",
            onClick: w
          }, "导入数据")
        ])
      ])
    ]));
  }
}), lu = /* @__PURE__ */ yt(ou, [["__scopeId", "data-v-32510a40"]]);
class cu {
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
      messageId: ms(r)
    })), i(n.MESSAGE_UPDATED, "message-updated", (r) => ({
      messageId: ms(r)
    })), i(n.MESSAGE_DELETED, "message-deleted", (r) => ({
      messageId: ms(r)
    })), i(n.MESSAGE_SWIPED, "message-swiped", (r) => ({
      messageId: ms(r)
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
function ms(e) {
  if (e == null) return;
  const t = typeof e == "number" ? e : parseInt(String(e), 10);
  return Number.isFinite(t) ? t : void 0;
}
function au() {
  return new cu();
}
const uu = [
  /<bgm>当前bgm[:：](.+?) - (.+?)<\/bgm>/g,
  /<bgm>当前bgm[:：](.+?)<\/bgm>/g,
  /<bgm>(.+?) - (.+?)<\/bgm>/g,
  /<bgm>(.+?)<\/bgm>/g,
  /【BGM】(.+?)(?: - (.+?))?【\/BGM】/g,
  /\[music\](.+?)(?: - (.+?))?\[\/music\]/g
];
function Ii(e, t) {
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
function Ei(e, t = []) {
  const s = /* @__PURE__ */ new Map(), n = (i) => {
    s.has(i.index) || s.set(i.index, i);
  };
  for (const i of uu)
    for (const r of Ii(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of Ii(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class fu {
  constructor(t) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = t;
  }
  scanIncremental(t, s, n, i = []) {
    const r = [];
    for (let o = s; o <= n; o++) {
      const l = this.getChatMessage(o);
      if (l === void 0) continue;
      const c = Ei(l, i);
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
    const r = Ei(i, n), o = r.length > 0 ? r.at(-1) : null;
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
let Pt = null, Ye = null, Zt = null, Qt = null, Mt = null, Ps = null;
const du = `
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
function hu() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(du), Qt = e.children(".inline-drawer").last()[0] ?? null, !Qt)) return;
  const t = Qt.querySelector("#stmp-settings-mount");
  t && Ps && (Mt = Vr(lu), Mt.use(Ps), Mt.mount(t));
}
function pu() {
  Mt && (Mt.unmount(), Mt = null), Qt?.remove(), Qt = null;
}
function gu(e, t, s) {
  Ye = au(), Ye.on("chat-changed", () => {
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
  }), Ye.on("message-generated", (n) => {
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
  }), Ye.on("message-updated", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), Ye.on("message-deleted", (n) => {
    n.messageId !== void 0 && t.handleMessageDelete(n.messageId);
  }), Ye.on("message-swiped", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), Ye.start();
}
function mu(e, t, s) {
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
async function bu() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.body.appendChild(e);
    const t = _c();
    Ps = t, Pt = Vr(Na), Pt.use(t), Pt.mount(e);
    const s = pe(), n = Rc();
    s.init(n);
    const i = vt();
    i.init(), i.setVolume(s.settings.volume);
    const r = new fu((c) => SillyTavern.getContext().chat[c]?.mes), o = cs();
    o.init(r), hu();
    const l = SillyTavern.getContext();
    Zt = () => {
      gu(r, o, s), mu(r, o, s);
    }, l.eventSource.on(l.event_types.APP_READY, Zt), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function zr() {
  if (Zt) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, Zt);
    } catch {
    }
    Zt = null;
  }
  if (Ye?.stop(), Ye = null, Pt) {
    try {
      vt().destroy();
    } catch {
    }
    Pt.unmount(), Pt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), pu(), Ps = null;
}
function _u() {
  zr();
}
async function vu() {
  try {
    const e = SillyTavern.getContext();
    delete e.extensionSettings[St], e.saveSettingsDebounced();
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to delete settings:", e);
  }
  try {
    const e = SillyTavern.libs?.localforage;
    if (e && typeof e.keys == "function") {
      const t = await e.keys();
      await Promise.all(
        t.filter((s) => s.startsWith(St) || s.startsWith("stmp:")).map((s) => e.removeItem(s))
      );
    }
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to clear localforage:", e);
  }
}
async function xu() {
  await vu(), zr();
}
export {
  vu as clean,
  xu as delete,
  zr as destroy,
  _u as disable,
  bu as init
};
