import type { IconTypes } from "solid-icons";
import {
  SiBootstrap,
  SiFirebase,
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
} from "solid-icons/si";

export const TagIconMap = new Map<string, IconTypes>();
TagIconMap.set("TypeScript", SiTypescript);
TagIconMap.set("React", SiReact);
TagIconMap.set("Tailwind", SiTailwindcss);
TagIconMap.set("Vite", SiVite);
TagIconMap.set("Firebase", SiFirebase);
TagIconMap.set("JavaScript", SiJavascript);
TagIconMap.set("Webpack", SiWebpack);
TagIconMap.set("Bootstrap", SiBootstrap);
TagIconMap.set("Python", SiPython);
