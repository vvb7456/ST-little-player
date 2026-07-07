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
}, mo = () => !1, tn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), sn = (e) => e.startsWith("onUpdate:"), Se = Object.assign, Qn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Ur = Object.prototype.hasOwnProperty, le = (e, t) => Ur.call(e, t), q = Array.isArray, zt = (e) => Es(e) === "[object Map]", vo = (e) => Es(e) === "[object Set]", _i = (e) => Es(e) === "[object Date]", Q = (e) => typeof e == "function", ge = (e) => typeof e == "string", Ke = (e) => typeof e == "symbol", ae = (e) => e !== null && typeof e == "object", yo = (e) => (ae(e) || Q(e)) && Q(e.then) && Q(e.catch), _o = Object.prototype.toString, Es = (e) => _o.call(e), Hr = (e) => Es(e).slice(8, -1), bo = (e) => Es(e) === "[object Object]", nn = (e) => ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, as = /* @__PURE__ */ Zn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), on = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Vr = /-\w/g, Je = on(
  (e) => e.replace(Vr, (t) => t.slice(1).toUpperCase())
), jr = /\B([A-Z])/g, Tt = on(
  (e) => e.replace(jr, "-$1").toLowerCase()
), xo = on((e) => e.charAt(0).toUpperCase() + e.slice(1)), wn = on(
  (e) => e ? `on${xo(e)}` : ""
), nt = (e, t) => !Object.is(e, t), Us = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, wo = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, ei = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Br = (e) => {
  const t = ge(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let bi;
const rn = () => bi || (bi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function St(e) {
  if (q(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = ge(n) ? Jr(n) : St(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (ge(e) || ae(e))
    return e;
}
const Wr = /;(?![^(]*\))/g, Kr = /:([^]+)/, zr = /\/\*[^]*?\*\//g;
function Jr(e) {
  const t = {};
  return e.replace(zr, "").split(Wr).forEach((s) => {
    if (s) {
      const n = s.split(Kr);
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
const Gr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qr = /* @__PURE__ */ Zn(Gr);
function So(e) {
  return !!e || e === "";
}
function Yr(e, t) {
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
    return s && n ? Yr(e, t) : !1;
  if (s = ae(e), n = ae(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !ti(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Co = (e) => !!(e && e.__v_isRef === !0), K = (e) => ge(e) ? e : e == null ? "" : q(e) || ae(e) && (e.toString === _o || !Q(e.toString)) ? Co(e) ? K(e.value) : JSON.stringify(e, To, 2) : String(e), To = (e, t) => Co(t) ? To(e, t.value) : zt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], o) => (s[Sn(n, o) + " =>"] = i, s),
    {}
  )
} : vo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Sn(s))
} : Ke(t) ? Sn(t) : ae(t) && !q(t) && !bo(t) ? String(t) : t, Sn = (e, t = "") => {
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
class Io {
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
function Eo(e) {
  return new Io(e);
}
function Ao() {
  return we;
}
function Xr(e, t = !1) {
  we && we.cleanups.push(e);
}
let de;
const Cn = /* @__PURE__ */ new WeakSet();
class ko {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ro(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, xi(this), Po(this);
    const t = de, s = Ge;
    de = this, Ge = !0;
    try {
      return this.fn();
    } finally {
      Lo(this), de = t, Ge = s, this.flags &= -3;
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
let Mo = 0, cs, us;
function Ro(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = us, us = e;
    return;
  }
  e.next = cs, cs = e;
}
function si() {
  Mo++;
}
function ni() {
  if (--Mo > 0)
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
function Po(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Lo(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), ii(n), Zr(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function Nn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ($o(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function $o(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === bs) || (e.globalVersion = bs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Nn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = de, n = Ge;
  de = e, Ge = !0;
  try {
    Po(e);
    const i = e.fn(e._value);
    (t.version === 0 || nt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    de = s, Ge = n, Lo(e), e.flags &= -3;
  }
}
function ii(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let o = s.computed.deps; o; o = o.nextDep)
      ii(o, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Zr(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Ge = !0;
const Oo = [];
function ot() {
  Oo.push(Ge), Ge = !1;
}
function rt() {
  const e = Oo.pop();
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
class Qr {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class oi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!de || !Ge || de === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== de)
      s = this.activeLink = new Qr(de, this), de.deps ? (s.prevDep = de.depsTail, de.depsTail.nextDep = s, de.depsTail = s) : de.deps = de.depsTail = s, Do(s);
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
function Do(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Do(n);
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
    i || (n.set(s, i = new oi()), i.map = n, i.key = s), i.track();
  }
}
function dt(e, t, s, n, i, o) {
  const r = Bs.get(e);
  if (!r) {
    bs++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (si(), t === "clear")
    r.forEach(l);
  else {
    const a = q(e), f = a && nn(s);
    if (a && s === "length") {
      const c = Number(n);
      r.forEach((p, m) => {
        (m === "length" || m === xs || !Ke(m) && m >= c) && l(p);
      });
    } else
      switch ((s !== void 0 || r.has(void 0)) && l(r.get(s)), f && l(r.get(xs)), t) {
        case "add":
          a ? f && l(r.get("length")) : (l(r.get(Ot)), zt(e) && l(r.get(Fn)));
          break;
        case "delete":
          a || (l(r.get(Ot)), zt(e) && l(r.get(Fn)));
          break;
        case "set":
          zt(e) && l(r.get(Ot));
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
  const t = /* @__PURE__ */ oe(e);
  return t === e ? t : (Ee(t, "iterate", xs), /* @__PURE__ */ He(e) ? t : t.map(qe));
}
function ln(e) {
  return Ee(e = /* @__PURE__ */ oe(e), "iterate", xs), e;
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
    const o = i._next();
    return o.done || (o.value = s(o.value)), o;
  }), i;
}
const sl = Array.prototype;
function lt(e, t, s, n, i, o) {
  const r = ln(e), l = r !== e && !/* @__PURE__ */ He(e), a = r[t];
  if (a !== sl[t]) {
    const p = a.apply(e, o);
    return l ? qe(p) : p;
  }
  let f = s;
  r !== e && (l ? f = function(p, m) {
    return s.call(this, tt(e, p), m, e);
  } : s.length > 2 && (f = function(p, m) {
    return s.call(this, p, m, e);
  }));
  const c = a.call(r, f, n);
  return l && i ? i(c) : c;
}
function wi(e, t, s, n) {
  const i = ln(e), o = i !== e && !/* @__PURE__ */ He(e);
  let r = s, l = !1;
  i !== e && (o ? (l = n.length === 0, r = function(f, c, p) {
    return l && (l = !1, f = tt(e, f)), s.call(this, f, tt(e, c), p, e);
  }) : s.length > 3 && (r = function(f, c, p) {
    return s.call(this, f, c, p, e);
  }));
  const a = i[t](r, ...n);
  return l ? tt(e, a) : a;
}
function In(e, t, s) {
  const n = /* @__PURE__ */ oe(e);
  Ee(n, "iterate", xs);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ cn(s[0]) ? (s[0] = /* @__PURE__ */ oe(s[0]), n[t](...s)) : i;
}
function ts(e, t, s = []) {
  ot(), si();
  const n = (/* @__PURE__ */ oe(e))[t].apply(e, s);
  return ni(), rt(), n;
}
const nl = /* @__PURE__ */ Zn("__proto__,__v_isRef,__isVue"), No = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ke)
);
function il(e) {
  Ke(e) || (e = String(e));
  const t = /* @__PURE__ */ oe(this);
  return Ee(t, "has", e), t.hasOwnProperty(e);
}
class Fo {
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
      return n === (i ? o ? pl : jo : o ? Vo : Ho).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const r = q(t);
    if (!i) {
      let a;
      if (r && (a = tl[s]))
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
    if ((Ke(s) ? No.has(s) : nl(s)) || (i || Ee(t, "get", s), o))
      return l;
    if (/* @__PURE__ */ _e(l)) {
      const a = r && nn(s) ? l : l.value;
      return i && ae(a) ? /* @__PURE__ */ Hn(a) : a;
    }
    return ae(l) ? i ? /* @__PURE__ */ Hn(l) : /* @__PURE__ */ an(l) : l;
  }
}
class Uo extends Fo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let o = t[s];
    const r = q(t) && nn(s);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ mt(o);
      if (!/* @__PURE__ */ He(n) && !/* @__PURE__ */ mt(n) && (o = /* @__PURE__ */ oe(o), n = /* @__PURE__ */ oe(n)), !r && /* @__PURE__ */ _e(o) && !/* @__PURE__ */ _e(n))
        return f || (o.value = n), !0;
    }
    const l = r ? Number(s) < t.length : le(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ _e(t) ? t : i
    );
    return t === /* @__PURE__ */ oe(i) && a && (l ? nt(n, o) && dt(t, "set", s, n) : dt(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = le(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && dt(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ke(s) || !No.has(s)) && Ee(t, "has", s), n;
  }
  ownKeys(t) {
    return Ee(
      t,
      "iterate",
      q(t) ? "length" : Ot
    ), Reflect.ownKeys(t);
  }
}
class ol extends Fo {
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
const rl = /* @__PURE__ */ new Uo(), ll = /* @__PURE__ */ new ol(), al = /* @__PURE__ */ new Uo(!0);
const Un = (e) => e, Rs = (e) => Reflect.getPrototypeOf(e);
function cl(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ oe(i), r = zt(o), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, f = i[e](...n), c = s ? Un : t ? Yt : qe;
    return !t && Ee(
      o,
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
      const o = this.__v_raw, r = /* @__PURE__ */ oe(o), l = /* @__PURE__ */ oe(i);
      e || (nt(i, l) && Ee(r, "get", i), Ee(r, "get", l));
      const { has: a } = Rs(r), f = t ? Un : e ? Yt : qe;
      if (a.call(r, i))
        return f(o.get(i));
      if (a.call(r, l))
        return f(o.get(l));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ee(/* @__PURE__ */ oe(i), "iterate", Ot), i.size;
    },
    has(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ oe(o), l = /* @__PURE__ */ oe(i);
      return e || (nt(i, l) && Ee(r, "has", i), Ee(r, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ oe(l), f = t ? Un : e ? Yt : qe;
      return !e && Ee(a, "iterate", Ot), l.forEach((c, p) => i.call(o, f(c), f(p), r));
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
        const o = /* @__PURE__ */ oe(this), r = Rs(o), l = /* @__PURE__ */ oe(i), a = !t && !/* @__PURE__ */ He(i) && !/* @__PURE__ */ mt(i) ? l : i;
        return r.has.call(o, a) || nt(i, a) && r.has.call(o, i) || nt(l, a) && r.has.call(o, l) || (o.add(a), dt(o, "add", a, a)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ He(o) && !/* @__PURE__ */ mt(o) && (o = /* @__PURE__ */ oe(o));
        const r = /* @__PURE__ */ oe(this), { has: l, get: a } = Rs(r);
        let f = l.call(r, i);
        f || (i = /* @__PURE__ */ oe(i), f = l.call(r, i));
        const c = a.call(r, i);
        return r.set(i, o), f ? nt(o, c) && dt(r, "set", i, o) : dt(r, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ oe(this), { has: r, get: l } = Rs(o);
        let a = r.call(o, i);
        a || (i = /* @__PURE__ */ oe(i), a = r.call(o, i)), l && l.call(o, i);
        const f = o.delete(i);
        return a && dt(o, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ oe(this), o = i.size !== 0, r = i.clear();
        return o && dt(
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
    s[i] = cl(i, e, t);
  }), s;
}
function ri(e, t) {
  const s = ul(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    le(s, i) && i in n ? s : n,
    i,
    o
  );
}
const fl = {
  get: /* @__PURE__ */ ri(!1, !1)
}, dl = {
  get: /* @__PURE__ */ ri(!1, !0)
}, hl = {
  get: /* @__PURE__ */ ri(!0, !1)
};
const Ho = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new WeakMap(), jo = /* @__PURE__ */ new WeakMap(), pl = /* @__PURE__ */ new WeakMap();
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
    rl,
    fl,
    Ho
  );
}
// @__NO_SIDE_EFFECTS__
function ml(e) {
  return li(
    e,
    !1,
    al,
    dl,
    Vo
  );
}
// @__NO_SIDE_EFFECTS__
function Hn(e) {
  return li(
    e,
    !0,
    ll,
    hl,
    jo
  );
}
function li(e, t, s, n, i) {
  if (!ae(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = gl(Hr(e));
  if (r === 0)
    return e;
  const l = new Proxy(
    e,
    r === 2 ? n : s
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
function oe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ oe(t) : e;
}
function ai(e) {
  return !le(e, "__v_skip") && Object.isExtensible(e) && wo(e, "__v_skip", !0), e;
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
    this.dep = new oi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ oe(t), this._value = s ? t : qe(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ He(t) || /* @__PURE__ */ mt(t);
    t = n ? t : /* @__PURE__ */ oe(t), nt(t, s) && (this._rawValue = t, this._value = n ? t : qe(t), this.dep.trigger());
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
function Bo(e) {
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
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Ke(s) ? s : String(s), this._raw = /* @__PURE__ */ oe(t);
    let i = !0, o = t;
    if (!q(t) || Ke(this._key) || !nn(this._key))
      do
        i = !/* @__PURE__ */ cn(o) || /* @__PURE__ */ He(o);
      while (i && (o = o.__v_raw));
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
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new oi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = bs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    de !== this)
      return Ro(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return $o(this), t && (t.version = this.dep.version), this._value;
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
  const { immediate: n, deep: i, once: o, scheduler: r, augmentJob: l, call: a } = s, f = (k) => i ? k : /* @__PURE__ */ He(k) || i === !1 || i === 0 ? ht(k, 1) : ht(k);
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
      ot();
      try {
        m();
      } finally {
        rt();
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
  const z = Ao(), U = () => {
    c.stop(), z && z.active && Qn(z.effects, c);
  };
  if (o && t) {
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
        if (k || i || T || (I ? B.some((ne, R) => nt(ne, _[R])) : nt(B, _))) {
          m && m();
          const ne = Pt;
          Pt = c;
          try {
            const R = [
              B,
              // pass undefined as the old value when it's changed for the first time
              _ === Ls ? void 0 : I && _[0] === Ls ? [] : _,
              v
            ];
            _ = B, a ? a(t, 3, R) : (
              // @ts-expect-error
              t(...R)
            );
          } finally {
            Pt = ne;
          }
        }
      } else
        c.run();
  };
  return l && l(C), c = new ko(p), c.scheduler = r ? () => r(C, !1) : C, v = (k) => Tl(k, !1, c), m = c.onStop = () => {
    const k = Ws.get(c);
    if (k) {
      if (a)
        a(k, 4);
      else
        for (const B of k) B();
      Ws.delete(c);
    }
  }, t ? n ? C(!0) : _ = c.run() : r ? r(C.bind(null, !0), !0) : c.run(), U.pause = c.pause.bind(c), U.resume = c.resume.bind(c), U.stop = U, U;
}
function ht(e, t = 1 / 0, s) {
  if (t <= 0 || !ae(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ _e(e))
    ht(e.value, t, s);
  else if (q(e))
    for (let n = 0; n < e.length; n++)
      ht(e[n], t, s);
  else if (vo(e) || zt(e))
    e.forEach((n) => {
      ht(n, t, s);
    });
  else if (bo(e)) {
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
    return i && yo(i) && i.catch((o) => {
      un(o, t, s);
    }), i;
  }
  if (q(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(ze(e[o], t, s, n));
    return i;
  }
}
function un(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || fe;
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
    if (o) {
      ot(), As(o, null, 10, [
        e,
        a,
        f
      ]), rt();
      return;
    }
  }
  El(e, s, i, n, r);
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
const Wo = /* @__PURE__ */ Promise.resolve();
let Ks = null;
function Ne(e) {
  const t = Ks || Wo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Al(e) {
  let t = et + 1, s = Re.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Re[n], o = ws(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function ci(e) {
  if (!(e.flags & 1)) {
    const t = ws(e), s = Re[Re.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ws(s) ? Re.push(e) : Re.splice(Al(t), 0, e), e.flags |= 1, Ko();
  }
}
function Ko() {
  Ks || (Ks = Wo.then(Jo));
}
function kl(e) {
  q(e) ? Jt.push(...e) : wt && e.id === -1 ? wt.splice(jt + 1, 0, e) : e.flags & 1 || (Jt.push(e), e.flags |= 1), Ko();
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
function zo(e) {
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
function Jo(e) {
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
    et = -1, Re.length = 0, zo(), Ks = null, (Re.length || Jt.length) && Jo();
  }
}
let We = null, Go = null;
function zs(e) {
  const t = We;
  return We = e, Go = e && e.type.__scopeId || null, t;
}
function qo(e, t = We, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && qs(-1);
    const o = zs(t);
    let r;
    try {
      r = e(...i);
    } finally {
      zs(o), n._d && qs(1);
    }
    return r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function _t(e, t) {
  if (We === null)
    return e;
  const s = mn(We), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, l, a = fe] = t[i];
    o && (Q(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ht(r), n.push({
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
function At(e, t, s, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    o && (l.oldValue = o[r].value);
    let a = l.dir[n];
    a && (ot(), ze(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), rt());
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
  return Yo(e, t, s);
}
function Yo(e, t, s = fe) {
  const { immediate: n, deep: i, flush: o, once: r } = s, l = Se({}, s), a = t && n || !t && o !== "post";
  let f;
  if (Ts) {
    if (o === "sync") {
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
  o === "post" ? l.scheduler = (v) => {
    ke(v, c && c.suspense);
  } : o !== "sync" && (p = !0, l.scheduler = (v, T) => {
    T ? v() : ci(v);
  }), l.augmentJob = (v) => {
    t && (v.flags |= 4), p && (v.flags |= 2, c && (v.id = c.uid, v.i = c));
  };
  const m = Il(e, t, l);
  return Ts && (f ? f.push(m) : a && m()), m;
}
function $l(e, t, s) {
  const n = this.proxy, i = ge(e) ? e.includes(".") ? Xo(n, e) : () => n[e] : e.bind(n, n);
  let o;
  Q(t) ? o = t : (o = t.handler, s = t);
  const r = ks(this), l = Yo(i, o.bind(n), s);
  return r(), l;
}
function Xo(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const bt = /* @__PURE__ */ new WeakMap(), Zo = /* @__PURE__ */ Symbol("_vte"), Qo = (e) => e.__isTeleport, Lt = (e) => e && (e.disabled || e.disabled === ""), Ol = (e) => e && (e.defer || e.defer === ""), Ci = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ti = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Vn = (e, t) => {
  const s = e && e.to;
  return ge(s) ? t ? t(s) : null : s;
}, Dl = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, i, o, r, l, a, f) {
    const {
      mc: c,
      pc: p,
      pbc: m,
      o: { insert: v, querySelector: T, createText: I, createComment: z, parentNode: U }
    } = f, _ = Lt(t.props);
    let { dynamicChildren: C } = t;
    const k = (R, N, b) => {
      R.shapeFlag & 16 && c(
        R.children,
        N,
        b,
        i,
        o,
        r,
        l,
        a
      );
    }, B = (R = t) => {
      const N = Lt(R.props), b = R.target = Vn(R.props, T), j = jn(b, R, I, v);
      b && (r !== "svg" && Ci(b) ? r = "svg" : r !== "mathml" && Ti(b) && (r = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(b), N || (k(R, b, j), os(R, !1)));
    }, ne = (R) => {
      const N = () => {
        if (bt.get(R) === N) {
          if (bt.delete(R), Lt(R.props)) {
            const b = U(R.el) || s;
            k(R, b, R.anchor), os(R, !0);
          }
          B(R);
        }
      };
      bt.set(R, N), ke(N, o);
    };
    if (e == null) {
      const R = t.el = I(""), N = t.anchor = I("");
      if (v(R, s, n), v(N, s, n), Ol(t.props) || o && o.pendingBranch) {
        ne(t);
        return;
      }
      _ && (k(t, s, N), os(t, !0)), B();
    } else {
      t.el = e.el;
      const R = t.anchor = e.anchor, N = bt.get(e);
      if (N) {
        N.flags |= 8, bt.delete(e), ne(t);
        return;
      }
      t.targetStart = e.targetStart;
      const b = t.target = e.target, j = t.targetAnchor = e.targetAnchor, Y = Lt(e.props), E = Y ? s : b, W = Y ? R : j;
      if (r === "svg" || Ci(b) ? r = "svg" : (r === "mathml" || Ti(b)) && (r = "mathml"), C ? (m(
        e.dynamicChildren,
        C,
        E,
        i,
        o,
        r,
        l
      ), hi(e, t, !0)) : a || p(
        e,
        t,
        E,
        W,
        i,
        o,
        r,
        l,
        !1
      ), _)
        Y ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : $s(
          t,
          s,
          R,
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
      os(t, _);
    }
  },
  remove(e, t, s, { um: n, o: { remove: i } }, o) {
    const {
      shapeFlag: r,
      children: l,
      anchor: a,
      targetStart: f,
      targetAnchor: c,
      target: p,
      props: m
    } = e, v = Lt(m), T = o || !v, I = bt.get(e);
    if (I && (I.flags |= 8, bt.delete(e)), p && (i(f), i(c)), o && i(a), !I && (v || p) && r & 16)
      for (let z = 0; z < l.length; z++) {
        const U = l[z];
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
function $s(e, t, s, { o: { insert: n }, m: i }, o = 2) {
  o === 0 && n(e.targetAnchor, t, s);
  const { el: r, anchor: l, shapeFlag: a, children: f, props: c } = e, p = o === 2;
  if (p && n(r, t, s), !bt.has(e) && (!p || Lt(c)) && a & 16)
    for (let m = 0; m < f.length; m++)
      i(
        f[m],
        t,
        s,
        2
      );
  p && n(l, t, s);
}
function Nl(e, t, s, n, i, o, {
  o: { nextSibling: r, parentNode: l, querySelector: a, insert: f, createText: c }
}, p) {
  function m(z, U) {
    let _ = U;
    for (; _; ) {
      if (_ && _.nodeType === 8) {
        if (_.data === "teleport start anchor")
          t.targetStart = _;
        else if (_.data === "teleport anchor") {
          t.targetAnchor = _, z._lpa = t.targetAnchor && r(t.targetAnchor);
          break;
        }
      }
      _ = r(_);
    }
  }
  function v(z, U) {
    U.anchor = p(
      r(z),
      U,
      l(z),
      s,
      n,
      i,
      o
    );
  }
  const T = t.target = Vn(
    t.props,
    a
  ), I = Lt(t.props);
  if (T) {
    const z = T._lpa || T.firstChild;
    t.shapeFlag & 16 && (I ? (v(e, t), m(T, z), t.targetAnchor || jn(
      T,
      t,
      c,
      f,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === T ? e : null
    )) : (t.anchor = r(e), m(T, z), t.targetAnchor || jn(T, t, c, f), p(
      z && r(z),
      t,
      T,
      s,
      n,
      i,
      o
    ))), os(t, I);
  } else I && t.shapeFlag & 16 && (v(e, t), t.targetStart = e, t.targetAnchor = r(e));
  return t.anchor && r(t.anchor);
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
  const o = t.targetStart = s(""), r = t.targetAnchor = s("");
  return o[Zo] = r, e && (n(o, e, i), n(r, e, i)), r;
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
const Ve = [Function, Array], er = {
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
}, tr = (e) => {
  const t = e.subTree;
  return t.component ? tr(t.component) : t;
}, Hl = {
  name: "BaseTransition",
  props: er,
  setup(e, { slots: t }) {
    const s = pi(), n = Ul();
    return () => {
      const i = t.default && ir(t.default(), !0), o = i && i.length ? sr(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? Ie() : void 0
      );
      if (!o)
        return;
      const r = /* @__PURE__ */ oe(e), { mode: l } = r;
      if (n.isLeaving)
        return En(o);
      const a = Ii(o);
      if (!a)
        return En(o);
      let f = Bn(
        a,
        r,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (p) => f = p
      );
      a.type !== Pe && Ss(a, f);
      let c = s.subTree && Ii(s.subTree);
      if (c && c.type !== Pe && !$t(c, a) && tr(s).type !== Pe) {
        let p = Bn(
          c,
          r,
          n,
          s
        );
        if (Ss(c, p), l === "out-in" && a.type !== Pe)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete p.afterLeave, c = void 0;
          }, En(o);
        l === "in-out" && a.type !== Pe ? p.delayLeave = (m, v, T) => {
          const I = nr(
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
      return o;
    };
  }
};
function sr(e) {
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
function nr(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function Bn(e, t, s, n, i) {
  const {
    appear: o,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: f,
    onAfterEnter: c,
    onEnterCancelled: p,
    onBeforeLeave: m,
    onLeave: v,
    onAfterLeave: T,
    onLeaveCancelled: I,
    onBeforeAppear: z,
    onAppear: U,
    onAfterAppear: _,
    onAppearCancelled: C
  } = t, k = String(e.key), B = nr(s, e), ne = (b, j) => {
    b && ze(
      b,
      n,
      9,
      j
    );
  }, R = (b, j) => {
    const Y = j[1];
    ne(b, j), q(b) ? b.every((E) => E.length <= 1) && Y() : b.length <= 1 && Y();
  }, N = {
    mode: r,
    persisted: l,
    beforeEnter(b) {
      let j = a;
      if (!s.isMounted)
        if (o)
          j = z || a;
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
        if (o)
          j = U || f, Y = _ || c, E = C || p;
        else
          return;
      let W = !1;
      b[ss] = (me) => {
        W || (W = !0, me ? ne(E, [b]) : ne(Y, [b]), N.delayedLeave && N.delayedLeave(), b[ss] = void 0);
      };
      const ee = b[ss].bind(null, !1);
      j ? R(j, [b, ee]) : ee();
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
      B[Y] = e, v ? R(v, [b, W]) : W();
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
    return Qo(e.type) && e.children ? sr(e.children) : e;
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
function ir(e, t = !1, s) {
  let n = [], i = 0;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    const l = s == null ? r.key : String(s) + String(r.key != null ? r.key : o);
    r.type === se ? (r.patchFlag & 128 && i++, n = n.concat(
      ir(r.children, t, l)
    )) : (t || r.type !== Pe) && n.push(l != null ? Ct(r, { key: l }) : r);
  }
  if (i > 1)
    for (let o = 0; o < n.length; o++)
      n[o].patchFlag = -2;
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
function or(e) {
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
      (I, z) => ds(
        I,
        t && (q(t) ? t[z] : t),
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
  const o = n.shapeFlag & 4 ? mn(n.component) : n.el, r = i ? null : o, { i: l, r: a } = e, f = t && t.r, c = l.refs === fe ? l.refs = {} : l.refs, p = l.setupState, m = /* @__PURE__ */ oe(p), v = p === fe ? mo : (I) => Ei(c, I) ? !1 : le(m, I), T = (I, z) => !(z && Ei(c, z));
  if (f != null && f !== a) {
    if (Ai(t), ge(f))
      c[f] = null, v(f) && (p[f] = null);
    else if (/* @__PURE__ */ _e(f)) {
      const I = t;
      T(f, I.k) && (f.value = null), I.k && (c[I.k] = null);
    }
  }
  if (Q(a)) {
    ot();
    try {
      As(a, l, 12, [r, c]);
    } finally {
      rt();
    }
  } else {
    const I = ge(a), z = /* @__PURE__ */ _e(a);
    if (I || z) {
      const U = () => {
        if (e.f) {
          const _ = I ? v(a) ? p[a] : c[a] : T() || !e.k ? a.value : c[e.k];
          if (i)
            q(_) && Qn(_, o);
          else if (q(_))
            _.includes(o) || _.push(o);
          else if (I)
            c[a] = [o], v(a) && (p[a] = c[a]);
          else {
            const C = [o];
            T(a, e.k) && (a.value = C), e.k && (c[e.k] = C);
          }
        } else I ? (c[a] = r, v(a) && (p[a] = r)) : z && (T(a, e.k) && (a.value = r), e.k && (c[e.k] = r));
      };
      if (r) {
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
rn().requestIdleCallback;
rn().cancelIdleCallback;
const hs = (e) => !!e.type.__asyncLoader, fn = (e) => e.type.__isKeepAlive;
function jl(e, t) {
  rr(e, "a", t);
}
function Bl(e, t) {
  rr(e, "da", t);
}
function rr(e, t, s = Le) {
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
  lr(() => {
    Qn(n[t], i);
  }, s);
}
function dn(e, t, s = Le, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), o = t.__weh || (t.__weh = (...r) => {
      ot();
      const l = ks(s), a = ze(t, s, e, r);
      return l(), rt(), a;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const vt = (e) => (t, s = Le) => {
  (!Ts || e === "sp") && dn(e, (...n) => t(...n), s);
}, Kl = vt("bm"), hn = vt("m"), zl = vt(
  "bu"
), Jl = vt("u"), ui = vt(
  "bum"
), lr = vt("um"), Gl = vt(
  "sp"
), ql = vt("rtg"), Yl = vt("rtc");
function Xl(e, t = Le) {
  dn("ec", e, t);
}
const Zl = /* @__PURE__ */ Symbol.for("v-ndc");
function Be(e, t, s, n) {
  let i;
  const o = s, r = q(e);
  if (r || ge(e)) {
    const l = r && /* @__PURE__ */ pt(e);
    let a = !1, f = !1;
    l && (a = !/* @__PURE__ */ He(e), f = /* @__PURE__ */ mt(e), e = ln(e)), i = new Array(e.length);
    for (let c = 0, p = e.length; c < p; c++)
      i[c] = t(
        a ? f ? Yt(qe(e[c])) : qe(e[c]) : e[c],
        c,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (ae(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, f = l.length; a < f; a++) {
        const c = l[a];
        i[a] = t(e[c], c, a, o);
      }
    }
  else
    i = [];
  return i;
}
const Wn = (e) => e ? Ir(e) ? mn(e) : Wn(e.parent) : null, ps = (
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
    $options: (e) => cr(e),
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
    const { ctx: s, setupState: n, data: i, props: o, accessCache: r, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const m = r[t];
      if (m !== void 0)
        switch (m) {
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
        if (An(n, t))
          return r[t] = 1, n[t];
        if (i !== fe && le(i, t))
          return r[t] = 2, i[t];
        if (le(o, t))
          return r[t] = 3, o[t];
        if (s !== fe && le(s, t))
          return r[t] = 4, s[t];
        Kn && (r[t] = 0);
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
      return r[t] = 4, s[t];
    if (
      // global properties
      p = a.config.globalProperties, le(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: o } = e;
    return An(i, t) ? (i[t] = s, !0) : n !== fe && le(n, t) ? (n[t] = s, !0) : le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: o, type: r }
  }, l) {
    let a;
    return !!(s[l] || e !== fe && l[0] !== "$" && le(e, l) || An(t, l) || le(o, l) || le(n, l) || le(ps, l) || le(i.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
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
  const t = cr(e), s = e.proxy, n = e.ctx;
  Kn = !1, t.beforeCreate && Mi(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: r,
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
    deactivated: z,
    beforeDestroy: U,
    beforeUnmount: _,
    destroyed: C,
    unmounted: k,
    render: B,
    renderTracked: ne,
    renderTriggered: R,
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
  if (f && ta(f, n, null), r)
    for (const H in r) {
      const G = r[H];
      Q(G) && (n[H] = G.bind(s));
    }
  if (i) {
    const H = i.call(s, s);
    ae(H) && (e.data = /* @__PURE__ */ an(H));
  }
  if (Kn = !0, o)
    for (const H in o) {
      const G = o[H], be = Q(G) ? G.bind(s, s) : Q(G.get) ? G.get.bind(s, s) : it, Ce = !Q(G) && Q(G.set) ? G.set.bind(s) : it, ye = $e({
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
      ar(l[H], n, s, H);
  if (a) {
    const H = Q(a) ? a.call(s) : a;
    Reflect.ownKeys(H).forEach((G) => {
      Ml(G, H[G]);
    });
  }
  c && Mi(c, e, "c");
  function re(H, G) {
    q(G) ? G.forEach((be) => H(be.bind(s))) : G && H(G.bind(s));
  }
  if (re(Kl, p), re(hn, m), re(zl, v), re(Jl, T), re(jl, I), re(Bl, z), re(Xl, N), re(Yl, ne), re(ql, R), re(ui, _), re(lr, k), re(Gl, b), q(j))
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
  B && e.render === it && (e.render = B), Y != null && (e.inheritAttrs = Y), E && (e.components = E), W && (e.directives = W), b && or(e);
}
function ta(e, t, s = it) {
  q(e) && (e = zn(e));
  for (const n in e) {
    const i = e[n];
    let o;
    ae(i) ? "default" in i ? o = fs(
      i.from || n,
      i.default,
      !0
    ) : o = fs(i.from || n) : o = fs(i), /* @__PURE__ */ _e(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (r) => o.value = r
    }) : t[n] = o;
  }
}
function Mi(e, t, s) {
  ze(
    q(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function ar(e, t, s, n) {
  let i = n.includes(".") ? Xo(s, n) : () => s[n];
  if (ge(e)) {
    const o = t[e];
    Q(o) && Fe(i, o);
  } else if (Q(e))
    Fe(i, e.bind(s));
  else if (ae(e))
    if (q(e))
      e.forEach((o) => ar(o, t, s, n));
    else {
      const o = Q(e.handler) ? e.handler.bind(s) : t[e.handler];
      Q(o) && Fe(i, o, e);
    }
}
function cr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = o.get(t);
  let a;
  return l ? a = l : !i.length && !s && !n ? a = t : (a = {}, i.length && i.forEach(
    (f) => Gs(a, f, r, !0)
  ), Gs(a, t, r)), ae(t) && o.set(t, a), a;
}
function Gs(e, t, s, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Gs(e, o, s, !0), i && i.forEach(
    (r) => Gs(e, r, s, !0)
  );
  for (const r in t)
    if (!(n && r === "expose")) {
      const l = sa[r] || s && s[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const sa = {
  data: Ri,
  props: Pi,
  emits: Pi,
  // objects
  methods: rs,
  computed: rs,
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
  components: rs,
  directives: rs,
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
  return rs(zn(e), zn(t));
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
function rs(e, t) {
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
function ur() {
  return {
    app: null,
    config: {
      isNativeTag: mo,
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
let oa = 0;
function ra(e, t) {
  return function(n, i = null) {
    Q(n) || (n = Se({}, n)), i != null && !ae(i) && (i = null);
    const o = ur(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = o.app = {
      _uid: oa++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Ua,
      get config() {
        return o.config;
      },
      set config(c) {
      },
      use(c, ...p) {
        return r.has(c) || (c && Q(c.install) ? (r.add(c), c.install(f, ...p)) : Q(c) && (r.add(c), c(f, ...p))), f;
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), f;
      },
      component(c, p) {
        return p ? (o.components[c] = p, f) : o.components[c];
      },
      directive(c, p) {
        return p ? (o.directives[c] = p, f) : o.directives[c];
      },
      mount(c, p, m) {
        if (!a) {
          const v = f._ceVNode || te(n, i);
          return v.appContext = o, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(v, c, m), a = !0, f._container = c, c.__vue_app__ = f, mn(v.component);
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
        return o.provides[c] = p, f;
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
  const o = t.startsWith("update:"), r = o && la(n, t.slice(7));
  r && (r.trim && (i = s.map((c) => ge(c) ? c.trim() : c)), r.number && (i = s.map(ei)));
  let l, a = n[l = wn(t)] || // also try camelCase event handler (#2249)
  n[l = wn(Je(t))];
  !a && o && (a = n[l = wn(Tt(t))]), a && ze(
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
function fr(e, t, s = !1) {
  const n = s ? ca : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {}, l = !1;
  if (!Q(e)) {
    const a = (f) => {
      const c = fr(f, t, !0);
      c && (l = !0, Se(r, c));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !o && !l ? (ae(e) && n.set(e, null), null) : (q(o) ? o.forEach((a) => r[a] = null) : Se(r, o), ae(e) && n.set(e, r), r);
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
    propsOptions: [o],
    slots: r,
    attrs: l,
    emit: a,
    render: f,
    renderCache: c,
    props: p,
    data: m,
    setupState: v,
    ctx: T,
    inheritAttrs: I
  } = e, z = zs(e);
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
          { attrs: l, slots: r, emit: a }
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
    k.length && B & 7 && (o && k.some(sn) && (_ = fa(
      _,
      o
    )), C = Ct(C, _, !1, !0));
  }
  return s.dirs && (C = Ct(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(s.dirs) : s.dirs), s.transition && Ss(C, s.transition), U = C, zs(z), U;
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
  const { props: n, children: i, component: o } = e, { props: r, children: l, patchFlag: a } = t, f = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? $i(n, r, f) : !!r;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let p = 0; p < c.length; p++) {
        const m = c[p];
        if (dr(r, n, m) && !pn(f, m))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === r ? !1 : n ? r ? $i(n, r, f) : !0 : !!r;
  return !1;
}
function $i(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (dr(t, e, o) && !pn(s, o))
      return !0;
  }
  return !1;
}
function dr(e, t, s) {
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
const hr = {}, pr = () => Object.create(hr), gr = (e) => Object.getPrototypeOf(e) === hr;
function pa(e, t, s, n = !1) {
  const i = {}, o = pr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), mr(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ ml(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function ga(e, t, s, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ oe(i), [a] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const c = e.vnode.dynamicProps;
      for (let p = 0; p < c.length; p++) {
        let m = c[p];
        if (pn(e.emitsOptions, m))
          continue;
        const v = t[m];
        if (a)
          if (le(o, m))
            v !== o[m] && (o[m] = v, f = !0);
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
          v !== o[m] && (o[m] = v, f = !0);
      }
    }
  } else {
    mr(e, t, i, o) && (f = !0);
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
    if (o !== l)
      for (const p in o)
        (!t || !le(t, p)) && (delete o[p], f = !0);
  }
  f && dt(e.attrs, "set", "");
}
function mr(e, t, s, n) {
  const [i, o] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (as(a))
        continue;
      const f = t[a];
      let c;
      i && le(i, c = Je(a)) ? !o || !o.includes(c) ? s[c] = f : (l || (l = {}))[c] = f : pn(e.emitsOptions, a) || (!(a in n) || f !== n[a]) && (n[a] = f, r = !0);
    }
  if (o) {
    const a = /* @__PURE__ */ oe(s), f = l || fe;
    for (let c = 0; c < o.length; c++) {
      const p = o[c];
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
  return r;
}
function Jn(e, t, s, n, i, o) {
  const r = e[s];
  if (r != null) {
    const l = le(r, "default");
    if (l && n === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && Q(a)) {
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
    r[
      0
      /* shouldCast */
    ] && (o && !l ? n = !1 : r[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Tt(s)) && (n = !0));
  }
  return n;
}
const ma = /* @__PURE__ */ new WeakMap();
function vr(e, t, s = !1) {
  const n = s ? ma : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, l = [];
  let a = !1;
  if (!Q(e)) {
    const c = (p) => {
      a = !0;
      const [m, v] = vr(p, t, !0);
      Se(r, m), v && l.push(...v);
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !a)
    return ae(e) && n.set(e, Kt), Kt;
  if (q(o))
    for (let c = 0; c < o.length; c++) {
      const p = Je(o[c]);
      Oi(p) && (r[p] = fe);
    }
  else if (o)
    for (const c in o) {
      const p = Je(c);
      if (Oi(p)) {
        const m = o[c], v = r[p] = q(m) || Q(m) ? { type: m } : Se({}, m), T = v.type;
        let I = !1, z = !0;
        if (q(T))
          for (let U = 0; U < T.length; ++U) {
            const _ = T[U], C = Q(_) && _.name;
            if (C === "Boolean") {
              I = !0;
              break;
            } else C === "String" && (z = !1);
          }
        else
          I = Q(T) && T.name === "Boolean";
        v[
          0
          /* shouldCast */
        ] = I, v[
          1
          /* shouldCastTrue */
        ] = z, (I || le(v, "default")) && l.push(p);
      }
    }
  const f = [r, l];
  return ae(e) && n.set(e, f), f;
}
function Oi(e) {
  return e[0] !== "$" && !as(e);
}
const fi = (e) => e === "_" || e === "_ctx" || e === "$stable", di = (e) => q(e) ? e.map(st) : [st(e)], va = (e, t, s) => {
  if (t._n)
    return t;
  const n = qo((...i) => di(t(...i)), s);
  return n._c = !1, n;
}, yr = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (fi(i)) continue;
    const o = e[i];
    if (Q(o))
      t[i] = va(i, o, n);
    else if (o != null) {
      const r = di(o);
      t[i] = () => r;
    }
  }
}, _r = (e, t) => {
  const s = di(t);
  e.slots.default = () => s;
}, br = (e, t, s) => {
  for (const n in t)
    (s || !fi(n)) && (e[n] = t[n]);
}, ya = (e, t, s) => {
  const n = e.slots = pr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (br(n, t, s), s && wo(n, "_", i, !0)) : yr(t, n);
  } else t && _r(e, t);
}, _a = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let o = !0, r = fe;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? o = !1 : br(i, t, s) : (o = !t.$stable, yr(t, i)), r = t;
  } else t && (_r(e, t), r = { default: 1 });
  if (o)
    for (const l in i)
      !fi(l) && r[l] == null && delete i[l];
}, ke = Ca;
function ba(e) {
  return xa(e);
}
function xa(e, t) {
  const s = rn();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: l,
    createComment: a,
    setText: f,
    setElementText: c,
    parentNode: p,
    nextSibling: m,
    setScopeId: v = it,
    insertStaticContent: T
  } = e, I = (u, h, g, A = null, S = null, x = null, F = void 0, D = null, P = !!h.dynamicChildren) => {
    if (u === h)
      return;
    u && !$t(u, h) && (A = Ms(u), Oe(u, S, x, !0), u = null), h.patchFlag === -2 && (P = !1, h.dynamicChildren = null);
    const { type: w, ref: X, shapeFlag: V } = h;
    switch (w) {
      case gn:
        z(u, h, g, A);
        break;
      case Pe:
        U(u, h, g, A);
        break;
      case Hs:
        u == null && _(h, g, A, F);
        break;
      case se:
        E(
          u,
          h,
          g,
          A,
          S,
          x,
          F,
          D,
          P
        );
        break;
      default:
        V & 1 ? B(
          u,
          h,
          g,
          A,
          S,
          x,
          F,
          D,
          P
        ) : V & 6 ? W(
          u,
          h,
          g,
          A,
          S,
          x,
          F,
          D,
          P
        ) : (V & 64 || V & 128) && w.process(
          u,
          h,
          g,
          A,
          S,
          x,
          F,
          D,
          P,
          Qt
        );
    }
    X != null && S ? ds(X, u && u.ref, x, h || u, !h) : X == null && u && u.ref != null && ds(u.ref, null, x, u, !0);
  }, z = (u, h, g, A) => {
    if (u == null)
      n(
        h.el = l(h.children),
        g,
        A
      );
    else {
      const S = h.el = u.el;
      h.children !== u.children && f(S, h.children);
    }
  }, U = (u, h, g, A) => {
    u == null ? n(
      h.el = a(h.children || ""),
      g,
      A
    ) : h.el = u.el;
  }, _ = (u, h, g, A) => {
    [u.el, u.anchor] = T(
      u.children,
      h,
      g,
      A,
      u.el,
      u.anchor
    );
  }, C = ({ el: u, anchor: h }, g, A) => {
    let S;
    for (; u && u !== h; )
      S = m(u), n(u, g, A), u = S;
    n(h, g, A);
  }, k = ({ el: u, anchor: h }) => {
    let g;
    for (; u && u !== h; )
      g = m(u), i(u), u = g;
    i(h);
  }, B = (u, h, g, A, S, x, F, D, P) => {
    if (h.type === "svg" ? F = "svg" : h.type === "math" && (F = "mathml"), u == null)
      ne(
        h,
        g,
        A,
        S,
        x,
        F,
        D,
        P
      );
    else {
      const w = u.el && u.el._isVueCE ? u.el : null;
      try {
        w && w._beginPatch(), b(
          u,
          h,
          S,
          x,
          F,
          D,
          P
        );
      } finally {
        w && w._endPatch();
      }
    }
  }, ne = (u, h, g, A, S, x, F, D) => {
    let P, w;
    const { props: X, shapeFlag: V, transition: J, dirs: Z } = u;
    if (P = u.el = r(
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
      D
    ), Z && At(u, null, A, "created"), R(P, u, u.scopeId, F, A), X) {
      for (const ue in X)
        ue !== "value" && !as(ue) && o(P, ue, null, X[ue], x, A);
      "value" in X && o(P, "value", null, X.value, x), (w = X.onVnodeBeforeMount) && Qe(w, A, u);
    }
    Z && At(u, null, A, "beforeMount");
    const ie = wa(S, J);
    ie && J.beforeEnter(P), n(P, h, g), ((w = X && X.onVnodeMounted) || ie || Z) && ke(() => {
      try {
        w && Qe(w, A, u), ie && J.enter(P), Z && At(u, null, A, "mounted");
      } finally {
      }
    }, S);
  }, R = (u, h, g, A, S) => {
    if (g && v(u, g), A)
      for (let x = 0; x < A.length; x++)
        v(u, A[x]);
    if (S) {
      let x = S.subTree;
      if (h === x || Sr(x.type) && (x.ssContent === h || x.ssFallback === h)) {
        const F = S.vnode;
        R(
          u,
          F,
          F.scopeId,
          F.slotScopeIds,
          S.parent
        );
      }
    }
  }, N = (u, h, g, A, S, x, F, D, P = 0) => {
    for (let w = P; w < u.length; w++) {
      const X = u[w] = D ? ft(u[w]) : st(u[w]);
      I(
        null,
        X,
        h,
        g,
        A,
        S,
        x,
        F,
        D
      );
    }
  }, b = (u, h, g, A, S, x, F) => {
    const D = h.el = u.el;
    let { patchFlag: P, dynamicChildren: w, dirs: X } = h;
    P |= u.patchFlag & 16;
    const V = u.props || fe, J = h.props || fe;
    let Z;
    if (g && kt(g, !1), (Z = J.onVnodeBeforeUpdate) && Qe(Z, g, h, u), X && At(h, u, g, "beforeUpdate"), g && kt(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    w && (!u.dynamicChildren || u.dynamicChildren.length !== w.length) && (P = 0, F = !1, w = null), (V.innerHTML && J.innerHTML == null || V.textContent && J.textContent == null) && c(D, ""), w ? j(
      u.dynamicChildren,
      w,
      D,
      g,
      A,
      kn(h, S),
      x
    ) : F || G(
      u,
      h,
      D,
      null,
      g,
      A,
      kn(h, S),
      x,
      !1
    ), P > 0) {
      if (P & 16)
        Y(D, V, J, g, S);
      else if (P & 2 && V.class !== J.class && o(D, "class", null, J.class, S), P & 4 && o(D, "style", V.style, J.style, S), P & 8) {
        const ie = h.dynamicProps;
        for (let ue = 0; ue < ie.length; ue++) {
          const ce = ie[ue], xe = V[ce], Te = J[ce];
          (Te !== xe || ce === "value") && o(D, ce, xe, Te, S, g);
        }
      }
      P & 1 && u.children !== h.children && c(D, h.children);
    } else !F && w == null && Y(D, V, J, g, S);
    ((Z = J.onVnodeUpdated) || X) && ke(() => {
      Z && Qe(Z, g, h, u), X && At(h, u, g, "updated");
    }, A);
  }, j = (u, h, g, A, S, x, F) => {
    for (let D = 0; D < h.length; D++) {
      const P = u[D], w = h[D], X = (
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
  }, Y = (u, h, g, A, S) => {
    if (h !== g) {
      if (h !== fe)
        for (const x in h)
          !as(x) && !(x in g) && o(
            u,
            x,
            h[x],
            null,
            S,
            A
          );
      for (const x in g) {
        if (as(x)) continue;
        const F = g[x], D = h[x];
        F !== D && x !== "value" && o(u, x, D, F, S, A);
      }
      "value" in g && o(u, "value", h.value, g.value, S);
    }
  }, E = (u, h, g, A, S, x, F, D, P) => {
    const w = h.el = u ? u.el : l(""), X = h.anchor = u ? u.anchor : l("");
    let { patchFlag: V, dynamicChildren: J, slotScopeIds: Z } = h;
    Z && (D = D ? D.concat(Z) : Z), u == null ? (n(w, g, A), n(X, g, A), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      g,
      X,
      S,
      x,
      F,
      D,
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
      D
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || S && h === S.subTree) && hi(
      u,
      h,
      !0
      /* shallow */
    )) : G(
      u,
      h,
      g,
      X,
      S,
      x,
      F,
      D,
      P
    );
  }, W = (u, h, g, A, S, x, F, D, P) => {
    h.slotScopeIds = D, u == null ? h.shapeFlag & 512 ? S.ctx.activate(
      h,
      g,
      A,
      F,
      P
    ) : ee(
      h,
      g,
      A,
      S,
      x,
      F,
      P
    ) : me(u, h, P);
  }, ee = (u, h, g, A, S, x, F) => {
    const D = u.component = Pa(
      u,
      A,
      S
    );
    if (fn(u) && (D.ctx.renderer = Qt), La(D, !1, F), D.asyncDep) {
      if (S && S.registerDep(D, re, F), !u.el) {
        const P = D.subTree = te(Pe);
        U(null, P, h, g), u.placeholder = P.el;
      }
    } else
      re(
        D,
        u,
        h,
        g,
        S,
        x,
        F
      );
  }, me = (u, h, g) => {
    const A = h.component = u.component;
    if (da(u, h, g))
      if (A.asyncDep && !A.asyncResolved) {
        H(A, h, g);
        return;
      } else
        A.next = h, A.update();
    else
      h.el = u.el, A.vnode = h;
  }, re = (u, h, g, A, S, x, F) => {
    const D = () => {
      if (u.isMounted) {
        let { next: V, bu: J, u: Z, parent: ie, vnode: ue } = u;
        {
          const Xe = xr(u);
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
        const Te = Li(u), Ye = u.subTree;
        u.subTree = Te, I(
          Ye,
          Te,
          // parent may have changed if it's in a teleport
          p(Ye.el),
          // anchor may have changed if it's in a fragment
          Ms(Ye),
          u,
          S,
          x
        ), V.el = Te.el, ce === null && ha(u, Te.el), Z && ke(Z, S), (xe = V.props && V.props.onVnodeUpdated) && ke(
          () => Qe(xe, ie, V, ue),
          S
        );
      } else {
        let V;
        const { el: J, props: Z } = h, { bm: ie, m: ue, parent: ce, root: xe, type: Te } = u, Ye = hs(h);
        kt(u, !1), ie && Us(ie), !Ye && (V = Z && Z.onVnodeBeforeMount) && Qe(V, ce, h), kt(u, !0);
        {
          xe.ce && xe.ce._hasShadowRoot() && xe.ce._injectChildStyle(
            Te,
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
          ), h.el = Xe.el;
        }
        if (ue && ke(ue, S), !Ye && (V = Z && Z.onVnodeMounted)) {
          const Xe = h;
          ke(
            () => Qe(V, ce, Xe),
            S
          );
        }
        (h.shapeFlag & 256 || ce && hs(ce.vnode) && ce.vnode.shapeFlag & 256) && u.a && ke(u.a, S), u.isMounted = !0, h = g = A = null;
      }
    };
    u.scope.on();
    const P = u.effect = new ko(D);
    u.scope.off();
    const w = u.update = P.run.bind(P), X = u.job = P.runIfDirty.bind(P);
    X.i = u, X.id = u.uid, P.scheduler = () => ci(X), kt(u, !0), w();
  }, H = (u, h, g) => {
    h.component = u;
    const A = u.vnode.props;
    u.vnode = h, u.next = null, ga(u, h.props, A, g), _a(u, h.children, g), ot(), Si(u), rt();
  }, G = (u, h, g, A, S, x, F, D, P = !1) => {
    const w = u && u.children, X = u ? u.shapeFlag : 0, V = h.children, { patchFlag: J, shapeFlag: Z } = h;
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
          D,
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
          D,
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
      D,
      P
    ) : Zt(w, S, x, !0) : (X & 8 && c(g, ""), Z & 16 && N(
      V,
      g,
      A,
      S,
      x,
      F,
      D,
      P
    ));
  }, be = (u, h, g, A, S, x, F, D, P) => {
    u = u || Kt, h = h || Kt;
    const w = u.length, X = h.length, V = Math.min(w, X);
    let J;
    for (J = 0; J < V; J++) {
      const Z = h[J] = P ? ft(h[J]) : st(h[J]);
      I(
        u[J],
        Z,
        g,
        null,
        S,
        x,
        F,
        D,
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
      h,
      g,
      A,
      S,
      x,
      F,
      D,
      P,
      V
    );
  }, Ce = (u, h, g, A, S, x, F, D, P) => {
    let w = 0;
    const X = h.length;
    let V = u.length - 1, J = X - 1;
    for (; w <= V && w <= J; ) {
      const Z = u[w], ie = h[w] = P ? ft(h[w]) : st(h[w]);
      if ($t(Z, ie))
        I(
          Z,
          ie,
          g,
          null,
          S,
          x,
          F,
          D,
          P
        );
      else
        break;
      w++;
    }
    for (; w <= V && w <= J; ) {
      const Z = u[V], ie = h[J] = P ? ft(h[J]) : st(h[J]);
      if ($t(Z, ie))
        I(
          Z,
          ie,
          g,
          null,
          S,
          x,
          F,
          D,
          P
        );
      else
        break;
      V--, J--;
    }
    if (w > V) {
      if (w <= J) {
        const Z = J + 1, ie = Z < X ? h[Z].el : A;
        for (; w <= J; )
          I(
            null,
            h[w] = P ? ft(h[w]) : st(h[w]),
            g,
            ie,
            S,
            x,
            F,
            D,
            P
          ), w++;
      }
    } else if (w > J)
      for (; w <= V; )
        Oe(u[w], S, x, !0), w++;
    else {
      const Z = w, ie = w, ue = /* @__PURE__ */ new Map();
      for (w = ie; w <= J; w++) {
        const De = h[w] = P ? ft(h[w]) : st(h[w]);
        De.key != null && ue.set(De.key, w);
      }
      let ce, xe = 0;
      const Te = J - ie + 1;
      let Ye = !1, Xe = 0;
      const es = new Array(Te);
      for (w = 0; w < Te; w++) es[w] = 0;
      for (w = Z; w <= V; w++) {
        const De = u[w];
        if (xe >= Te) {
          Oe(De, S, x, !0);
          continue;
        }
        let Ze;
        if (De.key != null)
          Ze = ue.get(De.key);
        else
          for (ce = ie; ce <= J; ce++)
            if (es[ce - ie] === 0 && $t(De, h[ce])) {
              Ze = ce;
              break;
            }
        Ze === void 0 ? Oe(De, S, x, !0) : (es[Ze - ie] = w + 1, Ze >= Xe ? Xe = Ze : Ye = !0, I(
          De,
          h[Ze],
          g,
          null,
          S,
          x,
          F,
          D,
          P
        ), xe++);
      }
      const mi = Ye ? Sa(es) : Kt;
      for (ce = mi.length - 1, w = Te - 1; w >= 0; w--) {
        const De = ie + w, Ze = h[De], vi = h[De + 1], yi = De + 1 < X ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          vi.el || wr(vi)
        ) : A;
        es[w] === 0 ? I(
          null,
          Ze,
          g,
          yi,
          S,
          x,
          F,
          D,
          P
        ) : Ye && (ce < 0 || w !== mi[ce] ? ye(Ze, g, yi, 2) : ce--);
      }
    }
  }, ye = (u, h, g, A, S = null) => {
    const { el: x, type: F, transition: D, children: P, shapeFlag: w } = u;
    if (w & 6) {
      ye(u.component.subTree, h, g, A);
      return;
    }
    if (w & 128) {
      u.suspense.move(h, g, A);
      return;
    }
    if (w & 64) {
      F.move(u, h, g, Qt);
      return;
    }
    if (F === se) {
      n(x, h, g);
      for (let V = 0; V < P.length; V++)
        ye(P[V], h, g, A);
      n(u.anchor, h, g);
      return;
    }
    if (F === Hs) {
      C(u, h, g);
      return;
    }
    if (A !== 2 && w & 1 && D)
      if (A === 0)
        D.persisted && !x[je] ? n(x, h, g) : (D.beforeEnter(x), n(x, h, g), ke(() => D.enter(x), S));
      else {
        const { leave: V, delayLeave: J, afterLeave: Z } = D, ie = () => {
          u.ctx.isUnmounted ? i(x) : n(x, h, g);
        }, ue = () => {
          const ce = x._isLeaving || !!x[je];
          x._isLeaving && x[je](
            !0
            /* cancelled */
          ), D.persisted && !ce ? ie() : V(x, () => {
            ie(), Z && Z();
          });
        };
        J ? J(x, ie, ue) : ue();
      }
    else
      n(x, h, g);
  }, Oe = (u, h, g, A = !1, S = !1) => {
    const {
      type: x,
      props: F,
      ref: D,
      children: P,
      dynamicChildren: w,
      shapeFlag: X,
      patchFlag: V,
      dirs: J,
      cacheIndex: Z,
      memo: ie
    } = u;
    if (V === -2 && (S = !1), D != null && (ot(), ds(D, null, g, u, !0), rt()), Z != null && (h.renderCache[Z] = void 0), X & 256) {
      h.ctx.deactivate(u);
      return;
    }
    const ue = X & 1 && J, ce = !hs(u);
    let xe;
    if (ce && (xe = F && F.onVnodeBeforeUnmount) && Qe(xe, h, u), X & 6)
      bn(u.component, g, A);
    else {
      if (X & 128) {
        u.suspense.unmount(g, A);
        return;
      }
      ue && At(u, null, h, "beforeUnmount"), X & 64 ? u.type.remove(
        u,
        h,
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
        h,
        g,
        !1,
        !0
      ) : (x === se && V & 384 || !S && X & 16) && Zt(P, h, g), A && Ft(u);
    }
    const Te = ie != null && Z == null;
    (ce && (xe = F && F.onVnodeUnmounted) || ue || Te) && ke(() => {
      xe && Qe(xe, h, u), ue && At(u, null, h, "unmounted"), Te && (u.el = null);
    }, g);
  }, Ft = (u) => {
    const { type: h, el: g, anchor: A, transition: S } = u;
    if (h === se) {
      _n(g, A);
      return;
    }
    if (h === Hs) {
      k(u);
      return;
    }
    const x = () => {
      i(g), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (u.shapeFlag & 1 && S && !S.persisted) {
      const { leave: F, delayLeave: D } = S, P = () => F(g, x);
      D ? D(u.el, x, P) : P();
    } else
      x();
  }, _n = (u, h) => {
    let g;
    for (; u !== h; )
      g = m(u), i(u), u = g;
    i(h);
  }, bn = (u, h, g) => {
    const { bum: A, scope: S, job: x, subTree: F, um: D, m: P, a: w } = u;
    Di(P), Di(w), A && Us(A), S.stop(), x && (x.flags |= 8, Oe(F, u, h, g)), D && ke(D, h), ke(() => {
      u.isUnmounted = !0;
    }, h);
  }, Zt = (u, h, g, A = !1, S = !1, x = 0) => {
    for (let F = x; F < u.length; F++)
      Oe(u[F], h, g, A, S);
  }, Ms = (u) => {
    if (u.shapeFlag & 6)
      return Ms(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const h = m(u.anchor || u.el), g = h && h[Zo];
    return g ? m(g) : h;
  };
  let xn = !1;
  const gi = (u, h, g) => {
    let A;
    u == null ? h._vnode && (Oe(h._vnode, null, null, !0), A = h._vnode.component) : I(
      h._vnode || null,
      u,
      h,
      null,
      null,
      null,
      g
    ), h._vnode = u, xn || (xn = !0, Si(A), zo(), xn = !1);
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
    createApp: ra(gi)
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
    for (let o = 0; o < n.length; o++) {
      const r = n[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = ft(i[o]), l.el = r.el), !s && l.patchFlag !== -2 && hi(r, l)), l.type === gn && (l.patchFlag === -1 && (l = i[o] = ft(l)), l.el = r.el), l.type === Pe && !l.el && (l.el = r.el);
    }
}
function Sa(e) {
  const t = e.slice(), s = [0];
  let n, i, o, r, l;
  const a = e.length;
  for (n = 0; n < a; n++) {
    const f = e[n];
    if (f !== 0) {
      if (i = s[s.length - 1], e[i] < f) {
        t[n] = i, s.push(n);
        continue;
      }
      for (o = 0, r = s.length - 1; o < r; )
        l = o + r >> 1, e[s[l]] < f ? o = l + 1 : r = l;
      f < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), s[o] = n);
    }
  }
  for (o = s.length, r = s[o - 1]; o-- > 0; )
    s[o] = r, r = t[r];
  return s;
}
function xr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : xr(t);
}
function Di(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function wr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? wr(t.subTree) : null;
}
const Sr = (e) => e.__isSuspense;
function Ca(e, t) {
  t && t.pendingBranch ? q(e) ? t.effects.push(...e) : t.effects.push(e) : kl(e);
}
const se = /* @__PURE__ */ Symbol.for("v-fgt"), gn = /* @__PURE__ */ Symbol.for("v-txt"), Pe = /* @__PURE__ */ Symbol.for("v-cmt"), Hs = /* @__PURE__ */ Symbol.for("v-stc"), gs = [];
let Ue = null;
function M(e = !1) {
  gs.push(Ue = e ? null : []);
}
function Ta() {
  gs.pop(), Ue = gs[gs.length - 1] || null;
}
let Cs = 1;
function qs(e, t = !1) {
  Cs += e, e < 0 && Ue && t && (Ue.hasOnce = !0);
}
function Cr(e) {
  return e.dynamicChildren = Cs > 0 ? Ue || Kt : null, Ta(), Cs > 0 && Ue && Ue.push(e), e;
}
function O(e, t, s, n, i, o) {
  return Cr(
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
function gt(e, t, s, n, i) {
  return Cr(
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
const Tr = ({ key: e }) => e ?? null, Vs = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ge(e) || /* @__PURE__ */ _e(e) || Q(e) ? { i: We, r: e, k: t, f: !!s } : e : null);
function d(e, t = null, s = null, n = 0, i = null, o = e === se ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Tr(t),
    ref: t && Vs(t),
    scopeId: Go,
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
    ctx: We
  };
  return l ? (Xs(a, s), o & 128 && e.normalize(a)) : s && (a.shapeFlag |= ge(s) ? 8 : 16), Cs > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Ue && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ue.push(a), a;
}
const te = Ia;
function Ia(e, t = null, s = null, n = 0, i = null, o = !1) {
  if ((!e || e === Zl) && (e = Pe), Ys(e)) {
    const l = Ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Xs(l, s), Cs > 0 && !o && Ue && (l.shapeFlag & 6 ? Ue[Ue.indexOf(e)] = l : Ue.push(l)), l.patchFlag = -2, l;
  }
  if (Na(e) && (e = e.__vccOpts), t) {
    t = Ea(t);
    let { class: l, style: a } = t;
    l && !ge(l) && (t.class = pe(l)), ae(a) && (/* @__PURE__ */ cn(a) && !q(a) && (a = Se({}, a)), t.style = St(a));
  }
  const r = ge(e) ? 1 : Sr(e) ? 128 : Qo(e) ? 64 : ae(e) ? 4 : Q(e) ? 2 : 0;
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
function Ea(e) {
  return e ? /* @__PURE__ */ cn(e) || gr(e) ? Se({}, e) : e : null;
}
function Ct(e, t, s = !1, n = !1) {
  const { props: i, ref: o, patchFlag: r, children: l, transition: a } = e, f = t ? ka(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Tr(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && o ? q(o) ? o.concat(Vs(t)) : [o, Vs(t)] : Vs(t)
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
    patchFlag: t && e.type !== se ? r === -1 ? 16 : r | 16 : r,
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
function Ie(e = "", t = !1) {
  return t ? (M(), gt(Pe, null, e)) : te(Pe, null, e);
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
      !i && !gr(t) ? t._ctx = We : i === 3 && We && (We.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
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
        const o = t[i], r = n[i];
        r && o !== r && !(q(o) && o.includes(r)) ? t[i] = o ? [].concat(o, r) : r : r == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !sn(i) && (t[i] = r);
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
const Ma = ur();
let Ra = 0;
function Pa(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Ma, o = {
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
    scope: new Io(
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
    propsOptions: vr(n, i),
    emitsOptions: fr(n, i),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = aa.bind(null, o), e.ce && e.ce(o), o;
}
let Le = null;
const pi = () => Le || We;
let Zs, Gn;
{
  const e = rn(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
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
function Ir(e) {
  return e.vnode.shapeFlag & 4;
}
let Ts = !1;
function La(e, t = !1, s = !1) {
  t && Gn(t);
  const { props: n, children: i } = e.vnode, o = Ir(e);
  pa(e, n, o, t), ya(e, i, s || t);
  const r = o ? $a(e, t) : void 0;
  return t && Gn(!1), r;
}
function $a(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ql);
  const { setup: n } = s;
  if (n) {
    ot();
    const i = e.setupContext = n.length > 1 ? Da(e) : null, o = ks(e), r = As(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = yo(r);
    if (rt(), o(), (l || e.sp) && !hs(e) && or(e), l) {
      if (r.then(Ni, Ni), t)
        return r.then((a) => {
          Fi(e, a);
        }).catch((a) => {
          un(a, e, 0);
        });
      e.asyncDep = r;
    } else
      Fi(e, r);
  } else
    Er(e);
}
function Fi(e, t, s) {
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ae(t) && (e.setupState = Bo(t)), Er(e);
}
function Er(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || it);
  {
    const i = ks(e);
    ot();
    try {
      ea(e);
    } finally {
      rt(), i();
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
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Bo(ai(e.exposed)), {
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
const Ar = qn ? (e) => qn.createHTML(e) : (e) => e, Ha = "http://www.w3.org/2000/svg", Va = "http://www.w3.org/1998/Math/MathML", ct = typeof document < "u" ? document : null, Hi = ct && /* @__PURE__ */ ct.createElement("template"), ja = {
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
  insertStaticContent(e, t, s, n, i, o) {
    const r = s ? s.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), s), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Hi.innerHTML = Ar(
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
      r ? r.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, yt = "transition", ns = "animation", Is = /* @__PURE__ */ Symbol("_vtc"), kr = {
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
  er,
  kr
), Wa = (e) => (e.displayName = "Transition", e.props = Ba, e), Ka = /* @__PURE__ */ Wa(
  (e, { slots: t }) => Fa(Vl, za(e), t)
), Mt = (e, t = []) => {
  q(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, Vi = (e) => e ? q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function za(e) {
  const t = {};
  for (const E in e)
    E in kr || (t[E] = e[E]);
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
    appearActiveClass: f = r,
    appearToClass: c = l,
    leaveFromClass: p = `${s}-leave-from`,
    leaveActiveClass: m = `${s}-leave-active`,
    leaveToClass: v = `${s}-leave-to`
  } = e, T = Ja(i), I = T && T[0], z = T && T[1], {
    onBeforeEnter: U,
    onEnter: _,
    onEnterCancelled: C,
    onLeave: k,
    onLeaveCancelled: B,
    onBeforeAppear: ne = U,
    onAppear: R = _,
    onAppearCancelled: N = C
  } = t, b = (E, W, ee, me) => {
    E._enterCancelled = me, Rt(E, W ? c : l), Rt(E, W ? f : r), ee && ee();
  }, j = (E, W) => {
    E._isLeaving = !1, Rt(E, p), Rt(E, v), Rt(E, m), W && W();
  }, Y = (E) => (W, ee) => {
    const me = E ? R : _, re = () => b(W, E, ee);
    Mt(me, [W, re]), ji(() => {
      Rt(W, E ? a : o), at(W, E ? c : l), Vi(me) || Bi(W, n, I, re);
    });
  };
  return Se(t, {
    onBeforeEnter(E) {
      Mt(U, [E]), at(E, o), at(E, r);
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
        E._isLeaving && (Rt(E, p), at(E, v), Vi(k) || Bi(E, n, z, ee));
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
  return Br(e);
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
  const i = e._endId = ++Ga, o = () => {
    i === e._endId && n();
  };
  if (s != null)
    return setTimeout(o, s);
  const { type: r, timeout: l, propCount: a } = qa(e, t);
  if (!r)
    return n();
  const f = r + "end";
  let c = 0;
  const p = () => {
    e.removeEventListener(f, m), o();
  }, m = (v) => {
    v.target === e && ++c >= a && p();
  };
  setTimeout(() => {
    c < a && p();
  }, l + 1), e.addEventListener(f, m);
}
function qa(e, t) {
  const s = window.getComputedStyle(e), n = (T) => (s[T] || "").split(", "), i = n(`${yt}Delay`), o = n(`${yt}Duration`), r = Wi(i, o), l = n(`${ns}Delay`), a = n(`${ns}Duration`), f = Wi(l, a);
  let c = null, p = 0, m = 0;
  t === yt ? r > 0 && (c = yt, p = r, m = o.length) : t === ns ? f > 0 && (c = ns, p = f, m = a.length) : (p = Math.max(r, f), c = p > 0 ? r > f ? yt : ns : null, m = c ? c === yt ? o.length : a.length : 0);
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
const Qs = /* @__PURE__ */ Symbol("_vod"), Mr = /* @__PURE__ */ Symbol("_vsh"), Ds = {
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
  e.style.display = t ? e[Qs] : "none", e[Mr] = !t;
}
const Xa = /* @__PURE__ */ Symbol(""), Za = /(?:^|;)\s*display\s*:/;
function Qa(e, t, s) {
  const n = e.style, i = ge(s);
  let o = !1;
  if (s && !i) {
    if (t)
      if (ge(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          s[l] == null && ls(n, l, "");
        }
      else
        for (const r in t)
          s[r] == null && ls(n, r, "");
    for (const r in s) {
      r === "display" && (o = !0);
      const l = s[r];
      l != null ? tc(
        e,
        r,
        !ge(t) && t ? t[r] : void 0,
        l
      ) || ls(n, r, l) : ls(n, r, "");
    }
  } else if (i) {
    if (t !== s) {
      const r = n[Xa];
      r && (s += ";" + r), n.cssText = s, o = Za.test(s);
    }
  } else t && e.removeAttribute("style");
  Qs in e && (e[Qs] = o ? n.display : "", e[Mr] && (n.display = "none"));
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
  n = xo(n);
  for (let i = 0; i < Gi.length; i++) {
    const o = Gi[i] + n;
    if (o in e)
      return Rn[t] = o;
  }
  return t;
}
function tc(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ge(n) && s === n;
}
const qi = "http://www.w3.org/1999/xlink";
function Yi(e, t, s, n, i, o = qr(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(qi, t.slice(6, t.length)) : e.setAttributeNS(qi, t, s) : s == null || o && !So(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Ke(s) ? String(s) : s
  );
}
function Xi(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Ar(s) : s);
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
    l === "boolean" ? s = So(s) : s == null && l === "string" ? (s = "", r = !0) : l === "number" && (s = 0, r = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  r && e.removeAttribute(i || t);
}
function Bt(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function sc(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Zi = /* @__PURE__ */ Symbol("_vei");
function nc(e, t, s, n, i = null) {
  const o = e[Zi] || (e[Zi] = {}), r = o[t];
  if (n && r)
    r.value = n;
  else {
    const [l, a] = rc(t);
    if (n) {
      const f = o[t] = cc(
        n,
        i
      );
      Bt(e, l, f, a);
    } else r && (sc(e, l, r, a), o[t] = void 0);
  }
}
const ic = /(Once|Passive|Capture)$/, oc = /^on:?(?:Once|Passive|Capture)$/;
function rc(e) {
  let t, s;
  for (; (s = e.match(ic)) && !oc.test(e); )
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
      const o = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        o.call(n), n._stopped = !0;
      };
      const r = i.slice(), l = [n];
      for (let a = 0; a < r.length && !n._stopped; a++) {
        const f = r[a];
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uc = (e, t, s, n, i, o) => {
  const r = i === "svg";
  t === "class" ? Ya(e, n, r) : t === "style" ? Qa(e, s, n) : tn(t) ? sn(t) || nc(e, t, s, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fc(e, t, n, r)) ? (Xi(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Yi(e, t, n, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (dc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ge(n))) ? Xi(e, Je(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Yi(e, t, n, r));
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
const eo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return q(t) ? (s) => Us(t, s) : t;
};
function hc(e) {
  e.target.composing = !0;
}
function to(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ln = /* @__PURE__ */ Symbol("_assign");
function so(e, t, s) {
  return t && (e = e.trim()), s && (e = ei(e)), e;
}
const js = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[Ln] = eo(i);
    const o = n || i.props && i.props.type === "number";
    Bt(e, t ? "change" : "input", (r) => {
      r.target.composing || e[Ln](so(e.value, s, o));
    }), (s || o) && Bt(e, "change", () => {
      e.value = so(e.value, s, o);
    }), t || (Bt(e, "compositionstart", hc), Bt(e, "compositionend", to), Bt(e, "change", to));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: o } }, r) {
    if (e[Ln] = eo(r), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? ei(e.value) : e.value, a = t ?? "";
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
  return s[n] || (s[n] = (i, ...o) => {
    for (let r = 0; r < t.length; r++) {
      const l = gc[t[r]];
      if (l && l(i, t)) return;
    }
    return e(i, ...o);
  });
}, mc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Rr = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (i) => {
    if (!("key" in i))
      return;
    const o = Tt(i.key);
    if (t.some(
      (r) => r === o || mc[r] === o
    ))
      return e(i);
  });
}, vc = /* @__PURE__ */ Se({ patchProp: uc }, ja);
let no;
function yc() {
  return no || (no = ba(vc));
}
const Pr = (...e) => {
  const t = yc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = bc(n);
    if (!i) return;
    const o = t._component;
    !Q(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = s(i, !1, _c(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
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
let Lr;
const vn = (e) => Lr = e, $r = (
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
  const e = Eo(!0), t = e.run(() => /* @__PURE__ */ he({}));
  let s = [], n = [];
  const i = ai({
    install(o) {
      vn(i), i._a = o, o.provide($r, i), o.config.globalProperties.$pinia = i, n.forEach((r) => s.push(r)), n = [];
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
const Or = () => {
};
function io(e, t, s, n = Or) {
  e.push(t);
  const i = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), n());
  };
  return !s && Ao() && Xr(i), i;
}
function Ht(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const wc = (e) => e(), oo = Symbol(), $n = Symbol();
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
  const { state: i, actions: o, getters: r } = t, l = s.state.value[e];
  let a;
  function f() {
    l || (s.state.value[e] = i ? i() : {});
    const c = /* @__PURE__ */ bl(s.state.value[e]);
    return xt(c, o, Object.keys(r || {}).reduce((p, m) => (p[m] = ai($e(() => {
      vn(s);
      const v = s._s.get(e);
      return r[m].call(v, v);
    })), p), {}));
  }
  return a = Dr(e, f, t, s, n, !0), a;
}
function Dr(e, t, s = {}, n, i, o) {
  let r;
  const l = xt({ actions: {} }, s), a = { deep: !0 };
  let f, c, p = [], m = [], v;
  const T = n.state.value[e];
  !o && !T && (n.state.value[e] = {});
  let I;
  function z(N) {
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
  const U = o ? function() {
    const { state: b } = s, j = b ? b() : {};
    this.$patch((Y) => {
      xt(Y, j);
    });
  } : (
    /* istanbul ignore next */
    Or
  );
  function _() {
    r.stop(), p = [], m = [], n._s.delete(e);
  }
  const C = (N, b = "") => {
    if (oo in N)
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
      let re;
      try {
        re = N.apply(this && this.$id === e ? this : B, Y);
      } catch (H) {
        throw Ht(W, H), H;
      }
      return re instanceof Promise ? re.then((H) => (Ht(E, H), H)).catch((H) => (Ht(W, H), Promise.reject(H))) : (Ht(E, re), re);
    };
    return j[oo] = !0, j[$n] = b, j;
  }, k = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: io.bind(null, m),
    $patch: z,
    $reset: U,
    $subscribe(N, b = {}) {
      const j = io(p, N, b.detached, () => Y()), Y = r.run(() => Fe(() => n.state.value[e], (E) => {
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
  const R = (n._a && n._a.runWithContext || wc)(() => n._e.run(() => (r = Eo()).run(() => t({ action: C }))));
  for (const N in R) {
    const b = R[N];
    if (/* @__PURE__ */ _e(b) && !Tc(b) || /* @__PURE__ */ pt(b))
      o || (T && Cc(b) && (/* @__PURE__ */ _e(b) ? b.value = T[N] : Xn(b, T[N])), n.state.value[e][N] = b);
    else if (typeof b == "function") {
      const j = C(b, N);
      R[N] = j, l.actions[N] = b;
    }
  }
  return xt(B, R), xt(/* @__PURE__ */ oe(B), R), Object.defineProperty(B, "$state", {
    get: () => n.state.value[e],
    set: (N) => {
      z((b) => {
        xt(b, N);
      });
    }
  }), n._p.forEach((N) => {
    xt(B, r.run(() => N({
      store: B,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), T && o && s.hydrate && s.hydrate(B.$state, T), f = !0, c = !0, B;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function yn(e, t, s) {
  let n, i;
  const o = typeof t == "function";
  typeof e == "string" ? (n = e, i = o ? s : t) : (i = e, n = e.id);
  function r(l, a) {
    const f = Rl();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (f ? fs($r, null) : null), l && vn(l), l = Lr, l._s.has(n) || (o ? Dr(n, t, i, l) : Ic(n, i, l)), l._s.get(n);
  }
  return r.$id = n, r;
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
            const o = t.providers?.find((r) => r.id === i.id);
            return o ? { ...o, config: o.config ?? i.config ?? {} } : i;
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
const ro = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function kc(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const i = new RegExp(ro.source, "g"), o = [];
    let r;
    for (; (r = i.exec(n)) !== null; ) {
      const a = parseInt(r[1], 10), f = parseInt(r[2], 10), c = r[3] ?? "", p = c ? parseInt(c.padEnd(3, "0"), 10) : 0;
      o.push(a * 60 + f + p / 1e3);
    }
    if (o.length === 0) continue;
    const l = n.replace(new RegExp(ro.source, "g"), "").trim();
    if (l !== "")
      for (const a of o)
        s.push({ time: a, text: l });
  }
  s.sort((n, i) => n.time - i.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function lo(e, t) {
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
const vs = "st-music-player", ao = "stmp_cursor", co = "stmp_userlist";
class Pc {
  constructor(t) {
    this.providers = t;
  }
  async searchAll(t) {
    const s = await Promise.allSettled(
      this.providers.map((o) => o.search(t))
    ), n = [], i = /* @__PURE__ */ new Map();
    return s.forEach((o) => {
      if (o.status === "fulfilled")
        for (const r of o.value) {
          const l = `${r.name}__${r.artist}`;
          i.get(l) === void 0 && (i.set(l, n.length), n.push(r));
        }
    }), n;
  }
  async resolve(t, s, n) {
    const i = this.getProvider(s);
    return i ? new Promise((o) => {
      const r = setTimeout(() => o(null), 15e3);
      i.resolve(t, n).then((l) => {
        clearTimeout(r), o(l);
      }).catch(() => {
        clearTimeout(r), o(null);
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
      const n = new AbortController(), i = setTimeout(() => n.abort(), s), o = await fetch(t, { signal: n.signal });
      return clearTimeout(i), o.ok ? await o.json() : null;
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
      let o = !1;
      const r = () => {
        i.removeEventListener("loadedmetadata", l), i.removeEventListener("error", a), clearTimeout(f), i.src = "";
      }, l = () => {
        o || (o = !0, r(), n(!0));
      }, a = () => {
        o || (o = !0, r(), n(!1));
      }, f = setTimeout(() => {
        o || (o = !0, r(), n(!1));
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
      artist: Array.isArray(i.artists) ? i.artists.map((o) => o.name).join(", ") : String(i.artists?.[0]?.name ?? ""),
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
    const [i, o] = await Promise.all([
      this.fetchJson(
        `${this.apiBase}/lyric?os=pc&id=${encodeURIComponent(t)}&lv=-1&kv=-1&tv=-1`
      ),
      this.fetchJson(
        `${this.apiBase}/detail?ids=%5B${encodeURIComponent(t)}%5D`
      )
    ]), r = o?.songs?.[0];
    return {
      url: String(n.url),
      lyric: i?.lrc?.lyric ? String(i.lrc.lyric) : void 0,
      cover: r?.album?.picUrl ? String(r.album.picUrl) : void 0,
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
    for (const o of i) {
      const r = await this.resolve(o.id, o.picId);
      if (!r) continue;
      if (!await this.probeAudio(r.url)) {
        console.warn(`[NetEase] audio probe failed for id=${o.id}, trying next`);
        continue;
      }
      return r.name = o.name, r.artist = o.artist, r;
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
      const n = new AbortController(), i = setTimeout(() => n.abort(), s), o = await fetch(t, { signal: n.signal });
      return clearTimeout(i), o.ok ? await o.json() : null;
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
function Nr(e) {
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
        const n = s.getMetadata(ao);
        n && n.chatId === e && this.chatIndexer?.setCursor(e, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const t = Me().storage;
      if (!t || !this.chatId) return;
      const s = t.getMetadata(co);
      if (s && Array.isArray(s)) {
        const n = s.filter((o) => o && o.source === "user"), i = s.filter((o) => o && o.source === "local");
        this.list = [
          ...this.list.filter((o) => o.source !== "user" && o.source !== "local"),
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
      const o = Nr(s.settings.providers);
      if (t.source === "local" && t.localBlobKey) {
        const l = await n.getBlob(t.localBlobKey);
        l && (i = {
          url: URL.createObjectURL(l),
          name: t.song,
          artist: t.artist ?? "",
          source: "local"
        });
      }
      if (!i && t.song && (i = await o.searchAndResolve(t.song, t.artist), i && (t.providerId = i.source)), !i) {
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
          const o = {
            id: Ns(),
            song: i.song,
            artist: i.artist,
            source: "chat",
            messageId: n.messageId,
            addedAt: Date.now()
          };
          this.list.push(o), s = o;
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
      ), n = this.list.map((r, l) => r.messageId === e ? l : -1).filter((r) => r >= 0);
      if (n.length === 0) {
        s.cue && this.addFromCue(s.cue, e);
        return;
      }
      if (!s.cue) {
        for (const r of [...n].reverse())
          this.removeItem(r);
        return;
      }
      const i = n[0], o = this.list[i];
      o.song = s.cue.song, o.artist = s.cue.artist;
      for (const r of [...n].reverse())
        r !== i && this.removeItem(r);
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
      t.setMetadata(co, s);
    },
    getCursor() {
      return !this.chatIndexer || !this.chatId ? -1 : this.chatIndexer.getCursor(this.chatId);
    },
    setCursor(e) {
      if (!this.chatIndexer || !this.chatId) return;
      this.chatIndexer.setCursor(this.chatId, e);
      const s = Me().storage;
      s && s.setMetadata(ao, {
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
        const s = lo(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
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
      return lo(this.lyrics, this.currentTime);
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
    return (t, s) => (M(), O("svg", {
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
      e.name === "play" ? (M(), O("polygon", Hc)) : e.name === "pause" ? (M(), O(se, { key: 1 }, [
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
      ], 64)) : e.name === "prev" ? (M(), O(se, { key: 2 }, [
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
      ], 64)) : e.name === "next" ? (M(), O(se, { key: 3 }, [
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
      ], 64)) : e.name === "repeat" ? (M(), O(se, { key: 4 }, [
        s[6] || (s[6] = d("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = d("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = d("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = d("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (M(), O(se, { key: 5 }, [
        s[10] || (s[10] = Os('<polyline points="17 1 21 5 17 9" data-v-4bfc4099></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-4bfc4099></path><polyline points="7 23 3 19 7 15" data-v-4bfc4099></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-4bfc4099></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-4bfc4099>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (M(), O(se, { key: 6 }, [
        s[11] || (s[11] = Os('<polyline points="16 3 21 3 21 8" data-v-4bfc4099></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-4bfc4099></line><polyline points="21 16 21 21 16 21" data-v-4bfc4099></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-4bfc4099></line><line x1="4" y1="4" x2="9" y2="9" data-v-4bfc4099></line>', 5))
      ], 64)) : e.name === "search" ? (M(), O(se, { key: 7 }, [
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
      ], 64)) : e.name === "plus" ? (M(), O(se, { key: 8 }, [
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
      ], 64)) : e.name === "x" ? (M(), O(se, { key: 9 }, [
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
      ], 64)) : e.name === "chevron-down" ? (M(), O("polyline", Vc)) : e.name === "chevron-up" ? (M(), O("polyline", jc)) : e.name === "music" ? (M(), O(se, { key: 12 }, [
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
      ], 64)) : e.name === "volume" ? (M(), O(se, { key: 13 }, [
        s[21] || (s[21] = d("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = d("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = d("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (M(), O(se, { key: 14 }, [
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
      ], 64)) : e.name === "check" ? (M(), O("polyline", Bc)) : e.name === "loader" ? (M(), O(se, { key: 16 }, [
        s[27] || (s[27] = Os('<line x1="12" y1="2" x2="12" y2="6" data-v-4bfc4099></line><line x1="12" y1="18" x2="12" y2="22" data-v-4bfc4099></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-4bfc4099></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-4bfc4099></line><line x1="2" y1="12" x2="6" y2="12" data-v-4bfc4099></line><line x1="18" y1="12" x2="22" y2="12" data-v-4bfc4099></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-4bfc4099></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-4bfc4099></line>', 8))
      ], 64)) : e.name === "list-music" ? (M(), O(se, { key: 17 }, [
        s[28] || (s[28] = Os('<path d="M3 12h11" data-v-4bfc4099></path><path d="M3 6h11" data-v-4bfc4099></path><path d="M3 18h7" data-v-4bfc4099></path><path d="M16 8v13" data-v-4bfc4099></path><circle cx="14" cy="21" r="2" data-v-4bfc4099></circle><path d="M16 8l5-2v3" data-v-4bfc4099></path>', 6))
      ], 64)) : Ie("", !0)
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
}, iu = { class: "stmp-mini-controls" }, ou = ["aria-label"], ru = ["aria-label"], lu = {
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
    const t = Nt(), s = Xt(), n = e, i = /* @__PURE__ */ he(!1), o = $e(() => t.currentTrack?.cover || ""), r = $e(() => !!t.currentTrack), l = $e(() => {
      const R = t.currentTrack;
      if (!R) return "";
      const N = R.name, b = R.artist || "";
      return b ? `${N} - ${b}` : N;
    }), a = $e(() => {
      const R = t.currentLyricIndex;
      return R < 0 || R >= t.lyrics.length ? "" : t.lyrics[R].text;
    }), f = $e(() => {
      const R = t.currentLyricIndex;
      if (R < 0 || R >= t.lyrics.length) return 0;
      const N = t.lyrics[R];
      return N.next ? Math.max(500, (N.next.time - N.time) * 1e3) : 5e3;
    }), c = /* @__PURE__ */ he(0), p = /* @__PURE__ */ he([]), m = /* @__PURE__ */ he(null);
    function v(R, N) {
      R && (p.value[N] = R);
    }
    async function T() {
      await Ne();
      const R = t.currentLyricIndex, N = m.value;
      if (!N || R < 0) {
        c.value = 0;
        return;
      }
      const b = p.value[R];
      if (!b) return;
      const j = b.offsetTop, Y = b.offsetHeight, E = N.clientHeight;
      c.value = j - E / 2 + Y / 2;
    }
    Fe(() => t.currentLyricIndex, T), Fe(() => t.lyrics, () => {
      p.value = [], T();
    });
    const I = /* @__PURE__ */ he(null), z = /* @__PURE__ */ he(null), U = /* @__PURE__ */ he(0), _ = /* @__PURE__ */ he(0);
    function C() {
      const R = I.value, N = z.value;
      if (!R || !N) {
        U.value = 0;
        return;
      }
      const b = R.scrollWidth - N.clientWidth;
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
    function B(R) {
      R.stopPropagation(), t.togglePlay();
    }
    function ne(R) {
      R.stopPropagation(), s.next();
    }
    return hn(() => {
      T(), requestAnimationFrame(C);
    }), (R, N) => n.isDock && !n.isMobile ? (M(), O("div", Kc, [
      o.value && !i.value ? (M(), O("div", zc, [
        d("img", {
          src: o.value,
          alt: "",
          onError: k
        }, null, 40, Jc)
      ])) : (M(), O("div", Gc, [
        te(ve, {
          name: "music",
          size: 14
        })
      ])),
      d("div", {
        ref_key: "dockWindowRef",
        ref: m,
        class: "stmp-mini-dock-text"
      }, [
        y(t).lyrics.length > 0 ? (M(), O("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: St({ transform: `translateY(-${c.value}px)` })
        }, [
          (M(!0), O(se, null, Be(y(t).lyrics, (b, j) => (M(), O("span", {
            key: j,
            ref_for: !0,
            ref: (Y) => v(Y, j),
            class: pe(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": j === y(t).currentLyricIndex }])
          }, K(b.text), 3))), 128))
        ], 4)) : (M(), O("span", qc, K(l.value), 1))
      ], 512),
      d("div", Yc, [
        d("button", {
          class: "stmp-mini-btn",
          "aria-label": y(t).isPlaying ? y(L)("Pause") : y(L)("Play"),
          onClick: B
        }, [
          te(ve, {
            name: y(t).isPlaying ? "pause" : "play",
            size: 14
          }, null, 8, ["name"])
        ], 8, Xc),
        d("button", {
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
    ])) : n.isDock && n.isMobile ? (M(), O("div", Qc, [
      o.value && !i.value ? (M(), O("div", eu, [
        d("img", {
          src: o.value,
          alt: "",
          onError: k
        }, null, 40, tu)
      ])) : (M(), O("div", su, [
        te(ve, {
          name: "music",
          size: 14
        })
      ])),
      d("div", {
        ref_key: "dockWindowRef",
        ref: m,
        class: "stmp-mini-dock-text"
      }, [
        y(t).lyrics.length > 0 ? (M(), O("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: St({ transform: `translateY(-${c.value}px)` })
        }, [
          (M(!0), O(se, null, Be(y(t).lyrics, (b, j) => (M(), O("span", {
            key: j,
            ref_for: !0,
            ref: (Y) => v(Y, j),
            class: pe(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": j === y(t).currentLyricIndex }])
          }, K(b.text), 3))), 128))
        ], 4)) : (M(), O("span", nu, K(l.value), 1))
      ], 512),
      d("div", iu, [
        d("button", {
          class: "stmp-mini-btn",
          "aria-label": y(t).isPlaying ? y(L)("Pause") : y(L)("Play"),
          onClick: B
        }, [
          te(ve, {
            name: y(t).isPlaying ? "pause" : "play",
            size: 16
          }, null, 8, ["name"])
        ], 8, ou),
        d("button", {
          class: "stmp-mini-btn",
          "aria-label": y(L)("Next"),
          onClick: ne
        }, [
          te(ve, {
            name: "next",
            size: 16
          })
        ], 8, ru)
      ])
    ])) : r.value ? (M(), O("div", cu, [
      d("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": y(t).isPlaying ? y(L)("Pause") : y(L)("Play"),
        onClick: B
      }, [
        o.value && !i.value ? (M(), O("img", {
          key: 0,
          src: o.value,
          alt: "",
          onError: k
        }, null, 40, fu)) : (M(), gt(ve, {
          key: 1,
          name: "music",
          size: 20
        })),
        d("div", du, [
          te(ve, {
            name: y(t).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, uu),
      d("div", hu, [
        d("span", pu, K(l.value), 1),
        d("div", {
          ref_key: "lyricContainerRef",
          ref: z,
          class: "stmp-mini-lyric"
        }, [
          d("span", {
            ref_key: "lyricScrollRef",
            ref: I,
            class: "stmp-mini-lyric-scroll",
            style: St({
              transform: `translateX(${U.value}px)`,
              transition: _.value > 0 ? `transform ${_.value}ms linear` : "none"
            })
          }, K(a.value || " "), 5)
        ], 512)
      ])
    ])) : (M(), O("div", lu, [
      d("div", au, [
        te(ve, {
          name: "music",
          size: 20
        })
      ])
    ]));
  }
}), uo = /* @__PURE__ */ Et(gu, [["__scopeId", "data-v-f2316395"]]), mu = { class: "stmp-playlist" }, vu = {
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
    const t = Xt(), s = Me(), n = $e(() => s.settings.providers.find((p) => p.id === "local")?.enabled ?? !1), i = /* @__PURE__ */ he(null), o = () => {
      i.value?.click();
    }, r = async (p) => {
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
    return (p, m) => (M(), O("div", mu, [
      n.value ? (M(), O("div", vu, [
        d("input", {
          type: "file",
          accept: "audio/*",
          ref_key: "fileInputRef",
          ref: i,
          onChange: r,
          style: { display: "none" }
        }, null, 544),
        d("button", {
          class: "stmp-upload-btn",
          "aria-label": y(L)("Add local file"),
          onClick: o
        }, " + " + K(y(L)("Add local file")), 9, yu)
      ])) : Ie("", !0),
      y(t).isEmpty ? (M(), O("div", _u, K(y(L)("No Songs")), 1)) : (M(), O(se, { key: 2 }, Be(["chat", "user", "local"], (v) => d("div", {
        key: v,
        class: "stmp-group"
      }, [
        l.value[v].length ? (M(), O(se, { key: 0 }, [
          d("div", bu, K(a[v]), 1),
          (M(!0), O(se, null, Be(l.value[v], (T) => (M(), O("div", {
            key: T.item.id,
            class: pe(["stmp-item", { active: T.index === y(t).currentIndex }]),
            onClick: (I) => f(T.index)
          }, [
            d("span", wu, K(T.index + 1), 1),
            d("div", Su, [
              d("span", Cu, K(T.item.song), 1),
              T.item.artist ? (M(), O("span", Tu, K(T.item.artist), 1)) : Ie("", !0)
            ]),
            d("button", {
              class: "stmp-item-del",
              onClick: Wt((I) => c(T.index), ["stop"])
            }, [
              te(ve, {
                name: "x",
                size: 14
              })
            ], 8, Iu)
          ], 10, xu))), 128))
        ], 64)) : Ie("", !0)
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
    const t = Fc(), s = Xt(), n = Me(), i = /* @__PURE__ */ he(t.keyword), o = /* @__PURE__ */ he(/* @__PURE__ */ new Set()), r = /* @__PURE__ */ he(null);
    async function l() {
      t.setKeyword(i.value);
      const v = Nr(n.settings.providers);
      await t.search(v);
    }
    const a = () => {
      l();
    };
    function f(v) {
      const T = v.provider + v.id;
      if (r.value === T) return;
      r.value = T;
      const I = s.list.length;
      s.addFromSearch(v);
      const z = s.list.length - 1;
      z >= I && s.play(z), setTimeout(() => {
        o.value.add(T), r.value = null;
      }, 600);
    }
    function c(v) {
      const T = v.provider + v.id;
      o.value.has(T) || (s.addFromSearch(v), o.value.add(T));
    }
    function p(v) {
      return o.value.has(v.provider + v.id);
    }
    function m(v) {
      return r.value === v.provider + v.id;
    }
    return (v, T) => (M(), O("div", ku, [
      d("div", Mu, [
        _t(d("input", {
          "onUpdate:modelValue": T[0] || (T[0] = (I) => i.value = I),
          class: "stmp-search-input",
          placeholder: y(L)("Search Song..."),
          onKeydown: Rr(l, ["enter"])
        }, null, 40, Ru), [
          [js, i.value]
        ]),
        d("button", {
          class: "stmp-icon-btn",
          disabled: y(t).isSearching,
          onClick: l
        }, [
          y(t).isSearching ? (M(), gt(ve, {
            key: 1,
            name: "loader",
            size: 16,
            class: "stmp-spin"
          })) : (M(), gt(ve, {
            key: 0,
            name: "search",
            size: 16
          }))
        ], 8, Pu)
      ]),
      y(t).error ? (M(), O("div", Lu, [
        d("span", null, K(y(t).error), 1),
        d("button", {
          class: "stmp-retry-btn",
          "aria-label": y(L)("Retry"),
          onClick: a
        }, K(y(L)("Retry")), 9, $u)
      ])) : Ie("", !0),
      y(t).isSearching ? (M(), O("div", Ou, K(y(L)("Searching...")), 1)) : i.value && !y(t).results.length ? (M(), O("div", Du, K(y(L)("No results")), 1)) : !i.value && !y(t).results.length ? (M(), O("div", Nu, K(y(L)("Type a song name to search")), 1)) : Ie("", !0),
      y(t).results.length ? (M(), O("div", Fu, [
        (M(!0), O(se, null, Be(y(t).results, (I) => (M(), O("div", {
          key: I.provider + I.id,
          class: pe(["stmp-result", { "stmp-result-playing": m(I) }])
        }, [
          d("div", {
            class: "stmp-result-info",
            onClick: (z) => f(I)
          }, [
            d("span", Hu, K(I.name), 1),
            I.artist ? (M(), O("span", Vu, K(I.artist), 1)) : Ie("", !0)
          ], 8, Uu),
          d("button", {
            class: pe(["stmp-icon-btn stmp-result-add", { added: p(I) }]),
            "aria-label": p(I) ? y(L)("Added") : y(L)("Add to list"),
            onClick: Wt((z) => c(I), ["stop"])
          }, [
            te(ve, {
              name: p(I) ? "check" : "plus",
              size: 16
            }, null, 8, ["name"])
          ], 10, ju)
        ], 2))), 128))
      ])) : Ie("", !0)
    ]));
  }
}), Wu = /* @__PURE__ */ Et(Bu, [["__scopeId", "data-v-a8d156af"]]), Ku = { class: "stmp-panel" }, zu = { class: "stmp-topbar stmp-drag-handle" }, Ju = ["aria-label"], Gu = { class: "stmp-cover-large" }, qu = ["src"], Yu = {
  key: 1,
  class: "stmp-cover-placeholder"
}, Xu = { class: "stmp-track-name" }, Zu = { class: "stmp-track-artist" }, Qu = { class: "stmp-lyric-header" }, ef = { class: "stmp-track-name" }, tf = { class: "stmp-track-artist" }, sf = { class: "stmp-progress" }, nf = ["value"], of = { class: "stmp-time" }, rf = { class: "stmp-controls" }, lf = { class: "stmp-ctrl-side stmp-search-side" }, af = ["aria-label"], cf = ["aria-label"], uf = ["aria-label"], ff = ["aria-label"], df = ["aria-label"], hf = ["aria-label"], pf = { class: "stmp-ctrl-side stmp-volume-side" }, gf = ["aria-label"], mf = ["value"], vf = {
  key: 0,
  class: "stmp-overlay"
}, yf = { class: "stmp-overlay-header" }, _f = { class: "stmp-overlay-title" }, bf = ["aria-label"], xf = { class: "stmp-overlay-body" }, wf = /* @__PURE__ */ It({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = Nt(), s = Xt(), n = Me(), i = /* @__PURE__ */ he("cover"), o = /* @__PURE__ */ he(null), r = /* @__PURE__ */ he(!1), l = /* @__PURE__ */ he(!1);
    let a = null;
    const f = $e(() => t.currentTrack?.cover || ""), c = () => {
      r.value = !0;
    };
    Fe(
      () => t.currentTrack,
      () => {
        r.value = !1;
      }
    );
    const p = $e(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), m = /* @__PURE__ */ he(0), v = /* @__PURE__ */ he([]), T = /* @__PURE__ */ he(null);
    function I(E, W) {
      E && (v.value[W] = E);
    }
    async function z() {
      await Ne();
      const E = t.currentLyricIndex, W = T.value;
      if (!W || E < 0) {
        m.value = 0;
        return;
      }
      const ee = v.value[E];
      if (!ee) return;
      const me = ee.offsetTop, re = ee.offsetHeight, H = W.clientHeight;
      m.value = me - H / 2 + re / 2;
    }
    Fe(() => t.currentLyricIndex, z), Fe(() => t.lyrics, () => {
      v.value = [], z();
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
    function R() {
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
      o.value === E ? o.value = null : o.value = E;
    }
    function Y() {
      o.value = null;
    }
    return (E, W) => (M(), O("div", Ku, [
      d("div", zu, [
        W[7] || (W[7] = d("div", { class: "stmp-topbar-spacer" }, null, -1)),
        d("button", {
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
      d("div", {
        class: "stmp-display",
        onClick: W[1] || (W[1] = (ee) => i.value = i.value === "cover" ? "lyric" : "cover")
      }, [
        d("div", {
          class: pe(["stmp-cover-mode", { hidden: i.value !== "cover" }])
        }, [
          d("div", Gu, [
            f.value && !r.value ? (M(), O("img", {
              key: 0,
              src: f.value,
              alt: "cover",
              onError: c
            }, null, 40, qu)) : (M(), O("div", Yu, [
              te(ve, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          d("div", Xu, K(y(t).currentTrack?.name || y(L)("No Song")), 1),
          d("div", Zu, K(y(t).currentTrack?.artist || " "), 1)
        ], 2),
        d("div", {
          class: pe(["stmp-lyric-mode", { hidden: i.value !== "lyric" }])
        }, [
          d("div", Qu, [
            d("div", ef, K(y(t).currentTrack?.name || y(L)("No Song")), 1),
            d("div", tf, K(y(t).currentTrack?.artist || " "), 1)
          ]),
          d("div", {
            ref_key: "lyricWindowRef",
            ref: T,
            class: "stmp-lyric-window"
          }, [
            y(t).lyrics.length > 0 ? (M(), O("div", {
              key: 0,
              class: "stmp-lyric-scroll",
              style: St({ transform: `translateY(-${m.value}px)` })
            }, [
              (M(!0), O(se, null, Be(y(t).lyrics, (ee, me) => (M(), O("div", {
                key: me,
                ref_for: !0,
                ref: (re) => I(re, me),
                class: pe(["stmp-lyric-line", { "stmp-lyric-active": me === y(t).currentLyricIndex }])
              }, K(ee.text), 3))), 128))
            ], 4)) : Ie("", !0)
          ], 512)
        ], 2)
      ]),
      d("div", sf, [
        d("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: p.value,
          class: "stmp-range",
          onInput: _
        }, null, 40, nf),
        d("div", of, [
          d("span", null, K(U(y(t).currentTime)), 1),
          d("span", null, K(U(y(t).duration)), 1)
        ])
      ]),
      d("div", rf, [
        d("div", lf, [
          d("button", {
            class: pe(["stmp-ctrl-btn", { active: o.value === "search" }]),
            "aria-label": y(L)("Search"),
            onClick: W[2] || (W[2] = Wt((ee) => j("search"), ["stop"]))
          }, [
            te(ve, {
              name: "search",
              size: 18
            })
          ], 10, af)
        ]),
        d("button", {
          class: "stmp-ctrl-btn",
          "aria-label": y(L)("Toggle play mode"),
          onClick: B
        }, [
          te(ve, {
            name: k[y(n).settings.playMode],
            size: 18
          }, null, 8, ["name"])
        ], 8, cf),
        d("button", {
          class: "stmp-ctrl-btn",
          "aria-label": y(L)("Previous"),
          onClick: W[3] || (W[3] = (ee) => y(s).prev())
        }, [
          te(ve, {
            name: "prev",
            size: 18
          })
        ], 8, uf),
        d("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": y(t).isPlaying ? y(L)("Pause") : y(L)("Play"),
          onClick: W[4] || (W[4] = (ee) => y(t).togglePlay())
        }, [
          te(ve, {
            name: y(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, ff),
        d("button", {
          class: "stmp-ctrl-btn",
          "aria-label": y(L)("Next"),
          onClick: W[5] || (W[5] = (ee) => y(s).next())
        }, [
          te(ve, {
            name: "next",
            size: 18
          })
        ], 8, df),
        d("button", {
          class: pe(["stmp-ctrl-btn", { active: o.value === "list" }]),
          "aria-label": y(L)("Playlist"),
          onClick: W[6] || (W[6] = Wt((ee) => j("list"), ["stop"]))
        }, [
          te(ve, {
            name: "list-music",
            size: 18
          })
        ], 10, hf),
        d("div", pf, [
          d("div", {
            class: "stmp-volume-container",
            onMouseenter: R,
            onMouseleave: N
          }, [
            d("button", {
              class: "stmp-ctrl-btn",
              "aria-label": y(L)("Mute / Unmute"),
              onClick: b
            }, [
              te(ve, {
                name: y(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, gf),
            d("div", {
              class: pe(["stmp-volume-popup", { show: l.value }])
            }, [
              d("input", {
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
        default: qo(() => [
          o.value ? (M(), O("div", vf, [
            d("div", yf, [
              d("span", _f, K(o.value === "list" ? y(L)("Playlist") : y(L)("Search")), 1),
              d("button", {
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
            d("div", xf, [
              o.value === "list" ? (M(), gt(Au, { key: 0 })) : (M(), gt(Wu, { key: 1 }))
            ])
          ])) : Ie("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), fo = /* @__PURE__ */ Et(wf, [["__scopeId", "data-v-4bf7f7af"]]), Sf = {
  key: 1,
  class: "stmp-inline-expanded"
}, ho = 3, Cf = 500, Tf = /* @__PURE__ */ It({
  __name: "App",
  setup(e) {
    const t = Me(), s = Nt(), n = /* @__PURE__ */ he(!1), i = /* @__PURE__ */ he(null);
    let o = null;
    const r = $e(() => t.settings.widgetMode === "dock"), l = $e(() => t.settings.widgetMode === "inline"), a = $e(() => t.settings.widgetMode === "hidden"), f = /* @__PURE__ */ he(window.innerWidth <= 768), c = /* @__PURE__ */ he(!1), p = $e(() => t.settings.customOpacity ? t.settings.opacity : 75), m = (H) => {
      H.key === "Escape" && (n.value = !1), H.key === " " && H.target === document.body && (H.preventDefault(), s.togglePlay());
    };
    let v = 0, T = 0, I = 0, z = 0, U = !1, _ = !1, C = 0, k = !1, B = null, ne = null;
    function R(H) {
      if (r.value) return;
      const G = H.target;
      if (G.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!G.closest(".stmp-drag-handle") || G.closest("button")) || !n.value && G.closest("button"))
        return;
      const be = i.value?.getBoundingClientRect();
      be && (v = H.clientX, T = H.clientY, I = be.left, z = be.top, U = !1, _ = !0, C = Date.now(), k = !1, i.value && (i.value.style.left = be.left + "px", i.value.style.top = be.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), B = N, ne = b, document.addEventListener("pointermove", B), document.addEventListener("pointerup", ne), H.preventDefault());
    }
    function N(H) {
      if (!i.value || !_) return;
      const G = H.clientX - v, be = H.clientY - T;
      (Math.abs(G) > ho || Math.abs(be) > ho) && (U = !0);
      let Ce = I + G, ye = z + be;
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
      if (!i.value || !r.value) return;
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
      if (!i.value || r.value) return;
      const H = t.settings.position;
      H ? (i.value.style.left = H.x + "px", i.value.style.top = H.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", window.innerWidth <= 768 && Ne(() => j())) : (i.value.style.right = "16px", i.value.style.top = "16px", i.value.style.left = "auto", i.value.style.bottom = "auto");
    }
    function W(H) {
      if (k) {
        k = !1;
        return;
      }
      if (r.value && !n.value) {
        if (H.target.closest("button, input")) return;
        me();
        return;
      }
      if (!r.value && !n.value) {
        if (H.target.closest("button, input")) return;
        me();
      }
    }
    function ee(H) {
      n.value || H.target.closest("button, input") || me();
    }
    function me() {
      n.value = !n.value, Ne(() => {
        r.value ? Y() : l.value || t.settings.position && j();
      });
    }
    Fe(() => t.settings.widgetMode, (H) => {
      n.value = !1, i.value && (i.value.style.width = "", i.value.style.left = "", i.value.style.top = "", i.value.style.right = "", i.value.style.bottom = "", i.value.style.maxHeight = ""), H === "inline" && (c.value = !!document.querySelector("#send_form")), Ne(() => {
        H === "dock" ? Y() : H === "drag" && E();
      });
    }), Fe(() => t.settings.dockAlign, () => {
      r.value && Ne(() => Y());
    }), hn(() => {
      c.value = !!document.querySelector("#send_form"), Ne(() => {
        r.value ? Y() : l.value || E();
      }), i.value && typeof ResizeObserver < "u" && (o = new ResizeObserver(() => {
        r.value && Y();
      }), o.observe(i.value)), window.addEventListener("resize", re), window.addEventListener("keydown", m);
    });
    function re() {
      f.value = window.innerWidth <= 768, r.value ? Ne(() => Y()) : l.value || Ne(() => j());
    }
    return ui(() => {
      b(), o && (o.disconnect(), o = null), window.removeEventListener("resize", re), window.removeEventListener("keydown", m);
    }), (H, G) => l.value ? (M(), O(se, { key: 0 }, [
      c.value ? (M(), gt(Fl, {
        key: 0,
        to: "#send_form"
      }, [
        n.value ? (M(), O("div", Sf, [
          te(fo, { onCollapse: me })
        ])) : (M(), O("div", {
          key: 0,
          class: "stmp-inline-bar",
          onClick: ee
        }, [
          te(uo, {
            "is-dock": !0,
            "is-mobile": !0
          })
        ]))
      ])) : Ie("", !0)
    ], 64)) : a.value ? Ie("", !0) : (M(), O("div", {
      key: 1,
      ref_key: "widgetRef",
      ref: i,
      class: pe(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": r.value
      }]),
      style: St({ "--stmp-opacity": p.value + "%" }),
      onPointerdown: R,
      onClick: W
    }, [
      n.value ? (M(), gt(fo, {
        key: 1,
        onCollapse: me
      })) : (M(), gt(uo, {
        key: 0,
        "is-dock": r.value,
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
      const o = i.target;
      s("update:modelValue", o.checked);
    }
    return (i, o) => (M(), O("label", {
      class: pe(["stmp-switch-row", { "stmp-switch-disabled": e.disabled }])
    }, [
      e.label ? (M(), O("span", Ef, K(e.label), 1)) : Ie("", !0),
      d("span", Af, [
        d("input", {
          type: "checkbox",
          checked: e.modelValue,
          disabled: e.disabled,
          onChange: n
        }, null, 40, kf),
        o[0] || (o[0] = d("span", { class: "stmp-switch-track" }, [
          d("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ], 2));
  }
}), Dn = /* @__PURE__ */ Et(Mf, [["__scopeId", "data-v-1c9c8a5f"]]), Rf = { class: "stmp-settings" }, Pf = { class: "stmp-tab-bar" }, Lf = ["onClick"], $f = { class: "stmp-tab-content" }, Of = { class: "stmp-tab-panel" }, Df = { class: "stmp-row" }, Nf = { class: "stmp-row-info" }, Ff = { class: "stmp-row-title" }, Uf = { class: "stmp-row-desc" }, Hf = { class: "stmp-chips" }, Vf = ["onClick"], jf = {
  key: 0,
  class: "stmp-row"
}, Bf = { class: "stmp-row-info" }, Wf = { class: "stmp-row-title" }, Kf = { class: "stmp-row-desc" }, zf = { class: "stmp-chips" }, Jf = ["onClick"], Gf = { class: "stmp-row" }, qf = { class: "stmp-row-info" }, Yf = { class: "stmp-row-title" }, Xf = {
  key: 0,
  class: "stmp-row-desc"
}, Zf = {
  key: 1,
  class: "stmp-row-desc"
}, Qf = {
  key: 1,
  class: "stmp-row"
}, ed = { class: "stmp-row-info" }, td = { class: "stmp-row-title" }, sd = { class: "stmp-slider-wrap" }, nd = ["value"], id = { class: "stmp-slider-val" }, od = { class: "stmp-tab-panel" }, rd = { class: "stmp-row" }, ld = { class: "stmp-row-info" }, ad = { class: "stmp-row-title" }, cd = { class: "stmp-slider-wrap" }, ud = ["value"], fd = { class: "stmp-slider-val" }, dd = { class: "stmp-row" }, hd = { class: "stmp-row-info" }, pd = { class: "stmp-row-title" }, gd = { class: "stmp-chips" }, md = ["onClick"], vd = { class: "stmp-tab-panel" }, yd = { class: "stmp-row" }, _d = { class: "stmp-row-info" }, bd = { class: "stmp-row-title" }, xd = { class: "stmp-row-desc" }, wd = { class: "stmp-section-title" }, Sd = { class: "stmp-row-desc" }, Cd = { class: "stmp-row" }, Td = { class: "stmp-row-info" }, Id = { class: "stmp-row-title" }, Ed = {
  key: 0,
  class: "stmp-provider-fields"
}, Ad = ["onUpdate:modelValue", "placeholder"], kd = ["onUpdate:modelValue", "placeholder"], Md = { class: "stmp-section-title" }, Rd = { class: "stmp-row-desc" }, Pd = { class: "stmp-rules" }, Ld = ["onClick"], $d = { class: "stmp-rule-add" }, Od = ["placeholder"], Dd = { class: "stmp-tab-panel" }, Nd = { class: "stmp-section-title" }, Fd = { class: "stmp-row" }, Ud = { class: "stmp-row-info" }, Hd = { class: "stmp-row-title" }, Vd = { class: "stmp-row-desc" }, jd = { class: "stmp-row" }, Bd = { class: "stmp-row-info" }, Wd = { class: "stmp-row-title" }, Kd = { class: "stmp-row-desc" }, zd = { class: "stmp-about" }, Jd = { class: "stmp-about-version" }, Gd = { class: "stmp-about-desc" }, qd = "1.0.0", Yd = "https://github.com/vvb7456/ST-little-player", Xd = /* @__PURE__ */ It({
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
    ], o = [
      { value: "left", label: L("Left"), icon: "fa-solid fa-align-left" },
      { value: "right", label: L("Right"), icon: "fa-solid fa-align-right" }
    ], r = () => t.settings.widgetMode === "inline";
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
    }, z = () => {
      const U = document.createElement("input");
      U.type = "file", U.accept = ".json", U.onchange = async (_) => {
        const C = _.target.files?.[0];
        if (!C) return;
        const k = await C.text();
        try {
          const B = JSON.parse(k);
          if (typeof B != "object" || B === null) throw new Error("Not an object");
          const ne = ["volume", "playMode", "position", "widgetMode", "autoPlayOnNewCue", "providers", "customCueRules", "customOpacity", "opacity"], R = {};
          for (const N of ne)
            N in B && (R[N] = B[N]);
          if (typeof R.volume != "number" || R.volume < 0 || R.volume > 100)
            throw new Error("Invalid volume");
          if (typeof R.playMode != "string" || !["list", "random", "single"].includes(R.playMode))
            throw new Error("Invalid playMode");
          if (R.providers && !Array.isArray(R.providers))
            throw new Error("Invalid providers");
          if (R.customCueRules && !Array.isArray(R.customCueRules))
            throw new Error("Invalid customCueRules");
          Object.assign(t.settings, R), t.save(), toastr.success(L("Data imported"));
        } catch (B) {
          console.error("Import failed", B), toastr.error(L("Import failed") + ": " + (B instanceof Error ? B.message : L("Invalid JSON")));
        }
      }, U.click();
    };
    return (U, _) => (M(), O("div", Rf, [
      d("div", Pf, [
        (M(), O(se, null, Be(n, (C) => d("div", {
          key: C.id,
          class: pe(["stmp-tab", { active: s.value === C.id }]),
          onClick: (k) => s.value = C.id
        }, [
          d("i", {
            class: pe(C.icon)
          }, null, 2),
          d("span", null, K(C.label), 1)
        ], 10, Lf)), 64))
      ]),
      d("div", $f, [
        _t(d("div", Of, [
          d("div", Df, [
            d("div", Nf, [
              d("div", Ff, K(y(L)("Widget Mode")), 1),
              d("div", Uf, K(y(L)("Choose how the player widget is displayed")), 1)
            ]),
            d("div", Hf, [
              (M(), O(se, null, Be(i, (C) => d("div", {
                key: C.value,
                class: pe(["stmp-chip", { active: y(t).settings.widgetMode === C.value }]),
                onClick: (k) => y(t).setWidgetMode(C.value)
              }, [
                d("i", {
                  class: pe(C.icon)
                }, null, 2),
                d("span", null, K(C.label), 1)
              ], 10, Vf)), 64))
            ])
          ]),
          y(t).settings.widgetMode === "dock" ? (M(), O("div", jf, [
            d("div", Bf, [
              d("div", Wf, K(y(L)("Dock Alignment")), 1),
              d("div", Kf, K(y(L)("Align the docked player to the left or right of the input bar")), 1)
            ]),
            d("div", zf, [
              (M(), O(se, null, Be(o, (C) => d("div", {
                key: C.value,
                class: pe(["stmp-chip", { active: y(t).settings.dockAlign === C.value }]),
                onClick: (k) => y(t).setDockAlign(C.value)
              }, [
                d("i", {
                  class: pe(C.icon)
                }, null, 2),
                d("span", null, K(C.label), 1)
              ], 10, Jf)), 64))
            ])
          ])) : Ie("", !0),
          d("div", Gf, [
            d("div", qf, [
              d("div", Yf, K(y(L)("Custom opacity")), 1),
              r() ? (M(), O("div", Xf, K(y(L)("Not available in inline mode")), 1)) : (M(), O("div", Zf, K(y(L)("Adjust the player background opacity")), 1))
            ]),
            te(Dn, {
              "model-value": y(t).settings.customOpacity && !r(),
              disabled: r(),
              "onUpdate:modelValue": y(t).setCustomOpacity
            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])
          ]),
          y(t).settings.customOpacity && !r() ? (M(), O("div", Qf, [
            d("div", ed, [
              d("div", td, K(y(L)("Opacity")), 1)
            ]),
            d("div", sd, [
              d("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: y(t).settings.opacity,
                onInput: l
              }, null, 40, nd),
              d("span", id, K(y(t).settings.opacity) + "%", 1)
            ])
          ])) : Ie("", !0)
        ], 512), [
          [Ds, s.value === "appearance"]
        ]),
        _t(d("div", od, [
          d("div", rd, [
            d("div", ld, [
              d("div", ad, K(y(L)("Default Volume")), 1)
            ]),
            d("div", cd, [
              d("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: y(t).settings.volume,
                onInput: f
              }, null, 40, ud),
              d("span", fd, K(y(t).settings.volume), 1)
            ])
          ]),
          d("div", dd, [
            d("div", hd, [
              d("div", pd, K(y(L)("Default Play Mode")), 1)
            ]),
            d("div", gd, [
              (M(), O(se, null, Be(a, (C) => d("div", {
                key: C.value,
                class: pe(["stmp-chip", { active: y(t).settings.playMode === C.value }]),
                onClick: (k) => y(t).setPlayMode(C.value)
              }, [
                d("i", {
                  class: pe(C.icon)
                }, null, 2),
                d("span", null, K(C.label), 1)
              ], 10, md)), 64))
            ])
          ])
        ], 512), [
          [Ds, s.value === "playback"]
        ]),
        _t(d("div", vd, [
          d("div", yd, [
            d("div", _d, [
              d("div", bd, K(y(L)("Auto-play on new cue")), 1),
              d("div", xd, K(y(L)("Automatically play when a new song cue is detected")), 1)
            ]),
            te(Dn, {
              "model-value": y(t).settings.autoPlayOnNewCue,
              "onUpdate:modelValue": _[0] || (_[0] = (C) => {
                y(t).settings.autoPlayOnNewCue = C, y(t).save();
              })
            }, null, 8, ["model-value"])
          ]),
          _[6] || (_[6] = d("div", { class: "stmp-divider" }, null, -1)),
          d("div", wd, K(y(L)("Providers")), 1),
          d("div", Sd, K(y(L)("Enable or disable music sources")), 1),
          (M(!0), O(se, null, Be(y(t).settings.providers, (C) => (M(), O("div", {
            key: C.id
          }, [
            d("div", Cd, [
              d("div", Td, [
                d("div", Id, K(c[C.id] || C.id), 1)
              ]),
              te(Dn, {
                "model-value": C.enabled,
                "onUpdate:modelValue": () => p(C.id)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ]),
            C.id === "custom" && C.enabled ? (M(), O("div", Ed, [
              _t(d("input", {
                class: "text_pole",
                "onUpdate:modelValue": (k) => C.config.searchURL = k,
                placeholder: y(L)("Search URL"),
                onChange: _[1] || (_[1] = (k) => y(t).save())
              }, null, 40, Ad), [
                [js, C.config.searchURL]
              ]),
              _t(d("input", {
                class: "text_pole",
                "onUpdate:modelValue": (k) => C.config.resolveURL = k,
                placeholder: y(L)("Resolve URL"),
                onChange: _[2] || (_[2] = (k) => y(t).save())
              }, null, 40, kd), [
                [js, C.config.resolveURL]
              ])
            ])) : Ie("", !0)
          ]))), 128)),
          _[7] || (_[7] = d("div", { class: "stmp-divider" }, null, -1)),
          d("div", Md, K(y(L)("Custom Cue Rules (Regex)")), 1),
          d("div", Rd, K(y(L)("Additional regex patterns to detect song cues in chat")), 1),
          d("div", Pd, [
            (M(!0), O(se, null, Be(y(t).settings.customCueRules, (C, k) => (M(), O("div", {
              key: k,
              class: "stmp-rule"
            }, [
              d("code", null, K(C), 1),
              d("div", {
                class: "menu_button menu_button_icon stmp-rule-del",
                onClick: (B) => T(k)
              }, [..._[4] || (_[4] = [
                d("i", { class: "fa-solid fa-xmark" }, null, -1)
              ])], 8, Ld)
            ]))), 128))
          ]),
          d("div", $d, [
            _t(d("input", {
              "onUpdate:modelValue": _[3] || (_[3] = (C) => m.value = C),
              class: "text_pole",
              placeholder: y(L)("Add regex rule..."),
              onKeydown: Rr(v, ["enter"])
            }, null, 40, Od), [
              [js, m.value]
            ]),
            d("div", {
              class: "menu_button menu_button_icon stmp-rule-add-btn",
              onClick: v
            }, [..._[5] || (_[5] = [
              d("i", { class: "fa-solid fa-plus" }, null, -1)
            ])])
          ])
        ], 512), [
          [Ds, s.value === "ai"]
        ]),
        _t(d("div", Dd, [
          d("div", Nd, K(y(L)("Data")), 1),
          d("div", Fd, [
            d("div", Ud, [
              d("div", Hd, K(y(L)("Export data")), 1),
              d("div", Vd, K(y(L)("Save your settings to a JSON file")), 1)
            ]),
            d("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: I
            }, [..._[8] || (_[8] = [
              d("i", { class: "fa-solid fa-file-export" }, null, -1)
            ])])
          ]),
          d("div", jd, [
            d("div", Bd, [
              d("div", Wd, K(y(L)("Import data")), 1),
              d("div", Kd, K(y(L)("Load settings from a JSON file")), 1)
            ]),
            d("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: z
            }, [..._[9] || (_[9] = [
              d("i", { class: "fa-solid fa-file-import" }, null, -1)
            ])])
          ]),
          _[14] || (_[14] = d("div", { class: "stmp-divider" }, null, -1)),
          d("div", zd, [
            _[11] || (_[11] = d("div", { class: "stmp-about-icon" }, [
              d("i", { class: "fa-solid fa-music" })
            ], -1)),
            _[12] || (_[12] = d("div", { class: "stmp-about-name" }, "ST-Music-Player", -1)),
            d("div", Jd, K(y(L)("Version")) + " " + K(qd), 1),
            d("div", Gd, K(y(L)("A floating music player extension for SillyTavern")), 1),
            d("a", {
              href: Yd,
              target: "_blank",
              rel: "noopener",
              class: "stmp-about-link"
            }, [..._[10] || (_[10] = [
              d("i", { class: "fa-brands fa-github" }, null, -1),
              d("span", null, "GitHub", -1)
            ])]),
            _[13] || (_[13] = d("div", { class: "stmp-about-copyright" }, "© 2024-2026 ST-Music-Player", -1))
          ])
        ], 512), [
          [Ds, s.value === "general"]
        ])
      ])
    ]));
  }
}), Zd = /* @__PURE__ */ Et(Xd, [["__scopeId", "data-v-9c6107fb"]]);
class Qd {
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
    const t = SillyTavern.getContext(), s = t.eventSource, n = t.event_types, i = (o, r, l) => {
      const a = (...f) => {
        const c = l(f[0]);
        this.emit(r, c);
      };
      s.on(o, a), this.registered.push({ event: o, handler: a });
    };
    i(n.CHAT_CHANGED, "chat-changed", (o) => ({
      chatId: typeof o == "string" ? o : void 0
    })), i(n.GENERATION_ENDED, "message-generated", (o) => ({
      messageId: Fs(o)
    })), i(n.MESSAGE_UPDATED, "message-updated", (o) => ({
      messageId: Fs(o)
    })), i(n.MESSAGE_DELETED, "message-deleted", (o) => ({
      messageId: Fs(o)
    })), i(n.MESSAGE_SWIPED, "message-swiped", (o) => ({
      messageId: Fs(o)
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
        } catch (o) {
          console.error("[STEventBridge] listener error:", o);
        }
  }
}
function Fs(e) {
  if (e == null) return;
  const t = typeof e == "number" ? e : parseInt(String(e), 10);
  return Number.isFinite(t) ? t : void 0;
}
function eh() {
  return new Qd();
}
const th = [
  /<bgm>当前bgm[:：](.+?) - (.+?)<\/bgm>/g,
  /<bgm>当前bgm[:：](.+?)<\/bgm>/g,
  /<bgm>(.+?) - (.+?)<\/bgm>/g,
  /<bgm>(.+?)<\/bgm>/g,
  /【BGM】(.+?)(?: - (.+?))?【\/BGM】/g,
  /\[music\](.+?)(?: - (.+?))?\[\/music\]/g
];
function po(e, t) {
  const s = [], n = new RegExp(e.source, "g");
  let i;
  for (; (i = n.exec(t)) !== null; ) {
    i.index === n.lastIndex && n.lastIndex++;
    const o = i[1];
    if (o === void 0 || o === "") continue;
    const r = i[2], l = {
      song: o.trim(),
      artist: r !== void 0 && r !== "" ? r.trim() : void 0,
      raw: i[0]
    };
    s.push({ index: i.index, cue: l });
  }
  return s;
}
function go(e, t = []) {
  const s = /* @__PURE__ */ new Map(), n = (i) => {
    s.has(i.index) || s.set(i.index, i);
  };
  for (const i of th)
    for (const o of po(i, e)) n(o);
  for (const i of t)
    try {
      const o = new RegExp(i, "g");
      for (const r of po(o, e)) n(r);
    } catch {
    }
  return [...s.values()].sort((i, o) => i.index - o.index).map((i) => i.cue);
}
class sh {
  constructor(t) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = t;
  }
  scanIncremental(t, s, n, i = []) {
    const o = [];
    for (let r = s; r <= n; r++) {
      const l = this.getChatMessage(r);
      if (l === void 0) continue;
      const a = go(l, i);
      if (a.length === 0) continue;
      const f = a.at(-1);
      o.push({ messageId: r, cues: [f] });
    }
    return this.cursors.set(t, {
      chatId: t,
      lastScannedMessageId: n,
      updatedAt: Date.now()
    }), o;
  }
  scanMessage(t, s, n = []) {
    const i = this.getChatMessage(s);
    if (i === void 0)
      return { messageId: s, cue: null };
    const o = go(i, n), r = o.length > 0 ? o.at(-1) : null;
    return { messageId: s, cue: r };
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
const nh = `
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
function ih() {
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(nh), _s = e.children(".inline-drawer").last()[0] ?? null, !_s)) return;
  const t = _s.querySelector("#stmp-settings-mount");
  t && en && (qt = Pr(Zd), qt.use(en), qt.mount(t));
}
function oh() {
  qt && (qt.unmount(), qt = null), _s?.remove(), _s = null;
}
function rh(e, t, s) {
  ut = eh(), ut.on("chat-changed", () => {
    const n = SillyTavern.getContext(), i = n.chatId ?? String(Date.now());
    if (t.setChatId(i), t.getCursor() < 0 && n.chat.length > 0) {
      const o = e.scanIncremental(
        i,
        0,
        n.chat.length - 1,
        s.settings.customCueRules
      );
      t.handleNewCues(o), t.setCursor(n.chat.length - 1);
    }
  }), ut.on("message-generated", (n) => {
    const i = SillyTavern.getContext(), o = t.chatId ?? i.chatId ?? "";
    if (!o || n.messageId === void 0) return;
    const r = t.getCursor() + 1, l = n.messageId;
    if (l < r) return;
    const a = e.scanIncremental(
      o,
      r,
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
function lh(e, t, s) {
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
async function uh() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.documentElement.appendChild(e);
    const t = xc();
    en = t, Gt = Pr(If), Gt.use(t), Gt.mount(e);
    const s = Me(), n = Rc();
    s.init(n);
    const i = Nt();
    i.init(), i.setVolume(s.settings.volume);
    const o = new sh((a) => SillyTavern.getContext().chat[a]?.mes), r = Xt();
    r.init(o), ih();
    const l = SillyTavern.getContext();
    ys = () => {
      rh(o, r, s), lh(o, r, s);
    }, l.eventSource.on(l.event_types.APP_READY, ys), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function Fr() {
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
  e && e.remove(), oh(), en = null;
}
function fh() {
  Fr();
}
async function ah() {
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
async function dh() {
  await ah(), Fr();
}
export {
  ah as clean,
  dh as delete,
  Fr as destroy,
  fh as disable,
  uh as init
};
