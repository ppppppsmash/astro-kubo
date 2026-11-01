export type Locale = "ja" | "tw";

export const getLocale = (pathname: string): Locale =>
  pathname.startsWith("/tw") ? "tw" : "ja";

export const dict = {
  ja: {
    contact: "お問い合わせ",
    shop: "オンラインショップ",
    instagram: "Instagram",
    langSwitch: { label: "繁體中文", href: "/tw" },
    company: "会社情報",
    links: "リンク",
    madeIn: "Made in Japan",
    askChannel: "販売チャネルについて問い合わせる",
    menuOpen: "メニューを開く",
    menuClose: "メニューを閉じる",
    backToTop: "ページの先頭へ戻る",
  },
  tw: {
    contact: "聯繫我們",
    shop: "線上商店",
    instagram: "Instagram",
    langSwitch: { label: "日本語", href: "/" },
    company: "公司資訊",
    links: "連結",
    madeIn: "Made in Japan",
    askChannel: "洽詢通路與經銷",
    menuOpen: "開啟選單",
    menuClose: "關閉選單",
    backToTop: "回到頁首",
  },
} as const;

export const t = (pathname: string) => dict[getLocale(pathname)];
