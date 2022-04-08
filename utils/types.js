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
  [ASSESS]: "Assess",
  [HOLD]: "Hold",
  [TRIAL]: "Trial",
};

export const QUADRANTS_DISPLAY_NAMES = {
  [PLATFORMS]: "Platforms",
  [LANGUAGES_FRAMEWORKS]: "Languages & Frameworks",
  [TECHNIQUES]: "Techniques",
  [TOOLS]: "Tools",
};

export const FILTERS = {
  [QUADRANTS]: [PLATFORMS, LANGUAGES_FRAMEWORKS, TECHNIQUES, TOOLS],
  [RINGS]: [ADOPT, ASSESS, HOLD, TRIAL],
};
