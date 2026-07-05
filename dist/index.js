/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function vn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const Z = {}, bt = [], je = () => {
}, Cr = () => !1, Ts = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Rs = (e) => e.startsWith("onUpdate:"), de = Object.assign, yn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Ji = Object.prototype.hasOwnProperty, Y = (e, t) => Ji.call(e, t), k = Array.isArray, xt = (e) => rs(e) === "[object Map]", Ir = (e) => rs(e) === "[object Set]", Fn = (e) => rs(e) === "[object Date]", F = (e) => typeof e == "function", se = (e) => typeof e == "string", Ie = (e) => typeof e == "symbol", X = (e) => e !== null && typeof e == "object", Er = (e) => (X(e) || F(e)) && F(e.then) && F(e.catch), Tr = Object.prototype.toString, rs = (e) => Tr.call(e), Gi = (e) => rs(e).slice(8, -1), Rr = (e) => rs(e) === "[object Object]", Ps = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jt = /* @__PURE__ */ vn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ms = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Yi = /-\w/g, Ee = Ms(
  (e) => e.replace(Yi, (t) => t.slice(1).toUpperCase())
), qi = /\B([A-Z])/g, ot = Ms(
  (e) => e.replace(qi, "-$1").toLowerCase()
), Pr = Ms((e) => e.charAt(0).toUpperCase() + e.slice(1)), Hs = Ms(
  (e) => e ? `on${Pr(e)}` : ""
), Ne = (e, t) => !Object.is(e, t), ms = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Mr = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, _n = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Nn;
const As = () => Nn || (Nn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function bn(e) {
  if (k(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = se(n) ? Qi(n) : bn(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (se(e) || X(e))
    return e;
}
const Xi = /;(?![^(]*\))/g, zi = /:([^]+)/, Zi = /\/\*[^]*?\*\//g;
function Qi(e) {
  const t = {};
  return e.replace(Zi, "").split(Xi).forEach((s) => {
    if (s) {
      const n = s.split(zi);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function pt(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (k(e))
    for (let s = 0; s < e.length; s++) {
      const n = pt(e[s]);
      n && (t += n + " ");
    }
  else if (X(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const eo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", to = /* @__PURE__ */ vn(eo);
function Ar(e) {
  return !!e || e === "";
}
function so(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = xn(e[n], t[n]);
  return s;
}
function xn(e, t) {
  if (e === t) return !0;
  let s = Fn(e), n = Fn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ie(e), n = Ie(t), s || n)
    return e === t;
  if (s = k(e), n = k(t), s || n)
    return s && n ? so(e, t) : !1;
  if (s = X(e), n = X(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !xn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Lr = (e) => !!(e && e.__v_isRef === !0), te = (e) => se(e) ? e : e == null ? "" : k(e) || X(e) && (e.toString === Tr || !F(e.toString)) ? Lr(e) ? te(e.value) : JSON.stringify(e, Or, 2) : String(e), Or = (e, t) => Lr(t) ? Or(e, t.value) : xt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[Bs(n, i) + " =>"] = r, s),
    {}
  )
} : Ir(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Bs(s))
} : Ie(t) ? Bs(t) : X(t) && !k(t) && !Rr(t) ? String(t) : t, Bs = (e, t = "") => {
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
let ae;
class $r {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ae && (ae.active ? (this.parent = ae, this.index = (ae.scopes || (ae.scopes = [])).push(
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
      const s = ae;
      try {
        return ae = this, t();
      } finally {
        ae = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ae, ae = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ae === this)
        ae = this.prevScope;
      else {
        let t = ae;
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
function Dr(e) {
  return new $r(e);
}
function kr() {
  return ae;
}
function no(e, t = !1) {
  ae && ae.cleanups.push(e);
}
let ee;
const Ws = /* @__PURE__ */ new WeakSet();
class Ur {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ae && (ae.active ? ae.effects.push(this) : this.flags &= -2);
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
    const t = ee, s = Te;
    ee = this, Te = !0;
    try {
      return this.fn();
    } finally {
      Kr(this), ee = t, Te = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Cn(t);
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
let Fr = 0, Kt, Vt;
function Nr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Vt, Vt = e;
    return;
  }
  e.next = Kt, Kt = e;
}
function Sn() {
  Fr++;
}
function wn() {
  if (--Fr > 0)
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
function jr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Kr(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Cn(n), ro(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function nn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Vr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Vr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Zt) || (e.globalVersion = Zt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !nn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = ee, n = Te;
  ee = e, Te = !0;
  try {
    jr(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ne(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    ee = s, Te = n, Kr(e), e.flags &= -3;
  }
}
function Cn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Cn(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function ro(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Te = !0;
const Hr = [];
function Ve() {
  Hr.push(Te), Te = !1;
}
function He() {
  const e = Hr.pop();
  Te = e === void 0 ? !0 : e;
}
function jn(e) {
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
class io {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class In {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ee || !Te || ee === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== ee)
      s = this.activeLink = new io(ee, this), ee.deps ? (s.prevDep = ee.depsTail, ee.depsTail.nextDep = s, ee.depsTail = s) : ee.deps = ee.depsTail = s, Br(s);
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
    Sn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      wn();
    }
  }
}
function Br(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Br(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const ys = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ Symbol(
  ""
), rn = /* @__PURE__ */ Symbol(
  ""
), Qt = /* @__PURE__ */ Symbol(
  ""
);
function he(e, t, s) {
  if (Te && ee) {
    let n = ys.get(e);
    n || ys.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new In()), r.map = n, r.key = s), r.track();
  }
}
function Ye(e, t, s, n, r, i) {
  const o = ys.get(e);
  if (!o) {
    Zt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Sn(), t === "clear")
    o.forEach(l);
  else {
    const c = k(e), d = c && Ps(s);
    if (c && s === "length") {
      const u = Number(n);
      o.forEach((h, _) => {
        (_ === "length" || _ === Qt || !Ie(_) && _ >= u) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(Qt)), t) {
        case "add":
          c ? d && l(o.get("length")) : (l(o.get(dt)), xt(e) && l(o.get(rn)));
          break;
        case "delete":
          c || (l(o.get(dt)), xt(e) && l(o.get(rn)));
          break;
        case "set":
          xt(e) && l(o.get(dt));
          break;
      }
  }
  wn();
}
function oo(e, t) {
  const s = ys.get(e);
  return s && s.get(t);
}
function gt(e) {
  const t = /* @__PURE__ */ G(e);
  return t === e ? t : (he(t, "iterate", Qt), /* @__PURE__ */ Se(e) ? t : t.map(Re));
}
function Ls(e) {
  return he(e = /* @__PURE__ */ G(e), "iterate", Qt), e;
}
function Ue(e, t) {
  return /* @__PURE__ */ Ze(e) ? Et(/* @__PURE__ */ Xe(e) ? Re(t) : t) : Re(t);
}
const lo = {
  __proto__: null,
  [Symbol.iterator]() {
    return Js(this, Symbol.iterator, (e) => Ue(this, e));
  },
  concat(...e) {
    return gt(this).concat(
      ...e.map((t) => k(t) ? gt(t) : t)
    );
  },
  entries() {
    return Js(this, "entries", (e) => (e[1] = Ue(this, e[1]), e));
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
    return Gs(this, "includes", e);
  },
  indexOf(...e) {
    return Gs(this, "indexOf", e);
  },
  join(e) {
    return gt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Gs(this, "lastIndexOf", e);
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
    return Kn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Kn(this, "reduceRight", e, t);
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
    return Js(this, "values", (e) => Ue(this, e));
  }
};
function Js(e, t, s) {
  const n = Ls(e), r = n[t]();
  return n !== e && !/* @__PURE__ */ Se(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const co = Array.prototype;
function Be(e, t, s, n, r, i) {
  const o = Ls(e), l = o !== e && !/* @__PURE__ */ Se(e), c = o[t];
  if (c !== co[t]) {
    const h = c.apply(e, i);
    return l ? Re(h) : h;
  }
  let d = s;
  o !== e && (l ? d = function(h, _) {
    return s.call(this, Ue(e, h), _, e);
  } : s.length > 2 && (d = function(h, _) {
    return s.call(this, h, _, e);
  }));
  const u = c.call(o, d, n);
  return l && r ? r(u) : u;
}
function Kn(e, t, s, n) {
  const r = Ls(e), i = r !== e && !/* @__PURE__ */ Se(e);
  let o = s, l = !1;
  r !== e && (i ? (l = n.length === 0, o = function(d, u, h) {
    return l && (l = !1, d = Ue(e, d)), s.call(this, d, Ue(e, u), h, e);
  }) : s.length > 3 && (o = function(d, u, h) {
    return s.call(this, d, u, h, e);
  }));
  const c = r[t](o, ...n);
  return l ? Ue(e, c) : c;
}
function Gs(e, t, s) {
  const n = /* @__PURE__ */ G(e);
  he(n, "iterate", Qt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ $s(s[0]) ? (s[0] = /* @__PURE__ */ G(s[0]), n[t](...s)) : r;
}
function $t(e, t, s = []) {
  Ve(), Sn();
  const n = (/* @__PURE__ */ G(e))[t].apply(e, s);
  return wn(), He(), n;
}
const ao = /* @__PURE__ */ vn("__proto__,__v_isRef,__isVue"), Wr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ie)
);
function uo(e) {
  Ie(e) || (e = String(e));
  const t = /* @__PURE__ */ G(this);
  return he(t, "has", e), t.hasOwnProperty(e);
}
class Jr {
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
      return n === (r ? i ? xo : Xr : i ? qr : Yr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = k(t);
    if (!r) {
      let c;
      if (o && (c = lo[s]))
        return c;
      if (s === "hasOwnProperty")
        return uo;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ne(t) ? t : n
    );
    if ((Ie(s) ? Wr.has(s) : ao(s)) || (r || he(t, "get", s), i))
      return l;
    if (/* @__PURE__ */ ne(l)) {
      const c = o && Ps(s) ? l : l.value;
      return r && X(c) ? /* @__PURE__ */ ln(c) : c;
    }
    return X(l) ? r ? /* @__PURE__ */ ln(l) : /* @__PURE__ */ Os(l) : l;
  }
}
class Gr extends Jr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const o = k(t) && Ps(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Ze(i);
      if (!/* @__PURE__ */ Se(n) && !/* @__PURE__ */ Ze(n) && (i = /* @__PURE__ */ G(i), n = /* @__PURE__ */ G(n)), !o && /* @__PURE__ */ ne(i) && !/* @__PURE__ */ ne(n))
        return d || (i.value = n), !0;
    }
    const l = o ? Number(s) < t.length : Y(t, s), c = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ ne(t) ? t : r
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
    return (!Ie(s) || !Wr.has(s)) && he(t, "has", s), n;
  }
  ownKeys(t) {
    return he(
      t,
      "iterate",
      k(t) ? "length" : dt
    ), Reflect.ownKeys(t);
  }
}
class fo extends Jr {
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
const ho = /* @__PURE__ */ new Gr(), po = /* @__PURE__ */ new fo(), go = /* @__PURE__ */ new Gr(!0);
const on = (e) => e, fs = (e) => Reflect.getPrototypeOf(e);
function mo(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ G(r), o = xt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, d = r[e](...n), u = s ? on : t ? Et : Re;
    return !t && he(
      i,
      "iterate",
      c ? rn : dt
    ), de(
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
function ds(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function vo(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ G(i), l = /* @__PURE__ */ G(r);
      e || (Ne(r, l) && he(o, "get", r), he(o, "get", l));
      const { has: c } = fs(o), d = t ? on : e ? Et : Re;
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
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ G(l), d = t ? on : e ? Et : Re;
      return !e && he(c, "iterate", dt), l.forEach((u, h) => r.call(i, d(u), d(h), o));
    }
  };
  return de(
    s,
    e ? {
      add: ds("add"),
      set: ds("set"),
      delete: ds("delete"),
      clear: ds("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ G(this), o = fs(i), l = /* @__PURE__ */ G(r), c = !t && !/* @__PURE__ */ Se(r) && !/* @__PURE__ */ Ze(r) ? l : r;
        return o.has.call(i, c) || Ne(r, c) && o.has.call(i, r) || Ne(l, c) && o.has.call(i, l) || (i.add(c), Ye(i, "add", c, c)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ Se(i) && !/* @__PURE__ */ Ze(i) && (i = /* @__PURE__ */ G(i));
        const o = /* @__PURE__ */ G(this), { has: l, get: c } = fs(o);
        let d = l.call(o, r);
        d || (r = /* @__PURE__ */ G(r), d = l.call(o, r));
        const u = c.call(o, r);
        return o.set(r, i), d ? Ne(i, u) && Ye(o, "set", r, i) : Ye(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ G(this), { has: o, get: l } = fs(i);
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
    s[r] = mo(r, e, t);
  }), s;
}
function En(e, t) {
  const s = vo(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
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
function So(e) {
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
function Os(e) {
  return /* @__PURE__ */ Ze(e) ? e : Tn(
    e,
    !1,
    ho,
    yo,
    Yr
  );
}
// @__NO_SIDE_EFFECTS__
function wo(e) {
  return Tn(
    e,
    !1,
    go,
    _o,
    qr
  );
}
// @__NO_SIDE_EFFECTS__
function ln(e) {
  return Tn(
    e,
    !0,
    po,
    bo,
    Xr
  );
}
function Tn(e, t, s, n, r) {
  if (!X(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = So(Gi(e));
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
function Se(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function $s(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function G(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ G(t) : e;
}
function Rn(e) {
  return !Y(e, "__v_skip") && Object.isExtensible(e) && Mr(e, "__v_skip", !0), e;
}
const Re = (e) => X(e) ? /* @__PURE__ */ Os(e) : e, Et = (e) => X(e) ? /* @__PURE__ */ ln(e) : e;
// @__NO_SIDE_EFFECTS__
function ne(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  return Co(e, !1);
}
function Co(e, t) {
  return /* @__PURE__ */ ne(e) ? e : new Io(e, t);
}
class Io {
  constructor(t, s) {
    this.dep = new In(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ G(t), this._value = s ? t : Re(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Se(t) || /* @__PURE__ */ Ze(t);
    t = n ? t : /* @__PURE__ */ G(t), Ne(t, s) && (this._rawValue = t, this._value = n ? t : Re(t), this.dep.trigger());
  }
}
function H(e) {
  return /* @__PURE__ */ ne(e) ? e.value : e;
}
const Eo = {
  get: (e, t, s) => t === "__v_raw" ? e : H(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return /* @__PURE__ */ ne(r) && !/* @__PURE__ */ ne(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function zr(e) {
  return /* @__PURE__ */ Xe(e) ? e : new Proxy(e, Eo);
}
// @__NO_SIDE_EFFECTS__
function To(e) {
  const t = k(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = Po(e, s);
  return t;
}
class Ro {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = Ie(s) ? s : String(s), this._raw = /* @__PURE__ */ G(t);
    let r = !0, i = t;
    if (!k(t) || Ie(this._key) || !Ps(this._key))
      do
        r = !/* @__PURE__ */ $s(i) || /* @__PURE__ */ Se(i);
      while (r && (i = i.__v_raw));
    this._shallow = r;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = H(t)), this._value = t === void 0 ? this._defaultValue : t;
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
    return oo(this._raw, this._key);
  }
}
function Po(e, t, s) {
  return new Ro(e, t, s);
}
class Mo {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new In(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Zt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ee !== this)
      return Nr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Vr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ao(e, t, s = !1) {
  let n, r;
  return F(e) ? n = e : (n = e.get, r = e.set), new Mo(n, r, s);
}
const hs = {}, _s = /* @__PURE__ */ new WeakMap();
let ft;
function Lo(e, t = !1, s = ft) {
  if (s) {
    let n = _s.get(s);
    n || _s.set(s, n = []), n.push(e);
  }
}
function Oo(e, t, s = Z) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = s, d = (w) => r ? w : /* @__PURE__ */ Se(w) || r === !1 || r === 0 ? qe(w, 1) : qe(w);
  let u, h, _, b, I = !1, x = !1;
  if (/* @__PURE__ */ ne(e) ? (h = () => e.value, I = /* @__PURE__ */ Se(e)) : /* @__PURE__ */ Xe(e) ? (h = () => d(e), I = !0) : k(e) ? (x = !0, I = e.some((w) => /* @__PURE__ */ Xe(w) || /* @__PURE__ */ Se(w)), h = () => e.map((w) => {
    if (/* @__PURE__ */ ne(w))
      return w.value;
    if (/* @__PURE__ */ Xe(w))
      return d(w);
    if (F(w))
      return c ? c(w, 2) : w();
  })) : F(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (_) {
      Ve();
      try {
        _();
      } finally {
        He();
      }
    }
    const w = ft;
    ft = u;
    try {
      return c ? c(e, 3, [b]) : e(b);
    } finally {
      ft = w;
    }
  } : h = je, t && r) {
    const w = h, j = r === !0 ? 1 / 0 : r;
    h = () => qe(w(), j);
  }
  const A = kr(), O = () => {
    u.stop(), A && A.active && yn(A.effects, u);
  };
  if (i && t) {
    const w = t;
    t = (...j) => {
      const ce = w(...j);
      return O(), ce;
    };
  }
  let M = x ? new Array(e.length).fill(hs) : hs;
  const R = (w) => {
    if (!(!(u.flags & 1) || !u.dirty && !w))
      if (t) {
        const j = u.run();
        if (w || r || I || (x ? j.some((ce, ie) => Ne(ce, M[ie])) : Ne(j, M))) {
          _ && _();
          const ce = ft;
          ft = u;
          try {
            const ie = [
              j,
              // pass undefined as the old value when it's changed for the first time
              M === hs ? void 0 : x && M[0] === hs ? [] : M,
              b
            ];
            M = j, c ? c(t, 3, ie) : (
              // @ts-expect-error
              t(...ie)
            );
          } finally {
            ft = ce;
          }
        }
      } else
        u.run();
  };
  return l && l(R), u = new Ur(h), u.scheduler = o ? () => o(R, !1) : R, b = (w) => Lo(w, !1, u), _ = u.onStop = () => {
    const w = _s.get(u);
    if (w) {
      if (c)
        c(w, 4);
      else
        for (const j of w) j();
      _s.delete(u);
    }
  }, t ? n ? R(!0) : M = u.run() : o ? o(R.bind(null, !0), !0) : u.run(), O.pause = u.pause.bind(u), O.resume = u.resume.bind(u), O.stop = O, O;
}
function qe(e, t = 1 / 0, s) {
  if (t <= 0 || !X(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ ne(e))
    qe(e.value, t, s);
  else if (k(e))
    for (let n = 0; n < e.length; n++)
      qe(e[n], t, s);
  else if (Ir(e) || xt(e))
    e.forEach((n) => {
      qe(n, t, s);
    });
  else if (Rr(e)) {
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
function is(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    Ds(r, t, s);
  }
}
function Pe(e, t, s, n) {
  if (F(e)) {
    const r = is(e, t, s, n);
    return r && Er(r) && r.catch((i) => {
      Ds(i, t, s);
    }), r;
  }
  if (k(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Pe(e[i], t, s, n));
    return r;
  }
}
function Ds(e, t, s, n = !0) {
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
      Ve(), is(i, null, 10, [
        e,
        c,
        d
      ]), He();
      return;
    }
  }
  $o(e, s, r, n, o);
}
function $o(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const me = [];
let ke = -1;
const St = [];
let st = null, vt = 0;
const Zr = /* @__PURE__ */ Promise.resolve();
let bs = null;
function Qr(e) {
  const t = bs || Zr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Do(e) {
  let t = ke + 1, s = me.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = me[n], i = es(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Pn(e) {
  if (!(e.flags & 1)) {
    const t = es(e), s = me[me.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= es(s) ? me.push(e) : me.splice(Do(t), 0, e), e.flags |= 1, ei();
  }
}
function ei() {
  bs || (bs = Zr.then(si));
}
function ko(e) {
  k(e) ? St.push(...e) : st && e.id === -1 ? st.splice(vt + 1, 0, e) : e.flags & 1 || (St.push(e), e.flags |= 1), ei();
}
function Vn(e, t, s = ke + 1) {
  for (; s < me.length; s++) {
    const n = me[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      me.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function ti(e) {
  if (St.length) {
    const t = [...new Set(St)].sort(
      (s, n) => es(s) - es(n)
    );
    if (St.length = 0, st) {
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
function si(e) {
  try {
    for (ke = 0; ke < me.length; ke++) {
      const t = me[ke];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), is(
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
    ke = -1, me.length = 0, ti(), bs = null, (me.length || St.length) && si();
  }
}
let Ce = null, ni = null;
function xs(e) {
  const t = Ce;
  return Ce = e, ni = e && e.type.__scopeId || null, t;
}
function Uo(e, t = Ce, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && Qn(-1);
    const i = xs(t);
    let o;
    try {
      o = e(...r);
    } finally {
      xs(i), n._d && Qn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function kt(e, t) {
  if (Ce === null)
    return e;
  const s = Ns(Ce), n = e.dirs || (e.dirs = []);
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
function Fo(e, t) {
  if (ve) {
    let s = ve.provides;
    const n = ve.parent && ve.parent.provides;
    n === s && (s = ve.provides = Object.create(n)), s[e] = t;
  }
}
function Ht(e, t, s = !1) {
  const n = Li();
  if (n || ht) {
    let r = ht ? ht._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && F(t) ? t.call(n && n.proxy) : t;
  }
}
function No() {
  return !!(Li() || ht);
}
const jo = /* @__PURE__ */ Symbol.for("v-scx"), Ko = () => Ht(jo);
function Bt(e, t, s) {
  return ri(e, t, s);
}
function ri(e, t, s = Z) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = de({}, s), c = t && n || !t && i !== "post";
  let d;
  if (ns) {
    if (i === "sync") {
      const b = Ko();
      d = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!c) {
      const b = () => {
      };
      return b.stop = je, b.resume = je, b.pause = je, b;
    }
  }
  const u = ve;
  l.call = (b, I, x) => Pe(b, u, I, x);
  let h = !1;
  i === "post" ? l.scheduler = (b) => {
    ye(b, u && u.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (b, I) => {
    I ? b() : Pn(b);
  }), l.augmentJob = (b) => {
    t && (b.flags |= 4), h && (b.flags |= 2, u && (b.id = u.uid, b.i = u));
  };
  const _ = Oo(e, t, l);
  return ns && (d ? d.push(_) : c && _()), _;
}
function Vo(e, t, s) {
  const n = this.proxy, r = se(e) ? e.includes(".") ? ii(n, e) : () => n[e] : e.bind(n, n);
  let i;
  F(t) ? i = t : (i = t.handler, s = t);
  const o = os(this), l = ri(r, i.bind(n), s);
  return o(), l;
}
function ii(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const Ho = /* @__PURE__ */ Symbol("_vte"), Bo = (e) => e.__isTeleport, Ys = /* @__PURE__ */ Symbol("_leaveCb");
function Mn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Mn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Rt(e, t) {
  return F(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    de({ name: e.name }, t, { setup: e })
  ) : e;
}
function oi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Hn(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Ss = /* @__PURE__ */ new WeakMap();
function Wt(e, t, s, n, r = !1) {
  if (k(e)) {
    e.forEach(
      (x, A) => Wt(
        x,
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
  const i = n.shapeFlag & 4 ? Ns(n.component) : n.el, o = r ? null : i, { i: l, r: c } = e, d = t && t.r, u = l.refs === Z ? l.refs = {} : l.refs, h = l.setupState, _ = /* @__PURE__ */ G(h), b = h === Z ? Cr : (x) => Hn(u, x) ? !1 : Y(_, x), I = (x, A) => !(A && Hn(u, A));
  if (d != null && d !== c) {
    if (Bn(t), se(d))
      u[d] = null, b(d) && (h[d] = null);
    else if (/* @__PURE__ */ ne(d)) {
      const x = t;
      I(d, x.k) && (d.value = null), x.k && (u[x.k] = null);
    }
  }
  if (F(c)) {
    Ve();
    try {
      is(c, l, 12, [o, u]);
    } finally {
      He();
    }
  } else {
    const x = se(c), A = /* @__PURE__ */ ne(c);
    if (x || A) {
      const O = () => {
        if (e.f) {
          const M = x ? b(c) ? h[c] : u[c] : I() || !e.k ? c.value : u[e.k];
          if (r)
            k(M) && yn(M, i);
          else if (k(M))
            M.includes(i) || M.push(i);
          else if (x)
            u[c] = [i], b(c) && (h[c] = u[c]);
          else {
            const R = [i];
            I(c, e.k) && (c.value = R), e.k && (u[e.k] = R);
          }
        } else x ? (u[c] = o, b(c) && (h[c] = o)) : A && (I(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const M = () => {
          O(), Ss.delete(e);
        };
        M.id = -1, Ss.set(e, M), ye(M, s);
      } else
        Bn(e), O();
    }
  }
}
function Bn(e) {
  const t = Ss.get(e);
  t && (t.flags |= 8, Ss.delete(e));
}
As().requestIdleCallback;
As().cancelIdleCallback;
const Jt = (e) => !!e.type.__asyncLoader, li = (e) => e.type.__isKeepAlive;
function Wo(e, t) {
  ci(e, "a", t);
}
function Jo(e, t) {
  ci(e, "da", t);
}
function ci(e, t, s = ve) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ks(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      li(r.parent.vnode) && Go(n, t, s, r), r = r.parent;
  }
}
function Go(e, t, s, n) {
  const r = ks(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  fi(() => {
    yn(n[t], r);
  }, s);
}
function ks(e, t, s = ve, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ve();
      const l = os(s), c = Pe(t, s, e, o);
      return l(), He(), c;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Qe = (e) => (t, s = ve) => {
  (!ns || e === "sp") && ks(e, (...n) => t(...n), s);
}, Yo = Qe("bm"), ai = Qe("m"), qo = Qe(
  "bu"
), Xo = Qe("u"), ui = Qe(
  "bum"
), fi = Qe("um"), zo = Qe(
  "sp"
), Zo = Qe("rtg"), Qo = Qe("rtc");
function el(e, t = ve) {
  ks("ec", e, t);
}
const tl = /* @__PURE__ */ Symbol.for("v-ndc");
function wt(e, t, s, n) {
  let r;
  const i = s, o = k(e);
  if (o || se(e)) {
    const l = o && /* @__PURE__ */ Xe(e);
    let c = !1, d = !1;
    l && (c = !/* @__PURE__ */ Se(e), d = /* @__PURE__ */ Ze(e), e = Ls(e)), r = new Array(e.length);
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
const cn = (e) => e ? Oi(e) ? Ns(e) : cn(e.parent) : null, Gt = (
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
    $parent: (e) => cn(e.parent),
    $root: (e) => cn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => hi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Pn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qr.bind(e.proxy)),
    $watch: (e) => Vo.bind(e)
  })
), qs = (e, t) => e !== Z && !e.__isScriptSetup && Y(e, t), sl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const _ = o[t];
      if (_ !== void 0)
        switch (_) {
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
        if (qs(n, t))
          return o[t] = 1, n[t];
        if (r !== Z && Y(r, t))
          return o[t] = 2, r[t];
        if (Y(i, t))
          return o[t] = 3, i[t];
        if (s !== Z && Y(s, t))
          return o[t] = 4, s[t];
        an && (o[t] = 0);
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
    return qs(r, t) ? (r[t] = s, !0) : n !== Z && Y(n, t) ? (n[t] = s, !0) : Y(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: o }
  }, l) {
    let c;
    return !!(s[l] || e !== Z && l[0] !== "$" && Y(e, l) || qs(t, l) || Y(i, l) || Y(n, l) || Y(Gt, l) || Y(r.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : Y(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Wn(e) {
  return k(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let an = !0;
function nl(e) {
  const t = hi(e), s = e.proxy, n = e.ctx;
  an = !1, t.beforeCreate && Jn(t.beforeCreate, e, "bc");
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
    destroyed: R,
    unmounted: w,
    render: j,
    renderTracked: ce,
    renderTriggered: ie,
    errorCaptured: K,
    serverPrefetch: B,
    // public API
    expose: oe,
    inheritAttrs: we,
    // assets
    components: Me,
    directives: et,
    filters: Mt
  } = t;
  if (d && rl(d, n, null), o)
    for (const V in o) {
      const Q = o[V];
      F(Q) && (n[V] = Q.bind(s));
    }
  if (r) {
    const V = r.call(s, s);
    X(V) && (e.data = /* @__PURE__ */ Os(V));
  }
  if (an = !0, i)
    for (const V in i) {
      const Q = i[V], lt = F(Q) ? Q.bind(s, s) : F(Q.get) ? Q.get.bind(s, s) : je, as = !F(Q) && F(Q.set) ? Q.set.bind(s) : je, ct = nt({
        get: lt,
        set: as
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
      di(l[V], n, s, V);
  if (c) {
    const V = F(c) ? c.call(s) : c;
    Reflect.ownKeys(V).forEach((Q) => {
      Fo(Q, V[Q]);
    });
  }
  u && Jn(u, e, "c");
  function re(V, Q) {
    k(Q) ? Q.forEach((lt) => V(lt.bind(s))) : Q && V(Q.bind(s));
  }
  if (re(Yo, h), re(ai, _), re(qo, b), re(Xo, I), re(Wo, x), re(Jo, A), re(el, K), re(Qo, ce), re(Zo, ie), re(ui, M), re(fi, w), re(zo, B), k(oe))
    if (oe.length) {
      const V = e.exposed || (e.exposed = {});
      oe.forEach((Q) => {
        Object.defineProperty(V, Q, {
          get: () => s[Q],
          set: (lt) => s[Q] = lt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  j && e.render === je && (e.render = j), we != null && (e.inheritAttrs = we), Me && (e.components = Me), et && (e.directives = et), B && oi(e);
}
function rl(e, t, s = je) {
  k(e) && (e = un(e));
  for (const n in e) {
    const r = e[n];
    let i;
    X(r) ? "default" in r ? i = Ht(
      r.from || n,
      r.default,
      !0
    ) : i = Ht(r.from || n) : i = Ht(r), /* @__PURE__ */ ne(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function Jn(e, t, s) {
  Pe(
    k(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function di(e, t, s, n) {
  let r = n.includes(".") ? ii(s, n) : () => s[n];
  if (se(e)) {
    const i = t[e];
    F(i) && Bt(r, i);
  } else if (F(e))
    Bt(r, e.bind(s));
  else if (X(e))
    if (k(e))
      e.forEach((i) => di(i, t, s, n));
    else {
      const i = F(e.handler) ? e.handler.bind(s) : t[e.handler];
      F(i) && Bt(r, i, e);
    }
}
function hi(e) {
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
      const l = il[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const il = {
  data: Gn,
  props: Yn,
  emits: Yn,
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
  watch: ll,
  // provide / inject
  provide: Gn,
  inject: ol
};
function Gn(e, t) {
  return t ? e ? function() {
    return de(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ol(e, t) {
  return Ut(un(e), un(t));
}
function un(e) {
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
function Yn(e, t) {
  return e ? k(e) && k(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : de(
    /* @__PURE__ */ Object.create(null),
    Wn(e),
    Wn(t ?? {})
  ) : t;
}
function ll(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = de(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = pe(e[n], t[n]);
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
function al(e, t) {
  return function(n, r = null) {
    F(n) || (n = de({}, n)), r != null && !X(r) && (r = null);
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
          const b = d._ceVNode || ze(n, r);
          return b.appContext = i, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), e(b, u, _), c = !0, d._container = u, u.__vue_app__ = d, Ns(b.component);
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
const ul = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ee(t)}Modifiers`] || e[`${ot(t)}Modifiers`];
function fl(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Z;
  let r = s;
  const i = t.startsWith("update:"), o = i && ul(n, t.slice(7));
  o && (o.trim && (r = s.map((u) => se(u) ? u.trim() : u)), o.number && (r = s.map(_n)));
  let l, c = n[l = Hs(t)] || // also try camelCase event handler (#2249)
  n[l = Hs(Ee(t))];
  !c && i && (c = n[l = Hs(ot(t))]), c && Pe(
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
const dl = /* @__PURE__ */ new WeakMap();
function gi(e, t, s = !1) {
  const n = s ? dl : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!F(e)) {
    const c = (d) => {
      const u = gi(d, t, !0);
      u && (l = !0, de(o, u));
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (X(e) && n.set(e, null), null) : (k(i) ? i.forEach((c) => o[c] = null) : de(o, i), X(e) && n.set(e, o), o);
}
function Us(e, t) {
  return !e || !Ts(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, ot(t)) || Y(e, t));
}
function qn(e) {
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
    data: _,
    setupState: b,
    ctx: I,
    inheritAttrs: x
  } = e, A = xs(e);
  let O, M;
  try {
    if (s.shapeFlag & 4) {
      const w = r || n, j = w;
      O = Fe(
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
      const w = t;
      O = Fe(
        w.length > 1 ? w(
          h,
          { attrs: l, slots: o, emit: c }
        ) : w(
          h,
          null
        )
      ), M = t.props ? l : hl(l);
    }
  } catch (w) {
    Yt.length = 0, Ds(w, e, 1), O = ze(rt);
  }
  let R = O;
  if (M && x !== !1) {
    const w = Object.keys(M), { shapeFlag: j } = R;
    w.length && j & 7 && (i && w.some(Rs) && (M = pl(
      M,
      i
    )), R = Tt(R, M, !1, !0));
  }
  return s.dirs && (R = Tt(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(s.dirs) : s.dirs), s.transition && Mn(R, s.transition), O = R, xs(A), O;
}
const hl = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Ts(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, pl = (e, t) => {
  const s = {};
  for (const n in e)
    (!Rs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function gl(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: l, patchFlag: c } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? Xn(n, o, d) : !!o;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const _ = u[h];
        if (mi(o, n, _) && !Us(d, _))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? Xn(n, o, d) : !0 : !!o;
  return !1;
}
function Xn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (mi(t, e, i) && !Us(s, i))
      return !0;
  }
  return !1;
}
function mi(e, t, s) {
  const n = e[s], r = t[s];
  return s === "style" && X(n) && X(r) ? !xn(n, r) : n !== r;
}
function ml({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = n, e = r), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const vi = {}, yi = () => Object.create(vi), _i = (e) => Object.getPrototypeOf(e) === vi;
function vl(e, t, s, n = !1) {
  const r = {}, i = yi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), bi(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : /* @__PURE__ */ wo(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function yl(e, t, s, n) {
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
        let _ = u[h];
        if (Us(e.emitsOptions, _))
          continue;
        const b = t[_];
        if (c)
          if (Y(i, _))
            b !== i[_] && (i[_] = b, d = !0);
          else {
            const I = Ee(_);
            r[I] = fn(
              c,
              l,
              I,
              b,
              e,
              !1
            );
          }
        else
          b !== i[_] && (i[_] = b, d = !0);
      }
    }
  } else {
    bi(e, t, r, i) && (d = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !Y(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ot(h)) === h || !Y(t, u))) && (c ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[u] !== void 0) && (r[h] = fn(
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
function bi(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (jt(c))
        continue;
      const d = t[c];
      let u;
      r && Y(r, u = Ee(c)) ? !i || !i.includes(u) ? s[u] = d : (l || (l = {}))[u] = d : Us(e.emitsOptions, c) || (!(c in n) || d !== n[c]) && (n[c] = d, o = !0);
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
        e,
        !Y(d, h)
      );
    }
  }
  return o;
}
function fn(e, t, s, n, r, i) {
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
          const u = os(r);
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
const _l = /* @__PURE__ */ new WeakMap();
function xi(e, t, s = !1) {
  const n = s ? _l : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let c = !1;
  if (!F(e)) {
    const u = (h) => {
      c = !0;
      const [_, b] = xi(h, t, !0);
      de(o, _), b && l.push(...b);
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !c)
    return X(e) && n.set(e, bt), bt;
  if (k(i))
    for (let u = 0; u < i.length; u++) {
      const h = Ee(i[u]);
      zn(h) && (o[h] = Z);
    }
  else if (i)
    for (const u in i) {
      const h = Ee(u);
      if (zn(h)) {
        const _ = i[u], b = o[h] = k(_) || F(_) ? { type: _ } : de({}, _), I = b.type;
        let x = !1, A = !0;
        if (k(I))
          for (let O = 0; O < I.length; ++O) {
            const M = I[O], R = F(M) && M.name;
            if (R === "Boolean") {
              x = !0;
              break;
            } else R === "String" && (A = !1);
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
  return X(e) && n.set(e, d), d;
}
function zn(e) {
  return e[0] !== "$" && !jt(e);
}
const An = (e) => e === "_" || e === "_ctx" || e === "$stable", Ln = (e) => k(e) ? e.map(Fe) : [Fe(e)], bl = (e, t, s) => {
  if (t._n)
    return t;
  const n = Uo((...r) => Ln(t(...r)), s);
  return n._c = !1, n;
}, Si = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (An(r)) continue;
    const i = e[r];
    if (F(i))
      t[r] = bl(r, i, n);
    else if (i != null) {
      const o = Ln(i);
      t[r] = () => o;
    }
  }
}, wi = (e, t) => {
  const s = Ln(t);
  e.slots.default = () => s;
}, Ci = (e, t, s) => {
  for (const n in t)
    (s || !An(n)) && (e[n] = t[n]);
}, xl = (e, t, s) => {
  const n = e.slots = yi();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Ci(n, t, s), s && Mr(n, "_", r, !0)) : Si(t, n);
  } else t && wi(e, t);
}, Sl = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = Z;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : Ci(r, t, s) : (i = !t.$stable, Si(t, r)), o = t;
  } else t && (wi(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !An(l) && o[l] == null && delete r[l];
}, ye = Tl;
function wl(e) {
  return Cl(e);
}
function Cl(e, t) {
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
    setScopeId: b = je,
    insertStaticContent: I
  } = e, x = (a, f, p, y = null, v = null, g = null, E = void 0, C = null, S = !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !Dt(a, f) && (y = us(a), Ae(a, v, g, !0), a = null), f.patchFlag === -2 && (S = !1, f.dynamicChildren = null);
    const { type: m, ref: D, shapeFlag: P } = f;
    switch (m) {
      case Fs:
        A(a, f, p, y);
        break;
      case rt:
        O(a, f, p, y);
        break;
      case zs:
        a == null && M(f, p, y, E);
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
        P & 1 ? j(
          a,
          f,
          p,
          y,
          v,
          g,
          E,
          C,
          S
        ) : P & 6 ? et(
          a,
          f,
          p,
          y,
          v,
          g,
          E,
          C,
          S
        ) : (P & 64 || P & 128) && m.process(
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
  }, M = (a, f, p, y) => {
    [a.el, a.anchor] = I(
      a.children,
      f,
      p,
      y,
      a.el,
      a.anchor
    );
  }, R = ({ el: a, anchor: f }, p, y) => {
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
      ce(
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
  }, ce = (a, f, p, y, v, g, E, C) => {
    let S, m;
    const { props: D, shapeFlag: P, transition: L, dirs: U } = a;
    if (S = a.el = o(
      a.type,
      g,
      D && D.is,
      D
    ), P & 8 ? u(S, a.children) : P & 16 && K(
      a.children,
      S,
      null,
      y,
      v,
      Xs(a, g),
      E,
      C
    ), U && at(a, null, y, "created"), ie(S, a, a.scopeId, E, y), D) {
      for (const z in D)
        z !== "value" && !jt(z) && i(S, z, null, D[z], g, y);
      "value" in D && i(S, "value", null, D.value, g), (m = D.onVnodeBeforeMount) && De(m, y, a);
    }
    U && at(a, null, y, "beforeMount");
    const J = Il(v, L);
    J && L.beforeEnter(S), n(S, f, p), ((m = D && D.onVnodeMounted) || J || U) && ye(() => {
      try {
        m && De(m, y, a), J && L.enter(S), U && at(a, null, y, "mounted");
      } finally {
      }
    }, v);
  }, ie = (a, f, p, y, v) => {
    if (p && b(a, p), y)
      for (let g = 0; g < y.length; g++)
        b(a, y[g]);
    if (v) {
      let g = v.subTree;
      if (f === g || Ri(g.type) && (g.ssContent === f || g.ssFallback === f)) {
        const E = v.vnode;
        ie(
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
    const P = a.props || Z, L = f.props || Z;
    let U;
    if (p && ut(p, !1), (U = L.onVnodeBeforeUpdate) && De(U, p, f, a), D && at(f, a, p, "beforeUpdate"), p && ut(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    m && (!a.dynamicChildren || a.dynamicChildren.length !== m.length) && (S = 0, E = !1, m = null), (P.innerHTML && L.innerHTML == null || P.textContent && L.textContent == null) && u(C, ""), m ? oe(
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
        we(C, P, L, p, v);
      else if (S & 2 && P.class !== L.class && i(C, "class", null, L.class, v), S & 4 && i(C, "style", P.style, L.style, v), S & 8) {
        const J = f.dynamicProps;
        for (let z = 0; z < J.length; z++) {
          const q = J[z], le = P[q], ue = L[q];
          (ue !== le || q === "value") && i(C, q, le, ue, v, p);
        }
      }
      S & 1 && a.children !== f.children && u(C, f.children);
    } else !E && m == null && we(C, P, L, p, v);
    ((U = L.onVnodeUpdated) || D) && ye(() => {
      U && De(U, p, f, a), D && at(f, a, p, "updated");
    }, y);
  }, oe = (a, f, p, y, v, g, E) => {
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
  }, we = (a, f, p, y, v) => {
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
    let { patchFlag: P, dynamicChildren: L, slotScopeIds: U } = f;
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
    )) : P > 0 && P & 64 && L && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === L.length ? (oe(
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
    ) : cs(a, f, S);
  }, Mt = (a, f, p, y, v, g, E) => {
    const C = a.component = Dl(
      a,
      y,
      v
    );
    if (li(a) && (C.ctx.renderer = Lt), kl(C, !1, E), C.asyncDep) {
      if (v && v.registerDep(C, re, E), !a.el) {
        const S = C.subTree = ze(rt);
        O(null, S, f, p), a.placeholder = S.el;
      }
    } else
      re(
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
  }, re = (a, f, p, y, v, g, E) => {
    const C = () => {
      if (a.isMounted) {
        let { next: P, bu: L, u: U, parent: J, vnode: z } = a;
        {
          const Oe = Ei(a);
          if (Oe) {
            P && (P.el = z.el, V(a, P, E)), Oe.asyncDep.then(() => {
              ye(() => {
                a.isUnmounted || m();
              }, v);
            });
            return;
          }
        }
        let q = P, le;
        ut(a, !1), P ? (P.el = z.el, V(a, P, E)) : P = z, L && ms(L), (le = P.props && P.props.onVnodeBeforeUpdate) && De(le, J, P, z), ut(a, !0);
        const ue = qn(a), Le = a.subTree;
        a.subTree = ue, x(
          Le,
          ue,
          // parent may have changed if it's in a teleport
          h(Le.el),
          // anchor may have changed if it's in a fragment
          us(Le),
          a,
          v,
          g
        ), P.el = ue.el, q === null && ml(a, ue.el), U && ye(U, v), (le = P.props && P.props.onVnodeUpdated) && ye(
          () => De(le, J, P, z),
          v
        );
      } else {
        let P;
        const { el: L, props: U } = f, { bm: J, m: z, parent: q, root: le, type: ue } = a, Le = Jt(f);
        ut(a, !1), J && ms(J), !Le && (P = U && U.onVnodeBeforeMount) && De(P, q, f), ut(a, !0);
        {
          le.ce && le.ce._hasShadowRoot() && le.ce._injectChildStyle(
            ue,
            a.parent ? a.parent.type : void 0
          );
          const Oe = a.subTree = qn(a);
          x(
            null,
            Oe,
            p,
            y,
            a,
            v,
            g
          ), f.el = Oe.el;
        }
        if (z && ye(z, v), !Le && (P = U && U.onVnodeMounted)) {
          const Oe = f;
          ye(
            () => De(P, q, Oe),
            v
          );
        }
        (f.shapeFlag & 256 || q && Jt(q.vnode) && q.vnode.shapeFlag & 256) && a.a && ye(a.a, v), a.isMounted = !0, f = p = y = null;
      }
    };
    a.scope.on();
    const S = a.effect = new Ur(C);
    a.scope.off();
    const m = a.update = S.run.bind(S), D = a.job = S.runIfDirty.bind(S);
    D.i = a, D.id = a.uid, S.scheduler = () => Pn(D), ut(a, !0), m();
  }, V = (a, f, p) => {
    f.component = a;
    const y = a.vnode.props;
    a.vnode = f, a.next = null, yl(a, f.props, y, p), Sl(a, f.children, p), Ve(), Vn(a), He();
  }, Q = (a, f, p, y, v, g, E, C, S = !1) => {
    const m = a && a.children, D = a ? a.shapeFlag : 0, P = f.children, { patchFlag: L, shapeFlag: U } = f;
    if (L > 0) {
      if (L & 128) {
        as(
          m,
          P,
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
          P,
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
    U & 8 ? (D & 16 && At(m, v, g), P !== m && u(p, P)) : D & 16 ? U & 16 ? as(
      m,
      P,
      p,
      y,
      v,
      g,
      E,
      C,
      S
    ) : At(m, v, g, !0) : (D & 8 && u(p, ""), U & 16 && K(
      P,
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
    const m = a.length, D = f.length, P = Math.min(m, D);
    let L;
    for (L = 0; L < P; L++) {
      const U = f[L] = S ? Ge(f[L]) : Fe(f[L]);
      x(
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
      P
    ) : K(
      f,
      p,
      y,
      v,
      g,
      E,
      C,
      S,
      P
    );
  }, as = (a, f, p, y, v, g, E, C, S) => {
    let m = 0;
    const D = f.length;
    let P = a.length - 1, L = D - 1;
    for (; m <= P && m <= L; ) {
      const U = a[m], J = f[m] = S ? Ge(f[m]) : Fe(f[m]);
      if (Dt(U, J))
        x(
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
    for (; m <= P && m <= L; ) {
      const U = a[P], J = f[L] = S ? Ge(f[L]) : Fe(f[L]);
      if (Dt(U, J))
        x(
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
      P--, L--;
    }
    if (m > P) {
      if (m <= L) {
        const U = L + 1, J = U < D ? f[U].el : y;
        for (; m <= L; )
          x(
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
      for (; m <= P; )
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
      for (m = U; m <= P; m++) {
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
        $e === void 0 ? Ae(_e, v, g, !0) : (Ot[$e - J] = m + 1, $e >= Oe ? Oe = $e : Le = !0, x(
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
      const Dn = Le ? El(Ot) : bt;
      for (q = Dn.length - 1, m = ue - 1; m >= 0; m--) {
        const _e = J + m, $e = f[_e], kn = f[_e + 1], Un = _e + 1 < D ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          kn.el || Ti(kn)
        ) : y;
        Ot[m] === 0 ? x(
          null,
          $e,
          p,
          Un,
          v,
          g,
          E,
          C,
          S
        ) : Le && (q < 0 || m !== Dn[q] ? ct($e, p, Un, 2) : q--);
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
      for (let P = 0; P < S.length; P++)
        ct(S[P], f, p, y);
      n(a.anchor, f, p);
      return;
    }
    if (E === zs) {
      R(a, f, p);
      return;
    }
    if (y !== 2 && m & 1 && C)
      if (y === 0)
        C.persisted && !g[Ys] ? n(g, f, p) : (C.beforeEnter(g), n(g, f, p), ye(() => C.enter(g), v));
      else {
        const { leave: P, delayLeave: L, afterLeave: U } = C, J = () => {
          a.ctx.isUnmounted ? r(g) : n(g, f, p);
        }, z = () => {
          const q = g._isLeaving || !!g[Ys];
          g._isLeaving && g[Ys](
            !0
            /* cancelled */
          ), C.persisted && !q ? J() : P(g, () => {
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
      patchFlag: P,
      dirs: L,
      cacheIndex: U,
      memo: J
    } = a;
    if (P === -2 && (v = !1), C != null && (Ve(), Wt(C, null, p, a, !0), He()), U != null && (f.renderCache[U] = void 0), D & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const z = D & 1 && L, q = !Jt(a);
    let le;
    if (q && (le = E && E.onVnodeBeforeUnmount) && De(le, f, a), D & 6)
      Wi(a.component, p, y);
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
      (g !== fe || P > 0 && P & 64) ? At(
        m,
        f,
        p,
        !1,
        !0
      ) : (g === fe && P & 384 || !v && D & 16) && At(S, f, p), y && On(a);
    }
    const ue = J != null && U == null;
    (q && (le = E && E.onVnodeUnmounted) || z || ue) && ye(() => {
      le && De(le, f, a), z && at(a, null, f, "unmounted"), ue && (a.el = null);
    }, p);
  }, On = (a) => {
    const { type: f, el: p, anchor: y, transition: v } = a;
    if (f === fe) {
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
    Zn(S), Zn(m), y && ms(y), v.stop(), g && (g.flags |= 8, Ae(E, a, f, p)), C && ye(C, f), ye(() => {
      a.isUnmounted = !0;
    }, f);
  }, At = (a, f, p, y = !1, v = !1, g = 0) => {
    for (let E = g; E < a.length; E++)
      Ae(a[E], f, p, y, v);
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
    a == null ? f._vnode && (Ae(f._vnode, null, null, !0), y = f._vnode.component) : x(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      p
    ), f._vnode = a, Vs || (Vs = !0, Vn(y), ti(), Vs = !1);
  }, Lt = {
    p: x,
    um: Ae,
    m: ct,
    r: On,
    mt: Mt,
    mc: K,
    pc: Q,
    pbc: oe,
    n: us,
    o: e
  };
  return {
    render: $n,
    hydrate: void 0,
    createApp: al($n)
  };
}
function Xs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ut({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Il(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ii(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (k(n) && k(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Ge(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && Ii(o, l)), l.type === Fs && (l.patchFlag === -1 && (l = r[i] = Ge(l)), l.el = o.el), l.type === rt && !l.el && (l.el = o.el);
    }
}
function El(e) {
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
function Ei(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ei(t);
}
function Zn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ti(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ti(t.subTree) : null;
}
const Ri = (e) => e.__isSuspense;
function Tl(e, t) {
  t && t.pendingBranch ? k(e) ? t.effects.push(...e) : t.effects.push(e) : ko(e);
}
const fe = /* @__PURE__ */ Symbol.for("v-fgt"), Fs = /* @__PURE__ */ Symbol.for("v-txt"), rt = /* @__PURE__ */ Symbol.for("v-cmt"), zs = /* @__PURE__ */ Symbol.for("v-stc"), Yt = [];
let xe = null;
function N(e = !1) {
  Yt.push(xe = e ? null : []);
}
function Rl() {
  Yt.pop(), xe = Yt[Yt.length - 1] || null;
}
let ts = 1;
function Qn(e, t = !1) {
  ts += e, e < 0 && xe && t && (xe.hasOnce = !0);
}
function Pi(e) {
  return e.dynamicChildren = ts > 0 ? xe || bt : null, Rl(), ts > 0 && xe && xe.push(e), e;
}
function W(e, t, s, n, r, i) {
  return Pi(
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
function ss(e, t, s, n, r) {
  return Pi(
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
function Mi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Dt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ai = ({ key: e }) => e ?? null, vs = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || /* @__PURE__ */ ne(e) || F(e) ? { i: Ce, r: e, k: t, f: !!s } : e : null);
function T(e, t = null, s = null, n = 0, r = null, i = e === fe ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ai(t),
    ref: t && vs(t),
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
    ctx: Ce
  };
  return l ? (Cs(c, s), i & 128 && e.normalize(c)) : s && (c.shapeFlag |= se(s) ? 8 : 16), ts > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && xe.push(c), c;
}
const ze = Pl;
function Pl(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === tl) && (e = rt), Mi(e)) {
    const l = Tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Cs(l, s), ts > 0 && !i && xe && (l.shapeFlag & 6 ? xe[xe.indexOf(e)] = l : xe.push(l)), l.patchFlag = -2, l;
  }
  if (jl(e) && (e = e.__vccOpts), t) {
    t = Ml(t);
    let { class: l, style: c } = t;
    l && !se(l) && (t.class = pt(l)), X(c) && (/* @__PURE__ */ $s(c) && !k(c) && (c = de({}, c)), t.style = bn(c));
  }
  const o = se(e) ? 1 : Ri(e) ? 128 : Bo(e) ? 64 : X(e) ? 4 : F(e) ? 2 : 0;
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
function Ml(e) {
  return e ? /* @__PURE__ */ $s(e) || _i(e) ? de({}, e) : e : null;
}
function Tt(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e, d = t ? Ll(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ai(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? k(i) ? i.concat(vs(t)) : [i, vs(t)] : vs(t)
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
  return c && n && Mn(
    u,
    c.clone(u)
  ), u;
}
function Al(e = " ", t = 0) {
  return ze(Fs, null, e, t);
}
function be(e = "", t = !1) {
  return t ? (N(), ss(rt, null, e)) : ze(rt, null, e);
}
function Fe(e) {
  return e == null || typeof e == "boolean" ? ze(rt) : k(e) ? ze(
    fe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Mi(e) ? Ge(e) : ze(Fs, null, String(e));
}
function Ge(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Tt(e);
}
function Cs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (k(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Cs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !_i(t) ? t._ctx = Ce : r === 3 && Ce && (Ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (F(t)) {
    if (n & 65) {
      Cs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ce }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [Al(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function Ll(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = pt([t.class, n.class]));
      else if (r === "style")
        t.style = bn([t.style, n.style]);
      else if (Ts(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(k(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Rs(r) && (t[r] = o);
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
const Ol = pi();
let $l = 0;
function Dl(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Ol, i = {
    uid: $l++,
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
    scope: new $r(
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = fl.bind(null, i), e.ce && e.ce(i), i;
}
let ve = null;
const Li = () => ve || Ce;
let Is, dn;
{
  const e = As(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Is = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ve = s
  ), dn = t(
    "__VUE_SSR_SETTERS__",
    (s) => ns = s
  );
}
const os = (e) => {
  const t = ve;
  return Is(e), e.scope.on(), () => {
    e.scope.off(), Is(t);
  };
}, er = () => {
  ve && ve.scope.off(), Is(null);
};
function Oi(e) {
  return e.vnode.shapeFlag & 4;
}
let ns = !1;
function kl(e, t = !1, s = !1) {
  t && dn(t);
  const { props: n, children: r } = e.vnode, i = Oi(e);
  vl(e, n, i, t), xl(e, r, s || t);
  const o = i ? Ul(e, t) : void 0;
  return t && dn(!1), o;
}
function Ul(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, sl);
  const { setup: n } = s;
  if (n) {
    Ve();
    const r = e.setupContext = n.length > 1 ? Nl(e) : null, i = os(e), o = is(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Er(o);
    if (He(), i(), (l || e.sp) && !Jt(e) && oi(e), l) {
      if (o.then(er, er), t)
        return o.then((c) => {
          tr(e, c);
        }).catch((c) => {
          Ds(c, e, 0);
        });
      e.asyncDep = o;
    } else
      tr(e, o);
  } else
    $i(e);
}
function tr(e, t, s) {
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : X(t) && (e.setupState = zr(t)), $i(e);
}
function $i(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || je);
  {
    const r = os(e);
    Ve();
    try {
      nl(e);
    } finally {
      He(), r();
    }
  }
}
const Fl = {
  get(e, t) {
    return he(e, "get", ""), e[t];
  }
};
function Nl(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Fl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ns(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(zr(Rn(e.exposed)), {
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
function jl(e) {
  return F(e) && "__vccOpts" in e;
}
const nt = (e, t) => /* @__PURE__ */ Ao(e, t, ns), Kl = "3.5.39";
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
      createHTML: (e) => e
    });
  } catch {
  }
const Di = hn ? (e) => hn.createHTML(e) : (e) => e, Vl = "http://www.w3.org/2000/svg", Hl = "http://www.w3.org/1998/Math/MathML", We = typeof document < "u" ? document : null, nr = We && /* @__PURE__ */ We.createElement("template"), Bl = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? We.createElementNS(Vl, e) : t === "mathml" ? We.createElementNS(Hl, e) : s ? We.createElement(e, { is: s }) : We.createElement(e);
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
      nr.innerHTML = Di(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = nr.content;
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
}, Wl = /* @__PURE__ */ Symbol("_vtc");
function Jl(e, t, s) {
  const n = e[Wl];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const rr = /* @__PURE__ */ Symbol("_vod"), Gl = /* @__PURE__ */ Symbol("_vsh"), Yl = /* @__PURE__ */ Symbol(""), ql = /(?:^|;)\s*display\s*:/;
function Xl(e, t, s) {
  const n = e.style, r = se(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (se(t))
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
      l != null ? Zl(
        e,
        o,
        !se(t) && t ? t[o] : void 0,
        l
      ) || Ft(n, o, l) : Ft(n, o, "");
    }
  } else if (r) {
    if (t !== s) {
      const o = n[Yl];
      o && (s += ";" + o), n.cssText = s, i = ql.test(s);
    }
  } else t && e.removeAttribute("style");
  rr in e && (e[rr] = i ? n.display : "", e[Gl] && (n.display = "none"));
}
const ir = /\s*!important$/;
function Ft(e, t, s) {
  if (k(s))
    s.forEach((n) => Ft(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = zl(e, t);
    ir.test(s) ? e.setProperty(
      ot(n),
      s.replace(ir, ""),
      "important"
    ) : e[n] = s;
  }
}
const or = ["Webkit", "Moz", "ms"], Zs = {};
function zl(e, t) {
  const s = Zs[t];
  if (s)
    return s;
  let n = Ee(t);
  if (n !== "filter" && n in e)
    return Zs[t] = n;
  n = Pr(n);
  for (let r = 0; r < or.length; r++) {
    const i = or[r] + n;
    if (i in e)
      return Zs[t] = i;
  }
  return t;
}
function Zl(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && se(n) && s === n;
}
const lr = "http://www.w3.org/1999/xlink";
function cr(e, t, s, n, r, i = to(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(lr, t.slice(6, t.length)) : e.setAttributeNS(lr, t, s) : s == null || i && !Ar(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ie(s) ? String(s) : s
  );
}
function ar(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Di(s) : s);
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
    l === "boolean" ? s = Ar(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
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
function Ql(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const ur = /* @__PURE__ */ Symbol("_vei");
function ec(e, t, s, n, r = null) {
  const i = e[ur] || (e[ur] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, c] = nc(t);
    if (n) {
      const d = i[t] = oc(
        n,
        r
      );
      yt(e, l, d, c);
    } else o && (Ql(e, l, o, c), i[t] = void 0);
  }
}
const tc = /(Once|Passive|Capture)$/, sc = /^on:?(?:Once|Passive|Capture)$/;
function nc(e) {
  let t, s;
  for (; (s = e.match(tc)) && !sc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : ot(e.slice(2)), t];
}
let Qs = 0;
const rc = /* @__PURE__ */ Promise.resolve(), ic = () => Qs || (rc.then(() => Qs = 0), Qs = Date.now());
function oc(e, t) {
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
  return s.value = e, s.attached = ic(), s;
}
const fr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, lc = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? Jl(e, n, o) : t === "style" ? Xl(e, s, n) : Ts(t) ? Rs(t) || ec(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : cc(e, t, n, o)) ? (ar(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && cr(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ac(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !se(n))) ? ar(e, Ee(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), cr(e, t, n, o));
};
function cc(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && fr(t) && F(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return fr(t) && se(s) ? !1 : t in e;
}
function ac(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = Ee(t);
  return Array.isArray(s) ? s.some((r) => Ee(r) === n) : Object.keys(s).some((r) => Ee(r) === n);
}
const dr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return k(t) ? (s) => ms(t, s) : t;
};
function uc(e) {
  e.target.composing = !0;
}
function hr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const en = /* @__PURE__ */ Symbol("_assign");
function pr(e, t, s) {
  return t && (e = e.trim()), s && (e = _n(e)), e;
}
const Nt = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, r) {
    e[en] = dr(r);
    const i = n || r.props && r.props.type === "number";
    yt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[en](pr(e.value, s, i));
    }), (s || i) && yt(e, "change", () => {
      e.value = pr(e.value, s, i);
    }), t || (yt(e, "compositionstart", uc), yt(e, "compositionend", hr), yt(e, "change", hr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: r, number: i } }, o) {
    if (e[en] = dr(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? _n(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (n && t === s || r && e.value.trim() === c) || (e.value = c);
  }
}, fc = ["ctrl", "shift", "alt", "meta"], dc = {
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
  exact: (e, t) => fc.some((s) => e[`${s}Key`] && !t.includes(s))
}, ki = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = dc[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  });
}, hc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ui = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (r) => {
    if (!("key" in r))
      return;
    const i = ot(r.key);
    if (t.some(
      (o) => o === i || hc[o] === i
    ))
      return e(r);
  });
}, pc = /* @__PURE__ */ de({ patchProp: lc }, Bl);
let gr;
function gc() {
  return gr || (gr = wl(pc));
}
const Fi = (...e) => {
  const t = gc().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = vc(n);
    if (!r) return;
    const i = t._component;
    !F(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, mc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function mc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function vc(e) {
  return se(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Ni;
const js = (e) => Ni = e, ji = (
  /* istanbul ignore next */
  Symbol()
);
function pn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var qt;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(qt || (qt = {}));
function yc() {
  const e = Dr(!0), t = e.run(() => /* @__PURE__ */ Ke({}));
  let s = [], n = [];
  const r = Rn({
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
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return r;
}
const Ki = () => {
};
function mr(e, t, s, n = Ki) {
  e.push(t);
  const r = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), n());
  };
  return !s && kr() && no(r), r;
}
function mt(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const _c = (e) => e(), vr = Symbol(), tn = Symbol();
function gn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], r = e[s];
    pn(r) && pn(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ ne(n) && !/* @__PURE__ */ Xe(n) ? e[s] = gn(r, n) : e[s] = n;
  }
  return e;
}
const bc = (
  /* istanbul ignore next */
  Symbol()
);
function xc(e) {
  return !pn(e) || !e.hasOwnProperty(bc);
}
const { assign: tt } = Object;
function Sc(e) {
  return !!(/* @__PURE__ */ ne(e) && e.effect);
}
function wc(e, t, s, n) {
  const { state: r, actions: i, getters: o } = t, l = s.state.value[e];
  let c;
  function d() {
    l || (s.state.value[e] = r ? r() : {});
    const u = /* @__PURE__ */ To(s.state.value[e]);
    return tt(u, i, Object.keys(o || {}).reduce((h, _) => (h[_] = Rn(nt(() => {
      js(s);
      const b = s._s.get(e);
      return o[_].call(b, b);
    })), h), {}));
  }
  return c = Vi(e, d, t, s, n, !0), c;
}
function Vi(e, t, s = {}, n, r, i) {
  let o;
  const l = tt({ actions: {} }, s), c = { deep: !0 };
  let d, u, h = [], _ = [], b;
  const I = n.state.value[e];
  !i && !I && (n.state.value[e] = {});
  let x;
  function A(K) {
    let B;
    d = u = !1, typeof K == "function" ? (K(n.state.value[e]), B = {
      type: qt.patchFunction,
      storeId: e,
      events: b
    }) : (gn(n.state.value[e], K), B = {
      type: qt.patchObject,
      payload: K,
      storeId: e,
      events: b
    });
    const oe = x = Symbol();
    Qr().then(() => {
      x === oe && (d = !0);
    }), u = !0, mt(h, B, n.state.value[e]);
  }
  const O = i ? function() {
    const { state: B } = s, oe = B ? B() : {};
    this.$patch((we) => {
      tt(we, oe);
    });
  } : (
    /* istanbul ignore next */
    Ki
  );
  function M() {
    o.stop(), h = [], _ = [], n._s.delete(e);
  }
  const R = (K, B = "") => {
    if (vr in K)
      return K[tn] = B, K;
    const oe = function() {
      js(n);
      const we = Array.from(arguments), Me = [], et = [];
      function Mt(V) {
        Me.push(V);
      }
      function cs(V) {
        et.push(V);
      }
      mt(_, {
        args: we,
        name: oe[tn],
        store: j,
        after: Mt,
        onError: cs
      });
      let re;
      try {
        re = K.apply(this && this.$id === e ? this : j, we);
      } catch (V) {
        throw mt(et, V), V;
      }
      return re instanceof Promise ? re.then((V) => (mt(Me, V), V)).catch((V) => (mt(et, V), Promise.reject(V))) : (mt(Me, re), re);
    };
    return oe[vr] = !0, oe[tn] = B, oe;
  }, w = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: mr.bind(null, _),
    $patch: A,
    $reset: O,
    $subscribe(K, B = {}) {
      const oe = mr(h, K, B.detached, () => we()), we = o.run(() => Bt(() => n.state.value[e], (Me) => {
        (B.flush === "sync" ? u : d) && K({
          storeId: e,
          type: qt.direct,
          events: b
        }, Me);
      }, tt({}, c, B)));
      return oe;
    },
    $dispose: M
  }, j = /* @__PURE__ */ Os(w);
  n._s.set(e, j);
  const ie = (n._a && n._a.runWithContext || _c)(() => n._e.run(() => (o = Dr()).run(() => t({ action: R }))));
  for (const K in ie) {
    const B = ie[K];
    if (/* @__PURE__ */ ne(B) && !Sc(B) || /* @__PURE__ */ Xe(B))
      i || (I && xc(B) && (/* @__PURE__ */ ne(B) ? B.value = I[K] : gn(B, I[K])), n.state.value[e][K] = B);
    else if (typeof B == "function") {
      const oe = R(B, K);
      ie[K] = oe, l.actions[K] = B;
    }
  }
  return tt(j, ie), tt(/* @__PURE__ */ G(j), ie), Object.defineProperty(j, "$state", {
    get: () => n.state.value[e],
    set: (K) => {
      A((B) => {
        tt(B, K);
      });
    }
  }), n._p.forEach((K) => {
    tt(j, o.run(() => K({
      store: j,
      app: n._a,
      pinia: n,
      options: l
    })));
  }), I && i && s.hydrate && s.hydrate(j.$state, I), d = !0, u = !0, j;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ks(e, t, s) {
  let n, r;
  const i = typeof t == "function";
  typeof e == "string" ? (n = e, r = i ? s : t) : (r = e, n = e.id);
  function o(l, c) {
    const d = No();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (d ? Ht(ji, null) : null), l && js(l), l = Ni, l._s.has(n) || (i ? Vi(n, t, r, l) : wc(n, r, l)), l._s.get(n);
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
const ge = /* @__PURE__ */ Ks("settings", {
  state: () => ({
    settings: sn(),
    storage: null
  }),
  getters: {
    defaults: () => sn()
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = sn();
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
class Ic {
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
const yr = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function Ec(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
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
function _r(e, t) {
  if (e.length === 0) return null;
  let s = null;
  for (const n of e)
    if (n.time <= t)
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
function Rc() {
  return new Tc();
}
const _t = "st-music-player", br = "stmp_cursor", xr = "stmp_userlist";
class Pc {
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
class Mc {
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
      `${this.baseURL}?types=url&id=${encodeURIComponent(t)}&br=320`
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
class Ac {
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
class Lc {
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
function mn(e) {
  const s = e.filter((n) => n.enabled).sort((n, r) => n.priority - r.priority).map((n) => {
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
  return new Pc(s);
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
        const n = s.getMetadata(br);
        n && n.chatId === e && this.chatIndexer?.setCursor(e, n.lastScannedMessageId);
      }
    },
    loadFromStorage() {
      const t = ge().storage;
      if (!t || !this.chatId) return;
      const s = t.getMetadata(xr);
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
        id: ps(),
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
        id: ps(),
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
        id: ps(),
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
      }
      if (!r && t.providerId && t.providerTrackId) {
        const o = `stmp:resolve:${t.providerId}:${t.providerTrackId}`, l = await n.getCache(o);
        if (l)
          r = {
            url: l.url,
            lyric: l.lyric,
            cover: l.cover,
            name: t.song,
            artist: t.artist ?? "",
            source: t.providerId
          };
        else {
          const d = await mn(s.settings.providers).resolve(t.providerId, t.providerTrackId);
          d && (d.name = t.song, d.artist = t.artist ?? d.artist, r = d, await n.setCache(o, {
            url: d.url,
            lyric: d.lyric,
            cover: d.cover
          }, 6e5));
        }
      }
      if (!r && t.song) {
        const o = mn(s.settings.providers), l = t.artist ? `${t.song} ${t.artist}` : t.song, c = await o.searchAll(l);
        if (c.length > 0) {
          const d = c[0];
          t.providerId = d.provider, t.providerTrackId = d.id;
          const u = await o.resolve(d.id, d.provider);
          if (u) {
            u.name = d.name, u.artist = d.artist, r = u;
            const h = `stmp:resolve:${t.providerId}:${t.providerTrackId}`;
            await n.setCache(h, {
              url: u.url,
              lyric: u.lyric,
              cover: u.cover
            }, 6e5);
          }
        }
      }
      if (!r) {
        console.warn(`[playlist] resolve failed for "${t.song}"`), typeof toastr < "u" && toastr.warning(`无法播放: ${t.song}`), setTimeout(() => {
          it().isPlaying || this.next();
        }, 1e3);
        return;
      }
      await it().loadAndPlay(r);
    },
    handleNewCues(e) {
      if (e.length === 0) return;
      const t = ge();
      let s = null;
      for (const n of e)
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
      t.setMetadata(xr, s);
    },
    getCursor() {
      return !this.chatIndexer || !this.chatId ? -1 : this.chatIndexer.getCursor(this.chatId);
    },
    setCursor(e) {
      if (!this.chatIndexer || !this.chatId) return;
      this.chatIndexer.setCursor(this.chatId, e);
      const s = ge().storage;
      s && s.setMetadata(br, {
        chatId: this.chatId,
        lastScannedMessageId: e,
        updatedAt: Date.now()
      });
    }
  }
}), it = /* @__PURE__ */ Ks("player", {
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
      const e = new Ic();
      this.audioEngine = e;
      const t = it();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = _r(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        t.currentLyricIndex = n;
      }), e.on("ended", () => {
        ls().next();
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
      this.volume = e, this.audioEngine?.setVolume(e / 100), ge().setVolume(e);
    },
    updateLyrics(e) {
      this.lyrics = Ec(e), this.currentLyricIndex = -1;
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
}), $c = { class: "stmp-collapsed-title" }, Dc = ["aria-label"], kc = /* @__PURE__ */ Rt({
  __name: "CollapsedBar",
  emits: ["expand"],
  setup(e) {
    const t = it(), s = nt(() => t.currentTrack?.name || "未播放");
    return (n, r) => (N(), W("div", {
      class: "stmp-collapsed-bar",
      onClick: r[1] || (r[1] = (i) => n.$emit("expand"))
    }, [
      T("span", $c, te(s.value), 1),
      T("button", {
        class: "stmp-collapsed-btn",
        "aria-label": H(t).isPlaying ? "暂停" : "播放",
        onClick: r[0] || (r[0] = ki((i) => H(t).togglePlay(), ["stop"]))
      }, te(H(t).isPlaying ? "⏸" : "▶"), 9, Dc)
    ]));
  }
}), Pt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, Uc = /* @__PURE__ */ Pt(kc, [["__scopeId", "data-v-76d6990c"]]), Fc = { class: "stmp-playlist" }, Nc = { class: "stmp-upload-area" }, jc = {
  key: 0,
  class: "stmp-empty"
}, Kc = { class: "stmp-group-label" }, Vc = ["onClick"], Hc = { class: "stmp-item-index" }, Bc = { class: "stmp-item-info" }, Wc = { class: "stmp-item-song" }, Jc = {
  key: 0,
  class: "stmp-item-artist"
}, Gc = ["onClick"], Yc = /* @__PURE__ */ Rt({
  __name: "PlaylistView",
  setup(e) {
    const t = ls(), s = ge(), n = /* @__PURE__ */ Ke(null), r = () => {
      n.value?.click();
    }, i = async (u) => {
      const h = u.target;
      if (!h.files || !h.files[0]) return;
      const _ = h.files[0], b = `stmp:audio:${Date.now()}-${_.name}`, I = s.storage;
      I && (await I.setBlob(b, _), t.addLocalFile(_.name, b)), h.value = "";
    }, o = nt(() => {
      const u = {
        chat: [],
        user: [],
        local: []
      };
      return t.list.forEach((h, _) => {
        u[h.source] && u[h.source].push({ index: _, item: h });
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
      H(t).isEmpty ? (N(), W("div", jc, "No Songs")) : (N(), W(fe, { key: 1 }, wt(["chat", "user", "local"], (_) => T("div", {
        key: _,
        class: "stmp-group"
      }, [
        o.value[_].length ? (N(), W(fe, { key: 0 }, [
          T("div", Kc, te(l[_]), 1),
          (N(!0), W(fe, null, wt(o.value[_], (b) => (N(), W("div", {
            key: b.item.id,
            class: pt(["stmp-item", { active: b.index === H(t).currentIndex }]),
            onClick: (I) => c(b.index)
          }, [
            T("span", Hc, te(b.index + 1), 1),
            T("div", Bc, [
              T("span", Wc, te(b.item.song), 1),
              b.item.artist ? (N(), W("span", Jc, te(b.item.artist), 1)) : be("", !0)
            ]),
            T("button", {
              class: "stmp-item-del",
              onClick: ki((I) => d(b.index), ["stop"])
            }, "✕", 8, Gc)
          ], 10, Vc))), 128))
        ], 64)) : be("", !0)
      ])), 64))
    ]));
  }
}), qc = /* @__PURE__ */ Pt(Yc, [["__scopeId", "data-v-7303863f"]]), Xc = { class: "stmp-search" }, zc = { class: "stmp-search-bar" }, Zc = ["disabled"], Qc = {
  key: 0,
  class: "stmp-search-error"
}, ea = {
  key: 1,
  class: "stmp-search-loading"
}, ta = {
  key: 2,
  class: "stmp-search-empty"
}, sa = {
  key: 3,
  class: "stmp-results"
}, na = ["onClick"], ra = { class: "stmp-result-info" }, ia = { class: "stmp-result-name" }, oa = {
  key: 0,
  class: "stmp-result-artist"
}, la = { class: "stmp-result-provider" }, ca = /* @__PURE__ */ Rt({
  __name: "SearchView",
  setup(e) {
    const t = Oc(), s = ls(), n = ge(), r = /* @__PURE__ */ Ke(t.keyword);
    async function i() {
      t.setKeyword(r.value);
      const c = mn(n.settings.providers);
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
    return (c, d) => (N(), W("div", Xc, [
      T("div", zc, [
        kt(T("input", {
          "onUpdate:modelValue": d[0] || (d[0] = (u) => r.value = u),
          class: "stmp-search-input",
          placeholder: "Search Song...",
          onKeydown: Ui(i, ["enter"])
        }, null, 544), [
          [Nt, r.value]
        ]),
        T("button", {
          class: "stmp-search-btn",
          disabled: H(t).isSearching,
          onClick: i
        }, te(H(t).isSearching ? "..." : "🔍"), 9, Zc)
      ]),
      H(t).error ? (N(), W("div", Qc, [
        T("span", null, te(H(t).error), 1),
        T("button", {
          class: "stmp-retry-btn",
          "aria-label": "重试搜索",
          onClick: o
        }, "重试")
      ])) : be("", !0),
      H(t).isSearching ? (N(), W("div", ea, "Searching...")) : r.value && !H(t).results.length ? (N(), W("div", ta, " No results ")) : be("", !0),
      H(t).results.length ? (N(), W("div", sa, [
        (N(!0), W(fe, null, wt(H(t).results, (u) => (N(), W("div", {
          key: u.provider + u.id,
          class: "stmp-result",
          onClick: (h) => l(u)
        }, [
          T("div", ra, [
            T("span", ia, te(u.name), 1),
            u.artist ? (N(), W("span", oa, te(u.artist), 1)) : be("", !0)
          ]),
          T("span", la, te(u.provider), 1)
        ], 8, na))), 128))
      ])) : be("", !0)
    ]));
  }
}), aa = /* @__PURE__ */ Pt(ca, [["__scopeId", "data-v-305488cc"]]), ua = { class: "stmp-panel" }, fa = { class: "stmp-topbar" }, da = { class: "stmp-cover" }, ha = ["src"], pa = {
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
}, xa = { class: "stmp-progress" }, Sa = ["value"], wa = { class: "stmp-time" }, Ca = { class: "stmp-controls" }, Ia = ["aria-label"], Ea = ["value"], Ta = { class: "stmp-tabs" }, Ra = { class: "stmp-tab-content" }, Pa = /* @__PURE__ */ Rt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = it(), s = ls(), n = ge(), r = /* @__PURE__ */ Ke("list"), i = /* @__PURE__ */ Ke(!0), o = /* @__PURE__ */ Ke(!1), l = nt(() => t.currentTrack?.cover || ""), c = () => {
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
      const M = t.currentLyricIndex;
      return M < 0 ? null : t.lyrics[M + 1]?.text ?? null;
    });
    function _(M) {
      const R = Math.floor(M / 60), w = Math.floor(M % 60);
      return R + ":" + w.toString().padStart(2, "0");
    }
    function b(M) {
      const R = M.target;
      t.seek(Number(R.value) / 100 * t.duration);
    }
    const I = ["list", "random", "single"], x = {
      list: "🔁",
      random: "🔀",
      single: "🔂"
    };
    function A() {
      const M = n.settings.playMode, R = I.indexOf(M), w = I[(R + 1) % I.length];
      n.setPlayMode(w), s.playMode = w;
    }
    function O(M) {
      const R = M.target;
      t.setVolume(Number(R.value));
    }
    return (M, R) => (N(), W("div", ua, [
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
          T("div", ma, te(H(t).currentTrack?.name || "No Song"), 1),
          H(t).currentTrack?.artist ? (N(), W("div", va, te(H(t).currentTrack.artist), 1)) : be("", !0)
        ]),
        T("button", {
          class: "stmp-collapse-btn",
          "aria-label": "收起面板",
          onClick: R[0] || (R[0] = (w) => M.$emit("collapse"))
        }, "▾")
      ]),
      i.value ? (N(), W("div", {
        key: 0,
        class: "stmp-lyrics",
        onClick: R[1] || (R[1] = (w) => i.value = !1)
      }, [
        u.value ? (N(), W("div", ya, te(u.value), 1)) : be("", !0),
        h.value ? (N(), W("div", _a, te(h.value), 1)) : be("", !0),
        !u.value && !h.value ? (N(), W("div", ba, "♪")) : be("", !0)
      ])) : (N(), W("div", {
        key: 1,
        class: "stmp-lyrics-toggle",
        onClick: R[2] || (R[2] = (w) => i.value = !0)
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
          T("span", null, te(_(H(t).currentTime)), 1),
          T("span", null, te(_(H(t).duration)), 1)
        ])
      ]),
      T("div", Ca, [
        T("button", {
          class: "stmp-ctrl-btn",
          "aria-label": "上一首",
          onClick: R[3] || (R[3] = (w) => H(s).prev())
        }, "⏮"),
        T("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          "aria-label": H(t).isPlaying ? "暂停" : "播放",
          onClick: R[4] || (R[4] = (w) => H(t).togglePlay())
        }, te(H(t).isPlaying ? "⏸" : "▶"), 9, Ia),
        T("button", {
          class: "stmp-ctrl-btn",
          "aria-label": "下一首",
          onClick: R[5] || (R[5] = (w) => H(s).next())
        }, "⏭"),
        T("button", {
          class: "stmp-ctrl-btn",
          "aria-label": "切换播放模式",
          onClick: A
        }, te(x[H(n).settings.playMode]), 1),
        T("input", {
          type: "range",
          min: "0",
          max: "100",
          value: H(t).volume,
          class: "stmp-volume",
          onInput: O
        }, null, 40, Ea)
      ]),
      T("div", Ta, [
        T("button", {
          class: pt(["stmp-tab", { active: r.value === "list" }]),
          onClick: R[6] || (R[6] = (w) => r.value = "list")
        }, " List ", 2),
        T("button", {
          class: pt(["stmp-tab", { active: r.value === "search" }]),
          onClick: R[7] || (R[7] = (w) => r.value = "search")
        }, " Search ", 2)
      ]),
      T("div", Ra, [
        r.value === "list" ? (N(), ss(qc, { key: 0 })) : r.value === "search" ? (N(), ss(aa, { key: 1 })) : be("", !0)
      ])
    ]));
  }
}), Ma = /* @__PURE__ */ Pt(Pa, [["__scopeId", "data-v-d3d7f67c"]]), Aa = /* @__PURE__ */ Rt({
  __name: "App",
  setup(e) {
    const t = ge(), s = it(), n = /* @__PURE__ */ Ke(!1), r = /* @__PURE__ */ Ke(null), i = /* @__PURE__ */ Ke(typeof window < "u" && window.innerWidth < 768), o = () => {
      i.value = window.innerWidth < 768;
    }, l = (R) => {
      R.key === "Escape" && (n.value = !1), R.key === " " && R.target === document.body && (R.preventDefault(), s.togglePlay());
    };
    let c = 0, d = 0, u = 0, h = 0, _ = !1, b = null, I = null;
    function x(R) {
      if (i.value || n.value || R.target.closest("button")) return;
      c = R.clientX, d = R.clientY;
      const w = t.settings.position;
      u = w?.x ?? r.value?.offsetLeft ?? 0, h = w?.y ?? r.value?.offsetTop ?? 0, _ = !1, b = A, I = O, document.addEventListener("pointermove", b), document.addEventListener("pointerup", I);
    }
    function A(R) {
      if (!r.value) return;
      const w = R.clientX - c, j = R.clientY - d;
      (Math.abs(w) > 5 || Math.abs(j) > 5) && (_ = !0);
      let ce = u + w, ie = h + j;
      const K = window.innerWidth - (r.value.offsetWidth || 60), B = window.innerHeight - (r.value.offsetHeight || 40);
      ce = Math.max(0, Math.min(ce, K)), ie = Math.max(0, Math.min(ie, B)), r.value.style.left = ce + "px", r.value.style.top = ie + "px", r.value.style.right = "auto", r.value.style.bottom = "auto";
    }
    function O() {
      if (b && document.removeEventListener("pointermove", b), I && document.removeEventListener("pointerup", I), b = null, I = null, !_) {
        M();
        return;
      }
      r.value && t.setPosition({
        x: r.value.offsetLeft,
        y: r.value.offsetTop
      });
    }
    function M() {
      n.value = !n.value;
    }
    return ai(() => {
      const R = t.settings.position;
      R && r.value && !i.value && (r.value.style.left = R.x + "px", r.value.style.top = R.y + "px", r.value.style.right = "auto", r.value.style.bottom = "auto"), window.addEventListener("resize", o), window.addEventListener("keydown", l);
    }), ui(() => {
      O(), window.removeEventListener("resize", o), window.removeEventListener("keydown", l);
    }), (R, w) => (N(), W("div", {
      ref_key: "widgetRef",
      ref: r,
      class: pt(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-mobile": i.value
      }]),
      onPointerdown: x
    }, [
      n.value ? (N(), ss(Ma, {
        key: 1,
        onCollapse: M
      })) : (N(), ss(Uc, {
        key: 0,
        onExpand: M
      }))
    ], 34));
  }
}), La = /* @__PURE__ */ Pt(Aa, [["__scopeId", "data-v-3e08f2ab"]]), Oa = { class: "stmp-settings" }, $a = { class: "stmp-setting-group" }, Da = { class: "stmp-setting-row" }, ka = ["checked", "onChange"], Ua = ["onUpdate:modelValue"], Fa = ["onUpdate:modelValue"], Na = ["onUpdate:modelValue"], ja = { class: "stmp-setting-group" }, Ka = { class: "stmp-setting-label" }, Va = ["value"], Ha = { class: "stmp-setting-group" }, Ba = ["value"], Wa = ["value"], Ja = { class: "stmp-setting-group" }, Ga = { class: "stmp-setting-row" }, Ya = ["checked"], qa = { class: "stmp-setting-group" }, Xa = { class: "stmp-rules" }, za = ["onClick"], Za = { class: "stmp-rule-add" }, Qa = /* @__PURE__ */ Rt({
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
      const x = I.target;
      t.setVolume(Number(x.value));
    }
    function c(I) {
      const x = I.target;
      t.setPlayMode(x.value);
    }
    function d(I) {
      const x = I.target;
      t.settings.autoPlayOnNewCue = x.checked, t.save();
    }
    const u = async () => {
      const I = t.storage;
      I && (await I.clearCache(), toastr.success("缓存已清理"));
    }, h = () => {
      const I = JSON.stringify(t.settings, null, 2), x = new Blob([I], { type: "application/json" }), A = URL.createObjectURL(x), O = document.createElement("a");
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
          const R = ["volume", "playMode", "position", "autoPlayOnNewCue", "providers", "customCueRules"], w = {};
          for (const ce of R)
            ce in M && (w[ce] = M[ce]);
          if (typeof w.volume != "number" || w.volume < 0 || w.volume > 100)
            throw new Error("Invalid volume");
          if (typeof w.playMode != "string" || !["list", "random", "single"].includes(w.playMode))
            throw new Error("Invalid playMode");
          if (w.providers && !Array.isArray(w.providers))
            throw new Error("Invalid providers");
          if (w.customCueRules && !Array.isArray(w.customCueRules))
            throw new Error("Invalid customCueRules");
          const j = ge();
          Object.assign(j.settings, w), j.save(), toastr.success("设置已导入");
        } catch (M) {
          console.error("Import failed", M), toastr.error("导入失败: " + (M instanceof Error ? M.message : "JSON 格式错误"));
        }
      }, I.click();
    };
    function b(I) {
      const x = t.settings.providers.find((A) => A.id === I);
      x && (x.enabled = !x.enabled, t.save());
    }
    return (I, x) => (N(), W("div", Oa, [
      T("div", $a, [
        x[4] || (x[4] = T("div", { class: "stmp-setting-label" }, "Providers", -1)),
        (N(!0), W(fe, null, wt(H(t).settings.providers, (A) => (N(), W("div", {
          key: A.id,
          class: "stmp-provider-config"
        }, [
          T("label", Da, [
            T("span", null, te(r[A.id] || A.id), 1),
            T("input", {
              type: "checkbox",
              checked: A.enabled,
              onChange: (O) => b(A.id)
            }, null, 40, ka)
          ]),
          A.id === "netease" ? kt((N(), W("input", {
            key: 0,
            class: "stmp-provider-input",
            "onUpdate:modelValue": (O) => A.config.baseURL = O,
            placeholder: "API baseURL",
            onChange: x[0] || (x[0] = (O) => H(t).save())
          }, null, 40, Ua)), [
            [Nt, A.config.baseURL]
          ]) : be("", !0),
          A.id === "custom" ? (N(), W(fe, { key: 1 }, [
            kt(T("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (O) => A.config.searchURL = O,
              placeholder: "Search URL",
              onChange: x[1] || (x[1] = (O) => H(t).save())
            }, null, 40, Fa), [
              [Nt, A.config.searchURL]
            ]),
            kt(T("input", {
              class: "stmp-provider-input",
              "onUpdate:modelValue": (O) => A.config.resolveURL = O,
              placeholder: "Resolve URL",
              onChange: x[2] || (x[2] = (O) => H(t).save())
            }, null, 40, Na), [
              [Nt, A.config.resolveURL]
            ])
          ], 64)) : be("", !0)
        ]))), 128))
      ]),
      T("div", ja, [
        T("div", Ka, "Default Volume: " + te(H(t).settings.volume), 1),
        T("input", {
          type: "range",
          min: "0",
          max: "100",
          value: H(t).settings.volume,
          class: "stmp-range",
          onInput: l
        }, null, 40, Va)
      ]),
      T("div", Ha, [
        x[5] || (x[5] = T("div", { class: "stmp-setting-label" }, "Default Play Mode", -1)),
        T("select", {
          class: "stmp-select",
          value: H(t).settings.playMode,
          onChange: c
        }, [
          (N(), W(fe, null, wt(n, (A) => T("option", {
            key: A.value,
            value: A.value
          }, te(A.label), 9, Wa)), 64))
        ], 40, Ba)
      ]),
      T("div", Ja, [
        T("div", Ga, [
          x[6] || (x[6] = T("span", null, "Auto-play on new cue", -1)),
          T("input", {
            type: "checkbox",
            checked: H(t).settings.autoPlayOnNewCue,
            onChange: d
          }, null, 40, Ya)
        ])
      ]),
      T("div", qa, [
        x[7] || (x[7] = T("div", { class: "stmp-setting-label" }, "Custom Cue Rules (Regex)", -1)),
        T("div", Xa, [
          (N(!0), W(fe, null, wt(H(t).settings.customCueRules, (A, O) => (N(), W("div", {
            key: O,
            class: "stmp-rule"
          }, [
            T("code", null, te(A), 1),
            T("button", {
              class: "stmp-rule-del",
              onClick: (M) => o(O)
            }, "✕", 8, za)
          ]))), 128))
        ]),
        T("div", Za, [
          kt(T("input", {
            "onUpdate:modelValue": x[3] || (x[3] = (A) => s.value = A),
            class: "stmp-rule-input",
            placeholder: "Add regex rule...",
            onKeydown: Ui(i, ["enter"])
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
}), eu = /* @__PURE__ */ Pt(Qa, [["__scopeId", "data-v-32510a40"]]);
class tu {
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
function gs(e) {
  if (e == null) return;
  const t = typeof e == "number" ? e : parseInt(String(e), 10);
  return Number.isFinite(t) ? t : void 0;
}
function su() {
  return new tu();
}
const nu = [
  /<bgm>当前bgm[:：](.+?) - (.+?)<\/bgm>/g,
  /<bgm>当前bgm[:：](.+?)<\/bgm>/g,
  /<bgm>(.+?) - (.+?)<\/bgm>/g,
  /<bgm>(.+?)<\/bgm>/g,
  /【BGM】(.+?)(?: - (.+?))?【\/BGM】/g,
  /\[music\](.+?)(?: - (.+?))?\[\/music\]/g
];
function Sr(e, t) {
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
function wr(e, t = []) {
  const s = /* @__PURE__ */ new Map(), n = (r) => {
    s.has(r.index) || s.set(r.index, r);
  };
  for (const r of nu)
    for (const i of Sr(r, e)) n(i);
  for (const r of t)
    try {
      const i = new RegExp(r, "g");
      for (const o of Sr(i, e)) n(o);
    } catch {
    }
  return [...s.values()].sort((r, i) => r.index - i.index).map((r) => r.cue);
}
class ru {
  constructor(t) {
    this.cursors = /* @__PURE__ */ new Map(), this.getChatMessage = t;
  }
  scanIncremental(t, s, n, r = []) {
    const i = [];
    for (let o = s; o <= n; o++) {
      const l = this.getChatMessage(o);
      if (l === void 0) continue;
      const c = wr(l, r);
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
    const i = wr(r, n), o = i.length > 0 ? i.at(-1) : null;
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
let Ct = null, Je = null, Xt = null, zt = null, It = null, Es = null;
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
  const e = $("#extensions_settings2");
  if (!e || !e.length || (e.append(iu), zt = e.children(".inline-drawer").last()[0] ?? null, !zt)) return;
  const t = zt.querySelector("#stmp-settings-mount");
  t && Es && (It = Fi(eu), It.use(Es), It.mount(t));
}
function lu() {
  It && (It.unmount(), It = null), zt?.remove(), zt = null;
}
function cu(e, t, s) {
  Je = su(), Je.on("chat-changed", () => {
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
function au(e, t, s) {
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
async function du() {
  try {
    const e = document.createElement("div");
    e.id = "st-music-player-root", document.body.appendChild(e);
    const t = yc();
    Es = t, Ct = Fi(La), Ct.use(t), Ct.mount(e);
    const s = ge(), n = Rc();
    s.init(n);
    const r = it();
    r.init(), r.setVolume(s.settings.volume);
    const i = new ru((c) => SillyTavern.getContext().chat[c]?.mes), o = ls();
    o.init(i), o.playMode = s.settings.playMode, ou();
    const l = SillyTavern.getContext();
    Xt = () => {
      cu(i, o, s), au(i, o, s);
    }, l.eventSource.on(l.event_types.APP_READY, Xt), console.log("[ST-Music-Player] 播放器加载完成");
  } catch (e) {
    console.error("[ST-Music-Player] init failed:", e);
  }
}
function Hi() {
  if (Xt) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, Xt);
    } catch {
    }
    Xt = null;
  }
  if (Je?.stop(), Je = null, Ct) {
    try {
      it().destroy();
    } catch {
    }
    Ct.unmount(), Ct = null;
  }
  const e = document.getElementById("st-music-player-root");
  e && e.remove(), lu(), Es = null;
}
function hu() {
  Hi();
}
async function uu() {
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
