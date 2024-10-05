/** @jsxImportSource react */

import { useEffect } from "react";
import { SECTION_RECORDS, type SectionRecord } from "../../section-records.ts";

function useSectionObserver() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("group/scrollspy");

    const sectionElementRecords = SECTION_RECORDS.map(({ id }) => ({
      id,
      element: document.getElementById(id),
      isVisible: false,
    }));

    const observerCallback: IntersectionObserverCallback = (entries) => {
      /** On every callback run, assume none of the sections are visible */
      for (const section of sectionElementRecords) {
        section.isVisible = false;
      }

      for (const entry of entries) {
        const { target, isIntersecting } = entry;
        if (!isIntersecting) continue;

        for (const section of sectionElementRecords) {
          if (target !== section.element) continue;

          section.isVisible = true;
          break;
        }
      }

      for (const section of sectionElementRecords) {
        if (!section.isVisible) continue;

        root.setAttribute("data-section", section.id);
        break;
      }
    };

    /** https://stackoverflow.com/a/69020644 */
    const observerOptions: IntersectionObserverInit = {
      /** Makes the observer only look at the very center of the root for intersections */
      rootMargin: "-50% 0% -50% 0%",
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    for (const section of sectionElementRecords) {
      if (section.element === null) {
        console.warn(`An element to observe does not exist!`);
        continue;
      }

      observer.observe(section.element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
}

export function Navbar() {
  useSectionObserver();

  const navbarPos = [
    "fixed",
    ...["bottom-0", "right-1/2", "translate-x-1/2"], // Small (default): Bottom Center
    ...["md:bottom-auto", "md:right-0", "md:translate-x-0"], // Medium above: Top Right
  ].join(" ");

  const anchor = [
    "w-6 h-6 rounded-full",
    ...[
      "shadow-md",
      "shadow-white/50",
      "group-data-[section=talk-to-me]/scrollspy:shadow-primary/50",
    ],
    "transition",
  ].join(" ");

  const sectionClassesRecord: Record<SectionRecord["id"], string> = {
    "who-am-i": [
      anchor,
      ...[
        "bg-primary/50",
        "hover:bg-primary",
        "group-data-[section=who-am-i]/scrollspy:bg-primary",
        "group-data-[section=talk-to-me]/scrollspy:bg-white/50",
        "group-data-[section=talk-to-me]/scrollspy:hover:bg-white",
      ],
    ].join(" "),
    "what-i-do": [
      anchor,
      ...[
        "bg-primary/50",
        "hover:bg-primary",
        "group-data-[section=what-i-do]/scrollspy:bg-primary",
        "group-data-[section=talk-to-me]/scrollspy:bg-white/50",
        "group-data-[section=talk-to-me]/scrollspy:hover:bg-white",
      ],
    ].join(" "),
    "talk-to-me": [
      anchor,
      ...[
        "bg-primary/50",
        "hover:bg-primary",
        // "group-data-[section=talk-to-me]/scrollspy:bg-primary", // Unnecessary as this condition has a definite color
        "group-data-[section=talk-to-me]/scrollspy:bg-white",
        "group-data-[section=talk-to-me]/scrollspy:hover:bg-white", // Should be redundant...
      ],
    ].join(" "),
  };

  return (
    <nav className={`z-10 ${navbarPos} flex md:grid gap-4 p-4`}>
      {SECTION_RECORDS.map((section) => (
        <a href={`#${section.id}`} className={sectionClassesRecord[section.id]}>
          <span className="sr-only">{section.hint}</span>
        </a>
      ))}
    </nav>
  );
}
