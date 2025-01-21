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
    "navbar.short-name": SITE_SHORTNAME,
    "navbar.home": "Home",
    "navbar.tags": "Tags",
    "navbar.about": "About",
    "navbar.contact": "Contact",
    "navbar.search": "Search",
    "navbar.menu": "Menu",
    "navbar.close": "Close",
    "search.placeholder": "Search...",
    "search.no-results": "No results found.",
    "search.suggestions": "Suggestions",
    "seo.sitemap": "Sitemap",
    "social.follow": "Follow Me",
    "social.bluesky": "Bluesky",
    "social.github": "GitHub",
    "social.instagram": "Instagram",
    "social.rss": "RSS Feed",
    "footer.tagline": "a brew of awesomeness with a pinch of magic...",
    "footer.cookie":
      "This website uses cookies which are used to collect anonymous information to improve your browsing experience and for analytics and metrics.",
    "footer.copyright": `Copyright © 2018-${new Date().getFullYear()} • The Leaky Cauldron Blog • All Rights Reserved.`,
    "404.page-not-found": "Page Not Found",
    "tags.title": "Tags",
    "tags.subtitle": "Discover articles by title",
    "tags.description": SITE_DESCRIPTION,
    "contact.title": "Contact Us",
    "contact.subtitle": "Have a Question? Feel Free To Drop A Mail",
    "contact.description":
      "Contact Vaibhav Sharma if you have any queries or if you need some help with something related to a blog post, don't forget to include the blog post url in the mail. Please don't try to sell.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.name-required": "Name is Required!",
    "contact.email-required": "Email is Required!",
    "contact.message-required": "Message is Required!",
    "contact.name-too-short": "Too Short!",
    "contact.name-too-long": "Too Long!",
    "contact.invalid-email": "Enter a Valid Email!",
    "contact.message-too-short":
      "The message is too short! BTW you can drop a hi on Bluesky @waybove.bsky.social!",
    "contact.success-toast-title": "Your Message Was Sent Successfully!",
    "contact.success-toast-description": "I'll Get Back To You ASAP!",
    "contact.error-toast-title": "Error!",
    "contact.error-toast-description": "'Please Try Again!'",
    "contact.clear": "Clear",
    "contact.submitting": "Submitting...",
    "contact.submit": "Submit",
  },
} as const
