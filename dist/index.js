/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Nn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const le = {}, Ft = [], Ze = () => {
}, Zi = () => !1, zs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Js = (e) => e.startsWith("onUpdate:"), ve = Object.assign, Fn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, wo = Object.prototype.hasOwnProperty, te = (e, t) => wo.call(e, t), H = Array.isArray, Ut = (e) => _s(e) === "[object Map]", Qi = (e) => _s(e) === "[object Set]", oi = (e) => _s(e) === "[object Date]", G = (e) => typeof e == "function", de = (e) => typeof e == "string", Ne = (e) => typeof e == "symbol", ne = (e) => e !== null && typeof e == "object", er = (e) => (ne(e) || G(e)) && G(e.then) && G(e.catch), tr = Object.prototype.toString, _s = (e) => tr.call(e), Co = (e) => _s(e).slice(8, -1), sr = (e) => _s(e) === "[object Object]", Gs = (e) => de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ss = /* @__PURE__ */ Nn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Io = /-\w/g, Ue = qs(
  (e) => e.replace(Io, (t) => t.slice(1).toUpperCase())
), Eo = /\B([A-Z])/g, vt = qs(
  (e) => e.replace(Eo, "-$1").toLowerCase()
), nr = qs((e) => e.charAt(0).toUpperCase() + e.slice(1)), un = qs(
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
}, Un = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, To = (e) => {
  const t = de(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let li;
const Ys = () => li || (li = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function jn(e) {
  if (H(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = de(n) ? Ro(n) : jn(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (de(e) || ne(e))
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
function De(e) {
  let t = "";
  if (de(e))
    t = e;
  else if (H(e))
    for (let s = 0; s < e.length; s++) {
      const n = De(e[s]);
      n && (t += n + " ");
    }
  else if (ne(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Lo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", $o = /* @__PURE__ */ Nn(Lo);
function rr(e) {
  return !!e || e === "";
}
function ko(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Vn(e[n], t[n]);
  return s;
}
function Vn(e, t) {
  if (e === t) return !0;
  let s = oi(e), n = oi(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ne(e), n = Ne(t), s || n)
    return e === t;
  if (s = H(e), n = H(t), s || n)
    return s && n ? ko(e, t) : !1;
  if (s = ne(e), n = ne(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (l && !a || !l && a || !Vn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const or = (e) => !!(e && e.__v_isRef === !0), Y = (e) => de(e) ? e : e == null ? "" : H(e) || ne(e) && (e.toString === tr || !G(e.toString)) ? or(e) ? Y(e.value) : JSON.stringify(e, lr, 2) : String(e), lr = (e, t) => or(t) ? lr(e, t.value) : Ut(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[fn(n, r) + " =>"] = i, s),
    {}
  )
} : Qi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => fn(s))
} : Ne(t) ? fn(t) : ne(t) && !H(t) && !sr(t) ? String(t) : t, fn = (e, t = "") => {
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
let me;
class ar {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && me && (me.active ? (this.parent = me, this.index = (me.scopes || (me.scopes = [])).push(
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
      const s = me;
      try {
        return me = this, t();
      } finally {
        me = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = me, me = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (me === this)
        me = this.prevScope;
      else {
        let t = me;
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
  return me;
}
function Oo(e, t = !1) {
  me && me.cleanups.push(e);
}
let ue;
const dn = /* @__PURE__ */ new WeakSet();
class fr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, me && (me.active ? me.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, dn.has(this) && (dn.delete(this), this.trigger()));
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
    const t = ue, s = je;
    ue = this, je = !0;
    try {
      return this.fn();
    } finally {
      gr(this), ue = t, je = s, this.flags &= -3;
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
    this.flags & 64 ? dn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Cn(this) && this.run();
  }
  get dirty() {
    return Cn(this);
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
function Hn() {
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
function Cn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (mr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function mr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === hs) || (e.globalVersion = hs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Cn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = ue, n = je;
  ue = e, je = !0;
  try {
    pr(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ye(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ue = s, je = n, gr(e), e.flags &= -3;
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
function Qe() {
  vr.push(je), je = !1;
}
function et() {
  const e = vr.pop();
  je = e === void 0 ? !0 : e;
}
function ai(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = ue;
    ue = void 0;
    try {
      t();
    } finally {
      ue = s;
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
    if (!ue || !je || ue === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== ue)
      s = this.activeLink = new No(ue, this), ue.deps ? (s.prevDep = ue.depsTail, ue.depsTail.nextDep = s, ue.depsTail = s) : ue.deps = ue.depsTail = s, yr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = ue.depsTail, s.nextDep = void 0, ue.depsTail.nextDep = s, ue.depsTail = s, ue.deps === s && (ue.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, hs++, this.notify(t);
  }
  notify(t) {
    Hn();
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
const Os = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ Symbol(
  ""
), In = /* @__PURE__ */ Symbol(
  ""
), ps = /* @__PURE__ */ Symbol(
  ""
);
function _e(e, t, s) {
  if (je && ue) {
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
  if (Hn(), t === "clear")
    o.forEach(l);
  else {
    const a = H(e), d = a && Gs(s);
    if (a && s === "length") {
      const u = Number(n);
      o.forEach((h, m) => {
        (m === "length" || m === ps || !Ne(m) && m >= u) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(ps)), t) {
        case "add":
          a ? d && l(o.get("length")) : (l(o.get(Tt)), Ut(e) && l(o.get(In)));
          break;
        case "delete":
          a || (l(o.get(Tt)), Ut(e) && l(o.get(In)));
          break;
        case "set":
          Ut(e) && l(o.get(Tt));
          break;
      }
  }
  Bn();
}
function Fo(e, t) {
  const s = Os.get(e);
  return s && s.get(t);
}
function Lt(e) {
  const t = /* @__PURE__ */ Q(e);
  return t === e ? t : (_e(t, "iterate", ps), /* @__PURE__ */ Re(e) ? t : t.map(Ve));
}
function Xs(e) {
  return _e(e = /* @__PURE__ */ Q(e), "iterate", ps), e;
}
function Ge(e, t) {
  return /* @__PURE__ */ ct(e) ? Wt(/* @__PURE__ */ at(e) ? Ve(t) : t) : Ve(t);
}
const Uo = {
  __proto__: null,
  [Symbol.iterator]() {
    return hn(this, Symbol.iterator, (e) => Ge(this, e));
  },
  concat(...e) {
    return Lt(this).concat(
      ...e.map((t) => H(t) ? Lt(t) : t)
    );
  },
  entries() {
    return hn(this, "entries", (e) => (e[1] = Ge(this, e[1]), e));
  },
  every(e, t) {
    return tt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return tt(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Ge(this, n)),
      arguments
    );
  },
  find(e, t) {
    return tt(
      this,
      "find",
      e,
      t,
      (s) => Ge(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return tt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return tt(
      this,
      "findLast",
      e,
      t,
      (s) => Ge(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return tt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return tt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return pn(this, "includes", e);
  },
  indexOf(...e) {
    return pn(this, "indexOf", e);
  },
  join(e) {
    return Lt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return pn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return tt(this, "map", e, t, void 0, arguments);
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
    return tt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return qt(this, "splice", e);
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
    return qt(this, "unshift", e);
  },
  values() {
    return hn(this, "values", (e) => Ge(this, e));
  }
};
function hn(e, t, s) {
  const n = Xs(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Re(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const jo = Array.prototype;
function tt(e, t, s, n, i, r) {
  const o = Xs(e), l = o !== e && !/* @__PURE__ */ Re(e), a = o[t];
  if (a !== jo[t]) {
    const h = a.apply(e, r);
    return l ? Ve(h) : h;
  }
  let d = s;
  o !== e && (l ? d = function(h, m) {
    return s.call(this, Ge(e, h), m, e);
  } : s.length > 2 && (d = function(h, m) {
    return s.call(this, h, m, e);
  }));
  const u = a.call(o, d, n);
  return l && i ? i(u) : u;
}
function ci(e, t, s, n) {
  const i = Xs(e), r = i !== e && !/* @__PURE__ */ Re(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(d, u, h) {
    return l && (l = !1, d = Ge(e, d)), s.call(this, d, Ge(e, u), h, e);
  }) : s.length > 3 && (o = function(d, u, h) {
    return s.call(this, d, u, h, e);
  }));
  const a = i[t](o, ...n);
  return l ? Ge(e, a) : a;
}
function pn(e, t, s) {
  const n = /* @__PURE__ */ Q(e);
  _e(n, "iterate", ps);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ Qs(s[0]) ? (s[0] = /* @__PURE__ */ Q(s[0]), n[t](...s)) : i;
}
function qt(e, t, s = []) {
  Qe(), Hn();
  const n = (/* @__PURE__ */ Q(e))[t].apply(e, s);
  return Bn(), et(), n;
}
const Vo = /* @__PURE__ */ Nn("__proto__,__v_isRef,__isVue"), br = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ne)
);
function Ho(e) {
  Ne(e) || (e = String(e));
  const t = /* @__PURE__ */ Q(this);
  return _e(t, "has", e), t.hasOwnProperty(e);
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
    const o = H(t);
    if (!i) {
      let a;
      if (o && (a = Uo[s]))
        return a;
      if (s === "hasOwnProperty")
        return Ho;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ he(t) ? t : n
    );
    if ((Ne(s) ? br.has(s) : Vo(s)) || (i || _e(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ he(l)) {
      const a = o && Gs(s) ? l : l.value;
      return i && ne(a) ? /* @__PURE__ */ Tn(a) : a;
    }
    return ne(l) ? i ? /* @__PURE__ */ Tn(l) : /* @__PURE__ */ Zs(l) : l;
  }
}
class xr extends _r {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    const o = H(t) && Gs(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ ct(r);
      if (!/* @__PURE__ */ Re(n) && !/* @__PURE__ */ ct(n) && (r = /* @__PURE__ */ Q(r), n = /* @__PURE__ */ Q(n)), !o && /* @__PURE__ */ he(r) && !/* @__PURE__ */ he(n))
        return d || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : te(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ he(t) ? t : i
    );
    return t === /* @__PURE__ */ Q(i) && a && (l ? Ye(n, r) && ot(t, "set", s, n) : ot(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = te(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && ot(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ne(s) || !br.has(s)) && _e(t, "has", s), n;
  }
  ownKeys(t) {
    return _e(
      t,
      "iterate",
      H(t) ? "length" : Tt
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
const En = (e) => e, Es = (e) => Reflect.getPrototypeOf(e);
function Jo(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ Q(i), o = Ut(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, d = i[e](...n), u = s ? En : t ? Wt : Ve;
    return !t && _e(
      r,
      "iterate",
      a ? In : Tt
    ), ve(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: m } = d.next();
          return m ? { value: h, done: m } : {
            value: l ? [u(h[0]), u(h[1])] : u(h),
            done: m
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
      const r = this.__v_raw, o = /* @__PURE__ */ Q(r), l = /* @__PURE__ */ Q(i);
      e || (Ye(i, l) && _e(o, "get", i), _e(o, "get", l));
      const { has: a } = Es(o), d = t ? En : e ? Wt : Ve;
      if (a.call(o, i))
        return d(r.get(i));
      if (a.call(o, l))
        return d(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && _e(/* @__PURE__ */ Q(i), "iterate", Tt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ Q(r), l = /* @__PURE__ */ Q(i);
      return e || (Ye(i, l) && _e(o, "has", i), _e(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ Q(l), d = t ? En : e ? Wt : Ve;
      return !e && _e(a, "iterate", Tt), l.forEach((u, h) => i.call(r, d(u), d(h), o));
    }
  };
  return ve(
    s,
    e ? {
      add: Ts("add"),
      set: Ts("set"),
      delete: Ts("delete"),
      clear: Ts("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ Q(this), o = Es(r), l = /* @__PURE__ */ Q(i), a = !t && !/* @__PURE__ */ Re(i) && !/* @__PURE__ */ ct(i) ? l : i;
        return o.has.call(r, a) || Ye(i, a) && o.has.call(r, i) || Ye(l, a) && o.has.call(r, l) || (r.add(a), ot(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Re(r) && !/* @__PURE__ */ ct(r) && (r = /* @__PURE__ */ Q(r));
        const o = /* @__PURE__ */ Q(this), { has: l, get: a } = Es(o);
        let d = l.call(o, i);
        d || (i = /* @__PURE__ */ Q(i), d = l.call(o, i));
        const u = a.call(o, i);
        return o.set(i, r), d ? Ye(r, u) && ot(o, "set", i, r) : ot(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ Q(this), { has: o, get: l } = Es(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ Q(i), a = o.call(r, i)), l && l.call(r, i);
        const d = r.delete(i);
        return a && ot(r, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ Q(this), r = i.size !== 0, o = i.clear();
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
    te(s, i) && i in n ? s : n,
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
function Zs(e) {
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
function Tn(e) {
  return Jn(
    e,
    !0,
    Wo,
    Xo,
    Cr
  );
}
function Jn(e, t, s, n, i) {
  if (!ne(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
function Re(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Qs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Q(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Q(t) : e;
}
function Gn(e) {
  return !te(e, "__v_skip") && Object.isExtensible(e) && ir(e, "__v_skip", !0), e;
}
const Ve = (e) => ne(e) ? /* @__PURE__ */ Zs(e) : e, Wt = (e) => ne(e) ? /* @__PURE__ */ Tn(e) : e;
// @__NO_SIDE_EFFECTS__
function he(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  return tl(e, !1);
}
function tl(e, t) {
  return /* @__PURE__ */ he(e) ? e : new sl(e, t);
}
class sl {
  constructor(t, s) {
    this.dep = new Wn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ Q(t), this._value = s ? t : Ve(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Re(t) || /* @__PURE__ */ ct(t);
    t = n ? t : /* @__PURE__ */ Q(t), Ye(t, s) && (this._rawValue = t, this._value = n ? t : Ve(t), this.dep.trigger());
  }
}
function E(e) {
  return /* @__PURE__ */ he(e) ? e.value : e;
}
const nl = {
  get: (e, t, s) => t === "__v_raw" ? e : E(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ he(i) && !/* @__PURE__ */ he(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Ir(e) {
  return /* @__PURE__ */ at(e) ? e : new Proxy(e, nl);
}
// @__NO_SIDE_EFFECTS__
function il(e) {
  const t = H(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = ol(e, s);
  return t;
}
class rl {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Ne(s) ? s : String(s), this._raw = /* @__PURE__ */ Q(t);
    let i = !0, r = t;
    if (!H(t) || Ne(this._key) || !Gs(this._key))
      do
        i = !/* @__PURE__ */ Qs(r) || /* @__PURE__ */ Re(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = E(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ he(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ he(s)) {
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
    ue !== this)
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
  return G(e) ? n = e : (n = e.get, i = e.set), new ll(n, i, s);
}
const As = {}, Ds = /* @__PURE__ */ new WeakMap();
let Ct;
function cl(e, t = !1, s = Ct) {
  if (s) {
    let n = Ds.get(s);
    n || Ds.set(s, n = []), n.push(e);
  }
}
function ul(e, t, s = le) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = s, d = (P) => i ? P : /* @__PURE__ */ Re(P) || i === !1 || i === 0 ? lt(P, 1) : lt(P);
  let u, h, m, g, w = !1, y = !1;
  if (/* @__PURE__ */ he(e) ? (h = () => e.value, w = /* @__PURE__ */ Re(e)) : /* @__PURE__ */ at(e) ? (h = () => d(e), w = !0) : H(e) ? (y = !0, w = e.some((P) => /* @__PURE__ */ at(P) || /* @__PURE__ */ Re(P)), h = () => e.map((P) => {
    if (/* @__PURE__ */ he(P))
      return P.value;
    if (/* @__PURE__ */ at(P))
      return d(P);
    if (G(P))
      return a ? a(P, 2) : P();
  })) : G(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      Qe();
      try {
        m();
      } finally {
        et();
      }
    }
    const P = Ct;
    Ct = u;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      Ct = P;
    }
  } : h = Ze, t && i) {
    const P = h, K = i === !0 ? 1 / 0 : i;
    h = () => lt(P(), K);
  }
  const k = ur(), U = () => {
    u.stop(), k && k.active && Fn(k.effects, u);
  };
  if (r && t) {
    const P = t;
    t = (...K) => {
      const fe = P(...K);
      return U(), fe;
    };
  }
  let j = y ? new Array(e.length).fill(As) : As;
  const q = (P) => {
    if (!(!(u.flags & 1) || !u.dirty && !P))
      if (t) {
        const K = u.run();
        if (P || i || w || (y ? K.some((fe, re) => Ye(fe, j[re])) : Ye(K, j))) {
          m && m();
          const fe = Ct;
          Ct = u;
          try {
            const re = [
              K,
              // pass undefined as the old value when it's changed for the first time
              j === As ? void 0 : y && j[0] === As ? [] : j,
              g
            ];
            j = K, a ? a(t, 3, re) : (
              // @ts-expect-error
              t(...re)
            );
          } finally {
            Ct = fe;
          }
        }
      } else
        u.run();
  };
  return l && l(q), u = new fr(h), u.scheduler = o ? () => o(q, !1) : q, g = (P) => cl(P, !1, u), m = u.onStop = () => {
    const P = Ds.get(u);
    if (P) {
      if (a)
        a(P, 4);
      else
        for (const K of P) K();
      Ds.delete(u);
    }
  }, t ? n ? q(!0) : j = u.run() : o ? o(q.bind(null, !0), !0) : u.run(), U.pause = u.pause.bind(u), U.resume = u.resume.bind(u), U.stop = U, U;
}
function lt(e, t = 1 / 0, s) {
  if (t <= 0 || !ne(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ he(e))
    lt(e.value, t, s);
  else if (H(e))
    for (let n = 0; n < e.length; n++)
      lt(e[n], t, s);
  else if (Qi(e) || Ut(e))
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
    en(i, t, s);
  }
}
function Fe(e, t, s, n) {
  if (G(e)) {
    const i = xs(e, t, s, n);
    return i && er(i) && i.catch((r) => {
      en(r, t, s);
    }), i;
  }
  if (H(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Fe(e[r], t, s, n));
    return i;
  }
}
function en(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || le;
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
      Qe(), xs(r, null, 10, [
        e,
        a,
        d
      ]), et();
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
const Ce = [];
let Je = -1;
const jt = [];
let ht = null, Ot = 0;
const Er = /* @__PURE__ */ Promise.resolve();
let Ns = null;
function pt(e) {
  const t = Ns || Er;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dl(e) {
  let t = Je + 1, s = Ce.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Ce[n], r = gs(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function qn(e) {
  if (!(e.flags & 1)) {
    const t = gs(e), s = Ce[Ce.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= gs(s) ? Ce.push(e) : Ce.splice(dl(t), 0, e), e.flags |= 1, Tr();
  }
}
function Tr() {
  Ns || (Ns = Er.then(Mr));
}
function hl(e) {
  H(e) ? jt.push(...e) : ht && e.id === -1 ? ht.splice(Ot + 1, 0, e) : e.flags & 1 || (jt.push(e), e.flags |= 1), Tr();
}
function ui(e, t, s = Je + 1) {
  for (; s < Ce.length; s++) {
    const n = Ce[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Ce.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Ar(e) {
  if (jt.length) {
    const t = [...new Set(jt)].sort(
      (s, n) => gs(s) - gs(n)
    );
    if (jt.length = 0, ht) {
      ht.push(...t);
      return;
    }
    for (ht = t, Ot = 0; Ot < ht.length; Ot++) {
      const s = ht[Ot];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    ht = null, Ot = 0;
  }
}
const gs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Mr(e) {
  try {
    for (Je = 0; Je < Ce.length; Je++) {
      const t = Ce[Je];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), xs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Je < Ce.length; Je++) {
      const t = Ce[Je];
      t && (t.flags &= -2);
    }
    Je = -1, Ce.length = 0, Ar(), Ns = null, (Ce.length || jt.length) && Mr();
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
    n._d && Vs(-1);
    const r = Fs(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Fs(r), n._d && Vs(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Zt(e, t) {
  if (Oe === null)
    return e;
  const s = on(Oe), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = le] = t[i];
    r && (G(r) && (r = {
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
function _t(e, t, s, n) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[n];
    a && (Qe(), Fe(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), et());
  }
}
function pl(e, t) {
  if (Ee) {
    let s = Ee.provides;
    const n = Ee.parent && Ee.parent.provides;
    n === s && (s = Ee.provides = Object.create(n)), s[e] = t;
  }
}
function rs(e, t, s = !1) {
  const n = ei();
  if (n || At) {
    let i = At ? At._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && G(t) ? t.call(n && n.proxy) : t;
  }
}
function gl() {
  return !!(ei() || At);
}
const ml = /* @__PURE__ */ Symbol.for("v-scx"), vl = () => rs(ml);
function Vt(e, t, s) {
  return Lr(e, t, s);
}
function Lr(e, t, s = le) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = ve({}, s), a = t && n || !t && r !== "post";
  let d;
  if (ys) {
    if (r === "sync") {
      const g = vl();
      d = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = Ze, g.resume = Ze, g.pause = Ze, g;
    }
  }
  const u = Ee;
  l.call = (g, w, y) => Fe(g, u, w, y);
  let h = !1;
  r === "post" ? l.scheduler = (g) => {
    Te(g, u && u.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (g, w) => {
    w ? g() : qn(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), h && (g.flags |= 2, u && (g.id = u.uid, g.i = u));
  };
  const m = ul(e, t, l);
  return ys && (d ? d.push(m) : a && m()), m;
}
function yl(e, t, s) {
  const n = this.proxy, i = de(e) ? e.includes(".") ? $r(n, e) : () => n[e] : e.bind(n, n);
  let r;
  G(t) ? r = t : (r = t.handler, s = t);
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
const bl = /* @__PURE__ */ Symbol("_vte"), kr = (e) => e.__isTeleport, $e = /* @__PURE__ */ Symbol("_leaveCb"), Yt = /* @__PURE__ */ Symbol("_enterCb");
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
const Le = [Function, Array], Or = {
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
        s.subTree ? xe() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ Q(e), { mode: l } = o;
      if (n.isLeaving)
        return gn(r);
      const a = fi(r);
      if (!a)
        return gn(r);
      let d = An(
        a,
        o,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      a.type !== Ie && ms(a, d);
      let u = s.subTree && fi(s.subTree);
      if (u && u.type !== Ie && !It(u, a) && Dr(s).type !== Ie) {
        let h = An(
          u,
          o,
          n,
          s
        );
        if (ms(u, h), l === "out-in" && a.type !== Ie)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete h.afterLeave, u = void 0;
          }, gn(r);
        l === "in-out" && a.type !== Ie ? h.delayLeave = (m, g, w) => {
          const y = Fr(
            n,
            u
          );
          y[String(u.key)] = u, m[$e] = () => {
            g(), m[$e] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            w(), delete d.delayedLeave, u = void 0;
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
      if (s.type !== Ie) {
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
function An(e, t, s, n, i) {
  const {
    appear: r,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: m,
    onLeave: g,
    onAfterLeave: w,
    onLeaveCancelled: y,
    onBeforeAppear: k,
    onAppear: U,
    onAfterAppear: j,
    onAppearCancelled: q
  } = t, P = String(e.key), K = Fr(s, e), fe = (x, A) => {
    x && Fe(
      x,
      n,
      9,
      A
    );
  }, re = (x, A) => {
    const O = A[1];
    fe(x, A), H(x) ? x.every((I) => I.length <= 1) && O() : x.length <= 1 && O();
  }, W = {
    mode: o,
    persisted: l,
    beforeEnter(x) {
      let A = a;
      if (!s.isMounted)
        if (r)
          A = k || a;
        else
          return;
      x[$e] && x[$e](
        !0
        /* cancelled */
      );
      const O = K[P];
      O && It(e, O) && O.el[$e] && O.el[$e](), fe(A, [x]);
    },
    enter(x) {
      if (K[P] === e) return;
      let A = d, O = u, I = h;
      if (!s.isMounted)
        if (r)
          A = U || d, O = j || u, I = q || h;
        else
          return;
      let J = !1;
      x[Yt] = (Ae) => {
        J || (J = !0, Ae ? fe(I, [x]) : fe(O, [x]), W.delayedLeave && W.delayedLeave(), x[Yt] = void 0);
      };
      const pe = x[Yt].bind(null, !1);
      A ? re(A, [x, pe]) : pe();
    },
    leave(x, A) {
      const O = String(e.key);
      if (x[Yt] && x[Yt](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return A();
      fe(m, [x]);
      let I = !1;
      x[$e] = (pe) => {
        I || (I = !0, A(), pe ? fe(y, [x]) : fe(w, [x]), x[$e] = void 0, K[O] === e && delete K[O]);
      };
      const J = x[$e].bind(null, !1);
      K[O] = e, g ? re(g, [x, J]) : J();
    },
    clone(x) {
      const A = An(
        x,
        t,
        s,
        n,
        i
      );
      return i && i(A), A;
    }
  };
  return W;
}
function gn(e) {
  if (tn(e))
    return e = mt(e), e.children = null, e;
}
function fi(e) {
  if (!tn(e))
    return kr(e.type) && e.children ? Nr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && G(s.default))
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
    o.type === ee ? (o.patchFlag & 128 && i++, n = n.concat(
      Ur(o.children, t, l)
    )) : (t || o.type !== Ie) && n.push(l != null ? mt(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Mt(e, t) {
  return G(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ve({ name: e.name }, t, { setup: e })
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
  if (H(e)) {
    e.forEach(
      (y, k) => os(
        y,
        t && (H(t) ? t[k] : t),
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
  const r = n.shapeFlag & 4 ? on(n.component) : n.el, o = i ? null : r, { i: l, r: a } = e, d = t && t.r, u = l.refs === le ? l.refs = {} : l.refs, h = l.setupState, m = /* @__PURE__ */ Q(h), g = h === le ? Zi : (y) => di(u, y) ? !1 : te(m, y), w = (y, k) => !(k && di(u, k));
  if (d != null && d !== a) {
    if (hi(t), de(d))
      u[d] = null, g(d) && (h[d] = null);
    else if (/* @__PURE__ */ he(d)) {
      const y = t;
      w(d, y.k) && (d.value = null), y.k && (u[y.k] = null);
    }
  }
  if (G(a)) {
    Qe();
    try {
      xs(a, l, 12, [o, u]);
    } finally {
      et();
    }
  } else {
    const y = de(a), k = /* @__PURE__ */ he(a);
    if (y || k) {
      const U = () => {
        if (e.f) {
          const j = y ? g(a) ? h[a] : u[a] : w() || !e.k ? a.value : u[e.k];
          if (i)
            H(j) && Fn(j, r);
          else if (H(j))
            j.includes(r) || j.push(r);
          else if (y)
            u[a] = [r], g(a) && (h[a] = u[a]);
          else {
            const q = [r];
            w(a, e.k) && (a.value = q), e.k && (u[e.k] = q);
          }
        } else y ? (u[a] = o, g(a) && (h[a] = o)) : k && (w(a, e.k) && (a.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const j = () => {
          U(), Us.delete(e);
        };
        j.id = -1, Us.set(e, j), Te(j, s);
      } else
        hi(e), U();
    }
  }
}
function hi(e) {
  const t = Us.get(e);
  t && (t.flags |= 8, Us.delete(e));
}
Ys().requestIdleCallback;
Ys().cancelIdleCallback;
const ls = (e) => !!e.type.__asyncLoader, tn = (e) => e.type.__isKeepAlive;
function wl(e, t) {
  Vr(e, "a", t);
}
function Cl(e, t) {
  Vr(e, "da", t);
}
function Vr(e, t, s = Ee) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (sn(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      tn(i.parent.vnode) && Il(n, t, s, i), i = i.parent;
  }
}
function Il(e, t, s, n) {
  const i = sn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Hr(() => {
    Fn(n[t], i);
  }, s);
}
function sn(e, t, s = Ee, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Qe();
      const l = Ss(s), a = Fe(t, s, e, o);
      return l(), et(), a;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const ut = (e) => (t, s = Ee) => {
  (!ys || e === "sp") && sn(e, (...n) => t(...n), s);
}, El = ut("bm"), Yn = ut("m"), Tl = ut(
  "bu"
), Al = ut("u"), Xn = ut(
  "bum"
), Hr = ut("um"), Ml = ut(
  "sp"
), Pl = ut("rtg"), Rl = ut("rtc");
function Ll(e, t = Ee) {
  sn("ec", e, t);
}
const $l = /* @__PURE__ */ Symbol.for("v-ndc");
function Ht(e, t, s, n) {
  let i;
  const r = s, o = H(e);
  if (o || de(e)) {
    const l = o && /* @__PURE__ */ at(e);
    let a = !1, d = !1;
    l && (a = !/* @__PURE__ */ Re(e), d = /* @__PURE__ */ ct(e), e = Xs(e)), i = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      i[u] = t(
        a ? d ? Wt(Ve(e[u])) : Ve(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (ne(e))
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
const Mn = (e) => e ? ao(e) ? on(e) : Mn(e.parent) : null, as = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ve(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Mn(e.parent),
    $root: (e) => Mn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Kr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      qn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = pt.bind(e.proxy)),
    $watch: (e) => yl.bind(e)
  })
), mn = (e, t) => e !== le && !e.__isScriptSetup && te(e, t), kl = {
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
        if (mn(n, t))
          return o[t] = 1, n[t];
        if (i !== le && te(i, t))
          return o[t] = 2, i[t];
        if (te(r, t))
          return o[t] = 3, r[t];
        if (s !== le && te(s, t))
          return o[t] = 4, s[t];
        Pn && (o[t] = 0);
      }
    }
    const d = as[t];
    let u, h;
    if (d)
      return t === "$attrs" && _e(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (s !== le && te(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = a.config.globalProperties, te(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return mn(i, t) ? (i[t] = s, !0) : n !== le && te(n, t) ? (n[t] = s, !0) : te(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(s[l] || e !== le && l[0] !== "$" && te(e, l) || mn(t, l) || te(r, l) || te(n, l) || te(as, l) || te(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : te(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function pi(e) {
  return H(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Pn = !0;
function Ol(e) {
  const t = Kr(e), s = e.proxy, n = e.ctx;
  Pn = !1, t.beforeCreate && gi(t.beforeCreate, e, "bc");
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
    mounted: m,
    beforeUpdate: g,
    updated: w,
    activated: y,
    deactivated: k,
    beforeDestroy: U,
    beforeUnmount: j,
    destroyed: q,
    unmounted: P,
    render: K,
    renderTracked: fe,
    renderTriggered: re,
    errorCaptured: W,
    serverPrefetch: x,
    // public API
    expose: A,
    inheritAttrs: O,
    // assets
    components: I,
    directives: J,
    filters: pe
  } = t;
  if (d && Dl(d, n, null), o)
    for (const X in o) {
      const ce = o[X];
      G(ce) && (n[X] = ce.bind(s));
    }
  if (i) {
    const X = i.call(s, s);
    ne(X) && (e.data = /* @__PURE__ */ Zs(X));
  }
  if (Pn = !0, r)
    for (const X in r) {
      const ce = r[X], yt = G(ce) ? ce.bind(s, s) : G(ce.get) ? ce.get.bind(s, s) : Ze, Cs = !G(ce) && G(ce.set) ? ce.set.bind(s) : Ze, bt = Xe({
        get: yt,
        set: Cs
      });
      Object.defineProperty(n, X, {
        enumerable: !0,
        configurable: !0,
        get: () => bt.value,
        set: (He) => bt.value = He
      });
    }
  if (l)
    for (const X in l)
      Br(l[X], n, s, X);
  if (a) {
    const X = G(a) ? a.call(s) : a;
    Reflect.ownKeys(X).forEach((ce) => {
      pl(ce, X[ce]);
    });
  }
  u && gi(u, e, "c");
  function ae(X, ce) {
    H(ce) ? ce.forEach((yt) => X(yt.bind(s))) : ce && X(ce.bind(s));
  }
  if (ae(El, h), ae(Yn, m), ae(Tl, g), ae(Al, w), ae(wl, y), ae(Cl, k), ae(Ll, W), ae(Rl, fe), ae(Pl, re), ae(Xn, j), ae(Hr, P), ae(Ml, x), H(A))
    if (A.length) {
      const X = e.exposed || (e.exposed = {});
      A.forEach((ce) => {
        Object.defineProperty(X, ce, {
          get: () => s[ce],
          set: (yt) => s[ce] = yt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  K && e.render === Ze && (e.render = K), O != null && (e.inheritAttrs = O), I && (e.components = I), J && (e.directives = J), x && jr(e);
}
function Dl(e, t, s = Ze) {
  H(e) && (e = Rn(e));
  for (const n in e) {
    const i = e[n];
    let r;
    ne(i) ? "default" in i ? r = rs(
      i.from || n,
      i.default,
      !0
    ) : r = rs(i.from || n) : r = rs(i), /* @__PURE__ */ he(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function gi(e, t, s) {
  Fe(
    H(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Br(e, t, s, n) {
  let i = n.includes(".") ? $r(s, n) : () => s[n];
  if (de(e)) {
    const r = t[e];
    G(r) && Vt(i, r);
  } else if (G(e))
    Vt(i, e.bind(s));
  else if (ne(e))
    if (H(e))
      e.forEach((r) => Br(r, t, s, n));
    else {
      const r = G(e.handler) ? e.handler.bind(s) : t[e.handler];
      G(r) && Vt(i, r, e);
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
  ), js(a, t, o)), ne(t) && r.set(t, a), a;
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
    return ve(
      G(e) ? e.call(this, this) : e,
      G(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Fl(e, t) {
  return Qt(Rn(e), Rn(t));
}
function Rn(e) {
  if (H(e)) {
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
  return e ? ve(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function vi(e, t) {
  return e ? H(e) && H(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ve(
    /* @__PURE__ */ Object.create(null),
    pi(e),
    pi(t ?? {})
  ) : t;
}
function Ul(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ve(/* @__PURE__ */ Object.create(null), e);
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
function Vl(e, t) {
  return function(n, i = null) {
    G(n) || (n = ve({}, n)), i != null && !ne(i) && (i = null);
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
        return o.has(u) || (u && G(u.install) ? (o.add(u), u.install(d, ...h)) : G(u) && (o.add(u), u(d, ...h))), d;
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
      mount(u, h, m) {
        if (!a) {
          const g = d._ceVNode || se(n, i);
          return g.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(g, u, m), a = !0, d._container = u, u.__vue_app__ = d, on(g.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (Fe(
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
const Hl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ue(t)}Modifiers`] || e[`${vt(t)}Modifiers`];
function Bl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || le;
  let i = s;
  const r = t.startsWith("update:"), o = r && Hl(n, t.slice(7));
  o && (o.trim && (i = s.map((u) => de(u) ? u.trim() : u)), o.number && (i = s.map(Un)));
  let l, a = n[l = un(t)] || // also try camelCase event handler (#2249)
  n[l = un(Ue(t))];
  !a && r && (a = n[l = un(vt(t))]), a && Fe(
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
    e.emitted[l] = !0, Fe(
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
  if (!G(e)) {
    const a = (d) => {
      const u = zr(d, t, !0);
      u && (l = !0, ve(o, u));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (ne(e) && n.set(e, null), null) : (H(r) ? r.forEach((a) => o[a] = null) : ve(o, r), ne(e) && n.set(e, o), o);
}
function nn(e, t) {
  return !e || !zs(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), te(e, t[0].toLowerCase() + t.slice(1)) || te(e, vt(t)) || te(e, t));
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
    data: m,
    setupState: g,
    ctx: w,
    inheritAttrs: y
  } = e, k = Fs(e);
  let U, j;
  try {
    if (s.shapeFlag & 4) {
      const P = i || n, K = P;
      U = qe(
        d.call(
          K,
          P,
          u,
          h,
          g,
          m,
          w
        )
      ), j = l;
    } else {
      const P = t;
      U = qe(
        P.length > 1 ? P(
          h,
          { attrs: l, slots: o, emit: a }
        ) : P(
          h,
          null
        )
      ), j = t.props ? l : Wl(l);
    }
  } catch (P) {
    cs.length = 0, en(P, e, 1), U = se(Ie);
  }
  let q = U;
  if (j && y !== !1) {
    const P = Object.keys(j), { shapeFlag: K } = q;
    P.length && K & 7 && (r && P.some(Js) && (j = zl(
      j,
      r
    )), q = mt(q, j, !1, !0));
  }
  return s.dirs && (q = mt(q, null, !1, !0), q.dirs = q.dirs ? q.dirs.concat(s.dirs) : s.dirs), s.transition && ms(q, s.transition), U = q, Fs(k), U;
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
        const m = u[h];
        if (Jr(o, n, m) && !nn(d, m))
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
    if (Jr(t, e, r) && !nn(s, r))
      return !0;
  }
  return !1;
}
function Jr(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && ne(n) && ne(i) ? !Vn(n, i) : n !== i;
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
  } = e, l = /* @__PURE__ */ Q(i), [a] = e.propsOptions;
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
        let m = u[h];
        if (nn(e.emitsOptions, m))
          continue;
        const g = t[m];
        if (a)
          if (te(r, m))
            g !== r[m] && (r[m] = g, d = !0);
          else {
            const w = Ue(m);
            i[w] = Ln(
              a,
              l,
              w,
              g,
              e,
              !1
            );
          }
        else
          g !== r[m] && (r[m] = g, d = !0);
      }
    }
  } else {
    Xr(e, t, i, r) && (d = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !te(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = vt(h)) === h || !te(t, u))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[u] !== void 0) && (i[h] = Ln(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (r !== l)
      for (const h in r)
        (!t || !te(t, h)) && (delete r[h], d = !0);
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
      i && te(i, u = Ue(a)) ? !r || !r.includes(u) ? s[u] = d : (l || (l = {}))[u] = d : nn(e.emitsOptions, a) || (!(a in n) || d !== n[a]) && (n[a] = d, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ Q(s), d = l || le;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      s[h] = Ln(
        i,
        a,
        h,
        d[h],
        e,
        !te(d, h)
      );
    }
  }
  return o;
}
function Ln(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const l = te(o, "default");
    if (l && n === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && G(a)) {
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
    ] && (n === "" || n === vt(s)) && (n = !0));
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
  if (!G(e)) {
    const u = (h) => {
      a = !0;
      const [m, g] = Zr(h, t, !0);
      ve(o, m), g && l.push(...g);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !a)
    return ne(e) && n.set(e, Ft), Ft;
  if (H(r))
    for (let u = 0; u < r.length; u++) {
      const h = Ue(r[u]);
      _i(h) && (o[h] = le);
    }
  else if (r)
    for (const u in r) {
      const h = Ue(u);
      if (_i(h)) {
        const m = r[u], g = o[h] = H(m) || G(m) ? { type: m } : ve({}, m), w = g.type;
        let y = !1, k = !0;
        if (H(w))
          for (let U = 0; U < w.length; ++U) {
            const j = w[U], q = G(j) && j.name;
            if (q === "Boolean") {
              y = !0;
              break;
            } else q === "String" && (k = !1);
          }
        else
          y = G(w) && w.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = y, g[
          1
          /* shouldCastTrue */
        ] = k, (y || te(g, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return ne(e) && n.set(e, d), d;
}
function _i(e) {
  return e[0] !== "$" && !ss(e);
}
const Zn = (e) => e === "_" || e === "_ctx" || e === "$stable", Qn = (e) => H(e) ? e.map(qe) : [qe(e)], Zl = (e, t, s) => {
  if (t._n)
    return t;
  const n = Rr((...i) => Qn(t(...i)), s);
  return n._c = !1, n;
}, Qr = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (Zn(i)) continue;
    const r = e[i];
    if (G(r))
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
  let r = !0, o = le;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : to(i, t, s) : (r = !t.$stable, Qr(t, i)), o = t;
  } else t && (eo(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Zn(l) && o[l] == null && delete i[l];
}, Te = ra;
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
    nextSibling: m,
    setScopeId: g = Ze,
    insertStaticContent: w
  } = e, y = (c, f, p, C = null, S = null, b = null, R = void 0, M = null, T = !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !It(c, f) && (C = Is(c), He(c, S, b, !0), c = null), f.patchFlag === -2 && (T = !1, f.dynamicChildren = null);
    const { type: _, ref: B, shapeFlag: L } = f;
    switch (_) {
      case rn:
        k(c, f, p, C);
        break;
      case Ie:
        U(c, f, p, C);
        break;
      case $s:
        c == null && j(f, p, C, R);
        break;
      case ee:
        I(
          c,
          f,
          p,
          C,
          S,
          b,
          R,
          M,
          T
        );
        break;
      default:
        L & 1 ? K(
          c,
          f,
          p,
          C,
          S,
          b,
          R,
          M,
          T
        ) : L & 6 ? J(
          c,
          f,
          p,
          C,
          S,
          b,
          R,
          M,
          T
        ) : (L & 64 || L & 128) && _.process(
          c,
          f,
          p,
          C,
          S,
          b,
          R,
          M,
          T,
          Jt
        );
    }
    B != null && S ? os(B, c && c.ref, b, f || c, !f) : B == null && c && c.ref != null && os(c.ref, null, b, c, !0);
  }, k = (c, f, p, C) => {
    if (c == null)
      n(
        f.el = l(f.children),
        p,
        C
      );
    else {
      const S = f.el = c.el;
      f.children !== c.children && d(S, f.children);
    }
  }, U = (c, f, p, C) => {
    c == null ? n(
      f.el = a(f.children || ""),
      p,
      C
    ) : f.el = c.el;
  }, j = (c, f, p, C) => {
    [c.el, c.anchor] = w(
      c.children,
      f,
      p,
      C,
      c.el,
      c.anchor
    );
  }, q = ({ el: c, anchor: f }, p, C) => {
    let S;
    for (; c && c !== f; )
      S = m(c), n(c, p, C), c = S;
    n(f, p, C);
  }, P = ({ el: c, anchor: f }) => {
    let p;
    for (; c && c !== f; )
      p = m(c), i(c), c = p;
    i(f);
  }, K = (c, f, p, C, S, b, R, M, T) => {
    if (f.type === "svg" ? R = "svg" : f.type === "math" && (R = "mathml"), c == null)
      fe(
        f,
        p,
        C,
        S,
        b,
        R,
        M,
        T
      );
    else {
      const _ = c.el && c.el._isVueCE ? c.el : null;
      try {
        _ && _._beginPatch(), x(
          c,
          f,
          S,
          b,
          R,
          M,
          T
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, fe = (c, f, p, C, S, b, R, M) => {
    let T, _;
    const { props: B, shapeFlag: L, transition: V, dirs: z } = c;
    if (T = c.el = o(
      c.type,
      b,
      B && B.is,
      B
    ), L & 8 ? u(T, c.children) : L & 16 && W(
      c.children,
      T,
      null,
      C,
      S,
      vn(c, b),
      R,
      M
    ), z && _t(c, null, C, "created"), re(T, c, c.scopeId, R, C), B) {
      for (const oe in B)
        oe !== "value" && !ss(oe) && r(T, oe, null, B[oe], b, C);
      "value" in B && r(T, "value", null, B.value, b), (_ = B.onVnodeBeforeMount) && ze(_, C, c);
    }
    z && _t(c, null, C, "beforeMount");
    const Z = na(S, V);
    Z && V.beforeEnter(T), n(T, f, p), ((_ = B && B.onVnodeMounted) || Z || z) && Te(() => {
      try {
        _ && ze(_, C, c), Z && V.enter(T), z && _t(c, null, C, "mounted");
      } finally {
      }
    }, S);
  }, re = (c, f, p, C, S) => {
    if (p && g(c, p), C)
      for (let b = 0; b < C.length; b++)
        g(c, C[b]);
    if (S) {
      let b = S.subTree;
      if (f === b || ro(b.type) && (b.ssContent === f || b.ssFallback === f)) {
        const R = S.vnode;
        re(
          c,
          R,
          R.scopeId,
          R.slotScopeIds,
          S.parent
        );
      }
    }
  }, W = (c, f, p, C, S, b, R, M, T = 0) => {
    for (let _ = T; _ < c.length; _++) {
      const B = c[_] = M ? rt(c[_]) : qe(c[_]);
      y(
        null,
        B,
        f,
        p,
        C,
        S,
        b,
        R,
        M
      );
    }
  }, x = (c, f, p, C, S, b, R) => {
    const M = f.el = c.el;
    let { patchFlag: T, dynamicChildren: _, dirs: B } = f;
    T |= c.patchFlag & 16;
    const L = c.props || le, V = f.props || le;
    let z;
    if (p && xt(p, !1), (z = V.onVnodeBeforeUpdate) && ze(z, p, f, c), B && _t(f, c, p, "beforeUpdate"), p && xt(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    _ && (!c.dynamicChildren || c.dynamicChildren.length !== _.length) && (T = 0, R = !1, _ = null), (L.innerHTML && V.innerHTML == null || L.textContent && V.textContent == null) && u(M, ""), _ ? A(
      c.dynamicChildren,
      _,
      M,
      p,
      C,
      vn(f, S),
      b
    ) : R || ce(
      c,
      f,
      M,
      null,
      p,
      C,
      vn(f, S),
      b,
      !1
    ), T > 0) {
      if (T & 16)
        O(M, L, V, p, S);
      else if (T & 2 && L.class !== V.class && r(M, "class", null, V.class, S), T & 4 && r(M, "style", L.style, V.style, S), T & 8) {
        const Z = f.dynamicProps;
        for (let oe = 0; oe < Z.length; oe++) {
          const ie = Z[oe], ge = L[ie], be = V[ie];
          (be !== ge || ie === "value") && r(M, ie, ge, be, S, p);
        }
      }
      T & 1 && c.children !== f.children && u(M, f.children);
    } else !R && _ == null && O(M, L, V, p, S);
    ((z = V.onVnodeUpdated) || B) && Te(() => {
      z && ze(z, p, f, c), B && _t(f, c, p, "updated");
    }, C);
  }, A = (c, f, p, C, S, b, R) => {
    for (let M = 0; M < f.length; M++) {
      const T = c[M], _ = f[M], B = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === ee || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !It(T, _) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 198) ? h(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      y(
        T,
        _,
        B,
        null,
        C,
        S,
        b,
        R,
        !0
      );
    }
  }, O = (c, f, p, C, S) => {
    if (f !== p) {
      if (f !== le)
        for (const b in f)
          !ss(b) && !(b in p) && r(
            c,
            b,
            f[b],
            null,
            S,
            C
          );
      for (const b in p) {
        if (ss(b)) continue;
        const R = p[b], M = f[b];
        R !== M && b !== "value" && r(c, b, M, R, S, C);
      }
      "value" in p && r(c, "value", f.value, p.value, S);
    }
  }, I = (c, f, p, C, S, b, R, M, T) => {
    const _ = f.el = c ? c.el : l(""), B = f.anchor = c ? c.anchor : l("");
    let { patchFlag: L, dynamicChildren: V, slotScopeIds: z } = f;
    z && (M = M ? M.concat(z) : z), c == null ? (n(_, p, C), n(B, p, C), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      p,
      B,
      S,
      b,
      R,
      M,
      T
    )) : L > 0 && L & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === V.length ? (A(
      c.dynamicChildren,
      V,
      p,
      S,
      b,
      R,
      M
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || S && f === S.subTree) && so(
      c,
      f,
      !0
      /* shallow */
    )) : ce(
      c,
      f,
      p,
      B,
      S,
      b,
      R,
      M,
      T
    );
  }, J = (c, f, p, C, S, b, R, M, T) => {
    f.slotScopeIds = M, c == null ? f.shapeFlag & 512 ? S.ctx.activate(
      f,
      p,
      C,
      R,
      T
    ) : pe(
      f,
      p,
      C,
      S,
      b,
      R,
      T
    ) : Ae(c, f, T);
  }, pe = (c, f, p, C, S, b, R) => {
    const M = c.component = ha(
      c,
      C,
      S
    );
    if (tn(c) && (M.ctx.renderer = Jt), pa(M, !1, R), M.asyncDep) {
      if (S && S.registerDep(M, ae, R), !c.el) {
        const T = M.subTree = se(Ie);
        U(null, T, f, p), c.placeholder = T.el;
      }
    } else
      ae(
        M,
        c,
        f,
        p,
        S,
        b,
        R
      );
  }, Ae = (c, f, p) => {
    const C = f.component = c.component;
    if (Jl(c, f, p))
      if (C.asyncDep && !C.asyncResolved) {
        X(C, f, p);
        return;
      } else
        C.next = f, C.update();
    else
      f.el = c.el, C.vnode = f;
  }, ae = (c, f, p, C, S, b, R) => {
    const M = () => {
      if (c.isMounted) {
        let { next: L, bu: V, u: z, parent: Z, vnode: oe } = c;
        {
          const Ke = no(c);
          if (Ke) {
            L && (L.el = oe.el, X(c, L, R)), Ke.asyncDep.then(() => {
              Te(() => {
                c.isUnmounted || _();
              }, S);
            });
            return;
          }
        }
        let ie = L, ge;
        xt(c, !1), L ? (L.el = oe.el, X(c, L, R)) : L = oe, V && Ls(V), (ge = L.props && L.props.onVnodeBeforeUpdate) && ze(ge, Z, L, oe), xt(c, !0);
        const be = yi(c), Be = c.subTree;
        c.subTree = be, y(
          Be,
          be,
          // parent may have changed if it's in a teleport
          h(Be.el),
          // anchor may have changed if it's in a fragment
          Is(Be),
          c,
          S,
          b
        ), L.el = be.el, ie === null && Gl(c, be.el), z && Te(z, S), (ge = L.props && L.props.onVnodeUpdated) && Te(
          () => ze(ge, Z, L, oe),
          S
        );
      } else {
        let L;
        const { el: V, props: z } = f, { bm: Z, m: oe, parent: ie, root: ge, type: be } = c, Be = ls(f);
        xt(c, !1), Z && Ls(Z), !Be && (L = z && z.onVnodeBeforeMount) && ze(L, ie, f), xt(c, !0);
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
            S,
            b
          ), f.el = Ke.el;
        }
        if (oe && Te(oe, S), !Be && (L = z && z.onVnodeMounted)) {
          const Ke = f;
          Te(
            () => ze(L, ie, Ke),
            S
          );
        }
        (f.shapeFlag & 256 || ie && ls(ie.vnode) && ie.vnode.shapeFlag & 256) && c.a && Te(c.a, S), c.isMounted = !0, f = p = C = null;
      }
    };
    c.scope.on();
    const T = c.effect = new fr(M);
    c.scope.off();
    const _ = c.update = T.run.bind(T), B = c.job = T.runIfDirty.bind(T);
    B.i = c, B.id = c.uid, T.scheduler = () => qn(B), xt(c, !0), _();
  }, X = (c, f, p) => {
    f.component = c;
    const C = c.vnode.props;
    c.vnode = f, c.next = null, Yl(c, f.props, C, p), ea(c, f.children, p), Qe(), ui(c), et();
  }, ce = (c, f, p, C, S, b, R, M, T = !1) => {
    const _ = c && c.children, B = c ? c.shapeFlag : 0, L = f.children, { patchFlag: V, shapeFlag: z } = f;
    if (V > 0) {
      if (V & 128) {
        Cs(
          _,
          L,
          p,
          C,
          S,
          b,
          R,
          M,
          T
        );
        return;
      } else if (V & 256) {
        yt(
          _,
          L,
          p,
          C,
          S,
          b,
          R,
          M,
          T
        );
        return;
      }
    }
    z & 8 ? (B & 16 && zt(_, S, b), L !== _ && u(p, L)) : B & 16 ? z & 16 ? Cs(
      _,
      L,
      p,
      C,
      S,
      b,
      R,
      M,
      T
    ) : zt(_, S, b, !0) : (B & 8 && u(p, ""), z & 16 && W(
      L,
      p,
      C,
      S,
      b,
      R,
      M,
      T
    ));
  }, yt = (c, f, p, C, S, b, R, M, T) => {
    c = c || Ft, f = f || Ft;
    const _ = c.length, B = f.length, L = Math.min(_, B);
    let V;
    for (V = 0; V < L; V++) {
      const z = f[V] = T ? rt(f[V]) : qe(f[V]);
      y(
        c[V],
        z,
        p,
        null,
        S,
        b,
        R,
        M,
        T
      );
    }
    _ > B ? zt(
      c,
      S,
      b,
      !0,
      !1,
      L
    ) : W(
      f,
      p,
      C,
      S,
      b,
      R,
      M,
      T,
      L
    );
  }, Cs = (c, f, p, C, S, b, R, M, T) => {
    let _ = 0;
    const B = f.length;
    let L = c.length - 1, V = B - 1;
    for (; _ <= L && _ <= V; ) {
      const z = c[_], Z = f[_] = T ? rt(f[_]) : qe(f[_]);
      if (It(z, Z))
        y(
          z,
          Z,
          p,
          null,
          S,
          b,
          R,
          M,
          T
        );
      else
        break;
      _++;
    }
    for (; _ <= L && _ <= V; ) {
      const z = c[L], Z = f[V] = T ? rt(f[V]) : qe(f[V]);
      if (It(z, Z))
        y(
          z,
          Z,
          p,
          null,
          S,
          b,
          R,
          M,
          T
        );
      else
        break;
      L--, V--;
    }
    if (_ > L) {
      if (_ <= V) {
        const z = V + 1, Z = z < B ? f[z].el : C;
        for (; _ <= V; )
          y(
            null,
            f[_] = T ? rt(f[_]) : qe(f[_]),
            p,
            Z,
            S,
            b,
            R,
            M,
            T
          ), _++;
      }
    } else if (_ > V)
      for (; _ <= L; )
        He(c[_], S, b, !0), _++;
    else {
      const z = _, Z = _, oe = /* @__PURE__ */ new Map();
      for (_ = Z; _ <= V; _++) {
        const Me = f[_] = T ? rt(f[_]) : qe(f[_]);
        Me.key != null && oe.set(Me.key, _);
      }
      let ie, ge = 0;
      const be = V - Z + 1;
      let Be = !1, Ke = 0;
      const Gt = new Array(be);
      for (_ = 0; _ < be; _++) Gt[_] = 0;
      for (_ = z; _ <= L; _++) {
        const Me = c[_];
        if (ge >= be) {
          He(Me, S, b, !0);
          continue;
        }
        let We;
        if (Me.key != null)
          We = oe.get(Me.key);
        else
          for (ie = Z; ie <= V; ie++)
            if (Gt[ie - Z] === 0 && It(Me, f[ie])) {
              We = ie;
              break;
            }
        We === void 0 ? He(Me, S, b, !0) : (Gt[We - Z] = _ + 1, We >= Ke ? Ke = We : Be = !0, y(
          Me,
          f[We],
          p,
          null,
          S,
          b,
          R,
          M,
          T
        ), ge++);
      }
      const ni = Be ? ia(Gt) : Ft;
      for (ie = ni.length - 1, _ = be - 1; _ >= 0; _--) {
        const Me = Z + _, We = f[Me], ii = f[Me + 1], ri = Me + 1 < B ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ii.el || io(ii)
        ) : C;
        Gt[_] === 0 ? y(
          null,
          We,
          p,
          ri,
          S,
          b,
          R,
          M,
          T
        ) : Be && (ie < 0 || _ !== ni[ie] ? bt(We, p, ri, 2) : ie--);
      }
    }
  }, bt = (c, f, p, C, S = null) => {
    const { el: b, type: R, transition: M, children: T, shapeFlag: _ } = c;
    if (_ & 6) {
      bt(c.component.subTree, f, p, C);
      return;
    }
    if (_ & 128) {
      c.suspense.move(f, p, C);
      return;
    }
    if (_ & 64) {
      R.move(c, f, p, Jt);
      return;
    }
    if (R === ee) {
      n(b, f, p);
      for (let L = 0; L < T.length; L++)
        bt(T[L], f, p, C);
      n(c.anchor, f, p);
      return;
    }
    if (R === $s) {
      q(c, f, p);
      return;
    }
    if (C !== 2 && _ & 1 && M)
      if (C === 0)
        M.persisted && !b[$e] ? n(b, f, p) : (M.beforeEnter(b), n(b, f, p), Te(() => M.enter(b), S));
      else {
        const { leave: L, delayLeave: V, afterLeave: z } = M, Z = () => {
          c.ctx.isUnmounted ? i(b) : n(b, f, p);
        }, oe = () => {
          const ie = b._isLeaving || !!b[$e];
          b._isLeaving && b[$e](
            !0
            /* cancelled */
          ), M.persisted && !ie ? Z() : L(b, () => {
            Z(), z && z();
          });
        };
        V ? V(b, Z, oe) : oe();
      }
    else
      n(b, f, p);
  }, He = (c, f, p, C = !1, S = !1) => {
    const {
      type: b,
      props: R,
      ref: M,
      children: T,
      dynamicChildren: _,
      shapeFlag: B,
      patchFlag: L,
      dirs: V,
      cacheIndex: z,
      memo: Z
    } = c;
    if (L === -2 && (S = !1), M != null && (Qe(), os(M, null, p, c, !0), et()), z != null && (f.renderCache[z] = void 0), B & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const oe = B & 1 && V, ie = !ls(c);
    let ge;
    if (ie && (ge = R && R.onVnodeBeforeUnmount) && ze(ge, f, c), B & 6)
      So(c.component, p, C);
    else {
      if (B & 128) {
        c.suspense.unmount(p, C);
        return;
      }
      oe && _t(c, null, f, "beforeUnmount"), B & 64 ? c.type.remove(
        c,
        f,
        p,
        Jt,
        C
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== ee || L > 0 && L & 64) ? zt(
        _,
        f,
        p,
        !1,
        !0
      ) : (b === ee && L & 384 || !S && B & 16) && zt(T, f, p), C && ti(c);
    }
    const be = Z != null && z == null;
    (ie && (ge = R && R.onVnodeUnmounted) || oe || be) && Te(() => {
      ge && ze(ge, f, c), oe && _t(c, null, f, "unmounted"), be && (c.el = null);
    }, p);
  }, ti = (c) => {
    const { type: f, el: p, anchor: C, transition: S } = c;
    if (f === ee) {
      xo(p, C);
      return;
    }
    if (f === $s) {
      P(c);
      return;
    }
    const b = () => {
      i(p), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (c.shapeFlag & 1 && S && !S.persisted) {
      const { leave: R, delayLeave: M } = S, T = () => R(p, b);
      M ? M(c.el, b, T) : T();
    } else
      b();
  }, xo = (c, f) => {
    let p;
    for (; c !== f; )
      p = m(c), i(c), c = p;
    i(f);
  }, So = (c, f, p) => {
    const { bum: C, scope: S, job: b, subTree: R, um: M, m: T, a: _ } = c;
    xi(T), xi(_), C && Ls(C), S.stop(), b && (b.flags |= 8, He(R, c, f, p)), M && Te(M, f), Te(() => {
      c.isUnmounted = !0;
    }, f);
  }, zt = (c, f, p, C = !1, S = !1, b = 0) => {
    for (let R = b; R < c.length; R++)
      He(c[R], f, p, C, S);
  }, Is = (c) => {
    if (c.shapeFlag & 6)
      return Is(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const f = m(c.anchor || c.el), p = f && f[bl];
    return p ? m(p) : f;
  };
  let cn = !1;
  const si = (c, f, p) => {
    let C;
    c == null ? f._vnode && (He(f._vnode, null, null, !0), C = f._vnode.component) : y(
      f._vnode || null,
      c,
      f,
      null,
      null,
      null,
      p
    ), f._vnode = c, cn || (cn = !0, ui(C), Ar(), cn = !1);
  }, Jt = {
    p: y,
    um: He,
    m: bt,
    r: ti,
    mt: pe,
    mc: W,
    pc: ce,
    pbc: A,
    n: Is,
    o: e
  };
  return {
    render: si,
    hydrate: void 0,
    createApp: Vl(si)
  };
}
function vn({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function xt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function na(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function so(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (H(n) && H(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = rt(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && so(o, l)), l.type === rn && (l.patchFlag === -1 && (l = i[r] = rt(l)), l.el = o.el), l.type === Ie && !l.el && (l.el = o.el);
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
  t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : hl(e);
}
const ee = /* @__PURE__ */ Symbol.for("v-fgt"), rn = /* @__PURE__ */ Symbol.for("v-txt"), Ie = /* @__PURE__ */ Symbol.for("v-cmt"), $s = /* @__PURE__ */ Symbol.for("v-stc"), cs = [];
let Pe = null;
function D(e = !1) {
  cs.push(Pe = e ? null : []);
}
function oa() {
  cs.pop(), Pe = cs[cs.length - 1] || null;
}
let vs = 1;
function Vs(e, t = !1) {
  vs += e, e < 0 && Pe && t && (Pe.hasOnce = !0);
}
function oo(e) {
  return e.dynamicChildren = vs > 0 ? Pe || Ft : null, oa(), vs > 0 && Pe && Pe.push(e), e;
}
function F(e, t, s, n, i, r) {
  return oo(
    v(
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
  return oo(
    se(
      e,
      t,
      s,
      n,
      i,
      !0
    )
  );
}
function Hs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function It(e, t) {
  return e.type === t.type && e.key === t.key;
}
const lo = ({ key: e }) => e ?? null, ks = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? de(e) || /* @__PURE__ */ he(e) || G(e) ? { i: Oe, r: e, k: t, f: !!s } : e : null);
function v(e, t = null, s = null, n = 0, i = null, r = e === ee ? 0 : 1, o = !1, l = !1) {
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
  return l ? (Bs(a, s), r & 128 && e.normalize(a)) : s && (a.shapeFlag |= de(s) ? 8 : 16), vs > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Pe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Pe.push(a), a;
}
const se = la;
function la(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === $l) && (e = Ie), Hs(e)) {
    const l = mt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Bs(l, s), vs > 0 && !r && Pe && (l.shapeFlag & 6 ? Pe[Pe.indexOf(e)] = l : Pe.push(l)), l.patchFlag = -2, l;
  }
  if (ya(e) && (e = e.__vccOpts), t) {
    t = aa(t);
    let { class: l, style: a } = t;
    l && !de(l) && (t.class = De(l)), ne(a) && (/* @__PURE__ */ Qs(a) && !H(a) && (a = ve({}, a)), t.style = jn(a));
  }
  const o = de(e) ? 1 : ro(e) ? 128 : kr(e) ? 64 : ne(e) ? 4 : G(e) ? 2 : 0;
  return v(
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
  return e ? /* @__PURE__ */ Qs(e) || Yr(e) ? ve({}, e) : e : null;
}
function mt(e, t, s = !1, n = !1) {
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
      s && r ? H(r) ? r.concat(ks(t)) : [r, ks(t)] : ks(t)
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
    patchFlag: t && e.type !== ee ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && mt(e.ssContent),
    ssFallback: e.ssFallback && mt(e.ssFallback),
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
  return se(rn, null, e, t);
}
function Ms(e, t) {
  const s = se($s, null, e);
  return s.staticCount = t, s;
}
function xe(e = "", t = !1) {
  return t ? (D(), gt(Ie, null, e)) : se(Ie, null, e);
}
function qe(e) {
  return e == null || typeof e == "boolean" ? se(Ie) : H(e) ? se(
    ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Hs(e) ? rt(e) : se(rn, null, String(e));
}
function rt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : mt(e);
}
function Bs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (H(t))
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
  else if (G(t)) {
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
        t.class !== n.class && (t.class = De([t.class, n.class]));
      else if (i === "style")
        t.style = jn([t.style, n.style]);
      else if (zs(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(H(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Js(i) && (t[i] = o);
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
    propsDefaults: le,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: le,
    data: le,
    props: le,
    attrs: le,
    slots: le,
    refs: le,
    setupState: le,
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
let Ee = null;
const ei = () => Ee || Oe;
let Ks, $n;
{
  const e = Ys(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Ks = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Ee = s
  ), $n = t(
    "__VUE_SSR_SETTERS__",
    (s) => ys = s
  );
}
const Ss = (e) => {
  const t = Ee;
  return Ks(e), e.scope.on(), () => {
    e.scope.off(), Ks(t);
  };
}, Si = () => {
  Ee && Ee.scope.off(), Ks(null);
};
function ao(e) {
  return e.vnode.shapeFlag & 4;
}
let ys = !1;
function pa(e, t = !1, s = !1) {
  t && $n(t);
  const { props: n, children: i } = e.vnode, r = ao(e);
  ql(e, n, r, t), Ql(e, i, s || t);
  const o = r ? ga(e, t) : void 0;
  return t && $n(!1), o;
}
function ga(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, kl);
  const { setup: n } = s;
  if (n) {
    Qe();
    const i = e.setupContext = n.length > 1 ? va(e) : null, r = Ss(e), o = xs(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = er(o);
    if (et(), r(), (l || e.sp) && !ls(e) && jr(e), l) {
      if (o.then(Si, Si), t)
        return o.then((a) => {
          wi(e, a);
        }).catch((a) => {
          en(a, e, 0);
        });
      e.asyncDep = o;
    } else
      wi(e, o);
  } else
    co(e);
}
function wi(e, t, s) {
  G(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ne(t) && (e.setupState = Ir(t)), co(e);
}
function co(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Ze);
  {
    const i = Ss(e);
    Qe();
    try {
      Ol(e);
    } finally {
      et(), i();
    }
  }
}
const ma = {
  get(e, t) {
    return _e(e, "get", ""), e[t];
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
function on(e) {
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
  return G(e) && "__vccOpts" in e;
}
const Xe = (e, t) => /* @__PURE__ */ al(e, t, ys);
function ba(e, t, s) {
  try {
    Vs(-1);
    const n = arguments.length;
    return n === 2 ? ne(t) && !H(t) ? Hs(t) ? se(e, null, [t]) : se(e, t) : se(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Hs(s) && (s = [s]), se(e, t, s));
  } finally {
    Vs(1);
  }
}
const _a = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let kn;
const Ci = typeof window < "u" && window.trustedTypes;
if (Ci)
  try {
    kn = /* @__PURE__ */ Ci.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const uo = kn ? (e) => kn.createHTML(e) : (e) => e, xa = "http://www.w3.org/2000/svg", Sa = "http://www.w3.org/1998/Math/MathML", nt = typeof document < "u" ? document : null, Ii = nt && /* @__PURE__ */ nt.createElement("template"), wa = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? nt.createElementNS(xa, e) : t === "mathml" ? nt.createElementNS(Sa, e) : s ? nt.createElement(e, { is: s }) : nt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => nt.createTextNode(e),
  createComment: (e) => nt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => nt.querySelector(e),
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
}, Ca = /* @__PURE__ */ ve(
  {},
  Or,
  fo
), Ia = (e) => (e.displayName = "Transition", e.props = Ca, e), Ea = /* @__PURE__ */ Ia(
  (e, { slots: t }) => ba(Sl, Ta(e), t)
), St = (e, t = []) => {
  H(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Ei = (e) => e ? H(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ta(e) {
  const t = {};
  for (const I in e)
    I in fo || (t[I] = e[I]);
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
    leaveActiveClass: m = `${s}-leave-active`,
    leaveToClass: g = `${s}-leave-to`
  } = e, w = Aa(i), y = w && w[0], k = w && w[1], {
    onBeforeEnter: U,
    onEnter: j,
    onEnterCancelled: q,
    onLeave: P,
    onLeaveCancelled: K,
    onBeforeAppear: fe = U,
    onAppear: re = j,
    onAppearCancelled: W = q
  } = t, x = (I, J, pe, Ae) => {
    I._enterCancelled = Ae, wt(I, J ? u : l), wt(I, J ? d : o), pe && pe();
  }, A = (I, J) => {
    I._isLeaving = !1, wt(I, h), wt(I, g), wt(I, m), J && J();
  }, O = (I) => (J, pe) => {
    const Ae = I ? re : j, ae = () => x(J, I, pe);
    St(Ae, [J, ae]), Ti(() => {
      wt(J, I ? a : r), st(J, I ? u : l), Ei(Ae) || Ai(J, n, y, ae);
    });
  };
  return ve(t, {
    onBeforeEnter(I) {
      St(U, [I]), st(I, r), st(I, o);
    },
    onBeforeAppear(I) {
      St(fe, [I]), st(I, a), st(I, d);
    },
    onEnter: O(!1),
    onAppear: O(!0),
    onLeave(I, J) {
      I._isLeaving = !0;
      const pe = () => A(I, J);
      st(I, h), I._enterCancelled ? (st(I, m), Ri(I)) : (Ri(I), st(I, m)), Ti(() => {
        I._isLeaving && (wt(I, h), st(I, g), Ei(P) || Ai(I, n, k, pe));
      }), St(P, [I, pe]);
    },
    onEnterCancelled(I) {
      x(I, !1, void 0, !0), St(q, [I]);
    },
    onAppearCancelled(I) {
      x(I, !0, void 0, !0), St(W, [I]);
    },
    onLeaveCancelled(I) {
      A(I), St(K, [I]);
    }
  });
}
function Aa(e) {
  if (e == null)
    return null;
  if (ne(e))
    return [yn(e.enter), yn(e.leave)];
  {
    const t = yn(e);
    return [t, t];
  }
}
function yn(e) {
  return To(e);
}
function st(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[bs] || (e[bs] = /* @__PURE__ */ new Set())).add(t);
}
function wt(e, t) {
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
    e.removeEventListener(d, m), r();
  }, m = (g) => {
    g.target === e && ++u >= a && h();
  };
  setTimeout(() => {
    u < a && h();
  }, l + 1), e.addEventListener(d, m);
}
function Pa(e, t) {
  const s = window.getComputedStyle(e), n = (w) => (s[w] || "").split(", "), i = n(`${ft}Delay`), r = n(`${ft}Duration`), o = Mi(i, r), l = n(`${Xt}Delay`), a = n(`${Xt}Duration`), d = Mi(l, a);
  let u = null, h = 0, m = 0;
  t === ft ? o > 0 && (u = ft, h = o, m = r.length) : t === Xt ? d > 0 && (u = Xt, h = d, m = a.length) : (h = Math.max(o, d), u = h > 0 ? o > d ? ft : Xt : null, m = u ? u === ft ? r.length : a.length : 0);
  const g = u === ft && /\b(?:transform|all)(?:,|$)/.test(
    n(`${ft}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: m,
    hasTransform: g
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
  const n = e.style, i = de(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (de(t))
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
        !de(t) && t ? t[o] : void 0,
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
  if (H(s))
    s.forEach((n) => es(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Da(e, t);
    $i.test(s) ? e.setProperty(
      vt(n),
      s.replace($i, ""),
      "important"
    ) : e[n] = s;
  }
}
const ki = ["Webkit", "Moz", "ms"], bn = {};
function Da(e, t) {
  const s = bn[t];
  if (s)
    return s;
  let n = Ue(t);
  if (n !== "filter" && n in e)
    return bn[t] = n;
  n = nr(n);
  for (let i = 0; i < ki.length; i++) {
    const r = ki[i] + n;
    if (r in e)
      return bn[t] = r;
  }
  return t;
}
function Na(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && de(n) && s === n;
}
const Oi = "http://www.w3.org/1999/xlink";
function Di(e, t, s, n, i, r = $o(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Oi, t.slice(6, t.length)) : e.setAttributeNS(Oi, t, s) : s == null || r && !rr(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ne(s) ? String(s) : s
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
function Dt(e, t, s, n) {
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
    const [l, a] = Ha(t);
    if (n) {
      const d = r[t] = Wa(
        n,
        i
      );
      Dt(e, l, d, a);
    } else o && (Fa(e, l, o, a), r[t] = void 0);
  }
}
const ja = /(Once|Passive|Capture)$/, Va = /^on:?(?:Once|Passive|Capture)$/;
function Ha(e) {
  let t, s;
  for (; (s = e.match(ja)) && !Va.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : vt(e.slice(2)), t];
}
let _n = 0;
const Ba = /* @__PURE__ */ Promise.resolve(), Ka = () => _n || (Ba.then(() => _n = 0), _n = Date.now());
function Wa(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const i = s.value;
    if (H(i)) {
      const r = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        r.call(n), n._stopped = !0;
      };
      const o = i.slice(), l = [n];
      for (let a = 0; a < o.length && !n._stopped; a++) {
        const d = o[a];
        d && Fe(
          d,
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
  return s.value = e, s.attached = Ka(), s;
}
const Ui = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, za = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? Ra(e, n, o) : t === "style" ? Oa(e, s, n) : zs(t) ? Js(t) || Ua(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ja(e, t, n, o)) ? (Ni(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Di(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ga(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !de(n))) ? Ni(e, Ue(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Di(e, t, n, o));
};
function Ja(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ui(t) && G(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ui(t) && de(s) ? !1 : t in e;
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
  return H(t) ? (s) => Ls(t, s) : t;
};
function qa(e) {
  e.target.composing = !0;
}
function Vi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const xn = /* @__PURE__ */ Symbol("_assign");
function Hi(e, t, s) {
  return t && (e = e.trim()), s && (e = Un(e)), e;
}
const ts = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[xn] = ji(i);
    const r = n || i.props && i.props.type === "number";
    Dt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[xn](Hi(e.value, s, r));
    }), (s || r) && Dt(e, "change", () => {
      e.value = Hi(e.value, s, r);
    }), t || (Dt(e, "compositionstart", qa), Dt(e, "compositionend", Vi), Dt(e, "change", Vi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: r } }, o) {
    if (e[xn] = ji(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Un(e.value) : e.value, a = t ?? "";
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
}, Et = (e, t) => {
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
    const r = vt(i.key);
    if (t.some(
      (o) => o === r || Za[o] === r
    ))
      return e(i);
  });
}, Qa = /* @__PURE__ */ ve({ patchProp: za }, wa);
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
    !G(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
  return de(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let go;
const ln = (e) => go = e, mo = (
  /* istanbul ignore next */
  Symbol()
);
function On(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var us;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(us || (us = {}));
function nc() {
  const e = cr(!0), t = e.run(() => /* @__PURE__ */ ke({}));
  let s = [], n = [];
  const i = Gn({
    install(r) {
      ln(i), i._a = r, r.provide(mo, i), r.config.globalProperties.$pinia = i, n.forEach((o) => s.push(o)), n = [];
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
function $t(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const ic = (e) => e(), Wi = Symbol(), Sn = Symbol();
function Dn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    On(i) && On(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ he(n) && !/* @__PURE__ */ at(n) ? e[s] = Dn(i, n) : e[s] = n;
  }
  return e;
}
const rc = (
  /* istanbul ignore next */
  Symbol()
);
function oc(e) {
  return !On(e) || !e.hasOwnProperty(rc);
}
const { assign: dt } = Object;
function lc(e) {
  return !!(/* @__PURE__ */ he(e) && e.effect);
}
function ac(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t, l = s.state.value[e];
  let a;
  function d() {
    l || (s.state.value[e] = i ? i() : {});
    const u = /* @__PURE__ */ il(s.state.value[e]);
    return dt(u, r, Object.keys(o || {}).reduce((h, m) => (h[m] = Gn(Xe(() => {
      ln(s);
      const g = s._s.get(e);
      return o[m].call(g, g);
    })), h), {}));
  }
  return a = yo(e, d, t, s, n, !0), a;
}
function yo(e, t, s = {}, n, i, r) {
  let o;
  const l = dt({ actions: {} }, s), a = { deep: !0 };
  let d, u, h = [], m = [], g;
  const w = n.state.value[e];
  !r && !w && (n.state.value[e] = {});
  let y;
  function k(W) {
    let x;
    d = u = !1, typeof W == "function" ? (W(n.state.value[e]), x = {
      type: us.patchFunction,
      storeId: e,
      events: g
    }) : (Dn(n.state.value[e], W), x = {
      type: us.patchObject,
      payload: W,
      storeId: e,
      events: g
    });
    const A = y = Symbol();
    pt().then(() => {
      y === A && (d = !0);
    }), u = !0, $t(h, x, n.state.value[e]);
  }
  const U = r ? function() {
    const { state: x } = s, A = x ? x() : {};
    this.$patch((O) => {
      dt(O, A);
    });
  } : (
    /* istanbul ignore next */
    vo
  );
  function j() {
    o.stop(), h = [], m = [], n._s.delete(e);
  }
  const q = (W, x = "") => {
    if (Wi in W)
      return W[Sn] = x, W;
    const A = function() {
      ln(n);
      const O = Array.from(arguments), I = [], J = [];
      function pe(X) {
        I.push(X);
      }
      function Ae(X) {
        J.push(X);
      }
      $t(m, {
        args: O,
        name: A[Sn],
        store: K,
        after: pe,
        onError: Ae
      });
      let ae;
      try {
        ae = W.apply(this && this.$id === e ? this : K, O);
      } catch (X) {
        throw $t(J, X), X;
      }
      return ae instanceof Promise ? ae.then((X) => ($t(I, X), X)).catch((X) => ($t(J, X), Promise.reject(X))) : ($t(I, ae), ae);
    };
    return A[Wi] = !0, A[Sn] = x, A;
  }, P = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: Ki.bind(null, m),
    $patch: k,
    $reset: U,
    $subscribe(W, x = {}) {
      const A = Ki(h, W, x.detached, () => O()), O = o.run(() => Vt(() => n.state.value[e], (I) => {
        (x.flush === "sync" ? u : d) && W({
          storeId: e,
          type: us.direct,
          events: g
        }, I);
      }, dt({}, a, x)));
      return A;
    },
    $dispose: j
  }, K = /* @__PURE__ */ Zs(P);
  n._s.set(e, K);
  const re = (n._a && n._a.runWithContext || ic)(() => n._e.run(() => (o = cr()).run(() => t({ action: q }))));
  for (const W in re) {
    const x = re[W];
    if (/* @__PURE__ */ he(x) && !lc(x) || /* @__PURE__ */ at(x))
      r || (w && oc(x) && (/* @__PURE__ */ he(x) ? x.value = w[W] : Dn(x, w[W])), n.state.value[e][W] = x);
    else if (typeof x == "function") {
      const A = q(x, W);
      re[W] = A, l.actions[W] = x;
    }
  }
  return dt(K, re), dt(/* @__PURE__ */ Q(K), re), Object.defineProperty(K, "$state", {
    get: () => n.state.value[e],
    set: (W) => {
      k((x) => {
        dt(x, W);
      });
    }
  }), n._p.forEach((W) => {
    dt(K, o.run(() => W({
      store: K,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), w && r && s.hydrate && s.hydrate(K.$state, w), d = !0, u = !0, K;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function an(e, t, s) {
  let n, i;
  const r = typeof t == "function";
  typeof e == "string" ? (n = e, i = r ? s : t) : (i = e, n = e.id);
  function o(l, a) {
    const d = gl();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (d ? rs(mo, null) : null), l && ln(l), l = go, l._s.has(n) || (r ? yo(n, t, i, l) : ac(n, i, l)), l._s.get(n);
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
function wn() {
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
const we = /* @__PURE__ */ an("settings", {
  state: () => ({
    settings: wn(),
    storage: null
  }),
  getters: {
    defaults: () => wn()
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = wn();
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
      return this.ctx().extensionSettings[Nt] ?? null;
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
      s.extensionSettings[Nt] = t, s.saveSettingsDebounced();
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
    return `${Nt}__settings`;
  }
  cachePrefix() {
    return `${Nt}:cache:`;
  }
  cacheKey(t) {
    return `${this.cachePrefix()}${t}`;
  }
}
function hc() {
  return new dc();
}
const Nt = "st-music-player", Gi = "stmp_cursor", qi = "stmp_userlist";
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
let kt = null;
function bc() {
  if (kt) return kt;
  try {
    if (typeof SillyTavern < "u") {
      const e = SillyTavern.getContext();
      e?.getCurrentLocale && (kt = e.getCurrentLocale());
    }
  } catch {
  }
  return kt || (kt = (typeof navigator < "u" ? navigator.language || navigator.userLanguage : "en")?.toLowerCase() || "en"), kt;
}
function N(e) {
  return bc().startsWith("zh") ? yc[e] ?? e : e;
}
function Ps() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const ws = /* @__PURE__ */ an("playlist", {
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
        console.warn(`[playlist] resolve failed for "${t.song}"`), typeof toastr < "u" && toastr.warning(`${N("Cannot play")}: ${t.song}`);
        return;
      }
      await Pt().loadAndPlay(i);
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
}), Pt = /* @__PURE__ */ an("player", {
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
      const t = Pt();
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
}), _c = /* @__PURE__ */ an("search", {
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
}, Ec = /* @__PURE__ */ Mt({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (D(), F("svg", {
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
      e.name === "play" ? (D(), F("polygon", Sc)) : e.name === "pause" ? (D(), F(ee, { key: 1 }, [
        s[0] || (s[0] = v("rect", {
          x: "6",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[1] || (s[1] = v("rect", {
          x: "14",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1))
      ], 64)) : e.name === "prev" ? (D(), F(ee, { key: 2 }, [
        s[2] || (s[2] = v("polygon", {
          points: "19 20 9 12 19 4 19 20",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[3] || (s[3] = v("line", {
          x1: "5",
          y1: "19",
          x2: "5",
          y2: "5"
        }, null, -1))
      ], 64)) : e.name === "next" ? (D(), F(ee, { key: 3 }, [
        s[4] || (s[4] = v("polygon", {
          points: "5 4 15 12 5 20 5 4",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[5] || (s[5] = v("line", {
          x1: "19",
          y1: "5",
          x2: "19",
          y2: "19"
        }, null, -1))
      ], 64)) : e.name === "repeat" ? (D(), F(ee, { key: 4 }, [
        s[6] || (s[6] = v("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = v("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = v("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = v("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (D(), F(ee, { key: 5 }, [
        s[10] || (s[10] = Ms('<polyline points="17 1 21 5 17 9" data-v-4bfc4099></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-4bfc4099></path><polyline points="7 23 3 19 7 15" data-v-4bfc4099></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-4bfc4099></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-4bfc4099>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (D(), F(ee, { key: 6 }, [
        s[11] || (s[11] = Ms('<polyline points="16 3 21 3 21 8" data-v-4bfc4099></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-4bfc4099></line><polyline points="21 16 21 21 16 21" data-v-4bfc4099></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-4bfc4099></line><line x1="4" y1="4" x2="9" y2="9" data-v-4bfc4099></line>', 5))
      ], 64)) : e.name === "search" ? (D(), F(ee, { key: 7 }, [
        s[12] || (s[12] = v("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1)),
        s[13] || (s[13] = v("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1))
      ], 64)) : e.name === "plus" ? (D(), F(ee, { key: 8 }, [
        s[14] || (s[14] = v("line", {
          x1: "12",
          y1: "5",
          x2: "12",
          y2: "19"
        }, null, -1)),
        s[15] || (s[15] = v("line", {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12"
        }, null, -1))
      ], 64)) : e.name === "x" ? (D(), F(ee, { key: 9 }, [
        s[16] || (s[16] = v("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }, null, -1)),
        s[17] || (s[17] = v("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        }, null, -1))
      ], 64)) : e.name === "chevron-down" ? (D(), F("polyline", wc)) : e.name === "chevron-up" ? (D(), F("polyline", Cc)) : e.name === "music" ? (D(), F(ee, { key: 12 }, [
        s[18] || (s[18] = v("path", { d: "M9 18V5l12-2v13" }, null, -1)),
        s[19] || (s[19] = v("circle", {
          cx: "6",
          cy: "18",
          r: "3"
        }, null, -1)),
        s[20] || (s[20] = v("circle", {
          cx: "18",
          cy: "16",
          r: "3"
        }, null, -1))
      ], 64)) : e.name === "volume" ? (D(), F(ee, { key: 13 }, [
        s[21] || (s[21] = v("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = v("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = v("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (D(), F(ee, { key: 14 }, [
        s[24] || (s[24] = v("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[25] || (s[25] = v("line", {
          x1: "23",
          y1: "9",
          x2: "17",
          y2: "15"
        }, null, -1)),
        s[26] || (s[26] = v("line", {
          x1: "17",
          y1: "9",
          x2: "23",
          y2: "15"
        }, null, -1))
      ], 64)) : e.name === "check" ? (D(), F("polyline", Ic)) : e.name === "loader" ? (D(), F(ee, { key: 16 }, [
        s[27] || (s[27] = Ms('<line x1="12" y1="2" x2="12" y2="6" data-v-4bfc4099></line><line x1="12" y1="18" x2="12" y2="22" data-v-4bfc4099></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-4bfc4099></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-4bfc4099></line><line x1="2" y1="12" x2="6" y2="12" data-v-4bfc4099></line><line x1="18" y1="12" x2="22" y2="12" data-v-4bfc4099></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-4bfc4099></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-4bfc4099></line>', 8))
      ], 64)) : e.name === "list-music" ? (D(), F(ee, { key: 17 }, [
        s[28] || (s[28] = Ms('<path d="M3 12h11" data-v-4bfc4099></path><path d="M3 6h11" data-v-4bfc4099></path><path d="M3 18h7" data-v-4bfc4099></path><path d="M16 8v13" data-v-4bfc4099></path><circle cx="14" cy="21" r="2" data-v-4bfc4099></circle><path d="M16 8l5-2v3" data-v-4bfc4099></path>', 6))
      ], 64)) : xe("", !0)
    ], 8, xc));
  }
}), Rt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, ye = /* @__PURE__ */ Rt(Ec, [["__scopeId", "data-v-4bfc4099"]]), Tc = { class: "stmp-collapsed-bar" }, Ac = { class: "stmp-collapsed-title" }, Mc = ["aria-label"], Pc = /* @__PURE__ */ Mt({
  __name: "CollapsedBar",
  setup(e) {
    const t = Pt(), s = Xe(() => t.currentTrack?.name || N("No Song"));
    return (n, i) => (D(), F("div", Tc, [
      se(ye, {
        name: "music",
        size: 14,
        class: "stmp-collapsed-icon"
      }),
      v("span", Ac, Y(s.value), 1),
      v("button", {
        class: "stmp-icon-btn",
        "aria-label": E(t).isPlaying ? E(N)("Pause") : E(N)("Play"),
        onClick: i[0] || (i[0] = Et((r) => E(t).togglePlay(), ["stop"]))
      }, [
        se(ye, {
          name: E(t).isPlaying ? "pause" : "play",
          size: 16
        }, null, 8, ["name"])
      ], 8, Mc)
    ]));
  }
}), Rc = /* @__PURE__ */ Rt(Pc, [["__scopeId", "data-v-eb242a58"]]), Lc = { class: "stmp-playlist" }, $c = { class: "stmp-upload-area" }, kc = ["aria-label"], Oc = {
  key: 0,
  class: "stmp-empty"
}, Dc = { class: "stmp-group-label" }, Nc = ["onClick"], Fc = { class: "stmp-item-index" }, Uc = { class: "stmp-item-info" }, jc = { class: "stmp-item-song" }, Vc = {
  key: 0,
  class: "stmp-item-artist"
}, Hc = ["onClick"], Bc = /* @__PURE__ */ Mt({
  __name: "PlaylistView",
  setup(e) {
    const t = ws(), s = we(), n = /* @__PURE__ */ ke(null), i = () => {
      n.value?.click();
    }, r = async (u) => {
      const h = u.target;
      if (!h.files || !h.files[0]) return;
      const m = h.files[0], g = `stmp:audio:${Date.now()}-${m.name}`, w = s.storage;
      w && (await w.setBlob(g, m), t.addLocalFile(m.name, g)), h.value = "";
    }, o = Xe(() => {
      const u = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((h, m) => {
        u[h.source] && u[h.source].push({ index: m, item: h });
      }), u;
    }), l = {
      chat: N("From Chat"),
      user: N("My List"),
      local: N("Local Files")
    };
    function a(u) {
      t.play(u);
    }
    function d(u) {
      t.removeItem(u);
    }
    return (u, h) => (D(), F("div", Lc, [
      v("div", $c, [
        v("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: n,
          onChange: r,
          style: { display: "none" }
        }, null, 544),
        v("button", {
          class: "stmp-upload-btn",
          "aria-label": E(N)("Add local file"),
          onClick: i
        }, " + " + Y(E(N)("Add local file")), 9, kc)
      ]),
      E(t).isEmpty ? (D(), F("div", Oc, Y(E(N)("No Songs")), 1)) : (D(), F(ee, { key: 1 }, Ht(["chat", "user", "local"], (m) => v("div", {
        key: m,
        class: "stmp-group"
      }, [
        o.value[m].length ? (D(), F(ee, { key: 0 }, [
          v("div", Dc, Y(l[m]), 1),
          (D(!0), F(ee, null, Ht(o.value[m], (g) => (D(), F("div", {
            key: g.item.id,
            class: De(["stmp-item", { active: g.index === E(t).currentIndex }]),
            onClick: (w) => a(g.index)
          }, [
            v("span", Fc, Y(g.index + 1), 1),
            v("div", Uc, [
              v("span", jc, Y(g.item.song), 1),
              g.item.artist ? (D(), F("span", Vc, Y(g.item.artist), 1)) : xe("", !0)
            ]),
            v("button", {
              class: "stmp-item-del",
              onClick: Et((w) => d(g.index), ["stop"])
            }, [
              se(ye, {
                name: "x",
                size: 14
              })
            ], 8, Hc)
          ], 10, Nc))), 128))
        ], 64)) : xe("", !0)
      ])), 64))
    ]));
  }
}), Kc = /* @__PURE__ */ Rt(Bc, [["__scopeId", "data-v-362389ee"]]), Wc = { class: "stmp-search" }, zc = { class: "stmp-search-bar" }, Jc = ["placeholder"], Gc = ["disabled"], qc = {
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
}, iu = ["aria-label", "onClick"], ru = /* @__PURE__ */ Mt({
  __name: "SearchView",
  setup(e) {
    const t = _c(), s = ws(), n = we(), i = /* @__PURE__ */ ke(t.keyword), r = /* @__PURE__ */ ke(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ ke(null);
    async function l() {
      t.setKeyword(i.value);
      const g = bo(n.settings.providers);
      await t.search(g);
    }
    const a = () => {
      l();
    };
    function d(g) {
      const w = g.provider + g.id;
      if (o.value === w) return;
      o.value = w;
      const y = s.list.length;
      s.addFromSearch(g);
      const k = s.list.length - 1;
      k >= y && s.play(k), setTimeout(() => {
        r.value.add(w), o.value = null;
      }, 600);
    }
    function u(g) {
      const w = g.provider + g.id;
      r.value.has(w) || (s.addFromSearch(g), r.value.add(w));
    }
    function h(g) {
      return r.value.has(g.provider + g.id);
    }
    function m(g) {
      return o.value === g.provider + g.id;
    }
    return (g, w) => (D(), F("div", Wc, [
      v("div", zc, [
        Zt(v("input", {
          "onUpdate:modelValue": w[0] || (w[0] = (y) => i.value = y),
          class: "stmp-search-input",
          placeholder: E(N)("Search Song..."),
          onKeydown: ho(l, ["enter"])
        }, null, 40, Jc), [
          [ts, i.value]
        ]),
        v("button", {
          class: "stmp-icon-btn",
          disabled: E(t).isSearching,
          onClick: l
        }, [
          E(t).isSearching ? (D(), gt(ye, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (D(), gt(ye, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, Gc)
      ]),
      E(t).error ? (D(), F("div", qc, [
        v("span", null, Y(E(t).error), 1),
        v("button", {
          class: "stmp-retry-btn",
          "aria-label": E(N)("Retry"),
          onClick: a
        }, Y(E(N)("Retry")), 9, Yc)
      ])) : xe("", !0),
      E(t).isSearching ? (D(), F("div", Xc, Y(E(N)("Searching...")), 1)) : i.value && !E(t).results.length ? (D(), F("div", Zc, Y(E(N)("No results")), 1)) : !i.value && !E(t).results.length ? (D(), F("div", Qc, Y(E(N)("Type a song name to search")), 1)) : xe("", !0),
      E(t).results.length ? (D(), F("div", eu, [
        (D(!0), F(ee, null, Ht(E(t).results, (y) => (D(), F("div", {
          key: y.provider + y.id,
          class: De(["stmp-result", { "stmp-result-playing": m(y) }])
        }, [
          v("div", {
            class: "stmp-result-info",
            onClick: (k) => d(y)
          }, [
            v("span", su, Y(y.name), 1),
            y.artist ? (D(), F("span", nu, Y(y.artist), 1)) : xe("", !0)
          ], 8, tu),
          v("button", {
            class: De(["stmp-icon-btn stmp-result-add", { added: h(y) }]),
            "aria-label": h(y) ? E(N)("Added") : E(N)("Add to list"),
            onClick: Et((k) => u(y), ["stop"])
          }, [
            se(ye, {
              name: h(y) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, iu)
        ], 2))), 128))
      ])) : xe("", !0)
    ]));
  }
}), ou = /* @__PURE__ */ Rt(ru, [["__scopeId", "data-v-464a9480"]]), lu = { class: "stmp-panel" }, au = { class: "stmp-topbar stmp-drag-handle" }, cu = { class: "stmp-cover-mini" }, uu = ["src"], fu = { class: "stmp-track-info" }, du = { class: "stmp-track-name" }, hu = {
  key: 0,
  class: "stmp-track-artist"
}, pu = ["aria-label"], gu = {
  key: 0,
  class: "stmp-cover-large"
}, mu = ["src"], vu = {
  key: 1,
  class: "stmp-cover-placeholder"
}, yu = {
  key: 1,
  class: "stmp-lyrics"
}, bu = {
  key: 0,
  class: "stmp-lyric-prev"
}, _u = {
  key: 1,
  class: "stmp-lyric-current"
}, xu = {
  key: 2,
  class: "stmp-lyric-next"
}, Su = {
  key: 3,
  class: "stmp-lyric-empty"
}, wu = { class: "stmp-progress" }, Cu = ["value"], Iu = { class: "stmp-time" }, Eu = { class: "stmp-controls" }, Tu = ["aria-label"], Au = ["aria-label"], Mu = ["aria-label"], Pu = ["aria-label"], Ru = ["aria-label"], Lu = ["value"], $u = ["aria-label"], ku = ["aria-label"], Ou = {
  key: 0,
  class: "stmp-overlay"
}, Du = { class: "stmp-overlay-header" }, Nu = { class: "stmp-overlay-title" }, Fu = ["aria-label"], Uu = { class: "stmp-overlay-body" }, ju = /* @__PURE__ */ Mt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = Pt(), s = ws(), n = we(), i = /* @__PURE__ */ ke("cover"), r = /* @__PURE__ */ ke(null), o = /* @__PURE__ */ ke(!1), l = /* @__PURE__ */ ke(!1);
    let a = null;
    const d = Xe(() => t.currentTrack?.cover || ""), u = () => {
      o.value = !0;
    };
    Vt(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const h = Xe(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), m = Xe(
      () => t.currentLyricIndex >= 0 ? t.lyrics[t.currentLyricIndex]?.text ?? null : null
    ), g = Xe(() => {
      const A = t.currentLyricIndex;
      return A <= 0 ? null : t.lyrics[A - 1]?.text ?? null;
    }), w = Xe(() => {
      const A = t.currentLyricIndex;
      return A < 0 ? null : t.lyrics[A + 1]?.text ?? null;
    });
    function y(A) {
      const O = Math.floor(A / 60), I = Math.floor(A % 60);
      return O + ":" + I.toString().padStart(2, "0");
    }
    function k(A) {
      const O = A.target;
      t.seek(Number(O.value) / 100 * t.duration);
    }
    const U = ["list", "random", "single"], j = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function q() {
      const A = n.settings.playMode, O = U.indexOf(A), I = U[(O + 1) % U.length];
      n.setPlayMode(I);
    }
    function P(A) {
      const O = A.target;
      t.setVolume(Number(O.value));
    }
    function K() {
      a && clearTimeout(a), l.value = !0;
    }
    function fe() {
      a = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function re() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    function W(A) {
      r.value === A ? r.value = null : r.value = A;
    }
    function x() {
      r.value = null;
    }
    return (A, O) => (D(), F("div", lu, [
      v("div", au, [
        v("div", cu, [
          d.value && !o.value ? (D(), F("img", {
            key: 0,
            src: d.value,
            alt: "cover",
            onError: u
          }, null, 40, uu)) : (D(), gt(ye, {
            key: 1,
            name: "music",
            size: 20
          }))
        ]),
        v("div", fu, [
          v("div", du, Y(E(t).currentTrack?.name || E(N)("No Song")), 1),
          E(t).currentTrack?.artist ? (D(), F("div", hu, Y(E(t).currentTrack.artist), 1)) : xe("", !0)
        ]),
        v("button", {
          class: "stmp-icon-btn",
          "aria-label": E(N)("Collapse panel"),
          onClick: O[0] || (O[0] = Et((I) => A.$emit("collapse"), ["stop"]))
        }, [
          se(ye, {
            name: "chevron-down",
            size: 18
          })
        ], 8, pu)
      ]),
      v("div", {
        class: "stmp-display",
        onClick: O[1] || (O[1] = (I) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        i.value === "cover" ? (D(), F("div", gu, [
          d.value && !o.value ? (D(), F("img", {
            key: 0,
            src: d.value,
            alt: "cover",
            onError: u
          }, null, 40, mu)) : (D(), F("div", vu, [
            se(ye, {
              name: "music",
              size: 40
            })
          ]))
        ])) : (D(), F("div", yu, [
          g.value ? (D(), F("div", bu, Y(g.value), 1)) : xe("", !0),
          m.value ? (D(), F("div", _u, Y(m.value), 1)) : xe("", !0),
          w.value ? (D(), F("div", xu, Y(w.value), 1)) : xe("", !0),
          !g.value && !m.value && !w.value ? (D(), F("div", Su, [
            se(ye, {
              name: "music",
              size: 18
            })
          ])) : xe("", !0)
        ]))
      ]),
      v("div", wu, [
        v("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: h.value,
          class: "stmp-range",
          onInput: k
        }, null, 40, Cu),
        v("div", Iu, [
          v("span", null, Y(y(E(t).currentTime)), 1),
          v("span", null, Y(y(E(t).duration)), 1)
        ])
      ]),
      v("div", Eu, [
        v("button", {
          class: "stmp-ctrl-btn",
          "aria-label": E(N)("Toggle play mode"),
          onClick: q
        }, [
          se(ye, {
            name: j[E(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, Tu),
        v("button", {
          class: "stmp-ctrl-btn",
          "aria-label": E(N)("Previous"),
          onClick: O[2] || (O[2] = (I) => E(s).prev())
        }, [
          se(ye, {
            name: "prev",
            size: 18
          })
        ], 8, Au),
        v("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": E(t).isPlaying ? E(N)("Pause") : E(N)("Play"),
          onClick: O[3] || (O[3] = (I) => E(t).togglePlay())
        }, [
          se(ye, {
            name: E(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Mu),
        v("button", {
          class: "stmp-ctrl-btn",
          "aria-label": E(N)("Next"),
          onClick: O[4] || (O[4] = (I) => E(s).next())
        }, [
          se(ye, {
            name: "next",
            size: 18
          })
        ], 8, Pu),
        v("div", {
          class: "stmp-volume-container",
          onMouseenter: K,
          onMouseleave: fe
        }, [
          v("button", {
            class: "stmp-ctrl-btn",
            "aria-label": E(N)("Mute / Unmute"),
            onClick: re
          }, [
            se(ye, {
              name: E(t).volume === 0 ? "volume-mute" : "volume",
              size: 18
            }, null, 8, ["name"])
          ], 8, Ru),
          v("div", {
            class: De(["stmp-volume-popup", { show: l.value }])
          }, [
            v("input", {
              type: "range",
              min: "0",
              max: "100",
              value: E(t).volume,
              class: "stmp-volume-vertical",
              orient: "vertical",
              onInput: P
            }, null, 40, Lu)
          ], 2)
        ], 32),
        v("button", {
          class: De(["stmp-ctrl-btn", { active: r.value === "search" }]),
          "aria-label": E(N)("Search"),
          onClick: O[5] || (O[5] = Et((I) => W("search"), ["stop"]))
        }, [
          se(ye, {
            name: "search",
            size: 18
          })
        ], 10, $u),
        v("button", {
          class: De(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": E(N)("Playlist"),
          onClick: O[6] || (O[6] = Et((I) => W("list"), ["stop"]))
        }, [
          se(ye, {
            name: "list-music",
            size: 18
          })
        ], 10, ku)
      ]),
      se(Ea, { name: "stmp-overlay" }, {
        default: Rr(() => [
          r.value ? (D(), F("div", Ou, [
            v("div", Du, [
              v("span", Nu, Y(r.value === "list" ? E(N)("Playlist") : E(N)("Search")), 1),
              v("button", {
                class: "stmp-overlay-close",
                "aria-label": E(N)("Close"),
                onClick: Et(x, ["stop"])
              }, [
                se(ye, {
                  name: "chevron-down",
                  size: 16
                })
              ], 8, Fu)
            ]),
            v("div", Uu, [
              r.value === "list" ? (D(), gt(Kc, { key: 0 })) : (D(), gt(ou, { key: 1 }))
            ])
          ])) : xe("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Vu = /* @__PURE__ */ Rt(ju, [["__scopeId", "data-v-dcddf1de"]]), Hu = /* @__PURE__ */ Mt({
  __name: "App",
  setup(e) {
    const t = we(), s = Pt(), n = /* @__PURE__ */ ke(!1), i = /* @__PURE__ */ ke(null);
    let r = null;
    const o = Xe(() => t.settings.widgetMode === "dock"), l = (x) => {
      x.key === "Escape" && (n.value = !1), x.key === " " && x.target === document.body && (x.preventDefault(), s.togglePlay());
    };
    let a = 0, d = 0, u = 0, h = 0, m = !1, g = !1, w = null, y = null;
    function k(x) {
      if (o.value) return;
      const A = x.target;
      if (A.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!A.closest(".stmp-drag-handle") || A.closest("button")) || !n.value && A.closest("button"))
        return;
      const O = i.value?.getBoundingClientRect();
      O && (a = x.clientX, d = x.clientY, u = O.left, h = O.top, m = !1, g = !0, i.value && (i.value.style.left = O.left + "px", i.value.style.top = O.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), w = U, y = j, document.addEventListener("pointermove", w), document.addEventListener("pointerup", y), x.preventDefault());
    }
    function U(x) {
      if (!i.value || !g) return;
      const A = x.clientX - a, O = x.clientY - d;
      (Math.abs(A) > 3 || Math.abs(O) > 3) && (m = !0);
      let I = u + A, J = h + O;
      const pe = i.value.offsetWidth || 60, Ae = i.value.offsetHeight || 40, ae = window.innerWidth - pe, X = window.innerHeight - Ae;
      I = Math.max(0, Math.min(I, ae)), J = Math.max(0, Math.min(J, X)), i.value.style.left = I + "px", i.value.style.top = J + "px";
    }
    function j() {
      if (g = !1, w && document.removeEventListener("pointermove", w), y && document.removeEventListener("pointerup", y), w = null, y = null, !m) {
        re();
        return;
      }
      if (i.value) {
        const x = i.value.getBoundingClientRect();
        t.setPosition({ x: x.left, y: x.top }), n.value && pt(() => q());
      }
    }
    function q() {
      if (!i.value) return;
      const x = i.value.getBoundingClientRect(), A = i.value.offsetWidth, O = i.value.offsetHeight;
      let I = x.left, J = x.top;
      I + A > window.innerWidth && (I = window.innerWidth - A), J + O > window.innerHeight && (J = window.innerHeight - O), I < 0 && (I = 0), J < 0 && (J = 0), i.value.style.left = I + "px", i.value.style.top = J + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: I, y: J });
    }
    function P() {
      if (!i.value || !o.value) return;
      const x = document.querySelector("#send_form");
      if (!x) return;
      const A = x.getBoundingClientRect(), O = i.value.offsetHeight || 38, I = Math.max(80, A.top - 8);
      i.value.style.maxHeight = I + "px";
      let J = A.top - Math.min(O, I);
      J < 4 && (J = 4), window.innerWidth <= 768 ? (i.value.style.left = A.left + "px", i.value.style.width = A.width + "px") : (i.value.style.left = A.left + "px", i.value.style.width = ""), i.value.style.top = J + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function K() {
      if (!i.value || o.value) return;
      const x = t.settings.position;
      x ? (i.value.style.left = x.x + "px", i.value.style.top = x.y + "px") : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
    }
    function fe(x) {
      if (o.value && !n.value) {
        if (x.target.closest("button, input")) return;
        re();
      }
    }
    function re() {
      n.value = !n.value, pt(() => {
        o.value ? P() : t.settings.position && q();
      });
    }
    Vt(() => t.settings.widgetMode, (x) => {
      pt(() => {
        x === "dock" ? P() : K();
      });
    }), Yn(() => {
      pt(() => {
        o.value ? P() : K();
      }), i.value && typeof ResizeObserver < "u" && (r = new ResizeObserver(() => {
        o.value && P();
      }), r.observe(i.value)), window.addEventListener("resize", W), window.addEventListener("keydown", l);
    });
    function W() {
      o.value ? pt(() => P()) : t.settings.position && pt(() => q());
    }
    return Xn(() => {
      j(), r && (r.disconnect(), r = null), window.removeEventListener("resize", W), window.removeEventListener("keydown", l);
    }), (x, A) => (D(), F("div", {
      ref_key: "widgetRef",
      ref: i,
      class: De(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": o.value
      }]),
      onPointerdown: k,
      onClick: fe
    }, [
      n.value ? (D(), gt(Vu, {
        key: 1,
        onCollapse: re
      })) : (D(), gt(Rc, { key: 0 }))
    ], 34));
  }
}), Bu = /* @__PURE__ */ Rt(Hu, [["__scopeId", "data-v-988b876a"]]), Ku = { class: "stmp-settings" }, Wu = { class: "stmp-setting-group" }, zu = { class: "stmp-setting-label" }, Ju = { class: "stmp-setting-row" }, Gu = ["checked", "onChange"], qu = ["onUpdate:modelValue", "placeholder"], Yu = ["onUpdate:modelValue", "placeholder"], Xu = ["onUpdate:modelValue", "placeholder"], Zu = { class: "stmp-setting-group" }, Qu = { class: "stmp-setting-label" }, ef = ["value"], tf = { class: "stmp-setting-group" }, sf = { class: "stmp-setting-label" }, nf = ["value"], rf = ["value"], of = { class: "stmp-setting-group" }, lf = { class: "stmp-setting-label" }, af = { class: "stmp-mode-toggle" }, cf = { class: "stmp-setting-group" }, uf = { class: "stmp-setting-row" }, ff = ["checked"], df = { class: "stmp-setting-group" }, hf = { class: "stmp-setting-label" }, pf = { class: "stmp-rules" }, gf = ["onClick"], mf = { class: "stmp-rule-add" }, vf = ["placeholder"], yf = { class: "stmp-setting-group" }, bf = { class: "stmp-setting-label" }, _f = { class: "stmp-data-btns" }, xf = ["aria-label"], Sf = ["aria-label"], wf = ["aria-label"], Cf = /* @__PURE__ */ Mt({
  __name: "SettingsView",
  setup(e) {
    const t = we(), s = /* @__PURE__ */ ke(""), n = [
      { value: "list", label: N("List Loop") },
      { value: "random", label: N("Random") },
      { value: "single", label: N("Single Loop") }
    ], i = {
      netease: N("NetEase"),
      local: N("Local Files"),
      custom: N("Custom API")
    };
    function r() {
      const w = s.value.trim();
      w && (t.addCustomCueRule(w), s.value = "");
    }
    function o(w) {
      t.removeCustomCueRule(w);
    }
    function l(w) {
      const y = w.target;
      t.setVolume(Number(y.value));
    }
    function a(w) {
      const y = w.target;
      t.setPlayMode(y.value);
    }
    function d(w) {
      const y = w.target;
      t.settings.autoPlayOnNewCue = y.checked, t.save();
    }
    const u = async () => {
      const w = t.storage;
      w && (await w.clearCache(), toastr.success(N("Cache cleared")));
    }, h = () => {
      const w = JSON.stringify(t.settings, null, 2), y = new Blob([w], { type: "application/json" }), k = URL.createObjectURL(y), U = document.createElement("a");
      U.href = k, U.download = "st-music-player-settings.json", U.click(), URL.revokeObjectURL(k);
    }, m = () => {
      const w = document.createElement("input");
      w.type = "file", w.accept = ".json", w.onchange = async (y) => {
        const k = y.target.files?.[0];
        if (!k) return;
        const U = await k.text();
        try {
          const j = JSON.parse(U);
          if (typeof j != "object" || j === null) throw new Error("Not an object");
          const q = ["volume", "playMode", "position", "widgetMode", "autoPlayOnNewCue", "providers", "customCueRules"], P = {};
          for (const K of q)
            K in j && (P[K] = j[K]);
          if (typeof P.volume != "number" || P.volume < 0 || P.volume > 100)
            throw new Error("Invalid volume");
          if (typeof P.playMode != "string" || !["list", "random", "single"].includes(P.playMode))
            throw new Error("Invalid playMode");
          if (P.providers && !Array.isArray(P.providers))
            throw new Error("Invalid providers");
          if (P.customCueRules && !Array.isArray(P.customCueRules))
            throw new Error("Invalid customCueRules");
          Object.assign(t.settings, P), t.save(), toastr.success(N("Data imported"));
        } catch (j) {
          console.error("Import failed", j), toastr.error(N("Import failed") + ": " + (j instanceof Error ? j.message : N("Invalid JSON")));
        }
      }, w.click();
    };
    function g(w) {
      const y = t.settings.providers.find((k) => k.id === w);
      y && (y.enabled = !y.enabled, t.save());
    }
    return (w, y) => (D(), F("div", Ku, [
      v("div", Wu, [
        v("div", zu, Y(E(N)("Providers")), 1),
        (D(!0), F(ee, null, Ht(E(t).settings.providers, (k) => (D(), F("div", {
          key: k.id,
          class: "stmp-provider-config"
        }, [
          v("label", Ju, [
            v("span", null, Y(i[k.id] || k.id), 1),
            v("input", {
              type: "checkbox",
              checked: k.enabled,
              onChange: (U) => g(k.id)
            }, null, 40, Gu)
          ]),
          k.id === "netease" ? Zt((D(), F("input", {
            key: 0,
            class: "stmp-provider-input",
            "onUpdate:modelValue": (U) => k.config.baseURL = U,
            placeholder: E(N)("API baseURL"),
            onChange: y[0] || (y[0] = (U) => E(t).save())
          }, null, 40, qu)), [
            [ts, k.config.baseURL]
          ]) : xe("", !0),
          k.id === "custom" ? (D(), F(ee, { key: 1 }, [
            Zt(v("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (U) => k.config.searchURL = U,
              placeholder: E(N)("Search URL"),
              onChange: y[1] || (y[1] = (U) => E(t).save())
            }, null, 40, Yu), [
              [ts, k.config.searchURL]
            ]),
            Zt(v("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (U) => k.config.resolveURL = U,
              placeholder: E(N)("Resolve URL"),
              onChange: y[2] || (y[2] = (U) => E(t).save())
            }, null, 40, Xu), [
              [ts, k.config.resolveURL]
            ])
          ], 64)) : xe("", !0)
        ]))), 128))
      ]),
      v("div", Zu, [
        v("div", Qu, Y(E(N)("Default Volume")) + ": " + Y(E(t).settings.volume), 1),
        v("input", {
          type: "range",
          min: "0",
          max: "100",
          value: E(t).settings.volume,
          class: "stmp-range",
          onInput: l
        }, null, 40, ef)
      ]),
      v("div", tf, [
        v("div", sf, Y(E(N)("Default Play Mode")), 1),
        v("select", {
          class: "stmp-select",
          value: E(t).settings.playMode,
          onChange: a
        }, [
          (D(), F(ee, null, Ht(n, (k) => v("option", {
            key: k.value,
            value: k.value
          }, Y(k.label), 9, rf)), 64))
        ], 40, nf)
      ]),
      v("div", of, [
        v("div", lf, Y(E(N)("Widget Mode")), 1),
        v("div", af, [
          v("button", {
            class: De(["stmp-mode-btn", { active: E(t).settings.widgetMode === "dock" }]),
            onClick: y[3] || (y[3] = (k) => E(t).setWidgetMode("dock"))
          }, Y(E(N)("Dock")), 3),
          v("button", {
            class: De(["stmp-mode-btn", { active: E(t).settings.widgetMode === "drag" }]),
            onClick: y[4] || (y[4] = (k) => E(t).setWidgetMode("drag"))
          }, Y(E(N)("Drag")), 3)
        ])
      ]),
      v("div", cf, [
        v("div", uf, [
          v("span", null, Y(E(N)("Auto-play on new cue")), 1),
          v("input", {
            type: "checkbox",
            checked: E(t).settings.autoPlayOnNewCue,
            onChange: d
          }, null, 40, ff)
        ])
      ]),
      v("div", df, [
        v("div", hf, Y(E(N)("Custom Cue Rules (Regex)")), 1),
        v("div", pf, [
          (D(!0), F(ee, null, Ht(E(t).settings.customCueRules, (k, U) => (D(), F("div", {
            key: U,
            class: "stmp-rule"
          }, [
            v("code", null, Y(k), 1),
            v("button", {
              class: "stmp-rule-del",
              onClick: (j) => o(U)
            }, "✕", 8, gf)
          ]))), 128))
        ]),
        v("div", mf, [
          Zt(v("input", {
            "onUpdate:modelValue": y[5] || (y[5] = (k) => s.value = k),
            class: "stmp-rule-input",
            placeholder: E(N)("Add regex rule..."),
            onKeydown: ho(r, ["enter"])
          }, null, 40, vf), [
            [ts, s.value]
          ]),
          v("button", {
            class: "stmp-rule-add-btn",
            onClick: r
          }, "+")
        ])
      ]),
      v("div", yf, [
        v("div", bf, Y(E(N)("Data")), 1),
        v("div", _f, [
          v("button", {
            class: "stmp-data-btn",
            "aria-label": E(N)("Clear cache"),
            onClick: u
          }, Y(E(N)("Clear cache")), 9, xf),
          v("button", {
            class: "stmp-data-btn",
            "aria-label": E(N)("Export data"),
            onClick: h
          }, Y(E(N)("Export data")), 9, Sf),
          v("button", {
            class: "stmp-data-btn",
            "aria-label": E(N)("Import data"),
            onClick: m
          }, Y(E(N)("Import data")), 9, wf)
        ])
      ])
    ]));
  }
}), If = /* @__PURE__ */ Rt(Cf, [["__scopeId", "data-v-1606c260"]]);
class Ef {
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
function Tf() {
  return new Ef();
}
const Af = [
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
  for (const i of Af)
    for (const r of Yi(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of Yi(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class Mf {
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
let Bt = null, it = null, fs = null, ds = null, Kt = null, Ws = null;
const Pf = `
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
function Rf() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(Pf), ds = e.children(".inline-drawer").last()[0] ?? null, !ds)) return;
  const t = ds.querySelector("#stmp-settings-mount");
  t && Ws && (Kt = po(If), Kt.use(Ws), Kt.mount(t));
}
function Lf() {
  Kt && (Kt.unmount(), Kt = null), ds?.remove(), ds = null;
}
function $f(e, t, s) {
  it = Tf(), it.on("chat-changed", () => {
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
  }), it.on("message-generated", (n) => {
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
  }), it.on("message-updated", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), it.on("message-deleted", (n) => {
    n.messageId !== void 0 && t.handleMessageDelete(n.messageId);
  }), it.on("message-swiped", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), it.start();
}
function kf(e, t, s) {
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
async function Nf() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = nc();
    Ws = t, Bt = po(Bu), Bt.use(t), Bt.mount(e);
    const s = we(), n = hc();
    s.init(n);
    const i = Pt();
    i.init(), i.setVolume(s.settings.volume);
    const r = new Mf((a) => SillyTavern.getContext().chat[a]?.mes), o = ws();
    o.init(r), Rf();
    const l = SillyTavern.getContext();
    fs = () => {
      $f(r, o, s), kf(r, o, s);
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
  if (it?.stop(), it = null, Bt) {
    try {
      Pt().destroy();
    } catch {
    }
    Bt.unmount(), Bt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), Lf(), Ws = null;
}
function Ff() {
  _o();
}
async function Of() {
  try {
    const e = SillyTavern.getContext();
    delete e.extensionSettings[Nt], e.saveSettingsDebounced();
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to delete settings:", e);
  }
  try {
    const e = SillyTavern.libs?.localforage;
    if (e && typeof e.keys == "function") {
      const t = await e.keys();
      await Promise.all(
        t.filter((s) => s.startsWith(Nt) || s.startsWith("stmp:")).map((s) => e.removeItem(s))
      );
    }
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to clear localforage:", e);
  }
}
async function Uf() {
  await Of(), _o();
}
export {
  Of as clean,
  Uf as delete,
  _o as destroy,
  Ff as disable,
  Nf as init
};
