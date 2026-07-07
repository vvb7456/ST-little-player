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
}, Uo = Object.prototype.hasOwnProperty, le = (e, t) => Uo.call(e, t), q = Array.isArray, zt = (e) => Es(e) === "[object Map]", mr = (e) => Es(e) === "[object Set]", _i = (e) => Es(e) === "[object Date]", Q = (e) => typeof e == "function", ge = (e) => typeof e == "string", Ke = (e) => typeof e == "symbol", ae = (e) => e !== null && typeof e == "object", vr = (e) => (ae(e) || Q(e)) && Q(e.then) && Q(e.catch), yr = Object.prototype.toString, Es = (e) => yr.call(e), Ho = (e) => Es(e).slice(8, -1), _r = (e) => Es(e) === "[object Object]", nn = (e) => ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, as = /* @__PURE__ */ Zn(
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
  const t = ge(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let bi;
const on = () => bi || (bi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function St(e) {
  if (q(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = ge(n) ? Jo(n) : St(n);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (ge(e) || ae(e))
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
function pe(e) {
  let t = "";
  if (ge(e))
    t = e;
  else if (q(e))
    for (let s = 0; s < e.length; s++) {
      const n = pe(e[s]);
      n && (t += n + " ");
    }
  else if (ae(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Go = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qo = /* @__PURE__ */ Zn(Go);
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
  if (s = q(e), n = q(t), s || n)
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
const Sr = (e) => !!(e && e.__v_isRef === !0), z = (e) => ge(e) ? e : e == null ? "" : q(e) || ae(e) && (e.toString === yr || !Q(e.toString)) ? Sr(e) ? z(e.value) : JSON.stringify(e, Cr, 2) : String(e), Cr = (e, t) => Sr(t) ? Cr(e, t.value) : zt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], r) => (s[Sn(n, r) + " =>"] = i, s),
    {}
  )
} : mr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Sn(s))
} : Ke(t) ? Sn(t) : ae(t) && !q(t) && !_r(t) ? String(t) : t, Sn = (e, t = "") => {
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
    const t = de, s = Ge;
    de = this, Ge = !0;
    try {
      return this.fn();
    } finally {
      Pr(this), de = t, Ge = s, this.flags &= -3;
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
let kr = 0, cs, us;
function Mr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = us, us = e;
    return;
  }
  e.next = cs, cs = e;
}
function si() {
  kr++;
}
function ni() {
  if (--kr > 0)
    return;
  if (us) {
    let t = us;
    for (us = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; cs; ) {
    let t = cs;
    for (cs = void 0; t; ) {
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === bs) || (e.globalVersion = bs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Nn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = de, n = Ge;
  de = e, Ge = !0;
  try {
    Rr(e);
    const i = e.fn(e._value);
    (t.version === 0 || nt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    de = s, Ge = n, Pr(e), e.flags &= -3;
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
let Ge = !0;
const $r = [];
function rt() {
  $r.push(Ge), Ge = !1;
}
function ot() {
  const e = $r.pop();
  Ge = e === void 0 ? !0 : e;
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
let bs = 0;
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
    if (!de || !Ge || de === this.computed)
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
    this.version++, bs++, this.notify(t);
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
), xs = /* @__PURE__ */ Symbol(
  ""
);
function Ee(e, t, s) {
  if (Ge && de) {
    let n = Bs.get(e);
    n || Bs.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new ri()), i.map = n, i.key = s), i.track();
  }
}
function dt(e, t, s, n, i, r) {
  const o = Bs.get(e);
  if (!o) {
    bs++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (si(), t === "clear")
    o.forEach(l);
  else {
    const a = q(e), f = a && nn(s);
    if (a && s === "length") {
      const c = Number(n);
      o.forEach((p, m) => {
        (m === "length" || m === xs || !Ke(m) && m >= c) && l(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), f && l(o.get(xs)), t) {
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
  return t === e ? t : (Ee(t, "iterate", xs), /* @__PURE__ */ He(e) ? t : t.map(qe));
}
function ln(e) {
  return Ee(e = /* @__PURE__ */ re(e), "iterate", xs), e;
}
function tt(e, t) {
  return /* @__PURE__ */ mt(e) ? Yt(/* @__PURE__ */ pt(e) ? qe(t) : t) : qe(t);
}
const tl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Tn(this, Symbol.iterator, (e) => tt(this, e));
  },
  concat(...e) {
    return Ut(this).concat(
      ...e.map((t) => q(t) ? Ut(t) : t)
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
    const p = a.apply(e, r);
    return l ? qe(p) : p;
  }
  let f = s;
  o !== e && (l ? f = function(p, m) {
    return s.call(this, tt(e, p), m, e);
  } : s.length > 2 && (f = function(p, m) {
    return s.call(this, p, m, e);
  }));
  const c = a.call(o, f, n);
  return l && i ? i(c) : c;
}
function wi(e, t, s, n) {
  const i = ln(e), r = i !== e && !/* @__PURE__ */ He(e);
  let o = s, l = !1;
  i !== e && (r ? (l = n.length === 0, o = function(f, c, p) {
    return l && (l = !1, f = tt(e, f)), s.call(this, f, tt(e, c), p, e);
  }) : s.length > 3 && (o = function(f, c, p) {
    return s.call(this, f, c, p, e);
  }));
  const a = i[t](o, ...n);
  return l ? tt(e, a) : a;
}
function In(e, t, s) {
  const n = /* @__PURE__ */ re(e);
  Ee(n, "iterate", xs);
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
    const o = q(t);
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
    const o = q(t) && nn(s);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ mt(r);
      if (!/* @__PURE__ */ He(n) && !/* @__PURE__ */ mt(n) && (r = /* @__PURE__ */ re(r), n = /* @__PURE__ */ re(n)), !o && /* @__PURE__ */ _e(r) && !/* @__PURE__ */ _e(n))
        return f || (r.value = n), !0;
    }
    const l = o ? Number(s) < t.length : le(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ _e(t) ? t : i
    );
    return t === /* @__PURE__ */ re(i) && a && (l ? nt(n, r) && dt(t, "set", s, n) : dt(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = le(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && dt(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ke(s) || !Dr.has(s)) && Ee(t, "has", s), n;
  }
  ownKeys(t) {
    return Ee(
      t,
      "iterate",
      q(t) ? "length" : Ot
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
const Un = (e) => e, Rs = (e) => Reflect.getPrototypeOf(e);
function cl(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, r = /* @__PURE__ */ re(i), o = zt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, f = i[e](...n), c = s ? Un : t ? Yt : qe;
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
          const { value: p, done: m } = f.next();
          return m ? { value: p, done: m } : {
            value: l ? [c(p[0]), c(p[1])] : c(p),
            done: m
          };
        }
      }
    );
  };
}
function Ps(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ul(e, t) {
  const s = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ re(r), l = /* @__PURE__ */ re(i);
      e || (nt(i, l) && Ee(o, "get", i), Ee(o, "get", l));
      const { has: a } = Rs(o), f = t ? Un : e ? Yt : qe;
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
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ re(l), f = t ? Un : e ? Yt : qe;
      return !e && Ee(a, "iterate", Ot), l.forEach((c, p) => i.call(r, f(c), f(p), o));
    }
  };
  return Se(
    s,
    e ? {
      add: Ps("add"),
      set: Ps("set"),
      delete: Ps("delete"),
      clear: Ps("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ re(this), o = Rs(r), l = /* @__PURE__ */ re(i), a = !t && !/* @__PURE__ */ He(i) && !/* @__PURE__ */ mt(i) ? l : i;
        return o.has.call(r, a) || nt(i, a) && o.has.call(r, i) || nt(l, a) && o.has.call(r, l) || (r.add(a), dt(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ He(r) && !/* @__PURE__ */ mt(r) && (r = /* @__PURE__ */ re(r));
        const o = /* @__PURE__ */ re(this), { has: l, get: a } = Rs(o);
        let f = l.call(o, i);
        f || (i = /* @__PURE__ */ re(i), f = l.call(o, i));
        const c = a.call(o, i);
        return o.set(i, r), f ? nt(r, c) && dt(o, "set", i, r) : dt(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ re(this), { has: o, get: l } = Rs(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ re(i), a = o.call(r, i)), l && l.call(r, i);
        const f = r.delete(i);
        return a && dt(r, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ re(this), r = i.size !== 0, o = i.clear();
        return r && dt(
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
  return /* @__PURE__ */ mt(e) ? e : li(
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
function pt(e) {
  return /* @__PURE__ */ mt(e) ? /* @__PURE__ */ pt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
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
const qe = (e) => ae(e) ? /* @__PURE__ */ an(e) : e, Yt = (e) => ae(e) ? /* @__PURE__ */ Hn(e) : e;
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
    this.dep = new ri(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ re(t), this._value = s ? t : qe(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ He(t) || /* @__PURE__ */ mt(t);
    t = n ? t : /* @__PURE__ */ re(t), nt(t, s) && (this._rawValue = t, this._value = n ? t : qe(t), this.dep.trigger());
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
  return /* @__PURE__ */ pt(e) ? e : new Proxy(e, _l);
}
// @__NO_SIDE_EFFECTS__
function bl(e) {
  const t = q(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = wl(e, s);
  return t;
}
class xl {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Ke(s) ? s : String(s), this._raw = /* @__PURE__ */ re(t);
    let i = !0, r = t;
    if (!q(t) || Ke(this._key) || !nn(this._key))
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
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new ri(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = bs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
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
  return Q(e) ? n = e : (n = e.get, i = e.set), new Sl(n, i, s);
}
const Ls = {}, Ws = /* @__PURE__ */ new WeakMap();
let Pt;
function Tl(e, t = !1, s = Pt) {
  if (s) {
    let n = Ws.get(s);
    n || Ws.set(s, n = []), n.push(e);
  }
}
function Il(e, t, s = fe) {
  const { immediate: n, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = s, f = (k) => i ? k : /* @__PURE__ */ He(k) || i === !1 || i === 0 ? ht(k, 1) : ht(k);
  let c, p, m, v, T = !1, I = !1;
  if (/* @__PURE__ */ _e(e) ? (p = () => e.value, T = /* @__PURE__ */ He(e)) : /* @__PURE__ */ pt(e) ? (p = () => f(e), T = !0) : q(e) ? (I = !0, T = e.some((k) => /* @__PURE__ */ pt(k) || /* @__PURE__ */ He(k)), p = () => e.map((k) => {
    if (/* @__PURE__ */ _e(k))
      return k.value;
    if (/* @__PURE__ */ pt(k))
      return f(k);
    if (Q(k))
      return a ? a(k, 2) : k();
  })) : Q(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (m) {
      rt();
      try {
        m();
      } finally {
        ot();
      }
    }
    const k = Pt;
    Pt = c;
    try {
      return a ? a(e, 3, [v]) : e(v);
    } finally {
      Pt = k;
    }
  } : p = it, t && i) {
    const k = p, B = i === !0 ? 1 / 0 : i;
    p = () => ht(k(), B);
  }
  const K = Er(), U = () => {
    c.stop(), K && K.active && Qn(K.effects, c);
  };
  if (r && t) {
    const k = t;
    t = (...B) => {
      const ne = k(...B);
      return U(), ne;
    };
  }
  let _ = I ? new Array(e.length).fill(Ls) : Ls;
  const C = (k) => {
    if (!(!(c.flags & 1) || !c.dirty && !k))
      if (t) {
        const B = c.run();
        if (k || i || T || (I ? B.some((ne, M) => nt(ne, _[M])) : nt(B, _))) {
          m && m();
          const ne = Pt;
          Pt = c;
          try {
            const M = [
              B,
              // pass undefined as the old value when it's changed for the first time
              _ === Ls ? void 0 : I && _[0] === Ls ? [] : _,
              v
            ];
            _ = B, a ? a(t, 3, M) : (
              // @ts-expect-error
              t(...M)
            );
          } finally {
            Pt = ne;
          }
        }
      } else
        c.run();
  };
  return l && l(C), c = new Ar(p), c.scheduler = o ? () => o(C, !1) : C, v = (k) => Tl(k, !1, c), m = c.onStop = () => {
    const k = Ws.get(c);
    if (k) {
      if (a)
        a(k, 4);
      else
        for (const B of k) B();
      Ws.delete(c);
    }
  }, t ? n ? C(!0) : _ = c.run() : o ? o(C.bind(null, !0), !0) : c.run(), U.pause = c.pause.bind(c), U.resume = c.resume.bind(c), U.stop = U, U;
}
function ht(e, t = 1 / 0, s) {
  if (t <= 0 || !ae(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ _e(e))
    ht(e.value, t, s);
  else if (q(e))
    for (let n = 0; n < e.length; n++)
      ht(e[n], t, s);
  else if (mr(e) || zt(e))
    e.forEach((n) => {
      ht(n, t, s);
    });
  else if (_r(e)) {
    for (const n in e)
      ht(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && ht(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function As(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    un(i, t, s);
  }
}
function ze(e, t, s, n) {
  if (Q(e)) {
    const i = As(e, t, s, n);
    return i && vr(i) && i.catch((r) => {
      un(r, t, s);
    }), i;
  }
  if (q(e)) {
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
        for (let p = 0; p < c.length; p++)
          if (c[p](e, a, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      rt(), As(r, null, 10, [
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
    const n = t + s >>> 1, i = Re[n], r = ws(i);
    r < e || r === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function ci(e) {
  if (!(e.flags & 1)) {
    const t = ws(e), s = Re[Re.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ws(s) ? Re.push(e) : Re.splice(Al(t), 0, e), e.flags |= 1, Wr();
  }
}
function Wr() {
  Ks || (Ks = Br.then(zr));
}
function kl(e) {
  q(e) ? Jt.push(...e) : wt && e.id === -1 ? wt.splice(jt + 1, 0, e) : e.flags & 1 || (Jt.push(e), e.flags |= 1), Wr();
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
      (s, n) => ws(s) - ws(n)
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
const ws = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zr(e) {
  try {
    for (et = 0; et < Re.length; et++) {
      const t = Re[et];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), As(
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
function Gr(e, t = We, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && qs(-1);
    const r = zs(t);
    let o;
    try {
      o = e(...i);
    } finally {
      zs(r), n._d && qs(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function _t(e, t) {
  if (We === null)
    return e;
  const s = mn(We), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = fe] = t[i];
    r && (Q(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && ht(o), n.push({
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
function fs(e, t, s = !1) {
  const n = pi();
  if (n || Dt) {
    let i = Dt ? Dt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && Q(t) ? t.call(n && n.proxy) : t;
  }
}
function Rl() {
  return !!(pi() || Dt);
}
const Pl = /* @__PURE__ */ Symbol.for("v-scx"), Ll = () => fs(Pl);
function Fe(e, t, s) {
  return qr(e, t, s);
}
function qr(e, t, s = fe) {
  const { immediate: n, deep: i, flush: r, once: o } = s, l = Se({}, s), a = t && n || !t && r !== "post";
  let f;
  if (Ts) {
    if (r === "sync") {
      const v = Ll();
      f = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!a) {
      const v = () => {
      };
      return v.stop = it, v.resume = it, v.pause = it, v;
    }
  }
  const c = Le;
  l.call = (v, T, I) => ze(v, c, T, I);
  let p = !1;
  r === "post" ? l.scheduler = (v) => {
    ke(v, c && c.suspense);
  } : r !== "sync" && (p = !0, l.scheduler = (v, T) => {
    T ? v() : ci(v);
  }), l.augmentJob = (v) => {
    t && (v.flags |= 4), p && (v.flags |= 2, c && (v.id = c.uid, v.i = c));
  };
  const m = Il(e, t, l);
  return Ts && (f ? f.push(m) : a && m()), m;
}
function $l(e, t, s) {
  const n = this.proxy, i = ge(e) ? e.includes(".") ? Yr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  Q(t) ? r = t : (r = t.handler, s = t);
  const o = ks(this), l = qr(i, r.bind(n), s);
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
  return ge(s) ? t ? t(s) : null : s;
}, Dl = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, i, r, o, l, a, f) {
    const {
      mc: c,
      pc: p,
      pbc: m,
      o: { insert: v, querySelector: T, createText: I, createComment: K, parentNode: U }
    } = f, _ = Lt(t.props);
    let { dynamicChildren: C } = t;
    const k = (M, N, b) => {
      M.shapeFlag & 16 && c(
        M.children,
        N,
        b,
        i,
        r,
        o,
        l,
        a
      );
    }, B = (M = t) => {
      const N = Lt(M.props), b = M.target = Vn(M.props, T), j = jn(b, M, I, v);
      b && (o !== "svg" && Ci(b) ? o = "svg" : o !== "mathml" && Ti(b) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(b), N || (k(M, b, j), rs(M, !1)));
    }, ne = (M) => {
      const N = () => {
        if (bt.get(M) === N) {
          if (bt.delete(M), Lt(M.props)) {
            const b = U(M.el) || s;
            k(M, b, M.anchor), rs(M, !0);
          }
          B(M);
        }
      };
      bt.set(M, N), ke(N, r);
    };
    if (e == null) {
      const M = t.el = I(""), N = t.anchor = I("");
      if (v(M, s, n), v(N, s, n), Ol(t.props) || r && r.pendingBranch) {
        ne(t);
        return;
      }
      _ && (k(t, s, N), rs(t, !0)), B();
    } else {
      t.el = e.el;
      const M = t.anchor = e.anchor, N = bt.get(e);
      if (N) {
        N.flags |= 8, bt.delete(e), ne(t);
        return;
      }
      t.targetStart = e.targetStart;
      const b = t.target = e.target, j = t.targetAnchor = e.targetAnchor, Y = Lt(e.props), E = Y ? s : b, W = Y ? M : j;
      if (o === "svg" || Ci(b) ? o = "svg" : (o === "mathml" || Ti(b)) && (o = "mathml"), C ? (m(
        e.dynamicChildren,
        C,
        E,
        i,
        r,
        o,
        l
      ), hi(e, t, !0)) : a || p(
        e,
        t,
        E,
        W,
        i,
        r,
        o,
        l,
        !1
      ), _)
        Y ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : $s(
          t,
          s,
          M,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ee = Vn(t.props, T);
        ee && (t.target = ee, $s(
          t,
          ee,
          null,
          f,
          0
        ));
      } else Y && $s(
        t,
        b,
        j,
        f,
        1
      );
      rs(t, _);
    }
  },
  remove(e, t, s, { um: n, o: { remove: i } }, r) {
    const {
      shapeFlag: o,
      children: l,
      anchor: a,
      targetStart: f,
      targetAnchor: c,
      target: p,
      props: m
    } = e, v = Lt(m), T = r || !v, I = bt.get(e);
    if (I && (I.flags |= 8, bt.delete(e)), p && (i(f), i(c)), r && i(a), !I && (v || p) && o & 16)
      for (let K = 0; K < l.length; K++) {
        const U = l[K];
        n(
          U,
          t,
          s,
          T,
          !!U.dynamicChildren
        );
      }
  },
  move: $s,
  hydrate: Nl
};
function $s(e, t, s, { o: { insert: n }, m: i }, r = 2) {
  r === 0 && n(e.targetAnchor, t, s);
  const { el: o, anchor: l, shapeFlag: a, children: f, props: c } = e, p = r === 2;
  if (p && n(o, t, s), !bt.has(e) && (!p || Lt(c)) && a & 16)
    for (let m = 0; m < f.length; m++)
      i(
        f[m],
        t,
        s,
        2
      );
  p && n(l, t, s);
}
function Nl(e, t, s, n, i, r, {
  o: { nextSibling: o, parentNode: l, querySelector: a, insert: f, createText: c }
}, p) {
  function m(K, U) {
    let _ = U;
    for (; _; ) {
      if (_ && _.nodeType === 8) {
        if (_.data === "teleport start anchor")
          t.targetStart = _;
        else if (_.data === "teleport anchor") {
          t.targetAnchor = _, K._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      _ = o(_);
    }
  }
  function v(K, U) {
    U.anchor = p(
      o(K),
      U,
      l(K),
      s,
      n,
      i,
      r
    );
  }
  const T = t.target = Vn(
    t.props,
    a
  ), I = Lt(t.props);
  if (T) {
    const K = T._lpa || T.firstChild;
    t.shapeFlag & 16 && (I ? (v(e, t), m(T, K), t.targetAnchor || jn(
      T,
      t,
      c,
      f,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === T ? e : null
    )) : (t.anchor = o(e), m(T, K), t.targetAnchor || jn(T, t, c, f), p(
      K && o(K),
      t,
      T,
      s,
      n,
      i,
      r
    ))), rs(t, I);
  } else I && t.shapeFlag & 16 && (v(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const Fl = Dl;
function rs(e, t) {
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
        (p) => f = p
      );
      a.type !== Pe && Ss(a, f);
      let c = s.subTree && Ii(s.subTree);
      if (c && c.type !== Pe && !$t(c, a) && eo(s).type !== Pe) {
        let p = Bn(
          c,
          o,
          n,
          s
        );
        if (Ss(c, p), l === "out-in" && a.type !== Pe)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete p.afterLeave, c = void 0;
          }, En(r);
        l === "in-out" && a.type !== Pe ? p.delayLeave = (m, v, T) => {
          const I = so(
            n,
            c
          );
          I[String(c.key)] = c, m[je] = () => {
            v(), m[je] = void 0, delete f.delayedLeave, c = void 0;
          }, f.delayedLeave = () => {
            T(), delete f.delayedLeave, c = void 0;
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
    onEnterCancelled: p,
    onBeforeLeave: m,
    onLeave: v,
    onAfterLeave: T,
    onLeaveCancelled: I,
    onBeforeAppear: K,
    onAppear: U,
    onAfterAppear: _,
    onAppearCancelled: C
  } = t, k = String(e.key), B = so(s, e), ne = (b, j) => {
    b && ze(
      b,
      n,
      9,
      j
    );
  }, M = (b, j) => {
    const Y = j[1];
    ne(b, j), q(b) ? b.every((E) => E.length <= 1) && Y() : b.length <= 1 && Y();
  }, N = {
    mode: o,
    persisted: l,
    beforeEnter(b) {
      let j = a;
      if (!s.isMounted)
        if (r)
          j = K || a;
        else
          return;
      b[je] && b[je](
        !0
        /* cancelled */
      );
      const Y = B[k];
      Y && $t(e, Y) && Y.el[je] && Y.el[je](), ne(j, [b]);
    },
    enter(b) {
      if (B[k] === e) return;
      let j = f, Y = c, E = p;
      if (!s.isMounted)
        if (r)
          j = U || f, Y = _ || c, E = C || p;
        else
          return;
      let W = !1;
      b[ss] = (me) => {
        W || (W = !0, me ? ne(E, [b]) : ne(Y, [b]), N.delayedLeave && N.delayedLeave(), b[ss] = void 0);
      };
      const ee = b[ss].bind(null, !1);
      j ? M(j, [b, ee]) : ee();
    },
    leave(b, j) {
      const Y = String(e.key);
      if (b[ss] && b[ss](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return j();
      ne(m, [b]);
      let E = !1;
      b[je] = (ee) => {
        E || (E = !0, j(), ee ? ne(I, [b]) : ne(T, [b]), b[je] = void 0, B[Y] === e && delete B[Y]);
      };
      const W = b[je].bind(null, !1);
      B[Y] = e, v ? M(v, [b, W]) : W();
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
  return N;
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
    if (t & 32 && Q(s.default))
      return s.default();
  }
}
function Ss(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ss(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function no(e, t = !1, s) {
  let n = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = s == null ? o.key : String(s) + String(o.key != null ? o.key : r);
    o.type === se ? (o.patchFlag & 128 && i++, n = n.concat(
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
  return Q(e) ? (
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
function ds(e, t, s, n, i = !1) {
  if (q(e)) {
    e.forEach(
      (I, K) => ds(
        I,
        t && (q(t) ? t[K] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (hs(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && ds(e, t, s, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? mn(n.component) : n.el, o = i ? null : r, { i: l, r: a } = e, f = t && t.r, c = l.refs === fe ? l.refs = {} : l.refs, p = l.setupState, m = /* @__PURE__ */ re(p), v = p === fe ? gr : (I) => Ei(c, I) ? !1 : le(m, I), T = (I, K) => !(K && Ei(c, K));
  if (f != null && f !== a) {
    if (Ai(t), ge(f))
      c[f] = null, v(f) && (p[f] = null);
    else if (/* @__PURE__ */ _e(f)) {
      const I = t;
      T(f, I.k) && (f.value = null), I.k && (c[I.k] = null);
    }
  }
  if (Q(a)) {
    rt();
    try {
      As(a, l, 12, [o, c]);
    } finally {
      ot();
    }
  } else {
    const I = ge(a), K = /* @__PURE__ */ _e(a);
    if (I || K) {
      const U = () => {
        if (e.f) {
          const _ = I ? v(a) ? p[a] : c[a] : T() || !e.k ? a.value : c[e.k];
          if (i)
            q(_) && Qn(_, r);
          else if (q(_))
            _.includes(r) || _.push(r);
          else if (I)
            c[a] = [r], v(a) && (p[a] = c[a]);
          else {
            const C = [r];
            T(a, e.k) && (a.value = C), e.k && (c[e.k] = C);
          }
        } else I ? (c[a] = o, v(a) && (p[a] = o)) : K && (T(a, e.k) && (a.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const _ = () => {
          U(), Js.delete(e);
        };
        _.id = -1, Js.set(e, _), ke(_, s);
      } else
        Ai(e), U();
    }
  }
}
function Ai(e) {
  const t = Js.get(e);
  t && (t.flags |= 8, Js.delete(e));
}
on().requestIdleCallback;
on().cancelIdleCallback;
const hs = (e) => !!e.type.__asyncLoader, fn = (e) => e.type.__isKeepAlive;
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
      const l = ks(s), a = ze(t, s, e, o);
      return l(), ot(), a;
    });
    return n ? i.unshift(r) : i.push(r), r;
  }
}
const vt = (e) => (t, s = Le) => {
  (!Ts || e === "sp") && dn(e, (...n) => t(...n), s);
}, Kl = vt("bm"), hn = vt("m"), zl = vt(
  "bu"
), Jl = vt("u"), ui = vt(
  "bum"
), oo = vt("um"), Gl = vt(
  "sp"
), ql = vt("rtg"), Yl = vt("rtc");
function Xl(e, t = Le) {
  dn("ec", e, t);
}
const Zl = /* @__PURE__ */ Symbol.for("v-ndc");
function Be(e, t, s, n) {
  let i;
  const r = s, o = q(e);
  if (o || ge(e)) {
    const l = o && /* @__PURE__ */ pt(e);
    let a = !1, f = !1;
    l && (a = !/* @__PURE__ */ He(e), f = /* @__PURE__ */ mt(e), e = ln(e)), i = new Array(e.length);
    for (let c = 0, p = e.length; c < p; c++)
      i[c] = t(
        a ? f ? Yt(qe(e[c])) : qe(e[c]) : e[c],
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
const Wn = (e) => e ? Io(e) ? mn(e) : Wn(e.parent) : null, ps = (
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
    const f = ps[t];
    let c, p;
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
      p = a.config.globalProperties, le(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: r } = e;
    return An(i, t) ? (i[t] = s, !0) : n !== fe && le(n, t) ? (n[t] = s, !0) : le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(s[l] || e !== fe && l[0] !== "$" && le(e, l) || An(t, l) || le(r, l) || le(n, l) || le(ps, l) || le(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : le(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function ki(e) {
  return q(e) ? e.reduce(
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
    beforeMount: p,
    mounted: m,
    beforeUpdate: v,
    updated: T,
    activated: I,
    deactivated: K,
    beforeDestroy: U,
    beforeUnmount: _,
    destroyed: C,
    unmounted: k,
    render: B,
    renderTracked: ne,
    renderTriggered: M,
    errorCaptured: N,
    serverPrefetch: b,
    // public API
    expose: j,
    inheritAttrs: Y,
    // assets
    components: E,
    directives: W,
    filters: ee
  } = t;
  if (f && ta(f, n, null), o)
    for (const H in o) {
      const G = o[H];
      Q(G) && (n[H] = G.bind(s));
    }
  if (i) {
    const H = i.call(s, s);
    ae(H) && (e.data = /* @__PURE__ */ an(H));
  }
  if (Kn = !0, r)
    for (const H in r) {
      const G = r[H], be = Q(G) ? G.bind(s, s) : Q(G.get) ? G.get.bind(s, s) : it, Ce = !Q(G) && Q(G.set) ? G.set.bind(s) : it, ye = $e({
        get: be,
        set: Ce
      });
      Object.defineProperty(n, H, {
        enumerable: !0,
        configurable: !0,
        get: () => ye.value,
        set: (Oe) => ye.value = Oe
      });
    }
  if (l)
    for (const H in l)
      lo(l[H], n, s, H);
  if (a) {
    const H = Q(a) ? a.call(s) : a;
    Reflect.ownKeys(H).forEach((G) => {
      Ml(G, H[G]);
    });
  }
  c && Mi(c, e, "c");
  function oe(H, G) {
    q(G) ? G.forEach((be) => H(be.bind(s))) : G && H(G.bind(s));
  }
  if (oe(Kl, p), oe(hn, m), oe(zl, v), oe(Jl, T), oe(jl, I), oe(Bl, K), oe(Xl, N), oe(Yl, ne), oe(ql, M), oe(ui, _), oe(oo, k), oe(Gl, b), q(j))
    if (j.length) {
      const H = e.exposed || (e.exposed = {});
      j.forEach((G) => {
        Object.defineProperty(H, G, {
          get: () => s[G],
          set: (be) => s[G] = be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  B && e.render === it && (e.render = B), Y != null && (e.inheritAttrs = Y), E && (e.components = E), W && (e.directives = W), b && io(e);
}
function ta(e, t, s = it) {
  q(e) && (e = zn(e));
  for (const n in e) {
    const i = e[n];
    let r;
    ae(i) ? "default" in i ? r = fs(
      i.from || n,
      i.default,
      !0
    ) : r = fs(i.from || n) : r = fs(i), /* @__PURE__ */ _e(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function Mi(e, t, s) {
  ze(
    q(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function lo(e, t, s, n) {
  let i = n.includes(".") ? Yr(s, n) : () => s[n];
  if (ge(e)) {
    const r = t[e];
    Q(r) && Fe(i, r);
  } else if (Q(e))
    Fe(i, e.bind(s));
  else if (ae(e))
    if (q(e))
      e.forEach((r) => lo(r, t, s, n));
    else {
      const r = Q(e.handler) ? e.handler.bind(s) : t[e.handler];
      Q(r) && Fe(i, r, e);
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
    (f) => Gs(a, f, o, !0)
  ), Gs(a, t, o)), ae(t) && r.set(t, a), a;
}
function Gs(e, t, s, n = !1) {
  const { mixins: i, extends: r } = t;
  r && Gs(e, r, s, !0), i && i.forEach(
    (o) => Gs(e, o, s, !0)
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
  methods: os,
  computed: os,
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
  components: os,
  directives: os,
  // watch
  watch: ia,
  // provide / inject
  provide: Ri,
  inject: na
};
function Ri(e, t) {
  return t ? e ? function() {
    return Se(
      Q(e) ? e.call(this, this) : e,
      Q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function na(e, t) {
  return os(zn(e), zn(t));
}
function zn(e) {
  if (q(e)) {
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
function os(e, t) {
  return e ? Se(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Pi(e, t) {
  return e ? q(e) && q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Se(
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
    Q(n) || (n = Se({}, n)), i != null && !ae(i) && (i = null);
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
      use(c, ...p) {
        return o.has(c) || (c && Q(c.install) ? (o.add(c), c.install(f, ...p)) : Q(c) && (o.add(c), c(f, ...p))), f;
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), f;
      },
      component(c, p) {
        return p ? (r.components[c] = p, f) : r.components[c];
      },
      directive(c, p) {
        return p ? (r.directives[c] = p, f) : r.directives[c];
      },
      mount(c, p, m) {
        if (!a) {
          const v = f._ceVNode || te(n, i);
          return v.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(v, c, m), a = !0, f._container = c, c.__vue_app__ = f, mn(v.component);
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
      provide(c, p) {
        return r.provides[c] = p, f;
      },
      runWithContext(c) {
        const p = Dt;
        Dt = f;
        try {
          return c();
        } finally {
          Dt = p;
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
  o && (o.trim && (i = s.map((c) => ge(c) ? c.trim() : c)), o.number && (i = s.map(ei)));
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
  if (!Q(e)) {
    const a = (f) => {
      const c = uo(f, t, !0);
      c && (l = !0, Se(o, c));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (ae(e) && n.set(e, null), null) : (q(r) ? r.forEach((a) => o[a] = null) : Se(o, r), ae(e) && n.set(e, o), o);
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
    props: p,
    data: m,
    setupState: v,
    ctx: T,
    inheritAttrs: I
  } = e, K = zs(e);
  let U, _;
  try {
    if (s.shapeFlag & 4) {
      const k = i || n, B = k;
      U = st(
        f.call(
          B,
          k,
          c,
          p,
          v,
          m,
          T
        )
      ), _ = l;
    } else {
      const k = t;
      U = st(
        k.length > 1 ? k(
          p,
          { attrs: l, slots: o, emit: a }
        ) : k(
          p,
          null
        )
      ), _ = t.props ? l : ua(l);
    }
  } catch (k) {
    gs.length = 0, un(k, e, 1), U = te(Pe);
  }
  let C = U;
  if (_ && I !== !1) {
    const k = Object.keys(_), { shapeFlag: B } = C;
    k.length && B & 7 && (r && k.some(sn) && (_ = fa(
      _,
      r
    )), C = Ct(C, _, !1, !0));
  }
  return s.dirs && (C = Ct(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(s.dirs) : s.dirs), s.transition && Ss(C, s.transition), U = C, zs(K), U;
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
      for (let p = 0; p < c.length; p++) {
        const m = c[p];
        if (fo(o, n, m) && !pn(f, m))
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
      for (let p = 0; p < c.length; p++) {
        let m = c[p];
        if (pn(e.emitsOptions, m))
          continue;
        const v = t[m];
        if (a)
          if (le(r, m))
            v !== r[m] && (r[m] = v, f = !0);
          else {
            const T = Je(m);
            i[T] = Jn(
              a,
              l,
              T,
              v,
              e,
              !1
            );
          }
        else
          v !== r[m] && (r[m] = v, f = !0);
      }
    }
  } else {
    mo(e, t, i, r) && (f = !0);
    let c;
    for (const p in l)
      (!t || // for camelCase
      !le(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Tt(p)) === p || !le(t, c))) && (a ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[c] !== void 0) && (i[p] = Jn(
        a,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete i[p]);
    if (r !== l)
      for (const p in r)
        (!t || !le(t, p)) && (delete r[p], f = !0);
  }
  f && dt(e.attrs, "set", "");
}
function mo(e, t, s, n) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (as(a))
        continue;
      const f = t[a];
      let c;
      i && le(i, c = Je(a)) ? !r || !r.includes(c) ? s[c] = f : (l || (l = {}))[c] = f : pn(e.emitsOptions, a) || (!(a in n) || f !== n[a]) && (n[a] = f, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ re(s), f = l || fe;
    for (let c = 0; c < r.length; c++) {
      const p = r[c];
      s[p] = Jn(
        i,
        a,
        p,
        f[p],
        e,
        !le(f, p)
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
      if (o.type !== Function && !o.skipFactory && Q(a)) {
        const { propsDefaults: f } = i;
        if (s in f)
          n = f[s];
        else {
          const c = ks(i);
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
  if (!Q(e)) {
    const c = (p) => {
      a = !0;
      const [m, v] = vo(p, t, !0);
      Se(o, m), v && l.push(...v);
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a)
    return ae(e) && n.set(e, Kt), Kt;
  if (q(r))
    for (let c = 0; c < r.length; c++) {
      const p = Je(r[c]);
      Oi(p) && (o[p] = fe);
    }
  else if (r)
    for (const c in r) {
      const p = Je(c);
      if (Oi(p)) {
        const m = r[c], v = o[p] = q(m) || Q(m) ? { type: m } : Se({}, m), T = v.type;
        let I = !1, K = !0;
        if (q(T))
          for (let U = 0; U < T.length; ++U) {
            const _ = T[U], C = Q(_) && _.name;
            if (C === "Boolean") {
              I = !0;
              break;
            } else C === "String" && (K = !1);
          }
        else
          I = Q(T) && T.name === "Boolean";
        v[
          0
          /* shouldCast */
        ] = I, v[
          1
          /* shouldCastTrue */
        ] = K, (I || le(v, "default")) && l.push(p);
      }
    }
  const f = [o, l];
  return ae(e) && n.set(e, f), f;
}
function Oi(e) {
  return e[0] !== "$" && !as(e);
}
const fi = (e) => e === "_" || e === "_ctx" || e === "$stable", di = (e) => q(e) ? e.map(st) : [st(e)], va = (e, t, s) => {
  if (t._n)
    return t;
  const n = Gr((...i) => di(t(...i)), s);
  return n._c = !1, n;
}, yo = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (fi(i)) continue;
    const r = e[i];
    if (Q(r))
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
    parentNode: p,
    nextSibling: m,
    setScopeId: v = it,
    insertStaticContent: T
  } = e, I = (u, d, g, A = null, S = null, x = null, F = void 0, O = null, P = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !$t(u, d) && (A = Ms(u), Oe(u, S, x, !0), u = null), d.patchFlag === -2 && (P = !1, d.dynamicChildren = null);
    const { type: w, ref: X, shapeFlag: V } = d;
    switch (w) {
      case gn:
        K(u, d, g, A);
        break;
      case Pe:
        U(u, d, g, A);
        break;
      case Hs:
        u == null && _(d, g, A, F);
        break;
      case se:
        E(
          u,
          d,
          g,
          A,
          S,
          x,
          F,
          O,
          P
        );
        break;
      default:
        V & 1 ? B(
          u,
          d,
          g,
          A,
          S,
          x,
          F,
          O,
          P
        ) : V & 6 ? W(
          u,
          d,
          g,
          A,
          S,
          x,
          F,
          O,
          P
        ) : (V & 64 || V & 128) && w.process(
          u,
          d,
          g,
          A,
          S,
          x,
          F,
          O,
          P,
          Qt
        );
    }
    X != null && S ? ds(X, u && u.ref, x, d || u, !d) : X == null && u && u.ref != null && ds(u.ref, null, x, u, !0);
  }, K = (u, d, g, A) => {
    if (u == null)
      n(
        d.el = l(d.children),
        g,
        A
      );
    else {
      const S = d.el = u.el;
      d.children !== u.children && f(S, d.children);
    }
  }, U = (u, d, g, A) => {
    u == null ? n(
      d.el = a(d.children || ""),
      g,
      A
    ) : d.el = u.el;
  }, _ = (u, d, g, A) => {
    [u.el, u.anchor] = T(
      u.children,
      d,
      g,
      A,
      u.el,
      u.anchor
    );
  }, C = ({ el: u, anchor: d }, g, A) => {
    let S;
    for (; u && u !== d; )
      S = m(u), n(u, g, A), u = S;
    n(d, g, A);
  }, k = ({ el: u, anchor: d }) => {
    let g;
    for (; u && u !== d; )
      g = m(u), i(u), u = g;
    i(d);
  }, B = (u, d, g, A, S, x, F, O, P) => {
    if (d.type === "svg" ? F = "svg" : d.type === "math" && (F = "mathml"), u == null)
      ne(
        d,
        g,
        A,
        S,
        x,
        F,
        O,
        P
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
          P
        );
      } finally {
        w && w._endPatch();
      }
    }
  }, ne = (u, d, g, A, S, x, F, O) => {
    let P, w;
    const { props: X, shapeFlag: V, transition: J, dirs: Z } = u;
    if (P = u.el = o(
      u.type,
      x,
      X && X.is,
      X
    ), V & 8 ? c(P, u.children) : V & 16 && N(
      u.children,
      P,
      null,
      A,
      S,
      kn(u, x),
      F,
      O
    ), Z && At(u, null, A, "created"), M(P, u, u.scopeId, F, A), X) {
      for (const ue in X)
        ue !== "value" && !as(ue) && r(P, ue, null, X[ue], x, A);
      "value" in X && r(P, "value", null, X.value, x), (w = X.onVnodeBeforeMount) && Qe(w, A, u);
    }
    Z && At(u, null, A, "beforeMount");
    const ie = wa(S, J);
    ie && J.beforeEnter(P), n(P, d, g), ((w = X && X.onVnodeMounted) || ie || Z) && ke(() => {
      try {
        w && Qe(w, A, u), ie && J.enter(P), Z && At(u, null, A, "mounted");
      } finally {
      }
    }, S);
  }, M = (u, d, g, A, S) => {
    if (g && v(u, g), A)
      for (let x = 0; x < A.length; x++)
        v(u, A[x]);
    if (S) {
      let x = S.subTree;
      if (d === x || So(x.type) && (x.ssContent === d || x.ssFallback === d)) {
        const F = S.vnode;
        M(
          u,
          F,
          F.scopeId,
          F.slotScopeIds,
          S.parent
        );
      }
    }
  }, N = (u, d, g, A, S, x, F, O, P = 0) => {
    for (let w = P; w < u.length; w++) {
      const X = u[w] = O ? ft(u[w]) : st(u[w]);
      I(
        null,
        X,
        d,
        g,
        A,
        S,
        x,
        F,
        O
      );
    }
  }, b = (u, d, g, A, S, x, F) => {
    const O = d.el = u.el;
    let { patchFlag: P, dynamicChildren: w, dirs: X } = d;
    P |= u.patchFlag & 16;
    const V = u.props || fe, J = d.props || fe;
    let Z;
    if (g && kt(g, !1), (Z = J.onVnodeBeforeUpdate) && Qe(Z, g, d, u), X && At(d, u, g, "beforeUpdate"), g && kt(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    w && (!u.dynamicChildren || u.dynamicChildren.length !== w.length) && (P = 0, F = !1, w = null), (V.innerHTML && J.innerHTML == null || V.textContent && J.textContent == null) && c(O, ""), w ? j(
      u.dynamicChildren,
      w,
      O,
      g,
      A,
      kn(d, S),
      x
    ) : F || G(
      u,
      d,
      O,
      null,
      g,
      A,
      kn(d, S),
      x,
      !1
    ), P > 0) {
      if (P & 16)
        Y(O, V, J, g, S);
      else if (P & 2 && V.class !== J.class && r(O, "class", null, J.class, S), P & 4 && r(O, "style", V.style, J.style, S), P & 8) {
        const ie = d.dynamicProps;
        for (let ue = 0; ue < ie.length; ue++) {
          const ce = ie[ue], xe = V[ce], Ie = J[ce];
          (Ie !== xe || ce === "value") && r(O, ce, xe, Ie, S, g);
        }
      }
      P & 1 && u.children !== d.children && c(O, d.children);
    } else !F && w == null && Y(O, V, J, g, S);
    ((Z = J.onVnodeUpdated) || X) && ke(() => {
      Z && Qe(Z, g, d, u), X && At(d, u, g, "updated");
    }, A);
  }, j = (u, d, g, A, S, x, F) => {
    for (let O = 0; O < d.length; O++) {
      const P = u[O], w = d[O], X = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$t(P, w) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 198) ? p(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      I(
        P,
        w,
        X,
        null,
        A,
        S,
        x,
        F,
        !0
      );
    }
  }, Y = (u, d, g, A, S) => {
    if (d !== g) {
      if (d !== fe)
        for (const x in d)
          !as(x) && !(x in g) && r(
            u,
            x,
            d[x],
            null,
            S,
            A
          );
      for (const x in g) {
        if (as(x)) continue;
        const F = g[x], O = d[x];
        F !== O && x !== "value" && r(u, x, O, F, S, A);
      }
      "value" in g && r(u, "value", d.value, g.value, S);
    }
  }, E = (u, d, g, A, S, x, F, O, P) => {
    const w = d.el = u ? u.el : l(""), X = d.anchor = u ? u.anchor : l("");
    let { patchFlag: V, dynamicChildren: J, slotScopeIds: Z } = d;
    Z && (O = O ? O.concat(Z) : Z), u == null ? (n(w, g, A), n(X, g, A), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      X,
      S,
      x,
      F,
      O,
      P
    )) : V > 0 && V & 64 && J && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === J.length ? (j(
      u.dynamicChildren,
      J,
      g,
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
    )) : G(
      u,
      d,
      g,
      X,
      S,
      x,
      F,
      O,
      P
    );
  }, W = (u, d, g, A, S, x, F, O, P) => {
    d.slotScopeIds = O, u == null ? d.shapeFlag & 512 ? S.ctx.activate(
      d,
      g,
      A,
      F,
      P
    ) : ee(
      d,
      g,
      A,
      S,
      x,
      F,
      P
    ) : me(u, d, P);
  }, ee = (u, d, g, A, S, x, F) => {
    const O = u.component = Pa(
      u,
      A,
      S
    );
    if (fn(u) && (O.ctx.renderer = Qt), La(O, !1, F), O.asyncDep) {
      if (S && S.registerDep(O, oe, F), !u.el) {
        const P = O.subTree = te(Pe);
        U(null, P, d, g), u.placeholder = P.el;
      }
    } else
      oe(
        O,
        u,
        d,
        g,
        S,
        x,
        F
      );
  }, me = (u, d, g) => {
    const A = d.component = u.component;
    if (da(u, d, g))
      if (A.asyncDep && !A.asyncResolved) {
        H(A, d, g);
        return;
      } else
        A.next = d, A.update();
    else
      d.el = u.el, A.vnode = d;
  }, oe = (u, d, g, A, S, x, F) => {
    const O = () => {
      if (u.isMounted) {
        let { next: V, bu: J, u: Z, parent: ie, vnode: ue } = u;
        {
          const Xe = xo(u);
          if (Xe) {
            V && (V.el = ue.el, H(u, V, F)), Xe.asyncDep.then(() => {
              ke(() => {
                u.isUnmounted || w();
              }, S);
            });
            return;
          }
        }
        let ce = V, xe;
        kt(u, !1), V ? (V.el = ue.el, H(u, V, F)) : V = ue, J && Us(J), (xe = V.props && V.props.onVnodeBeforeUpdate) && Qe(xe, ie, V, ue), kt(u, !0);
        const Ie = Li(u), Ye = u.subTree;
        u.subTree = Ie, I(
          Ye,
          Ie,
          // parent may have changed if it's in a teleport
          p(Ye.el),
          // anchor may have changed if it's in a fragment
          Ms(Ye),
          u,
          S,
          x
        ), V.el = Ie.el, ce === null && ha(u, Ie.el), Z && ke(Z, S), (xe = V.props && V.props.onVnodeUpdated) && ke(
          () => Qe(xe, ie, V, ue),
          S
        );
      } else {
        let V;
        const { el: J, props: Z } = d, { bm: ie, m: ue, parent: ce, root: xe, type: Ie } = u, Ye = hs(d);
        kt(u, !1), ie && Us(ie), !Ye && (V = Z && Z.onVnodeBeforeMount) && Qe(V, ce, d), kt(u, !0);
        {
          xe.ce && xe.ce._hasShadowRoot() && xe.ce._injectChildStyle(
            Ie,
            u.parent ? u.parent.type : void 0
          );
          const Xe = u.subTree = Li(u);
          I(
            null,
            Xe,
            g,
            A,
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
        (d.shapeFlag & 256 || ce && hs(ce.vnode) && ce.vnode.shapeFlag & 256) && u.a && ke(u.a, S), u.isMounted = !0, d = g = A = null;
      }
    };
    u.scope.on();
    const P = u.effect = new Ar(O);
    u.scope.off();
    const w = u.update = P.run.bind(P), X = u.job = P.runIfDirty.bind(P);
    X.i = u, X.id = u.uid, P.scheduler = () => ci(X), kt(u, !0), w();
  }, H = (u, d, g) => {
    d.component = u;
    const A = u.vnode.props;
    u.vnode = d, u.next = null, ga(u, d.props, A, g), _a(u, d.children, g), rt(), Si(u), ot();
  }, G = (u, d, g, A, S, x, F, O, P = !1) => {
    const w = u && u.children, X = u ? u.shapeFlag : 0, V = d.children, { patchFlag: J, shapeFlag: Z } = d;
    if (J > 0) {
      if (J & 128) {
        Ce(
          w,
          V,
          g,
          A,
          S,
          x,
          F,
          O,
          P
        );
        return;
      } else if (J & 256) {
        be(
          w,
          V,
          g,
          A,
          S,
          x,
          F,
          O,
          P
        );
        return;
      }
    }
    Z & 8 ? (X & 16 && Zt(w, S, x), V !== w && c(g, V)) : X & 16 ? Z & 16 ? Ce(
      w,
      V,
      g,
      A,
      S,
      x,
      F,
      O,
      P
    ) : Zt(w, S, x, !0) : (X & 8 && c(g, ""), Z & 16 && N(
      V,
      g,
      A,
      S,
      x,
      F,
      O,
      P
    ));
  }, be = (u, d, g, A, S, x, F, O, P) => {
    u = u || Kt, d = d || Kt;
    const w = u.length, X = d.length, V = Math.min(w, X);
    let J;
    for (J = 0; J < V; J++) {
      const Z = d[J] = P ? ft(d[J]) : st(d[J]);
      I(
        u[J],
        Z,
        g,
        null,
        S,
        x,
        F,
        O,
        P
      );
    }
    w > X ? Zt(
      u,
      S,
      x,
      !0,
      !1,
      V
    ) : N(
      d,
      g,
      A,
      S,
      x,
      F,
      O,
      P,
      V
    );
  }, Ce = (u, d, g, A, S, x, F, O, P) => {
    let w = 0;
    const X = d.length;
    let V = u.length - 1, J = X - 1;
    for (; w <= V && w <= J; ) {
      const Z = u[w], ie = d[w] = P ? ft(d[w]) : st(d[w]);
      if ($t(Z, ie))
        I(
          Z,
          ie,
          g,
          null,
          S,
          x,
          F,
          O,
          P
        );
      else
        break;
      w++;
    }
    for (; w <= V && w <= J; ) {
      const Z = u[V], ie = d[J] = P ? ft(d[J]) : st(d[J]);
      if ($t(Z, ie))
        I(
          Z,
          ie,
          g,
          null,
          S,
          x,
          F,
          O,
          P
        );
      else
        break;
      V--, J--;
    }
    if (w > V) {
      if (w <= J) {
        const Z = J + 1, ie = Z < X ? d[Z].el : A;
        for (; w <= J; )
          I(
            null,
            d[w] = P ? ft(d[w]) : st(d[w]),
            g,
            ie,
            S,
            x,
            F,
            O,
            P
          ), w++;
      }
    } else if (w > J)
      for (; w <= V; )
        Oe(u[w], S, x, !0), w++;
    else {
      const Z = w, ie = w, ue = /* @__PURE__ */ new Map();
      for (w = ie; w <= J; w++) {
        const De = d[w] = P ? ft(d[w]) : st(d[w]);
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
        Ze === void 0 ? Oe(De, S, x, !0) : (es[Ze - ie] = w + 1, Ze >= Xe ? Xe = Ze : Ye = !0, I(
          De,
          d[Ze],
          g,
          null,
          S,
          x,
          F,
          O,
          P
        ), xe++);
      }
      const mi = Ye ? Sa(es) : Kt;
      for (ce = mi.length - 1, w = Ie - 1; w >= 0; w--) {
        const De = ie + w, Ze = d[De], vi = d[De + 1], yi = De + 1 < X ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          vi.el || wo(vi)
        ) : A;
        es[w] === 0 ? I(
          null,
          Ze,
          g,
          yi,
          S,
          x,
          F,
          O,
          P
        ) : Ye && (ce < 0 || w !== mi[ce] ? ye(Ze, g, yi, 2) : ce--);
      }
    }
  }, ye = (u, d, g, A, S = null) => {
    const { el: x, type: F, transition: O, children: P, shapeFlag: w } = u;
    if (w & 6) {
      ye(u.component.subTree, d, g, A);
      return;
    }
    if (w & 128) {
      u.suspense.move(d, g, A);
      return;
    }
    if (w & 64) {
      F.move(u, d, g, Qt);
      return;
    }
    if (F === se) {
      n(x, d, g);
      for (let V = 0; V < P.length; V++)
        ye(P[V], d, g, A);
      n(u.anchor, d, g);
      return;
    }
    if (F === Hs) {
      C(u, d, g);
      return;
    }
    if (A !== 2 && w & 1 && O)
      if (A === 0)
        O.persisted && !x[je] ? n(x, d, g) : (O.beforeEnter(x), n(x, d, g), ke(() => O.enter(x), S));
      else {
        const { leave: V, delayLeave: J, afterLeave: Z } = O, ie = () => {
          u.ctx.isUnmounted ? i(x) : n(x, d, g);
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
      n(x, d, g);
  }, Oe = (u, d, g, A = !1, S = !1) => {
    const {
      type: x,
      props: F,
      ref: O,
      children: P,
      dynamicChildren: w,
      shapeFlag: X,
      patchFlag: V,
      dirs: J,
      cacheIndex: Z,
      memo: ie
    } = u;
    if (V === -2 && (S = !1), O != null && (rt(), ds(O, null, g, u, !0), ot()), Z != null && (d.renderCache[Z] = void 0), X & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const ue = X & 1 && J, ce = !hs(u);
    let xe;
    if (ce && (xe = F && F.onVnodeBeforeUnmount) && Qe(xe, d, u), X & 6)
      bn(u.component, g, A);
    else {
      if (X & 128) {
        u.suspense.unmount(g, A);
        return;
      }
      ue && At(u, null, d, "beforeUnmount"), X & 64 ? u.type.remove(
        u,
        d,
        g,
        Qt,
        A
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== se || V > 0 && V & 64) ? Zt(
        w,
        d,
        g,
        !1,
        !0
      ) : (x === se && V & 384 || !S && X & 16) && Zt(P, d, g), A && Ft(u);
    }
    const Ie = ie != null && Z == null;
    (ce && (xe = F && F.onVnodeUnmounted) || ue || Ie) && ke(() => {
      xe && Qe(xe, d, u), ue && At(u, null, d, "unmounted"), Ie && (u.el = null);
    }, g);
  }, Ft = (u) => {
    const { type: d, el: g, anchor: A, transition: S } = u;
    if (d === se) {
      _n(g, A);
      return;
    }
    if (d === Hs) {
      k(u);
      return;
    }
    const x = () => {
      i(g), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (u.shapeFlag & 1 && S && !S.persisted) {
      const { leave: F, delayLeave: O } = S, P = () => F(g, x);
      O ? O(u.el, x, P) : P();
    } else
      x();
  }, _n = (u, d) => {
    let g;
    for (; u !== d; )
      g = m(u), i(u), u = g;
    i(d);
  }, bn = (u, d, g) => {
    const { bum: A, scope: S, job: x, subTree: F, um: O, m: P, a: w } = u;
    Di(P), Di(w), A && Us(A), S.stop(), x && (x.flags |= 8, Oe(F, u, d, g)), O && ke(O, d), ke(() => {
      u.isUnmounted = !0;
    }, d);
  }, Zt = (u, d, g, A = !1, S = !1, x = 0) => {
    for (let F = x; F < u.length; F++)
      Oe(u[F], d, g, A, S);
  }, Ms = (u) => {
    if (u.shapeFlag & 6)
      return Ms(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = m(u.anchor || u.el), g = d && d[Xr];
    return g ? m(g) : d;
  };
  let xn = !1;
  const gi = (u, d, g) => {
    let A;
    u == null ? d._vnode && (Oe(d._vnode, null, null, !0), A = d._vnode.component) : I(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = u, xn || (xn = !0, Si(A), Kr(), xn = !1);
  }, Qt = {
    p: I,
    um: Oe,
    m: ye,
    r: Ft,
    mt: ee,
    mc: N,
    pc: G,
    pbc: j,
    n: Ms,
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
  if (q(n) && q(i))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = ft(i[r]), l.el = o.el), !s && l.patchFlag !== -2 && hi(o, l)), l.type === gn && (l.patchFlag === -1 && (l = i[r] = ft(l)), l.el = o.el), l.type === Pe && !l.el && (l.el = o.el);
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
  t && t.pendingBranch ? q(e) ? t.effects.push(...e) : t.effects.push(e) : kl(e);
}
const se = /* @__PURE__ */ Symbol.for("v-fgt"), gn = /* @__PURE__ */ Symbol.for("v-txt"), Pe = /* @__PURE__ */ Symbol.for("v-cmt"), Hs = /* @__PURE__ */ Symbol.for("v-stc"), gs = [];
let Ue = null;
function R(e = !1) {
  gs.push(Ue = e ? null : []);
}
function Ta() {
  gs.pop(), Ue = gs[gs.length - 1] || null;
}
let Cs = 1;
function qs(e, t = !1) {
  Cs += e, e < 0 && Ue && t && (Ue.hasOnce = !0);
}
function Co(e) {
  return e.dynamicChildren = Cs > 0 ? Ue || Kt : null, Ta(), Cs > 0 && Ue && Ue.push(e), e;
}
function D(e, t, s, n, i, r) {
  return Co(
    h(
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
  return Co(
    te(
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
}) => (typeof e == "number" && (e = "" + e), e != null ? ge(e) || /* @__PURE__ */ _e(e) || Q(e) ? { i: We, r: e, k: t, f: !!s } : e : null);
function h(e, t = null, s = null, n = 0, i = null, r = e === se ? 0 : 1, o = !1, l = !1) {
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
  return l ? (Xs(a, s), r & 128 && e.normalize(a)) : s && (a.shapeFlag |= ge(s) ? 8 : 16), Cs > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ue && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ue.push(a), a;
}
const te = Ia;
function Ia(e, t = null, s = null, n = 0, i = null, r = !1) {
  if ((!e || e === Zl) && (e = Pe), Ys(e)) {
    const l = Ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Xs(l, s), Cs > 0 && !r && Ue && (l.shapeFlag & 6 ? Ue[Ue.indexOf(e)] = l : Ue.push(l)), l.patchFlag = -2, l;
  }
  if (Na(e) && (e = e.__vccOpts), t) {
    t = Ea(t);
    let { class: l, style: a } = t;
    l && !ge(l) && (t.class = pe(l)), ae(a) && (/* @__PURE__ */ cn(a) && !q(a) && (a = Se({}, a)), t.style = St(a));
  }
  const o = ge(e) ? 1 : So(e) ? 128 : Zr(e) ? 64 : ae(e) ? 4 : Q(e) ? 2 : 0;
  return h(
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
      s && r ? q(r) ? r.concat(Vs(t)) : [r, Vs(t)] : Vs(t)
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
    patchFlag: t && e.type !== se ? o === -1 ? 16 : o | 16 : o,
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
  return a && n && Ss(
    c,
    a.clone(c)
  ), c;
}
function Aa(e = " ", t = 0) {
  return te(gn, null, e, t);
}
function Os(e, t) {
  const s = te(Hs, null, e);
  return s.staticCount = t, s;
}
function Te(e = "", t = !1) {
  return t ? (R(), gt(Pe, null, e)) : te(Pe, null, e);
}
function st(e) {
  return e == null || typeof e == "boolean" ? te(Pe) : q(e) ? te(
    se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ys(e) ? ft(e) : te(gn, null, String(e));
}
function ft(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ct(e);
}
function Xs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (q(t))
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
  else if (Q(t)) {
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
        t.class !== n.class && (t.class = pe([t.class, n.class]));
      else if (i === "style")
        t.style = St([t.style, n.style]);
      else if (tn(i)) {
        const r = t[i], o = n[i];
        o && r !== o && !(q(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
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
let Zs, Gn;
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
  ), Gn = t(
    "__VUE_SSR_SETTERS__",
    (s) => Ts = s
  );
}
const ks = (e) => {
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
let Ts = !1;
function La(e, t = !1, s = !1) {
  t && Gn(t);
  const { props: n, children: i } = e.vnode, r = Io(e);
  pa(e, n, r, t), ya(e, i, s || t);
  const o = r ? $a(e, t) : void 0;
  return t && Gn(!1), o;
}
function $a(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ql);
  const { setup: n } = s;
  if (n) {
    rt();
    const i = e.setupContext = n.length > 1 ? Da(e) : null, r = ks(e), o = As(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = vr(o);
    if (ot(), r(), (l || e.sp) && !hs(e) && io(e), l) {
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
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ae(t) && (e.setupState = jr(t)), Eo(e);
}
function Eo(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || it);
  {
    const i = ks(e);
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
      if (s in ps)
        return ps[s](e);
    },
    has(t, s) {
      return s in t || s in ps;
    }
  })) : e.proxy;
}
function Na(e) {
  return Q(e) && "__vccOpts" in e;
}
const $e = (e, t) => /* @__PURE__ */ Cl(e, t, Ts);
function Fa(e, t, s) {
  try {
    qs(-1);
    const n = arguments.length;
    return n === 2 ? ae(t) && !q(t) ? Ys(t) ? te(e, null, [t]) : te(e, t) : te(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Ys(s) && (s = [s]), te(e, t, s));
  } finally {
    qs(1);
  }
}
const Ua = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let qn;
const Ui = typeof window < "u" && window.trustedTypes;
if (Ui)
  try {
    qn = /* @__PURE__ */ Ui.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ao = qn ? (e) => qn.createHTML(e) : (e) => e, Ha = "http://www.w3.org/2000/svg", Va = "http://www.w3.org/1998/Math/MathML", ct = typeof document < "u" ? document : null, Hi = ct && /* @__PURE__ */ ct.createElement("template"), ja = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? ct.createElementNS(Ha, e) : t === "mathml" ? ct.createElementNS(Va, e) : s ? ct.createElement(e, { is: s }) : ct.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => ct.createTextNode(e),
  createComment: (e) => ct.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ct.querySelector(e),
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
}, yt = "transition", ns = "animation", Is = /* @__PURE__ */ Symbol("_vtc"), ko = {
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
  q(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Vi = (e) => e ? q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function za(e) {
  const t = {};
  for (const E in e)
    E in ko || (t[E] = e[E]);
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
    leaveFromClass: p = `${s}-leave-from`,
    leaveActiveClass: m = `${s}-leave-active`,
    leaveToClass: v = `${s}-leave-to`
  } = e, T = Ja(i), I = T && T[0], K = T && T[1], {
    onBeforeEnter: U,
    onEnter: _,
    onEnterCancelled: C,
    onLeave: k,
    onLeaveCancelled: B,
    onBeforeAppear: ne = U,
    onAppear: M = _,
    onAppearCancelled: N = C
  } = t, b = (E, W, ee, me) => {
    E._enterCancelled = me, Rt(E, W ? c : l), Rt(E, W ? f : o), ee && ee();
  }, j = (E, W) => {
    E._isLeaving = !1, Rt(E, p), Rt(E, v), Rt(E, m), W && W();
  }, Y = (E) => (W, ee) => {
    const me = E ? M : _, oe = () => b(W, E, ee);
    Mt(me, [W, oe]), ji(() => {
      Rt(W, E ? a : r), at(W, E ? c : l), Vi(me) || Bi(W, n, I, oe);
    });
  };
  return Se(t, {
    onBeforeEnter(E) {
      Mt(U, [E]), at(E, r), at(E, o);
    },
    onBeforeAppear(E) {
      Mt(ne, [E]), at(E, a), at(E, f);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(E, W) {
      E._isLeaving = !0;
      const ee = () => j(E, W);
      at(E, p), E._enterCancelled ? (at(E, m), zi(E)) : (zi(E), at(E, m)), ji(() => {
        E._isLeaving && (Rt(E, p), at(E, v), Vi(k) || Bi(E, n, K, ee));
      }), Mt(k, [E, ee]);
    },
    onEnterCancelled(E) {
      b(E, !1, void 0, !0), Mt(C, [E]);
    },
    onAppearCancelled(E) {
      b(E, !0, void 0, !0), Mt(N, [E]);
    },
    onLeaveCancelled(E) {
      j(E), Mt(B, [E]);
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
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[Is] || (e[Is] = /* @__PURE__ */ new Set())).add(t);
}
function Rt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[Is];
  s && (s.delete(t), s.size || (e[Is] = void 0));
}
function ji(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ga = 0;
function Bi(e, t, s, n) {
  const i = e._endId = ++Ga, r = () => {
    i === e._endId && n();
  };
  if (s != null)
    return setTimeout(r, s);
  const { type: o, timeout: l, propCount: a } = qa(e, t);
  if (!o)
    return n();
  const f = o + "end";
  let c = 0;
  const p = () => {
    e.removeEventListener(f, m), r();
  }, m = (v) => {
    v.target === e && ++c >= a && p();
  };
  setTimeout(() => {
    c < a && p();
  }, l + 1), e.addEventListener(f, m);
}
function qa(e, t) {
  const s = window.getComputedStyle(e), n = (T) => (s[T] || "").split(", "), i = n(`${yt}Delay`), r = n(`${yt}Duration`), o = Wi(i, r), l = n(`${ns}Delay`), a = n(`${ns}Duration`), f = Wi(l, a);
  let c = null, p = 0, m = 0;
  t === yt ? o > 0 && (c = yt, p = o, m = r.length) : t === ns ? f > 0 && (c = ns, p = f, m = a.length) : (p = Math.max(o, f), c = p > 0 ? o > f ? yt : ns : null, m = c ? c === yt ? r.length : a.length : 0);
  const v = c === yt && /\b(?:transform|all)(?:,|$)/.test(
    n(`${yt}Property`).toString()
  );
  return {
    type: c,
    timeout: p,
    propCount: m,
    hasTransform: v
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
  const n = e[Is];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Qs = /* @__PURE__ */ Symbol("_vod"), Mo = /* @__PURE__ */ Symbol("_vsh"), Ds = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[Qs] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : is(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), is(e, !0), n.enter(e)) : n.leave(e, () => {
      is(e, !1);
    }) : is(e, t));
  },
  beforeUnmount(e, { value: t }) {
    is(e, t);
  }
};
function is(e, t) {
  e.style.display = t ? e[Qs] : "none", e[Mo] = !t;
}
const Xa = /* @__PURE__ */ Symbol(""), Za = /(?:^|;)\s*display\s*:/;
function Qa(e, t, s) {
  const n = e.style, i = ge(s);
  let r = !1;
  if (s && !i) {
    if (t)
      if (ge(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && ls(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && ls(n, o, "");
    for (const o in s) {
      o === "display" && (r = !0);
      const l = s[o];
      l != null ? tc(
        e,
        o,
        !ge(t) && t ? t[o] : void 0,
        l
      ) || ls(n, o, l) : ls(n, o, "");
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
function ls(e, t, s) {
  if (q(s))
    s.forEach((n) => ls(e, t, n));
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
const Gi = ["Webkit", "Moz", "ms"], Rn = {};
function ec(e, t) {
  const s = Rn[t];
  if (s)
    return s;
  let n = Je(t);
  if (n !== "filter" && n in e)
    return Rn[t] = n;
  n = br(n);
  for (let i = 0; i < Gi.length; i++) {
    const r = Gi[i] + n;
    if (r in e)
      return Rn[t] = r;
  }
  return t;
}
function tc(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ge(n) && s === n;
}
const qi = "http://www.w3.org/1999/xlink";
function Yi(e, t, s, n, i, r = qo(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(qi, t.slice(6, t.length)) : e.setAttributeNS(qi, t, s) : s == null || r && !wr(s) ? e.removeAttribute(t) : e.setAttribute(
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
    if (q(i)) {
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
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ge(n))) ? Xi(e, Je(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Yi(e, t, n, o));
};
function fc(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qi(t) && Q(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Qi(t) && ge(s) ? !1 : t in e;
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
  return q(t) ? (s) => Us(t, s) : t;
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
    !Q(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
  return ge(e) ? document.querySelector(e) : e;
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
var ms;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ms || (ms = {}));
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
    Yn(i) && Yn(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ _e(n) && !/* @__PURE__ */ pt(n) ? e[s] = Xn(i, n) : e[s] = n;
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
    return xt(c, r, Object.keys(o || {}).reduce((p, m) => (p[m] = ai($e(() => {
      vn(s);
      const v = s._s.get(e);
      return o[m].call(v, v);
    })), p), {}));
  }
  return a = Do(e, f, t, s, n, !0), a;
}
function Do(e, t, s = {}, n, i, r) {
  let o;
  const l = xt({ actions: {} }, s), a = { deep: !0 };
  let f, c, p = [], m = [], v;
  const T = n.state.value[e];
  !r && !T && (n.state.value[e] = {});
  let I;
  function K(N) {
    let b;
    f = c = !1, typeof N == "function" ? (N(n.state.value[e]), b = {
      type: ms.patchFunction,
      storeId: e,
      events: v
    }) : (Xn(n.state.value[e], N), b = {
      type: ms.patchObject,
      payload: N,
      storeId: e,
      events: v
    });
    const j = I = Symbol();
    Ne().then(() => {
      I === j && (f = !0);
    }), c = !0, Ht(p, b, n.state.value[e]);
  }
  const U = r ? function() {
    const { state: b } = s, j = b ? b() : {};
    this.$patch((Y) => {
      xt(Y, j);
    });
  } : (
    /* istanbul ignore next */
    Oo
  );
  function _() {
    o.stop(), p = [], m = [], n._s.delete(e);
  }
  const C = (N, b = "") => {
    if (rr in N)
      return N[$n] = b, N;
    const j = function() {
      vn(n);
      const Y = Array.from(arguments), E = [], W = [];
      function ee(H) {
        E.push(H);
      }
      function me(H) {
        W.push(H);
      }
      Ht(m, {
        args: Y,
        name: j[$n],
        store: B,
        after: ee,
        onError: me
      });
      let oe;
      try {
        oe = N.apply(this && this.$id === e ? this : B, Y);
      } catch (H) {
        throw Ht(W, H), H;
      }
      return oe instanceof Promise ? oe.then((H) => (Ht(E, H), H)).catch((H) => (Ht(W, H), Promise.reject(H))) : (Ht(E, oe), oe);
    };
    return j[rr] = !0, j[$n] = b, j;
  }, k = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: ir.bind(null, m),
    $patch: K,
    $reset: U,
    $subscribe(N, b = {}) {
      const j = ir(p, N, b.detached, () => Y()), Y = o.run(() => Fe(() => n.state.value[e], (E) => {
        (b.flush === "sync" ? c : f) && N({
          storeId: e,
          type: ms.direct,
          events: v
        }, E);
      }, xt({}, a, b)));
      return j;
    },
    $dispose: _
  }, B = /* @__PURE__ */ an(k);
  n._s.set(e, B);
  const M = (n._a && n._a.runWithContext || wc)(() => n._e.run(() => (o = Ir()).run(() => t({ action: C }))));
  for (const N in M) {
    const b = M[N];
    if (/* @__PURE__ */ _e(b) && !Tc(b) || /* @__PURE__ */ pt(b))
      r || (T && Cc(b) && (/* @__PURE__ */ _e(b) ? b.value = T[N] : Xn(b, T[N])), n.state.value[e][N] = b);
    else if (typeof b == "function") {
      const j = C(b, N);
      M[N] = j, l.actions[N] = b;
    }
  }
  return xt(B, M), xt(/* @__PURE__ */ re(B), M), Object.defineProperty(B, "$state", {
    get: () => n.state.value[e],
    set: (N) => {
      K((b) => {
        xt(b, N);
      });
    }
  }), n._p.forEach((N) => {
    xt(B, o.run(() => N({
      store: B,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), T && r && s.hydrate && s.hydrate(B.$state, T), f = !0, c = !0, B;
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
    l || (f ? fs($o, null) : null), l && vn(l), l = Lo, l._s.has(n) || (r ? Do(n, t, i, l) : Ic(n, i, l)), l._s.get(n);
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
      const a = parseInt(o[1], 10), f = parseInt(o[2], 10), c = o[3] ?? "", p = c ? parseInt(c.padEnd(3, "0"), 10) : 0;
      r.push(a * 60 + f + p / 1e3);
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
      return this.ctx().extensionSettings[vs] ?? null;
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
      s.extensionSettings[vs] = t, s.saveSettingsDebounced();
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
    return `${vs}__settings`;
  }
}
function Rc() {
  return new Mc();
}
const vs = "st-music-player", ar = "stmp_cursor", cr = "stmp_userlist";
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
  GitHub: "GitHub",
  Repository: "仓库",
  "MIT License": "MIT 许可证",
  Copyright: "版权"
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
    return (t, s) => (R(), D("svg", {
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
      e.name === "play" ? (R(), D("polygon", Hc)) : e.name === "pause" ? (R(), D(se, { key: 1 }, [
        s[0] || (s[0] = h("rect", {
          x: "6",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[1] || (s[1] = h("rect", {
          x: "14",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1))
      ], 64)) : e.name === "prev" ? (R(), D(se, { key: 2 }, [
        s[2] || (s[2] = h("polygon", {
          points: "19 20 9 12 19 4 19 20",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[3] || (s[3] = h("line", {
          x1: "5",
          y1: "19",
          x2: "5",
          y2: "5"
        }, null, -1))
      ], 64)) : e.name === "next" ? (R(), D(se, { key: 3 }, [
        s[4] || (s[4] = h("polygon", {
          points: "5 4 15 12 5 20 5 4",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[5] || (s[5] = h("line", {
          x1: "19",
          y1: "5",
          x2: "19",
          y2: "19"
        }, null, -1))
      ], 64)) : e.name === "repeat" ? (R(), D(se, { key: 4 }, [
        s[6] || (s[6] = h("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = h("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = h("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = h("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (R(), D(se, { key: 5 }, [
        s[10] || (s[10] = Os('<polyline points="17 1 21 5 17 9" data-v-4bfc4099></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-4bfc4099></path><polyline points="7 23 3 19 7 15" data-v-4bfc4099></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-4bfc4099></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-4bfc4099>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (R(), D(se, { key: 6 }, [
        s[11] || (s[11] = Os('<polyline points="16 3 21 3 21 8" data-v-4bfc4099></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-4bfc4099></line><polyline points="21 16 21 21 16 21" data-v-4bfc4099></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-4bfc4099></line><line x1="4" y1="4" x2="9" y2="9" data-v-4bfc4099></line>', 5))
      ], 64)) : e.name === "search" ? (R(), D(se, { key: 7 }, [
        s[12] || (s[12] = h("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1)),
        s[13] || (s[13] = h("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1))
      ], 64)) : e.name === "plus" ? (R(), D(se, { key: 8 }, [
        s[14] || (s[14] = h("line", {
          x1: "12",
          y1: "5",
          x2: "12",
          y2: "19"
        }, null, -1)),
        s[15] || (s[15] = h("line", {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12"
        }, null, -1))
      ], 64)) : e.name === "x" ? (R(), D(se, { key: 9 }, [
        s[16] || (s[16] = h("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }, null, -1)),
        s[17] || (s[17] = h("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        }, null, -1))
      ], 64)) : e.name === "chevron-down" ? (R(), D("polyline", Vc)) : e.name === "chevron-up" ? (R(), D("polyline", jc)) : e.name === "music" ? (R(), D(se, { key: 12 }, [
        s[18] || (s[18] = h("path", { d: "M9 18V5l12-2v13" }, null, -1)),
        s[19] || (s[19] = h("circle", {
          cx: "6",
          cy: "18",
          r: "3"
        }, null, -1)),
        s[20] || (s[20] = h("circle", {
          cx: "18",
          cy: "16",
          r: "3"
        }, null, -1))
      ], 64)) : e.name === "volume" ? (R(), D(se, { key: 13 }, [
        s[21] || (s[21] = h("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = h("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = h("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (R(), D(se, { key: 14 }, [
        s[24] || (s[24] = h("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[25] || (s[25] = h("line", {
          x1: "23",
          y1: "9",
          x2: "17",
          y2: "15"
        }, null, -1)),
        s[26] || (s[26] = h("line", {
          x1: "17",
          y1: "9",
          x2: "23",
          y2: "15"
        }, null, -1))
      ], 64)) : e.name === "check" ? (R(), D("polyline", Bc)) : e.name === "loader" ? (R(), D(se, { key: 16 }, [
        s[27] || (s[27] = Os('<line x1="12" y1="2" x2="12" y2="6" data-v-4bfc4099></line><line x1="12" y1="18" x2="12" y2="22" data-v-4bfc4099></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-4bfc4099></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-4bfc4099></line><line x1="2" y1="12" x2="6" y2="12" data-v-4bfc4099></line><line x1="18" y1="12" x2="22" y2="12" data-v-4bfc4099></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-4bfc4099></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-4bfc4099></line>', 8))
      ], 64)) : e.name === "list-music" ? (R(), D(se, { key: 17 }, [
        s[28] || (s[28] = Os('<path d="M3 12h11" data-v-4bfc4099></path><path d="M3 6h11" data-v-4bfc4099></path><path d="M3 18h7" data-v-4bfc4099></path><path d="M16 8v13" data-v-4bfc4099></path><circle cx="14" cy="21" r="2" data-v-4bfc4099></circle><path d="M16 8l5-2v3" data-v-4bfc4099></path>', 6))
      ], 64)) : Te("", !0)
    ], 8, Uc));
  }
}), Et = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, ve = /* @__PURE__ */ Et(Wc, [["__scopeId", "data-v-4bfc4099"]]), Kc = {
  key: 0,
  class: "stmp-mini stmp-mini-dock-desktop"
}, zc = {
  key: 0,
  class: "stmp-mini-cover"
}, Jc = ["src"], Gc = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, qc = {
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
      const M = t.currentTrack;
      if (!M) return "";
      const N = M.name, b = M.artist || "";
      return b ? `${N} - ${b}` : N;
    }), a = $e(() => {
      const M = t.currentLyricIndex;
      return M < 0 || M >= t.lyrics.length ? "" : t.lyrics[M].text;
    }), f = $e(() => {
      const M = t.currentLyricIndex;
      if (M < 0 || M >= t.lyrics.length) return 0;
      const N = t.lyrics[M];
      return N.next ? Math.max(500, (N.next.time - N.time) * 1e3) : 5e3;
    }), c = /* @__PURE__ */ he(0), p = /* @__PURE__ */ he([]), m = /* @__PURE__ */ he(null);
    function v(M, N) {
      M && (p.value[N] = M);
    }
    async function T() {
      await Ne();
      const M = t.currentLyricIndex, N = m.value;
      if (!N || M < 0) {
        c.value = 0;
        return;
      }
      const b = p.value[M];
      if (!b) return;
      const j = b.offsetTop, Y = b.offsetHeight, E = N.clientHeight;
      c.value = j - E / 2 + Y / 2;
    }
    Fe(() => t.currentLyricIndex, T), Fe(() => t.lyrics, () => {
      p.value = [], T();
    });
    const I = /* @__PURE__ */ he(null), K = /* @__PURE__ */ he(null), U = /* @__PURE__ */ he(0), _ = /* @__PURE__ */ he(0);
    function C() {
      const M = I.value, N = K.value;
      if (!M || !N) {
        U.value = 0;
        return;
      }
      const b = M.scrollWidth - N.clientWidth;
      b > 3 && f.value > 0 ? (_.value = Math.max(200, f.value - 200), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          U.value = -b;
        });
      })) : U.value = 0;
    }
    Fe(a, () => {
      _.value = 0, U.value = 0, Ne(() => requestAnimationFrame(C));
    });
    function k() {
      i.value = !0;
    }
    Fe(() => t.currentTrack?.url, () => {
      i.value = !1;
    });
    function B(M) {
      M.stopPropagation(), t.togglePlay();
    }
    function ne(M) {
      M.stopPropagation(), s.next();
    }
    return hn(() => {
      T(), requestAnimationFrame(C);
    }), (M, N) => n.isDock && !n.isMobile ? (R(), D("div", Kc, [
      r.value && !i.value ? (R(), D("div", zc, [
        h("img", {
          src: r.value,
          alt: "",
          onError: k
        }, null, 40, Jc)
      ])) : (R(), D("div", Gc, [
        te(ve, {
          name: "music",
          size: 14
        })
      ])),
      h("div", {
        ref_key: "dockWindowRef",
        ref: m,
        class: "stmp-mini-dock-text"
      }, [
        y(t).lyrics.length > 0 ? (R(), D("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: St({ transform: `translateY(-${c.value}px)` })
        }, [
          (R(!0), D(se, null, Be(y(t).lyrics, (b, j) => (R(), D("span", {
            key: j,
            ref_for: !0,
            ref: (Y) => v(Y, j),
            class: pe(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": j === y(t).currentLyricIndex }])
          }, z(b.text), 3))), 128))
        ], 4)) : (R(), D("span", qc, z(l.value), 1))
      ], 512),
      h("div", Yc, [
        h("button", {
          class: "stmp-mini-btn",
          "aria-label": y(t).isPlaying ? y(L)("Pause") : y(L)("Play"),
          onClick: B
        }, [
          te(ve, {
            name: y(t).isPlaying ? "pause" : "play",
            size: 14
          }, null, 8, ["name"])
        ], 8, Xc),
        h("button", {
          class: "stmp-mini-btn",
          "aria-label": y(L)("Next"),
          onClick: ne
        }, [
          te(ve, {
            name: "next",
            size: 14
          })
        ], 8, Zc)
      ])
    ])) : n.isDock && n.isMobile ? (R(), D("div", Qc, [
      r.value && !i.value ? (R(), D("div", eu, [
        h("img", {
          src: r.value,
          alt: "",
          onError: k
        }, null, 40, tu)
      ])) : (R(), D("div", su, [
        te(ve, {
          name: "music",
          size: 14
        })
      ])),
      h("div", {
        ref_key: "dockWindowRef",
        ref: m,
        class: "stmp-mini-dock-text"
      }, [
        y(t).lyrics.length > 0 ? (R(), D("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: St({ transform: `translateY(-${c.value}px)` })
        }, [
          (R(!0), D(se, null, Be(y(t).lyrics, (b, j) => (R(), D("span", {
            key: j,
            ref_for: !0,
            ref: (Y) => v(Y, j),
            class: pe(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": j === y(t).currentLyricIndex }])
          }, z(b.text), 3))), 128))
        ], 4)) : (R(), D("span", nu, z(l.value), 1))
      ], 512),
      h("div", iu, [
        h("button", {
          class: "stmp-mini-btn",
          "aria-label": y(t).isPlaying ? y(L)("Pause") : y(L)("Play"),
          onClick: B
        }, [
          te(ve, {
            name: y(t).isPlaying ? "pause" : "play",
            size: 16
          }, null, 8, ["name"])
        ], 8, ru),
        h("button", {
          class: "stmp-mini-btn",
          "aria-label": y(L)("Next"),
          onClick: ne
        }, [
          te(ve, {
            name: "next",
            size: 16
          })
        ], 8, ou)
      ])
    ])) : o.value ? (R(), D("div", cu, [
      h("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": y(t).isPlaying ? y(L)("Pause") : y(L)("Play"),
        onClick: B
      }, [
        r.value && !i.value ? (R(), D("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: k
        }, null, 40, fu)) : (R(), gt(ve, {
          key: 1,
          name: "music",
          size: 20
        })),
        h("div", du, [
          te(ve, {
            name: y(t).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, uu),
      h("div", hu, [
        h("span", pu, z(l.value), 1),
        h("div", {
          ref_key: "lyricContainerRef",
          ref: K,
          class: "stmp-mini-lyric"
        }, [
          h("span", {
            ref_key: "lyricScrollRef",
            ref: I,
            class: "stmp-mini-lyric-scroll",
            style: St({
              transform: `translateX(${U.value}px)`,
              transition: _.value > 0 ? `transform ${_.value}ms linear` : "none"
            })
          }, z(a.value || " "), 5)
        ], 512)
      ])
    ])) : (R(), D("div", lu, [
      h("div", au, [
        te(ve, {
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
    const t = Xt(), s = Me(), n = $e(() => s.settings.providers.find((p) => p.id === "local")?.enabled ?? !1), i = /* @__PURE__ */ he(null), r = () => {
      i.value?.click();
    }, o = async (p) => {
      const m = p.target;
      if (!m.files || !m.files[0]) return;
      const v = m.files[0], T = `stmp:audio:${Date.now()}-${v.name}`, I = s.storage;
      I && (await I.setBlob(T, v), t.addLocalFile(v.name, T)), m.value = "";
    }, l = $e(() => {
      const p = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((m, v) => {
        p[m.source] && p[m.source].push({ index: v, item: m });
      }), p;
    }), a = {
      chat: L("From Chat"),
      user: L("My List"),
      local: L("Local Files")
    };
    function f(p) {
      t.play(p);
    }
    function c(p) {
      t.removeItem(p);
    }
    return (p, m) => (R(), D("div", mu, [
      n.value ? (R(), D("div", vu, [
        h("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: i,
          onChange: o,
          style: { display: "none" }
        }, null, 544),
        h("button", {
          class: "stmp-upload-btn",
          "aria-label": y(L)("Add local file"),
          onClick: r
        }, " + " + z(y(L)("Add local file")), 9, yu)
      ])) : Te("", !0),
      y(t).isEmpty ? (R(), D("div", _u, z(y(L)("No Songs")), 1)) : (R(), D(se, { key: 2 }, Be(["chat", "user", "local"], (v) => h("div", {
        key: v,
        class: "stmp-group"
      }, [
        l.value[v].length ? (R(), D(se, { key: 0 }, [
          h("div", bu, z(a[v]), 1),
          (R(!0), D(se, null, Be(l.value[v], (T) => (R(), D("div", {
            key: T.item.id,
            class: pe(["stmp-item", { active: T.index === y(t).currentIndex }]),
            onClick: (I) => f(T.index)
          }, [
            h("span", wu, z(T.index + 1), 1),
            h("div", Su, [
              h("span", Cu, z(T.item.song), 1),
              T.item.artist ? (R(), D("span", Tu, z(T.item.artist), 1)) : Te("", !0)
            ]),
            h("button", {
              class: "stmp-item-del",
              onClick: Wt((I) => c(T.index), ["stop"])
            }, [
              te(ve, {
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
      const v = No(n.settings.providers);
      await t.search(v);
    }
    const a = () => {
      l();
    };
    function f(v) {
      const T = v.provider + v.id;
      if (o.value === T) return;
      o.value = T;
      const I = s.list.length;
      s.addFromSearch(v);
      const K = s.list.length - 1;
      K >= I && s.play(K), setTimeout(() => {
        r.value.add(T), o.value = null;
      }, 600);
    }
    function c(v) {
      const T = v.provider + v.id;
      r.value.has(T) || (s.addFromSearch(v), r.value.add(T));
    }
    function p(v) {
      return r.value.has(v.provider + v.id);
    }
    function m(v) {
      return o.value === v.provider + v.id;
    }
    return (v, T) => (R(), D("div", ku, [
      h("div", Mu, [
        _t(h("input", {
          "onUpdate:modelValue": T[0] || (T[0] = (I) => i.value = I),
          class: "stmp-search-input",
          placeholder: y(L)("Search Song..."),
          onKeydown: Ro(l, ["enter"])
        }, null, 40, Ru), [
          [js, i.value]
        ]),
        h("button", {
          class: "stmp-icon-btn",
          disabled: y(t).isSearching,
          onClick: l
        }, [
          y(t).isSearching ? (R(), gt(ve, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (R(), gt(ve, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, Pu)
      ]),
      y(t).error ? (R(), D("div", Lu, [
        h("span", null, z(y(t).error), 1),
        h("button", {
          class: "stmp-retry-btn",
          "aria-label": y(L)("Retry"),
          onClick: a
        }, z(y(L)("Retry")), 9, $u)
      ])) : Te("", !0),
      y(t).isSearching ? (R(), D("div", Ou, z(y(L)("Searching...")), 1)) : i.value && !y(t).results.length ? (R(), D("div", Du, z(y(L)("No results")), 1)) : !i.value && !y(t).results.length ? (R(), D("div", Nu, z(y(L)("Type a song name to search")), 1)) : Te("", !0),
      y(t).results.length ? (R(), D("div", Fu, [
        (R(!0), D(se, null, Be(y(t).results, (I) => (R(), D("div", {
          key: I.provider + I.id,
          class: pe(["stmp-result", { "stmp-result-playing": m(I) }])
        }, [
          h("div", {
            class: "stmp-result-info",
            onClick: (K) => f(I)
          }, [
            h("span", Hu, z(I.name), 1),
            I.artist ? (R(), D("span", Vu, z(I.artist), 1)) : Te("", !0)
          ], 8, Uu),
          h("button", {
            class: pe(["stmp-icon-btn stmp-result-add", { added: p(I) }]),
            "aria-label": p(I) ? y(L)("Added") : y(L)("Add to list"),
            onClick: Wt((K) => c(I), ["stop"])
          }, [
            te(ve, {
              name: p(I) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, ju)
        ], 2))), 128))
      ])) : Te("", !0)
    ]));
  }
}), Wu = /* @__PURE__ */ Et(Bu, [["__scopeId", "data-v-a8d156af"]]), Ku = { class: "stmp-panel" }, zu = { class: "stmp-topbar stmp-drag-handle" }, Ju = ["aria-label"], Gu = { class: "stmp-cover-large" }, qu = ["src"], Yu = {
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
    const p = $e(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), m = /* @__PURE__ */ he(0), v = /* @__PURE__ */ he([]), T = /* @__PURE__ */ he(null);
    function I(E, W) {
      E && (v.value[W] = E);
    }
    async function K() {
      await Ne();
      const E = t.currentLyricIndex, W = T.value;
      if (!W || E < 0) {
        m.value = 0;
        return;
      }
      const ee = v.value[E];
      if (!ee) return;
      const me = ee.offsetTop, oe = ee.offsetHeight, H = W.clientHeight;
      m.value = me - H / 2 + oe / 2;
    }
    Fe(() => t.currentLyricIndex, K), Fe(() => t.lyrics, () => {
      v.value = [], K();
    });
    function U(E) {
      const W = Math.floor(E / 60), ee = Math.floor(E % 60);
      return W + ":" + ee.toString().padStart(2, "0");
    }
    function _(E) {
      const W = E.target;
      t.seek(Number(W.value) / 100 * t.duration);
    }
    const C = ["list", "random", "single"], k = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    };
    function B() {
      const E = n.settings.playMode, W = C.indexOf(E), ee = C[(W + 1) % C.length];
      n.setPlayMode(ee);
    }
    function ne(E) {
      const W = E.target;
      t.setVolume(Number(W.value));
    }
    function M() {
      a && clearTimeout(a), l.value = !0;
    }
    function N() {
      a = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function b() {
      t.volume > 0 ? t.setVolume(0) : t.setVolume(65);
    }
    function j(E) {
      r.value === E ? r.value = null : r.value = E;
    }
    function Y() {
      r.value = null;
    }
    return (E, W) => (R(), D("div", Ku, [
      h("div", zu, [
        W[7] || (W[7] = h("div", { class: "stmp-topbar-spacer" }, null, -1)),
        h("button", {
          class: "stmp-icon-btn",
          "aria-label": y(L)("Collapse panel"),
          onClick: W[0] || (W[0] = Wt((ee) => E.$emit("collapse"), ["stop"]))
        }, [
          te(ve, {
            name: "chevron-down",
            size: 18
          })
        ], 8, Ju)
      ]),
      h("div", {
        class: "stmp-display",
        onClick: W[1] || (W[1] = (ee) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        h("div", {
          class: pe(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          h("div", Gu, [
            f.value && !o.value ? (R(), D("img", {
              key: 0,
              src: f.value,
              alt: "cover",
              onError: c
            }, null, 40, qu)) : (R(), D("div", Yu, [
              te(ve, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          h("div", Xu, z(y(t).currentTrack?.name || y(L)("No Song")), 1),
          h("div", Zu, z(y(t).currentTrack?.artist || " "), 1)
        ], 2),
        h("div", {
          class: pe(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          h("div", Qu, [
            h("div", ef, z(y(t).currentTrack?.name || y(L)("No Song")), 1),
            h("div", tf, z(y(t).currentTrack?.artist || " "), 1)
          ]),
          h("div", {
            ref_key: "lyricWindowRef",
            ref: T,
            class: "stmp-lyric-window"
          }, [
            y(t).lyrics.length > 0 ? (R(), D("div", {
              key: 0,
              class: "stmp-lyric-scroll",
              style: St({ transform: `translateY(-${m.value}px)` })
            }, [
              (R(!0), D(se, null, Be(y(t).lyrics, (ee, me) => (R(), D("div", {
                key: me,
                ref_for: !0,
                ref: (oe) => I(oe, me),
                class: pe(["stmp-lyric-line", { "stmp-lyric-active": me === y(t).currentLyricIndex }])
              }, z(ee.text), 3))), 128))
            ], 4)) : Te("", !0)
          ], 512)
        ], 2)
      ]),
      h("div", sf, [
        h("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: p.value,
          class: "stmp-range",
          onInput: _
        }, null, 40, nf),
        h("div", rf, [
          h("span", null, z(U(y(t).currentTime)), 1),
          h("span", null, z(U(y(t).duration)), 1)
        ])
      ]),
      h("div", of, [
        h("div", lf, [
          h("button", {
            class: pe(["stmp-ctrl-btn", { active: r.value === "search" }]),
            "aria-label": y(L)("Search"),
            onClick: W[2] || (W[2] = Wt((ee) => j("search"), ["stop"]))
          }, [
            te(ve, {
              name: "search",
              size: 18
            })
          ], 10, af)
        ]),
        h("button", {
          class: "stmp-ctrl-btn",
          "aria-label": y(L)("Toggle play mode"),
          onClick: B
        }, [
          te(ve, {
            name: k[y(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, cf),
        h("button", {
          class: "stmp-ctrl-btn",
          "aria-label": y(L)("Previous"),
          onClick: W[3] || (W[3] = (ee) => y(s).prev())
        }, [
          te(ve, {
            name: "prev",
            size: 18
          })
        ], 8, uf),
        h("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": y(t).isPlaying ? y(L)("Pause") : y(L)("Play"),
          onClick: W[4] || (W[4] = (ee) => y(t).togglePlay())
        }, [
          te(ve, {
            name: y(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, ff),
        h("button", {
          class: "stmp-ctrl-btn",
          "aria-label": y(L)("Next"),
          onClick: W[5] || (W[5] = (ee) => y(s).next())
        }, [
          te(ve, {
            name: "next",
            size: 18
          })
        ], 8, df),
        h("button", {
          class: pe(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": y(L)("Playlist"),
          onClick: W[6] || (W[6] = Wt((ee) => j("list"), ["stop"]))
        }, [
          te(ve, {
            name: "list-music",
            size: 18
          })
        ], 10, hf),
        h("div", pf, [
          h("div", {
            class: "stmp-volume-container",
            onMouseenter: M,
            onMouseleave: N
          }, [
            h("button", {
              class: "stmp-ctrl-btn",
              "aria-label": y(L)("Mute / Unmute"),
              onClick: b
            }, [
              te(ve, {
                name: y(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, gf),
            h("div", {
              class: pe(["stmp-volume-popup", { show: l.value }])
            }, [
              h("input", {
                type: "range",
                min: "0",
                max: "100",
                value: y(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: ne
              }, null, 40, mf)
            ], 2)
          ], 32)
        ])
      ]),
      te(Ka, { name: "stmp-overlay" }, {
        default: Gr(() => [
          r.value ? (R(), D("div", vf, [
            h("div", yf, [
              h("span", _f, z(r.value === "list" ? y(L)("Playlist") : y(L)("Search")), 1),
              h("button", {
                class: "stmp-overlay-close",
                "aria-label": y(L)("Close"),
                onClick: Wt(Y, ["stop"])
              }, [
                te(ve, {
                  name: "x",
                  size: 16
                })
              ], 8, bf)
            ]),
            h("div", xf, [
              r.value === "list" ? (R(), gt(Au, { key: 0 })) : (R(), gt(Wu, { key: 1 }))
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
    const o = $e(() => t.settings.widgetMode === "dock"), l = $e(() => t.settings.widgetMode === "inline"), a = $e(() => t.settings.widgetMode === "hidden"), f = /* @__PURE__ */ he(window.innerWidth <= 768), c = /* @__PURE__ */ he(!1), p = $e(() => t.settings.customOpacity ? t.settings.opacity : 75), m = (H) => {
      H.key === "Escape" && (n.value = !1), H.key === " " && H.target === document.body && (H.preventDefault(), s.togglePlay());
    };
    let v = 0, T = 0, I = 0, K = 0, U = !1, _ = !1, C = 0, k = !1, B = null, ne = null;
    function M(H) {
      if (o.value) return;
      const G = H.target;
      if (G.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!G.closest(".stmp-drag-handle") || G.closest("button")) || !n.value && G.closest("button"))
        return;
      const be = i.value?.getBoundingClientRect();
      be && (v = H.clientX, T = H.clientY, I = be.left, K = be.top, U = !1, _ = !0, C = Date.now(), k = !1, i.value && (i.value.style.left = be.left + "px", i.value.style.top = be.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), B = N, ne = b, document.addEventListener("pointermove", B), document.addEventListener("pointerup", ne), H.preventDefault());
    }
    function N(H) {
      if (!i.value || !_) return;
      const G = H.clientX - v, be = H.clientY - T;
      (Math.abs(G) > dr || Math.abs(be) > dr) && (U = !0);
      let Ce = I + G, ye = K + be;
      const Oe = i.value.offsetWidth || 60, Ft = i.value.offsetHeight || 40, _n = window.innerWidth - Oe, bn = window.innerHeight - Ft;
      Ce = Math.max(0, Math.min(Ce, _n)), ye = Math.max(0, Math.min(ye, bn)), i.value.style.left = Ce + "px", i.value.style.top = ye + "px";
    }
    function b() {
      _ = !1, B && document.removeEventListener("pointermove", B), ne && document.removeEventListener("pointerup", ne), B = null, ne = null;
      const H = Date.now() - C;
      if (U) {
        if (k = !0, i.value) {
          const G = i.value.getBoundingClientRect();
          t.setPosition({ x: G.left, y: G.top }), n.value && Ne(() => j());
        }
        return;
      }
      if (H > Cf) {
        k = !0;
        return;
      }
    }
    function j() {
      if (!i.value) return;
      const H = i.value.getBoundingClientRect(), G = i.value.offsetWidth, be = i.value.offsetHeight;
      let Ce = H.left, ye = H.top;
      Ce + G > window.innerWidth && (Ce = window.innerWidth - G), ye + be > window.innerHeight && (ye = window.innerHeight - be), Ce < 0 && (Ce = 0), ye < 0 && (ye = 0), i.value.style.left = Ce + "px", i.value.style.top = ye + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: Ce, y: ye });
    }
    function Y() {
      if (!i.value || !o.value) return;
      const H = document.querySelector("#send_form");
      if (!H) return;
      const G = H.getBoundingClientRect(), be = i.value.offsetHeight || 38, Ce = Math.max(80, G.top - 8);
      i.value.style.maxHeight = Ce + "px";
      let ye = G.top - Math.min(be, Ce);
      if (ye < 4 && (ye = 4), window.innerWidth <= 768)
        i.value.style.left = G.left + "px", i.value.style.width = G.width + "px";
      else {
        const Oe = t.settings.dockAlign === "right", Ft = i.value.offsetWidth;
        Oe ? i.value.style.left = G.right - Ft + "px" : i.value.style.left = G.left + "px", i.value.style.width = "";
      }
      i.value.style.top = ye + "px", i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function E() {
      if (!i.value || o.value) return;
      const H = t.settings.position;
      H ? (i.value.style.left = H.x + "px", i.value.style.top = H.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", window.innerWidth <= 768 && Ne(() => j())) : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
    }
    function W(H) {
      if (k) {
        k = !1;
        return;
      }
      if (o.value && !n.value) {
        if (H.target.closest("button, input")) return;
        me();
        return;
      }
      if (!o.value && !n.value) {
        if (H.target.closest("button, input")) return;
        me();
      }
    }
    function ee(H) {
      n.value || H.target.closest("button, input") || me();
    }
    function me() {
      n.value = !n.value, Ne(() => {
        o.value ? Y() : l.value || t.settings.position && j();
      });
    }
    Fe(() => t.settings.widgetMode, (H) => {
      n.value = !1, i.value && (i.value.style.width = "", i.value.style.left = "", i.value.style.top = "", i.value.style.right = "", i.value.style.bottom = "", i.value.style.maxHeight = ""), H === "inline" && (c.value = !!document.querySelector("#send_form")), Ne(() => {
        H === "dock" ? Y() : H === "drag" && E();
      });
    }), Fe(() => t.settings.dockAlign, () => {
      o.value && Ne(() => Y());
    }), hn(() => {
      c.value = !!document.querySelector("#send_form"), Ne(() => {
        o.value ? Y() : l.value || E();
      }), i.value && typeof ResizeObserver < "u" && (r = new ResizeObserver(() => {
        o.value && Y();
      }), r.observe(i.value)), window.addEventListener("resize", oe), window.addEventListener("keydown", m);
    });
    function oe() {
      f.value = window.innerWidth <= 768, o.value ? Ne(() => Y()) : l.value || Ne(() => j());
    }
    return ui(() => {
      b(), r && (r.disconnect(), r = null), window.removeEventListener("resize", oe), window.removeEventListener("keydown", m);
    }), (H, G) => l.value ? (R(), D(se, { key: 0 }, [
      c.value ? (R(), gt(Fl, {
        key: 0,
        to: "#send_form"
      }, [
        n.value ? (R(), D("div", Sf, [
          te(fr, { onCollapse: me })
        ])) : (R(), D("div", {
          key: 0,
          class: "stmp-inline-bar",
          onClick: ee
        }, [
          te(ur, {
            "is-dock": !0,
            "is-mobile": !0
          })
        ]))
      ])) : Te("", !0)
    ], 64)) : a.value ? Te("", !0) : (R(), D("div", {
      key: 1,
      ref_key: "widgetRef",
      ref: i,
      class: pe(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": o.value
      }]),
      style: St({ "--stmp-opacity": p.value + "%" }),
      onPointerdown: M,
      onClick: W
    }, [
      n.value ? (R(), gt(fr, {
        key: 1,
        onCollapse: me
      })) : (R(), gt(ur, {
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
    return (i, r) => (R(), D("label", {
      class: pe(["stmp-switch-row", { "stmp-switch-disabled": e.disabled }])
    }, [
      e.label ? (R(), D("span", Ef, z(e.label), 1)) : Te("", !0),
      h("span", Af, [
        h("input", {
          type: "checkbox",
          checked: e.modelValue,
          disabled: e.disabled,
          onChange: n
        }, null, 40, kf),
        r[0] || (r[0] = h("span", { class: "stmp-switch-track" }, [
          h("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ], 2));
  }
}), Dn = /* @__PURE__ */ Et(Mf, [["__scopeId", "data-v-0c8dbcad"]]), Rf = { class: "stmp-settings" }, Pf = { class: "stmp-tab-bar" }, Lf = ["onClick"], $f = { class: "stmp-tab-content" }, Of = { class: "stmp-tab-panel" }, Df = { class: "stmp-row" }, Nf = { class: "stmp-row-info" }, Ff = { class: "stmp-row-title" }, Uf = { class: "stmp-row-desc" }, Hf = { class: "stmp-chips" }, Vf = ["onClick"], jf = {
  key: 0,
  class: "stmp-row"
}, Bf = { class: "stmp-row-info" }, Wf = { class: "stmp-row-title" }, Kf = { class: "stmp-row-desc" }, zf = { class: "stmp-chips" }, Jf = ["onClick"], Gf = {
  key: 1,
  class: "stmp-hint"
}, qf = {
  key: 2,
  class: "stmp-row"
}, Yf = { class: "stmp-row-info" }, Xf = { class: "stmp-row-title" }, Zf = { class: "stmp-row-desc" }, Qf = { class: "stmp-slider-wrap" }, ed = ["value"], td = { class: "stmp-slider-val" }, sd = { class: "stmp-tab-panel" }, nd = { class: "stmp-row" }, id = { class: "stmp-row-info" }, rd = { class: "stmp-row-title" }, od = { class: "stmp-slider-wrap" }, ld = ["value"], ad = { class: "stmp-slider-val" }, cd = { class: "stmp-row" }, ud = { class: "stmp-row-info" }, fd = { class: "stmp-row-title" }, dd = { class: "stmp-chips" }, hd = ["onClick"], pd = { class: "stmp-tab-panel" }, gd = { class: "stmp-hint" }, md = { class: "stmp-section-title" }, vd = { class: "stmp-row-desc" }, yd = {
  key: 0,
  class: "stmp-provider-fields"
}, _d = ["onUpdate:modelValue", "placeholder"], bd = ["onUpdate:modelValue", "placeholder"], xd = { class: "stmp-section-title" }, wd = { class: "stmp-row-desc" }, Sd = { class: "stmp-rules" }, Cd = ["onClick"], Td = { class: "stmp-rule-add" }, Id = ["placeholder"], Ed = { class: "stmp-tab-panel" }, Ad = { class: "stmp-section-title" }, kd = { class: "stmp-row" }, Md = { class: "stmp-row-info" }, Rd = { class: "stmp-row-title" }, Pd = { class: "stmp-row-desc" }, Ld = { class: "stmp-row" }, $d = { class: "stmp-row-info" }, Od = { class: "stmp-row-title" }, Dd = { class: "stmp-row-desc" }, Nd = { class: "stmp-about" }, Fd = { class: "stmp-about-version" }, Ud = { class: "stmp-about-desc" }, Hd = "1.0.0", Vd = "https://github.com/vvb7456/ST-little-player", jd = /* @__PURE__ */ It({
  __name: "SettingsView",
  setup(e) {
    const t = Me(), s = /* @__PURE__ */ he("appearance"), n = [
      { id: "appearance", label: L("Appearance"), icon: "fa-solid fa-palette" },
      { id: "playback", label: L("Playback"), icon: "fa-solid fa-music" },
      { id: "ai", label: L("AI"), icon: "fa-solid fa-wand-magic-sparkles" },
      { id: "general", label: L("General"), icon: "fa-solid fa-sliders" }
    ], i = [
      { value: "dock", label: L("Dock"), icon: "fa-solid fa-grip-lines" },
      { value: "drag", label: L("Drag"), icon: "fa-solid fa-up-down-left-right" },
      { value: "inline", label: L("Inline"), icon: "fa-solid fa-puzzle-piece" },
      { value: "hidden", label: L("Hidden"), icon: "fa-solid fa-eye-slash" }
    ], r = [
      { value: "left", label: L("Left"), icon: "fa-solid fa-align-left" },
      { value: "right", label: L("Right"), icon: "fa-solid fa-align-right" }
    ], o = () => t.settings.widgetMode === "inline";
    function l(U) {
      const _ = U.target;
      t.setOpacity(Number(_.value));
    }
    const a = [
      { value: "list", label: L("List Loop"), icon: "fa-solid fa-repeat" },
      { value: "random", label: L("Random"), icon: "fa-solid fa-shuffle" },
      { value: "single", label: L("Single Loop"), icon: "fa-solid fa-1" }
    ];
    function f(U) {
      const _ = U.target;
      t.setVolume(Number(_.value));
    }
    const c = {
      netease: L("NetEase"),
      local: L("Local Files"),
      custom: L("Custom API")
    };
    function p(U) {
      const _ = t.settings.providers.find((C) => C.id === U);
      _ && (_.enabled = !_.enabled, t.save());
    }
    const m = /* @__PURE__ */ he("");
    function v() {
      const U = m.value.trim();
      U && (t.addCustomCueRule(U), m.value = "");
    }
    function T(U) {
      t.removeCustomCueRule(U);
    }
    const I = () => {
      const U = JSON.stringify(t.settings, null, 2), _ = new Blob([U], { type: "application/json" }), C = URL.createObjectURL(_), k = document.createElement("a");
      k.href = C, k.download = "st-music-player-settings.json", k.click(), URL.revokeObjectURL(C);
    }, K = () => {
      const U = document.createElement("input");
      U.type = "file", U.accept = ".json", U.onchange = async (_) => {
        const C = _.target.files?.[0];
        if (!C) return;
        const k = await C.text();
        try {
          const B = JSON.parse(k);
          if (typeof B != "object" || B === null) throw new Error("Not an object");
          const ne = ["volume", "playMode", "position", "widgetMode", "autoPlayOnNewCue", "providers", "customCueRules", "customOpacity", "opacity"], M = {};
          for (const N of ne)
            N in B && (M[N] = B[N]);
          if (typeof M.volume != "number" || M.volume < 0 || M.volume > 100)
            throw new Error("Invalid volume");
          if (typeof M.playMode != "string" || !["list", "random", "single"].includes(M.playMode))
            throw new Error("Invalid playMode");
          if (M.providers && !Array.isArray(M.providers))
            throw new Error("Invalid providers");
          if (M.customCueRules && !Array.isArray(M.customCueRules))
            throw new Error("Invalid customCueRules");
          Object.assign(t.settings, M), t.save(), toastr.success(L("Data imported"));
        } catch (B) {
          console.error("Import failed", B), toastr.error(L("Import failed") + ": " + (B instanceof Error ? B.message : L("Invalid JSON")));
        }
      }, U.click();
    };
    return (U, _) => (R(), D("div", Rf, [
      h("div", Pf, [
        (R(), D(se, null, Be(n, (C) => h("div", {
          key: C.id,
          class: pe(["stmp-tab", { active: s.value === C.id }]),
          onClick: (k) => s.value = C.id
        }, [
          h("i", {
            class: pe(C.icon)
          }, null, 2),
          h("span", null, z(C.label), 1)
        ], 10, Lf)), 64))
      ]),
      h("div", $f, [
        _t(h("div", Of, [
          h("div", Df, [
            h("div", Nf, [
              h("div", Ff, z(y(L)("Widget Mode")), 1),
              h("div", Uf, z(y(L)("Choose how the player widget is displayed")), 1)
            ])
          ]),
          h("div", Hf, [
            (R(), D(se, null, Be(i, (C) => h("div", {
              key: C.value,
              class: pe(["stmp-chip", { active: y(t).settings.widgetMode === C.value }]),
              onClick: (k) => y(t).setWidgetMode(C.value)
            }, [
              h("i", {
                class: pe(C.icon)
              }, null, 2),
              h("span", null, z(C.label), 1)
            ], 10, Vf)), 64))
          ]),
          y(t).settings.widgetMode === "dock" ? (R(), D("div", jf, [
            h("div", Bf, [
              h("div", Wf, z(y(L)("Dock Alignment")), 1),
              h("div", Kf, z(y(L)("Align the docked player to the left or right of the input bar")), 1)
            ]),
            h("div", zf, [
              (R(), D(se, null, Be(r, (C) => h("div", {
                key: C.value,
                class: pe(["stmp-chip", { active: y(t).settings.dockAlign === C.value }]),
                onClick: (k) => y(t).setDockAlign(C.value)
              }, [
                h("i", {
                  class: pe(C.icon)
                }, null, 2),
                h("span", null, z(C.label), 1)
              ], 10, Jf)), 64))
            ])
          ])) : Te("", !0),
          _[4] || (_[4] = h("div", { class: "stmp-divider" }, null, -1)),
          te(Dn, {
            "model-value": y(t).settings.customOpacity && !o(),
            label: y(L)("Custom opacity"),
            disabled: o(),
            "onUpdate:modelValue": y(t).setCustomOpacity
          }, null, 8, ["model-value", "label", "disabled", "onUpdate:modelValue"]),
          o() ? (R(), D("div", Gf, z(y(L)("Not available in inline mode")), 1)) : Te("", !0),
          y(t).settings.customOpacity && !o() ? (R(), D("div", qf, [
            h("div", Yf, [
              h("div", Xf, z(y(L)("Opacity")), 1),
              h("div", Zf, z(y(L)("Adjust the player background opacity")), 1)
            ]),
            h("div", Qf, [
              h("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: y(t).settings.opacity,
                onInput: l
              }, null, 40, ed),
              h("span", td, z(y(t).settings.opacity) + "%", 1)
            ])
          ])) : Te("", !0)
        ], 512), [
          [Ds, s.value === "appearance"]
        ]),
        _t(h("div", sd, [
          h("div", nd, [
            h("div", id, [
              h("div", rd, z(y(L)("Default Volume")), 1)
            ]),
            h("div", od, [
              h("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: y(t).settings.volume,
                onInput: f
              }, null, 40, ld),
              h("span", ad, z(y(t).settings.volume), 1)
            ])
          ]),
          h("div", cd, [
            h("div", ud, [
              h("div", fd, z(y(L)("Default Play Mode")), 1)
            ]),
            h("div", dd, [
              (R(), D(se, null, Be(a, (C) => h("div", {
                key: C.value,
                class: pe(["stmp-chip", { active: y(t).settings.playMode === C.value }]),
                onClick: (k) => y(t).setPlayMode(C.value)
              }, [
                h("i", {
                  class: pe(C.icon)
                }, null, 2),
                h("span", null, z(C.label), 1)
              ], 10, hd)), 64))
            ])
          ])
        ], 512), [
          [Ds, s.value === "playback"]
        ]),
        _t(h("div", pd, [
          te(Dn, {
            "model-value": y(t).settings.autoPlayOnNewCue,
            label: y(L)("Auto-play on new cue"),
            "onUpdate:modelValue": _[0] || (_[0] = (C) => {
              y(t).settings.autoPlayOnNewCue = C, y(t).save();
            })
          }, null, 8, ["model-value", "label"]),
          h("div", gd, z(y(L)("Automatically play when a new song cue is detected")), 1),
          _[7] || (_[7] = h("div", { class: "stmp-divider" }, null, -1)),
          h("div", md, z(y(L)("Providers")), 1),
          h("div", vd, z(y(L)("Enable or disable music sources")), 1),
          (R(!0), D(se, null, Be(y(t).settings.providers, (C) => (R(), D("div", {
            key: C.id,
            class: "stmp-provider-row"
          }, [
            te(Dn, {
              "model-value": C.enabled,
              label: c[C.id] || C.id,
              "onUpdate:modelValue": () => p(C.id)
            }, null, 8, ["model-value", "label", "onUpdate:modelValue"]),
            C.id === "custom" && C.enabled ? (R(), D("div", yd, [
              _t(h("input", {
                class: "text_pole",
                "onUpdate:modelValue": (k) => C.config.searchURL = k,
                placeholder: y(L)("Search URL"),
                onChange: _[1] || (_[1] = (k) => y(t).save())
              }, null, 40, _d), [
                [js, C.config.searchURL]
              ]),
              _t(h("input", {
                class: "text_pole",
                "onUpdate:modelValue": (k) => C.config.resolveURL = k,
                placeholder: y(L)("Resolve URL"),
                onChange: _[2] || (_[2] = (k) => y(t).save())
              }, null, 40, bd), [
                [js, C.config.resolveURL]
              ])
            ])) : Te("", !0)
          ]))), 128)),
          _[8] || (_[8] = h("div", { class: "stmp-divider" }, null, -1)),
          h("div", xd, z(y(L)("Custom Cue Rules (Regex)")), 1),
          h("div", wd, z(y(L)("Additional regex patterns to detect song cues in chat")), 1),
          h("div", Sd, [
            (R(!0), D(se, null, Be(y(t).settings.customCueRules, (C, k) => (R(), D("div", {
              key: k,
              class: "stmp-rule"
            }, [
              h("code", null, z(C), 1),
              h("div", {
                class: "menu_button menu_button_icon stmp-rule-del",
                onClick: (B) => T(k)
              }, [..._[5] || (_[5] = [
                h("i", { class: "fa-solid fa-xmark" }, null, -1)
              ])], 8, Cd)
            ]))), 128))
          ]),
          h("div", Td, [
            _t(h("input", {
              "onUpdate:modelValue": _[3] || (_[3] = (C) => m.value = C),
              class: "text_pole",
              placeholder: y(L)("Add regex rule..."),
              onKeydown: Ro(v, ["enter"])
            }, null, 40, Id), [
              [js, m.value]
            ]),
            h("div", {
              class: "menu_button menu_button_icon stmp-rule-add-btn",
              onClick: v
            }, [..._[6] || (_[6] = [
              h("i", { class: "fa-solid fa-plus" }, null, -1)
            ])])
          ])
        ], 512), [
          [Ds, s.value === "ai"]
        ]),
        _t(h("div", Ed, [
          h("div", Ad, z(y(L)("Data")), 1),
          h("div", kd, [
            h("div", Md, [
              h("div", Rd, z(y(L)("Export data")), 1),
              h("div", Pd, z(y(L)("Save your settings to a JSON file")), 1)
            ]),
            h("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: I
            }, [..._[9] || (_[9] = [
              h("i", { class: "fa-solid fa-file-export" }, null, -1)
            ])])
          ]),
          h("div", Ld, [
            h("div", $d, [
              h("div", Od, z(y(L)("Import data")), 1),
              h("div", Dd, z(y(L)("Load settings from a JSON file")), 1)
            ]),
            h("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: K
            }, [..._[10] || (_[10] = [
              h("i", { class: "fa-solid fa-file-import" }, null, -1)
            ])])
          ]),
          _[15] || (_[15] = h("div", { class: "stmp-divider" }, null, -1)),
          h("div", Nd, [
            _[12] || (_[12] = h("div", { class: "stmp-about-icon" }, [
              h("i", { class: "fa-solid fa-music" })
            ], -1)),
            _[13] || (_[13] = h("div", { class: "stmp-about-name" }, "ST-Music-Player", -1)),
            h("div", Fd, z(y(L)("Version")) + " " + z(Hd), 1),
            h("div", Ud, z(y(L)("A floating music player extension for SillyTavern")), 1),
            h("a", {
              href: Vd,
              target: "_blank",
              rel: "noopener",
              class: "stmp-about-link"
            }, [..._[11] || (_[11] = [
              h("i", { class: "fa-brands fa-github" }, null, -1),
              h("span", null, "GitHub", -1)
            ])]),
            _[14] || (_[14] = h("div", { class: "stmp-about-copyright" }, "© 2024-2026 ST-Music-Player", -1))
          ])
        ], 512), [
          [Ds, s.value === "general"]
        ])
      ])
    ]));
  }
}), Bd = /* @__PURE__ */ Et(jd, [["__scopeId", "data-v-5f6f02f6"]]);
class Wd {
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
function Kd() {
  return new Wd();
}
const zd = [
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
  for (const i of zd)
    for (const r of hr(i, e)) n(r);
  for (const i of t)
    try {
      const r = new RegExp(i, "g");
      for (const o of hr(r, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((i, r) => i.index - r.index).map((i) => i.cue);
}
class Jd {
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
let Gt = null, ut = null, ys = null, _s = null, qt = null, en = null;
const Gd = `
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
function qd() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(Gd), _s = e.children(".inline-drawer").last()[0] ?? null, !_s)) return;
  const t = _s.querySelector("#stmp-settings-mount");
  t && en && (qt = Po(Bd), qt.use(en), qt.mount(t));
}
function Yd() {
  qt && (qt.unmount(), qt = null), _s?.remove(), _s = null;
}
function Xd(e, t, s) {
  ut = Kd(), ut.on("chat-changed", () => {
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
  }), ut.on("message-generated", (n) => {
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
  }), ut.on("message-updated", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), ut.on("message-deleted", (n) => {
    n.messageId !== void 0 && t.handleMessageDelete(n.messageId);
  }), ut.on("message-swiped", (n) => {
    n.messageId !== void 0 && t.handleMessageUpdate(n.messageId);
  }), ut.start();
}
function Zd(e, t, s) {
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
async function th() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = xc();
    en = t, Gt = Po(If), Gt.use(t), Gt.mount(e);
    const s = Me(), n = Rc();
    s.init(n);
    const i = Nt();
    i.init(), i.setVolume(s.settings.volume);
    const r = new Jd((a) => SillyTavern.getContext().chat[a]?.mes), o = Xt();
    o.init(r), qd();
    const l = SillyTavern.getContext();
    ys = () => {
      Xd(r, o, s), Zd(r, o, s);
    }, l.eventSource.on(l.event_types.APP_READY, ys), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function Fo() {
  if (ys) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, ys);
    } catch {
    }
    ys = null;
  }
  if (ut?.stop(), ut = null, Gt) {
    try {
      Nt().destroy();
    } catch {
    }
    Gt.unmount(), Gt = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), Yd(), en = null;
}
function sh() {
  Fo();
}
async function Qd() {
  try {
    const e = SillyTavern.getContext();
    delete e.extensionSettings[vs], e.saveSettingsDebounced();
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to delete settings:", e);
  }
  try {
    const e = SillyTavern.libs?.localforage;
    if (e && typeof e.keys == "function") {
      const t = await e.keys();
      await Promise.all(
        t.filter((s) => s.startsWith(vs) || s.startsWith("stmp:")).map((s) => e.removeItem(s))
      );
    }
  } catch (e) {
    console.error("[ST-Music-Player] clean: failed to clear localforage:", e);
  }
}
async function nh() {
  await Qd(), Fo();
}
export {
  Qd as clean,
  nh as delete,
  Fo as destroy,
  sh as disable,
  th as init
};
