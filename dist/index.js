/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Zn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const fe = {}, Kt = [], it = () => {
}, gr = () => !1, tn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), sn = (e) => e.startsWith("onUpdate:"), Se = Object.assign, Qn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Uo = Object.prototype.hasOwnProperty, le = (e, t) => Uo.call(e, t), G = Array.isArray, zt = (e) => As(e) === "[object Map]", mr = (e) => As(e) === "[object Set]", _i = (e) => As(e) === "[object Date]", ee = (e) => typeof e == "function", pe = (e) => typeof e == "string", Ke = (e) => typeof e == "symbol", ae = (e) => e !== null && typeof e == "object", vr = (e) => (ae(e) || ee(e)) && ee(e.then) && ee(e.catch), yr = Object.prototype.toString, As = (e) => yr.call(e), Ho = (e) => As(e).slice(8, -1), _r = (e) => As(e) === "[object Object]", nn = (e) => pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, cs = /* @__PURE__ */ Zn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), rn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Vo = /-\w/g, Je = rn(
  (e) => e.replace(Vo, (t) => t.slice(1).toUpperCase())
), jo = /\B([A-Z])/g, Tt = rn(
  (e) => e.replace(jo, "-$1").toLowerCase()
), br = rn((e) => e.charAt(0).toUpperCase() + e.slice(1)), wn = rn(
  (e) => e ? `on${br(e)}` : ""
), nt = (e, t) => !Object.is(e, t), Us = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, xr = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, ei = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Bo = (e) => {
  const t = pe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let bi;
const on = () => bi || (bi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function St(e) {
  if (G(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = pe(n) ? Jo(n) : St(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (pe(e) || ae(e))
    return e;
}
const Wo = /;(?![^(]*\))/g, Ko = /:([^]+)/, zo = /\/\*[^]*?\*\//g;
function Jo(e) {
  const t = {};
  return e.replace(zo, "").split(Wo).forEach((s) => {
    if (s) {
      const n = s.split(Ko);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ye(e) {
  let t = "";
  if (pe(e))
    t = e;
  else if (G(e))
    for (let s = 0; s < e.length; s++) {
      const n = ye(e[s]);
      n && (t += n + " ");
    }
  else if (ae(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const qo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Go = /* @__PURE__ */ Zn(qo);
function wr(e) {
  return !!e || e === "";
}
function Yo(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = ti(e[n], t[n]);
  return s;
}
function ti(e, t) {
  if (e === t) return !0;
  let s = _i(e), n = _i(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ke(e), n = Ke(t), s || n)
    return e === t;
  if (s = G(e), n = G(t), s || n)
    return s && n ? Yo(e, t) : !1;
  if (s = ae(e), n = ae(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (l && !a || !l && a || !ti(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Sr = (e) => !!(e && e.__v_isRef === !0), z = (e) => pe(e) ? e : e == null ? "" : G(e) || ae(e) && (e.toString === yr || !ee(e.toString)) ? Sr(e) ? z(e.value) : JSON.stringify(e, Cr, 2) : String(e), Cr = (e, t) => Sr(t) ? Cr(e, t.value) : zt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[Sn(n, r) + " =>"] = i, s),
    {}
  )
} : mr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Sn(s))
} : Ke(t) ? Sn(t) : ae(t) && !G(t) && !_r(t) ? String(t) : t, Sn = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ke(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let we;
class Tr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && we && (we.active ? (this.parent = we, this.index = (we.scopes || (we.scopes = [])).push(
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
      const s = we;
      try {
        return we = this, t();
      } finally {
        we = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = we, we = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (we === this)
        we = this.prevScope;
      else {
        let t = we;
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
function Ir(e) {
  return new Tr(e);
}
function Er() {
  return we;
}
function Xo(e, t = !1) {
  we && we.cleanups.push(e);
}
let de;
const Cn = /* @__PURE__ */ new WeakSet();
class Ar {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, we && (we.active ? we.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Cn.has(this) && (Cn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Mr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, xi(this), Rr(this);
    const t = de, s = qe;
    de = this, qe = !0;
    try {
      return this.fn();
    } finally {
      Pr(this), de = t, qe = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ii(t);
      this.deps = this.depsTail = void 0, xi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Cn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Nn(this) && this.run();
  }
  get dirty() {
    return Nn(this);
  }
}
let kr = 0, us, fs;
function Mr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = fs, fs = e;
    return;
  }
  e.next = us, us = e;
}
function si() {
  kr++;
}
function ni() {
  if (--kr > 0)
    return;
  if (fs) {
    let t = fs;
    for (fs = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; us; ) {
    let t = us;
    for (us = void 0; t; ) {
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
function Rr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Pr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), ii(n), Zo(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function Nn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Lr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Lr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === xs) || (e.globalVersion = xs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Nn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = de, n = qe;
  de = e, qe = !0;
  try {
    Rr(e);
    const i = e.fn(e._value);
    (t.version === 0 || nt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    de = s, qe = n, Pr(e), e.flags &= -3;
  }
}
function ii(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      ii(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Zo(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let qe = !0;
const $r = [];
function rt() {
  $r.push(qe), qe = !1;
}
function ot() {
  const e = $r.pop();
  qe = e === void 0 ? !0 : e;
}
function xi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = de;
    de = void 0;
    try {
      t();
    } finally {
      de = s;
    }
  }
}
let xs = 0;
class Qo {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ri {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!de || !qe || de === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== de)
      s = this.activeLink = new Qo(de, this), de.deps ? (s.prevDep = de.depsTail, de.depsTail.nextDep = s, de.depsTail = s) : de.deps = de.depsTail = s, Or(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = de.depsTail, s.nextDep = void 0, de.depsTail.nextDep = s, de.depsTail = s, de.deps === s && (de.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, xs++, this.notify(t);
  }
  notify(t) {
    si();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      ni();
    }
  }
}
function Or(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Or(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Bs = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ Symbol(
  ""
), Fn = /* @__PURE__ */ Symbol(
  ""
), ws = /* @__PURE__ */ Symbol(
  ""
);
function Ee(e, t, s) {
  if (qe && de) {
    let n = Bs.get(e);
    n || Bs.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new ri()), i.map = n, i.key = s), i.track();
  }
}
function ht(e, t, s, n, i, r) {
  const o = Bs.get(e);
  if (!o) {
    xs++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (si(), t === "clear")
    o.forEach(l);
  else {
    const a = G(e), f = a && nn(s);
    if (a && s === "length") {
      const c = Number(n);
      o.forEach((h, v) => {
        (v === "length" || v === ws || !Ke(v) && v >= c) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), f && l(o.get(ws)), t) {
        case "add":
          a ? f && l(o.get("length")) : (l(o.get(Ot)), zt(e) && l(o.get(Fn)));
          break;
        case "delete":
          a || (l(o.get(Ot)), zt(e) && l(o.get(Fn)));
          break;
        case "set":
          zt(e) && l(o.get(Ot));
          break;
      }
  }
  ni();
}
function el(e, t) {
  const s = Bs.get(e);
  return s && s.get(t);
}
function Ut(e) {
  const t = /* @__PURE__ */ re(e);
  return t === e ? t : (Ee(t, "iterate", ws), /* @__PURE__ */ He(e) ? t : t.map(Ge));
}
function ln(e) {
  return Ee(e = /* @__PURE__ */ re(e), "iterate", ws), e;
}
function tt(e, t) {
  return /* @__PURE__ */ vt(e) ? Yt(/* @__PURE__ */ gt(e) ? Ge(t) : t) : Ge(t);
}
const tl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Tn(this, Symbol.iterator, (e) => tt(this, e));
  },
  concat(...e) {
    return Ut(this).concat(
      ...e.map((t) => G(t) ? Ut(t) : t)
    );
  },
  entries() {
    return Tn(this, "entries", (e) => (e[1] = tt(this, e[1]), e));
  },
  every(e, t) {
    return lt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return lt(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => tt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return lt(
      this,
      "find",
      e,
      t,
      (s) => tt(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return lt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return lt(
      this,
      "findLast",
      e,
      t,
      (s) => tt(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return lt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return lt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return In(this, "includes", e);
  },
  indexOf(...e) {
    return In(this, "indexOf", e);
  },
  join(e) {
    return Ut(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return In(this, "lastIndexOf", e);
  },
  map(e, t) {
    return lt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ts(this, "pop");
  },
  push(...e) {
    return ts(this, "push", e);
  },
  reduce(e, ...t) {
    return wi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return wi(this, "reduceRight", e, t);
  },
  shift() {
    return ts(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return lt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ts(this, "splice", e);
  },
  toReversed() {
    return Ut(this).toReversed();
  },
  toSorted(e) {
    return Ut(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ut(this).toSpliced(...e);
  },
  unshift(...e) {
    return ts(this, "unshift", e);
  },
  values() {
    return Tn(this, "values", (e) => tt(this, e));
  }
};
function Tn(e, t, s) {
  const n = ln(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ He(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = s(r.value)), r;
  }), i;
}
const sl = Array.prototype;
function lt(e, t, s, n, i, r) {
  const o = ln(e), l = o !== e && !/* @__PURE__ */ He(e), a = o[t];
  if (a !== sl[t]) {
    const h = a.apply(e, r);
    return l ? Ge(h) : h;
  }
  let f = s;
  o !== e && (l ? f = function(h, v) {
    return s.call(this, tt(e, h), v, e);
  } : s.length > 2 && (f = function(h, v) {
    return s.call(this, h, v, e);
  }));
  const c = a.call(o, f, n);
  return l && i ? i(c) : c;
}
function wi(e, t, s, n) {
  const i = ln(e), r = i !== e && !/* @__PURE__ */ He(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(f, c, h) {
    return l && (l = !1, f = tt(e, f)), s.call(this, f, tt(e, c), h, e);
  }) : s.length > 3 && (o = function(f, c, h) {
    return s.call(this, f, c, h, e);
  }));
  const a = i[t](o, ...n);
  return l ? tt(e, a) : a;
}
function In(e, t, s) {
  const n = /* @__PURE__ */ re(e);
  Ee(n, "iterate", ws);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ cn(s[0]) ? (s[0] = /* @__PURE__ */ re(s[0]), n[t](...s)) : i;
}
function ts(e, t, s = []) {
  rt(), si();
  const n = (/* @__PURE__ */ re(e))[t].apply(e, s);
  return ni(), ot(), n;
}
const nl = /* @__PURE__ */ Zn("__proto__,__v_isRef,__isVue"), Dr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ke)
);
function il(e) {
  Ke(e) || (e = String(e));
  const t = /* @__PURE__ */ re(this);
  return Ee(t, "has", e), t.hasOwnProperty(e);
}
class Nr {
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
      return n === (i ? r ? pl : Vr : r ? Hr : Ur).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = G(t);
    if (!i) {
      let a;
      if (o && (a = tl[s]))
        return a;
      if (s === "hasOwnProperty")
        return il;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ _e(t) ? t : n
    );
    if ((Ke(s) ? Dr.has(s) : nl(s)) || (i || Ee(t, "get", s), r))
      return l;
    if (/* @__PURE__ */ _e(l)) {
      const a = o && nn(s) ? l : l.value;
      return i && ae(a) ? /* @__PURE__ */ Hn(a) : a;
    }
    return ae(l) ? i ? /* @__PURE__ */ Hn(l) : /* @__PURE__ */ an(l) : l;
  }
}
class Fr extends Nr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let r = t[s];
    const o = G(t) && nn(s);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ vt(r);
      if (!/* @__PURE__ */ He(n) && !/* @__PURE__ */ vt(n) && (r = /* @__PURE__ */ re(r), n = /* @__PURE__ */ re(n)), !o && /* @__PURE__ */ _e(r) && !/* @__PURE__ */ _e(n))
        return f || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : le(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ _e(t) ? t : i
    );
    return t === /* @__PURE__ */ re(i) && a && (l ? nt(n, r) && ht(t, "set", s, n) : ht(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = le(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && ht(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ke(s) || !Dr.has(s)) && Ee(t, "has", s), n;
  }
  ownKeys(t) {
    return Ee(
      t,
      "iterate",
      G(t) ? "length" : Ot
    ), Reflect.ownKeys(t);
  }
}
class rl extends Nr {
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
const ol = /* @__PURE__ */ new Fr(), ll = /* @__PURE__ */ new rl(), al = /* @__PURE__ */ new Fr(!0);
const Un = (e) => e, Ps = (e) => Reflect.getPrototypeOf(e);
function cl(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ re(i), o = zt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, f = i[e](...n), c = s ? Un : t ? Yt : Ge;
    return !t && Ee(
      r,
      "iterate",
      a ? Fn : Ot
    ), Se(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: h, done: v } = f.next();
          return v ? { value: h, done: v } : {
            value: l ? [c(h[0]), c(h[1])] : c(h),
            done: v
          };
        }
      }
    );
  };
}
function Ls(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ul(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ re(r), l = /* @__PURE__ */ re(i);
      e || (nt(i, l) && Ee(o, "get", i), Ee(o, "get", l));
      const { has: a } = Ps(o), f = t ? Un : e ? Yt : Ge;
      if (a.call(o, i))
        return f(r.get(i));
      if (a.call(o, l))
        return f(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ee(/* @__PURE__ */ re(i), "iterate", Ot), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ re(r), l = /* @__PURE__ */ re(i);
      return e || (nt(i, l) && Ee(o, "has", i), Ee(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ re(l), f = t ? Un : e ? Yt : Ge;
      return !e && Ee(a, "iterate", Ot), l.forEach((c, h) => i.call(r, f(c), f(h), o));
    }
  };
  return Se(
    s,
    e ? {
      add: Ls("add"),
      set: Ls("set"),
      delete: Ls("delete"),
      clear: Ls("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ re(this), o = Ps(r), l = /* @__PURE__ */ re(i), a = !t && !/* @__PURE__ */ He(i) && !/* @__PURE__ */ vt(i) ? l : i;
        return o.has.call(r, a) || nt(i, a) && o.has.call(r, i) || nt(l, a) && o.has.call(r, l) || (r.add(a), ht(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ He(r) && !/* @__PURE__ */ vt(r) && (r = /* @__PURE__ */ re(r));
        const o = /* @__PURE__ */ re(this), { has: l, get: a } = Ps(o);
        let f = l.call(o, i);
        f || (i = /* @__PURE__ */ re(i), f = l.call(o, i));
        const c = a.call(o, i);
        return o.set(i, r), f ? nt(r, c) && ht(o, "set", i, r) : ht(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ re(this), { has: o, get: l } = Ps(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ re(i), a = o.call(r, i)), l && l.call(r, i);
        const f = r.delete(i);
        return a && ht(r, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ re(this), r = i.size !== 0, o = i.clear();
        return r && ht(
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
    s[i] = cl(i, e, t);
  }), s;
}
function oi(e, t) {
  const s = ul(e, t);
  return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    le(s, i) && i in n ? s : n,
    i,
    r
  );
}
const fl = {
  get: /* @__PURE__ */ oi(!1, !1)
}, dl = {
  get: /* @__PURE__ */ oi(!1, !0)
}, hl = {
  get: /* @__PURE__ */ oi(!0, !1)
};
const Ur = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap(), Vr = /* @__PURE__ */ new WeakMap(), pl = /* @__PURE__ */ new WeakMap();
function gl(e) {
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
function an(e) {
  return /* @__PURE__ */ vt(e) ? e : li(
    e,
    !1,
    ol,
    fl,
    Ur
  );
}
// @__NO_SIDE_EFFECTS__
function ml(e) {
  return li(
    e,
    !1,
    al,
    dl,
    Hr
  );
}
// @__NO_SIDE_EFFECTS__
function Hn(e) {
  return li(
    e,
    !0,
    ll,
    hl,
    Vr
  );
}
function li(e, t, s, n, i) {
  if (!ae(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = gl(Ho(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? n : s
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return /* @__PURE__ */ vt(e) ? /* @__PURE__ */ gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function vt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function re(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ re(t) : e;
}
function ai(e) {
  return !le(e, "__v_skip") && Object.isExtensible(e) && xr(e, "__v_skip", !0), e;
}
const Ge = (e) => ae(e) ? /* @__PURE__ */ an(e) : e, Yt = (e) => ae(e) ? /* @__PURE__ */ Hn(e) : e;
// @__NO_SIDE_EFFECTS__
function _e(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  return vl(e, !1);
}
function vl(e, t) {
  return /* @__PURE__ */ _e(e) ? e : new yl(e, t);
}
class yl {
  constructor(t, s) {
    this.dep = new ri(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ re(t), this._value = s ? t : Ge(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ He(t) || /* @__PURE__ */ vt(t);
    t = n ? t : /* @__PURE__ */ re(t), nt(t, s) && (this._rawValue = t, this._value = n ? t : Ge(t), this.dep.trigger());
  }
}
function y(e) {
  return /* @__PURE__ */ _e(e) ? e.value : e;
}
const _l = {
  get: (e, t, s) => t === "__v_raw" ? e : y(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ _e(i) && !/* @__PURE__ */ _e(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function jr(e) {
  return /* @__PURE__ */ gt(e) ? e : new Proxy(e, _l);
}
// @__NO_SIDE_EFFECTS__
function bl(e) {
  const t = G(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = wl(e, s);
  return t;
}
class xl {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Ke(s) ? s : String(s), this._raw = /* @__PURE__ */ re(t);
    let i = !0, r = t;
    if (!G(t) || Ke(this._key) || !nn(this._key))
      do
        i = !/* @__PURE__ */ cn(r) || /* @__PURE__ */ He(r);
      while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = y(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ _e(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ _e(s)) {
        s.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return el(this._raw, this._key);
  }
}
function wl(e, t, s) {
  return new xl(e, t, s);
}
class Sl {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new ri(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = xs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    de !== this)
      return Mr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Lr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Cl(e, t, s = !1) {
  let n, i;
  return ee(e) ? n = e : (n = e.get, i = e.set), new Sl(n, i, s);
}
const $s = {}, Ws = /* @__PURE__ */ new WeakMap();
let Pt;
function Tl(e, t = !1, s = Pt) {
  if (s) {
    let n = Ws.get(s);
    n || Ws.set(s, n = []), n.push(e);
  }
}
function Il(e, t, s = fe) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = s, f = (_) => i ? _ : /* @__PURE__ */ He(_) || i === !1 || i === 0 ? pt(_, 1) : pt(_);
  let c, h, v, g, C = !1, T = !1;
  if (/* @__PURE__ */ _e(e) ? (h = () => e.value, C = /* @__PURE__ */ He(e)) : /* @__PURE__ */ gt(e) ? (h = () => f(e), C = !0) : G(e) ? (T = !0, C = e.some((_) => /* @__PURE__ */ gt(_) || /* @__PURE__ */ He(_)), h = () => e.map((_) => {
    if (/* @__PURE__ */ _e(_))
      return _.value;
    if (/* @__PURE__ */ gt(_))
      return f(_);
    if (ee(_))
      return a ? a(_, 2) : _();
  })) : ee(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (v) {
      rt();
      try {
        v();
      } finally {
        ot();
      }
    }
    const _ = Pt;
    Pt = c;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      Pt = _;
    }
  } : h = it, t && i) {
    const _ = h, H = i === !0 ? 1 / 0 : i;
    h = () => pt(_(), H);
  }
  const W = Er(), K = () => {
    c.stop(), W && W.active && Qn(W.effects, c);
  };
  if (r && t) {
    const _ = t;
    t = (...H) => {
      const Q = _(...H);
      return K(), Q;
    };
  }
  let M = T ? new Array(e.length).fill($s) : $s;
  const P = (_) => {
    if (!(!(c.flags & 1) || !c.dirty && !_))
      if (t) {
        const H = c.run();
        if (_ || i || C || (T ? H.some((Q, N) => nt(Q, M[N])) : nt(H, M))) {
          v && v();
          const Q = Pt;
          Pt = c;
          try {
            const N = [
              H,
              // pass undefined as the old value when it's changed for the first time
              M === $s ? void 0 : T && M[0] === $s ? [] : M,
              g
            ];
            M = H, a ? a(t, 3, N) : (
              // @ts-expect-error
              t(...N)
            );
          } finally {
            Pt = Q;
          }
        }
      } else
        c.run();
  };
  return l && l(P), c = new Ar(h), c.scheduler = o ? () => o(P, !1) : P, g = (_) => Tl(_, !1, c), v = c.onStop = () => {
    const _ = Ws.get(c);
    if (_) {
      if (a)
        a(_, 4);
      else
        for (const H of _) H();
      Ws.delete(c);
    }
  }, t ? n ? P(!0) : M = c.run() : o ? o(P.bind(null, !0), !0) : c.run(), K.pause = c.pause.bind(c), K.resume = c.resume.bind(c), K.stop = K, K;
}
function pt(e, t = 1 / 0, s) {
  if (t <= 0 || !ae(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ _e(e))
    pt(e.value, t, s);
  else if (G(e))
    for (let n = 0; n < e.length; n++)
      pt(e[n], t, s);
  else if (mr(e) || zt(e))
    e.forEach((n) => {
      pt(n, t, s);
    });
  else if (_r(e)) {
    for (const n in e)
      pt(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && pt(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ks(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    un(i, t, s);
  }
}
function ze(e, t, s, n) {
  if (ee(e)) {
    const i = ks(e, t, s, n);
    return i && vr(i) && i.catch((r) => {
      un(r, t, s);
    }), i;
  }
  if (G(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(ze(e[r], t, s, n));
    return i;
  }
}
function un(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || fe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let h = 0; h < c.length; h++)
          if (c[h](e, a, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      rt(), ks(r, null, 10, [
        e,
        a,
        f
      ]), ot();
      return;
    }
  }
  El(e, s, i, n, o);
}
function El(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Re = [];
let et = -1;
const Jt = [];
let wt = null, jt = 0;
const Br = /* @__PURE__ */ Promise.resolve();
let Ks = null;
function Ne(e) {
  const t = Ks || Br;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Al(e) {
  let t = et + 1, s = Re.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Re[n], r = Ss(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function ci(e) {
  if (!(e.flags & 1)) {
    const t = Ss(e), s = Re[Re.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ss(s) ? Re.push(e) : Re.splice(Al(t), 0, e), e.flags |= 1, Wr();
  }
}
function Wr() {
  Ks || (Ks = Br.then(zr));
}
function kl(e) {
  G(e) ? Jt.push(...e) : wt && e.id === -1 ? wt.splice(jt + 1, 0, e) : e.flags & 1 || (Jt.push(e), e.flags |= 1), Wr();
}
function Si(e, t, s = et + 1) {
  for (; s < Re.length; s++) {
    const n = Re[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Re.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Kr(e) {
  if (Jt.length) {
    const t = [...new Set(Jt)].sort(
      (s, n) => Ss(s) - Ss(n)
    );
    if (Jt.length = 0, wt) {
      wt.push(...t);
      return;
    }
    for (wt = t, jt = 0; jt < wt.length; jt++) {
      const s = wt[jt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    wt = null, jt = 0;
  }
}
const Ss = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zr(e) {
  try {
    for (et = 0; et < Re.length; et++) {
      const t = Re[et];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ks(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; et < Re.length; et++) {
      const t = Re[et];
      t && (t.flags &= -2);
    }
    et = -1, Re.length = 0, Kr(), Ks = null, (Re.length || Jt.length) && zr();
  }
}
let We = null, Jr = null;
function zs(e) {
  const t = We;
  return We = e, Jr = e && e.type.__scopeId || null, t;
}
function qr(e, t = We, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Gs(-1);
    const r = zs(t);
    let o;
    try {
      o = e(...i);
    } finally {
      zs(r), n._d && Gs(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ct(e, t) {
  if (We === null)
    return e;
  const s = mn(We), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = fe] = t[i];
    r && (ee(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && pt(o), n.push({
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
function At(e, t, s, n) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[n];
    a && (rt(), ze(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), ot());
  }
}
function Ml(e, t) {
  if (Le) {
    let s = Le.provides;
    const n = Le.parent && Le.parent.provides;
    n === s && (s = Le.provides = Object.create(n)), s[e] = t;
  }
}
function ds(e, t, s = !1) {
  const n = pi();
  if (n || Dt) {
    let i = Dt ? Dt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && ee(t) ? t.call(n && n.proxy) : t;
  }
}
function Rl() {
  return !!(pi() || Dt);
}
const Pl = /* @__PURE__ */ Symbol.for("v-scx"), Ll = () => ds(Pl);
function Fe(e, t, s) {
  return Gr(e, t, s);
}
function Gr(e, t, s = fe) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = Se({}, s), a = t && n || !t && r !== "post";
  let f;
  if (Is) {
    if (r === "sync") {
      const g = Ll();
      f = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = it, g.resume = it, g.pause = it, g;
    }
  }
  const c = Le;
  l.call = (g, C, T) => ze(g, c, C, T);
  let h = !1;
  r === "post" ? l.scheduler = (g) => {
    ke(g, c && c.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (g, C) => {
    C ? g() : ci(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), h && (g.flags |= 2, c && (g.id = c.uid, g.i = c));
  };
  const v = Il(e, t, l);
  return Is && (f ? f.push(v) : a && v()), v;
}
function $l(e, t, s) {
  const n = this.proxy, i = pe(e) ? e.includes(".") ? Yr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  ee(t) ? r = t : (r = t.handler, s = t);
  const o = Ms(this), l = Gr(i, r.bind(n), s);
  return o(), l;
}
function Yr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const bt = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ Symbol("_vte"), Zr = (e) => e.__isTeleport, Lt = (e) => e && (e.disabled || e.disabled === ""), Ol = (e) => e && (e.defer || e.defer === ""), Ci = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ti = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Vn = (e, t) => {
  const s = e && e.to;
  return pe(s) ? t ? t(s) : null : s;
}, Dl = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, i, r, o, l, a, f) {
    const {
      mc: c,
      pc: h,
      pbc: v,
      o: { insert: g, querySelector: C, createText: T, createComment: W, parentNode: K }
    } = f, M = Lt(t.props);
    let { dynamicChildren: P } = t;
    const _ = (N, k, b) => {
      N.shapeFlag & 16 && c(
        N.children,
        k,
        b,
        i,
        r,
        o,
        l,
        a
      );
    }, H = (N = t) => {
      const k = Lt(N.props), b = N.target = Vn(N.props, C), j = jn(b, N, T, g);
      b && (o !== "svg" && Ci(b) ? o = "svg" : o !== "mathml" && Ti(b) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(b), k || (_(N, b, j), os(N, !1)));
    }, Q = (N) => {
      const k = () => {
        if (bt.get(N) === k) {
          if (bt.delete(N), Lt(N.props)) {
            const b = K(N.el) || s;
            _(N, b, N.anchor), os(N, !0);
          }
          H(N);
        }
      };
      bt.set(N, k), ke(k, r);
    };
    if (e == null) {
      const N = t.el = T(""), k = t.anchor = T("");
      if (g(N, s, n), g(k, s, n), Ol(t.props) || r && r.pendingBranch) {
        Q(t);
        return;
      }
      M && (_(t, s, k), os(t, !0)), H();
    } else {
      t.el = e.el;
      const N = t.anchor = e.anchor, k = bt.get(e);
      if (k) {
        k.flags |= 8, bt.delete(e), Q(t);
        return;
      }
      t.targetStart = e.targetStart;
      const b = t.target = e.target, j = t.targetAnchor = e.targetAnchor, Y = Lt(e.props), I = Y ? s : b, B = Y ? N : j;
      if (o === "svg" || Ci(b) ? o = "svg" : (o === "mathml" || Ti(b)) && (o = "mathml"), P ? (v(
        e.dynamicChildren,
        P,
        I,
        i,
        r,
        o,
        l
      ), hi(e, t, !0)) : a || h(
        e,
        t,
        I,
        B,
        i,
        r,
        o,
        l,
        !1
      ), M)
        Y ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Os(
          t,
          s,
          N,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const te = Vn(t.props, C);
        te && (t.target = te, Os(
          t,
          te,
          null,
          f,
          0
        ));
      } else Y && Os(
        t,
        b,
        j,
        f,
        1
      );
      os(t, M);
    }
  },
  remove(e, t, s, { um: n, o: { remove: i } }, r) {
    const {
      shapeFlag: o,
      children: l,
      anchor: a,
      targetStart: f,
      targetAnchor: c,
      target: h,
      props: v
    } = e, g = Lt(v), C = r || !g, T = bt.get(e);
    if (T && (T.flags |= 8, bt.delete(e)), h && (i(f), i(c)), r && i(a), !T && (g || h) && o & 16)
      for (let W = 0; W < l.length; W++) {
        const K = l[W];
        n(
          K,
          t,
          s,
          C,
          !!K.dynamicChildren
        );
      }
  },
  move: Os,
  hydrate: Nl
};
function Os(e, t, s, { o: { insert: n }, m: i }, r = 2) {
  r === 0 && n(e.targetAnchor, t, s);
  const { el: o, anchor: l, shapeFlag: a, children: f, props: c } = e, h = r === 2;
  if (h && n(o, t, s), !bt.has(e) && (!h || Lt(c)) && a & 16)
    for (let v = 0; v < f.length; v++)
      i(
        f[v],
        t,
        s,
        2
      );
  h && n(l, t, s);
}
function Nl(e, t, s, n, i, r, {
  o: { nextSibling: o, parentNode: l, querySelector: a, insert: f, createText: c }
}, h) {
  function v(W, K) {
    let M = K;
    for (; M; ) {
      if (M && M.nodeType === 8) {
        if (M.data === "teleport start anchor")
          t.targetStart = M;
        else if (M.data === "teleport anchor") {
          t.targetAnchor = M, W._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      M = o(M);
    }
  }
  function g(W, K) {
    K.anchor = h(
      o(W),
      K,
      l(W),
      s,
      n,
      i,
      r
    );
  }
  const C = t.target = Vn(
    t.props,
    a
  ), T = Lt(t.props);
  if (C) {
    const W = C._lpa || C.firstChild;
    t.shapeFlag & 16 && (T ? (g(e, t), v(C, W), t.targetAnchor || jn(
      C,
      t,
      c,
      f,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === C ? e : null
    )) : (t.anchor = o(e), v(C, W), t.targetAnchor || jn(C, t, c, f), h(
      W && o(W),
      t,
      C,
      s,
      n,
      i,
      r
    ))), os(t, T);
  } else T && t.shapeFlag & 16 && (g(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const Fl = Dl;
function os(e, t) {
  const s = e.ctx;
  if (s && s.ut) {
    let n, i;
    for (t ? (n = e.el, i = e.anchor) : (n = e.targetStart, i = e.targetAnchor); n && n !== i; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid), n = n.nextSibling;
    s.ut();
  }
}
function jn(e, t, s, n, i = null) {
  const r = t.targetStart = s(""), o = t.targetAnchor = s("");
  return r[Xr] = o, e && (n(r, e, i), n(o, e, i)), o;
}
const je = /* @__PURE__ */ Symbol("_leaveCb"), ss = /* @__PURE__ */ Symbol("_enterCb");
function Ul() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return hn(() => {
    e.isMounted = !0;
  }), ui(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ve = [Function, Array], Qr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ve,
  onEnter: Ve,
  onAfterEnter: Ve,
  onEnterCancelled: Ve,
  // leave
  onBeforeLeave: Ve,
  onLeave: Ve,
  onAfterLeave: Ve,
  onLeaveCancelled: Ve,
  // appear
  onBeforeAppear: Ve,
  onAppear: Ve,
  onAfterAppear: Ve,
  onAppearCancelled: Ve
}, eo = (e) => {
  const t = e.subTree;
  return t.component ? eo(t.component) : t;
}, Hl = {
  name: "BaseTransition",
  props: Qr,
  setup(e, { slots: t }) {
    const s = pi(), n = Ul();
    return () => {
      const i = t.default && no(t.default(), !0), r = i && i.length ? to(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? Te() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ re(e), { mode: l } = o;
      if (n.isLeaving)
        return En(r);
      const a = Ii(r);
      if (!a)
        return En(r);
      let f = Bn(
        a,
        o,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (h) => f = h
      );
      a.type !== Pe && Cs(a, f);
      let c = s.subTree && Ii(s.subTree);
      if (c && c.type !== Pe && !$t(c, a) && eo(s).type !== Pe) {
        let h = Bn(
          c,
          o,
          n,
          s
        );
        if (Cs(c, h), l === "out-in" && a.type !== Pe)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete h.afterLeave, c = void 0;
          }, En(r);
        l === "in-out" && a.type !== Pe ? h.delayLeave = (v, g, C) => {
          const T = so(
            n,
            c
          );
          T[String(c.key)] = c, v[je] = () => {
            g(), v[je] = void 0, delete f.delayedLeave, c = void 0;
          }, f.delayedLeave = () => {
            C(), delete f.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return r;
    };
  }
};
function to(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const s of e)
      if (s.type !== Pe) {
        t = s;
        break;
      }
  }
  return t;
}
const Vl = Hl;
function so(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function Bn(e, t, s, n, i) {
  const {
    appear: r,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: f,
    onAfterEnter: c,
    onEnterCancelled: h,
    onBeforeLeave: v,
    onLeave: g,
    onAfterLeave: C,
    onLeaveCancelled: T,
    onBeforeAppear: W,
    onAppear: K,
    onAfterAppear: M,
    onAppearCancelled: P
  } = t, _ = String(e.key), H = so(s, e), Q = (b, j) => {
    b && ze(
      b,
      n,
      9,
      j
    );
  }, N = (b, j) => {
    const Y = j[1];
    Q(b, j), G(b) ? b.every((I) => I.length <= 1) && Y() : b.length <= 1 && Y();
  }, k = {
    mode: o,
    persisted: l,
    beforeEnter(b) {
      let j = a;
      if (!s.isMounted)
        if (r)
          j = W || a;
        else
          return;
      b[je] && b[je](
        !0
        /* cancelled */
      );
      const Y = H[_];
      Y && $t(e, Y) && Y.el[je] && Y.el[je](), Q(j, [b]);
    },
    enter(b) {
      if (H[_] === e) return;
      let j = f, Y = c, I = h;
      if (!s.isMounted)
        if (r)
          j = K || f, Y = M || c, I = P || h;
        else
          return;
      let B = !1;
      b[ss] = (ge) => {
        B || (B = !0, ge ? Q(I, [b]) : Q(Y, [b]), k.delayedLeave && k.delayedLeave(), b[ss] = void 0);
      };
      const te = b[ss].bind(null, !1);
      j ? N(j, [b, te]) : te();
    },
    leave(b, j) {
      const Y = String(e.key);
      if (b[ss] && b[ss](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return j();
      Q(v, [b]);
      let I = !1;
      b[je] = (te) => {
        I || (I = !0, j(), te ? Q(T, [b]) : Q(C, [b]), b[je] = void 0, H[Y] === e && delete H[Y]);
      };
      const B = b[je].bind(null, !1);
      H[Y] = e, g ? N(g, [b, B]) : B();
    },
    clone(b) {
      const j = Bn(
        b,
        t,
        s,
        n,
        i
      );
      return i && i(j), j;
    }
  };
  return k;
}
function En(e) {
  if (fn(e))
    return e = Ct(e), e.children = null, e;
}
function Ii(e) {
  if (!fn(e))
    return Zr(e.type) && e.children ? to(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && ee(s.default))
      return s.default();
  }
}
function Cs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Cs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function no(e, t = !1, s) {
  let n = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = s == null ? o.key : String(s) + String(o.key != null ? o.key : r);
    o.type === ne ? (o.patchFlag & 128 && i++, n = n.concat(
      no(o.children, t, l)
    )) : (t || o.type !== Pe) && n.push(l != null ? Ct(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function It(e, t) {
  return ee(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Se({ name: e.name }, t, { setup: e })
  ) : e;
}
function io(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ei(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Js = /* @__PURE__ */ new WeakMap();
function hs(e, t, s, n, i = !1) {
  if (G(e)) {
    e.forEach(
      (T, W) => hs(
        T,
        t && (G(t) ? t[W] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (ps(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && hs(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? mn(n.component) : n.el, o = i ? null : r, { i: l, r: a } = e, f = t && t.r, c = l.refs === fe ? l.refs = {} : l.refs, h = l.setupState, v = /* @__PURE__ */ re(h), g = h === fe ? gr : (T) => Ei(c, T) ? !1 : le(v, T), C = (T, W) => !(W && Ei(c, W));
  if (f != null && f !== a) {
    if (Ai(t), pe(f))
      c[f] = null, g(f) && (h[f] = null);
    else if (/* @__PURE__ */ _e(f)) {
      const T = t;
      C(f, T.k) && (f.value = null), T.k && (c[T.k] = null);
    }
  }
  if (ee(a)) {
    rt();
    try {
      ks(a, l, 12, [o, c]);
    } finally {
      ot();
    }
  } else {
    const T = pe(a), W = /* @__PURE__ */ _e(a);
    if (T || W) {
      const K = () => {
        if (e.f) {
          const M = T ? g(a) ? h[a] : c[a] : C() || !e.k ? a.value : c[e.k];
          if (i)
            G(M) && Qn(M, r);
          else if (G(M))
            M.includes(r) || M.push(r);
          else if (T)
            c[a] = [r], g(a) && (h[a] = c[a]);
          else {
            const P = [r];
            C(a, e.k) && (a.value = P), e.k && (c[e.k] = P);
          }
        } else T ? (c[a] = o, g(a) && (h[a] = o)) : W && (C(a, e.k) && (a.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const M = () => {
          K(), Js.delete(e);
        };
        M.id = -1, Js.set(e, M), ke(M, s);
      } else
        Ai(e), K();
    }
  }
}
function Ai(e) {
  const t = Js.get(e);
  t && (t.flags |= 8, Js.delete(e));
}
on().requestIdleCallback;
on().cancelIdleCallback;
const ps = (e) => !!e.type.__asyncLoader, fn = (e) => e.type.__isKeepAlive;
function jl(e, t) {
  ro(e, "a", t);
}
function Bl(e, t) {
  ro(e, "da", t);
}
function ro(e, t, s = Le) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (dn(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      fn(i.parent.vnode) && Wl(n, t, s, i), i = i.parent;
  }
}
function Wl(e, t, s, n) {
  const i = dn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  oo(() => {
    Qn(n[t], i);
  }, s);
}
function dn(e, t, s = Le, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      rt();
      const l = Ms(s), a = ze(t, s, e, o);
      return l(), ot(), a;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const yt = (e) => (t, s = Le) => {
  (!Is || e === "sp") && dn(e, (...n) => t(...n), s);
}, Kl = yt("bm"), hn = yt("m"), zl = yt(
  "bu"
), Jl = yt("u"), ui = yt(
  "bum"
), oo = yt("um"), ql = yt(
  "sp"
), Gl = yt("rtg"), Yl = yt("rtc");
function Xl(e, t = Le) {
  dn("ec", e, t);
}
const Zl = /* @__PURE__ */ Symbol.for("v-ndc");
function Be(e, t, s, n) {
  let i;
  const r = s, o = G(e);
  if (o || pe(e)) {
    const l = o && /* @__PURE__ */ gt(e);
    let a = !1, f = !1;
    l && (a = !/* @__PURE__ */ He(e), f = /* @__PURE__ */ vt(e), e = ln(e)), i = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      i[c] = t(
        a ? f ? Yt(Ge(e[c])) : Ge(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (ae(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, f = l.length; a < f; a++) {
        const c = l[a];
        i[a] = t(e[c], c, a, r);
      }
    }
  else
    i = [];
  return i;
}
const Wn = (e) => e ? Io(e) ? mn(e) : Wn(e.parent) : null, gs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Wn(e.parent),
    $root: (e) => Wn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ao(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ci(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ne.bind(e.proxy)),
    $watch: (e) => $l.bind(e)
  })
), An = (e, t) => e !== fe && !e.__isScriptSetup && le(e, t), Ql = {
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
        if (An(n, t))
          return o[t] = 1, n[t];
        if (i !== fe && le(i, t))
          return o[t] = 2, i[t];
        if (le(r, t))
          return o[t] = 3, r[t];
        if (s !== fe && le(s, t))
          return o[t] = 4, s[t];
        Kn && (o[t] = 0);
      }
    }
    const f = gs[t];
    let c, h;
    if (f)
      return t === "$attrs" && Ee(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (s !== fe && le(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = a.config.globalProperties, le(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return An(i, t) ? (i[t] = s, !0) : n !== fe && le(n, t) ? (n[t] = s, !0) : le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(s[l] || e !== fe && l[0] !== "$" && le(e, l) || An(t, l) || le(r, l) || le(n, l) || le(gs, l) || le(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : le(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function ki(e) {
  return G(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Kn = !0;
function ea(e) {
  const t = ao(e), s = e.proxy, n = e.ctx;
  Kn = !1, t.beforeCreate && Mi(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: f,
    // lifecycle
    created: c,
    beforeMount: h,
    mounted: v,
    beforeUpdate: g,
    updated: C,
    activated: T,
    deactivated: W,
    beforeDestroy: K,
    beforeUnmount: M,
    destroyed: P,
    unmounted: _,
    render: H,
    renderTracked: Q,
    renderTriggered: N,
    errorCaptured: k,
    serverPrefetch: b,
    // public API
    expose: j,
    inheritAttrs: Y,
    // assets
    components: I,
    directives: B,
    filters: te
  } = t;
  if (f && ta(f, n, null), o)
    for (const U in o) {
      const q = o[U];
      ee(q) && (n[U] = q.bind(s));
    }
  if (i) {
    const U = i.call(s, s);
    ae(U) && (e.data = /* @__PURE__ */ an(U));
  }
  if (Kn = !0, r)
    for (const U in r) {
      const q = r[U], be = ee(q) ? q.bind(s, s) : ee(q.get) ? q.get.bind(s, s) : it, Ce = !ee(q) && ee(q.set) ? q.set.bind(s) : it, ve = $e({
        get: be,
        set: Ce
      });
      Object.defineProperty(n, U, {
        enumerable: !0,
        configurable: !0,
        get: () => ve.value,
        set: (Oe) => ve.value = Oe
      });
    }
  if (l)
    for (const U in l)
      lo(l[U], n, s, U);
  if (a) {
    const U = ee(a) ? a.call(s) : a;
    Reflect.ownKeys(U).forEach((q) => {
      Ml(q, U[q]);
    });
  }
  c && Mi(c, e, "c");
  function oe(U, q) {
    G(q) ? q.forEach((be) => U(be.bind(s))) : q && U(q.bind(s));
  }
  if (oe(Kl, h), oe(hn, v), oe(zl, g), oe(Jl, C), oe(jl, T), oe(Bl, W), oe(Xl, k), oe(Yl, Q), oe(Gl, N), oe(ui, M), oe(oo, _), oe(ql, b), G(j))
    if (j.length) {
      const U = e.exposed || (e.exposed = {});
      j.forEach((q) => {
        Object.defineProperty(U, q, {
          get: () => s[q],
          set: (be) => s[q] = be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  H && e.render === it && (e.render = H), Y != null && (e.inheritAttrs = Y), I && (e.components = I), B && (e.directives = B), b && io(e);
}
function ta(e, t, s = it) {
  G(e) && (e = zn(e));
  for (const n in e) {
    const i = e[n];
    let r;
    ae(i) ? "default" in i ? r = ds(
      i.from || n,
      i.default,
      !0
    ) : r = ds(i.from || n) : r = ds(i), /* @__PURE__ */ _e(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function Mi(e, t, s) {
  ze(
    G(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function lo(e, t, s, n) {
  let i = n.includes(".") ? Yr(s, n) : () => s[n];
  if (pe(e)) {
    const r = t[e];
    ee(r) && Fe(i, r);
  } else if (ee(e))
    Fe(i, e.bind(s));
  else if (ae(e))
    if (G(e))
      e.forEach((r) => lo(r, t, s, n));
    else {
      const r = ee(e.handler) ? e.handler.bind(s) : t[e.handler];
      ee(r) && Fe(i, r, e);
    }
}
function ao(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !i.length && !s && !n ? a = t : (a = {}, i.length && i.forEach(
    (f) => qs(a, f, o, !0)
  ), qs(a, t, o)), ae(t) && r.set(t, a), a;
}
function qs(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && qs(e, r, s, !0), i && i.forEach(
    (o) => qs(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = sa[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const sa = {
  data: Ri,
  props: Pi,
  emits: Pi,
  // objects
  methods: ls,
  computed: ls,
  // lifecycle
  beforeCreate: Ae,
  created: Ae,
  beforeMount: Ae,
  mounted: Ae,
  beforeUpdate: Ae,
  updated: Ae,
  beforeDestroy: Ae,
  beforeUnmount: Ae,
  destroyed: Ae,
  unmounted: Ae,
  activated: Ae,
  deactivated: Ae,
  errorCaptured: Ae,
  serverPrefetch: Ae,
  // assets
  components: ls,
  directives: ls,
  // watch
  watch: ia,
  // provide / inject
  provide: Ri,
  inject: na
};
function Ri(e, t) {
  return t ? e ? function() {
    return Se(
      ee(e) ? e.call(this, this) : e,
      ee(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function na(e, t) {
  return ls(zn(e), zn(t));
}
function zn(e) {
  if (G(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Ae(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ls(e, t) {
  return e ? Se(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Pi(e, t) {
  return e ? G(e) && G(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Se(
    /* @__PURE__ */ Object.create(null),
    ki(e),
    ki(t ?? {})
  ) : t;
}
function ia(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = Se(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Ae(e[n], t[n]);
  return s;
}
function co() {
  return {
    app: null,
    config: {
      isNativeTag: gr,
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
let ra = 0;
function oa(e, t) {
  return function(n, i = null) {
    ee(n) || (n = Se({}, n)), i != null && !ae(i) && (i = null);
    const r = co(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = r.app = {
      _uid: ra++,
      _component: n,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Ua,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...h) {
        return o.has(c) || (c && ee(c.install) ? (o.add(c), c.install(f, ...h)) : ee(c) && (o.add(c), c(f, ...h))), f;
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), f;
      },
      component(c, h) {
        return h ? (r.components[c] = h, f) : r.components[c];
      },
      directive(c, h) {
        return h ? (r.directives[c] = h, f) : r.directives[c];
      },
      mount(c, h, v) {
        if (!a) {
          const g = f._ceVNode || se(n, i);
          return g.appContext = r, v === !0 ? v = "svg" : v === !1 && (v = void 0), e(g, c, v), a = !0, f._container = c, c.__vue_app__ = f, mn(g.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a && (ze(
          l,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(c, h) {
        return r.provides[c] = h, f;
      },
      runWithContext(c) {
        const h = Dt;
        Dt = f;
        try {
          return c();
        } finally {
          Dt = h;
        }
      }
    };
    return f;
  };
}
let Dt = null;
const la = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Je(t)}Modifiers`] || e[`${Tt(t)}Modifiers`];
function aa(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || fe;
  let i = s;
  const r = t.startsWith("update:"), o = r && la(n, t.slice(7));
  o && (o.trim && (i = s.map((c) => pe(c) ? c.trim() : c)), o.number && (i = s.map(ei)));
  let l, a = n[l = wn(t)] || // also try camelCase event handler (#2249)
  n[l = wn(Je(t))];
  !a && r && (a = n[l = wn(Tt(t))]), a && ze(
    a,
    e,
    6,
    i
  );
  const f = n[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ze(
      f,
      e,
      6,
      i
    );
  }
}
const ca = /* @__PURE__ */ new WeakMap();
function uo(e, t, s = !1) {
  const n = s ? ca : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!ee(e)) {
    const a = (f) => {
      const c = uo(f, t, !0);
      c && (l = !0, Se(o, c));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (ae(e) && n.set(e, null), null) : (G(r) ? r.forEach((a) => o[a] = null) : Se(o, r), ae(e) && n.set(e, o), o);
}
function pn(e, t) {
  return !e || !tn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), le(e, t[0].toLowerCase() + t.slice(1)) || le(e, Tt(t)) || le(e, t));
}
function Li(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: a,
    render: f,
    renderCache: c,
    props: h,
    data: v,
    setupState: g,
    ctx: C,
    inheritAttrs: T
  } = e, W = zs(e);
  let K, M;
  try {
    if (s.shapeFlag & 4) {
      const _ = i || n, H = _;
      K = st(
        f.call(
          H,
          _,
          c,
          h,
          g,
          v,
          C
        )
      ), M = l;
    } else {
      const _ = t;
      K = st(
        _.length > 1 ? _(
          h,
          { attrs: l, slots: o, emit: a }
        ) : _(
          h,
          null
        )
      ), M = t.props ? l : ua(l);
    }
  } catch (_) {
    ms.length = 0, un(_, e, 1), K = se(Pe);
  }
  let P = K;
  if (M && T !== !1) {
    const _ = Object.keys(M), { shapeFlag: H } = P;
    _.length && H & 7 && (r && _.some(sn) && (M = fa(
      M,
      r
    )), P = Ct(P, M, !1, !0));
  }
  return s.dirs && (P = Ct(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(s.dirs) : s.dirs), s.transition && Cs(P, s.transition), K = P, zs(W), K;
}
const ua = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || tn(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, fa = (e, t) => {
  const s = {};
  for (const n in e)
    (!sn(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function da(e, t, s) {
  const { props: n, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, f = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? $i(n, o, f) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const v = c[h];
        if (fo(o, n, v) && !pn(f, v))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? $i(n, o, f) : !0 : !!o;
  return !1;
}
function $i(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (fo(t, e, r) && !pn(s, r))
      return !0;
  }
  return !1;
}
function fo(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && ae(n) && ae(i) ? !ti(n, i) : n !== i;
}
function ha({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const ho = {}, po = () => Object.create(ho), go = (e) => Object.getPrototypeOf(e) === ho;
function pa(e, t, s, n = !1) {
  const i = {}, r = po();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), mo(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ ml(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function ga(e, t, s, n) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ re(i), [a] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        let v = c[h];
        if (pn(e.emitsOptions, v))
          continue;
        const g = t[v];
        if (a)
          if (le(r, v))
            g !== r[v] && (r[v] = g, f = !0);
          else {
            const C = Je(v);
            i[C] = Jn(
              a,
              l,
              C,
              g,
              e,
              !1
            );
          }
        else
          g !== r[v] && (r[v] = g, f = !0);
      }
    }
  } else {
    mo(e, t, i, r) && (f = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !le(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Tt(h)) === h || !le(t, c))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[c] !== void 0) && (i[h] = Jn(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (r !== l)
      for (const h in r)
        (!t || !le(t, h)) && (delete r[h], f = !0);
  }
  f && ht(e.attrs, "set", "");
}
function mo(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (cs(a))
        continue;
      const f = t[a];
      let c;
      i && le(i, c = Je(a)) ? !r || !r.includes(c) ? s[c] = f : (l || (l = {}))[c] = f : pn(e.emitsOptions, a) || (!(a in n) || f !== n[a]) && (n[a] = f, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ re(s), f = l || fe;
    for (let c = 0; c < r.length; c++) {
      const h = r[c];
      s[h] = Jn(
        i,
        a,
        h,
        f[h],
        e,
        !le(f, h)
      );
    }
  }
  return o;
}
function Jn(e, t, s, n, i, r) {
  const o = e[s];
  if (o != null) {
    const l = le(o, "default");
    if (l && n === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && ee(a)) {
        const { propsDefaults: f } = i;
        if (s in f)
          n = f[s];
        else {
          const c = Ms(i);
          n = f[s] = a.call(
            null,
            t
          ), c();
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
    ] && (n === "" || n === Tt(s)) && (n = !0));
  }
  return n;
}
const ma = /* @__PURE__ */ new WeakMap();
function vo(e, t, s = !1) {
  const n = s ? ma : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let a = !1;
  if (!ee(e)) {
    const c = (h) => {
      a = !0;
      const [v, g] = vo(h, t, !0);
      Se(o, v), g && l.push(...g);
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a)
    return ae(e) && n.set(e, Kt), Kt;
  if (G(r))
    for (let c = 0; c < r.length; c++) {
      const h = Je(r[c]);
      Oi(h) && (o[h] = fe);
    }
  else if (r)
    for (const c in r) {
      const h = Je(c);
      if (Oi(h)) {
        const v = r[c], g = o[h] = G(v) || ee(v) ? { type: v } : Se({}, v), C = g.type;
        let T = !1, W = !0;
        if (G(C))
          for (let K = 0; K < C.length; ++K) {
            const M = C[K], P = ee(M) && M.name;
            if (P === "Boolean") {
              T = !0;
              break;
            } else P === "String" && (W = !1);
          }
        else
          T = ee(C) && C.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = T, g[
          1
          /* shouldCastTrue */
        ] = W, (T || le(g, "default")) && l.push(h);
      }
    }
  const f = [o, l];
  return ae(e) && n.set(e, f), f;
}
function Oi(e) {
  return e[0] !== "$" && !cs(e);
}
const fi = (e) => e === "_" || e === "_ctx" || e === "$stable", di = (e) => G(e) ? e.map(st) : [st(e)], va = (e, t, s) => {
  if (t._n)
    return t;
  const n = qr((...i) => di(t(...i)), s);
  return n._c = !1, n;
}, yo = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (fi(i)) continue;
    const r = e[i];
    if (ee(r))
      t[i] = va(i, r, n);
    else if (r != null) {
      const o = di(r);
      t[i] = () => o;
    }
  }
}, _o = (e, t) => {
  const s = di(t);
  e.slots.default = () => s;
}, bo = (e, t, s) => {
  for (const n in t)
    (s || !fi(n)) && (e[n] = t[n]);
}, ya = (e, t, s) => {
  const n = e.slots = po();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (bo(n, t, s), s && xr(n, "_", i, !0)) : yo(t, n);
  } else t && _o(e, t);
}, _a = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let r = !0, o = fe;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : bo(i, t, s) : (r = !t.$stable, yo(t, i)), o = t;
  } else t && (_o(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !fi(l) && o[l] == null && delete i[l];
}, ke = Ca;
function ba(e) {
  return xa(e);
}
function xa(e, t) {
  const s = on();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: f,
    setElementText: c,
    parentNode: h,
    nextSibling: v,
    setScopeId: g = it,
    insertStaticContent: C
  } = e, T = (u, d, m, E = null, S = null, x = null, F = void 0, O = null, R = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !$t(u, d) && (E = Rs(u), Oe(u, S, x, !0), u = null), d.patchFlag === -2 && (R = !1, d.dynamicChildren = null);
    const { type: w, ref: X, shapeFlag: V } = d;
    switch (w) {
      case gn:
        W(u, d, m, E);
        break;
      case Pe:
        K(u, d, m, E);
        break;
      case Hs:
        u == null && M(d, m, E, F);
        break;
      case ne:
        I(
          u,
          d,
          m,
          E,
          S,
          x,
          F,
          O,
          R
        );
        break;
      default:
        V & 1 ? H(
          u,
          d,
          m,
          E,
          S,
          x,
          F,
          O,
          R
        ) : V & 6 ? B(
          u,
          d,
          m,
          E,
          S,
          x,
          F,
          O,
          R
        ) : (V & 64 || V & 128) && w.process(
          u,
          d,
          m,
          E,
          S,
          x,
          F,
          O,
          R,
          Qt
        );
    }
    X != null && S ? hs(X, u && u.ref, x, d || u, !d) : X == null && u && u.ref != null && hs(u.ref, null, x, u, !0);
  }, W = (u, d, m, E) => {
    if (u == null)
      n(
        d.el = l(d.children),
        m,
        E
      );
    else {
      const S = d.el = u.el;
      d.children !== u.children && f(S, d.children);
    }
  }, K = (u, d, m, E) => {
    u == null ? n(
      d.el = a(d.children || ""),
      m,
      E
    ) : d.el = u.el;
  }, M = (u, d, m, E) => {
    [u.el, u.anchor] = C(
      u.children,
      d,
      m,
      E,
      u.el,
      u.anchor
    );
  }, P = ({ el: u, anchor: d }, m, E) => {
    let S;
    for (; u && u !== d; )
      S = v(u), n(u, m, E), u = S;
    n(d, m, E);
  }, _ = ({ el: u, anchor: d }) => {
    let m;
    for (; u && u !== d; )
      m = v(u), i(u), u = m;
    i(d);
  }, H = (u, d, m, E, S, x, F, O, R) => {
    if (d.type === "svg" ? F = "svg" : d.type === "math" && (F = "mathml"), u == null)
      Q(
        d,
        m,
        E,
        S,
        x,
        F,
        O,
        R
      );
    else {
      const w = u.el && u.el._isVueCE ? u.el : null;
      try {
        w && w._beginPatch(), b(
          u,
          d,
          S,
          x,
          F,
          O,
          R
        );
      } finally {
        w && w._endPatch();
      }
    }
  }, Q = (u, d, m, E, S, x, F, O) => {
    let R, w;
    const { props: X, shapeFlag: V, transition: J, dirs: Z } = u;
    if (R = u.el = o(
      u.type,
      x,
      X && X.is,
      X
    ), V & 8 ? c(R, u.children) : V & 16 && k(
      u.children,
      R,
      null,
      E,
      S,
      kn(u, x),
      F,
      O
    ), Z && At(u, null, E, "created"), N(R, u, u.scopeId, F, E), X) {
      for (const ue in X)
        ue !== "value" && !cs(ue) && r(R, ue, null, X[ue], x, E);
      "value" in X && r(R, "value", null, X.value, x), (w = X.onVnodeBeforeMount) && Qe(w, E, u);
    }
    Z && At(u, null, E, "beforeMount");
    const ie = wa(S, J);
    ie && J.beforeEnter(R), n(R, d, m), ((w = X && X.onVnodeMounted) || ie || Z) && ke(() => {
      try {
        w && Qe(w, E, u), ie && J.enter(R), Z && At(u, null, E, "mounted");
      } finally {
      }
    }, S);
  }, N = (u, d, m, E, S) => {
    if (m && g(u, m), E)
      for (let x = 0; x < E.length; x++)
        g(u, E[x]);
    if (S) {
      let x = S.subTree;
      if (d === x || So(x.type) && (x.ssContent === d || x.ssFallback === d)) {
        const F = S.vnode;
        N(
          u,
          F,
          F.scopeId,
          F.slotScopeIds,
          S.parent
        );
      }
    }
  }, k = (u, d, m, E, S, x, F, O, R = 0) => {
    for (let w = R; w < u.length; w++) {
      const X = u[w] = O ? dt(u[w]) : st(u[w]);
      T(
        null,
        X,
        d,
        m,
        E,
        S,
        x,
        F,
        O
      );
    }
  }, b = (u, d, m, E, S, x, F) => {
    const O = d.el = u.el;
    let { patchFlag: R, dynamicChildren: w, dirs: X } = d;
    R |= u.patchFlag & 16;
    const V = u.props || fe, J = d.props || fe;
    let Z;
    if (m && kt(m, !1), (Z = J.onVnodeBeforeUpdate) && Qe(Z, m, d, u), X && At(d, u, m, "beforeUpdate"), m && kt(m, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    w && (!u.dynamicChildren || u.dynamicChildren.length !== w.length) && (R = 0, F = !1, w = null), (V.innerHTML && J.innerHTML == null || V.textContent && J.textContent == null) && c(O, ""), w ? j(
      u.dynamicChildren,
      w,
      O,
      m,
      E,
      kn(d, S),
      x
    ) : F || q(
      u,
      d,
      O,
      null,
      m,
      E,
      kn(d, S),
      x,
      !1
    ), R > 0) {
      if (R & 16)
        Y(O, V, J, m, S);
      else if (R & 2 && V.class !== J.class && r(O, "class", null, J.class, S), R & 4 && r(O, "style", V.style, J.style, S), R & 8) {
        const ie = d.dynamicProps;
        for (let ue = 0; ue < ie.length; ue++) {
          const ce = ie[ue], xe = V[ce], Ie = J[ce];
          (Ie !== xe || ce === "value") && r(O, ce, xe, Ie, S, m);
        }
      }
      R & 1 && u.children !== d.children && c(O, d.children);
    } else !F && w == null && Y(O, V, J, m, S);
    ((Z = J.onVnodeUpdated) || X) && ke(() => {
      Z && Qe(Z, m, d, u), X && At(d, u, m, "updated");
    }, E);
  }, j = (u, d, m, E, S, x, F) => {
    for (let O = 0; O < d.length; O++) {
      const R = u[O], w = d[O], X = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        R.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (R.type === ne || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$t(R, w) || // - In the case of a component, it could contain anything.
        R.shapeFlag & 198) ? h(R.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      T(
        R,
        w,
        X,
        null,
        E,
        S,
        x,
        F,
        !0
      );
    }
  }, Y = (u, d, m, E, S) => {
    if (d !== m) {
      if (d !== fe)
        for (const x in d)
          !cs(x) && !(x in m) && r(
            u,
            x,
            d[x],
            null,
            S,
            E
          );
      for (const x in m) {
        if (cs(x)) continue;
        const F = m[x], O = d[x];
        F !== O && x !== "value" && r(u, x, O, F, S, E);
      }
      "value" in m && r(u, "value", d.value, m.value, S);
    }
  }, I = (u, d, m, E, S, x, F, O, R) => {
    const w = d.el = u ? u.el : l(""), X = d.anchor = u ? u.anchor : l("");
    let { patchFlag: V, dynamicChildren: J, slotScopeIds: Z } = d;
    Z && (O = O ? O.concat(Z) : Z), u == null ? (n(w, m, E), n(X, m, E), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      m,
      X,
      S,
      x,
      F,
      O,
      R
    )) : V > 0 && V & 64 && J && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === J.length ? (j(
      u.dynamicChildren,
      J,
      m,
      S,
      x,
      F,
      O
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || S && d === S.subTree) && hi(
      u,
      d,
      !0
      /* shallow */
    )) : q(
      u,
      d,
      m,
      X,
      S,
      x,
      F,
      O,
      R
    );
  }, B = (u, d, m, E, S, x, F, O, R) => {
    d.slotScopeIds = O, u == null ? d.shapeFlag & 512 ? S.ctx.activate(
      d,
      m,
      E,
      F,
      R
    ) : te(
      d,
      m,
      E,
      S,
      x,
      F,
      R
    ) : ge(u, d, R);
  }, te = (u, d, m, E, S, x, F) => {
    const O = u.component = Pa(
      u,
      E,
      S
    );
    if (fn(u) && (O.ctx.renderer = Qt), La(O, !1, F), O.asyncDep) {
      if (S && S.registerDep(O, oe, F), !u.el) {
        const R = O.subTree = se(Pe);
        K(null, R, d, m), u.placeholder = R.el;
      }
    } else
      oe(
        O,
        u,
        d,
        m,
        S,
        x,
        F
      );
  }, ge = (u, d, m) => {
    const E = d.component = u.component;
    if (da(u, d, m))
      if (E.asyncDep && !E.asyncResolved) {
        U(E, d, m);
        return;
      } else
        E.next = d, E.update();
    else
      d.el = u.el, E.vnode = d;
  }, oe = (u, d, m, E, S, x, F) => {
    const O = () => {
      if (u.isMounted) {
        let { next: V, bu: J, u: Z, parent: ie, vnode: ue } = u;
        {
          const Xe = xo(u);
          if (Xe) {
            V && (V.el = ue.el, U(u, V, F)), Xe.asyncDep.then(() => {
              ke(() => {
                u.isUnmounted || w();
              }, S);
            });
            return;
          }
        }
        let ce = V, xe;
        kt(u, !1), V ? (V.el = ue.el, U(u, V, F)) : V = ue, J && Us(J), (xe = V.props && V.props.onVnodeBeforeUpdate) && Qe(xe, ie, V, ue), kt(u, !0);
        const Ie = Li(u), Ye = u.subTree;
        u.subTree = Ie, T(
          Ye,
          Ie,
          // parent may have changed if it's in a teleport
          h(Ye.el),
          // anchor may have changed if it's in a fragment
          Rs(Ye),
          u,
          S,
          x
        ), V.el = Ie.el, ce === null && ha(u, Ie.el), Z && ke(Z, S), (xe = V.props && V.props.onVnodeUpdated) && ke(
          () => Qe(xe, ie, V, ue),
          S
        );
      } else {
        let V;
        const { el: J, props: Z } = d, { bm: ie, m: ue, parent: ce, root: xe, type: Ie } = u, Ye = ps(d);
        kt(u, !1), ie && Us(ie), !Ye && (V = Z && Z.onVnodeBeforeMount) && Qe(V, ce, d), kt(u, !0);
        {
          xe.ce && xe.ce._hasShadowRoot() && xe.ce._injectChildStyle(
            Ie,
            u.parent ? u.parent.type : void 0
          );
          const Xe = u.subTree = Li(u);
          T(
            null,
            Xe,
            m,
            E,
            u,
            S,
            x
          ), d.el = Xe.el;
        }
        if (ue && ke(ue, S), !Ye && (V = Z && Z.onVnodeMounted)) {
          const Xe = d;
          ke(
            () => Qe(V, ce, Xe),
            S
          );
        }
        (d.shapeFlag & 256 || ce && ps(ce.vnode) && ce.vnode.shapeFlag & 256) && u.a && ke(u.a, S), u.isMounted = !0, d = m = E = null;
      }
    };
    u.scope.on();
    const R = u.effect = new Ar(O);
    u.scope.off();
    const w = u.update = R.run.bind(R), X = u.job = R.runIfDirty.bind(R);
    X.i = u, X.id = u.uid, R.scheduler = () => ci(X), kt(u, !0), w();
  }, U = (u, d, m) => {
    d.component = u;
    const E = u.vnode.props;
    u.vnode = d, u.next = null, ga(u, d.props, E, m), _a(u, d.children, m), rt(), Si(u), ot();
  }, q = (u, d, m, E, S, x, F, O, R = !1) => {
    const w = u && u.children, X = u ? u.shapeFlag : 0, V = d.children, { patchFlag: J, shapeFlag: Z } = d;
    if (J > 0) {
      if (J & 128) {
        Ce(
          w,
          V,
          m,
          E,
          S,
          x,
          F,
          O,
          R
        );
        return;
      } else if (J & 256) {
        be(
          w,
          V,
          m,
          E,
          S,
          x,
          F,
          O,
          R
        );
        return;
      }
    }
    Z & 8 ? (X & 16 && Zt(w, S, x), V !== w && c(m, V)) : X & 16 ? Z & 16 ? Ce(
      w,
      V,
      m,
      E,
      S,
      x,
      F,
      O,
      R
    ) : Zt(w, S, x, !0) : (X & 8 && c(m, ""), Z & 16 && k(
      V,
      m,
      E,
      S,
      x,
      F,
      O,
      R
    ));
  }, be = (u, d, m, E, S, x, F, O, R) => {
    u = u || Kt, d = d || Kt;
    const w = u.length, X = d.length, V = Math.min(w, X);
    let J;
    for (J = 0; J < V; J++) {
      const Z = d[J] = R ? dt(d[J]) : st(d[J]);
      T(
        u[J],
        Z,
        m,
        null,
        S,
        x,
        F,
        O,
        R
      );
    }
    w > X ? Zt(
      u,
      S,
      x,
      !0,
      !1,
      V
    ) : k(
      d,
      m,
      E,
      S,
      x,
      F,
      O,
      R,
      V
    );
  }, Ce = (u, d, m, E, S, x, F, O, R) => {
    let w = 0;
    const X = d.length;
    let V = u.length - 1, J = X - 1;
    for (; w <= V && w <= J; ) {
      const Z = u[w], ie = d[w] = R ? dt(d[w]) : st(d[w]);
      if ($t(Z, ie))
        T(
          Z,
          ie,
          m,
          null,
          S,
          x,
          F,
          O,
          R
        );
      else
        break;
      w++;
    }
    for (; w <= V && w <= J; ) {
      const Z = u[V], ie = d[J] = R ? dt(d[J]) : st(d[J]);
      if ($t(Z, ie))
        T(
          Z,
          ie,
          m,
          null,
          S,
          x,
          F,
          O,
          R
        );
      else
        break;
      V--, J--;
    }
    if (w > V) {
      if (w <= J) {
        const Z = J + 1, ie = Z < X ? d[Z].el : E;
        for (; w <= J; )
          T(
            null,
            d[w] = R ? dt(d[w]) : st(d[w]),
            m,
            ie,
            S,
            x,
            F,
            O,
            R
          ), w++;
      }
    } else if (w > J)
      for (; w <= V; )
        Oe(u[w], S, x, !0), w++;
    else {
      const Z = w, ie = w, ue = /* @__PURE__ */ new Map();
      for (w = ie; w <= J; w++) {
        const De = d[w] = R ? dt(d[w]) : st(d[w]);
        De.key != null && ue.set(De.key, w);
      }
      let ce, xe = 0;
      const Ie = J - ie + 1;
      let Ye = !1, Xe = 0;
      const es = new Array(Ie);
      for (w = 0; w < Ie; w++) es[w] = 0;
      for (w = Z; w <= V; w++) {
        const De = u[w];
        if (xe >= Ie) {
          Oe(De, S, x, !0);
          continue;
        }
        let Ze;
        if (De.key != null)
          Ze = ue.get(De.key);
        else
          for (ce = ie; ce <= J; ce++)
            if (es[ce - ie] === 0 && $t(De, d[ce])) {
              Ze = ce;
              break;
            }
        Ze === void 0 ? Oe(De, S, x, !0) : (es[Ze - ie] = w + 1, Ze >= Xe ? Xe = Ze : Ye = !0, T(
          De,
          d[Ze],
          m,
          null,
          S,
          x,
          F,
          O,
          R
        ), xe++);
      }
      const mi = Ye ? Sa(es) : Kt;
      for (ce = mi.length - 1, w = Ie - 1; w >= 0; w--) {
        const De = ie + w, Ze = d[De], vi = d[De + 1], yi = De + 1 < X ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          vi.el || wo(vi)
        ) : E;
        es[w] === 0 ? T(
          null,
          Ze,
          m,
          yi,
          S,
          x,
          F,
          O,
          R
        ) : Ye && (ce < 0 || w !== mi[ce] ? ve(Ze, m, yi, 2) : ce--);
      }
    }
  }, ve = (u, d, m, E, S = null) => {
    const { el: x, type: F, transition: O, children: R, shapeFlag: w } = u;
    if (w & 6) {
      ve(u.component.subTree, d, m, E);
      return;
    }
    if (w & 128) {
      u.suspense.move(d, m, E);
      return;
    }
    if (w & 64) {
      F.move(u, d, m, Qt);
      return;
    }
    if (F === ne) {
      n(x, d, m);
      for (let V = 0; V < R.length; V++)
        ve(R[V], d, m, E);
      n(u.anchor, d, m);
      return;
    }
    if (F === Hs) {
      P(u, d, m);
      return;
    }
    if (E !== 2 && w & 1 && O)
      if (E === 0)
        O.persisted && !x[je] ? n(x, d, m) : (O.beforeEnter(x), n(x, d, m), ke(() => O.enter(x), S));
      else {
        const { leave: V, delayLeave: J, afterLeave: Z } = O, ie = () => {
          u.ctx.isUnmounted ? i(x) : n(x, d, m);
        }, ue = () => {
          const ce = x._isLeaving || !!x[je];
          x._isLeaving && x[je](
            !0
            /* cancelled */
          ), O.persisted && !ce ? ie() : V(x, () => {
            ie(), Z && Z();
          });
        };
        J ? J(x, ie, ue) : ue();
      }
    else
      n(x, d, m);
  }, Oe = (u, d, m, E = !1, S = !1) => {
    const {
      type: x,
      props: F,
      ref: O,
      children: R,
      dynamicChildren: w,
      shapeFlag: X,
      patchFlag: V,
      dirs: J,
      cacheIndex: Z,
      memo: ie
    } = u;
    if (V === -2 && (S = !1), O != null && (rt(), hs(O, null, m, u, !0), ot()), Z != null && (d.renderCache[Z] = void 0), X & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const ue = X & 1 && J, ce = !ps(u);
    let xe;
    if (ce && (xe = F && F.onVnodeBeforeUnmount) && Qe(xe, d, u), X & 6)
      bn(u.component, m, E);
    else {
      if (X & 128) {
        u.suspense.unmount(m, E);
        return;
      }
      ue && At(u, null, d, "beforeUnmount"), X & 64 ? u.type.remove(
        u,
        d,
        m,
        Qt,
        E
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== ne || V > 0 && V & 64) ? Zt(
        w,
        d,
        m,
        !1,
        !0
      ) : (x === ne && V & 384 || !S && X & 16) && Zt(R, d, m), E && Ft(u);
    }
    const Ie = ie != null && Z == null;
    (ce && (xe = F && F.onVnodeUnmounted) || ue || Ie) && ke(() => {
      xe && Qe(xe, d, u), ue && At(u, null, d, "unmounted"), Ie && (u.el = null);
    }, m);
  }, Ft = (u) => {
    const { type: d, el: m, anchor: E, transition: S } = u;
    if (d === ne) {
      _n(m, E);
      return;
    }
    if (d === Hs) {
      _(u);
      return;
    }
    const x = () => {
      i(m), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (u.shapeFlag & 1 && S && !S.persisted) {
      const { leave: F, delayLeave: O } = S, R = () => F(m, x);
      O ? O(u.el, x, R) : R();
    } else
      x();
  }, _n = (u, d) => {
    let m;
    for (; u !== d; )
      m = v(u), i(u), u = m;
    i(d);
  }, bn = (u, d, m) => {
    const { bum: E, scope: S, job: x, subTree: F, um: O, m: R, a: w } = u;
    Di(R), Di(w), E && Us(E), S.stop(), x && (x.flags |= 8, Oe(F, u, d, m)), O && ke(O, d), ke(() => {
      u.isUnmounted = !0;
    }, d);
  }, Zt = (u, d, m, E = !1, S = !1, x = 0) => {
    for (let F = x; F < u.length; F++)
      Oe(u[F], d, m, E, S);
  }, Rs = (u) => {
    if (u.shapeFlag & 6)
      return Rs(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = v(u.anchor || u.el), m = d && d[Xr];
    return m ? v(m) : d;
  };
  let xn = !1;
  const gi = (u, d, m) => {
    let E;
    u == null ? d._vnode && (Oe(d._vnode, null, null, !0), E = d._vnode.component) : T(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      m
    ), d._vnode = u, xn || (xn = !0, Si(E), Kr(), xn = !1);
  }, Qt = {
    p: T,
    um: Oe,
    m: ve,
    r: Ft,
    mt: te,
    mc: k,
    pc: q,
    pbc: j,
    n: Rs,
    o: e
  };
  return {
    render: gi,
    hydrate: void 0,
    createApp: oa(gi)
  };
}
function kn({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function kt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wa(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function hi(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (G(n) && G(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = dt(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && hi(o, l)), l.type === gn && (l.patchFlag === -1 && (l = i[r] = dt(l)), l.el = o.el), l.type === Pe && !l.el && (l.el = o.el);
    }
}
function Sa(e) {
  const t = e.slice(), s = [0];
  let n, i, r, o, l;
  const a = e.length;
  for (n = 0; n < a; n++) {
    const f = e[n];
    if (f !== 0) {
      if (i = s[s.length - 1], e[i] < f) {
        t[n] = i, s.push(n);
        continue;
      }
      for (r = 0, o = s.length - 1; r < o; )
        l = r + o >> 1, e[s[l]] < f ? r = l + 1 : o = l;
      f < e[s[r]] && (r > 0 && (t[n] = s[r - 1]), s[r] = n);
    }
  }
  for (r = s.length, o = s[r - 1]; r-- > 0; )
    s[r] = o, o = t[o];
  return s;
}
function xo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : xo(t);
}
function Di(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function wo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? wo(t.subTree) : null;
}
const So = (e) => e.__isSuspense;
function Ca(e, t) {
  t && t.pendingBranch ? G(e) ? t.effects.push(...e) : t.effects.push(e) : kl(e);
}
const ne = /* @__PURE__ */ Symbol.for("v-fgt"), gn = /* @__PURE__ */ Symbol.for("v-txt"), Pe = /* @__PURE__ */ Symbol.for("v-cmt"), Hs = /* @__PURE__ */ Symbol.for("v-stc"), ms = [];
let Ue = null;
function A(e = !1) {
  ms.push(Ue = e ? null : []);
}
function Ta() {
  ms.pop(), Ue = ms[ms.length - 1] || null;
}
let Ts = 1;
function Gs(e, t = !1) {
  Ts += e, e < 0 && Ue && t && (Ue.hasOnce = !0);
}
function Co(e) {
  return e.dynamicChildren = Ts > 0 ? Ue || Kt : null, Ta(), Ts > 0 && Ue && Ue.push(e), e;
}
function D(e, t, s, n, i, r) {
  return Co(
    p(
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
function mt(e, t, s, n, i) {
  return Co(
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
function Ys(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function $t(e, t) {
  return e.type === t.type && e.key === t.key;
}
const To = ({ key: e }) => e ?? null, Vs = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? pe(e) || /* @__PURE__ */ _e(e) || ee(e) ? { i: We, r: e, k: t, f: !!s } : e : null);
function p(e, t = null, s = null, n = 0, i = null, r = e === ne ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && To(t),
    ref: t && Vs(t),
    scopeId: Jr,
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
    ctx: We
  };
  return l ? (Xs(a, s), r & 128 && e.normalize(a)) : s && (a.shapeFlag |= pe(s) ? 8 : 16), Ts > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ue && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ue.push(a), a;
}
const se = Ia;
function Ia(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === Zl) && (e = Pe), Ys(e)) {
    const l = Ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Xs(l, s), Ts > 0 && !r && Ue && (l.shapeFlag & 6 ? Ue[Ue.indexOf(e)] = l : Ue.push(l)), l.patchFlag = -2, l;
  }
  if (Na(e) && (e = e.__vccOpts), t) {
    t = Ea(t);
    let { class: l, style: a } = t;
    l && !pe(l) && (t.class = ye(l)), ae(a) && (/* @__PURE__ */ cn(a) && !G(a) && (a = Se({}, a)), t.style = St(a));
  }
  const o = pe(e) ? 1 : So(e) ? 128 : Zr(e) ? 64 : ae(e) ? 4 : ee(e) ? 2 : 0;
  return p(
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
function Ea(e) {
  return e ? /* @__PURE__ */ cn(e) || go(e) ? Se({}, e) : e : null;
}
function Ct(e, t, s = !1, n = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, f = t ? ka(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && To(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? G(r) ? r.concat(Vs(t)) : [r, Vs(t)] : Vs(t)
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
    patchFlag: t && e.type !== ne ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Ct(e.ssContent),
    ssFallback: e.ssFallback && Ct(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && n && Cs(
    c,
    a.clone(c)
  ), c;
}
function Aa(e = " ", t = 0) {
  return se(gn, null, e, t);
}
function Ds(e, t) {
  const s = se(Hs, null, e);
  return s.staticCount = t, s;
}
function Te(e = "", t = !1) {
  return t ? (A(), mt(Pe, null, e)) : se(Pe, null, e);
}
function st(e) {
  return e == null || typeof e == "boolean" ? se(Pe) : G(e) ? se(
    ne,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ys(e) ? dt(e) : se(gn, null, String(e));
}
function dt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ct(e);
}
function Xs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (G(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Xs(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !go(t) ? t._ctx = We : i === 3 && We && (We.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ee(t)) {
    if (n & 65) {
      Xs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: We }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [Aa(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function ka(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = ye([t.class, n.class]));
      else if (i === "style")
        t.style = St([t.style, n.style]);
      else if (tn(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(G(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !sn(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Qe(e, t, s, n = null) {
  ze(e, t, 7, [
    s,
    n
  ]);
}
const Ma = co();
let Ra = 0;
function Pa(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Ma, r = {
    uid: Ra++,
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
    scope: new Tr(
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
    propsOptions: vo(n, i),
    emitsOptions: uo(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: fe,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: fe,
    data: fe,
    props: fe,
    attrs: fe,
    slots: fe,
    refs: fe,
    setupState: fe,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = aa.bind(null, r), e.ce && e.ce(r), r;
}
let Le = null;
const pi = () => Le || We;
let Zs, qn;
{
  const e = on(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Zs = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Le = s
  ), qn = t(
    "__VUE_SSR_SETTERS__",
    (s) => Is = s
  );
}
const Ms = (e) => {
  const t = Le;
  return Zs(e), e.scope.on(), () => {
    e.scope.off(), Zs(t);
  };
}, Ni = () => {
  Le && Le.scope.off(), Zs(null);
};
function Io(e) {
  return e.vnode.shapeFlag & 4;
}
let Is = !1;
function La(e, t = !1, s = !1) {
  t && qn(t);
  const { props: n, children: i } = e.vnode, r = Io(e);
  pa(e, n, r, t), ya(e, i, s || t);
  const o = r ? $a(e, t) : void 0;
  return t && qn(!1), o;
}
function $a(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ql);
  const { setup: n } = s;
  if (n) {
    rt();
    const i = e.setupContext = n.length > 1 ? Da(e) : null, r = Ms(e), o = ks(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = vr(o);
    if (ot(), r(), (l || e.sp) && !ps(e) && io(e), l) {
      if (o.then(Ni, Ni), t)
        return o.then((a) => {
          Fi(e, a);
        }).catch((a) => {
          un(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Fi(e, o);
  } else
    Eo(e);
}
function Fi(e, t, s) {
  ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ae(t) && (e.setupState = jr(t)), Eo(e);
}
function Eo(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || it);
  {
    const i = Ms(e);
    rt();
    try {
      ea(e);
    } finally {
      ot(), i();
    }
  }
}
const Oa = {
  get(e, t) {
    return Ee(e, "get", ""), e[t];
  }
};
function Da(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Oa),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function mn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(jr(ai(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in gs)
        return gs[s](e);
    },
    has(t, s) {
      return s in t || s in gs;
    }
  })) : e.proxy;
}
function Na(e) {
  return ee(e) && "__vccOpts" in e;
}
const $e = (e, t) => /* @__PURE__ */ Cl(e, t, Is);
function Fa(e, t, s) {
  try {
    Gs(-1);
    const n = arguments.length;
    return n === 2 ? ae(t) && !G(t) ? Ys(t) ? se(e, null, [t]) : se(e, t) : se(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Ys(s) && (s = [s]), se(e, t, s));
  } finally {
    Gs(1);
  }
}
const Ua = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Gn;
const Ui = typeof window < "u" && window.trustedTypes;
if (Ui)
  try {
    Gn = /* @__PURE__ */ Ui.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ao = Gn ? (e) => Gn.createHTML(e) : (e) => e, Ha = "http://www.w3.org/2000/svg", Va = "http://www.w3.org/1998/Math/MathML", ut = typeof document < "u" ? document : null, Hi = ut && /* @__PURE__ */ ut.createElement("template"), ja = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? ut.createElementNS(Ha, e) : t === "mathml" ? ut.createElementNS(Va, e) : s ? ut.createElement(e, { is: s }) : ut.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => ut.createTextNode(e),
  createComment: (e) => ut.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ut.querySelector(e),
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
      Hi.innerHTML = Ao(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Hi.content;
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
}, _t = "transition", ns = "animation", Es = /* @__PURE__ */ Symbol("_vtc"), ko = {
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
}, Ba = /* @__PURE__ */ Se(
  {},
  Qr,
  ko
), Wa = (e) => (e.displayName = "Transition", e.props = Ba, e), Ka = /* @__PURE__ */ Wa(
  (e, { slots: t }) => Fa(Vl, za(e), t)
), Mt = (e, t = []) => {
  G(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Vi = (e) => e ? G(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function za(e) {
  const t = {};
  for (const I in e)
    I in ko || (t[I] = e[I]);
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
    appearActiveClass: f = o,
    appearToClass: c = l,
    leaveFromClass: h = `${s}-leave-from`,
    leaveActiveClass: v = `${s}-leave-active`,
    leaveToClass: g = `${s}-leave-to`
  } = e, C = Ja(i), T = C && C[0], W = C && C[1], {
    onBeforeEnter: K,
    onEnter: M,
    onEnterCancelled: P,
    onLeave: _,
    onLeaveCancelled: H,
    onBeforeAppear: Q = K,
    onAppear: N = M,
    onAppearCancelled: k = P
  } = t, b = (I, B, te, ge) => {
    I._enterCancelled = ge, Rt(I, B ? c : l), Rt(I, B ? f : o), te && te();
  }, j = (I, B) => {
    I._isLeaving = !1, Rt(I, h), Rt(I, g), Rt(I, v), B && B();
  }, Y = (I) => (B, te) => {
    const ge = I ? N : M, oe = () => b(B, I, te);
    Mt(ge, [B, oe]), ji(() => {
      Rt(B, I ? a : r), at(B, I ? c : l), Vi(ge) || Bi(B, n, T, oe);
    });
  };
  return Se(t, {
    onBeforeEnter(I) {
      Mt(K, [I]), at(I, r), at(I, o);
    },
    onBeforeAppear(I) {
      Mt(Q, [I]), at(I, a), at(I, f);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(I, B) {
      I._isLeaving = !0;
      const te = () => j(I, B);
      at(I, h), I._enterCancelled ? (at(I, v), zi(I)) : (zi(I), at(I, v)), ji(() => {
        I._isLeaving && (Rt(I, h), at(I, g), Vi(_) || Bi(I, n, W, te));
      }), Mt(_, [I, te]);
    },
    onEnterCancelled(I) {
      b(I, !1, void 0, !0), Mt(P, [I]);
    },
    onAppearCancelled(I) {
      b(I, !0, void 0, !0), Mt(k, [I]);
    },
    onLeaveCancelled(I) {
      j(I), Mt(H, [I]);
    }
  });
}
function Ja(e) {
  if (e == null)
    return null;
  if (ae(e))
    return [Mn(e.enter), Mn(e.leave)];
  {
    const t = Mn(e);
    return [t, t];
  }
}
function Mn(e) {
  return Bo(e);
}
function at(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[Es] || (e[Es] = /* @__PURE__ */ new Set())).add(t);
}
function Rt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[Es];
  s && (s.delete(t), s.size || (e[Es] = void 0));
}
function ji(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let qa = 0;
function Bi(e, t, s, n) {
  const i = e._endId = ++qa, r = () => {
    i === e._endId && n();
  };
  if (s != null)
    return setTimeout(r, s);
  const { type: o, timeout: l, propCount: a } = Ga(e, t);
  if (!o)
    return n();
  const f = o + "end";
  let c = 0;
  const h = () => {
    e.removeEventListener(f, v), r();
  }, v = (g) => {
    g.target === e && ++c >= a && h();
  };
  setTimeout(() => {
    c < a && h();
  }, l + 1), e.addEventListener(f, v);
}
function Ga(e, t) {
  const s = window.getComputedStyle(e), n = (C) => (s[C] || "").split(", "), i = n(`${_t}Delay`), r = n(`${_t}Duration`), o = Wi(i, r), l = n(`${ns}Delay`), a = n(`${ns}Duration`), f = Wi(l, a);
  let c = null, h = 0, v = 0;
  t === _t ? o > 0 && (c = _t, h = o, v = r.length) : t === ns ? f > 0 && (c = ns, h = f, v = a.length) : (h = Math.max(o, f), c = h > 0 ? o > f ? _t : ns : null, v = c ? c === _t ? r.length : a.length : 0);
  const g = c === _t && /\b(?:transform|all)(?:,|$)/.test(
    n(`${_t}Property`).toString()
  );
  return {
    type: c,
    timeout: h,
    propCount: v,
    hasTransform: g
  };
}
function Wi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => Ki(s) + Ki(e[n])));
}
function Ki(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function zi(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ya(e, t, s) {
  const n = e[Es];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Qs = /* @__PURE__ */ Symbol("_vod"), Mo = /* @__PURE__ */ Symbol("_vsh"), is = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[Qs] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : rs(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), rs(e, !0), n.enter(e)) : n.leave(e, () => {
      rs(e, !1);
    }) : rs(e, t));
  },
  beforeUnmount(e, { value: t }) {
    rs(e, t);
  }
};
function rs(e, t) {
  e.style.display = t ? e[Qs] : "none", e[Mo] = !t;
}
const Xa = /* @__PURE__ */ Symbol(""), Za = /(?:^|;)\s*display\s*:/;
function Qa(e, t, s) {
  const n = e.style, i = pe(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (pe(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && as(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && as(n, o, "");
    for (const o in s) {
      o === "display" && (r = !0);
      const l = s[o];
      l != null ? tc(
        e,
        o,
        !pe(t) && t ? t[o] : void 0,
        l
      ) || as(n, o, l) : as(n, o, "");
    }
  } else if (i) {
    if (t !== s) {
      const o = n[Xa];
      o && (s += ";" + o), n.cssText = s, r = Za.test(s);
    }
  } else t && e.removeAttribute("style");
  Qs in e && (e[Qs] = r ? n.display : "", e[Mo] && (n.display = "none"));
}
const Ji = /\s*!important$/;
function as(e, t, s) {
  if (G(s))
    s.forEach((n) => as(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = ec(e, t);
    Ji.test(s) ? e.setProperty(
      Tt(n),
      s.replace(Ji, ""),
      "important"
    ) : e[n] = s;
  }
}
const qi = ["Webkit", "Moz", "ms"], Rn = {};
function ec(e, t) {
  const s = Rn[t];
  if (s)
    return s;
  let n = Je(t);
  if (n !== "filter" && n in e)
    return Rn[t] = n;
  n = br(n);
  for (let i = 0; i < qi.length; i++) {
    const r = qi[i] + n;
    if (r in e)
      return Rn[t] = r;
  }
  return t;
}
function tc(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && pe(n) && s === n;
}
const Gi = "http://www.w3.org/1999/xlink";
function Yi(e, t, s, n, i, r = Go(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Gi, t.slice(6, t.length)) : e.setAttributeNS(Gi, t, s) : s == null || r && !wr(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ke(s) ? String(s) : s
  );
}
function Xi(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Ao(s) : s);
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
    l === "boolean" ? s = wr(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Bt(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function sc(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Zi = /* @__PURE__ */ Symbol("_vei");
function nc(e, t, s, n, i = null) {
  const r = e[Zi] || (e[Zi] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [l, a] = oc(t);
    if (n) {
      const f = r[t] = cc(
        n,
        i
      );
      Bt(e, l, f, a);
    } else o && (sc(e, l, o, a), r[t] = void 0);
  }
}
const ic = /(Once|Passive|Capture)$/, rc = /^on:?(?:Once|Passive|Capture)$/;
function oc(e) {
  let t, s;
  for (; (s = e.match(ic)) && !rc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Tt(e.slice(2)), t];
}
let Pn = 0;
const lc = /* @__PURE__ */ Promise.resolve(), ac = () => Pn || (lc.then(() => Pn = 0), Pn = Date.now());
function cc(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const i = s.value;
    if (G(i)) {
      const r = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        r.call(n), n._stopped = !0;
      };
      const o = i.slice(), l = [n];
      for (let a = 0; a < o.length && !n._stopped; a++) {
        const f = o[a];
        f && ze(
          f,
          t,
          5,
          l
        );
      }
    } else
      ze(
        i,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = ac(), s;
}
const Qi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uc = (e, t, s, n, i, r) => {
  const o = i === "svg";
  t === "class" ? Ya(e, n, o) : t === "style" ? Qa(e, s, n) : tn(t) ? sn(t) || nc(e, t, s, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fc(e, t, n, o)) ? (Xi(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Yi(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (dc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !pe(n))) ? Xi(e, Je(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Yi(e, t, n, o));
};
function fc(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qi(t) && ee(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Qi(t) && pe(s) ? !1 : t in e;
}
function dc(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = Je(t);
  return Array.isArray(s) ? s.some((i) => Je(i) === n) : Object.keys(s).some((i) => Je(i) === n);
}
const er = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return G(t) ? (s) => Us(t, s) : t;
};
function hc(e) {
  e.target.composing = !0;
}
function tr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ln = /* @__PURE__ */ Symbol("_assign");
function sr(e, t, s) {
  return t && (e = e.trim()), s && (e = ei(e)), e;
}
const js = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[Ln] = er(i);
    const r = n || i.props && i.props.type === "number";
    Bt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Ln](sr(e.value, s, r));
    }), (s || r) && Bt(e, "change", () => {
      e.value = sr(e.value, s, r);
    }), t || (Bt(e, "compositionstart", hc), Bt(e, "compositionend", tr), Bt(e, "change", tr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: r } }, o) {
    if (e[Ln] = er(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? ei(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const f = e.getRootNode();
    (f instanceof Document || f instanceof ShadowRoot) && f.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === a) || (e.value = a);
  }
}, pc = ["ctrl", "shift", "alt", "meta"], gc = {
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
  exact: (e, t) => pc.some((s) => e[`${s}Key`] && !t.includes(s))
}, Wt = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = gc[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  });
}, mc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ro = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (i) => {
    if (!("key" in i))
      return;
    const r = Tt(i.key);
    if (t.some(
      (o) => o === r || mc[o] === r
    ))
      return e(i);
  });
}, vc = /* @__PURE__ */ Se({ patchProp: uc }, ja);
let nr;
function yc() {
  return nr || (nr = ba(vc));
}
const Po = (...e) => {
  const t = yc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = bc(n);
    if (!i) return;
    const r = t._component;
    !ee(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
function bc(e) {
  return pe(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Lo;
const vn = (e) => Lo = e, $o = (
  /* istanbul ignore next */
  Symbol()
);
function Yn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var vs;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(vs || (vs = {}));
function xc() {
  const e = Ir(!0), t = e.run(() => /* @__PURE__ */ he({}));
  let s = [], n = [];
  const i = ai({
    install(r) {
      vn(i), i._a = r, r.provide($o, i), r.config.globalProperties.$pinia = i, n.forEach((o) => s.push(o)), n = [];
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
const Oo = () => {
};
function ir(e, t, s, n = Oo) {
  e.push(t);
  const i = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), n());
  };
  return !s && Er() && Xo(i), i;
}
function Ht(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const wc = (e) => e(), rr = Symbol(), $n = Symbol();
function Xn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    Yn(i) && Yn(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ _e(n) && !/* @__PURE__ */ gt(n) ? e[s] = Xn(i, n) : e[s] = n;
  }
  return e;
}
const Sc = (
  /* istanbul ignore next */
  Symbol()
);
function Cc(e) {
  return !Yn(e) || !e.hasOwnProperty(Sc);
}
const { assign: xt } = Object;
function Tc(e) {
  return !!(/* @__PURE__ */ _e(e) && e.effect);
}
function Ic(e, t, s, n) {
  const { state: i, actions: r, getters: o } = t, l = s.state.value[e];
  let a;
  function f() {
    l || (s.state.value[e] = i ? i() : {});
    const c = /* @__PURE__ */ bl(s.state.value[e]);
    return xt(c, r, Object.keys(o || {}).reduce((h, v) => (h[v] = ai($e(() => {
      vn(s);
      const g = s._s.get(e);
      return o[v].call(g, g);
    })), h), {}));
  }
  return a = Do(e, f, t, s, n, !0), a;
}
function Do(e, t, s = {}, n, i, r) {
  let o;
  const l = xt({ actions: {} }, s), a = { deep: !0 };
  let f, c, h = [], v = [], g;
  const C = n.state.value[e];
  !r && !C && (n.state.value[e] = {});
  let T;
  function W(k) {
    let b;
    f = c = !1, typeof k == "function" ? (k(n.state.value[e]), b = {
      type: vs.patchFunction,
      storeId: e,
      events: g
    }) : (Xn(n.state.value[e], k), b = {
      type: vs.patchObject,
      payload: k,
      storeId: e,
      events: g
    });
    const j = T = Symbol();
    Ne().then(() => {
      T === j && (f = !0);
    }), c = !0, Ht(h, b, n.state.value[e]);
  }
  const K = r ? function() {
    const { state: b } = s, j = b ? b() : {};
    this.$patch((Y) => {
      xt(Y, j);
    });
  } : (
    /* istanbul ignore next */
    Oo
  );
  function M() {
    o.stop(), h = [], v = [], n._s.delete(e);
  }
  const P = (k, b = "") => {
    if (rr in k)
      return k[$n] = b, k;
    const j = function() {
      vn(n);
      const Y = Array.from(arguments), I = [], B = [];
      function te(U) {
        I.push(U);
      }
      function ge(U) {
        B.push(U);
      }
      Ht(v, {
        args: Y,
        name: j[$n],
        store: H,
        after: te,
        onError: ge
      });
      let oe;
      try {
        oe = k.apply(this && this.$id === e ? this : H, Y);
      } catch (U) {
        throw Ht(B, U), U;
      }
      return oe instanceof Promise ? oe.then((U) => (Ht(I, U), U)).catch((U) => (Ht(B, U), Promise.reject(U))) : (Ht(I, oe), oe);
    };
    return j[rr] = !0, j[$n] = b, j;
  }, _ = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: ir.bind(null, v),
    $patch: W,
    $reset: K,
    $subscribe(k, b = {}) {
      const j = ir(h, k, b.detached, () => Y()), Y = o.run(() => Fe(() => n.state.value[e], (I) => {
        (b.flush === "sync" ? c : f) && k({
          storeId: e,
          type: vs.direct,
          events: g
        }, I);
      }, xt({}, a, b)));
      return j;
    },
    $dispose: M
  }, H = /* @__PURE__ */ an(_);
  n._s.set(e, H);
  const N = (n._a && n._a.runWithContext || wc)(() => n._e.run(() => (o = Ir()).run(() => t({ action: P }))));
  for (const k in N) {
    const b = N[k];
    if (/* @__PURE__ */ _e(b) && !Tc(b) || /* @__PURE__ */ gt(b))
      r || (C && Cc(b) && (/* @__PURE__ */ _e(b) ? b.value = C[k] : Xn(b, C[k])), n.state.value[e][k] = b);
    else if (typeof b == "function") {
      const j = P(b, k);
      N[k] = j, l.actions[k] = b;
    }
  }
  return xt(H, N), xt(/* @__PURE__ */ re(H), N), Object.defineProperty(H, "$state", {
    get: () => n.state.value[e],
    set: (k) => {
      W((b) => {
        xt(b, k);
      });
    }
  }), n._p.forEach((k) => {
    xt(H, o.run(() => k({
      store: H,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), C && r && s.hydrate && s.hydrate(H.$state, C), f = !0, c = !0, H;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function yn(e, t, s) {
  let n, i;
  const r = typeof t == "function";
  typeof e == "string" ? (n = e, i = r ? s : t) : (i = e, n = e.id);
  function o(l, a) {
    const f = Rl();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (f ? ds($o, null) : null), l && vn(l), l = Lo, l._s.has(n) || (r ? Do(n, t, i, l) : Ic(n, i, l)), l._s.get(n);
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
function On() {
  return {
    volume: 65,
    playMode: "list",
    position: null,
    widgetMode: "dock",
    dockAlign: "left",
    autoPlayOnNewCue: !0,
    providers: Ec(),
    customCueRules: [],
    customOpacity: !1,
    opacity: 75
  };
}
const Me = /* @__PURE__ */ yn("settings", {
  state: () => ({
    settings: On(),
    storage: null
  }),
  getters: {
    defaults: () => On()
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = On();
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
    setOpacity(e) {
      this.settings.opacity = e, this.save();
    },
    setCustomOpacity(e) {
      this.settings.customOpacity = e, this.save();
    },
    setDockAlign(e) {
      this.settings.dockAlign = e, this.save();
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
class Ac {
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
const or = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function kc(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const i = new RegExp(or.source, "g"), r = [];
    let o;
    for (; (o = i.exec(n)) !== null; ) {
      const a = parseInt(o[1], 10), f = parseInt(o[2], 10), c = o[3] ?? "", h = c ? parseInt(c.padEnd(3, "0"), 10) : 0;
      r.push(a * 60 + f + h / 1e3);
    }
    if (r.length === 0) continue;
    const l = n.replace(new RegExp(or.source, "g"), "").trim();
    if (l !== "")
      for (const a of r)
        s.push({ time: a, text: l });
  }
  s.sort((n, i) => n.time - i.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function lr(e, t) {
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
      return this.ctx().extensionSettings[ys] ?? null;
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
      s.extensionSettings[ys] = t, s.saveSettingsDebounced();
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
  // ----- key helpers -----
  settingsKey() {
    return `${ys}__settings`;
  }
}
function Rc() {
  return new Mc();
}
const ys = "st-music-player", ar = "stmp_cursor", cr = "stmp_userlist";
class Pc {
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
        i.removeEventListener("loadedmetadata", l), i.removeEventListener("error", a), clearTimeout(f), i.src = "";
      }, l = () => {
        r || (r = !0, o(), n(!0));
      }, a = () => {
        r || (r = !0, o(), n(!1));
      }, f = setTimeout(() => {
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
class $c {
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
class Oc {
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
function No(e) {
  const s = e.filter((n) => n.enabled).sort((n, i) => n.priority - i.priority).map((n) => {
    const i = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new Lc({ baseURL: i.baseURL, apiBase: i.apiBase });
      case "local":
        return new $c({
          storage: i.storage ? i.storage : void 0
        });
      case "custom":
        return new Oc({
          searchURL: i.searchURL,
          resolveURL: i.resolveURL
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new Pc(s);
}
const Dc = {
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
  Hidden: "隐藏",
  Inline: "集成",
  "Dock Alignment": "吸附对齐",
  Left: "左对齐",
  Right: "右对齐",
  "Choose how the player widget is displayed": "选择播放器小部件的显示方式",
  "Align the docked player to the left or right of the input bar": "将吸附的播放器对齐到输入栏的左侧或右侧",
  Providers: "数据源",
  "Default Volume": "默认音量",
  "Default Play Mode": "默认播放模式",
  "Auto-play on new cue": "新提示自动播放",
  "Automatically play when a new song cue is detected": "检测到新的点歌提示时自动播放",
  "Custom opacity": "自定义透明度",
  Opacity: "透明度",
  "Adjust the player background opacity": "调整播放器背景透明度",
  "Not available in inline mode": "集成模式下不可用",
  "Enable or disable music sources": "启用或禁用音乐来源",
  "Custom Cue Rules (Regex)": "自定义提示规则 (正则)",
  "Add regex rule...": "添加正则规则...",
  "Additional regex patterns to detect song cues in chat": "用于检测聊天中点歌提示的额外正则规则",
  Data: "数据管理",
  "Export data": "导出设置",
  "Import data": "导入设置",
  "Save your settings to a JSON file": "将设置保存为 JSON 文件",
  "Load settings from a JSON file": "从 JSON 文件加载设置",
  "List Loop": "列表循环",
  Random: "随机",
  "Single Loop": "单曲循环",
  NetEase: "网易云",
  "Custom API": "自定义API",
  "API baseURL": "API 地址",
  "Search URL": "搜索接口",
  "Resolve URL": "解析接口",
  "Data exported": "数据已导出",
  "Data imported": "数据已导入",
  "Import failed": "导入失败",
  "Invalid JSON": "JSON 格式错误",
  Playback: "播放",
  General: "通用",
  Appearance: "外观",
  AI: "AI",
  About: "关于",
  Version: "版本",
  "A floating music player extension for SillyTavern": "SillyTavern 悬浮音乐播放器扩展",
  GitHub: "GitHub"
};
let Vt = null;
function Nc() {
  if (Vt) return Vt;
  try {
    if (typeof SillyTavern < "u") {
      const e = SillyTavern.getContext();
      e?.getCurrentLocale && (Vt = e.getCurrentLocale());
    }
  } catch {
  }
  return Vt || (Vt = (typeof navigator < "u" ? navigator.language || navigator.userLanguage : "en")?.toLowerCase() || "en"), Vt;
}
function L(e) {
  return Nc().startsWith("zh") ? Dc[e] ?? e : e;
}
function Ns() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const Xt = /* @__PURE__ */ yn("playlist", {
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
      return Me().settings.playMode;
    }
  },
  actions: {
    init(e) {
      this.chatIndexer = e;
    },
    setChatId(e) {
      this.chatId = e, this.list = this.list.filter((n) => n.source !== "chat"), this.loadFromStorage();
      const s = Me().storage;
      if (s) {
        const n = s.getMetadata(ar);
        n && n.chatId === e && this.chatIndexer?.setCursor(e, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const t = Me().storage;
      if (!t || !this.chatId) return;
      const s = t.getMetadata(cr);
      if (s && Array.isArray(s)) {
        const n = s.filter((r) => r && r.source === "user"), i = s.filter((r) => r && r.source === "local");
        this.list = [
          ...this.list.filter((r) => r.source !== "user" && r.source !== "local"),
          ...n,
          ...i
        ];
      }
    },
    addItem(e) {
      this.list.push(e), (e.source === "user" || e.source === "local") && this.saveUserList();
    },
    removeItem(e) {
      if (e < 0 || e >= this.list.length) return;
      const t = this.list.splice(e, 1)[0];
      t && (t.source === "user" || t.source === "local") && this.saveUserList(), e === this.currentIndex ? this.currentIndex = -1 : e < this.currentIndex && this.currentIndex--;
    },
    addFromCue(e, t) {
      const s = {
        id: Ns(),
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
        id: Ns(),
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
        id: Ns(),
        song: e,
        source: "local",
        localBlobKey: t,
        addedAt: Date.now()
      };
      this.list.push(s), this.saveUserList();
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
      const s = Me(), n = s.storage;
      if (!n) return;
      let i = null;
      const r = No(s.settings.providers);
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
        console.warn(`[playlist] resolve failed for "${t.song}"`), typeof toastr < "u" && toastr.warning(`${L("Cannot play")}: ${t.song}`);
        return;
      }
      await Nt().loadAndPlay(i);
    },
    handleNewCues(e) {
      if (e.length === 0) return;
      const t = Me();
      let s = null;
      for (const n of e)
        for (const i of n.cues) {
          const r = {
            id: Ns(),
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
      const t = Me(), s = this.chatIndexer.scanMessage(
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
      const t = Me().storage;
      if (!t || !this.chatId) return;
      const s = this.list.filter((n) => n.source === "user" || n.source === "local");
      t.setMetadata(cr, s);
    },
    getCursor() {
      return !this.chatIndexer || !this.chatId ? -1 : this.chatIndexer.getCursor(this.chatId);
    },
    setCursor(e) {
      if (!this.chatIndexer || !this.chatId) return;
      this.chatIndexer.setCursor(this.chatId, e);
      const s = Me().storage;
      s && s.setMetadata(ar, {
        chatId: this.chatId,
        lastScannedMessageId: e,
        updatedAt: Date.now()
      });
    }
  }
}), Nt = /* @__PURE__ */ yn("player", {
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
      const e = new Ac();
      this.audioEngine = e;
      const t = Nt();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = lr(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        t.currentLyricIndex = n;
      }), e.on("ended", () => {
        Xt().next();
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
      this.volume = e, this.audioEngine?.setVolume(e / 100), Me().setVolume(e);
    },
    updateLyrics(e) {
      this.lyrics = kc(e), this.currentLyricIndex = -1;
    },
    getActiveLyric() {
      return lr(this.lyrics, this.currentTime);
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), Fc = /* @__PURE__ */ yn("search", {
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
}), Uc = ["width", "height"], Hc = {
  key: 0,
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}, Vc = {
  key: 10,
  points: "6 9 12 15 18 9"
}, jc = {
  key: 11,
  points: "18 15 12 9 6 15"
}, Bc = {
  key: 15,
  points: "20 6 9 17 4 12"
}, Wc = /* @__PURE__ */ It({
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
      e.name === "play" ? (A(), D("polygon", Hc)) : e.name === "pause" ? (A(), D(ne, { key: 1 }, [
        s[0] || (s[0] = p("rect", {
          x: "6",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[1] || (s[1] = p("rect", {
          x: "14",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1))
      ], 64)) : e.name === "prev" ? (A(), D(ne, { key: 2 }, [
        s[2] || (s[2] = p("polygon", {
          points: "19 20 9 12 19 4 19 20",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[3] || (s[3] = p("line", {
          x1: "5",
          y1: "19",
          x2: "5",
          y2: "5"
        }, null, -1))
      ], 64)) : e.name === "next" ? (A(), D(ne, { key: 3 }, [
        s[4] || (s[4] = p("polygon", {
          points: "5 4 15 12 5 20 5 4",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[5] || (s[5] = p("line", {
          x1: "19",
          y1: "5",
          x2: "19",
          y2: "19"
        }, null, -1))
      ], 64)) : e.name === "repeat" ? (A(), D(ne, { key: 4 }, [
        s[6] || (s[6] = p("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = p("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = p("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = p("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (A(), D(ne, { key: 5 }, [
        s[10] || (s[10] = Ds('<polyline points="17 1 21 5 17 9" data-v-4bfc4099></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-4bfc4099></path><polyline points="7 23 3 19 7 15" data-v-4bfc4099></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-4bfc4099></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-4bfc4099>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (A(), D(ne, { key: 6 }, [
        s[11] || (s[11] = Ds('<polyline points="16 3 21 3 21 8" data-v-4bfc4099></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-4bfc4099></line><polyline points="21 16 21 21 16 21" data-v-4bfc4099></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-4bfc4099></line><line x1="4" y1="4" x2="9" y2="9" data-v-4bfc4099></line>', 5))
      ], 64)) : e.name === "search" ? (A(), D(ne, { key: 7 }, [
        s[12] || (s[12] = p("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1)),
        s[13] || (s[13] = p("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1))
      ], 64)) : e.name === "plus" ? (A(), D(ne, { key: 8 }, [
        s[14] || (s[14] = p("line", {
          x1: "12",
          y1: "5",
          x2: "12",
          y2: "19"
        }, null, -1)),
        s[15] || (s[15] = p("line", {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12"
        }, null, -1))
      ], 64)) : e.name === "x" ? (A(), D(ne, { key: 9 }, [
        s[16] || (s[16] = p("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }, null, -1)),
        s[17] || (s[17] = p("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        }, null, -1))
      ], 64)) : e.name === "chevron-down" ? (A(), D("polyline", Vc)) : e.name === "chevron-up" ? (A(), D("polyline", jc)) : e.name === "music" ? (A(), D(ne, { key: 12 }, [
        s[18] || (s[18] = p("path", { d: "M9 18V5l12-2v13" }, null, -1)),
        s[19] || (s[19] = p("circle", {
          cx: "6",
          cy: "18",
          r: "3"
        }, null, -1)),
        s[20] || (s[20] = p("circle", {
          cx: "18",
          cy: "16",
          r: "3"
        }, null, -1))
      ], 64)) : e.name === "volume" ? (A(), D(ne, { key: 13 }, [
        s[21] || (s[21] = p("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = p("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = p("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (A(), D(ne, { key: 14 }, [
        s[24] || (s[24] = p("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[25] || (s[25] = p("line", {
          x1: "23",
          y1: "9",
          x2: "17",
          y2: "15"
        }, null, -1)),
        s[26] || (s[26] = p("line", {
          x1: "17",
          y1: "9",
          x2: "23",
          y2: "15"
        }, null, -1))
      ], 64)) : e.name === "check" ? (A(), D("polyline", Bc)) : e.name === "loader" ? (A(), D(ne, { key: 16 }, [
        s[27] || (s[27] = Ds('<line x1="12" y1="2" x2="12" y2="6" data-v-4bfc4099></line><line x1="12" y1="18" x2="12" y2="22" data-v-4bfc4099></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-4bfc4099></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-4bfc4099></line><line x1="2" y1="12" x2="6" y2="12" data-v-4bfc4099></line><line x1="18" y1="12" x2="22" y2="12" data-v-4bfc4099></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-4bfc4099></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-4bfc4099></line>', 8))
      ], 64)) : e.name === "list-music" ? (A(), D(ne, { key: 17 }, [
        s[28] || (s[28] = Ds('<path d="M3 12h11" data-v-4bfc4099></path><path d="M3 6h11" data-v-4bfc4099></path><path d="M3 18h7" data-v-4bfc4099></path><path d="M16 8v13" data-v-4bfc4099></path><circle cx="14" cy="21" r="2" data-v-4bfc4099></circle><path d="M16 8l5-2v3" data-v-4bfc4099></path>', 6))
      ], 64)) : Te("", !0)
    ], 8, Uc));
  }
}), Et = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, me = /* @__PURE__ */ Et(Wc, [["__scopeId", "data-v-4bfc4099"]]), Kc = {
  key: 0,
  class: "stmp-mini stmp-mini-dock-desktop"
}, zc = {
  key: 0,
  class: "stmp-mini-cover"
}, Jc = ["src"], qc = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, Gc = {
  key: 1,
  class: "stmp-mini-text stmp-mini-dock-fallback"
}, Yc = { class: "stmp-mini-controls" }, Xc = ["aria-label"], Zc = ["aria-label"], Qc = {
  key: 1,
  class: "stmp-mini stmp-mini-dock-mobile"
}, eu = {
  key: 0,
  class: "stmp-mini-cover"
}, tu = ["src"], su = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, nu = {
  key: 1,
  class: "stmp-mini-text stmp-mini-dock-fallback"
}, iu = { class: "stmp-mini-controls" }, ru = ["aria-label"], ou = ["aria-label"], lu = {
  key: 2,
  class: "stmp-mini stmp-mini-drag stmp-mini-drag-idle"
}, au = { class: "stmp-mini-cover stmp-mini-cover-square" }, cu = {
  key: 3,
  class: "stmp-mini stmp-mini-drag"
}, uu = ["aria-label"], fu = ["src"], du = { class: "stmp-mini-cover-overlay" }, hu = { class: "stmp-mini-drag-right" }, pu = { class: "stmp-mini-text stmp-mini-text-drag" }, gu = /* @__PURE__ */ It({
  __name: "CollapsedBar",
  props: {
    isDock: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = Nt(), s = Xt(), n = e, i = /* @__PURE__ */ he(!1), r = $e(() => t.currentTrack?.cover || ""), o = $e(() => !!t.currentTrack), l = $e(() => {
      const N = t.currentTrack;
      if (!N) return "";
      const k = N.name, b = N.artist || "";
      return b ? `${k} - ${b}` : k;
    }), a = $e(() => {
      const N = t.currentLyricIndex;
      return N < 0 || N >= t.lyrics.length ? "" : t.lyrics[N].text;
    }), f = $e(() => {
      const N = t.currentLyricIndex;
      if (N < 0 || N >= t.lyrics.length) return 0;
      const k = t.lyrics[N];
      return k.next ? Math.max(500, (k.next.time - k.time) * 1e3) : 5e3;
    }), c = /* @__PURE__ */ he(0), h = /* @__PURE__ */ he([]), v = /* @__PURE__ */ he(null);
    function g(N, k) {
      N && (h.value[k] = N);
    }
    async function C() {
      await Ne();
      const N = t.currentLyricIndex, k = v.value;
      if (!k || N < 0) {
        c.value = 0;
        return;
      }
      const b = h.value[N];
      if (!b) return;
      const j = b.offsetTop, Y = b.offsetHeight, I = k.clientHeight;
      c.value = j - I / 2 + Y / 2;
    }
    Fe(() => t.currentLyricIndex, C), Fe(() => t.lyrics, () => {
      h.value = [], C();
    });
    const T = /* @__PURE__ */ he(null), W = /* @__PURE__ */ he(null), K = /* @__PURE__ */ he(0), M = /* @__PURE__ */ he(0);
    function P() {
      const N = T.value, k = W.value;
      if (!N || !k) {
        K.value = 0;
        return;
      }
      const b = N.scrollWidth - k.clientWidth;
      b > 3 && f.value > 0 ? (M.value = Math.max(200, f.value - 200), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          K.value = -b;
        });
      })) : K.value = 0;
    }
    Fe(a, () => {
      M.value = 0, K.value = 0, Ne(() => requestAnimationFrame(P));
    });
    function _() {
      i.value = !0;
    }
    Fe(() => t.currentTrack?.url, () => {
      i.value = !1;
    });
    function H(N) {
      N.stopPropagation(), t.togglePlay();
    }
    function Q(N) {
      N.stopPropagation(), s.next();
    }
    return hn(() => {
      C(), requestAnimationFrame(P);
    }), (N, k) => n.isDock && !n.isMobile ? (A(), D("div", Kc, [
      r.value && !i.value ? (A(), D("div", zc, [
        p("img", {
          src: r.value,
          alt: "",
          onError: _
        }, null, 40, Jc)
      ])) : (A(), D("div", qc, [
        se(me, {
          name: "music",
          size: 14
        })
      ])),
      p("div", {
        ref_key: "dockWindowRef",
        ref: v,
        class: "stmp-mini-dock-text"
      }, [
        y(t).lyrics.length > 0 ? (A(), D("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: St({ transform: `translateY(-${c.value}px)` })
        }, [
          (A(!0), D(ne, null, Be(y(t).lyrics, (b, j) => (A(), D("span", {
            key: j,
            ref_for: !0,
            ref: (Y) => g(Y, j),
            class: ye(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": j === y(t).currentLyricIndex }])
          }, z(b.text), 3))), 128))
        ], 4)) : (A(), D("span", Gc, z(l.value), 1))
      ], 512),
      p("div", Yc, [
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": y(t).isPlaying ? y(L)("Pause") : y(L)("Play"),
          onClick: H
        }, [
          se(me, {
            name: y(t).isPlaying ? "pause" : "play",
            size: 14
          }, null, 8, ["name"])
        ], 8, Xc),
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": y(L)("Next"),
          onClick: Q
        }, [
          se(me, {
            name: "next",
            size: 14
          })
        ], 8, Zc)
      ])
    ])) : n.isDock && n.isMobile ? (A(), D("div", Qc, [
      r.value && !i.value ? (A(), D("div", eu, [
        p("img", {
          src: r.value,
          alt: "",
          onError: _
        }, null, 40, tu)
      ])) : (A(), D("div", su, [
        se(me, {
          name: "music",
          size: 14
        })
      ])),
      p("div", {
        ref_key: "dockWindowRef",
        ref: v,
        class: "stmp-mini-dock-text"
      }, [
        y(t).lyrics.length > 0 ? (A(), D("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: St({ transform: `translateY(-${c.value}px)` })
        }, [
          (A(!0), D(ne, null, Be(y(t).lyrics, (b, j) => (A(), D("span", {
            key: j,
            ref_for: !0,
            ref: (Y) => g(Y, j),
            class: ye(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": j === y(t).currentLyricIndex }])
          }, z(b.text), 3))), 128))
        ], 4)) : (A(), D("span", nu, z(l.value), 1))
      ], 512),
      p("div", iu, [
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": y(t).isPlaying ? y(L)("Pause") : y(L)("Play"),
          onClick: H
        }, [
          se(me, {
            name: y(t).isPlaying ? "pause" : "play",
            size: 16
          }, null, 8, ["name"])
        ], 8, ru),
        p("button", {
          class: "stmp-mini-btn",
          "aria-label": y(L)("Next"),
          onClick: Q
        }, [
          se(me, {
            name: "next",
            size: 16
          })
        ], 8, ou)
      ])
    ])) : o.value ? (A(), D("div", cu, [
      p("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": y(t).isPlaying ? y(L)("Pause") : y(L)("Play"),
        onClick: H
      }, [
        r.value && !i.value ? (A(), D("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: _
        }, null, 40, fu)) : (A(), mt(me, {
          key: 1,
          name: "music",
          size: 20
        })),
        p("div", du, [
          se(me, {
            name: y(t).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, uu),
      p("div", hu, [
        p("span", pu, z(l.value), 1),
        p("div", {
          ref_key: "lyricContainerRef",
          ref: W,
          class: "stmp-mini-lyric"
        }, [
          p("span", {
            ref_key: "lyricScrollRef",
            ref: T,
            class: "stmp-mini-lyric-scroll",
            style: St({
              transform: `translateX(${K.value}px)`,
              transition: M.value > 0 ? `transform ${M.value}ms linear` : "none"
            })
          }, z(a.value || " "), 5)
        ], 512)
      ])
    ])) : (A(), D("div", lu, [
      p("div", au, [
        se(me, {
          name: "music",
          size: 20
        })
      ])
    ]));
  }
}), ur = /* @__PURE__ */ Et(gu, [["__scopeId", "data-v-f2316395"]]), mu = { class: "stmp-playlist" }, vu = {
  key: 0,
  class: "stmp-upload-area"
}, yu = ["aria-label"], _u = {
  key: 1,
  class: "stmp-empty"
}, bu = { class: "stmp-group-label" }, xu = ["onClick"], wu = { class: "stmp-item-index" }, Su = { class: "stmp-item-info" }, Cu = { class: "stmp-item-song" }, Tu = {
  key: 0,
  class: "stmp-item-artist"
}, Iu = ["onClick"], Eu = /* @__PURE__ */ It({
  __name: "PlaylistView",
  setup(e) {
    const t = Xt(), s = Me(), n = $e(() => s.settings.providers.find((h) => h.id === "local")?.enabled ?? !1), i = /* @__PURE__ */ he(null), r = () => {
      i.value?.click();
    }, o = async (h) => {
      const v = h.target;
      if (!v.files || !v.files[0]) return;
      const g = v.files[0], C = `stmp:audio:${Date.now()}-${g.name}`, T = s.storage;
      T && (await T.setBlob(C, g), t.addLocalFile(g.name, C)), v.value = "";
    }, l = $e(() => {
      const h = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((v, g) => {
        h[v.source] && h[v.source].push({ index: g, item: v });
      }), h;
    }), a = {
      chat: L("From Chat"),
      user: L("My List"),
      local: L("Local Files")
    };
    function f(h) {
      t.play(h);
    }
    function c(h) {
      t.removeItem(h);
    }
    return (h, v) => (A(), D("div", mu, [
      n.value ? (A(), D("div", vu, [
        p("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: i,
          onChange: o,
          style: { display: "none" }
        }, null, 544),
        p("button", {
          class: "stmp-upload-btn",
          "aria-label": y(L)("Add local file"),
          onClick: r
        }, " + " + z(y(L)("Add local file")), 9, yu)
      ])) : Te("", !0),
      y(t).isEmpty ? (A(), D("div", _u, z(y(L)("No Songs")), 1)) : (A(), D(ne, { key: 2 }, Be(["chat", "user", "local"], (g) => p("div", {
        key: g,
        class: "stmp-group"
      }, [
        l.value[g].length ? (A(), D(ne, { key: 0 }, [
          p("div", bu, z(a[g]), 1),
          (A(!0), D(ne, null, Be(l.value[g], (C) => (A(), D("div", {
            key: C.item.id,
            class: ye(["stmp-item", { active: C.index === y(t).currentIndex }]),
            onClick: (T) => f(C.index)
          }, [
            p("span", wu, z(C.index + 1), 1),
            p("div", Su, [
              p("span", Cu, z(C.item.song), 1),
              C.item.artist ? (A(), D("span", Tu, z(C.item.artist), 1)) : Te("", !0)
            ]),
            p("button", {
              class: "stmp-item-del",
              onClick: Wt((T) => c(C.index), ["stop"])
            }, [
              se(me, {
                name: "x",
                size: 14
              })
            ], 8, Iu)
          ], 10, xu))), 128))
        ], 64)) : Te("", !0)
      ])), 64))
    ]));
  }
}), Au = /* @__PURE__ */ Et(Eu, [["__scopeId", "data-v-a0435f62"]]), ku = { class: "stmp-search" }, Mu = { class: "stmp-search-bar" }, Ru = ["placeholder"], Pu = ["disabled"], Lu = {
  key: 0,
  class: "stmp-search-error"
}, $u = ["aria-label"], Ou = {
  key: 1,
  class: "stmp-search-loading"
}, Du = {
  key: 2,
  class: "stmp-search-empty"
}, Nu = {
  key: 3,
  class: "stmp-search-hint"
}, Fu = {
  key: 4,
  class: "stmp-results"
}, Uu = ["onClick"], Hu = { class: "stmp-result-name" }, Vu = {
  key: 0,
  class: "stmp-result-artist"
}, ju = ["aria-label", "onClick"], Bu = /* @__PURE__ */ It({
  __name: "SearchView",
  setup(e) {
    const t = Fc(), s = Xt(), n = Me(), i = /* @__PURE__ */ he(t.keyword), r = /* @__PURE__ */ he(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ he(null);
    async function l() {
      t.setKeyword(i.value);
      const g = No(n.settings.providers);
      await t.search(g);
    }
    const a = () => {
      l();
    };
    function f(g) {
      const C = g.provider + g.id;
      if (o.value === C) return;
      o.value = C;
      const T = s.list.length;
      s.addFromSearch(g);
      const W = s.list.length - 1;
      W >= T && s.play(W), setTimeout(() => {
        r.value.add(C), o.value = null;
      }, 600);
    }
    function c(g) {
      const C = g.provider + g.id;
      r.value.has(C) || (s.addFromSearch(g), r.value.add(C));
    }
    function h(g) {
      return r.value.has(g.provider + g.id);
    }
    function v(g) {
      return o.value === g.provider + g.id;
    }
    return (g, C) => (A(), D("div", ku, [
      p("div", Mu, [
        ct(p("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (T) => i.value = T),
          class: "stmp-search-input",
          placeholder: y(L)("Search Song..."),
          onKeydown: Ro(l, ["enter"])
        }, null, 40, Ru), [
          [js, i.value]
        ]),
        p("button", {
          class: "stmp-icon-btn",
          disabled: y(t).isSearching,
          onClick: l
        }, [
          y(t).isSearching ? (A(), mt(me, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (A(), mt(me, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, Pu)
      ]),
      y(t).error ? (A(), D("div", Lu, [
        p("span", null, z(y(t).error), 1),
        p("button", {
          class: "stmp-retry-btn",
          "aria-label": y(L)("Retry"),
          onClick: a
        }, z(y(L)("Retry")), 9, $u)
      ])) : Te("", !0),
      y(t).isSearching ? (A(), D("div", Ou, z(y(L)("Searching...")), 1)) : i.value && !y(t).results.length ? (A(), D("div", Du, z(y(L)("No results")), 1)) : !i.value && !y(t).results.length ? (A(), D("div", Nu, z(y(L)("Type a song name to search")), 1)) : Te("", !0),
      y(t).results.length ? (A(), D("div", Fu, [
        (A(!0), D(ne, null, Be(y(t).results, (T) => (A(), D("div", {
          key: T.provider + T.id,
          class: ye(["stmp-result", { "stmp-result-playing": v(T) }])
        }, [
          p("div", {
            class: "stmp-result-info",
            onClick: (W) => f(T)
          }, [
            p("span", Hu, z(T.name), 1),
            T.artist ? (A(), D("span", Vu, z(T.artist), 1)) : Te("", !0)
          ], 8, Uu),
          p("button", {
            class: ye(["stmp-icon-btn stmp-result-add", { added: h(T) }]),
            "aria-label": h(T) ? y(L)("Added") : y(L)("Add to list"),
            onClick: Wt((W) => c(T), ["stop"])
          }, [
            se(me, {
              name: h(T) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, ju)
        ], 2))), 128))
      ])) : Te("", !0)
    ]));
  }
}), Wu = /* @__PURE__ */ Et(Bu, [["__scopeId", "data-v-a8d156af"]]), Ku = { class: "stmp-panel" }, zu = { class: "stmp-topbar stmp-drag-handle" }, Ju = ["aria-label"], qu = { class: "stmp-cover-large" }, Gu = ["src"], Yu = {
  key: 1,
  class: "stmp-cover-placeholder"
}, Xu = { class: "stmp-track-name" }, Zu = { class: "stmp-track-artist" }, Qu = { class: "stmp-lyric-header" }, ef = { class: "stmp-track-name" }, tf = { class: "stmp-track-artist" }, sf = { class: "stmp-progress" }, nf = ["value"], rf = { class: "stmp-time" }, of = { class: "stmp-controls" }, lf = { class: "stmp-ctrl-side stmp-search-side" }, af = ["aria-label"], cf = ["aria-label"], uf = ["aria-label"], ff = ["aria-label"], df = ["aria-label"], hf = ["aria-label"], pf = { class: "stmp-ctrl-side stmp-volume-side" }, gf = ["aria-label"], mf = ["value"], vf = {
  key: 0,
  class: "stmp-overlay"
}, yf = { class: "stmp-overlay-header" }, _f = { class: "stmp-overlay-title" }, bf = ["aria-label"], xf = { class: "stmp-overlay-body" }, wf = /* @__PURE__ */ It({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = Nt(), s = Xt(), n = Me(), i = /* @__PURE__ */ he("cover"), r = /* @__PURE__ */ he(null), o = /* @__PURE__ */ he(!1), l = /* @__PURE__ */ he(!1);
    let a = null;
    const f = $e(() => t.currentTrack?.cover || ""), c = () => {
      o.value = !0;
    };
    Fe(
      () => t.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const h = $e(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), v = /* @__PURE__ */ he(0), g = /* @__PURE__ */ he([]), C = /* @__PURE__ */ he(null);
    function T(I, B) {
      I && (g.value[B] = I);
    }
    async function W() {
      await Ne();
      const I = t.currentLyricIndex, B = C.value;
      if (!B || I < 0) {
        v.value = 0;
        return;
      }
      const te = g.value[I];
      if (!te) return;
      const ge = te.offsetTop, oe = te.offsetHeight, U = B.clientHeight;
      v.value = ge - U / 2 + oe / 2;
    }
    Fe(() => t.currentLyricIndex, W), Fe(() => t.lyrics, () => {
      g.value = [], W();
    });
    function K(I) {
      const B = Math.floor(I / 60), te = Math.floor(I % 60);
      return B + ":" + te.toString().padStart(2, "0");
    }
    function M(I) {
      const B = I.target;
      t.seek(Number(B.value) / 100 * t.duration);
    }
    const P = ["list", "random", "single"], _ = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function H() {
      const I = n.settings.playMode, B = P.indexOf(I), te = P[(B + 1) % P.length];
      n.setPlayMode(te);
    }
    function Q(I) {
      const B = I.target;
      t.setVolume(Number(B.value));
    }
    function N() {
      a && clearTimeout(a), l.value = !0;
    }
    function k() {
      a = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function b() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    function j(I) {
      r.value === I ? r.value = null : r.value = I;
    }
    function Y() {
      r.value = null;
    }
    return (I, B) => (A(), D("div", Ku, [
      p("div", zu, [
        B[7] || (B[7] = p("div", { class: "stmp-topbar-spacer" }, null, -1)),
        p("button", {
          class: "stmp-icon-btn",
          "aria-label": y(L)("Collapse panel"),
          onClick: B[0] || (B[0] = Wt((te) => I.$emit("collapse"), ["stop"]))
        }, [
          se(me, {
            name: "chevron-down",
            size: 18
          })
        ], 8, Ju)
      ]),
      p("div", {
        class: "stmp-display",
        onClick: B[1] || (B[1] = (te) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        p("div", {
          class: ye(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          p("div", qu, [
            f.value && !o.value ? (A(), D("img", {
              key: 0,
              src: f.value,
              alt: "cover",
              onError: c
            }, null, 40, Gu)) : (A(), D("div", Yu, [
              se(me, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          p("div", Xu, z(y(t).currentTrack?.name || y(L)("No Song")), 1),
          p("div", Zu, z(y(t).currentTrack?.artist || " "), 1)
        ], 2),
        p("div", {
          class: ye(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          p("div", Qu, [
            p("div", ef, z(y(t).currentTrack?.name || y(L)("No Song")), 1),
            p("div", tf, z(y(t).currentTrack?.artist || " "), 1)
          ]),
          p("div", {
            ref_key: "lyricWindowRef",
            ref: C,
            class: "stmp-lyric-window"
          }, [
            y(t).lyrics.length > 0 ? (A(), D("div", {
              key: 0,
              class: "stmp-lyric-scroll",
              style: St({ transform: `translateY(-${v.value}px)` })
            }, [
              (A(!0), D(ne, null, Be(y(t).lyrics, (te, ge) => (A(), D("div", {
                key: ge,
                ref_for: !0,
                ref: (oe) => T(oe, ge),
                class: ye(["stmp-lyric-line", { "stmp-lyric-active": ge === y(t).currentLyricIndex }])
              }, z(te.text), 3))), 128))
            ], 4)) : Te("", !0)
          ], 512)
        ], 2)
      ]),
      p("div", sf, [
        p("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: h.value,
          class: "stmp-range",
          onInput: M
        }, null, 40, nf),
        p("div", rf, [
          p("span", null, z(K(y(t).currentTime)), 1),
          p("span", null, z(K(y(t).duration)), 1)
        ])
      ]),
      p("div", of, [
        p("div", lf, [
          p("button", {
            class: ye(["stmp-ctrl-btn", { active: r.value === "search" }]),
            "aria-label": y(L)("Search"),
            onClick: B[2] || (B[2] = Wt((te) => j("search"), ["stop"]))
          }, [
            se(me, {
              name: "search",
              size: 18
            })
          ], 10, af)
        ]),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": y(L)("Toggle play mode"),
          onClick: H
        }, [
          se(me, {
            name: _[y(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, cf),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": y(L)("Previous"),
          onClick: B[3] || (B[3] = (te) => y(s).prev())
        }, [
          se(me, {
            name: "prev",
            size: 18
          })
        ], 8, uf),
        p("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": y(t).isPlaying ? y(L)("Pause") : y(L)("Play"),
          onClick: B[4] || (B[4] = (te) => y(t).togglePlay())
        }, [
          se(me, {
            name: y(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, ff),
        p("button", {
          class: "stmp-ctrl-btn",
          "aria-label": y(L)("Next"),
          onClick: B[5] || (B[5] = (te) => y(s).next())
        }, [
          se(me, {
            name: "next",
            size: 18
          })
        ], 8, df),
        p("button", {
          class: ye(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": y(L)("Playlist"),
          onClick: B[6] || (B[6] = Wt((te) => j("list"), ["stop"]))
        }, [
          se(me, {
            name: "list-music",
            size: 18
          })
        ], 10, hf),
        p("div", pf, [
          p("div", {
            class: "stmp-volume-container",
            onMouseenter: N,
            onMouseleave: k
          }, [
            p("button", {
              class: "stmp-ctrl-btn",
              "aria-label": y(L)("Mute / Unmute"),
              onClick: b
            }, [
              se(me, {
                name: y(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, gf),
            p("div", {
              class: ye(["stmp-volume-popup", { show: l.value }])
            }, [
              p("input", {
                type: "range",
                min: "0",
                max: "100",
                value: y(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: Q
              }, null, 40, mf)
            ], 2)
          ], 32)
        ])
      ]),
      se(Ka, { name: "stmp-overlay" }, {
        default: qr(() => [
          r.value ? (A(), D("div", vf, [
            p("div", yf, [
              p("span", _f, z(r.value === "list" ? y(L)("Playlist") : y(L)("Search")), 1),
              p("button", {
                class: "stmp-overlay-close",
                "aria-label": y(L)("Close"),
                onClick: Wt(Y, ["stop"])
              }, [
                se(me, {
                  name: "x",
                  size: 16
                })
              ], 8, bf)
            ]),
            p("div", xf, [
              r.value === "list" ? (A(), mt(Au, { key: 0 })) : (A(), mt(Wu, { key: 1 }))
            ])
          ])) : Te("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), fr = /* @__PURE__ */ Et(wf, [["__scopeId", "data-v-4bf7f7af"]]), Sf = {
  key: 1,
  class: "stmp-inline-expanded"
}, dr = 3, Cf = 500, Tf = /* @__PURE__ */ It({
  __name: "App",
  setup(e) {
    const t = Me(), s = Nt(), n = /* @__PURE__ */ he(!1), i = /* @__PURE__ */ he(null);
    let r = null;
    const o = $e(() => t.settings.widgetMode === "dock"), l = $e(() => t.settings.widgetMode === "inline"), a = $e(() => t.settings.widgetMode === "hidden"), f = /* @__PURE__ */ he(window.innerWidth <= 768), c = /* @__PURE__ */ he(!1), h = $e(() => t.settings.customOpacity ? t.settings.opacity : 75), v = (U) => {
      U.key === "Escape" && (n.value = !1), U.key === " " && U.target === document.body && (U.preventDefault(), s.togglePlay());
    };
    let g = 0, C = 0, T = 0, W = 0, K = !1, M = !1, P = 0, _ = !1, H = null, Q = null;
    function N(U) {
      if (o.value) return;
      const q = U.target;
      if (q.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!q.closest(".stmp-drag-handle") || q.closest("button")) || !n.value && q.closest("button"))
        return;
      const be = i.value?.getBoundingClientRect();
      be && (g = U.clientX, C = U.clientY, T = be.left, W = be.top, K = !1, M = !0, P = Date.now(), _ = !1, i.value && (i.value.style.left = be.left + "px", i.value.style.top = be.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), H = k, Q = b, document.addEventListener("pointermove", H), document.addEventListener("pointerup", Q), U.preventDefault());
    }
    function k(U) {
      if (!i.value || !M) return;
      const q = U.clientX - g, be = U.clientY - C;
      (Math.abs(q) > dr || Math.abs(be) > dr) && (K = !0);
      let Ce = T + q, ve = W + be;
      const Oe = i.value.offsetWidth || 60, Ft = i.value.offsetHeight || 40, _n = window.innerWidth - Oe, bn = window.innerHeight - Ft;
      Ce = Math.max(0, Math.min(Ce, _n)), ve = Math.max(0, Math.min(ve, bn)), i.value.style.left = Ce + "px", i.value.style.top = ve + "px";
    }
    function b() {
      M = !1, H && document.removeEventListener("pointermove", H), Q && document.removeEventListener("pointerup", Q), H = null, Q = null;
      const U = Date.now() - P;
      if (K) {
        if (_ = !0, i.value) {
          const q = i.value.getBoundingClientRect();
          t.setPosition({ x: q.left, y: q.top }), n.value && Ne(() => j());
        }
        return;
      }
      if (U > Cf) {
        _ = !0;
        return;
      }
    }
    function j() {
      if (!i.value) return;
      const U = i.value.getBoundingClientRect(), q = i.value.offsetWidth, be = i.value.offsetHeight;
      let Ce = U.left, ve = U.top;
      Ce + q > window.innerWidth && (Ce = window.innerWidth - q), ve + be > window.innerHeight && (ve = window.innerHeight - be), Ce < 0 && (Ce = 0), ve < 0 && (ve = 0), i.value.style.left = Ce + "px", i.value.style.top = ve + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: Ce, y: ve });
    }
    function Y() {
      if (!i.value || !o.value) return;
      const U = document.querySelector("#send_form");
      if (!U) return;
      const q = U.getBoundingClientRect(), be = i.value.offsetHeight || 38, Ce = Math.max(80, q.top - 8);
      i.value.style.maxHeight = Ce + "px";
      let ve = q.top - Math.min(be, Ce);
      if (ve < 4 && (ve = 4), window.innerWidth <= 768)
        i.value.style.left = q.left + "px", i.value.style.width = q.width + "px";
      else {
        const Oe = t.settings.dockAlign === "right", Ft = i.value.offsetWidth;
        Oe ? i.value.style.left = q.right - Ft + "px" : i.value.style.left = q.left + "px", i.value.style.width = "";
      }
      i.value.style.top = ve + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function I() {
      if (!i.value || o.value) return;
      const U = t.settings.position;
      U ? (i.value.style.left = U.x + "px", i.value.style.top = U.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", window.innerWidth <= 768 && Ne(() => j())) : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
    }
    function B(U) {
      if (_) {
        _ = !1;
        return;
      }
      if (o.value && !n.value) {
        if (U.target.closest("button, input")) return;
        ge();
        return;
      }
      if (!o.value && !n.value) {
        if (U.target.closest("button, input")) return;
        ge();
      }
    }
    function te(U) {
      n.value || U.target.closest("button, input") || ge();
    }
    function ge() {
      n.value = !n.value, Ne(() => {
        o.value ? Y() : l.value || t.settings.position && j();
      });
    }
    Fe(() => t.settings.widgetMode, (U) => {
      n.value = !1, i.value && (i.value.style.width = "", i.value.style.left = "", i.value.style.top = "", i.value.style.right = "", i.value.style.bottom = "", i.value.style.maxHeight = ""), U === "inline" && (c.value = !!document.querySelector("#send_form")), Ne(() => {
        U === "dock" ? Y() : U === "drag" && I();
      });
    }), Fe(() => t.settings.dockAlign, () => {
      o.value && Ne(() => Y());
    }), hn(() => {
      c.value = !!document.querySelector("#send_form"), Ne(() => {
        o.value ? Y() : l.value || I();
      }), i.value && typeof ResizeObserver < "u" && (r = new ResizeObserver(() => {
        o.value && Y();
      }), r.observe(i.value)), window.addEventListener("resize", oe), window.addEventListener("keydown", v);
    });
    function oe() {
      f.value = window.innerWidth <= 768, o.value ? Ne(() => Y()) : l.value || Ne(() => j());
    }
    return ui(() => {
      b(), r && (r.disconnect(), r = null), window.removeEventListener("resize", oe), window.removeEventListener("keydown", v);
    }), (U, q) => l.value ? (A(), D(ne, { key: 0 }, [
      c.value ? (A(), mt(Fl, {
        key: 0,
        to: "#send_form"
      }, [
        n.value ? (A(), D("div", Sf, [
          se(fr, { onCollapse: ge })
        ])) : (A(), D("div", {
          key: 0,
          class: "stmp-inline-bar",
          onClick: te
        }, [
          se(ur, {
            "is-dock": !0,
            "is-mobile": !0
          })
        ]))
      ])) : Te("", !0)
    ], 64)) : a.value ? Te("", !0) : (A(), D("div", {
      key: 1,
      ref_key: "widgetRef",
      ref: i,
      class: ye(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": o.value
      }]),
      style: St({ "--stmp-opacity": h.value + "%" }),
      onPointerdown: N,
      onClick: B
    }, [
      n.value ? (A(), mt(fr, {
        key: 1,
        onCollapse: ge
      })) : (A(), mt(ur, {
        key: 0,
        "is-dock": o.value,
        "is-mobile": f.value
      }, null, 8, ["is-dock", "is-mobile"]))
    ], 38));
  }
}), If = /* @__PURE__ */ Et(Tf, [["__scopeId", "data-v-bd91601a"]]), Ef = {
  key: 0,
  class: "stmp-switch-label"
}, Af = { class: "stmp-switch" }, kf = ["checked", "disabled"], Mf = /* @__PURE__ */ It({
  __name: "ToggleSwitch",
  props: {
    modelValue: { type: Boolean },
    label: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = t;
    function n(i) {
      const r = i.target;
      s("update:modelValue", r.checked);
    }
    return (i, r) => (A(), D("label", {
      class: ye(["stmp-switch-row", { "stmp-switch-disabled": e.disabled }])
    }, [
      e.label ? (A(), D("span", Ef, z(e.label), 1)) : Te("", !0),
      p("span", Af, [
        p("input", {
          type: "checkbox",
          checked: e.modelValue,
          disabled: e.disabled,
          onChange: n
        }, null, 40, kf),
        r[0] || (r[0] = p("span", { class: "stmp-switch-track" }, [
          p("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ], 2));
  }
}), Dn = /* @__PURE__ */ Et(Mf, [["__scopeId", "data-v-0c8dbcad"]]), Rf = { class: "stmp-settings" }, Pf = { class: "stmp-tab-bar" }, Lf = ["onClick"], $f = { class: "stmp-tab-content" }, Of = { class: "stmp-tab-panel" }, Df = { class: "stmp-row" }, Nf = { class: "stmp-row-info" }, Ff = { class: "stmp-row-title" }, Uf = { class: "stmp-row-desc" }, Hf = { class: "stmp-chips" }, Vf = ["onClick"], jf = {
  key: 0,
  class: "stmp-row"
}, Bf = { class: "stmp-row-info" }, Wf = { class: "stmp-row-title" }, Kf = { class: "stmp-row-desc" }, zf = { class: "stmp-chips" }, Jf = ["onClick"], qf = { class: "stmp-section" }, Gf = { class: "stmp-section-title" }, Yf = { class: "stmp-row" }, Xf = { class: "stmp-row-info" }, Zf = { class: "stmp-row-title" }, Qf = { class: "stmp-row-desc" }, ed = { class: "stmp-row" }, td = { class: "stmp-row-info" }, sd = { class: "stmp-row-title" }, nd = { class: "stmp-row-desc" }, id = { class: "stmp-tab-panel" }, rd = {
  key: 0,
  class: "stmp-hint"
}, od = {
  key: 1,
  class: "stmp-slider-row"
}, ld = { class: "stmp-slider-label" }, ad = ["value"], cd = { class: "stmp-tab-panel" }, ud = { class: "stmp-slider-row" }, fd = { class: "stmp-slider-label" }, dd = ["value"], hd = { class: "stmp-row" }, pd = { class: "stmp-row-info" }, gd = { class: "stmp-row-title" }, md = ["value"], vd = ["value"], yd = { class: "stmp-tab-panel" }, _d = { class: "stmp-section" }, bd = { class: "stmp-section-title" }, xd = {
  class: "stmp-row-desc",
  style: { "margin-bottom": "6px" }
}, wd = {
  key: 0,
  class: "stmp-provider-fields"
}, Sd = ["onUpdate:modelValue", "placeholder"], Cd = ["onUpdate:modelValue", "placeholder"], Td = { class: "stmp-section" }, Id = { class: "stmp-section-title" }, Ed = {
  class: "stmp-row-desc",
  style: { "margin-bottom": "6px" }
}, Ad = { class: "stmp-rules" }, kd = ["onClick"], Md = { class: "stmp-rule-add" }, Rd = ["placeholder"], Pd = { class: "stmp-tab-panel" }, Ld = { class: "stmp-about" }, $d = { class: "stmp-about-version" }, Od = { class: "stmp-about-desc" }, Dd = "1.0.0", Nd = /* @__PURE__ */ It({
  __name: "SettingsView",
  setup(e) {
    const t = Me(), s = /* @__PURE__ */ he("general"), n = [
      { id: "general", label: L("General"), icon: "fa-solid fa-sliders" },
      { id: "appearance", label: L("Appearance"), icon: "fa-solid fa-palette" },
      { id: "playback", label: L("Playback"), icon: "fa-solid fa-music" },
      { id: "ai", label: L("AI"), icon: "fa-solid fa-wand-magic-sparkles" },
      { id: "about", label: L("About"), icon: "fa-solid fa-circle-info" }
    ], i = [
      { value: "dock", label: L("Dock"), icon: "fa-solid fa-grip-lines" },
      { value: "drag", label: L("Drag"), icon: "fa-solid fa-up-down-left-right" },
      { value: "inline", label: L("Inline"), icon: "fa-solid fa-puzzle-piece" },
      { value: "hidden", label: L("Hidden"), icon: "fa-solid fa-eye-slash" }
    ], r = [
      { value: "left", label: L("Left"), icon: "fa-solid fa-align-left" },
      { value: "right", label: L("Right"), icon: "fa-solid fa-align-right" }
    ], o = () => t.settings.widgetMode === "inline";
    function l(M) {
      const P = M.target;
      t.setOpacity(Number(P.value));
    }
    const a = [
      { value: "list", label: L("List Loop") },
      { value: "random", label: L("Random") },
      { value: "single", label: L("Single Loop") }
    ];
    function f(M) {
      const P = M.target;
      t.setVolume(Number(P.value));
    }
    function c(M) {
      const P = M.target;
      t.setPlayMode(P.value);
    }
    const h = {
      netease: L("NetEase"),
      local: L("Local Files"),
      custom: L("Custom API")
    };
    function v(M) {
      const P = t.settings.providers.find((_) => _.id === M);
      P && (P.enabled = !P.enabled, t.save());
    }
    const g = /* @__PURE__ */ he("");
    function C() {
      const M = g.value.trim();
      M && (t.addCustomCueRule(M), g.value = "");
    }
    function T(M) {
      t.removeCustomCueRule(M);
    }
    const W = () => {
      const M = JSON.stringify(t.settings, null, 2), P = new Blob([M], { type: "application/json" }), _ = URL.createObjectURL(P), H = document.createElement("a");
      H.href = _, H.download = "st-music-player-settings.json", H.click(), URL.revokeObjectURL(_);
    }, K = () => {
      const M = document.createElement("input");
      M.type = "file", M.accept = ".json", M.onchange = async (P) => {
        const _ = P.target.files?.[0];
        if (!_) return;
        const H = await _.text();
        try {
          const Q = JSON.parse(H);
          if (typeof Q != "object" || Q === null) throw new Error("Not an object");
          const N = ["volume", "playMode", "position", "widgetMode", "autoPlayOnNewCue", "providers", "customCueRules", "customOpacity", "opacity"], k = {};
          for (const b of N)
            b in Q && (k[b] = Q[b]);
          if (typeof k.volume != "number" || k.volume < 0 || k.volume > 100)
            throw new Error("Invalid volume");
          if (typeof k.playMode != "string" || !["list", "random", "single"].includes(k.playMode))
            throw new Error("Invalid playMode");
          if (k.providers && !Array.isArray(k.providers))
            throw new Error("Invalid providers");
          if (k.customCueRules && !Array.isArray(k.customCueRules))
            throw new Error("Invalid customCueRules");
          Object.assign(t.settings, k), t.save(), toastr.success(L("Data imported"));
        } catch (Q) {
          console.error("Import failed", Q), toastr.error(L("Import failed") + ": " + (Q instanceof Error ? Q.message : L("Invalid JSON")));
        }
      }, M.click();
    };
    return (M, P) => (A(), D("div", Rf, [
      p("div", Pf, [
        (A(), D(ne, null, Be(n, (_) => p("div", {
          key: _.id,
          class: ye(["stmp-tab", { active: s.value === _.id }]),
          onClick: (H) => s.value = _.id
        }, [
          p("i", {
            class: ye(_.icon)
          }, null, 2),
          p("span", null, z(_.label), 1)
        ], 10, Lf)), 64))
      ]),
      p("div", $f, [
        ct(p("div", Of, [
          p("div", Df, [
            p("div", Nf, [
              p("div", Ff, z(y(L)("Widget Mode")), 1),
              p("div", Uf, z(y(L)("Choose how the player widget is displayed")), 1)
            ]),
            p("div", Hf, [
              (A(), D(ne, null, Be(i, (_) => p("div", {
                key: _.value,
                class: ye(["stmp-chip", { active: y(t).settings.widgetMode === _.value }]),
                onClick: (H) => y(t).setWidgetMode(_.value)
              }, [
                p("i", {
                  class: ye(_.icon)
                }, null, 2),
                p("span", null, z(_.label), 1)
              ], 10, Vf)), 64))
            ])
          ]),
          y(t).settings.widgetMode === "dock" ? (A(), D("div", jf, [
            p("div", Bf, [
              p("div", Wf, z(y(L)("Dock Alignment")), 1),
              p("div", Kf, z(y(L)("Align the docked player to the left or right of the input bar")), 1)
            ]),
            p("div", zf, [
              (A(), D(ne, null, Be(r, (_) => p("div", {
                key: _.value,
                class: ye(["stmp-chip", { active: y(t).settings.dockAlign === _.value }]),
                onClick: (H) => y(t).setDockAlign(_.value)
              }, [
                p("i", {
                  class: ye(_.icon)
                }, null, 2),
                p("span", null, z(_.label), 1)
              ], 10, Jf)), 64))
            ])
          ])) : Te("", !0),
          p("div", qf, [
            p("div", Gf, z(y(L)("Data")), 1),
            p("div", Yf, [
              p("div", Xf, [
                p("div", Zf, z(y(L)("Export data")), 1),
                p("div", Qf, z(y(L)("Save your settings to a JSON file")), 1)
              ]),
              p("div", {
                class: "menu_button menu_button_icon stmp-action-btn",
                onClick: W
              }, [...P[4] || (P[4] = [
                p("i", { class: "fa-solid fa-file-export" }, null, -1)
              ])])
            ]),
            p("div", ed, [
              p("div", td, [
                p("div", sd, z(y(L)("Import data")), 1),
                p("div", nd, z(y(L)("Load settings from a JSON file")), 1)
              ]),
              p("div", {
                class: "menu_button menu_button_icon stmp-action-btn",
                onClick: K
              }, [...P[5] || (P[5] = [
                p("i", { class: "fa-solid fa-file-import" }, null, -1)
              ])])
            ])
          ])
        ], 512), [
          [is, s.value === "general"]
        ]),
        ct(p("div", id, [
          se(Dn, {
            "model-value": y(t).settings.customOpacity && !o(),
            label: y(L)("Custom opacity"),
            disabled: o(),
            "onUpdate:modelValue": y(t).setCustomOpacity
          }, null, 8, ["model-value", "label", "disabled", "onUpdate:modelValue"]),
          o() ? (A(), D("div", rd, z(y(L)("Not available in inline mode")), 1)) : Te("", !0),
          y(t).settings.customOpacity && !o() ? (A(), D("div", od, [
            p("div", ld, z(y(L)("Opacity")) + ": " + z(y(t).settings.opacity) + "%", 1),
            p("input", {
              type: "range",
              class: "stmp-slider",
              min: "0",
              max: "100",
              value: y(t).settings.opacity,
              onInput: l
            }, null, 40, ad)
          ])) : Te("", !0)
        ], 512), [
          [is, s.value === "appearance"]
        ]),
        ct(p("div", cd, [
          p("div", ud, [
            p("div", fd, z(y(L)("Default Volume")) + ": " + z(y(t).settings.volume), 1),
            p("input", {
              type: "range",
              class: "stmp-slider",
              min: "0",
              max: "100",
              value: y(t).settings.volume,
              onInput: f
            }, null, 40, dd)
          ]),
          p("div", hd, [
            p("div", pd, [
              p("div", gd, z(y(L)("Default Play Mode")), 1)
            ]),
            p("select", {
              class: "text_pole stmp-select",
              value: y(t).settings.playMode,
              onChange: c
            }, [
              (A(), D(ne, null, Be(a, (_) => p("option", {
                key: _.value,
                value: _.value
              }, z(_.label), 9, vd)), 64))
            ], 40, md)
          ]),
          se(Dn, {
            "model-value": y(t).settings.autoPlayOnNewCue,
            label: y(L)("Auto-play on new cue"),
            "onUpdate:modelValue": P[0] || (P[0] = (_) => {
              y(t).settings.autoPlayOnNewCue = _, y(t).save();
            })
          }, null, 8, ["model-value", "label"])
        ], 512), [
          [is, s.value === "playback"]
        ]),
        ct(p("div", yd, [
          p("div", _d, [
            p("div", bd, z(y(L)("Providers")), 1),
            p("div", xd, z(y(L)("Enable or disable music sources")), 1),
            (A(!0), D(ne, null, Be(y(t).settings.providers, (_) => (A(), D("div", {
              key: _.id,
              class: "stmp-provider-row"
            }, [
              se(Dn, {
                "model-value": _.enabled,
                label: h[_.id] || _.id,
                "onUpdate:modelValue": () => v(_.id)
              }, null, 8, ["model-value", "label", "onUpdate:modelValue"]),
              _.id === "custom" && _.enabled ? (A(), D("div", wd, [
                ct(p("input", {
                  class: "text_pole",
                  "onUpdate:modelValue": (H) => _.config.searchURL = H,
                  placeholder: y(L)("Search URL"),
                  onChange: P[1] || (P[1] = (H) => y(t).save())
                }, null, 40, Sd), [
                  [js, _.config.searchURL]
                ]),
                ct(p("input", {
                  class: "text_pole",
                  "onUpdate:modelValue": (H) => _.config.resolveURL = H,
                  placeholder: y(L)("Resolve URL"),
                  onChange: P[2] || (P[2] = (H) => y(t).save())
                }, null, 40, Cd), [
                  [js, _.config.resolveURL]
                ])
              ])) : Te("", !0)
            ]))), 128))
          ]),
          p("div", Td, [
            p("div", Id, z(y(L)("Custom Cue Rules (Regex)")), 1),
            p("div", Ed, z(y(L)("Additional regex patterns to detect song cues in chat")), 1),
            p("div", Ad, [
              (A(!0), D(ne, null, Be(y(t).settings.customCueRules, (_, H) => (A(), D("div", {
                key: H,
                class: "stmp-rule"
              }, [
                p("code", null, z(_), 1),
                p("div", {
                  class: "menu_button menu_button_icon stmp-rule-del",
                  onClick: (Q) => T(H)
                }, [...P[6] || (P[6] = [
                  p("i", { class: "fa-solid fa-xmark" }, null, -1)
                ])], 8, kd)
              ]))), 128))
            ]),
            p("div", Md, [
              ct(p("input", {
                "onUpdate:modelValue": P[3] || (P[3] = (_) => g.value = _),
                class: "text_pole",
                placeholder: y(L)("Add regex rule..."),
                onKeydown: Ro(C, ["enter"])
              }, null, 40, Rd), [
                [js, g.value]
              ]),
              p("div", {
                class: "menu_button menu_button_icon stmp-rule-add-btn",
                onClick: C
              }, [...P[7] || (P[7] = [
                p("i", { class: "fa-solid fa-plus" }, null, -1)
              ])])
            ])
          ])
        ], 512), [
          [is, s.value === "ai"]
        ]),
        ct(p("div", Pd, [
          p("div", Ld, [
            P[8] || (P[8] = p("div", { class: "stmp-about-icon" }, [
              p("i", { class: "fa-solid fa-music" })
            ], -1)),
            P[9] || (P[9] = p("div", { class: "stmp-about-name" }, "ST-Music-Player", -1)),
            p("div", $d, z(y(L)("Version")) + " " + z(Dd), 1),
            p("div", Od, z(y(L)("A floating music player extension for SillyTavern")), 1)
          ])
        ], 512), [
          [is, s.value === "about"]
        ])
      ])
    ]));
  }
}), Fd = /* @__PURE__ */ Et(Nd, [["__scopeId", "data-v-3a6d3e22"]]);
class Ud {
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
      const a = (...f) => {
        const c = l(f[0]);
        this.emit(o, c);
      };
      s.on(r, a), this.registered.push({ event: r, handler: a });
    };
    i(n.CHAT_CHANGED, "chat-changed", (r) => ({
      chatId: typeof r == "string" ? r : void 0
    })), i(n.GENERATION_ENDED, "message-generated", (r) => ({
      messageId: Fs(r)
    })), i(n.MESSAGE_UPDATED, "message-updated", (r) => ({
      messageId: Fs(r)
    })), i(n.MESSAGE_DELETED, "message-deleted", (r) => ({
      messageId: Fs(r)
    })), i(n.MESSAGE_SWIPED, "message-swiped", (r) => ({
      messageId: Fs(r)
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
function Fs(e) {
  if (e == null) return;
  const t = typeof e == "number" ? e : parseInt(String(e), 10);
  return Number.isFinite(t) ? t : void 0;
}
function Hd() {
  return new Ud();
}
const Vd = [
  /<bgm>当前bgm[:：](.+?) - (.+?)<\/bgm>/g,
  /<bgm>当前bgm[:：](.+?)<\/bgm>/g,
  /<bgm>(.+?) - (.+?)<\/bgm>/g,
  /<bgm>(.+?)<\/bgm>/g,
  /【BGM】(.+?)(?: - (.+?))?【\/BGM】/g,
  /\[music\](.+?)(?: - (.+?))?\[\/music\]/g
];
function hr(e, t) {
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
function pr(e, t = []) {
  const s = /* @__PURE__ */ new Map(), n = (i) => {
    s.has(i.index) || s.set(i.index, i);
  };
  for (const i of Vd)
    for (const r of hr(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of hr(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class jd {
  constructor(t) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = t;
  }
  scanIncremental(t, s, n, i = []) {
    const r = [];
    for (let o = s; o <= n; o++) {
      const l = this.getChatMessage(o);
      if (l === void 0) continue;
      const a = pr(l, i);
      if (a.length === 0) continue;
      const f = a.at(-1);
      r.push({ messageId: o, cues: [f] });
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
    const r = pr(i, n), o = r.length > 0 ? r.at(-1) : null;
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
let qt = null, ft = null, _s = null, bs = null, Gt = null, en = null;
const Bd = `
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
function Wd() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(Bd), bs = e.children(".inline-drawer").last()[0] ?? null, !bs)) return;
  const t = bs.querySelector("#stmp-settings-mount");
  t && en && (Gt = Po(Fd), Gt.use(en), Gt.mount(t));
}
function Kd() {
  Gt && (Gt.unmount(), Gt = null), bs?.remove(), bs = null;
}
function zd(e, t, s) {
  ft = Hd(), ft.on("chat-changed", () => {
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
  }), ft.on("message-generated", (n) => {
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
  }), ft.on("message-updated", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), ft.on("message-deleted", (n) => {
    n.messageId !== void 0 && t.handleMessageDelete(n.messageId);
  }), ft.on("message-swiped", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), ft.start();
}
function Jd(e, t, s) {
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
async function Yd() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = xc();
    en = t, qt = Po(If), qt.use(t), qt.mount(e);
    const s = Me(), n = Rc();
    s.init(n);
    const i = Nt();
    i.init(), i.setVolume(s.settings.volume);
    const r = new jd((a) => SillyTavern.getContext().chat[a]?.mes), o = Xt();
    o.init(r), Wd();
    const l = SillyTavern.getContext();
    _s = () => {
      zd(r, o, s), Jd(r, o, s);
    }, l.eventSource.on(l.event_types.APP_READY, _s), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function Fo() {
  if (_s) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, _s);
    } catch {
    }
    _s = null;
  }
  if (ft?.stop(), ft = null, qt) {
    try {
      Nt().destroy();
    } catch {
    }
    qt.unmount(), qt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), Kd(), en = null;
}
function Xd() {
  Fo();
}
async function qd() {
  try {
    const e = SillyTavern.getContext();
    delete e.extensionSettings[ys], e.saveSettingsDebounced();
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to delete settings:", e);
  }
  try {
    const e = SillyTavern.libs?.localforage;
    if (e && typeof e.keys == "function") {
      const t = await e.keys();
      await Promise.all(
        t.filter((s) => s.startsWith(ys) || s.startsWith("stmp:")).map((s) => e.removeItem(s))
      );
    }
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to clear localforage:", e);
  }
}
async function Zd() {
  await qd(), Fo();
}
export {
  qd as clean,
  Zd as delete,
  Fo as destroy,
  Xd as disable,
  Yd as init
};
