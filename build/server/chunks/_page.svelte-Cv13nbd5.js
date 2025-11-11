import { c as create_ssr_component, v as validate_component, b as each, e as escape, d as add_attribute, i as is_promise, n as noop, m as missing_component, o as onDestroy, f as compute_rest_props, h as createEventDispatcher, j as spread, k as escape_attribute_value, l as escape_object, a as subscribe } from './ssr-DS8CioHm.js';
import { w as writable } from './index-C6eBuXkh.js';
import { faGraduationCap, faWrench, faPaperPlane, faLink, faC, faBicycle } from '@fortawesome/free-solid-svg-icons';
import { faRust, faJs, faPython, faGolang, faHtml5, faCss3, faGithub, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

var Types;
(function(Types2) {
  Types2["string"] = "string";
  Types2["array"] = "array";
  Types2["object"] = "object";
  Types2["mediaQueryList"] = "mediaQueryList";
})(Types || (Types = {}));
const getType = (value) => {
  if (value instanceof Object && typeof value.addListener === "function" && typeof value.removeListener === "function") {
    return Types.mediaQueryList;
  } else if (Array.isArray(value)) {
    return Types.array;
  } else if (value instanceof Object) {
    return Types.object;
  }
  return Types.string;
};
class Calc {
  static get(mql) {
    return mql.media ? mql.matches : false;
  }
  static inline(mql) {
    return Calc.get(mql);
  }
  //@ts-ignore
  static array(mql) {
    return mql.map((mql2) => autoCalc(mql2));
  }
  //recursion :(
  static object(mql) {
    const res = {};
    for (const key in mql) {
      res[key] = autoCalc(mql[key]);
    }
    return res;
  }
}
function autoCalc(mql) {
  const type = getType(mql);
  if (type === Types.mediaQueryList)
    return Calc.inline(mql);
  if (type === Types.array)
    return Calc.array(mql);
  if (type === Types.object)
    return Calc.object(mql);
}
class MQL {
  static get(query) {
    return window.matchMedia(query);
  }
  static inline(query) {
    return MQL.get(query);
  }
  //@ts-ignore
  static array(queries) {
    return queries.map((query) => autoMQL(query));
  }
  //recursion :(
  static object(query) {
    const res = {};
    for (const key in query) {
      res[key] = autoMQL(query[key]);
    }
    return res;
  }
}
function autoMQL(query) {
  const type = getType(query);
  if (type === Types.string)
    return MQL.inline(query);
  if (type === Types.array)
    return MQL.array(query);
  if (type === Types.object)
    return MQL.object(query);
}
var MQLEventMethods;
(function(MQLEventMethods2) {
  MQLEventMethods2["add"] = "addEventListener";
  MQLEventMethods2["remove"] = "removeEventListener";
})(MQLEventMethods || (MQLEventMethods = {}));
class MQLEvent {
  static inline(item, handler = () => {
  }, method = MQLEventMethods.add) {
    item && item[method] && item[method]("change", handler);
  }
  static array(arr, handler = () => {
  }, method = MQLEventMethods.add) {
    arr.flat(Infinity).forEach((item) => autoMQLEvent(item, handler, method));
  }
  static object(obj, handler = () => {
  }, method = MQLEventMethods.add) {
    for (const key in obj) {
      autoMQLEvent(obj[key], handler, method);
    }
  }
}
function autoMQLEvent(mql, handler = () => {
}, method = MQLEventMethods.add) {
  const type = getType(mql);
  if (type === Types.mediaQueryList)
    return MQLEvent.inline(mql, handler, method);
  if (type === Types.array)
    return MQLEvent.array(mql, handler, method);
  if (type === Types.object)
    return MQLEvent.object(mql, handler, method);
}
function mediaStore(query) {
  if (typeof window === "undefined")
    return { ...writable(void 0), destroy: () => {
    } };
  const { subscribe: subscribe2, set } = writable(void 0);
  const mql = autoMQL(query);
  const handleChange = () => set(autoCalc(mql));
  handleChange();
  autoMQLEvent(mql, handleChange);
  return {
    subscribe: subscribe2,
    destroy() {
      autoMQLEvent(mql, handleChange, MQLEventMethods.remove);
    }
  };
}
const createMediaStore = mediaStore;
const MediaQuery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store = noop, $$subscribe_store = () => ($$unsubscribe_store(), $$unsubscribe_store = subscribe(store, ($$value) => $store = $$value), store);
  let { query = "" } = $$props;
  let { matches = false } = $$props;
  let { matchesArray = [] } = $$props;
  let { matchesObject = {} } = $$props;
  let store;
  const updateMatches = (...watches) => {
    if (query) {
      matchesArray = Array.isArray($store) ? $store : [];
      matchesObject = getType($store) === Types.object ? $store : {};
      matches = $store ?? (getType(query) === Types.array ? [] : getType(query) === Types.object ? {} : false);
    } else {
      matches = false;
      matchesArray = [];
    }
  };
  const start = () => {
    $$subscribe_store(store = createMediaStore(query));
    updateMatches();
  };
  const destroy = () => {
    updateMatches();
    store?.destroy;
  };
  const update = (...watchers) => {
    destroy();
    query && start();
  };
  onDestroy(() => {
    destroy();
  });
  if ($$props.query === void 0 && $$bindings.query && query !== void 0)
    $$bindings.query(query);
  if ($$props.matches === void 0 && $$bindings.matches && matches !== void 0)
    $$bindings.matches(matches);
  if ($$props.matchesArray === void 0 && $$bindings.matchesArray && matchesArray !== void 0)
    $$bindings.matchesArray(matchesArray);
  if ($$props.matchesObject === void 0 && $$bindings.matchesObject && matchesObject !== void 0)
    $$bindings.matchesObject(matchesObject);
  {
    update(query);
  }
  {
    updateMatches($store);
  }
  $$unsubscribe_store();
  return `${slots.default ? slots.default({ matches, matchesArray }) : ``}`;
});
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide?.go(control);
  }
  function sync(target) {
    splide?.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0)
    $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0)
    $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0)
    $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return ` <div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__track", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><ul class="splide__list">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__slide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
const parseNumber = parseFloat;
function joinCss(obj, separator = ";") {
  let texts;
  if (Array.isArray(obj)) {
    texts = obj.filter((text) => text);
  } else {
    texts = [];
    for (const prop in obj) {
      if (obj[prop]) {
        texts.push(`${prop}:${obj[prop]}`);
      }
    }
  }
  return texts.join(separator);
}
function getStyles(style, size, pull, fw) {
  let float;
  let width;
  const height = "1em";
  let lineHeight;
  let fontSize;
  let textAlign;
  let verticalAlign = "-.125em";
  const overflow = "visible";
  if (fw) {
    textAlign = "center";
    width = "1.25em";
  }
  if (pull) {
    float = pull;
  }
  if (size) {
    if (size == "lg") {
      fontSize = "1.33333em";
      lineHeight = ".75em";
      verticalAlign = "-.225em";
    } else if (size == "xs") {
      fontSize = ".75em";
    } else if (size == "sm") {
      fontSize = ".875em";
    } else {
      fontSize = size.replace("x", "em");
    }
  }
  return joinCss([
    joinCss({
      float,
      width,
      height,
      "line-height": lineHeight,
      "font-size": fontSize,
      "text-align": textAlign,
      "vertical-align": verticalAlign,
      "transform-origin": "center",
      overflow
    }),
    style
  ]);
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  return joinCss(
    [
      `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
      `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
      rotate && `rotate(${rotate}${rotateUnit})`
    ],
    " "
  );
}
const css = {
  code: ".spin.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 2s 0s infinite linear}.pulse.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 1s infinite steps(8)}@keyframes svelte-1cj2gr0-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { id = "" } = $$props;
  let { style = "" } = $$props;
  let { icon } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  let { fw = false } = $$props;
  let { pull = "" } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = "" } = $$props;
  let { flip = false } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let i;
  let s;
  let transform;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css);
  i = icon && icon.icon || [0, 0, "", [], ""];
  s = getStyles(style, size, pull, fw);
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? `<svg${add_attribute("id", id || void 0, 0)} class="${[
    "svelte-fa " + escape(clazz, true) + " svelte-1cj2gr0",
    (pulse ? "pulse" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${add_attribute("style", s, 0)} viewBox="${"0 0 " + escape(i[0], true) + " " + escape(i[1], true)}" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><g transform="${"translate(" + escape(i[0] / 2, true) + " " + escape(i[1] / 2, true) + ")"}" transform-origin="${escape(i[0] / 4, true) + " 0"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>` : ` <path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path> <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>`}</g></g></svg>` : ``}`;
});
async function loadComponent(name) {
  return await import(`${name}.svelte`);
}
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className } = $$props;
  const projects = [
    // {
    //   title: "Nia's Portfolio",
    //   description: "This website! I built it with SvelteKit and TailwindCSS.",
    //   image: "portfolio.webp",
    //   link: "https://github.com/3nt3/3nt3.de-rewrite",
    //   icons: ["./SvelteLogo", "./TailwindLogo"],
    //   faIcons: [],
    // },
    {
      title: "Homemade Electric Cargo Bike",
      description: "A cargo bike I built with a friend. It's made from a regular bike and steel tubing. It can carry a EURO pallet. Plans by Phil Vandelay",
      image: "bike.webp",
      faIcons: [faBicycle, faWrench],
      icons: []
    },
    {
      title: "Smartification of a Label Printer",
      description: "Assembly of a Raspberry Pi Zero W and a Brother QL-800 to add wifi, shortcut buttons and a web interface to the printer.",
      image: "printer.webp",
      link: "https://github.com/3nt3/labelpi",
      faIcons: [faPython, faWrench],
      icons: []
    },
    {
      title: "Gymhaan Tutoring Website",
      description: "A full-stack project for my school to help connect students with tutors. Built with React and Next.js",
      image: "tutoring.webp",
      link: "https://nachhilfe.gymhaan.de",
      icons: [],
      faIcons: [faReact, faNodeJs]
    },
    {
      title: "Soccerbot at Bohlebots",
      description: "A semi autonomous soccer robot built with Rust and C. Took part in the RoboCup Junior Germany competition in 2022",
      image: "digital.webp",
      link: "https://digital-website-rho.vercel.app",
      icons: [],
      faIcons: [faC, faRust]
    },
    {
      title: "Monster Price Scraping",
      description: "A series of webscrapers and a mobile app to help me find the best deals on Monster Energy drinks. Built with Rust and Flutter.",
      image: "monster.webp",
      link: "https://github.com/3nt3/monster-discount",
      icons: ["./FlutterLogo"],
      faIcons: [faRust]
    }
  ];
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(MediaQuery, "MediaQuery").$$render(
    $$result,
    {
      query: [
        "(max-width: 768px)",
        "(min-width: 768px) and (max-width: 1280px)",
        "(min-width: 1280px)"
      ]
    },
    {},
    {
      default: ({ matches }) => {
        let [mobile, tablet, desktop] = matches;
        return `${validate_component(Splide_1, "Splide").$$render(
          $$result,
          {
            options: {
              perPage: mobile ? 1 : tablet ? 2 : 3,
              perMove: 1
            },
            class: className
          },
          {},
          {
            default: () => {
              return `${each(projects, (p) => {
                return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "px-3 pb-10" }, {}, {
                  default: () => {
                    return `<img src="${"/projects/" + escape(p.image, true)}"${add_attribute("alt", p.title, 0)} class="h-72 object-cover rounded-xl w-full"> <h2 class="max-w-fit mt-2 text-xl font-bold flex gap-1 wrap">${p.link ? `<a${add_attribute("href", p.link, 0)}>${escape(p.title)} ${validate_component(Fa, "Fa").$$render($$result, { icon: faLink, class: "inline mx-1" }, {}, {})}</a>` : `<span>${escape(p.title)}</span>`} <div class="inline-flex gap-2 items-center leading-5 mr-2">${each(p.icons, (icon) => {
                      return `${function(__value) {
                        if (is_promise(__value)) {
                          __value.then(null, noop);
                          return ``;
                        }
                        return function(component) {
                          return ` <div class="inline-block w-5">${validate_component(component.default || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div> `;
                        }(__value);
                      }(loadComponent(icon))}`;
                    })}</div> <div class="inline-flex gap-2 items-center">${each(p.faIcons, (icon) => {
                      return `${validate_component(Fa, "Fa").$$render($$result, { icon }, {}, {})}`;
                    })} </div></h2> <p class="max-w-fit text-lg font-serif">${escape(p.description)}</p> `;
                  }
                })}`;
              })} ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="bg-zinc-900 h-72 rounded-xl w-full p-6 pb-10 flex justify-center flex-col gap-3 pt-10"><div><div class="flex gap-3 overflow-hidden"> ${each([faRust, faJs, faPython, faC, faGolang, faHtml5, faCss3], (icon) => {
                    return `${validate_component(Fa, "Fa").$$render($$result, { icon }, {}, {})}`;
                  })}</div></div> <h1 class="font-serif italic text-3xl" data-svelte-h="svelte-jmicro">Check out my GitHub for more.</h1> <a class="block text-zinc-200 bg-purple-500 px-6 py-2 mr-auto text-lg rounded-full hover:shadow-[0px_0px_10px_0px_rgba(161,103,234,0.60)] transition-shadow ring-zinc-200 active:ring-3" href="https://github.com/3nt3">GitHub ${validate_component(Fa, "Fa").$$render($$result, { class: "inline", icon: faGithub }, {}, {})}</a></div>`;
                }
              })}`;
            }
          }
        )}`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="sticky top-0 w-screen flex bg-zinc-900 h-20 z-30 lg:px-40 px-8 items-center text-lg text-zinc-300" data-svelte-h="svelte-5uc1mu"><ul class="flex justify-between w-full"><li class="font-display text-purple-400 text-xl"><a href="/">Nia Schlegel</a></li> <ul class="flex gap-8 font-bold"><li class=""><a href="#about">About</a></li> <li class=""><a href="#contact">Contact</a></li></ul></ul></nav> <main class="flex lg:h-[90vh] items-center justify-center bg-zinc-950 lg:p-40 px-8 py-40" data-svelte-h="svelte-13kxh2u"><div class="flex h-full lg:items-center justify-between w-full z-10"><div class="flex flex-col justify-start flex-1 lg:-mr-40"><h1 class="font-display text-8xl -ml-1 bg-clip-text text-transparent bg-display-gradient">Hi there,</h1> <h2 class="font-serif text-3xl text-zinc-200 mt-1 z-10">
        I’m Nia and I do
        <span class="italic">multiple
           </span> things.</h2> <a class="block text-zinc-200 mt-8 mr-auto bg-purple-500 px-24 py-5 text-2xl rounded-full hover:shadow-[0px_0px_30px_0px_rgba(161,103,234,0.60)] transition-shadow ring-zinc-200 active:ring-3" href="#about">Find out more</a></div> <img class="object-scale-down w-[80%] lg:block hidden -z110 flex-initial" src="/hero image.png" alt="Hero displaying a couple of projects."></div>           </main> <section class="bg-zinc-950 text-zinc-200 lg:px-40 lg:pt-40 px-8 pt-20 z-10 pb-10" id="about" data-svelte-h="svelte-16fe5jh"><div class="flex xl:flex-row flex-col-reverse xl:gap-16 gap-8 items-center xl:items-stretch"><div class="xl:w-2/6 w-full lg:h-auto rounded-xl hover:shadow-zinc-800 shadow-lg transition-shadow relative overflow-hidden"><img src="/portrait.jpg" alt="Portrait of myself" class="rounded-xl w-full h-96 xl:h-full object-cover overflow-hidden"> <span class="absolute bottom-4 ml-4 z-10 font-serif text-xl">That&#39;s me!</span></div> <section class="flex-1 flex flex-col gap-4 bg-zinc-900 p-8 rounded-xl hover:shadow-zinc-800 shadow-lg transition-shadow"><h1 class="font-display text-5xl -ml-1 bg-clip-text text-transparent bg-display-gradient-lighter">Passionate about software development since forever.</h1> <p class="font-serif text-xl text-zinc-200">My experience stems from great personal interest in everything
        engineering/computer related since childhood. I have been programming as
        a pastime since 2013.</p> <div class="flex flex-col gap-4 w-full items-end mt-4"><div class="w-[90%] font-bold bg-amber-500 px-4 py-2 rounded-lg">Frontend ★</div> <div class="w-[80%] font-bold bg-indigo-600 px-4 py-2 rounded-lg">UI/UX Design</div> <div class="w-[75%] font-bold bg-amber-500 px-4 py-2 rounded-lg">Backend ★</div> <div class="w-[65%] font-bold bg-indigo-600 px-4 py-2 rounded-lg">Data-Science/Web-Scraping</div> <div class="w-[43%] font-bold bg-indigo-600 px-4 py-2 rounded-lg">Embedded</div> <div class="w-[42%] font-bold bg-indigo-600 px-4 py-2 rounded-lg">Mechanical Eng.</div></div> <p class="font-serif">★ Featured Skill</p> <p class="font-serif text-sm text-zinc-500">Note: unmarked x axis for added credibility.</p></section></div></section> <section class="text-zinc-200 bg-zinc-950 lg:px-40 lg:py-12 px-8 z-10 py-12"><h1 class="font-display bg-clip-text text-transparent bg-display-gradient-lighter text-5xl max-w-fit mx-auto" data-svelte-h="svelte-8ikp3g">PROJECTS</h1> <h2 class="italic font-serif text-xl mx-auto max-w-fit" data-svelte-h="svelte-xc47t0">What I&#39;ve been up to.</h2> ${validate_component(Carousel, "Carousel").$$render($$result, { class: "mt-10" }, {}, {})}</section> <section class="text-zinc-200 bg-zinc-950 lg:px-40 lg:py-12 px-8 z-10 py-12"><div class="flex justify-center gap-8 lg:flex-row flex-col"><div class="flex-1 bg-purple-500 p-8 rounded-xl"><h3 class="font-display text-4xl text-purple-200">EDUCATION ${validate_component(Fa, "Fa").$$render(
    $$result,
    {
      class: "inline ml-4",
      icon: faGraduationCap
    },
    {},
    {}
  )}</h3> <div class="p-2 text-lg"><ul class="flex flex-col gap-2 mt-4 border-dashed border-l-2 border-purple-200">${each(
    [
      "2015–2023 Abitur, Gymnasium Haan",
      "2023–2024 B. Sc., Computer Engineering, Cologne University of Applied Sciences (dropped out)",
      "2024–now B. Eng., Mechanical Engineering, Bochum University of Applied Sciences"
    ],
    (item) => {
      return `<li class="flex gap-4"><div class="mt-1 -ml-2 w-4 h-4 rounded-full bg-purple-200" data-svelte-h="svelte-p5vjhi"></div> <div class="flex-1"><span class="font-bold">${escape(item.split(",")[0])},</span> ${escape(item.split(",").slice(1).join(","))}</div> </li>`;
    }
  )}</ul></div></div> <div class="flex-1 bg-purple-500 p-8 rounded-xl"><h3 class="font-display text-4xl text-purple-200">WORK ${validate_component(Fa, "Fa").$$render($$result, { class: "inline ml-4", icon: faWrench }, {}, {})}</h3> <div class="p-2 text-lg"><ul class="flex flex-col gap-2 mt-4 border-dashed border-l-2 border-purple-200">${each(
    [
      "2019–2023, Newspaper Delivery Job (2 hours/week)",
      "2023–2024, Working Student Full-Stack Development (React, PHP), Biz Factory GmbH (20 hours/week)",
      "2024, Working Student DevOps (Linux, PHP, Docker), Check24 Ferienwohnungen GmbH (16 hours/week)",
      "2024–now, Dual Student Mechanical Engineering, Rheinbahn AG (39 hours/week)"
    ],
    (item) => {
      return `<li class="flex gap-4"><div class="mt-1 -ml-2 w-4 h-4 rounded-full bg-purple-200" data-svelte-h="svelte-p5vjhi"></div> <div class="flex-1"><span class="font-bold">${escape(item.split(",")[0])},</span> ${escape(item.split(",").slice(1).join(","))}</div> </li>`;
    }
  )}</ul></div></div></div></section> <section class="text-zinc-200 bg-zinc-950 lg:p-40 lg:pt-12 px-8 z-10 pt-12" id="contact"><div class="bg-zinc-900 p-12 rounded-xl gap-16 flex"><div class="w-2/6 min-h-[300px] hidden lg:block text-clip" data-svelte-h="svelte-1oi0w59"><h1 class="font-display text-zinc-500 text-5xl break-all [word-spacing: -20px] text-block select-none aria-hidden">LEAVE A MESSAGE AT THE TONE —
        LEAVE A MESSAGE AT THE TONE —
        LEAVE A MESSAGE AT THE TONE</h1></div> <div class="flex flex-col w-full items-center"><h1 class="font-display text-5xl bg-display-gradient-lighter bg-clip-text text-transparent" data-svelte-h="svelte-1u4x5mn">CONTACT</h1> <h2 class="italic font-serif text-xl text-zinc-200" data-svelte-h="svelte-1af62yr">For personal or business inquiries. Only say nice things.</h2> <form class="w-full flex flex-col mt-8" action="?/contact" method="POST"><div class="w-full flex flex-col gap-4 lg:flex-row justify-stretch>" data-svelte-h="svelte-1l68li7"><input type="text" placeholder="Name" name="name" class="bg-zinc-800 border-zinc-700 border-2 text-zinc-200 p-4 rounded-lg flex-1" required> <input type="email" placeholder="E-Mail" name="email" class="bg-zinc-800 border-zinc-700 border-2 text-zinc-200 p-4 rounded-lg flex-1" required></div> <textarea placeholder="Message" name="message" class="bg-zinc-800 border-zinc-700 border-2 text-zinc-200 p-4 rounded-lg mt-4 h-48" required></textarea> <button class="bg-purple-500 text-zinc-200 p-4 mt-4 font-bold rounded-full hover:shadow-[0px_0px_10px_0px_rgba(161,103,234,0.60)] transition-shadow ring-zinc-200 active:ring-3">SEND IT ${validate_component(Fa, "Fa").$$render($$result, { class: "inline", icon: faPaperPlane }, {}, {})}</button></form></div></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Cv13nbd5.js.map
