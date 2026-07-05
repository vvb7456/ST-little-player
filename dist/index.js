/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function _n(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const te = {}, Ct = [], Be = () => {
}, Ti = () => !1, Ps = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), As = (e) => e.startsWith("onUpdate:"), he = Object.assign, xn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Yr = Object.prototype.hasOwnProperty, Y = (e, t) => Yr.call(e, t), j = Array.isArray, It = (e) => rs(e) === "[object Map]", Mi = (e) => rs(e) === "[object Set]", Vn = (e) => rs(e) === "[object Date]", K = (e) => typeof e == "function", re = (e) => typeof e == "string", Re = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", Ri = (e) => (Q(e) || K(e)) && K(e.then) && K(e.catch), Pi = Object.prototype.toString, rs = (e) => Pi.call(e), qr = (e) => rs(e).slice(8, -1), Ai = (e) => rs(e) === "[object Object]", Ls = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ht = /* @__PURE__ */ _n(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Os = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Xr = /-\w/g, Pe = Os(
  (e) => e.replace(Xr, (t) => t.slice(1).toUpperCase())
), Zr = /\B([A-Z])/g, ct = Os(
  (e) => e.replace(Zr, "-$1").toLowerCase()
), Li = Os((e) => e.charAt(0).toUpperCase() + e.slice(1)), Js = Os(
  (e) => e ? `on${Li(e)}` : ""
), Ke = (e, t) => !Object.is(e, t), vs = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Oi = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, wn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Hn;
const $s = () => Hn || (Hn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Sn(e) {
  if (j(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = re(n) ? so(n) : Sn(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (re(e) || Q(e))
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
function We(e) {
  let t = "";
  if (re(e))
    t = e;
  else if (j(e))
    for (let s = 0; s < e.length; s++) {
      const n = We(e[s]);
      n && (t += n + " ");
    }
  else if (Q(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const no = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", io = /* @__PURE__ */ _n(no);
function $i(e) {
  return !!e || e === "";
}
function ro(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Cn(e[n], t[n]);
  return s;
}
function Cn(e, t) {
  if (e === t) return !0;
  let s = Vn(e), n = Vn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Re(e), n = Re(t), s || n)
    return e === t;
  if (s = j(e), n = j(t), s || n)
    return s && n ? ro(e, t) : !1;
  if (s = Q(e), n = Q(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Cn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ki = (e) => !!(e && e.__v_isRef === !0), fe = (e) => re(e) ? e : e == null ? "" : j(e) || Q(e) && (e.toString === Pi || !K(e.toString)) ? ki(e) ? fe(e.value) : JSON.stringify(e, Di, 2) : String(e), Di = (e, t) => ki(t) ? Di(e, t.value) : It(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[Gs(n, r) + " =>"] = i, s),
    {}
  )
} : Mi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Gs(s))
} : Re(t) ? Gs(t) : Q(t) && !j(t) && !Ai(t) ? String(t) : t, Gs = (e, t = "") => {
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
let ne;
const Ys = /* @__PURE__ */ new WeakSet();
class ji {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ue && (ue.active ? ue.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ys.has(this) && (Ys.delete(this), this.trigger()));
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
    const t = ne, s = Ae;
    ne = this, Ae = !0;
    try {
      return this.fn();
    } finally {
      Bi(this), ne = t, Ae = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Tn(t);
      this.deps = this.depsTail = void 0, Kn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ys.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    cn(this) && this.run();
  }
  get dirty() {
    return cn(this);
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
function In() {
  Vi++;
}
function En() {
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
    n.version === -1 ? (n === s && (s = i), Tn(n), lo(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function cn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Wi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Wi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === es) || (e.globalVersion = es, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !cn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = ne, n = Ae;
  ne = e, Ae = !0;
  try {
    Ki(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ke(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ne = s, Ae = n, Bi(e), e.flags &= -3;
  }
}
function Tn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      Tn(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function lo(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Ae = !0;
const zi = [];
function ze() {
  zi.push(Ae), Ae = !1;
}
function Je() {
  const e = zi.pop();
  Ae = e === void 0 ? !0 : e;
}
function Kn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = ne;
    ne = void 0;
    try {
      t();
    } finally {
      ne = s;
    }
  }
}
let es = 0;
class co {
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
    if (!ne || !Ae || ne === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== ne)
      s = this.activeLink = new co(ne, this), ne.deps ? (s.prevDep = ne.depsTail, ne.depsTail.nextDep = s, ne.depsTail = s) : ne.deps = ne.depsTail = s, Ji(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = ne.depsTail, s.nextDep = void 0, ne.depsTail.nextDep = s, ne.depsTail = s, ne.deps === s && (ne.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, es++, this.notify(t);
  }
  notify(t) {
    In();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      En();
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
), an = /* @__PURE__ */ Symbol(
  ""
), ts = /* @__PURE__ */ Symbol(
  ""
);
function ge(e, t, s) {
  if (Ae && ne) {
    let n = _s.get(e);
    n || _s.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new Mn()), i.map = n, i.key = s), i.track();
  }
}
function Ze(e, t, s, n, i, r) {
  const o = _s.get(e);
  if (!o) {
    es++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (In(), t === "clear")
    o.forEach(l);
  else {
    const c = j(e), d = c && Ls(s);
    if (c && s === "length") {
      const u = Number(n);
      o.forEach((h, w) => {
        (w === "length" || w === ts || !Re(w) && w >= u) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(ts)), t) {
        case "add":
          c ? d && l(o.get("length")) : (l(o.get(pt)), It(e) && l(o.get(an)));
          break;
        case "delete":
          c || (l(o.get(pt)), It(e) && l(o.get(an)));
          break;
        case "set":
          It(e) && l(o.get(pt));
          break;
      }
  }
  En();
}
function ao(e, t) {
  const s = _s.get(e);
  return s && s.get(t);
}
function bt(e) {
  const t = /* @__PURE__ */ G(e);
  return t === e ? t : (ge(t, "iterate", ts), /* @__PURE__ */ Ee(e) ? t : t.map(Le));
}
function ks(e) {
  return ge(e = /* @__PURE__ */ G(e), "iterate", ts), e;
}
function Ve(e, t) {
  return /* @__PURE__ */ tt(e) ? Pt(/* @__PURE__ */ et(e) ? Le(t) : t) : Le(t);
}
const uo = {
  __proto__: null,
  [Symbol.iterator]() {
    return qs(this, Symbol.iterator, (e) => Ve(this, e));
  },
  concat(...e) {
    return bt(this).concat(
      ...e.map((t) => j(t) ? bt(t) : t)
    );
  },
  entries() {
    return qs(this, "entries", (e) => (e[1] = Ve(this, e[1]), e));
  },
  every(e, t) {
    return Ge(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ge(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Ve(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ge(
      this,
      "find",
      e,
      t,
      (s) => Ve(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return Ge(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ge(
      this,
      "findLast",
      e,
      t,
      (s) => Ve(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ge(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ge(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Xs(this, "includes", e);
  },
  indexOf(...e) {
    return Xs(this, "indexOf", e);
  },
  join(e) {
    return bt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Xs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ge(this, "map", e, t, void 0, arguments);
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
    return Ge(this, "some", e, t, void 0, arguments);
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
    return qs(this, "values", (e) => Ve(this, e));
  }
};
function qs(e, t, s) {
  const n = ks(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Ee(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const fo = Array.prototype;
function Ge(e, t, s, n, i, r) {
  const o = ks(e), l = o !== e && !/* @__PURE__ */ Ee(e), c = o[t];
  if (c !== fo[t]) {
    const h = c.apply(e, r);
    return l ? Le(h) : h;
  }
  let d = s;
  o !== e && (l ? d = function(h, w) {
    return s.call(this, Ve(e, h), w, e);
  } : s.length > 2 && (d = function(h, w) {
    return s.call(this, h, w, e);
  }));
  const u = c.call(o, d, n);
  return l && i ? i(u) : u;
}
function Bn(e, t, s, n) {
  const i = ks(e), r = i !== e && !/* @__PURE__ */ Ee(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(d, u, h) {
    return l && (l = !1, d = Ve(e, d)), s.call(this, d, Ve(e, u), h, e);
  }) : s.length > 3 && (o = function(d, u, h) {
    return s.call(this, d, u, h, e);
  }));
  const c = i[t](o, ...n);
  return l ? Ve(e, c) : c;
}
function Xs(e, t, s) {
  const n = /* @__PURE__ */ G(e);
  ge(n, "iterate", ts);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ Us(s[0]) ? (s[0] = /* @__PURE__ */ G(s[0]), n[t](...s)) : i;
}
function Dt(e, t, s = []) {
  ze(), In();
  const n = (/* @__PURE__ */ G(e))[t].apply(e, s);
  return En(), Je(), n;
}
const ho = /* @__PURE__ */ _n("__proto__,__v_isRef,__isVue"), Gi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Re)
);
function po(e) {
  Re(e) || (e = String(e));
  const t = /* @__PURE__ */ G(this);
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
    const o = j(t);
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
      /* @__PURE__ */ oe(t) ? t : n
    );
    if ((Re(s) ? Gi.has(s) : ho(s)) || (i || ge(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ oe(l)) {
      const c = o && Ls(s) ? l : l.value;
      return i && Q(c) ? /* @__PURE__ */ fn(c) : c;
    }
    return Q(l) ? i ? /* @__PURE__ */ fn(l) : /* @__PURE__ */ Ds(l) : l;
  }
}
class qi extends Yi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    const o = j(t) && Ls(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ tt(r);
      if (!/* @__PURE__ */ Ee(n) && !/* @__PURE__ */ tt(n) && (r = /* @__PURE__ */ G(r), n = /* @__PURE__ */ G(n)), !o && /* @__PURE__ */ oe(r) && !/* @__PURE__ */ oe(n))
        return d || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : Y(t, s), c = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ oe(t) ? t : i
    );
    return t === /* @__PURE__ */ G(i) && c && (l ? Ke(n, r) && Ze(t, "set", s, n) : Ze(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = Y(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && Ze(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Re(s) || !Gi.has(s)) && ge(t, "has", s), n;
  }
  ownKeys(t) {
    return ge(
      t,
      "iterate",
      j(t) ? "length" : pt
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
const un = (e) => e, ds = (e) => Reflect.getPrototypeOf(e);
function bo(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ G(i), o = It(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, d = i[e](...n), u = s ? un : t ? Pt : Le;
    return !t && ge(
      r,
      "iterate",
      c ? an : pt
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
      const r = this.__v_raw, o = /* @__PURE__ */ G(r), l = /* @__PURE__ */ G(i);
      e || (Ke(i, l) && ge(o, "get", i), ge(o, "get", l));
      const { has: c } = ds(o), d = t ? un : e ? Pt : Le;
      if (c.call(o, i))
        return d(r.get(i));
      if (c.call(o, l))
        return d(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ge(/* @__PURE__ */ G(i), "iterate", pt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ G(r), l = /* @__PURE__ */ G(i);
      return e || (Ke(i, l) && ge(o, "has", i), ge(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ G(l), d = t ? un : e ? Pt : Le;
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
        const r = /* @__PURE__ */ G(this), o = ds(r), l = /* @__PURE__ */ G(i), c = !t && !/* @__PURE__ */ Ee(i) && !/* @__PURE__ */ tt(i) ? l : i;
        return o.has.call(r, c) || Ke(i, c) && o.has.call(r, i) || Ke(l, c) && o.has.call(r, l) || (r.add(c), Ze(r, "add", c, c)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Ee(r) && !/* @__PURE__ */ tt(r) && (r = /* @__PURE__ */ G(r));
        const o = /* @__PURE__ */ G(this), { has: l, get: c } = ds(o);
        let d = l.call(o, i);
        d || (i = /* @__PURE__ */ G(i), d = l.call(o, i));
        const u = c.call(o, i);
        return o.set(i, r), d ? Ke(r, u) && Ze(o, "set", i, r) : Ze(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ G(this), { has: o, get: l } = ds(r);
        let c = o.call(r, i);
        c || (i = /* @__PURE__ */ G(i), c = o.call(r, i)), l && l.call(r, i);
        const d = r.delete(i);
        return c && Ze(r, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ G(this), r = i.size !== 0, o = i.clear();
        return r && Ze(
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
function Rn(e, t) {
  const s = _o(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    Y(s, i) && i in n ? s : n,
    i,
    r
  );
}
const xo = {
  get: /* @__PURE__ */ Rn(!1, !1)
}, wo = {
  get: /* @__PURE__ */ Rn(!1, !0)
}, So = {
  get: /* @__PURE__ */ Rn(!0, !1)
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
function Ds(e) {
  return /* @__PURE__ */ tt(e) ? e : Pn(
    e,
    !1,
    mo,
    xo,
    Xi
  );
}
// @__NO_SIDE_EFFECTS__
function Eo(e) {
  return Pn(
    e,
    !1,
    yo,
    wo,
    Zi
  );
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
  return Pn(
    e,
    !0,
    vo,
    So,
    Qi
  );
}
function Pn(e, t, s, n, i) {
  if (!Q(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
function et(e) {
  return /* @__PURE__ */ tt(e) ? /* @__PURE__ */ et(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Us(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function G(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ G(t) : e;
}
function An(e) {
  return !Y(e, "__v_skip") && Object.isExtensible(e) && Oi(e, "__v_skip", !0), e;
}
const Le = (e) => Q(e) ? /* @__PURE__ */ Ds(e) : e, Pt = (e) => Q(e) ? /* @__PURE__ */ fn(e) : e;
// @__NO_SIDE_EFFECTS__
function oe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ce(e) {
  return To(e, !1);
}
function To(e, t) {
  return /* @__PURE__ */ oe(e) ? e : new Mo(e, t);
}
class Mo {
  constructor(t, s) {
    this.dep = new Mn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ G(t), this._value = s ? t : Le(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ee(t) || /* @__PURE__ */ tt(t);
    t = n ? t : /* @__PURE__ */ G(t), Ke(t, s) && (this._rawValue = t, this._value = n ? t : Le(t), this.dep.trigger());
  }
}
function B(e) {
  return /* @__PURE__ */ oe(e) ? e.value : e;
}
const Ro = {
  get: (e, t, s) => t === "__v_raw" ? e : B(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ oe(i) && !/* @__PURE__ */ oe(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function er(e) {
  return /* @__PURE__ */ et(e) ? e : new Proxy(e, Ro);
}
// @__NO_SIDE_EFFECTS__
function Po(e) {
  const t = j(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = Lo(e, s);
  return t;
}
class Ao {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Re(s) ? s : String(s), this._raw = /* @__PURE__ */ G(t);
    let i = !0, r = t;
    if (!j(t) || Re(this._key) || !Ls(this._key))
      do
        i = !/* @__PURE__ */ Us(r) || /* @__PURE__ */ Ee(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = B(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ oe(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ oe(s)) {
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
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Mn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = es - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ne !== this)
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
  return K(e) ? n = e : (n = e.get, i = e.set), new Oo(n, i, s);
}
const ps = {}, xs = /* @__PURE__ */ new WeakMap();
let ht;
function ko(e, t = !1, s = ht) {
  if (s) {
    let n = xs.get(s);
    n || xs.set(s, n = []), n.push(e);
  }
}
function Do(e, t, s = te) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = s, d = (R) => i ? R : /* @__PURE__ */ Ee(R) || i === !1 || i === 0 ? Qe(R, 1) : Qe(R);
  let u, h, w, b, S = !1, g = !1;
  if (/* @__PURE__ */ oe(e) ? (h = () => e.value, S = /* @__PURE__ */ Ee(e)) : /* @__PURE__ */ et(e) ? (h = () => d(e), S = !0) : j(e) ? (g = !0, S = e.some((R) => /* @__PURE__ */ et(R) || /* @__PURE__ */ Ee(R)), h = () => e.map((R) => {
    if (/* @__PURE__ */ oe(R))
      return R.value;
    if (/* @__PURE__ */ et(R))
      return d(R);
    if (K(R))
      return c ? c(R, 2) : R();
  })) : K(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (w) {
      ze();
      try {
        w();
      } finally {
        Je();
      }
    }
    const R = ht;
    ht = u;
    try {
      return c ? c(e, 3, [b]) : e(b);
    } finally {
      ht = R;
    }
  } : h = Be, t && i) {
    const R = h, L = i === !0 ? 1 / 0 : i;
    h = () => Qe(R(), L);
  }
  const P = Ni(), F = () => {
    u.stop(), P && P.active && xn(P.effects, u);
  };
  if (r && t) {
    const R = t;
    t = (...L) => {
      const X = R(...L);
      return F(), X;
    };
  }
  let N = g ? new Array(e.length).fill(ps) : ps;
  const z = (R) => {
    if (!(!(u.flags & 1) || !u.dirty && !R))
      if (t) {
        const L = u.run();
        if (R || i || S || (g ? L.some((X, H) => Ke(X, N[H])) : Ke(L, N))) {
          w && w();
          const X = ht;
          ht = u;
          try {
            const H = [
              L,
              // pass undefined as the old value when it's changed for the first time
              N === ps ? void 0 : g && N[0] === ps ? [] : N,
              b
            ];
            N = L, c ? c(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            ht = X;
          }
        }
      } else
        u.run();
  };
  return l && l(z), u = new ji(h), u.scheduler = o ? () => o(z, !1) : z, b = (R) => ko(R, !1, u), w = u.onStop = () => {
    const R = xs.get(u);
    if (R) {
      if (c)
        c(R, 4);
      else
        for (const L of R) L();
      xs.delete(u);
    }
  }, t ? n ? z(!0) : N = u.run() : o ? o(z.bind(null, !0), !0) : u.run(), F.pause = u.pause.bind(u), F.resume = u.resume.bind(u), F.stop = F, F;
}
function Qe(e, t = 1 / 0, s) {
  if (t <= 0 || !Q(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ oe(e))
    Qe(e.value, t, s);
  else if (j(e))
    for (let n = 0; n < e.length; n++)
      Qe(e[n], t, s);
  else if (Mi(e) || It(e))
    e.forEach((n) => {
      Qe(n, t, s);
    });
  else if (Ai(e)) {
    for (const n in e)
      Qe(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Qe(e[n], t, s);
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
    Fs(i, t, s);
  }
}
function Oe(e, t, s, n) {
  if (K(e)) {
    const i = os(e, t, s, n);
    return i && Ri(i) && i.catch((r) => {
      Fs(r, t, s);
    }), i;
  }
  if (j(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Oe(e[r], t, s, n));
    return i;
  }
}
function Fs(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || te;
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
      ze(), os(r, null, 10, [
        e,
        c,
        d
      ]), Je();
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
let je = -1;
const Et = [];
let it = null, xt = 0;
const tr = /* @__PURE__ */ Promise.resolve();
let ws = null;
function Ss(e) {
  const t = ws || tr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Fo(e) {
  let t = je + 1, s = ve.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = ve[n], r = ss(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Ln(e) {
  if (!(e.flags & 1)) {
    const t = ss(e), s = ve[ve.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ss(s) ? ve.push(e) : ve.splice(Fo(t), 0, e), e.flags |= 1, sr();
  }
}
function sr() {
  ws || (ws = tr.then(ir));
}
function No(e) {
  j(e) ? Et.push(...e) : it && e.id === -1 ? it.splice(xt + 1, 0, e) : e.flags & 1 || (Et.push(e), e.flags |= 1), sr();
}
function Wn(e, t, s = je + 1) {
  for (; s < ve.length; s++) {
    const n = ve[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ve.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function nr(e) {
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
function ir(e) {
  try {
    for (je = 0; je < ve.length; je++) {
      const t = ve[je];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), os(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; je < ve.length; je++) {
      const t = ve[je];
      t && (t.flags &= -2);
    }
    je = -1, ve.length = 0, nr(), ws = null, (ve.length || Et.length) && ir();
  }
}
let Me = null, rr = null;
function Cs(e) {
  const t = Me;
  return Me = e, rr = e && e.type.__scopeId || null, t;
}
function jo(e, t = Me, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && si(-1);
    const r = Cs(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Cs(r), n._d && si(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ft(e, t) {
  if (Me === null)
    return e;
  const s = Hs(Me), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, c = te] = t[i];
    r && (K(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Qe(o), n.push({
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
    c && (ze(), Oe(c, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Je());
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
  const n = kr();
  if (n || gt) {
    let i = gt ? gt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && K(t) ? t.call(n && n.proxy) : t;
  }
}
function Ho() {
  return !!(kr() || gt);
}
const Ko = /* @__PURE__ */ Symbol.for("v-scx"), Bo = () => Wt(Ko);
function zt(e, t, s) {
  return or(e, t, s);
}
function or(e, t, s = te) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = he({}, s), c = t && n || !t && r !== "post";
  let d;
  if (is) {
    if (r === "sync") {
      const b = Bo();
      d = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!c) {
      const b = () => {
      };
      return b.stop = Be, b.resume = Be, b.pause = Be, b;
    }
  }
  const u = ye;
  l.call = (b, S, g) => Oe(b, u, S, g);
  let h = !1;
  r === "post" ? l.scheduler = (b) => {
    _e(b, u && u.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (b, S) => {
    S ? b() : Ln(b);
  }), l.augmentJob = (b) => {
    t && (b.flags |= 4), h && (b.flags |= 2, u && (b.id = u.uid, b.i = u));
  };
  const w = Do(e, t, l);
  return is && (d ? d.push(w) : c && w()), w;
}
function Wo(e, t, s) {
  const n = this.proxy, i = re(e) ? e.includes(".") ? lr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  K(t) ? r = t : (r = t.handler, s = t);
  const o = ls(this), l = or(i, r.bind(n), s);
  return o(), l;
}
function lr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const zo = /* @__PURE__ */ Symbol("_vte"), Jo = (e) => e.__isTeleport, Zs = /* @__PURE__ */ Symbol("_leaveCb");
function On(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, On(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function mt(e, t) {
  return K(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    he({ name: e.name }, t, { setup: e })
  ) : e;
}
function cr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function zn(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Is = /* @__PURE__ */ new WeakMap();
function Jt(e, t, s, n, i = !1) {
  if (j(e)) {
    e.forEach(
      (g, P) => Jt(
        g,
        t && (j(t) ? t[P] : t),
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
  const r = n.shapeFlag & 4 ? Hs(n.component) : n.el, o = i ? null : r, { i: l, r: c } = e, d = t && t.r, u = l.refs === te ? l.refs = {} : l.refs, h = l.setupState, w = /* @__PURE__ */ G(h), b = h === te ? Ti : (g) => zn(u, g) ? !1 : Y(w, g), S = (g, P) => !(P && zn(u, P));
  if (d != null && d !== c) {
    if (Jn(t), re(d))
      u[d] = null, b(d) && (h[d] = null);
    else if (/* @__PURE__ */ oe(d)) {
      const g = t;
      S(d, g.k) && (d.value = null), g.k && (u[g.k] = null);
    }
  }
  if (K(c)) {
    ze();
    try {
      os(c, l, 12, [o, u]);
    } finally {
      Je();
    }
  } else {
    const g = re(c), P = /* @__PURE__ */ oe(c);
    if (g || P) {
      const F = () => {
        if (e.f) {
          const N = g ? b(c) ? h[c] : u[c] : S() || !e.k ? c.value : u[e.k];
          if (i)
            j(N) && xn(N, r);
          else if (j(N))
            N.includes(r) || N.push(r);
          else if (g)
            u[c] = [r], b(c) && (h[c] = u[c]);
          else {
            const z = [r];
            S(c, e.k) && (c.value = z), e.k && (u[e.k] = z);
          }
        } else g ? (u[c] = o, b(c) && (h[c] = o)) : P && (S(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const N = () => {
          F(), Is.delete(e);
        };
        N.id = -1, Is.set(e, N), _e(N, s);
      } else
        Jn(e), F();
    }
  }
}
function Jn(e) {
  const t = Is.get(e);
  t && (t.flags |= 8, Is.delete(e));
}
$s().requestIdleCallback;
$s().cancelIdleCallback;
const Gt = (e) => !!e.type.__asyncLoader, ar = (e) => e.type.__isKeepAlive;
function Go(e, t) {
  ur(e, "a", t);
}
function Yo(e, t) {
  ur(e, "da", t);
}
function ur(e, t, s = ye) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Ns(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      ar(i.parent.vnode) && qo(n, t, s, i), i = i.parent;
  }
}
function qo(e, t, s, n) {
  const i = Ns(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  hr(() => {
    xn(n[t], i);
  }, s);
}
function Ns(e, t, s = ye, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      ze();
      const l = ls(s), c = Oe(t, s, e, o);
      return l(), Je(), c;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const st = (e) => (t, s = ye) => {
  (!is || e === "sp") && Ns(e, (...n) => t(...n), s);
}, Xo = st("bm"), fr = st("m"), Zo = st(
  "bu"
), Qo = st("u"), dr = st(
  "bum"
), hr = st("um"), el = st(
  "sp"
), tl = st("rtg"), sl = st("rtc");
function nl(e, t = ye) {
  Ns("ec", e, t);
}
const il = /* @__PURE__ */ Symbol.for("v-ndc");
function Tt(e, t, s, n) {
  let i;
  const r = s, o = j(e);
  if (o || re(e)) {
    const l = o && /* @__PURE__ */ et(e);
    let c = !1, d = !1;
    l && (c = !/* @__PURE__ */ Ee(e), d = /* @__PURE__ */ tt(e), e = ks(e)), i = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      i[u] = t(
        c ? d ? Pt(Le(e[u])) : Le(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (Q(e))
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
const dn = (e) => e ? Dr(e) ? Hs(e) : dn(e.parent) : null, Yt = (
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
    $parent: (e) => dn(e.parent),
    $root: (e) => dn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => gr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ln(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ss.bind(e.proxy)),
    $watch: (e) => Wo.bind(e)
  })
), Qs = (e, t) => e !== te && !e.__isScriptSetup && Y(e, t), rl = {
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
        if (Qs(n, t))
          return o[t] = 1, n[t];
        if (i !== te && Y(i, t))
          return o[t] = 2, i[t];
        if (Y(r, t))
          return o[t] = 3, r[t];
        if (s !== te && Y(s, t))
          return o[t] = 4, s[t];
        hn && (o[t] = 0);
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
    if (s !== te && Y(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = c.config.globalProperties, Y(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return Qs(i, t) ? (i[t] = s, !0) : n !== te && Y(n, t) ? (n[t] = s, !0) : Y(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let c;
    return !!(s[l] || e !== te && l[0] !== "$" && Y(e, l) || Qs(t, l) || Y(r, l) || Y(n, l) || Y(Yt, l) || Y(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : Y(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Gn(e) {
  return j(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let hn = !0;
function ol(e) {
  const t = gr(e), s = e.proxy, n = e.ctx;
  hn = !1, t.beforeCreate && Yn(t.beforeCreate, e, "bc");
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
    deactivated: P,
    beforeDestroy: F,
    beforeUnmount: N,
    destroyed: z,
    unmounted: R,
    render: L,
    renderTracked: X,
    renderTriggered: H,
    errorCaptured: T,
    serverPrefetch: O,
    // public API
    expose: ie,
    inheritAttrs: be,
    // assets
    components: Te,
    directives: $e,
    filters: Lt
  } = t;
  if (d && ll(d, n, null), o)
    for (const W in o) {
      const se = o[W];
      K(se) && (n[W] = se.bind(s));
    }
  if (i) {
    const W = i.call(s, s);
    Q(W) && (e.data = /* @__PURE__ */ Ds(W));
  }
  if (hn = !0, r)
    for (const W in r) {
      const se = r[W], at = K(se) ? se.bind(s, s) : K(se.get) ? se.get.bind(s, s) : Be, us = !K(se) && K(se.set) ? se.set.bind(s) : Be, ut = rt({
        get: at,
        set: us
      });
      Object.defineProperty(n, W, {
        enumerable: !0,
        configurable: !0,
        get: () => ut.value,
        set: (ke) => ut.value = ke
      });
    }
  if (l)
    for (const W in l)
      pr(l[W], n, s, W);
  if (c) {
    const W = K(c) ? c.call(s) : c;
    Reflect.ownKeys(W).forEach((se) => {
      Vo(se, W[se]);
    });
  }
  u && Yn(u, e, "c");
  function le(W, se) {
    j(se) ? se.forEach((at) => W(at.bind(s))) : se && W(se.bind(s));
  }
  if (le(Xo, h), le(fr, w), le(Zo, b), le(Qo, S), le(Go, g), le(Yo, P), le(nl, T), le(sl, X), le(tl, H), le(dr, N), le(hr, R), le(el, O), j(ie))
    if (ie.length) {
      const W = e.exposed || (e.exposed = {});
      ie.forEach((se) => {
        Object.defineProperty(W, se, {
          get: () => s[se],
          set: (at) => s[se] = at,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  L && e.render === Be && (e.render = L), be != null && (e.inheritAttrs = be), Te && (e.components = Te), $e && (e.directives = $e), O && cr(e);
}
function ll(e, t, s = Be) {
  j(e) && (e = pn(e));
  for (const n in e) {
    const i = e[n];
    let r;
    Q(i) ? "default" in i ? r = Wt(
      i.from || n,
      i.default,
      !0
    ) : r = Wt(i.from || n) : r = Wt(i), /* @__PURE__ */ oe(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function Yn(e, t, s) {
  Oe(
    j(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function pr(e, t, s, n) {
  let i = n.includes(".") ? lr(s, n) : () => s[n];
  if (re(e)) {
    const r = t[e];
    K(r) && zt(i, r);
  } else if (K(e))
    zt(i, e.bind(s));
  else if (Q(e))
    if (j(e))
      e.forEach((r) => pr(r, t, s, n));
    else {
      const r = K(e.handler) ? e.handler.bind(s) : t[e.handler];
      K(r) && zt(i, r, e);
    }
}
function gr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !i.length && !s && !n ? c = t : (c = {}, i.length && i.forEach(
    (d) => Es(c, d, o, !0)
  ), Es(c, t, o)), Q(t) && r.set(t, c), c;
}
function Es(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && Es(e, r, s, !0), i && i.forEach(
    (o) => Es(e, o, s, !0)
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
      K(e) ? e.call(this, this) : e,
      K(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function al(e, t) {
  return Nt(pn(e), pn(t));
}
function pn(e) {
  if (j(e)) {
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
  return e ? j(e) && j(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : he(
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
function mr() {
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
    K(n) || (n = he({}, n)), i != null && !Q(i) && (i = null);
    const r = mr(), o = /* @__PURE__ */ new WeakSet(), l = [];
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
          const b = d._ceVNode || ce(n, i);
          return b.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(b, u, w), c = !0, d._container = u, u.__vue_app__ = d, Hs(b.component);
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
const hl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Pe(t)}Modifiers`] || e[`${ct(t)}Modifiers`];
function pl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || te;
  let i = s;
  const r = t.startsWith("update:"), o = r && hl(n, t.slice(7));
  o && (o.trim && (i = s.map((u) => re(u) ? u.trim() : u)), o.number && (i = s.map(wn)));
  let l, c = n[l = Js(t)] || // also try camelCase event handler (#2249)
  n[l = Js(Pe(t))];
  !c && r && (c = n[l = Js(ct(t))]), c && Oe(
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
const gl = /* @__PURE__ */ new WeakMap();
function vr(e, t, s = !1) {
  const n = s ? gl : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!K(e)) {
    const c = (d) => {
      const u = vr(d, t, !0);
      u && (l = !0, he(o, u));
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (Q(e) && n.set(e, null), null) : (j(r) ? r.forEach((c) => o[c] = null) : he(o, r), Q(e) && n.set(e, o), o);
}
function js(e, t) {
  return !e || !Ps(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, ct(t)) || Y(e, t));
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
    setupState: b,
    ctx: S,
    inheritAttrs: g
  } = e, P = Cs(e);
  let F, N;
  try {
    if (s.shapeFlag & 4) {
      const R = i || n, L = R;
      F = He(
        d.call(
          L,
          R,
          u,
          h,
          b,
          w,
          S
        )
      ), N = l;
    } else {
      const R = t;
      F = He(
        R.length > 1 ? R(
          h,
          { attrs: l, slots: o, emit: c }
        ) : R(
          h,
          null
        )
      ), N = t.props ? l : ml(l);
    }
  } catch (R) {
    qt.length = 0, Fs(R, e, 1), F = ce(lt);
  }
  let z = F;
  if (N && g !== !1) {
    const R = Object.keys(N), { shapeFlag: L } = z;
    R.length && L & 7 && (r && R.some(As) && (N = vl(
      N,
      r
    )), z = At(z, N, !1, !0));
  }
  return s.dirs && (z = At(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(s.dirs) : s.dirs), s.transition && On(z, s.transition), F = z, Cs(P), F;
}
const ml = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Ps(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, vl = (e, t) => {
  const s = {};
  for (const n in e)
    (!As(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
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
        if (yr(o, n, w) && !js(d, w))
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
    if (yr(t, e, r) && !js(s, r))
      return !0;
  }
  return !1;
}
function yr(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && Q(n) && Q(i) ? !Cn(n, i) : n !== i;
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
const br = {}, _r = () => Object.create(br), xr = (e) => Object.getPrototypeOf(e) === br;
function _l(e, t, s, n = !1) {
  const i = {}, r = _r();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), wr(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ Eo(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function xl(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ G(i), [c] = e.propsOptions;
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
        if (js(e.emitsOptions, w))
          continue;
        const b = t[w];
        if (c)
          if (Y(r, w))
            b !== r[w] && (r[w] = b, d = !0);
          else {
            const S = Pe(w);
            i[S] = gn(
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
    wr(e, t, i, r) && (d = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !Y(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ct(h)) === h || !Y(t, u))) && (c ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[u] !== void 0) && (i[h] = gn(
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
  d && Ze(e.attrs, "set", "");
}
function wr(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Ht(c))
        continue;
      const d = t[c];
      let u;
      i && Y(i, u = Pe(c)) ? !r || !r.includes(u) ? s[u] = d : (l || (l = {}))[u] = d : js(e.emitsOptions, c) || (!(c in n) || d !== n[c]) && (n[c] = d, o = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ G(s), d = l || te;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      s[h] = gn(
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
function gn(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const l = Y(o, "default");
    if (l && n === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && K(c)) {
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
function Sr(e, t, s = !1) {
  const n = s ? wl : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let c = !1;
  if (!K(e)) {
    const u = (h) => {
      c = !0;
      const [w, b] = Sr(h, t, !0);
      he(o, w), b && l.push(...b);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return Q(e) && n.set(e, Ct), Ct;
  if (j(r))
    for (let u = 0; u < r.length; u++) {
      const h = Pe(r[u]);
      ei(h) && (o[h] = te);
    }
  else if (r)
    for (const u in r) {
      const h = Pe(u);
      if (ei(h)) {
        const w = r[u], b = o[h] = j(w) || K(w) ? { type: w } : he({}, w), S = b.type;
        let g = !1, P = !0;
        if (j(S))
          for (let F = 0; F < S.length; ++F) {
            const N = S[F], z = K(N) && N.name;
            if (z === "Boolean") {
              g = !0;
              break;
            } else z === "String" && (P = !1);
          }
        else
          g = K(S) && S.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = g, b[
          1
          /* shouldCastTrue */
        ] = P, (g || Y(b, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return Q(e) && n.set(e, d), d;
}
function ei(e) {
  return e[0] !== "$" && !Ht(e);
}
const $n = (e) => e === "_" || e === "_ctx" || e === "$stable", kn = (e) => j(e) ? e.map(He) : [He(e)], Sl = (e, t, s) => {
  if (t._n)
    return t;
  const n = jo((...i) => kn(t(...i)), s);
  return n._c = !1, n;
}, Cr = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if ($n(i)) continue;
    const r = e[i];
    if (K(r))
      t[i] = Sl(i, r, n);
    else if (r != null) {
      const o = kn(r);
      t[i] = () => o;
    }
  }
}, Ir = (e, t) => {
  const s = kn(t);
  e.slots.default = () => s;
}, Er = (e, t, s) => {
  for (const n in t)
    (s || !$n(n)) && (e[n] = t[n]);
}, Cl = (e, t, s) => {
  const n = e.slots = _r();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Er(n, t, s), s && Oi(n, "_", i, !0)) : Cr(t, n);
  } else t && Ir(e, t);
}, Il = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, o = te;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : Er(i, t, s) : (r = !t.$stable, Cr(t, i)), o = t;
  } else t && (Ir(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !$n(l) && o[l] == null && delete i[l];
}, _e = Pl;
function El(e) {
  return Tl(e);
}
function Tl(e, t) {
  const s = $s();
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
    setScopeId: b = Be,
    insertStaticContent: S
  } = e, g = (a, f, p, x = null, _ = null, m = null, E = void 0, I = null, C = !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !Ut(a, f) && (x = fs(a), ke(a, _, m, !0), a = null), f.patchFlag === -2 && (C = !1, f.dynamicChildren = null);
    const { type: v, ref: U, shapeFlag: M } = f;
    switch (v) {
      case Vs:
        P(a, f, p, x);
        break;
      case lt:
        F(a, f, p, x);
        break;
      case ys:
        a == null && N(f, p, x, E);
        break;
      case q:
        Te(
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
        M & 1 ? L(
          a,
          f,
          p,
          x,
          _,
          m,
          E,
          I,
          C
        ) : M & 6 ? $e(
          a,
          f,
          p,
          x,
          _,
          m,
          E,
          I,
          C
        ) : (M & 64 || M & 128) && v.process(
          a,
          f,
          p,
          x,
          _,
          m,
          E,
          I,
          C,
          $t
        );
    }
    U != null && _ ? Jt(U, a && a.ref, m, f || a, !f) : U == null && a && a.ref != null && Jt(a.ref, null, m, a, !0);
  }, P = (a, f, p, x) => {
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
  }, N = (a, f, p, x) => {
    [a.el, a.anchor] = S(
      a.children,
      f,
      p,
      x,
      a.el,
      a.anchor
    );
  }, z = ({ el: a, anchor: f }, p, x) => {
    let _;
    for (; a && a !== f; )
      _ = w(a), n(a, p, x), a = _;
    n(f, p, x);
  }, R = ({ el: a, anchor: f }) => {
    let p;
    for (; a && a !== f; )
      p = w(a), i(a), a = p;
    i(f);
  }, L = (a, f, p, x, _, m, E, I, C) => {
    if (f.type === "svg" ? E = "svg" : f.type === "math" && (E = "mathml"), a == null)
      X(
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
  }, X = (a, f, p, x, _, m, E, I) => {
    let C, v;
    const { props: U, shapeFlag: M, transition: k, dirs: V } = a;
    if (C = a.el = o(
      a.type,
      m,
      U && U.is,
      U
    ), M & 8 ? u(C, a.children) : M & 16 && T(
      a.children,
      C,
      null,
      x,
      _,
      en(a, m),
      E,
      I
    ), V && ft(a, null, x, "created"), H(C, a, a.scopeId, E, x), U) {
      for (const ee in U)
        ee !== "value" && !Ht(ee) && r(C, ee, null, U[ee], m, x);
      "value" in U && r(C, "value", null, U.value, m), (v = U.onVnodeBeforeMount) && Ne(v, x, a);
    }
    V && ft(a, null, x, "beforeMount");
    const J = Ml(_, k);
    J && k.beforeEnter(C), n(C, f, p), ((v = U && U.onVnodeMounted) || J || V) && _e(() => {
      try {
        v && Ne(v, x, a), J && k.enter(C), V && ft(a, null, x, "mounted");
      } finally {
      }
    }, _);
  }, H = (a, f, p, x, _) => {
    if (p && b(a, p), x)
      for (let m = 0; m < x.length; m++)
        b(a, x[m]);
    if (_) {
      let m = _.subTree;
      if (f === m || Pr(m.type) && (m.ssContent === f || m.ssFallback === f)) {
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
      const U = a[v] = I ? Xe(a[v]) : He(a[v]);
      g(
        null,
        U,
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
    let { patchFlag: C, dynamicChildren: v, dirs: U } = f;
    C |= a.patchFlag & 16;
    const M = a.props || te, k = f.props || te;
    let V;
    if (p && dt(p, !1), (V = k.onVnodeBeforeUpdate) && Ne(V, p, f, a), U && ft(f, a, p, "beforeUpdate"), p && dt(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    v && (!a.dynamicChildren || a.dynamicChildren.length !== v.length) && (C = 0, E = !1, v = null), (M.innerHTML && k.innerHTML == null || M.textContent && k.textContent == null) && u(I, ""), v ? ie(
      a.dynamicChildren,
      v,
      I,
      p,
      x,
      en(f, _),
      m
    ) : E || se(
      a,
      f,
      I,
      null,
      p,
      x,
      en(f, _),
      m,
      !1
    ), C > 0) {
      if (C & 16)
        be(I, M, k, p, _);
      else if (C & 2 && M.class !== k.class && r(I, "class", null, k.class, _), C & 4 && r(I, "style", M.style, k.style, _), C & 8) {
        const J = f.dynamicProps;
        for (let ee = 0; ee < J.length; ee++) {
          const Z = J[ee], ae = M[Z], de = k[Z];
          (de !== ae || Z === "value") && r(I, Z, ae, de, _, p);
        }
      }
      C & 1 && a.children !== f.children && u(I, f.children);
    } else !E && v == null && be(I, M, k, p, _);
    ((V = k.onVnodeUpdated) || U) && _e(() => {
      V && Ne(V, p, f, a), U && ft(f, a, p, "updated");
    }, x);
  }, ie = (a, f, p, x, _, m, E) => {
    for (let I = 0; I < f.length; I++) {
      const C = a[I], v = f[I], U = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === q || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ut(C, v) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? h(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      g(
        C,
        v,
        U,
        null,
        x,
        _,
        m,
        E,
        !0
      );
    }
  }, be = (a, f, p, x, _) => {
    if (f !== p) {
      if (f !== te)
        for (const m in f)
          !Ht(m) && !(m in p) && r(
            a,
            m,
            f[m],
            null,
            _,
            x
          );
      for (const m in p) {
        if (Ht(m)) continue;
        const E = p[m], I = f[m];
        E !== I && m !== "value" && r(a, m, I, E, _, x);
      }
      "value" in p && r(a, "value", f.value, p.value, _);
    }
  }, Te = (a, f, p, x, _, m, E, I, C) => {
    const v = f.el = a ? a.el : l(""), U = f.anchor = a ? a.anchor : l("");
    let { patchFlag: M, dynamicChildren: k, slotScopeIds: V } = f;
    V && (I = I ? I.concat(V) : V), a == null ? (n(v, p, x), n(U, p, x), T(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      p,
      U,
      _,
      m,
      E,
      I,
      C
    )) : M > 0 && M & 64 && k && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === k.length ? (ie(
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
    (f.key != null || _ && f === _.subTree) && Tr(
      a,
      f,
      !0
      /* shallow */
    )) : se(
      a,
      f,
      p,
      U,
      _,
      m,
      E,
      I,
      C
    );
  }, $e = (a, f, p, x, _, m, E, I, C) => {
    f.slotScopeIds = I, a == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      p,
      x,
      E,
      C
    ) : Lt(
      f,
      p,
      x,
      _,
      m,
      E,
      C
    ) : as(a, f, C);
  }, Lt = (a, f, p, x, _, m, E) => {
    const I = a.component = Ul(
      a,
      x,
      _
    );
    if (ar(a) && (I.ctx.renderer = $t), Fl(I, !1, E), I.asyncDep) {
      if (_ && _.registerDep(I, le, E), !a.el) {
        const C = I.subTree = ce(lt);
        F(null, C, f, p), a.placeholder = C.el;
      }
    } else
      le(
        I,
        a,
        f,
        p,
        _,
        m,
        E
      );
  }, as = (a, f, p) => {
    const x = f.component = a.component;
    if (yl(a, f, p))
      if (x.asyncDep && !x.asyncResolved) {
        W(x, f, p);
        return;
      } else
        x.next = f, x.update();
    else
      f.el = a.el, x.vnode = f;
  }, le = (a, f, p, x, _, m, E) => {
    const I = () => {
      if (a.isMounted) {
        let { next: M, bu: k, u: V, parent: J, vnode: ee } = a;
        {
          const Ue = Mr(a);
          if (Ue) {
            M && (M.el = ee.el, W(a, M, E)), Ue.asyncDep.then(() => {
              _e(() => {
                a.isUnmounted || v();
              }, _);
            });
            return;
          }
        }
        let Z = M, ae;
        dt(a, !1), M ? (M.el = ee.el, W(a, M, E)) : M = ee, k && vs(k), (ae = M.props && M.props.onVnodeBeforeUpdate) && Ne(ae, J, M, ee), dt(a, !0);
        const de = Zn(a), De = a.subTree;
        a.subTree = de, g(
          De,
          de,
          // parent may have changed if it's in a teleport
          h(De.el),
          // anchor may have changed if it's in a fragment
          fs(De),
          a,
          _,
          m
        ), M.el = de.el, Z === null && bl(a, de.el), V && _e(V, _), (ae = M.props && M.props.onVnodeUpdated) && _e(
          () => Ne(ae, J, M, ee),
          _
        );
      } else {
        let M;
        const { el: k, props: V } = f, { bm: J, m: ee, parent: Z, root: ae, type: de } = a, De = Gt(f);
        dt(a, !1), J && vs(J), !De && (M = V && V.onVnodeBeforeMount) && Ne(M, Z, f), dt(a, !0);
        {
          ae.ce && ae.ce._hasShadowRoot() && ae.ce._injectChildStyle(
            de,
            a.parent ? a.parent.type : void 0
          );
          const Ue = a.subTree = Zn(a);
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
        if (ee && _e(ee, _), !De && (M = V && V.onVnodeMounted)) {
          const Ue = f;
          _e(
            () => Ne(M, Z, Ue),
            _
          );
        }
        (f.shapeFlag & 256 || Z && Gt(Z.vnode) && Z.vnode.shapeFlag & 256) && a.a && _e(a.a, _), a.isMounted = !0, f = p = x = null;
      }
    };
    a.scope.on();
    const C = a.effect = new ji(I);
    a.scope.off();
    const v = a.update = C.run.bind(C), U = a.job = C.runIfDirty.bind(C);
    U.i = a, U.id = a.uid, C.scheduler = () => Ln(U), dt(a, !0), v();
  }, W = (a, f, p) => {
    f.component = a;
    const x = a.vnode.props;
    a.vnode = f, a.next = null, xl(a, f.props, x, p), Il(a, f.children, p), ze(), Wn(a), Je();
  }, se = (a, f, p, x, _, m, E, I, C = !1) => {
    const v = a && a.children, U = a ? a.shapeFlag : 0, M = f.children, { patchFlag: k, shapeFlag: V } = f;
    if (k > 0) {
      if (k & 128) {
        us(
          v,
          M,
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
        at(
          v,
          M,
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
    V & 8 ? (U & 16 && Ot(v, _, m), M !== v && u(p, M)) : U & 16 ? V & 16 ? us(
      v,
      M,
      p,
      x,
      _,
      m,
      E,
      I,
      C
    ) : Ot(v, _, m, !0) : (U & 8 && u(p, ""), V & 16 && T(
      M,
      p,
      x,
      _,
      m,
      E,
      I,
      C
    ));
  }, at = (a, f, p, x, _, m, E, I, C) => {
    a = a || Ct, f = f || Ct;
    const v = a.length, U = f.length, M = Math.min(v, U);
    let k;
    for (k = 0; k < M; k++) {
      const V = f[k] = C ? Xe(f[k]) : He(f[k]);
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
    v > U ? Ot(
      a,
      _,
      m,
      !0,
      !1,
      M
    ) : T(
      f,
      p,
      x,
      _,
      m,
      E,
      I,
      C,
      M
    );
  }, us = (a, f, p, x, _, m, E, I, C) => {
    let v = 0;
    const U = f.length;
    let M = a.length - 1, k = U - 1;
    for (; v <= M && v <= k; ) {
      const V = a[v], J = f[v] = C ? Xe(f[v]) : He(f[v]);
      if (Ut(V, J))
        g(
          V,
          J,
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
    for (; v <= M && v <= k; ) {
      const V = a[M], J = f[k] = C ? Xe(f[k]) : He(f[k]);
      if (Ut(V, J))
        g(
          V,
          J,
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
      M--, k--;
    }
    if (v > M) {
      if (v <= k) {
        const V = k + 1, J = V < U ? f[V].el : x;
        for (; v <= k; )
          g(
            null,
            f[v] = C ? Xe(f[v]) : He(f[v]),
            p,
            J,
            _,
            m,
            E,
            I,
            C
          ), v++;
      }
    } else if (v > k)
      for (; v <= M; )
        ke(a[v], _, m, !0), v++;
    else {
      const V = v, J = v, ee = /* @__PURE__ */ new Map();
      for (v = J; v <= k; v++) {
        const Se = f[v] = C ? Xe(f[v]) : He(f[v]);
        Se.key != null && ee.set(Se.key, v);
      }
      let Z, ae = 0;
      const de = k - J + 1;
      let De = !1, Ue = 0;
      const kt = new Array(de);
      for (v = 0; v < de; v++) kt[v] = 0;
      for (v = V; v <= M; v++) {
        const Se = a[v];
        if (ae >= de) {
          ke(Se, _, m, !0);
          continue;
        }
        let Fe;
        if (Se.key != null)
          Fe = ee.get(Se.key);
        else
          for (Z = J; Z <= k; Z++)
            if (kt[Z - J] === 0 && Ut(Se, f[Z])) {
              Fe = Z;
              break;
            }
        Fe === void 0 ? ke(Se, _, m, !0) : (kt[Fe - J] = v + 1, Fe >= Ue ? Ue = Fe : De = !0, g(
          Se,
          f[Fe],
          p,
          null,
          _,
          m,
          E,
          I,
          C
        ), ae++);
      }
      const Fn = De ? Rl(kt) : Ct;
      for (Z = Fn.length - 1, v = de - 1; v >= 0; v--) {
        const Se = J + v, Fe = f[Se], Nn = f[Se + 1], jn = Se + 1 < U ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Nn.el || Rr(Nn)
        ) : x;
        kt[v] === 0 ? g(
          null,
          Fe,
          p,
          jn,
          _,
          m,
          E,
          I,
          C
        ) : De && (Z < 0 || v !== Fn[Z] ? ut(Fe, p, jn, 2) : Z--);
      }
    }
  }, ut = (a, f, p, x, _ = null) => {
    const { el: m, type: E, transition: I, children: C, shapeFlag: v } = a;
    if (v & 6) {
      ut(a.component.subTree, f, p, x);
      return;
    }
    if (v & 128) {
      a.suspense.move(f, p, x);
      return;
    }
    if (v & 64) {
      E.move(a, f, p, $t);
      return;
    }
    if (E === q) {
      n(m, f, p);
      for (let M = 0; M < C.length; M++)
        ut(C[M], f, p, x);
      n(a.anchor, f, p);
      return;
    }
    if (E === ys) {
      z(a, f, p);
      return;
    }
    if (x !== 2 && v & 1 && I)
      if (x === 0)
        I.persisted && !m[Zs] ? n(m, f, p) : (I.beforeEnter(m), n(m, f, p), _e(() => I.enter(m), _));
      else {
        const { leave: M, delayLeave: k, afterLeave: V } = I, J = () => {
          a.ctx.isUnmounted ? i(m) : n(m, f, p);
        }, ee = () => {
          const Z = m._isLeaving || !!m[Zs];
          m._isLeaving && m[Zs](
            !0
            /* cancelled */
          ), I.persisted && !Z ? J() : M(m, () => {
            J(), V && V();
          });
        };
        k ? k(m, J, ee) : ee();
      }
    else
      n(m, f, p);
  }, ke = (a, f, p, x = !1, _ = !1) => {
    const {
      type: m,
      props: E,
      ref: I,
      children: C,
      dynamicChildren: v,
      shapeFlag: U,
      patchFlag: M,
      dirs: k,
      cacheIndex: V,
      memo: J
    } = a;
    if (M === -2 && (_ = !1), I != null && (ze(), Jt(I, null, p, a, !0), Je()), V != null && (f.renderCache[V] = void 0), U & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const ee = U & 1 && k, Z = !Gt(a);
    let ae;
    if (Z && (ae = E && E.onVnodeBeforeUnmount) && Ne(ae, f, a), U & 6)
      Gr(a.component, p, x);
    else {
      if (U & 128) {
        a.suspense.unmount(p, x);
        return;
      }
      ee && ft(a, null, f, "beforeUnmount"), U & 64 ? a.type.remove(
        a,
        f,
        p,
        $t,
        x
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== q || M > 0 && M & 64) ? Ot(
        v,
        f,
        p,
        !1,
        !0
      ) : (m === q && M & 384 || !_ && U & 16) && Ot(C, f, p), x && Dn(a);
    }
    const de = J != null && V == null;
    (Z && (ae = E && E.onVnodeUnmounted) || ee || de) && _e(() => {
      ae && Ne(ae, f, a), ee && ft(a, null, f, "unmounted"), de && (a.el = null);
    }, p);
  }, Dn = (a) => {
    const { type: f, el: p, anchor: x, transition: _ } = a;
    if (f === q) {
      Jr(p, x);
      return;
    }
    if (f === ys) {
      R(a);
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
  }, Jr = (a, f) => {
    let p;
    for (; a !== f; )
      p = w(a), i(a), a = p;
    i(f);
  }, Gr = (a, f, p) => {
    const { bum: x, scope: _, job: m, subTree: E, um: I, m: C, a: v } = a;
    ti(C), ti(v), x && vs(x), _.stop(), m && (m.flags |= 8, ke(E, a, f, p)), I && _e(I, f), _e(() => {
      a.isUnmounted = !0;
    }, f);
  }, Ot = (a, f, p, x = !1, _ = !1, m = 0) => {
    for (let E = m; E < a.length; E++)
      ke(a[E], f, p, x, _);
  }, fs = (a) => {
    if (a.shapeFlag & 6)
      return fs(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const f = w(a.anchor || a.el), p = f && f[zo];
    return p ? w(p) : f;
  };
  let zs = !1;
  const Un = (a, f, p) => {
    let x;
    a == null ? f._vnode && (ke(f._vnode, null, null, !0), x = f._vnode.component) : g(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      p
    ), f._vnode = a, zs || (zs = !0, Wn(x), nr(), zs = !1);
  }, $t = {
    p: g,
    um: ke,
    m: ut,
    r: Dn,
    mt: Lt,
    mc: T,
    pc: se,
    pbc: ie,
    n: fs,
    o: e
  };
  return {
    render: Un,
    hydrate: void 0,
    createApp: dl(Un)
  };
}
function en({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function dt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ml(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Tr(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (j(n) && j(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Xe(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && Tr(o, l)), l.type === Vs && (l.patchFlag === -1 && (l = i[r] = Xe(l)), l.el = o.el), l.type === lt && !l.el && (l.el = o.el);
    }
}
function Rl(e) {
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
const Pr = (e) => e.__isSuspense;
function Pl(e, t) {
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : No(e);
}
const q = /* @__PURE__ */ Symbol.for("v-fgt"), Vs = /* @__PURE__ */ Symbol.for("v-txt"), lt = /* @__PURE__ */ Symbol.for("v-cmt"), ys = /* @__PURE__ */ Symbol.for("v-stc"), qt = [];
let Ie = null;
function A(e = !1) {
  qt.push(Ie = e ? null : []);
}
function Al() {
  qt.pop(), Ie = qt[qt.length - 1] || null;
}
let ns = 1;
function si(e, t = !1) {
  ns += e, e < 0 && Ie && t && (Ie.hasOnce = !0);
}
function Ar(e) {
  return e.dynamicChildren = ns > 0 ? Ie || Ct : null, Al(), ns > 0 && Ie && Ie.push(e), e;
}
function D(e, t, s, n, i, r) {
  return Ar(
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
function ot(e, t, s, n, i) {
  return Ar(
    ce(
      e,
      t,
      s,
      n,
      i,
      !0
    )
  );
}
function Lr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ut(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Or = ({ key: e }) => e ?? null, bs = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || /* @__PURE__ */ oe(e) || K(e) ? { i: Me, r: e, k: t, f: !!s } : e : null);
function y(e, t = null, s = null, n = 0, i = null, r = e === q ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Or(t),
    ref: t && bs(t),
    scopeId: rr,
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
  return l ? (Ts(c, s), r & 128 && e.normalize(c)) : s && (c.shapeFlag |= re(s) ? 8 : 16), ns > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ie && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ie.push(c), c;
}
const ce = Ll;
function Ll(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === il) && (e = lt), Lr(e)) {
    const l = At(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ts(l, s), ns > 0 && !r && Ie && (l.shapeFlag & 6 ? Ie[Ie.indexOf(e)] = l : Ie.push(l)), l.patchFlag = -2, l;
  }
  if (Hl(e) && (e = e.__vccOpts), t) {
    t = Ol(t);
    let { class: l, style: c } = t;
    l && !re(l) && (t.class = We(l)), Q(c) && (/* @__PURE__ */ Us(c) && !j(c) && (c = he({}, c)), t.style = Sn(c));
  }
  const o = re(e) ? 1 : Pr(e) ? 128 : Jo(e) ? 64 : Q(e) ? 4 : K(e) ? 2 : 0;
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
function Ol(e) {
  return e ? /* @__PURE__ */ Us(e) || xr(e) ? he({}, e) : e : null;
}
function At(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: c } = e, d = t ? $l(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Or(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? j(r) ? r.concat(bs(t)) : [r, bs(t)] : bs(t)
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
    patchFlag: t && e.type !== q ? o === -1 ? 16 : o | 16 : o,
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
  return c && n && On(
    u,
    c.clone(u)
  ), u;
}
function $r(e = " ", t = 0) {
  return ce(Vs, null, e, t);
}
function tn(e, t) {
  const s = ce(ys, null, e);
  return s.staticCount = t, s;
}
function we(e = "", t = !1) {
  return t ? (A(), ot(lt, null, e)) : ce(lt, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? ce(lt) : j(e) ? ce(
    q,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Lr(e) ? Xe(e) : ce(Vs, null, String(e));
}
function Xe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : At(e);
}
function Ts(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (j(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ts(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !xr(t) ? t._ctx = Me : i === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (K(t)) {
    if (n & 65) {
      Ts(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Me }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [$r(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function $l(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = We([t.class, n.class]));
      else if (i === "style")
        t.style = Sn([t.style, n.style]);
      else if (Ps(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(j(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !As(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Ne(e, t, s, n = null) {
  Oe(e, t, 7, [
    s,
    n
  ]);
}
const kl = mr();
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
    propsOptions: Sr(n, i),
    emitsOptions: vr(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: te,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: te,
    data: te,
    props: te,
    attrs: te,
    slots: te,
    refs: te,
    setupState: te,
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
const kr = () => ye || Me;
let Ms, mn;
{
  const e = $s(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Ms = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ye = s
  ), mn = t(
    "__VUE_SSR_SETTERS__",
    (s) => is = s
  );
}
const ls = (e) => {
  const t = ye;
  return Ms(e), e.scope.on(), () => {
    e.scope.off(), Ms(t);
  };
}, ni = () => {
  ye && ye.scope.off(), Ms(null);
};
function Dr(e) {
  return e.vnode.shapeFlag & 4;
}
let is = !1;
function Fl(e, t = !1, s = !1) {
  t && mn(t);
  const { props: n, children: i } = e.vnode, r = Dr(e);
  _l(e, n, r, t), Cl(e, i, s || t);
  const o = r ? Nl(e, t) : void 0;
  return t && mn(!1), o;
}
function Nl(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, rl);
  const { setup: n } = s;
  if (n) {
    ze();
    const i = e.setupContext = n.length > 1 ? Vl(e) : null, r = ls(e), o = os(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Ri(o);
    if (Je(), r(), (l || e.sp) && !Gt(e) && cr(e), l) {
      if (o.then(ni, ni), t)
        return o.then((c) => {
          ii(e, c);
        }).catch((c) => {
          Fs(c, e, 0);
        });
      e.asyncDep = o;
    } else
      ii(e, o);
  } else
    Ur(e);
}
function ii(e, t, s) {
  K(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) && (e.setupState = er(t)), Ur(e);
}
function Ur(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Be);
  {
    const i = ls(e);
    ze();
    try {
      ol(e);
    } finally {
      Je(), i();
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
function Hs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(er(An(e.exposed)), {
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
  return K(e) && "__vccOpts" in e;
}
const rt = (e, t) => /* @__PURE__ */ $o(e, t, is), Kl = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let vn;
const ri = typeof window < "u" && window.trustedTypes;
if (ri)
  try {
    vn = /* @__PURE__ */ ri.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Fr = vn ? (e) => vn.createHTML(e) : (e) => e, Bl = "http://www.w3.org/2000/svg", Wl = "http://www.w3.org/1998/Math/MathML", Ye = typeof document < "u" ? document : null, oi = Ye && /* @__PURE__ */ Ye.createElement("template"), zl = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? Ye.createElementNS(Bl, e) : t === "mathml" ? Ye.createElementNS(Wl, e) : s ? Ye.createElement(e, { is: s }) : Ye.createElement(e);
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
      oi.innerHTML = Fr(
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
  const n = e.style, i = re(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (re(t))
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
        !re(t) && t ? t[o] : void 0,
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
  if (j(s))
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
const ai = ["Webkit", "Moz", "ms"], sn = {};
function Ql(e, t) {
  const s = sn[t];
  if (s)
    return s;
  let n = Pe(t);
  if (n !== "filter" && n in e)
    return sn[t] = n;
  n = Li(n);
  for (let i = 0; i < ai.length; i++) {
    const r = ai[i] + n;
    if (r in e)
      return sn[t] = r;
  }
  return t;
}
function ec(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && re(n) && s === n;
}
const ui = "http://www.w3.org/1999/xlink";
function fi(e, t, s, n, i, r = io(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(ui, t.slice(6, t.length)) : e.setAttributeNS(ui, t, s) : s == null || r && !$i(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Re(s) ? String(s) : s
  );
}
function di(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Fr(s) : s);
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
let nn = 0;
const oc = /* @__PURE__ */ Promise.resolve(), lc = () => nn || (oc.then(() => nn = 0), nn = Date.now());
function cc(e, t) {
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
  return s.value = e, s.attached = lc(), s;
}
const pi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ac = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? Gl(e, n, o) : t === "style" ? Zl(e, s, n) : Ps(t) ? As(t) || sc(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : uc(e, t, n, o)) ? (di(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && fi(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (fc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !re(n))) ? di(e, Pe(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), fi(e, t, n, o));
};
function uc(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && pi(t) && K(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return pi(t) && re(s) ? !1 : t in e;
}
function fc(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = Pe(t);
  return Array.isArray(s) ? s.some((i) => Pe(i) === n) : Object.keys(s).some((i) => Pe(i) === n);
}
const gi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return j(t) ? (s) => vs(t, s) : t;
};
function dc(e) {
  e.target.composing = !0;
}
function mi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const rn = /* @__PURE__ */ Symbol("_assign");
function vi(e, t, s) {
  return t && (e = e.trim()), s && (e = wn(e)), e;
}
const Vt = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[rn] = gi(i);
    const r = n || i.props && i.props.type === "number";
    wt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[rn](vi(e.value, s, r));
    }), (s || r) && wt(e, "change", () => {
      e.value = vi(e.value, s, r);
    }), t || (wt(e, "compositionstart", dc), wt(e, "compositionend", mi), wt(e, "change", mi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: r } }, o) {
    if (e[rn] = gi(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? wn(e.value) : e.value, c = t ?? "";
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
}, Ks = (e, t) => {
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
}, Nr = (e, t) => {
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
const jr = (...e) => {
  const t = vc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = bc(n);
    if (!i) return;
    const r = t._component;
    !K(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
  return re(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Vr;
const Bs = (e) => Vr = e, Hr = (
  /* istanbul ignore next */
  Symbol()
);
function yn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Xt;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Xt || (Xt = {}));
function _c() {
  const e = Fi(!0), t = e.run(() => /* @__PURE__ */ Ce({}));
  let s = [], n = [];
  const i = An({
    install(r) {
      Bs(i), i._a = r, r.provide(Hr, i), r.config.globalProperties.$pinia = i, n.forEach((o) => s.push(o)), n = [];
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
const Kr = () => {
};
function bi(e, t, s, n = Kr) {
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
const xc = (e) => e(), _i = Symbol(), on = Symbol();
function bn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    yn(i) && yn(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ oe(n) && !/* @__PURE__ */ et(n) ? e[s] = bn(i, n) : e[s] = n;
  }
  return e;
}
const wc = (
  /* istanbul ignore next */
  Symbol()
);
function Sc(e) {
  return !yn(e) || !e.hasOwnProperty(wc);
}
const { assign: nt } = Object;
function Cc(e) {
  return !!(/* @__PURE__ */ oe(e) && e.effect);
}
function Ic(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t, l = s.state.value[e];
  let c;
  function d() {
    l || (s.state.value[e] = i ? i() : {});
    const u = /* @__PURE__ */ Po(s.state.value[e]);
    return nt(u, r, Object.keys(o || {}).reduce((h, w) => (h[w] = An(rt(() => {
      Bs(s);
      const b = s._s.get(e);
      return o[w].call(b, b);
    })), h), {}));
  }
  return c = Br(e, d, t, s, n, !0), c;
}
function Br(e, t, s = {}, n, i, r) {
  let o;
  const l = nt({ actions: {} }, s), c = { deep: !0 };
  let d, u, h = [], w = [], b;
  const S = n.state.value[e];
  !r && !S && (n.state.value[e] = {});
  let g;
  function P(T) {
    let O;
    d = u = !1, typeof T == "function" ? (T(n.state.value[e]), O = {
      type: Xt.patchFunction,
      storeId: e,
      events: b
    }) : (bn(n.state.value[e], T), O = {
      type: Xt.patchObject,
      payload: T,
      storeId: e,
      events: b
    });
    const ie = g = Symbol();
    Ss().then(() => {
      g === ie && (d = !0);
    }), u = !0, _t(h, O, n.state.value[e]);
  }
  const F = r ? function() {
    const { state: O } = s, ie = O ? O() : {};
    this.$patch((be) => {
      nt(be, ie);
    });
  } : (
    /* istanbul ignore next */
    Kr
  );
  function N() {
    o.stop(), h = [], w = [], n._s.delete(e);
  }
  const z = (T, O = "") => {
    if (_i in T)
      return T[on] = O, T;
    const ie = function() {
      Bs(n);
      const be = Array.from(arguments), Te = [], $e = [];
      function Lt(W) {
        Te.push(W);
      }
      function as(W) {
        $e.push(W);
      }
      _t(w, {
        args: be,
        name: ie[on],
        store: L,
        after: Lt,
        onError: as
      });
      let le;
      try {
        le = T.apply(this && this.$id === e ? this : L, be);
      } catch (W) {
        throw _t($e, W), W;
      }
      return le instanceof Promise ? le.then((W) => (_t(Te, W), W)).catch((W) => (_t($e, W), Promise.reject(W))) : (_t(Te, le), le);
    };
    return ie[_i] = !0, ie[on] = O, ie;
  }, R = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: bi.bind(null, w),
    $patch: P,
    $reset: F,
    $subscribe(T, O = {}) {
      const ie = bi(h, T, O.detached, () => be()), be = o.run(() => zt(() => n.state.value[e], (Te) => {
        (O.flush === "sync" ? u : d) && T({
          storeId: e,
          type: Xt.direct,
          events: b
        }, Te);
      }, nt({}, c, O)));
      return ie;
    },
    $dispose: N
  }, L = /* @__PURE__ */ Ds(R);
  n._s.set(e, L);
  const H = (n._a && n._a.runWithContext || xc)(() => n._e.run(() => (o = Fi()).run(() => t({ action: z }))));
  for (const T in H) {
    const O = H[T];
    if (/* @__PURE__ */ oe(O) && !Cc(O) || /* @__PURE__ */ et(O))
      r || (S && Sc(O) && (/* @__PURE__ */ oe(O) ? O.value = S[T] : bn(O, S[T])), n.state.value[e][T] = O);
    else if (typeof O == "function") {
      const ie = z(O, T);
      H[T] = ie, l.actions[T] = O;
    }
  }
  return nt(L, H), nt(/* @__PURE__ */ G(L), H), Object.defineProperty(L, "$state", {
    get: () => n.state.value[e],
    set: (T) => {
      P((O) => {
        nt(O, T);
      });
    }
  }), n._p.forEach((T) => {
    nt(L, o.run(() => T({
      store: L,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), S && r && s.hydrate && s.hydrate(L.$state, S), d = !0, u = !0, L;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ws(e, t, s) {
  let n, i;
  const r = typeof t == "function";
  typeof e == "string" ? (n = e, i = r ? s : t) : (i = e, n = e.id);
  function o(l, c) {
    const d = Ho();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (d ? Wt(Hr, null) : null), l && Bs(l), l = Vr, l._s.has(n) || (r ? Br(n, t, i, l) : Ic(n, i, l)), l._s.get(n);
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
function ln() {
  return {
    volume: 65,
    playMode: "list",
    position: null,
    autoPlayOnNewCue: !0,
    providers: Ec(),
    customCueRules: []
  };
}
const pe = /* @__PURE__ */ Ws("settings", {
  state: () => ({
    settings: ln(),
    storage: null
  }),
  getters: {
    defaults: () => ln()
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = ln();
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
function Mc(e) {
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
class Rc {
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
function Pc() {
  return new Rc();
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
function Wr(e) {
  const s = e.filter((n) => n.enabled).sort((n, i) => n.priority - i.priority).map((n) => {
    const i = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new Lc({ baseURL: i.baseURL, apiBase: i.apiBase });
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
const cs = /* @__PURE__ */ Ws("playlist", {
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
      const r = Wr(s.settings.providers);
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
}), vt = /* @__PURE__ */ Ws("player", {
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
      this.lyrics = Mc(e), this.currentLyricIndex = -1;
    },
    getActiveLyric() {
      return wi(this.lyrics, this.currentTime);
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), kc = /* @__PURE__ */ Ws("search", {
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
  key: 15,
  points: "20 6 9 17 4 12"
}, Vc = /* @__PURE__ */ mt({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (A(), D("svg", {
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
      e.name === "play" ? (A(), D("polygon", Uc)) : e.name === "pause" ? (A(), D(q, { key: 1 }, [
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
      ], 64)) : e.name === "prev" ? (A(), D(q, { key: 2 }, [
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
      ], 64)) : e.name === "next" ? (A(), D(q, { key: 3 }, [
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
      ], 64)) : e.name === "repeat" ? (A(), D(q, { key: 4 }, [
        s[6] || (s[6] = y("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = y("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = y("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = y("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (A(), D(q, { key: 5 }, [
        s[10] || (s[10] = tn('<polyline points="17 1 21 5 17 9" data-v-287bc27a></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-287bc27a></path><polyline points="7 23 3 19 7 15" data-v-287bc27a></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-287bc27a></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-287bc27a>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (A(), D(q, { key: 6 }, [
        s[11] || (s[11] = tn('<polyline points="16 3 21 3 21 8" data-v-287bc27a></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-287bc27a></line><polyline points="21 16 21 21 16 21" data-v-287bc27a></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-287bc27a></line><line x1="4" y1="4" x2="9" y2="9" data-v-287bc27a></line>', 5))
      ], 64)) : e.name === "search" ? (A(), D(q, { key: 7 }, [
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
      ], 64)) : e.name === "plus" ? (A(), D(q, { key: 8 }, [
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
      ], 64)) : e.name === "x" ? (A(), D(q, { key: 9 }, [
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
      ], 64)) : e.name === "chevron-down" ? (A(), D("polyline", Fc)) : e.name === "chevron-up" ? (A(), D("polyline", Nc)) : e.name === "music" ? (A(), D(q, { key: 12 }, [
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
      ], 64)) : e.name === "volume" ? (A(), D(q, { key: 13 }, [
        s[21] || (s[21] = y("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = y("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = y("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (A(), D(q, { key: 14 }, [
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
      ], 64)) : e.name === "check" ? (A(), D("polyline", jc)) : e.name === "loader" ? (A(), D(q, { key: 16 }, [
        s[27] || (s[27] = tn('<line x1="12" y1="2" x2="12" y2="6" data-v-287bc27a></line><line x1="12" y1="18" x2="12" y2="22" data-v-287bc27a></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-287bc27a></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-287bc27a></line><line x1="2" y1="12" x2="6" y2="12" data-v-287bc27a></line><line x1="18" y1="12" x2="22" y2="12" data-v-287bc27a></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-287bc27a></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-287bc27a></line>', 8))
      ], 64)) : we("", !0)
    ], 8, Dc));
  }
}), yt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, xe = /* @__PURE__ */ yt(Vc, [["__scopeId", "data-v-287bc27a"]]), Hc = { class: "stmp-collapsed-bar" }, Kc = { class: "stmp-collapsed-title" }, Bc = ["aria-label"], Wc = /* @__PURE__ */ mt({
  __name: "CollapsedBar",
  setup(e) {
    const t = vt(), s = rt(() => t.currentTrack?.name || "未播放");
    return (n, i) => (A(), D("div", Hc, [
      y("span", Kc, fe(s.value), 1),
      y("button", {
        class: "stmp-icon-btn",
        "aria-label": B(t).isPlaying ? "暂停" : "播放",
        onClick: i[0] || (i[0] = Ks((r) => B(t).togglePlay(), ["stop"]))
      }, [
        ce(xe, {
          name: B(t).isPlaying ? "pause" : "play",
          size: 16
        }, null, 8, ["name"])
      ], 8, Bc)
    ]));
  }
}), zc = /* @__PURE__ */ yt(Wc, [["__scopeId", "data-v-5369bbcb"]]), Jc = { class: "stmp-playlist" }, Gc = { class: "stmp-upload-area" }, Yc = {
  key: 0,
  class: "stmp-empty"
}, qc = { class: "stmp-group-label" }, Xc = ["onClick"], Zc = { class: "stmp-item-index" }, Qc = { class: "stmp-item-info" }, ea = { class: "stmp-item-song" }, ta = {
  key: 0,
  class: "stmp-item-artist"
}, sa = ["onClick"], na = /* @__PURE__ */ mt({
  __name: "PlaylistView",
  setup(e) {
    const t = cs(), s = pe(), n = /* @__PURE__ */ Ce(null), i = () => {
      n.value?.click();
    }, r = async (u) => {
      const h = u.target;
      if (!h.files || !h.files[0]) return;
      const w = h.files[0], b = `stmp:audio:${Date.now()}-${w.name}`, S = s.storage;
      S && (await S.setBlob(b, w), t.addLocalFile(w.name, b)), h.value = "";
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
    return (u, h) => (A(), D("div", Jc, [
      y("div", Gc, [
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
          "aria-label": "上传本地音频",
          onClick: i
        }, " + 添加本地文件 ")
      ]),
      B(t).isEmpty ? (A(), D("div", Yc, "No Songs")) : (A(), D(q, { key: 1 }, Tt(["chat", "user", "local"], (w) => y("div", {
        key: w,
        class: "stmp-group"
      }, [
        o.value[w].length ? (A(), D(q, { key: 0 }, [
          y("div", qc, fe(l[w]), 1),
          (A(!0), D(q, null, Tt(o.value[w], (b) => (A(), D("div", {
            key: b.item.id,
            class: We(["stmp-item", { active: b.index === B(t).currentIndex }]),
            onClick: (S) => c(b.index)
          }, [
            y("span", Zc, fe(b.index + 1), 1),
            y("div", Qc, [
              y("span", ea, fe(b.item.song), 1),
              b.item.artist ? (A(), D("span", ta, fe(b.item.artist), 1)) : we("", !0)
            ]),
            y("button", {
              class: "stmp-item-del",
              onClick: Ks((S) => d(b.index), ["stop"])
            }, [
              ce(xe, {
                name: "x",
                size: 14
              })
            ], 8, sa)
          ], 10, Xc))), 128))
        ], 64)) : we("", !0)
      ])), 64))
    ]));
  }
}), ia = /* @__PURE__ */ yt(na, [["__scopeId", "data-v-000dd110"]]), ra = { class: "stmp-search" }, oa = { class: "stmp-search-bar" }, la = ["disabled"], ca = {
  key: 0,
  class: "stmp-search-error"
}, aa = {
  key: 1,
  class: "stmp-search-loading"
}, ua = {
  key: 2,
  class: "stmp-search-empty"
}, fa = {
  key: 3,
  class: "stmp-results"
}, da = ["onClick"], ha = { class: "stmp-result-name" }, pa = {
  key: 0,
  class: "stmp-result-artist"
}, ga = ["aria-label", "onClick"], ma = /* @__PURE__ */ mt({
  __name: "SearchView",
  setup(e) {
    const t = kc(), s = cs(), n = pe(), i = /* @__PURE__ */ Ce(t.keyword), r = /* @__PURE__ */ Ce(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ Ce(null);
    async function l() {
      t.setKeyword(i.value);
      const b = Wr(n.settings.providers);
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
      const P = s.list.length - 1;
      P >= g && s.play(P), setTimeout(() => {
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
    return (b, S) => (A(), D("div", ra, [
      y("div", oa, [
        Ft(y("input", {
          "onUpdate:modelValue": S[0] || (S[0] = (g) => i.value = g),
          class: "stmp-search-input",
          placeholder: "Search Song...",
          onKeydown: Nr(l, ["enter"])
        }, null, 544), [
          [Vt, i.value]
        ]),
        y("button", {
          class: "stmp-icon-btn",
          disabled: B(t).isSearching,
          onClick: l
        }, [
          B(t).isSearching ? (A(), ot(xe, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (A(), ot(xe, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, la)
      ]),
      B(t).error ? (A(), D("div", ca, [
        y("span", null, fe(B(t).error), 1),
        y("button", {
          class: "stmp-retry-btn",
          "aria-label": "重试搜索",
          onClick: c
        }, "重试")
      ])) : we("", !0),
      B(t).isSearching ? (A(), D("div", aa, "Searching...")) : i.value && !B(t).results.length ? (A(), D("div", ua, " No results ")) : we("", !0),
      B(t).results.length ? (A(), D("div", fa, [
        (A(!0), D(q, null, Tt(B(t).results, (g) => (A(), D("div", {
          key: g.provider + g.id,
          class: We(["stmp-result", { "stmp-result-playing": w(g) }])
        }, [
          y("div", {
            class: "stmp-result-info",
            onClick: (P) => d(g)
          }, [
            y("span", ha, fe(g.name), 1),
            g.artist ? (A(), D("span", pa, fe(g.artist), 1)) : we("", !0)
          ], 8, da),
          y("button", {
            class: We(["stmp-icon-btn stmp-result-add", { added: h(g) }]),
            "aria-label": h(g) ? "已添加" : "加入列表",
            onClick: Ks((P) => u(g), ["stop"])
          }, [
            ce(xe, {
              name: h(g) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, ga)
        ], 2))), 128))
      ])) : we("", !0)
    ]));
  }
}), va = /* @__PURE__ */ yt(ma, [["__scopeId", "data-v-f82039f6"]]), ya = { class: "stmp-panel" }, ba = { class: "stmp-topbar stmp-drag-handle" }, _a = { class: "stmp-cover" }, xa = ["src"], wa = { class: "stmp-track-info" }, Sa = { class: "stmp-track-name" }, Ca = {
  key: 0,
  class: "stmp-track-artist"
}, Ia = {
  key: 0,
  class: "stmp-lyric-current"
}, Ea = {
  key: 1,
  class: "stmp-lyric-next"
}, Ta = {
  key: 2,
  class: "stmp-lyric-empty"
}, Ma = { class: "stmp-progress" }, Ra = ["value"], Pa = { class: "stmp-time" }, Aa = { class: "stmp-controls" }, La = ["aria-label"], Oa = ["value"], $a = { class: "stmp-tabs" }, ka = { class: "stmp-tab-content" }, Da = /* @__PURE__ */ mt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = vt(), s = cs(), n = pe(), i = /* @__PURE__ */ Ce("list"), r = /* @__PURE__ */ Ce(!0), o = /* @__PURE__ */ Ce(!1), l = /* @__PURE__ */ Ce(!1);
    let c = null;
    const d = rt(() => t.currentTrack?.cover || ""), u = () => {
      o.value = !0;
    };
    zt(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const h = rt(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), w = rt(
      () => t.currentLyricIndex >= 0 ? t.lyrics[t.currentLyricIndex]?.text ?? null : null
    ), b = rt(() => {
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
    const P = ["list", "random", "single"], F = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function N() {
      const H = n.settings.playMode, T = P.indexOf(H), O = P[(T + 1) % P.length];
      n.setPlayMode(O);
    }
    function z(H) {
      const T = H.target;
      t.setVolume(Number(T.value));
    }
    function R() {
      c && clearTimeout(c), l.value = !0;
    }
    function L() {
      c = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function X() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    return (H, T) => (A(), D("div", ya, [
      y("div", ba, [
        y("div", _a, [
          d.value && !o.value ? (A(), D("img", {
            key: 0,
            src: d.value,
            alt: "cover",
            onError: u
          }, null, 40, xa)) : (A(), ot(xe, {
            key: 1,
            name: "music",
            size: 24
          }))
        ]),
        y("div", wa, [
          y("div", Sa, fe(B(t).currentTrack?.name || "No Song"), 1),
          B(t).currentTrack?.artist ? (A(), D("div", Ca, fe(B(t).currentTrack.artist), 1)) : we("", !0)
        ]),
        y("button", {
          class: "stmp-icon-btn",
          "aria-label": "收起面板",
          onClick: T[0] || (T[0] = Ks((O) => H.$emit("collapse"), ["stop"]))
        }, [
          ce(xe, {
            name: "chevron-down",
            size: 18
          })
        ])
      ]),
      r.value ? (A(), D("div", {
        key: 0,
        class: "stmp-lyrics",
        onClick: T[1] || (T[1] = (O) => r.value = !1)
      }, [
        w.value ? (A(), D("div", Ia, fe(w.value), 1)) : we("", !0),
        b.value ? (A(), D("div", Ea, fe(b.value), 1)) : we("", !0),
        !w.value && !b.value ? (A(), D("div", Ta, [
          ce(xe, {
            name: "music",
            size: 18
          })
        ])) : we("", !0)
      ])) : (A(), D("div", {
        key: 1,
        class: "stmp-lyrics-toggle",
        onClick: T[2] || (T[2] = (O) => r.value = !0)
      }, [
        ce(xe, {
          name: "chevron-up",
          size: 14
        }),
        T[8] || (T[8] = $r(" show lyrics ", -1))
      ])),
      y("div", Ma, [
        y("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: h.value,
          class: "stmp-range",
          onInput: g
        }, null, 40, Ra),
        y("div", Pa, [
          y("span", null, fe(S(B(t).currentTime)), 1),
          y("span", null, fe(S(B(t).duration)), 1)
        ])
      ]),
      y("div", Aa, [
        y("button", {
          class: "stmp-ctrl-btn",
          "aria-label": "切换播放模式",
          onClick: N
        }, [
          ce(xe, {
            name: F[B(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ]),
        y("button", {
          class: "stmp-ctrl-btn",
          "aria-label": "上一首",
          onClick: T[3] || (T[3] = (O) => B(s).prev())
        }, [
          ce(xe, {
            name: "prev",
            size: 18
          })
        ]),
        y("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": B(t).isPlaying ? "暂停" : "播放",
          onClick: T[4] || (T[4] = (O) => B(t).togglePlay())
        }, [
          ce(xe, {
            name: B(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, La),
        y("button", {
          class: "stmp-ctrl-btn",
          "aria-label": "下一首",
          onClick: T[5] || (T[5] = (O) => B(s).next())
        }, [
          ce(xe, {
            name: "next",
            size: 18
          })
        ]),
        y("div", {
          class: "stmp-volume-container",
          onMouseenter: R,
          onMouseleave: L
        }, [
          y("button", {
            class: "stmp-ctrl-btn",
            "aria-label": "静音/取消静音",
            onClick: X
          }, [
            ce(xe, {
              name: B(t).volume === 0 ? "volume-mute" : "volume",
              size: 18
            }, null, 8, ["name"])
          ]),
          y("div", {
            class: We(["stmp-volume-popup", { show: l.value }])
          }, [
            y("input", {
              type: "range",
              min: "0",
              max: "100",
              value: B(t).volume,
              class: "stmp-volume-vertical",
              orient: "vertical",
              onInput: z
            }, null, 40, Oa)
          ], 2)
        ], 32)
      ]),
      y("div", $a, [
        y("button", {
          class: We(["stmp-tab", { active: i.value === "list" }]),
          onClick: T[6] || (T[6] = (O) => i.value = "list")
        }, " List ", 2),
        y("button", {
          class: We(["stmp-tab", { active: i.value === "search" }]),
          onClick: T[7] || (T[7] = (O) => i.value = "search")
        }, " Search ", 2)
      ]),
      y("div", ka, [
        i.value === "list" ? (A(), ot(ia, { key: 0 })) : i.value === "search" ? (A(), ot(va, { key: 1 })) : we("", !0)
      ])
    ]));
  }
}), Ua = /* @__PURE__ */ yt(Da, [["__scopeId", "data-v-c3c377a0"]]), Fa = /* @__PURE__ */ mt({
  __name: "App",
  setup(e) {
    const t = pe(), s = vt(), n = /* @__PURE__ */ Ce(!1), i = /* @__PURE__ */ Ce(null), r = /* @__PURE__ */ Ce(typeof window < "u" && window.innerWidth < 768), o = () => {
      r.value = window.innerWidth < 768;
    }, l = (L) => {
      L.key === "Escape" && (n.value = !1), L.key === " " && L.target === document.body && (L.preventDefault(), s.togglePlay());
    };
    let c = 0, d = 0, u = 0, h = 0, w = !1, b = !1, S = null, g = null;
    function P(L) {
      if (r.value) return;
      const X = L.target;
      if (X.closest("input, .stmp-tab, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-lyrics-toggle, .stmp-tabs, .stmp-tab-content") || n.value && (!X.closest(".stmp-drag-handle") || X.closest("button")) || !n.value && X.closest("button"))
        return;
      const H = i.value?.getBoundingClientRect();
      H && (c = L.clientX, d = L.clientY, u = H.left, h = H.top, w = !1, b = !0, i.value && (i.value.style.left = H.left + "px", i.value.style.top = H.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), S = F, g = N, document.addEventListener("pointermove", S), document.addEventListener("pointerup", g), L.preventDefault());
    }
    function F(L) {
      if (!i.value || !b) return;
      const X = L.clientX - c, H = L.clientY - d;
      (Math.abs(X) > 3 || Math.abs(H) > 3) && (w = !0);
      let T = u + X, O = h + H;
      const ie = i.value.offsetWidth || 60, be = i.value.offsetHeight || 40, Te = window.innerWidth - ie, $e = window.innerHeight - be;
      T = Math.max(0, Math.min(T, Te)), O = Math.max(0, Math.min(O, $e)), i.value.style.left = T + "px", i.value.style.top = O + "px";
    }
    function N() {
      if (b = !1, S && document.removeEventListener("pointermove", S), g && document.removeEventListener("pointerup", g), S = null, g = null, !w) {
        R();
        return;
      }
      i.value && (t.setPosition({
        x: i.value.offsetLeft,
        y: i.value.offsetTop
      }), n.value && Ss(() => z()));
    }
    function z() {
      if (!i.value || r.value) return;
      const L = i.value.getBoundingClientRect(), X = i.value.offsetWidth, H = i.value.offsetHeight;
      let T = L.left, O = L.top;
      T + X > window.innerWidth && (T = window.innerWidth - X), O + H > window.innerHeight && (O = window.innerHeight - H), T < 0 && (T = 0), O < 0 && (O = 0), i.value.style.left = T + "px", i.value.style.top = O + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: T, y: O });
    }
    function R() {
      n.value = !n.value, n.value && Ss(() => z());
    }
    return fr(() => {
      const L = t.settings.position;
      L && i.value && !r.value && (i.value.style.left = L.x + "px", i.value.style.top = L.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), window.addEventListener("resize", o), window.addEventListener("keydown", l);
    }), dr(() => {
      N(), window.removeEventListener("resize", o), window.removeEventListener("keydown", l);
    }), (L, X) => (A(), D("div", {
      ref_key: "widgetRef",
      ref: i,
      class: We(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-mobile": r.value
      }]),
      onPointerdown: P
    }, [
      n.value ? (A(), ot(Ua, {
        key: 1,
        onCollapse: R
      })) : (A(), ot(zc, { key: 0 }))
    ], 34));
  }
}), Na = /* @__PURE__ */ yt(Fa, [["__scopeId", "data-v-9722a6e7"]]), ja = { class: "stmp-settings" }, Va = { class: "stmp-setting-group" }, Ha = { class: "stmp-setting-row" }, Ka = ["checked", "onChange"], Ba = ["onUpdate:modelValue"], Wa = ["onUpdate:modelValue"], za = ["onUpdate:modelValue"], Ja = { class: "stmp-setting-group" }, Ga = { class: "stmp-setting-label" }, Ya = ["value"], qa = { class: "stmp-setting-group" }, Xa = ["value"], Za = ["value"], Qa = { class: "stmp-setting-group" }, eu = { class: "stmp-setting-row" }, tu = ["checked"], su = { class: "stmp-setting-group" }, nu = { class: "stmp-rules" }, iu = ["onClick"], ru = { class: "stmp-rule-add" }, ou = /* @__PURE__ */ mt({
  __name: "SettingsView",
  setup(e) {
    const t = pe(), s = /* @__PURE__ */ Ce(""), n = [
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
      const S = JSON.stringify(t.settings, null, 2), g = new Blob([S], { type: "application/json" }), P = URL.createObjectURL(g), F = document.createElement("a");
      F.href = P, F.download = "st-music-player-settings.json", F.click(), URL.revokeObjectURL(P);
    }, w = () => {
      const S = document.createElement("input");
      S.type = "file", S.accept = ".json", S.onchange = async (g) => {
        const P = g.target.files?.[0];
        if (!P) return;
        const F = await P.text();
        try {
          const N = JSON.parse(F);
          if (typeof N != "object" || N === null) throw new Error("Not an object");
          const z = ["volume", "playMode", "position", "autoPlayOnNewCue", "providers", "customCueRules"], R = {};
          for (const X of z)
            X in N && (R[X] = N[X]);
          if (typeof R.volume != "number" || R.volume < 0 || R.volume > 100)
            throw new Error("Invalid volume");
          if (typeof R.playMode != "string" || !["list", "random", "single"].includes(R.playMode))
            throw new Error("Invalid playMode");
          if (R.providers && !Array.isArray(R.providers))
            throw new Error("Invalid providers");
          if (R.customCueRules && !Array.isArray(R.customCueRules))
            throw new Error("Invalid customCueRules");
          const L = pe();
          Object.assign(L.settings, R), L.save(), toastr.success("设置已导入");
        } catch (N) {
          console.error("Import failed", N), toastr.error("导入失败: " + (N instanceof Error ? N.message : "JSON 格式错误"));
        }
      }, S.click();
    };
    function b(S) {
      const g = t.settings.providers.find((P) => P.id === S);
      g && (g.enabled = !g.enabled, t.save());
    }
    return (S, g) => (A(), D("div", ja, [
      y("div", Va, [
        g[4] || (g[4] = y("div", { class: "stmp-setting-label" }, "Providers", -1)),
        (A(!0), D(q, null, Tt(B(t).settings.providers, (P) => (A(), D("div", {
          key: P.id,
          class: "stmp-provider-config"
        }, [
          y("label", Ha, [
            y("span", null, fe(i[P.id] || P.id), 1),
            y("input", {
              type: "checkbox",
              checked: P.enabled,
              onChange: (F) => b(P.id)
            }, null, 40, Ka)
          ]),
          P.id === "netease" ? Ft((A(), D("input", {
            key: 0,
            class: "stmp-provider-input",
            "onUpdate:modelValue": (F) => P.config.baseURL = F,
            placeholder: "API baseURL",
            onChange: g[0] || (g[0] = (F) => B(t).save())
          }, null, 40, Ba)), [
            [Vt, P.config.baseURL]
          ]) : we("", !0),
          P.id === "custom" ? (A(), D(q, { key: 1 }, [
            Ft(y("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (F) => P.config.searchURL = F,
              placeholder: "Search URL",
              onChange: g[1] || (g[1] = (F) => B(t).save())
            }, null, 40, Wa), [
              [Vt, P.config.searchURL]
            ]),
            Ft(y("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (F) => P.config.resolveURL = F,
              placeholder: "Resolve URL",
              onChange: g[2] || (g[2] = (F) => B(t).save())
            }, null, 40, za), [
              [Vt, P.config.resolveURL]
            ])
          ], 64)) : we("", !0)
        ]))), 128))
      ]),
      y("div", Ja, [
        y("div", Ga, "Default Volume: " + fe(B(t).settings.volume), 1),
        y("input", {
          type: "range",
          min: "0",
          max: "100",
          value: B(t).settings.volume,
          class: "stmp-range",
          onInput: l
        }, null, 40, Ya)
      ]),
      y("div", qa, [
        g[5] || (g[5] = y("div", { class: "stmp-setting-label" }, "Default Play Mode", -1)),
        y("select", {
          class: "stmp-select",
          value: B(t).settings.playMode,
          onChange: c
        }, [
          (A(), D(q, null, Tt(n, (P) => y("option", {
            key: P.value,
            value: P.value
          }, fe(P.label), 9, Za)), 64))
        ], 40, Xa)
      ]),
      y("div", Qa, [
        y("div", eu, [
          g[6] || (g[6] = y("span", null, "Auto-play on new cue", -1)),
          y("input", {
            type: "checkbox",
            checked: B(t).settings.autoPlayOnNewCue,
            onChange: d
          }, null, 40, tu)
        ])
      ]),
      y("div", su, [
        g[7] || (g[7] = y("div", { class: "stmp-setting-label" }, "Custom Cue Rules (Regex)", -1)),
        y("div", nu, [
          (A(!0), D(q, null, Tt(B(t).settings.customCueRules, (P, F) => (A(), D("div", {
            key: F,
            class: "stmp-rule"
          }, [
            y("code", null, fe(P), 1),
            y("button", {
              class: "stmp-rule-del",
              onClick: (N) => o(F)
            }, "✕", 8, iu)
          ]))), 128))
        ]),
        y("div", ru, [
          Ft(y("input", {
            "onUpdate:modelValue": g[3] || (g[3] = (P) => s.value = P),
            class: "stmp-rule-input",
            placeholder: "Add regex rule...",
            onKeydown: Nr(r, ["enter"])
          }, null, 544), [
            [Vt, s.value]
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
let Mt = null, qe = null, Zt = null, Qt = null, Rt = null, Rs = null;
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
  t && Rs && (Rt = jr(lu), Rt.use(Rs), Rt.mount(t));
}
function pu() {
  Rt && (Rt.unmount(), Rt = null), Qt?.remove(), Qt = null;
}
function gu(e, t, s) {
  qe = au(), qe.on("chat-changed", () => {
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
  }), qe.on("message-generated", (n) => {
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
  }), qe.on("message-updated", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), qe.on("message-deleted", (n) => {
    n.messageId !== void 0 && t.handleMessageDelete(n.messageId);
  }), qe.on("message-swiped", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), qe.start();
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
    Rs = t, Mt = jr(Na), Mt.use(t), Mt.mount(e);
    const s = pe(), n = Pc();
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
  if (qe?.stop(), qe = null, Mt) {
    try {
      vt().destroy();
    } catch {
    }
    Mt.unmount(), Mt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), pu(), Rs = null;
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
