import plugin from "tailwindcss/plugin";

export const HeaderGridPlugin = plugin(({ addComponents }) => {
  addComponents({
    ".header-grid-template": {
      "grid-template-areas": `
        "title      "
        "portrait   "
        "description"
      `.trimEnd(),
      "@media screen(md)": {
        "grid-template-areas": `
          "title    .        .        .          "
          "portrait portrait portrait description"
          "portrait portrait portrait description"
          "portrait portrait portrait description"
          "portrait portrait portrait .          "
        `.trimEnd(),
      },
      "@media screen(lg)": {
        "grid-template-areas": `
          "portrait portrait portrait .          "
          "portrait portrait portrait .          "
          "portrait portrait portrait description"
          "portrait portrait portrait title      "
        `.trimEnd(),
      },
      ".header-grid-title": { "grid-area": "title" },
      ".header-grid-description": { "grid-area": "description" },
      ".header-grid-portrait": { "grid-area": "portrait" },
    },
  });
});
