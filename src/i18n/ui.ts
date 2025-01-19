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
    "social.bluesky": "Bluesky",
    "social.github": "GitHub",
    "social.instagram": "Instagram",
    "social.rss": "RSS Feed",
    "footer.copyright": `Copyright © ${new Date().getFullYear()} • All Rights Reserved.`,
    "404.pageNotFound": "Page Not Found",
  },
} as const
