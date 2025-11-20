import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gtag } from "../Utility/analytics";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

    // Track page views for specific pages
    if (pathname === "/" || pathname === "/resume" || pathname === "/services") {
      gtag("event", "page_view", {
        page_path: pathname,
      });
    }
  }, [pathname]);
  return null;
}

export default ScrollToTop;
