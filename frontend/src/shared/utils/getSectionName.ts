const SECTION_MAP: Record<string, string> = {
  "/": "Dashboard",
  "/dashboard": "Dashboard",
  "/all-decisions": "Decisions",
  "/my-decisions": "My Decisions",
  "/starred": "Starred",
  "/open-discussions": "Open Discussions",
  "/my-threads": "My Threads",
  "/teams": "Teams",
  "/categories": "Categories",
  "/settings": "Your Settings",
};

const formatSegment = (segment: string) => {
  // preserve IDs like DEC-2025-0042
  if (/^[A-Z]+-\d{4}-\d+$/i.test(segment)) {
    return segment.toUpperCase();
  }

  return segment.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const getSectionName = (path: string) => {
  if (SECTION_MAP[path]) {
    return SECTION_MAP[path];
  }

  const segments = path.split("/").filter(Boolean);

  if (segments.length === 0) {
    return "Dashboard";
  }

  const parts: string[] = [];

  let currentPath = "";

  for (const segment of segments) {
    currentPath += `/${segment}`;

    if (SECTION_MAP[currentPath]) {
      parts.push(SECTION_MAP[currentPath]);
    } else {
      parts.push(formatSegment(segment));
    }
  }

  return parts.join(" > ");
};
