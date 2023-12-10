import plugin from "tailwindcss/plugin";

export const ProfileGridPlugin = plugin(({ addComponents }) => {
  addComponents({
    ".profile-grid-template": {
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

      ".profile-grid-title": { "grid-area": "title" },
      ".profile-grid-description": { "grid-area": "description" },
      ".profile-grid-portrait": { "grid-area": "portrait" },
    },
  });
});
