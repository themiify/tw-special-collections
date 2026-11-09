import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { CategoriesGridConfig, CategoryItem } from "./types";

const DEFAULT_ITEMS: CategoryItem[] = [
  {
    card_type: false,
    title: "تيشيرتات",
    url: "",
    image:
      "https://cdn.files.salla.network/other/2070588102/9a786fc9-9711-4ac3-af68-e8c34fc00b14-original.png",
    flex_width: 1,
    mobile_flex_width: 1,
  },
  {
    card_type: false,
    title: "قمصان",
    url: "",
    image:
      "https://cdn.files.salla.network/other/2070588102/8c2ebba7-954e-4a98-92e5-9c569103a82c-original.png",
    flex_width: 1,
    mobile_flex_width: 1,
  },
  {
    card_type: false,
    title: "بناطيل",
    url: "",
    image:
      "https://cdn.files.salla.network/other/2070588102/046fae12-5ca5-4564-a243-1dc9784b1b2f-original.png",
    flex_width: 1,
    mobile_flex_width: 1,
  },
  {
    card_type: false,
    title: "جينس",
    url: "",
    image:
      "https://cdn.files.salla.network/other/2070588102/291fe7a4-b33d-4d4b-b630-69f2ada44b8a-original.png",
    flex_width: 1,
    mobile_flex_width: 1,
  },
  {
    card_type: false,
    title: "فساتين",
    url: "",
    image:
      "https://cdn.files.salla.network/other/2070588102/d5debf21-c18f-4a5a-87da-d2b6f458376a-original.png",
    flex_width: 1,
    mobile_flex_width: 1,
  },
  {
    card_type: false,
    title: "جاكيتات ومعاطف",
    url: "",
    image:
      "https://cdn.files.salla.network/other/2070588102/3c0ca0a2-776c-40ac-b8a5-1d8c193b80e6-original.png",
    flex_width: 1,
    mobile_flex_width: 1,
  },
  {
    card_type: false,
    title: "احذية",
    url: "",
    image:
      "https://cdn.files.salla.network/other/2070588102/5bc26de5-2253-4cce-b36c-457569cf4c3c-original.png",
    flex_width: 1,
    mobile_flex_width: 1,
  },
  {
    card_type: false,
    title: "ملابس كاجوال",
    url: "",
    image:
      "https://cdn.files.salla.network/other/2070588102/69691b3f-38f5-44ea-a2bb-24106adc97ad-original.png",
    flex_width: 1.2,
    mobile_flex_width: 1,
  },
  {
    card_type: true,
    title: "LOGO",
    image:
      "https://skytheme-demo.myshopify.com/cdn/shop/files/preview_images/e932152ebad14476a49d44387417b987.thumbnail.0000000000_1100x.jpg?v=1790236176",
    banner_video_url: "",
    flex_width: 1.4,
    mobile_flex_width: 1,
    hide_on_mobile: true,
  },
  {
    card_type: false,
    title: "اكسسوارات",
    url: "",
    image:
      "https://cdn.files.salla.network/other/2070588102/7226ccd0-003e-4754-b81e-50ae53847477-original.png",
    flex_width: 1.4,
    mobile_flex_width: 1,
  },
];

export default class CategoriesGrid extends LitElement {
  @property({ type: Object }) config?: CategoriesGridConfig;

  static styles = css`
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

  connectedCallback() {
    super.connectedCallback();
    if (
      typeof document !== "undefined" &&
      !document.getElementById("font-oi-google")
    ) {
      const link = document.createElement("link");
      link.id = "font-oi-google";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Oi&display=swap";
      document.head.appendChild(link);
    }
  }

  private handleMobileSliderScroll(e: Event) {
    const el = e.currentTarget as HTMLElement;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    const progress = Math.min(
      Math.max(Math.abs(el.scrollLeft) / maxScroll, 0),
      1,
    );
    const thumb = this.shadowRoot?.querySelector(
      ".slider-scrollbar-thumb",
    ) as HTMLElement;
    if (thumb) {
      const isRTL = getComputedStyle(el).direction === "rtl";
      const travel = 58; // 90px total - 31.5px thumb = ~58px travel
      const move = isRTL ? -progress * travel : progress * travel;
      thumb.style.transform = `translateX(${move}px)`;
    }
  }

  private getItemUrl(item: CategoryItem): string {
    const resolveFromObj = (obj: any): string => {
      if (!obj) return "#";
      if (typeof obj === "string") return obj;
      if (obj.url) return obj.url;
      if (obj.link) return obj.link;
      const val = obj.value;
      if (!val) return "#";
      if (
        typeof val === "string" &&
        (val.startsWith("/") || val.startsWith("http"))
      ) {
        return val;
      }
      switch (obj.key) {
        case "categories":
          return `/categories/${val}`;
        case "products":
          return `/products/${val}`;
        case "brands":
          return `/brands/${val}`;
        case "pages":
          return `/pages/${val}`;
        case "blog_articles":
          return `/blog/${val}`;
        case "blog_categories":
          return `/blog/categories/${val}`;
        default:
          return val;
      }
    };

    if (item.source_url) {
      if (typeof item.source_url === "string") return item.source_url;
      if (Array.isArray(item.source_url) && item.source_url.length > 0) {
        return resolveFromObj(item.source_url[0]);
      }
      if (typeof item.source_url === "object") {
        return resolveFromObj(item.source_url);
      }
    }
    return item.url || "#";
  }

  private isTruthy(val: any): boolean {
    return val === true || val === "true" || val === 1 || val === "1";
  }

  private isBannerCard(item: CategoryItem): boolean {
    if (typeof item.card_type === "boolean") {
      return item.card_type;
    }
    if (typeof item.card_type === "string") {
      return (
        item.card_type === "banner" ||
        item.card_type === "true" ||
        item.card_type === "1"
      );
    }
    if (Array.isArray(item.card_type) && item.card_type.length > 0) {
      const first: any = item.card_type[0];
      return Boolean(
        first === true ||
        first?.value === "banner" ||
        first?.key === "banner" ||
        first?.value === "true",
      );
    }
    if (typeof item.card_type === "object" && item.card_type !== null) {
      return (
        (item.card_type as any).value === "banner" ||
        (item.card_type as any).key === "banner" ||
        (item.card_type as any).value === true
      );
    }
    return Boolean(item.banner_video_url);
  }

  private getLocalizedValue(value: any): string {
    if (!value) return "";
    if (typeof value === "string") return value;
    if (typeof value === "object") {
      const currentLang =
        document.documentElement.lang ||
        (typeof Salla !== "undefined" && Salla.lang?.get?.()) ||
        "ar";
      return (
        value[currentLang] ||
        value.ar ||
        value.en ||
        Object.values(value)[0] ||
        ""
      );
    }
    return String(value);
  }

  private renderCategoryCard(item: CategoryItem) {
    const flexWidth = item.flex_width ?? 1;
    const mobileFlexWidth =
      item.mobile_flex_width ?? item.flex_width_mobile ?? 1;
    const url = this.getItemUrl(item);
    const hideMobile = this.isTruthy(item.hide_on_mobile);
    const itemTitle = this.getLocalizedValue(
      item.section_title || item.title || ""
    );

    return html`
      <a
        class="categories-grid-item ${hideMobile ? "hide-card-mobile" : ""}"
        href="${url}"
        aria-label="${itemTitle}"
        style="
          --flexWidth: ${flexWidth};
          --mobileFlexWidth: ${mobileFlexWidth};
        "
      >
        <div class="categories-grid-media-wrapper">
          <div class="categories-grid-media">
            ${
              item.image
                ? html`
                    <img
                      src="${item.image}"
                      alt="${itemTitle}"
                      loading="lazy"
                      decoding="async"
                    />
                  `
                : html`<div
                    style="width: 100%; height: 100%; background: #e5e7eb;"
                  ></div>`
            }
          </div>
        </div>
        <div class="categories-grid-overlay"></div>
        <div class="categories-grid-title">${itemTitle}</div>
      </a>
    `;
  }

  private renderBannerItem(item?: CategoryItem) {
    const bannerText =
      this.getLocalizedValue(
        item?.section_title ?? item?.title ?? this.config?.banner_text
      ) || "LOGO";
    const bannerVideo =
      item?.banner_video_url || this.config?.banner_video_url || "";
    const bannerPoster =
      item?.image ||
      this.config?.banner_image_url ||
      "https://skytheme-demo.myshopify.com/cdn/shop/files/preview_images/e932152ebad14476a49d44387417b987.thumbnail.0000000000_1100x.jpg?v=1790236176";
    const bannerTheme =
      item?.banner_theme || this.config?.banner_theme || "light";
    const flexWidth = item?.flex_width ?? this.config?.banner_flex_width ?? 1.4;
    const mobileFlexWidth =
      item?.mobile_flex_width ?? item?.flex_width_mobile ?? 1;
    const url = item ? this.getItemUrl(item) : "#";
    const hasUrl = url && url !== "#";
    const hideMobile = this.isTruthy(item?.hide_on_mobile);

    const hasVideo = Boolean(bannerVideo && bannerVideo.trim() !== "");
    const hasImage = Boolean(bannerPoster && bannerPoster.trim() !== "");
    const hasText = Boolean(bannerText && bannerText.trim() !== "");

    const content = html`
      <div class="categories-grid-item-text-background">
        ${
          hasVideo
            ? html`
                <video
                  playsinline
                  autoplay
                  loop
                  muted
                  preload="metadata"
                  poster="${bannerPoster}"
                >
                  <source src="${bannerVideo}" type="video/mp4" />
                  ${
                    hasImage
                      ? html`<img src="${bannerPoster}" alt="${bannerText}" />`
                      : html``
                  }
                </video>
              `
            : hasImage
              ? html`<img src="${bannerPoster}" alt="${bannerText}" />`
              : html`<div
                  style="width: 100%; height: 100%; background: #f3f4f6;"
                ></div>`
        }
      </div>
      ${
        hasText
          ? html`<div class="categories-grid-text">${bannerText}</div>`
          : hasImage && !hasVideo
            ? html`
                <div class="categories-grid-logo-direct">
                  <img src="${bannerPoster}" alt="Logo" />
                </div>
              `
            : html`<div class="categories-grid-text">LOGO</div>`
      }
    `;

    if (hasUrl) {
      return html`
        <a
          class="categories-grid-item categories-grid-item-text text-background-${bannerTheme} ${hideMobile ? "hide-card-mobile" : ""}"
          href="${url}"
          aria-label="${bannerText || "Logo"}"
          style="
            --bannerFlexWidth: ${flexWidth};
            --mobileFlexWidth: ${mobileFlexWidth};
            text-decoration: none;
          "
        >
          ${content}
        </a>
      `;
    }

    return html`
      <div
        class="categories-grid-item categories-grid-item-text text-background-${bannerTheme} ${hideMobile ? "hide-card-mobile" : ""}"
        style="
          --bannerFlexWidth: ${flexWidth};
          --mobileFlexWidth: ${mobileFlexWidth};
        "
      >
        ${content}
      </div>
    `;
  }

  private renderCard(item: CategoryItem) {
    if (this.isBannerCard(item)) {
      return this.renderBannerItem(item);
    }
    return this.renderCategoryCard(item);
  }

  render() {
    const title =
      this.getLocalizedValue(
        this.config?.section_title ?? this.config?.title
      ) || "اكتشف التشكيلات المميزة";
    const showHeader = this.config?.show_header ?? true;
    const buttonText =
      this.getLocalizedValue(this.config?.button_text) || "عرض كل المجموعات";
    const buttonUrl = this.config?.button_url || "";
    const showButton =
      (this.config?.show_button ?? true) && Boolean(buttonText);
    const blockRadius = this.config?.block_radius ?? 12;
    const rowHeight = this.config?.row_height ?? 160;
    const gap = this.config?.gap ?? 12;
    const mobileCols = this.config?.mobile_columns ?? 3;
    const alwaysTitles = this.config?.always_show_titles ?? false;
    const hideOnDesktop = this.isTruthy(this.config?.hide_on_desktop);
    const hideOnMobile = this.isTruthy(this.config?.hide_on_mobile);
    const headingColor = this.config?.heading_color || "#111827";
    const cardTitleColor = this.config?.card_title_color || "#ffffff";
    const buttonBgColor = this.config?.button_bg_color || "#111111";
    const buttonTextColor = this.config?.button_text_color || "#ffffff";
    const sectionBgColor = this.config?.section_bg_color || "transparent";

    let containerWidth = "100%";
    if (
      this.config?.container_width !== undefined &&
      this.config?.container_width !== null &&
      this.config?.container_width !== ""
    ) {
      const val = String(this.config.container_width).trim();
      containerWidth = val.endsWith("%") ? val : `${val}%`;
    }

    // Sync host element attributes
    if (hideOnDesktop) {
      this.setAttribute("hide-on-desktop", "");
    } else {
      this.removeAttribute("hide-on-desktop");
    }
    if (hideOnMobile) {
      this.setAttribute("hide-on-mobile", "");
    } else {
      this.removeAttribute("hide-on-mobile");
    }

    // Mobile layout mode: Grid is default
    let isSlider = false;
    const layout = this.config?.mobile_layout;
    if (typeof layout === "string") {
      isSlider = layout === "slider";
    } else if (Array.isArray(layout) && layout.length > 0) {
      const first: any = layout[0];
      isSlider = first?.value === "slider" || first?.key === "slider";
    } else if (typeof layout === "object" && layout !== null) {
      isSlider =
        (layout as any).value === "slider" || (layout as any).key === "slider";
    }
    if (this.config?.mobile_as_slider !== undefined) {
      isSlider = Boolean(this.config.mobile_as_slider);
    }

    const items: CategoryItem[] =
      this.config?.items && this.config.items.length > 0
        ? this.config.items
        : DEFAULT_ITEMS;

    // Desktop split: Row 1 takes the first items, Row 2 takes remaining
    const row1Count = this.config?.desktop_row1_count ?? 6;
    const row1Items = items.slice(0, row1Count);
    const row2Items = items.slice(row1Count);

    // Mobile: filter out cards hidden on mobile
    const mobileItems = items.filter(
      (item) => !this.isTruthy(item.hide_on_mobile),
    );

    return html`
      <section
        class="categories-section ${alwaysTitles ? "always-titles" : ""} ${hideOnDesktop ? "hide-on-desktop" : ""} ${hideOnMobile ? "hide-on-mobile" : ""}"
        style="
          --blockRadius: ${blockRadius}px;
          --rowHeight: ${rowHeight}px;
          --columnGap: ${gap}px;
          --rowGap: ${gap + 1}px;
          --mobileCols: ${mobileCols};
          --headingColor: ${headingColor};
          --cardTitleColor: ${cardTitleColor};
          --btnBg: ${buttonBgColor};
          --btnColor: ${buttonTextColor};
          --sectionBg: ${sectionBgColor};
          --containerWidth: ${containerWidth};
        "
      >
        ${
          showHeader
            ? html`
                <div class="section-header-wrap">
                  <div class="section-header-text">
                    <h2 class="section-heading">${title}</h2>
                  </div>
                  ${
                    showButton
                      ? html`
                          <div class="section-header-button">
                            <a
                              href="${buttonUrl || "#"}"
                              class="section-button"
                              aria-label="${buttonText}"
                            >
                              <span class="animated-dot"></span>
                              <span class="btn-text">${buttonText}</span>
                            </a>
                          </div>
                        `
                      : html``
                  }
                </div>
              `
            : html``
        }

        <!-- Desktop View (2 Rows) -->
        <div class="categories-grid-desktop">
          <div class="categories-row">
            ${row1Items.map((item) => this.renderCard(item))}
          </div>
          <div class="categories-row">
            ${row2Items.map((item) => this.renderCard(item))}
          </div>
        </div>

        <!-- Mobile View (Grid by default, or Swiper Slider) -->
        <div
          class="categories-grid-mobile ${isSlider ? "as-slider" : ""}"
          @scroll="${isSlider ? this.handleMobileSliderScroll : null}"
        >
          ${mobileItems.map((item) => this.renderCard(item))}
        </div>
        ${
          isSlider
            ? html`
                <div class="slider-scrollbar">
                  <div class="slider-scrollbar-thumb"></div>
                </div>
              `
            : html``
        }
      </section>
    `;
  }
}
