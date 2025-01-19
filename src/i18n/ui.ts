import { SITE_DESCRIPTION, SITE_SHORTNAME, SITE_TITLE } from "@/lib/constants"

export const languages = {
  en: "English",
}

export const defaultLang = "en"
export const showDefaultLang = false

export const ui = {
  en: {
    "meta.title": SITE_TITLE,
    "meta.description": SITE_DESCRIPTION,
    "navbar.app": SITE_TITLE,
    "navbar.title": "blog",
    "navbar.titleShort": SITE_SHORTNAME,
    "navbar.home": "Home",
    "navbar.tags": "Tags",
    "navbar.about": "About",
    "navbar.contact": "Contact",
    "navbar.search": "Search",
    "navbar.menu": "Menu",
    "navbar.close": "Close",
    "search.placeholder": "Search...",
    "search.noResults": "No results found.",
    "search.suggestions": "Suggestions",
    "seo.sitemap": "Sitemap",
    "social.follow": "Follow Me",
    "social.bluesky": "Bluesky",
    "social.github": "GitHub",
    "social.instagram": "Instagram",
    "social.rss": "RSS Feed",
    "footer.tagline": "a brew of awesomeness with a pinch of magic...",
    "footer.cookieConsent":
      "This website uses cookies which are used to collect anonymous information to improve your browsing experience and for analytics and metrics.",
    "footer.copyright": `Copyright © 2018-${new Date().getFullYear()} • The Leaky Cauldron Blog • All Rights Reserved.`,
    "404.pageNotFound": "Page Not Found",
  },
} as const
