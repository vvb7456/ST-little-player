/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Fn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const ce = {}, jt = [], Xe = () => {
}, Zi = () => !1, zs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Js = (e) => e.startsWith("onUpdate:"), ye = Object.assign, Un = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, wo = Object.prototype.hasOwnProperty, ne = (e, t) => wo.call(e, t), V = Array.isArray, Ht = (e) => _s(e) === "[object Map]", Qi = (e) => _s(e) === "[object Set]", oi = (e) => _s(e) === "[object Date]", q = (e) => typeof e == "function", he = (e) => typeof e == "string", De = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", er = (e) => (re(e) || q(e)) && q(e.then) && q(e.catch), tr = Object.prototype.toString, _s = (e) => tr.call(e), Co = (e) => _s(e).slice(8, -1), sr = (e) => _s(e) === "[object Object]", Gs = (e) => he(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ss = /* @__PURE__ */ Fn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Io = /-\w/g, Ue = qs(
  (e) => e.replace(Io, (t) => t.slice(1).toUpperCase())
), Eo = /\B([A-Z])/g, mt = qs(
  (e) => e.replace(Eo, "-$1").toLowerCase()
), nr = qs((e) => e.charAt(0).toUpperCase() + e.slice(1)), fn = qs(
  (e) => e ? `on${nr(e)}` : ""
), Ye = (e, t) => !Object.is(e, t), Ls = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, ir = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, jn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, To = (e) => {
  const t = he(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let li;
const Ys = () => li || (li = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Xs(e) {
  if (V(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = he(n) ? Ro(n) : Xs(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (he(e) || re(e))
    return e;
}
const Ao = /;(?![^(]*\))/g, Mo = /:([^]+)/, Po = /\/\*[^]*?\*\//g;
function Ro(e) {
  const t = {};
  return e.replace(Po, "").split(Ao).forEach((s) => {
    if (s) {
      const n = s.split(Mo);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ie(e) {
  let t = "";
  if (he(e))
    t = e;
  else if (V(e))
    for (let s = 0; s < e.length; s++) {
      const n = Ie(e[s]);
      n && (t += n + " ");
    }
  else if (re(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Lo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", $o = /* @__PURE__ */ Fn(Lo);
function rr(e) {
  return !!e || e === "";
}
function ko(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Hn(e[n], t[n]);
  return s;
}
function Hn(e, t) {
  if (e === t) return !0;
  let s = oi(e), n = oi(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = De(e), n = De(t), s || n)
    return e === t;
  if (s = V(e), n = V(t), s || n)
    return s && n ? ko(e, t) : !1;
  if (s = re(e), n = re(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (l && !a || !l && a || !Hn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const or = (e) => !!(e && e.__v_isRef === !0), X = (e) => he(e) ? e : e == null ? "" : V(e) || re(e) && (e.toString === tr || !q(e.toString)) ? or(e) ? X(e.value) : JSON.stringify(e, lr, 2) : String(e), lr = (e, t) => or(t) ? lr(e, t.value) : Ht(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[dn(n, r) + " =>"] = i, s),
    {}
  )
} : Qi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => dn(s))
} : De(t) ? dn(t) : re(t) && !V(t) && !sr(t) ? String(t) : t, dn = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    De(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ve;
class ar {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ve && (ve.active ? (this.parent = ve, this.index = (ve.scopes || (ve.scopes = [])).push(
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
      const s = ve;
      try {
        return ve = this, t();
      } finally {
        ve = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ve, ve = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ve === this)
        ve = this.prevScope;
      else {
        let t = ve;
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
function cr(e) {
  return new ar(e);
}
function ur() {
  return ve;
}
function Oo(e, t = !1) {
  ve && ve.cleanups.push(e);
}
let fe;
const hn = /* @__PURE__ */ new WeakSet();
class fr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ve && (ve.active ? ve.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, hn.has(this) && (hn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || hr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ai(this), pr(this);
    const t = fe, s = je;
    fe = this, je = !0;
    try {
      return this.fn();
    } finally {
      gr(this), fe = t, je = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Kn(t);
      this.deps = this.depsTail = void 0, ai(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? hn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    In(this) && this.run();
  }
  get dirty() {
    return In(this);
  }
}
let dr = 0, ns, is;
function hr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = is, is = e;
    return;
  }
  e.next = ns, ns = e;
}
function Vn() {
  dr++;
}
function Bn() {
  if (--dr > 0)
    return;
  if (is) {
    let t = is;
    for (is = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; ns; ) {
    let t = ns;
    for (ns = void 0; t; ) {
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
function pr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function gr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), Kn(n), Do(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function In(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (mr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function mr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === hs) || (e.globalVersion = hs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !In(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = fe, n = je;
  fe = e, je = !0;
  try {
    pr(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ye(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    fe = s, je = n, gr(e), e.flags &= -3;
  }
}
function Kn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      Kn(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Do(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let je = !0;
const vr = [];
function Ze() {
  vr.push(je), je = !1;
}
function Qe() {
  const e = vr.pop();
  je = e === void 0 ? !0 : e;
}
function ai(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = fe;
    fe = void 0;
    try {
      t();
    } finally {
      fe = s;
    }
  }
}
let hs = 0;
class No {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Wn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!fe || !je || fe === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== fe)
      s = this.activeLink = new No(fe, this), fe.deps ? (s.prevDep = fe.depsTail, fe.depsTail.nextDep = s, fe.depsTail = s) : fe.deps = fe.depsTail = s, yr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = fe.depsTail, s.nextDep = void 0, fe.depsTail.nextDep = s, fe.depsTail = s, fe.deps === s && (fe.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, hs++, this.notify(t);
  }
  notify(t) {
    Vn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Bn();
    }
  }
}
function yr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        yr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Os = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ Symbol(
  ""
), En = /* @__PURE__ */ Symbol(
  ""
), ps = /* @__PURE__ */ Symbol(
  ""
);
function xe(e, t, s) {
  if (je && fe) {
    let n = Os.get(e);
    n || Os.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new Wn()), i.map = n, i.key = s), i.track();
  }
}
function ot(e, t, s, n, i, r) {
  const o = Os.get(e);
  if (!o) {
    hs++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Vn(), t === "clear")
    o.forEach(l);
  else {
    const a = V(e), d = a && Gs(s);
    if (a && s === "length") {
      const u = Number(n);
      o.forEach((h, v) => {
        (v === "length" || v === ps || !De(v) && v >= u) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(ps)), t) {
        case "add":
          a ? d && l(o.get("length")) : (l(o.get(Et)), Ht(e) && l(o.get(En)));
          break;
        case "delete":
          a || (l(o.get(Et)), Ht(e) && l(o.get(En)));
          break;
        case "set":
          Ht(e) && l(o.get(Et));
          break;
      }
  }
  Bn();
}
function Fo(e, t) {
  const s = Os.get(e);
  return s && s.get(t);
}
function kt(e) {
  const t = /* @__PURE__ */ ee(e);
  return t === e ? t : (xe(t, "iterate", ps), /* @__PURE__ */ Le(e) ? t : t.map(He));
}
function Zs(e) {
  return xe(e = /* @__PURE__ */ ee(e), "iterate", ps), e;
}
function Ge(e, t) {
  return /* @__PURE__ */ ct(e) ? Wt(/* @__PURE__ */ at(e) ? He(t) : t) : He(t);
}
const Uo = {
  __proto__: null,
  [Symbol.iterator]() {
    return pn(this, Symbol.iterator, (e) => Ge(this, e));
  },
  concat(...e) {
    return kt(this).concat(
      ...e.map((t) => V(t) ? kt(t) : t)
    );
  },
  entries() {
    return pn(this, "entries", (e) => (e[1] = Ge(this, e[1]), e));
  },
  every(e, t) {
    return et(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return et(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Ge(this, n)),
      arguments
    );
  },
  find(e, t) {
    return et(
      this,
      "find",
      e,
      t,
      (s) => Ge(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return et(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return et(
      this,
      "findLast",
      e,
      t,
      (s) => Ge(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return et(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return et(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return gn(this, "includes", e);
  },
  indexOf(...e) {
    return gn(this, "indexOf", e);
  },
  join(e) {
    return kt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return gn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return et(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return qt(this, "pop");
  },
  push(...e) {
    return qt(this, "push", e);
  },
  reduce(e, ...t) {
    return ci(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ci(this, "reduceRight", e, t);
  },
  shift() {
    return qt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return et(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return qt(this, "splice", e);
  },
  toReversed() {
    return kt(this).toReversed();
  },
  toSorted(e) {
    return kt(this).toSorted(e);
  },
  toSpliced(...e) {
    return kt(this).toSpliced(...e);
  },
  unshift(...e) {
    return qt(this, "unshift", e);
  },
  values() {
    return pn(this, "values", (e) => Ge(this, e));
  }
};
function pn(e, t, s) {
  const n = Zs(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Le(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const jo = Array.prototype;
function et(e, t, s, n, i, r) {
  const o = Zs(e), l = o !== e && !/* @__PURE__ */ Le(e), a = o[t];
  if (a !== jo[t]) {
    const h = a.apply(e, r);
    return l ? He(h) : h;
  }
  let d = s;
  o !== e && (l ? d = function(h, v) {
    return s.call(this, Ge(e, h), v, e);
  } : s.length > 2 && (d = function(h, v) {
    return s.call(this, h, v, e);
  }));
  const u = a.call(o, d, n);
  return l && i ? i(u) : u;
}
function ci(e, t, s, n) {
  const i = Zs(e), r = i !== e && !/* @__PURE__ */ Le(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(d, u, h) {
    return l && (l = !1, d = Ge(e, d)), s.call(this, d, Ge(e, u), h, e);
  }) : s.length > 3 && (o = function(d, u, h) {
    return s.call(this, d, u, h, e);
  }));
  const a = i[t](o, ...n);
  return l ? Ge(e, a) : a;
}
function gn(e, t, s) {
  const n = /* @__PURE__ */ ee(e);
  xe(n, "iterate", ps);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ en(s[0]) ? (s[0] = /* @__PURE__ */ ee(s[0]), n[t](...s)) : i;
}
function qt(e, t, s = []) {
  Ze(), Vn();
  const n = (/* @__PURE__ */ ee(e))[t].apply(e, s);
  return Bn(), Qe(), n;
}
const Ho = /* @__PURE__ */ Fn("__proto__,__v_isRef,__isVue"), br = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(De)
);
function Vo(e) {
  De(e) || (e = String(e));
  const t = /* @__PURE__ */ ee(this);
  return xe(t, "has", e), t.hasOwnProperty(e);
}
class _r {
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
      return n === (i ? r ? Zo : Cr : r ? wr : Sr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = V(t);
    if (!i) {
      let a;
      if (o && (a = Uo[s]))
        return a;
      if (s === "hasOwnProperty")
        return Vo;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ pe(t) ? t : n
    );
    if ((De(s) ? br.has(s) : Ho(s)) || (i || xe(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ pe(l)) {
      const a = o && Gs(s) ? l : l.value;
      return i && re(a) ? /* @__PURE__ */ An(a) : a;
    }
    return re(l) ? i ? /* @__PURE__ */ An(l) : /* @__PURE__ */ Qs(l) : l;
  }
}
class xr extends _r {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    const o = V(t) && Gs(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ ct(r);
      if (!/* @__PURE__ */ Le(n) && !/* @__PURE__ */ ct(n) && (r = /* @__PURE__ */ ee(r), n = /* @__PURE__ */ ee(n)), !o && /* @__PURE__ */ pe(r) && !/* @__PURE__ */ pe(n))
        return d || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : ne(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ pe(t) ? t : i
    );
    return t === /* @__PURE__ */ ee(i) && a && (l ? Ye(n, r) && ot(t, "set", s, n) : ot(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = ne(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && ot(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!De(s) || !br.has(s)) && xe(t, "has", s), n;
  }
  ownKeys(t) {
    return xe(
      t,
      "iterate",
      V(t) ? "length" : Et
    ), Reflect.ownKeys(t);
  }
}
class Bo extends _r {
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
const Ko = /* @__PURE__ */ new xr(), Wo = /* @__PURE__ */ new Bo(), zo = /* @__PURE__ */ new xr(!0);
const Tn = (e) => e, Es = (e) => Reflect.getPrototypeOf(e);
function Jo(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ ee(i), o = Ht(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, d = i[e](...n), u = s ? Tn : t ? Wt : He;
    return !t && xe(
      r,
      "iterate",
      a ? En : Et
    ), ye(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: v } = d.next();
          return v ? { value: h, done: v } : {
            value: l ? [u(h[0]), u(h[1])] : u(h),
            done: v
          };
        }
      }
    );
  };
}
function Ts(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Go(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ ee(r), l = /* @__PURE__ */ ee(i);
      e || (Ye(i, l) && xe(o, "get", i), xe(o, "get", l));
      const { has: a } = Es(o), d = t ? Tn : e ? Wt : He;
      if (a.call(o, i))
        return d(r.get(i));
      if (a.call(o, l))
        return d(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && xe(/* @__PURE__ */ ee(i), "iterate", Et), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ ee(r), l = /* @__PURE__ */ ee(i);
      return e || (Ye(i, l) && xe(o, "has", i), xe(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ ee(l), d = t ? Tn : e ? Wt : He;
      return !e && xe(a, "iterate", Et), l.forEach((u, h) => i.call(r, d(u), d(h), o));
    }
  };
  return ye(
    s,
    e ? {
      add: Ts("add"),
      set: Ts("set"),
      delete: Ts("delete"),
      clear: Ts("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ ee(this), o = Es(r), l = /* @__PURE__ */ ee(i), a = !t && !/* @__PURE__ */ Le(i) && !/* @__PURE__ */ ct(i) ? l : i;
        return o.has.call(r, a) || Ye(i, a) && o.has.call(r, i) || Ye(l, a) && o.has.call(r, l) || (r.add(a), ot(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Le(r) && !/* @__PURE__ */ ct(r) && (r = /* @__PURE__ */ ee(r));
        const o = /* @__PURE__ */ ee(this), { has: l, get: a } = Es(o);
        let d = l.call(o, i);
        d || (i = /* @__PURE__ */ ee(i), d = l.call(o, i));
        const u = a.call(o, i);
        return o.set(i, r), d ? Ye(r, u) && ot(o, "set", i, r) : ot(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ ee(this), { has: o, get: l } = Es(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ ee(i), a = o.call(r, i)), l && l.call(r, i);
        const d = r.delete(i);
        return a && ot(r, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ ee(this), r = i.size !== 0, o = i.clear();
        return r && ot(
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
    s[i] = Jo(i, e, t);
  }), s;
}
function zn(e, t) {
  const s = Go(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    ne(s, i) && i in n ? s : n,
    i,
    r
  );
}
const qo = {
  get: /* @__PURE__ */ zn(!1, !1)
}, Yo = {
  get: /* @__PURE__ */ zn(!1, !0)
}, Xo = {
  get: /* @__PURE__ */ zn(!0, !1)
};
const Sr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), Zo = /* @__PURE__ */ new WeakMap();
function Qo(e) {
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
function Qs(e) {
  return /* @__PURE__ */ ct(e) ? e : Jn(
    e,
    !1,
    Ko,
    qo,
    Sr
  );
}
// @__NO_SIDE_EFFECTS__
function el(e) {
  return Jn(
    e,
    !1,
    zo,
    Yo,
    wr
  );
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  return Jn(
    e,
    !0,
    Wo,
    Xo,
    Cr
  );
}
function Jn(e, t, s, n, i) {
  if (!re(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = Qo(Co(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? n : s
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return /* @__PURE__ */ ct(e) ? /* @__PURE__ */ at(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ct(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ee(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ee(t) : e;
}
function Gn(e) {
  return !ne(e, "__v_skip") && Object.isExtensible(e) && ir(e, "__v_skip", !0), e;
}
const He = (e) => re(e) ? /* @__PURE__ */ Qs(e) : e, Wt = (e) => re(e) ? /* @__PURE__ */ An(e) : e;
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ce(e) {
  return tl(e, !1);
}
function tl(e, t) {
  return /* @__PURE__ */ pe(e) ? e : new sl(e, t);
}
class sl {
  constructor(t, s) {
    this.dep = new Wn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ ee(t), this._value = s ? t : He(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Le(t) || /* @__PURE__ */ ct(t);
    t = n ? t : /* @__PURE__ */ ee(t), Ye(t, s) && (this._rawValue = t, this._value = n ? t : He(t), this.dep.trigger());
  }
}
function E(e) {
  return /* @__PURE__ */ pe(e) ? e.value : e;
}
const nl = {
  get: (e, t, s) => t === "__v_raw" ? e : E(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ pe(i) && !/* @__PURE__ */ pe(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Ir(e) {
  return /* @__PURE__ */ at(e) ? e : new Proxy(e, nl);
}
// @__NO_SIDE_EFFECTS__
function il(e) {
  const t = V(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = ol(e, s);
  return t;
}
class rl {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = De(s) ? s : String(s), this._raw = /* @__PURE__ */ ee(t);
    let i = !0, r = t;
    if (!V(t) || De(this._key) || !Gs(this._key))
      do
        i = !/* @__PURE__ */ en(r) || /* @__PURE__ */ Le(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = E(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ pe(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ pe(s)) {
        s.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Fo(this._raw, this._key);
  }
}
function ol(e, t, s) {
  return new rl(e, t, s);
}
class ll {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Wn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = hs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    fe !== this)
      return hr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return mr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function al(e, t, s = !1) {
  let n, i;
  return q(e) ? n = e : (n = e.get, i = e.set), new ll(n, i, s);
}
const As = {}, Ds = /* @__PURE__ */ new WeakMap();
let wt;
function cl(e, t = !1, s = wt) {
  if (s) {
    let n = Ds.get(s);
    n || Ds.set(s, n = []), n.push(e);
  }
}
function ul(e, t, s = ce) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = s, d = (M) => i ? M : /* @__PURE__ */ Le(M) || i === !1 || i === 0 ? lt(M, 1) : lt(M);
  let u, h, v, m, I = !1, y = !1;
  if (/* @__PURE__ */ pe(e) ? (h = () => e.value, I = /* @__PURE__ */ Le(e)) : /* @__PURE__ */ at(e) ? (h = () => d(e), I = !0) : V(e) ? (y = !0, I = e.some((M) => /* @__PURE__ */ at(M) || /* @__PURE__ */ Le(M)), h = () => e.map((M) => {
    if (/* @__PURE__ */ pe(M))
      return M.value;
    if (/* @__PURE__ */ at(M))
      return d(M);
    if (q(M))
      return a ? a(M, 2) : M();
  })) : q(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (v) {
      Ze();
      try {
        v();
      } finally {
        Qe();
      }
    }
    const M = wt;
    wt = u;
    try {
      return a ? a(e, 3, [m]) : e(m);
    } finally {
      wt = M;
    }
  } : h = Xe, t && i) {
    const M = h, K = i === !0 ? 1 / 0 : i;
    h = () => lt(M(), K);
  }
  const L = ur(), F = () => {
    u.stop(), L && L.active && Un(L.effects, u);
  };
  if (r && t) {
    const M = t;
    t = (...K) => {
      const de = M(...K);
      return F(), de;
    };
  }
  let U = y ? new Array(e.length).fill(As) : As;
  const G = (M) => {
    if (!(!(u.flags & 1) || !u.dirty && !M))
      if (t) {
        const K = u.run();
        if (M || i || I || (y ? K.some((de, le) => Ye(de, U[le])) : Ye(K, U))) {
          v && v();
          const de = wt;
          wt = u;
          try {
            const le = [
              K,
              // pass undefined as the old value when it's changed for the first time
              U === As ? void 0 : y && U[0] === As ? [] : U,
              m
            ];
            U = K, a ? a(t, 3, le) : (
              // @ts-expect-error
              t(...le)
            );
          } finally {
            wt = de;
          }
        }
      } else
        u.run();
  };
  return l && l(G), u = new fr(h), u.scheduler = o ? () => o(G, !1) : G, m = (M) => cl(M, !1, u), v = u.onStop = () => {
    const M = Ds.get(u);
    if (M) {
      if (a)
        a(M, 4);
      else
        for (const K of M) K();
      Ds.delete(u);
    }
  }, t ? n ? G(!0) : U = u.run() : o ? o(G.bind(null, !0), !0) : u.run(), F.pause = u.pause.bind(u), F.resume = u.resume.bind(u), F.stop = F, F;
}
function lt(e, t = 1 / 0, s) {
  if (t <= 0 || !re(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ pe(e))
    lt(e.value, t, s);
  else if (V(e))
    for (let n = 0; n < e.length; n++)
      lt(e[n], t, s);
  else if (Qi(e) || Ht(e))
    e.forEach((n) => {
      lt(n, t, s);
    });
  else if (sr(e)) {
    for (const n in e)
      lt(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && lt(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function xs(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    tn(i, t, s);
  }
}
function Ne(e, t, s, n) {
  if (q(e)) {
    const i = xs(e, t, s, n);
    return i && er(i) && i.catch((r) => {
      tn(r, t, s);
    }), i;
  }
  if (V(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Ne(e[r], t, s, n));
    return i;
  }
}
function tn(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ce;
  if (t) {
    let l = t.parent;
    const a = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, a, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Ze(), xs(r, null, 10, [
        e,
        a,
        d
      ]), Qe();
      return;
    }
  }
  fl(e, s, i, n, o);
}
function fl(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ee = [];
let Je = -1;
const Vt = [];
let ht = null, Nt = 0;
const Er = /* @__PURE__ */ Promise.resolve();
let Ns = null;
function it(e) {
  const t = Ns || Er;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dl(e) {
  let t = Je + 1, s = Ee.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Ee[n], r = gs(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function qn(e) {
  if (!(e.flags & 1)) {
    const t = gs(e), s = Ee[Ee.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= gs(s) ? Ee.push(e) : Ee.splice(dl(t), 0, e), e.flags |= 1, Tr();
  }
}
function Tr() {
  Ns || (Ns = Er.then(Mr));
}
function hl(e) {
  V(e) ? Vt.push(...e) : ht && e.id === -1 ? ht.splice(Nt + 1, 0, e) : e.flags & 1 || (Vt.push(e), e.flags |= 1), Tr();
}
function ui(e, t, s = Je + 1) {
  for (; s < Ee.length; s++) {
    const n = Ee[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Ee.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Ar(e) {
  if (Vt.length) {
    const t = [...new Set(Vt)].sort(
      (s, n) => gs(s) - gs(n)
    );
    if (Vt.length = 0, ht) {
      ht.push(...t);
      return;
    }
    for (ht = t, Nt = 0; Nt < ht.length; Nt++) {
      const s = ht[Nt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    ht = null, Nt = 0;
  }
}
const gs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Mr(e) {
  try {
    for (Je = 0; Je < Ee.length; Je++) {
      const t = Ee[Je];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), xs(
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
    Je = -1, Ee.length = 0, Ar(), Ns = null, (Ee.length || Vt.length) && Mr();
  }
}
let Oe = null, Pr = null;
function Fs(e) {
  const t = Oe;
  return Oe = e, Pr = e && e.type.__scopeId || null, t;
}
function Rr(e, t = Oe, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Hs(-1);
    const r = Fs(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Fs(r), n._d && Hs(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Zt(e, t) {
  if (Oe === null)
    return e;
  const s = ln(Oe), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = ce] = t[i];
    r && (q(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && lt(o), n.push({
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
function bt(e, t, s, n) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[n];
    a && (Ze(), Ne(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Qe());
  }
}
function pl(e, t) {
  if (Ae) {
    let s = Ae.provides;
    const n = Ae.parent && Ae.parent.provides;
    n === s && (s = Ae.provides = Object.create(n)), s[e] = t;
  }
}
function rs(e, t, s = !1) {
  const n = ei();
  if (n || At) {
    let i = At ? At._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && q(t) ? t.call(n && n.proxy) : t;
  }
}
function gl() {
  return !!(ei() || At);
}
const ml = /* @__PURE__ */ Symbol.for("v-scx"), vl = () => rs(ml);
function pt(e, t, s) {
  return Lr(e, t, s);
}
function Lr(e, t, s = ce) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = ye({}, s), a = t && n || !t && r !== "post";
  let d;
  if (ys) {
    if (r === "sync") {
      const m = vl();
      d = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = Xe, m.resume = Xe, m.pause = Xe, m;
    }
  }
  const u = Ae;
  l.call = (m, I, y) => Ne(m, u, I, y);
  let h = !1;
  r === "post" ? l.scheduler = (m) => {
    Me(m, u && u.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (m, I) => {
    I ? m() : qn(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const v = ul(e, t, l);
  return ys && (d ? d.push(v) : a && v()), v;
}
function yl(e, t, s) {
  const n = this.proxy, i = he(e) ? e.includes(".") ? $r(n, e) : () => n[e] : e.bind(n, n);
  let r;
  q(t) ? r = t : (r = t.handler, s = t);
  const o = Ss(this), l = Lr(i, r.bind(n), s);
  return o(), l;
}
function $r(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const bl = /* @__PURE__ */ Symbol("_vte"), kr = (e) => e.__isTeleport, ke = /* @__PURE__ */ Symbol("_leaveCb"), Yt = /* @__PURE__ */ Symbol("_enterCb");
function _l() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Yn(() => {
    e.isMounted = !0;
  }), Xn(() => {
    e.isUnmounting = !0;
  }), e;
}
const $e = [Function, Array], Or = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: $e,
  onEnter: $e,
  onAfterEnter: $e,
  onEnterCancelled: $e,
  // leave
  onBeforeLeave: $e,
  onLeave: $e,
  onAfterLeave: $e,
  onLeaveCancelled: $e,
  // appear
  onBeforeAppear: $e,
  onAppear: $e,
  onAfterAppear: $e,
  onAppearCancelled: $e
}, Dr = (e) => {
  const t = e.subTree;
  return t.component ? Dr(t.component) : t;
}, xl = {
  name: "BaseTransition",
  props: Or,
  setup(e, { slots: t }) {
    const s = ei(), n = _l();
    return () => {
      const i = t.default && Ur(t.default(), !0), r = i && i.length ? Nr(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? Fe() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ ee(e), { mode: l } = o;
      if (n.isLeaving)
        return mn(r);
      const a = fi(r);
      if (!a)
        return mn(r);
      let d = Mn(
        a,
        o,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      a.type !== Te && ms(a, d);
      let u = s.subTree && fi(s.subTree);
      if (u && u.type !== Te && !Ct(u, a) && Dr(s).type !== Te) {
        let h = Mn(
          u,
          o,
          n,
          s
        );
        if (ms(u, h), l === "out-in" && a.type !== Te)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete h.afterLeave, u = void 0;
          }, mn(r);
        l === "in-out" && a.type !== Te ? h.delayLeave = (v, m, I) => {
          const y = Fr(
            n,
            u
          );
          y[String(u.key)] = u, v[ke] = () => {
            m(), v[ke] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            I(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function Nr(e) {
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
const Sl = xl;
function Fr(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function Mn(e, t, s, n, i) {
  const {
    appear: r,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: v,
    onLeave: m,
    onAfterLeave: I,
    onLeaveCancelled: y,
    onBeforeAppear: L,
    onAppear: F,
    onAfterAppear: U,
    onAppearCancelled: G
  } = t, M = String(e.key), K = Fr(s, e), de = (S, O) => {
    S && Ne(
      S,
      n,
      9,
      O
    );
  }, le = (S, O) => {
    const W = O[1];
    de(S, O), V(S) ? S.every((_) => _.length <= 1) && W() : S.length <= 1 && W();
  }, J = {
    mode: o,
    persisted: l,
    beforeEnter(S) {
      let O = a;
      if (!s.isMounted)
        if (r)
          O = L || a;
        else
          return;
      S[ke] && S[ke](
        !0
        /* cancelled */
      );
      const W = K[M];
      W && Ct(e, W) && W.el[ke] && W.el[ke](), de(O, [S]);
    },
    enter(S) {
      if (K[M] === e) return;
      let O = d, W = u, _ = h;
      if (!s.isMounted)
        if (r)
          O = F || d, W = U || u, _ = G || h;
        else
          return;
      let R = !1;
      S[Yt] = (me) => {
        R || (R = !0, me ? de(_, [S]) : de(W, [S]), J.delayedLeave && J.delayedLeave(), S[Yt] = void 0);
      };
      const Z = S[Yt].bind(null, !1);
      O ? le(O, [S, Z]) : Z();
    },
    leave(S, O) {
      const W = String(e.key);
      if (S[Yt] && S[Yt](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return O();
      de(v, [S]);
      let _ = !1;
      S[ke] = (Z) => {
        _ || (_ = !0, O(), Z ? de(y, [S]) : de(I, [S]), S[ke] = void 0, K[W] === e && delete K[W]);
      };
      const R = S[ke].bind(null, !1);
      K[W] = e, m ? le(m, [S, R]) : R();
    },
    clone(S) {
      const O = Mn(
        S,
        t,
        s,
        n,
        i
      );
      return i && i(O), O;
    }
  };
  return J;
}
function mn(e) {
  if (sn(e))
    return e = gt(e), e.children = null, e;
}
function fi(e) {
  if (!sn(e))
    return kr(e.type) && e.children ? Nr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && q(s.default))
      return s.default();
  }
}
function ms(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ms(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ur(e, t = !1, s) {
  let n = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = s == null ? o.key : String(s) + String(o.key != null ? o.key : r);
    o.type === te ? (o.patchFlag & 128 && i++, n = n.concat(
      Ur(o.children, t, l)
    )) : (t || o.type !== Te) && n.push(l != null ? gt(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Rt(e, t) {
  return q(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ye({ name: e.name }, t, { setup: e })
  ) : e;
}
function jr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function di(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Us = /* @__PURE__ */ new WeakMap();
function os(e, t, s, n, i = !1) {
  if (V(e)) {
    e.forEach(
      (y, L) => os(
        y,
        t && (V(t) ? t[L] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (ls(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && os(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? ln(n.component) : n.el, o = i ? null : r, { i: l, r: a } = e, d = t && t.r, u = l.refs === ce ? l.refs = {} : l.refs, h = l.setupState, v = /* @__PURE__ */ ee(h), m = h === ce ? Zi : (y) => di(u, y) ? !1 : ne(v, y), I = (y, L) => !(L && di(u, L));
  if (d != null && d !== a) {
    if (hi(t), he(d))
      u[d] = null, m(d) && (h[d] = null);
    else if (/* @__PURE__ */ pe(d)) {
      const y = t;
      I(d, y.k) && (d.value = null), y.k && (u[y.k] = null);
    }
  }
  if (q(a)) {
    Ze();
    try {
      xs(a, l, 12, [o, u]);
    } finally {
      Qe();
    }
  } else {
    const y = he(a), L = /* @__PURE__ */ pe(a);
    if (y || L) {
      const F = () => {
        if (e.f) {
          const U = y ? m(a) ? h[a] : u[a] : I() || !e.k ? a.value : u[e.k];
          if (i)
            V(U) && Un(U, r);
          else if (V(U))
            U.includes(r) || U.push(r);
          else if (y)
            u[a] = [r], m(a) && (h[a] = u[a]);
          else {
            const G = [r];
            I(a, e.k) && (a.value = G), e.k && (u[e.k] = G);
          }
        } else y ? (u[a] = o, m(a) && (h[a] = o)) : L && (I(a, e.k) && (a.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const U = () => {
          F(), Us.delete(e);
        };
        U.id = -1, Us.set(e, U), Me(U, s);
      } else
        hi(e), F();
    }
  }
}
function hi(e) {
  const t = Us.get(e);
  t && (t.flags |= 8, Us.delete(e));
}
Ys().requestIdleCallback;
Ys().cancelIdleCallback;
const ls = (e) => !!e.type.__asyncLoader, sn = (e) => e.type.__isKeepAlive;
function wl(e, t) {
  Hr(e, "a", t);
}
function Cl(e, t) {
  Hr(e, "da", t);
}
function Hr(e, t, s = Ae) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (nn(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      sn(i.parent.vnode) && Il(n, t, s, i), i = i.parent;
  }
}
function Il(e, t, s, n) {
  const i = nn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Vr(() => {
    Un(n[t], i);
  }, s);
}
function nn(e, t, s = Ae, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Ze();
      const l = Ss(s), a = Ne(t, s, e, o);
      return l(), Qe(), a;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const ut = (e) => (t, s = Ae) => {
  (!ys || e === "sp") && nn(e, (...n) => t(...n), s);
}, El = ut("bm"), Yn = ut("m"), Tl = ut(
  "bu"
), Al = ut("u"), Xn = ut(
  "bum"
), Vr = ut("um"), Ml = ut(
  "sp"
), Pl = ut("rtg"), Rl = ut("rtc");
function Ll(e, t = Ae) {
  nn("ec", e, t);
}
const $l = /* @__PURE__ */ Symbol.for("v-ndc");
function Tt(e, t, s, n) {
  let i;
  const r = s, o = V(e);
  if (o || he(e)) {
    const l = o && /* @__PURE__ */ at(e);
    let a = !1, d = !1;
    l && (a = !/* @__PURE__ */ Le(e), d = /* @__PURE__ */ ct(e), e = Zs(e)), i = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      i[u] = t(
        a ? d ? Wt(He(e[u])) : He(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (re(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const u = l[a];
        i[a] = t(e[u], u, a, r);
      }
    }
  else
    i = [];
  return i;
}
const Pn = (e) => e ? ao(e) ? ln(e) : Pn(e.parent) : null, as = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ye(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Pn(e.parent),
    $root: (e) => Pn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Kr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      qn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = it.bind(e.proxy)),
    $watch: (e) => yl.bind(e)
  })
), vn = (e, t) => e !== ce && !e.__isScriptSetup && ne(e, t), kl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: r, accessCache: o, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const v = o[t];
      if (v !== void 0)
        switch (v) {
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
        if (vn(n, t))
          return o[t] = 1, n[t];
        if (i !== ce && ne(i, t))
          return o[t] = 2, i[t];
        if (ne(r, t))
          return o[t] = 3, r[t];
        if (s !== ce && ne(s, t))
          return o[t] = 4, s[t];
        Rn && (o[t] = 0);
      }
    }
    const d = as[t];
    let u, h;
    if (d)
      return t === "$attrs" && xe(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (s !== ce && ne(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = a.config.globalProperties, ne(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return vn(i, t) ? (i[t] = s, !0) : n !== ce && ne(n, t) ? (n[t] = s, !0) : ne(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(s[l] || e !== ce && l[0] !== "$" && ne(e, l) || vn(t, l) || ne(r, l) || ne(n, l) || ne(as, l) || ne(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : ne(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function pi(e) {
  return V(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Rn = !0;
function Ol(e) {
  const t = Kr(e), s = e.proxy, n = e.ctx;
  Rn = !1, t.beforeCreate && gi(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: h,
    mounted: v,
    beforeUpdate: m,
    updated: I,
    activated: y,
    deactivated: L,
    beforeDestroy: F,
    beforeUnmount: U,
    destroyed: G,
    unmounted: M,
    render: K,
    renderTracked: de,
    renderTriggered: le,
    errorCaptured: J,
    serverPrefetch: S,
    // public API
    expose: O,
    inheritAttrs: W,
    // assets
    components: _,
    directives: R,
    filters: Z
  } = t;
  if (d && Dl(d, n, null), o)
    for (const Y in o) {
      const ue = o[Y];
      q(ue) && (n[Y] = ue.bind(s));
    }
  if (i) {
    const Y = i.call(s, s);
    re(Y) && (e.data = /* @__PURE__ */ Qs(Y));
  }
  if (Rn = !0, r)
    for (const Y in r) {
      const ue = r[Y], vt = q(ue) ? ue.bind(s, s) : q(ue.get) ? ue.get.bind(s, s) : Xe, Cs = !q(ue) && q(ue.set) ? ue.set.bind(s) : Xe, yt = Pt({
        get: vt,
        set: Cs
      });
      Object.defineProperty(n, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => yt.value,
        set: (Ve) => yt.value = Ve
      });
    }
  if (l)
    for (const Y in l)
      Br(l[Y], n, s, Y);
  if (a) {
    const Y = q(a) ? a.call(s) : a;
    Reflect.ownKeys(Y).forEach((ue) => {
      pl(ue, Y[ue]);
    });
  }
  u && gi(u, e, "c");
  function se(Y, ue) {
    V(ue) ? ue.forEach((vt) => Y(vt.bind(s))) : ue && Y(ue.bind(s));
  }
  if (se(El, h), se(Yn, v), se(Tl, m), se(Al, I), se(wl, y), se(Cl, L), se(Ll, J), se(Rl, de), se(Pl, le), se(Xn, U), se(Vr, M), se(Ml, S), V(O))
    if (O.length) {
      const Y = e.exposed || (e.exposed = {});
      O.forEach((ue) => {
        Object.defineProperty(Y, ue, {
          get: () => s[ue],
          set: (vt) => s[ue] = vt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  K && e.render === Xe && (e.render = K), W != null && (e.inheritAttrs = W), _ && (e.components = _), R && (e.directives = R), S && jr(e);
}
function Dl(e, t, s = Xe) {
  V(e) && (e = Ln(e));
  for (const n in e) {
    const i = e[n];
    let r;
    re(i) ? "default" in i ? r = rs(
      i.from || n,
      i.default,
      !0
    ) : r = rs(i.from || n) : r = rs(i), /* @__PURE__ */ pe(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function gi(e, t, s) {
  Ne(
    V(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Br(e, t, s, n) {
  let i = n.includes(".") ? $r(s, n) : () => s[n];
  if (he(e)) {
    const r = t[e];
    q(r) && pt(i, r);
  } else if (q(e))
    pt(i, e.bind(s));
  else if (re(e))
    if (V(e))
      e.forEach((r) => Br(r, t, s, n));
    else {
      const r = q(e.handler) ? e.handler.bind(s) : t[e.handler];
      q(r) && pt(i, r, e);
    }
}
function Kr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !i.length && !s && !n ? a = t : (a = {}, i.length && i.forEach(
    (d) => js(a, d, o, !0)
  ), js(a, t, o)), re(t) && r.set(t, a), a;
}
function js(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && js(e, r, s, !0), i && i.forEach(
    (o) => js(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = Nl[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Nl = {
  data: mi,
  props: vi,
  emits: vi,
  // objects
  methods: Qt,
  computed: Qt,
  // lifecycle
  beforeCreate: Se,
  created: Se,
  beforeMount: Se,
  mounted: Se,
  beforeUpdate: Se,
  updated: Se,
  beforeDestroy: Se,
  beforeUnmount: Se,
  destroyed: Se,
  unmounted: Se,
  activated: Se,
  deactivated: Se,
  errorCaptured: Se,
  serverPrefetch: Se,
  // assets
  components: Qt,
  directives: Qt,
  // watch
  watch: Ul,
  // provide / inject
  provide: mi,
  inject: Fl
};
function mi(e, t) {
  return t ? e ? function() {
    return ye(
      q(e) ? e.call(this, this) : e,
      q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Fl(e, t) {
  return Qt(Ln(e), Ln(t));
}
function Ln(e) {
  if (V(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Qt(e, t) {
  return e ? ye(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function vi(e, t) {
  return e ? V(e) && V(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ye(
    /* @__PURE__ */ Object.create(null),
    pi(e),
    pi(t ?? {})
  ) : t;
}
function Ul(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ye(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Se(e[n], t[n]);
  return s;
}
function Wr() {
  return {
    app: null,
    config: {
      isNativeTag: Zi,
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
let jl = 0;
function Hl(e, t) {
  return function(n, i = null) {
    q(n) || (n = ye({}, n)), i != null && !re(i) && (i = null);
    const r = Wr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const d = r.app = {
      _uid: jl++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: _a,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return o.has(u) || (u && q(u.install) ? (o.add(u), u.install(d, ...h)) : q(u) && (o.add(u), u(d, ...h))), d;
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
      mount(u, h, v) {
        if (!a) {
          const m = d._ceVNode || ie(n, i);
          return m.appContext = r, v === !0 ? v = "svg" : v === !1 && (v = void 0), e(m, u, v), a = !0, d._container = u, u.__vue_app__ = d, ln(m.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (Ne(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return r.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = At;
        At = d;
        try {
          return u();
        } finally {
          At = h;
        }
      }
    };
    return d;
  };
}
let At = null;
const Vl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ue(t)}Modifiers`] || e[`${mt(t)}Modifiers`];
function Bl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ce;
  let i = s;
  const r = t.startsWith("update:"), o = r && Vl(n, t.slice(7));
  o && (o.trim && (i = s.map((u) => he(u) ? u.trim() : u)), o.number && (i = s.map(jn)));
  let l, a = n[l = fn(t)] || // also try camelCase event handler (#2249)
  n[l = fn(Ue(t))];
  !a && r && (a = n[l = fn(mt(t))]), a && Ne(
    a,
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
    e.emitted[l] = !0, Ne(
      d,
      e,
      6,
      i
    );
  }
}
const Kl = /* @__PURE__ */ new WeakMap();
function zr(e, t, s = !1) {
  const n = s ? Kl : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!q(e)) {
    const a = (d) => {
      const u = zr(d, t, !0);
      u && (l = !0, ye(o, u));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (re(e) && n.set(e, null), null) : (V(r) ? r.forEach((a) => o[a] = null) : ye(o, r), re(e) && n.set(e, o), o);
}
function rn(e, t) {
  return !e || !zs(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ne(e, t[0].toLowerCase() + t.slice(1)) || ne(e, mt(t)) || ne(e, t));
}
function yi(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: a,
    render: d,
    renderCache: u,
    props: h,
    data: v,
    setupState: m,
    ctx: I,
    inheritAttrs: y
  } = e, L = Fs(e);
  let F, U;
  try {
    if (s.shapeFlag & 4) {
      const M = i || n, K = M;
      F = qe(
        d.call(
          K,
          M,
          u,
          h,
          m,
          v,
          I
        )
      ), U = l;
    } else {
      const M = t;
      F = qe(
        M.length > 1 ? M(
          h,
          { attrs: l, slots: o, emit: a }
        ) : M(
          h,
          null
        )
      ), U = t.props ? l : Wl(l);
    }
  } catch (M) {
    cs.length = 0, tn(M, e, 1), F = ie(Te);
  }
  let G = F;
  if (U && y !== !1) {
    const M = Object.keys(U), { shapeFlag: K } = G;
    M.length && K & 7 && (r && M.some(Js) && (U = zl(
      U,
      r
    )), G = gt(G, U, !1, !0));
  }
  return s.dirs && (G = gt(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(s.dirs) : s.dirs), s.transition && ms(G, s.transition), F = G, Fs(L), F;
}
const Wl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || zs(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, zl = (e, t) => {
  const s = {};
  for (const n in e)
    (!Js(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Jl(e, t, s) {
  const { props: n, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? bi(n, o, d) : !!o;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const v = u[h];
        if (Jr(o, n, v) && !rn(d, v))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? bi(n, o, d) : !0 : !!o;
  return !1;
}
function bi(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (Jr(t, e, r) && !rn(s, r))
      return !0;
  }
  return !1;
}
function Jr(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && re(n) && re(i) ? !Hn(n, i) : n !== i;
}
function Gl({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Gr = {}, qr = () => Object.create(Gr), Yr = (e) => Object.getPrototypeOf(e) === Gr;
function ql(e, t, s, n = !1) {
  const i = {}, r = qr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Xr(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ el(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Yl(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ ee(i), [a] = e.propsOptions;
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
        let v = u[h];
        if (rn(e.emitsOptions, v))
          continue;
        const m = t[v];
        if (a)
          if (ne(r, v))
            m !== r[v] && (r[v] = m, d = !0);
          else {
            const I = Ue(v);
            i[I] = $n(
              a,
              l,
              I,
              m,
              e,
              !1
            );
          }
        else
          m !== r[v] && (r[v] = m, d = !0);
      }
    }
  } else {
    Xr(e, t, i, r) && (d = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !ne(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = mt(h)) === h || !ne(t, u))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[u] !== void 0) && (i[h] = $n(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (r !== l)
      for (const h in r)
        (!t || !ne(t, h)) && (delete r[h], d = !0);
  }
  d && ot(e.attrs, "set", "");
}
function Xr(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (ss(a))
        continue;
      const d = t[a];
      let u;
      i && ne(i, u = Ue(a)) ? !r || !r.includes(u) ? s[u] = d : (l || (l = {}))[u] = d : rn(e.emitsOptions, a) || (!(a in n) || d !== n[a]) && (n[a] = d, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ ee(s), d = l || ce;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      s[h] = $n(
        i,
        a,
        h,
        d[h],
        e,
        !ne(d, h)
      );
    }
  }
  return o;
}
function $n(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const l = ne(o, "default");
    if (l && n === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && q(a)) {
        const { propsDefaults: d } = i;
        if (s in d)
          n = d[s];
        else {
          const u = Ss(i);
          n = d[s] = a.call(
            null,
            t
          ), u();
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
    ] && (n === "" || n === mt(s)) && (n = !0));
  }
  return n;
}
const Xl = /* @__PURE__ */ new WeakMap();
function Zr(e, t, s = !1) {
  const n = s ? Xl : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let a = !1;
  if (!q(e)) {
    const u = (h) => {
      a = !0;
      const [v, m] = Zr(h, t, !0);
      ye(o, v), m && l.push(...m);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !a)
    return re(e) && n.set(e, jt), jt;
  if (V(r))
    for (let u = 0; u < r.length; u++) {
      const h = Ue(r[u]);
      _i(h) && (o[h] = ce);
    }
  else if (r)
    for (const u in r) {
      const h = Ue(u);
      if (_i(h)) {
        const v = r[u], m = o[h] = V(v) || q(v) ? { type: v } : ye({}, v), I = m.type;
        let y = !1, L = !0;
        if (V(I))
          for (let F = 0; F < I.length; ++F) {
            const U = I[F], G = q(U) && U.name;
            if (G === "Boolean") {
              y = !0;
              break;
            } else G === "String" && (L = !1);
          }
        else
          y = q(I) && I.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = y, m[
          1
          /* shouldCastTrue */
        ] = L, (y || ne(m, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return re(e) && n.set(e, d), d;
}
function _i(e) {
  return e[0] !== "$" && !ss(e);
}
const Zn = (e) => e === "_" || e === "_ctx" || e === "$stable", Qn = (e) => V(e) ? e.map(qe) : [qe(e)], Zl = (e, t, s) => {
  if (t._n)
    return t;
  const n = Rr((...i) => Qn(t(...i)), s);
  return n._c = !1, n;
}, Qr = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (Zn(i)) continue;
    const r = e[i];
    if (q(r))
      t[i] = Zl(i, r, n);
    else if (r != null) {
      const o = Qn(r);
      t[i] = () => o;
    }
  }
}, eo = (e, t) => {
  const s = Qn(t);
  e.slots.default = () => s;
}, to = (e, t, s) => {
  for (const n in t)
    (s || !Zn(n)) && (e[n] = t[n]);
}, Ql = (e, t, s) => {
  const n = e.slots = qr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (to(n, t, s), s && ir(n, "_", i, !0)) : Qr(t, n);
  } else t && eo(e, t);
}, ea = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, o = ce;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : to(i, t, s) : (r = !t.$stable, Qr(t, i)), o = t;
  } else t && (eo(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Zn(l) && o[l] == null && delete i[l];
}, Me = ra;
function ta(e) {
  return sa(e);
}
function sa(e, t) {
  const s = Ys();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: d,
    setElementText: u,
    parentNode: h,
    nextSibling: v,
    setScopeId: m = Xe,
    insertStaticContent: I
  } = e, y = (c, f, p, C = null, w = null, b = null, P = void 0, A = null, T = !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !Ct(c, f) && (C = Is(c), Ve(c, w, b, !0), c = null), f.patchFlag === -2 && (T = !1, f.dynamicChildren = null);
    const { type: x, ref: B, shapeFlag: k } = f;
    switch (x) {
      case on:
        L(c, f, p, C);
        break;
      case Te:
        F(c, f, p, C);
        break;
      case $s:
        c == null && U(f, p, C, P);
        break;
      case te:
        _(
          c,
          f,
          p,
          C,
          w,
          b,
          P,
          A,
          T
        );
        break;
      default:
        k & 1 ? K(
          c,
          f,
          p,
          C,
          w,
          b,
          P,
          A,
          T
        ) : k & 6 ? R(
          c,
          f,
          p,
          C,
          w,
          b,
          P,
          A,
          T
        ) : (k & 64 || k & 128) && x.process(
          c,
          f,
          p,
          C,
          w,
          b,
          P,
          A,
          T,
          Jt
        );
    }
    B != null && w ? os(B, c && c.ref, b, f || c, !f) : B == null && c && c.ref != null && os(c.ref, null, b, c, !0);
  }, L = (c, f, p, C) => {
    if (c == null)
      n(
        f.el = l(f.children),
        p,
        C
      );
    else {
      const w = f.el = c.el;
      f.children !== c.children && d(w, f.children);
    }
  }, F = (c, f, p, C) => {
    c == null ? n(
      f.el = a(f.children || ""),
      p,
      C
    ) : f.el = c.el;
  }, U = (c, f, p, C) => {
    [c.el, c.anchor] = I(
      c.children,
      f,
      p,
      C,
      c.el,
      c.anchor
    );
  }, G = ({ el: c, anchor: f }, p, C) => {
    let w;
    for (; c && c !== f; )
      w = v(c), n(c, p, C), c = w;
    n(f, p, C);
  }, M = ({ el: c, anchor: f }) => {
    let p;
    for (; c && c !== f; )
      p = v(c), i(c), c = p;
    i(f);
  }, K = (c, f, p, C, w, b, P, A, T) => {
    if (f.type === "svg" ? P = "svg" : f.type === "math" && (P = "mathml"), c == null)
      de(
        f,
        p,
        C,
        w,
        b,
        P,
        A,
        T
      );
    else {
      const x = c.el && c.el._isVueCE ? c.el : null;
      try {
        x && x._beginPatch(), S(
          c,
          f,
          w,
          b,
          P,
          A,
          T
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, de = (c, f, p, C, w, b, P, A) => {
    let T, x;
    const { props: B, shapeFlag: k, transition: j, dirs: z } = c;
    if (T = c.el = o(
      c.type,
      b,
      B && B.is,
      B
    ), k & 8 ? u(T, c.children) : k & 16 && J(
      c.children,
      T,
      null,
      C,
      w,
      yn(c, b),
      P,
      A
    ), z && bt(c, null, C, "created"), le(T, c, c.scopeId, P, C), B) {
      for (const ae in B)
        ae !== "value" && !ss(ae) && r(T, ae, null, B[ae], b, C);
      "value" in B && r(T, "value", null, B.value, b), (x = B.onVnodeBeforeMount) && ze(x, C, c);
    }
    z && bt(c, null, C, "beforeMount");
    const Q = na(w, j);
    Q && j.beforeEnter(T), n(T, f, p), ((x = B && B.onVnodeMounted) || Q || z) && Me(() => {
      try {
        x && ze(x, C, c), Q && j.enter(T), z && bt(c, null, C, "mounted");
      } finally {
      }
    }, w);
  }, le = (c, f, p, C, w) => {
    if (p && m(c, p), C)
      for (let b = 0; b < C.length; b++)
        m(c, C[b]);
    if (w) {
      let b = w.subTree;
      if (f === b || ro(b.type) && (b.ssContent === f || b.ssFallback === f)) {
        const P = w.vnode;
        le(
          c,
          P,
          P.scopeId,
          P.slotScopeIds,
          w.parent
        );
      }
    }
  }, J = (c, f, p, C, w, b, P, A, T = 0) => {
    for (let x = T; x < c.length; x++) {
      const B = c[x] = A ? rt(c[x]) : qe(c[x]);
      y(
        null,
        B,
        f,
        p,
        C,
        w,
        b,
        P,
        A
      );
    }
  }, S = (c, f, p, C, w, b, P) => {
    const A = f.el = c.el;
    let { patchFlag: T, dynamicChildren: x, dirs: B } = f;
    T |= c.patchFlag & 16;
    const k = c.props || ce, j = f.props || ce;
    let z;
    if (p && _t(p, !1), (z = j.onVnodeBeforeUpdate) && ze(z, p, f, c), B && bt(f, c, p, "beforeUpdate"), p && _t(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    x && (!c.dynamicChildren || c.dynamicChildren.length !== x.length) && (T = 0, P = !1, x = null), (k.innerHTML && j.innerHTML == null || k.textContent && j.textContent == null) && u(A, ""), x ? O(
      c.dynamicChildren,
      x,
      A,
      p,
      C,
      yn(f, w),
      b
    ) : P || ue(
      c,
      f,
      A,
      null,
      p,
      C,
      yn(f, w),
      b,
      !1
    ), T > 0) {
      if (T & 16)
        W(A, k, j, p, w);
      else if (T & 2 && k.class !== j.class && r(A, "class", null, j.class, w), T & 4 && r(A, "style", k.style, j.style, w), T & 8) {
        const Q = f.dynamicProps;
        for (let ae = 0; ae < Q.length; ae++) {
          const oe = Q[ae], ge = k[oe], be = j[oe];
          (be !== ge || oe === "value") && r(A, oe, ge, be, w, p);
        }
      }
      T & 1 && c.children !== f.children && u(A, f.children);
    } else !P && x == null && W(A, k, j, p, w);
    ((z = j.onVnodeUpdated) || B) && Me(() => {
      z && ze(z, p, f, c), B && bt(f, c, p, "updated");
    }, C);
  }, O = (c, f, p, C, w, b, P) => {
    for (let A = 0; A < f.length; A++) {
      const T = c[A], x = f[A], B = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ct(T, x) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 198) ? h(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      y(
        T,
        x,
        B,
        null,
        C,
        w,
        b,
        P,
        !0
      );
    }
  }, W = (c, f, p, C, w) => {
    if (f !== p) {
      if (f !== ce)
        for (const b in f)
          !ss(b) && !(b in p) && r(
            c,
            b,
            f[b],
            null,
            w,
            C
          );
      for (const b in p) {
        if (ss(b)) continue;
        const P = p[b], A = f[b];
        P !== A && b !== "value" && r(c, b, A, P, w, C);
      }
      "value" in p && r(c, "value", f.value, p.value, w);
    }
  }, _ = (c, f, p, C, w, b, P, A, T) => {
    const x = f.el = c ? c.el : l(""), B = f.anchor = c ? c.anchor : l("");
    let { patchFlag: k, dynamicChildren: j, slotScopeIds: z } = f;
    z && (A = A ? A.concat(z) : z), c == null ? (n(x, p, C), n(B, p, C), J(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      p,
      B,
      w,
      b,
      P,
      A,
      T
    )) : k > 0 && k & 64 && j && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === j.length ? (O(
      c.dynamicChildren,
      j,
      p,
      w,
      b,
      P,
      A
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || w && f === w.subTree) && so(
      c,
      f,
      !0
      /* shallow */
    )) : ue(
      c,
      f,
      p,
      B,
      w,
      b,
      P,
      A,
      T
    );
  }, R = (c, f, p, C, w, b, P, A, T) => {
    f.slotScopeIds = A, c == null ? f.shapeFlag & 512 ? w.ctx.activate(
      f,
      p,
      C,
      P,
      T
    ) : Z(
      f,
      p,
      C,
      w,
      b,
      P,
      T
    ) : me(c, f, T);
  }, Z = (c, f, p, C, w, b, P) => {
    const A = c.component = ha(
      c,
      C,
      w
    );
    if (sn(c) && (A.ctx.renderer = Jt), pa(A, !1, P), A.asyncDep) {
      if (w && w.registerDep(A, se, P), !c.el) {
        const T = A.subTree = ie(Te);
        F(null, T, f, p), c.placeholder = T.el;
      }
    } else
      se(
        A,
        c,
        f,
        p,
        w,
        b,
        P
      );
  }, me = (c, f, p) => {
    const C = f.component = c.component;
    if (Jl(c, f, p))
      if (C.asyncDep && !C.asyncResolved) {
        Y(C, f, p);
        return;
      } else
        C.next = f, C.update();
    else
      f.el = c.el, C.vnode = f;
  }, se = (c, f, p, C, w, b, P) => {
    const A = () => {
      if (c.isMounted) {
        let { next: k, bu: j, u: z, parent: Q, vnode: ae } = c;
        {
          const Ke = no(c);
          if (Ke) {
            k && (k.el = ae.el, Y(c, k, P)), Ke.asyncDep.then(() => {
              Me(() => {
                c.isUnmounted || x();
              }, w);
            });
            return;
          }
        }
        let oe = k, ge;
        _t(c, !1), k ? (k.el = ae.el, Y(c, k, P)) : k = ae, j && Ls(j), (ge = k.props && k.props.onVnodeBeforeUpdate) && ze(ge, Q, k, ae), _t(c, !0);
        const be = yi(c), Be = c.subTree;
        c.subTree = be, y(
          Be,
          be,
          // parent may have changed if it's in a teleport
          h(Be.el),
          // anchor may have changed if it's in a fragment
          Is(Be),
          c,
          w,
          b
        ), k.el = be.el, oe === null && Gl(c, be.el), z && Me(z, w), (ge = k.props && k.props.onVnodeUpdated) && Me(
          () => ze(ge, Q, k, ae),
          w
        );
      } else {
        let k;
        const { el: j, props: z } = f, { bm: Q, m: ae, parent: oe, root: ge, type: be } = c, Be = ls(f);
        _t(c, !1), Q && Ls(Q), !Be && (k = z && z.onVnodeBeforeMount) && ze(k, oe, f), _t(c, !0);
        {
          ge.ce && ge.ce._hasShadowRoot() && ge.ce._injectChildStyle(
            be,
            c.parent ? c.parent.type : void 0
          );
          const Ke = c.subTree = yi(c);
          y(
            null,
            Ke,
            p,
            C,
            c,
            w,
            b
          ), f.el = Ke.el;
        }
        if (ae && Me(ae, w), !Be && (k = z && z.onVnodeMounted)) {
          const Ke = f;
          Me(
            () => ze(k, oe, Ke),
            w
          );
        }
        (f.shapeFlag & 256 || oe && ls(oe.vnode) && oe.vnode.shapeFlag & 256) && c.a && Me(c.a, w), c.isMounted = !0, f = p = C = null;
      }
    };
    c.scope.on();
    const T = c.effect = new fr(A);
    c.scope.off();
    const x = c.update = T.run.bind(T), B = c.job = T.runIfDirty.bind(T);
    B.i = c, B.id = c.uid, T.scheduler = () => qn(B), _t(c, !0), x();
  }, Y = (c, f, p) => {
    f.component = c;
    const C = c.vnode.props;
    c.vnode = f, c.next = null, Yl(c, f.props, C, p), ea(c, f.children, p), Ze(), ui(c), Qe();
  }, ue = (c, f, p, C, w, b, P, A, T = !1) => {
    const x = c && c.children, B = c ? c.shapeFlag : 0, k = f.children, { patchFlag: j, shapeFlag: z } = f;
    if (j > 0) {
      if (j & 128) {
        Cs(
          x,
          k,
          p,
          C,
          w,
          b,
          P,
          A,
          T
        );
        return;
      } else if (j & 256) {
        vt(
          x,
          k,
          p,
          C,
          w,
          b,
          P,
          A,
          T
        );
        return;
      }
    }
    z & 8 ? (B & 16 && zt(x, w, b), k !== x && u(p, k)) : B & 16 ? z & 16 ? Cs(
      x,
      k,
      p,
      C,
      w,
      b,
      P,
      A,
      T
    ) : zt(x, w, b, !0) : (B & 8 && u(p, ""), z & 16 && J(
      k,
      p,
      C,
      w,
      b,
      P,
      A,
      T
    ));
  }, vt = (c, f, p, C, w, b, P, A, T) => {
    c = c || jt, f = f || jt;
    const x = c.length, B = f.length, k = Math.min(x, B);
    let j;
    for (j = 0; j < k; j++) {
      const z = f[j] = T ? rt(f[j]) : qe(f[j]);
      y(
        c[j],
        z,
        p,
        null,
        w,
        b,
        P,
        A,
        T
      );
    }
    x > B ? zt(
      c,
      w,
      b,
      !0,
      !1,
      k
    ) : J(
      f,
      p,
      C,
      w,
      b,
      P,
      A,
      T,
      k
    );
  }, Cs = (c, f, p, C, w, b, P, A, T) => {
    let x = 0;
    const B = f.length;
    let k = c.length - 1, j = B - 1;
    for (; x <= k && x <= j; ) {
      const z = c[x], Q = f[x] = T ? rt(f[x]) : qe(f[x]);
      if (Ct(z, Q))
        y(
          z,
          Q,
          p,
          null,
          w,
          b,
          P,
          A,
          T
        );
      else
        break;
      x++;
    }
    for (; x <= k && x <= j; ) {
      const z = c[k], Q = f[j] = T ? rt(f[j]) : qe(f[j]);
      if (Ct(z, Q))
        y(
          z,
          Q,
          p,
          null,
          w,
          b,
          P,
          A,
          T
        );
      else
        break;
      k--, j--;
    }
    if (x > k) {
      if (x <= j) {
        const z = j + 1, Q = z < B ? f[z].el : C;
        for (; x <= j; )
          y(
            null,
            f[x] = T ? rt(f[x]) : qe(f[x]),
            p,
            Q,
            w,
            b,
            P,
            A,
            T
          ), x++;
      }
    } else if (x > j)
      for (; x <= k; )
        Ve(c[x], w, b, !0), x++;
    else {
      const z = x, Q = x, ae = /* @__PURE__ */ new Map();
      for (x = Q; x <= j; x++) {
        const Pe = f[x] = T ? rt(f[x]) : qe(f[x]);
        Pe.key != null && ae.set(Pe.key, x);
      }
      let oe, ge = 0;
      const be = j - Q + 1;
      let Be = !1, Ke = 0;
      const Gt = new Array(be);
      for (x = 0; x < be; x++) Gt[x] = 0;
      for (x = z; x <= k; x++) {
        const Pe = c[x];
        if (ge >= be) {
          Ve(Pe, w, b, !0);
          continue;
        }
        let We;
        if (Pe.key != null)
          We = ae.get(Pe.key);
        else
          for (oe = Q; oe <= j; oe++)
            if (Gt[oe - Q] === 0 && Ct(Pe, f[oe])) {
              We = oe;
              break;
            }
        We === void 0 ? Ve(Pe, w, b, !0) : (Gt[We - Q] = x + 1, We >= Ke ? Ke = We : Be = !0, y(
          Pe,
          f[We],
          p,
          null,
          w,
          b,
          P,
          A,
          T
        ), ge++);
      }
      const ni = Be ? ia(Gt) : jt;
      for (oe = ni.length - 1, x = be - 1; x >= 0; x--) {
        const Pe = Q + x, We = f[Pe], ii = f[Pe + 1], ri = Pe + 1 < B ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ii.el || io(ii)
        ) : C;
        Gt[x] === 0 ? y(
          null,
          We,
          p,
          ri,
          w,
          b,
          P,
          A,
          T
        ) : Be && (oe < 0 || x !== ni[oe] ? yt(We, p, ri, 2) : oe--);
      }
    }
  }, yt = (c, f, p, C, w = null) => {
    const { el: b, type: P, transition: A, children: T, shapeFlag: x } = c;
    if (x & 6) {
      yt(c.component.subTree, f, p, C);
      return;
    }
    if (x & 128) {
      c.suspense.move(f, p, C);
      return;
    }
    if (x & 64) {
      P.move(c, f, p, Jt);
      return;
    }
    if (P === te) {
      n(b, f, p);
      for (let k = 0; k < T.length; k++)
        yt(T[k], f, p, C);
      n(c.anchor, f, p);
      return;
    }
    if (P === $s) {
      G(c, f, p);
      return;
    }
    if (C !== 2 && x & 1 && A)
      if (C === 0)
        A.persisted && !b[ke] ? n(b, f, p) : (A.beforeEnter(b), n(b, f, p), Me(() => A.enter(b), w));
      else {
        const { leave: k, delayLeave: j, afterLeave: z } = A, Q = () => {
          c.ctx.isUnmounted ? i(b) : n(b, f, p);
        }, ae = () => {
          const oe = b._isLeaving || !!b[ke];
          b._isLeaving && b[ke](
            !0
            /* cancelled */
          ), A.persisted && !oe ? Q() : k(b, () => {
            Q(), z && z();
          });
        };
        j ? j(b, Q, ae) : ae();
      }
    else
      n(b, f, p);
  }, Ve = (c, f, p, C = !1, w = !1) => {
    const {
      type: b,
      props: P,
      ref: A,
      children: T,
      dynamicChildren: x,
      shapeFlag: B,
      patchFlag: k,
      dirs: j,
      cacheIndex: z,
      memo: Q
    } = c;
    if (k === -2 && (w = !1), A != null && (Ze(), os(A, null, p, c, !0), Qe()), z != null && (f.renderCache[z] = void 0), B & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const ae = B & 1 && j, oe = !ls(c);
    let ge;
    if (oe && (ge = P && P.onVnodeBeforeUnmount) && ze(ge, f, c), B & 6)
      So(c.component, p, C);
    else {
      if (B & 128) {
        c.suspense.unmount(p, C);
        return;
      }
      ae && bt(c, null, f, "beforeUnmount"), B & 64 ? c.type.remove(
        c,
        f,
        p,
        Jt,
        C
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== te || k > 0 && k & 64) ? zt(
        x,
        f,
        p,
        !1,
        !0
      ) : (b === te && k & 384 || !w && B & 16) && zt(T, f, p), C && ti(c);
    }
    const be = Q != null && z == null;
    (oe && (ge = P && P.onVnodeUnmounted) || ae || be) && Me(() => {
      ge && ze(ge, f, c), ae && bt(c, null, f, "unmounted"), be && (c.el = null);
    }, p);
  }, ti = (c) => {
    const { type: f, el: p, anchor: C, transition: w } = c;
    if (f === te) {
      xo(p, C);
      return;
    }
    if (f === $s) {
      M(c);
      return;
    }
    const b = () => {
      i(p), w && !w.persisted && w.afterLeave && w.afterLeave();
    };
    if (c.shapeFlag & 1 && w && !w.persisted) {
      const { leave: P, delayLeave: A } = w, T = () => P(p, b);
      A ? A(c.el, b, T) : T();
    } else
      b();
  }, xo = (c, f) => {
    let p;
    for (; c !== f; )
      p = v(c), i(c), c = p;
    i(f);
  }, So = (c, f, p) => {
    const { bum: C, scope: w, job: b, subTree: P, um: A, m: T, a: x } = c;
    xi(T), xi(x), C && Ls(C), w.stop(), b && (b.flags |= 8, Ve(P, c, f, p)), A && Me(A, f), Me(() => {
      c.isUnmounted = !0;
    }, f);
  }, zt = (c, f, p, C = !1, w = !1, b = 0) => {
    for (let P = b; P < c.length; P++)
      Ve(c[P], f, p, C, w);
  }, Is = (c) => {
    if (c.shapeFlag & 6)
      return Is(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const f = v(c.anchor || c.el), p = f && f[bl];
    return p ? v(p) : f;
  };
  let un = !1;
  const si = (c, f, p) => {
    let C;
    c == null ? f._vnode && (Ve(f._vnode, null, null, !0), C = f._vnode.component) : y(
      f._vnode || null,
      c,
      f,
      null,
      null,
      null,
      p
    ), f._vnode = c, un || (un = !0, ui(C), Ar(), un = !1);
  }, Jt = {
    p: y,
    um: Ve,
    m: yt,
    r: ti,
    mt: Z,
    mc: J,
    pc: ue,
    pbc: O,
    n: Is,
    o: e
  };
  return {
    render: si,
    hydrate: void 0,
    createApp: Hl(si)
  };
}
function yn({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function _t({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function na(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function so(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (V(n) && V(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = rt(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && so(o, l)), l.type === on && (l.patchFlag === -1 && (l = i[r] = rt(l)), l.el = o.el), l.type === Te && !l.el && (l.el = o.el);
    }
}
function ia(e) {
  const t = e.slice(), s = [0];
  let n, i, r, o, l;
  const a = e.length;
  for (n = 0; n < a; n++) {
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
function no(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : no(t);
}
function xi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function io(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? io(t.subTree) : null;
}
const ro = (e) => e.__isSuspense;
function ra(e, t) {
  t && t.pendingBranch ? V(e) ? t.effects.push(...e) : t.effects.push(e) : hl(e);
}
const te = /* @__PURE__ */ Symbol.for("v-fgt"), on = /* @__PURE__ */ Symbol.for("v-txt"), Te = /* @__PURE__ */ Symbol.for("v-cmt"), $s = /* @__PURE__ */ Symbol.for("v-stc"), cs = [];
let Re = null;
function N(e = !1) {
  cs.push(Re = e ? null : []);
}
function oa() {
  cs.pop(), Re = cs[cs.length - 1] || null;
}
let vs = 1;
function Hs(e, t = !1) {
  vs += e, e < 0 && Re && t && (Re.hasOnce = !0);
}
function oo(e) {
  return e.dynamicChildren = vs > 0 ? Re || jt : null, oa(), vs > 0 && Re && Re.push(e), e;
}
function H(e, t, s, n, i, r) {
  return oo(
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
function Mt(e, t, s, n, i) {
  return oo(
    ie(
      e,
      t,
      s,
      n,
      i,
      !0
    )
  );
}
function Vs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const lo = ({ key: e }) => e ?? null, ks = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? he(e) || /* @__PURE__ */ pe(e) || q(e) ? { i: Oe, r: e, k: t, f: !!s } : e : null);
function g(e, t = null, s = null, n = 0, i = null, r = e === te ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && lo(t),
    ref: t && ks(t),
    scopeId: Pr,
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
    ctx: Oe
  };
  return l ? (Bs(a, s), r & 128 && e.normalize(a)) : s && (a.shapeFlag |= he(s) ? 8 : 16), vs > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Re && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Re.push(a), a;
}
const ie = la;
function la(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === $l) && (e = Te), Vs(e)) {
    const l = gt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Bs(l, s), vs > 0 && !r && Re && (l.shapeFlag & 6 ? Re[Re.indexOf(e)] = l : Re.push(l)), l.patchFlag = -2, l;
  }
  if (ya(e) && (e = e.__vccOpts), t) {
    t = aa(t);
    let { class: l, style: a } = t;
    l && !he(l) && (t.class = Ie(l)), re(a) && (/* @__PURE__ */ en(a) && !V(a) && (a = ye({}, a)), t.style = Xs(a));
  }
  const o = he(e) ? 1 : ro(e) ? 128 : kr(e) ? 64 : re(e) ? 4 : q(e) ? 2 : 0;
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
function aa(e) {
  return e ? /* @__PURE__ */ en(e) || Yr(e) ? ye({}, e) : e : null;
}
function gt(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, d = t ? ua(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && lo(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? V(r) ? r.concat(ks(t)) : [r, ks(t)] : ks(t)
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
    patchFlag: t && e.type !== te ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && gt(e.ssContent),
    ssFallback: e.ssFallback && gt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && n && ms(
    u,
    a.clone(u)
  ), u;
}
function ca(e = " ", t = 0) {
  return ie(on, null, e, t);
}
function Ms(e, t) {
  const s = ie($s, null, e);
  return s.staticCount = t, s;
}
function Fe(e = "", t = !1) {
  return t ? (N(), Mt(Te, null, e)) : ie(Te, null, e);
}
function qe(e) {
  return e == null || typeof e == "boolean" ? ie(Te) : V(e) ? ie(
    te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vs(e) ? rt(e) : ie(on, null, String(e));
}
function rt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : gt(e);
}
function Bs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (V(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Bs(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !Yr(t) ? t._ctx = Oe : i === 3 && Oe && (Oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (q(t)) {
    if (n & 65) {
      Bs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Oe }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [ca(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function ua(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = Ie([t.class, n.class]));
      else if (i === "style")
        t.style = Xs([t.style, n.style]);
      else if (zs(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(V(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Js(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function ze(e, t, s, n = null) {
  Ne(e, t, 7, [
    s,
    n
  ]);
}
const fa = Wr();
let da = 0;
function ha(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || fa, r = {
    uid: da++,
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
    scope: new ar(
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
    propsOptions: Zr(n, i),
    emitsOptions: zr(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ce,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ce,
    data: ce,
    props: ce,
    attrs: ce,
    slots: ce,
    refs: ce,
    setupState: ce,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Bl.bind(null, r), e.ce && e.ce(r), r;
}
let Ae = null;
const ei = () => Ae || Oe;
let Ks, kn;
{
  const e = Ys(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Ks = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Ae = s
  ), kn = t(
    "__VUE_SSR_SETTERS__",
    (s) => ys = s
  );
}
const Ss = (e) => {
  const t = Ae;
  return Ks(e), e.scope.on(), () => {
    e.scope.off(), Ks(t);
  };
}, Si = () => {
  Ae && Ae.scope.off(), Ks(null);
};
function ao(e) {
  return e.vnode.shapeFlag & 4;
}
let ys = !1;
function pa(e, t = !1, s = !1) {
  t && kn(t);
  const { props: n, children: i } = e.vnode, r = ao(e);
  ql(e, n, r, t), Ql(e, i, s || t);
  const o = r ? ga(e, t) : void 0;
  return t && kn(!1), o;
}
function ga(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, kl);
  const { setup: n } = s;
  if (n) {
    Ze();
    const i = e.setupContext = n.length > 1 ? va(e) : null, r = Ss(e), o = xs(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = er(o);
    if (Qe(), r(), (l || e.sp) && !ls(e) && jr(e), l) {
      if (o.then(Si, Si), t)
        return o.then((a) => {
          wi(e, a);
        }).catch((a) => {
          tn(a, e, 0);
        });
      e.asyncDep = o;
    } else
      wi(e, o);
  } else
    co(e);
}
function wi(e, t, s) {
  q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = Ir(t)), co(e);
}
function co(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Xe);
  {
    const i = Ss(e);
    Ze();
    try {
      Ol(e);
    } finally {
      Qe(), i();
    }
  }
}
const ma = {
  get(e, t) {
    return xe(e, "get", ""), e[t];
  }
};
function va(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, ma),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ln(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ir(Gn(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in as)
        return as[s](e);
    },
    has(t, s) {
      return s in t || s in as;
    }
  })) : e.proxy;
}
function ya(e) {
  return q(e) && "__vccOpts" in e;
}
const Pt = (e, t) => /* @__PURE__ */ al(e, t, ys);
function ba(e, t, s) {
  try {
    Hs(-1);
    const n = arguments.length;
    return n === 2 ? re(t) && !V(t) ? Vs(t) ? ie(e, null, [t]) : ie(e, t) : ie(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Vs(s) && (s = [s]), ie(e, t, s));
  } finally {
    Hs(1);
  }
}
const _a = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let On;
const Ci = typeof window < "u" && window.trustedTypes;
if (Ci)
  try {
    On = /* @__PURE__ */ Ci.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const uo = On ? (e) => On.createHTML(e) : (e) => e, xa = "http://www.w3.org/2000/svg", Sa = "http://www.w3.org/1998/Math/MathML", st = typeof document < "u" ? document : null, Ii = st && /* @__PURE__ */ st.createElement("template"), wa = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? st.createElementNS(xa, e) : t === "mathml" ? st.createElementNS(Sa, e) : s ? st.createElement(e, { is: s }) : st.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => st.createTextNode(e),
  createComment: (e) => st.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => st.querySelector(e),
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
      Ii.innerHTML = uo(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ii.content;
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
}, ft = "transition", Xt = "animation", bs = /* @__PURE__ */ Symbol("_vtc"), fo = {
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
}, Ca = /* @__PURE__ */ ye(
  {},
  Or,
  fo
), Ia = (e) => (e.displayName = "Transition", e.props = Ca, e), Ea = /* @__PURE__ */ Ia(
  (e, { slots: t }) => ba(Sl, Ta(e), t)
), xt = (e, t = []) => {
  V(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Ei = (e) => e ? V(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ta(e) {
  const t = {};
  for (const _ in e)
    _ in fo || (t[_] = e[_]);
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
    appearActiveClass: d = o,
    appearToClass: u = l,
    leaveFromClass: h = `${s}-leave-from`,
    leaveActiveClass: v = `${s}-leave-active`,
    leaveToClass: m = `${s}-leave-to`
  } = e, I = Aa(i), y = I && I[0], L = I && I[1], {
    onBeforeEnter: F,
    onEnter: U,
    onEnterCancelled: G,
    onLeave: M,
    onLeaveCancelled: K,
    onBeforeAppear: de = F,
    onAppear: le = U,
    onAppearCancelled: J = G
  } = t, S = (_, R, Z, me) => {
    _._enterCancelled = me, St(_, R ? u : l), St(_, R ? d : o), Z && Z();
  }, O = (_, R) => {
    _._isLeaving = !1, St(_, h), St(_, m), St(_, v), R && R();
  }, W = (_) => (R, Z) => {
    const me = _ ? le : U, se = () => S(R, _, Z);
    xt(me, [R, se]), Ti(() => {
      St(R, _ ? a : r), tt(R, _ ? u : l), Ei(me) || Ai(R, n, y, se);
    });
  };
  return ye(t, {
    onBeforeEnter(_) {
      xt(F, [_]), tt(_, r), tt(_, o);
    },
    onBeforeAppear(_) {
      xt(de, [_]), tt(_, a), tt(_, d);
    },
    onEnter: W(!1),
    onAppear: W(!0),
    onLeave(_, R) {
      _._isLeaving = !0;
      const Z = () => O(_, R);
      tt(_, h), _._enterCancelled ? (tt(_, v), Ri(_)) : (Ri(_), tt(_, v)), Ti(() => {
        _._isLeaving && (St(_, h), tt(_, m), Ei(M) || Ai(_, n, L, Z));
      }), xt(M, [_, Z]);
    },
    onEnterCancelled(_) {
      S(_, !1, void 0, !0), xt(G, [_]);
    },
    onAppearCancelled(_) {
      S(_, !0, void 0, !0), xt(J, [_]);
    },
    onLeaveCancelled(_) {
      O(_), xt(K, [_]);
    }
  });
}
function Aa(e) {
  if (e == null)
    return null;
  if (re(e))
    return [bn(e.enter), bn(e.leave)];
  {
    const t = bn(e);
    return [t, t];
  }
}
function bn(e) {
  return To(e);
}
function tt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[bs] || (e[bs] = /* @__PURE__ */ new Set())).add(t);
}
function St(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[bs];
  s && (s.delete(t), s.size || (e[bs] = void 0));
}
function Ti(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ma = 0;
function Ai(e, t, s, n) {
  const i = e._endId = ++Ma, r = () => {
    i === e._endId && n();
  };
  if (s != null)
    return setTimeout(r, s);
  const { type: o, timeout: l, propCount: a } = Pa(e, t);
  if (!o)
    return n();
  const d = o + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(d, v), r();
  }, v = (m) => {
    m.target === e && ++u >= a && h();
  };
  setTimeout(() => {
    u < a && h();
  }, l + 1), e.addEventListener(d, v);
}
function Pa(e, t) {
  const s = window.getComputedStyle(e), n = (I) => (s[I] || "").split(", "), i = n(`${ft}Delay`), r = n(`${ft}Duration`), o = Mi(i, r), l = n(`${Xt}Delay`), a = n(`${Xt}Duration`), d = Mi(l, a);
  let u = null, h = 0, v = 0;
  t === ft ? o > 0 && (u = ft, h = o, v = r.length) : t === Xt ? d > 0 && (u = Xt, h = d, v = a.length) : (h = Math.max(o, d), u = h > 0 ? o > d ? ft : Xt : null, v = u ? u === ft ? r.length : a.length : 0);
  const m = u === ft && /\b(?:transform|all)(?:,|$)/.test(
    n(`${ft}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: v,
    hasTransform: m
  };
}
function Mi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => Pi(s) + Pi(e[n])));
}
function Pi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ri(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ra(e, t, s) {
  const n = e[bs];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Li = /* @__PURE__ */ Symbol("_vod"), La = /* @__PURE__ */ Symbol("_vsh"), $a = /* @__PURE__ */ Symbol(""), ka = /(?:^|;)\s*display\s*:/;
function Oa(e, t, s) {
  const n = e.style, i = he(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (he(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && es(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && es(n, o, "");
    for (const o in s) {
      o === "display" && (r = !0);
      const l = s[o];
      l != null ? Na(
        e,
        o,
        !he(t) && t ? t[o] : void 0,
        l
      ) || es(n, o, l) : es(n, o, "");
    }
  } else if (i) {
    if (t !== s) {
      const o = n[$a];
      o && (s += ";" + o), n.cssText = s, r = ka.test(s);
    }
  } else t && e.removeAttribute("style");
  Li in e && (e[Li] = r ? n.display : "", e[La] && (n.display = "none"));
}
const $i = /\s*!important$/;
function es(e, t, s) {
  if (V(s))
    s.forEach((n) => es(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Da(e, t);
    $i.test(s) ? e.setProperty(
      mt(n),
      s.replace($i, ""),
      "important"
    ) : e[n] = s;
  }
}
const ki = ["Webkit", "Moz", "ms"], _n = {};
function Da(e, t) {
  const s = _n[t];
  if (s)
    return s;
  let n = Ue(t);
  if (n !== "filter" && n in e)
    return _n[t] = n;
  n = nr(n);
  for (let i = 0; i < ki.length; i++) {
    const r = ki[i] + n;
    if (r in e)
      return _n[t] = r;
  }
  return t;
}
function Na(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && he(n) && s === n;
}
const Oi = "http://www.w3.org/1999/xlink";
function Di(e, t, s, n, i, r = $o(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Oi, t.slice(6, t.length)) : e.setAttributeNS(Oi, t, s) : s == null || r && !rr(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : De(s) ? String(s) : s
  );
}
function Ni(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? uo(s) : s);
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
    l === "boolean" ? s = rr(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Ft(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Fa(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Fi = /* @__PURE__ */ Symbol("_vei");
function Ua(e, t, s, n, i = null) {
  const r = e[Fi] || (e[Fi] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [l, a] = Va(t);
    if (n) {
      const d = r[t] = Wa(
        n,
        i
      );
      Ft(e, l, d, a);
    } else o && (Fa(e, l, o, a), r[t] = void 0);
  }
}
const ja = /(Once|Passive|Capture)$/, Ha = /^on:?(?:Once|Passive|Capture)$/;
function Va(e) {
  let t, s;
  for (; (s = e.match(ja)) && !Ha.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : mt(e.slice(2)), t];
}
let xn = 0;
const Ba = /* @__PURE__ */ Promise.resolve(), Ka = () => xn || (Ba.then(() => xn = 0), xn = Date.now());
function Wa(e, t) {
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
      for (let a = 0; a < o.length && !n._stopped; a++) {
        const d = o[a];
        d && Ne(
          d,
          t,
          5,
          l
        );
      }
    } else
      Ne(
        i,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = Ka(), s;
}
const Ui = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, za = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? Ra(e, n, o) : t === "style" ? Oa(e, s, n) : zs(t) ? Js(t) || Ua(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ja(e, t, n, o)) ? (Ni(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Di(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ga(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !he(n))) ? Ni(e, Ue(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Di(e, t, n, o));
};
function Ja(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ui(t) && q(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ui(t) && he(s) ? !1 : t in e;
}
function Ga(e, t) {
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
  return V(t) ? (s) => Ls(t, s) : t;
};
function qa(e) {
  e.target.composing = !0;
}
function Hi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Sn = /* @__PURE__ */ Symbol("_assign");
function Vi(e, t, s) {
  return t && (e = e.trim()), s && (e = jn(e)), e;
}
const ts = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[Sn] = ji(i);
    const r = n || i.props && i.props.type === "number";
    Ft(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Sn](Vi(e.value, s, r));
    }), (s || r) && Ft(e, "change", () => {
      e.value = Vi(e.value, s, r);
    }), t || (Ft(e, "compositionstart", qa), Ft(e, "compositionend", Hi), Ft(e, "change", Hi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: r } }, o) {
    if (e[Sn] = ji(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? jn(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === a) || (e.value = a);
  }
}, Ya = ["ctrl", "shift", "alt", "meta"], Xa = {
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
  exact: (e, t) => Ya.some((s) => e[`${s}Key`] && !t.includes(s))
}, It = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = Xa[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  });
}, Za = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ho = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (i) => {
    if (!("key" in i))
      return;
    const r = mt(i.key);
    if (t.some(
      (o) => o === r || Za[o] === r
    ))
      return e(i);
  });
}, Qa = /* @__PURE__ */ ye({ patchProp: za }, wa);
let Bi;
function ec() {
  return Bi || (Bi = ta(Qa));
}
const po = (...e) => {
  const t = ec().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = sc(n);
    if (!i) return;
    const r = t._component;
    !q(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = s(i, !1, tc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function tc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function sc(e) {
  return he(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let go;
const an = (e) => go = e, mo = (
  /* istanbul ignore next */
  Symbol()
);
function Dn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var us;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(us || (us = {}));
function nc() {
  const e = cr(!0), t = e.run(() => /* @__PURE__ */ Ce({}));
  let s = [], n = [];
  const i = Gn({
    install(r) {
      an(i), i._a = r, r.provide(mo, i), r.config.globalProperties.$pinia = i, n.forEach((o) => s.push(o)), n = [];
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
const vo = () => {
};
function Ki(e, t, s, n = vo) {
  e.push(t);
  const i = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), n());
  };
  return !s && ur() && Oo(i), i;
}
function Ot(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const ic = (e) => e(), Wi = Symbol(), wn = Symbol();
function Nn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    Dn(i) && Dn(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ pe(n) && !/* @__PURE__ */ at(n) ? e[s] = Nn(i, n) : e[s] = n;
  }
  return e;
}
const rc = (
  /* istanbul ignore next */
  Symbol()
);
function oc(e) {
  return !Dn(e) || !e.hasOwnProperty(rc);
}
const { assign: dt } = Object;
function lc(e) {
  return !!(/* @__PURE__ */ pe(e) && e.effect);
}
function ac(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t, l = s.state.value[e];
  let a;
  function d() {
    l || (s.state.value[e] = i ? i() : {});
    const u = /* @__PURE__ */ il(s.state.value[e]);
    return dt(u, r, Object.keys(o || {}).reduce((h, v) => (h[v] = Gn(Pt(() => {
      an(s);
      const m = s._s.get(e);
      return o[v].call(m, m);
    })), h), {}));
  }
  return a = yo(e, d, t, s, n, !0), a;
}
function yo(e, t, s = {}, n, i, r) {
  let o;
  const l = dt({ actions: {} }, s), a = { deep: !0 };
  let d, u, h = [], v = [], m;
  const I = n.state.value[e];
  !r && !I && (n.state.value[e] = {});
  let y;
  function L(J) {
    let S;
    d = u = !1, typeof J == "function" ? (J(n.state.value[e]), S = {
      type: us.patchFunction,
      storeId: e,
      events: m
    }) : (Nn(n.state.value[e], J), S = {
      type: us.patchObject,
      payload: J,
      storeId: e,
      events: m
    });
    const O = y = Symbol();
    it().then(() => {
      y === O && (d = !0);
    }), u = !0, Ot(h, S, n.state.value[e]);
  }
  const F = r ? function() {
    const { state: S } = s, O = S ? S() : {};
    this.$patch((W) => {
      dt(W, O);
    });
  } : (
    /* istanbul ignore next */
    vo
  );
  function U() {
    o.stop(), h = [], v = [], n._s.delete(e);
  }
  const G = (J, S = "") => {
    if (Wi in J)
      return J[wn] = S, J;
    const O = function() {
      an(n);
      const W = Array.from(arguments), _ = [], R = [];
      function Z(Y) {
        _.push(Y);
      }
      function me(Y) {
        R.push(Y);
      }
      Ot(v, {
        args: W,
        name: O[wn],
        store: K,
        after: Z,
        onError: me
      });
      let se;
      try {
        se = J.apply(this && this.$id === e ? this : K, W);
      } catch (Y) {
        throw Ot(R, Y), Y;
      }
      return se instanceof Promise ? se.then((Y) => (Ot(_, Y), Y)).catch((Y) => (Ot(R, Y), Promise.reject(Y))) : (Ot(_, se), se);
    };
    return O[Wi] = !0, O[wn] = S, O;
  }, M = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: Ki.bind(null, v),
    $patch: L,
    $reset: F,
    $subscribe(J, S = {}) {
      const O = Ki(h, J, S.detached, () => W()), W = o.run(() => pt(() => n.state.value[e], (_) => {
        (S.flush === "sync" ? u : d) && J({
          storeId: e,
          type: us.direct,
          events: m
        }, _);
      }, dt({}, a, S)));
      return O;
    },
    $dispose: U
  }, K = /* @__PURE__ */ Qs(M);
  n._s.set(e, K);
  const le = (n._a && n._a.runWithContext || ic)(() => n._e.run(() => (o = cr()).run(() => t({ action: G }))));
  for (const J in le) {
    const S = le[J];
    if (/* @__PURE__ */ pe(S) && !lc(S) || /* @__PURE__ */ at(S))
      r || (I && oc(S) && (/* @__PURE__ */ pe(S) ? S.value = I[J] : Nn(S, I[J])), n.state.value[e][J] = S);
    else if (typeof S == "function") {
      const O = G(S, J);
      le[J] = O, l.actions[J] = S;
    }
  }
  return dt(K, le), dt(/* @__PURE__ */ ee(K), le), Object.defineProperty(K, "$state", {
    get: () => n.state.value[e],
    set: (J) => {
      L((S) => {
        dt(S, J);
      });
    }
  }), n._p.forEach((J) => {
    dt(K, o.run(() => J({
      store: K,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), I && r && s.hydrate && s.hydrate(K.$state, I), d = !0, u = !0, K;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function cn(e, t, s) {
  let n, i;
  const r = typeof t == "function";
  typeof e == "string" ? (n = e, i = r ? s : t) : (i = e, n = e.id);
  function o(l, a) {
    const d = gl();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (d ? rs(mo, null) : null), l && an(l), l = go, l._s.has(n) || (r ? yo(n, t, i, l) : ac(n, i, l)), l._s.get(n);
  }
  return o.$id = n, o;
}
function cc() {
  return [
    { id: "netease", enabled: !0, priority: 0, config: { baseURL: "" } },
    { id: "local", enabled: !0, priority: 1, config: {} },
    { id: "custom", enabled: !1, priority: 2, config: { searchURL: "", resolveURL: "" } }
  ];
}
function Cn() {
  return {
    volume: 65,
    playMode: "list",
    position: null,
    widgetMode: "dock",
    autoPlayOnNewCue: !0,
    providers: cc(),
    customCueRules: []
  };
}
const we = /* @__PURE__ */ cn("settings", {
  state: () => ({
    settings: Cn(),
    storage: null
  }),
  getters: {
    defaults: () => Cn()
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = Cn();
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
class uc {
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
const zi = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function fc(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const i = new RegExp(zi.source, "g"), r = [];
    let o;
    for (; (o = i.exec(n)) !== null; ) {
      const a = parseInt(o[1], 10), d = parseInt(o[2], 10), u = o[3] ?? "", h = u ? parseInt(u.padEnd(3, "0"), 10) : 0;
      r.push(a * 60 + d + h / 1e3);
    }
    if (r.length === 0) continue;
    const l = n.replace(new RegExp(zi.source, "g"), "").trim();
    if (l !== "")
      for (const a of r)
        s.push({ time: a, text: l });
  }
  s.sort((n, i) => n.time - i.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function Ji(e, t) {
  if (e.length === 0) return null;
  let s = null;
  for (const n of e)
    if (n.time <= t)
      s = n;
    else
      break;
  return s;
}
class dc {
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
      return this.ctx().extensionSettings[Ut] ?? null;
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
      s.extensionSettings[Ut] = t, s.saveSettingsDebounced();
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
    return `${Ut}__settings`;
  }
  cachePrefix() {
    return `${Ut}:cache:`;
  }
  cacheKey(t) {
    return `${this.cachePrefix()}${t}`;
  }
}
function hc() {
  return new dc();
}
const Ut = "st-music-player", Gi = "stmp_cursor", qi = "stmp_userlist";
class pc {
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
class gc {
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
        i.removeEventListener("loadedmetadata", l), i.removeEventListener("error", a), clearTimeout(d), i.src = "";
      }, l = () => {
        r || (r = !0, o(), n(!0));
      }, a = () => {
        r || (r = !0, o(), n(!1));
      }, d = setTimeout(() => {
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
class mc {
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
class vc {
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
function bo(e) {
  const s = e.filter((n) => n.enabled).sort((n, i) => n.priority - i.priority).map((n) => {
    const i = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new gc({ baseURL: i.baseURL, apiBase: i.apiBase });
      case "local":
        return new mc({
          storage: i.storage ? i.storage : void 0
        });
      case "custom":
        return new vc({
          searchURL: i.searchURL,
          resolveURL: i.resolveURL
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new pc(s);
}
const yc = {
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
let Dt = null;
function bc() {
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
  return bc().startsWith("zh") ? yc[e] ?? e : e;
}
function Ps() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const ws = /* @__PURE__ */ cn("playlist", {
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
      return we().settings.playMode;
    }
  },
  actions: {
    init(e) {
      this.chatIndexer = e;
    },
    setChatId(e) {
      this.chatId = e, this.list = this.list.filter((n) => n.source !== "chat"), this.loadFromStorage();
      const s = we().storage;
      if (s) {
        const n = s.getMetadata(Gi);
        n && n.chatId === e && this.chatIndexer?.setCursor(e, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const t = we().storage;
      if (!t || !this.chatId) return;
      const s = t.getMetadata(qi);
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
        id: Ps(),
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
        id: Ps(),
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
        id: Ps(),
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
      const s = we(), n = s.storage;
      if (!n) return;
      let i = null;
      const r = bo(s.settings.providers);
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
        console.warn(`[playlist] resolve failed for "${t.song}"`), typeof toastr < "u" && toastr.warning(`${D("Cannot play")}: ${t.song}`);
        return;
      }
      await Lt().loadAndPlay(i);
    },
    handleNewCues(e) {
      if (e.length === 0) return;
      const t = we();
      let s = null;
      for (const n of e)
        for (const i of n.cues) {
          const r = {
            id: Ps(),
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
      const t = we(), s = this.chatIndexer.scanMessage(
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
      const t = we().storage;
      if (!t || !this.chatId) return;
      const s = this.list.filter((n) => n.source === "user");
      t.setMetadata(qi, s);
    },
    getCursor() {
      return !this.chatIndexer || !this.chatId ? -1 : this.chatIndexer.getCursor(this.chatId);
    },
    setCursor(e) {
      if (!this.chatIndexer || !this.chatId) return;
      this.chatIndexer.setCursor(this.chatId, e);
      const s = we().storage;
      s && s.setMetadata(Gi, {
        chatId: this.chatId,
        lastScannedMessageId: e,
        updatedAt: Date.now()
      });
    }
  }
}), Lt = /* @__PURE__ */ cn("player", {
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
      const e = new uc();
      this.audioEngine = e;
      const t = Lt();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = Ji(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        t.currentLyricIndex = n;
      }), e.on("ended", () => {
        ws().next();
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
      this.volume = e, this.audioEngine?.setVolume(e / 100), we().setVolume(e);
    },
    updateLyrics(e) {
      this.lyrics = fc(e), this.currentLyricIndex = -1;
    },
    getActiveLyric() {
      return Ji(this.lyrics, this.currentTime);
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), _c = /* @__PURE__ */ cn("search", {
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
}), xc = ["width", "height"], Sc = {
  key: 0,
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}, wc = {
  key: 10,
  points: "6 9 12 15 18 9"
}, Cc = {
  key: 11,
  points: "18 15 12 9 6 15"
}, Ic = {
  key: 15,
  points: "20 6 9 17 4 12"
}, Ec = /* @__PURE__ */ Rt({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (N(), H("svg", {
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
      e.name === "play" ? (N(), H("polygon", Sc)) : e.name === "pause" ? (N(), H(te, { key: 1 }, [
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
      ], 64)) : e.name === "prev" ? (N(), H(te, { key: 2 }, [
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
      ], 64)) : e.name === "next" ? (N(), H(te, { key: 3 }, [
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
      ], 64)) : e.name === "repeat" ? (N(), H(te, { key: 4 }, [
        s[6] || (s[6] = g("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = g("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = g("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = g("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (N(), H(te, { key: 5 }, [
        s[10] || (s[10] = Ms('<polyline points="17 1 21 5 17 9" data-v-4bfc4099></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-4bfc4099></path><polyline points="7 23 3 19 7 15" data-v-4bfc4099></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-4bfc4099></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-4bfc4099>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (N(), H(te, { key: 6 }, [
        s[11] || (s[11] = Ms('<polyline points="16 3 21 3 21 8" data-v-4bfc4099></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-4bfc4099></line><polyline points="21 16 21 21 16 21" data-v-4bfc4099></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-4bfc4099></line><line x1="4" y1="4" x2="9" y2="9" data-v-4bfc4099></line>', 5))
      ], 64)) : e.name === "search" ? (N(), H(te, { key: 7 }, [
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
      ], 64)) : e.name === "plus" ? (N(), H(te, { key: 8 }, [
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
      ], 64)) : e.name === "x" ? (N(), H(te, { key: 9 }, [
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
      ], 64)) : e.name === "chevron-down" ? (N(), H("polyline", wc)) : e.name === "chevron-up" ? (N(), H("polyline", Cc)) : e.name === "music" ? (N(), H(te, { key: 12 }, [
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
      ], 64)) : e.name === "volume" ? (N(), H(te, { key: 13 }, [
        s[21] || (s[21] = g("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = g("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = g("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (N(), H(te, { key: 14 }, [
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
      ], 64)) : e.name === "check" ? (N(), H("polyline", Ic)) : e.name === "loader" ? (N(), H(te, { key: 16 }, [
        s[27] || (s[27] = Ms('<line x1="12" y1="2" x2="12" y2="6" data-v-4bfc4099></line><line x1="12" y1="18" x2="12" y2="22" data-v-4bfc4099></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-4bfc4099></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-4bfc4099></line><line x1="2" y1="12" x2="6" y2="12" data-v-4bfc4099></line><line x1="18" y1="12" x2="22" y2="12" data-v-4bfc4099></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-4bfc4099></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-4bfc4099></line>', 8))
      ], 64)) : e.name === "list-music" ? (N(), H(te, { key: 17 }, [
        s[28] || (s[28] = Ms('<path d="M3 12h11" data-v-4bfc4099></path><path d="M3 6h11" data-v-4bfc4099></path><path d="M3 18h7" data-v-4bfc4099></path><path d="M16 8v13" data-v-4bfc4099></path><circle cx="14" cy="21" r="2" data-v-4bfc4099></circle><path d="M16 8l5-2v3" data-v-4bfc4099></path>', 6))
      ], 64)) : Fe("", !0)
    ], 8, xc));
  }
}), $t = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, _e = /* @__PURE__ */ $t(Ec, [["__scopeId", "data-v-4bfc4099"]]), Tc = { class: "stmp-collapsed-bar" }, Ac = { class: "stmp-collapsed-title" }, Mc = ["aria-label"], Pc = /* @__PURE__ */ Rt({
  __name: "CollapsedBar",
  setup(e) {
    const t = Lt(), s = Pt(() => t.currentTrack?.name || D("No Song"));
    return (n, i) => (N(), H("div", Tc, [
      ie(_e, {
        name: "music",
        size: 14,
        class: "stmp-collapsed-icon"
      }),
      g("span", Ac, X(s.value), 1),
      g("button", {
        class: "stmp-icon-btn",
        "aria-label": E(t).isPlaying ? E(D)("Pause") : E(D)("Play"),
        onClick: i[0] || (i[0] = It((r) => E(t).togglePlay(), ["stop"]))
      }, [
        ie(_e, {
          name: E(t).isPlaying ? "pause" : "play",
          size: 16
        }, null, 8, ["name"])
      ], 8, Mc)
    ]));
  }
}), Rc = /* @__PURE__ */ $t(Pc, [["__scopeId", "data-v-d0f4f061"]]), Lc = { class: "stmp-playlist" }, $c = { class: "stmp-upload-area" }, kc = ["aria-label"], Oc = {
  key: 0,
  class: "stmp-empty"
}, Dc = { class: "stmp-group-label" }, Nc = ["onClick"], Fc = { class: "stmp-item-index" }, Uc = { class: "stmp-item-info" }, jc = { class: "stmp-item-song" }, Hc = {
  key: 0,
  class: "stmp-item-artist"
}, Vc = ["onClick"], Bc = /* @__PURE__ */ Rt({
  __name: "PlaylistView",
  setup(e) {
    const t = ws(), s = we(), n = /* @__PURE__ */ Ce(null), i = () => {
      n.value?.click();
    }, r = async (u) => {
      const h = u.target;
      if (!h.files || !h.files[0]) return;
      const v = h.files[0], m = `stmp:audio:${Date.now()}-${v.name}`, I = s.storage;
      I && (await I.setBlob(m, v), t.addLocalFile(v.name, m)), h.value = "";
    }, o = Pt(() => {
      const u = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((h, v) => {
        u[h.source] && u[h.source].push({ index: v, item: h });
      }), u;
    }), l = {
      chat: D("From Chat"),
      user: D("My List"),
      local: D("Local Files")
    };
    function a(u) {
      t.play(u);
    }
    function d(u) {
      t.removeItem(u);
    }
    return (u, h) => (N(), H("div", Lc, [
      g("div", $c, [
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
          "aria-label": E(D)("Add local file"),
          onClick: i
        }, " + " + X(E(D)("Add local file")), 9, kc)
      ]),
      E(t).isEmpty ? (N(), H("div", Oc, X(E(D)("No Songs")), 1)) : (N(), H(te, { key: 1 }, Tt(["chat", "user", "local"], (v) => g("div", {
        key: v,
        class: "stmp-group"
      }, [
        o.value[v].length ? (N(), H(te, { key: 0 }, [
          g("div", Dc, X(l[v]), 1),
          (N(!0), H(te, null, Tt(o.value[v], (m) => (N(), H("div", {
            key: m.item.id,
            class: Ie(["stmp-item", { active: m.index === E(t).currentIndex }]),
            onClick: (I) => a(m.index)
          }, [
            g("span", Fc, X(m.index + 1), 1),
            g("div", Uc, [
              g("span", jc, X(m.item.song), 1),
              m.item.artist ? (N(), H("span", Hc, X(m.item.artist), 1)) : Fe("", !0)
            ]),
            g("button", {
              class: "stmp-item-del",
              onClick: It((I) => d(m.index), ["stop"])
            }, [
              ie(_e, {
                name: "x",
                size: 14
              })
            ], 8, Vc)
          ], 10, Nc))), 128))
        ], 64)) : Fe("", !0)
      ])), 64))
    ]));
  }
}), Kc = /* @__PURE__ */ $t(Bc, [["__scopeId", "data-v-6157de27"]]), Wc = { class: "stmp-search" }, zc = { class: "stmp-search-bar" }, Jc = ["placeholder"], Gc = ["disabled"], qc = {
  key: 0,
  class: "stmp-search-error"
}, Yc = ["aria-label"], Xc = {
  key: 1,
  class: "stmp-search-loading"
}, Zc = {
  key: 2,
  class: "stmp-search-empty"
}, Qc = {
  key: 3,
  class: "stmp-search-hint"
}, eu = {
  key: 4,
  class: "stmp-results"
}, tu = ["onClick"], su = { class: "stmp-result-name" }, nu = {
  key: 0,
  class: "stmp-result-artist"
}, iu = ["aria-label", "onClick"], ru = /* @__PURE__ */ Rt({
  __name: "SearchView",
  setup(e) {
    const t = _c(), s = ws(), n = we(), i = /* @__PURE__ */ Ce(t.keyword), r = /* @__PURE__ */ Ce(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ Ce(null);
    async function l() {
      t.setKeyword(i.value);
      const m = bo(n.settings.providers);
      await t.search(m);
    }
    const a = () => {
      l();
    };
    function d(m) {
      const I = m.provider + m.id;
      if (o.value === I) return;
      o.value = I;
      const y = s.list.length;
      s.addFromSearch(m);
      const L = s.list.length - 1;
      L >= y && s.play(L), setTimeout(() => {
        r.value.add(I), o.value = null;
      }, 600);
    }
    function u(m) {
      const I = m.provider + m.id;
      r.value.has(I) || (s.addFromSearch(m), r.value.add(I));
    }
    function h(m) {
      return r.value.has(m.provider + m.id);
    }
    function v(m) {
      return o.value === m.provider + m.id;
    }
    return (m, I) => (N(), H("div", Wc, [
      g("div", zc, [
        Zt(g("input", {
          "onUpdate:modelValue": I[0] || (I[0] = (y) => i.value = y),
          class: "stmp-search-input",
          placeholder: E(D)("Search Song..."),
          onKeydown: ho(l, ["enter"])
        }, null, 40, Jc), [
          [ts, i.value]
        ]),
        g("button", {
          class: "stmp-icon-btn",
          disabled: E(t).isSearching,
          onClick: l
        }, [
          E(t).isSearching ? (N(), Mt(_e, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (N(), Mt(_e, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, Gc)
      ]),
      E(t).error ? (N(), H("div", qc, [
        g("span", null, X(E(t).error), 1),
        g("button", {
          class: "stmp-retry-btn",
          "aria-label": E(D)("Retry"),
          onClick: a
        }, X(E(D)("Retry")), 9, Yc)
      ])) : Fe("", !0),
      E(t).isSearching ? (N(), H("div", Xc, X(E(D)("Searching...")), 1)) : i.value && !E(t).results.length ? (N(), H("div", Zc, X(E(D)("No results")), 1)) : !i.value && !E(t).results.length ? (N(), H("div", Qc, X(E(D)("Type a song name to search")), 1)) : Fe("", !0),
      E(t).results.length ? (N(), H("div", eu, [
        (N(!0), H(te, null, Tt(E(t).results, (y) => (N(), H("div", {
          key: y.provider + y.id,
          class: Ie(["stmp-result", { "stmp-result-playing": v(y) }])
        }, [
          g("div", {
            class: "stmp-result-info",
            onClick: (L) => d(y)
          }, [
            g("span", su, X(y.name), 1),
            y.artist ? (N(), H("span", nu, X(y.artist), 1)) : Fe("", !0)
          ], 8, tu),
          g("button", {
            class: Ie(["stmp-icon-btn stmp-result-add", { added: h(y) }]),
            "aria-label": h(y) ? E(D)("Added") : E(D)("Add to list"),
            onClick: It((L) => u(y), ["stop"])
          }, [
            ie(_e, {
              name: h(y) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, iu)
        ], 2))), 128))
      ])) : Fe("", !0)
    ]));
  }
}), ou = /* @__PURE__ */ $t(ru, [["__scopeId", "data-v-a8d156af"]]), lu = { class: "stmp-panel" }, au = { class: "stmp-topbar stmp-drag-handle" }, cu = ["aria-label"], uu = { class: "stmp-cover-large" }, fu = ["src"], du = {
  key: 1,
  class: "stmp-cover-placeholder"
}, hu = { class: "stmp-track-name" }, pu = { class: "stmp-track-artist" }, gu = { class: "stmp-lyric-header" }, mu = { class: "stmp-track-name" }, vu = { class: "stmp-track-artist" }, yu = {
  key: 0,
  class: "stmp-lyric-empty"
}, bu = { class: "stmp-progress" }, _u = ["value"], xu = { class: "stmp-time" }, Su = { class: "stmp-controls" }, wu = { class: "stmp-ctrl-side stmp-search-side" }, Cu = ["aria-label"], Iu = ["aria-label"], Eu = ["aria-label"], Tu = ["aria-label"], Au = ["aria-label"], Mu = ["aria-label"], Pu = { class: "stmp-ctrl-side stmp-volume-side" }, Ru = ["aria-label"], Lu = ["value"], $u = {
  key: 0,
  class: "stmp-overlay"
}, ku = { class: "stmp-overlay-header" }, Ou = { class: "stmp-overlay-title" }, Du = ["aria-label"], Nu = { class: "stmp-overlay-body" }, Fu = /* @__PURE__ */ Rt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = Lt(), s = ws(), n = we(), i = /* @__PURE__ */ Ce("cover"), r = /* @__PURE__ */ Ce(null), o = /* @__PURE__ */ Ce(!1), l = /* @__PURE__ */ Ce(!1);
    let a = null;
    const d = Pt(() => t.currentTrack?.cover || ""), u = () => {
      o.value = !0;
    };
    pt(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const h = Pt(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), v = /* @__PURE__ */ Ce(0), m = /* @__PURE__ */ Ce([]), I = /* @__PURE__ */ Ce(null);
    function y(_, R) {
      _ && (m.value[R] = _);
    }
    async function L() {
      await it();
      const _ = t.currentLyricIndex, R = I.value;
      if (!R || _ < 0) {
        v.value = 0;
        return;
      }
      const Z = m.value[_];
      if (!Z) return;
      const me = R.clientHeight, se = Z.offsetTop, Y = Z.offsetHeight;
      v.value = se - me / 2 + Y / 2;
    }
    pt(() => t.currentLyricIndex, L), pt(() => t.lyrics, () => {
      m.value = [], L();
    });
    function F(_) {
      const R = Math.floor(_ / 60), Z = Math.floor(_ % 60);
      return R + ":" + Z.toString().padStart(2, "0");
    }
    function U(_) {
      const R = _.target;
      t.seek(Number(R.value) / 100 * t.duration);
    }
    const G = ["list", "random", "single"], M = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function K() {
      const _ = n.settings.playMode, R = G.indexOf(_), Z = G[(R + 1) % G.length];
      n.setPlayMode(Z);
    }
    function de(_) {
      const R = _.target;
      t.setVolume(Number(R.value));
    }
    function le() {
      a && clearTimeout(a), l.value = !0;
    }
    function J() {
      a = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function S() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    function O(_) {
      r.value === _ ? r.value = null : r.value = _;
    }
    function W() {
      r.value = null;
    }
    return (_, R) => (N(), H("div", lu, [
      g("div", au, [
        R[7] || (R[7] = g("div", { class: "stmp-topbar-spacer" }, null, -1)),
        g("button", {
          class: "stmp-icon-btn",
          "aria-label": E(D)("Collapse panel"),
          onClick: R[0] || (R[0] = It((Z) => _.$emit("collapse"), ["stop"]))
        }, [
          ie(_e, {
            name: "chevron-down",
            size: 18
          })
        ], 8, cu)
      ]),
      g("div", {
        class: "stmp-display",
        onClick: R[1] || (R[1] = (Z) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        g("div", {
          class: Ie(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          g("div", uu, [
            d.value && !o.value ? (N(), H("img", {
              key: 0,
              src: d.value,
              alt: "cover",
              onError: u
            }, null, 40, fu)) : (N(), H("div", du, [
              ie(_e, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          g("div", hu, X(E(t).currentTrack?.name || E(D)("No Song")), 1),
          g("div", pu, X(E(t).currentTrack?.artist || " "), 1)
        ], 2),
        g("div", {
          class: Ie(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          g("div", gu, [
            g("div", mu, X(E(t).currentTrack?.name || E(D)("No Song")), 1),
            g("div", vu, X(E(t).currentTrack?.artist || " "), 1)
          ]),
          g("div", {
            ref_key: "lyricWindowRef",
            ref: I,
            class: "stmp-lyric-window"
          }, [
            E(t).lyrics.length === 0 ? (N(), H("div", yu, [
              ie(_e, {
                name: "music",
                size: 18
              })
            ])) : (N(), H("div", {
              key: 1,
              class: "stmp-lyric-scroll",
              style: Xs({ transform: `translateY(-${v.value}px)` })
            }, [
              (N(!0), H(te, null, Tt(E(t).lyrics, (Z, me) => (N(), H("div", {
                key: me,
                ref_for: !0,
                ref: (se) => y(se, me),
                class: Ie(["stmp-lyric-line", { "stmp-lyric-active": me === E(t).currentLyricIndex }])
              }, X(Z.text), 3))), 128))
            ], 4))
          ], 512)
        ], 2)
      ]),
      g("div", bu, [
        g("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: h.value,
          class: "stmp-range",
          onInput: U
        }, null, 40, _u),
        g("div", xu, [
          g("span", null, X(F(E(t).currentTime)), 1),
          g("span", null, X(F(E(t).duration)), 1)
        ])
      ]),
      g("div", Su, [
        g("div", wu, [
          g("button", {
            class: Ie(["stmp-ctrl-btn", { active: r.value === "search" }]),
            "aria-label": E(D)("Search"),
            onClick: R[2] || (R[2] = It((Z) => O("search"), ["stop"]))
          }, [
            ie(_e, {
              name: "search",
              size: 18
            })
          ], 10, Cu)
        ]),
        g("button", {
          class: "stmp-ctrl-btn",
          "aria-label": E(D)("Toggle play mode"),
          onClick: K
        }, [
          ie(_e, {
            name: M[E(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, Iu),
        g("button", {
          class: "stmp-ctrl-btn",
          "aria-label": E(D)("Previous"),
          onClick: R[3] || (R[3] = (Z) => E(s).prev())
        }, [
          ie(_e, {
            name: "prev",
            size: 18
          })
        ], 8, Eu),
        g("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": E(t).isPlaying ? E(D)("Pause") : E(D)("Play"),
          onClick: R[4] || (R[4] = (Z) => E(t).togglePlay())
        }, [
          ie(_e, {
            name: E(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Tu),
        g("button", {
          class: "stmp-ctrl-btn",
          "aria-label": E(D)("Next"),
          onClick: R[5] || (R[5] = (Z) => E(s).next())
        }, [
          ie(_e, {
            name: "next",
            size: 18
          })
        ], 8, Au),
        g("button", {
          class: Ie(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": E(D)("Playlist"),
          onClick: R[6] || (R[6] = It((Z) => O("list"), ["stop"]))
        }, [
          ie(_e, {
            name: "list-music",
            size: 18
          })
        ], 10, Mu),
        g("div", Pu, [
          g("div", {
            class: "stmp-volume-container",
            onMouseenter: le,
            onMouseleave: J
          }, [
            g("button", {
              class: "stmp-ctrl-btn",
              "aria-label": E(D)("Mute / Unmute"),
              onClick: S
            }, [
              ie(_e, {
                name: E(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, Ru),
            g("div", {
              class: Ie(["stmp-volume-popup", { show: l.value }])
            }, [
              g("input", {
                type: "range",
                min: "0",
                max: "100",
                value: E(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: de
              }, null, 40, Lu)
            ], 2)
          ], 32)
        ])
      ]),
      ie(Ea, { name: "stmp-overlay" }, {
        default: Rr(() => [
          r.value ? (N(), H("div", $u, [
            g("div", ku, [
              g("span", Ou, X(r.value === "list" ? E(D)("Playlist") : E(D)("Search")), 1),
              g("button", {
                class: "stmp-overlay-close",
                "aria-label": E(D)("Close"),
                onClick: It(W, ["stop"])
              }, [
                ie(_e, {
                  name: "x",
                  size: 16
                })
              ], 8, Du)
            ]),
            g("div", Nu, [
              r.value === "list" ? (N(), Mt(Kc, { key: 0 })) : (N(), Mt(ou, { key: 1 }))
            ])
          ])) : Fe("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Uu = /* @__PURE__ */ $t(Fu, [["__scopeId", "data-v-e36ce72b"]]), ju = /* @__PURE__ */ Rt({
  __name: "App",
  setup(e) {
    const t = we(), s = Lt(), n = /* @__PURE__ */ Ce(!1), i = /* @__PURE__ */ Ce(null);
    let r = null;
    const o = Pt(() => t.settings.widgetMode === "dock"), l = (S) => {
      S.key === "Escape" && (n.value = !1), S.key === " " && S.target === document.body && (S.preventDefault(), s.togglePlay());
    };
    let a = 0, d = 0, u = 0, h = 0, v = !1, m = !1, I = null, y = null;
    function L(S) {
      if (o.value) return;
      const O = S.target;
      if (O.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!O.closest(".stmp-drag-handle") || O.closest("button")) || !n.value && O.closest("button"))
        return;
      const W = i.value?.getBoundingClientRect();
      W && (a = S.clientX, d = S.clientY, u = W.left, h = W.top, v = !1, m = !0, i.value && (i.value.style.left = W.left + "px", i.value.style.top = W.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), I = F, y = U, document.addEventListener("pointermove", I), document.addEventListener("pointerup", y), S.preventDefault());
    }
    function F(S) {
      if (!i.value || !m) return;
      const O = S.clientX - a, W = S.clientY - d;
      (Math.abs(O) > 3 || Math.abs(W) > 3) && (v = !0);
      let _ = u + O, R = h + W;
      const Z = i.value.offsetWidth || 60, me = i.value.offsetHeight || 40, se = window.innerWidth - Z, Y = window.innerHeight - me;
      _ = Math.max(0, Math.min(_, se)), R = Math.max(0, Math.min(R, Y)), i.value.style.left = _ + "px", i.value.style.top = R + "px";
    }
    function U() {
      if (m = !1, I && document.removeEventListener("pointermove", I), y && document.removeEventListener("pointerup", y), I = null, y = null, !v) {
        le();
        return;
      }
      if (i.value) {
        const S = i.value.getBoundingClientRect();
        t.setPosition({ x: S.left, y: S.top }), n.value && it(() => G());
      }
    }
    function G() {
      if (!i.value) return;
      const S = i.value.getBoundingClientRect(), O = i.value.offsetWidth, W = i.value.offsetHeight;
      let _ = S.left, R = S.top;
      _ + O > window.innerWidth && (_ = window.innerWidth - O), R + W > window.innerHeight && (R = window.innerHeight - W), _ < 0 && (_ = 0), R < 0 && (R = 0), i.value.style.left = _ + "px", i.value.style.top = R + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: _, y: R });
    }
    function M() {
      if (!i.value || !o.value) return;
      const S = document.querySelector("#send_form");
      if (!S) return;
      const O = S.getBoundingClientRect(), W = i.value.offsetHeight || 38, _ = Math.max(80, O.top - 8);
      i.value.style.maxHeight = _ + "px";
      let R = O.top - Math.min(W, _);
      R < 4 && (R = 4), window.innerWidth <= 768 ? (i.value.style.left = O.left + "px", i.value.style.width = O.width + "px") : (i.value.style.left = O.left + "px", i.value.style.width = ""), i.value.style.top = R + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function K() {
      if (!i.value || o.value) return;
      const S = t.settings.position;
      S ? (i.value.style.left = S.x + "px", i.value.style.top = S.y + "px") : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
    }
    function de(S) {
      if (o.value && !n.value) {
        if (S.target.closest("button, input")) return;
        le();
      }
    }
    function le() {
      n.value = !n.value, it(() => {
        o.value ? M() : t.settings.position && G();
      });
    }
    pt(() => t.settings.widgetMode, (S) => {
      it(() => {
        S === "dock" ? M() : K();
      });
    }), Yn(() => {
      it(() => {
        o.value ? M() : K();
      }), i.value && typeof ResizeObserver < "u" && (r = new ResizeObserver(() => {
        o.value && M();
      }), r.observe(i.value)), window.addEventListener("resize", J), window.addEventListener("keydown", l);
    });
    function J() {
      o.value ? it(() => M()) : t.settings.position && it(() => G());
    }
    return Xn(() => {
      U(), r && (r.disconnect(), r = null), window.removeEventListener("resize", J), window.removeEventListener("keydown", l);
    }), (S, O) => (N(), H("div", {
      ref_key: "widgetRef",
      ref: i,
      class: Ie(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": o.value
      }]),
      onPointerdown: L,
      onClick: de
    }, [
      n.value ? (N(), Mt(Uu, {
        key: 1,
        onCollapse: le
      })) : (N(), Mt(Rc, { key: 0 }))
    ], 34));
  }
}), Hu = /* @__PURE__ */ $t(ju, [["__scopeId", "data-v-c4b5008e"]]), Vu = { class: "stmp-settings" }, Bu = { class: "stmp-setting-group" }, Ku = { class: "stmp-setting-label" }, Wu = { class: "stmp-setting-row" }, zu = ["checked", "onChange"], Ju = ["onUpdate:modelValue", "placeholder"], Gu = ["onUpdate:modelValue", "placeholder"], qu = ["onUpdate:modelValue", "placeholder"], Yu = { class: "stmp-setting-group" }, Xu = { class: "stmp-setting-label" }, Zu = ["value"], Qu = { class: "stmp-setting-group" }, ef = { class: "stmp-setting-label" }, tf = ["value"], sf = ["value"], nf = { class: "stmp-setting-group" }, rf = { class: "stmp-setting-label" }, of = { class: "stmp-mode-toggle" }, lf = { class: "stmp-setting-group" }, af = { class: "stmp-setting-row" }, cf = ["checked"], uf = { class: "stmp-setting-group" }, ff = { class: "stmp-setting-label" }, df = { class: "stmp-rules" }, hf = ["onClick"], pf = { class: "stmp-rule-add" }, gf = ["placeholder"], mf = { class: "stmp-setting-group" }, vf = { class: "stmp-setting-label" }, yf = { class: "stmp-data-btns" }, bf = ["aria-label"], _f = ["aria-label"], xf = ["aria-label"], Sf = /* @__PURE__ */ Rt({
  __name: "SettingsView",
  setup(e) {
    const t = we(), s = /* @__PURE__ */ Ce(""), n = [
      { value: "list", label: D("List Loop") },
      { value: "random", label: D("Random") },
      { value: "single", label: D("Single Loop") }
    ], i = {
      netease: D("NetEase"),
      local: D("Local Files"),
      custom: D("Custom API")
    };
    function r() {
      const I = s.value.trim();
      I && (t.addCustomCueRule(I), s.value = "");
    }
    function o(I) {
      t.removeCustomCueRule(I);
    }
    function l(I) {
      const y = I.target;
      t.setVolume(Number(y.value));
    }
    function a(I) {
      const y = I.target;
      t.setPlayMode(y.value);
    }
    function d(I) {
      const y = I.target;
      t.settings.autoPlayOnNewCue = y.checked, t.save();
    }
    const u = async () => {
      const I = t.storage;
      I && (await I.clearCache(), toastr.success(D("Cache cleared")));
    }, h = () => {
      const I = JSON.stringify(t.settings, null, 2), y = new Blob([I], { type: "application/json" }), L = URL.createObjectURL(y), F = document.createElement("a");
      F.href = L, F.download = "st-music-player-settings.json", F.click(), URL.revokeObjectURL(L);
    }, v = () => {
      const I = document.createElement("input");
      I.type = "file", I.accept = ".json", I.onchange = async (y) => {
        const L = y.target.files?.[0];
        if (!L) return;
        const F = await L.text();
        try {
          const U = JSON.parse(F);
          if (typeof U != "object" || U === null) throw new Error("Not an object");
          const G = ["volume", "playMode", "position", "widgetMode", "autoPlayOnNewCue", "providers", "customCueRules"], M = {};
          for (const K of G)
            K in U && (M[K] = U[K]);
          if (typeof M.volume != "number" || M.volume < 0 || M.volume > 100)
            throw new Error("Invalid volume");
          if (typeof M.playMode != "string" || !["list", "random", "single"].includes(M.playMode))
            throw new Error("Invalid playMode");
          if (M.providers && !Array.isArray(M.providers))
            throw new Error("Invalid providers");
          if (M.customCueRules && !Array.isArray(M.customCueRules))
            throw new Error("Invalid customCueRules");
          Object.assign(t.settings, M), t.save(), toastr.success(D("Data imported"));
        } catch (U) {
          console.error("Import failed", U), toastr.error(D("Import failed") + ": " + (U instanceof Error ? U.message : D("Invalid JSON")));
        }
      }, I.click();
    };
    function m(I) {
      const y = t.settings.providers.find((L) => L.id === I);
      y && (y.enabled = !y.enabled, t.save());
    }
    return (I, y) => (N(), H("div", Vu, [
      g("div", Bu, [
        g("div", Ku, X(E(D)("Providers")), 1),
        (N(!0), H(te, null, Tt(E(t).settings.providers, (L) => (N(), H("div", {
          key: L.id,
          class: "stmp-provider-config"
        }, [
          g("label", Wu, [
            g("span", null, X(i[L.id] || L.id), 1),
            g("input", {
              type: "checkbox",
              checked: L.enabled,
              onChange: (F) => m(L.id)
            }, null, 40, zu)
          ]),
          L.id === "netease" ? Zt((N(), H("input", {
            key: 0,
            class: "stmp-provider-input",
            "onUpdate:modelValue": (F) => L.config.baseURL = F,
            placeholder: E(D)("API baseURL"),
            onChange: y[0] || (y[0] = (F) => E(t).save())
          }, null, 40, Ju)), [
            [ts, L.config.baseURL]
          ]) : Fe("", !0),
          L.id === "custom" ? (N(), H(te, { key: 1 }, [
            Zt(g("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (F) => L.config.searchURL = F,
              placeholder: E(D)("Search URL"),
              onChange: y[1] || (y[1] = (F) => E(t).save())
            }, null, 40, Gu), [
              [ts, L.config.searchURL]
            ]),
            Zt(g("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (F) => L.config.resolveURL = F,
              placeholder: E(D)("Resolve URL"),
              onChange: y[2] || (y[2] = (F) => E(t).save())
            }, null, 40, qu), [
              [ts, L.config.resolveURL]
            ])
          ], 64)) : Fe("", !0)
        ]))), 128))
      ]),
      g("div", Yu, [
        g("div", Xu, X(E(D)("Default Volume")) + ": " + X(E(t).settings.volume), 1),
        g("input", {
          type: "range",
          min: "0",
          max: "100",
          value: E(t).settings.volume,
          class: "stmp-range",
          onInput: l
        }, null, 40, Zu)
      ]),
      g("div", Qu, [
        g("div", ef, X(E(D)("Default Play Mode")), 1),
        g("select", {
          class: "stmp-select",
          value: E(t).settings.playMode,
          onChange: a
        }, [
          (N(), H(te, null, Tt(n, (L) => g("option", {
            key: L.value,
            value: L.value
          }, X(L.label), 9, sf)), 64))
        ], 40, tf)
      ]),
      g("div", nf, [
        g("div", rf, X(E(D)("Widget Mode")), 1),
        g("div", of, [
          g("button", {
            class: Ie(["stmp-mode-btn", { active: E(t).settings.widgetMode === "dock" }]),
            onClick: y[3] || (y[3] = (L) => E(t).setWidgetMode("dock"))
          }, X(E(D)("Dock")), 3),
          g("button", {
            class: Ie(["stmp-mode-btn", { active: E(t).settings.widgetMode === "drag" }]),
            onClick: y[4] || (y[4] = (L) => E(t).setWidgetMode("drag"))
          }, X(E(D)("Drag")), 3)
        ])
      ]),
      g("div", lf, [
        g("div", af, [
          g("span", null, X(E(D)("Auto-play on new cue")), 1),
          g("input", {
            type: "checkbox",
            checked: E(t).settings.autoPlayOnNewCue,
            onChange: d
          }, null, 40, cf)
        ])
      ]),
      g("div", uf, [
        g("div", ff, X(E(D)("Custom Cue Rules (Regex)")), 1),
        g("div", df, [
          (N(!0), H(te, null, Tt(E(t).settings.customCueRules, (L, F) => (N(), H("div", {
            key: F,
            class: "stmp-rule"
          }, [
            g("code", null, X(L), 1),
            g("button", {
              class: "stmp-rule-del",
              onClick: (U) => o(F)
            }, "✕", 8, hf)
          ]))), 128))
        ]),
        g("div", pf, [
          Zt(g("input", {
            "onUpdate:modelValue": y[5] || (y[5] = (L) => s.value = L),
            class: "stmp-rule-input",
            placeholder: E(D)("Add regex rule..."),
            onKeydown: ho(r, ["enter"])
          }, null, 40, gf), [
            [ts, s.value]
          ]),
          g("button", {
            class: "stmp-rule-add-btn",
            onClick: r
          }, "+")
        ])
      ]),
      g("div", mf, [
        g("div", vf, X(E(D)("Data")), 1),
        g("div", yf, [
          g("button", {
            class: "stmp-data-btn",
            "aria-label": E(D)("Clear cache"),
            onClick: u
          }, X(E(D)("Clear cache")), 9, bf),
          g("button", {
            class: "stmp-data-btn",
            "aria-label": E(D)("Export data"),
            onClick: h
          }, X(E(D)("Export data")), 9, _f),
          g("button", {
            class: "stmp-data-btn",
            "aria-label": E(D)("Import data"),
            onClick: v
          }, X(E(D)("Import data")), 9, xf)
        ])
      ])
    ]));
  }
}), wf = /* @__PURE__ */ $t(Sf, [["__scopeId", "data-v-93244059"]]);
class Cf {
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
      const a = (...d) => {
        const u = l(d[0]);
        this.emit(o, u);
      };
      s.on(r, a), this.registered.push({ event: r, handler: a });
    };
    i(n.CHAT_CHANGED, "chat-changed", (r) => ({
      chatId: typeof r == "string" ? r : void 0
    })), i(n.GENERATION_ENDED, "message-generated", (r) => ({
      messageId: Rs(r)
    })), i(n.MESSAGE_UPDATED, "message-updated", (r) => ({
      messageId: Rs(r)
    })), i(n.MESSAGE_DELETED, "message-deleted", (r) => ({
      messageId: Rs(r)
    })), i(n.MESSAGE_SWIPED, "message-swiped", (r) => ({
      messageId: Rs(r)
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
function Rs(e) {
  if (e == null) return;
  const t = typeof e == "number" ? e : parseInt(String(e), 10);
  return Number.isFinite(t) ? t : void 0;
}
function If() {
  return new Cf();
}
const Ef = [
  /<bgm>当前bgm[:：](.+?) - (.+?)<\/bgm>/g,
  /<bgm>当前bgm[:：](.+?)<\/bgm>/g,
  /<bgm>(.+?) - (.+?)<\/bgm>/g,
  /<bgm>(.+?)<\/bgm>/g,
  /【BGM】(.+?)(?: - (.+?))?【\/BGM】/g,
  /\[music\](.+?)(?: - (.+?))?\[\/music\]/g
];
function Yi(e, t) {
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
function Xi(e, t = []) {
  const s = /* @__PURE__ */ new Map(), n = (i) => {
    s.has(i.index) || s.set(i.index, i);
  };
  for (const i of Ef)
    for (const r of Yi(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of Yi(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class Tf {
  constructor(t) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = t;
  }
  scanIncremental(t, s, n, i = []) {
    const r = [];
    for (let o = s; o <= n; o++) {
      const l = this.getChatMessage(o);
      if (l === void 0) continue;
      const a = Xi(l, i);
      if (a.length === 0) continue;
      const d = a.at(-1);
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
    const r = Xi(i, n), o = r.length > 0 ? r.at(-1) : null;
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
let Bt = null, nt = null, fs = null, ds = null, Kt = null, Ws = null;
const Af = `
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
function Mf() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(Af), ds = e.children(".inline-drawer").last()[0] ?? null, !ds)) return;
  const t = ds.querySelector("#stmp-settings-mount");
  t && Ws && (Kt = po(wf), Kt.use(Ws), Kt.mount(t));
}
function Pf() {
  Kt && (Kt.unmount(), Kt = null), ds?.remove(), ds = null;
}
function Rf(e, t, s) {
  nt = If(), nt.on("chat-changed", () => {
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
  }), nt.on("message-generated", (n) => {
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
  }), nt.on("message-updated", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), nt.on("message-deleted", (n) => {
    n.messageId !== void 0 && t.handleMessageDelete(n.messageId);
  }), nt.on("message-swiped", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), nt.start();
}
function Lf(e, t, s) {
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
async function Of() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = nc();
    Ws = t, Bt = po(Hu), Bt.use(t), Bt.mount(e);
    const s = we(), n = hc();
    s.init(n);
    const i = Lt();
    i.init(), i.setVolume(s.settings.volume);
    const r = new Tf((a) => SillyTavern.getContext().chat[a]?.mes), o = ws();
    o.init(r), Mf();
    const l = SillyTavern.getContext();
    fs = () => {
      Rf(r, o, s), Lf(r, o, s);
    }, l.eventSource.on(l.event_types.APP_READY, fs), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function _o() {
  if (fs) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, fs);
    } catch {
    }
    fs = null;
  }
  if (nt?.stop(), nt = null, Bt) {
    try {
      Lt().destroy();
    } catch {
    }
    Bt.unmount(), Bt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), Pf(), Ws = null;
}
function Df() {
  _o();
}
async function $f() {
  try {
    const e = SillyTavern.getContext();
    delete e.extensionSettings[Ut], e.saveSettingsDebounced();
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to delete settings:", e);
  }
  try {
    const e = SillyTavern.libs?.localforage;
    if (e && typeof e.keys == "function") {
      const t = await e.keys();
      await Promise.all(
        t.filter((s) => s.startsWith(Ut) || s.startsWith("stmp:")).map((s) => e.removeItem(s))
      );
    }
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to clear localforage:", e);
  }
}
async function Nf() {
  await $f(), _o();
}
export {
  $f as clean,
  Nf as delete,
  _o as destroy,
  Df as disable,
  Of as init
};
