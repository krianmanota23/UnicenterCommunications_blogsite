/**
 * assetUrl.js — Future-proof asset URL helper
 *
 * Why this exists:
 * - On GitHub Pages (subdomain): BASE_URL = '/UnicenterCommunications_blogsite/'
 * - On local dev:                 BASE_URL = '/'
 * - On a custom domain (.com):    BASE_URL = '/' (just update vite.config base to '/')
 *
 * Usage:
 *   import { assetUrl } from '../utils/assetUrl'
 *   <img src={assetUrl('/logo.png')} />
 *   <img src={assetUrl('/services_images/CCTV.jpg')} />
 */

const BASE = import.meta.env.BASE_URL // Automatically set by Vite based on vite.config.js `base`

/**
 * Returns the correct full URL for a public folder asset,
 * regardless of whether the site is on GitHub Pages, a subdomain, or a custom domain.
 *
 * @param {string} path - Asset path starting with '/' (e.g. '/logo.png')
 * @returns {string} Full URL with correct base prefix
 */
export function assetUrl(path) {
  // Strip leading slash from path, then join with BASE_URL
  // BASE_URL always ends with '/', so this produces a clean URL every time
  return BASE + path.replace(/^\//, '')
}
