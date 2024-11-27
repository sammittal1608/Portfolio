export const gtag = (...args) => {
    if (typeof window.gtag === "function") {
      console.log("Tracking event:", ...args); // Debug log to verify events
      window.gtag(...args);
    } else {
      console.warn("gtag is not defined. Event not tracked:", ...args); // Warn if gtag is missing
    }
  };
  