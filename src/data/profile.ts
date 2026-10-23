// ============================================================
// PROFILE DATA — edit this file to update the entire site.
// ============================================================

export const profile = {
  name: "Niket Dhale",
  kanji: "ニケット",
  title: "Automotive Cybersecurity & Embedded Software Engineer",
  tagline:
    "5+ years securing vehicle networks at a major Japanese OEM — AUTOSAR IDS/SecOC, WP.29 certification, and full-stack ECU security from CAN to SOC.",
  location: "Tokyo, Japan",
  email: "niketdhale27@gmail.com",
  github: "https://github.com/niketdhale",
  linkedin: "https://www.linkedin.com/in/niketdhale",
  resumeUrl: "/portfolio/resume.pdf",
};

export const about = [
  "Likes to: build automotive security tooling (IDS, SecOC, UDS/DoIP) from the spec up",
  "Likes to: simulate ECUs and test them on the bench",
  "Likes to: turn security events into dashboards",
  "Likes to: explore Rust, Vue and Software-Defined Vehicle ideas",
  "Likes to: study Japanese in Tokyo",
];

export type Project = {
  id: string;
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
      "AUTOSAR IdsM implementation with async event aggregation, SOC violation forwarding via HTTP, and a 39-test GoogleTest suite referencing SWS_IdM spec requirements.",
    details: [
      "IdsR_ReportType structs with namespaced event IDs (0x01xx CAN IDS, 0x02xx SecOC)",
      "IIdsM_ReportingChannel abstraction — IPC and SOME/IP (vsomeip) implementations",
      "IdsR forwarder with pluggable transports: MQTT, WebSocket, HTTP REST",
      "39 GoogleTest cases mapped directly to AUTOSAR SWS_IdM requirements",
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
      "Lightweight, zero-dependency C++17 CAN intrusion detection library and CLI: default-deny ID whitelist, Classic/CAN FD DLC validation, and frequency-based flood detection with thread-safe rules.",
    details: [
      "Whitelist enforcement + DLC validation + message frequency monitoring",
      "Aligned to AUTOSAR IDS Protocol Specification",
      "Designed for HIL testing and bench validation environments",
      "Feeds qualified security events into the IdsM pipeline",
    ],
    tags: ["CAN", "SocketCAN", "IDS", "AUTOSAR", "C++"],
    featured: true,
  },
  {
    id: "0x0200",
    name: "secoc-can-toolkit",
    repo: "https://github.com/niketdhale/secoc-can-toolkit",
    lang: "C++",
    summary:
      "AUTOSAR SecOC simulator in C++17 over Linux SocketCAN: AES-128-CMAC, counter/timestamp Freshness Value Manager, configurable MAC/FV truncation, anti-replay window, and an AUTOSAR-style C API.",
    details: [
      "AES-128-CMAC MAC generation/verification via OpenSSL",
      "Freshness value management per AUTOSAR SecOC profiles",
      "AUTOSAR C API surface: SecOc_Init, SecOc_Transmit",
      "Runs over Linux SocketCAN / vcan",
    ],
    tags: ["SecOC", "AUTOSAR", "OpenSSL", "SocketCAN", "C++"],
    featured: true,
  },
  {
    id: "0x0300",
    name: "DoIP_ECU_Simulator",
    repo: "https://github.com/niketdhale/DOIP_ECU_Simulator",
    lang: "C",
    summary:
      "ISO 13400-2 DoIP stack in C: an ECU simulator plus a reusable client library (libdoip) with UDS forwarding, TLS/DTLS, ISO-TP, IPv6 and an async API.",
    details: [
      "Full ISO 13400-2 DoIP protocol implementation",
      "UDS service handling per ISO 14229",
      "TLS extension for secure diagnostic sessions",
      "Unit and integration test suite included",
    ],
    tags: ["DoIP", "UDS", "ISO 13400", "TLS", "C"],
    featured: true,
  },
  {
    id: "0x0400",
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
    id: "0x0500",
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
  {
    id: "0x0600",
    name: "sovd-toolkit",
    repo: "https://github.com/niketdhale/sovd-toolkit",
    lang: "C++",
    summary:
      "A production-shaped SOVD (ASAM/ISO 17978-3) server and client stack for Linux — real UDS/DoIP translation behind a REST/HTTP+JSON diagnostic API, a two-tier gateway/domain topology, and security treated as a first-class requirement throughout.",
    details: [
      "C-ABI adapter seam translating SOVD calls into real UDS/DoIP services (0x22/0x2E/0x2F, 0x19/0x14, 0x10, 0x31, 0x27) against classic, SOVD-unaware ECUs",
      "Vehicle-level gateway proxying to per-domain servers over mutual TLS, with OAuth2 bearer auth and SecurityAccess gating both the ECU and the caller",
      "Vue 3 web UI and a C++ client SDK/CLI, both built purely from server self-description via /docs — zero hardcoded DIDs",
      "Security events feed MQTT → Telegraf → InfluxDB → Grafana; four-adapter-config CI matrix with a CycloneDX SBOM published per run",
    ],
    tags: ["SOVD", "UDS/DoIP", "mTLS", "OAuth2", "Vue 3", "C++"],
    featured: true,
  },
  {
    id: "0x0700",
    name: "UDS-29-auth-toolkit",
    repo: "https://github.com/niketdhale/UDS-29-auth-toolkit",
    lang: "C",
    summary:
      "ISO 14229-1 UDS 0x29 Authentication toolkit in C11: tester (client) and ECU (server) with X.509 PKI and OEM-configurable certificate-based access control.",
    details: [
      "DoIP and CAN ISO-TP transports with an AUTOSAR-style API",
      "Runs on Linux, QNX and FreeRTOS",
      "OpenSSL, mbedTLS or HSM crypto backends; optional IDSM reporting",
    ],
    tags: ["UDS 0x29", "X.509 PKI", "DoIP", "ISO-TP", "C11"],
    featured: true,
  },
  {
    id: "0x0800",
    name: "repro-toolkit",
    repo: "https://github.com/niketdhale/repro-toolkit",
    lang: "Rust",
    summary:
      "Parses automotive PDX/ODX files into UDS ECU reprogramming sequences as JSON.",
    details: [
      "ISO 22901 (ODX) input, ISO 14229 (UDS) reprogramming sequences out",
      "CLI with FFI support",
    ],
    tags: ["Rust", "ODX/PDX", "UDS", "ECU flashing"],
    featured: false,
  },
];

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
    company: "Nissan Motor Co., Ltd. (on-site via TCS Japan)",
    period: "Apr 2022 — Present",
    location: "Tokyo, Japan",
    points: [
      "Lead a ~10-engineer team delivering cybersecurity test development and validation for Central Gateway ECU across CAN, DoIP, SOME/IP, and Automotive Ethernet attack surfaces (ISO/SAE 21434).",
      "Architected and developed C#-based test automation tooling — reduced manual validation effort by 90% across multiple vehicle programs.",
      "Developed test scenarios and tools for AUTOSAR SecOC (AES-128-CMAC) and JASPAR MAC authentication over CAN — verifying message integrity between Gateway, Domain ECUs, and external ECUs.",
      "Built end-to-end IDS pipeline validation tooling for AUTOSAR IDSM violation aggregation and IDSR off-board reporting via MQTTS/HTTPS.",
      "Validated ECU bootstrap and certificate provisioning for GW, IVI, and IVC — covering TLS handshake, PKI certificate exchange, and secure key management.",
      "Led CSMS demonstration to Japanese government regulators → supported UN-R155/WP.29 production approval for 6 vehicle lines (ICE, E-Power, EV).",
      "Performed reverse engineering of ECU implementations to verify AUTOSAR IDS, JASPAR, and SecOC spec compliance; identified and resolved 5 critical vulnerabilities → 70% improvement in ECU security posture.",
      "Conducted TARA for Domain ECU (MAC) and Central Gateway (IDS); produced threat models driving product security requirements.",
    ],
  },
  {
    role: "Security Technology Developer — Automotive Systems",
    company: "Tata Consultancy Services (TCS)",
    period: "Oct 2020 — Apr 2022",
    location: "Pune, India",
    points: [
      "Architected and implemented an ISO-15118 compliant EV charging communication system (C / Qt UI) with TLS mutual authentication and Plug & Charge (PnC) over PLC and Automotive Ethernet — demonstrated at CAR-ELE 2022.",
      "Designed and developed a C#/CANoe-based CAN injection simulation tool and IDS meter-cluster visualization system to demonstrate Central Gateway IDS capabilities at CAR-ELE 2021.",
      "Authored full technical documentation for both systems covering security architecture, protocol implementation, and test procedures — reviewed by OEM stakeholders.",
      "Performed TARA of CAN signals and in-vehicle networks; developed ECU cybersecurity validation tooling.",
    ],
  },
];

export const skills = [
  {
    group: "Vehicle Security",
    reg: "0x01",
    items: [
      "ISO/SAE 21434",
      "UN-R155 / WP.29",
      "TARA",
      "AUTOSAR SecOC",
      "AUTOSAR IdsM / IdsR",
      "JASPAR MAC",
      "TLS / PKI",
      "Secure OTA",
      "ECU Provisioning",
      "Reverse Engineering",
    ],
  },
  {
    group: "Protocols & Networks",
    reg: "0x02",
    items: [
      "CAN / CAN FD",
      "SOME/IP",
      "DoIP (ISO 13400)",
      "UDS (ISO 14229)",
      "Automotive Ethernet",
      "ISO-15118 / PLC",
      "MQTTS / HTTPS",
    ],
  },
  {
    group: "Platforms & Tooling",
    reg: "0x03",
    items: [
      "AUTOSAR Classic",
      "Vector CANoe / CANalyzer",
      "Linux / SocketCAN",
      "Wireshark",
      "FreeRTOS",
      "Qt",
      "CAPL",
      "Git / SVN",
    ],
  },
  {
    group: "Languages",
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
  { name: "English", level: "Native" },
  { name: "Japanese", level: "Conversational" },
];
