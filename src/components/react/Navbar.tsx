/** @jsxImportSource react */

import { useEffect } from "react";

function useSectionObserver() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("group/scrollspy");

    const profile = document.getElementById("who-am-i");
    const projects = document.getElementById("what-i-do");
    const contacts = document.getElementById("talk-to-me");

    function callback(
      entries: IntersectionObserverEntry[]
      // observer: IntersectionObserver
    ) {
      let isProfileVisible = false;
      let isProjectsVisible = false;
      let isContactsVisible = false;
      for (const entry of entries) {
        const { target, isIntersecting } = entry;
        if (target === profile && isIntersecting) isProfileVisible = true;
        else if (target === projects && isIntersecting)
          isProjectsVisible = true;
        else if (target === contacts && isIntersecting)
          isContactsVisible = true;
      }

      if (isProfileVisible) root.setAttribute("data-section", "who-am-i");
      else if (isProjectsVisible)
        root.setAttribute("data-section", "what-i-do");
      else if (isContactsVisible)
        root.setAttribute("data-section", "talk-to-me");
    }

    /** https://stackoverflow.com/a/69020644 */
    const options: IntersectionObserverInit = {
      rootMargin: "-50% 0% -50% 0%", // Makes the observer only look at the very center of the root for intersections
    };
    const observer = new IntersectionObserver(callback, options);

    for (const element of [profile, projects, contacts]) {
      if (element === null) {
        console.warn(`An element to observe does not exist!`);
        continue;
      }
      observer.observe(element);
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
  const anchorProfile = [
    anchor,
    ...[
      "bg-primary/50",
      "hover:bg-primary",
      "group-data-[section=who-am-i]/scrollspy:bg-primary",
      "group-data-[section=talk-to-me]/scrollspy:bg-white/50",
      "group-data-[section=talk-to-me]/scrollspy:hover:bg-white",
    ],
  ].join(" ");
  const anchorProjects = [
    anchor,
    ...[
      "bg-primary/50",
      "hover:bg-primary",
      "group-data-[section=what-i-do]/scrollspy:bg-primary",
      "group-data-[section=talk-to-me]/scrollspy:bg-white/50",
      "group-data-[section=talk-to-me]/scrollspy:hover:bg-white",
    ],
  ].join(" ");
  const anchorContacts = [
    anchor,
    ...[
      "bg-primary/50",
      "hover:bg-primary",
      // "group-data-[section=talk-to-me]/scrollspy:bg-primary", // Unnecessary as this condition has a definite color
      "group-data-[section=talk-to-me]/scrollspy:bg-white",
      "group-data-[section=talk-to-me]/scrollspy:hover:bg-white", // Should be redundant...
    ],
  ].join(" ");

  return (
    <nav className={`z-10 ${navbarPos} flex md:grid gap-4 p-4`}>
      <a href="#who-am-i" className={`${anchorProfile}`}>
        <span className="sr-only">Jump to profile</span>
      </a>
      <a href="#what-i-do" className={`${anchorProjects}`}>
        <span className="sr-only">Jump to projects</span>
      </a>
      <a href="#talk-to-me" className={`${anchorContacts}`}>
        <span className="sr-only">Jump to contacts</span>
      </a>
    </nav>
  );
}
