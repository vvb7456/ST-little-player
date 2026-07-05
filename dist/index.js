/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function vn(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const s of t.split(",")) e[s] = 1;
  return (s) => s in e;
}
const Z = {}, be = [], jt = () => {
}, Cr = () => !1, Ts = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Ps = (t) => t.startsWith("onUpdate:"), dt = Object.assign, yn = (t, e) => {
  const s = t.indexOf(e);
  s > -1 && t.splice(s, 1);
}, Ji = Object.prototype.hasOwnProperty, Y = (t, e) => Ji.call(t, e), U = Array.isArray, xe = (t) => rs(t) === "[object Map]", Ir = (t) => rs(t) === "[object Set]", Fn = (t) => rs(t) === "[object Date]", F = (t) => typeof t == "function", st = (t) => typeof t == "string", It = (t) => typeof t == "symbol", X = (t) => t !== null && typeof t == "object", Er = (t) => (X(t) || F(t)) && F(t.then) && F(t.catch), Tr = Object.prototype.toString, rs = (t) => Tr.call(t), Gi = (t) => rs(t).slice(8, -1), Pr = (t) => rs(t) === "[object Object]", Rs = (t) => st(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, je = /* @__PURE__ */ vn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ms = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (s) => e[s] || (e[s] = t(s));
}, Yi = /-\w/g, Et = Ms(
  (t) => t.replace(Yi, (e) => e.slice(1).toUpperCase())
), qi = /\B([A-Z])/g, ie = Ms(
  (t) => t.replace(qi, "-$1").toLowerCase()
), Rr = Ms((t) => t.charAt(0).toUpperCase() + t.slice(1)), Hs = Ms(
  (t) => t ? `on${Rr(t)}` : ""
), Nt = (t, e) => !Object.is(t, e), ms = (t, ...e) => {
  for (let s = 0; s < t.length; s++)
    t[s](...e);
}, Mr = (t, e, s, n = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, _n = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Nn;
const As = () => Nn || (Nn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function bn(t) {
  if (U(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++) {
      const n = t[s], r = st(n) ? Qi(n) : bn(n);
      if (r)
        for (const i in r)
          e[i] = r[i];
    }
    return e;
  } else if (st(t) || X(t))
    return t;
}
const Xi = /;(?![^(]*\))/g, zi = /:([^]+)/, Zi = /\/\*[^]*?\*\//g;
function Qi(t) {
  const e = {};
  return t.replace(Zi, "").split(Xi).forEach((s) => {
    if (s) {
      const n = s.split(zi);
      n.length > 1 && (e[n[0].trim()] = n[1].trim());
    }
  }), e;
}
function he(t) {
  let e = "";
  if (st(t))
    e = t;
  else if (U(t))
    for (let s = 0; s < t.length; s++) {
      const n = he(t[s]);
      n && (e += n + " ");
    }
  else if (X(t))
    for (const s in t)
      t[s] && (e += s + " ");
  return e.trim();
}
const to = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", eo = /* @__PURE__ */ vn(to);
function Ar(t) {
  return !!t || t === "";
}
function so(t, e) {
  if (t.length !== e.length) return !1;
  let s = !0;
  for (let n = 0; s && n < t.length; n++)
    s = xn(t[n], e[n]);
  return s;
}
function xn(t, e) {
  if (t === e) return !0;
  let s = Fn(t), n = Fn(e);
  if (s || n)
    return s && n ? t.getTime() === e.getTime() : !1;
  if (s = It(t), n = It(e), s || n)
    return t === e;
  if (s = U(t), n = U(e), s || n)
    return s && n ? so(t, e) : !1;
  if (s = X(t), n = X(e), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(t).length, i = Object.keys(e).length;
    if (r !== i)
      return !1;
    for (const o in t) {
      const l = t.hasOwnProperty(o), c = e.hasOwnProperty(o);
      if (l && !c || !l && c || !xn(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const Lr = (t) => !!(t && t.__v_isRef === !0), et = (t) => st(t) ? t : t == null ? "" : U(t) || X(t) && (t.toString === Tr || !F(t.toString)) ? Lr(t) ? et(t.value) : JSON.stringify(t, Or, 2) : String(t), Or = (t, e) => Lr(e) ? Or(t, e.value) : xe(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (s, [n, r], i) => (s[Bs(n, i) + " =>"] = r, s),
    {}
  )
} : Ir(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((s) => Bs(s))
} : It(e) ? Bs(e) : X(e) && !U(e) && !Pr(e) ? String(e) : e, Bs = (t, e = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    It(t) ? `Symbol(${(s = t.description) != null ? s : e})` : t
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let at;
class $r {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && at && (at.active ? (this.parent = at, this.index = (at.scopes || (at.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, s;
      if (this.scopes)
        for (e = 0, s = this.scopes.length; e < s; e++)
          this.scopes[e].pause();
      for (e = 0, s = this.effects.length; e < s; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, s;
      if (this.scopes)
        for (e = 0, s = this.scopes.length; e < s; e++)
          this.scopes[e].resume();
      for (e = 0, s = this.effects.length; e < s; e++)
        this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const s = at;
      try {
        return at = this, e();
      } finally {
        at = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = at, at = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (at === this)
        at = this.prevScope;
      else {
        let e = at;
        for (; e; ) {
          if (e.prevScope === this) {
            e.prevScope = this.prevScope;
            break;
          }
          e = e.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(e) {
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
      if (!this.detached && this.parent && !e) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Dr(t) {
  return new $r(t);
}
function Ur() {
  return at;
}
function no(t, e = !1) {
  at && at.cleanups.push(t);
}
let tt;
const Ws = /* @__PURE__ */ new WeakSet();
class kr {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, at && (at.active ? at.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ws.has(this) && (Ws.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Nr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, jn(this), jr(this);
    const e = tt, s = Tt;
    tt = this, Tt = !0;
    try {
      return this.fn();
    } finally {
      Kr(this), tt = e, Tt = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        Cn(e);
      this.deps = this.depsTail = void 0, jn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ws.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    nn(this) && this.run();
  }
  get dirty() {
    return nn(this);
  }
}
let Fr = 0, Ke, Ve;
function Nr(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = Ve, Ve = t;
    return;
  }
  t.next = Ke, Ke = t;
}
function Sn() {
  Fr++;
}
function wn() {
  if (--Fr > 0)
    return;
  if (Ve) {
    let e = Ve;
    for (Ve = void 0; e; ) {
      const s = e.next;
      e.next = void 0, e.flags &= -9, e = s;
    }
  }
  let t;
  for (; Ke; ) {
    let e = Ke;
    for (Ke = void 0; e; ) {
      const s = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (n) {
          t || (t = n);
        }
      e = s;
    }
  }
  if (t) throw t;
}
function jr(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Kr(t) {
  let e, s = t.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Cn(n), ro(n)) : e = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  t.deps = e, t.depsTail = s;
}
function nn(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Vr(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function Vr(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Ze) || (t.globalVersion = Ze, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !nn(t))))
    return;
  t.flags |= 2;
  const e = t.dep, s = tt, n = Tt;
  tt = t, Tt = !0;
  try {
    jr(t);
    const r = t.fn(t._value);
    (e.version === 0 || Nt(r, t._value)) && (t.flags |= 128, t._value = r, e.version++);
  } catch (r) {
    throw e.version++, r;
  } finally {
    tt = s, Tt = n, Kr(t), t.flags &= -3;
  }
}
function Cn(t, e = !1) {
  const { dep: s, prevSub: n, nextSub: r } = t;
  if (n && (n.nextSub = r, t.prevSub = void 0), r && (r.prevSub = n, t.nextSub = void 0), s.subs === t && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Cn(i, !0);
  }
  !e && !--s.sc && s.map && s.map.delete(s.key);
}
function ro(t) {
  const { prevDep: e, nextDep: s } = t;
  e && (e.nextDep = s, t.prevDep = void 0), s && (s.prevDep = e, t.nextDep = void 0);
}
let Tt = !0;
const Hr = [];
function Vt() {
  Hr.push(Tt), Tt = !1;
}
function Ht() {
  const t = Hr.pop();
  Tt = t === void 0 ? !0 : t;
}
function jn(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const s = tt;
    tt = void 0;
    try {
      e();
    } finally {
      tt = s;
    }
  }
}
let Ze = 0;
class io {
  constructor(e, s) {
    this.sub = e, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class In {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!tt || !Tt || tt === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== tt)
      s = this.activeLink = new io(tt, this), tt.deps ? (s.prevDep = tt.depsTail, tt.depsTail.nextDep = s, tt.depsTail = s) : tt.deps = tt.depsTail = s, Br(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = tt.depsTail, s.nextDep = void 0, tt.depsTail.nextDep = s, tt.depsTail = s, tt.deps === s && (tt.deps = n);
    }
    return s;
  }
  trigger(e) {
    this.version++, Ze++, this.notify(e);
  }
  notify(e) {
    Sn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      wn();
    }
  }
}
function Br(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let n = e.deps; n; n = n.nextDep)
        Br(n);
    }
    const s = t.dep.subs;
    s !== t && (t.prevSub = s, s && (s.nextSub = t)), t.dep.subs = t;
  }
}
const ys = /* @__PURE__ */ new WeakMap(), fe = /* @__PURE__ */ Symbol(
  ""
), rn = /* @__PURE__ */ Symbol(
  ""
), Qe = /* @__PURE__ */ Symbol(
  ""
);
function ht(t, e, s) {
  if (Tt && tt) {
    let n = ys.get(t);
    n || ys.set(t, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new In()), r.map = n, r.key = s), r.track();
  }
}
function Yt(t, e, s, n, r, i) {
  const o = ys.get(t);
  if (!o) {
    Ze++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Sn(), e === "clear")
    o.forEach(l);
  else {
    const c = U(t), d = c && Rs(s);
    if (c && s === "length") {
      const u = Number(n);
      o.forEach((h, _) => {
        (_ === "length" || _ === Qe || !It(_) && _ >= u) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(Qe)), e) {
        case "add":
          c ? d && l(o.get("length")) : (l(o.get(fe)), xe(t) && l(o.get(rn)));
          break;
        case "delete":
          c || (l(o.get(fe)), xe(t) && l(o.get(rn)));
          break;
        case "set":
          xe(t) && l(o.get(fe));
          break;
      }
  }
  wn();
}
function oo(t, e) {
  const s = ys.get(t);
  return s && s.get(e);
}
function ge(t) {
  const e = /* @__PURE__ */ G(t);
  return e === t ? e : (ht(e, "iterate", Qe), /* @__PURE__ */ St(t) ? e : e.map(Pt));
}
function Ls(t) {
  return ht(t = /* @__PURE__ */ G(t), "iterate", Qe), t;
}
function kt(t, e) {
  return /* @__PURE__ */ Zt(t) ? Ee(/* @__PURE__ */ Xt(t) ? Pt(e) : e) : Pt(e);
}
const lo = {
  __proto__: null,
  [Symbol.iterator]() {
    return Js(this, Symbol.iterator, (t) => kt(this, t));
  },
  concat(...t) {
    return ge(this).concat(
      ...t.map((e) => U(e) ? ge(e) : e)
    );
  },
  entries() {
    return Js(this, "entries", (t) => (t[1] = kt(this, t[1]), t));
  },
  every(t, e) {
    return Bt(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return Bt(
      this,
      "filter",
      t,
      e,
      (s) => s.map((n) => kt(this, n)),
      arguments
    );
  },
  find(t, e) {
    return Bt(
      this,
      "find",
      t,
      e,
      (s) => kt(this, s),
      arguments
    );
  },
  findIndex(t, e) {
    return Bt(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return Bt(
      this,
      "findLast",
      t,
      e,
      (s) => kt(this, s),
      arguments
    );
  },
  findLastIndex(t, e) {
    return Bt(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return Bt(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return Gs(this, "includes", t);
  },
  indexOf(...t) {
    return Gs(this, "indexOf", t);
  },
  join(t) {
    return ge(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return Gs(this, "lastIndexOf", t);
  },
  map(t, e) {
    return Bt(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return $e(this, "pop");
  },
  push(...t) {
    return $e(this, "push", t);
  },
  reduce(t, ...e) {
    return Kn(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Kn(this, "reduceRight", t, e);
  },
  shift() {
    return $e(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return Bt(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return $e(this, "splice", t);
  },
  toReversed() {
    return ge(this).toReversed();
  },
  toSorted(t) {
    return ge(this).toSorted(t);
  },
  toSpliced(...t) {
    return ge(this).toSpliced(...t);
  },
  unshift(...t) {
    return $e(this, "unshift", t);
  },
  values() {
    return Js(this, "values", (t) => kt(this, t));
  }
};
function Js(t, e, s) {
  const n = Ls(t), r = n[e]();
  return n !== t && !/* @__PURE__ */ St(t) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const co = Array.prototype;
function Bt(t, e, s, n, r, i) {
  const o = Ls(t), l = o !== t && !/* @__PURE__ */ St(t), c = o[e];
  if (c !== co[e]) {
    const h = c.apply(t, i);
    return l ? Pt(h) : h;
  }
  let d = s;
  o !== t && (l ? d = function(h, _) {
    return s.call(this, kt(t, h), _, t);
  } : s.length > 2 && (d = function(h, _) {
    return s.call(this, h, _, t);
  }));
  const u = c.call(o, d, n);
  return l && r ? r(u) : u;
}
function Kn(t, e, s, n) {
  const r = Ls(t), i = r !== t && !/* @__PURE__ */ St(t);
  let o = s, l = !1;
  r !== t && (i ? (l = n.length === 0, o = function(d, u, h) {
    return l && (l = !1, d = kt(t, d)), s.call(this, d, kt(t, u), h, t);
  }) : s.length > 3 && (o = function(d, u, h) {
    return s.call(this, d, u, h, t);
  }));
  const c = r[e](o, ...n);
  return l ? kt(t, c) : c;
}
function Gs(t, e, s) {
  const n = /* @__PURE__ */ G(t);
  ht(n, "iterate", Qe);
  const r = n[e](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ $s(s[0]) ? (s[0] = /* @__PURE__ */ G(s[0]), n[e](...s)) : r;
}
function $e(t, e, s = []) {
  Vt(), Sn();
  const n = (/* @__PURE__ */ G(t))[e].apply(t, s);
  return wn(), Ht(), n;
}
const ao = /* @__PURE__ */ vn("__proto__,__v_isRef,__isVue"), Wr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(It)
);
function uo(t) {
  It(t) || (t = String(t));
  const e = /* @__PURE__ */ G(this);
  return ht(e, "has", t), e.hasOwnProperty(t);
}
class Jr {
  constructor(e = !1, s = !1) {
    this._isReadonly = e, this._isShallow = s;
  }
  get(e, s, n) {
    if (s === "__v_skip") return e.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (r ? i ? xo : Xr : i ? qr : Yr).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
    const o = U(e);
    if (!r) {
      let c;
      if (o && (c = lo[s]))
        return c;
      if (s === "hasOwnProperty")
        return uo;
    }
    const l = Reflect.get(
      e,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ nt(e) ? e : n
    );
    if ((It(s) ? Wr.has(s) : ao(s)) || (r || ht(e, "get", s), i))
      return l;
    if (/* @__PURE__ */ nt(l)) {
      const c = o && Rs(s) ? l : l.value;
      return r && X(c) ? /* @__PURE__ */ ln(c) : c;
    }
    return X(l) ? r ? /* @__PURE__ */ ln(l) : /* @__PURE__ */ Os(l) : l;
  }
}
class Gr extends Jr {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, s, n, r) {
    let i = e[s];
    const o = U(e) && Rs(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Zt(i);
      if (!/* @__PURE__ */ St(n) && !/* @__PURE__ */ Zt(n) && (i = /* @__PURE__ */ G(i), n = /* @__PURE__ */ G(n)), !o && /* @__PURE__ */ nt(i) && !/* @__PURE__ */ nt(n))
        return d || (i.value = n), !0;
    }
    const l = o ? Number(s) < e.length : Y(e, s), c = Reflect.set(
      e,
      s,
      n,
      /* @__PURE__ */ nt(e) ? e : r
    );
    return e === /* @__PURE__ */ G(r) && c && (l ? Nt(n, i) && Yt(e, "set", s, n) : Yt(e, "add", s, n)), c;
  }
  deleteProperty(e, s) {
    const n = Y(e, s);
    e[s];
    const r = Reflect.deleteProperty(e, s);
    return r && n && Yt(e, "delete", s, void 0), r;
  }
  has(e, s) {
    const n = Reflect.has(e, s);
    return (!It(s) || !Wr.has(s)) && ht(e, "has", s), n;
  }
  ownKeys(e) {
    return ht(
      e,
      "iterate",
      U(e) ? "length" : fe
    ), Reflect.ownKeys(e);
  }
}
class fo extends Jr {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, s) {
    return !0;
  }
  deleteProperty(e, s) {
    return !0;
  }
}
const ho = /* @__PURE__ */ new Gr(), po = /* @__PURE__ */ new fo(), go = /* @__PURE__ */ new Gr(!0);
const on = (t) => t, fs = (t) => Reflect.getPrototypeOf(t);
function mo(t, e, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ G(r), o = xe(i), l = t === "entries" || t === Symbol.iterator && o, c = t === "keys" && o, d = r[t](...n), u = s ? on : e ? Ee : Pt;
    return !e && ht(
      i,
      "iterate",
      c ? rn : fe
    ), dt(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: _ } = d.next();
          return _ ? { value: h, done: _ } : {
            value: l ? [u(h[0]), u(h[1])] : u(h),
            done: _
          };
        }
      }
    );
  };
}
function ds(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function vo(t, e) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ G(i), l = /* @__PURE__ */ G(r);
      t || (Nt(r, l) && ht(o, "get", r), ht(o, "get", l));
      const { has: c } = fs(o), d = e ? on : t ? Ee : Pt;
      if (c.call(o, r))
        return d(i.get(r));
      if (c.call(o, l))
        return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !t && ht(/* @__PURE__ */ G(r), "iterate", fe), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ G(i), l = /* @__PURE__ */ G(r);
      return t || (Nt(r, l) && ht(o, "has", r), ht(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ G(l), d = e ? on : t ? Ee : Pt;
      return !t && ht(c, "iterate", fe), l.forEach((u, h) => r.call(i, d(u), d(h), o));
    }
  };
  return dt(
    s,
    t ? {
      add: ds("add"),
      set: ds("set"),
      delete: ds("delete"),
      clear: ds("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ G(this), o = fs(i), l = /* @__PURE__ */ G(r), c = !e && !/* @__PURE__ */ St(r) && !/* @__PURE__ */ Zt(r) ? l : r;
        return o.has.call(i, c) || Nt(r, c) && o.has.call(i, r) || Nt(l, c) && o.has.call(i, l) || (i.add(c), Yt(i, "add", c, c)), this;
      },
      set(r, i) {
        !e && !/* @__PURE__ */ St(i) && !/* @__PURE__ */ Zt(i) && (i = /* @__PURE__ */ G(i));
        const o = /* @__PURE__ */ G(this), { has: l, get: c } = fs(o);
        let d = l.call(o, r);
        d || (r = /* @__PURE__ */ G(r), d = l.call(o, r));
        const u = c.call(o, r);
        return o.set(r, i), d ? Nt(i, u) && Yt(o, "set", r, i) : Yt(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ G(this), { has: o, get: l } = fs(i);
        let c = o.call(i, r);
        c || (r = /* @__PURE__ */ G(r), c = o.call(i, r)), l && l.call(i, r);
        const d = i.delete(r);
        return c && Yt(i, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ G(this), i = r.size !== 0, o = r.clear();
        return i && Yt(
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
    s[r] = mo(r, t, e);
  }), s;
}
function En(t, e) {
  const s = vo(t, e);
  return (n, r, i) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? n : Reflect.get(
    Y(s, r) && r in n ? s : n,
    r,
    i
  );
}
const yo = {
  get: /* @__PURE__ */ En(!1, !1)
}, _o = {
  get: /* @__PURE__ */ En(!1, !0)
}, bo = {
  get: /* @__PURE__ */ En(!0, !1)
};
const Yr = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), xo = /* @__PURE__ */ new WeakMap();
function So(t) {
  switch (t) {
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
function Os(t) {
  return /* @__PURE__ */ Zt(t) ? t : Tn(
    t,
    !1,
    ho,
    yo,
    Yr
  );
}
// @__NO_SIDE_EFFECTS__
function wo(t) {
  return Tn(
    t,
    !1,
    go,
    _o,
    qr
  );
}
// @__NO_SIDE_EFFECTS__
function ln(t) {
  return Tn(
    t,
    !0,
    po,
    bo,
    Xr
  );
}
function Tn(t, e, s, n, r) {
  if (!X(t) || t.__v_raw && !(e && t.__v_isReactive) || t.__v_skip || !Object.isExtensible(t))
    return t;
  const i = r.get(t);
  if (i)
    return i;
  const o = So(Gi(t));
  if (o === 0)
    return t;
  const l = new Proxy(
    t,
    o === 2 ? n : s
  );
  return r.set(t, l), l;
}
// @__NO_SIDE_EFFECTS__
function Xt(t) {
  return /* @__PURE__ */ Zt(t) ? /* @__PURE__ */ Xt(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Zt(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function St(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function $s(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function G(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ G(e) : t;
}
function Pn(t) {
  return !Y(t, "__v_skip") && Object.isExtensible(t) && Mr(t, "__v_skip", !0), t;
}
const Pt = (t) => X(t) ? /* @__PURE__ */ Os(t) : t, Ee = (t) => X(t) ? /* @__PURE__ */ ln(t) : t;
// @__NO_SIDE_EFFECTS__
function nt(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Kt(t) {
  return Co(t, !1);
}
function Co(t, e) {
  return /* @__PURE__ */ nt(t) ? t : new Io(t, e);
}
class Io {
  constructor(e, s) {
    this.dep = new In(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? e : /* @__PURE__ */ G(e), this._value = s ? e : Pt(e), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ St(e) || /* @__PURE__ */ Zt(e);
    e = n ? e : /* @__PURE__ */ G(e), Nt(e, s) && (this._rawValue = e, this._value = n ? e : Pt(e), this.dep.trigger());
  }
}
function H(t) {
  return /* @__PURE__ */ nt(t) ? t.value : t;
}
const Eo = {
  get: (t, e, s) => e === "__v_raw" ? t : H(Reflect.get(t, e, s)),
  set: (t, e, s, n) => {
    const r = t[e];
    return /* @__PURE__ */ nt(r) && !/* @__PURE__ */ nt(s) ? (r.value = s, !0) : Reflect.set(t, e, s, n);
  }
};
function zr(t) {
  return /* @__PURE__ */ Xt(t) ? t : new Proxy(t, Eo);
}
// @__NO_SIDE_EFFECTS__
function To(t) {
  const e = U(t) ? new Array(t.length) : {};
  for (const s in t)
    e[s] = Ro(t, s);
  return e;
}
class Po {
  constructor(e, s, n) {
    this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = It(s) ? s : String(s), this._raw = /* @__PURE__ */ G(e);
    let r = !0, i = e;
    if (!U(e) || It(this._key) || !Rs(this._key))
      do
        r = !/* @__PURE__ */ $s(i) || /* @__PURE__ */ St(i);
      while (r && (i = i.__v_raw));
    this._shallow = r;
  }
  get value() {
    let e = this._object[this._key];
    return this._shallow && (e = H(e)), this._value = e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    if (this._shallow && /* @__PURE__ */ nt(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ nt(s)) {
        s.value = e;
        return;
      }
    }
    this._object[this._key] = e;
  }
  get dep() {
    return oo(this._raw, this._key);
  }
}
function Ro(t, e, s) {
  return new Po(t, e, s);
}
class Mo {
  constructor(e, s, n) {
    this.fn = e, this.setter = s, this._value = void 0, this.dep = new In(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ze - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    tt !== this)
      return Nr(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return Vr(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function Ao(t, e, s = !1) {
  let n, r;
  return F(t) ? n = t : (n = t.get, r = t.set), new Mo(n, r, s);
}
const hs = {}, _s = /* @__PURE__ */ new WeakMap();
let ue;
function Lo(t, e = !1, s = ue) {
  if (s) {
    let n = _s.get(s);
    n || _s.set(s, n = []), n.push(t);
  }
}
function Oo(t, e, s = Z) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = s, d = (w) => r ? w : /* @__PURE__ */ St(w) || r === !1 || r === 0 ? qt(w, 1) : qt(w);
  let u, h, _, b, I = !1, x = !1;
  if (/* @__PURE__ */ nt(t) ? (h = () => t.value, I = /* @__PURE__ */ St(t)) : /* @__PURE__ */ Xt(t) ? (h = () => d(t), I = !0) : U(t) ? (x = !0, I = t.some((w) => /* @__PURE__ */ Xt(w) || /* @__PURE__ */ St(w)), h = () => t.map((w) => {
    if (/* @__PURE__ */ nt(w))
      return w.value;
    if (/* @__PURE__ */ Xt(w))
      return d(w);
    if (F(w))
      return c ? c(w, 2) : w();
  })) : F(t) ? e ? h = c ? () => c(t, 2) : t : h = () => {
    if (_) {
      Vt();
      try {
        _();
      } finally {
        Ht();
      }
    }
    const w = ue;
    ue = u;
    try {
      return c ? c(t, 3, [b]) : t(b);
    } finally {
      ue = w;
    }
  } : h = jt, e && r) {
    const w = h, j = r === !0 ? 1 / 0 : r;
    h = () => qt(w(), j);
  }
  const A = Ur(), O = () => {
    u.stop(), A && A.active && yn(A.effects, u);
  };
  if (i && e) {
    const w = e;
    e = (...j) => {
      const ct = w(...j);
      return O(), ct;
    };
  }
  let M = x ? new Array(t.length).fill(hs) : hs;
  const P = (w) => {
    if (!(!(u.flags & 1) || !u.dirty && !w))
      if (e) {
        const j = u.run();
        if (w || r || I || (x ? j.some((ct, it) => Nt(ct, M[it])) : Nt(j, M))) {
          _ && _();
          const ct = ue;
          ue = u;
          try {
            const it = [
              j,
              // pass undefined as the old value when it's changed for the first time
              M === hs ? void 0 : x && M[0] === hs ? [] : M,
              b
            ];
            M = j, c ? c(e, 3, it) : (
              // @ts-expect-error
              e(...it)
            );
          } finally {
            ue = ct;
          }
        }
      } else
        u.run();
  };
  return l && l(P), u = new kr(h), u.scheduler = o ? () => o(P, !1) : P, b = (w) => Lo(w, !1, u), _ = u.onStop = () => {
    const w = _s.get(u);
    if (w) {
      if (c)
        c(w, 4);
      else
        for (const j of w) j();
      _s.delete(u);
    }
  }, e ? n ? P(!0) : M = u.run() : o ? o(P.bind(null, !0), !0) : u.run(), O.pause = u.pause.bind(u), O.resume = u.resume.bind(u), O.stop = O, O;
}
function qt(t, e = 1 / 0, s) {
  if (e <= 0 || !X(t) || t.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(t) || 0) >= e))
    return t;
  if (s.set(t, e), e--, /* @__PURE__ */ nt(t))
    qt(t.value, e, s);
  else if (U(t))
    for (let n = 0; n < t.length; n++)
      qt(t[n], e, s);
  else if (Ir(t) || xe(t))
    t.forEach((n) => {
      qt(n, e, s);
    });
  else if (Pr(t)) {
    for (const n in t)
      qt(t[n], e, s);
    for (const n of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, n) && qt(t[n], e, s);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function is(t, e, s, n) {
  try {
    return n ? t(...n) : t();
  } catch (r) {
    Ds(r, e, s);
  }
}
function Rt(t, e, s, n) {
  if (F(t)) {
    const r = is(t, e, s, n);
    return r && Er(r) && r.catch((i) => {
      Ds(i, e, s);
    }), r;
  }
  if (U(t)) {
    const r = [];
    for (let i = 0; i < t.length; i++)
      r.push(Rt(t[i], e, s, n));
    return r;
  }
}
function Ds(t, e, s, n = !0) {
  const r = e ? e.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = e && e.appContext.config || Z;
  if (e) {
    let l = e.parent;
    const c = e.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](t, c, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Vt(), is(i, null, 10, [
        t,
        c,
        d
      ]), Ht();
      return;
    }
  }
  $o(t, s, r, n, o);
}
function $o(t, e, s, n = !0, r = !1) {
  if (r)
    throw t;
  console.error(t);
}
const mt = [];
let Ut = -1;
const Se = [];
let se = null, ve = 0;
const Zr = /* @__PURE__ */ Promise.resolve();
let bs = null;
function Qr(t) {
  const e = bs || Zr;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Do(t) {
  let e = Ut + 1, s = mt.length;
  for (; e < s; ) {
    const n = e + s >>> 1, r = mt[n], i = ts(r);
    i < t || i === t && r.flags & 2 ? e = n + 1 : s = n;
  }
  return e;
}
function Rn(t) {
  if (!(t.flags & 1)) {
    const e = ts(t), s = mt[mt.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= ts(s) ? mt.push(t) : mt.splice(Do(e), 0, t), t.flags |= 1, ti();
  }
}
function ti() {
  bs || (bs = Zr.then(si));
}
function Uo(t) {
  U(t) ? Se.push(...t) : se && t.id === -1 ? se.splice(ve + 1, 0, t) : t.flags & 1 || (Se.push(t), t.flags |= 1), ti();
}
function Vn(t, e, s = Ut + 1) {
  for (; s < mt.length; s++) {
    const n = mt[s];
    if (n && n.flags & 2) {
      if (t && n.id !== t.uid)
        continue;
      mt.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function ei(t) {
  if (Se.length) {
    const e = [...new Set(Se)].sort(
      (s, n) => ts(s) - ts(n)
    );
    if (Se.length = 0, se) {
      se.push(...e);
      return;
    }
    for (se = e, ve = 0; ve < se.length; ve++) {
      const s = se[ve];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    se = null, ve = 0;
  }
}
const ts = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function si(t) {
  try {
    for (Ut = 0; Ut < mt.length; Ut++) {
      const e = mt[Ut];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), is(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Ut < mt.length; Ut++) {
      const e = mt[Ut];
      e && (e.flags &= -2);
    }
    Ut = -1, mt.length = 0, ei(), bs = null, (mt.length || Se.length) && si();
  }
}
let Ct = null, ni = null;
function xs(t) {
  const e = Ct;
  return Ct = t, ni = t && t.type.__scopeId || null, e;
}
function ko(t, e = Ct, s) {
  if (!e || t._n)
    return t;
  const n = (...r) => {
    n._d && Qn(-1);
    const i = xs(e);
    let o;
    try {
      o = t(...r);
    } finally {
      xs(i), n._d && Qn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ue(t, e) {
  if (Ct === null)
    return t;
  const s = Ns(Ct), n = t.dirs || (t.dirs = []);
  for (let r = 0; r < e.length; r++) {
    let [i, o, l, c = Z] = e[r];
    i && (F(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && qt(o), n.push({
      dir: i,
      instance: s,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return t;
}
function ce(t, e, s, n) {
  const r = t.dirs, i = e && e.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[n];
    c && (Vt(), Rt(c, s, 8, [
      t.el,
      l,
      t,
      e
    ]), Ht());
  }
}
function Fo(t, e) {
  if (vt) {
    let s = vt.provides;
    const n = vt.parent && vt.parent.provides;
    n === s && (s = vt.provides = Object.create(n)), s[t] = e;
  }
}
function He(t, e, s = !1) {
  const n = Li();
  if (n || de) {
    let r = de ? de._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && t in r)
      return r[t];
    if (arguments.length > 1)
      return s && F(e) ? e.call(n && n.proxy) : e;
  }
}
function No() {
  return !!(Li() || de);
}
const jo = /* @__PURE__ */ Symbol.for("v-scx"), Ko = () => He(jo);
function Be(t, e, s) {
  return ri(t, e, s);
}
function ri(t, e, s = Z) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = dt({}, s), c = e && n || !e && i !== "post";
  let d;
  if (ns) {
    if (i === "sync") {
      const b = Ko();
      d = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!c) {
      const b = () => {
      };
      return b.stop = jt, b.resume = jt, b.pause = jt, b;
    }
  }
  const u = vt;
  l.call = (b, I, x) => Rt(b, u, I, x);
  let h = !1;
  i === "post" ? l.scheduler = (b) => {
    yt(b, u && u.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (b, I) => {
    I ? b() : Rn(b);
  }), l.augmentJob = (b) => {
    e && (b.flags |= 4), h && (b.flags |= 2, u && (b.id = u.uid, b.i = u));
  };
  const _ = Oo(t, e, l);
  return ns && (d ? d.push(_) : c && _()), _;
}
function Vo(t, e, s) {
  const n = this.proxy, r = st(t) ? t.includes(".") ? ii(n, t) : () => n[t] : t.bind(n, n);
  let i;
  F(e) ? i = e : (i = e.handler, s = e);
  const o = os(this), l = ri(r, i.bind(n), s);
  return o(), l;
}
function ii(t, e) {
  const s = e.split(".");
  return () => {
    let n = t;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const Ho = /* @__PURE__ */ Symbol("_vte"), Bo = (t) => t.__isTeleport, Ys = /* @__PURE__ */ Symbol("_leaveCb");
function Mn(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, Mn(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
// @__NO_SIDE_EFFECTS__
function Pe(t, e) {
  return F(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    dt({ name: t.name }, e, { setup: t })
  ) : t;
}
function oi(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Hn(t, e) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(t, e)) && !s.configurable);
}
const Ss = /* @__PURE__ */ new WeakMap();
function We(t, e, s, n, r = !1) {
  if (U(t)) {
    t.forEach(
      (x, A) => We(
        x,
        e && (U(e) ? e[A] : e),
        s,
        n,
        r
      )
    );
    return;
  }
  if (Je(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && We(t, e, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Ns(n.component) : n.el, o = r ? null : i, { i: l, r: c } = t, d = e && e.r, u = l.refs === Z ? l.refs = {} : l.refs, h = l.setupState, _ = /* @__PURE__ */ G(h), b = h === Z ? Cr : (x) => Hn(u, x) ? !1 : Y(_, x), I = (x, A) => !(A && Hn(u, A));
  if (d != null && d !== c) {
    if (Bn(e), st(d))
      u[d] = null, b(d) && (h[d] = null);
    else if (/* @__PURE__ */ nt(d)) {
      const x = e;
      I(d, x.k) && (d.value = null), x.k && (u[x.k] = null);
    }
  }
  if (F(c)) {
    Vt();
    try {
      is(c, l, 12, [o, u]);
    } finally {
      Ht();
    }
  } else {
    const x = st(c), A = /* @__PURE__ */ nt(c);
    if (x || A) {
      const O = () => {
        if (t.f) {
          const M = x ? b(c) ? h[c] : u[c] : I() || !t.k ? c.value : u[t.k];
          if (r)
            U(M) && yn(M, i);
          else if (U(M))
            M.includes(i) || M.push(i);
          else if (x)
            u[c] = [i], b(c) && (h[c] = u[c]);
          else {
            const P = [i];
            I(c, t.k) && (c.value = P), t.k && (u[t.k] = P);
          }
        } else x ? (u[c] = o, b(c) && (h[c] = o)) : A && (I(c, t.k) && (c.value = o), t.k && (u[t.k] = o));
      };
      if (o) {
        const M = () => {
          O(), Ss.delete(t);
        };
        M.id = -1, Ss.set(t, M), yt(M, s);
      } else
        Bn(t), O();
    }
  }
}
function Bn(t) {
  const e = Ss.get(t);
  e && (e.flags |= 8, Ss.delete(t));
}
As().requestIdleCallback;
As().cancelIdleCallback;
const Je = (t) => !!t.type.__asyncLoader, li = (t) => t.type.__isKeepAlive;
function Wo(t, e) {
  ci(t, "a", e);
}
function Jo(t, e) {
  ci(t, "da", e);
}
function ci(t, e, s = vt) {
  const n = t.__wdc || (t.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return t();
  });
  if (Us(e, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      li(r.parent.vnode) && Go(n, e, s, r), r = r.parent;
  }
}
function Go(t, e, s, n) {
  const r = Us(
    e,
    t,
    n,
    !0
    /* prepend */
  );
  fi(() => {
    yn(n[e], r);
  }, s);
}
function Us(t, e, s = vt, n = !1) {
  if (s) {
    const r = s[t] || (s[t] = []), i = e.__weh || (e.__weh = (...o) => {
      Vt();
      const l = os(s), c = Rt(e, s, t, o);
      return l(), Ht(), c;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Qt = (t) => (e, s = vt) => {
  (!ns || t === "sp") && Us(t, (...n) => e(...n), s);
}, Yo = Qt("bm"), ai = Qt("m"), qo = Qt(
  "bu"
), Xo = Qt("u"), ui = Qt(
  "bum"
), fi = Qt("um"), zo = Qt(
  "sp"
), Zo = Qt("rtg"), Qo = Qt("rtc");
function tl(t, e = vt) {
  Us("ec", t, e);
}
const el = /* @__PURE__ */ Symbol.for("v-ndc");
function we(t, e, s, n) {
  let r;
  const i = s, o = U(t);
  if (o || st(t)) {
    const l = o && /* @__PURE__ */ Xt(t);
    let c = !1, d = !1;
    l && (c = !/* @__PURE__ */ St(t), d = /* @__PURE__ */ Zt(t), t = Ls(t)), r = new Array(t.length);
    for (let u = 0, h = t.length; u < h; u++)
      r[u] = e(
        c ? d ? Ee(Pt(t[u])) : Pt(t[u]) : t[u],
        u,
        void 0,
        i
      );
  } else if (typeof t == "number") {
    r = new Array(t);
    for (let l = 0; l < t; l++)
      r[l] = e(l + 1, l, void 0, i);
  } else if (X(t))
    if (t[Symbol.iterator])
      r = Array.from(
        t,
        (l, c) => e(l, c, void 0, i)
      );
    else {
      const l = Object.keys(t);
      r = new Array(l.length);
      for (let c = 0, d = l.length; c < d; c++) {
        const u = l[c];
        r[c] = e(t[u], u, c, i);
      }
    }
  else
    r = [];
  return r;
}
const cn = (t) => t ? Oi(t) ? Ns(t) : cn(t.parent) : null, Ge = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ dt(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => cn(t.parent),
    $root: (t) => cn(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => hi(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      Rn(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Qr.bind(t.proxy)),
    $watch: (t) => Vo.bind(t)
  })
), qs = (t, e) => t !== Z && !t.__isScriptSetup && Y(t, e), sl = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: c } = t;
    if (e[0] !== "$") {
      const _ = o[e];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return n[e];
          case 2:
            return r[e];
          case 4:
            return s[e];
          case 3:
            return i[e];
        }
      else {
        if (qs(n, e))
          return o[e] = 1, n[e];
        if (r !== Z && Y(r, e))
          return o[e] = 2, r[e];
        if (Y(i, e))
          return o[e] = 3, i[e];
        if (s !== Z && Y(s, e))
          return o[e] = 4, s[e];
        an && (o[e] = 0);
      }
    }
    const d = Ge[e];
    let u, h;
    if (d)
      return e === "$attrs" && ht(t.attrs, "get", ""), d(t);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[e])
    )
      return u;
    if (s !== Z && Y(s, e))
      return o[e] = 4, s[e];
    if (
      // global properties
      h = c.config.globalProperties, Y(h, e)
    )
      return h[e];
  },
  set({ _: t }, e, s) {
    const { data: n, setupState: r, ctx: i } = t;
    return qs(r, e) ? (r[e] = s, !0) : n !== Z && Y(n, e) ? (n[e] = s, !0) : Y(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (i[e] = s, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: s, ctx: n, appContext: r, props: i, type: o }
  }, l) {
    let c;
    return !!(s[l] || t !== Z && l[0] !== "$" && Y(t, l) || qs(e, l) || Y(i, l) || Y(n, l) || Y(Ge, l) || Y(r.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(t, e, s) {
    return s.get != null ? t._.accessCache[e] = 0 : Y(s, "value") && this.set(t, e, s.value, null), Reflect.defineProperty(t, e, s);
  }
};
function Wn(t) {
  return U(t) ? t.reduce(
    (e, s) => (e[s] = null, e),
    {}
  ) : t;
}
let an = !0;
function nl(t) {
  const e = hi(t), s = t.proxy, n = t.ctx;
  an = !1, e.beforeCreate && Jn(e.beforeCreate, t, "bc");
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
    mounted: _,
    beforeUpdate: b,
    updated: I,
    activated: x,
    deactivated: A,
    beforeDestroy: O,
    beforeUnmount: M,
    destroyed: P,
    unmounted: w,
    render: j,
    renderTracked: ct,
    renderTriggered: it,
    errorCaptured: K,
    serverPrefetch: B,
    // public API
    expose: ot,
    inheritAttrs: wt,
    // assets
    components: Mt,
    directives: te,
    filters: Me
  } = e;
  if (d && rl(d, n, null), o)
    for (const V in o) {
      const Q = o[V];
      F(Q) && (n[V] = Q.bind(s));
    }
  if (r) {
    const V = r.call(s, s);
    X(V) && (t.data = /* @__PURE__ */ Os(V));
  }
  if (an = !0, i)
    for (const V in i) {
      const Q = i[V], oe = F(Q) ? Q.bind(s, s) : F(Q.get) ? Q.get.bind(s, s) : jt, as = !F(Q) && F(Q.set) ? Q.set.bind(s) : jt, le = ne({
        get: oe,
        set: as
      });
      Object.defineProperty(n, V, {
        enumerable: !0,
        configurable: !0,
        get: () => le.value,
        set: (At) => le.value = At
      });
    }
  if (l)
    for (const V in l)
      di(l[V], n, s, V);
  if (c) {
    const V = F(c) ? c.call(s) : c;
    Reflect.ownKeys(V).forEach((Q) => {
      Fo(Q, V[Q]);
    });
  }
  u && Jn(u, t, "c");
  function rt(V, Q) {
    U(Q) ? Q.forEach((oe) => V(oe.bind(s))) : Q && V(Q.bind(s));
  }
  if (rt(Yo, h), rt(ai, _), rt(qo, b), rt(Xo, I), rt(Wo, x), rt(Jo, A), rt(tl, K), rt(Qo, ct), rt(Zo, it), rt(ui, M), rt(fi, w), rt(zo, B), U(ot))
    if (ot.length) {
      const V = t.exposed || (t.exposed = {});
      ot.forEach((Q) => {
        Object.defineProperty(V, Q, {
          get: () => s[Q],
          set: (oe) => s[Q] = oe,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  j && t.render === jt && (t.render = j), wt != null && (t.inheritAttrs = wt), Mt && (t.components = Mt), te && (t.directives = te), B && oi(t);
}
function rl(t, e, s = jt) {
  U(t) && (t = un(t));
  for (const n in t) {
    const r = t[n];
    let i;
    X(r) ? "default" in r ? i = He(
      r.from || n,
      r.default,
      !0
    ) : i = He(r.from || n) : i = He(r), /* @__PURE__ */ nt(i) ? Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : e[n] = i;
  }
}
function Jn(t, e, s) {
  Rt(
    U(t) ? t.map((n) => n.bind(e.proxy)) : t.bind(e.proxy),
    e,
    s
  );
}
function di(t, e, s, n) {
  let r = n.includes(".") ? ii(s, n) : () => s[n];
  if (st(t)) {
    const i = e[t];
    F(i) && Be(r, i);
  } else if (F(t))
    Be(r, t.bind(s));
  else if (X(t))
    if (U(t))
      t.forEach((i) => di(i, e, s, n));
    else {
      const i = F(t.handler) ? t.handler.bind(s) : e[t.handler];
      F(i) && Be(r, i, t);
    }
}
function hi(t) {
  const e = t.type, { mixins: s, extends: n } = e, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = t.appContext, l = i.get(e);
  let c;
  return l ? c = l : !r.length && !s && !n ? c = e : (c = {}, r.length && r.forEach(
    (d) => ws(c, d, o, !0)
  ), ws(c, e, o)), X(e) && i.set(e, c), c;
}
function ws(t, e, s, n = !1) {
  const { mixins: r, extends: i } = e;
  i && ws(t, i, s, !0), r && r.forEach(
    (o) => ws(t, o, s, !0)
  );
  for (const o in e)
    if (!(n && o === "expose")) {
      const l = il[o] || s && s[o];
      t[o] = l ? l(t[o], e[o]) : e[o];
    }
  return t;
}
const il = {
  data: Gn,
  props: Yn,
  emits: Yn,
  // objects
  methods: ke,
  computed: ke,
  // lifecycle
  beforeCreate: pt,
  created: pt,
  beforeMount: pt,
  mounted: pt,
  beforeUpdate: pt,
  updated: pt,
  beforeDestroy: pt,
  beforeUnmount: pt,
  destroyed: pt,
  unmounted: pt,
  activated: pt,
  deactivated: pt,
  errorCaptured: pt,
  serverPrefetch: pt,
  // assets
  components: ke,
  directives: ke,
  // watch
  watch: ll,
  // provide / inject
  provide: Gn,
  inject: ol
};
function Gn(t, e) {
  return e ? t ? function() {
    return dt(
      F(t) ? t.call(this, this) : t,
      F(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function ol(t, e) {
  return ke(un(t), un(e));
}
function un(t) {
  if (U(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++)
      e[t[s]] = t[s];
    return e;
  }
  return t;
}
function pt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function ke(t, e) {
  return t ? dt(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Yn(t, e) {
  return t ? U(t) && U(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : dt(
    /* @__PURE__ */ Object.create(null),
    Wn(t),
    Wn(e ?? {})
  ) : e;
}
function ll(t, e) {
  if (!t) return e;
  if (!e) return t;
  const s = dt(/* @__PURE__ */ Object.create(null), t);
  for (const n in e)
    s[n] = pt(t[n], e[n]);
  return s;
}
function pi() {
  return {
    app: null,
    config: {
      isNativeTag: Cr,
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
let cl = 0;
function al(t, e) {
  return function(n, r = null) {
    F(n) || (n = dt({}, n)), r != null && !X(r) && (r = null);
    const i = pi(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const d = i.app = {
      _uid: cl++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Kl,
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
      mount(u, h, _) {
        if (!c) {
          const b = d._ceVNode || zt(n, r);
          return b.appContext = i, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), t(b, u, _), c = !0, d._container = u, u.__vue_app__ = d, Ns(b.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (Rt(
          l,
          d._instance,
          16
        ), t(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return i.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = de;
        de = d;
        try {
          return u();
        } finally {
          de = h;
        }
      }
    };
    return d;
  };
}
let de = null;
const ul = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Et(e)}Modifiers`] || t[`${ie(e)}Modifiers`];
function fl(t, e, ...s) {
  if (t.isUnmounted) return;
  const n = t.vnode.props || Z;
  let r = s;
  const i = e.startsWith("update:"), o = i && ul(n, e.slice(7));
  o && (o.trim && (r = s.map((u) => st(u) ? u.trim() : u)), o.number && (r = s.map(_n)));
  let l, c = n[l = Hs(e)] || // also try camelCase event handler (#2249)
  n[l = Hs(Et(e))];
  !c && i && (c = n[l = Hs(ie(e))]), c && Rt(
    c,
    t,
    6,
    r
  );
  const d = n[l + "Once"];
  if (d) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[l])
      return;
    t.emitted[l] = !0, Rt(
      d,
      t,
      6,
      r
    );
  }
}
const dl = /* @__PURE__ */ new WeakMap();
function gi(t, e, s = !1) {
  const n = s ? dl : e.emitsCache, r = n.get(t);
  if (r !== void 0)
    return r;
  const i = t.emits;
  let o = {}, l = !1;
  if (!F(t)) {
    const c = (d) => {
      const u = gi(d, e, !0);
      u && (l = !0, dt(o, u));
    };
    !s && e.mixins.length && e.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c);
  }
  return !i && !l ? (X(t) && n.set(t, null), null) : (U(i) ? i.forEach((c) => o[c] = null) : dt(o, i), X(t) && n.set(t, o), o);
}
function ks(t, e) {
  return !t || !Ts(e) ? !1 : (e = e.slice(2), e = e === "Once" ? e : e.replace(/Once$/, ""), Y(t, e[0].toLowerCase() + e.slice(1)) || Y(t, ie(e)) || Y(t, e));
}
function qn(t) {
  const {
    type: e,
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
    data: _,
    setupState: b,
    ctx: I,
    inheritAttrs: x
  } = t, A = xs(t);
  let O, M;
  try {
    if (s.shapeFlag & 4) {
      const w = r || n, j = w;
      O = Ft(
        d.call(
          j,
          w,
          u,
          h,
          b,
          _,
          I
        )
      ), M = l;
    } else {
      const w = e;
      O = Ft(
        w.length > 1 ? w(
          h,
          { attrs: l, slots: o, emit: c }
        ) : w(
          h,
          null
        )
      ), M = e.props ? l : hl(l);
    }
  } catch (w) {
    Ye.length = 0, Ds(w, t, 1), O = zt(re);
  }
  let P = O;
  if (M && x !== !1) {
    const w = Object.keys(M), { shapeFlag: j } = P;
    w.length && j & 7 && (i && w.some(Ps) && (M = pl(
      M,
      i
    )), P = Te(P, M, !1, !0));
  }
  return s.dirs && (P = Te(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(s.dirs) : s.dirs), s.transition && Mn(P, s.transition), O = P, xs(A), O;
}
const hl = (t) => {
  let e;
  for (const s in t)
    (s === "class" || s === "style" || Ts(s)) && ((e || (e = {}))[s] = t[s]);
  return e;
}, pl = (t, e) => {
  const s = {};
  for (const n in t)
    (!Ps(n) || !(n.slice(9) in e)) && (s[n] = t[n]);
  return s;
};
function gl(t, e, s) {
  const { props: n, children: r, component: i } = t, { props: o, children: l, patchFlag: c } = e, d = i.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (s && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? Xn(n, o, d) : !!o;
    if (c & 8) {
      const u = e.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const _ = u[h];
        if (mi(o, n, _) && !ks(d, _))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? Xn(n, o, d) : !0 : !!o;
  return !1;
}
function Xn(t, e, s) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (mi(e, t, i) && !ks(s, i))
      return !0;
  }
  return !1;
}
function mi(t, e, s) {
  const n = t[s], r = e[s];
  return s === "style" && X(n) && X(r) ? !xn(n, r) : n !== r;
}
function ml({ vnode: t, parent: e, suspense: s }, n) {
  for (; e; ) {
    const r = e.subTree;
    if (r.suspense && r.suspense.activeBranch === t && (r.suspense.vnode.el = r.el = n, t = r), r === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
  s && s.activeBranch === t && (s.vnode.el = n);
}
const vi = {}, yi = () => Object.create(vi), _i = (t) => Object.getPrototypeOf(t) === vi;
function vl(t, e, s, n = !1) {
  const r = {}, i = yi();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), bi(t, e, r, i);
  for (const o in t.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? t.props = n ? r : /* @__PURE__ */ wo(r) : t.type.props ? t.props = r : t.props = i, t.attrs = i;
}
function yl(t, e, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = t, l = /* @__PURE__ */ G(r), [c] = t.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = t.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let _ = u[h];
        if (ks(t.emitsOptions, _))
          continue;
        const b = e[_];
        if (c)
          if (Y(i, _))
            b !== i[_] && (i[_] = b, d = !0);
          else {
            const I = Et(_);
            r[I] = fn(
              c,
              l,
              I,
              b,
              t,
              !1
            );
          }
        else
          b !== i[_] && (i[_] = b, d = !0);
      }
    }
  } else {
    bi(t, e, r, i) && (d = !0);
    let u;
    for (const h in l)
      (!e || // for camelCase
      !Y(e, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ie(h)) === h || !Y(e, u))) && (c ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[u] !== void 0) && (r[h] = fn(
        c,
        l,
        h,
        void 0,
        t,
        !0
      )) : delete r[h]);
    if (i !== l)
      for (const h in i)
        (!e || !Y(e, h)) && (delete i[h], d = !0);
  }
  d && Yt(t.attrs, "set", "");
}
function bi(t, e, s, n) {
  const [r, i] = t.propsOptions;
  let o = !1, l;
  if (e)
    for (let c in e) {
      if (je(c))
        continue;
      const d = e[c];
      let u;
      r && Y(r, u = Et(c)) ? !i || !i.includes(u) ? s[u] = d : (l || (l = {}))[u] = d : ks(t.emitsOptions, c) || (!(c in n) || d !== n[c]) && (n[c] = d, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ G(s), d = l || Z;
    for (let u = 0; u < i.length; u++) {
      const h = i[u];
      s[h] = fn(
        r,
        c,
        h,
        d[h],
        t,
        !Y(d, h)
      );
    }
  }
  return o;
}
function fn(t, e, s, n, r, i) {
  const o = t[s];
  if (o != null) {
    const l = Y(o, "default");
    if (l && n === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && F(c)) {
        const { propsDefaults: d } = r;
        if (s in d)
          n = d[s];
        else {
          const u = os(r);
          n = d[s] = c.call(
            null,
            e
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
    ] && (n === "" || n === ie(s)) && (n = !0));
  }
  return n;
}
const _l = /* @__PURE__ */ new WeakMap();
function xi(t, e, s = !1) {
  const n = s ? _l : e.propsCache, r = n.get(t);
  if (r)
    return r;
  const i = t.props, o = {}, l = [];
  let c = !1;
  if (!F(t)) {
    const u = (h) => {
      c = !0;
      const [_, b] = xi(h, e, !0);
      dt(o, _), b && l.push(...b);
    };
    !s && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
  }
  if (!i && !c)
    return X(t) && n.set(t, be), be;
  if (U(i))
    for (let u = 0; u < i.length; u++) {
      const h = Et(i[u]);
      zn(h) && (o[h] = Z);
    }
  else if (i)
    for (const u in i) {
      const h = Et(u);
      if (zn(h)) {
        const _ = i[u], b = o[h] = U(_) || F(_) ? { type: _ } : dt({}, _), I = b.type;
        let x = !1, A = !0;
        if (U(I))
          for (let O = 0; O < I.length; ++O) {
            const M = I[O], P = F(M) && M.name;
            if (P === "Boolean") {
              x = !0;
              break;
            } else P === "String" && (A = !1);
          }
        else
          x = F(I) && I.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = x, b[
          1
          /* shouldCastTrue */
        ] = A, (x || Y(b, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return X(t) && n.set(t, d), d;
}
function zn(t) {
  return t[0] !== "$" && !je(t);
}
const An = (t) => t === "_" || t === "_ctx" || t === "$stable", Ln = (t) => U(t) ? t.map(Ft) : [Ft(t)], bl = (t, e, s) => {
  if (e._n)
    return e;
  const n = ko((...r) => Ln(e(...r)), s);
  return n._c = !1, n;
}, Si = (t, e, s) => {
  const n = t._ctx;
  for (const r in t) {
    if (An(r)) continue;
    const i = t[r];
    if (F(i))
      e[r] = bl(r, i, n);
    else if (i != null) {
      const o = Ln(i);
      e[r] = () => o;
    }
  }
}, wi = (t, e) => {
  const s = Ln(e);
  t.slots.default = () => s;
}, Ci = (t, e, s) => {
  for (const n in e)
    (s || !An(n)) && (t[n] = e[n]);
}, xl = (t, e, s) => {
  const n = t.slots = yi();
  if (t.vnode.shapeFlag & 32) {
    const r = e._;
    r ? (Ci(n, e, s), s && Mr(n, "_", r, !0)) : Si(e, n);
  } else e && wi(t, e);
}, Sl = (t, e, s) => {
  const { vnode: n, slots: r } = t;
  let i = !0, o = Z;
  if (n.shapeFlag & 32) {
    const l = e._;
    l ? s && l === 1 ? i = !1 : Ci(r, e, s) : (i = !e.$stable, Si(e, r)), o = e;
  } else e && (wi(t, e), o = { default: 1 });
  if (i)
    for (const l in r)
      !An(l) && o[l] == null && delete r[l];
}, yt = Tl;
function wl(t) {
  return Cl(t);
}
function Cl(t, e) {
  const s = As();
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
    nextSibling: _,
    setScopeId: b = jt,
    insertStaticContent: I
  } = t, x = (a, f, p, y = null, v = null, g = null, E = void 0, C = null, S = !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !De(a, f) && (y = us(a), At(a, v, g, !0), a = null), f.patchFlag === -2 && (S = !1, f.dynamicChildren = null);
    const { type: m, ref: D, shapeFlag: R } = f;
    switch (m) {
      case Fs:
        A(a, f, p, y);
        break;
      case re:
        O(a, f, p, y);
        break;
      case zs:
        a == null && M(f, p, y, E);
        break;
      case ft:
        Mt(
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
        R & 1 ? j(
          a,
          f,
          p,
          y,
          v,
          g,
          E,
          C,
          S
        ) : R & 6 ? te(
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
          Le
        );
    }
    D != null && v ? We(D, a && a.ref, g, f || a, !f) : D == null && a && a.ref != null && We(a.ref, null, g, a, !0);
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
  }, M = (a, f, p, y) => {
    [a.el, a.anchor] = I(
      a.children,
      f,
      p,
      y,
      a.el,
      a.anchor
    );
  }, P = ({ el: a, anchor: f }, p, y) => {
    let v;
    for (; a && a !== f; )
      v = _(a), n(a, p, y), a = v;
    n(f, p, y);
  }, w = ({ el: a, anchor: f }) => {
    let p;
    for (; a && a !== f; )
      p = _(a), r(a), a = p;
    r(f);
  }, j = (a, f, p, y, v, g, E, C, S) => {
    if (f.type === "svg" ? E = "svg" : f.type === "math" && (E = "mathml"), a == null)
      ct(
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
  }, ct = (a, f, p, y, v, g, E, C) => {
    let S, m;
    const { props: D, shapeFlag: R, transition: L, dirs: k } = a;
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
      Xs(a, g),
      E,
      C
    ), k && ce(a, null, y, "created"), it(S, a, a.scopeId, E, y), D) {
      for (const z in D)
        z !== "value" && !je(z) && i(S, z, null, D[z], g, y);
      "value" in D && i(S, "value", null, D.value, g), (m = D.onVnodeBeforeMount) && Dt(m, y, a);
    }
    k && ce(a, null, y, "beforeMount");
    const J = Il(v, L);
    J && L.beforeEnter(S), n(S, f, p), ((m = D && D.onVnodeMounted) || J || k) && yt(() => {
      try {
        m && Dt(m, y, a), J && L.enter(S), k && ce(a, null, y, "mounted");
      } finally {
      }
    }, v);
  }, it = (a, f, p, y, v) => {
    if (p && b(a, p), y)
      for (let g = 0; g < y.length; g++)
        b(a, y[g]);
    if (v) {
      let g = v.subTree;
      if (f === g || Pi(g.type) && (g.ssContent === f || g.ssFallback === f)) {
        const E = v.vnode;
        it(
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
      const D = a[m] = C ? Gt(a[m]) : Ft(a[m]);
      x(
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
    let k;
    if (p && ae(p, !1), (k = L.onVnodeBeforeUpdate) && Dt(k, p, f, a), D && ce(f, a, p, "beforeUpdate"), p && ae(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    m && (!a.dynamicChildren || a.dynamicChildren.length !== m.length) && (S = 0, E = !1, m = null), (R.innerHTML && L.innerHTML == null || R.textContent && L.textContent == null) && u(C, ""), m ? ot(
      a.dynamicChildren,
      m,
      C,
      p,
      y,
      Xs(f, v),
      g
    ) : E || Q(
      a,
      f,
      C,
      null,
      p,
      y,
      Xs(f, v),
      g,
      !1
    ), S > 0) {
      if (S & 16)
        wt(C, R, L, p, v);
      else if (S & 2 && R.class !== L.class && i(C, "class", null, L.class, v), S & 4 && i(C, "style", R.style, L.style, v), S & 8) {
        const J = f.dynamicProps;
        for (let z = 0; z < J.length; z++) {
          const q = J[z], lt = R[q], ut = L[q];
          (ut !== lt || q === "value") && i(C, q, lt, ut, v, p);
        }
      }
      S & 1 && a.children !== f.children && u(C, f.children);
    } else !E && m == null && wt(C, R, L, p, v);
    ((k = L.onVnodeUpdated) || D) && yt(() => {
      k && Dt(k, p, f, a), D && ce(f, a, p, "updated");
    }, y);
  }, ot = (a, f, p, y, v, g, E) => {
    for (let C = 0; C < f.length; C++) {
      const S = a[C], m = f[C], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === ft || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !De(S, m) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? h(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      x(
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
  }, wt = (a, f, p, y, v) => {
    if (f !== p) {
      if (f !== Z)
        for (const g in f)
          !je(g) && !(g in p) && i(
            a,
            g,
            f[g],
            null,
            v,
            y
          );
      for (const g in p) {
        if (je(g)) continue;
        const E = p[g], C = f[g];
        E !== C && g !== "value" && i(a, g, C, E, v, y);
      }
      "value" in p && i(a, "value", f.value, p.value, v);
    }
  }, Mt = (a, f, p, y, v, g, E, C, S) => {
    const m = f.el = a ? a.el : l(""), D = f.anchor = a ? a.anchor : l("");
    let { patchFlag: R, dynamicChildren: L, slotScopeIds: k } = f;
    k && (C = C ? C.concat(k) : k), a == null ? (n(m, p, y), n(D, p, y), K(
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
    a.dynamicChildren && a.dynamicChildren.length === L.length ? (ot(
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
    (f.key != null || v && f === v.subTree) && Ii(
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
  }, te = (a, f, p, y, v, g, E, C, S) => {
    f.slotScopeIds = C, a == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      p,
      y,
      E,
      S
    ) : Me(
      f,
      p,
      y,
      v,
      g,
      E,
      S
    ) : cs(a, f, S);
  }, Me = (a, f, p, y, v, g, E) => {
    const C = a.component = Dl(
      a,
      y,
      v
    );
    if (li(a) && (C.ctx.renderer = Le), Ul(C, !1, E), C.asyncDep) {
      if (v && v.registerDep(C, rt, E), !a.el) {
        const S = C.subTree = zt(re);
        O(null, S, f, p), a.placeholder = S.el;
      }
    } else
      rt(
        C,
        a,
        f,
        p,
        v,
        g,
        E
      );
  }, cs = (a, f, p) => {
    const y = f.component = a.component;
    if (gl(a, f, p))
      if (y.asyncDep && !y.asyncResolved) {
        V(y, f, p);
        return;
      } else
        y.next = f, y.update();
    else
      f.el = a.el, y.vnode = f;
  }, rt = (a, f, p, y, v, g, E) => {
    const C = () => {
      if (a.isMounted) {
        let { next: R, bu: L, u: k, parent: J, vnode: z } = a;
        {
          const Ot = Ei(a);
          if (Ot) {
            R && (R.el = z.el, V(a, R, E)), Ot.asyncDep.then(() => {
              yt(() => {
                a.isUnmounted || m();
              }, v);
            });
            return;
          }
        }
        let q = R, lt;
        ae(a, !1), R ? (R.el = z.el, V(a, R, E)) : R = z, L && ms(L), (lt = R.props && R.props.onVnodeBeforeUpdate) && Dt(lt, J, R, z), ae(a, !0);
        const ut = qn(a), Lt = a.subTree;
        a.subTree = ut, x(
          Lt,
          ut,
          // parent may have changed if it's in a teleport
          h(Lt.el),
          // anchor may have changed if it's in a fragment
          us(Lt),
          a,
          v,
          g
        ), R.el = ut.el, q === null && ml(a, ut.el), k && yt(k, v), (lt = R.props && R.props.onVnodeUpdated) && yt(
          () => Dt(lt, J, R, z),
          v
        );
      } else {
        let R;
        const { el: L, props: k } = f, { bm: J, m: z, parent: q, root: lt, type: ut } = a, Lt = Je(f);
        ae(a, !1), J && ms(J), !Lt && (R = k && k.onVnodeBeforeMount) && Dt(R, q, f), ae(a, !0);
        {
          lt.ce && lt.ce._hasShadowRoot() && lt.ce._injectChildStyle(
            ut,
            a.parent ? a.parent.type : void 0
          );
          const Ot = a.subTree = qn(a);
          x(
            null,
            Ot,
            p,
            y,
            a,
            v,
            g
          ), f.el = Ot.el;
        }
        if (z && yt(z, v), !Lt && (R = k && k.onVnodeMounted)) {
          const Ot = f;
          yt(
            () => Dt(R, q, Ot),
            v
          );
        }
        (f.shapeFlag & 256 || q && Je(q.vnode) && q.vnode.shapeFlag & 256) && a.a && yt(a.a, v), a.isMounted = !0, f = p = y = null;
      }
    };
    a.scope.on();
    const S = a.effect = new kr(C);
    a.scope.off();
    const m = a.update = S.run.bind(S), D = a.job = S.runIfDirty.bind(S);
    D.i = a, D.id = a.uid, S.scheduler = () => Rn(D), ae(a, !0), m();
  }, V = (a, f, p) => {
    f.component = a;
    const y = a.vnode.props;
    a.vnode = f, a.next = null, yl(a, f.props, y, p), Sl(a, f.children, p), Vt(), Vn(a), Ht();
  }, Q = (a, f, p, y, v, g, E, C, S = !1) => {
    const m = a && a.children, D = a ? a.shapeFlag : 0, R = f.children, { patchFlag: L, shapeFlag: k } = f;
    if (L > 0) {
      if (L & 128) {
        as(
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
        oe(
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
    k & 8 ? (D & 16 && Ae(m, v, g), R !== m && u(p, R)) : D & 16 ? k & 16 ? as(
      m,
      R,
      p,
      y,
      v,
      g,
      E,
      C,
      S
    ) : Ae(m, v, g, !0) : (D & 8 && u(p, ""), k & 16 && K(
      R,
      p,
      y,
      v,
      g,
      E,
      C,
      S
    ));
  }, oe = (a, f, p, y, v, g, E, C, S) => {
    a = a || be, f = f || be;
    const m = a.length, D = f.length, R = Math.min(m, D);
    let L;
    for (L = 0; L < R; L++) {
      const k = f[L] = S ? Gt(f[L]) : Ft(f[L]);
      x(
        a[L],
        k,
        p,
        null,
        v,
        g,
        E,
        C,
        S
      );
    }
    m > D ? Ae(
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
  }, as = (a, f, p, y, v, g, E, C, S) => {
    let m = 0;
    const D = f.length;
    let R = a.length - 1, L = D - 1;
    for (; m <= R && m <= L; ) {
      const k = a[m], J = f[m] = S ? Gt(f[m]) : Ft(f[m]);
      if (De(k, J))
        x(
          k,
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
      const k = a[R], J = f[L] = S ? Gt(f[L]) : Ft(f[L]);
      if (De(k, J))
        x(
          k,
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
        const k = L + 1, J = k < D ? f[k].el : y;
        for (; m <= L; )
          x(
            null,
            f[m] = S ? Gt(f[m]) : Ft(f[m]),
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
        At(a[m], v, g, !0), m++;
    else {
      const k = m, J = m, z = /* @__PURE__ */ new Map();
      for (m = J; m <= L; m++) {
        const _t = f[m] = S ? Gt(f[m]) : Ft(f[m]);
        _t.key != null && z.set(_t.key, m);
      }
      let q, lt = 0;
      const ut = L - J + 1;
      let Lt = !1, Ot = 0;
      const Oe = new Array(ut);
      for (m = 0; m < ut; m++) Oe[m] = 0;
      for (m = k; m <= R; m++) {
        const _t = a[m];
        if (lt >= ut) {
          At(_t, v, g, !0);
          continue;
        }
        let $t;
        if (_t.key != null)
          $t = z.get(_t.key);
        else
          for (q = J; q <= L; q++)
            if (Oe[q - J] === 0 && De(_t, f[q])) {
              $t = q;
              break;
            }
        $t === void 0 ? At(_t, v, g, !0) : (Oe[$t - J] = m + 1, $t >= Ot ? Ot = $t : Lt = !0, x(
          _t,
          f[$t],
          p,
          null,
          v,
          g,
          E,
          C,
          S
        ), lt++);
      }
      const Dn = Lt ? El(Oe) : be;
      for (q = Dn.length - 1, m = ut - 1; m >= 0; m--) {
        const _t = J + m, $t = f[_t], Un = f[_t + 1], kn = _t + 1 < D ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Un.el || Ti(Un)
        ) : y;
        Oe[m] === 0 ? x(
          null,
          $t,
          p,
          kn,
          v,
          g,
          E,
          C,
          S
        ) : Lt && (q < 0 || m !== Dn[q] ? le($t, p, kn, 2) : q--);
      }
    }
  }, le = (a, f, p, y, v = null) => {
    const { el: g, type: E, transition: C, children: S, shapeFlag: m } = a;
    if (m & 6) {
      le(a.component.subTree, f, p, y);
      return;
    }
    if (m & 128) {
      a.suspense.move(f, p, y);
      return;
    }
    if (m & 64) {
      E.move(a, f, p, Le);
      return;
    }
    if (E === ft) {
      n(g, f, p);
      for (let R = 0; R < S.length; R++)
        le(S[R], f, p, y);
      n(a.anchor, f, p);
      return;
    }
    if (E === zs) {
      P(a, f, p);
      return;
    }
    if (y !== 2 && m & 1 && C)
      if (y === 0)
        C.persisted && !g[Ys] ? n(g, f, p) : (C.beforeEnter(g), n(g, f, p), yt(() => C.enter(g), v));
      else {
        const { leave: R, delayLeave: L, afterLeave: k } = C, J = () => {
          a.ctx.isUnmounted ? r(g) : n(g, f, p);
        }, z = () => {
          const q = g._isLeaving || !!g[Ys];
          g._isLeaving && g[Ys](
            !0
            /* cancelled */
          ), C.persisted && !q ? J() : R(g, () => {
            J(), k && k();
          });
        };
        L ? L(g, J, z) : z();
      }
    else
      n(g, f, p);
  }, At = (a, f, p, y = !1, v = !1) => {
    const {
      type: g,
      props: E,
      ref: C,
      children: S,
      dynamicChildren: m,
      shapeFlag: D,
      patchFlag: R,
      dirs: L,
      cacheIndex: k,
      memo: J
    } = a;
    if (R === -2 && (v = !1), C != null && (Vt(), We(C, null, p, a, !0), Ht()), k != null && (f.renderCache[k] = void 0), D & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const z = D & 1 && L, q = !Je(a);
    let lt;
    if (q && (lt = E && E.onVnodeBeforeUnmount) && Dt(lt, f, a), D & 6)
      Wi(a.component, p, y);
    else {
      if (D & 128) {
        a.suspense.unmount(p, y);
        return;
      }
      z && ce(a, null, f, "beforeUnmount"), D & 64 ? a.type.remove(
        a,
        f,
        p,
        Le,
        y
      ) : m && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !m.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (g !== ft || R > 0 && R & 64) ? Ae(
        m,
        f,
        p,
        !1,
        !0
      ) : (g === ft && R & 384 || !v && D & 16) && Ae(S, f, p), y && On(a);
    }
    const ut = J != null && k == null;
    (q && (lt = E && E.onVnodeUnmounted) || z || ut) && yt(() => {
      lt && Dt(lt, f, a), z && ce(a, null, f, "unmounted"), ut && (a.el = null);
    }, p);
  }, On = (a) => {
    const { type: f, el: p, anchor: y, transition: v } = a;
    if (f === ft) {
      Bi(p, y);
      return;
    }
    if (f === zs) {
      w(a);
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
  }, Bi = (a, f) => {
    let p;
    for (; a !== f; )
      p = _(a), r(a), a = p;
    r(f);
  }, Wi = (a, f, p) => {
    const { bum: y, scope: v, job: g, subTree: E, um: C, m: S, a: m } = a;
    Zn(S), Zn(m), y && ms(y), v.stop(), g && (g.flags |= 8, At(E, a, f, p)), C && yt(C, f), yt(() => {
      a.isUnmounted = !0;
    }, f);
  }, Ae = (a, f, p, y = !1, v = !1, g = 0) => {
    for (let E = g; E < a.length; E++)
      At(a[E], f, p, y, v);
  }, us = (a) => {
    if (a.shapeFlag & 6)
      return us(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const f = _(a.anchor || a.el), p = f && f[Ho];
    return p ? _(p) : f;
  };
  let Vs = !1;
  const $n = (a, f, p) => {
    let y;
    a == null ? f._vnode && (At(f._vnode, null, null, !0), y = f._vnode.component) : x(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      p
    ), f._vnode = a, Vs || (Vs = !0, Vn(y), ei(), Vs = !1);
  }, Le = {
    p: x,
    um: At,
    m: le,
    r: On,
    mt: Me,
    mc: K,
    pc: Q,
    pbc: ot,
    n: us,
    o: t
  };
  return {
    render: $n,
    hydrate: void 0,
    createApp: al($n)
  };
}
function Xs({ type: t, props: e }, s) {
  return s === "svg" && t === "foreignObject" || s === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : s;
}
function ae({ effect: t, job: e }, s) {
  s ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function Il(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Ii(t, e, s = !1) {
  const n = t.children, r = e.children;
  if (U(n) && U(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Gt(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && Ii(o, l)), l.type === Fs && (l.patchFlag === -1 && (l = r[i] = Gt(l)), l.el = o.el), l.type === re && !l.el && (l.el = o.el);
    }
}
function El(t) {
  const e = t.slice(), s = [0];
  let n, r, i, o, l;
  const c = t.length;
  for (n = 0; n < c; n++) {
    const d = t[n];
    if (d !== 0) {
      if (r = s[s.length - 1], t[r] < d) {
        e[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        l = i + o >> 1, t[s[l]] < d ? i = l + 1 : o = l;
      d < t[s[i]] && (i > 0 && (e[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = e[o];
  return s;
}
function Ei(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Ei(e);
}
function Zn(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function Ti(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? Ti(e.subTree) : null;
}
const Pi = (t) => t.__isSuspense;
function Tl(t, e) {
  e && e.pendingBranch ? U(t) ? e.effects.push(...t) : e.effects.push(t) : Uo(t);
}
const ft = /* @__PURE__ */ Symbol.for("v-fgt"), Fs = /* @__PURE__ */ Symbol.for("v-txt"), re = /* @__PURE__ */ Symbol.for("v-cmt"), zs = /* @__PURE__ */ Symbol.for("v-stc"), Ye = [];
let xt = null;
function N(t = !1) {
  Ye.push(xt = t ? null : []);
}
function Pl() {
  Ye.pop(), xt = Ye[Ye.length - 1] || null;
}
let es = 1;
function Qn(t, e = !1) {
  es += t, t < 0 && xt && e && (xt.hasOnce = !0);
}
function Ri(t) {
  return t.dynamicChildren = es > 0 ? xt || be : null, Pl(), es > 0 && xt && xt.push(t), t;
}
function W(t, e, s, n, r, i) {
  return Ri(
    T(
      t,
      e,
      s,
      n,
      r,
      i,
      !0
    )
  );
}
function ss(t, e, s, n, r) {
  return Ri(
    zt(
      t,
      e,
      s,
      n,
      r,
      !0
    )
  );
}
function Mi(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function De(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Ai = ({ key: t }) => t ?? null, vs = ({
  ref: t,
  ref_key: e,
  ref_for: s
}) => (typeof t == "number" && (t = "" + t), t != null ? st(t) || /* @__PURE__ */ nt(t) || F(t) ? { i: Ct, r: t, k: e, f: !!s } : t : null);
function T(t, e = null, s = null, n = 0, r = null, i = t === ft ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Ai(e),
    ref: e && vs(e),
    scopeId: ni,
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
    ctx: Ct
  };
  return l ? (Cs(c, s), i & 128 && t.normalize(c)) : s && (c.shapeFlag |= st(s) ? 8 : 16), es > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  xt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && xt.push(c), c;
}
const zt = Rl;
function Rl(t, e = null, s = null, n = 0, r = null, i = !1) {
  if ((!t || t === el) && (t = re), Mi(t)) {
    const l = Te(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return s && Cs(l, s), es > 0 && !i && xt && (l.shapeFlag & 6 ? xt[xt.indexOf(t)] = l : xt.push(l)), l.patchFlag = -2, l;
  }
  if (jl(t) && (t = t.__vccOpts), e) {
    e = Ml(e);
    let { class: l, style: c } = e;
    l && !st(l) && (e.class = he(l)), X(c) && (/* @__PURE__ */ $s(c) && !U(c) && (c = dt({}, c)), e.style = bn(c));
  }
  const o = st(t) ? 1 : Pi(t) ? 128 : Bo(t) ? 64 : X(t) ? 4 : F(t) ? 2 : 0;
  return T(
    t,
    e,
    s,
    n,
    r,
    o,
    i,
    !0
  );
}
function Ml(t) {
  return t ? /* @__PURE__ */ $s(t) || _i(t) ? dt({}, t) : t : null;
}
function Te(t, e, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = t, d = e ? Ll(r || {}, e) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: d,
    key: d && Ai(d),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? U(i) ? i.concat(vs(e)) : [i, vs(e)] : vs(e)
    ) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: l,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== ft ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Te(t.ssContent),
    ssFallback: t.ssFallback && Te(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return c && n && Mn(
    u,
    c.clone(u)
  ), u;
}
function Al(t = " ", e = 0) {
  return zt(Fs, null, t, e);
}
function bt(t = "", e = !1) {
  return e ? (N(), ss(re, null, t)) : zt(re, null, t);
}
function Ft(t) {
  return t == null || typeof t == "boolean" ? zt(re) : U(t) ? zt(
    ft,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : Mi(t) ? Gt(t) : zt(Fs, null, String(t));
}
function Gt(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Te(t);
}
function Cs(t, e) {
  let s = 0;
  const { shapeFlag: n } = t;
  if (e == null)
    e = null;
  else if (U(e))
    s = 16;
  else if (typeof e == "object")
    if (n & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), Cs(t, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = e._;
      !r && !_i(e) ? e._ctx = Ct : r === 3 && Ct && (Ct.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else if (F(e)) {
    if (n & 65) {
      Cs(t, { default: e });
      return;
    }
    e = { default: e, _ctx: Ct }, s = 32;
  } else
    e = String(e), n & 64 ? (s = 16, e = [Al(e)]) : s = 8;
  t.children = e, t.shapeFlag |= s;
}
function Ll(...t) {
  const e = {};
  for (let s = 0; s < t.length; s++) {
    const n = t[s];
    for (const r in n)
      if (r === "class")
        e.class !== n.class && (e.class = he([e.class, n.class]));
      else if (r === "style")
        e.style = bn([e.style, n.style]);
      else if (Ts(r)) {
        const i = e[r], o = n[r];
        o && i !== o && !(U(i) && i.includes(o)) ? e[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ps(r) && (e[r] = o);
      } else r !== "" && (e[r] = n[r]);
  }
  return e;
}
function Dt(t, e, s, n = null) {
  Rt(t, e, 7, [
    s,
    n
  ]);
}
const Ol = pi();
let $l = 0;
function Dl(t, e, s) {
  const n = t.type, r = (e ? e.appContext : t.appContext) || Ol, i = {
    uid: $l++,
    vnode: t,
    type: n,
    parent: e,
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
    scope: new $r(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(r.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: xi(n, r),
    emitsOptions: gi(n, r),
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
  return i.ctx = { _: i }, i.root = e ? e.root : i, i.emit = fl.bind(null, i), t.ce && t.ce(i), i;
}
let vt = null;
const Li = () => vt || Ct;
let Is, dn;
{
  const t = As(), e = (s, n) => {
    let r;
    return (r = t[s]) || (r = t[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Is = e(
    "__VUE_INSTANCE_SETTERS__",
    (s) => vt = s
  ), dn = e(
    "__VUE_SSR_SETTERS__",
    (s) => ns = s
  );
}
const os = (t) => {
  const e = vt;
  return Is(t), t.scope.on(), () => {
    t.scope.off(), Is(e);
  };
}, tr = () => {
  vt && vt.scope.off(), Is(null);
};
function Oi(t) {
  return t.vnode.shapeFlag & 4;
}
let ns = !1;
function Ul(t, e = !1, s = !1) {
  e && dn(e);
  const { props: n, children: r } = t.vnode, i = Oi(t);
  vl(t, n, i, e), xl(t, r, s || e);
  const o = i ? kl(t, e) : void 0;
  return e && dn(!1), o;
}
function kl(t, e) {
  const s = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, sl);
  const { setup: n } = s;
  if (n) {
    Vt();
    const r = t.setupContext = n.length > 1 ? Nl(t) : null, i = os(t), o = is(
      n,
      t,
      0,
      [
        t.props,
        r
      ]
    ), l = Er(o);
    if (Ht(), i(), (l || t.sp) && !Je(t) && oi(t), l) {
      if (o.then(tr, tr), e)
        return o.then((c) => {
          er(t, c);
        }).catch((c) => {
          Ds(c, t, 0);
        });
      t.asyncDep = o;
    } else
      er(t, o);
  } else
    $i(t);
}
function er(t, e, s) {
  F(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : X(e) && (t.setupState = zr(e)), $i(t);
}
function $i(t, e, s) {
  const n = t.type;
  t.render || (t.render = n.render || jt);
  {
    const r = os(t);
    Vt();
    try {
      nl(t);
    } finally {
      Ht(), r();
    }
  }
}
const Fl = {
  get(t, e) {
    return ht(t, "get", ""), t[e];
  }
};
function Nl(t) {
  const e = (s) => {
    t.exposed = s || {};
  };
  return {
    attrs: new Proxy(t.attrs, Fl),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Ns(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(zr(Pn(t.exposed)), {
    get(e, s) {
      if (s in e)
        return e[s];
      if (s in Ge)
        return Ge[s](t);
    },
    has(e, s) {
      return s in e || s in Ge;
    }
  })) : t.proxy;
}
function jl(t) {
  return F(t) && "__vccOpts" in t;
}
const ne = (t, e) => /* @__PURE__ */ Ao(t, e, ns), Kl = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let hn;
const sr = typeof window < "u" && window.trustedTypes;
if (sr)
  try {
    hn = /* @__PURE__ */ sr.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const Di = hn ? (t) => hn.createHTML(t) : (t) => t, Vl = "http://www.w3.org/2000/svg", Hl = "http://www.w3.org/1998/Math/MathML", Wt = typeof document < "u" ? document : null, nr = Wt && /* @__PURE__ */ Wt.createElement("template"), Bl = {
  insert: (t, e, s) => {
    e.insertBefore(t, s || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, s, n) => {
    const r = e === "svg" ? Wt.createElementNS(Vl, t) : e === "mathml" ? Wt.createElementNS(Hl, t) : s ? Wt.createElement(t, { is: s }) : Wt.createElement(t);
    return t === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (t) => Wt.createTextNode(t),
  createComment: (t) => Wt.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Wt.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, s, n, r, i) {
    const o = s ? s.previousSibling : e.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; e.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      nr.innerHTML = Di(
        n === "svg" ? `<svg>${t}</svg>` : n === "mathml" ? `<math>${t}</math>` : t
      );
      const l = nr.content;
      if (n === "svg" || n === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      e.insertBefore(l, s);
    }
    return [
      // first
      o ? o.nextSibling : e.firstChild,
      // last
      s ? s.previousSibling : e.lastChild
    ];
  }
}, Wl = /* @__PURE__ */ Symbol("_vtc");
function Jl(t, e, s) {
  const n = t[Wl];
  n && (e = (e ? [e, ...n] : [...n]).join(" ")), e == null ? t.removeAttribute("class") : s ? t.setAttribute("class", e) : t.className = e;
}
const rr = /* @__PURE__ */ Symbol("_vod"), Gl = /* @__PURE__ */ Symbol("_vsh"), Yl = /* @__PURE__ */ Symbol(""), ql = /(?:^|;)\s*display\s*:/;
function Xl(t, e, s) {
  const n = t.style, r = st(s);
  let i = !1;
  if (s && !r) {
    if (e)
      if (st(e))
        for (const o of e.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Fe(n, l, "");
        }
      else
        for (const o in e)
          s[o] == null && Fe(n, o, "");
    for (const o in s) {
      o === "display" && (i = !0);
      const l = s[o];
      l != null ? Zl(
        t,
        o,
        !st(e) && e ? e[o] : void 0,
        l
      ) || Fe(n, o, l) : Fe(n, o, "");
    }
  } else if (r) {
    if (e !== s) {
      const o = n[Yl];
      o && (s += ";" + o), n.cssText = s, i = ql.test(s);
    }
  } else e && t.removeAttribute("style");
  rr in t && (t[rr] = i ? n.display : "", t[Gl] && (n.display = "none"));
}
const ir = /\s*!important$/;
function Fe(t, e, s) {
  if (U(s))
    s.forEach((n) => Fe(t, e, n));
  else if (s == null && (s = ""), e.startsWith("--"))
    t.setProperty(e, s);
  else {
    const n = zl(t, e);
    ir.test(s) ? t.setProperty(
      ie(n),
      s.replace(ir, ""),
      "important"
    ) : t[n] = s;
  }
}
const or = ["Webkit", "Moz", "ms"], Zs = {};
function zl(t, e) {
  const s = Zs[e];
  if (s)
    return s;
  let n = Et(e);
  if (n !== "filter" && n in t)
    return Zs[e] = n;
  n = Rr(n);
  for (let r = 0; r < or.length; r++) {
    const i = or[r] + n;
    if (i in t)
      return Zs[e] = i;
  }
  return e;
}
function Zl(t, e, s, n) {
  return t.tagName === "TEXTAREA" && (e === "width" || e === "height") && st(n) && s === n;
}
const lr = "http://www.w3.org/1999/xlink";
function cr(t, e, s, n, r, i = eo(e)) {
  n && e.startsWith("xlink:") ? s == null ? t.removeAttributeNS(lr, e.slice(6, e.length)) : t.setAttributeNS(lr, e, s) : s == null || i && !Ar(s) ? t.removeAttribute(e) : t.setAttribute(
    e,
    i ? "" : It(s) ? String(s) : s
  );
}
function ar(t, e, s, n, r) {
  if (e === "innerHTML" || e === "textContent") {
    s != null && (t[e] = e === "innerHTML" ? Di(s) : s);
    return;
  }
  const i = t.tagName;
  if (e === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? t.getAttribute("value") || "" : t.value, c = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== c || !("_value" in t)) && (t.value = c), s == null && t.removeAttribute(e), t._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof t[e];
    l === "boolean" ? s = Ar(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    t[e] = s;
  } catch {
  }
  o && t.removeAttribute(r || e);
}
function ye(t, e, s, n) {
  t.addEventListener(e, s, n);
}
function Ql(t, e, s, n) {
  t.removeEventListener(e, s, n);
}
const ur = /* @__PURE__ */ Symbol("_vei");
function tc(t, e, s, n, r = null) {
  const i = t[ur] || (t[ur] = {}), o = i[e];
  if (n && o)
    o.value = n;
  else {
    const [l, c] = nc(e);
    if (n) {
      const d = i[e] = oc(
        n,
        r
      );
      ye(t, l, d, c);
    } else o && (Ql(t, l, o, c), i[e] = void 0);
  }
}
const ec = /(Once|Passive|Capture)$/, sc = /^on:?(?:Once|Passive|Capture)$/;
function nc(t) {
  let e, s;
  for (; (s = t.match(ec)) && !sc.test(t); )
    e || (e = {}), t = t.slice(0, t.length - s[1].length), e[s[1].toLowerCase()] = !0;
  return [t[2] === ":" ? t.slice(3) : ie(t.slice(2)), e];
}
let Qs = 0;
const rc = /* @__PURE__ */ Promise.resolve(), ic = () => Qs || (rc.then(() => Qs = 0), Qs = Date.now());
function oc(t, e) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const r = s.value;
    if (U(r)) {
      const i = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        i.call(n), n._stopped = !0;
      };
      const o = r.slice(), l = [n];
      for (let c = 0; c < o.length && !n._stopped; c++) {
        const d = o[c];
        d && Rt(
          d,
          e,
          5,
          l
        );
      }
    } else
      Rt(
        r,
        e,
        5,
        [n]
      );
  };
  return s.value = t, s.attached = ic(), s;
}
const fr = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, lc = (t, e, s, n, r, i) => {
  const o = r === "svg";
  e === "class" ? Jl(t, n, o) : e === "style" ? Xl(t, s, n) : Ts(e) ? Ps(e) || tc(t, e, s, n, i) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : cc(t, e, n, o)) ? (ar(t, e, n), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && cr(t, e, n, o, i, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ac(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !st(n))) ? ar(t, Et(e), n, i, e) : (e === "true-value" ? t._trueValue = n : e === "false-value" && (t._falseValue = n), cr(t, e, n, o));
};
function cc(t, e, s, n) {
  if (n)
    return !!(e === "innerHTML" || e === "textContent" || e in t && fr(e) && F(s));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const r = t.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return fr(e) && st(s) ? !1 : e in t;
}
function ac(t, e) {
  const s = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!s)
    return !1;
  const n = Et(e);
  return Array.isArray(s) ? s.some((r) => Et(r) === n) : Object.keys(s).some((r) => Et(r) === n);
}
const dr = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return U(e) ? (s) => ms(e, s) : e;
};
function uc(t) {
  t.target.composing = !0;
}
function hr(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const tn = /* @__PURE__ */ Symbol("_assign");
function pr(t, e, s) {
  return e && (t = t.trim()), s && (t = _n(t)), t;
}
const Ne = {
  created(t, { modifiers: { lazy: e, trim: s, number: n } }, r) {
    t[tn] = dr(r);
    const i = n || r.props && r.props.type === "number";
    ye(t, e ? "change" : "input", (o) => {
      o.target.composing || t[tn](pr(t.value, s, i));
    }), (s || i) && ye(t, "change", () => {
      t.value = pr(t.value, s, i);
    }), e || (ye(t, "compositionstart", uc), ye(t, "compositionend", hr), ye(t, "change", hr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, oldValue: s, modifiers: { lazy: n, trim: r, number: i } }, o) {
    if (t[tn] = dr(o), t.composing) return;
    const l = (i || t.type === "number") && !/^0\d/.test(t.value) ? _n(t.value) : t.value, c = e ?? "";
    if (l === c)
      return;
    const d = t.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === t && t.type !== "range" && (n && e === s || r && t.value.trim() === c) || (t.value = c);
  }
}, fc = ["ctrl", "shift", "alt", "meta"], dc = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => fc.some((s) => t[`${s}Key`] && !e.includes(s))
}, Ui = (t, e) => {
  if (!t) return t;
  const s = t._withMods || (t._withMods = {}), n = e.join(".");
  return s[n] || (s[n] = (r, ...i) => {
    for (let o = 0; o < e.length; o++) {
      const l = dc[e[o]];
      if (l && l(r, e)) return;
    }
    return t(r, ...i);
  });
}, hc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ki = (t, e) => {
  const s = t._withKeys || (t._withKeys = {}), n = e.join(".");
  return s[n] || (s[n] = (r) => {
    if (!("key" in r))
      return;
    const i = ie(r.key);
    if (e.some(
      (o) => o === i || hc[o] === i
    ))
      return t(r);
  });
}, pc = /* @__PURE__ */ dt({ patchProp: lc }, Bl);
let gr;
function gc() {
  return gr || (gr = wl(pc));
}
const Fi = (...t) => {
  const e = gc().createApp(...t), { mount: s } = e;
  return e.mount = (n) => {
    const r = vc(n);
    if (!r) return;
    const i = e._component;
    !F(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, mc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, e;
};
function mc(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function vc(t) {
  return st(t) ? document.querySelector(t) : t;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Ni;
const js = (t) => Ni = t, ji = (
  /* istanbul ignore next */
  Symbol()
);
function pn(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var qe;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(qe || (qe = {}));
function yc() {
  const t = Dr(!0), e = t.run(() => /* @__PURE__ */ Kt({}));
  let s = [], n = [];
  const r = Pn({
    install(i) {
      js(r), r._a = i, i.provide(ji, r), i.config.globalProperties.$pinia = r, n.forEach((o) => s.push(o)), n = [];
    },
    use(i) {
      return this._a ? s.push(i) : n.push(i), this;
    },
    _p: s,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return r;
}
const Ki = () => {
};
function mr(t, e, s, n = Ki) {
  t.push(e);
  const r = () => {
    const i = t.indexOf(e);
    i > -1 && (t.splice(i, 1), n());
  };
  return !s && Ur() && no(r), r;
}
function me(t, ...e) {
  t.slice().forEach((s) => {
    s(...e);
  });
}
const _c = (t) => t(), vr = Symbol(), en = Symbol();
function gn(t, e) {
  t instanceof Map && e instanceof Map ? e.forEach((s, n) => t.set(n, s)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const s in e) {
    if (!e.hasOwnProperty(s))
      continue;
    const n = e[s], r = t[s];
    pn(r) && pn(n) && t.hasOwnProperty(s) && !/* @__PURE__ */ nt(n) && !/* @__PURE__ */ Xt(n) ? t[s] = gn(r, n) : t[s] = n;
  }
  return t;
}
const bc = (
  /* istanbul ignore next */
  Symbol()
);
function xc(t) {
  return !pn(t) || !t.hasOwnProperty(bc);
}
const { assign: ee } = Object;
function Sc(t) {
  return !!(/* @__PURE__ */ nt(t) && t.effect);
}
function wc(t, e, s, n) {
  const { state: r, actions: i, getters: o } = e, l = s.state.value[t];
  let c;
  function d() {
    l || (s.state.value[t] = r ? r() : {});
    const u = /* @__PURE__ */ To(s.state.value[t]);
    return ee(u, i, Object.keys(o || {}).reduce((h, _) => (h[_] = Pn(ne(() => {
      js(s);
      const b = s._s.get(t);
      return o[_].call(b, b);
    })), h), {}));
  }
  return c = Vi(t, d, e, s, n, !0), c;
}
function Vi(t, e, s = {}, n, r, i) {
  let o;
  const l = ee({ actions: {} }, s), c = { deep: !0 };
  let d, u, h = [], _ = [], b;
  const I = n.state.value[t];
  !i && !I && (n.state.value[t] = {});
  let x;
  function A(K) {
    let B;
    d = u = !1, typeof K == "function" ? (K(n.state.value[t]), B = {
      type: qe.patchFunction,
      storeId: t,
      events: b
    }) : (gn(n.state.value[t], K), B = {
      type: qe.patchObject,
      payload: K,
      storeId: t,
      events: b
    });
    const ot = x = Symbol();
    Qr().then(() => {
      x === ot && (d = !0);
    }), u = !0, me(h, B, n.state.value[t]);
  }
  const O = i ? function() {
    const { state: B } = s, ot = B ? B() : {};
    this.$patch((wt) => {
      ee(wt, ot);
    });
  } : (
    /* istanbul ignore next */
    Ki
  );
  function M() {
    o.stop(), h = [], _ = [], n._s.delete(t);
  }
  const P = (K, B = "") => {
    if (vr in K)
      return K[en] = B, K;
    const ot = function() {
      js(n);
      const wt = Array.from(arguments), Mt = [], te = [];
      function Me(V) {
        Mt.push(V);
      }
      function cs(V) {
        te.push(V);
      }
      me(_, {
        args: wt,
        name: ot[en],
        store: j,
        after: Me,
        onError: cs
      });
      let rt;
      try {
        rt = K.apply(this && this.$id === t ? this : j, wt);
      } catch (V) {
        throw me(te, V), V;
      }
      return rt instanceof Promise ? rt.then((V) => (me(Mt, V), V)).catch((V) => (me(te, V), Promise.reject(V))) : (me(Mt, rt), rt);
    };
    return ot[vr] = !0, ot[en] = B, ot;
  }, w = {
    _p: n,
    // _s: scope,
    $id: t,
    $onAction: mr.bind(null, _),
    $patch: A,
    $reset: O,
    $subscribe(K, B = {}) {
      const ot = mr(h, K, B.detached, () => wt()), wt = o.run(() => Be(() => n.state.value[t], (Mt) => {
        (B.flush === "sync" ? u : d) && K({
          storeId: t,
          type: qe.direct,
          events: b
        }, Mt);
      }, ee({}, c, B)));
      return ot;
    },
    $dispose: M
  }, j = /* @__PURE__ */ Os(w);
  n._s.set(t, j);
  const it = (n._a && n._a.runWithContext || _c)(() => n._e.run(() => (o = Dr()).run(() => e({ action: P }))));
  for (const K in it) {
    const B = it[K];
    if (/* @__PURE__ */ nt(B) && !Sc(B) || /* @__PURE__ */ Xt(B))
      i || (I && xc(B) && (/* @__PURE__ */ nt(B) ? B.value = I[K] : gn(B, I[K])), n.state.value[t][K] = B);
    else if (typeof B == "function") {
      const ot = P(B, K);
      it[K] = ot, l.actions[K] = B;
    }
  }
  return ee(j, it), ee(/* @__PURE__ */ G(j), it), Object.defineProperty(j, "$state", {
    get: () => n.state.value[t],
    set: (K) => {
      A((B) => {
        ee(B, K);
      });
    }
  }), n._p.forEach((K) => {
    ee(j, o.run(() => K({
      store: j,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), I && i && s.hydrate && s.hydrate(j.$state, I), d = !0, u = !0, j;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ks(t, e, s) {
  let n, r;
  const i = typeof e == "function";
  typeof t == "string" ? (n = t, r = i ? s : e) : (r = t, n = t.id);
  function o(l, c) {
    const d = No();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (d ? He(ji, null) : null), l && js(l), l = Ni, l._s.has(n) || (i ? Vi(n, e, r, l) : wc(n, r, l)), l._s.get(n);
  }
  return o.$id = n, o;
}
function Cc() {
  return [
    { id: "netease", enabled: !0, priority: 0, config: { baseURL: "" } },
    { id: "local", enabled: !0, priority: 1, config: {} },
    { id: "custom", enabled: !1, priority: 2, config: { searchURL: "", resolveURL: "" } }
  ];
}
function sn() {
  return {
    volume: 65,
    playMode: "list",
    position: null,
    autoPlayOnNewCue: !0,
    providers: Cc(),
    customCueRules: []
  };
}
const gt = /* @__PURE__ */ Ks("settings", {
  state: () => ({
    settings: sn(),
    storage: null
  }),
  getters: {
    defaults: () => sn()
  },
  actions: {
    init(t) {
      this.storage = t;
      const e = t.getSettings(), s = sn();
      if (e) {
        const n = typeof SillyTavern < "u" && SillyTavern.getContext()?.libs?.lodash ? SillyTavern.getContext().libs.lodash : null;
        n ? this.settings = n.merge(structuredClone(s), e) : this.settings = {
          ...s,
          ...e,
          providers: s.providers.map((r) => {
            const i = e.providers?.find((o) => o.id === r.id);
            return i ? { ...i, config: i.config ?? r.config ?? {} } : r;
          }),
          customCueRules: e.customCueRules ?? s.customCueRules
        };
      } else
        this.settings = s;
    },
    setVolume(t) {
      this.settings.volume = t, this.save();
    },
    setPlayMode(t) {
      this.settings.playMode = t, this.save();
    },
    setPosition(t) {
      this.settings.position = t, this.save();
    },
    addCustomCueRule(t) {
      this.settings.customCueRules.push(t), this.save();
    },
    removeCustomCueRule(t) {
      this.settings.customCueRules.splice(t, 1), this.save();
    },
    setProviderConfig(t, e) {
      const s = this.settings.providers.find((n) => n.id === t);
      s && (s.enabled = e, this.save());
    },
    save() {
      this.storage && this.storage.setSettings(this.settings);
    }
  }
});
class Ic {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map(), this.audio = new Audio(), this.audio.crossOrigin = "anonymous", this.audio.preload = "auto";
  }
  load(e) {
    this.audio.src = e, this.audio.load();
  }
  async play() {
    try {
      await this.audio.play();
    } catch (e) {
      console.error("[AudioEngine] play() failed:", e);
    }
  }
  pause() {
    this.audio.pause();
  }
  seek(e) {
    this.audio.currentTime = e;
  }
  setVolume(e) {
    this.audio.volume = e;
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
  on(e, s) {
    let n = this.listeners.get(e);
    n || (n = /* @__PURE__ */ new Set(), this.listeners.set(e, n));
    const r = s;
    return n.add(r), this.audio.addEventListener(e, r), () => {
      this.audio.removeEventListener(e, r), n.delete(r);
    };
  }
  destroy() {
    for (const [e, s] of this.listeners) {
      for (const n of s)
        this.audio.removeEventListener(e, n);
      s.clear();
    }
    this.listeners.clear(), this.audio.src = "";
  }
}
const yr = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function Ec(t) {
  const e = t.split(/\r?\n/), s = [];
  for (const n of e) {
    const r = new RegExp(yr.source, "g"), i = [];
    let o;
    for (; (o = r.exec(n)) !== null; ) {
      const c = parseInt(o[1], 10), d = parseInt(o[2], 10), u = o[3] ?? "", h = u ? parseInt(u.padEnd(3, "0"), 10) : 0;
      i.push(c * 60 + d + h / 1e3);
    }
    if (i.length === 0) continue;
    const l = n.replace(new RegExp(yr.source, "g"), "").trim();
    if (l !== "")
      for (const c of i)
        s.push({ time: c, text: l });
  }
  s.sort((n, r) => n.time - r.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function _r(t, e) {
  if (t.length === 0) return null;
  let s = null;
  for (const n of t)
    if (n.time <= e)
      s = n;
    else
      break;
  return s;
}
class Tc {
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
      return this.ctx().extensionSettings[_e] ?? null;
    const e = localStorage.getItem(this.settingsKey());
    if (e === null) return null;
    try {
      return JSON.parse(e);
    } catch {
      return null;
    }
  }
  setSettings(e) {
    if (this.hasST()) {
      const s = this.ctx();
      s.extensionSettings[_e] = e, s.saveSettingsDebounced();
      return;
    }
    localStorage.setItem(this.settingsKey(), JSON.stringify(e));
  }
  // ===== chatMetadata =====
  getMetadata(e) {
    return this.hasST() ? this.ctx().chatMetadata[e] ?? null : this.fallbackMeta.get(e) ?? null;
  }
  setMetadata(e, s) {
    if (this.hasST()) {
      const n = this.ctx(), r = n.chatMetadata;
      r[e] = s, n.saveMetadata();
      return;
    }
    this.fallbackMeta.set(e, s);
  }
  // ===== localforage blobs =====
  get forage() {
    return this.hasST() ? SillyTavern.libs.localforage : window.localforage;
  }
  async getBlob(e) {
    return await this.forage.getItem(e) ?? null;
  }
  async setBlob(e, s) {
    await this.forage.setItem(e, s);
  }
  async removeBlob(e) {
    await this.forage.removeItem(e);
  }
  // ===== resolve cache (with TTL) =====
  async getCache(e) {
    const s = await this.forage.getItem(this.cacheKey(e)) ?? null;
    return s === null ? null : Date.now() >= s.expiresAt ? (await this.forage.removeItem(this.cacheKey(e)), null) : s.value;
  }
  async setCache(e, s, n) {
    const r = { value: s, expiresAt: Date.now() + n };
    await this.forage.setItem(this.cacheKey(e), r);
  }
  async clearCache() {
    const e = this.forage, s = this.cachePrefix(), n = await e.keys();
    await Promise.all(
      n.filter((r) => r.startsWith(s)).map((r) => e.removeItem(r))
    );
  }
  // ----- key helpers -----
  settingsKey() {
    return `${_e}__settings`;
  }
  cachePrefix() {
    return `${_e}:cache:`;
  }
  cacheKey(e) {
    return `${this.cachePrefix()}${e}`;
  }
}
function Pc() {
  return new Tc();
}
const _e = "st-music-player", br = "stmp_cursor", xr = "stmp_userlist";
class Rc {
  constructor(e) {
    this.providers = e;
  }
  async searchAll(e) {
    const s = await Promise.allSettled(
      this.providers.map((i) => i.search(e))
    ), n = [], r = /* @__PURE__ */ new Map();
    return s.forEach((i) => {
      if (i.status === "fulfilled")
        for (const o of i.value) {
          const l = `${o.name}__${o.artist}`;
          r.get(l) === void 0 && (r.set(l, n.length), n.push(o));
        }
    }), n;
  }
  async resolve(e, s, n) {
    const r = this.getProvider(s);
    return r ? new Promise((i) => {
      const o = setTimeout(() => i(null), 15e3);
      r.resolve(e, n).then((l) => {
        clearTimeout(o), i(l);
      }).catch(() => {
        clearTimeout(o), i(null);
      });
    }) : null;
  }
  getProvider(e) {
    return this.providers.find((s) => s.id === e);
  }
}
class Mc {
  constructor(e) {
    this.id = "netease", this.name = "网易云", this.baseURL = e?.baseURL?.trim() || "https://music-api.gdstudio.xyz/api.php";
  }
  async fetchJson(e, s = 1e4) {
    try {
      const n = new AbortController(), r = setTimeout(() => n.abort(), s), i = await fetch(e, { signal: n.signal });
      return clearTimeout(r), i.ok ? await i.json() : null;
    } catch {
      return null;
    }
  }
  async search(e) {
    for (let s = 0; s < 3; s++) {
      const n = await this.fetchJson(
        `${this.baseURL}?types=search&name=${encodeURIComponent(e)}&count=20&pages=1`
      );
      if (Array.isArray(n) && n.length > 0)
        return n.map((r) => ({
          id: String(r.id ?? ""),
          name: String(r.name ?? ""),
          artist: Array.isArray(r.artist) ? r.artist.join(", ") : String(r.artist ?? ""),
          duration: r.duration ? Number(r.duration) : void 0,
          provider: this.id,
          picId: r.pic_id ? String(r.pic_id) : void 0
        }));
      s < 2 && await new Promise((r) => setTimeout(r, 500));
    }
    return [];
  }
  async resolve(e, s) {
    const n = await this.fetchJson(
      `${this.baseURL}?types=url&id=${encodeURIComponent(e)}&br=320`
    );
    if (!n || !n.url) return null;
    const [r, i] = await Promise.all([
      this.fetchJson(`${this.baseURL}?types=lyric&id=${encodeURIComponent(e)}`),
      s ? this.fetchJson(`${this.baseURL}?types=pic&id=${encodeURIComponent(s)}`) : Promise.resolve(null)
    ]);
    return {
      url: String(n.url),
      lyric: r?.lyric ? String(r.lyric) : void 0,
      cover: i?.url ? String(i.url) : void 0,
      name: "",
      artist: "",
      source: this.id
    };
  }
}
class Ac {
  constructor(e) {
    this.id = "local", this.name = "本地文件", this.storage = e?.storage ?? null;
  }
  async search(e) {
    return [];
  }
  async resolve(e, s) {
    if (!this.storage) return null;
    const n = await this.storage.getItem("stmp:audio:" + e);
    return n ? {
      url: URL.createObjectURL(n),
      name: "",
      artist: "",
      source: this.id
    } : null;
  }
}
class Lc {
  constructor(e) {
    this.id = "custom", this.name = "自定义 API", this.searchURL = e?.searchURL, this.resolveURL = e?.resolveURL;
  }
  async fetchJson(e, s = 1e4) {
    try {
      const n = new AbortController(), r = setTimeout(() => n.abort(), s), i = await fetch(e, { signal: n.signal });
      return clearTimeout(r), i.ok ? await i.json() : null;
    } catch {
      return null;
    }
  }
  async search(e) {
    if (!this.searchURL) return [];
    const s = this.searchURL.replace("{keyword}", encodeURIComponent(e)), n = await this.fetchJson(s);
    return Array.isArray(n) ? n.map((r) => ({
      id: String(r.id ?? ""),
      name: String(r.name ?? ""),
      artist: String(r.artist ?? ""),
      duration: r.duration ? Number(r.duration) : void 0,
      provider: this.id
    })) : [];
  }
  async resolve(e, s) {
    if (!this.resolveURL) return null;
    const n = this.resolveURL.replace("{id}", encodeURIComponent(e)), r = await this.fetchJson(n);
    return !r || !r.url ? null : {
      url: String(r.url),
      lyric: r.lyric ? String(r.lyric) : void 0,
      cover: r.cover ? String(r.cover) : void 0,
      name: String(r.name ?? ""),
      artist: String(r.artist ?? ""),
      source: this.id
    };
  }
}
function mn(t) {
  const s = t.filter((n) => n.enabled).sort((n, r) => n.priority - r.priority).map((n) => {
    const r = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new Mc({ baseURL: r.baseURL });
      case "local":
        return new Ac({
          storage: r.storage ? r.storage : void 0
        });
      case "custom":
        return new Lc({
          searchURL: r.searchURL,
          resolveURL: r.resolveURL
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new Rc(s);
}
function ps() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const ls = /* @__PURE__ */ Ks("playlist", {
  state: () => ({
    list: [],
    currentIndex: -1,
    playMode: "list",
    chatIndexer: null,
    chatId: null
  }),
  getters: {
    current(t) {
      return t.currentIndex >= 0 ? t.list[t.currentIndex] ?? null : null;
    },
    isEmpty(t) {
      return t.list.length === 0;
    }
  },
  actions: {
    init(t) {
      this.chatIndexer = t;
    },
    setChatId(t) {
      this.chatId = t, this.list = this.list.filter((n) => n.source !== "chat"), this.loadFromStorage();
      const s = gt().storage;
      if (s) {
        const n = s.getMetadata(br);
        n && n.chatId === t && this.chatIndexer?.setCursor(t, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const e = gt().storage;
      if (!e || !this.chatId) return;
      const s = e.getMetadata(xr);
      if (s && Array.isArray(s)) {
        const n = s.filter((r) => r && r.source === "user");
        this.list = [...this.list.filter((r) => r.source !== "user"), ...n];
      }
    },
    addItem(t) {
      this.list.push(t), t.source === "user" && this.saveUserList();
    },
    removeItem(t) {
      if (t < 0 || t >= this.list.length) return;
      const e = this.list.splice(t, 1)[0];
      e && e.source === "user" && this.saveUserList(), t === this.currentIndex ? this.currentIndex = -1 : t < this.currentIndex && this.currentIndex--;
    },
    addFromCue(t, e) {
      const s = {
        id: ps(),
        song: t.song,
        artist: t.artist,
        source: "chat",
        messageId: e,
        addedAt: Date.now()
      };
      this.list.push(s);
    },
    addFromSearch(t) {
      const e = {
        id: ps(),
        song: t.name,
        artist: t.artist,
        source: "user",
        providerId: t.provider,
        providerTrackId: t.id,
        providerPicId: t.picId,
        addedAt: Date.now()
      };
      this.list.push(e), this.saveUserList();
    },
    addLocalFile(t, e) {
      const s = {
        id: ps(),
        song: t,
        source: "local",
        localBlobKey: e,
        addedAt: Date.now()
      };
      this.list.push(s);
    },
    play(t) {
      t < 0 || t >= this.list.length || (this.currentIndex = t, this.resolveAndPlay(t));
    },
    next() {
      if (this.list.length === 0) return;
      const t = this.playMode;
      let e = this.currentIndex;
      if (t === "single")
        e = this.currentIndex;
      else if (t === "random")
        if (this.list.length === 1)
          e = 0;
        else {
          for (let s = 0; s < 5; s++) {
            const n = Math.floor(Math.random() * this.list.length);
            if (n !== this.currentIndex) {
              e = n;
              break;
            }
          }
          e === this.currentIndex && (e = (this.currentIndex + 1) % this.list.length);
        }
      else
        e = this.currentIndex + 1, e >= this.list.length && (e = 0);
      this.play(e);
    },
    prev() {
      if (this.list.length === 0) return;
      let t = this.currentIndex - 1;
      t < 0 && (t = this.list.length - 1), this.play(t);
    },
    async resolveAndPlay(t) {
      const e = this.list[t];
      if (!e) return;
      const s = gt(), n = s.storage;
      if (!n) return;
      let r = null;
      if (e.source === "local" && e.localBlobKey) {
        const o = await n.getBlob(e.localBlobKey);
        o && (r = {
          url: URL.createObjectURL(o),
          name: e.song,
          artist: e.artist ?? "",
          source: "local"
        });
      }
      if (!r && e.providerId && e.providerTrackId) {
        const l = await mn(s.settings.providers).resolve(e.providerId, e.providerTrackId, e.providerPicId);
        l && (l.name = e.song, l.artist = e.artist ?? l.artist, r = l);
      }
      if (!r && e.song) {
        const o = mn(s.settings.providers), l = e.artist ? `${e.song} ${e.artist}` : e.song, c = await o.searchAll(l);
        for (let d = 0; d < Math.min(c.length, 3); d++) {
          const u = c[d], h = await o.resolve(u.id, u.provider, u.picId);
          if (h) {
            e.providerId = u.provider, e.providerTrackId = u.id, e.providerPicId = u.picId, h.name = u.name, h.artist = u.artist, r = h;
            break;
          }
        }
      }
      if (!r) {
        console.warn(`[playlist] resolve failed for "${e.song}"`), typeof toastr < "u" && toastr.warning(`无法播放: ${e.song}`);
        return;
      }
      await pe().loadAndPlay(r);
    },
    handleNewCues(t) {
      if (t.length === 0) return;
      const e = gt();
      let s = null;
      for (const n of t)
        for (const r of n.cues) {
          const i = {
            id: ps(),
            song: r.song,
            artist: r.artist,
            source: "chat",
            messageId: n.messageId,
            addedAt: Date.now()
          };
          this.list.push(i), s = i;
        }
      if (e.settings.autoPlayOnNewCue && s) {
        const n = this.list.indexOf(s);
        n >= 0 && this.play(n);
      }
    },
    handleMessageUpdate(t) {
      if (!this.chatIndexer || !this.chatId) return;
      const e = gt(), s = this.chatIndexer.scanMessage(
        this.chatId,
        t,
        e.settings.customCueRules
      ), n = this.list.map((o, l) => o.messageId === t ? l : -1).filter((o) => o >= 0);
      if (n.length === 0) {
        s.cue && this.addFromCue(s.cue, t);
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
    handleMessageDelete(t) {
      const e = this.list.map((s, n) => s.messageId === t ? n : -1).filter((s) => s >= 0);
      for (const s of [...e].reverse())
        this.removeItem(s);
    },
    saveUserList() {
      const e = gt().storage;
      if (!e || !this.chatId) return;
      const s = this.list.filter((n) => n.source === "user");
      e.setMetadata(xr, s);
    },
    getCursor() {
      return !this.chatIndexer || !this.chatId ? -1 : this.chatIndexer.getCursor(this.chatId);
    },
    setCursor(t) {
      if (!this.chatIndexer || !this.chatId) return;
      this.chatIndexer.setCursor(this.chatId, t);
      const s = gt().storage;
      s && s.setMetadata(br, {
        chatId: this.chatId,
        lastScannedMessageId: t,
        updatedAt: Date.now()
      });
    }
  }
}), pe = /* @__PURE__ */ Ks("player", {
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
      const t = new Ic();
      this.audioEngine = t;
      const e = pe();
      t.on("timeupdate", () => {
        if (!t) return;
        e.currentTime = t.currentTime, e.duration = t.duration;
        const s = _r(e.lyrics, t.currentTime), n = s ? e.lyrics.indexOf(s) : -1;
        e.currentLyricIndex = n;
      }), t.on("ended", () => {
        ls().next();
      }), t.on("play", () => {
        e.isPlaying = !0;
      }), t.on("pause", () => {
        e.isPlaying = !1;
      });
    },
    async loadAndPlay(t) {
      this.audioEngine || this.init();
      const e = this.audioEngine;
      e.load(t.url), this.currentTrack = t, t.lyric ? this.updateLyrics(t.lyric) : (this.lyrics = [], this.currentLyricIndex = -1), await e.play(), t.cover;
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
    seek(t) {
      this.audioEngine?.seek(t);
    },
    setVolume(t) {
      this.volume = t, this.audioEngine?.setVolume(t / 100), gt().setVolume(t);
    },
    updateLyrics(t) {
      this.lyrics = Ec(t), this.currentLyricIndex = -1;
    },
    getActiveLyric() {
      return _r(this.lyrics, this.currentTime);
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null;
    }
  }
}), Oc = /* @__PURE__ */ Ks("search", {
  state: () => ({
    keyword: "",
    results: [],
    isSearching: !1,
    error: null
  }),
  actions: {
    setKeyword(t) {
      this.keyword = t;
    },
    async search(t) {
      if (!this.keyword.trim()) {
        this.results = [];
        return;
      }
      this.isSearching = !0, this.error = null;
      try {
        this.results = await t.searchAll(this.keyword);
      } catch (e) {
        this.error = e instanceof Error ? e.message : String(e), this.results = [];
      } finally {
        this.isSearching = !1;
      }
    },
    clear() {
      this.keyword = "", this.results = [], this.error = null;
    }
  }
}), $c = { class: "stmp-collapsed-title" }, Dc = ["aria-label"], Uc = /* @__PURE__ */ Pe({
  __name: "CollapsedBar",
  emits: ["expand"],
  setup(t) {
    const e = pe(), s = ne(() => e.currentTrack?.name || "未播放");
    return (n, r) => (N(), W("div", {
      class: "stmp-collapsed-bar",
      onClick: r[1] || (r[1] = (i) => n.$emit("expand"))
    }, [
      T("span", $c, et(s.value), 1),
      T("button", {
        class: "stmp-collapsed-btn",
        "aria-label": H(e).isPlaying ? "暂停" : "播放",
        onClick: r[0] || (r[0] = Ui((i) => H(e).togglePlay(), ["stop"]))
      }, et(H(e).isPlaying ? "⏸" : "▶"), 9, Dc)
    ]));
  }
}), Re = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, r] of e)
    s[n] = r;
  return s;
}, kc = /* @__PURE__ */ Re(Uc, [["__scopeId", "data-v-76d6990c"]]), Fc = { class: "stmp-playlist" }, Nc = { class: "stmp-upload-area" }, jc = {
  key: 0,
  class: "stmp-empty"
}, Kc = { class: "stmp-group-label" }, Vc = ["onClick"], Hc = { class: "stmp-item-index" }, Bc = { class: "stmp-item-info" }, Wc = { class: "stmp-item-song" }, Jc = {
  key: 0,
  class: "stmp-item-artist"
}, Gc = ["onClick"], Yc = /* @__PURE__ */ Pe({
  __name: "PlaylistView",
  setup(t) {
    const e = ls(), s = gt(), n = /* @__PURE__ */ Kt(null), r = () => {
      n.value?.click();
    }, i = async (u) => {
      const h = u.target;
      if (!h.files || !h.files[0]) return;
      const _ = h.files[0], b = `stmp:audio:${Date.now()}-${_.name}`, I = s.storage;
      I && (await I.setBlob(b, _), e.addLocalFile(_.name, b)), h.value = "";
    }, o = ne(() => {
      const u = {
        chat: [],
        user: [],
        local: []
      };
      return e.list.forEach((h, _) => {
        u[h.source] && u[h.source].push({ index: _, item: h });
      }), u;
    }), l = {
      chat: "From Chat",
      user: "My List",
      local: "Local Files"
    };
    function c(u) {
      e.play(u);
    }
    function d(u) {
      e.removeItem(u);
    }
    return (u, h) => (N(), W("div", Fc, [
      T("div", Nc, [
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
      H(e).isEmpty ? (N(), W("div", jc, "No Songs")) : (N(), W(ft, { key: 1 }, we(["chat", "user", "local"], (_) => T("div", {
        key: _,
        class: "stmp-group"
      }, [
        o.value[_].length ? (N(), W(ft, { key: 0 }, [
          T("div", Kc, et(l[_]), 1),
          (N(!0), W(ft, null, we(o.value[_], (b) => (N(), W("div", {
            key: b.item.id,
            class: he(["stmp-item", { active: b.index === H(e).currentIndex }]),
            onClick: (I) => c(b.index)
          }, [
            T("span", Hc, et(b.index + 1), 1),
            T("div", Bc, [
              T("span", Wc, et(b.item.song), 1),
              b.item.artist ? (N(), W("span", Jc, et(b.item.artist), 1)) : bt("", !0)
            ]),
            T("button", {
              class: "stmp-item-del",
              onClick: Ui((I) => d(b.index), ["stop"])
            }, "✕", 8, Gc)
          ], 10, Vc))), 128))
        ], 64)) : bt("", !0)
      ])), 64))
    ]));
  }
}), qc = /* @__PURE__ */ Re(Yc, [["__scopeId", "data-v-7303863f"]]), Xc = { class: "stmp-search" }, zc = { class: "stmp-search-bar" }, Zc = ["disabled"], Qc = {
  key: 0,
  class: "stmp-search-error"
}, ta = {
  key: 1,
  class: "stmp-search-loading"
}, ea = {
  key: 2,
  class: "stmp-search-empty"
}, sa = {
  key: 3,
  class: "stmp-results"
}, na = ["onClick"], ra = { class: "stmp-result-info" }, ia = { class: "stmp-result-name" }, oa = {
  key: 0,
  class: "stmp-result-artist"
}, la = { class: "stmp-result-provider" }, ca = /* @__PURE__ */ Pe({
  __name: "SearchView",
  setup(t) {
    const e = Oc(), s = ls(), n = gt(), r = /* @__PURE__ */ Kt(e.keyword);
    async function i() {
      e.setKeyword(r.value);
      const c = mn(n.settings.providers);
      await e.search(c);
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
    return (c, d) => (N(), W("div", Xc, [
      T("div", zc, [
        Ue(T("input", {
          "onUpdate:modelValue": d[0] || (d[0] = (u) => r.value = u),
          class: "stmp-search-input",
          placeholder: "Search Song...",
          onKeydown: ki(i, ["enter"])
        }, null, 544), [
          [Ne, r.value]
        ]),
        T("button", {
          class: "stmp-search-btn",
          disabled: H(e).isSearching,
          onClick: i
        }, et(H(e).isSearching ? "..." : "🔍"), 9, Zc)
      ]),
      H(e).error ? (N(), W("div", Qc, [
        T("span", null, et(H(e).error), 1),
        T("button", {
          class: "stmp-retry-btn",
          "aria-label": "重试搜索",
          onClick: o
        }, "重试")
      ])) : bt("", !0),
      H(e).isSearching ? (N(), W("div", ta, "Searching...")) : r.value && !H(e).results.length ? (N(), W("div", ea, " No results ")) : bt("", !0),
      H(e).results.length ? (N(), W("div", sa, [
        (N(!0), W(ft, null, we(H(e).results, (u) => (N(), W("div", {
          key: u.provider + u.id,
          class: "stmp-result",
          onClick: (h) => l(u)
        }, [
          T("div", ra, [
            T("span", ia, et(u.name), 1),
            u.artist ? (N(), W("span", oa, et(u.artist), 1)) : bt("", !0)
          ]),
          T("span", la, et(u.provider), 1)
        ], 8, na))), 128))
      ])) : bt("", !0)
    ]));
  }
}), aa = /* @__PURE__ */ Re(ca, [["__scopeId", "data-v-305488cc"]]), ua = { class: "stmp-panel" }, fa = { class: "stmp-topbar" }, da = { class: "stmp-cover" }, ha = ["src"], pa = {
  key: 1,
  class: "stmp-cover-placeholder"
}, ga = { class: "stmp-track-info" }, ma = { class: "stmp-track-name" }, va = {
  key: 0,
  class: "stmp-track-artist"
}, ya = {
  key: 0,
  class: "stmp-lyric-current"
}, _a = {
  key: 1,
  class: "stmp-lyric-next"
}, ba = {
  key: 2,
  class: "stmp-lyric-empty"
}, xa = { class: "stmp-progress" }, Sa = ["value"], wa = { class: "stmp-time" }, Ca = { class: "stmp-controls" }, Ia = ["aria-label"], Ea = ["value"], Ta = { class: "stmp-tabs" }, Pa = { class: "stmp-tab-content" }, Ra = /* @__PURE__ */ Pe({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(t) {
    const e = pe(), s = ls(), n = gt(), r = /* @__PURE__ */ Kt("list"), i = /* @__PURE__ */ Kt(!0), o = /* @__PURE__ */ Kt(!1), l = ne(() => e.currentTrack?.cover || ""), c = () => {
      o.value = !0;
    };
    Be(
      () => e.currentTrack,
      () => {
        o.value = !1;
      }
    );
    const d = ne(
      () => e.duration > 0 ? e.currentTime / e.duration * 100 : 0
    ), u = ne(
      () => e.currentLyricIndex >= 0 ? e.lyrics[e.currentLyricIndex]?.text ?? null : null
    ), h = ne(() => {
      const M = e.currentLyricIndex;
      return M < 0 ? null : e.lyrics[M + 1]?.text ?? null;
    });
    function _(M) {
      const P = Math.floor(M / 60), w = Math.floor(M % 60);
      return P + ":" + w.toString().padStart(2, "0");
    }
    function b(M) {
      const P = M.target;
      e.seek(Number(P.value) / 100 * e.duration);
    }
    const I = ["list", "random", "single"], x = {
      list: "🔁",
      random: "🔀",
      single: "🔂"
    };
    function A() {
      const M = n.settings.playMode, P = I.indexOf(M), w = I[(P + 1) % I.length];
      n.setPlayMode(w), s.playMode = w;
    }
    function O(M) {
      const P = M.target;
      e.setVolume(Number(P.value));
    }
    return (M, P) => (N(), W("div", ua, [
      T("div", fa, [
        T("div", da, [
          l.value && !o.value ? (N(), W("img", {
            key: 0,
            src: l.value,
            alt: "cover",
            onError: c
          }, null, 40, ha)) : (N(), W("span", pa, "♪"))
        ]),
        T("div", ga, [
          T("div", ma, et(H(e).currentTrack?.name || "No Song"), 1),
          H(e).currentTrack?.artist ? (N(), W("div", va, et(H(e).currentTrack.artist), 1)) : bt("", !0)
        ]),
        T("button", {
          class: "stmp-collapse-btn",
          "aria-label": "收起面板",
          onClick: P[0] || (P[0] = (w) => M.$emit("collapse"))
        }, "▾")
      ]),
      i.value ? (N(), W("div", {
        key: 0,
        class: "stmp-lyrics",
        onClick: P[1] || (P[1] = (w) => i.value = !1)
      }, [
        u.value ? (N(), W("div", ya, et(u.value), 1)) : bt("", !0),
        h.value ? (N(), W("div", _a, et(h.value), 1)) : bt("", !0),
        !u.value && !h.value ? (N(), W("div", ba, "♪")) : bt("", !0)
      ])) : (N(), W("div", {
        key: 1,
        class: "stmp-lyrics-toggle",
        onClick: P[2] || (P[2] = (w) => i.value = !0)
      }, "♪ show lyrics")),
      T("div", xa, [
        T("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: d.value,
          class: "stmp-range",
          onInput: b
        }, null, 40, Sa),
        T("div", wa, [
          T("span", null, et(_(H(e).currentTime)), 1),
          T("span", null, et(_(H(e).duration)), 1)
        ])
      ]),
      T("div", Ca, [
        T("button", {
          class: "stmp-ctrl-btn",
          "aria-label": "上一首",
          onClick: P[3] || (P[3] = (w) => H(s).prev())
        }, "⏮"),
        T("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": H(e).isPlaying ? "暂停" : "播放",
          onClick: P[4] || (P[4] = (w) => H(e).togglePlay())
        }, et(H(e).isPlaying ? "⏸" : "▶"), 9, Ia),
        T("button", {
          class: "stmp-ctrl-btn",
          "aria-label": "下一首",
          onClick: P[5] || (P[5] = (w) => H(s).next())
        }, "⏭"),
        T("button", {
          class: "stmp-ctrl-btn",
          "aria-label": "切换播放模式",
          onClick: A
        }, et(x[H(n).settings.playMode]), 1),
        T("input", {
          type: "range",
          min: "0",
          max: "100",
          value: H(e).volume,
          class: "stmp-volume",
          onInput: O
        }, null, 40, Ea)
      ]),
      T("div", Ta, [
        T("button", {
          class: he(["stmp-tab", { active: r.value === "list" }]),
          onClick: P[6] || (P[6] = (w) => r.value = "list")
        }, " List ", 2),
        T("button", {
          class: he(["stmp-tab", { active: r.value === "search" }]),
          onClick: P[7] || (P[7] = (w) => r.value = "search")
        }, " Search ", 2)
      ]),
      T("div", Pa, [
        r.value === "list" ? (N(), ss(qc, { key: 0 })) : r.value === "search" ? (N(), ss(aa, { key: 1 })) : bt("", !0)
      ])
    ]));
  }
}), Ma = /* @__PURE__ */ Re(Ra, [["__scopeId", "data-v-d3d7f67c"]]), Aa = /* @__PURE__ */ Pe({
  __name: "App",
  setup(t) {
    const e = gt(), s = pe(), n = /* @__PURE__ */ Kt(!1), r = /* @__PURE__ */ Kt(null), i = /* @__PURE__ */ Kt(typeof window < "u" && window.innerWidth < 768), o = () => {
      i.value = window.innerWidth < 768;
    }, l = (P) => {
      P.key === "Escape" && (n.value = !1), P.key === " " && P.target === document.body && (P.preventDefault(), s.togglePlay());
    };
    let c = 0, d = 0, u = 0, h = 0, _ = !1, b = null, I = null;
    function x(P) {
      if (i.value || n.value || P.target.closest("button")) return;
      c = P.clientX, d = P.clientY;
      const w = e.settings.position;
      u = w?.x ?? r.value?.offsetLeft ?? 0, h = w?.y ?? r.value?.offsetTop ?? 0, _ = !1, b = A, I = O, document.addEventListener("pointermove", b), document.addEventListener("pointerup", I);
    }
    function A(P) {
      if (!r.value) return;
      const w = P.clientX - c, j = P.clientY - d;
      (Math.abs(w) > 5 || Math.abs(j) > 5) && (_ = !0);
      let ct = u + w, it = h + j;
      const K = window.innerWidth - (r.value.offsetWidth || 60), B = window.innerHeight - (r.value.offsetHeight || 40);
      ct = Math.max(0, Math.min(ct, K)), it = Math.max(0, Math.min(it, B)), r.value.style.left = ct + "px", r.value.style.top = it + "px", r.value.style.right = "auto", r.value.style.bottom = "auto";
    }
    function O() {
      if (b && document.removeEventListener("pointermove", b), I && document.removeEventListener("pointerup", I), b = null, I = null, !_) {
        M();
        return;
      }
      r.value && e.setPosition({
        x: r.value.offsetLeft,
        y: r.value.offsetTop
      });
    }
    function M() {
      n.value = !n.value;
    }
    return ai(() => {
      const P = e.settings.position;
      P && r.value && !i.value && (r.value.style.left = P.x + "px", r.value.style.top = P.y + "px", r.value.style.right = "auto", r.value.style.bottom = "auto"), window.addEventListener("resize", o), window.addEventListener("keydown", l);
    }), ui(() => {
      O(), window.removeEventListener("resize", o), window.removeEventListener("keydown", l);
    }), (P, w) => (N(), W("div", {
      ref_key: "widgetRef",
      ref: r,
      class: he(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-mobile": i.value
      }]),
      onPointerdown: x
    }, [
      n.value ? (N(), ss(Ma, {
        key: 1,
        onCollapse: M
      })) : (N(), ss(kc, {
        key: 0,
        onExpand: M
      }))
    ], 34));
  }
}), La = /* @__PURE__ */ Re(Aa, [["__scopeId", "data-v-3e08f2ab"]]), Oa = { class: "stmp-settings" }, $a = { class: "stmp-setting-group" }, Da = { class: "stmp-setting-row" }, Ua = ["checked", "onChange"], ka = ["onUpdate:modelValue"], Fa = ["onUpdate:modelValue"], Na = ["onUpdate:modelValue"], ja = { class: "stmp-setting-group" }, Ka = { class: "stmp-setting-label" }, Va = ["value"], Ha = { class: "stmp-setting-group" }, Ba = ["value"], Wa = ["value"], Ja = { class: "stmp-setting-group" }, Ga = { class: "stmp-setting-row" }, Ya = ["checked"], qa = { class: "stmp-setting-group" }, Xa = { class: "stmp-rules" }, za = ["onClick"], Za = { class: "stmp-rule-add" }, Qa = /* @__PURE__ */ Pe({
  __name: "SettingsView",
  setup(t) {
    const e = gt(), s = /* @__PURE__ */ Kt(""), n = [
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
      I && (e.addCustomCueRule(I), s.value = "");
    }
    function o(I) {
      e.removeCustomCueRule(I);
    }
    function l(I) {
      const x = I.target;
      e.setVolume(Number(x.value));
    }
    function c(I) {
      const x = I.target;
      e.setPlayMode(x.value);
    }
    function d(I) {
      const x = I.target;
      e.settings.autoPlayOnNewCue = x.checked, e.save();
    }
    const u = async () => {
      const I = e.storage;
      I && (await I.clearCache(), toastr.success("缓存已清理"));
    }, h = () => {
      const I = JSON.stringify(e.settings, null, 2), x = new Blob([I], { type: "application/json" }), A = URL.createObjectURL(x), O = document.createElement("a");
      O.href = A, O.download = "st-music-player-settings.json", O.click(), URL.revokeObjectURL(A);
    }, _ = () => {
      const I = document.createElement("input");
      I.type = "file", I.accept = ".json", I.onchange = async (x) => {
        const A = x.target.files?.[0];
        if (!A) return;
        const O = await A.text();
        try {
          const M = JSON.parse(O);
          if (typeof M != "object" || M === null) throw new Error("Not an object");
          const P = ["volume", "playMode", "position", "autoPlayOnNewCue", "providers", "customCueRules"], w = {};
          for (const ct of P)
            ct in M && (w[ct] = M[ct]);
          if (typeof w.volume != "number" || w.volume < 0 || w.volume > 100)
            throw new Error("Invalid volume");
          if (typeof w.playMode != "string" || !["list", "random", "single"].includes(w.playMode))
            throw new Error("Invalid playMode");
          if (w.providers && !Array.isArray(w.providers))
            throw new Error("Invalid providers");
          if (w.customCueRules && !Array.isArray(w.customCueRules))
            throw new Error("Invalid customCueRules");
          const j = gt();
          Object.assign(j.settings, w), j.save(), toastr.success("设置已导入");
        } catch (M) {
          console.error("Import failed", M), toastr.error("导入失败: " + (M instanceof Error ? M.message : "JSON 格式错误"));
        }
      }, I.click();
    };
    function b(I) {
      const x = e.settings.providers.find((A) => A.id === I);
      x && (x.enabled = !x.enabled, e.save());
    }
    return (I, x) => (N(), W("div", Oa, [
      T("div", $a, [
        x[4] || (x[4] = T("div", { class: "stmp-setting-label" }, "Providers", -1)),
        (N(!0), W(ft, null, we(H(e).settings.providers, (A) => (N(), W("div", {
          key: A.id,
          class: "stmp-provider-config"
        }, [
          T("label", Da, [
            T("span", null, et(r[A.id] || A.id), 1),
            T("input", {
              type: "checkbox",
              checked: A.enabled,
              onChange: (O) => b(A.id)
            }, null, 40, Ua)
          ]),
          A.id === "netease" ? Ue((N(), W("input", {
            key: 0,
            class: "stmp-provider-input",
            "onUpdate:modelValue": (O) => A.config.baseURL = O,
            placeholder: "API baseURL",
            onChange: x[0] || (x[0] = (O) => H(e).save())
          }, null, 40, ka)), [
            [Ne, A.config.baseURL]
          ]) : bt("", !0),
          A.id === "custom" ? (N(), W(ft, { key: 1 }, [
            Ue(T("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (O) => A.config.searchURL = O,
              placeholder: "Search URL",
              onChange: x[1] || (x[1] = (O) => H(e).save())
            }, null, 40, Fa), [
              [Ne, A.config.searchURL]
            ]),
            Ue(T("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (O) => A.config.resolveURL = O,
              placeholder: "Resolve URL",
              onChange: x[2] || (x[2] = (O) => H(e).save())
            }, null, 40, Na), [
              [Ne, A.config.resolveURL]
            ])
          ], 64)) : bt("", !0)
        ]))), 128))
      ]),
      T("div", ja, [
        T("div", Ka, "Default Volume: " + et(H(e).settings.volume), 1),
        T("input", {
          type: "range",
          min: "0",
          max: "100",
          value: H(e).settings.volume,
          class: "stmp-range",
          onInput: l
        }, null, 40, Va)
      ]),
      T("div", Ha, [
        x[5] || (x[5] = T("div", { class: "stmp-setting-label" }, "Default Play Mode", -1)),
        T("select", {
          class: "stmp-select",
          value: H(e).settings.playMode,
          onChange: c
        }, [
          (N(), W(ft, null, we(n, (A) => T("option", {
            key: A.value,
            value: A.value
          }, et(A.label), 9, Wa)), 64))
        ], 40, Ba)
      ]),
      T("div", Ja, [
        T("div", Ga, [
          x[6] || (x[6] = T("span", null, "Auto-play on new cue", -1)),
          T("input", {
            type: "checkbox",
            checked: H(e).settings.autoPlayOnNewCue,
            onChange: d
          }, null, 40, Ya)
        ])
      ]),
      T("div", qa, [
        x[7] || (x[7] = T("div", { class: "stmp-setting-label" }, "Custom Cue Rules (Regex)", -1)),
        T("div", Xa, [
          (N(!0), W(ft, null, we(H(e).settings.customCueRules, (A, O) => (N(), W("div", {
            key: O,
            class: "stmp-rule"
          }, [
            T("code", null, et(A), 1),
            T("button", {
              class: "stmp-rule-del",
              onClick: (M) => o(O)
            }, "✕", 8, za)
          ]))), 128))
        ]),
        T("div", Za, [
          Ue(T("input", {
            "onUpdate:modelValue": x[3] || (x[3] = (A) => s.value = A),
            class: "stmp-rule-input",
            placeholder: "Add regex rule...",
            onKeydown: ki(i, ["enter"])
          }, null, 544), [
            [Ne, s.value]
          ]),
          T("button", {
            class: "stmp-rule-add-btn",
            onClick: i
          }, "+")
        ])
      ]),
      T("div", { class: "stmp-setting-group" }, [
        x[8] || (x[8] = T("div", { class: "stmp-setting-label" }, "Data", -1)),
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
            onClick: _
          }, "导入数据")
        ])
      ])
    ]));
  }
}), tu = /* @__PURE__ */ Re(Qa, [["__scopeId", "data-v-32510a40"]]);
class eu {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map(), this.registered = [];
  }
  /**
   * Subscribe to an internal event.
   * @returns an unsubscribe function.
   */
  on(e, s) {
    let n = this.listeners.get(e);
    return n || (n = /* @__PURE__ */ new Set(), this.listeners.set(e, n)), n.add(s), () => {
      const r = this.listeners.get(e);
      r && (r.delete(s), r.size === 0 && this.listeners.delete(e));
    };
  }
  /** Start bridging: register ST event listeners. Safe to call once. */
  start() {
    if (this.registered.length > 0) return;
    const e = SillyTavern.getContext(), s = e.eventSource, n = e.event_types, r = (i, o, l) => {
      const c = (...d) => {
        const u = l(d[0]);
        this.emit(o, u);
      };
      s.on(i, c), this.registered.push({ event: i, handler: c });
    };
    r(n.CHAT_CHANGED, "chat-changed", (i) => ({
      chatId: typeof i == "string" ? i : void 0
    })), r(n.GENERATION_ENDED, "message-generated", (i) => ({
      messageId: gs(i)
    })), r(n.MESSAGE_UPDATED, "message-updated", (i) => ({
      messageId: gs(i)
    })), r(n.MESSAGE_DELETED, "message-deleted", (i) => ({
      messageId: gs(i)
    })), r(n.MESSAGE_SWIPED, "message-swiped", (i) => ({
      messageId: gs(i)
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
  emit(e, s) {
    const n = this.listeners.get(e);
    if (n)
      for (const r of n)
        try {
          r(s);
        } catch (i) {
          console.error("[STEventBridge] listener error:", i);
        }
  }
}
function gs(t) {
  if (t == null) return;
  const e = typeof t == "number" ? t : parseInt(String(t), 10);
  return Number.isFinite(e) ? e : void 0;
}
function su() {
  return new eu();
}
const nu = [
  /<bgm>当前bgm[:：](.+?) - (.+?)<\/bgm>/g,
  /<bgm>当前bgm[:：](.+?)<\/bgm>/g,
  /<bgm>(.+?) - (.+?)<\/bgm>/g,
  /<bgm>(.+?)<\/bgm>/g,
  /【BGM】(.+?)(?: - (.+?))?【\/BGM】/g,
  /\[music\](.+?)(?: - (.+?))?\[\/music\]/g
];
function Sr(t, e) {
  const s = [], n = new RegExp(t.source, "g");
  let r;
  for (; (r = n.exec(e)) !== null; ) {
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
function wr(t, e = []) {
  const s = /* @__PURE__ */ new Map(), n = (r) => {
    s.has(r.index) || s.set(r.index, r);
  };
  for (const r of nu)
    for (const i of Sr(r, t)) n(i);
  for (const r of e)
    try {
      const i = new RegExp(r, "g");
      for (const o of Sr(i, t)) n(o);
    } catch {
    }
  return [...s.values()].sort((r, i) => r.index - i.index).map((r) => r.cue);
}
class ru {
  constructor(e) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = e;
  }
  scanIncremental(e, s, n, r = []) {
    const i = [];
    for (let o = s; o <= n; o++) {
      const l = this.getChatMessage(o);
      if (l === void 0) continue;
      const c = wr(l, r);
      if (c.length === 0) continue;
      const d = c.at(-1);
      i.push({ messageId: o, cues: [d] });
    }
    return this.cursors.set(e, {
      chatId: e,
      lastScannedMessageId: n,
      updatedAt: Date.now()
    }), i;
  }
  scanMessage(e, s, n = []) {
    const r = this.getChatMessage(s);
    if (r === void 0)
      return { messageId: s, cue: null };
    const i = wr(r, n), o = i.length > 0 ? i.at(-1) : null;
    return { messageId: s, cue: o };
  }
  getCursor(e) {
    const s = this.cursors.get(e);
    return s ? s.lastScannedMessageId : -1;
  }
  setCursor(e, s) {
    this.cursors.set(e, {
      chatId: e,
      lastScannedMessageId: s,
      updatedAt: Date.now()
    });
  }
  reset(e) {
    this.cursors.delete(e);
  }
}
let Ce = null, Jt = null, Xe = null, ze = null, Ie = null, Es = null;
const iu = `
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
function ou() {
  const t = $("#extensions_settings2");
  if (!t || !t.length || (t.append(iu), ze = t.children(".inline-drawer").last()[0] ?? null, !ze)) return;
  const e = ze.querySelector("#stmp-settings-mount");
  e && Es && (Ie = Fi(tu), Ie.use(Es), Ie.mount(e));
}
function lu() {
  Ie && (Ie.unmount(), Ie = null), ze?.remove(), ze = null;
}
function cu(t, e, s) {
  Jt = su(), Jt.on("chat-changed", () => {
    const n = SillyTavern.getContext(), r = n.chatId ?? String(Date.now());
    if (e.setChatId(r), e.getCursor() < 0 && n.chat.length > 0) {
      const i = t.scanIncremental(
        r,
        0,
        n.chat.length - 1,
        s.settings.customCueRules
      );
      e.handleNewCues(i), e.setCursor(n.chat.length - 1);
    }
  }), Jt.on("message-generated", (n) => {
    const r = SillyTavern.getContext(), i = e.chatId ?? r.chatId ?? "";
    if (!i || n.messageId === void 0) return;
    const o = e.getCursor() + 1, l = n.messageId;
    if (l < o) return;
    const c = t.scanIncremental(
      i,
      o,
      l,
      s.settings.customCueRules
    );
    e.handleNewCues(c), e.setCursor(l);
  }), Jt.on("message-updated", (n) => {
    n.messageId !== void 0 && e.handleMessageUpdate(n.messageId);
  }), Jt.on("message-deleted", (n) => {
    n.messageId !== void 0 && e.handleMessageDelete(n.messageId);
  }), Jt.on("message-swiped", (n) => {
    n.messageId !== void 0 && e.handleMessageUpdate(n.messageId);
  }), Jt.start();
}
function au(t, e, s) {
  const n = SillyTavern.getContext();
  if (n.chatId && n.chat.length > 0 && (e.setChatId(n.chatId), e.getCursor() < 0)) {
    const r = t.scanIncremental(
      n.chatId,
      0,
      n.chat.length - 1,
      s.settings.customCueRules
    );
    e.handleNewCues(r), e.setCursor(n.chat.length - 1);
  }
}
async function du() {
  try {
    const t = document.createElement("div");
    t.id = "st-music-player-root", document.body.appendChild(t);
    const e = yc();
    Es = e, Ce = Fi(La), Ce.use(e), Ce.mount(t);
    const s = gt(), n = Pc();
    s.init(n);
    const r = pe();
    r.init(), r.setVolume(s.settings.volume);
    const i = new ru((c) => SillyTavern.getContext().chat[c]?.mes), o = ls();
    o.init(i), o.playMode = s.settings.playMode, ou();
    const l = SillyTavern.getContext();
    Xe = () => {
      cu(i, o, s), au(i, o, s);
    }, l.eventSource.on(l.event_types.APP_READY, Xe), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (t) {
    console.error("[ST-Music-Player] init failed:", t);
  }
}
function Hi() {
  if (Xe) {
    try {
      const e = SillyTavern.getContext();
      e.eventSource.removeListener(e.event_types.APP_READY, Xe);
    } catch {
    }
    Xe = null;
  }
  if (Jt?.stop(), Jt = null, Ce) {
    try {
      pe().destroy();
    } catch {
    }
    Ce.unmount(), Ce = null;
  }
  const t = document.getElementById("st-music-player-root");
  t && t.remove(), lu(), Es = null;
}
function hu() {
  Hi();
}
async function uu() {
  try {
    const t = SillyTavern.getContext();
    delete t.extensionSettings[_e], t.saveSettingsDebounced();
  } catch (t) {
    console.error("[ST-Music-Player] clean: failed to delete settings:", t);
  }
  try {
    const t = SillyTavern.libs?.localforage;
    if (t && typeof t.keys == "function") {
      const e = await t.keys();
      await Promise.all(
        e.filter((s) => s.startsWith(_e) || s.startsWith("stmp:")).map((s) => t.removeItem(s))
      );
    }
  } catch (t) {
    console.error("[ST-Music-Player] clean: failed to clear localforage:", t);
  }
}
async function pu() {
  await uu(), Hi();
}
export {
  uu as clean,
  pu as delete,
  Hi as destroy,
  hu as disable,
  du as init
};
