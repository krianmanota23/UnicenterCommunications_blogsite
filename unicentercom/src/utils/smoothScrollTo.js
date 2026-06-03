function getHeaderOffset() {
  const header = document.getElementById("site-header");
  if (header) {
    const height = header.offsetHeight;
    if (height > 0) return height;
  }
  const value = getComputedStyle(document.documentElement).getPropertyValue("--header-height");
  if (value) {
    const trimmed = value.trim();
    if (trimmed.endsWith("rem")) {
      const remVal = parseFloat(trimmed);
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      return remVal * rootFontSize;
    }
    if (trimmed.endsWith("px")) {
      return parseFloat(trimmed);
    }
    const val = parseFloat(trimmed);
    if (!isNaN(val)) return val;
  }
  return 72;
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/** Soft landing with a slight bounce at the end. */
function easeOutBack(t) {
  const c1 = 1.2;
  const c3 = c1 + 1;
  const eased = 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  return Math.min(1, Math.max(0, eased));
}

function blendEasing(t) {
  if (t < 0.82) return easeInOutCubic(t / 0.82) * 0.82;
  const tail = (t - 0.82) / 0.18;
  return 0.82 + easeOutBack(tail) * 0.18;
}

/**
 * Smoothly scroll to a page section (passes through content instead of jumping).
 */
export function smoothScrollToSection(sectionId, { updateHash = true } = {}) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const startY = window.scrollY;
  const targetY = section.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  const distance = targetY - startY;

  if (Math.abs(distance) < 2) {
    if (updateHash) window.history.replaceState(null, "", `#${sectionId}`);
    return;
  }

  const duration = Math.min(3800, Math.max(900, Math.abs(distance) * 0.7));
  const startTime = performance.now();

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = blendEasing(progress);
    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else if (updateHash) {
      window.history.replaceState(null, "", `#${sectionId}`);
    }
  };

  requestAnimationFrame(step);
}

export function handleSectionLinkClick(event, sectionId) {
  event.preventDefault();
  smoothScrollToSection(sectionId);
}
