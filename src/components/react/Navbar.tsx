/** @jsxImportSource react */

import { ReusableTooltip } from "./ReusableTooltip.tsx";

export function Navbar() {
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

  const data = [
    {
      title: "Who Am I",
      value: "who-am-i",
      hint: "Jump to profile",
    },
    {
      title: "What I Do",
      value: "what-i-do",
      hint: "Jump to projects",
    },
    {
      title: "Talk To Me",
      value: "talk-to-me",
      hint: "Jump to contacts",
    },
  ];

  return (
    <nav className={`z-10 ${navbarPos} flex md:grid gap-4 p-4`}>
      {data.map(({ title, value, hint }, idx) => (
        <a href={`#${value}`} className={`${anchorProfile} relative group`}>
          <span className="absolute right-full origin-right transition scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:-translate-x-3">
            <p className="whitespace-nowrap">{title}</p>
          </span>
        </a>

        //         <label key={idx} className="relative flex group">
        //           <a href={`#${value}`} className={`${anchorProfile}`}>
        //             <span className="sr-only">{hint}</span>
        //           </a>
        //
        //           <div className="absolute right-full origin-right transition scale-0 group-hover:scale-100 flex flex-row-reverse gap-3">
        //             <div className="size-3 bg-red-500"></div>
        //
        //             <p className="whitespace-nowrap">{title}</p>
        //           </div>
        //         </label>

        // <ReusableTooltip
        //   key={idx}
        //   trigger={
        //     <a href={`#${value}`} className={`${anchorProfile}`}>
        //       <span className="sr-only">{hint}</span>
        //     </a>
        //   }
        //   content={<p className="bg-red-500 text-white">{title}</p>}
        //   contentSide="left"
        // />
      ))}
    </nav>
  );

  // return (
  //   <nav className={`z-10 ${navbarPos} flex md:grid gap-4 p-4`}>
  //     <ReusableTooltip
  //       trigger={
  //         <a href="#who-am-i" className={`${anchorProfile}`}>
  //           <span className="sr-only">Jump to profile</span>
  //         </a>
  //       }
  //       content={<p>Hello, world!</p>}
  //     />
  //     <a href="#what-i-do" className={`${anchorProjects}`}>
  //       <span className="sr-only">Jump to projects</span>
  //     </a>
  //     <a href="#talk-to-me" className={`${anchorContacts}`}>
  //       <span className="sr-only">Jump to contacts</span>
  //     </a>
  //   </nav>
  // );
}
