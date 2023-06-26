import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'

export async function getSettings() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'settings' && _id == 'settings'][0]{
      _id,
      logoText,
      main_heading,
      hide_testimonials,
      recent_posts,
      enableTopbar,
      topbarMessage,
      enableTopbarLink,
      topbarLinkUrl,
      topbarLinkText,
      topbarLinkColor,
      navbarMenuItems[]-> {
        title,
        link
      },
      navbarButtonText,
      navbarButtonLink,
    }`
  )
}

export async function getLatestPosts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'post'] | order(_createdAt desc) {
      _id,
      title,
    }`,
  )
}

export async function getHomePage() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'homePage'][0]{
      _id,
      heading,
      tagline,
      metaTitle,
      metaDescription,
      metaKeywords,
      pageBuilder
    }`,
  )
}