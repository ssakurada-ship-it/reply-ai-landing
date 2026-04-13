/**
 * Simple click analytics tracker.
 * Dispatches custom DOM events that can be picked up by any analytics provider.
 * Usage: add data-track="event-name" to any element, or call trackEvent() directly.
 */

export function trackEvent(eventName: string, properties?: Record<string, string>) {
  try {
    if (typeof window === "undefined") return;
    const event = new CustomEvent("replyai:track", {
      detail: { event: eventName, ...properties },
      bubbles: true,
    });
    window.dispatchEvent(event);

    // Also log to console in dev for easy debugging
    if (process.env.NODE_ENV === "development") {
      console.log("[ReplyAI Analytics]", eventName, properties);
    }
  } catch (error) {
    console.error("[ReplyAI Analytics] trackEvent failed:", error);
  }
}

/**
 * Attach data-track listeners globally (call once in layout).
 */
export function initAnalytics() {
  if (typeof window === "undefined") return;

  document.addEventListener("click", (e: MouseEvent) => {
    const target = (e.target as HTMLElement)?.closest("[data-track]");
    if (!target) return;
    const eventName = (target as HTMLElement).dataset.track;
    if (eventName) {
      trackEvent(eventName);
    }
  });
}
