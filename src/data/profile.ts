// ============================================================
// PROFILE DATA — edit this file to update the entire site.
// Items marked [PLACEHOLDER] need real data from your resume.
// ============================================================

export const profile = {
  name: "Niket Dhale",
  kanji: "ニケット", // katakana accent in hero — remove if not wanted
  title: "Automotive Cybersecurity Engineer",
  tagline:
    "Securing vehicle networks for 5+ years — now building toward Software-Defined Vehicles and embedded platforms.",
  location: "Japan",
  email: "hello@example.com", // [PLACEHOLDER]
  github: "https://github.com/niketdhale",
  linkedin: "https://www.linkedin.com/in/niketdhale", // [PLACEHOLDER] verify handle
  resumeUrl: "/resume.pdf", // drop your v13 PDF into /public as resume.pdf
};

export const about = [
  `I work at the intersection of vehicle networks and security engineering — CAN, SecOC, intrusion detection, and the AUTOSAR stack that ties it together. Over five years in automotive cybersecurity, I've moved from analysing attacks on ECUs to building the systems that detect and report them.`,
  `Right now I'm deep in an open-source AUTOSAR security ecosystem: an IdsM event manager, a CAN intrusion-detection toolkit, and a SecOC verification layer, wired together into a full sensor-to-SOC reporting pipeline. It's both a portfolio and a thesis: vehicle security should be observable end-to-end.`,
  `Based in Japan, I'm steering my career toward Software-Defined Vehicle platforms and embedded software, where security is designed in rather than bolted on.`,
];

export type Project = {
  id: string; // hex "register id" shown as decoration
  name: string;
  repo: string;
  lang: string;
  summary: string;
  details: string[];
  tags: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "0x0100",
    name: "autosar-idsm-toolkit",
    repo: "https://github.com/niketdhale/autosar-idsm-toolkit",
    lang: "C++",
    summary:
      "AUTOSAR Intrusion Detection System Manager (IdsM) with a pluggable reporting pipeline from ECU to Security Operations Center.",
    details: [
      "IdsR_ReportType structs with namespaced event IDs (0x01xx CAN IDS, 0x02xx SecOC)",
      "IIdsM_ReportingChannel abstraction — IPC and SOME/IP (vsomeip) implementations",
      "IdsR forwarder with pluggable transports: MQTT, WebSocket, HTTP REST",
      "Custom serializer interface for user-defined context formats (0x8000+ range)",
    ],
    tags: ["AUTOSAR", "IdsM/IdsR", "SOME/IP", "MQTT", "C++"],
    featured: true,
  },
  {
    id: "0x0101",
    name: "can-ids-toolkit",
    repo: "https://github.com/niketdhale/can-ids-toolkit",
    lang: "C++",
    summary:
      "Intrusion detection for CAN bus traffic — anomaly detectors that feed qualified security events into the IdsM pipeline.",
    details: [
      "Rule- and heuristic-based detection over SocketCAN / vcan",
      "Module context structs (CanIds_ContextData) with serialize/deserialize",
      "Adapter into autosar-idsm-toolkit for end-to-end event flow",
    ],
    tags: ["CAN", "SocketCAN", "IDS", "C++"],
    featured: true,
  },
  {
    id: "0x0200",
    name: "secoc-can-toolkit",
    repo: "https://github.com/niketdhale/secoc-can-toolkit",
    lang: "C++",
    summary:
      "AUTOSAR SecOC implementation for CAN — message authentication, freshness management, and verification-failure reporting.",
    details: [
      "MAC generation/verification per AUTOSAR SecOC profiles",
      "Freshness value management",
      "Failure events reported as 0x02xx security events to IdsM",
    ],
    tags: ["SecOC", "AUTOSAR", "Crypto", "C++"],
    featured: true,
  },
  {
    id: "0x0300",
    name: "SOC dashboard pipeline",
    repo: "https://github.com/niketdhale/autosar-idsm-toolkit",
    lang: "Infra",
    summary:
      "Vehicle-to-cloud observability for security events: MQTT → Telegraf → InfluxDB → Grafana OSS, fully open-source licensed stack.",
    details: [
      "Telegraf ingestion shaped to the IdsR_ReportType schema",
      "Grafana dashboards for fleet-level event correlation",
      "All Apache-2.0/MIT components — safe for commercial/OEM contexts",
    ],
    tags: ["Grafana", "InfluxDB", "Telegraf", "MQTT"],
    featured: true,
  },
  {
    id: "0x0400",
    name: "Verso — resume builder",
    repo: "https://github.com/niketdhale/resume-builder",
    lang: "Vue 3",
    summary:
      "A full resume-building web app with a three-pane editor, live preview, PDF export, and a complete design system.",
    details: [
      "Vue 3 + Vite + Tailwind v4, deployed on Vercel with Bun-powered CI/CD",
      "Drag-and-drop sections/entries, 15 section types, localStorage + adapter-based storage layer",
      "GitHub Actions pipeline: lint → unit tests → Playwright E2E → deploy",
    ],
    tags: ["Vue 3", "Vite", "Tailwind", "CI/CD"],
    featured: true,
  },
];

// [PLACEHOLDER] — replace with real entries from v13 resume
export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Automotive Cybersecurity Engineer",
    company: "[Company — from resume]",
    period: "20XX — Present",
    location: "Japan",
    points: [
      //"[PLACEHOLDER — upload v13 resume to fill real bullet points]",
      //"[e.g. threat analysis & risk assessment per ISO/SAE 21434]",
      //"[e.g. SecOC / IDS integration on production ECU platforms]",
    ],
  },
];

export const skills = [
  {
    group: "Vehicle Security",
    reg: "0x01",
    items: [
      "SecOC",
      "IDS / IdsM / IdsR",
      "ISO/SAE 21434",
      "UDS Security (0x27/0x29)",
      "Secure OTA",
      "Threat Analysis (TARA)",
    ],
  },
  {
    group: "Protocols & Networks",
    reg: "0x02",
    items: [
      "CAN / CAN FD",
      "SOME/IP",
      "DoIP",
      "UDS (ISO 14229)",
      "gPTP / 802.1AS",
      "TSN",
      "MQTT",
    ],
  },
  {
    group: "Platforms & Middleware",
    reg: "0x03",
    items: [
      "AUTOSAR Classic",
      "AUTOSAR Adaptive",
      "FreeRTOS",
      "Embedded Linux",
      "vsomeip",
      "DDS",
    ],
  },
  {
    group: "Languages & Tooling",
    reg: "0x04",
    items: [
      "C / C++",
      "C#",
      "Python",
      "JavaScript / Vue 3",
      "CMake",
      "GoogleTest",
      "GitHub Actions",
      "Grafana / InfluxDB",
    ],
  },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Japanese", level: "Conversational" },
  // [PLACEHOLDER] add native language from resume
];
