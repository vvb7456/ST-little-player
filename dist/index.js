var Ya = Object.defineProperty;
var Ja = (e, t, s) => t in e ? Ya(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var re = (e, t, s) => Ja(e, typeof t != "symbol" ? t + "" : t, s);
/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ao(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const Pe = {}, Ss = [], Mt = () => {
}, Vr = () => !1, Xn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Qn = (e) => e.startsWith("onUpdate:"), De = Object.assign, co = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Xa = Object.prototype.hasOwnProperty, be = (e, t) => Xa.call(e, t), ne = Array.isArray, xs = (e) => dn(e) === "[object Map]", jr = (e) => dn(e) === "[object Set]", Io = (e) => dn(e) === "[object Date]", ue = (e) => typeof e == "function", Ee = (e) => typeof e == "string", dt = (e) => typeof e == "symbol", ke = (e) => e !== null && typeof e == "object", Wr = (e) => (ke(e) || ue(e)) && ue(e.then) && ue(e.catch), zr = Object.prototype.toString, dn = (e) => zr.call(e), Qa = (e) => dn(e).slice(8, -1), qr = (e) => dn(e) === "[object Object]", Zn = (e) => Ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, js = /* @__PURE__ */ ao(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ei = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Za = /-\w/g, gt = ei(
  (e) => e.replace(Za, (t) => t.slice(1).toUpperCase())
), ec = /\B([A-Z])/g, Zt = ei(
  (e) => e.replace(ec, "-$1").toLowerCase()
), Gr = ei((e) => e.charAt(0).toUpperCase() + e.slice(1)), hi = ei(
  (e) => e ? `on${Gr(e)}` : ""
), Pt = (e, t) => !Object.is(e, t), Tn = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Kr = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, uo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, tc = (e) => {
  const t = Ee(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ro;
const ti = () => Ro || (Ro = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Jt(e) {
  if (ne(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = Ee(n) ? oc(n) : Jt(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Ee(e) || ke(e))
    return e;
}
const sc = /;(?![^(]*\))/g, nc = /:([^]+)/, ic = /\/\*[^]*?\*\//g;
function oc(e) {
  const t = {};
  return e.replace(ic, "").split(sc).forEach((s) => {
    if (s) {
      const n = s.split(nc);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function he(e) {
  let t = "";
  if (Ee(e))
    t = e;
  else if (ne(e))
    for (let s = 0; s < e.length; s++) {
      const n = he(e[s]);
      n && (t += n + " ");
    }
  else if (ke(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const rc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", lc = /* @__PURE__ */ ao(rc);
function Yr(e) {
  return !!e || e === "";
}
function ac(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = fo(e[n], t[n]);
  return s;
}
function fo(e, t) {
  if (e === t) return !0;
  let s = Io(e), n = Io(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = dt(e), n = dt(t), s || n)
    return e === t;
  if (s = ne(e), n = ne(t), s || n)
    return s && n ? ac(e, t) : !1;
  if (s = ke(e), n = ke(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !fo(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Jr = (e) => !!(e && e.__v_isRef === !0), M = (e) => Ee(e) ? e : e == null ? "" : ne(e) || ke(e) && (e.toString === zr || !ue(e.toString)) ? Jr(e) ? M(e.value) : JSON.stringify(e, Xr, 2) : String(e), Xr = (e, t) => Jr(t) ? Xr(e, t.value) : xs(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], o) => (s[gi(n, o) + " =>"] = i, s),
    {}
  )
} : jr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => gi(s))
} : dt(t) ? gi(t) : ke(t) && !ne(t) && !qr(t) ? String(t) : t, gi = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    dt(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ne;
class Qr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ne && (Ne.active ? (this.parent = Ne, this.index = (Ne.scopes || (Ne.scopes = [])).push(
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
      const s = Ne;
      try {
        return Ne = this, t();
      } finally {
        Ne = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ne, Ne = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ne === this)
        Ne = this.prevScope;
      else {
        let t = Ne;
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
function Zr(e) {
  return new Qr(e);
}
function el() {
  return Ne;
}
function cc(e, t = !1) {
  Ne && Ne.cleanups.push(e);
}
let Me;
const mi = /* @__PURE__ */ new WeakSet();
class tl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ne && (Ne.active ? Ne.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, mi.has(this) && (mi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || nl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, $o(this), il(this);
    const t = Me, s = mt;
    Me = this, mt = !0;
    try {
      return this.fn();
    } finally {
      ol(this), Me = t, mt = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        go(t);
      this.deps = this.depsTail = void 0, $o(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? mi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $i(this) && this.run();
  }
  get dirty() {
    return $i(this);
  }
}
let sl = 0, Ws, zs;
function nl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = zs, zs = e;
    return;
  }
  e.next = Ws, Ws = e;
}
function po() {
  sl++;
}
function ho() {
  if (--sl > 0)
    return;
  if (zs) {
    let t = zs;
    for (zs = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Ws; ) {
    let t = Ws;
    for (Ws = void 0; t; ) {
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
function il(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ol(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), go(n), uc(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function $i(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (rl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function rl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === nn) || (e.globalVersion = nn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !$i(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = Me, n = mt;
  Me = e, mt = !0;
  try {
    il(e);
    const i = e.fn(e._value);
    (t.version === 0 || Pt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Me = s, mt = n, ol(e), e.flags &= -3;
  }
}
function go(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let o = s.computed.deps; o; o = o.nextDep)
      go(o, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function uc(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let mt = !0;
const ll = [];
function Et() {
  ll.push(mt), mt = !1;
}
function It() {
  const e = ll.pop();
  mt = e === void 0 ? !0 : e;
}
function $o(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = Me;
    Me = void 0;
    try {
      t();
    } finally {
      Me = s;
    }
  }
}
let nn = 0;
class dc {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class mo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Me || !mt || Me === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== Me)
      s = this.activeLink = new dc(Me, this), Me.deps ? (s.prevDep = Me.depsTail, Me.depsTail.nextDep = s, Me.depsTail = s) : Me.deps = Me.depsTail = s, al(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = Me.depsTail, s.nextDep = void 0, Me.depsTail.nextDep = s, Me.depsTail = s, Me.deps === s && (Me.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, nn++, this.notify(t);
  }
  notify(t) {
    po();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      ho();
    }
  }
}
function al(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        al(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Rn = /* @__PURE__ */ new WeakMap(), ps = /* @__PURE__ */ Symbol(
  ""
), Oi = /* @__PURE__ */ Symbol(
  ""
), on = /* @__PURE__ */ Symbol(
  ""
);
function Ke(e, t, s) {
  if (mt && Me) {
    let n = Rn.get(e);
    n || Rn.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new mo()), i.map = n, i.key = s), i.track();
  }
}
function Ut(e, t, s, n, i, o) {
  const r = Rn.get(e);
  if (!r) {
    nn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (po(), t === "clear")
    r.forEach(l);
  else {
    const a = ne(e), c = a && Zn(s);
    if (a && s === "length") {
      const u = Number(n);
      r.forEach((p, w) => {
        (w === "length" || w === on || !dt(w) && w >= u) && l(p);
      });
    } else
      switch ((s !== void 0 || r.has(void 0)) && l(r.get(s)), c && l(r.get(on)), t) {
        case "add":
          a ? c && l(r.get("length")) : (l(r.get(ps)), xs(e) && l(r.get(Oi)));
          break;
        case "delete":
          a || (l(r.get(ps)), xs(e) && l(r.get(Oi)));
          break;
        case "set":
          xs(e) && l(r.get(ps));
          break;
      }
  }
  ho();
}
function fc(e, t) {
  const s = Rn.get(e);
  return s && s.get(t);
}
function ms(e) {
  const t = /* @__PURE__ */ ve(e);
  return t === e ? t : (Ke(t, "iterate", on), /* @__PURE__ */ rt(e) ? t : t.map(vt));
}
function si(e) {
  return Ke(e = /* @__PURE__ */ ve(e), "iterate", on), e;
}
function At(e, t) {
  return /* @__PURE__ */ jt(e) ? Ms(/* @__PURE__ */ Vt(e) ? vt(t) : t) : vt(t);
}
const pc = {
  __proto__: null,
  [Symbol.iterator]() {
    return yi(this, Symbol.iterator, (e) => At(this, e));
  },
  concat(...e) {
    return ms(this).concat(
      ...e.map((t) => ne(t) ? ms(t) : t)
    );
  },
  entries() {
    return yi(this, "entries", (e) => (e[1] = At(this, e[1]), e));
  },
  every(e, t) {
    return Ot(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ot(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => At(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ot(
      this,
      "find",
      e,
      t,
      (s) => At(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return Ot(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ot(
      this,
      "findLast",
      e,
      t,
      (s) => At(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ot(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ot(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return vi(this, "includes", e);
  },
  indexOf(...e) {
    return vi(this, "indexOf", e);
  },
  join(e) {
    return ms(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return vi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ot(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return $s(this, "pop");
  },
  push(...e) {
    return $s(this, "push", e);
  },
  reduce(e, ...t) {
    return Oo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Oo(this, "reduceRight", e, t);
  },
  shift() {
    return $s(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ot(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return $s(this, "splice", e);
  },
  toReversed() {
    return ms(this).toReversed();
  },
  toSorted(e) {
    return ms(this).toSorted(e);
  },
  toSpliced(...e) {
    return ms(this).toSpliced(...e);
  },
  unshift(...e) {
    return $s(this, "unshift", e);
  },
  values() {
    return yi(this, "values", (e) => At(this, e));
  }
};
function yi(e, t, s) {
  const n = si(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ rt(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = s(o.value)), o;
  }), i;
}
const hc = Array.prototype;
function Ot(e, t, s, n, i, o) {
  const r = si(e), l = r !== e && !/* @__PURE__ */ rt(e), a = r[t];
  if (a !== hc[t]) {
    const p = a.apply(e, o);
    return l ? vt(p) : p;
  }
  let c = s;
  r !== e && (l ? c = function(p, w) {
    return s.call(this, At(e, p), w, e);
  } : s.length > 2 && (c = function(p, w) {
    return s.call(this, p, w, e);
  }));
  const u = a.call(r, c, n);
  return l && i ? i(u) : u;
}
function Oo(e, t, s, n) {
  const i = si(e), o = i !== e && !/* @__PURE__ */ rt(e);
  let r = s, l = !1;
  i !== e && (o ? (l = n.length === 0, r = function(c, u, p) {
    return l && (l = !1, c = At(e, c)), s.call(this, c, At(e, u), p, e);
  }) : s.length > 3 && (r = function(c, u, p) {
    return s.call(this, c, u, p, e);
  }));
  const a = i[t](r, ...n);
  return l ? At(e, a) : a;
}
function vi(e, t, s) {
  const n = /* @__PURE__ */ ve(e);
  Ke(n, "iterate", on);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ ii(s[0]) ? (s[0] = /* @__PURE__ */ ve(s[0]), n[t](...s)) : i;
}
function $s(e, t, s = []) {
  Et(), po();
  const n = (/* @__PURE__ */ ve(e))[t].apply(e, s);
  return ho(), It(), n;
}
const gc = /* @__PURE__ */ ao("__proto__,__v_isRef,__isVue"), cl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(dt)
);
function mc(e) {
  dt(e) || (e = String(e));
  const t = /* @__PURE__ */ ve(this);
  return Ke(t, "has", e), t.hasOwnProperty(e);
}
class ul {
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
      return n === (i ? o ? Ac : hl : o ? pl : fl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const r = ne(t);
    if (!i) {
      let a;
      if (r && (a = pc[s]))
        return a;
      if (s === "hasOwnProperty")
        return mc;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ $e(t) ? t : n
    );
    if ((dt(s) ? cl.has(s) : gc(s)) || (i || Ke(t, "get", s), o))
      return l;
    if (/* @__PURE__ */ $e(l)) {
      const a = r && Zn(s) ? l : l.value;
      return i && ke(a) ? /* @__PURE__ */ Ni(a) : a;
    }
    return ke(l) ? i ? /* @__PURE__ */ Ni(l) : /* @__PURE__ */ ni(l) : l;
  }
}
class dl extends ul {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let o = t[s];
    const r = ne(t) && Zn(s);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ jt(o);
      if (!/* @__PURE__ */ rt(n) && !/* @__PURE__ */ jt(n) && (o = /* @__PURE__ */ ve(o), n = /* @__PURE__ */ ve(n)), !r && /* @__PURE__ */ $e(o) && !/* @__PURE__ */ $e(n))
        return c || (o.value = n), !0;
    }
    const l = r ? Number(s) < t.length : be(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ $e(t) ? t : i
    );
    return t === /* @__PURE__ */ ve(i) && a && (l ? Pt(n, o) && Ut(t, "set", s, n) : Ut(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = be(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && Ut(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!dt(s) || !cl.has(s)) && Ke(t, "has", s), n;
  }
  ownKeys(t) {
    return Ke(
      t,
      "iterate",
      ne(t) ? "length" : ps
    ), Reflect.ownKeys(t);
  }
}
class yc extends ul {
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
const vc = /* @__PURE__ */ new dl(), _c = /* @__PURE__ */ new yc(), bc = /* @__PURE__ */ new dl(!0);
const Li = (e) => e, gn = (e) => Reflect.getPrototypeOf(e);
function wc(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ ve(i), r = xs(o), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, c = i[e](...n), u = s ? Li : t ? Ms : vt;
    return !t && Ke(
      o,
      "iterate",
      a ? Oi : ps
    ), De(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: p, done: w } = c.next();
          return w ? { value: p, done: w } : {
            value: l ? [u(p[0]), u(p[1])] : u(p),
            done: w
          };
        }
      }
    );
  };
}
function mn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function kc(e, t) {
  const s = {
    get(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ ve(o), l = /* @__PURE__ */ ve(i);
      e || (Pt(i, l) && Ke(r, "get", i), Ke(r, "get", l));
      const { has: a } = gn(r), c = t ? Li : e ? Ms : vt;
      if (a.call(r, i))
        return c(o.get(i));
      if (a.call(r, l))
        return c(o.get(l));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ke(/* @__PURE__ */ ve(i), "iterate", ps), i.size;
    },
    has(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ ve(o), l = /* @__PURE__ */ ve(i);
      return e || (Pt(i, l) && Ke(r, "has", i), Ke(r, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ ve(l), c = t ? Li : e ? Ms : vt;
      return !e && Ke(a, "iterate", ps), l.forEach((u, p) => i.call(o, c(u), c(p), r));
    }
  };
  return De(
    s,
    e ? {
      add: mn("add"),
      set: mn("set"),
      delete: mn("delete"),
      clear: mn("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ ve(this), r = gn(o), l = /* @__PURE__ */ ve(i), a = !t && !/* @__PURE__ */ rt(i) && !/* @__PURE__ */ jt(i) ? l : i;
        return r.has.call(o, a) || Pt(i, a) && r.has.call(o, i) || Pt(l, a) && r.has.call(o, l) || (o.add(a), Ut(o, "add", a, a)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ rt(o) && !/* @__PURE__ */ jt(o) && (o = /* @__PURE__ */ ve(o));
        const r = /* @__PURE__ */ ve(this), { has: l, get: a } = gn(r);
        let c = l.call(r, i);
        c || (i = /* @__PURE__ */ ve(i), c = l.call(r, i));
        const u = a.call(r, i);
        return r.set(i, o), c ? Pt(o, u) && Ut(r, "set", i, o) : Ut(r, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ ve(this), { has: r, get: l } = gn(o);
        let a = r.call(o, i);
        a || (i = /* @__PURE__ */ ve(i), a = r.call(o, i)), l && l.call(o, i);
        const c = o.delete(i);
        return a && Ut(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ ve(this), o = i.size !== 0, r = i.clear();
        return o && Ut(
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
    s[i] = wc(i, e, t);
  }), s;
}
function yo(e, t) {
  const s = kc(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    be(s, i) && i in n ? s : n,
    i,
    o
  );
}
const Sc = {
  get: /* @__PURE__ */ yo(!1, !1)
}, xc = {
  get: /* @__PURE__ */ yo(!1, !0)
}, Cc = {
  get: /* @__PURE__ */ yo(!0, !1)
};
const fl = /* @__PURE__ */ new WeakMap(), pl = /* @__PURE__ */ new WeakMap(), hl = /* @__PURE__ */ new WeakMap(), Ac = /* @__PURE__ */ new WeakMap();
function Tc(e) {
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
function ni(e) {
  return /* @__PURE__ */ jt(e) ? e : vo(
    e,
    !1,
    vc,
    Sc,
    fl
  );
}
// @__NO_SIDE_EFFECTS__
function Pc(e) {
  return vo(
    e,
    !1,
    bc,
    xc,
    pl
  );
}
// @__NO_SIDE_EFFECTS__
function Ni(e) {
  return vo(
    e,
    !0,
    _c,
    Cc,
    hl
  );
}
function vo(e, t, s, n, i) {
  if (!ke(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = Tc(Qa(e));
  if (r === 0)
    return e;
  const l = new Proxy(
    e,
    r === 2 ? n : s
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
  return /* @__PURE__ */ jt(e) ? /* @__PURE__ */ Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ii(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ve(t) : e;
}
function _o(e) {
  return !be(e, "__v_skip") && Object.isExtensible(e) && Kr(e, "__v_skip", !0), e;
}
const vt = (e) => ke(e) ? /* @__PURE__ */ ni(e) : e, Ms = (e) => ke(e) ? /* @__PURE__ */ Ni(e) : e;
// @__NO_SIDE_EFFECTS__
function $e(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return Mc(e, !1);
}
function Mc(e, t) {
  return /* @__PURE__ */ $e(e) ? e : new Ec(e, t);
}
class Ec {
  constructor(t, s) {
    this.dep = new mo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ ve(t), this._value = s ? t : vt(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ rt(t) || /* @__PURE__ */ jt(t);
    t = n ? t : /* @__PURE__ */ ve(t), Pt(t, s) && (this._rawValue = t, this._value = n ? t : vt(t), this.dep.trigger());
  }
}
function h(e) {
  return /* @__PURE__ */ $e(e) ? e.value : e;
}
const Ic = {
  get: (e, t, s) => t === "__v_raw" ? e : h(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ $e(i) && !/* @__PURE__ */ $e(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function gl(e) {
  return /* @__PURE__ */ Vt(e) ? e : new Proxy(e, Ic);
}
// @__NO_SIDE_EFFECTS__
function Rc(e) {
  const t = ne(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = Oc(e, s);
  return t;
}
class $c {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = dt(s) ? s : String(s), this._raw = /* @__PURE__ */ ve(t);
    let i = !0, o = t;
    if (!ne(t) || dt(this._key) || !Zn(this._key))
      do
        i = !/* @__PURE__ */ ii(o) || /* @__PURE__ */ rt(o);
      while (i && (o = o.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = h(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ $e(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ $e(s)) {
        s.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return fc(this._raw, this._key);
  }
}
function Oc(e, t, s) {
  return new $c(e, t, s);
}
class Lc {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new mo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = nn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Me !== this)
      return nl(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return rl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Nc(e, t, s = !1) {
  let n, i;
  return ue(e) ? n = e : (n = e.get, i = e.set), new Lc(n, i, s);
}
const yn = {}, $n = /* @__PURE__ */ new WeakMap();
let ls;
function Dc(e, t = !1, s = ls) {
  if (s) {
    let n = $n.get(s);
    n || $n.set(s, n = []), n.push(e);
  }
}
function Fc(e, t, s = Pe) {
  const { immediate: n, deep: i, once: o, scheduler: r, augmentJob: l, call: a } = s, c = (_) => i ? _ : /* @__PURE__ */ rt(_) || i === !1 || i === 0 ? Bt(_, 1) : Bt(_);
  let u, p, w, k, E = !1, T = !1;
  if (/* @__PURE__ */ $e(e) ? (p = () => e.value, E = /* @__PURE__ */ rt(e)) : /* @__PURE__ */ Vt(e) ? (p = () => c(e), E = !0) : ne(e) ? (T = !0, E = e.some((_) => /* @__PURE__ */ Vt(_) || /* @__PURE__ */ rt(_)), p = () => e.map((_) => {
    if (/* @__PURE__ */ $e(_))
      return _.value;
    if (/* @__PURE__ */ Vt(_))
      return c(_);
    if (ue(_))
      return a ? a(_, 2) : _();
  })) : ue(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (w) {
      Et();
      try {
        w();
      } finally {
        It();
      }
    }
    const _ = ls;
    ls = u;
    try {
      return a ? a(e, 3, [k]) : e(k);
    } finally {
      ls = _;
    }
  } : p = Mt, t && i) {
    const _ = p, v = i === !0 ? 1 / 0 : i;
    p = () => Bt(_(), v);
  }
  const G = el(), Y = () => {
    u.stop(), G && G.active && co(G.effects, u);
  };
  if (o && t) {
    const _ = t;
    t = (...v) => {
      const x = _(...v);
      return Y(), x;
    };
  }
  let V = T ? new Array(e.length).fill(yn) : yn;
  const X = (_) => {
    if (!(!(u.flags & 1) || !u.dirty && !_))
      if (t) {
        const v = u.run();
        if (_ || i || E || (T ? v.some((x, y) => Pt(x, V[y])) : Pt(v, V))) {
          w && w();
          const x = ls;
          ls = u;
          try {
            const y = [
              v,
              // pass undefined as the old value when it's changed for the first time
              V === yn ? void 0 : T && V[0] === yn ? [] : V,
              k
            ];
            V = v, a ? a(t, 3, y) : (
              // @ts-expect-error
              t(...y)
            );
          } finally {
            ls = x;
          }
        }
      } else
        u.run();
  };
  return l && l(X), u = new tl(p), u.scheduler = r ? () => r(X, !1) : X, k = (_) => Dc(_, !1, u), w = u.onStop = () => {
    const _ = $n.get(u);
    if (_) {
      if (a)
        a(_, 4);
      else
        for (const v of _) v();
      $n.delete(u);
    }
  }, t ? n ? X(!0) : V = u.run() : r ? r(X.bind(null, !0), !0) : u.run(), Y.pause = u.pause.bind(u), Y.resume = u.resume.bind(u), Y.stop = Y, Y;
}
function Bt(e, t = 1 / 0, s) {
  if (t <= 0 || !ke(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ $e(e))
    Bt(e.value, t, s);
  else if (ne(e))
    for (let n = 0; n < e.length; n++)
      Bt(e[n], t, s);
  else if (jr(e) || xs(e))
    e.forEach((n) => {
      Bt(n, t, s);
    });
  else if (qr(e)) {
    for (const n in e)
      Bt(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Bt(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function fn(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    oi(i, t, s);
  }
}
function ft(e, t, s, n) {
  if (ue(e)) {
    const i = fn(e, t, s, n);
    return i && Wr(i) && i.catch((o) => {
      oi(o, t, s);
    }), i;
  }
  if (ne(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(ft(e[o], t, s, n));
    return i;
  }
}
function oi(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || Pe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let p = 0; p < u.length; p++)
          if (u[p](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Et(), fn(o, null, 10, [
        e,
        a,
        c
      ]), It();
      return;
    }
  }
  Uc(e, s, i, n, r);
}
function Uc(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Xe = [];
let Ct = -1;
const Cs = [];
let Kt = null, bs = 0;
const ml = /* @__PURE__ */ Promise.resolve();
let On = null;
function Ge(e) {
  const t = On || ml;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Bc(e) {
  let t = Ct + 1, s = Xe.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Xe[n], o = rn(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function bo(e) {
  if (!(e.flags & 1)) {
    const t = rn(e), s = Xe[Xe.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= rn(s) ? Xe.push(e) : Xe.splice(Bc(t), 0, e), e.flags |= 1, yl();
  }
}
function yl() {
  On || (On = ml.then(_l));
}
function Hc(e) {
  ne(e) ? Cs.push(...e) : Kt && e.id === -1 ? Kt.splice(bs + 1, 0, e) : e.flags & 1 || (Cs.push(e), e.flags |= 1), yl();
}
function Lo(e, t, s = Ct + 1) {
  for (; s < Xe.length; s++) {
    const n = Xe[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Xe.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function vl(e) {
  if (Cs.length) {
    const t = [...new Set(Cs)].sort(
      (s, n) => rn(s) - rn(n)
    );
    if (Cs.length = 0, Kt) {
      Kt.push(...t);
      return;
    }
    for (Kt = t, bs = 0; bs < Kt.length; bs++) {
      const s = Kt[bs];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Kt = null, bs = 0;
  }
}
const rn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function _l(e) {
  try {
    for (Ct = 0; Ct < Xe.length; Ct++) {
      const t = Xe[Ct];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), fn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ct < Xe.length; Ct++) {
      const t = Xe[Ct];
      t && (t.flags &= -2);
    }
    Ct = -1, Xe.length = 0, vl(), On = null, (Xe.length || Cs.length) && _l();
  }
}
let ut = null, bl = null;
function Ln(e) {
  const t = ut;
  return ut = e, bl = e && e.type.__scopeId || null, t;
}
function Di(e, t = ut, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Fn(-1);
    const o = Ln(t);
    let r;
    try {
      r = e(...i);
    } finally {
      Ln(o), n._d && Fn(1);
    }
    return r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ds(e, t) {
  if (ut === null)
    return e;
  const s = ui(ut), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, l, a = Pe] = t[i];
    o && (ue(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Bt(r), n.push({
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
function ss(e, t, s, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    o && (l.oldValue = o[r].value);
    let a = l.dir[n];
    a && (Et(), ft(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), It());
  }
}
function Vc(e, t) {
  if (Ze) {
    let s = Ze.provides;
    const n = Ze.parent && Ze.parent.provides;
    n === s && (s = Ze.provides = Object.create(n)), s[e] = t;
  }
}
function qs(e, t, s = !1) {
  const n = xo();
  if (n || hs) {
    let i = hs ? hs._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && ue(t) ? t.call(n && n.proxy) : t;
  }
}
function jc() {
  return !!(xo() || hs);
}
const Wc = /* @__PURE__ */ Symbol.for("v-scx"), zc = () => qs(Wc);
function Ue(e, t, s) {
  return wl(e, t, s);
}
function wl(e, t, s = Pe) {
  const { immediate: n, deep: i, flush: o, once: r } = s, l = De({}, s), a = t && n || !t && o !== "post";
  let c;
  if (cn) {
    if (o === "sync") {
      const k = zc();
      c = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!a) {
      const k = () => {
      };
      return k.stop = Mt, k.resume = Mt, k.pause = Mt, k;
    }
  }
  const u = Ze;
  l.call = (k, E, T) => ft(k, u, E, T);
  let p = !1;
  o === "post" ? l.scheduler = (k) => {
    Je(k, u && u.suspense);
  } : o !== "sync" && (p = !0, l.scheduler = (k, E) => {
    E ? k() : bo(k);
  }), l.augmentJob = (k) => {
    t && (k.flags |= 4), p && (k.flags |= 2, u && (k.id = u.uid, k.i = u));
  };
  const w = Fc(e, t, l);
  return cn && (c ? c.push(w) : a && w()), w;
}
function qc(e, t, s) {
  const n = this.proxy, i = Ee(e) ? e.includes(".") ? kl(n, e) : () => n[e] : e.bind(n, n);
  let o;
  ue(t) ? o = t : (o = t.handler, s = t);
  const r = hn(this), l = wl(i, o.bind(n), s);
  return r(), l;
}
function kl(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const qt = /* @__PURE__ */ new WeakMap(), Sl = /* @__PURE__ */ Symbol("_vte"), xl = (e) => e.__isTeleport, as = (e) => e && (e.disabled || e.disabled === ""), Gc = (e) => e && (e.defer || e.defer === ""), No = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Do = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Fi = (e, t) => {
  const s = e && e.to;
  return Ee(s) ? t ? t(s) : null : s;
}, Kc = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, i, o, r, l, a, c) {
    const {
      mc: u,
      pc: p,
      pbc: w,
      o: { insert: k, querySelector: E, createText: T, createComment: G, parentNode: Y }
    } = c, V = as(t.props);
    let { dynamicChildren: X } = t;
    const _ = (y, F, S) => {
      y.shapeFlag & 16 && u(
        y.children,
        F,
        S,
        i,
        o,
        r,
        l,
        a
      );
    }, v = (y = t) => {
      const F = as(y.props), S = y.target = Fi(y.props, E), K = Ui(S, y, T, k);
      S && (r !== "svg" && No(S) ? r = "svg" : r !== "mathml" && Do(S) && (r = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(S), F || (_(y, S, K), Us(y, !1)));
    }, x = (y) => {
      const F = () => {
        if (qt.get(y) === F) {
          if (qt.delete(y), as(y.props)) {
            const S = Y(y.el) || s;
            _(y, S, y.anchor), Us(y, !0);
          }
          v(y);
        }
      };
      qt.set(y, F), Je(F, o);
    };
    if (e == null) {
      const y = t.el = T(""), F = t.anchor = T("");
      if (k(y, s, n), k(F, s, n), Gc(t.props) || o && o.pendingBranch) {
        x(t);
        return;
      }
      V && (_(t, s, F), Us(t, !0)), v();
    } else {
      t.el = e.el;
      const y = t.anchor = e.anchor, F = qt.get(e);
      if (F) {
        F.flags |= 8, qt.delete(e), x(t);
        return;
      }
      t.targetStart = e.targetStart;
      const S = t.target = e.target, K = t.targetAnchor = e.targetAnchor, le = as(e.props), R = le ? s : S, Z = le ? y : K;
      if (r === "svg" || No(S) ? r = "svg" : (r === "mathml" || Do(S)) && (r = "mathml"), X ? (w(
        e.dynamicChildren,
        X,
        R,
        i,
        o,
        r,
        l
      ), So(e, t, !0)) : a || p(
        e,
        t,
        R,
        Z,
        i,
        o,
        r,
        l,
        !1
      ), V)
        le ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : vn(
          t,
          s,
          y,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const B = Fi(t.props, E);
        B && (t.target = B, vn(
          t,
          B,
          null,
          c,
          0
        ));
      } else le && vn(
        t,
        S,
        K,
        c,
        1
      );
      Us(t, V);
    }
  },
  remove(e, t, s, { um: n, o: { remove: i } }, o) {
    const {
      shapeFlag: r,
      children: l,
      anchor: a,
      targetStart: c,
      targetAnchor: u,
      target: p,
      props: w
    } = e, k = as(w), E = o || !k, T = qt.get(e);
    if (T && (T.flags |= 8, qt.delete(e)), p && (i(c), i(u)), o && i(a), !T && (k || p) && r & 16)
      for (let G = 0; G < l.length; G++) {
        const Y = l[G];
        n(
          Y,
          t,
          s,
          E,
          !!Y.dynamicChildren
        );
      }
  },
  move: vn,
  hydrate: Yc
};
function vn(e, t, s, { o: { insert: n }, m: i }, o = 2) {
  o === 0 && n(e.targetAnchor, t, s);
  const { el: r, anchor: l, shapeFlag: a, children: c, props: u } = e, p = o === 2;
  if (p && n(r, t, s), !qt.has(e) && (!p || as(u)) && a & 16)
    for (let w = 0; w < c.length; w++)
      i(
        c[w],
        t,
        s,
        2
      );
  p && n(l, t, s);
}
function Yc(e, t, s, n, i, o, {
  o: { nextSibling: r, parentNode: l, querySelector: a, insert: c, createText: u }
}, p) {
  function w(G, Y) {
    let V = Y;
    for (; V; ) {
      if (V && V.nodeType === 8) {
        if (V.data === "teleport start anchor")
          t.targetStart = V;
        else if (V.data === "teleport anchor") {
          t.targetAnchor = V, G._lpa = t.targetAnchor && r(t.targetAnchor);
          break;
        }
      }
      V = r(V);
    }
  }
  function k(G, Y) {
    Y.anchor = p(
      r(G),
      Y,
      l(G),
      s,
      n,
      i,
      o
    );
  }
  const E = t.target = Fi(
    t.props,
    a
  ), T = as(t.props);
  if (E) {
    const G = E._lpa || E.firstChild;
    t.shapeFlag & 16 && (T ? (k(e, t), w(E, G), t.targetAnchor || Ui(
      E,
      t,
      u,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === E ? e : null
    )) : (t.anchor = r(e), w(E, G), t.targetAnchor || Ui(E, t, u, c), p(
      G && r(G),
      t,
      E,
      s,
      n,
      i,
      o
    ))), Us(t, T);
  } else T && t.shapeFlag & 16 && (k(e, t), t.targetStart = e, t.targetAnchor = r(e));
  return t.anchor && r(t.anchor);
}
const Cl = Kc;
function Us(e, t) {
  const s = e.ctx;
  if (s && s.ut) {
    let n, i;
    for (t ? (n = e.el, i = e.anchor) : (n = e.targetStart, i = e.targetAnchor); n && n !== i; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid), n = n.nextSibling;
    s.ut();
  }
}
function Ui(e, t, s, n, i = null) {
  const o = t.targetStart = s(""), r = t.targetAnchor = s("");
  return o[Sl] = r, e && (n(o, e, i), n(r, e, i)), r;
}
const at = /* @__PURE__ */ Symbol("_leaveCb"), Os = /* @__PURE__ */ Symbol("_enterCb");
function Jc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Es(() => {
    e.isMounted = !0;
  }), pn(() => {
    e.isUnmounting = !0;
  }), e;
}
const lt = [Function, Array], Al = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: lt,
  onEnter: lt,
  onAfterEnter: lt,
  onEnterCancelled: lt,
  // leave
  onBeforeLeave: lt,
  onLeave: lt,
  onAfterLeave: lt,
  onLeaveCancelled: lt,
  // appear
  onBeforeAppear: lt,
  onAppear: lt,
  onAfterAppear: lt,
  onAppearCancelled: lt
}, Tl = (e) => {
  const t = e.subTree;
  return t.component ? Tl(t.component) : t;
}, Xc = {
  name: "BaseTransition",
  props: Al,
  setup(e, { slots: t }) {
    const s = xo(), n = Jc();
    return () => {
      const i = t.default && El(t.default(), !0), o = i && i.length ? Pl(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? we() : void 0
      );
      if (!o)
        return;
      const r = /* @__PURE__ */ ve(e), { mode: l } = r;
      if (n.isLeaving)
        return _i(o);
      const a = Fo(o);
      if (!a)
        return _i(o);
      let c = Bi(
        a,
        r,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (p) => c = p
      );
      a.type !== Qe && ln(a, c);
      let u = s.subTree && Fo(s.subTree);
      if (u && u.type !== Qe && !cs(u, a) && Tl(s).type !== Qe) {
        let p = Bi(
          u,
          r,
          n,
          s
        );
        if (ln(u, p), l === "out-in" && a.type !== Qe)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete p.afterLeave, u = void 0;
          }, _i(o);
        l === "in-out" && a.type !== Qe ? p.delayLeave = (w, k, E) => {
          const T = Ml(
            n,
            u
          );
          T[String(u.key)] = u, w[at] = () => {
            k(), w[at] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            E(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return o;
    };
  }
};
function Pl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const s of e)
      if (s.type !== Qe) {
        t = s;
        break;
      }
  }
  return t;
}
const Qc = Xc;
function Ml(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function Bi(e, t, s, n, i) {
  const {
    appear: o,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: k,
    onAfterLeave: E,
    onLeaveCancelled: T,
    onBeforeAppear: G,
    onAppear: Y,
    onAfterAppear: V,
    onAppearCancelled: X
  } = t, _ = String(e.key), v = Ml(s, e), x = (S, K) => {
    S && ft(
      S,
      n,
      9,
      K
    );
  }, y = (S, K) => {
    const le = K[1];
    x(S, K), ne(S) ? S.every((R) => R.length <= 1) && le() : S.length <= 1 && le();
  }, F = {
    mode: r,
    persisted: l,
    beforeEnter(S) {
      let K = a;
      if (!s.isMounted)
        if (o)
          K = G || a;
        else
          return;
      S[at] && S[at](
        !0
        /* cancelled */
      );
      const le = v[_];
      le && cs(e, le) && le.el[at] && le.el[at](), x(K, [S]);
    },
    enter(S) {
      if (v[_] === e) return;
      let K = c, le = u, R = p;
      if (!s.isMounted)
        if (o)
          K = Y || c, le = V || u, R = X || p;
        else
          return;
      let Z = !1;
      S[Os] = (I) => {
        Z || (Z = !0, I ? x(R, [S]) : x(le, [S]), F.delayedLeave && F.delayedLeave(), S[Os] = void 0);
      };
      const B = S[Os].bind(null, !1);
      K ? y(K, [S, B]) : B();
    },
    leave(S, K) {
      const le = String(e.key);
      if (S[Os] && S[Os](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return K();
      x(w, [S]);
      let R = !1;
      S[at] = (B) => {
        R || (R = !0, K(), B ? x(T, [S]) : x(E, [S]), S[at] = void 0, v[le] === e && delete v[le]);
      };
      const Z = S[at].bind(null, !1);
      v[le] = e, k ? y(k, [S, Z]) : Z();
    },
    clone(S) {
      const K = Bi(
        S,
        t,
        s,
        n,
        i
      );
      return i && i(K), K;
    }
  };
  return F;
}
function _i(e) {
  if (ri(e))
    return e = Xt(e), e.children = null, e;
}
function Fo(e) {
  if (!ri(e))
    return xl(e.type) && e.children ? Pl(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && ue(s.default))
      return s.default();
  }
}
function ln(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ln(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function El(e, t = !1, s) {
  let n = [], i = 0;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    const l = s == null ? r.key : String(s) + String(r.key != null ? r.key : o);
    r.type === oe ? (r.patchFlag & 128 && i++, n = n.concat(
      El(r.children, t, l)
    )) : (t || r.type !== Qe) && n.push(l != null ? Xt(r, { key: l }) : r);
  }
  if (i > 1)
    for (let o = 0; o < n.length; o++)
      n[o].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Rt(e, t) {
  return ue(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    De({ name: e.name }, t, { setup: e })
  ) : e;
}
function Il(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Uo(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Nn = /* @__PURE__ */ new WeakMap();
function Gs(e, t, s, n, i = !1) {
  if (ne(e)) {
    e.forEach(
      (T, G) => Gs(
        T,
        t && (ne(t) ? t[G] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (Ks(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Gs(e, t, s, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? ui(n.component) : n.el, r = i ? null : o, { i: l, r: a } = e, c = t && t.r, u = l.refs === Pe ? l.refs = {} : l.refs, p = l.setupState, w = /* @__PURE__ */ ve(p), k = p === Pe ? Vr : (T) => Uo(u, T) ? !1 : be(w, T), E = (T, G) => !(G && Uo(u, G));
  if (c != null && c !== a) {
    if (Bo(t), Ee(c))
      u[c] = null, k(c) && (p[c] = null);
    else if (/* @__PURE__ */ $e(c)) {
      const T = t;
      E(c, T.k) && (c.value = null), T.k && (u[T.k] = null);
    }
  }
  if (ue(a)) {
    Et();
    try {
      fn(a, l, 12, [r, u]);
    } finally {
      It();
    }
  } else {
    const T = Ee(a), G = /* @__PURE__ */ $e(a);
    if (T || G) {
      const Y = () => {
        if (e.f) {
          const V = T ? k(a) ? p[a] : u[a] : E() || !e.k ? a.value : u[e.k];
          if (i)
            ne(V) && co(V, o);
          else if (ne(V))
            V.includes(o) || V.push(o);
          else if (T)
            u[a] = [o], k(a) && (p[a] = u[a]);
          else {
            const X = [o];
            E(a, e.k) && (a.value = X), e.k && (u[e.k] = X);
          }
        } else T ? (u[a] = r, k(a) && (p[a] = r)) : G && (E(a, e.k) && (a.value = r), e.k && (u[e.k] = r));
      };
      if (r) {
        const V = () => {
          Y(), Nn.delete(e);
        };
        V.id = -1, Nn.set(e, V), Je(V, s);
      } else
        Bo(e), Y();
    }
  }
}
function Bo(e) {
  const t = Nn.get(e);
  t && (t.flags |= 8, Nn.delete(e));
}
ti().requestIdleCallback;
ti().cancelIdleCallback;
const Ks = (e) => !!e.type.__asyncLoader, ri = (e) => e.type.__isKeepAlive;
function Zc(e, t) {
  Rl(e, "a", t);
}
function eu(e, t) {
  Rl(e, "da", t);
}
function Rl(e, t, s = Ze) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (li(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      ri(i.parent.vnode) && tu(n, t, s, i), i = i.parent;
  }
}
function tu(e, t, s, n) {
  const i = li(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  $l(() => {
    co(n[t], i);
  }, s);
}
function li(e, t, s = Ze, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), o = t.__weh || (t.__weh = (...r) => {
      Et();
      const l = hn(s), a = ft(t, s, e, r);
      return l(), It(), a;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Wt = (e) => (t, s = Ze) => {
  (!cn || e === "sp") && li(e, (...n) => t(...n), s);
}, su = Wt("bm"), Es = Wt("m"), nu = Wt(
  "bu"
), iu = Wt("u"), pn = Wt(
  "bum"
), $l = Wt("um"), ou = Wt(
  "sp"
), ru = Wt("rtg"), lu = Wt("rtc");
function au(e, t = Ze) {
  li("ec", e, t);
}
const cu = /* @__PURE__ */ Symbol.for("v-ndc");
function Ve(e, t, s, n) {
  let i;
  const o = s, r = ne(e);
  if (r || Ee(e)) {
    const l = r && /* @__PURE__ */ Vt(e);
    let a = !1, c = !1;
    l && (a = !/* @__PURE__ */ rt(e), c = /* @__PURE__ */ jt(e), e = si(e)), i = new Array(e.length);
    for (let u = 0, p = e.length; u < p; u++)
      i[u] = t(
        a ? c ? Ms(vt(e[u])) : vt(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (ke(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const u = l[a];
        i[a] = t(e[u], u, a, o);
      }
    }
  else
    i = [];
  return i;
}
const Hi = (e) => e ? Ql(e) ? ui(e) : Hi(e.parent) : null, Ys = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ De(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Hi(e.parent),
    $root: (e) => Hi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ll(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      bo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ge.bind(e.proxy)),
    $watch: (e) => qc.bind(e)
  })
), bi = (e, t) => e !== Pe && !e.__isScriptSetup && be(e, t), uu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: o, accessCache: r, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const w = r[t];
      if (w !== void 0)
        switch (w) {
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
        if (bi(n, t))
          return r[t] = 1, n[t];
        if (i !== Pe && be(i, t))
          return r[t] = 2, i[t];
        if (be(o, t))
          return r[t] = 3, o[t];
        if (s !== Pe && be(s, t))
          return r[t] = 4, s[t];
        Vi && (r[t] = 0);
      }
    }
    const c = Ys[t];
    let u, p;
    if (c)
      return t === "$attrs" && Ke(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (s !== Pe && be(s, t))
      return r[t] = 4, s[t];
    if (
      // global properties
      p = a.config.globalProperties, be(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: o } = e;
    return bi(i, t) ? (i[t] = s, !0) : n !== Pe && be(n, t) ? (n[t] = s, !0) : be(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: o, type: r }
  }, l) {
    let a;
    return !!(s[l] || e !== Pe && l[0] !== "$" && be(e, l) || bi(t, l) || be(o, l) || be(n, l) || be(Ys, l) || be(i.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : be(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Ho(e) {
  return ne(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Vi = !0;
function du(e) {
  const t = Ll(e), s = e.proxy, n = e.ctx;
  Vi = !1, t.beforeCreate && Vo(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: r,
    watch: l,
    provide: a,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: p,
    mounted: w,
    beforeUpdate: k,
    updated: E,
    activated: T,
    deactivated: G,
    beforeDestroy: Y,
    beforeUnmount: V,
    destroyed: X,
    unmounted: _,
    render: v,
    renderTracked: x,
    renderTriggered: y,
    errorCaptured: F,
    serverPrefetch: S,
    // public API
    expose: K,
    inheritAttrs: le,
    // assets
    components: R,
    directives: Z,
    filters: B
  } = t;
  if (c && fu(c, n, null), r)
    for (const U in r) {
      const z = r[U];
      ue(z) && (n[U] = z.bind(s));
    }
  if (i) {
    const U = i.call(s, s);
    ke(U) && (e.data = /* @__PURE__ */ ni(U));
  }
  if (Vi = !0, o)
    for (const U in o) {
      const z = o[U], ce = ue(z) ? z.bind(s, s) : ue(z.get) ? z.get.bind(s, s) : Mt, te = !ue(z) && ue(z.set) ? z.set.bind(s) : Mt, fe = _e({
        get: ce,
        set: te
      });
      Object.defineProperty(n, U, {
        enumerable: !0,
        configurable: !0,
        get: () => fe.value,
        set: (de) => fe.value = de
      });
    }
  if (l)
    for (const U in l)
      Ol(l[U], n, s, U);
  if (a) {
    const U = ue(a) ? a.call(s) : a;
    Reflect.ownKeys(U).forEach((z) => {
      Vc(z, U[z]);
    });
  }
  u && Vo(u, e, "c");
  function b(U, z) {
    ne(z) ? z.forEach((ce) => U(ce.bind(s))) : z && U(z.bind(s));
  }
  if (b(su, p), b(Es, w), b(nu, k), b(iu, E), b(Zc, T), b(eu, G), b(au, F), b(lu, x), b(ru, y), b(pn, V), b($l, _), b(ou, S), ne(K))
    if (K.length) {
      const U = e.exposed || (e.exposed = {});
      K.forEach((z) => {
        Object.defineProperty(U, z, {
          get: () => s[z],
          set: (ce) => s[z] = ce,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  v && e.render === Mt && (e.render = v), le != null && (e.inheritAttrs = le), R && (e.components = R), Z && (e.directives = Z), S && Il(e);
}
function fu(e, t, s = Mt) {
  ne(e) && (e = ji(e));
  for (const n in e) {
    const i = e[n];
    let o;
    ke(i) ? "default" in i ? o = qs(
      i.from || n,
      i.default,
      !0
    ) : o = qs(i.from || n) : o = qs(i), /* @__PURE__ */ $e(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (r) => o.value = r
    }) : t[n] = o;
  }
}
function Vo(e, t, s) {
  ft(
    ne(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Ol(e, t, s, n) {
  let i = n.includes(".") ? kl(s, n) : () => s[n];
  if (Ee(e)) {
    const o = t[e];
    ue(o) && Ue(i, o);
  } else if (ue(e))
    Ue(i, e.bind(s));
  else if (ke(e))
    if (ne(e))
      e.forEach((o) => Ol(o, t, s, n));
    else {
      const o = ue(e.handler) ? e.handler.bind(s) : t[e.handler];
      ue(o) && Ue(i, o, e);
    }
}
function Ll(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = o.get(t);
  let a;
  return l ? a = l : !i.length && !s && !n ? a = t : (a = {}, i.length && i.forEach(
    (c) => Dn(a, c, r, !0)
  ), Dn(a, t, r)), ke(t) && o.set(t, a), a;
}
function Dn(e, t, s, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Dn(e, o, s, !0), i && i.forEach(
    (r) => Dn(e, r, s, !0)
  );
  for (const r in t)
    if (!(n && r === "expose")) {
      const l = pu[r] || s && s[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const pu = {
  data: jo,
  props: Wo,
  emits: Wo,
  // objects
  methods: Bs,
  computed: Bs,
  // lifecycle
  beforeCreate: Ye,
  created: Ye,
  beforeMount: Ye,
  mounted: Ye,
  beforeUpdate: Ye,
  updated: Ye,
  beforeDestroy: Ye,
  beforeUnmount: Ye,
  destroyed: Ye,
  unmounted: Ye,
  activated: Ye,
  deactivated: Ye,
  errorCaptured: Ye,
  serverPrefetch: Ye,
  // assets
  components: Bs,
  directives: Bs,
  // watch
  watch: gu,
  // provide / inject
  provide: jo,
  inject: hu
};
function jo(e, t) {
  return t ? e ? function() {
    return De(
      ue(e) ? e.call(this, this) : e,
      ue(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function hu(e, t) {
  return Bs(ji(e), ji(t));
}
function ji(e) {
  if (ne(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Bs(e, t) {
  return e ? De(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Wo(e, t) {
  return e ? ne(e) && ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : De(
    /* @__PURE__ */ Object.create(null),
    Ho(e),
    Ho(t ?? {})
  ) : t;
}
function gu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = De(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Ye(e[n], t[n]);
  return s;
}
function Nl() {
  return {
    app: null,
    config: {
      isNativeTag: Vr,
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
let mu = 0;
function yu(e, t) {
  return function(n, i = null) {
    ue(n) || (n = De({}, n)), i != null && !ke(i) && (i = null);
    const o = Nl(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = o.app = {
      _uid: mu++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Yu,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...p) {
        return r.has(u) || (u && ue(u.install) ? (r.add(u), u.install(c, ...p)) : ue(u) && (r.add(u), u(c, ...p))), c;
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), c;
      },
      component(u, p) {
        return p ? (o.components[u] = p, c) : o.components[u];
      },
      directive(u, p) {
        return p ? (o.directives[u] = p, c) : o.directives[u];
      },
      mount(u, p, w) {
        if (!a) {
          const k = c._ceVNode || ee(n, i);
          return k.appContext = o, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(k, u, w), a = !0, c._container = u, u.__vue_app__ = c, ui(k.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (ft(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, p) {
        return o.provides[u] = p, c;
      },
      runWithContext(u) {
        const p = hs;
        hs = c;
        try {
          return u();
        } finally {
          hs = p;
        }
      }
    };
    return c;
  };
}
let hs = null;
const vu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${gt(t)}Modifiers`] || e[`${Zt(t)}Modifiers`];
function _u(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Pe;
  let i = s;
  const o = t.startsWith("update:"), r = o && vu(n, t.slice(7));
  r && (r.trim && (i = s.map((u) => Ee(u) ? u.trim() : u)), r.number && (i = s.map(uo)));
  let l, a = n[l = hi(t)] || // also try camelCase event handler (#2249)
  n[l = hi(gt(t))];
  !a && o && (a = n[l = hi(Zt(t))]), a && ft(
    a,
    e,
    6,
    i
  );
  const c = n[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ft(
      c,
      e,
      6,
      i
    );
  }
}
const bu = /* @__PURE__ */ new WeakMap();
function Dl(e, t, s = !1) {
  const n = s ? bu : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {}, l = !1;
  if (!ue(e)) {
    const a = (c) => {
      const u = Dl(c, t, !0);
      u && (l = !0, De(r, u));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !o && !l ? (ke(e) && n.set(e, null), null) : (ne(o) ? o.forEach((a) => r[a] = null) : De(r, o), ke(e) && n.set(e, r), r);
}
function ai(e, t) {
  return !e || !Xn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), be(e, t[0].toLowerCase() + t.slice(1)) || be(e, Zt(t)) || be(e, t));
}
function zo(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: r,
    attrs: l,
    emit: a,
    render: c,
    renderCache: u,
    props: p,
    data: w,
    setupState: k,
    ctx: E,
    inheritAttrs: T
  } = e, G = Ln(e);
  let Y, V;
  try {
    if (s.shapeFlag & 4) {
      const _ = i || n, v = _;
      Y = Tt(
        c.call(
          v,
          _,
          u,
          p,
          k,
          w,
          E
        )
      ), V = l;
    } else {
      const _ = t;
      Y = Tt(
        _.length > 1 ? _(
          p,
          { attrs: l, slots: r, emit: a }
        ) : _(
          p,
          null
        )
      ), V = t.props ? l : wu(l);
    }
  } catch (_) {
    Js.length = 0, oi(_, e, 1), Y = ee(Qe);
  }
  let X = Y;
  if (V && T !== !1) {
    const _ = Object.keys(V), { shapeFlag: v } = X;
    _.length && v & 7 && (o && _.some(Qn) && (V = ku(
      V,
      o
    )), X = Xt(X, V, !1, !0));
  }
  return s.dirs && (X = Xt(X, null, !1, !0), X.dirs = X.dirs ? X.dirs.concat(s.dirs) : s.dirs), s.transition && ln(X, s.transition), Y = X, Ln(G), Y;
}
const wu = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Xn(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, ku = (e, t) => {
  const s = {};
  for (const n in e)
    (!Qn(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Su(e, t, s) {
  const { props: n, children: i, component: o } = e, { props: r, children: l, patchFlag: a } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? qo(n, r, c) : !!r;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        const w = u[p];
        if (Fl(r, n, w) && !ai(c, w))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === r ? !1 : n ? r ? qo(n, r, c) : !0 : !!r;
  return !1;
}
function qo(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Fl(t, e, o) && !ai(s, o))
      return !0;
  }
  return !1;
}
function Fl(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && ke(n) && ke(i) ? !fo(n, i) : n !== i;
}
function xu({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Ul = {}, Bl = () => Object.create(Ul), Hl = (e) => Object.getPrototypeOf(e) === Ul;
function Cu(e, t, s, n = !1) {
  const i = {}, o = Bl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Vl(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ Pc(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Au(e, t, s, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ ve(i), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const u = e.vnode.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        let w = u[p];
        if (ai(e.emitsOptions, w))
          continue;
        const k = t[w];
        if (a)
          if (be(o, w))
            k !== o[w] && (o[w] = k, c = !0);
          else {
            const E = gt(w);
            i[E] = Wi(
              a,
              l,
              E,
              k,
              e,
              !1
            );
          }
        else
          k !== o[w] && (o[w] = k, c = !0);
      }
    }
  } else {
    Vl(e, t, i, o) && (c = !0);
    let u;
    for (const p in l)
      (!t || // for camelCase
      !be(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Zt(p)) === p || !be(t, u))) && (a ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[u] !== void 0) && (i[p] = Wi(
        a,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete i[p]);
    if (o !== l)
      for (const p in o)
        (!t || !be(t, p)) && (delete o[p], c = !0);
  }
  c && Ut(e.attrs, "set", "");
}
function Vl(e, t, s, n) {
  const [i, o] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (js(a))
        continue;
      const c = t[a];
      let u;
      i && be(i, u = gt(a)) ? !o || !o.includes(u) ? s[u] = c : (l || (l = {}))[u] = c : ai(e.emitsOptions, a) || (!(a in n) || c !== n[a]) && (n[a] = c, r = !0);
    }
  if (o) {
    const a = /* @__PURE__ */ ve(s), c = l || Pe;
    for (let u = 0; u < o.length; u++) {
      const p = o[u];
      s[p] = Wi(
        i,
        a,
        p,
        c[p],
        e,
        !be(c, p)
      );
    }
  }
  return r;
}
function Wi(e, t, s, n, i, o) {
  const r = e[s];
  if (r != null) {
    const l = be(r, "default");
    if (l && n === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && ue(a)) {
        const { propsDefaults: c } = i;
        if (s in c)
          n = c[s];
        else {
          const u = hn(i);
          n = c[s] = a.call(
            null,
            t
          ), u();
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
    ] && (n === "" || n === Zt(s)) && (n = !0));
  }
  return n;
}
const Tu = /* @__PURE__ */ new WeakMap();
function jl(e, t, s = !1) {
  const n = s ? Tu : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, l = [];
  let a = !1;
  if (!ue(e)) {
    const u = (p) => {
      a = !0;
      const [w, k] = jl(p, t, !0);
      De(r, w), k && l.push(...k);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !a)
    return ke(e) && n.set(e, Ss), Ss;
  if (ne(o))
    for (let u = 0; u < o.length; u++) {
      const p = gt(o[u]);
      Go(p) && (r[p] = Pe);
    }
  else if (o)
    for (const u in o) {
      const p = gt(u);
      if (Go(p)) {
        const w = o[u], k = r[p] = ne(w) || ue(w) ? { type: w } : De({}, w), E = k.type;
        let T = !1, G = !0;
        if (ne(E))
          for (let Y = 0; Y < E.length; ++Y) {
            const V = E[Y], X = ue(V) && V.name;
            if (X === "Boolean") {
              T = !0;
              break;
            } else X === "String" && (G = !1);
          }
        else
          T = ue(E) && E.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = T, k[
          1
          /* shouldCastTrue */
        ] = G, (T || be(k, "default")) && l.push(p);
      }
    }
  const c = [r, l];
  return ke(e) && n.set(e, c), c;
}
function Go(e) {
  return e[0] !== "$" && !js(e);
}
const wo = (e) => e === "_" || e === "_ctx" || e === "$stable", ko = (e) => ne(e) ? e.map(Tt) : [Tt(e)], Pu = (e, t, s) => {
  if (t._n)
    return t;
  const n = Di((...i) => ko(t(...i)), s);
  return n._c = !1, n;
}, Wl = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (wo(i)) continue;
    const o = e[i];
    if (ue(o))
      t[i] = Pu(i, o, n);
    else if (o != null) {
      const r = ko(o);
      t[i] = () => r;
    }
  }
}, zl = (e, t) => {
  const s = ko(t);
  e.slots.default = () => s;
}, ql = (e, t, s) => {
  for (const n in t)
    (s || !wo(n)) && (e[n] = t[n]);
}, Mu = (e, t, s) => {
  const n = e.slots = Bl();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (ql(n, t, s), s && Kr(n, "_", i, !0)) : Wl(t, n);
  } else t && zl(e, t);
}, Eu = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let o = !0, r = Pe;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? o = !1 : ql(i, t, s) : (o = !t.$stable, Wl(t, i)), r = t;
  } else t && (zl(e, t), r = { default: 1 });
  if (o)
    for (const l in i)
      !wo(l) && r[l] == null && delete i[l];
}, Je = Lu;
function Iu(e) {
  return Ru(e);
}
function Ru(e, t) {
  const s = ti();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: u,
    parentNode: p,
    nextSibling: w,
    setScopeId: k = Mt,
    insertStaticContent: E
  } = e, T = (f, m, C, D = null, N = null, O = null, q = void 0, W = null, j = !!m.dynamicChildren) => {
    if (f === m)
      return;
    f && !cs(f, m) && (D = Fe(f), de(f, N, O, !0), f = null), m.patchFlag === -2 && (j = !1, m.dynamicChildren = null);
    const { type: L, ref: ie, shapeFlag: J } = m;
    switch (L) {
      case ci:
        G(f, m, C, D);
        break;
      case Qe:
        Y(f, m, C, D);
        break;
      case Pn:
        f == null && V(m, C, D, q);
        break;
      case oe:
        R(
          f,
          m,
          C,
          D,
          N,
          O,
          q,
          W,
          j
        );
        break;
      default:
        J & 1 ? v(
          f,
          m,
          C,
          D,
          N,
          O,
          q,
          W,
          j
        ) : J & 6 ? Z(
          f,
          m,
          C,
          D,
          N,
          O,
          q,
          W,
          j
        ) : (J & 64 || J & 128) && L.process(
          f,
          m,
          C,
          D,
          N,
          O,
          q,
          W,
          j,
          es
        );
    }
    ie != null && N ? Gs(ie, f && f.ref, O, m || f, !m) : ie == null && f && f.ref != null && Gs(f.ref, null, O, f, !0);
  }, G = (f, m, C, D) => {
    if (f == null)
      n(
        m.el = l(m.children),
        C,
        D
      );
    else {
      const N = m.el = f.el;
      m.children !== f.children && c(N, m.children);
    }
  }, Y = (f, m, C, D) => {
    f == null ? n(
      m.el = a(m.children || ""),
      C,
      D
    ) : m.el = f.el;
  }, V = (f, m, C, D) => {
    [f.el, f.anchor] = E(
      f.children,
      m,
      C,
      D,
      f.el,
      f.anchor
    );
  }, X = ({ el: f, anchor: m }, C, D) => {
    let N;
    for (; f && f !== m; )
      N = w(f), n(f, C, D), f = N;
    n(m, C, D);
  }, _ = ({ el: f, anchor: m }) => {
    let C;
    for (; f && f !== m; )
      C = w(f), i(f), f = C;
    i(m);
  }, v = (f, m, C, D, N, O, q, W, j) => {
    if (m.type === "svg" ? q = "svg" : m.type === "math" && (q = "mathml"), f == null)
      x(
        m,
        C,
        D,
        N,
        O,
        q,
        W,
        j
      );
    else {
      const L = f.el && f.el._isVueCE ? f.el : null;
      try {
        L && L._beginPatch(), S(
          f,
          m,
          N,
          O,
          q,
          W,
          j
        );
      } finally {
        L && L._endPatch();
      }
    }
  }, x = (f, m, C, D, N, O, q, W) => {
    let j, L;
    const { props: ie, shapeFlag: J, transition: se, dirs: ae } = f;
    if (j = f.el = r(
      f.type,
      O,
      ie && ie.is,
      ie
    ), J & 8 ? u(j, f.children) : J & 16 && F(
      f.children,
      j,
      null,
      D,
      N,
      wi(f, O),
      q,
      W
    ), ae && ss(f, null, D, "created"), y(j, f, f.scopeId, q, D), ie) {
      for (const Te in ie)
        Te !== "value" && !js(Te) && o(j, Te, null, ie[Te], O, D);
      "value" in ie && o(j, "value", null, ie.value, O), (L = ie.onVnodeBeforeMount) && kt(L, D, f);
    }
    ae && ss(f, null, D, "beforeMount");
    const ye = $u(N, se);
    ye && se.beforeEnter(j), n(j, m, C), ((L = ie && ie.onVnodeMounted) || ye || ae) && Je(() => {
      try {
        L && kt(L, D, f), ye && se.enter(j), ae && ss(f, null, D, "mounted");
      } finally {
      }
    }, N);
  }, y = (f, m, C, D, N) => {
    if (C && k(f, C), D)
      for (let O = 0; O < D.length; O++)
        k(f, D[O]);
    if (N) {
      let O = N.subTree;
      if (m === O || Yl(O.type) && (O.ssContent === m || O.ssFallback === m)) {
        const q = N.vnode;
        y(
          f,
          q,
          q.scopeId,
          q.slotScopeIds,
          N.parent
        );
      }
    }
  }, F = (f, m, C, D, N, O, q, W, j = 0) => {
    for (let L = j; L < f.length; L++) {
      const ie = f[L] = W ? Dt(f[L]) : Tt(f[L]);
      T(
        null,
        ie,
        m,
        C,
        D,
        N,
        O,
        q,
        W
      );
    }
  }, S = (f, m, C, D, N, O, q) => {
    const W = m.el = f.el;
    let { patchFlag: j, dynamicChildren: L, dirs: ie } = m;
    j |= f.patchFlag & 16;
    const J = f.props || Pe, se = m.props || Pe;
    let ae;
    if (C && ns(C, !1), (ae = se.onVnodeBeforeUpdate) && kt(ae, C, m, f), ie && ss(m, f, C, "beforeUpdate"), C && ns(C, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    L && (!f.dynamicChildren || f.dynamicChildren.length !== L.length) && (j = 0, q = !1, L = null), (J.innerHTML && se.innerHTML == null || J.textContent && se.textContent == null) && u(W, ""), L ? K(
      f.dynamicChildren,
      L,
      W,
      C,
      D,
      wi(m, N),
      O
    ) : q || z(
      f,
      m,
      W,
      null,
      C,
      D,
      wi(m, N),
      O,
      !1
    ), j > 0) {
      if (j & 16)
        le(W, J, se, C, N);
      else if (j & 2 && J.class !== se.class && o(W, "class", null, se.class, N), j & 4 && o(W, "style", J.style, se.style, N), j & 8) {
        const ye = m.dynamicProps;
        for (let Te = 0; Te < ye.length; Te++) {
          const xe = ye[Te], Le = J[xe], Be = se[xe];
          (Be !== Le || xe === "value") && o(W, xe, Le, Be, N, C);
        }
      }
      j & 1 && f.children !== m.children && u(W, m.children);
    } else !q && L == null && le(W, J, se, C, N);
    ((ae = se.onVnodeUpdated) || ie) && Je(() => {
      ae && kt(ae, C, m, f), ie && ss(m, f, C, "updated");
    }, D);
  }, K = (f, m, C, D, N, O, q) => {
    for (let W = 0; W < m.length; W++) {
      const j = f[W], L = m[W], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        j.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (j.type === oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !cs(j, L) || // - In the case of a component, it could contain anything.
        j.shapeFlag & 198) ? p(j.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          C
        )
      );
      T(
        j,
        L,
        ie,
        null,
        D,
        N,
        O,
        q,
        !0
      );
    }
  }, le = (f, m, C, D, N) => {
    if (m !== C) {
      if (m !== Pe)
        for (const O in m)
          !js(O) && !(O in C) && o(
            f,
            O,
            m[O],
            null,
            N,
            D
          );
      for (const O in C) {
        if (js(O)) continue;
        const q = C[O], W = m[O];
        q !== W && O !== "value" && o(f, O, W, q, N, D);
      }
      "value" in C && o(f, "value", m.value, C.value, N);
    }
  }, R = (f, m, C, D, N, O, q, W, j) => {
    const L = m.el = f ? f.el : l(""), ie = m.anchor = f ? f.anchor : l("");
    let { patchFlag: J, dynamicChildren: se, slotScopeIds: ae } = m;
    ae && (W = W ? W.concat(ae) : ae), f == null ? (n(L, C, D), n(ie, C, D), F(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      C,
      ie,
      N,
      O,
      q,
      W,
      j
    )) : J > 0 && J & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === se.length ? (K(
      f.dynamicChildren,
      se,
      C,
      N,
      O,
      q,
      W
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || N && m === N.subTree) && So(
      f,
      m,
      !0
      /* shallow */
    )) : z(
      f,
      m,
      C,
      ie,
      N,
      O,
      q,
      W,
      j
    );
  }, Z = (f, m, C, D, N, O, q, W, j) => {
    m.slotScopeIds = W, f == null ? m.shapeFlag & 512 ? N.ctx.activate(
      m,
      C,
      D,
      q,
      j
    ) : B(
      m,
      C,
      D,
      N,
      O,
      q,
      j
    ) : I(f, m, j);
  }, B = (f, m, C, D, N, O, q) => {
    const W = f.component = Vu(
      f,
      D,
      N
    );
    if (ri(f) && (W.ctx.renderer = es), ju(W, !1, q), W.asyncDep) {
      if (N && N.registerDep(W, b, q), !f.el) {
        const j = W.subTree = ee(Qe);
        Y(null, j, m, C), f.placeholder = j.el;
      }
    } else
      b(
        W,
        f,
        m,
        C,
        N,
        O,
        q
      );
  }, I = (f, m, C) => {
    const D = m.component = f.component;
    if (Su(f, m, C))
      if (D.asyncDep && !D.asyncResolved) {
        U(D, m, C);
        return;
      } else
        D.next = m, D.update();
    else
      m.el = f.el, D.vnode = m;
  }, b = (f, m, C, D, N, O, q) => {
    const W = () => {
      if (f.isMounted) {
        let { next: J, bu: se, u: ae, parent: ye, vnode: Te } = f;
        {
          const bt = Gl(f);
          if (bt) {
            J && (J.el = Te.el, U(f, J, q)), bt.asyncDep.then(() => {
              Je(() => {
                f.isUnmounted || L();
              }, N);
            });
            return;
          }
        }
        let xe = J, Le;
        ns(f, !1), J ? (J.el = Te.el, U(f, J, q)) : J = Te, se && Tn(se), (Le = J.props && J.props.onVnodeBeforeUpdate) && kt(Le, ye, J, Te), ns(f, !0);
        const Be = zo(f), _t = f.subTree;
        f.subTree = Be, T(
          _t,
          Be,
          // parent may have changed if it's in a teleport
          p(_t.el),
          // anchor may have changed if it's in a fragment
          Fe(_t),
          f,
          N,
          O
        ), J.el = Be.el, xe === null && xu(f, Be.el), ae && Je(ae, N), (Le = J.props && J.props.onVnodeUpdated) && Je(
          () => kt(Le, ye, J, Te),
          N
        );
      } else {
        let J;
        const { el: se, props: ae } = m, { bm: ye, m: Te, parent: xe, root: Le, type: Be } = f, _t = Ks(m);
        ns(f, !1), ye && Tn(ye), !_t && (J = ae && ae.onVnodeBeforeMount) && kt(J, xe, m), ns(f, !0);
        {
          Le.ce && Le.ce._hasShadowRoot() && Le.ce._injectChildStyle(
            Be,
            f.parent ? f.parent.type : void 0
          );
          const bt = f.subTree = zo(f);
          T(
            null,
            bt,
            C,
            D,
            f,
            N,
            O
          ), m.el = bt.el;
        }
        if (Te && Je(Te, N), !_t && (J = ae && ae.onVnodeMounted)) {
          const bt = m;
          Je(
            () => kt(J, xe, bt),
            N
          );
        }
        (m.shapeFlag & 256 || xe && Ks(xe.vnode) && xe.vnode.shapeFlag & 256) && f.a && Je(f.a, N), f.isMounted = !0, m = C = D = null;
      }
    };
    f.scope.on();
    const j = f.effect = new tl(W);
    f.scope.off();
    const L = f.update = j.run.bind(j), ie = f.job = j.runIfDirty.bind(j);
    ie.i = f, ie.id = f.uid, j.scheduler = () => bo(ie), ns(f, !0), L();
  }, U = (f, m, C) => {
    m.component = f;
    const D = f.vnode.props;
    f.vnode = m, f.next = null, Au(f, m.props, D, C), Eu(f, m.children, C), Et(), Lo(f), It();
  }, z = (f, m, C, D, N, O, q, W, j = !1) => {
    const L = f && f.children, ie = f ? f.shapeFlag : 0, J = m.children, { patchFlag: se, shapeFlag: ae } = m;
    if (se > 0) {
      if (se & 128) {
        te(
          L,
          J,
          C,
          D,
          N,
          O,
          q,
          W,
          j
        );
        return;
      } else if (se & 256) {
        ce(
          L,
          J,
          C,
          D,
          N,
          O,
          q,
          W,
          j
        );
        return;
      }
    }
    ae & 8 ? (ie & 16 && Se(L, N, O), J !== L && u(C, J)) : ie & 16 ? ae & 16 ? te(
      L,
      J,
      C,
      D,
      N,
      O,
      q,
      W,
      j
    ) : Se(L, N, O, !0) : (ie & 8 && u(C, ""), ae & 16 && F(
      J,
      C,
      D,
      N,
      O,
      q,
      W,
      j
    ));
  }, ce = (f, m, C, D, N, O, q, W, j) => {
    f = f || Ss, m = m || Ss;
    const L = f.length, ie = m.length, J = Math.min(L, ie);
    let se;
    for (se = 0; se < J; se++) {
      const ae = m[se] = j ? Dt(m[se]) : Tt(m[se]);
      T(
        f[se],
        ae,
        C,
        null,
        N,
        O,
        q,
        W,
        j
      );
    }
    L > ie ? Se(
      f,
      N,
      O,
      !0,
      !1,
      J
    ) : F(
      m,
      C,
      D,
      N,
      O,
      q,
      W,
      j,
      J
    );
  }, te = (f, m, C, D, N, O, q, W, j) => {
    let L = 0;
    const ie = m.length;
    let J = f.length - 1, se = ie - 1;
    for (; L <= J && L <= se; ) {
      const ae = f[L], ye = m[L] = j ? Dt(m[L]) : Tt(m[L]);
      if (cs(ae, ye))
        T(
          ae,
          ye,
          C,
          null,
          N,
          O,
          q,
          W,
          j
        );
      else
        break;
      L++;
    }
    for (; L <= J && L <= se; ) {
      const ae = f[J], ye = m[se] = j ? Dt(m[se]) : Tt(m[se]);
      if (cs(ae, ye))
        T(
          ae,
          ye,
          C,
          null,
          N,
          O,
          q,
          W,
          j
        );
      else
        break;
      J--, se--;
    }
    if (L > J) {
      if (L <= se) {
        const ae = se + 1, ye = ae < ie ? m[ae].el : D;
        for (; L <= se; )
          T(
            null,
            m[L] = j ? Dt(m[L]) : Tt(m[L]),
            C,
            ye,
            N,
            O,
            q,
            W,
            j
          ), L++;
      }
    } else if (L > se)
      for (; L <= J; )
        de(f[L], N, O, !0), L++;
    else {
      const ae = L, ye = L, Te = /* @__PURE__ */ new Map();
      for (L = ye; L <= se; L++) {
        const it = m[L] = j ? Dt(m[L]) : Tt(m[L]);
        it.key != null && Te.set(it.key, L);
      }
      let xe, Le = 0;
      const Be = se - ye + 1;
      let _t = !1, bt = 0;
      const Rs = new Array(Be);
      for (L = 0; L < Be; L++) Rs[L] = 0;
      for (L = ae; L <= J; L++) {
        const it = f[L];
        if (Le >= Be) {
          de(it, N, O, !0);
          continue;
        }
        let wt;
        if (it.key != null)
          wt = Te.get(it.key);
        else
          for (xe = ye; xe <= se; xe++)
            if (Rs[xe - ye] === 0 && cs(it, m[xe])) {
              wt = xe;
              break;
            }
        wt === void 0 ? de(it, N, O, !0) : (Rs[wt - ye] = L + 1, wt >= bt ? bt = wt : _t = !0, T(
          it,
          m[wt],
          C,
          null,
          N,
          O,
          q,
          W,
          j
        ), Le++);
      }
      const Po = _t ? Ou(Rs) : Ss;
      for (xe = Po.length - 1, L = Be - 1; L >= 0; L--) {
        const it = ye + L, wt = m[it], Mo = m[it + 1], Eo = it + 1 < ie ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Mo.el || Kl(Mo)
        ) : D;
        Rs[L] === 0 ? T(
          null,
          wt,
          C,
          Eo,
          N,
          O,
          q,
          W,
          j
        ) : _t && (xe < 0 || L !== Po[xe] ? fe(wt, C, Eo, 2) : xe--);
      }
    }
  }, fe = (f, m, C, D, N = null) => {
    const { el: O, type: q, transition: W, children: j, shapeFlag: L } = f;
    if (L & 6) {
      fe(f.component.subTree, m, C, D);
      return;
    }
    if (L & 128) {
      f.suspense.move(m, C, D);
      return;
    }
    if (L & 64) {
      q.move(f, m, C, es);
      return;
    }
    if (q === oe) {
      n(O, m, C);
      for (let J = 0; J < j.length; J++)
        fe(j[J], m, C, D);
      n(f.anchor, m, C);
      return;
    }
    if (q === Pn) {
      X(f, m, C);
      return;
    }
    if (D !== 2 && L & 1 && W)
      if (D === 0)
        W.persisted && !O[at] ? n(O, m, C) : (W.beforeEnter(O), n(O, m, C), Je(() => W.enter(O), N));
      else {
        const { leave: J, delayLeave: se, afterLeave: ae } = W, ye = () => {
          f.ctx.isUnmounted ? i(O) : n(O, m, C);
        }, Te = () => {
          const xe = O._isLeaving || !!O[at];
          O._isLeaving && O[at](
            !0
            /* cancelled */
          ), W.persisted && !xe ? ye() : J(O, () => {
            ye(), ae && ae();
          });
        };
        se ? se(O, ye, Te) : Te();
      }
    else
      n(O, m, C);
  }, de = (f, m, C, D = !1, N = !1) => {
    const {
      type: O,
      props: q,
      ref: W,
      children: j,
      dynamicChildren: L,
      shapeFlag: ie,
      patchFlag: J,
      dirs: se,
      cacheIndex: ae,
      memo: ye
    } = f;
    if (J === -2 && (N = !1), W != null && (Et(), Gs(W, null, C, f, !0), It()), ae != null && (m.renderCache[ae] = void 0), ie & 256) {
      m.ctx.deactivate(f);
      return;
    }
    const Te = ie & 1 && se, xe = !Ks(f);
    let Le;
    if (xe && (Le = q && q.onVnodeBeforeUnmount) && kt(Le, m, f), ie & 6)
      pe(f.component, C, D);
    else {
      if (ie & 128) {
        f.suspense.unmount(C, D);
        return;
      }
      Te && ss(f, null, m, "beforeUnmount"), ie & 64 ? f.type.remove(
        f,
        m,
        C,
        es,
        D
      ) : L && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !L.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (O !== oe || J > 0 && J & 64) ? Se(
        L,
        m,
        C,
        !1,
        !0
      ) : (O === oe && J & 384 || !N && ie & 16) && Se(j, m, C), D && Ae(f);
    }
    const Be = ye != null && ae == null;
    (xe && (Le = q && q.onVnodeUnmounted) || Te || Be) && Je(() => {
      Le && kt(Le, m, f), Te && ss(f, null, m, "unmounted"), Be && (f.el = null);
    }, C);
  }, Ae = (f) => {
    const { type: m, el: C, anchor: D, transition: N } = f;
    if (m === oe) {
      nt(C, D);
      return;
    }
    if (m === Pn) {
      _(f);
      return;
    }
    const O = () => {
      i(C), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (f.shapeFlag & 1 && N && !N.persisted) {
      const { leave: q, delayLeave: W } = N, j = () => q(C, O);
      W ? W(f.el, O, j) : j();
    } else
      O();
  }, nt = (f, m) => {
    let C;
    for (; f !== m; )
      C = w(f), i(f), f = C;
    i(m);
  }, pe = (f, m, C) => {
    const { bum: D, scope: N, job: O, subTree: q, um: W, m: j, a: L } = f;
    Ko(j), Ko(L), D && Tn(D), N.stop(), O && (O.flags |= 8, de(q, f, m, C)), W && Je(W, m), Je(() => {
      f.isUnmounted = !0;
    }, m);
  }, Se = (f, m, C, D = !1, N = !1, O = 0) => {
    for (let q = O; q < f.length; q++)
      de(f[q], m, C, D, N);
  }, Fe = (f) => {
    if (f.shapeFlag & 6)
      return Fe(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const m = w(f.anchor || f.el), C = m && m[Sl];
    return C ? w(C) : m;
  };
  let Oe = !1;
  const Ie = (f, m, C) => {
    let D;
    f == null ? m._vnode && (de(m._vnode, null, null, !0), D = m._vnode.component) : T(
      m._vnode || null,
      f,
      m,
      null,
      null,
      null,
      C
    ), m._vnode = f, Oe || (Oe = !0, Lo(D), vl(), Oe = !1);
  }, es = {
    p: T,
    um: de,
    m: fe,
    r: Ae,
    mt: B,
    mc: F,
    pc: z,
    pbc: K,
    n: Fe,
    o: e
  };
  return {
    render: Ie,
    hydrate: void 0,
    createApp: yu(Ie)
  };
}
function wi({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ns({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function $u(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function So(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (ne(n) && ne(i))
    for (let o = 0; o < n.length; o++) {
      const r = n[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = Dt(i[o]), l.el = r.el), !s && l.patchFlag !== -2 && So(r, l)), l.type === ci && (l.patchFlag === -1 && (l = i[o] = Dt(l)), l.el = r.el), l.type === Qe && !l.el && (l.el = r.el);
    }
}
function Ou(e) {
  const t = e.slice(), s = [0];
  let n, i, o, r, l;
  const a = e.length;
  for (n = 0; n < a; n++) {
    const c = e[n];
    if (c !== 0) {
      if (i = s[s.length - 1], e[i] < c) {
        t[n] = i, s.push(n);
        continue;
      }
      for (o = 0, r = s.length - 1; o < r; )
        l = o + r >> 1, e[s[l]] < c ? o = l + 1 : r = l;
      c < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), s[o] = n);
    }
  }
  for (o = s.length, r = s[o - 1]; o-- > 0; )
    s[o] = r, r = t[r];
  return s;
}
function Gl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Gl(t);
}
function Ko(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Kl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Kl(t.subTree) : null;
}
const Yl = (e) => e.__isSuspense;
function Lu(e, t) {
  t && t.pendingBranch ? ne(e) ? t.effects.push(...e) : t.effects.push(e) : Hc(e);
}
const oe = /* @__PURE__ */ Symbol.for("v-fgt"), ci = /* @__PURE__ */ Symbol.for("v-txt"), Qe = /* @__PURE__ */ Symbol.for("v-cmt"), Pn = /* @__PURE__ */ Symbol.for("v-stc"), Js = [];
let ot = null;
function A(e = !1) {
  Js.push(ot = e ? null : []);
}
function Nu() {
  Js.pop(), ot = Js[Js.length - 1] || null;
}
let an = 1;
function Fn(e, t = !1) {
  an += e, e < 0 && ot && t && (ot.hasOnce = !0);
}
function Jl(e) {
  return e.dynamicChildren = an > 0 ? ot || Ss : null, Nu(), an > 0 && ot && ot.push(e), e;
}
function P(e, t, s, n, i, o) {
  return Jl(
    d(
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
function yt(e, t, s, n, i) {
  return Jl(
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
function Un(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function cs(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Xl = ({ key: e }) => e ?? null, Mn = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? Ee(e) || /* @__PURE__ */ $e(e) || ue(e) ? { i: ut, r: e, k: t, f: !!s } : e : null);
function d(e, t = null, s = null, n = 0, i = null, o = e === oe ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Xl(t),
    ref: t && Mn(t),
    scopeId: bl,
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
    ctx: ut
  };
  return l ? (Bn(a, s), o & 128 && e.normalize(a)) : s && (a.shapeFlag |= Ee(s) ? 8 : 16), an > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  ot && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ot.push(a), a;
}
const ee = Du;
function Du(e, t = null, s = null, n = 0, i = null, o = !1) {
  if ((!e || e === cu) && (e = Qe), Un(e)) {
    const l = Xt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Bn(l, s), an > 0 && !o && ot && (l.shapeFlag & 6 ? ot[ot.indexOf(e)] = l : ot.push(l)), l.patchFlag = -2, l;
  }
  if (Gu(e) && (e = e.__vccOpts), t) {
    t = Fu(t);
    let { class: l, style: a } = t;
    l && !Ee(l) && (t.class = he(l)), ke(a) && (/* @__PURE__ */ ii(a) && !ne(a) && (a = De({}, a)), t.style = Jt(a));
  }
  const r = Ee(e) ? 1 : Yl(e) ? 128 : xl(e) ? 64 : ke(e) ? 4 : ue(e) ? 2 : 0;
  return d(
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
function Fu(e) {
  return e ? /* @__PURE__ */ ii(e) || Hl(e) ? De({}, e) : e : null;
}
function Xt(e, t, s = !1, n = !1) {
  const { props: i, ref: o, patchFlag: r, children: l, transition: a } = e, c = t ? Uu(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Xl(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && o ? ne(o) ? o.concat(Mn(t)) : [o, Mn(t)] : Mn(t)
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
    patchFlag: t && e.type !== oe ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Xt(e.ssContent),
    ssFallback: e.ssFallback && Xt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && n && ln(
    u,
    a.clone(u)
  ), u;
}
function fs(e = " ", t = 0) {
  return ee(ci, null, e, t);
}
function _n(e, t) {
  const s = ee(Pn, null, e);
  return s.staticCount = t, s;
}
function we(e = "", t = !1) {
  return t ? (A(), yt(Qe, null, e)) : ee(Qe, null, e);
}
function Tt(e) {
  return e == null || typeof e == "boolean" ? ee(Qe) : ne(e) ? ee(
    oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Un(e) ? Dt(e) : ee(ci, null, String(e));
}
function Dt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xt(e);
}
function Bn(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ne(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Bn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !Hl(t) ? t._ctx = ut : i === 3 && ut && (ut.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ue(t)) {
    if (n & 65) {
      Bn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ut }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [fs(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function Uu(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = he([t.class, n.class]));
      else if (i === "style")
        t.style = Jt([t.style, n.style]);
      else if (Xn(i)) {
        const o = t[i], r = n[i];
        r && o !== r && !(ne(o) && o.includes(r)) ? t[i] = o ? [].concat(o, r) : r : r == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Qn(i) && (t[i] = r);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function kt(e, t, s, n = null) {
  ft(e, t, 7, [
    s,
    n
  ]);
}
const Bu = Nl();
let Hu = 0;
function Vu(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Bu, o = {
    uid: Hu++,
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
    scope: new Qr(
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
    propsOptions: jl(n, i),
    emitsOptions: Dl(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Pe,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Pe,
    data: Pe,
    props: Pe,
    attrs: Pe,
    slots: Pe,
    refs: Pe,
    setupState: Pe,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = _u.bind(null, o), e.ce && e.ce(o), o;
}
let Ze = null;
const xo = () => Ze || ut;
let Hn, zi;
{
  const e = ti(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  Hn = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Ze = s
  ), zi = t(
    "__VUE_SSR_SETTERS__",
    (s) => cn = s
  );
}
const hn = (e) => {
  const t = Ze;
  return Hn(e), e.scope.on(), () => {
    e.scope.off(), Hn(t);
  };
}, Yo = () => {
  Ze && Ze.scope.off(), Hn(null);
};
function Ql(e) {
  return e.vnode.shapeFlag & 4;
}
let cn = !1;
function ju(e, t = !1, s = !1) {
  t && zi(t);
  const { props: n, children: i } = e.vnode, o = Ql(e);
  Cu(e, n, o, t), Mu(e, i, s || t);
  const r = o ? Wu(e, t) : void 0;
  return t && zi(!1), r;
}
function Wu(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, uu);
  const { setup: n } = s;
  if (n) {
    Et();
    const i = e.setupContext = n.length > 1 ? qu(e) : null, o = hn(e), r = fn(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Wr(r);
    if (It(), o(), (l || e.sp) && !Ks(e) && Il(e), l) {
      if (r.then(Yo, Yo), t)
        return r.then((a) => {
          Jo(e, a);
        }).catch((a) => {
          oi(a, e, 0);
        });
      e.asyncDep = r;
    } else
      Jo(e, r);
  } else
    Zl(e);
}
function Jo(e, t, s) {
  ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ke(t) && (e.setupState = gl(t)), Zl(e);
}
function Zl(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Mt);
  {
    const i = hn(e);
    Et();
    try {
      du(e);
    } finally {
      It(), i();
    }
  }
}
const zu = {
  get(e, t) {
    return Ke(e, "get", ""), e[t];
  }
};
function qu(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, zu),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ui(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(gl(_o(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Ys)
        return Ys[s](e);
    },
    has(t, s) {
      return s in t || s in Ys;
    }
  })) : e.proxy;
}
function Gu(e) {
  return ue(e) && "__vccOpts" in e;
}
const _e = (e, t) => /* @__PURE__ */ Nc(e, t, cn);
function Ku(e, t, s) {
  try {
    Fn(-1);
    const n = arguments.length;
    return n === 2 ? ke(t) && !ne(t) ? Un(t) ? ee(e, null, [t]) : ee(e, t) : ee(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Un(s) && (s = [s]), ee(e, t, s));
  } finally {
    Fn(1);
  }
}
const Yu = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let qi;
const Xo = typeof window < "u" && window.trustedTypes;
if (Xo)
  try {
    qi = /* @__PURE__ */ Xo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ea = qi ? (e) => qi.createHTML(e) : (e) => e, Ju = "http://www.w3.org/2000/svg", Xu = "http://www.w3.org/1998/Math/MathML", Nt = typeof document < "u" ? document : null, Qo = Nt && /* @__PURE__ */ Nt.createElement("template"), Qu = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? Nt.createElementNS(Ju, e) : t === "mathml" ? Nt.createElementNS(Xu, e) : s ? Nt.createElement(e, { is: s }) : Nt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Nt.createTextNode(e),
  createComment: (e) => Nt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Nt.querySelector(e),
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
      Qo.innerHTML = ea(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Qo.content;
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
}, zt = "transition", Ls = "animation", un = /* @__PURE__ */ Symbol("_vtc"), ta = {
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
}, Zu = /* @__PURE__ */ De(
  {},
  Al,
  ta
), ed = (e) => (e.displayName = "Transition", e.props = Zu, e), Zo = /* @__PURE__ */ ed(
  (e, { slots: t }) => Ku(Qc, td(e), t)
), is = (e, t = []) => {
  ne(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, er = (e) => e ? ne(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function td(e) {
  const t = {};
  for (const R in e)
    R in ta || (t[R] = e[R]);
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
    appearActiveClass: c = r,
    appearToClass: u = l,
    leaveFromClass: p = `${s}-leave-from`,
    leaveActiveClass: w = `${s}-leave-active`,
    leaveToClass: k = `${s}-leave-to`
  } = e, E = sd(i), T = E && E[0], G = E && E[1], {
    onBeforeEnter: Y,
    onEnter: V,
    onEnterCancelled: X,
    onLeave: _,
    onLeaveCancelled: v,
    onBeforeAppear: x = Y,
    onAppear: y = V,
    onAppearCancelled: F = X
  } = t, S = (R, Z, B, I) => {
    R._enterCancelled = I, os(R, Z ? u : l), os(R, Z ? c : r), B && B();
  }, K = (R, Z) => {
    R._isLeaving = !1, os(R, p), os(R, k), os(R, w), Z && Z();
  }, le = (R) => (Z, B) => {
    const I = R ? y : V, b = () => S(Z, R, B);
    is(I, [Z, b]), tr(() => {
      os(Z, R ? a : o), Lt(Z, R ? u : l), er(I) || sr(Z, n, T, b);
    });
  };
  return De(t, {
    onBeforeEnter(R) {
      is(Y, [R]), Lt(R, o), Lt(R, r);
    },
    onBeforeAppear(R) {
      is(x, [R]), Lt(R, a), Lt(R, c);
    },
    onEnter: le(!1),
    onAppear: le(!0),
    onLeave(R, Z) {
      R._isLeaving = !0;
      const B = () => K(R, Z);
      Lt(R, p), R._enterCancelled ? (Lt(R, w), or(R)) : (or(R), Lt(R, w)), tr(() => {
        R._isLeaving && (os(R, p), Lt(R, k), er(_) || sr(R, n, G, B));
      }), is(_, [R, B]);
    },
    onEnterCancelled(R) {
      S(R, !1, void 0, !0), is(X, [R]);
    },
    onAppearCancelled(R) {
      S(R, !0, void 0, !0), is(F, [R]);
    },
    onLeaveCancelled(R) {
      K(R), is(v, [R]);
    }
  });
}
function sd(e) {
  if (e == null)
    return null;
  if (ke(e))
    return [ki(e.enter), ki(e.leave)];
  {
    const t = ki(e);
    return [t, t];
  }
}
function ki(e) {
  return tc(e);
}
function Lt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[un] || (e[un] = /* @__PURE__ */ new Set())).add(t);
}
function os(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[un];
  s && (s.delete(t), s.size || (e[un] = void 0));
}
function tr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let nd = 0;
function sr(e, t, s, n) {
  const i = e._endId = ++nd, o = () => {
    i === e._endId && n();
  };
  if (s != null)
    return setTimeout(o, s);
  const { type: r, timeout: l, propCount: a } = id(e, t);
  if (!r)
    return n();
  const c = r + "end";
  let u = 0;
  const p = () => {
    e.removeEventListener(c, w), o();
  }, w = (k) => {
    k.target === e && ++u >= a && p();
  };
  setTimeout(() => {
    u < a && p();
  }, l + 1), e.addEventListener(c, w);
}
function id(e, t) {
  const s = window.getComputedStyle(e), n = (E) => (s[E] || "").split(", "), i = n(`${zt}Delay`), o = n(`${zt}Duration`), r = nr(i, o), l = n(`${Ls}Delay`), a = n(`${Ls}Duration`), c = nr(l, a);
  let u = null, p = 0, w = 0;
  t === zt ? r > 0 && (u = zt, p = r, w = o.length) : t === Ls ? c > 0 && (u = Ls, p = c, w = a.length) : (p = Math.max(r, c), u = p > 0 ? r > c ? zt : Ls : null, w = u ? u === zt ? o.length : a.length : 0);
  const k = u === zt && /\b(?:transform|all)(?:,|$)/.test(
    n(`${zt}Property`).toString()
  );
  return {
    type: u,
    timeout: p,
    propCount: w,
    hasTransform: k
  };
}
function nr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => ir(s) + ir(e[n])));
}
function ir(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function or(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function od(e, t, s) {
  const n = e[un];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Vn = /* @__PURE__ */ Symbol("_vod"), sa = /* @__PURE__ */ Symbol("_vsh"), ks = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[Vn] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : Ns(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), Ns(e, !0), n.enter(e)) : n.leave(e, () => {
      Ns(e, !1);
    }) : Ns(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ns(e, t);
  }
};
function Ns(e, t) {
  e.style.display = t ? e[Vn] : "none", e[sa] = !t;
}
const rd = /* @__PURE__ */ Symbol(""), ld = /(?:^|;)\s*display\s*:/;
function ad(e, t, s) {
  const n = e.style, i = Ee(s);
  let o = !1;
  if (s && !i) {
    if (t)
      if (Ee(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          s[l] == null && Hs(n, l, "");
        }
      else
        for (const r in t)
          s[r] == null && Hs(n, r, "");
    for (const r in s) {
      r === "display" && (o = !0);
      const l = s[r];
      l != null ? ud(
        e,
        r,
        !Ee(t) && t ? t[r] : void 0,
        l
      ) || Hs(n, r, l) : Hs(n, r, "");
    }
  } else if (i) {
    if (t !== s) {
      const r = n[rd];
      r && (s += ";" + r), n.cssText = s, o = ld.test(s);
    }
  } else t && e.removeAttribute("style");
  Vn in e && (e[Vn] = o ? n.display : "", e[sa] && (n.display = "none"));
}
const rr = /\s*!important$/;
function Hs(e, t, s) {
  if (ne(s))
    s.forEach((n) => Hs(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = cd(e, t);
    rr.test(s) ? e.setProperty(
      Zt(n),
      s.replace(rr, ""),
      "important"
    ) : e[n] = s;
  }
}
const lr = ["Webkit", "Moz", "ms"], Si = {};
function cd(e, t) {
  const s = Si[t];
  if (s)
    return s;
  let n = gt(t);
  if (n !== "filter" && n in e)
    return Si[t] = n;
  n = Gr(n);
  for (let i = 0; i < lr.length; i++) {
    const o = lr[i] + n;
    if (o in e)
      return Si[t] = o;
  }
  return t;
}
function ud(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ee(n) && s === n;
}
const ar = "http://www.w3.org/1999/xlink";
function cr(e, t, s, n, i, o = lc(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(ar, t.slice(6, t.length)) : e.setAttributeNS(ar, t, s) : s == null || o && !Yr(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : dt(s) ? String(s) : s
  );
}
function ur(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? ea(s) : s);
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
    l === "boolean" ? s = Yr(s) : s == null && l === "string" ? (s = "", r = !0) : l === "number" && (s = 0, r = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  r && e.removeAttribute(i || t);
}
function ws(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function dd(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const dr = /* @__PURE__ */ Symbol("_vei");
function fd(e, t, s, n, i = null) {
  const o = e[dr] || (e[dr] = {}), r = o[t];
  if (n && r)
    r.value = n;
  else {
    const [l, a] = gd(t);
    if (n) {
      const c = o[t] = vd(
        n,
        i
      );
      ws(e, l, c, a);
    } else r && (dd(e, l, r, a), o[t] = void 0);
  }
}
const pd = /(Once|Passive|Capture)$/, hd = /^on:?(?:Once|Passive|Capture)$/;
function gd(e) {
  let t, s;
  for (; (s = e.match(pd)) && !hd.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Zt(e.slice(2)), t];
}
let xi = 0;
const md = /* @__PURE__ */ Promise.resolve(), yd = () => xi || (md.then(() => xi = 0), xi = Date.now());
function vd(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const i = s.value;
    if (ne(i)) {
      const o = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        o.call(n), n._stopped = !0;
      };
      const r = i.slice(), l = [n];
      for (let a = 0; a < r.length && !n._stopped; a++) {
        const c = r[a];
        c && ft(
          c,
          t,
          5,
          l
        );
      }
    } else
      ft(
        i,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = yd(), s;
}
const fr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _d = (e, t, s, n, i, o) => {
  const r = i === "svg";
  t === "class" ? od(e, n, r) : t === "style" ? ad(e, s, n) : Xn(t) ? Qn(t) || fd(e, t, s, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : bd(e, t, n, r)) ? (ur(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && cr(e, t, n, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (wd(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ee(n))) ? ur(e, gt(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), cr(e, t, n, r));
};
function bd(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && fr(t) && ue(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return fr(t) && Ee(s) ? !1 : t in e;
}
function wd(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = gt(t);
  return Array.isArray(s) ? s.some((i) => gt(i) === n) : Object.keys(s).some((i) => gt(i) === n);
}
const pr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ne(t) ? (s) => Tn(t, s) : t;
};
function kd(e) {
  e.target.composing = !0;
}
function hr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ci = /* @__PURE__ */ Symbol("_assign");
function gr(e, t, s) {
  return t && (e = e.trim()), s && (e = uo(e)), e;
}
const Sd = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[Ci] = pr(i);
    const o = n || i.props && i.props.type === "number";
    ws(e, t ? "change" : "input", (r) => {
      r.target.composing || e[Ci](gr(e.value, s, o));
    }), (s || o) && ws(e, "change", () => {
      e.value = gr(e.value, s, o);
    }), t || (ws(e, "compositionstart", kd), ws(e, "compositionend", hr), ws(e, "change", hr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: o } }, r) {
    if (e[Ci] = pr(r), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? uo(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === a) || (e.value = a);
  }
}, xd = ["ctrl", "shift", "alt", "meta"], Cd = {
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
  exact: (e, t) => xd.some((s) => e[`${s}Key`] && !t.includes(s))
}, ct = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (i, ...o) => {
    for (let r = 0; r < t.length; r++) {
      const l = Cd[t[r]];
      if (l && l(i, t)) return;
    }
    return e(i, ...o);
  });
}, Ad = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Td = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (i) => {
    if (!("key" in i))
      return;
    const o = Zt(i.key);
    if (t.some(
      (r) => r === o || Ad[r] === o
    ))
      return e(i);
  });
}, Pd = /* @__PURE__ */ De({ patchProp: _d }, Qu);
let mr;
function Md() {
  return mr || (mr = Iu(Pd));
}
const na = (...e) => {
  const t = Md().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = Id(n);
    if (!i) return;
    const o = t._component;
    !ue(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = s(i, !1, Ed(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
};
function Ed(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Id(e) {
  return Ee(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let ia;
const di = (e) => ia = e, oa = (
  /* istanbul ignore next */
  Symbol()
);
function Gi(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Xs;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Xs || (Xs = {}));
function Rd() {
  const e = Zr(!0), t = e.run(() => /* @__PURE__ */ me({}));
  let s = [], n = [];
  const i = _o({
    install(o) {
      di(i), i._a = o, o.provide(oa, i), o.config.globalProperties.$pinia = i, n.forEach((r) => s.push(r)), n = [];
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
const ra = () => {
};
function yr(e, t, s, n = ra) {
  e.push(t);
  const i = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), n());
  };
  return !s && el() && cc(i), i;
}
function ys(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const $d = (e) => e(), vr = Symbol(), Ai = Symbol();
function Ki(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    Gi(i) && Gi(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ $e(n) && !/* @__PURE__ */ Vt(n) ? e[s] = Ki(i, n) : e[s] = n;
  }
  return e;
}
const Od = (
  /* istanbul ignore next */
  Symbol()
);
function Ld(e) {
  return !Gi(e) || !e.hasOwnProperty(Od);
}
const { assign: Gt } = Object;
function Nd(e) {
  return !!(/* @__PURE__ */ $e(e) && e.effect);
}
function Dd(e, t, s, n) {
  const { state: i, actions: o, getters: r } = t, l = s.state.value[e];
  let a;
  function c() {
    l || (s.state.value[e] = i ? i() : {});
    const u = /* @__PURE__ */ Rc(s.state.value[e]);
    return Gt(u, o, Object.keys(r || {}).reduce((p, w) => (p[w] = _o(_e(() => {
      di(s);
      const k = s._s.get(e);
      return r[w].call(k, k);
    })), p), {}));
  }
  return a = la(e, c, t, s, n, !0), a;
}
function la(e, t, s = {}, n, i, o) {
  let r;
  const l = Gt({ actions: {} }, s), a = { deep: !0 };
  let c, u, p = [], w = [], k;
  const E = n.state.value[e];
  !o && !E && (n.state.value[e] = {});
  let T;
  function G(F) {
    let S;
    c = u = !1, typeof F == "function" ? (F(n.state.value[e]), S = {
      type: Xs.patchFunction,
      storeId: e,
      events: k
    }) : (Ki(n.state.value[e], F), S = {
      type: Xs.patchObject,
      payload: F,
      storeId: e,
      events: k
    });
    const K = T = Symbol();
    Ge().then(() => {
      T === K && (c = !0);
    }), u = !0, ys(p, S, n.state.value[e]);
  }
  const Y = o ? function() {
    const { state: S } = s, K = S ? S() : {};
    this.$patch((le) => {
      Gt(le, K);
    });
  } : (
    /* istanbul ignore next */
    ra
  );
  function V() {
    r.stop(), p = [], w = [], n._s.delete(e);
  }
  const X = (F, S = "") => {
    if (vr in F)
      return F[Ai] = S, F;
    const K = function() {
      di(n);
      const le = Array.from(arguments), R = [], Z = [];
      function B(U) {
        R.push(U);
      }
      function I(U) {
        Z.push(U);
      }
      ys(w, {
        args: le,
        name: K[Ai],
        store: v,
        after: B,
        onError: I
      });
      let b;
      try {
        b = F.apply(this && this.$id === e ? this : v, le);
      } catch (U) {
        throw ys(Z, U), U;
      }
      return b instanceof Promise ? b.then((U) => (ys(R, U), U)).catch((U) => (ys(Z, U), Promise.reject(U))) : (ys(R, b), b);
    };
    return K[vr] = !0, K[Ai] = S, K;
  }, _ = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: yr.bind(null, w),
    $patch: G,
    $reset: Y,
    $subscribe(F, S = {}) {
      const K = yr(p, F, S.detached, () => le()), le = r.run(() => Ue(() => n.state.value[e], (R) => {
        (S.flush === "sync" ? u : c) && F({
          storeId: e,
          type: Xs.direct,
          events: k
        }, R);
      }, Gt({}, a, S)));
      return K;
    },
    $dispose: V
  }, v = /* @__PURE__ */ ni(_);
  n._s.set(e, v);
  const y = (n._a && n._a.runWithContext || $d)(() => n._e.run(() => (r = Zr()).run(() => t({ action: X }))));
  for (const F in y) {
    const S = y[F];
    if (/* @__PURE__ */ $e(S) && !Nd(S) || /* @__PURE__ */ Vt(S))
      o || (E && Ld(S) && (/* @__PURE__ */ $e(S) ? S.value = E[F] : Ki(S, E[F])), n.state.value[e][F] = S);
    else if (typeof S == "function") {
      const K = X(S, F);
      y[F] = K, l.actions[F] = S;
    }
  }
  return Gt(v, y), Gt(/* @__PURE__ */ ve(v), y), Object.defineProperty(v, "$state", {
    get: () => n.state.value[e],
    set: (F) => {
      G((S) => {
        Gt(S, F);
      });
    }
  }), n._p.forEach((F) => {
    Gt(v, r.run(() => F({
      store: v,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), E && o && s.hydrate && s.hydrate(v.$state, E), c = !0, u = !0, v;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function fi(e, t, s) {
  let n, i;
  const o = typeof t == "function";
  typeof e == "string" ? (n = e, i = o ? s : t) : (i = e, n = e.id);
  function r(l, a) {
    const c = jc();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (c ? qs(oa, null) : null), l && di(l), l = ia, l._s.has(n) || (o ? la(n, t, i, l) : Dd(n, i, l)), l._s.get(n);
  }
  return r.$id = n, r;
}
let jn = !1;
function _r(e) {
  jn = e;
}
function Fd() {
  return jn;
}
function bn(e, t, s) {
  if (e === "debug" && !jn || e === "info" && !jn) return;
  const n = "[晓乐]";
  s.length > 0 ? console[e](`${n} ${t}`, ...s) : console[e](`${n} ${t}`);
}
const H = {
  debug(e, ...t) {
    bn("debug", e, t);
  },
  info(e, ...t) {
    bn("info", e, t);
  },
  warn(e, ...t) {
    bn("warn", e, t);
  },
  error(e, ...t) {
    bn("error", e, t);
  },
  get isDebug() {
    return Fd();
  }
};
function Ud() {
  return [
    { id: "netease", enabled: !0, priority: 0, config: {} },
    { id: "local", enabled: !1, priority: 1, config: {} }
  ];
}
function Ti() {
  return {
    volume: 65,
    playMode: "list",
    crossfade: !1,
    position: null,
    widgetMode: "dock",
    dockAlign: "bottom-left",
    showDragMiniText: !0,
    providers: Ud(),
    customOpacity: !1,
    opacity: 75,
    aiMode: "off",
    aiUseCustomApi: !1,
    aiContextMessages: 8,
    aiApiUrl: "",
    aiApiKey: "",
    aiModel: "",
    aiAutoTrigger: !0,
    aiTriggerOnGreeting: !1,
    aiCooldownMs: 3e3,
    togetherPromptRole: "system",
    togetherCustomPromptEnabled: !1,
    togetherCustomPrompt: "",
    debug: !1,
    neteaseMode: "worker",
    neteaseWorkerURL: "",
    neteaseCookie: "",
    neteaseCookieAt: 0,
    neteaseCookieValid: !1
  };
}
const ge = /* @__PURE__ */ fi("settings", {
  state: () => ({
    settings: Ti(),
    storage: null
  }),
  getters: {
    defaults: () => Ti(),
    neteaseStatus(e) {
      const t = e.settings.neteaseCookie, s = e.settings.neteaseCookieAt, n = e.settings.neteaseCookieValid;
      return !t || !s ? "no-cookie" : Date.now() - s >= 14 * 864e5 ? "expired" : n ? "ok" : "invalid";
    }
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = Ti();
      if (t) {
        const n = typeof SillyTavern < "u" && SillyTavern.getContext()?.libs?.lodash ? SillyTavern.getContext().libs.lodash : null;
        n ? this.settings = n.merge(structuredClone(s), t) : this.settings = {
          ...s,
          ...t,
          providers: s.providers.map((i) => {
            const o = t.providers?.find((r) => r.id === i.id);
            return o ? { ...o, config: o.config ?? i.config ?? {} } : i;
          })
        };
      } else
        this.settings = s;
      _r(this.settings.debug);
    },
    setVolume(e) {
      this.settings.volume = e, this.save();
    },
    setPlayMode(e) {
      this.settings.playMode = e, this.save();
    },
    setCrossfade(e) {
      this.settings.crossfade = e, this.save();
    },
    setPosition(e) {
      this.settings.position = e, this.save();
    },
    setWidgetMode(e) {
      this.settings.widgetMode = e, this.save();
    },
    setOpacity(e) {
      this.settings.opacity = e, this.save();
    },
    setCustomOpacity(e) {
      this.settings.customOpacity = e, this.save();
    },
    setDockAlign(e) {
      this.settings.dockAlign = e, this.save();
    },
    setShowDragMiniText(e) {
      this.settings.showDragMiniText = e, this.save();
    },
    setNeteaseMode(e) {
      this.settings.neteaseMode = e, this.save();
    },
    setAiMode(e) {
      this.settings.aiMode = e, this.save();
    },
    setAiUseCustomApi(e) {
      this.settings.aiUseCustomApi = e, this.save();
    },
    setAiContextMessages(e) {
      this.settings.aiContextMessages = e, this.save();
    },
    setAiAutoTrigger(e) {
      this.settings.aiAutoTrigger = e, this.save();
    },
    setAiTriggerOnGreeting(e) {
      this.settings.aiTriggerOnGreeting = e, this.save();
    },
    setAiApiUrl(e) {
      this.settings.aiApiUrl = e, this.save();
    },
    setAiApiKey(e) {
      this.settings.aiApiKey = e, this.save();
    },
    setAiModel(e) {
      this.settings.aiModel = e, this.save();
    },
    setTogetherPromptRole(e) {
      this.settings.togetherPromptRole = e, this.save();
    },
    setTogetherCustomPromptEnabled(e) {
      this.settings.togetherCustomPromptEnabled = e, this.save();
    },
    setTogetherCustomPrompt(e) {
      this.settings.togetherCustomPrompt = e, this.save();
    },
    setDebug(e) {
      this.settings.debug = e, _r(e), this.save();
    },
    setNeteaseWorkerURL(e) {
      let t = e.trim();
      t && !t.startsWith("http://") && !t.startsWith("https://") && (t = "https://" + t), t.endsWith("/") && (t = t.slice(0, -1)), this.settings.neteaseWorkerURL = t, this.save();
    },
    setNeteaseCookie(e) {
      this.settings.neteaseCookie = e, this.settings.neteaseCookieAt = e ? Date.now() : 0, this.settings.neteaseCookieValid = !!e, this.save();
    },
    setNeteaseCookieInvalid() {
      this.settings.neteaseCookieValid = !1, this.save();
    },
    save() {
      this.storage && this.storage.setSettings(this.settings);
    }
  }
}), Bd = 800, br = 16;
class Hd {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map(), this.targetVolume = 1, this.fadeTimer = 0, this.fadeAbort = null, this.preloadAudio = null, this.audio = new Audio(), this.audio.crossOrigin = "anonymous", this.audio.preload = "auto", this.audio.style.display = "none", document.body.appendChild(this.audio);
  }
  load(t) {
    this.cancelFade(), this.audio.src = t, this.audio.load();
  }
  async play(t = !1) {
    try {
      this.cancelFade(), t && !document.hidden ? (this.audio.volume = 0, await this.audio.play(), this.runFade(this.targetVolume)) : (this.audio.volume = this.targetVolume, await this.audio.play());
    } catch (s) {
      H.error("AudioEngine: play() failed:", s);
    }
  }
  pause(t = !1) {
    this.cancelFade(), t && !document.hidden && !this.audio.paused ? this.runFade(0, () => this.audio.pause()) : this.audio.pause();
  }
  seek(t) {
    this.audio.currentTime = t;
  }
  setVolume(t) {
    this.targetVolume = t, this.fadeTimer || (this.audio.volume = t);
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
  preloadNext(t) {
    this.preloadAudio || (this.preloadAudio = new Audio(), this.preloadAudio.crossOrigin = "anonymous", this.preloadAudio.preload = "auto", this.preloadAudio.style.display = "none", document.body.appendChild(this.preloadAudio)), this.preloadAudio.src = t, this.preloadAudio.load();
  }
  clearPreload() {
    this.preloadAudio && (this.preloadAudio.src = "");
  }
  on(t, s) {
    let n = this.listeners.get(t);
    n || (n = /* @__PURE__ */ new Set(), this.listeners.set(t, n));
    const i = s;
    return n.add(i), this.audio.addEventListener(t, i), () => {
      this.audio.removeEventListener(t, i), n.delete(i);
    };
  }
  runFade(t, s) {
    const n = this.audio.volume, i = t - n, o = performance.now();
    this.fadeAbort = (l) => {
      l && (this.audio.volume = t), this.fadeTimer = 0, this.fadeAbort = null, s?.();
    };
    const r = () => {
      if (!this.fadeAbort) return;
      const l = performance.now() - o, a = Math.min(l / Bd, 1);
      this.audio.volume = Math.max(0, Math.min(1, n + i * a)), a >= 1 ? this.fadeAbort(!0) : this.fadeTimer = setTimeout(r, br);
    };
    this.fadeTimer = setTimeout(r, br);
  }
  cancelFade() {
    this.fadeAbort && this.fadeAbort(!0), this.fadeTimer && clearTimeout(this.fadeTimer), this.fadeTimer = 0, this.fadeAbort = null;
  }
  destroy() {
    this.cancelFade();
    for (const [t, s] of this.listeners) {
      for (const n of s)
        this.audio.removeEventListener(t, n);
      s.clear();
    }
    this.listeners.clear(), this.audio.src = "", this.audio.remove(), this.preloadAudio && (this.preloadAudio.src = "", this.preloadAudio.remove(), this.preloadAudio = null);
  }
}
const wr = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function Vd(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const i = new RegExp(wr.source, "g"), o = [];
    let r;
    for (; (r = i.exec(n)) !== null; ) {
      const a = parseInt(r[1], 10), c = parseInt(r[2], 10), u = r[3] ?? "", p = u ? parseInt(u.padEnd(3, "0"), 10) : 0;
      o.push(a * 60 + c + p / 1e3);
    }
    if (o.length === 0) continue;
    const l = n.replace(new RegExp(wr.source, "g"), "").trim();
    if (l !== "")
      for (const a of o)
        s.push({ time: a, text: l });
  }
  s.sort((n, i) => n.time - i.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function jd(e, t) {
  if (e.length === 0) return null;
  let s = null;
  for (const n of e)
    if (n.time <= t)
      s = n;
    else
      break;
  return s;
}
class Wd {
  constructor(t) {
    this.providers = t;
  }
  async searchAll(t) {
    const s = await Promise.allSettled(
      this.providers.map((o) => o.search(t))
    ), n = [], i = /* @__PURE__ */ new Map();
    return s.forEach((o, r) => {
      if (o.status !== "fulfilled") {
        H.warn("Provider search failed: " + this.providers[r]?.id, o.reason);
        return;
      }
      for (const l of o.value) {
        const a = `${l.name}__${l.artist}`;
        i.get(a) === void 0 && (i.set(a, n.length), n.push(l));
      }
    }), n;
  }
  async resolve(t, s, n) {
    const i = this.getProvider(s);
    return i ? new Promise((o) => {
      const r = setTimeout(() => o(null), 2e4);
      i.resolve(t, n).then((l) => {
        clearTimeout(r), o(l);
      }).catch((l) => {
        clearTimeout(r), H.warn("Resolve failed: " + s + "/" + t, l), o(null);
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
        } catch (i) {
          H.warn("Provider searchAndResolve failed: " + n.id, i);
        }
    return null;
  }
  getProvider(t) {
    return this.providers.find((s) => s.id === t);
  }
}
const kr = (typeof globalThis < "u" ? globalThis : void 0)?.crypto || (typeof global < "u" ? global : void 0)?.crypto || (typeof window < "u" ? window : void 0)?.crypto || (typeof self < "u" ? self : void 0)?.crypto || (typeof frames < "u" ? frames : void 0)?.[0]?.crypto;
let Yi;
kr ? Yi = (e) => {
  const t = [];
  for (let s = 0; s < e; s += 4) t.push(kr.getRandomValues(new Uint32Array(1))[0]);
  return new et(t, e);
} : Yi = (e) => {
  const t = [], s = (i) => {
    let o = i, r = 987654321;
    const l = 4294967295;
    return () => {
      r = 36969 * (r & 65535) + (r >> 16) & l, o = 18e3 * (o & 65535) + (o >> 16) & l;
      let a = (r << 16) + o & l;
      return a /= 4294967296, a += 0.5, a * (Math.random() > 0.5 ? 1 : -1);
    };
  };
  let n;
  for (let i = 0; i < e; i += 4) {
    const o = s((n || Math.random()) * 4294967296);
    n = o() * 987654071, t.push(o() * 4294967296 | 0);
  }
  return new et(t, e);
};
var gs = class {
  /**
  * Creates a new instance of this class with the provided arguments.
  * This is a factory method that provides an alternative to using 'new'.
  * 
  * @param args - Arguments to pass to the constructor
  * @returns A new instance of this class
  * @static
  * @example
  * ```javascript
  * const instance = MyType.create(arg1, arg2);
  * ```
  */
  static create(...e) {
    return new this(...e);
  }
  /**
  * Copies properties from the provided object into this instance.
  * Performs a shallow merge of properties.
  * 
  * @param properties - The properties to mix in
  * @returns This instance for method chaining
  * @example
  * ```javascript
  * instance.mixIn({ field: 'value', another: 123 });
  * ```
  */
  mixIn(e) {
    return Object.assign(this, e);
  }
  /**
  * Creates a deep copy of this object.
  * 
  * @returns A clone of this instance
  * @example
  * ```javascript
  * const clone = instance.clone();
  * ```
  */
  clone() {
    const e = new this.constructor();
    return Object.assign(e, this), e;
  }
}, Mi, et = (Mi = class extends gs {
  /**
  * Initializes a newly created word array.
  * Can accept various input formats including regular arrays, typed arrays, and ArrayBuffers.
  * 
  * @param words - An array of 32-bit words, typed array, or ArrayBuffer
  * @param sigBytes - The number of significant bytes in the words (defaults to words.length * 4)
  * @example
  * ```javascript
  * const wordArray = new WordArray();
  * const wordArray = new WordArray([0x00010203, 0x04050607]);
  * const wordArray = new WordArray([0x00010203, 0x04050607], 6);
  * const wordArray = new WordArray(new Uint8Array([1, 2, 3, 4]));
  * ```
  */
  constructor(t = [], s) {
    super();
    /** The array of 32-bit words */
    re(this, "words");
    /** The number of significant bytes in this word array */
    re(this, "sigBytes");
    if (t instanceof ArrayBuffer) {
      const n = new Uint8Array(t);
      this._initFromUint8Array(n);
      return;
    }
    if (ArrayBuffer.isView(t)) {
      let n;
      t instanceof Uint8Array ? n = t : n = new Uint8Array(t.buffer, t.byteOffset, t.byteLength), this._initFromUint8Array(n);
      return;
    }
    this.words = t, this.sigBytes = s !== void 0 ? s : this.words.length * 4;
  }
  /**
  * Initialize from Uint8Array
  * @private
  */
  _initFromUint8Array(t) {
    const s = t.byteLength, n = [];
    for (let i = 0; i < s; i += 1) n[i >>> 2] |= t[i] << 24 - i % 4 * 8;
    this.words = n, this.sigBytes = s;
  }
  /**
  * Converts this word array to a string using the specified encoding.
  * 
  * @param encoder - The encoding strategy to use (defaults to Hex)
  * @returns The stringified word array
  * @example
  * ```javascript
  * const hexString = wordArray.toString();
  * const base64String = wordArray.toString(Base64);
  * const utf8String = wordArray.toString(Utf8);
  * ```
  */
  toString(t = aa) {
    return t.stringify(this);
  }
  /**
  * Concatenates a word array to this word array.
  * Modifies this word array in place.
  * 
  * @param wordArray - The word array to append
  * @returns This word array for method chaining
  * @example
  * ```javascript
  * wordArray1.concat(wordArray2);
  * const combined = wordArray1.concat(wordArray2).concat(wordArray3);
  * ```
  */
  concat(t) {
    const s = this.words, n = t.words, i = this.sigBytes, o = t.sigBytes;
    if (this.clamp(), i % 4) for (let r = 0; r < o; r += 1) {
      const l = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;
      s[i + r >>> 2] |= l << 24 - (i + r) % 4 * 8;
    }
    else for (let r = 0; r < o; r += 4) s[i + r >>> 2] = n[r >>> 2];
    return this.sigBytes += o, this;
  }
  /**
  * Removes insignificant bits from the end of the word array.
  * This ensures the word array only contains the exact number of significant bytes.
  * 
  * @example
  * ```javascript
  * wordArray.clamp();
  * ```
  */
  clamp() {
    const { words: t, sigBytes: s } = this;
    t[s >>> 2] &= 4294967295 << 32 - s % 4 * 8, t.length = Math.ceil(s / 4);
  }
  /**
  * Creates a copy of this word array.
  * 
  * @returns The cloned word array
  * @example
  * ```javascript
  * const clone = wordArray.clone();
  * ```
  */
  clone() {
    const t = super.clone();
    return t.words = this.words.slice(0), t;
  }
}, /**
* Creates a word array filled with cryptographically strong random bytes.
* Uses Web Crypto API if available, falls back to Math.random() if not.
* 
* @param nBytes - The number of random bytes to generate
* @returns The random word array
* @static
* @example
* ```javascript
* const randomBytes = WordArray.random(16); // Generate 16 random bytes
* ```
*/
re(Mi, "random", Yi), Mi);
const aa = {
  stringify(e) {
    const { words: t, sigBytes: s } = e, n = [];
    for (let i = 0; i < s; i += 1) {
      const o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      n.push((o >>> 4).toString(16)), n.push((o & 15).toString(16));
    }
    return n.join("");
  },
  parse(e) {
    const t = e.length, s = [];
    for (let n = 0; n < t; n += 2) s[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
    return new et(s, t / 2);
  }
}, Sr = {
  stringify(e) {
    const { words: t, sigBytes: s } = e, n = [];
    for (let i = 0; i < s; i += 1) {
      const o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      n.push(String.fromCharCode(o));
    }
    return n.join("");
  },
  parse(e) {
    const t = e.length, s = [];
    for (let n = 0; n < t; n += 1) s[n >>> 2] |= (e.charCodeAt(n) & 255) << 24 - n % 4 * 8;
    return new et(s, t);
  }
}, Co = {
  stringify(e) {
    try {
      return decodeURIComponent(escape(Sr.stringify(e)));
    } catch {
      throw new Error("Malformed UTF-8 data");
    }
  },
  parse(e) {
    return Sr.parse(unescape(encodeURIComponent(e)));
  }
};
var ca = class extends gs {
  constructor() {
    super();
    /** The number of blocks that should be kept unprocessed in the buffer */
    re(this, "_minBufferSize", 0);
    /** The data buffer */
    re(this, "_data");
    /** The number of bytes in the data buffer */
    re(this, "_nDataBytes");
  }
  /**
  * Resets this block algorithm's data buffer to its initial state.
  * 
  * @example
  * ```javascript
  * bufferedBlockAlgorithm.reset();
  * ```
  */
  reset() {
    this._data = new et(), this._nDataBytes = 0;
  }
  /**
  * Adds new data to this block algorithm's buffer.
  * 
  * @param data - The data to append (strings are converted to WordArray using UTF-8)
  * @example
  * ```javascript
  * bufferedBlockAlgorithm._append('data');
  * bufferedBlockAlgorithm._append(wordArray);
  * ```
  */
  _append(t) {
    let s;
    typeof t == "string" ? s = Co.parse(t) : s = t, this._data.concat(s), this._nDataBytes += s.sigBytes;
  }
  /**
  * Processes available data blocks.
  * This method invokes _doProcessBlock(dataWords, offset), which must be implemented by a concrete subtype.
  * 
  * @param doFlush - Whether all blocks and partial blocks should be processed
  * @returns The processed data
  * @example
  * ```javascript
  * const processedData = bufferedBlockAlgorithm._process();
  * const processedData = bufferedBlockAlgorithm._process(true); // Flush
  * ```
  */
  _process(t) {
    let s;
    const n = this._data, i = n.words, o = n.sigBytes, r = this.blockSize * 4;
    let l = o / r;
    t ? l = Math.ceil(l) : l = Math.max((l | 0) - this._minBufferSize, 0);
    const a = l * this.blockSize, c = Math.min(a * 4, o);
    if (a) {
      for (let u = 0; u < a; u += this.blockSize) this._doProcessBlock(i, u);
      s = i.splice(0, a), n.sigBytes -= c;
    }
    return new et(s || [], c);
  }
  /**
  * Creates a copy of this object.
  * 
  * @returns The clone
  * @example
  * ```javascript
  * const clone = bufferedBlockAlgorithm.clone();
  * ```
  */
  clone() {
    const t = super.clone();
    return t._data = this._data.clone(), t;
  }
}, ua = class extends ca {
  /**
  * Initializes a newly created hasher.
  * 
  * @param cfg - Configuration options
  */
  constructor(t) {
    super();
    /** The number of 32-bit words this hasher operates on */
    re(this, "blockSize", 512 / 32);
    /** Configuration options */
    re(this, "cfg");
    /** The hash result */
    re(this, "_hash");
    this.cfg = Object.assign({}, t), this.reset();
  }
  /**
  * Creates a shortcut function to a hasher's object interface.
  * 
  * @param SubHasher - The hasher class to create a helper for
  * @returns The shortcut function
  * @static
  * @example
  * ```javascript
  * const SHA256 = Hasher._createHelper(SHA256Algo);
  * ```
  */
  static _createHelper(t) {
    return (s, n) => new t(n).finalize(s);
  }
  /**
  * Creates a shortcut function to the HMAC's object interface.
  * 
  * @param SubHasher - The hasher class to use in this HMAC helper
  * @returns The shortcut function
  * @static
  * @example
  * ```javascript
  * const HmacSHA256 = Hasher._createHmacHelper(SHA256Algo);
  * ```
  */
  static _createHmacHelper(t) {
    return (s, n) => new qd(t, n).finalize(s);
  }
  /**
  * Resets this hasher to its initial state.
  * 
  * @example
  * ```javascript
  * hasher.reset();
  * ```
  */
  reset() {
    super.reset(), this._doReset();
  }
  /**
  * Updates this hasher with a message.
  * 
  * @param messageUpdate - The message to append
  * @returns This hasher instance for method chaining
  * @example
  * ```javascript
  * hasher.update('message');
  * hasher.update(wordArray);
  * ```
  */
  update(t) {
    return this._append(t), this._process(), this;
  }
  /**
  * Finalizes the hash computation.
  * Note that the finalize operation is effectively a destructive, read-once operation.
  * 
  * @param messageUpdate - An optional final message update
  * @returns The computed hash
  * @example
  * ```javascript
  * const hash = hasher.finalize();
  * const hash = hasher.finalize('message');
  * const hash = hasher.finalize(wordArray);
  * ```
  */
  finalize(t) {
    return t && this._append(t), this._doFinalize();
  }
}, zd = class extends ua {
}, qd = class da extends gs {
  /**
  * Initializes a newly created HMAC.
  * 
  * @param SubHasher - The hash algorithm class to use
  * @param key - The secret key
  * @example
  * ```javascript
  * const hmac = new HMAC(SHA256Algo, 'secret key');
  * ```
  */
  constructor(s, n) {
    super();
    /** The inner hasher instance */
    re(this, "_hasher");
    /** The outer key */
    re(this, "_oKey");
    /** The inner key */
    re(this, "_iKey");
    const i = new s();
    this._hasher = i;
    let o;
    typeof n == "string" ? o = Co.parse(n) : o = n;
    const r = i.blockSize, l = r * 4;
    o.sigBytes > l && (o = i.finalize(o)), o.clamp();
    const a = o.clone();
    this._oKey = a;
    const c = o.clone();
    this._iKey = c;
    const u = a.words, p = c.words;
    for (let w = 0; w < r; w += 1)
      u[w] ^= 1549556828, p[w] ^= 909522486;
    a.sigBytes = l, c.sigBytes = l, this.reset();
  }
  static create(...s) {
    const [n, i] = s;
    return new da(n, i);
  }
  /**
  * Resets this HMAC to its initial state.
  * 
  * @example
  * ```javascript
  * hmac.reset();
  * ```
  */
  reset() {
    const s = this._hasher;
    s.reset(), s.update(this._iKey);
  }
  /**
  * Updates this HMAC with a message.
  * 
  * @param messageUpdate - The message to append
  * @returns This HMAC instance for method chaining
  * @example
  * ```javascript
  * hmac.update('message');
  * hmac.update(wordArray);
  * ```
  */
  update(s) {
    return this._hasher.update(s), this;
  }
  /**
  * Finalizes the HMAC computation.
  * Note that the finalize operation is effectively a destructive, read-once operation.
  * 
  * @param messageUpdate - An optional final message update
  * @returns The computed HMAC
  * @example
  * ```javascript
  * const hmacValue = hmac.finalize();
  * const hmacValue = hmac.finalize('message');
  * const hmacValue = hmac.finalize(wordArray);
  * ```
  */
  finalize(s) {
    const n = this._hasher, i = n.finalize(s);
    return n.reset(), n.finalize(this._oKey.clone().concat(i));
  }
};
const Gd = (e, t, s) => {
  const n = [];
  let i = 0;
  for (let o = 0; o < t; o += 1) if (o % 4) {
    const r = s[e.charCodeAt(o - 1)] << o % 4 * 2, l = s[e.charCodeAt(o)] >>> 6 - o % 4 * 2, a = r | l;
    n[i >>> 2] |= a << 24 - i % 4 * 8, i += 1;
  }
  return et.create(n, i);
};
var Kd = class {
  constructor() {
    /** The Base64 character map */
    re(this, "_map", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
    /** The reverse character map for decoding */
    re(this, "_reverseMap");
  }
  /**
  * Converts a word array to a Base64 string.
  * 
  * @param wordArray - The word array to convert
  * @returns The Base64 string representation
  * @example
  * ```javascript
  * const base64String = Base64.stringify(wordArray);
  * ```
  */
  stringify(e) {
    const { words: t, sigBytes: s } = e, n = this._map;
    e.clamp();
    const i = [];
    for (let r = 0; r < s; r += 3) {
      const l = t[r >>> 2] >>> 24 - r % 4 * 8 & 255, a = t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255, c = t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, u = l << 16 | a << 8 | c;
      for (let p = 0; p < 4 && r + p * 0.75 < s; p += 1) i.push(n.charAt(u >>> 6 * (3 - p) & 63));
    }
    const o = n.charAt(64);
    if (o) for (; i.length % 4; ) i.push(o);
    return i.join("");
  }
  /**
  * Converts a Base64 string to a word array.
  * 
  * @param base64Str - The Base64 string to parse
  * @returns The word array representation
  * @example
  * ```javascript
  * const wordArray = Base64.parse(base64String);
  * ```
  */
  parse(e) {
    let t = e.length;
    const s = this._map;
    let n = this._reverseMap;
    if (!n) {
      this._reverseMap = [], n = this._reverseMap;
      for (let o = 0; o < s.length; o += 1) n[s.charCodeAt(o)] = o;
    }
    const i = s.charAt(64);
    if (i) {
      const o = e.indexOf(i);
      o !== -1 && (t = o);
    }
    return Gd(e, t, n);
  }
};
const Ji = new Kd(), Q = /* @__PURE__ */ (() => {
  const e = [];
  for (let t = 0; t < 64; t += 1) e[t] = Math.abs(Math.sin(t + 1)) * 4294967296 | 0;
  return e;
})(), je = (e, t, s, n, i, o, r) => {
  const l = e + (t & s | ~t & n) + i + r;
  return (l << o | l >>> 32 - o) + t;
}, We = (e, t, s, n, i, o, r) => {
  const l = e + (t & n | s & ~n) + i + r;
  return (l << o | l >>> 32 - o) + t;
}, ze = (e, t, s, n, i, o, r) => {
  const l = e + (t ^ s ^ n) + i + r;
  return (l << o | l >>> 32 - o) + t;
}, qe = (e, t, s, n, i, o, r) => {
  const l = e + (s ^ (t | ~n)) + i + r;
  return (l << o | l >>> 32 - o) + t;
};
var fa = class extends zd {
  _doReset() {
    this._hash = new et([
      1732584193,
      4023233417,
      2562383102,
      271733878
    ]);
  }
  _doProcessBlock(e, t) {
    const s = e;
    for (let F = 0; F < 16; F += 1) {
      const S = t + F, K = e[S];
      s[S] = (K << 8 | K >>> 24) & 16711935 | (K << 24 | K >>> 8) & 4278255360;
    }
    const n = this._hash.words, i = s[t + 0], o = s[t + 1], r = s[t + 2], l = s[t + 3], a = s[t + 4], c = s[t + 5], u = s[t + 6], p = s[t + 7], w = s[t + 8], k = s[t + 9], E = s[t + 10], T = s[t + 11], G = s[t + 12], Y = s[t + 13], V = s[t + 14], X = s[t + 15];
    let _ = n[0], v = n[1], x = n[2], y = n[3];
    _ = je(_, v, x, y, i, 7, Q[0]), y = je(y, _, v, x, o, 12, Q[1]), x = je(x, y, _, v, r, 17, Q[2]), v = je(v, x, y, _, l, 22, Q[3]), _ = je(_, v, x, y, a, 7, Q[4]), y = je(y, _, v, x, c, 12, Q[5]), x = je(x, y, _, v, u, 17, Q[6]), v = je(v, x, y, _, p, 22, Q[7]), _ = je(_, v, x, y, w, 7, Q[8]), y = je(y, _, v, x, k, 12, Q[9]), x = je(x, y, _, v, E, 17, Q[10]), v = je(v, x, y, _, T, 22, Q[11]), _ = je(_, v, x, y, G, 7, Q[12]), y = je(y, _, v, x, Y, 12, Q[13]), x = je(x, y, _, v, V, 17, Q[14]), v = je(v, x, y, _, X, 22, Q[15]), _ = We(_, v, x, y, o, 5, Q[16]), y = We(y, _, v, x, u, 9, Q[17]), x = We(x, y, _, v, T, 14, Q[18]), v = We(v, x, y, _, i, 20, Q[19]), _ = We(_, v, x, y, c, 5, Q[20]), y = We(y, _, v, x, E, 9, Q[21]), x = We(x, y, _, v, X, 14, Q[22]), v = We(v, x, y, _, a, 20, Q[23]), _ = We(_, v, x, y, k, 5, Q[24]), y = We(y, _, v, x, V, 9, Q[25]), x = We(x, y, _, v, l, 14, Q[26]), v = We(v, x, y, _, w, 20, Q[27]), _ = We(_, v, x, y, Y, 5, Q[28]), y = We(y, _, v, x, r, 9, Q[29]), x = We(x, y, _, v, p, 14, Q[30]), v = We(v, x, y, _, G, 20, Q[31]), _ = ze(_, v, x, y, c, 4, Q[32]), y = ze(y, _, v, x, w, 11, Q[33]), x = ze(x, y, _, v, T, 16, Q[34]), v = ze(v, x, y, _, V, 23, Q[35]), _ = ze(_, v, x, y, o, 4, Q[36]), y = ze(y, _, v, x, a, 11, Q[37]), x = ze(x, y, _, v, p, 16, Q[38]), v = ze(v, x, y, _, E, 23, Q[39]), _ = ze(_, v, x, y, Y, 4, Q[40]), y = ze(y, _, v, x, i, 11, Q[41]), x = ze(x, y, _, v, l, 16, Q[42]), v = ze(v, x, y, _, u, 23, Q[43]), _ = ze(_, v, x, y, k, 4, Q[44]), y = ze(y, _, v, x, G, 11, Q[45]), x = ze(x, y, _, v, X, 16, Q[46]), v = ze(v, x, y, _, r, 23, Q[47]), _ = qe(_, v, x, y, i, 6, Q[48]), y = qe(y, _, v, x, p, 10, Q[49]), x = qe(x, y, _, v, V, 15, Q[50]), v = qe(v, x, y, _, c, 21, Q[51]), _ = qe(_, v, x, y, G, 6, Q[52]), y = qe(y, _, v, x, l, 10, Q[53]), x = qe(x, y, _, v, E, 15, Q[54]), v = qe(v, x, y, _, o, 21, Q[55]), _ = qe(_, v, x, y, w, 6, Q[56]), y = qe(y, _, v, x, X, 10, Q[57]), x = qe(x, y, _, v, u, 15, Q[58]), v = qe(v, x, y, _, Y, 21, Q[59]), _ = qe(_, v, x, y, a, 6, Q[60]), y = qe(y, _, v, x, T, 10, Q[61]), x = qe(x, y, _, v, r, 15, Q[62]), v = qe(v, x, y, _, k, 21, Q[63]), n[0] = n[0] + _ | 0, n[1] = n[1] + v | 0, n[2] = n[2] + x | 0, n[3] = n[3] + y | 0;
  }
  _doFinalize() {
    const e = this._data, t = e.words, s = this._nDataBytes * 8, n = e.sigBytes * 8;
    t[n >>> 5] |= 128 << 24 - n % 32;
    const i = Math.floor(s / 4294967296), o = s;
    t[(n + 64 >>> 9 << 4) + 15] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360, t[(n + 64 >>> 9 << 4) + 14] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, e.sigBytes = (t.length + 1) * 4, this._process();
    const r = this._hash, l = r.words;
    for (let a = 0; a < 4; a += 1) {
      const c = l[a];
      l[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
    }
    return r;
  }
  clone() {
    const e = super.clone.call(this);
    return e._hash = this._hash.clone(), e;
  }
};
const pa = ua._createHelper(fa);
var xr = class extends gs {
  /**
  * Initializes a newly created key derivation function.
  *
  * @param {Object} cfg (Optional) The configuration options to use for the derivation.
  *
  * @example
  *
  *     const kdf = new EvpKDFAlgo();
  *     const kdf = new EvpKDFAlgo({ keySize: 8 });
  *     const kdf = new EvpKDFAlgo({ keySize: 8, iterations: 1000 });
  */
  constructor(t) {
    super();
    re(this, "cfg");
    this.cfg = Object.assign({}, {
      keySize: 128 / 32,
      hasher: fa,
      iterations: 1
    }, t);
  }
  /**
  * Derives a key from a password.
  *
  * @param {WordArray|string} password The password.
  * @param {WordArray|string} salt A salt.
  *
  * @return {WordArray} The derived key.
  *
  * @example
  *
  *     const key = kdf.compute(password, salt);
  */
  compute(t, s) {
    let n;
    const { cfg: i } = this, o = new i.hasher(), r = et.create(), l = r.words, { keySize: a, iterations: c } = i;
    for (; l.length < a; ) {
      n && o.update(n), n = o.update(t).finalize(s), o.reset();
      for (let u = 1; u < c; u += 1)
        n = o.finalize(n), o.reset();
      r.concat(n);
    }
    return r.sigBytes = a * 4, r;
  }
}, ht, Yd = (ht = class extends ca {
  /**
  * Initializes a newly created cipher.
  * 
  * @param xformMode - Either the encryption or decryption transformation mode constant
  * @param key - The key
  * @param cfg - Configuration options to use for this operation
  * @example
  * ```javascript
  * const cipher = new AESAlgo(
  *   Cipher._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray }
  * );
  * ```
  */
  constructor(s, n, i) {
    super();
    /** Configuration options */
    re(this, "cfg");
    /** Transform mode (encryption or decryption) */
    re(this, "_xformMode");
    /** The key */
    re(this, "_key");
    /** Block size in words */
    re(this, "blockSize", 128 / 32);
    this.cfg = Object.assign({}, i), this._xformMode = s, this._key = n;
  }
  /**
  * Creates this cipher in encryption mode.
  * 
  * @param key - The key
  * @param cfg - Configuration options to use for this operation
  * @returns A cipher instance
  * @static
  * @example
  * ```javascript
  * const cipher = AESAlgo.createEncryptor(keyWordArray, { iv: ivWordArray });
  * ```
  */
  static createEncryptor(s, n) {
    return this.create(ht._ENC_XFORM_MODE, s, n);
  }
  /**
  * Creates this cipher in decryption mode.
  * 
  * @param key - The key
  * @param cfg - Configuration options to use for this operation
  * @returns A cipher instance
  * @static
  * @example
  * ```javascript
  * const cipher = AESAlgo.createDecryptor(keyWordArray, { iv: ivWordArray });
  * ```
  */
  static createDecryptor(s, n) {
    return this.create(ht._DEC_XFORM_MODE, s, n);
  }
  static create(...s) {
    if (s.length >= 2 && typeof s[0] == "number") {
      const [n, i, o] = s, r = new this(n, i, o);
      return r.reset(), r;
    } else return new this(...s);
  }
  /**
  * Creates shortcut functions to a cipher's object interface.
  * 
  * @param SubCipher - The cipher to create a helper for
  * @returns An object with encrypt and decrypt shortcut functions
  * @static
  * @example
  * ```javascript
  * const AES = Cipher._createHelper(AESAlgo);
  * ```
  */
  static _createHelper(s) {
    const n = (i) => typeof i == "string" ? ef : Vs;
    return {
      encrypt(i, o, r) {
        return n(o).encrypt(s, i, o, r);
      },
      decrypt(i, o, r) {
        return n(o).decrypt(s, i, o, r);
      }
    };
  }
  /**
  * Resets this cipher to its initial state.
  * 
  * @example
  * ```javascript
  * cipher.reset();
  * ```
  */
  reset() {
    super.reset(), this._doReset();
  }
  /**
  * Adds data to be encrypted or decrypted.
  * 
  * @param dataUpdate - The data to encrypt or decrypt
  * @returns The data after processing
  * @example
  * ```javascript
  * const encrypted = cipher.process('data');
  * const encrypted = cipher.process(wordArray);
  * ```
  */
  process(s) {
    return this._append(s), this._process();
  }
  /**
  * Finalizes the encryption or decryption process.
  * Note that the finalize operation is effectively a destructive, read-once operation.
  * 
  * @param dataUpdate - The final data to encrypt or decrypt
  * @returns The data after final processing
  * @example
  * ```javascript
  * const encrypted = cipher.finalize();
  * const encrypted = cipher.finalize('data');
  * const encrypted = cipher.finalize(wordArray);
  * ```
  */
  finalize(s) {
    return s && this._append(s), this._doFinalize();
  }
}, /** Encryption mode constant */
re(ht, "_ENC_XFORM_MODE", 1), /** Decryption mode constant */
re(ht, "_DEC_XFORM_MODE", 2), /** Default key size in words (128 bits) */
re(ht, "keySize", 128 / 32), /** Default IV size in words (128 bits) */
re(ht, "ivSize", 128 / 32), ht), Is = class extends gs {
  /**
  * Initializes a newly created mode.
  * 
  * @param cipher - A block cipher instance
  * @param iv - The IV words
  * @example
  * ```javascript
  * const mode = new CBCMode(cipher, iv.words);
  * ```
  */
  constructor(t, s) {
    super();
    /** The cipher instance */
    re(this, "_cipher");
    /** The initialization vector */
    re(this, "_iv");
    /** The previous block (for chaining modes) */
    re(this, "_prevBlock");
    this._cipher = t, this._iv = s;
  }
  /**
  * Creates this mode for encryption.
  * 
  * @param cipher - A block cipher instance
  * @param iv - The IV words
  * @returns The mode instance
  * @static
  * @example
  * ```javascript
  * const mode = CBC.createEncryptor(cipher, iv.words);
  * ```
  */
  static createEncryptor(t, s) {
    return this.Encryptor.create(t, s);
  }
  /**
  * Creates this mode for decryption.
  * 
  * @param cipher - A block cipher instance
  * @param iv - The IV words
  * @returns The mode instance
  * @static
  * @example
  * ```javascript
  * const mode = CBC.createDecryptor(cipher, iv.words);
  * ```
  */
  static createDecryptor(t, s) {
    return this.Decryptor.create(t, s);
  }
  /**
  * Process a block of data
  * Must be implemented by concrete modes
  */
  processBlock(t, s) {
  }
};
function ha(e, t, s) {
  const n = e;
  let i;
  const o = this._iv;
  if (o ? (i = o, this._iv = void 0) : i = this._prevBlock, i) for (let r = 0; r < s; r += 1) n[t + r] ^= i[r];
}
var Jd = class extends Is {
  /**
  * Processes the data block at offset.
  * 
  * @param words - The data words to operate on
  * @param offset - The offset where the block starts
  * @example
  * ```javascript
  * mode.processBlock(data.words, offset);
  * ```
  */
  processBlock(e, t) {
    const s = this._cipher, n = s.blockSize;
    ha.call(this, e, t, n), s.encryptBlock(e, t), this._prevBlock = e.slice(t, t + n);
  }
}, Xd = class extends Is {
  /**
  * Processes the data block at offset.
  * 
  * @param words - The data words to operate on
  * @param offset - The offset where the block starts
  * @example
  * ```javascript
  * mode.processBlock(data.words, offset);
  * ```
  */
  processBlock(e, t) {
    const s = this._cipher, n = s.blockSize, i = e.slice(t, t + n);
    s.decryptBlock(e, t), ha.call(this, e, t, n), this._prevBlock = i;
  }
}, Cn, Qd = (Cn = class extends Is {
}, /** CBC Encryptor */
re(Cn, "Encryptor", Jd), /** CBC Decryptor */
re(Cn, "Decryptor", Xd), Cn);
const ga = {
  pad(e, t) {
    const s = t * 4, n = s - e.sigBytes % s, i = n << 24 | n << 16 | n << 8 | n, o = [];
    for (let l = 0; l < n; l += 4) o.push(i);
    const r = et.create(o, n);
    e.concat(r);
  },
  unpad(e) {
    const t = e.words[e.sigBytes - 1 >>> 2] & 255;
    e.sigBytes -= t;
  }
};
var ma = class extends Yd {
  /**
  * Initializes a newly created block cipher.
  * 
  * @param xformMode - Transform mode
  * @param key - The key
  * @param cfg - Configuration options
  */
  constructor(t, s, n) {
    super(t, s, Object.assign({
      mode: Qd,
      padding: ga
    }, n));
    /** Block mode instance */
    re(this, "_mode");
    this.blockSize = 128 / 32;
  }
  reset() {
    super.reset();
    const { cfg: t } = this, { iv: s, mode: n } = t;
    let i;
    this._xformMode === this.constructor._ENC_XFORM_MODE ? i = n?.createEncryptor : (i = n?.createDecryptor, this._minBufferSize = 1), i && n && (this._mode = i.call(n, this, s?.words), this._mode.__creator = i);
  }
  _doProcessBlock(t, s) {
    this._mode?.processBlock(t, s);
  }
  _doFinalize() {
    let t;
    const { padding: s } = this.cfg;
    return this._xformMode === this.constructor._ENC_XFORM_MODE ? (s && s.pad(this._data, this.blockSize), t = this._process(!0)) : (t = this._process(!0), s && s.unpad(t)), t;
  }
}, Qs = class ya extends gs {
  /**
  * Initializes a newly created cipher params object.
  * 
  * @param cipherParams - An object with any of the possible cipher parameters
  * @example
  * ```javascript
  * const cipherParams = new CipherParams({
  *   ciphertext: ciphertextWordArray,
  *   key: keyWordArray,
  *   iv: ivWordArray,
  *   salt: saltWordArray,
  *   algorithm: AESAlgo,
  *   mode: CBC,
  *   padding: Pkcs7,
  *   blockSize: 4,
  *   formatter: OpenSSLFormatter
  * });
  * ```
  */
  constructor(s) {
    super();
    re(this, "ciphertext");
    re(this, "key");
    re(this, "iv");
    re(this, "salt");
    re(this, "algorithm");
    re(this, "mode");
    re(this, "padding");
    re(this, "blockSize");
    re(this, "formatter");
    s && this.mixIn(s), this.formatter || (this.formatter = Xi);
  }
  static create(...s) {
    const [n] = s;
    return new ya(n);
  }
  /**
  * Converts this cipher params object to a string.
  * 
  * @param formatter - The formatting strategy to use
  * @returns The stringified cipher params
  * @throws Error if neither the formatter nor the default formatter is set
  * @example
  * ```javascript
  * const string = cipherParams.toString();
  * const string = cipherParams.toString(OpenSSLFormatter);
  * ```
  */
  toString(s) {
    const n = s || this.formatter;
    if (!n) throw new Error("cipher params formatter required");
    return n.stringify(this);
  }
};
const Xi = {
  stringify(e) {
    let t;
    const { ciphertext: s, salt: n } = e;
    return n && s ? t = et.create([1398893684, 1701076831]).concat(n).concat(s) : s ? t = s : t = new et(), t.toString(Ji);
  },
  parse(e) {
    let t;
    const s = Ji.parse(e), n = s.words;
    return n[0] === 1398893684 && n[1] === 1701076831 && (t = et.create(n.slice(2, 4)), n.splice(0, 4), s.sigBytes -= 16), Qs.create({
      ciphertext: s,
      salt: t
    });
  }
};
var Ei, Vs = (Ei = class extends gs {
  /**
  * Encrypts a message.
  * 
  * @param cipher - The cipher algorithm to use
  * @param message - The message to encrypt
  * @param key - The key
  * @param cfg - Configuration options to use for this operation
  * @returns A cipher params object
  * @static
  * @example
  * ```javascript
  * const ciphertextParams = SerializableCipher.encrypt(AESAlgo, message, key);
  * const ciphertextParams = SerializableCipher.encrypt(AESAlgo, message, key, { iv: iv });
  * ```
  */
  static encrypt(e, t, s, n) {
    const i = Object.assign({}, this.cfg, n), o = e.createEncryptor(s, i), r = o.finalize(t), l = o.cfg;
    return Qs.create({
      ciphertext: r,
      key: s,
      iv: l.iv,
      algorithm: e,
      mode: l.mode,
      padding: l.padding,
      blockSize: o.blockSize,
      formatter: i.format || Xi
    });
  }
  /**
  * Decrypts serialized ciphertext.
  * 
  * @param cipher - The cipher algorithm to use
  * @param ciphertext - The ciphertext to decrypt
  * @param key - The key
  * @param cfg - Configuration options to use for this operation
  * @returns The plaintext
  * @static
  * @example
  * ```javascript
  * const plaintext = SerializableCipher.decrypt(AESAlgo, formattedCiphertext, key, { iv: iv });
  * const plaintext = SerializableCipher.decrypt(AESAlgo, ciphertextParams, key, { iv: iv });
  * ```
  */
  static decrypt(e, t, s, n) {
    const i = Object.assign({}, this.cfg, n), o = this._parse(t, i.format);
    return e.createDecryptor(s, i).finalize(o.ciphertext);
  }
  /**
  * Converts serialized ciphertext to CipherParams.
  * 
  * @param ciphertext - The ciphertext
  * @param format - The formatting strategy to use to parse serialized ciphertext
  * @returns The unserialized ciphertext
  * @static
  * @private
  */
  static _parse(e, t) {
    if (typeof e == "string") {
      if (!t) throw new Error("Format required to parse string");
      return t.parse(e, this);
    }
    return e instanceof Qs ? e : new Qs(e);
  }
}, /** Configuration options */
re(Ei, "cfg", { format: Xi }), Ei);
const Zd = { execute(e, t, s, n, i) {
  let o;
  n ? typeof n == "string" ? o = aa.parse(n) : o = n : o = et.random(64 / 8);
  let r;
  i ? r = xr.create({
    keySize: t + s,
    hasher: i
  }).compute(e, o) : r = xr.create({ keySize: t + s }).compute(e, o);
  const l = et.create(r.words.slice(t), s * 4);
  return r.sigBytes = t * 4, Qs.create({
    key: r,
    iv: l,
    salt: o
  });
} };
var Ii, ef = (Ii = class extends Vs {
  /**
  * Encrypts a message using a password.
  * 
  * @param cipher - The cipher algorithm to use
  * @param message - The message to encrypt
  * @param password - The password
  * @param cfg - Configuration options to use for this operation
  * @returns A cipher params object
  * @static
  * @example
  * ```javascript
  * const ciphertextParams = PasswordBasedCipher.encrypt(AESAlgo, message, 'password');
  * ```
  */
  static encrypt(e, t, s, n) {
    const i = Object.assign({}, this.cfg, n);
    if (!i.kdf) throw new Error("KDF required for password-based encryption");
    const o = i.kdf.execute(s, e.keySize || e.keySize, e.ivSize || e.ivSize, i.salt, i.hasher);
    i.iv = o.iv;
    const r = Vs.encrypt.call(this, e, t, o.key, i);
    return r.salt = o.salt, r;
  }
  /**
  * Decrypts serialized ciphertext using a password.
  * 
  * @param cipher - The cipher algorithm to use
  * @param ciphertext - The ciphertext to decrypt
  * @param password - The password
  * @param cfg - Configuration options to use for this operation
  * @returns The plaintext
  * @static
  * @example
  * ```javascript
  * const plaintext = PasswordBasedCipher.decrypt(AESAlgo, formattedCiphertext, 'password');
  * ```
  */
  static decrypt(e, t, s, n) {
    const i = Object.assign({}, this.cfg, n), o = this._parse(t, i.format);
    if (!i.kdf) throw new Error("KDF required for password-based decryption");
    const r = i.kdf.execute(s, e.keySize || e.keySize, e.ivSize || e.ivSize, o.salt, i.hasher);
    return i.iv = r.iv, Vs.decrypt.call(this, e, o, r.key, i);
  }
}, /** Configuration options */
re(Ii, "cfg", Object.assign({}, Vs.cfg, { kdf: Zd })), Ii);
const st = [], va = [], _a = [], ba = [], wa = [], ka = [], Qi = [], Zi = [], eo = [], to = [];
(() => {
  const e = [];
  for (let n = 0; n < 256; n += 1) n < 128 ? e[n] = n << 1 : e[n] = n << 1 ^ 283;
  let t = 0, s = 0;
  for (let n = 0; n < 256; n += 1) {
    let i = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
    i = i >>> 8 ^ i & 255 ^ 99, st[t] = i, va[i] = t;
    const o = e[t], r = e[o], l = e[r];
    let a = e[i] * 257 ^ i * 16843008;
    _a[t] = a << 24 | a >>> 8, ba[t] = a << 16 | a >>> 16, wa[t] = a << 8 | a >>> 24, ka[t] = a, a = l * 16843009 ^ r * 65537 ^ o * 257 ^ t * 16843008, Qi[i] = a << 24 | a >>> 8, Zi[i] = a << 16 | a >>> 16, eo[i] = a << 8 | a >>> 24, to[i] = a, t ? (t = o ^ e[e[e[l ^ o]]], s ^= e[e[s]]) : (s = 1, t = s);
  }
})();
const tf = [
  0,
  1,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  27,
  54
];
var Ri, sf = (Ri = class extends ma {
  constructor() {
    super(...arguments);
    /** Number of rounds for this key size */
    re(this, "_nRounds");
    /** Previous key for optimization */
    re(this, "_keyPriorReset");
    /** Key schedule for encryption */
    re(this, "_keySchedule");
    /** Inverse key schedule for decryption */
    re(this, "_invKeySchedule");
  }
  _doReset() {
    let t;
    if (this._nRounds && this._keyPriorReset === this._key) return;
    this._keyPriorReset = this._key;
    const s = this._keyPriorReset, n = s.words, i = s.sigBytes / 4;
    this._nRounds = i + 6;
    const r = (this._nRounds + 1) * 4;
    this._keySchedule = [];
    const l = this._keySchedule;
    for (let c = 0; c < r; c += 1) c < i ? l[c] = n[c] : (t = l[c - 1], c % i ? i > 6 && c % i === 4 && (t = st[t >>> 24] << 24 | st[t >>> 16 & 255] << 16 | st[t >>> 8 & 255] << 8 | st[t & 255]) : (t = t << 8 | t >>> 24, t = st[t >>> 24] << 24 | st[t >>> 16 & 255] << 16 | st[t >>> 8 & 255] << 8 | st[t & 255], t ^= tf[c / i | 0] << 24), l[c] = l[c - i] ^ t);
    this._invKeySchedule = [];
    const a = this._invKeySchedule;
    for (let c = 0; c < r; c += 1) {
      const u = r - c;
      c % 4 ? t = l[u] : t = l[u - 4], c < 4 || u <= 4 ? a[c] = t : a[c] = Qi[st[t >>> 24]] ^ Zi[st[t >>> 16 & 255]] ^ eo[st[t >>> 8 & 255]] ^ to[st[t & 255]];
    }
  }
  encryptBlock(t, s) {
    this._doCryptBlock(t, s, this._keySchedule, _a, ba, wa, ka, st);
  }
  decryptBlock(t, s) {
    const n = t;
    let i = n[s + 1];
    n[s + 1] = n[s + 3], n[s + 3] = i, this._doCryptBlock(n, s, this._invKeySchedule, Qi, Zi, eo, to, va), i = n[s + 1], n[s + 1] = n[s + 3], n[s + 3] = i;
  }
  _doCryptBlock(t, s, n, i, o, r, l, a) {
    const c = t, u = this._nRounds;
    let p = c[s] ^ n[0], w = c[s + 1] ^ n[1], k = c[s + 2] ^ n[2], E = c[s + 3] ^ n[3], T = 4;
    for (let _ = 1; _ < u; _ += 1) {
      const v = i[p >>> 24] ^ o[w >>> 16 & 255] ^ r[k >>> 8 & 255] ^ l[E & 255] ^ n[T];
      T += 1;
      const x = i[w >>> 24] ^ o[k >>> 16 & 255] ^ r[E >>> 8 & 255] ^ l[p & 255] ^ n[T];
      T += 1;
      const y = i[k >>> 24] ^ o[E >>> 16 & 255] ^ r[p >>> 8 & 255] ^ l[w & 255] ^ n[T];
      T += 1;
      const F = i[E >>> 24] ^ o[p >>> 16 & 255] ^ r[w >>> 8 & 255] ^ l[k & 255] ^ n[T];
      T += 1, p = v, w = x, k = y, E = F;
    }
    const G = (a[p >>> 24] << 24 | a[w >>> 16 & 255] << 16 | a[k >>> 8 & 255] << 8 | a[E & 255]) ^ n[T];
    T += 1;
    const Y = (a[w >>> 24] << 24 | a[k >>> 16 & 255] << 16 | a[E >>> 8 & 255] << 8 | a[p & 255]) ^ n[T];
    T += 1;
    const V = (a[k >>> 24] << 24 | a[E >>> 16 & 255] << 16 | a[p >>> 8 & 255] << 8 | a[w & 255]) ^ n[T];
    T += 1;
    const X = (a[E >>> 24] << 24 | a[p >>> 16 & 255] << 16 | a[w >>> 8 & 255] << 8 | a[k & 255]) ^ n[T];
    T += 1, c[s] = G, c[s + 1] = Y, c[s + 2] = V, c[s + 3] = X;
  }
}, /** Key size in 32-bit words */
re(Ri, "keySize", 256 / 32), Ri);
const nf = ma._createHelper(sf);
var of = class extends Is {
  processBlock(e, t) {
    this._cipher.encryptBlock(e, t);
  }
}, rf = class extends Is {
  processBlock(e, t) {
    this._cipher.decryptBlock(e, t);
  }
}, An, lf = (An = class extends Is {
}, re(An, "Encryptor", of), re(An, "Decryptor", rf), An);
const af = "e82ckenh8dichen8", cf = Co.parse(af), Cr = "3go8&$8*3*3h0k(2)2";
function uf(e, t) {
  const s = JSON.stringify(t), n = pa("nobody" + e + "use" + s + "md5forencrypt").toString(), i = `${e}-36cd479b6b5-${s}-36cd479b6b5-${n}`, r = nf.encrypt(i, cf, {
    mode: lf,
    padding: ga
  }).ciphertext;
  return r ? r.toString().toUpperCase() : (H.error("eapiEncrypt produced empty ciphertext", { urlPath: e }), "");
}
function df(e) {
  const t = e.split("").map((i, o) => String.fromCharCode(i.charCodeAt(0) ^ Cr.charCodeAt(o % Cr.length))).join(""), s = pa(t);
  return Ji.stringify(s).replace(/\//g, "_").replace(/\+/g, "-");
}
function ff(e) {
  return e ? `https://p3.music.126.net/${df(e)}/${e}.jpg?param=300y300` : (H.warn("buildCoverUrl called with empty picId"), "");
}
class so {
  constructor(t) {
    this.id = "netease", this.name = "网易云", this.workerURL = t?.workerURL?.trim() || "", this.cookie = t?.cookie?.trim() || "";
  }
  async fetchJson(t, s, n = 5e3, i = 2) {
    let o;
    for (let r = 0; r <= i; r++)
      try {
        const l = new AbortController(), a = setTimeout(() => l.abort(), n), c = await fetch(t, { ...s, signal: l.signal });
        if (clearTimeout(a), !c.ok) {
          if (H.warn(`NetEase: HTTP ${c.status} from ${t}`), c.status >= 500 && r < i) continue;
          return null;
        }
        const u = await c.json();
        return u && u.success === !1 ? (H.warn("NetEase: API error: " + (u.error ?? "unknown")), null) : u;
      } catch (l) {
        if (o = l, r < i) continue;
      }
    return H.warn("NetEase: fetchJson failed after " + (i + 1) + " attempts: " + t, o), null;
  }
  probeAudio(t, s = 3e3) {
    return new Promise((n) => {
      const i = new Audio();
      let o = !1;
      const r = () => {
        i.removeEventListener("loadedmetadata", l), i.removeEventListener("error", a), clearTimeout(c), i.src = "";
      }, l = () => {
        o || (o = !0, r(), n(!0));
      }, a = () => {
        o || (o = !0, r(), n(!1));
      }, c = setTimeout(() => {
        o || (o = !0, r(), n(!1));
      }, s);
      i.preload = "metadata", i.addEventListener("loadedmetadata", l), i.addEventListener("error", a), i.src = t;
    });
  }
  async search(t) {
    if (!this.workerURL)
      return H.warn("NetEase: worker URL not configured"), [];
    const n = (await this.fetchJson(
      `${this.workerURL}/search?keyword=${encodeURIComponent(t)}&limit=20`
    ))?.data;
    return Array.isArray(n) ? n.map((i) => ({
      id: String(i.id ?? ""),
      name: String(i.name ?? ""),
      artist: String(i.artist ?? ""),
      duration: i.duration ?? void 0,
      provider: this.id,
      picId: i.picId ? String(i.picId) : void 0
    })) : [];
  }
  async resolve(t, s) {
    if (!this.workerURL)
      return H.warn("NetEase: worker URL not configured"), null;
    if (!this.cookie)
      return H.warn("NetEase: cookie not set, cannot resolve URL"), null;
    const n = "/api/song/enhance/player/url/v1", i = {
      ids: [Number(t)],
      level: "exhigh",
      encodeType: "flac",
      header: JSON.stringify({
        os: "pc",
        appver: "",
        osver: "",
        deviceId: "pyncm!",
        requestId: String(
          Math.floor(Math.random() * 1e7) + 2e7
        )
      })
    }, r = {
      "X-Netease-Params": uf(n, i),
      "X-Netease-Cookie": this.cookie
    }, [l, a, c] = await Promise.all([
      this.fetchJson(`${this.workerURL}/resolve?id=${encodeURIComponent(t)}`, { headers: r }),
      this.fetchJson(`${this.workerURL}/lyric?id=${encodeURIComponent(t)}`),
      this.fetchJson(`${this.workerURL}/detail?id=${encodeURIComponent(t)}`, { headers: r })
    ]), u = l?.data?.url;
    if (!u)
      return H.warn("NetEase: no URL returned for id=" + t), null;
    const p = c?.data, w = p?.cover || (s ? ff(s) : void 0);
    return {
      url: String(u),
      lyric: a?.data?.lyric ? String(a.data.lyric) : void 0,
      cover: w || void 0,
      name: p?.name ? String(p.name) : "",
      artist: p?.artist ? String(p.artist) : "",
      source: this.id
    };
  }
  async searchAndResolve(t, s) {
    const n = s ? `${t} ${s}` : t, i = await this.search(n);
    if (i.length === 0) return null;
    for (const o of i) {
      const r = await this.resolve(o.id, o.picId);
      if (!r) continue;
      if (!await this.probeAudio(r.url)) {
        H.warn("NetEase: audio probe failed for id=" + o.id + ", trying next");
        continue;
      }
      return r.name = o.name, r.artist = o.artist, r;
    }
    return H.warn('NetEase: no playable result for "' + n + '"'), null;
  }
  async fetchPlaylists() {
    if (!this.workerURL || !this.cookie)
      return H.warn("NetEase: worker URL or cookie not configured for fetchPlaylists"), null;
    const t = await this.fetchJson(
      `${this.workerURL}/playlists?limit=100`,
      { headers: { "X-Netease-Cookie": this.cookie } },
      15e3,
      1
    );
    return !t || t.success === !1 ? (H.warn("NetEase: fetchPlaylists failed", t?.error), null) : Array.isArray(t.data) ? t.data : [];
  }
  async fetchPlaylist(t) {
    if (!this.workerURL || !this.cookie)
      return H.warn("NetEase: worker URL or cookie not configured for fetchPlaylist"), null;
    const s = await this.fetchJson(
      `${this.workerURL}/playlist?id=${encodeURIComponent(t)}`,
      { headers: { "X-Netease-Cookie": this.cookie } },
      3e4,
      1
    );
    if (!s || s.success === !1)
      return H.warn("NetEase: fetchPlaylist failed", s?.error), null;
    const n = s.data;
    if (!n || !Array.isArray(n.songs)) return null;
    const i = n.songs.map((o) => ({
      id: String(o.id ?? ""),
      name: String(o.name ?? ""),
      artist: String(o.artist ?? ""),
      duration: o.duration ?? void 0,
      provider: this.id,
      picId: o.picId ? String(o.picId) : void 0
    }));
    return {
      name: String(n.name ?? ""),
      cover: String(n.cover ?? ""),
      songs: i
    };
  }
}
class pf {
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
const Sa = "https://xiaoyue.erocraft.org";
function no(e) {
  return e.neteaseMode === "worker" ? Sa : e.neteaseWorkerURL;
}
function Qt(e) {
  const s = e.providers.filter((n) => n.enabled).sort((n, i) => n.priority - i.priority).map((n) => {
    const i = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new so({
          workerURL: no(e),
          cookie: e.neteaseCookie
        });
      case "local":
        return new pf({
          storage: i.storage ? i.storage : void 0
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new Wd(s);
}
const hf = {
  "No Song": "当前无播放",
  Search: "搜索",
  "Search Song...": "搜索歌曲...",
  "Searching...": "搜索中...",
  "No results": "未找到匹配歌曲",
  "Type a song name to search": "输入歌名进行搜索",
  "No Songs": "暂无歌曲",
  Network: "网络",
  Upload: "上传",
  Chat: "聊天",
  "Upload audio file": "上传音频文件",
  Retry: "重试",
  Previous: "上一首",
  Next: "下一首",
  Play: "播放",
  Pause: "暂停",
  "Toggle play mode": "切换播放模式",
  "Mute / Unmute": "静音/取消静音",
  "Collapse panel": "收起面板",
  Playlist: "播放列表",
  Close: "关闭",
  Added: "已添加",
  "Add to list": "加入列表",
  "Cannot play": "无法播放",
  "Now playing": "正在播放",
  Paused: "已暂停",
  Delisted: "可能已下架",
  Uploaded: "已上传",
  "Upload failed": "上传失败",
  "Settings exported": "设置已导出",
  "Settings imported": "设置已导入",
  "Playlist exported": "播放列表已导出",
  "Playlist imported": "播放列表已导入",
  "Import failed": "导入失败",
  "Invalid JSON": "JSON 格式错误",
  "AI selected:": "AI 选曲",
  "AI recommendation failed": "AI 选曲失败",
  "AI analyzing": "AI 正在分析场景...",
  "AI not configured": "请先配置 API 地址和模型",
  "AI BGM off": "AI 选曲未开启",
  "Now playing track": "当前播放",
  "models found": "获取到",
  "No models returned": "该端点未返回模型",
  "Failed to fetch models": "获取模型列表失败",
  "Endpoint CORS blocked": "该端点不支持浏览器直连（CORS 被拦截），请改用支持 CORS 的端点或通过反代转发",
  "Endpoint unreachable": "无法连接到该端点（网络错误），请检查地址是否可达",
  "Endpoint HTTP error": "该端点返回错误：{detail}",
  "Endpoint request failed": "请求该端点失败，请检查地址与网络",
  "Endpoint CORS blocked (agent)": "AI 选曲端点被 CORS 拦截，浏览器无法直连该地址",
  Connect: "连接",
  "Please fill API URL": "请先填写 API 地址",
  "Enter song name": "请输入歌曲名",
  "Volume set to": "音量已设为",
  "Volume must be 0-100": "音量范围 0-100",
  "Added to playlist": "已添加到列表",
  "Play mode": "播放模式",
  "Source enabled": "已启用",
  "Source disabled": "已禁用",
  "Widget Mode": "播放器模式",
  Dock: "吸附",
  Drag: "拖动",
  Hidden: "隐藏",
  Inline: "集成",
  "Dock Alignment": "吸附对齐",
  "Top Left": "左上",
  "Top Right": "右上",
  "Bottom Left": "左下",
  "Bottom Right": "右下",
  "Choose how the player widget is displayed": "选择播放器小部件的显示方式",
  "Align the docked player to a corner of the screen": "将吸附的播放器对齐到屏幕角落",
  "Show track info in drag mini": "收起时显示曲名",
  "Show song title and lyrics in the compact drag widget": "收起时显示曲名和歌词",
  "Default Volume": "默认音量",
  "Default Play Mode": "默认播放模式",
  Crossfade: "淡入淡出",
  "Smoothly fade in when starting playback and fade out when pausing or switching tracks": "开始播放时淡入，暂停或切换歌曲时淡出",
  "Custom opacity": "自定义透明度",
  Opacity: "透明度",
  "Adjust the player background opacity": "调整播放器背景透明度",
  "Debug Mode": "调试模式",
  "Enable verbose console logging for troubleshooting": "启用详细控制台日志用于排查问题",
  "Export data": "导出设置",
  "Import data": "导入设置",
  "Save your settings to a JSON file": "将设置保存为 JSON 文件",
  "Load settings from a JSON file": "从 JSON 文件加载设置",
  "Export playlist": "导出播放列表",
  "Import playlist": "导入播放列表",
  "Save network playlist to a JSON file": "将网络播放列表保存为 JSON 文件",
  "Load network playlist from a JSON file": "从 JSON 文件加载网络播放列表",
  "List Loop": "列表循环",
  Random: "随机",
  "Single Loop": "单曲循环",
  "Upload and play songs from the server": "向服务端上传并播放歌曲",
  Confirm: "确认",
  Cancel: "取消",
  "Upload warning text": "上传的音频文件将存储在 SillyTavern 服务端，通过服务端网络传输播放。这可能造成播放卡顿、占用服务器磁盘空间。确认要开启吗？",
  "Use a separate API endpoint for BGM agent loop instead of main API function calling": "使用独立 API 端点运行 BGM agent",
  Playback: "播放",
  General: "通用",
  Appearance: "外观",
  AI: "AI",
  Version: "版本",
  "A scene-aware music player extension for SillyTavern": "SillyTavern 情景音乐播放器扩展",
  // AI BGM
  "AI BGM": "AI 选曲",
  "Enable AI-driven background music selection": "启用 AI 驱动的背景音乐选择",
  "AI Mode": "AI 模式",
  Together: "提示词注入",
  "Function Call": "Function Call",
  "Choose how AI selects background music": "选择 AI 选曲的方式",
  "Context Messages": "上下文消息数",
  "Number of recent chat messages to send to AI": "发送给 AI 的最近聊天消息数量",
  "Auto Trigger": "自动触发",
  "Automatically analyze new messages and select music": "自动分析新消息并选择音乐",
  "Trigger on Greeting": "Greeting 触发",
  "Analyze BGM when loading a character card (first message)": "加载角色卡（首条消息）时分析 BGM",
  "API URL": "API 地址",
  "OpenAI-compatible endpoint that supports tool calling": "需支持工具调用的 OpenAI 兼容端点",
  "API Key": "API 密钥",
  "Bearer token for the custom endpoint": "自定义端点的 Bearer 令牌",
  Model: "模型",
  "Model that supports tool calling": "需支持工具调用的模型",
  "Prompt Role": "注入角色",
  "Role used when injecting BGM instructions into the main AI": "向主 AI 注入 BGM 指令时使用的角色",
  System: "系统",
  User: "用户",
  "Custom Prompt": "自定义提示词",
  "Edit the BGM instruction prompt. Use macros like ": "编辑 BGM 指令提示词。可使用 ",
  " for dynamic values.": " 等变量插入动态值。",
  "Edit Prompt": "编辑提示词",
  "Click to edit the BGM instruction prompt": "点击编辑 BGM 指令提示词",
  "Available macros:": "可用变量：",
  "The prompt must contain the markers": "提示词必须包含标记",
  "for BGM control to work.": "才能生效。",
  Save: "保存",
  // NetEase
  "Official Worker": "晓乐",
  "Self-hosted": "自部署",
  "Worker URL": "Worker 地址",
  "Your Cloudflare Worker deployment URL": "你的 Cloudflare Worker 部署地址",
  "Paste MUSIC_U cookie value here": "在此粘贴 MUSIC_U cookie 值",
  "Cookie valid": "Cookie 有效",
  "Cookie invalid or expired": "Cookie 无效或已过期",
  "Cannot reach Worker": "无法连接 Worker",
  "Data Sources": "数据源",
  "NetEase Music": "网易云音乐",
  "Select official or self-hosted Worker": "选择官方服务或自部署 Worker",
  "MUSIC_U Cookie": "MUSIC_U Cookie",
  "Paste cookie from music.163.com": "从 music.163.com 获取的 Cookie",
  "Cookie privacy hint": "Cookie 仅保存在浏览器本地，不会上传到 SillyTavern 服务端。播放时会通过请求头发送至 Worker 用于鉴权，Worker 不会保存 Cookie。",
  "Playlist Management": "列表管理",
  "Playback Settings": "播放设置",
  "Cookie not configured": "Cookie 未配置",
  "Cookie expired": "Cookie 已失效",
  "Cookie invalid": "Cookie 无效",
  "Configure in settings": "请在设置中配置",
  // Playlist / Queue refactor
  "Now Playing": "播放列表",
  Playlists: "歌单",
  "My Playlists": "我的歌单",
  "NetEase Playlists": "网易云歌单",
  "Network Collection": "网络收藏",
  "AI Picks": "AI 选曲",
  songs: "首",
  "Not synced": "未同步",
  "Syncing...": "同步中...",
  "Playlist synced": "歌单已同步"
};
let vs = null;
function gf() {
  if (vs) return vs;
  try {
    if (typeof SillyTavern < "u") {
      const e = SillyTavern.getContext();
      e?.getCurrentLocale && (vs = e.getCurrentLocale());
    }
  } catch {
  }
  return vs || (vs = (typeof navigator < "u" ? navigator.language || navigator.userLanguage : "en")?.toLowerCase() || "en"), vs;
}
function g(e) {
  return gf().startsWith("zh") ? hf[e] ?? e : e;
}
function xa() {
  const e = { "Content-Type": "application/json" };
  if (typeof SillyTavern < "u" && SillyTavern.getContext) {
    const t = SillyTavern.getContext();
    if (t?.getRequestHeaders) {
      const s = t.getRequestHeaders();
      s && typeof s == "object" && Object.assign(e, s);
    }
  }
  return e;
}
function mf(e) {
  return new Promise((t, s) => {
    const n = new FileReader();
    n.onload = () => {
      const i = n.result, o = i.indexOf(",");
      t(o >= 0 ? i.slice(o + 1) : i);
    }, n.onerror = () => s(n.error), n.readAsDataURL(e);
  });
}
function yf(e) {
  const t = e.lastIndexOf("."), s = t > 0 ? e.slice(0, t) : e, n = t > 0 ? e.slice(t) : "";
  return `${s.replace(/[^a-zA-Z0-9_\-.]/g, "_")}${n}`;
}
async function vf(e) {
  const t = await mf(e), s = yf(e.name), n = await fetch("/api/files/upload", {
    method: "POST",
    headers: xa(),
    body: JSON.stringify({ name: s, data: t })
  });
  if (!n.ok)
    throw new Error(`Upload failed: ${n.status} ${n.statusText}`);
  return (await n.json()).path;
}
async function Ca(e) {
  const t = await fetch("/api/files/delete", {
    method: "POST",
    headers: xa(),
    body: JSON.stringify({ path: e })
  });
  t.ok || H.warn("deleteFile failed: " + t.status);
}
function Ds() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const Ht = "__local__", Yt = "__upload__", Zs = "__ai__";
function _f(e) {
  if (!e || typeof e != "object") return !1;
  const t = e;
  return ("network" in t || "server" in t) && !("playlists" in t);
}
function bf(e) {
  const t = Date.now(), s = [], n = Array.isArray(e.network) ? e.network : [];
  n.length > 0 && s.push({
    id: Ht,
    name: g("Network Collection"),
    source: "local",
    songs: n,
    updatedAt: t
  });
  const i = Array.isArray(e.server) ? e.server : [];
  return i.length > 0 && s.push({
    id: Yt,
    name: g("Upload"),
    source: "upload",
    songs: i,
    updatedAt: t
  }), {
    playlists: s,
    queue: { items: [], currentIndex: -1 },
    version: 2
  };
}
function wn(e) {
  const t = [...e], s = Date.now(), n = {
    [Ht]: g("Network Collection"),
    [Yt]: g("Upload"),
    [Zs]: g("AI Picks")
  };
  for (const l of t)
    l.id in n && (l.name = n[l.id]);
  const i = t.some((l) => l.id === Ht), o = t.some((l) => l.id === Yt), r = t.some((l) => l.id === Zs);
  if (i || t.unshift({
    id: Ht,
    name: g("Network Collection"),
    source: "local",
    songs: [],
    updatedAt: s
  }), !o) {
    const l = t.findIndex((a) => a.id === Ht);
    t.splice(l + 1, 0, {
      id: Yt,
      name: g("Upload"),
      source: "upload",
      songs: [],
      updatedAt: s
    });
  }
  if (!r) {
    const l = t.findIndex((a) => a.id === Yt);
    t.splice(l + 1, 0, {
      id: Zs,
      name: g("AI Picks"),
      source: "ai",
      songs: [],
      updatedAt: s
    });
  }
  return t;
}
const tt = /* @__PURE__ */ fi("playlist", {
  state: () => ({
    playlists: [],
    queue: { items: [], currentIndex: -1 },
    activeTab: "queue",
    selectedPlaylistId: null,
    neteasePlaylistsLoading: !1,
    syncingPlaylistIds: []
  }),
  getters: {
    current(e) {
      const t = e.queue.currentIndex;
      return t >= 0 && t < e.queue.items.length ? e.queue.items[t] ?? null : null;
    },
    isEmpty(e) {
      return e.queue.items.length === 0 && e.playlists.every((t) => t.songs.length === 0);
    },
    playMode() {
      return ge().settings.playMode;
    },
    selectedPlaylist(e) {
      return e.selectedPlaylistId ? e.playlists.find((t) => t.id === e.selectedPlaylistId) ?? null : null;
    },
    localPlaylists(e) {
      return e.playlists.filter((t) => t.source === "local" || t.source === "upload" || t.source === "ai");
    },
    neteasePlaylists(e) {
      const t = e.playlists.filter((s) => s.source === "netease");
      return t.sort((s, n) => s.neteaseSpecialType === 5 && n.neteaseSpecialType !== 5 ? -1 : s.neteaseSpecialType !== 5 && n.neteaseSpecialType === 5 ? 1 : 0), t;
    },
    queueSourceName(e) {
      const t = e.queue.sourcePlaylistId;
      return t ? e.playlists.find((n) => n.id === t)?.name ?? null : null;
    }
  },
  actions: {
    init() {
      this.loadFromStorage();
    },
    loadFromStorage() {
      const t = ge().storage;
      if (!t) return;
      const s = t.getPlaylistData();
      if (s)
        if (_f(s)) {
          const n = bf(s);
          this.playlists = wn(n.playlists), this.queue = n.queue, this.savePlaylistData(), H.info("Playlist data migrated from legacy format");
        } else if (s.version === 2) {
          const n = s;
          this.playlists = wn(n.playlists ?? []), this.queue = n.queue ?? { items: [], currentIndex: -1 };
        } else
          this.playlists = wn([]), this.queue = { items: [], currentIndex: -1 };
      else
        this.playlists = wn([]), this.queue = { items: [], currentIndex: -1 };
    },
    savePlaylistData() {
      const t = ge().storage;
      if (!t) return;
      const s = {
        playlists: this.playlists,
        queue: this.queue,
        version: 2
      };
      t.setPlaylistData(s);
    },
    // ===== 歌单管理 =====
    getPlaylist(e) {
      return this.playlists.find((t) => t.id === e);
    },
    addToPlaylist(e, t) {
      const s = this.getPlaylist(e);
      return !s || s.songs.some(
        (i) => i.providerId === t.providerId && i.providerTrackId === t.providerTrackId
      ) ? !1 : (s.songs.push(t), s.updatedAt = Date.now(), this.savePlaylistData(), !0);
    },
    removeFromPlaylist(e, t) {
      const s = this.getPlaylist(e);
      s && (s.songs = s.songs.filter((n) => n.id !== t), s.updatedAt = Date.now(), this.savePlaylistData());
    },
    deletePlaylist(e) {
      const t = this.getPlaylist(e);
      if (t && !(e === Ht || e === Yt || e === Zs)) {
        if (t.source === "upload") {
          const s = t.songs.map((n) => n.serverPath).filter((n) => !!n);
          Promise.all(s.map((n) => Ca(n).catch(() => {
          })));
        }
        this.playlists = this.playlists.filter((s) => s.id !== e), this.queue.sourcePlaylistId === e && (this.queue.sourcePlaylistId = void 0), this.savePlaylistData();
      }
    },
    // ===== 队列管理 =====
    playPlaylist(e, t = 0) {
      const s = this.getPlaylist(e);
      !s || s.songs.length === 0 || (this.queue = {
        items: s.songs.slice(),
        currentIndex: Math.max(0, Math.min(t, s.songs.length - 1)),
        sourcePlaylistId: e
      }, this.activeTab = "queue", this.savePlaylistData(), this.resolveAndPlay(this.queue.currentIndex));
    },
    playFromHere(e, t) {
      this.playPlaylist(e, t);
    },
    playQueueIndex(e) {
      e < 0 || e >= this.queue.items.length || (this.queue.currentIndex = e, this.savePlaylistData(), this.resolveAndPlay(e));
    },
    removeFromQueue(e) {
      e < 0 || e >= this.queue.items.length || (this.queue.items.splice(e, 1), this.queue.currentIndex === e ? this.queue.currentIndex = -1 : e < this.queue.currentIndex && this.queue.currentIndex--, this.savePlaylistData());
    },
    clearQueue() {
      this.queue = { items: [], currentIndex: -1 }, this.savePlaylistData();
    },
    // ===== 播放控制 =====
    peekNextIndex() {
      const e = this.queue.items;
      if (e.length === 0) return -1;
      const t = this.playMode, s = this.queue.currentIndex;
      if (t === "single") return s;
      if (t === "random") {
        if (e.length === 1) return 0;
        for (let i = 0; i < 5; i++) {
          const o = Math.floor(Math.random() * e.length);
          if (o !== s) return o;
        }
        return (s + 1) % e.length;
      }
      let n = s + 1;
      return n >= e.length && (n = 0), n;
    },
    next() {
      const e = this.queue.items;
      if (e.length === 0) return;
      const t = this.playMode;
      let s = this.queue.currentIndex;
      if (t === "single")
        s = this.queue.currentIndex;
      else if (t === "random")
        if (e.length === 1)
          s = 0;
        else {
          for (let n = 0; n < 5; n++) {
            const i = Math.floor(Math.random() * e.length);
            if (i !== this.queue.currentIndex) {
              s = i;
              break;
            }
          }
          s === this.queue.currentIndex && (s = (this.queue.currentIndex + 1) % e.length);
        }
      else
        s = this.queue.currentIndex + 1, s >= e.length && (s = 0);
      this.queue.currentIndex = s, this.savePlaylistData(), this.resolveAndPlay(s);
    },
    prev() {
      const e = this.queue.items;
      if (e.length === 0) return;
      let t = this.queue.currentIndex - 1;
      t < 0 && (t = e.length - 1), this.queue.currentIndex = t, this.savePlaylistData(), this.resolveAndPlay(t);
    },
    async resolveTrack(e) {
      const t = this.queue.items[e];
      if (!t) return null;
      if (t.source === "server" && t.serverPath)
        return { url: t.serverPath, name: t.song, artist: t.artist ?? "", source: "server" };
      if (t.providerId && t.providerTrackId) {
        const n = await Qt(ge().settings).resolve(t.providerTrackId, t.providerId, t.providerPicId);
        return n && (n.name = t.song, n.artist = t.artist ?? ""), n;
      }
      return null;
    },
    async resolveAndPlay(e) {
      const t = this.queue.items[e];
      if (!t) return;
      let s = null;
      if (t.source === "server" && t.serverPath ? s = { url: t.serverPath, name: t.song, artist: t.artist ?? "", source: "server" } : t.providerId && t.providerTrackId && (s = await Qt(ge().settings).resolve(t.providerTrackId, t.providerId, t.providerPicId), s && (s.name = t.song, s.artist = t.artist ?? "")), !s) {
        const o = ge().neteaseStatus;
        let r;
        t.source === "server" ? r = `${g("Cannot play")}：${t.song}` : o === "no-cookie" ? r = g("Cookie not configured") : o === "expired" ? r = g("Cookie expired") : o === "invalid" ? r = g("Cookie invalid") : r = `${g("Cannot play")}：${t.song}（${g("Delisted")}）`, H.warn('Track unavailable: "' + t.song + '"'), typeof toastr < "u" && toastr.warning(r, "晓乐");
        return;
      }
      await Re().loadAndPlay(s);
    },
    // ===== 搜索结果 =====
    addFromSearch(e, t = !0) {
      const s = {
        id: Ds(),
        song: e.name,
        artist: e.artist,
        source: "network",
        providerId: e.provider,
        providerTrackId: e.id,
        providerPicId: e.picId,
        addedAt: Date.now()
      };
      this.addToPlaylist(Ht, s), t && (this.queue = {
        items: [s],
        currentIndex: 0,
        sourcePlaylistId: Ht
      }, this.activeTab = "queue", this.savePlaylistData(), this.resolveAndPlay(0));
    },
    // ===== AI 选曲 =====
    addFromAi(e, t = !0) {
      const s = {
        id: Ds(),
        song: e.name,
        artist: e.artist,
        source: "chat",
        providerId: e.provider,
        providerTrackId: e.id,
        providerPicId: e.picId,
        addedAt: Date.now()
      };
      if (this.addToPlaylist(Zs, s), t) {
        const n = this.queue.currentIndex + 1;
        this.queue.items.splice(n, 0, s), this.queue.currentIndex = n, this.savePlaylistData(), this.resolveAndPlay(n);
      }
    },
    // ===== 上传 =====
    async addServerFile(e, t) {
      const s = await vf(t), n = {
        id: Ds(),
        song: e,
        source: "server",
        serverPath: s,
        addedAt: Date.now()
      };
      this.addToPlaylist(Yt, n), this.queue = {
        items: [n],
        currentIndex: 0,
        sourcePlaylistId: Yt
      }, this.savePlaylistData(), this.resolveAndPlay(0);
    },
    // ===== 网易云歌单同步 =====
    async syncNeteasePlaylists() {
      if (this.neteasePlaylistsLoading) return;
      const e = ge(), t = no(e.settings), s = e.settings.neteaseCookie;
      if (!t || !s) {
        H.warn("Cannot sync netease playlists: worker or cookie missing");
        return;
      }
      this.neteasePlaylistsLoading = !0;
      try {
        const i = await new so({ workerURL: t, cookie: s }).fetchPlaylists();
        if (!i) return;
        const o = Date.now(), r = new Map(this.playlists.filter((c) => c.source === "netease").map((c) => [c.neteaseId, c])), l = i.map((c) => {
          const u = r.get(c.id);
          return {
            id: u?.id ?? Ds(),
            name: c.name,
            source: "netease",
            neteaseId: c.id,
            neteaseSpecialType: c.specialType,
            cover: c.cover,
            songs: u?.songs ?? [],
            updatedAt: u?.updatedAt ?? o,
            syncedAt: o
          };
        });
        this.playlists = this.playlists.filter((c) => c.source !== "netease"), this.playlists.push(...l), this.savePlaylistData();
        const a = l.filter((c) => c.songs.length === 0);
        if (a.length > 0)
          for (let u = 0; u < a.length; u += 3) {
            const p = a.slice(u, u + 3);
            await Promise.all(p.map((w) => this.syncNeteasePlaylist(w.id).catch((k) => {
              H.warn("Auto-sync playlist failed: " + w.name, k);
            })));
          }
      } catch (n) {
        H.error("syncNeteasePlaylists failed:", n);
      } finally {
        this.neteasePlaylistsLoading = !1;
      }
    },
    async syncNeteasePlaylist(e) {
      const t = this.getPlaylist(e);
      if (!t || t.source !== "netease" || !t.neteaseId || this.syncingPlaylistIds.includes(e)) return;
      const s = ge(), n = no(s.settings), i = s.settings.neteaseCookie;
      if (!(!n || !i)) {
        this.syncingPlaylistIds.push(e);
        try {
          const r = await new so({ workerURL: n, cookie: i }).fetchPlaylist(t.neteaseId);
          if (!r) return;
          t.songs = r.songs.map((l) => ({
            id: Ds(),
            song: l.name,
            artist: l.artist,
            source: "network",
            providerId: "netease",
            providerTrackId: l.id,
            providerPicId: l.picId,
            addedAt: Date.now()
          })), t.cover = r.cover, t.syncedAt = Date.now(), t.updatedAt = Date.now(), this.savePlaylistData();
        } catch (o) {
          H.error("syncNeteasePlaylist failed:", o);
        } finally {
          this.syncingPlaylistIds = this.syncingPlaylistIds.filter((o) => o !== e);
        }
      }
    },
    // ===== Tab / 选择 =====
    setActiveTab(e) {
      this.activeTab = e;
    },
    selectPlaylist(e) {
      this.selectedPlaylistId = e;
    }
  }
}), Re = /* @__PURE__ */ fi("player", {
  state: () => ({
    audioEngine: null,
    isPlaying: !1,
    currentTime: 0,
    duration: 0,
    volume: 65,
    lyrics: [],
    currentLyricIndex: -1,
    currentTrack: null,
    preloadedUrl: "",
    preloadedIndex: -1
  }),
  actions: {
    init() {
      if (this.audioEngine) return;
      const e = new Hd();
      this.audioEngine = e;
      const t = Re();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = jd(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        if (t.currentLyricIndex = n, t.duration > 0) {
          const i = t.duration - t.currentTime;
          if (i < 15 && i > 0 && t.preloadedIndex === -1) {
            const o = tt(), r = o.peekNextIndex();
            r >= 0 && r !== o.queue.currentIndex && (t.preloadedIndex = r, o.resolveTrack(r).then((l) => {
              l && (t.preloadedUrl = l.url, e.preloadNext(l.url));
            }));
          }
        }
      }), e.on("ended", () => {
        const s = tt();
        t.preloadedUrl = "", t.preloadedIndex = -1, s.next();
      }), e.on("play", () => {
        t.isPlaying = !0;
      }), e.on("pause", () => {
        t.isPlaying = !1;
      }), e.on("error", () => {
        H.warn("Audio error event");
      }), this.initMediaSession();
    },
    initMediaSession() {
      if (!("mediaSession" in navigator)) return;
      const e = Re(), t = tt();
      navigator.mediaSession.setActionHandler("play", () => {
        e.play();
      }), navigator.mediaSession.setActionHandler("pause", () => {
        e.pause();
      }), navigator.mediaSession.setActionHandler("previoustrack", () => {
        t.prev();
      }), navigator.mediaSession.setActionHandler("nexttrack", () => {
        t.next();
      });
    },
    async loadAndPlay(e) {
      this.audioEngine || this.init();
      const t = this.audioEngine;
      this.preloadedUrl = "", this.preloadedIndex = -1;
      const s = ge().settings.crossfade;
      if (t.load(e.url), this.currentTrack = e, e.lyric ? this.updateLyrics(e.lyric) : (this.lyrics = [], this.currentLyricIndex = -1), await t.play(s), e.cover, "mediaSession" in navigator && (navigator.mediaSession.metadata = new MediaMetadata({
        title: e.name,
        artist: e.artist,
        album: "",
        artwork: e.cover ? [{ src: e.cover, sizes: "512x512" }] : []
      }), "setPositionState" in navigator.mediaSession))
        try {
          navigator.mediaSession.setPositionState({
            duration: t.duration || 0,
            position: t.currentTime,
            playbackRate: 1
          });
        } catch {
        }
    },
    async play() {
      const e = ge().settings.crossfade;
      await this.audioEngine?.play(e);
    },
    pause() {
      const e = ge().settings.crossfade;
      this.audioEngine?.pause(e);
    },
    async togglePlay() {
      this.isPlaying ? this.pause() : await this.play();
    },
    seek(e) {
      this.audioEngine?.seek(e);
    },
    setVolume(e) {
      this.volume = e, this.audioEngine?.setVolume(e / 100);
    },
    updateLyrics(e) {
      this.lyrics = Vd(e), this.currentLyricIndex = -1;
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null, this.preloadedUrl = "", this.preloadedIndex = -1;
    }
  }
}), wf = /* @__PURE__ */ fi("search", {
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
        H.warn("Search failed:", t), this.error = t instanceof Error ? t.message : String(t), this.results = [];
      } finally {
        this.isSearching = !1;
      }
    },
    clear() {
      this.keyword = "", this.results = [], this.error = null;
    }
  }
});
function Aa() {
  const e = /* @__PURE__ */ me(0), t = /* @__PURE__ */ me([]), s = /* @__PURE__ */ me(null);
  function n(r, l) {
    r && (t.value[l] = r);
  }
  async function i() {
    await Ge(), await new Promise((k) => requestAnimationFrame(() => k()));
    const l = Re().currentLyricIndex, a = s.value;
    if (!a || l < 0) {
      e.value = 0;
      return;
    }
    const c = t.value[l];
    if (!c) return;
    const u = c.offsetTop, p = c.offsetHeight, w = a.clientHeight;
    !u && !p && !w || (e.value = u - w / 2 + p / 2);
  }
  const o = Re();
  return Ue(() => o.currentLyricIndex, i), Ue(() => o.lyrics, () => {
    t.value = [], i();
  }), { scrollY: e, windowRef: s, setLineRef: n, updateScroll: i };
}
const kf = ["width", "height"], Sf = {
  key: 0,
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}, xf = {
  key: 10,
  points: "6 9 12 15 18 9"
}, Cf = {
  key: 11,
  points: "18 15 12 9 6 15"
}, Af = {
  key: 15,
  points: "20 6 9 17 4 12"
}, Tf = {
  key: 18,
  points: "15 18 9 12 15 6"
}, Pf = {
  key: 19,
  d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  fill: "currentColor",
  stroke: "none"
}, Mf = {
  key: 22,
  d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
  fill: "currentColor",
  stroke: "none"
}, Ef = /* @__PURE__ */ Rt({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (A(), P("svg", {
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
      e.name === "play" ? (A(), P("polygon", Sf)) : e.name === "pause" ? (A(), P(oe, { key: 1 }, [
        s[0] || (s[0] = d("rect", {
          x: "6",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[1] || (s[1] = d("rect", {
          x: "14",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1))
      ], 64)) : e.name === "prev" ? (A(), P(oe, { key: 2 }, [
        s[2] || (s[2] = d("polygon", {
          points: "19 20 9 12 19 4 19 20",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[3] || (s[3] = d("line", {
          x1: "5",
          y1: "19",
          x2: "5",
          y2: "5"
        }, null, -1))
      ], 64)) : e.name === "next" ? (A(), P(oe, { key: 3 }, [
        s[4] || (s[4] = d("polygon", {
          points: "5 4 15 12 5 20 5 4",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[5] || (s[5] = d("line", {
          x1: "19",
          y1: "5",
          x2: "19",
          y2: "19"
        }, null, -1))
      ], 64)) : e.name === "repeat" ? (A(), P(oe, { key: 4 }, [
        s[6] || (s[6] = d("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = d("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = d("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = d("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (A(), P(oe, { key: 5 }, [
        s[10] || (s[10] = _n('<polyline points="17 1 21 5 17 9" data-v-616b23af></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-616b23af></path><polyline points="7 23 3 19 7 15" data-v-616b23af></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-616b23af></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-616b23af>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (A(), P(oe, { key: 6 }, [
        s[11] || (s[11] = _n('<polyline points="16 3 21 3 21 8" data-v-616b23af></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-616b23af></line><polyline points="21 16 21 21 16 21" data-v-616b23af></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-616b23af></line><line x1="4" y1="4" x2="9" y2="9" data-v-616b23af></line>', 5))
      ], 64)) : e.name === "search" ? (A(), P(oe, { key: 7 }, [
        s[12] || (s[12] = d("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1)),
        s[13] || (s[13] = d("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1))
      ], 64)) : e.name === "plus" ? (A(), P(oe, { key: 8 }, [
        s[14] || (s[14] = d("line", {
          x1: "12",
          y1: "5",
          x2: "12",
          y2: "19"
        }, null, -1)),
        s[15] || (s[15] = d("line", {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12"
        }, null, -1))
      ], 64)) : e.name === "x" ? (A(), P(oe, { key: 9 }, [
        s[16] || (s[16] = d("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }, null, -1)),
        s[17] || (s[17] = d("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        }, null, -1))
      ], 64)) : e.name === "chevron-down" ? (A(), P("polyline", xf)) : e.name === "chevron-up" ? (A(), P("polyline", Cf)) : e.name === "music" ? (A(), P(oe, { key: 12 }, [
        s[18] || (s[18] = d("path", { d: "M9 18V5l12-2v13" }, null, -1)),
        s[19] || (s[19] = d("circle", {
          cx: "6",
          cy: "18",
          r: "3"
        }, null, -1)),
        s[20] || (s[20] = d("circle", {
          cx: "18",
          cy: "16",
          r: "3"
        }, null, -1))
      ], 64)) : e.name === "volume" ? (A(), P(oe, { key: 13 }, [
        s[21] || (s[21] = d("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = d("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = d("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (A(), P(oe, { key: 14 }, [
        s[24] || (s[24] = d("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[25] || (s[25] = d("line", {
          x1: "23",
          y1: "9",
          x2: "17",
          y2: "15"
        }, null, -1)),
        s[26] || (s[26] = d("line", {
          x1: "17",
          y1: "9",
          x2: "23",
          y2: "15"
        }, null, -1))
      ], 64)) : e.name === "check" ? (A(), P("polyline", Af)) : e.name === "loader" ? (A(), P(oe, { key: 16 }, [
        s[27] || (s[27] = _n('<line x1="12" y1="2" x2="12" y2="6" data-v-616b23af></line><line x1="12" y1="18" x2="12" y2="22" data-v-616b23af></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-616b23af></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-616b23af></line><line x1="2" y1="12" x2="6" y2="12" data-v-616b23af></line><line x1="18" y1="12" x2="22" y2="12" data-v-616b23af></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-616b23af></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-616b23af></line>', 8))
      ], 64)) : e.name === "list" ? (A(), P(oe, { key: 17 }, [
        s[28] || (s[28] = _n('<line x1="8" y1="6" x2="21" y2="6" data-v-616b23af></line><line x1="8" y1="12" x2="21" y2="12" data-v-616b23af></line><line x1="8" y1="18" x2="21" y2="18" data-v-616b23af></line><circle cx="3.5" cy="6" r="1.5" fill="currentColor" stroke="none" data-v-616b23af></circle><circle cx="3.5" cy="12" r="1.5" fill="currentColor" stroke="none" data-v-616b23af></circle><circle cx="3.5" cy="18" r="1.5" fill="currentColor" stroke="none" data-v-616b23af></circle>', 6))
      ], 64)) : e.name === "chevron-left" ? (A(), P("polyline", Tf)) : e.name === "heart" ? (A(), P("path", Pf)) : e.name === "sparkles" ? (A(), P(oe, { key: 20 }, [
        s[29] || (s[29] = d("path", {
          d: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[30] || (s[30] = d("path", {
          d: "M19 14l.7 2.1L22 17l-2.3.9L19 20l-.7-2.1L16 17l2.3-.9L19 14z",
          fill: "currentColor",
          stroke: "none"
        }, null, -1))
      ], 64)) : e.name === "upload" ? (A(), P(oe, { key: 21 }, [
        s[31] || (s[31] = d("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, null, -1)),
        s[32] || (s[32] = d("polyline", { points: "17 8 12 3 7 8" }, null, -1)),
        s[33] || (s[33] = d("line", {
          x1: "12",
          y1: "3",
          x2: "12",
          y2: "15"
        }, null, -1))
      ], 64)) : e.name === "bookmark" ? (A(), P("path", Mf)) : e.name === "refresh-cw" ? (A(), P(oe, { key: 23 }, [
        s[34] || (s[34] = d("polyline", { points: "23 4 23 10 17 10" }, null, -1)),
        s[35] || (s[35] = d("polyline", { points: "1 20 1 14 7 14" }, null, -1)),
        s[36] || (s[36] = d("path", { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10" }, null, -1)),
        s[37] || (s[37] = d("path", { d: "M20.49 15a9 9 0 0 1-14.85 3.36L1 14" }, null, -1))
      ], 64)) : we("", !0)
    ], 8, kf));
  }
}), $t = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, Ce = /* @__PURE__ */ $t(Ef, [["__scopeId", "data-v-616b23af"]]), If = { class: "stmp-mini-side stmp-mini-side-left" }, Rf = {
  key: 0,
  class: "stmp-mini-cover"
}, $f = ["src"], Of = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, Lf = {
  key: 1,
  class: "stmp-mini-text stmp-mini-dock-fallback"
}, Nf = { class: "stmp-mini-side stmp-mini-side-right" }, Df = { class: "stmp-mini-controls" }, Ff = ["disabled", "aria-label"], Uf = ["disabled", "aria-label"], Bf = {
  key: 1,
  class: "stmp-mini stmp-mini-drag stmp-mini-drag-idle"
}, Hf = { class: "stmp-mini-cover stmp-mini-cover-square" }, Vf = ["src"], jf = {
  key: 2,
  class: "stmp-mini stmp-mini-drag"
}, Wf = ["aria-label"], zf = ["src"], qf = { class: "stmp-mini-cover-overlay" }, Gf = { class: "stmp-mini-drag-right" }, Kf = { class: "stmp-mini-title-copy" }, Yf = {
  class: "stmp-mini-title-copy",
  "aria-hidden": "true"
}, Jf = {
  key: 0,
  class: "stmp-mini-lyric-segment"
}, Xf = /* @__PURE__ */ Rt({
  __name: "CollapsedBar",
  props: {
    isDock: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = Re(), s = tt(), n = ge(), i = e, o = /* @__PURE__ */ me(!1), r = _e(() => t.currentTrack?.cover || ""), l = _e(() => !!t.currentTrack), a = _e(() => !l.value || n.neteaseStatus !== "ok"), c = _e(() => n.settings.showDragMiniText), u = _e(() => {
      const R = t.currentTrack;
      if (!R) return "";
      const Z = R.name, B = R.artist || "";
      return B ? `${Z} - ${B}` : Z;
    }), { scrollY: p, windowRef: w, setLineRef: k, updateScroll: E } = Aa(), T = /* @__PURE__ */ me(null), G = /* @__PURE__ */ me(null), Y = /* @__PURE__ */ me([]), V = /* @__PURE__ */ me(0), X = /* @__PURE__ */ me(0);
    function _(R, Z) {
      R && (Y.value[Z] = R);
    }
    function v() {
      const R = T.value, Z = t.currentLyricIndex;
      if (!R || Z < 0 || Z >= Y.value.length) {
        X.value = 0, V.value = 0;
        return;
      }
      const B = Y.value[Z];
      if (!B) return;
      const I = R.clientWidth, b = B.offsetLeft, U = B.offsetWidth, z = t.lyrics[Z], ce = z?.next ? Math.max(500, (z.next.time - z.time) * 1e3) : 5e3;
      if (U <= I)
        X.value = Math.min(400, ce), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            V.value = -b;
          });
        });
      else {
        const te = -(b + U - I), fe = Math.min(600, ce * 0.2);
        X.value = fe, requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            V.value = -b;
          });
        }), setTimeout(() => {
          X.value = ce - fe, requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              V.value = te;
            });
          });
        }, fe);
      }
    }
    Ue(() => t.currentLyricIndex, v), Ue(() => t.lyrics, () => {
      Y.value = [], X.value = 0, V.value = 0, requestAnimationFrame(() => v());
    }), Ue(() => n.settings.widgetMode, () => {
      requestAnimationFrame(() => {
        E(), v();
      });
    });
    const x = /* @__PURE__ */ me(null), y = /* @__PURE__ */ me(!1);
    function F() {
      const R = x.value;
      if (!R) {
        y.value = !1;
        return;
      }
      const Z = R.querySelector(".stmp-mini-title-copy");
      if (!Z) {
        y.value = !1;
        return;
      }
      const B = Z.offsetWidth - 30;
      y.value = B > R.clientWidth;
    }
    Ue(u, () => {
      Ge(() => F());
    });
    function S() {
      o.value = !0;
    }
    Ue(() => t.currentTrack?.url, () => {
      o.value = !1;
    });
    function K(R) {
      R.stopPropagation(), t.togglePlay();
    }
    function le(R) {
      R.stopPropagation(), s.next();
    }
    return Es(() => {
      requestAnimationFrame(() => {
        E(), v(), F();
      });
    }), pn(() => {
    }), (R, Z) => i.isDock ? (A(), P("div", {
      key: 0,
      class: he(["stmp-mini", i.isMobile ? "stmp-mini-dock-mobile" : "stmp-mini-dock-desktop"])
    }, [
      d("div", If, [
        r.value && !o.value ? (A(), P("div", Rf, [
          d("img", {
            src: r.value,
            alt: "",
            onError: S
          }, null, 40, $f)
        ])) : (A(), P("div", Of, [
          ee(Ce, {
            name: "music",
            size: 14
          })
        ]))
      ]),
      d("div", {
        ref_key: "dockWindowRef",
        ref: w,
        class: "stmp-mini-dock-text"
      }, [
        h(t).lyrics.length > 0 ? (A(), P("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: Jt({ transform: `translateY(-${h(p)}px)` })
        }, [
          (A(!0), P(oe, null, Ve(h(t).lyrics, (B, I) => (A(), P("span", {
            key: I,
            ref_for: !0,
            ref: (b) => h(k)(b, I),
            class: he(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": I === h(t).currentLyricIndex }])
          }, M(B.text), 3))), 128))
        ], 4)) : (A(), P("span", Lf, M(u.value), 1))
      ], 512),
      d("div", Nf, [
        d("div", Df, [
          d("button", {
            class: "stmp-mini-btn",
            disabled: a.value,
            "aria-label": h(t).isPlaying ? h(g)("Pause") : h(g)("Play"),
            onClick: K
          }, [
            ee(Ce, {
              name: h(t).isPlaying ? "pause" : "play",
              size: i.isMobile ? 16 : 14
            }, null, 8, ["name", "size"])
          ], 8, Ff),
          d("button", {
            class: "stmp-mini-btn",
            disabled: a.value,
            "aria-label": h(g)("Next"),
            onClick: le
          }, [
            ee(Ce, {
              name: "next",
              size: i.isMobile ? 16 : 14
            }, null, 8, ["size"])
          ], 8, Uf)
        ])
      ])
    ], 2)) : !l.value || !c.value ? (A(), P("div", Bf, [
      d("div", Hf, [
        r.value && !o.value ? (A(), P("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: S
        }, null, 40, Vf)) : (A(), yt(Ce, {
          key: 1,
          name: "music",
          size: 20
        }))
      ])
    ])) : (A(), P("div", jf, [
      d("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": h(t).isPlaying ? h(g)("Pause") : h(g)("Play"),
        onClick: K
      }, [
        r.value && !o.value ? (A(), P("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: S
        }, null, 40, zf)) : (A(), yt(Ce, {
          key: 1,
          name: "music",
          size: 20
        })),
        d("div", qf, [
          ee(Ce, {
            name: h(t).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, Wf),
      d("div", Gf, [
        d("div", {
          ref_key: "titleContainerRef",
          ref: x,
          class: he(["stmp-mini-title-drag", { overflowing: y.value }])
        }, [
          (A(), P("div", {
            class: "stmp-mini-title-track",
            key: u.value
          }, [
            d("span", Kf, M(u.value), 1),
            d("span", Yf, M(u.value), 1)
          ]))
        ], 2),
        d("div", {
          ref_key: "lyricContainerRef",
          ref: T,
          class: "stmp-mini-lyric"
        }, [
          d("div", {
            ref_key: "lyricTrackRef",
            ref: G,
            class: "stmp-mini-lyric-track",
            style: Jt({
              transform: `translateX(${V.value}px)`,
              transition: X.value > 0 ? `transform ${X.value}ms linear` : "none"
            })
          }, [
            (A(!0), P(oe, null, Ve(h(t).lyrics, (B, I) => (A(), P("span", {
              key: I,
              ref_for: !0,
              ref: (b) => _(b, I),
              class: he(["stmp-mini-lyric-segment", { active: I === h(t).currentLyricIndex }])
            }, M(B.text) + "  ", 3))), 128)),
            h(t).lyrics.length === 0 ? (A(), P("span", Jf, M(" "))) : we("", !0)
          ], 4)
        ], 512)
      ])
    ]));
  }
}), Ar = /* @__PURE__ */ $t(Xf, [["__scopeId", "data-v-3585e948"]]), Qf = { class: "stmp-playlist" }, Zf = { class: "stmp-main-view" }, ep = { class: "stmp-tabs" }, tp = ["onClick"], sp = { class: "stmp-queue-view" }, np = {
  key: 0,
  class: "stmp-upload-area"
}, ip = ["disabled"], op = {
  key: 1,
  class: "stmp-empty"
}, rp = ["onClick"], lp = { class: "stmp-item-index" }, ap = { class: "stmp-item-info" }, cp = { class: "stmp-item-song" }, up = {
  key: 0,
  class: "stmp-item-artist"
}, dp = ["onClick"], fp = { class: "stmp-playlists-view" }, pp = { class: "stmp-section-header" }, hp = { class: "stmp-section-title" }, gp = ["onClick"], mp = { class: "stmp-pl-icon" }, yp = { class: "stmp-pl-info" }, vp = { class: "stmp-pl-name" }, _p = { class: "stmp-pl-count" }, bp = { class: "stmp-section-header stmp-section-header-netease" }, wp = { class: "stmp-section-title" }, kp = ["disabled"], Sp = {
  key: 0,
  class: "stmp-empty stmp-empty-sm"
}, xp = {
  key: 1,
  class: "stmp-empty stmp-empty-sm"
}, Cp = ["onClick"], Ap = { class: "stmp-pl-icon" }, Tp = { class: "stmp-pl-info" }, Pp = { class: "stmp-pl-name" }, Mp = ["onClick"], Ep = {
  key: 1,
  class: "stmp-pl-sync stmp-spin"
}, Ip = {
  key: 2,
  class: "stmp-pl-count"
}, Rp = /* @__PURE__ */ Rt({
  __name: "PlaylistView",
  setup(e) {
    const t = tt(), s = ge(), n = /* @__PURE__ */ me(null), i = /* @__PURE__ */ me(!1), o = () => {
      n.value?.click();
    }, r = async (y) => {
      const F = y.target;
      if (!F.files || !F.files[0]) return;
      const S = F.files[0];
      i.value = !0;
      try {
        await t.addServerFile(S.name, S), typeof toastr < "u" && toastr.success(`${g("Uploaded")}：${S.name}`, "晓乐");
      } catch (K) {
        H.error("Upload failed:", K), typeof toastr < "u" && toastr.error(`${g("Upload failed")}：${S.name}`, "晓乐");
      } finally {
        i.value = !1;
      }
      F.value = "";
    }, l = _e(() => t.queue.items.map((y, F) => ({ index: F, item: y }))), a = _e(() => t.queue.items.length === 0);
    function c(y) {
      t.playQueueIndex(y);
    }
    function u(y) {
      t.removeFromQueue(y);
    }
    const p = _e(() => t.localPlaylists), w = _e(() => t.neteasePlaylists), k = _e(() => s.neteaseStatus === "ok"), E = _e(() => [
      { value: "queue", label: g("Now Playing") },
      { value: "playlists", label: g("Playlists") }
    ]);
    Ue(E, (y) => {
      y.some((F) => F.value === t.activeTab) || t.setActiveTab("queue");
    });
    let T = !1;
    function G(y) {
      t.setActiveTab(y), y === "playlists" && k.value && !T && w.value.length === 0 && (T = !0, t.syncNeteasePlaylists());
    }
    async function Y() {
      await t.syncNeteasePlaylists();
    }
    function V(y) {
      return t.syncingPlaylistIds.includes(y);
    }
    async function X(y) {
      await t.syncNeteasePlaylist(y), typeof toastr < "u" && toastr.success(g("Playlist synced"), "晓乐");
    }
    function _(y) {
      const F = t.getPlaylist(y);
      F && (F.source === "netease" && F.songs.length === 0 && X(y), t.selectPlaylist(y));
    }
    function v(y) {
      return y.songs.length > 0 ? `${y.songs.length} ${g("songs")}` : y.source === "netease" ? V(y.id) ? g("Syncing...") : g("Not synced") : "0 " + g("songs");
    }
    function x(y) {
      return y.source === "netease" && y.songs.length === 0;
    }
    return (y, F) => (A(), P("div", Qf, [
      d("div", Zf, [
        d("div", ep, [
          (A(!0), P(oe, null, Ve(E.value, (S) => (A(), P("div", {
            key: S.value,
            class: he(["stmp-tab", { active: h(t).activeTab === S.value }]),
            onClick: (K) => G(S.value)
          }, M(S.label), 11, tp))), 128))
        ]),
        ds(d("div", sp, [
          h(s).settings.providers.find((S) => S.id === "local")?.enabled ? (A(), P("div", np, [
            d("input", {
              type: "file",
              accept: "audio/*",
              ref_key: "fileInputRef",
              ref: n,
              onChange: r,
              style: { display: "none" }
            }, null, 544),
            d("button", {
              class: "stmp-upload-btn",
              disabled: i.value,
              onClick: o
            }, M(i.value ? "..." : "+ " + h(g)("Upload audio file")), 9, ip)
          ])) : we("", !0),
          a.value ? (A(), P("div", op, M(h(g)("No Songs")), 1)) : (A(!0), P(oe, { key: 2 }, Ve(l.value, (S) => (A(), P("div", {
            key: S.item.id,
            class: he(["stmp-item", { active: S.index === h(t).queue.currentIndex }]),
            onClick: (K) => c(S.index)
          }, [
            d("span", lp, M(S.index + 1), 1),
            d("div", ap, [
              d("span", cp, M(S.item.song), 1),
              S.item.artist ? (A(), P("span", up, M(S.item.artist), 1)) : we("", !0)
            ]),
            d("button", {
              class: "stmp-item-del",
              onClick: ct((K) => u(S.index), ["stop"])
            }, [
              ee(Ce, {
                name: "x",
                size: 14
              })
            ], 8, dp)
          ], 10, rp))), 128))
        ], 512), [
          [ks, h(t).activeTab === "queue"]
        ]),
        ds(d("div", fp, [
          d("div", pp, [
            d("span", hp, M(h(g)("My Playlists")), 1)
          ]),
          (A(!0), P(oe, null, Ve(p.value, (S) => (A(), P("div", {
            key: S.id,
            class: "stmp-pl-item",
            onClick: (K) => _(S.id)
          }, [
            d("div", mp, [
              ee(Ce, {
                name: S.source === "upload" ? "upload" : S.source === "ai" ? "sparkles" : "bookmark",
                size: 16
              }, null, 8, ["name"])
            ]),
            d("div", yp, [
              d("span", vp, M(S.name), 1)
            ]),
            d("span", _p, M(v(S)), 1)
          ], 8, gp))), 128)),
          d("div", bp, [
            d("span", wp, M(h(g)("NetEase Playlists")), 1),
            k.value ? (A(), P("button", {
              key: 0,
              class: he(["stmp-refresh-btn", { "stmp-spin": h(t).neteasePlaylistsLoading }]),
              disabled: h(t).neteasePlaylistsLoading,
              onClick: Y
            }, [
              ee(Ce, {
                name: h(t).neteasePlaylistsLoading ? "loader" : "refresh-cw",
                size: 14
              }, null, 8, ["name"])
            ], 10, kp)) : we("", !0)
          ]),
          k.value ? w.value.length === 0 && !h(t).neteasePlaylistsLoading ? (A(), P("div", xp, M(h(g)("No Songs")), 1)) : (A(!0), P(oe, { key: 2 }, Ve(w.value, (S) => (A(), P("div", {
            key: S.id,
            class: "stmp-pl-item",
            onClick: (K) => _(S.id)
          }, [
            d("div", Ap, [
              ee(Ce, {
                name: S.neteaseSpecialType === 5 ? "heart" : "list",
                size: 16
              }, null, 8, ["name"])
            ]),
            d("div", Tp, [
              d("span", Pp, M(S.name), 1)
            ]),
            x(S) && !V(S.id) ? (A(), P("span", {
              key: 0,
              class: "stmp-pl-sync",
              onClick: ct((K) => X(S.id), ["stop"])
            }, [
              ee(Ce, {
                name: "refresh-cw",
                size: 14
              })
            ], 8, Mp)) : V(S.id) ? (A(), P("span", Ep, [
              ee(Ce, {
                name: "loader",
                size: 14
              })
            ])) : (A(), P("span", Ip, M(v(S)), 1))
          ], 8, Cp))), 128)) : (A(), P("div", Sp, M(h(g)("Configure in settings")), 1))
        ], 512), [
          [ks, h(t).activeTab === "playlists"]
        ])
      ])
    ]));
  }
}), $p = /* @__PURE__ */ $t(Rp, [["__scopeId", "data-v-8e885ff9"]]), Op = { class: "stmp-detail-list" }, Lp = {
  key: 0,
  class: "stmp-empty"
}, Np = {
  key: 1,
  class: "stmp-empty"
}, Dp = ["onClick"], Fp = { class: "stmp-item-index" }, Up = { class: "stmp-item-info" }, Bp = { class: "stmp-item-song" }, Hp = {
  key: 0,
  class: "stmp-item-artist"
}, Vp = ["onClick"], jp = /* @__PURE__ */ Rt({
  __name: "PlaylistDetail",
  setup(e) {
    const t = tt(), s = _e(() => t.selectedPlaylist), n = _e(() => s.value?.songs ?? []), i = _e(() => s.value ? t.syncingPlaylistIds.includes(s.value.id) : !1);
    function o(l) {
      t.selectedPlaylistId && t.playFromHere(t.selectedPlaylistId, l);
    }
    function r(l) {
      t.selectedPlaylistId && t.removeFromPlaylist(t.selectedPlaylistId, l);
    }
    return (l, a) => (A(), P("div", Op, [
      i.value && n.value.length === 0 ? (A(), P("div", Lp, M(h(g)("Syncing...")), 1)) : n.value.length === 0 ? (A(), P("div", Np, M(h(g)("No Songs")), 1)) : (A(!0), P(oe, { key: 2 }, Ve(n.value, (c, u) => (A(), P("div", {
        key: c.id,
        class: he(["stmp-item", { active: h(t).queue.sourcePlaylistId === s.value?.id && h(t).queue.currentIndex === u }]),
        onClick: (p) => o(u)
      }, [
        d("span", Fp, M(u + 1), 1),
        d("div", Up, [
          d("span", Bp, M(c.song), 1),
          c.artist ? (A(), P("span", Hp, M(c.artist), 1)) : we("", !0)
        ]),
        d("button", {
          class: "stmp-item-del",
          onClick: ct((p) => r(c.id), ["stop"])
        }, [
          ee(Ce, {
            name: "x",
            size: 14
          })
        ], 8, Vp)
      ], 10, Dp))), 128))
    ]));
  }
}), Wp = /* @__PURE__ */ $t(jp, [["__scopeId", "data-v-aa84a8ab"]]), zp = { class: "stmp-search" }, qp = {
  key: 0,
  class: "stmp-search-hint"
}, Gp = { class: "stmp-search-bar" }, Kp = ["placeholder"], Yp = ["disabled"], Jp = {
  key: 0,
  class: "stmp-search-error"
}, Xp = ["aria-label"], Qp = {
  key: 1,
  class: "stmp-search-loading"
}, Zp = {
  key: 2,
  class: "stmp-search-empty"
}, eh = {
  key: 3,
  class: "stmp-search-hint"
}, th = {
  key: 4,
  class: "stmp-results"
}, sh = ["onClick"], nh = { class: "stmp-result-name" }, ih = {
  key: 0,
  class: "stmp-result-artist"
}, oh = ["aria-label", "onClick"], rh = /* @__PURE__ */ Rt({
  __name: "SearchView",
  setup(e) {
    const t = wf(), s = tt(), n = ge(), i = _e(() => n.neteaseStatus === "ok"), o = /* @__PURE__ */ me(t.keyword), r = /* @__PURE__ */ me(null);
    async function l() {
      t.setKeyword(o.value);
      const k = Qt(n.settings);
      await t.search(k);
    }
    const a = () => {
      l();
    };
    function c(k) {
      const E = s.getPlaylist(Ht);
      return E ? E.songs.some(
        (T) => T.providerId === k.provider && T.providerTrackId === k.id
      ) : !1;
    }
    function u(k) {
      const E = k.provider + k.id;
      r.value !== E && (r.value = E, s.addFromSearch(k, !0), setTimeout(() => {
        r.value = null;
      }, 600));
    }
    function p(k) {
      c(k) || (s.addFromSearch(k, !1), typeof toastr < "u" && toastr.success(g("Added to playlist"), "晓乐"));
    }
    function w(k) {
      return r.value === k.provider + k.id;
    }
    return (k, E) => (A(), P("div", zp, [
      i.value ? (A(), P(oe, { key: 1 }, [
        d("div", Gp, [
          ds(d("input", {
            "onUpdate:modelValue": E[0] || (E[0] = (T) => o.value = T),
            class: "stmp-search-input",
            placeholder: h(g)("Search Song..."),
            onKeydown: Td(l, ["enter"])
          }, null, 40, Kp), [
            [Sd, o.value]
          ]),
          d("button", {
            class: "stmp-icon-btn",
            disabled: h(t).isSearching,
            onClick: l
          }, [
            h(t).isSearching ? (A(), yt(Ce, {
              key: 1,
              name: "loader",
              size: 16,
              class: "stmp-spin"
            })) : (A(), yt(Ce, {
              key: 0,
              name: "search",
              size: 16
            }))
          ], 8, Yp)
        ]),
        h(t).error ? (A(), P("div", Jp, [
          d("span", null, M(h(t).error), 1),
          d("button", {
            class: "stmp-retry-btn",
            "aria-label": h(g)("Retry"),
            onClick: a
          }, M(h(g)("Retry")), 9, Xp)
        ])) : we("", !0),
        h(t).isSearching ? (A(), P("div", Qp, M(h(g)("Searching...")), 1)) : o.value && !h(t).results.length ? (A(), P("div", Zp, M(h(g)("No results")), 1)) : !o.value && !h(t).results.length ? (A(), P("div", eh, M(h(g)("Type a song name to search")), 1)) : we("", !0),
        h(t).results.length ? (A(), P("div", th, [
          (A(!0), P(oe, null, Ve(h(t).results, (T) => (A(), P("div", {
            key: T.provider + T.id,
            class: he(["stmp-result", { "stmp-result-playing": w(T) }])
          }, [
            d("div", {
              class: "stmp-result-info",
              onClick: (G) => u(T)
            }, [
              d("span", nh, M(T.name), 1),
              T.artist ? (A(), P("span", ih, M(T.artist), 1)) : we("", !0)
            ], 8, sh),
            d("button", {
              class: he(["stmp-icon-btn stmp-result-add", { added: c(T) }]),
              "aria-label": c(T) ? h(g)("Added") : h(g)("Add to list"),
              onClick: ct((G) => p(T), ["stop"])
            }, [
              ee(Ce, {
                name: c(T) ? "check" : "plus",
                size: 16
              }, null, 8, ["name"])
            ], 10, oh)
          ], 2))), 128))
        ])) : we("", !0)
      ], 64)) : (A(), P("div", qp, [
        fs(M(h(n).neteaseStatus === "no-cookie" ? h(g)("Cookie not configured") : h(n).neteaseStatus === "invalid" ? h(g)("Cookie invalid") : h(g)("Cookie expired")) + " ", 1),
        E[1] || (E[1] = d("br", null, null, -1)),
        fs(M(h(g)("Configure in settings")), 1)
      ]))
    ]));
  }
}), lh = /* @__PURE__ */ $t(rh, [["__scopeId", "data-v-563c4b59"]]), ah = { class: "stmp-panel" }, ch = { class: "stmp-topbar stmp-drag-handle" }, uh = ["aria-label"], dh = { class: "stmp-cover-large" }, fh = ["src"], ph = {
  key: 1,
  class: "stmp-cover-placeholder"
}, hh = { class: "stmp-track-name" }, gh = { class: "stmp-track-artist" }, mh = { class: "stmp-lyric-header" }, yh = { class: "stmp-track-name" }, vh = { class: "stmp-track-artist" }, _h = { class: "stmp-progress" }, bh = ["value"], wh = { class: "stmp-time" }, kh = { class: "stmp-controls" }, Sh = { class: "stmp-ctrl-side stmp-search-side" }, xh = ["disabled", "aria-label"], Ch = ["disabled", "aria-label"], Ah = ["disabled", "aria-label"], Th = ["disabled", "aria-label"], Ph = ["disabled", "aria-label"], Mh = ["aria-label"], Eh = { class: "stmp-ctrl-side stmp-volume-side" }, Ih = ["aria-label"], Rh = ["value"], $h = {
  key: 0,
  class: "stmp-overlay"
}, Oh = { class: "stmp-overlay-header" }, Lh = { class: "stmp-overlay-title" }, Nh = ["aria-label"], Dh = { class: "stmp-overlay-body" }, Fh = {
  key: 0,
  class: "stmp-overlay stmp-overlay-detail"
}, Uh = { class: "stmp-overlay-header" }, Bh = { class: "stmp-overlay-title" }, Hh = { class: "stmp-overlay-body" }, Vh = /* @__PURE__ */ Rt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = Re(), s = tt(), n = ge(), i = _e(
      () => n.settings.widgetMode === "dock" && n.settings.dockAlign.startsWith("top-")
    ), o = /* @__PURE__ */ me("cover"), r = /* @__PURE__ */ me(null), l = /* @__PURE__ */ me(!1), a = /* @__PURE__ */ me(!1);
    let c = null, u = 0;
    const p = _e(() => t.currentTrack?.cover || ""), w = _e(() => !!t.currentTrack), k = _e(() => n.neteaseStatus), E = _e(() => w.value ? "" : k.value === "no-cookie" ? g("Cookie not configured") : k.value === "expired" ? g("Cookie expired") : k.value === "invalid" ? g("Cookie invalid") : g("No Song")), T = _e(() => !w.value || k.value !== "ok"), G = () => {
      l.value = !0;
    };
    Ue(
      () => t.currentTrack,
      () => {
        l.value = !1;
      }
    );
    const Y = _e(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), { scrollY: V, windowRef: X, setLineRef: _, updateScroll: v } = Aa();
    Es(() => {
      v();
    }), Ue(() => n.settings.widgetMode, () => {
      v();
    }), Ue(o, () => {
      v();
    });
    function x(ce) {
      const te = Math.floor(ce / 60), fe = Math.floor(ce % 60);
      return te + ":" + fe.toString().padStart(2, "0");
    }
    function y(ce) {
      const te = ce.target;
      t.seek(Number(te.value) / 100 * t.duration);
    }
    const F = ["list", "random", "single"], S = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    }, K = {
      list: "List Loop",
      random: "Random",
      single: "Single Loop"
    };
    function le() {
      const ce = n.settings.playMode, te = F.indexOf(ce), fe = F[(te + 1) % F.length];
      n.setPlayMode(fe), typeof toastr < "u" && toastr.info(`${g("Play mode")}：${g(K[fe])}`, "晓乐");
    }
    function R(ce) {
      const te = ce.target;
      t.setVolume(Number(te.value));
    }
    function Z() {
      c && clearTimeout(c), a.value = !0;
    }
    function B() {
      c = setTimeout(() => {
        a.value = !1;
      }, 300);
    }
    function I() {
      t.volume > 0 ? (u = t.volume, t.setVolume(0)) : t.setVolume(u || n.settings.volume);
    }
    function b(ce) {
      r.value === ce ? r.value = null : r.value = ce;
    }
    function U() {
      if (s.selectedPlaylistId) {
        s.selectPlaylist(null);
        return;
      }
      r.value = null;
    }
    function z() {
      s.selectedPlaylistId && s.playPlaylist(s.selectedPlaylistId, 0);
    }
    return (ce, te) => (A(), P("div", ah, [
      d("div", ch, [
        te[8] || (te[8] = d("div", { class: "stmp-topbar-spacer" }, null, -1)),
        d("button", {
          class: "stmp-icon-btn",
          "aria-label": h(g)("Collapse panel"),
          onClick: te[0] || (te[0] = ct((fe) => ce.$emit("collapse"), ["stop"]))
        }, [
          ee(Ce, {
            name: i.value ? "chevron-up" : "chevron-down",
            size: 18
          }, null, 8, ["name"])
        ], 8, uh)
      ]),
      d("div", {
        class: "stmp-display",
        onClick: te[1] || (te[1] = (fe) => o.value = o.value === "cover" ? "lyric" : "cover")
      }, [
        d("div", {
          class: he(["stmp-cover-mode", { hidden: o.value !== "cover" }])
        }, [
          d("div", dh, [
            p.value && !l.value ? (A(), P("img", {
              key: 0,
              src: p.value,
              alt: "cover",
              onError: G
            }, null, 40, fh)) : (A(), P("div", ph, [
              ee(Ce, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          d("div", hh, M(h(t).currentTrack?.name || E.value), 1),
          d("div", gh, M((h(t).currentTrack?.artist || "").trim() || " "), 1)
        ], 2),
        d("div", {
          class: he(["stmp-lyric-mode", { hidden: o.value !== "lyric" }])
        }, [
          d("div", mh, [
            d("div", yh, M(h(t).currentTrack?.name || E.value), 1),
            d("div", vh, M((h(t).currentTrack?.artist || "").trim() || " "), 1)
          ]),
          d("div", {
            ref_key: "lyricWindowRef",
            ref: X,
            class: "stmp-lyric-window"
          }, [
            h(t).lyrics.length > 0 ? (A(), P("div", {
              key: 0,
              class: "stmp-lyric-scroll",
              style: Jt({ transform: `translateY(-${h(V)}px)` })
            }, [
              (A(!0), P(oe, null, Ve(h(t).lyrics, (fe, de) => (A(), P("div", {
                key: de,
                ref_for: !0,
                ref: (Ae) => h(_)(Ae, de),
                class: he(["stmp-lyric-line", { "stmp-lyric-active": de === h(t).currentLyricIndex }])
              }, M(fe.text), 3))), 128))
            ], 4)) : we("", !0)
          ], 512)
        ], 2)
      ]),
      d("div", _h, [
        d("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: Y.value,
          class: "stmp-range",
          onInput: y
        }, null, 40, bh),
        d("div", wh, [
          d("span", null, M(x(h(t).currentTime)), 1),
          d("span", null, M(x(h(t).duration)), 1)
        ])
      ]),
      d("div", kh, [
        d("div", Sh, [
          d("button", {
            class: he(["stmp-ctrl-btn", { active: r.value === "search" }]),
            disabled: k.value !== "ok",
            "aria-label": h(g)("Search"),
            onClick: te[2] || (te[2] = ct((fe) => b("search"), ["stop"]))
          }, [
            ee(Ce, {
              name: "search",
              size: 18
            })
          ], 10, xh)
        ]),
        d("button", {
          class: "stmp-ctrl-btn",
          disabled: T.value,
          "aria-label": h(g)("Toggle play mode"),
          onClick: le
        }, [
          ee(Ce, {
            name: S[h(n).settings.playMode],
            size: 16
          }, null, 8, ["name"])
        ], 8, Ch),
        d("button", {
          class: "stmp-ctrl-btn",
          disabled: T.value,
          "aria-label": h(g)("Previous"),
          onClick: te[3] || (te[3] = (fe) => h(s).prev())
        }, [
          ee(Ce, {
            name: "prev",
            size: 18
          })
        ], 8, Ah),
        d("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          disabled: T.value,
          "aria-label": h(t).isPlaying ? h(g)("Pause") : h(g)("Play"),
          onClick: te[4] || (te[4] = (fe) => h(t).togglePlay())
        }, [
          ee(Ce, {
            name: h(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Th),
        d("button", {
          class: "stmp-ctrl-btn",
          disabled: T.value,
          "aria-label": h(g)("Next"),
          onClick: te[5] || (te[5] = (fe) => h(s).next())
        }, [
          ee(Ce, {
            name: "next",
            size: 18
          })
        ], 8, Ph),
        d("button", {
          class: he(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": h(g)("Playlist"),
          onClick: te[6] || (te[6] = ct((fe) => b("list"), ["stop"]))
        }, [
          ee(Ce, {
            name: "list",
            size: 16
          })
        ], 10, Mh),
        d("div", Eh, [
          d("div", {
            class: "stmp-volume-container",
            onMouseenter: Z,
            onMouseleave: B
          }, [
            d("button", {
              class: "stmp-ctrl-btn",
              "aria-label": h(g)("Mute / Unmute"),
              onClick: I
            }, [
              ee(Ce, {
                name: h(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, Ih),
            d("div", {
              class: he(["stmp-volume-popup", { show: a.value }])
            }, [
              d("input", {
                type: "range",
                min: "0",
                max: "100",
                value: h(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: R
              }, null, 40, Rh)
            ], 2)
          ], 32)
        ])
      ]),
      ee(Zo, { name: "stmp-overlay" }, {
        default: Di(() => [
          r.value ? (A(), P("div", $h, [
            d("div", Oh, [
              d("span", Lh, M(r.value === "list" ? h(g)("Playlist") : h(g)("Search")), 1),
              d("button", {
                class: "stmp-overlay-close",
                "aria-label": h(g)("Close"),
                onClick: ct(U, ["stop"])
              }, [
                ee(Ce, {
                  name: "x",
                  size: 16
                })
              ], 8, Nh)
            ]),
            d("div", Dh, [
              r.value === "list" ? (A(), yt($p, { key: 0 })) : (A(), yt(lh, { key: 1 }))
            ])
          ])) : we("", !0)
        ]),
        _: 1
      }),
      ee(Zo, { name: "stmp-overlay" }, {
        default: Di(() => [
          r.value === "list" && h(s).selectedPlaylist ? (A(), P("div", Fh, [
            d("div", Uh, [
              d("button", {
                class: "stmp-overlay-back",
                onClick: te[7] || (te[7] = ct((fe) => h(s).selectPlaylist(null), ["stop"]))
              }, [
                ee(Ce, {
                  name: "chevron-left",
                  size: 16
                })
              ]),
              d("span", Bh, M(h(s).selectedPlaylist.name), 1),
              d("button", {
                class: "stmp-overlay-play-btn",
                onClick: ct(z, ["stop"])
              }, [
                ee(Ce, {
                  name: "play",
                  size: 14
                })
              ])
            ]),
            d("div", Hh, [
              ee(Wp)
            ])
          ])) : we("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Tr = /* @__PURE__ */ $t(Vh, [["__scopeId", "data-v-d58d1d50"]]), jh = {
  key: 1,
  class: "stmp-inline-expanded"
}, Pr = 3, Wh = 500, zh = /* @__PURE__ */ Rt({
  __name: "App",
  setup(e) {
    const t = ge(), s = Re(), n = /* @__PURE__ */ me(!1), i = /* @__PURE__ */ me(null);
    let o = null;
    const r = _e(() => t.settings.widgetMode === "dock"), l = _e(() => t.settings.widgetMode === "inline"), a = _e(() => t.settings.widgetMode === "hidden"), c = /* @__PURE__ */ me(window.innerWidth <= 768), u = /* @__PURE__ */ me(!1), p = _e(() => t.settings.dockAlign.startsWith("top-")), w = _e(() => t.settings.customOpacity ? t.settings.opacity : 75), k = (pe) => {
      pe.key === "Escape" && (n.value = !1), pe.key === " " && pe.target === document.body && (pe.preventDefault(), s.togglePlay());
    };
    let E = 0, T = 0, G = 0, Y = 0, V = !1, X = !1, _ = 0, v = !1, x = null, y = null, F = 0, S = 0, K = 0, le = 0, R = 0, Z = 0, B = 0;
    function I(pe) {
      if (r.value) return;
      const Se = pe.target;
      if (Se.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!Se.closest(".stmp-drag-handle") || Se.closest("button")) || !n.value && Se.closest("button"))
        return;
      const Fe = i.value?.getBoundingClientRect();
      if (!Fe) return;
      E = pe.clientX, T = pe.clientY, G = Fe.left, Y = Fe.top, V = !1, X = !0, _ = Date.now(), v = !1, i.value && (i.value.style.left = Fe.left + "px", i.value.style.top = Fe.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), x = b, y = U;
      const Oe = i.value;
      Oe && (F = Oe.offsetWidth || 60, S = Oe.offsetHeight || 40, K = window.innerWidth - F, le = window.innerHeight - S, document.addEventListener("pointermove", x), document.addEventListener("pointerup", y), pe.preventDefault());
    }
    function b(pe) {
      if (!i.value || !X) return;
      const Se = pe.clientX - E, Fe = pe.clientY - T;
      (Math.abs(Se) > Pr || Math.abs(Fe) > Pr) && (V = !0);
      let Oe = G + Se, Ie = Y + Fe;
      Oe = Math.max(0, Math.min(Oe, K)), Ie = Math.max(0, Math.min(Ie, le)), Z = Oe, B = Ie, R || (R = requestAnimationFrame(() => {
        R = 0, i.value && (i.value.style.left = Z + "px", i.value.style.top = B + "px");
      }));
    }
    function U() {
      X = !1, R && (cancelAnimationFrame(R), R = 0, i.value && (i.value.style.left = Z + "px", i.value.style.top = B + "px")), x && document.removeEventListener("pointermove", x), y && document.removeEventListener("pointerup", y), x = null, y = null;
      const pe = Date.now() - _;
      if (V) {
        if (v = !0, i.value) {
          const Se = i.value.getBoundingClientRect();
          t.setPosition({ x: Se.left, y: Se.top }), n.value && Ge(() => z());
        }
        return;
      }
      if (pe > Wh) {
        v = !0;
        return;
      }
    }
    function z() {
      if (!i.value) return;
      const pe = i.value.getBoundingClientRect(), Se = i.value.offsetWidth, Fe = i.value.offsetHeight;
      let Oe = pe.left, Ie = pe.top;
      Oe + Se > window.innerWidth && (Oe = window.innerWidth - Se), Ie + Fe > window.innerHeight && (Ie = window.innerHeight - Fe), Oe < 0 && (Oe = 0), Ie < 0 && (Ie = 0), i.value.style.left = Oe + "px", i.value.style.top = Ie + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: Oe, y: Ie });
    }
    function ce() {
      if (!i.value || !r.value) return;
      const pe = t.settings.dockAlign, Se = pe.startsWith("top-"), Fe = pe.endsWith("-right"), Oe = Se ? document.querySelector("#top-settings-holder") : document.querySelector("#send_form");
      if (!Oe) return;
      const Ie = Oe.getBoundingClientRect(), es = i.value.offsetHeight || 38;
      if (Se) {
        const ts = Math.max(80, window.innerHeight - Ie.bottom - 8);
        i.value.style.maxHeight = ts + "px", i.value.style.top = Ie.bottom + "px";
      } else {
        const ts = Math.max(80, Ie.top - 8);
        i.value.style.maxHeight = ts + "px";
        let f = Ie.top - Math.min(es, ts);
        f < 4 && (f = 4), i.value.style.top = f + "px";
      }
      if (window.innerWidth <= 768)
        i.value.style.left = Ie.left + "px", i.value.style.width = Ie.width + "px";
      else {
        const ts = i.value.offsetWidth;
        Fe ? i.value.style.left = Ie.right - ts + "px" : i.value.style.left = Ie.left + "px", i.value.style.width = "";
      }
      i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function te() {
      if (!i.value || r.value) return;
      const pe = t.settings.position;
      pe ? (i.value.style.left = pe.x + "px", i.value.style.top = pe.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", window.innerWidth <= 768 && Ge(() => z())) : (i.value.style.left = window.innerWidth - i.value.offsetWidth - 16 + "px", i.value.style.top = "16px", i.value.style.right = "auto", i.value.style.bottom = "auto");
    }
    function fe(pe) {
      if (v) {
        v = !1;
        return;
      }
      if (r.value && !n.value) {
        if (pe.target.closest("button, input")) return;
        Ae();
        return;
      }
      if (!r.value && !n.value) {
        if (pe.target.closest("button, input")) return;
        Ae();
      }
    }
    function de(pe) {
      n.value || pe.target.closest("button, input") || Ae();
    }
    function Ae() {
      n.value = !n.value, Ge(() => {
        r.value ? ce() : l.value || t.settings.position && z();
      });
    }
    Ue(() => t.settings.widgetMode, (pe) => {
      n.value = !1, i.value && (i.value.style.width = "", i.value.style.left = "", i.value.style.top = "", i.value.style.right = "", i.value.style.bottom = "", i.value.style.maxHeight = ""), pe === "inline" && (u.value = !!document.querySelector("#send_form")), Ge(() => {
        pe === "dock" ? ce() : pe === "drag" && te();
      });
    }), Ue(() => t.settings.dockAlign, () => {
      r.value && Ge(() => ce());
    }), Es(() => {
      u.value = !!document.querySelector("#send_form"), Ge(() => {
        r.value ? ce() : l.value || te();
      }), i.value && typeof ResizeObserver < "u" && (o = new ResizeObserver(() => {
        r.value && ce();
      }), o.observe(i.value)), window.addEventListener("resize", nt), window.addEventListener("keydown", k);
    });
    function nt() {
      c.value = window.innerWidth <= 768, r.value ? Ge(() => ce()) : l.value || Ge(() => z());
    }
    return pn(() => {
      U(), o && (o.disconnect(), o = null), window.removeEventListener("resize", nt), window.removeEventListener("keydown", k);
    }), (pe, Se) => l.value ? (A(), P(oe, { key: 0 }, [
      u.value ? (A(), yt(Cl, {
        key: 0,
        to: "#send_form"
      }, [
        n.value ? (A(), P("div", jh, [
          ee(Tr, { onCollapse: Ae })
        ])) : (A(), P("div", {
          key: 0,
          class: "stmp-inline-bar",
          onClick: de
        }, [
          ee(Ar, {
            "is-dock": !0,
            "is-mobile": !0
          })
        ]))
      ])) : we("", !0)
    ], 64)) : a.value ? we("", !0) : (A(), P("div", {
      key: 1,
      ref_key: "widgetRef",
      ref: i,
      class: he(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": r.value,
        "stmp-dock-top": r.value && p.value,
        "stmp-dock-bottom": r.value && !p.value
      }]),
      style: Jt({ "--stmp-opacity": w.value + "%" }),
      onPointerdown: I,
      onClick: fe
    }, [
      n.value ? (A(), yt(Tr, {
        key: 1,
        onCollapse: Ae
      })) : (A(), yt(Ar, {
        key: 0,
        "is-dock": r.value,
        "is-mobile": c.value
      }, null, 8, ["is-dock", "is-mobile"]))
    ], 38));
  }
}), qh = /* @__PURE__ */ $t(zh, [["__scopeId", "data-v-cf56cb18"]]);
var _s = class extends Error {
  constructor(e, t) {
    super("".concat(e, " at position ").concat(t)), this.position = t;
  }
};
function Gh(e) {
  return /^[0-9A-Fa-f]$/.test(e);
}
function rs(e) {
  return e >= "0" && e <= "9";
}
function Kh(e) {
  return e >= " ";
}
function kn(e) {
  return `,:[]/{}()
+`.includes(e);
}
function Mr(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_" || e === "$";
}
function Er(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_" || e === "$" || e >= "0" && e <= "9";
}
var Ir = /^(http|https|ftp|mailto|file|data|irc):\/\/$/, Rr = /^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;
function $r(e) {
  return `,[]/{}
+`.includes(e);
}
function Or(e) {
  return En(e) || Yh.test(e);
}
var Yh = /^[[{\w-]$/;
function Jh(e) {
  return e === `
` || e === "\r" || e === "	" || e === "\b" || e === "\f";
}
function us(e, t) {
  let s = e.charCodeAt(t);
  return s === 32 || s === 10 || s === 9 || s === 13;
}
function Xh(e, t) {
  let s = e.charCodeAt(t);
  return s === 32 || s === 9 || s === 13;
}
function Qh(e, t) {
  let s = e.charCodeAt(t);
  return s === 160 || s >= 8192 && s <= 8202 || s === 8239 || s === 8287 || s === 12288;
}
function En(e) {
  return Ta(e) || io(e);
}
function Ta(e) {
  return e === '"' || e === "“" || e === "”";
}
function Lr(e) {
  return e === '"';
}
function io(e) {
  return e === "'" || e === "‘" || e === "’" || e === "`" || e === "´";
}
function Nr(e) {
  return e === "'";
}
function Fs(e, t) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = e.lastIndexOf(t);
  return n !== -1 ? e.substring(0, n) + (s ? "" : e.substring(n + 1)) : e;
}
function pt(e, t) {
  let s = e.length;
  if (!us(e, s - 1)) return e + t;
  for (; us(e, s - 1); ) s--;
  return e.substring(0, s) + t + e.substring(s);
}
function Zh(e, t, s) {
  return e.substring(0, t) + e.substring(t + s);
}
function eg(e) {
  return /[,\n][ \t\r]*$/.test(e);
}
var tg = { "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" }, sg = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: `
`, r: "\r", t: "	" };
function Dr(e) {
  let t = 0, s = "";
  a(), i() || R(), a();
  let n = c(",");
  for (n && o(), Or(e[t]) && eg(s) ? (n || (s = pt(s, ",")), T()) : n && (s = Fs(s, ",")); e[t] === "}" || e[t] === "]"; ) t++, o();
  if (t >= e.length) return s;
  le();
  function i() {
    o();
    let b = k() || E() || G() || V() || X() || v(!1) || x();
    return o(), b;
  }
  function o() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, U = t, z = r(b);
    do
      z = l(), z && (z = r(b));
    while (z);
    return t > U;
  }
  function r(b) {
    let U = b ? us : Xh, z = "";
    for (; ; ) if (U(e, t)) z += e[t], t++;
    else if (Qh(e, t)) z += " ", t++;
    else break;
    return z.length > 0 ? (s += z, !0) : !1;
  }
  function l() {
    if (e[t] === "/" && e[t + 1] === "*") {
      for (; t < e.length && !ng(e, t); ) t++;
      return t += 2, !0;
    }
    if (e[t] === "/" && e[t + 1] === "/") {
      for (; t < e.length && e[t] !== `
`; ) t++;
      return !0;
    }
    return !1;
  }
  function a() {
    if (e.slice(t, t + 3) === "```") {
      if (t += 3, Mr(e[t])) for (; t < e.length && Er(e[t]); ) t++;
      return o(), !0;
    }
    return !1;
  }
  function c(b) {
    return e[t] === b ? (s += e[t], t++, !0) : !1;
  }
  function u(b) {
    return e[t] === b ? (t++, !0) : !1;
  }
  function p() {
    return u("\\");
  }
  function w() {
    return o(), e[t] === "." && e[t + 1] === "." && e[t + 2] === "." ? (t += 3, o(), u(","), !0) : !1;
  }
  function k() {
    if (e[t] === "{") {
      s += "{", t++, o(), u(",") && o();
      let b = !0;
      for (; t < e.length && e[t] !== "}"; ) {
        let U;
        if (b ? (U = !0, b = !1) : (U = c(","), U || (s = pt(s, ",")), o()), w(), !(G() || v(!0))) {
          e[t] === "}" || e[t] === "{" || e[t] === "]" || e[t] === "[" || e[t] === void 0 ? s = Fs(s, ",") : Z();
          break;
        }
        o();
        let z = c(":"), ce = t >= e.length;
        z || (Or(e[t]) || ce ? s = pt(s, ":") : B()), i() || (z || ce ? s += "null" : B());
      }
      return e[t] === "}" ? (s += "}", t++) : s = pt(s, "}"), !0;
    }
    return !1;
  }
  function E() {
    if (e[t] === "[") {
      s += "[", t++, o(), u(",") && o();
      let b = !0;
      for (; t < e.length && e[t] !== "]"; ) if (b ? b = !1 : c(",") || (s = pt(s, ",")), w(), !i()) {
        s = Fs(s, ",");
        break;
      }
      return e[t] === "]" ? (s += "]", t++) : s = pt(s, "]"), !0;
    }
    return !1;
  }
  function T() {
    let b = !0, U = !0;
    for (; U; ) b ? b = !1 : c(",") || (s = pt(s, ",")), U = i();
    U || (s = Fs(s, ",")), s = `[
`.concat(s, `
]`);
  }
  function G() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, z = e[t] === "\\";
    if (z && (t++, z = !0), En(e[t])) {
      let ce = Lr(e[t]) ? Lr : Nr(e[t]) ? Nr : io(e[t]) ? io : Ta, te = t, fe = s.length, de = '"';
      for (t++; ; ) {
        if (t >= e.length) {
          let Ae = y(t - 1);
          return !b && kn(e.charAt(Ae)) ? (t = te, s = s.substring(0, fe), G(!0)) : (de = pt(de, '"'), s += de, !0);
        } else {
          if (t === U) return de = pt(de, '"'), s += de, !0;
          if (ce(e[t])) {
            let Ae = t, nt = de.length;
            if (de += '"', t++, s += de, o(!1), b || t >= e.length || kn(e[t]) || En(e[t]) || rs(e[t])) return Y(), !0;
            let pe = y(Ae - 1), Se = e.charAt(pe);
            if (Se === ",") return t = te, s = s.substring(0, fe), G(!1, pe);
            if (kn(Se)) return t = te, s = s.substring(0, fe), G(!0);
            s = s.substring(0, fe), t = Ae + 1, de = "".concat(de.substring(0, nt), "\\").concat(de.substring(nt));
          } else if (b && $r(e[t])) {
            if (e[t - 1] === ":" && Ir.test(e.substring(te + 1, t + 2))) for (; t < e.length && Rr.test(e[t]); ) de += e[t], t++;
            return de = pt(de, '"'), s += de, Y(), !0;
          } else if (e[t] === "\\") {
            let Ae = e.charAt(t + 1);
            if (sg[Ae] !== void 0) de += e.slice(t, t + 2), t += 2;
            else if (Ae === "u") {
              let nt = 2;
              for (; nt < 6 && Gh(e[t + nt]); ) nt++;
              nt === 6 ? (de += e.slice(t, t + 6), t += 6) : t + nt >= e.length ? t = e.length : I();
            } else de += Ae, t += 2;
          } else {
            let Ae = e.charAt(t);
            Ae === '"' && e[t - 1] !== "\\" ? (de += "\\".concat(Ae), t++) : Jh(Ae) ? (de += tg[Ae], t++) : (Kh(Ae) || K(Ae), de += Ae, t++);
          }
        }
        z && p();
      }
    }
    return !1;
  }
  function Y() {
    let b = !1;
    for (o(); e[t] === "+"; ) {
      b = !0, t++, o(), s = Fs(s, '"', !0);
      let U = s.length;
      G() ? s = Zh(s, U, 1) : s = pt(s, '"');
    }
    return b;
  }
  function V() {
    let b = t;
    if (e[t] === "-") {
      if (t++, F()) return S(b), !0;
      if (!rs(e[t])) return t = b, !1;
    }
    for (; rs(e[t]); ) t++;
    if (e[t] === ".") {
      if (t++, F()) return S(b), !0;
      if (!rs(e[t])) return t = b, !1;
      for (; rs(e[t]); ) t++;
    }
    if (e[t] === "e" || e[t] === "E") {
      if (t++, (e[t] === "-" || e[t] === "+") && t++, F()) return S(b), !0;
      if (!rs(e[t])) return t = b, !1;
      for (; rs(e[t]); ) t++;
    }
    if (!F()) return t = b, !1;
    if (t > b) {
      let U = e.slice(b, t), z = /^0\d/.test(U);
      return s += z ? '"'.concat(U, '"') : U, !0;
    }
    return !1;
  }
  function X() {
    return _("true", "true") || _("false", "false") || _("null", "null") || _("True", "true") || _("False", "false") || _("None", "null");
  }
  function _(b, U) {
    return e.slice(t, t + b.length) === b ? (s += U, t += b.length, !0) : !1;
  }
  function v(b) {
    let U = t;
    if (Mr(e[t])) {
      for (; t < e.length && Er(e[t]); ) t++;
      let z = t;
      for (; us(e, z); ) z++;
      if (e[z] === "(") return t = z + 1, i(), e[t] === ")" && (t++, e[t] === ";" && t++), !0;
    }
    for (; t < e.length && !$r(e[t]) && !En(e[t]) && (!b || e[t] !== ":"); ) t++;
    if (e[t - 1] === ":" && Ir.test(e.substring(U, t + 2))) for (; t < e.length && Rr.test(e[t]); ) t++;
    if (t > U) {
      for (; us(e, t - 1) && t > 0; ) t--;
      let z = e.slice(U, t);
      return s += z === "undefined" ? "null" : JSON.stringify(z), e[t] === '"' && t++, !0;
    }
  }
  function x() {
    if (e[t] === "/") {
      let b = t;
      for (t++; t < e.length && (e[t] !== "/" || e[t - 1] === "\\"); ) t++;
      return t++, s += '"'.concat(e.substring(b, t), '"'), !0;
    }
  }
  function y(b) {
    let U = b;
    for (; U > 0 && us(e, U); ) U--;
    return U;
  }
  function F() {
    return t >= e.length || kn(e[t]) || us(e, t);
  }
  function S(b) {
    s += "".concat(e.slice(b, t), "0");
  }
  function K(b) {
    throw new _s("Invalid character ".concat(JSON.stringify(b)), t);
  }
  function le() {
    throw new _s("Unexpected character ".concat(JSON.stringify(e[t])), t);
  }
  function R() {
    throw new _s("Unexpected end of json string", e.length);
  }
  function Z() {
    throw new _s("Object key expected", t);
  }
  function B() {
    throw new _s("Colon expected", t);
  }
  function I() {
    let b = e.slice(t, t + 6);
    throw new _s('Invalid unicode character "'.concat(b, '"'), t);
  }
}
function ng(e, t) {
  return e[t] === "*" && e[t + 1] === "/";
}
function ig(e) {
  if (!e) return null;
  let t = e.trim();
  t = t.replace(/^```(?:json)?\s*\n?/i, "").replace(/\n?```\s*$/i, "");
  try {
    return JSON.parse(t);
  } catch {
  }
  try {
    const n = Dr(t);
    return JSON.parse(n);
  } catch {
  }
  const s = og(t);
  if (s)
    try {
      return JSON.parse(s);
    } catch {
      try {
        return JSON.parse(Dr(s));
      } catch {
      }
    }
  return H.warn("Failed to parse JSON after all repair attempts:", e.slice(0, 200)), null;
}
function og(e) {
  let t = 0, s = -1, n = !1, i = !1;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (i) {
      i = !1;
      continue;
    }
    if (r === "\\" && n) {
      i = !0;
      continue;
    }
    if (r === '"') {
      n = !n;
      continue;
    }
    if (!n) {
      if (r === "{")
        t === 0 && (s = o), t++;
      else if (r === "}" && (t--, t === 0 && s >= 0))
        return e.slice(s, o + 1);
    }
  }
  return null;
}
class rg {
  hasST() {
    return typeof SillyTavern < "u" && typeof SillyTavern.getContext == "function";
  }
  ctx() {
    return SillyTavern.getContext();
  }
  // ===== extensionSettings =====
  getSettings() {
    if (this.hasST())
      return this.ctx().extensionSettings[Ft] ?? null;
    const t = localStorage.getItem(this.settingsKey());
    if (t === null) return null;
    try {
      return JSON.parse(t);
    } catch {
      return H.warn("Failed to parse stored settings:", t), null;
    }
  }
  setSettings(t) {
    if (this.hasST()) {
      const s = this.ctx();
      s.extensionSettings[Ft] = t, s.saveSettingsDebounced();
      return;
    }
    localStorage.setItem(this.settingsKey(), JSON.stringify(t));
  }
  // ===== playlist data (separate key in extensionSettings) =====
  getPlaylistData() {
    if (this.hasST())
      return this.ctx().extensionSettings[`${Ft}-playlist`] ?? null;
    const t = localStorage.getItem(this.playlistKey());
    if (t === null) return null;
    try {
      return JSON.parse(t);
    } catch {
      return H.warn("Failed to parse stored playlist data:", t), null;
    }
  }
  setPlaylistData(t) {
    if (this.hasST()) {
      const s = this.ctx();
      s.extensionSettings[`${Ft}-playlist`] = t, s.saveSettingsDebounced();
      return;
    }
    localStorage.setItem(this.playlistKey(), JSON.stringify(t));
  }
  // ===== chatMetadata =====
  getMetadata(t) {
    return this.hasST() ? this.ctx().chatMetadata[t] ?? null : null;
  }
  setMetadata(t, s) {
    if (this.hasST()) {
      const n = this.ctx(), i = n.chatMetadata;
      i[t] = s, n.saveMetadata();
      return;
    }
  }
  // ----- key helpers -----
  settingsKey() {
    return `${Ft}__settings`;
  }
  playlistKey() {
    return `${Ft}__playlist`;
  }
}
function lg() {
  return new rg();
}
const Ft = "st-little-player", Ao = "stmp_bgm_history", Fr = 50;
function Pa() {
  const t = ge().storage;
  if (!t) return [];
  const s = t.getMetadata(Ao);
  return Array.isArray(s) ? s : [];
}
function To(e, t, s) {
  const n = Pa();
  n.push({ song: e, artist: t, messageId: s, playedAt: Date.now() }), n.length > Fr && n.splice(0, n.length - Fr);
  const o = ge().storage;
  o && o.setMetadata(Ao, n);
}
function Ma(e) {
  return Pa().slice(-5).reverse().map((s) => `${s.song}${s.artist ? " - " + s.artist : ""}`);
}
function Ea(e) {
  let t = e;
  try {
    const s = Re(), n = s.currentTrack?.name ?? "", i = s.currentTrack?.artist ?? "", o = String(s.isPlaying), r = String(!!s.currentTrack), l = Ma(5).join(", ");
    t = t.replace(/\{\{xiaoyueCurrentSong\}\}/gi, n).replace(/\{\{xiaoyueCurrentArtist\}\}/gi, i ? " - " + i : "").replace(/\{\{xiaoyueIsPlaying\}\}/gi, o).replace(/\{\{xiaoyueHasTrack\}\}/gi, r).replace(/\{\{xiaoyueRecentPlayed\}\}/gi, l);
  } catch {
  }
  return t;
}
const Wn = "<!--XY_BGM_START-->", oo = "<!--XY_BGM_END-->", ag = `You need to manage background music for a roleplay chat session. You have access to tools for searching and playing music.

## Tools

- search_music: Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.
- play_music: Play a song by its search result ID. The ID must come from a prior search_music call result.
- stop_music: Stop the currently playing track. Use only when the scene calls for silence.
- get_current_track: Get the currently playing track info. Use if you need to verify playback state.

## Workflow

1. Analyze the scene's atmosphere, mood, location, time, and emotion from the conversation.
2. If the current track fits, do nothing — return without calling any tool.
3. If a change is needed, call search_music with a specific song name you have in mind.
4. Review the search results. Call play_music with the best match — do not overthink it.
5. If the first search yields no usable result, try ONE more search with a different song name.
6. After the second search, you MUST either call play_music or return without action. Do not search a third time.

## Search Rules

- ALWAYS search with a specific song name (e.g. "River Flows in You", "Darkest Dungeon Theme", "Lemon"). NEVER use vague genre descriptions like "dark dungeon ambient orchestral" or "epic villain theme".
- Prefer songs with vocals over instrumental tracks. If the scene fits a vocal song, choose one.
- If the scene is from a game or anime, search for the actual soundtrack name.
- Chinese song names work for Chinese songs. English song names work for international tracks.

## When to Act

- No music is currently playing and a scene is underway. Select an opening track that fits the setting.
- The scene transitions to a new location, time, or emotional state and the current track no longer fits.
- The narrative introduces a significant mood shift (tension, romance, combat, calm, etc.).

## When NOT to Act

- The current track still fits the scene. Unnecessary changes break immersion.
- The mood has not meaningfully changed. Do not call tools on every message.
- You are uncertain whether a change is warranted — keep the current track.

## Guidelines

- You MUST use real, existing song titles that can be found on music streaming platforms. Never invent or guess song names.
- Prefer songs with vocals (songs with singing/lyrics) over pure instrumentals. Vocal tracks create stronger emotional immersion.
- Instrumental tracks, game OSTs, and film scores are acceptable only when no fitting vocal song exists.
- Song and artist names must be exact — a misspelled title cannot be found and will not play.
- Prefer songs in the language of the user's current conversation.
- Avoid repeating recently played songs.
- When uncertain whether to change, keep the current track.`, cg = "## Conversation", ug = "Analyze the above conversation and manage background music using the available tools.", Ia = `Background music control is needed for this roleplay session. After writing your narrative, append a BGM marker at the end of your response.

## Output Format (must follow strictly)

After your narrative, append exactly:
${Wn}
{"song":"song name","artist":"artist name","action":"play"}
${oo}

For "keep" (no change needed), omit song and artist:
${Wn}
{"action":"keep"}
${oo}

The marker will be automatically removed from the visible message. Users will not see it.

## When to Output "play"

- No music is currently playing and a scene is underway. Select an opening track that fits the setting.
- The scene transitions to a new location, time, or emotional state and the current track no longer fits.
- The narrative introduces a significant mood shift (tension, romance, combat, calm, etc.).

## When to Output "keep"

- The current track still fits the scene. Unnecessary changes break immersion.
- The mood has not meaningfully changed. Do not output a marker on every response.
- You are uncertain whether a change is warranted — keep the current track.

## Guidelines

- You MUST use real, existing song titles that can be found on music streaming platforms. Never invent or guess song names.
- Prefer songs with vocals (songs with singing/lyrics) over pure instrumentals. Vocal tracks create stronger emotional immersion.
- Instrumental tracks, game OSTs, and film scores are acceptable only when no fitting vocal song exists.
- Song and artist names must be exact — a misspelled title cannot be found and will not play.
- Prefer songs in the language of the user's current conversation.
- Avoid repeating recently played songs.

## Current State
- Now playing: {{xiaoyueCurrentSong}}{{xiaoyueCurrentArtist}}
- Is playing: {{xiaoyueIsPlaying}}
- Recently played: {{xiaoyueRecentPlayed}}`, dg = `Background music control is available for this roleplay session.

## Tools

- search_music: Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.
- play_music: Play a song by its search result ID. The ID must come from a prior search_music result.
- stop_music: Stop the currently playing music. Use only when the scene calls for silence.
- get_current_track: Get the currently playing track info.

## When to Act

- No music is currently playing and a scene is underway. Select an opening track that fits the setting.
- The scene transitions to a new location, time, or emotional state and the current track no longer fits.
- The narrative introduces a significant mood shift (tension, romance, combat, calm, etc.).

## When NOT to Act

- The current track still fits the scene. Unnecessary changes break immersion.
- The mood has not meaningfully changed. Do not call tools on every message.
- You are uncertain whether a change is warranted — keep the current track.

## Guidelines

- You MUST use real, existing song titles that can be found on music streaming platforms. Never invent or guess song names.
- Prefer songs with vocals (songs with singing/lyrics) over pure instrumentals. Vocal tracks create stronger emotional immersion.
- Instrumental tracks, game OSTs, and film scores are acceptable only when no fitting vocal song exists.
- Song and artist names must be exact — a misspelled title cannot be found and will not play.
- Prefer songs in the language of the user's current conversation.
- Avoid repeating recently played songs.

## Current State
- Now playing: {{xiaoyueCurrentSong}}{{xiaoyueCurrentArtist}}
- Is playing: {{xiaoyueIsPlaying}}
- Recently played: {{xiaoyueRecentPlayed}}`, zn = "search_music", Ra = "Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.", $a = "Search keyword — song name, artist name, or both.", qn = "play_music", Oa = "Play a song by its search result ID. The ID must come from a prior search_music result. Returns playback status.", La = "The ID from a search_music result entry.", Gn = "stop_music", Na = "Stop the currently playing music. Use only when the scene explicitly calls for silence.", Kn = "get_current_track", Da = "Get information about the currently playing track, including song name, artist, and playback status.", fg = "播放音乐", pg = "播放音乐: {song}{artist}", hg = "停止音乐", gg = "停止音乐", Fa = (e) => e.length === 0 ? "No results found. Try different keywords." : JSON.stringify(e.map((t) => ({
  id: t.id,
  name: t.name,
  artist: t.artist,
  ...t.duration ? { duration: t.duration } : {}
}))), Ua = "Missing required parameter: keyword", Ba = 'No results found for: "{keyword}". Try different keywords.', Ha = "Missing required parameter: result_id", Va = 'Invalid result_id: "{id}". This ID does not match any prior search result. Call search_music first.', ja = "Now playing: {name}{artist}", Wa = "Music stopped.", za = "No music is currently playing.", qa = (e, t, s) => JSON.stringify({ song: e, artist: t, is_playing: s }), Ga = "No track is currently loaded.";
function mg() {
  return ag;
}
function yg(e) {
  const t = [];
  return t.push(cg), t.push(e), t.push(""), t.push(ug), t.join(`
`);
}
function vg(e, t) {
  return Ea(e && t ? t : Ia);
}
function _g() {
  return Ea(dg);
}
const bg = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;
class wg {
  constructor() {
    this.interceptor = null, this.onGenerationEndedBound = (t) => {
      this.onGenerationEnded(t);
    };
  }
  init() {
    this.interceptor = (s, n, i, o) => {
      const l = SillyTavern.getContext().extensionSettings["st-little-player"];
      if (!l || l.aiMode !== "together") return;
      const a = ge(), c = vg(
        a.settings.togetherCustomPromptEnabled,
        a.settings.togetherCustomPrompt
      ), p = (l.togetherPromptRole || "system") === "system";
      s.splice(Math.max(0, s.length - 1), 0, {
        is_user: !p,
        is_system: p,
        name: "晓乐",
        mes: c,
        extra: { isSmallSys: p }
      });
    }, globalThis.xiaoyueInterceptor = this.interceptor;
    const t = SillyTavern.getContext();
    t.eventSource.on(t.event_types.GENERATION_ENDED, this.onGenerationEndedBound), H.info("Together mode initialized");
  }
  destroy() {
    H.info("Together mode destroyed");
    const t = SillyTavern.getContext();
    t.eventSource.removeListener(t.event_types.GENERATION_ENDED, this.onGenerationEndedBound), delete globalThis.xiaoyueInterceptor, this.interceptor = null;
  }
  async onGenerationEnded(t) {
    try {
      const s = SillyTavern.getContext(), n = t > 0 ? t - 1 : 0, i = s.chat[n];
      if (!i) {
        H.warn("Together: GENERATION_ENDED but message not found", { messageId: t, actualId: n, chatLen: s.chat.length });
        return;
      }
      const o = i.mes ?? "", r = o.indexOf(Wn);
      if (r === -1) return;
      H.debug("Together: marker found in message " + n);
      const l = o.indexOf(oo, r);
      if (l === -1) {
        H.warn("Together: MARKER_END not found, marker may be truncated");
        return;
      }
      const a = o.slice(r + Wn.length, l).trim();
      H.debug("Together: extracted marker content:", a);
      const c = ig(a);
      if (H.debug("Together: parsed recommendation:", c), !c) {
        this.cleanupMarker(n, i);
        return;
      }
      if (c.action === "keep") {
        H.debug("Together: action=keep, no change"), this.cleanupMarker(n, i);
        return;
      }
      if (c.action === "play" && c.song) {
        H.debug("Together: searching for: " + c.song, c.artist);
        const u = ge(), w = await Qt(u.settings).searchAll(c.artist ? `${c.song} ${c.artist}` : c.song);
        w.length > 0 ? (tt().addFromAi(w[0], !0), To(c.song, c.artist, n), H.debug("Together: playing: " + w[0].name + " - " + w[0].artist), typeof toastr < "u" && toastr.success(`${g("AI selected:")}：${c.song}`, "晓乐")) : (H.warn("Together: track not found: " + c.song), typeof toastr < "u" && toastr.warning(`${g("Cannot play")}：${c.song}`, "晓乐"));
      }
      this.cleanupMarker(n, i);
    } catch (s) {
      H.error("Together: onGenerationEnded error:", s);
    }
  }
  cleanupMarker(t, s) {
    s.mes = (s.mes ?? "").replace(bg, "").trim();
    const n = SillyTavern.getContext();
    if (typeof n.updateMessageBlock == "function")
      try {
        n.updateMessageBlock(t, s);
      } catch (i) {
        H.warn("Together: failed to update message block", i);
      }
  }
}
let Sn = null;
async function kg() {
  if (Sn) return Sn;
  try {
    const e = await Function("return import")()(
      /* @vite-ignore */
      "/scripts/extensions/regex/engine.js"
    );
    if (e?.getRegexedString && e?.regex_placement)
      return Sn = e, Sn;
  } catch {
  }
  return null;
}
const Sg = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;
function xg(e) {
  return e.replace(Sg, "").trim();
}
async function Cg(e) {
  try {
    const t = SillyTavern.getContext(), s = t.chat;
    if (!s || s.length === 0) return "";
    const n = await kg(), i = s.slice(-e), o = [];
    for (const r of i) {
      const l = r.is_user ? t.name1 : r.name || t.name2 || "Character";
      let a = r.mes ?? "";
      if (n) {
        const c = r.is_user ? n.regex_placement.USER_INPUT : n.regex_placement.AI_OUTPUT;
        try {
          a = n.getRegexedString(a, c, { isPrompt: !0 });
        } catch {
        }
      }
      a = xg(a), a.trim() && o.push(`${l}: ${a}`);
    }
    return o.join(`

`);
  } catch {
    return "";
  }
}
const Ur = 5, Ag = [
  {
    type: "function",
    function: {
      name: zn,
      description: Ra,
      parameters: {
        type: "object",
        properties: {
          keyword: { type: "string", description: $a }
        },
        required: ["keyword"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: qn,
      description: Oa,
      parameters: {
        type: "object",
        properties: {
          result_id: { type: "string", description: La }
        },
        required: ["result_id"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: Gn,
      description: Na,
      parameters: {
        type: "object",
        properties: {}
      }
    }
  },
  {
    type: "function",
    function: {
      name: Kn,
      description: Da,
      parameters: {
        type: "object",
        properties: {}
      }
    }
  }
];
class pi extends Error {
  constructor(t, s, n) {
    super(s), this.name = "AiApiError", this.kind = t, this.status = n?.status, this.endpoint = n?.endpoint, n?.cause !== void 0 && (this.cause = n.cause);
  }
}
function As(e, t) {
  return e instanceof pi && (t === void 0 || e.kind === t);
}
function Tg(e, t) {
  if (!(e instanceof TypeError)) return "unknown";
  try {
    const s = new URL(t);
    return typeof window < "u" && s.origin === window.location.origin ? "network" : "cors";
  } catch {
    return "network";
  }
}
async function Ka(e, t) {
  try {
    return await fetch(e, t);
  } catch (s) {
    const n = Tg(s, e);
    throw new pi(n, Pg(n, e), {
      endpoint: e,
      cause: s
    });
  }
}
function Pg(e, t) {
  switch (e) {
    case "cors":
      return `Endpoint blocked by CORS (browser cannot read response): ${t}`;
    case "network":
      return `Cannot reach endpoint (network error): ${t}`;
    case "http":
      return `Endpoint returned an HTTP error: ${t}`;
    case "unknown":
      return `Request to endpoint failed: ${t}`;
  }
}
async function Mg() {
  const e = ge().settings, t = e.aiApiUrl.replace(/\/$/, "") + "/models", s = await Ka(t, {
    method: "GET",
    headers: {
      ...e.aiApiKey ? { Authorization: `Bearer ${e.aiApiKey}` } : {}
    }
  });
  if (!s.ok) {
    const o = await s.text().catch(() => "");
    throw new pi("http", `${s.status} ${s.statusText}`.trim() + (o ? `: ${o.slice(0, 200)}` : ""), {
      status: s.status,
      endpoint: t
    });
  }
  return ((await s.json())?.data ?? []).map((o) => o.id).filter(Boolean).sort();
}
async function Eg(e) {
  const t = ge().settings, s = t.aiApiUrl.replace(/\/$/, "") + "/chat/completions", n = {
    model: t.aiModel,
    messages: e,
    max_tokens: 4096,
    stream: !1,
    temperature: 0.7,
    tools: Ag,
    tool_choice: "auto",
    thinking: { type: "disabled" }
  };
  H.debug("BGM API request:", { model: t.aiModel, messageCount: e.length });
  const i = await Ka(s, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...t.aiApiKey ? { Authorization: `Bearer ${t.aiApiKey}` } : {}
    },
    body: JSON.stringify(n)
  });
  if (!i.ok) {
    const l = await i.text().catch(() => "");
    throw H.warn("BGM API error: " + i.status, l), new pi("http", `${i.status} ${i.statusText}`.trim() + (l ? `: ${l.slice(0, 200)}` : ""), {
      status: i.status,
      endpoint: s
    });
  }
  const r = (await i.json())?.choices?.[0]?.message;
  return {
    content: r?.content ?? null,
    tool_calls: r?.tool_calls
  };
}
async function Ig(e, t, s) {
  switch (e) {
    case zn: {
      const n = t.keyword;
      if (!n) return Ua;
      const i = ge(), r = await Qt(i.settings).searchAll(n);
      if (r.length === 0)
        return Ba.replace("{keyword}", n);
      const l = r.slice(0, 5);
      for (const c of l)
        s.set(c.id, c);
      const a = Fa(
        l.map((c) => ({
          id: c.id,
          name: c.name,
          artist: c.artist,
          duration: c.duration
        }))
      );
      return H.debug("search_music results: " + l.length + " items for: " + n), a;
    }
    case qn: {
      const n = t.result_id;
      if (!n) return Ha;
      const i = s.get(n);
      return i ? (tt().addFromAi(i, !0), To(i.name, i.artist), typeof toastr < "u" && toastr.success(`${g("AI selected:")}：${i.name}`, "晓乐"), H.debug("play_music success: " + i.name + " - " + i.artist), ja.replace("{name}", i.name).replace("{artist}", i.artist ? " - " + i.artist : "")) : Va.replace("{id}", n);
    }
    case Gn: {
      const n = Re();
      return n.currentTrack ? (n.pause(), H.debug("stop_music success"), Wa) : za;
    }
    case Kn: {
      const n = Re();
      if (!n.currentTrack) return Ga;
      const i = qa(
        n.currentTrack.name,
        n.currentTrack.artist ?? null,
        n.isPlaying
      );
      return H.debug("get_current_track:", i), i;
    }
    default:
      return `Unknown tool: ${e}`;
  }
}
async function Rg(e, t) {
  const s = [
    { role: "system", content: e },
    { role: "user", content: t }
  ], n = /* @__PURE__ */ new Map();
  for (let i = 0; i < Ur; i++) {
    H.debug("BGM agent loop iteration " + (i + 1) + "/" + Ur);
    const o = await Eg(s), r = {
      role: "assistant",
      content: o.content,
      ...o.tool_calls ? { tool_calls: o.tool_calls } : {}
    };
    if (s.push(r), !o.tool_calls || o.tool_calls.length === 0) {
      H.debug("BGM agent loop ended — no tool calls"), o.content && H.debug("BGM agent final text:", o.content);
      return;
    }
    for (const l of o.tool_calls) {
      const a = l.function.name;
      let c = {};
      try {
        c = JSON.parse(l.function.arguments || "{}");
      } catch {
        H.warn("Failed to parse tool arguments:", l.function.arguments);
      }
      H.debug("Executing tool: " + a, c);
      const u = await Ig(a, c, n);
      H.debug("Tool result:", u), s.push({
        role: "tool",
        content: u,
        tool_call_id: l.id
      });
    }
  }
  H.warn("BGM agent loop reached max iterations");
}
const Br = "xiaoyue_fc", xn = /* @__PURE__ */ new Map();
class Hr {
  constructor() {
    this.isAnalyzing = !1, this.lastTriggerTime = 0, this.destroyed = !1, this.onGenerationStarted = () => {
      xn.clear();
    }, this.onCharacterMessageRendered = (t) => {
      const s = ge();
      if (!s.settings.aiAutoTrigger) return;
      const n = SillyTavern.getContext();
      (t <= 0 || n.chat.filter((o) => o.is_user).length === 0) && !s.settings.aiTriggerOnGreeting || this.triggerAgent(t);
    }, this.onMessageSwiped = (t) => {
      const s = ge();
      if (!s.settings.aiAutoTrigger) return;
      const n = Math.floor(s.settings.aiCooldownMs / 2);
      Date.now() - this.lastTriggerTime < n || this.triggerAgent(t, !0);
    };
  }
  init() {
    ge().settings.aiUseCustomApi ? this.initCustomApiPath() : this.initMainApiPath();
  }
  // ===== Main API path: register ST function tools =====
  initMainApiPath() {
    const t = SillyTavern.getContext();
    if (!t.isToolCallingSupported()) {
      H.warn("Function tool calling is not supported by the current API. Switch to custom API or use Together mode.");
      return;
    }
    t.eventSource.on(t.event_types.GENERATION_STARTED, this.onGenerationStarted);
    const s = () => {
      const i = ge();
      return i.settings.aiMode === "function_call" && !i.settings.aiUseCustomApi;
    };
    t.registerFunctionTool({
      name: zn,
      displayName: "搜索音乐",
      description: Ra,
      parameters: {
        type: "object",
        properties: {
          keyword: { type: "string", description: $a }
        },
        required: ["keyword"]
      },
      action: async ({ keyword: i }) => {
        if (!i) return Ua;
        const o = ge(), l = await Qt(o.settings).searchAll(i);
        if (l.length === 0)
          return Ba.replace("{keyword}", i);
        const a = l.slice(0, 5);
        for (const u of a)
          xn.set(u.id, u);
        const c = Fa(
          a.map((u) => ({
            id: u.id,
            name: u.name,
            artist: u.artist,
            duration: u.duration
          }))
        );
        return H.debug("search_music results: " + a.length + " items for: " + i), c;
      },
      formatMessage: ({ keyword: i }) => `搜索音乐: ${i ?? ""}`,
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: qn,
      displayName: fg,
      description: Oa,
      parameters: {
        type: "object",
        properties: {
          result_id: { type: "string", description: La }
        },
        required: ["result_id"]
      },
      action: async ({ result_id: i }) => {
        if (!i) return Ha;
        const o = xn.get(i);
        return o ? (tt().addFromAi(o, !0), To(o.name, o.artist), typeof toastr < "u" && toastr.success(`${g("AI selected:")}：${o.name}`, "晓乐"), H.debug("play_music success: " + o.name + " - " + o.artist), ja.replace("{name}", o.name).replace("{artist}", o.artist ? " - " + o.artist : "")) : Va.replace("{id}", i);
      },
      formatMessage: ({ result_id: i }) => pg.replace("{song}", i ?? "").replace("{artist}", ""),
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: Gn,
      displayName: hg,
      description: Na,
      parameters: {
        type: "object",
        properties: {}
      },
      action: async () => {
        const i = Re();
        return i.currentTrack ? (i.pause(), Wa) : za;
      },
      formatMessage: () => gg,
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: Kn,
      displayName: "当前播放",
      description: Da,
      parameters: {
        type: "object",
        properties: {}
      },
      action: async () => {
        const i = Re();
        return i.currentTrack ? qa(
          i.currentTrack.name,
          i.currentTrack.artist ?? null,
          i.isPlaying
        ) : Ga;
      },
      formatMessage: () => "获取当前播放",
      shouldRegister: s,
      stealth: !0
    });
    const n = _g();
    t.setExtensionPrompt(Br, n, 1, 0, !1, 0), H.info("Function Call (main API): 4 tools registered + aux prompt set");
  }
  // ===== Custom API path: event-driven agent loop =====
  initCustomApiPath() {
    const t = SillyTavern.getContext();
    t.eventSource.on(
      t.event_types.CHARACTER_MESSAGE_RENDERED,
      this.onCharacterMessageRendered
    ), t.eventSource.on(
      t.event_types.MESSAGE_SWIPED,
      this.onMessageSwiped
    ), H.info("Function Call (custom API): event listeners registered");
  }
  async manualTrigger() {
    if (this.destroyed || this.isAnalyzing) return;
    const s = SillyTavern.getContext().chat, n = s && s.length > 0 ? s.length - 1 : void 0;
    await this.triggerAgent(n, !0);
  }
  async triggerAgent(t, s = !1) {
    if (this.isAnalyzing) return;
    const n = ge();
    if (!(!s && Date.now() - this.lastTriggerTime < n.settings.aiCooldownMs || SillyTavern.getContext().generationInProgress)) {
      if (!n.settings.aiApiUrl || !n.settings.aiModel) {
        H.warn("Custom API path requires API URL + Model");
        return;
      }
      this.isAnalyzing = !0, this.lastTriggerTime = Date.now(), H.info("BGM agent loop started");
      try {
        const o = await Cg(n.settings.aiContextMessages), r = mg(), l = yg(o);
        await Rg(r, l);
      } catch (o) {
        if (H.error("AI agent loop failed:", o), typeof toastr < "u")
          if (As(o, "cors"))
            toastr.error(g("Endpoint CORS blocked (agent)"), "晓乐");
          else if (As(o, "network"))
            toastr.error(g("Endpoint unreachable"), "晓乐");
          else if (As(o, "http")) {
            const r = `${o.status ?? ""} ${o.message}`.trim();
            toastr.error(g("Endpoint HTTP error").replace("{detail}", r), "晓乐");
          } else
            toastr.error(g("AI recommendation failed"), "晓乐");
      } finally {
        this.isAnalyzing = !1;
      }
    }
  }
  destroy() {
    const t = ge(), s = t.settings.aiUseCustomApi ? "custom API" : "main API";
    H.info("Function Call destroyed: " + s), this.destroyed = !0;
    const n = SillyTavern.getContext();
    t.settings.aiUseCustomApi ? (n.eventSource.removeListener(
      n.event_types.CHARACTER_MESSAGE_RENDERED,
      this.onCharacterMessageRendered
    ), n.eventSource.removeListener(
      n.event_types.MESSAGE_SWIPED,
      this.onMessageSwiped
    )) : (n.eventSource.removeListener(n.event_types.GENERATION_STARTED, this.onGenerationStarted), n.unregisterFunctionTool(zn), n.unregisterFunctionTool(qn), n.unregisterFunctionTool(Gn), n.unregisterFunctionTool(Kn), n.setExtensionPrompt(Br, "", -1, 0), xn.clear());
  }
}
let ro = null;
class $g {
  constructor() {
    this.together = null, this.functionCall = null, this.currentMode = "off";
  }
  init() {
    this.applyMode(ge().settings.aiMode), ro = this, H.info("BGM controller initialized, mode: " + this.currentMode);
  }
  setMode(t) {
    t !== this.currentMode && (H.info("BGM mode changing to: " + t), this.destroyCurrent(), this.applyMode(t));
  }
  resetFunctionCall() {
    this.functionCall && (this.functionCall.destroy(), this.functionCall = new Hr(), this.functionCall.init());
  }
  applyMode(t) {
    this.currentMode = t;
    try {
      switch (t) {
        case "function_call":
          this.functionCall = new Hr(), this.functionCall.init();
          break;
        case "together":
          this.together = new wg(), this.together.init();
          break;
        case "off":
        default:
          break;
      }
    } catch (s) {
      H.error("BGM controller: failed to init mode " + t, s);
    }
  }
  destroyCurrent() {
    this.together && (this.together.destroy(), this.together = null), this.functionCall && (this.functionCall.destroy(), this.functionCall = null);
  }
  async manualTrigger() {
    this.functionCall && await this.functionCall.manualTrigger();
  }
  destroy() {
    H.info("BGM controller destroyed"), this.destroyCurrent(), this.currentMode = "off", ro = null;
  }
}
function In() {
  return ro;
}
const Og = {
  key: 0,
  class: "stmp-switch-label"
}, Lg = { class: "stmp-switch" }, Ng = ["checked", "disabled"], Dg = /* @__PURE__ */ Rt({
  __name: "ToggleSwitch",
  props: {
    modelValue: { type: Boolean },
    label: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, i = /* @__PURE__ */ me(null);
    function o() {
      const r = s.modelValue;
      n("update:modelValue", !r), Ge(() => {
        i.value && s.modelValue === r && i.value.checked !== r && (i.value.checked = r);
      });
    }
    return (r, l) => (A(), P("label", {
      class: he(["stmp-switch-row", { "stmp-switch-disabled": e.disabled }])
    }, [
      e.label ? (A(), P("span", Og, M(e.label), 1)) : we("", !0),
      d("span", Lg, [
        d("input", {
          ref_key: "inputRef",
          ref: i,
          type: "checkbox",
          checked: e.modelValue,
          disabled: e.disabled,
          onChange: o
        }, null, 40, Ng),
        l[0] || (l[0] = d("span", { class: "stmp-switch-track" }, [
          d("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ], 2));
  }
}), St = /* @__PURE__ */ $t(Dg, [["__scopeId", "data-v-529649ca"]]), Fg = ["value", "placeholder", "readonly"], Ug = ["onMousedown", "onMouseenter"], Bg = /* @__PURE__ */ Rt({
  __name: "ComboBox",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, i = /* @__PURE__ */ me(null), o = /* @__PURE__ */ me(null), r = /* @__PURE__ */ me(!1), l = /* @__PURE__ */ me(-1), a = /* @__PURE__ */ me({}), c = _e(() => s.options), u = _e(() => s.options.length > 0);
    function p() {
      const v = o.value;
      if (!v) return;
      const x = v.getBoundingClientRect();
      a.value = {
        position: "fixed",
        left: `${x.left}px`,
        top: `${x.bottom + 2}px`,
        width: `${x.width}px`,
        zIndex: "10000"
      };
    }
    function w() {
      s.options.length !== 0 && (r.value = !0, l.value = -1, Ge(p));
    }
    function k() {
      r.value = !1, l.value = -1;
    }
    function E() {
      r.value ? k() : w();
    }
    function T(v) {
      n("update:modelValue", v), k();
    }
    function G(v) {
      n("update:modelValue", v.target.value), !r.value && s.options.length > 0 && (r.value = !0), l.value = -1, Ge(p);
    }
    function Y(v) {
      if (!r.value) return;
      const x = c.value;
      v.key === "ArrowDown" ? (v.preventDefault(), l.value = Math.min(l.value + 1, x.length - 1)) : v.key === "ArrowUp" ? (v.preventDefault(), l.value = Math.max(l.value - 1, 0)) : v.key === "Enter" ? l.value >= 0 && l.value < x.length ? (v.preventDefault(), T(x[l.value])) : k() : v.key === "Escape" && (v.preventDefault(), k());
    }
    function V(v) {
      const x = v.target;
      i.value?.contains(x) || document.getElementById("stmp-combobox-dropdown")?.contains(x) || k();
    }
    function X() {
      r.value && k();
    }
    function _() {
      r.value && Ge(p);
    }
    return Es(() => {
      document.addEventListener("mousedown", V, !0), window.addEventListener("scroll", X, !0), window.addEventListener("resize", _);
    }), pn(() => {
      document.removeEventListener("mousedown", V, !0), window.removeEventListener("scroll", X, !0), window.removeEventListener("resize", _);
    }), Ue(() => s.modelValue, (v) => {
      o.value && o.value.value !== v && (o.value.value = v);
    }), (v, x) => (A(), P("div", {
      ref_key: "rootRef",
      ref: i,
      class: he(["stmp-combobox", { "has-options": e.options.length > 0 }])
    }, [
      d("input", {
        ref_key: "inputRef",
        ref: o,
        class: "text_pole",
        type: "text",
        value: e.modelValue,
        placeholder: e.placeholder,
        readonly: u.value,
        autocomplete: "off",
        onFocus: w,
        onInput: G,
        onKeydown: Y
      }, null, 40, Fg),
      e.options.length > 0 ? (A(), P("i", {
        key: 0,
        class: he(["fa-solid fa-chevron-down stmp-combobox-arrow", { rotated: r.value }]),
        onMousedown: ct(E, ["prevent"])
      }, null, 34)) : we("", !0),
      (A(), yt(Cl, { to: "body" }, [
        r.value && c.value.length > 0 ? (A(), P("div", {
          key: 0,
          id: "stmp-combobox-dropdown",
          class: "stmp-combobox-dropdown",
          style: Jt(a.value)
        }, [
          (A(!0), P(oe, null, Ve(c.value, (y, F) => (A(), P("div", {
            key: y,
            class: he(["stmp-combobox-option", { active: F === l.value }]),
            onMousedown: ct((S) => T(y), ["prevent"]),
            onMouseenter: (S) => l.value = F
          }, M(y), 43, Ug))), 128))
        ], 4)) : we("", !0)
      ]))
    ], 2));
  }
}), Hg = /* @__PURE__ */ $t(Bg, [["__scopeId", "data-v-804fa027"]]), Vg = { class: "stmp-settings" }, jg = { class: "stmp-tab-bar" }, Wg = ["onClick"], zg = { class: "stmp-tab-content" }, qg = { class: "stmp-tab-panel" }, Gg = { class: "stmp-row" }, Kg = { class: "stmp-row-info" }, Yg = { class: "stmp-row-title" }, Jg = { class: "stmp-row-desc" }, Xg = { class: "stmp-chips" }, Qg = ["onClick"], Zg = {
  key: 0,
  class: "stmp-row"
}, em = { class: "stmp-row-info" }, tm = { class: "stmp-row-title" }, sm = { class: "stmp-row-desc" }, nm = { class: "stmp-chips" }, im = ["onClick"], om = {
  key: 1,
  class: "stmp-row"
}, rm = { class: "stmp-row-info" }, lm = { class: "stmp-row-title" }, am = { class: "stmp-row-desc" }, cm = {
  key: 2,
  class: "stmp-row"
}, um = { class: "stmp-row-info" }, dm = { class: "stmp-row-title" }, fm = { class: "stmp-row-desc" }, pm = {
  key: 3,
  class: "stmp-row"
}, hm = { class: "stmp-row-info" }, gm = { class: "stmp-row-title" }, mm = { class: "stmp-slider-wrap" }, ym = ["value"], vm = { class: "stmp-slider-val" }, _m = { class: "stmp-tab-panel" }, bm = { class: "stmp-section-header" }, wm = { class: "stmp-section-title" }, km = { class: "stmp-row" }, Sm = { class: "stmp-row-info" }, xm = { class: "stmp-row-title" }, Cm = { class: "stmp-slider-wrap" }, Am = ["value"], Tm = { class: "stmp-slider-val" }, Pm = { class: "stmp-row" }, Mm = { class: "stmp-row-info" }, Em = { class: "stmp-row-title" }, Im = { class: "stmp-chips" }, Rm = ["onClick"], $m = { class: "stmp-row" }, Om = { class: "stmp-row-info" }, Lm = { class: "stmp-row-title" }, Nm = { class: "stmp-row-desc" }, Dm = { class: "stmp-section-header" }, Fm = { class: "stmp-section-title" }, Um = { class: "stmp-row" }, Bm = { class: "stmp-row-info" }, Hm = { class: "stmp-row-title" }, Vm = { class: "stmp-row-desc" }, jm = { class: "stmp-chips" }, Wm = ["onClick"], zm = {
  key: 0,
  class: "stmp-row"
}, qm = { class: "stmp-row-info" }, Gm = { class: "stmp-row-title" }, Km = { class: "stmp-row-desc" }, Ym = ["value", "placeholder"], Jm = { class: "stmp-row" }, Xm = { class: "stmp-row-info" }, Qm = { class: "stmp-row-title" }, Zm = ["title"], ey = { class: "stmp-row-desc" }, ty = { class: "stmp-model-wrap" }, sy = ["value", "placeholder"], ny = { class: "stmp-row" }, iy = { class: "stmp-row-info" }, oy = { class: "stmp-row-title" }, ry = { class: "stmp-row-desc" }, ly = { class: "stmp-tab-panel" }, ay = { class: "stmp-row" }, cy = { class: "stmp-row-info" }, uy = { class: "stmp-row-title" }, dy = { class: "stmp-row-desc" }, fy = { class: "stmp-row" }, py = { class: "stmp-row-info" }, hy = { class: "stmp-row-title" }, gy = { class: "stmp-row-desc" }, my = { class: "stmp-chips" }, yy = ["onClick"], vy = { class: "stmp-row" }, _y = { class: "stmp-row-info" }, by = { class: "stmp-row-title" }, wy = { class: "stmp-row-desc" }, ky = { class: "stmp-row" }, Sy = { class: "stmp-row-info" }, xy = { class: "stmp-row-title" }, Cy = { class: "stmp-row-desc" }, Ay = ["value"], Ty = { class: "stmp-row" }, Py = { class: "stmp-row-info" }, My = { class: "stmp-row-title" }, Ey = { class: "stmp-row-desc" }, Iy = ["value"], Ry = { class: "stmp-row" }, $y = { class: "stmp-row-info" }, Oy = { class: "stmp-row-title" }, Ly = { class: "stmp-row-desc" }, Ny = { class: "stmp-model-wrap" }, Dy = ["title"], Fy = { class: "stmp-row" }, Uy = { class: "stmp-row-info" }, By = { class: "stmp-row-title" }, Hy = { class: "stmp-row-desc" }, Vy = { class: "stmp-slider-wrap" }, jy = ["value"], Wy = { class: "stmp-slider-val" }, zy = { class: "stmp-row" }, qy = { class: "stmp-row-info" }, Gy = { class: "stmp-row-title" }, Ky = { class: "stmp-row-desc" }, Yy = {
  key: 0,
  class: "stmp-row"
}, Jy = { class: "stmp-row-info" }, Xy = { class: "stmp-row-title" }, Qy = { class: "stmp-row-desc" }, Zy = { class: "stmp-row" }, ev = { class: "stmp-row-info" }, tv = { class: "stmp-row-title" }, sv = { class: "stmp-row-desc" }, nv = { class: "stmp-chips" }, iv = ["onClick"], ov = { class: "stmp-row" }, rv = { class: "stmp-row-info" }, lv = { class: "stmp-row-title" }, av = { class: "stmp-row-desc" }, cv = {
  key: 0,
  class: "stmp-row"
}, uv = { class: "stmp-row-info" }, dv = { class: "stmp-row-title" }, fv = { class: "stmp-row-desc" }, pv = ["title"], hv = { class: "stmp-tab-panel" }, gv = { class: "stmp-row" }, mv = { class: "stmp-row-info" }, yv = { class: "stmp-row-title" }, vv = { class: "stmp-row-desc" }, _v = { class: "stmp-row" }, bv = { class: "stmp-row-info" }, wv = { class: "stmp-row-title" }, kv = { class: "stmp-row-desc" }, Sv = { class: "stmp-row" }, xv = { class: "stmp-row-info" }, Cv = { class: "stmp-row-title" }, Av = { class: "stmp-row-desc" }, Tv = { class: "stmp-about" }, Pv = { class: "stmp-about-version" }, Mv = { class: "stmp-about-desc" }, Ev = "https://github.com/vvb7456/ST-little-player", Iv = /* @__PURE__ */ Rt({
  __name: "SettingsView",
  setup(e) {
    const t = ge(), s = /* @__PURE__ */ me("appearance"), n = [
      { id: "appearance", label: g("Appearance"), icon: "fa-solid fa-palette" },
      { id: "playback", label: g("Playback"), icon: "fa-solid fa-music" },
      { id: "ai", label: g("AI"), icon: "fa-solid fa-wand-magic-sparkles" },
      { id: "general", label: g("General"), icon: "fa-solid fa-sliders" }
    ], i = [
      { value: "dock", label: g("Dock"), icon: "fa-solid fa-grip-lines" },
      { value: "drag", label: g("Drag"), icon: "fa-solid fa-up-down-left-right" },
      { value: "inline", label: g("Inline"), icon: "fa-solid fa-puzzle-piece" },
      { value: "hidden", label: g("Hidden"), icon: "fa-solid fa-eye-slash" }
    ], o = [
      { value: "top-left", label: g("Top Left"), icon: "fa-solid fa-arrow-up-from-left" },
      { value: "top-right", label: g("Top Right"), icon: "fa-solid fa-arrow-up-from-right" },
      { value: "bottom-left", label: g("Bottom Left"), icon: "fa-solid fa-arrow-down-from-left" },
      { value: "bottom-right", label: g("Bottom Right"), icon: "fa-solid fa-arrow-down-from-right" }
    ], r = () => t.settings.widgetMode === "dock" || t.settings.widgetMode === "drag";
    function l(B) {
      const I = B.target;
      t.setOpacity(Number(I.value));
    }
    const a = [
      { value: "list", label: g("List Loop"), icon: "fa-solid fa-repeat" },
      { value: "random", label: g("Random"), icon: "fa-solid fa-shuffle" },
      { value: "single", label: g("Single Loop"), icon: "fa-solid fa-repeat" }
    ];
    function c(B) {
      const I = B.target;
      t.setVolume(Number(I.value));
    }
    const u = [
      { value: "worker", label: g("Official Worker") },
      { value: "self", label: g("Self-hosted") }
    ], p = [
      { value: "together", label: g("Together"), icon: "fa-solid fa-link" },
      { value: "function_call", label: g("Function Call"), icon: "fa-solid fa-screwdriver-wrench" }
    ];
    function w(B) {
      t.setAiMode(B), In()?.setMode(B);
    }
    function k(B) {
      t.setAiUseCustomApi(B), In()?.resetFunctionCall();
    }
    function E(B) {
      const I = B ? "function_call" : "off";
      t.setAiMode(I), In()?.setMode(I);
    }
    function T(B) {
      const I = B.target;
      t.setAiContextMessages(Number(I.value));
    }
    const G = /* @__PURE__ */ me([]), Y = /* @__PURE__ */ me(!1);
    async function V() {
      if (Y.value) return;
      if (!t.settings.aiApiUrl) {
        typeof toastr < "u" && toastr.warning(g("Please fill API URL"), "晓乐");
        return;
      }
      Y.value = !0;
      try {
        const I = await Mg();
        G.value = I, I.length === 0 ? typeof toastr < "u" && toastr.info(g("No models returned"), "晓乐") : typeof toastr < "u" && toastr.success(`${g("models found")} ${I.length} 个模型`, "晓乐");
      } catch (I) {
        if (H.error("Failed to fetch models:", I), typeof toastr < "u")
          if (As(I, "cors"))
            toastr.error(g("Endpoint CORS blocked"), "晓乐");
          else if (As(I, "network"))
            toastr.error(g("Endpoint unreachable"), "晓乐");
          else if (As(I, "http")) {
            const b = `${I.status ?? ""} ${I.message}`.trim();
            toastr.error(g("Endpoint HTTP error").replace("{detail}", b), "晓乐");
          } else
            toastr.error(g("Failed to fetch models"), "晓乐");
      } finally {
        Y.value = !1;
      }
    }
    function X() {
      const B = t.settings.providers.find((I) => I.id === "local");
      if (B) {
        if (!B.enabled) {
          const I = SillyTavern.getContext();
          if (I?.callGenericPopup && I?.POPUP_TYPE) {
            I.callGenericPopup(
              g("Upload warning text"),
              I.POPUP_TYPE.CONFIRM,
              "",
              { okButton: g("Confirm"), cancelButton: g("Cancel") }
            ).then((b) => {
              b === 1 && (B.enabled = !0, t.save(), typeof toastr < "u" && toastr.info(g("Source enabled"), "晓乐"));
            });
            return;
          }
        }
        B.enabled = !B.enabled, t.save(), typeof toastr < "u" && toastr.info(B.enabled ? g("Source enabled") : g("Source disabled"), "晓乐");
      }
    }
    const _ = /* @__PURE__ */ me(!1), v = _e(() => {
      const B = t.neteaseStatus;
      return B === "no-cookie" ? { icon: "fa-solid fa-link", ok: !1, warn: !1 } : B === "expired" ? { icon: "fa-solid fa-triangle-exclamation", ok: !1, warn: !0 } : B === "invalid" ? { icon: "fa-solid fa-triangle-exclamation", ok: !1, warn: !0 } : { icon: "fa-solid fa-circle-check", ok: !0, warn: !1 };
    }), x = _e(() => !!t.settings.neteaseCookie);
    async function y() {
      if (_.value) return;
      const B = t.settings.neteaseCookie.trim();
      if (!B) {
        typeof toastr < "u" && toastr.warning(g("Cookie invalid or expired"), "晓乐");
        return;
      }
      _.value = !0;
      try {
        const I = t.settings.neteaseMode === "worker" ? Sa : t.settings.neteaseWorkerURL;
        if (!I) {
          typeof toastr < "u" && toastr.warning(g("Worker URL"), "晓乐");
          return;
        }
        const U = await (await fetch(`${I}/auth`, {
          headers: { "X-Netease-Cookie": B }
        })).json();
        U?.success && U?.data?.valid ? (t.setNeteaseCookie(B), typeof toastr < "u" && toastr.success(g("Cookie valid"), "晓乐")) : (t.setNeteaseCookieInvalid(), typeof toastr < "u" && toastr.error(g("Cookie invalid or expired"), "晓乐"));
      } catch (I) {
        H.error("NetEase cookie verify failed:", I), typeof toastr < "u" && toastr.error(g("Cannot reach Worker"), "晓乐");
      } finally {
        _.value = !1;
      }
    }
    function F(B) {
      const I = B.target.value.trim();
      t.setNeteaseCookie(I);
    }
    const S = ["aiApiUrl", "aiApiKey", "aiModel", "neteaseCookie", "neteaseCookieAt", "neteaseCookieValid"], K = () => {
      const B = {};
      for (const [z, ce] of Object.entries(t.settings))
        S.includes(z) || (B[z] = ce);
      const I = new Blob([JSON.stringify(B, null, 2)], { type: "application/json" }), b = URL.createObjectURL(I), U = document.createElement("a");
      U.href = b, U.download = "st-little-player-settings.json", U.click(), URL.revokeObjectURL(b), typeof toastr < "u" && toastr.success(g("Settings exported"), "晓乐");
    }, le = () => {
      const B = document.createElement("input");
      B.type = "file", B.accept = ".json", B.onchange = async (I) => {
        const b = I.target.files?.[0];
        if (!b) return;
        const U = await b.text();
        try {
          const z = JSON.parse(U);
          if (typeof z != "object" || z === null) throw new Error("Not an object");
          const ce = ["volume", "playMode", "crossfade", "position", "widgetMode", "dockAlign", "showDragMiniText", "providers", "customOpacity", "opacity", "aiMode", "aiUseCustomApi", "aiContextMessages", "aiAutoTrigger", "aiTriggerOnGreeting", "aiCooldownMs", "togetherPromptRole", "togetherCustomPromptEnabled", "togetherCustomPrompt", "debug", "neteaseMode", "neteaseWorkerURL"], te = {};
          for (const fe of ce)
            fe in z && (te[fe] = z[fe]);
          if (typeof te.volume != "number" || te.volume < 0 || te.volume > 100)
            throw new Error("Invalid volume");
          if (typeof te.playMode != "string" || !["list", "random", "single"].includes(te.playMode))
            throw new Error("Invalid playMode");
          if (te.providers && !Array.isArray(te.providers))
            throw new Error("Invalid providers");
          Object.assign(t.settings, te), t.save(), typeof toastr < "u" && toastr.success(g("Settings imported"), "晓乐");
        } catch (z) {
          H.error("Settings import failed:", z), typeof toastr < "u" && toastr.error(`${g("Import failed")}：${z instanceof Error ? z.message : g("Invalid JSON")}`, "晓乐");
        }
      }, B.click();
    }, R = "0.3.0-beta";
    async function Z() {
      const B = SillyTavern.getContext(), I = t.settings.togetherCustomPrompt || Ia, b = ["{{xiaoyueCurrentSong}}", "{{xiaoyueCurrentArtist}}", "{{xiaoyueIsPlaying}}", "{{xiaoyueHasTrack}}", "{{xiaoyueRecentPlayed}}"], U = `<div style="margin-bottom:6px;font-size:0.85em;opacity:0.8">${g("The prompt must contain the markers")} <code class="stmp-macro-hint">&lt;!--XY_BGM_START--&gt;</code> / <code class="stmp-macro-hint">&lt;!--XY_BGM_END--&gt;</code> ${g("for BGM control to work.")}</div>`, z = b.map((de) => `<code class="stmp-macro-hint">${de}</code>`).join(" "), ce = `<div style="margin-bottom:8px;font-size:0.85em;opacity:0.7">${g("Available macros:")} ${z}</div>`, te = U + ce;
      $("#dialogue_popup_cancel").css("display", "flex"), $("#dialogue_popup_controls .menu_button").css("width", "unset");
      const fe = await B.callPopup(te, "input", I, { wide: !0, rows: 20, okButton: g("Save") });
      fe !== !1 && t.setTogetherCustomPrompt(String(fe).trim());
    }
    return (B, I) => (A(), P("div", Vg, [
      d("div", jg, [
        (A(), P(oe, null, Ve(n, (b) => d("div", {
          key: b.id,
          class: he(["stmp-tab", { active: s.value === b.id }]),
          onClick: (U) => s.value = b.id
        }, [
          d("i", {
            class: he(b.icon)
          }, null, 2),
          d("span", null, M(b.label), 1)
        ], 10, Wg)), 64))
      ]),
      d("div", zg, [
        ds(d("div", qg, [
          d("div", Gg, [
            d("div", Kg, [
              d("div", Yg, M(h(g)("Widget Mode")), 1),
              d("div", Jg, M(h(g)("Choose how the player widget is displayed")), 1)
            ]),
            d("div", Xg, [
              (A(), P(oe, null, Ve(i, (b) => d("div", {
                key: b.value,
                class: he(["stmp-chip", { active: h(t).settings.widgetMode === b.value }]),
                onClick: (U) => h(t).setWidgetMode(b.value)
              }, [
                d("i", {
                  class: he(b.icon)
                }, null, 2),
                d("span", null, M(b.label), 1)
              ], 10, Qg)), 64))
            ])
          ]),
          h(t).settings.widgetMode === "dock" ? (A(), P("div", Zg, [
            d("div", em, [
              d("div", tm, M(h(g)("Dock Alignment")), 1),
              d("div", sm, M(h(g)("Align the docked player to a corner of the screen")), 1)
            ]),
            d("div", nm, [
              (A(), P(oe, null, Ve(o, (b) => d("div", {
                key: b.value,
                class: he(["stmp-chip", { active: h(t).settings.dockAlign === b.value }]),
                onClick: (U) => h(t).setDockAlign(b.value)
              }, [
                d("i", {
                  class: he(b.icon)
                }, null, 2),
                d("span", null, M(b.label), 1)
              ], 10, im)), 64))
            ])
          ])) : we("", !0),
          h(t).settings.widgetMode === "drag" ? (A(), P("div", om, [
            d("div", rm, [
              d("div", lm, M(h(g)("Show track info in drag mini")), 1),
              d("div", am, M(h(g)("Show song title and lyrics in the compact drag widget")), 1)
            ]),
            ee(St, {
              "model-value": h(t).settings.showDragMiniText,
              "onUpdate:modelValue": h(t).setShowDragMiniText
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])) : we("", !0),
          r() ? (A(), P("div", cm, [
            d("div", um, [
              d("div", dm, M(h(g)("Custom opacity")), 1),
              d("div", fm, M(h(g)("Adjust the player background opacity")), 1)
            ]),
            ee(St, {
              "model-value": h(t).settings.customOpacity,
              "onUpdate:modelValue": h(t).setCustomOpacity
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])) : we("", !0),
          h(t).settings.customOpacity ? (A(), P("div", pm, [
            d("div", hm, [
              d("div", gm, M(h(g)("Opacity")), 1)
            ]),
            d("div", mm, [
              d("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: h(t).settings.opacity,
                onInput: l
              }, null, 40, ym),
              d("span", vm, M(h(t).settings.opacity) + "%", 1)
            ])
          ])) : we("", !0)
        ], 512), [
          [ks, s.value === "appearance"]
        ]),
        ds(d("div", _m, [
          d("div", bm, [
            d("div", wm, M(h(g)("Playback Settings")), 1)
          ]),
          d("div", km, [
            d("div", Sm, [
              d("div", xm, M(h(g)("Default Volume")), 1)
            ]),
            d("div", Cm, [
              d("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: h(t).settings.volume,
                onInput: c
              }, null, 40, Am),
              d("span", Tm, M(h(t).settings.volume), 1)
            ])
          ]),
          d("div", Pm, [
            d("div", Mm, [
              d("div", Em, M(h(g)("Default Play Mode")), 1)
            ]),
            d("div", Im, [
              (A(), P(oe, null, Ve(a, (b) => d("div", {
                key: b.value,
                class: he(["stmp-chip", { active: h(t).settings.playMode === b.value }]),
                onClick: (U) => h(t).setPlayMode(b.value)
              }, [
                d("i", {
                  class: he(b.icon)
                }, null, 2),
                d("span", null, M(b.label), 1)
              ], 10, Rm)), 64))
            ])
          ]),
          d("div", $m, [
            d("div", Om, [
              d("div", Lm, M(h(g)("Crossfade")), 1),
              d("div", Nm, M(h(g)("Smoothly fade in when starting playback and fade out when pausing or switching tracks")), 1)
            ]),
            ee(St, {
              "model-value": h(t).settings.crossfade,
              "onUpdate:modelValue": h(t).setCrossfade
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ]),
          d("div", Dm, [
            d("div", Fm, M(h(g)("Data Sources")), 1)
          ]),
          d("div", Um, [
            d("div", Bm, [
              d("div", Hm, M(h(g)("NetEase Music")), 1),
              d("div", Vm, M(h(g)("Select official or self-hosted Worker")), 1)
            ]),
            d("div", jm, [
              (A(), P(oe, null, Ve(u, (b) => d("div", {
                key: b.value,
                class: he(["stmp-chip", { active: h(t).settings.neteaseMode === b.value }]),
                onClick: (U) => h(t).setNeteaseMode(b.value)
              }, [
                d("span", null, M(b.label), 1)
              ], 10, Wm)), 64))
            ])
          ]),
          h(t).settings.neteaseMode === "self" ? (A(), P("div", zm, [
            d("div", qm, [
              d("div", Gm, M(h(g)("Worker URL")), 1),
              d("div", Km, M(h(g)("Your Cloudflare Worker deployment URL")), 1)
            ]),
            d("input", {
              class: "text_pole stmp-text-input",
              value: h(t).settings.neteaseWorkerURL,
              placeholder: h(g)("Worker URL"),
              onChange: I[0] || (I[0] = (b) => h(t).setNeteaseWorkerURL(b.target.value))
            }, null, 40, Ym)
          ])) : we("", !0),
          d("div", Jm, [
            d("div", Xm, [
              d("div", Qm, [
                fs(M(h(g)("MUSIC_U Cookie")) + " ", 1),
                d("i", {
                  class: "fa-solid fa-circle-info stmp-help-tip",
                  title: h(g)("Cookie privacy hint")
                }, null, 8, Zm)
              ]),
              d("div", ey, M(h(g)("Paste cookie from music.163.com")), 1)
            ]),
            d("div", ty, [
              d("input", {
                type: "password",
                class: "text_pole",
                value: h(t).settings.neteaseCookie,
                placeholder: x.value ? "••••••••" : h(g)("Paste MUSIC_U cookie value here"),
                onChange: F
              }, null, 40, sy),
              d("div", {
                class: he(["menu_button menu_button_icon stmp-action-btn", { "stmp-spin": _.value, "stmp-verify-ok": v.value.ok, "stmp-verify-warn": v.value.warn }]),
                onClick: y
              }, [
                d("i", {
                  class: he(v.value.icon)
                }, null, 2)
              ], 2)
            ])
          ]),
          d("div", ny, [
            d("div", iy, [
              d("div", oy, M(h(g)("Upload")), 1),
              d("div", ry, M(h(g)("Upload and play songs from the server")), 1)
            ]),
            ee(St, {
              "model-value": !!h(t).settings.providers.find((b) => b.id === "local")?.enabled,
              "onUpdate:modelValue": X
            }, null, 8, ["model-value"])
          ])
        ], 512), [
          [ks, s.value === "playback"]
        ]),
        ds(d("div", ly, [
          d("div", ay, [
            d("div", cy, [
              d("div", uy, M(h(g)("AI BGM")), 1),
              d("div", dy, M(h(g)("Enable AI-driven background music selection")), 1)
            ]),
            ee(St, {
              "model-value": h(t).settings.aiMode !== "off",
              "onUpdate:modelValue": I[1] || (I[1] = (b) => E(b))
            }, null, 8, ["model-value"])
          ]),
          h(t).settings.aiMode !== "off" ? (A(), P(oe, { key: 0 }, [
            d("div", fy, [
              d("div", py, [
                d("div", hy, M(h(g)("AI Mode")), 1),
                d("div", gy, M(h(g)("Choose how AI selects background music")), 1)
              ]),
              d("div", my, [
                (A(), P(oe, null, Ve(p, (b) => d("div", {
                  key: b.value,
                  class: he(["stmp-chip", { active: h(t).settings.aiMode === b.value }]),
                  onClick: (U) => w(b.value)
                }, [
                  d("i", {
                    class: he(b.icon)
                  }, null, 2),
                  d("span", null, M(b.label), 1)
                ], 10, yy)), 64))
              ])
            ]),
            h(t).settings.aiMode === "function_call" ? (A(), P(oe, { key: 0 }, [
              d("div", vy, [
                d("div", _y, [
                  d("div", by, M(h(g)("Custom API")), 1),
                  d("div", wy, M(h(g)("Use a separate API endpoint for BGM agent loop instead of main API function calling")), 1)
                ]),
                ee(St, {
                  "model-value": h(t).settings.aiUseCustomApi,
                  "onUpdate:modelValue": k
                }, null, 8, ["model-value"])
              ]),
              h(t).settings.aiUseCustomApi ? (A(), P(oe, { key: 0 }, [
                d("div", ky, [
                  d("div", Sy, [
                    d("div", xy, M(h(g)("API URL")), 1),
                    d("div", Cy, M(h(g)("OpenAI-compatible endpoint that supports tool calling")), 1)
                  ]),
                  d("input", {
                    class: "text_pole stmp-text-input",
                    value: h(t).settings.aiApiUrl,
                    placeholder: "",
                    onChange: I[2] || (I[2] = (b) => h(t).setAiApiUrl(b.target.value.trim()))
                  }, null, 40, Ay)
                ]),
                d("div", Ty, [
                  d("div", Py, [
                    d("div", My, M(h(g)("API Key")), 1),
                    d("div", Ey, M(h(g)("Bearer token for the custom endpoint")), 1)
                  ]),
                  d("input", {
                    type: "password",
                    class: "text_pole stmp-text-input",
                    value: h(t).settings.aiApiKey,
                    placeholder: "",
                    onChange: I[3] || (I[3] = (b) => h(t).setAiApiKey(b.target.value.trim()))
                  }, null, 40, Iy)
                ]),
                d("div", Ry, [
                  d("div", $y, [
                    d("div", Oy, M(h(g)("Model")), 1),
                    d("div", Ly, M(h(g)("Model that supports tool calling")), 1)
                  ]),
                  d("div", Ny, [
                    ee(Hg, {
                      "model-value": h(t).settings.aiModel,
                      options: G.value,
                      placeholder: "",
                      "onUpdate:modelValue": I[4] || (I[4] = (b) => h(t).setAiModel(b))
                    }, null, 8, ["model-value", "options"]),
                    d("div", {
                      class: he(["menu_button menu_button_icon stmp-model-fetch", { "stmp-spin": Y.value }]),
                      title: h(g)("Connect"),
                      onClick: V
                    }, [...I[7] || (I[7] = [
                      d("i", { class: "fa-solid fa-plug" }, null, -1)
                    ])], 10, Dy)
                  ])
                ]),
                d("div", Fy, [
                  d("div", Uy, [
                    d("div", By, M(h(g)("Context Messages")), 1),
                    d("div", Hy, M(h(g)("Number of recent chat messages to send to AI")), 1)
                  ]),
                  d("div", Vy, [
                    d("input", {
                      type: "range",
                      class: "stmp-slider",
                      min: "2",
                      max: "20",
                      value: h(t).settings.aiContextMessages,
                      onInput: T
                    }, null, 40, jy),
                    d("span", Wy, M(h(t).settings.aiContextMessages), 1)
                  ])
                ]),
                d("div", zy, [
                  d("div", qy, [
                    d("div", Gy, M(h(g)("Auto Trigger")), 1),
                    d("div", Ky, M(h(g)("Automatically analyze new messages and select music")), 1)
                  ]),
                  ee(St, {
                    "model-value": h(t).settings.aiAutoTrigger,
                    "onUpdate:modelValue": I[5] || (I[5] = (b) => h(t).setAiAutoTrigger(b))
                  }, null, 8, ["model-value"])
                ]),
                h(t).settings.aiAutoTrigger ? (A(), P("div", Yy, [
                  d("div", Jy, [
                    d("div", Xy, M(h(g)("Trigger on Greeting")), 1),
                    d("div", Qy, M(h(g)("Analyze BGM when loading a character card (first message)")), 1)
                  ]),
                  ee(St, {
                    "model-value": h(t).settings.aiTriggerOnGreeting,
                    "onUpdate:modelValue": I[6] || (I[6] = (b) => h(t).setAiTriggerOnGreeting(b))
                  }, null, 8, ["model-value"])
                ])) : we("", !0)
              ], 64)) : we("", !0)
            ], 64)) : we("", !0),
            h(t).settings.aiMode === "together" ? (A(), P(oe, { key: 1 }, [
              d("div", Zy, [
                d("div", ev, [
                  d("div", tv, M(h(g)("Prompt Role")), 1),
                  d("div", sv, M(h(g)("Role used when injecting BGM instructions into the main AI")), 1)
                ]),
                d("div", nv, [
                  (A(!0), P(oe, null, Ve([{ v: "system", l: h(g)("System") }, { v: "user", l: h(g)("User") }], (b) => (A(), P("div", {
                    key: b.v,
                    class: he(["stmp-chip", { active: h(t).settings.togetherPromptRole === b.v }]),
                    onClick: (U) => h(t).setTogetherPromptRole(b.v)
                  }, [
                    d("span", null, M(b.l), 1)
                  ], 10, iv))), 128))
                ])
              ]),
              d("div", ov, [
                d("div", rv, [
                  d("div", lv, M(h(g)("Custom Prompt")), 1),
                  d("div", av, [
                    fs(M(h(g)("Edit the BGM instruction prompt. Use macros like ")) + " ", 1),
                    I[8] || (I[8] = d("code", null, "{{xiaoyueCurrentSong}}", -1)),
                    fs(" " + M(h(g)(" for dynamic values.")), 1)
                  ])
                ]),
                ee(St, {
                  "model-value": h(t).settings.togetherCustomPromptEnabled,
                  "onUpdate:modelValue": h(t).setTogetherCustomPromptEnabled
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              h(t).settings.togetherCustomPromptEnabled ? (A(), P("div", cv, [
                d("div", uv, [
                  d("div", dv, M(h(g)("Edit Prompt")), 1),
                  d("div", fv, M(h(g)("Click to edit the BGM instruction prompt")), 1)
                ]),
                d("div", {
                  class: "menu_button menu_button_icon stmp-action-btn",
                  title: h(g)("Edit Prompt"),
                  onClick: Z
                }, [...I[9] || (I[9] = [
                  d("i", { class: "fa-solid fa-pen-to-square" }, null, -1)
                ])], 8, pv)
              ])) : we("", !0)
            ], 64)) : we("", !0)
          ], 64)) : we("", !0)
        ], 512), [
          [ks, s.value === "ai"]
        ]),
        ds(d("div", hv, [
          d("div", gv, [
            d("div", mv, [
              d("div", yv, M(h(g)("Debug Mode")), 1),
              d("div", vv, M(h(g)("Enable verbose console logging for troubleshooting")), 1)
            ]),
            ee(St, {
              "model-value": h(t).settings.debug,
              "onUpdate:modelValue": h(t).setDebug
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ]),
          I[16] || (I[16] = d("div", { class: "stmp-separator" }, null, -1)),
          d("div", _v, [
            d("div", bv, [
              d("div", wv, M(h(g)("Export data")), 1),
              d("div", kv, M(h(g)("Save your settings to a JSON file")), 1)
            ]),
            d("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: K
            }, [...I[10] || (I[10] = [
              d("i", { class: "fa-solid fa-file-export" }, null, -1)
            ])])
          ]),
          d("div", Sv, [
            d("div", xv, [
              d("div", Cv, M(h(g)("Import data")), 1),
              d("div", Av, M(h(g)("Load settings from a JSON file")), 1)
            ]),
            d("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: le
            }, [...I[11] || (I[11] = [
              d("i", { class: "fa-solid fa-file-import" }, null, -1)
            ])])
          ]),
          d("div", Tv, [
            I[13] || (I[13] = d("div", { class: "stmp-about-icon" }, [
              d("i", { class: "fa-solid fa-music" })
            ], -1)),
            I[14] || (I[14] = d("div", { class: "stmp-about-name" }, "晓乐", -1)),
            d("div", Pv, M(h(g)("Version")) + " " + M(h(R)), 1),
            d("div", Mv, M(h(g)("A scene-aware music player extension for SillyTavern")), 1),
            d("a", {
              href: Ev,
              target: "_blank",
              rel: "noopener",
              class: "stmp-about-link"
            }, [...I[12] || (I[12] = [
              d("i", { class: "fa-brands fa-github" }, null, -1),
              d("span", null, "GitHub", -1)
            ])]),
            I[15] || (I[15] = d("div", { class: "stmp-about-copyright" }, [
              d("a", {
                href: "https://www.erocraft.com",
                target: "_blank",
                rel: "noopener"
              }, "艾萝工坊"),
              fs(" © 2015 - 2026")
            ], -1))
          ])
        ], 512), [
          [ks, s.value === "general"]
        ])
      ])
    ]));
  }
}), Rv = /* @__PURE__ */ $t(Iv, [["__scopeId", "data-v-905230f7"]]), lo = [
  {
    name: "xiaoyueCurrentSong",
    description: "Name of the currently loaded track. Empty if no track is loaded.",
    fn: () => {
      try {
        return Re().currentTrack?.name ?? "";
      } catch {
        return "";
      }
    }
  },
  {
    name: "xiaoyueCurrentArtist",
    description: "Artist of the currently loaded track. Empty if no track is loaded.",
    fn: () => {
      try {
        return Re().currentTrack?.artist ?? "";
      } catch {
        return "";
      }
    }
  },
  {
    name: "xiaoyueIsPlaying",
    description: 'Whether audio is currently playing. Returns "true" or "false".',
    fn: () => {
      try {
        return String(Re().isPlaying);
      } catch {
        return "false";
      }
    }
  },
  {
    name: "xiaoyueHasTrack",
    description: 'Whether a track is loaded. Returns "true" or "false".',
    fn: () => {
      try {
        return String(!!Re().currentTrack);
      } catch {
        return "false";
      }
    }
  },
  {
    name: "xiaoyueRecentPlayed",
    description: "Comma-separated list of recently played songs (up to 5). Empty if no history.",
    fn: () => {
      try {
        return Ma(5).join(", ");
      } catch {
        return "";
      }
    }
  }
];
function $v() {
  const e = SillyTavern.getContext(), t = e.macros, s = e.MacrosParser;
  if (!t?.register && !s?.registerMacro) {
    H.warn("Macros API not available, skipping registration");
    return;
  }
  for (const n of lo)
    t?.register ? t.register(n.name, {
      category: "misc",
      description: n.description,
      handler: n.fn
    }) : s?.registerMacro && s.registerMacro(n.name, n.fn, n.description);
  H.info("Macros registered:", lo.map((n) => n.name).join(", "));
}
function Ov() {
  const e = SillyTavern.getContext(), t = e.macros, s = e.MacrosParser;
  for (const n of lo)
    t?.registry?.unregisterMacro ? t.registry.unregisterMacro(n.name) : s?.unregisterMacro && s.unregisterMacro(n.name);
  H.info("Macros unregistered");
}
const xt = "xy", He = "晓乐", en = [];
function Pi(e) {
  return e == null ? "" : typeof e == "string" ? e : Array.isArray(e) ? e.map(String).join(" ").trim() : String(e);
}
function Lv() {
  const e = SillyTavern.getContext(), { SlashCommandParser: t, SlashCommand: s } = e, n = (i) => {
    const o = s.fromProps(i);
    if (t.addCommandObject(o), typeof i.name == "string" && en.push(i.name), Array.isArray(i.aliases))
      for (const r of i.aliases) en.push(String(r));
  };
  n({
    name: `${xt}play`,
    aliases: [`${xt}p`],
    helpString: "Toggle play/pause. With a song name argument, searches and plays it immediately.",
    callback: async (i, o) => {
      const r = Pi(o).trim(), l = Re();
      if (!r)
        return await l.togglePlay(), typeof toastr < "u" && toastr.success(l.isPlaying ? g("Now playing") : g("Paused"), He), "";
      const a = ge(), c = a.neteaseStatus;
      if (c !== "ok") {
        if (typeof toastr < "u") {
          const w = g(c === "no-cookie" ? "Cookie not configured" : c === "expired" ? "Cookie expired" : "Cookie invalid");
          toastr.warning(w, He);
        }
        return "";
      }
      const p = await Qt(a.settings).searchAndResolve(r);
      return p ? (p.name = r, await l.loadAndPlay(p), typeof toastr < "u" && toastr.success(`${g("Now playing")}：${p.name}`, He)) : typeof toastr < "u" && toastr.warning(`${g("Cannot play")}：${r}`, He), "";
    }
  }), n({
    name: `${xt}next`,
    aliases: [`${xt}n`],
    helpString: "Skip to the next track.",
    callback: async () => {
      const i = tt();
      i.next();
      const o = i.current;
      return o && typeof toastr < "u" && toastr.success(`${g("Now playing")}：${o.song}`, He), "";
    }
  }), n({
    name: `${xt}prev`,
    aliases: [`${xt}pp`],
    helpString: "Go back to the previous track.",
    callback: async () => {
      const i = tt();
      i.prev();
      const o = i.current;
      return o && typeof toastr < "u" && toastr.success(`${g("Now playing")}：${o.song}`, He), "";
    }
  }), n({
    name: `${xt}vol`,
    helpString: "Get or set the player volume (0-100). No argument shows the current volume.",
    callback: async (i, o) => {
      const r = Pi(o).trim(), l = Re();
      if (!r)
        return String(l.volume);
      const a = parseInt(r, 10);
      return Number.isNaN(a) || a < 0 || a > 100 ? (typeof toastr < "u" && toastr.warning(g("Volume must be 0-100"), He), "") : (l.setVolume(a), ge().setVolume(a), typeof toastr < "u" && toastr.success(`${g("Volume set to")} ${a}`, He), "");
    }
  }), n({
    name: `${xt}add`,
    helpString: "Search for a song and add it to the playlist.",
    callback: async (i, o) => {
      const r = Pi(o).trim();
      if (!r)
        return typeof toastr < "u" && toastr.warning(g("Enter song name"), He), "";
      const l = ge(), a = l.neteaseStatus;
      if (a !== "ok") {
        if (typeof toastr < "u") {
          const p = g(a === "no-cookie" ? "Cookie not configured" : a === "expired" ? "Cookie expired" : "Cookie invalid");
          toastr.warning(p, He);
        }
        return "";
      }
      const u = await Qt(l.settings).searchAll(r);
      return u.length === 0 ? (typeof toastr < "u" && toastr.info(g("No results"), He), "") : (tt().addFromSearch(u[0], !1), typeof toastr < "u" && toastr.success(`${g("Added to playlist")}：${u[0].name} - ${u[0].artist}`, He), "");
    }
  }), n({
    name: `${xt}bgm`,
    helpString: "Manually trigger AI BGM analysis for the current conversation.",
    callback: async () => {
      const i = In();
      if (!i)
        return typeof toastr < "u" && toastr.warning(g("AI BGM off"), He), "";
      const o = ge();
      return !o.settings.aiApiUrl || !o.settings.aiModel ? (typeof toastr < "u" && toastr.warning(g("AI not configured"), He), "") : (typeof toastr < "u" && toastr.info(g("AI analyzing"), He), await i.manualTrigger(), "");
    }
  }), n({
    name: `${xt}now`,
    helpString: "Show information about the currently playing track.",
    callback: async () => {
      const o = Re().currentTrack;
      if (!o)
        return typeof toastr < "u" && toastr.info(g("No Song"), He), "";
      const r = o.artist ? ` - ${o.artist}` : "";
      return typeof toastr < "u" && toastr.info(`${g("Now playing track")}：${o.name}${r}`, He), `${o.name}${r}`;
    }
  }), H.info("Slash commands registered: " + en.join(", "));
}
function Nv() {
  const e = SillyTavern.getContext(), { SlashCommandParser: t } = e;
  if (t?.commands) {
    for (const s of en)
      s in t.commands && delete t.commands[s];
    en.length = 0, H.info("Slash commands unregistered");
  }
}
let Ts = null, tn = null, sn = null, Ps = null, Yn = null, Jn = null;
const Dv = `
<div class="inline-drawer">
  <div class="inline-drawer-toggle inline-drawer-header">
    <b data-i18n="晓乐">晓乐</b>
    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
  </div>
  <div class="inline-drawer-content stmp-ext-settings-content">
    <div id="stmp-settings-mount"></div>
  </div>
</div>
`;
function Fv() {
  const e = $("#extensions_settings2");
  if (!e || !e.length) {
    H.warn("Settings container #extensions_settings2 not found");
    return;
  }
  if (e.append(Dv), sn = e.children(".inline-drawer").last()[0] ?? null, !sn) return;
  const t = sn.querySelector("#stmp-settings-mount");
  t && Yn && (Ps = na(Rv), Ps.use(Yn), Ps.mount(t));
}
function Uv() {
  Ps && (Ps.unmount(), Ps = null), sn?.remove(), sn = null;
}
async function Vv() {
  try {
    const e = document.createElement("div");
    e.id = "st-little-player-root", document.body.appendChild(e);
    const t = Rd();
    Yn = t, Ts = na(qh), Ts.use(t), Ts.mount(e);
    const s = ge(), n = lg();
    s.init(n);
    const i = Re();
    i.init(), i.setVolume(s.settings.volume), tt().init(), Fv();
    const r = SillyTavern.getContext();
    tn = () => {
      $v(), Lv(), Jn = new $g(), Jn.init();
    }, r.eventSource.on(r.event_types.APP_READY, tn), H.info("Player loaded");
  } catch (e) {
    H.error("Init failed:", e);
  }
}
function Bv() {
  if (H.info("Player destroyed"), tn) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, tn);
    } catch {
    }
    tn = null;
  }
  if (Ov(), Nv(), Jn?.destroy(), Jn = null, Ts) {
    try {
      Re().destroy();
    } catch {
    }
    Ts.unmount(), Ts = null;
  }
  const e = document.getElementById("st-little-player-root");
  e && e.remove(), Uv(), Yn = null;
}
function jv() {
  Bv();
}
async function Wv() {
  try {
    const e = SillyTavern.getContext(), t = e.extensionSettings[`${Ft}-playlist`];
    if (t && typeof t == "object") {
      const n = t;
      if (Array.isArray(n.playlists)) {
        const i = [];
        for (const o of n.playlists)
          if (o?.source === "upload" && Array.isArray(o.songs))
            for (const r of o.songs)
              r?.serverPath && i.push(r.serverPath);
        await Promise.all(i.map((o) => Ca(o).catch((r) => {
          H.warn("Clean: failed to delete file:", o, r);
        })));
      }
    }
    delete e.extensionSettings[Ft], delete e.extensionSettings[`${Ft}-playlist`], e.saveSettingsDebounced();
    const s = e.chatMetadata;
    s && typeof s == "object" && (delete s[Ao], delete s.stmp_cursor, await e.saveMetadata()), typeof toastr < "u" && toastr.success("Data cleaned", "晓乐");
  } catch (e) {
    H.error("Clean: failed to delete settings:", e);
  }
}
export {
  Wv as clean,
  Bv as destroy,
  jv as disable,
  Vv as init
};
