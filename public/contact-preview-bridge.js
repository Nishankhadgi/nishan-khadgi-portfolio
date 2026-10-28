(() => {
  const form = document.getElementById("previewContactForm");
  const status = document.getElementById("previewContactStatus");
  const setupNote = document.querySelector(".form-setup-note");
  if (setupNote) setupNote.textContent = "Messages are sent only when server-side contact delivery is configured.";

  const safeHref = (value) => {
    try {
      const url = new URL(value, window.location.origin);
      return url.protocol === "https:" || url.protocol === "http:" ? url.href : "";
    } catch {
      return "";
    }
  };

  const addContactLink = (container, label, value, href) => {
    const link = document.createElement("a");
    link.href = href;
    link.rel = "noopener noreferrer";
    if (href.startsWith("http")) link.target = "_blank";
    const caption = document.createElement("span");
    caption.textContent = label;
    const strong = document.createElement("strong");
    strong.textContent = value;
    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";
    link.append(caption, strong, arrow);
    container.append(link);
  };

  fetch("/api/site-config", { cache: "no-store" })
    .then((response) => (response.ok ? response.json() : null))
    .then((config) => {
      const container = document.querySelector(".contact-link-list");
      if (!container || !config) return;
      const entries = [];
      if (typeof config.email === "string" && config.email) entries.push(["EMAIL", config.email, "mailto:" + config.email]);
      if (typeof config.linkedin === "string" && safeHref(config.linkedin)) entries.push(["LINKEDIN", config.linkedin.replace(/^https?:\/\//, "").replace(/\/$/, ""), safeHref(config.linkedin)]);
      if (typeof config.github === "string" && safeHref(config.github)) entries.push(["GITHUB", config.github.replace(/^https?:\/\//, "").replace(/\/$/, ""), safeHref(config.github)]);
      if (entries.length) {
        container.replaceChildren();
        for (const entry of entries) addContactLink(container, ...entry);
      }

      const repoUrls = [config.itgcRepo, config.vendorRiskRepo, config.stockApiRepo];
      document.querySelectorAll(".project-entry").forEach((project, index) => {
        const placeholder = project.querySelector(".repo-pending");
        const href = safeHref(repoUrls[index] || "");
        if (!placeholder || !href) return;
        const link = document.createElement("a");
        link.className = "repo-pending";
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "⌘ View repository ↗";
        placeholder.replaceWith(link);
      });
    })
    .catch(() => {});

  if (!form || !status) return;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    status.classList.remove("preview-hidden");
    status.style.color = "#c7ff46";
    status.textContent = "Sending message…";
    const button = form.querySelector('button[type="submit"]');
    const originalLabel = button?.textContent || "Send message ↗";
    if (button) {
      button.disabled = true;
      button.textContent = "Sending…";
    }
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "The message could not be sent. Please try again.");
      status.style.color = "#c7ff46";
      status.textContent = result.message || "Message sent. Thanks for reaching out.";
      form.reset();
    } catch (error) {
      status.style.color = "#ff9a83";
      status.textContent = error instanceof Error ? error.message : "The message could not be sent. Please try again.";
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = originalLabel;
      }
    }
  }, true);
})();
