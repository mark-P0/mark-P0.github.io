const root = document.documentElement;

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
    else if (target === projects && isIntersecting) isProjectsVisible = true;
    else if (target === contacts && isIntersecting) isContactsVisible = true;
  }

  if (isProfileVisible) root.setAttribute("data-section", "who-am-i");
  else if (isProjectsVisible) root.setAttribute("data-section", "what-i-do");
  else if (isContactsVisible) root.setAttribute("data-section", "talk-to-me");
}

const options: IntersectionObserverInit = {
  threshold: 0.5, // Mark element as visible when half of it is, well, visible
};
const observer = new IntersectionObserver(callback, options);

for (const element of [profile, projects, contacts]) {
  if (element === null) {
    console.warn(`An element to observe does not exist!`);
    continue;
  }
  observer.observe(element);
}
