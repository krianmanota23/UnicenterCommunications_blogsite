import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { phoneInputHighlight } from "../motion/formHighlight";
import { contactMessages, PHONE_LENGTH, showToast } from "../notifications";

const SERVICES = [
  "CCTV & Security Installations",
  "Network Infrastructure Design",
  "LGU Solutions",
  "VoIP & Communications",
  "IT Support & Maintenance",
  "ICT Peripherals & Equipment",
  "Other Services",
];

export default function Contact() {
  const [firstName, setFirstName] = useState(() => sessionStorage.getItem("contact_firstName") || "");
  const [lastName, setLastName] = useState(() => sessionStorage.getItem("contact_lastName") || "");
  const [phone, setPhone] = useState(() => sessionStorage.getItem("contact_phone") || "");
  const [selectedServices, setSelectedServices] = useState(() => {
    const saved = sessionStorage.getItem("contact_services");
    return saved ? JSON.parse(saved) : [];
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("contact_firstName", firstName);
  }, [firstName]);

  useEffect(() => {
    sessionStorage.setItem("contact_lastName", lastName);
  }, [lastName]);

  useEffect(() => {
    sessionStorage.setItem("contact_phone", phone);
  }, [phone]);

  useEffect(() => {
    sessionStorage.setItem("contact_services", JSON.stringify(selectedServices));
  }, [selectedServices]);

  const getDropdownLabel = () => {
    if (selectedServices.length === 0) return "Select services...";
    if (selectedServices.length === SERVICES.length) return "All Services Selected";
    if (selectedServices.length === 1) return selectedServices[0];
    if (selectedServices.length === 2) return `${selectedServices[0]}, ${selectedServices[1]}`;
    return `${selectedServices.length} services selected`;
  };

  const handleToggleService = (opt) => {
    setSelectedServices((prev) =>
      prev.includes(opt)
        ? prev.filter((item) => item !== opt)
        : [...prev, opt]
    );
  };

  const toggleSelectAll = () => {
    if (selectedServices.length === SERVICES.length) {
      setSelectedServices([]);
    } else {
      setSelectedServices([...SERVICES]);
    }
  };
  const [showModal, setShowModal] = useState(false);
  const [gmailLink, setGmailLink] = useState("");
  const [outlookLink, setOutlookLink] = useState("");
  const [phoneHighlight, setPhoneHighlight] = useState("default");
  const lastPhoneToastAtRef = useRef(0);
  const dropdownButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setTimeout(() => {
          const button = dropdownButtonRef.current;
          if (!button) return;

          const partnersBar = document.getElementById("partners-bar");
          const partnersHeight = partnersBar ? partnersBar.offsetHeight : 32;
          const viewportHeight = window.innerHeight - partnersHeight - 12;

          const menu = document.getElementById("services-dropdown-menu");
          const menuBottom = menu
            ? menu.getBoundingClientRect().bottom
            : button.getBoundingClientRect().bottom + 270;

          if (menuBottom > viewportHeight) {
            const scrollAmount = menuBottom - viewportHeight;
            window.scrollBy({
              top: scrollAmount,
              behavior: "smooth",
            });
          }
        }, 120);
      }
    }
  }, [isOpen]);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setSelectedServices([]);
    setPhoneHighlight("default");
    setIsOpen(false);
  };

  const toastPhone = (message, variant) => {
    const now = Date.now();
    if (now - lastPhoneToastAtRef.current < 180) return;
    lastPhoneToastAtRef.current = now;

    showToast(message, variant);
    setPhoneHighlight(variant);

    if (variant === "success") {
      setTimeout(() => setPhoneHighlight("default"), 2500);
    }
  };

  const buildLinksAndOpenModal = () => {
    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
    const servicesText = selectedServices.join(", ");
    const subject = encodeURIComponent(`Project Inquiry — ${servicesText} | ${fullName}`);
    const body = encodeURIComponent(
      "Hi Unicenter Communications,\n\n" +
        "Name: " +
        fullName +
        "\n" +
        "Phone: " +
        phone +
        "\n" +
        "Services Needed:\n" +
        selectedServices.map((s) => `- ${s}`).join("\n") +
        "\n\n" +
        "Message:\n" +
        "" +
        "\n\n" +
        "---\nSent via unicentercom.com contact form"
    );

    // Send to both email addresses simultaneously
    const recipients = "joey@unicentercom.com,unicenter.communications1999@gmail.com";

    setGmailLink(
      "https://mail.google.com/mail/?view=cm&to=" +
        encodeURIComponent(recipients) +
        "&su=" +
        subject +
        "&body=" +
        body
    );
    setOutlookLink(
      "mailto:" + recipients + "?subject=" + subject + "&body=" + body
    );
    setShowModal(true);
  };

  const handlePhoneChange = (event) => {
    const raw = event.target.value;
    let digits = raw.replace(/\D/g, "");

    // Automatically convert +63 or 63 prefix for 12-digit PH numbers to local 0 prefix
    if (digits.startsWith("63") && digits.length === 12) {
      digits = "0" + digits.slice(2);
    }

    // Only show error if there are actual invalid characters (like letters), 
    // ignoring standard phone format symbols (+, -, spaces, parentheses)
    const hasInvalidChars = !/^[0-9+\-\s()]*$/.test(raw);
    if (hasInvalidChars) {
      toastPhone(contactMessages.digitsOnly, "error");
    }

    if (digits.length > PHONE_LENGTH) {
      digits = digits.slice(0, PHONE_LENGTH);
      toastPhone(contactMessages.length, "warning");
    } else if (digits.length === PHONE_LENGTH) {
      toastPhone(contactMessages.valid, "success");
    } else if (digits.length > 0 && !hasInvalidChars) {
      setPhoneHighlight("default");
    }

    setPhone(digits);
  };

  const handlePhoneKeyDown = (event) => {
    // Allow keyboard shortcuts (Ctrl+C, Ctrl+V, Ctrl+A, etc.)
    if (event.ctrlKey || event.metaKey || event.altKey) return;

    // Only validate printable keystrokes (length === 1)
    if (event.key && event.key.length === 1) {
      if (!/^\d$/.test(event.key)) {
        event.preventDefault();
        toastPhone(contactMessages.digitsOnly, "error");
      } else if (phone.length >= PHONE_LENGTH) {
        event.preventDefault();
        toastPhone(contactMessages.length, "warning");
      }
    }
  };

  const handleSendClick = (event) => {
    event.preventDefault();

    if (!firstName.trim()) {
      showToast(contactMessages.firstName, "warning");
      return;
    }

    if (!lastName.trim()) {
      showToast(contactMessages.lastName, "warning");
      return;
    }

    if (!phone.trim()) {
      showToast(contactMessages.required, "warning");
      setPhoneHighlight("warning");
      return;
    }

    if (phone.length !== PHONE_LENGTH) {
      showToast(contactMessages.length, "warning");
      setPhoneHighlight("warning");
      return;
    }

    if (selectedServices.length === 0) {
      showToast(contactMessages.service, "warning");
      return;
    }

    buildLinksAndOpenModal();
  };

  const handleOpenGmail = () => {
    setShowModal(false);
    showToast(contactMessages.gmailOpened, "success");
  };

  const handleOpenOutlook = () => {
    setShowModal(false);
    showToast(contactMessages.outlookOpened, "success");
  };

  const closeModal = () => setShowModal(false);

  return (
    <section id="contact" className="w-full bg-[#f8fafc] py-16 snap-start">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            EMAIL US
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s talk about your project
          </h2>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-10 shadow-lg [box-shadow:inset_0_1px_0_rgba(255,255,255,0.65),0_12px_30px_rgba(15,23,42,0.08)]">
            <form className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label htmlFor="firstName" className="block">
                  <span className="text-sm font-medium text-slate-700">
                    First Name <span className="text-red-500">*</span>
                  </span>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
                <label htmlFor="lastName" className="block">
                  <span className="text-sm font-medium text-slate-700">
                    Last Name <span className="text-red-500">*</span>
                  </span>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label htmlFor="phone" className="block">
                  <span className="text-sm font-medium text-slate-700">
                    Phone <span className="text-red-500">*</span>
                  </span>
                  <motion.input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="numeric"
                    pattern="[0-9]{11}"
                    maxLength={PHONE_LENGTH}
                    placeholder="+63 XXX XXX XXXX"
                    value={phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    required
                    aria-required="true"
                    aria-invalid={phoneHighlight === "error" ? true : undefined}
                    animate={
                      phoneInputHighlight[phoneHighlight] ?? phoneInputHighlight.default
                    }
                    transition={{ duration: 0.2 }}
                    className="mt-2 w-full rounded-lg border bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>

                <div className="relative block">
                  <span className="text-sm font-medium text-slate-700">
                    Services <span className="text-red-500">*</span>
                  </span>
                  <button
                    ref={dropdownButtonRef}
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="mt-2 w-full flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-left text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition hover:border-gray-300"
                  >
                    <span className={selectedServices.length > 0 ? "text-slate-900" : "text-slate-400"}>
                      {getDropdownLabel()}
                    </span>
                    <svg
                      className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <>
                        {/* Invisible click-away overlay to close the dropdown */}
                        <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                        
                        <motion.div
                          id="services-dropdown-menu"
                          key="services-dropdown-menu"
                          initial={{ opacity: 0, y: -8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute left-0 right-0 z-20 mt-1.5 h-auto overflow-visible rounded-xl border border-slate-100 bg-white p-1.5 shadow-xl [box-shadow:0_10px_25px_-5px_rgba(0,0,0,0.05),0_8px_16px_-6px_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.02)] focus:outline-none"
                        >
                          <button
                            type="button"
                            onClick={toggleSelectAll}
                            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-left transition cursor-pointer ${
                              selectedServices.length === SERVICES.length
                                ? "bg-blue-50 text-blue-700 font-semibold"
                                : "text-slate-700 hover:bg-amber-50 hover:text-[#f59e0b]"
                            }`}
                          >
                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                              selectedServices.length === SERVICES.length
                                ? "bg-blue-600 border-blue-600"
                                : selectedServices.length > 0
                                ? "bg-blue-100 border-blue-400"
                                : "border-gray-300 bg-white"
                            }`}>
                              {selectedServices.length === SERVICES.length ? (
                                <svg
                                  className="h-2.5 w-2.5 text-white"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              ) : selectedServices.length > 0 ? (
                                <div className="h-0.5 w-2 bg-blue-600 rounded" />
                              ) : null}
                            </div>
                            <span>Select All</span>
                          </button>

                          <div className="my-1 border-t border-slate-100" />

                          {SERVICES.map((opt) => {
                            const isSelected = selectedServices.includes(opt);
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => handleToggleService(opt)}
                                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-left transition cursor-pointer ${
                                  isSelected
                                    ? "bg-blue-50 text-blue-700 font-semibold"
                                    : "text-slate-700 hover:bg-amber-50 hover:text-[#f59e0b]"
                                }`}
                              >
                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                                  isSelected ? "bg-blue-600 border-blue-600" : "border-gray-300 bg-white"
                                }`}>
                                  {isSelected && (
                                    <svg
                                      className="h-2.5 w-2.5 text-white"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                    >
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  )}
                                </div>
                                <span>{opt}</span>
                              </button>
                            );
                          })}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSendClick}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4z" />
                </svg>
                Send Message
              </button>

              <p className="text-xs text-slate-500 text-center leading-relaxed">
                Fill in the required fields to choose between Gmail or Outlook to send your pre-filled inquiry.
              </p>

              {(firstName || lastName || phone || selectedServices.length > 0) && (
                <div className="text-center pt-1.5">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs text-slate-400 hover:text-red-500 font-medium transition cursor-pointer underline underline-offset-2"
                  >
                    Clear form
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-light cursor-pointer"
              aria-label="Close"
            >
              ×
            </button>

            <svg
              className="w-12 h-12 mx-auto mb-4 mt-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2563eb"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4z" />
            </svg>

            <h3 className="text-center font-bold text-2xl text-gray-900 mb-1">
              Send Your Message Via
            </h3>
            <p className="text-sm text-gray-500 text-center mb-6">
              Your message will be pre-filled — just pick your email provider and hit
              Send.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={gmailLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleOpenGmail}
                className="w-full border border-gray-200 rounded-xl py-3 px-4 bg-white hover:bg-gray-50 flex items-center justify-center gap-3 transition duration-150 no-underline"
              >
                <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.33 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.67 14.62 48 24 48z"
                  />
                </svg>
                <span className="font-medium text-gray-700 text-sm">Continue with Gmail</span>
              </a>

              <a
                href={outlookLink || "#"}
                rel="noopener noreferrer"
                onClick={handleOpenOutlook}
                className="w-full border border-gray-200 rounded-xl py-3 px-4 bg-white hover:bg-gray-50 flex items-center justify-center gap-3 transition duration-150 no-underline"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0078d4"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="font-medium text-gray-700 text-sm">
                  Continue with Outlook / Mail
                </span>
              </a>

              <button
                type="button"
                onClick={closeModal}
                className="w-full py-2 text-sm text-gray-400 hover:text-gray-600 text-center cursor-pointer"
              >
                Cancel
              </button>
            </div>

            <div className="border-t border-gray-100 mt-4 mb-3" />

            <p className="text-xs text-gray-400 text-center">
              Your email app will open with your message ready to send — no account
              needed on our end.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
