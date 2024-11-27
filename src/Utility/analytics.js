export const gtag = (...args) => {
    if (typeof window.gtag === "function") {
      window.gtag(...args);
    }
  };
  