"use client";
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Facebook, Linkedin, BriefcaseBusiness, Home } from "lucide-react";

/**
 * Configuration
 * Using hosted logo from CloudFront.
 */
const LOGO_URL = "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/35b6fce187af7d6afd064444141acca1";

export default function AllSearchLinkInBio() {
  const [logoFailed, setLogoFailed] = useState(false);

  const links = useMemo(
    () => [
      { label: "Website", href: "https://www.allsearchinc.com/sales-recruiting/?gad_source=1&gad_campaignid=16395293444&gbraid=0AAAAADeRiCOpfPYAwUz7ZrAtAXBwRgcVP&gclid=CjwKCAiA_dDIBhB6EiwAvzc1cDamGc6giIVdrzBRoAM4onYnsQWyId81TkZ1qB7_aPyCu9AeDW_zXhoClRcQAvD_BwE", icon: Globe },
      { label: "Real Estate", href: "https://realestate.allsearchinc.com/", icon: Home },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/allsearch-professional-staffing-inc/", icon: Linkedin },
      { label: "Indeed", href: "https://www.indeed.com/cmp/Allsearch-Recruiting", icon: BriefcaseBusiness },
      { label: "ZipRecruiter", href: "https://www.ziprecruiter.com/co/allsearch-recruiting/Jobs", icon: BriefcaseBusiness },
      { label: "Facebook", href: "https://www.facebook.com/allsearch/", icon: Facebook },
    ],
    []
  );

  // --- Dev validation (lightweight tests; non-breaking) -----------------
  useEffect(() => {
    try {
      const expectedOrder = ["Website", "Real Estate", "LinkedIn", "Indeed", "ZipRecruiter", "Facebook"];
      console.assert(links.map((l) => l.label).join("|") === expectedOrder.join("|"), "Link order mismatch");
      console.assert(links.length === 6, "There should be exactly six links");
      console.assert(new Set(links.map((l) => l.label)).size === links.length, "Duplicate link labels found");
      console.assert(links.every((l) => /^https?:\/\//.test(l.href)), "All hrefs must be absolute URLs");
      const domainOf = (u: string) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return ""; } };
      console.assert(domainOf(links[2].href) === "linkedin.com", "LinkedIn domain should be linkedin.com");
      console.assert(/allsearch/i.test(links[0].href), "Website URL should contain 'allsearch'");
    } catch (_) {}
  }, [links]);
  // ----------------------------------------------------------------------

  const brand = {
    green: "#14532d", // deeper forest green
    greenSoft: "rgba(20,83,45,0.12)",
    greenBorder: "rgba(20,83,45,0.4)",
  } as const;

  const displayHref = (url: string) => {
    try {
      const u = new URL(url);
      return u.hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 text-black flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl shadow-2xl border p-8 bg-gray-100/90 backdrop-blur"
          style={{ borderColor: brand.greenBorder, boxShadow: "0 24px 80px rgba(0,0,0,.3)" }}
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4">
            <div
              className="h-24 w-24 rounded-3xl overflow-hidden border grid place-items-center"
              style={{ borderColor: brand.greenBorder, background: brand.greenSoft }}
            >
              {!logoFailed ? (
                <img
                  src={LOGO_URL}
                  alt="AllSearch Recruiting logo"
                  width={96}
                  height={96}
                  className="object-contain"
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <span className="text-2xl font-bold tracking-wide" style={{ color: brand.green }}>
                  AR
                </span>
              )}
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight" style={{ color: brand.green }}>
                AllSearch Recruiting
              </h1>
              <p className="text-gray-700 mt-1">Where Talent Meets Opportunity.</p>
            </div>
          </div>

          {/* Links */}
          <ul className="mt-8 space-y-3">
            {links.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <motion.a
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} — ${href}`}
                  className="group flex items-center gap-3 w-full rounded-2xl px-5 py-4 border transition-all duration-200 bg-gray-50"
                  style={{ borderColor: brand.greenBorder }}
                >
                  <div
                    className="h-10 w-10 grid place-items-center rounded-xl border"
                    style={{ borderColor: brand.greenBorder, background: "rgba(255,255,255,.7)", color: brand.green }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold" style={{ color: brand.green }}>
                        {label}
                      </span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full border"
                        style={{ borderColor: brand.greenBorder, color: brand.green, background: brand.greenSoft }}
                      >
                        {displayHref(href)}
                      </span>
                    </div>
                    <span className="block text-xs text-gray-600 truncate group-hover:text-gray-800">{href}</span>
                  </div>

                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-5 w-5 opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ color: brand.green }}
                  >
                    <path
                      fill="currentColor"
                      d="M13 5H5v14h14v-8h-2v6H7V7h6V5Zm6-2h-6v2h3.586L9 12.586 10.414 14 18 6.414V10h2V3Z"
                    />
                  </svg>
                </motion.a>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center text-xs text-gray-700">© {new Date().getFullYear()} AllSearch Recruiting</div>
        </motion.div>
      </div>
    </div>
  );
}
