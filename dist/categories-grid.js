import { LitElement as te, css as ie, html as r } from "lit";
import { property as oe } from "lit/decorators.js";
var re = Object.defineProperty, ae = (C, e, t, o) => {
  for (var i = void 0, n = C.length - 1, s; n >= 0; n--)
    (s = C[n]) && (i = s(e, t, i) || i);
  return i && re(e, t, i), i;
};
const se = [
  {
    card_type: !1,
    title: "تيشيرتات",
    url: "",
    image: "https://cdn.files.salla.network/other/2070588102/9a786fc9-9711-4ac3-af68-e8c34fc00b14-original.png",
    flex_width: 1,
    mobile_flex_width: 1
  },
  {
    card_type: !1,
    title: "قمصان",
    url: "",
    image: "https://cdn.files.salla.network/other/2070588102/8c2ebba7-954e-4a98-92e5-9c569103a82c-original.png",
    flex_width: 1,
    mobile_flex_width: 1
  },
  {
    card_type: !1,
    title: "بناطيل",
    url: "",
    image: "https://cdn.files.salla.network/other/2070588102/046fae12-5ca5-4564-a243-1dc9784b1b2f-original.png",
    flex_width: 1,
    mobile_flex_width: 1
  },
  {
    card_type: !1,
    title: "جينس",
    url: "",
    image: "https://cdn.files.salla.network/other/2070588102/291fe7a4-b33d-4d4b-b630-69f2ada44b8a-original.png",
    flex_width: 1,
    mobile_flex_width: 1
  },
  {
    card_type: !1,
    title: "فساتين",
    url: "",
    image: "https://cdn.files.salla.network/other/2070588102/d5debf21-c18f-4a5a-87da-d2b6f458376a-original.png",
    flex_width: 1,
    mobile_flex_width: 1
  },
  {
    card_type: !1,
    title: "جاكيتات ومعاطف",
    url: "",
    image: "https://cdn.files.salla.network/other/2070588102/3c0ca0a2-776c-40ac-b8a5-1d8c193b80e6-original.png",
    flex_width: 1,
    mobile_flex_width: 1
  },
  {
    card_type: !1,
    title: "احذية",
    url: "",
    image: "https://cdn.files.salla.network/other/2070588102/5bc26de5-2253-4cce-b36c-457569cf4c3c-original.png",
    flex_width: 1,
    mobile_flex_width: 1
  },
  {
    card_type: !1,
    title: "ملابس كاجوال",
    url: "",
    image: "https://cdn.files.salla.network/other/2070588102/69691b3f-38f5-44ea-a2bb-24106adc97ad-original.png",
    flex_width: 1.2,
    mobile_flex_width: 1
  },
  {
    card_type: !0,
    title: "LOGO",
    image: "https://skytheme-demo.myshopify.com/cdn/shop/files/preview_images/e932152ebad14476a49d44387417b987.thumbnail.0000000000_1100x.jpg?v=1790236176",
    banner_video_url: "",
    flex_width: 1.4,
    mobile_flex_width: 1,
    hide_on_mobile: !0
  },
  {
    card_type: !1,
    title: "اكسسوارات",
    url: "",
    image: "https://cdn.files.salla.network/other/2070588102/7226ccd0-003e-4754-b81e-50ae53847477-original.png",
    flex_width: 1.4,
    mobile_flex_width: 1
  }
], $ = class $ extends te {
  connectedCallback() {
    if (super.connectedCallback(), typeof document < "u" && !document.getElementById("font-oi-google")) {
      const e = document.createElement("link");
      e.id = "font-oi-google", e.rel = "stylesheet", e.href = "https://fonts.googleapis.com/css2?family=Oi&display=swap", document.head.appendChild(e);
    }
  }
  handleMobileSliderScroll(e) {
    var s;
    const t = e.currentTarget;
    if (!t) return;
    const o = t.scrollWidth - t.clientWidth;
    if (o <= 0) return;
    const i = Math.min(
      Math.max(Math.abs(t.scrollLeft) / o, 0),
      1
    ), n = (s = this.shadowRoot) == null ? void 0 : s.querySelector(
      ".slider-scrollbar-thumb"
    );
    if (n) {
      const g = getComputedStyle(t).direction === "rtl", d = 58, p = g ? -i * d : i * d;
      n.style.transform = `translateX(${p}px)`;
    }
  }
  getItemUrl(e) {
    const t = (o) => {
      if (!o) return "#";
      if (typeof o == "string") return o;
      if (o.url) return o.url;
      if (o.link) return o.link;
      const i = o.value;
      if (!i) return "#";
      if (typeof i == "string" && (i.startsWith("/") || i.startsWith("http")))
        return i;
      switch (o.key) {
        case "categories":
          return `/categories/${i}`;
        case "products":
          return `/products/${i}`;
        case "brands":
          return `/brands/${i}`;
        case "pages":
          return `/pages/${i}`;
        case "blog_articles":
          return `/blog/${i}`;
        case "blog_categories":
          return `/blog/categories/${i}`;
        default:
          return i;
      }
    };
    if (e.source_url) {
      if (typeof e.source_url == "string") return e.source_url;
      if (Array.isArray(e.source_url) && e.source_url.length > 0)
        return t(e.source_url[0]);
      if (typeof e.source_url == "object")
        return t(e.source_url);
    }
    return e.url || "#";
  }
  isTruthy(e) {
    return e === !0 || e === "true" || e === 1 || e === "1";
  }
  isBannerCard(e) {
    if (typeof e.card_type == "boolean")
      return e.card_type;
    if (typeof e.card_type == "string")
      return e.card_type === "banner" || e.card_type === "true" || e.card_type === "1";
    if (Array.isArray(e.card_type) && e.card_type.length > 0) {
      const t = e.card_type[0];
      return t === !0 || (t == null ? void 0 : t.value) === "banner" || (t == null ? void 0 : t.key) === "banner" || (t == null ? void 0 : t.value) === "true";
    }
    return typeof e.card_type == "object" && e.card_type !== null ? e.card_type.value === "banner" || e.card_type.key === "banner" || e.card_type.value === !0 : !!e.banner_video_url;
  }
  getLocalizedValue(e) {
    var t, o;
    if (!e) return "";
    if (typeof e == "string") return e;
    if (typeof e == "object") {
      const i = document.documentElement.lang || typeof Salla < "u" && ((o = (t = Salla.lang) == null ? void 0 : t.get) == null ? void 0 : o.call(t)) || "ar";
      return e[i] || e.ar || e.en || Object.values(e)[0] || "";
    }
    return String(e);
  }
  renderCategoryCard(e) {
    const t = e.flex_width ?? 1, o = e.mobile_flex_width ?? e.flex_width_mobile ?? 1, i = this.getItemUrl(e), n = this.isTruthy(e.hide_on_mobile), s = this.getLocalizedValue(
      e.section_title || e.title || ""
    );
    return r`
      <a
        class="categories-grid-item ${n ? "hide-card-mobile" : ""}"
        href="${i}"
        aria-label="${s}"
        style="
          --flexWidth: ${t};
          --mobileFlexWidth: ${o};
        "
      >
        <div class="categories-grid-media-wrapper">
          <div class="categories-grid-media">
            ${e.image ? r`
                    <img
                      src="${e.image}"
                      alt="${s}"
                      loading="lazy"
                      decoding="async"
                    />
                  ` : r`<div
                    style="width: 100%; height: 100%; background: #e5e7eb;"
                  ></div>`}
          </div>
        </div>
        <div class="categories-grid-overlay"></div>
        <div class="categories-grid-title">${s}</div>
      </a>
    `;
  }
  renderBannerItem(e) {
    var y, w, _, b, l;
    const t = this.getLocalizedValue(
      (e == null ? void 0 : e.section_title) ?? (e == null ? void 0 : e.title) ?? ((y = this.config) == null ? void 0 : y.banner_text)
    ) || "LOGO", o = (e == null ? void 0 : e.banner_video_url) || ((w = this.config) == null ? void 0 : w.banner_video_url) || "", i = (e == null ? void 0 : e.image) || ((_ = this.config) == null ? void 0 : _.banner_image_url) || "https://skytheme-demo.myshopify.com/cdn/shop/files/preview_images/e932152ebad14476a49d44387417b987.thumbnail.0000000000_1100x.jpg?v=1790236176", n = (e == null ? void 0 : e.banner_theme) || ((b = this.config) == null ? void 0 : b.banner_theme) || "light", s = (e == null ? void 0 : e.flex_width) ?? ((l = this.config) == null ? void 0 : l.banner_flex_width) ?? 1.4, g = (e == null ? void 0 : e.mobile_flex_width) ?? (e == null ? void 0 : e.flex_width_mobile) ?? 1, d = e ? this.getItemUrl(e) : "#", p = d && d !== "#", m = this.isTruthy(e == null ? void 0 : e.hide_on_mobile), f = !!(o && o.trim() !== ""), h = i.trim() !== "", v = t.trim() !== "", x = r`
      <div class="categories-grid-item-text-background">
        ${f ? r`
                <video
                  playsinline
                  autoplay
                  loop
                  muted
                  preload="metadata"
                  poster="${i}"
                >
                  <source src="${o}" type="video/mp4" />
                  ${h ? r`<img src="${i}" alt="${t}" />` : r``}
                </video>
              ` : h ? r`<img src="${i}" alt="${t}" />` : r`<div
                  style="width: 100%; height: 100%; background: #f3f4f6;"
                ></div>`}
      </div>
      ${v ? r`<div class="categories-grid-text">${t}</div>` : h && !f ? r`
                <div class="categories-grid-logo-direct">
                  <img src="${i}" alt="Logo" />
                </div>
              ` : r`<div class="categories-grid-text">LOGO</div>`}
    `;
    return p ? r`
        <a
          class="categories-grid-item categories-grid-item-text text-background-${n} ${m ? "hide-card-mobile" : ""}"
          href="${d}"
          aria-label="${t}"
          style="
            --bannerFlexWidth: ${s};
            --mobileFlexWidth: ${g};
            text-decoration: none;
          "
        >
          ${x}
        </a>
      ` : r`
      <div
        class="categories-grid-item categories-grid-item-text text-background-${n} ${m ? "hide-card-mobile" : ""}"
        style="
          --bannerFlexWidth: ${s};
          --mobileFlexWidth: ${g};
        "
      >
        ${x}
      </div>
    `;
  }
  renderCard(e) {
    return this.isBannerCard(e) ? this.renderBannerItem(e) : this.renderCategoryCard(e);
  }
  render() {
    var W, B, z, T, O, L, F, M, I, A, H, V, j, G, R, D, E, U, P, q, X, Y, J, K, N;
    const e = this.getLocalizedValue(
      ((W = this.config) == null ? void 0 : W.section_title) ?? ((B = this.config) == null ? void 0 : B.title)
    ) || "اكتشف التشكيلات المميزة", t = ((z = this.config) == null ? void 0 : z.show_header) ?? !0, o = this.getLocalizedValue((T = this.config) == null ? void 0 : T.button_text) || "عرض كل المجموعات", i = ((O = this.config) == null ? void 0 : O.button_url) || "", n = (((L = this.config) == null ? void 0 : L.show_button) ?? !0) && !!o, s = ((F = this.config) == null ? void 0 : F.block_radius) ?? 12, g = ((M = this.config) == null ? void 0 : M.row_height) ?? 160, d = ((I = this.config) == null ? void 0 : I.gap) ?? 12, p = ((A = this.config) == null ? void 0 : A.mobile_columns) ?? 3, m = ((H = this.config) == null ? void 0 : H.always_show_titles) ?? !1, f = this.isTruthy((V = this.config) == null ? void 0 : V.hide_on_desktop), h = this.isTruthy((j = this.config) == null ? void 0 : j.hide_on_mobile), v = ((G = this.config) == null ? void 0 : G.heading_color) || "#111827", x = ((R = this.config) == null ? void 0 : R.card_title_color) || "#ffffff", y = ((D = this.config) == null ? void 0 : D.button_bg_color) || "#111111", w = ((E = this.config) == null ? void 0 : E.button_text_color) || "#ffffff", _ = ((U = this.config) == null ? void 0 : U.section_bg_color) || "transparent";
    let b = "100%";
    if (((P = this.config) == null ? void 0 : P.container_width) !== void 0 && ((q = this.config) == null ? void 0 : q.container_width) !== null && ((X = this.config) == null ? void 0 : X.container_width) !== "") {
      const a = String(this.config.container_width).trim();
      b = a.endsWith("%") ? a : `${a}%`;
    }
    f ? this.setAttribute("hide-on-desktop", "") : this.removeAttribute("hide-on-desktop"), h ? this.setAttribute("hide-on-mobile", "") : this.removeAttribute("hide-on-mobile");
    let l = !1;
    const c = (Y = this.config) == null ? void 0 : Y.mobile_layout;
    if (typeof c == "string")
      l = c === "slider";
    else if (Array.isArray(c) && c.length > 0) {
      const a = c[0];
      l = (a == null ? void 0 : a.value) === "slider" || (a == null ? void 0 : a.key) === "slider";
    } else typeof c == "object" && c !== null && (l = c.value === "slider" || c.key === "slider");
    ((J = this.config) == null ? void 0 : J.mobile_as_slider) !== void 0 && (l = !!this.config.mobile_as_slider);
    const k = (K = this.config) != null && K.items && this.config.items.length > 0 ? this.config.items : se, S = ((N = this.config) == null ? void 0 : N.desktop_row1_count) ?? 6, Q = k.slice(0, S), Z = k.slice(S), ee = k.filter(
      (a) => !this.isTruthy(a.hide_on_mobile)
    );
    return r`
      <section
        class="categories-section ${m ? "always-titles" : ""} ${f ? "hide-on-desktop" : ""} ${h ? "hide-on-mobile" : ""}"
        style="
          --blockRadius: ${s}px;
          --rowHeight: ${g}px;
          --columnGap: ${d}px;
          --rowGap: ${d + 1}px;
          --mobileCols: ${p};
          --headingColor: ${v};
          --cardTitleColor: ${x};
          --btnBg: ${y};
          --btnColor: ${w};
          --sectionBg: ${_};
          --containerWidth: ${b};
        "
      >
        ${t ? r`
                <div class="section-header-wrap">
                  <div class="section-header-text">
                    <h2 class="section-heading">${e}</h2>
                  </div>
                  ${n ? r`
                          <div class="section-header-button">
                            <a
                              href="${i || "#"}"
                              class="section-button"
                              aria-label="${o}"
                            >
                              <span class="animated-dot"></span>
                              <span class="btn-text">${o}</span>
                            </a>
                          </div>
                        ` : r``}
                </div>
              ` : r``}

        <!-- Desktop View (2 Rows) -->
        <div class="categories-grid-desktop">
          <div class="categories-row">
            ${Q.map((a) => this.renderCard(a))}
          </div>
          <div class="categories-row">
            ${Z.map((a) => this.renderCard(a))}
          </div>
        </div>

        <!-- Mobile View (Grid by default, or Swiper Slider) -->
        <div
          class="categories-grid-mobile ${l ? "as-slider" : ""}"
          @scroll="${l ? this.handleMobileSliderScroll : null}"
        >
          ${ee.map((a) => this.renderCard(a))}
        </div>
        ${l ? r`
                <div class="slider-scrollbar">
                  <div class="slider-scrollbar-thumb"></div>
                </div>
              ` : r``}
      </section>
    `;
  }
};
$.styles = ie`
    @import url("https://fonts.googleapis.com/css2?family=Oi&display=swap");

    :host {
      display: block;
      width: 100%;
      box-sizing: border-box;
      font-family: inherit;
      --topSpacer: 25px;
      --bottomSpacer: 35px;
      --blockRadius: 12px;
      --columnGap: 12px;
      --rowGap: 13px;
      --rowHeight: 160px;
      --btnBg: #111111;
      --btnColor: #ffffff;
      --textColor: 0, 0, 0;
      --headingColor: #111827;
      --cardTitleColor: #ffffff;
      --sectionBg: transparent;
      --containerWidth: 100%;
    }

    @media (min-width: 768px) {
      :host {
        --rowHeight: 145px;
        --topSpacer: 40px;
        --bottomSpacer: 40px;
      }

      :host([hide-on-desktop]),
      .categories-section.hide-on-desktop {
        display: none !important;
      }
    }

    @media (min-width: 1025px) {
      :host {
        --rowHeight: 160px;
      }
    }

    @media (min-width: 1200px) {
      :host {
        --rowHeight: 170px;
        --topSpacer: 50px;
        --bottomSpacer: 50px;
      }
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    .categories-section {
      width: var(--containerWidth, 100%);
      max-width: 100%;
      margin: 0 auto;
      padding-top: var(--topSpacer);
      padding-bottom: var(--bottomSpacer);
      padding-left: 1rem;
      padding-right: 1rem;
      background-color: var(--sectionBg, transparent);
    }

    /* Header */
    .section-header-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      flex-wrap: wrap;
      gap: 16px;
    }

    .section-heading {
      margin: 0;
      font-size: clamp(1.3rem, 2.8vw, 1.85rem);
      font-weight: 800;
      color: var(--headingColor, #111827);
      line-height: 1.25;
      letter-spacing: -0.01em;
    }

    .section-button {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 9px 22px;
      border-radius: 9999px;
      background-color: var(--btnBg);
      color: var(--btnColor);
      text-decoration: none;
      font-size: 0.92rem;
      font-weight: 600;
      position: relative;
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    }

    .section-button:hover {
      background-color: #27272a;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }

    .animated-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: #22c55e;
      box-shadow: 0 0 8px #22c55e;
      animation: pulseDot 2s infinite ease-in-out;
    }

    @keyframes pulseDot {
      0%,
      100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.4;
        transform: scale(0.75);
      }
    }

    /* Desktop View */
    .categories-grid-desktop {
      display: flex;
      flex-direction: column;
      gap: var(--rowGap);
      width: 100%;
    }

    .categories-row {
      display: flex;
      gap: var(--columnGap);
      width: 100%;
      align-items: stretch;
    }

    /* Cards */
    .categories-grid-item {
      position: relative;
      overflow: hidden;
      border-radius: var(--blockRadius);
      text-decoration: none;
      display: block;
      cursor: pointer;
      height: var(--rowHeight);
      flex: var(--flexWidth, 1) 1 0%;
      min-width: 90px;
      background-color: #f3f4f6;
      transition:
        transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
        box-shadow 0.3s ease;
    }

    .categories-grid-media-wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }

    .categories-grid-media img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      transition:
        transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
        filter 0.4s ease;
      will-change: transform, filter;
    }

    .categories-grid-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 20%,
        rgba(0, 0, 0, 0.65) 100%
      );
      opacity: 0;
      transition: opacity 0.35s ease;
      pointer-events: none;
    }

    .categories-grid-title {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      color: var(--cardTitleColor, #ffffff);
      font-weight: 700;
      font-size: 1.1rem;
      text-align: center;
      z-index: 2;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
      opacity: 0;
      transform: scale(1.35);
      transition:
        transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
        opacity 0.35s ease;
      pointer-events: none;
      user-select: none;
    }

    /* Desktop Hover */
    @media (hover: hover) and (pointer: fine) {
      .categories-grid-item:hover .categories-grid-media img {
        transform: scale(1.1);
        filter: blur(1.5px);
      }

      .categories-grid-item:hover .categories-grid-overlay {
        opacity: 1;
      }

      .categories-grid-item:hover .categories-grid-title {
        opacity: 1;
        transform: scale(1);
      }
    }

    /* Option to always display titles */
    :host([always-titles]) .categories-grid-overlay,
    .always-titles .categories-grid-overlay {
      opacity: 1;
    }
    :host([always-titles]) .categories-grid-title,
    .always-titles .categories-grid-title {
      opacity: 1;
      transform: scale(1);
    }

    /* Banner / Cutout Text Block */
    .categories-grid-item-text {
      position: relative;
      overflow: hidden;
      border-radius: var(--blockRadius);
      height: var(--rowHeight);
      flex: var(--bannerFlexWidth, 1.4) 1 0%;
      min-width: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
      isolation: isolate;
      background: #ffffff;
    }

    .categories-grid-item-text-background {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .categories-grid-item-text-background video,
    .categories-grid-item-text-background img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.02);
    }

    .categories-grid-text {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Oi", cursive, serif, sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 87px;
      line-height: 150%;
      letter-spacing: 0;
      text-align: center;
      vertical-align: middle;
      text-transform: uppercase;
      user-select: none;
    }

    .text-background-light {
      background: #ffffff;
    }
    .text-background-light .categories-grid-text {
      background: #ffffff;
      color: #000000;
      mix-blend-mode: screen;
    }

    .text-background-dark {
      background: #000000;
    }
    .text-background-dark .categories-grid-text {
      background: #000000;
      color: #ffffff;
      mix-blend-mode: multiply;
    }

    .categories-grid-logo-direct {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .categories-grid-logo-direct img {
      max-width: 80%;
      max-height: 80%;
      object-fit: contain;
    }

    /* Mobile 3-Column Grid View (Image 1) */
    .categories-grid-mobile {
      display: none;
    }

    @media (max-width: 767px) {
      :host([hide-on-mobile]),
      .categories-section.hide-on-mobile {
        display: none !important;
      }

      .categories-grid-item.hide-card-mobile {
        display: none !important;
      }

      .categories-grid-desktop {
        display: none;
      }

      .categories-grid-mobile {
        display: grid;
        grid-template-columns: repeat(var(--mobileCols, 3), 1fr);
        gap: 10px;
        width: 100%;
      }

      .categories-grid-mobile .categories-grid-item {
        height: auto;
        min-height: 150px;
        flex: none;
        grid-column: span var(--mobileFlexWidth, 1);
      }

      .categories-grid-mobile .categories-grid-overlay {
        opacity: 1;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 35%,
          rgba(0, 0, 0, 0.78) 100%
        );
      }

      .categories-grid-mobile .categories-grid-title {
        opacity: 1;
        transform: none;
        align-items: flex-end;
        padding-bottom: 10px;
        padding-left: 6px;
        padding-right: 6px;
        font-size: 0.95rem;
        font-weight: 700;
        line-height: 1.25;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.85);
      }

      .categories-grid-mobile .categories-grid-item.categories-grid-item-text {
        height: auto;
        aspect-ratio: 3 / 4;
        min-height: 130px;
        flex: none;
      }

      .categories-grid-mobile
        .categories-grid-item.categories-grid-item-text
        .categories-grid-text {
        font-size: clamp(1.8rem, 8vw, 87px);
        line-height: 150%;
      }

      /* Mobile Slider / Swiper Mode */
      .categories-grid-mobile.as-slider {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
        gap: 12px;
        padding-bottom: 8px;
        padding-top: 4px;
        padding-left: 1rem;
        padding-right: 1rem;
        margin-left: -1rem;
        margin-right: -1rem;
        scrollbar-width: none;
      }

      .categories-grid-mobile.as-slider::-webkit-scrollbar {
        display: none;
      }

      .categories-grid-mobile.as-slider .categories-grid-item {
        flex: 0 0 calc(135px * var(--mobileFlexWidth, 1));
        width: calc(135px * var(--mobileFlexWidth, 1));
        aspect-ratio: auto;
        min-height: 135px;
        scroll-snap-align: start;
        scroll-snap-stop: normal;
      }

      .slider-scrollbar {
        display: none;
      }

      .categories-grid-mobile.as-slider + .slider-scrollbar {
        display: block;
        width: 90px;
        height: 3px;
        background: #e5e7eb;
        border-radius: 9999px;
        margin: 10px auto 0;
        overflow: hidden;
        position: relative;
      }

      .slider-scrollbar-thumb {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 35%;
        background: #111827;
        border-radius: 9999px;
        transition: transform 0.08s ease-out;
      }
    }
  `;
let u = $;
ae([
  oe({ type: Object })
], u.prototype, "config");
typeof u < "u" && u.registerSallaComponent("salla-categories-grid");
export {
  u as default
};
