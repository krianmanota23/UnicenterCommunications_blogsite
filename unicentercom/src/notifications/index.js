import { toast } from "sonner";

export { default as AppToaster } from "./AppToaster";

// ——— Message copy ———

export const PHONE_LENGTH = 11;

export const contactMessages = {
  digitsOnly: "Only numbers are allowed (0–9).",
  required: "Phone number is required.",
  length: `Phone number must be exactly ${PHONE_LENGTH} digits.`,
  valid: "Phone number looks good.",
  firstName: "Please enter your first name.",
  lastName: "Please enter your last name.",
  service: "Please choose a service.",
  gmailOpened: "Gmail opened! Review your message and hit Send.",
  outlookOpened: "Mail app opened! Review your message and hit Send.",
};

export const galleryScrollHints = {
  services:
    "Swipe left or right won't move the cards — scroll up or down to browse services.",
  projects:
    "Swipe left or right won't move the cards — scroll up or down to browse projects.",
};

// ——— Toast API (Sonner via AppToaster) ———

/** @typedef {"error" | "warning" | "success" | "info"} ToastVariant */

const TOAST_DURATION = {
  error: 2800,
  warning: 2800,
  success: 3000,
  info: 2500,
  default: 2800,
};

/**
 * Stacked Sonner toasts (up to 3 visible via AppToaster).
 * error = red, warning = yellow, success = green, info = blue.
 *
 * @param {string} message
 * @param {ToastVariant} [variant]
 */
export function showToast(message, variant = "warning") {
  const options = { duration: TOAST_DURATION[variant] ?? TOAST_DURATION.default };

  switch (variant) {
    case "error":
      toast.error(message, options);
      break;
    case "success":
      toast.success(message, options);
      break;
    case "warning":
      toast.warning(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    default:
      toast(message, options);
  }
}
