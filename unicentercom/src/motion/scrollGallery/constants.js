export const GALLERY_DIMS = {
  desktop: { cardWidth: 420, gap: 32, compact: false },
  mobile: { cardWidth: 276, gap: 16, compact: true },
  smallPhone: { cardWidth: 258, gap: 14, compact: true },
};

export function getGalleryDims() {
  const w = window.innerWidth;
  if (w < 380) return GALLERY_DIMS.smallPhone;
  if (w < 768) return GALLERY_DIMS.mobile;
  return GALLERY_DIMS.desktop;
}

export function galleryWidth(itemCount, dims) {
  return itemCount * dims.cardWidth + Math.max(0, itemCount - 1) * dims.gap;
}

/** ~1s of vertical scroll at a natural pace before unlocking the next section. */
export function endDwellPx() {
  return Math.round(Math.min(480, Math.max(360, window.innerHeight * 0.42)));
}

export function stickyViewportHeight() {
  let header = 72;
  const headerEl = document.getElementById("site-header");
  if (headerEl) {
    const height = headerEl.offsetHeight;
    if (height > 0) header = height;
  } else {
    const value = getComputedStyle(document.documentElement).getPropertyValue("--header-height");
    if (value) {
      const trimmed = value.trim();
      if (trimmed.endsWith("rem")) {
        const remVal = parseFloat(trimmed);
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
        header = remVal * rootFontSize;
      } else if (trimmed.endsWith("px")) {
        header = parseFloat(trimmed);
      } else {
        const val = parseFloat(trimmed);
        if (!isNaN(val)) header = val;
      }
    }
  }

  let partners = 32;
  const partnersEl = document.getElementById("partners-bar");
  if (partnersEl) {
    const height = partnersEl.offsetHeight;
    if (height > 0) partners = height;
  } else {
    const value = getComputedStyle(document.documentElement).getPropertyValue("--partners-height");
    if (value) {
      const trimmed = value.trim();
      if (trimmed.endsWith("rem")) {
        const remVal = parseFloat(trimmed);
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
        partners = remVal * rootFontSize;
      } else if (trimmed.endsWith("px")) {
        partners = parseFloat(trimmed);
      } else {
        const val = parseFloat(trimmed);
        if (!isNaN(val)) partners = val;
      }
    }
  }

  return window.innerHeight - header - partners;
}
