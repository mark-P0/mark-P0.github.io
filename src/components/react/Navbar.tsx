/** @jsxImportSource react */

import { useEffect, useState } from "react";
import { SECTION_RECORDS, type SectionRecord } from "../../section-records.ts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./shadcn/tooltip.tsx";
import { cn } from "./shadcn/utils.ts";

function useSectionObserver() {
  const [visibleSectionId, setVisibleSectionId] = useState<
    SectionRecord["id"] | null
  >(null);

  useEffect(() => {
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

        setVisibleSectionId(section.id);
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

  return {
    visibleSectionId,
  };
}

function SectionLink(props: {
  section: SectionRecord;
  visibleSectionId: SectionRecord["id"];
}) {
  const { section, visibleSectionId } = props;

  const isThisSectionVisible = visibleSectionId === section.id;
  const isLastSectionVisible = visibleSectionId === "talk-to-me";

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={`#${section.id}`}
            className={cn(
              "w-6 h-6 rounded-full",
              [
                "shadow-md shadow-white/50",
                isLastSectionVisible && "shadow-primary/50",
              ],
              [
                "transition",
                "bg-primary/50 hover:bg-primary",
                isLastSectionVisible && "bg-white/50 hover:bg-white",
                isThisSectionVisible && "bg-primary",
                isThisSectionVisible && isLastSectionVisible && "bg-white",
              ]
            )}
          >
            <span className="sr-only">{section.hint}</span>
          </a>
        </TooltipTrigger>

        <TooltipContent
          side="left"
          sideOffset={8}
          className={cn(
            "hidden md:block", // Tablets and larger
            "font-title font-bold text-sm",
            [
              "text-white bg-primary",
              isLastSectionVisible && "text-primary bg-white",
            ]
          )}
        >
          {section.title}
        </TooltipContent>

        <TooltipContent
          sideOffset={8}
          className={cn(
            "md:hidden", // Mobile
            "font-title font-bold",
            [
              "text-white bg-primary",
              isLastSectionVisible && "text-primary bg-white",
            ]
          )}
        >
          {section.title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function Navbar() {
  const { visibleSectionId } = useSectionObserver();

  if (visibleSectionId === null) {
    return null;
  }

  return (
    <nav
      className={cn(
        [
          "fixed z-10",
          "bottom-0 right-1/2 translate-x-1/2", // Mobile (Bottom-center)
          "md:bottom-auto md:right-0 md:translate-x-0", // Tablets and larger (Top-right)
        ],
        "flex md:grid gap-4 p-4"
      )}
    >
      {SECTION_RECORDS.map((section) => (
        <SectionLink
          key={section.id}
          section={section}
          visibleSectionId={visibleSectionId}
        />
      ))}
    </nav>
  );
}
