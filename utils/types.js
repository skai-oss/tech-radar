export const PLATFORMS = "PLATFORMS";
export const LANGUAGES_FRAMEWORKS = "LANGUAGESFRAMEWORKS";
export const TECHNIQUES = "TECHNIQUES";
export const TOOLS = "TOOLS";

export const ADOPT = "ADOPT";
export const TRIAL = "TRIAL";
export const ASSESS = "ASSESS";
export const HOLD = "HOLD";

export const QUADRANTS = "QUADRANTS";
export const RINGS = "RINGS";

export const convert = (str = "") =>
  str.replaceAll(" ", "").replaceAll("&", "").toUpperCase();

export const RINGS_DISPLAY_NAMES = {
  [ADOPT]: "Adopt",
  [TRIAL]: "Trial",
  [ASSESS]: "Assess",
  [HOLD]: "Hold",
};

export const QUADRANTS_DISPLAY_NAMES = {
  [PLATFORMS]: "Platforms",
  [LANGUAGES_FRAMEWORKS]: "Languages & Frameworks",
  [TECHNIQUES]: "Techniques",
  [TOOLS]: "Tools",
};

export const FILTERS = {
  [QUADRANTS]: [PLATFORMS, LANGUAGES_FRAMEWORKS, TECHNIQUES, TOOLS],
  [RINGS]: [ADOPT, TRIAL, ASSESS, HOLD],
};

export const getSubHeaders = (type) =>
  type === RINGS
    ? Object.keys(QUADRANTS_DISPLAY_NAMES)
    : Object.keys(RINGS_DISPLAY_NAMES);

export const RING_TOOLTIPS = {
  [ADOPT]: `The following items are the Skai standard and are widely used in our production systems, accompanied by clear guidelines, best practices and optionally training and enablement.  
    Teams should adhere to these standards.`,
  [TRIAL]: `The following items are part of our tech roadmap. We are already experimenting with them and might have limited usage in our production systems.  
    According to risk assessment, teams are encouraged to participate in these trials.`,
  [ASSESS]: `The following items have a high potential for our tech roadmap. However, we haven’t tried them so far.  
    Teams are welcome to explore these items.`,
  [HOLD]:
    "The following items shouldn’t be used in new projects in Skai. If it already exists, keep it in minimal maintenance mode or deprecate it.",
};
