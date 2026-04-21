// Shared data + helpers for all portfolio variants

const PROJECTS = [
  {
    id: 1,
    title: "Fleetz Finance",
    year: "2024",
    category: "Fullstack",
    role: "Fullstack Developer",
    objective:
      "Plataforma de antecipação de recebíveis (CTes) entre transportadoras e bancos — fluxo ponta a ponta de cessão, aprovação e liquidação.",
    desc: "Plataforma de antecipação de recebíveis (CTes) entre transportadoras e bancos.",
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "Tailwind",
      "MySQL",
      "Prisma",
      "Python",
      "RabbitMQ",
    ],
    color: "slate",
    image: "public/fleetz-finance.png",
    link: "https://www.fleetzfinance.com.br/",
  },
  {
    id: 2,
    title: "Fleetz System",
    year: "2023",
    category: "Fullstack",
    role: "Fullstack Developer",
    objective:
      "Sistema de gestão de multas de frotas para reduzir riscos e visualizar economias no transporte.",
    desc: "Sistema de gestão de multas de frotas de transporte.",
    stack: ["PHP", "Bootstrap", "MySQL", "Python"],
    color: "terracotta",
    image: "public/fleetz-system.png",
    link: "https://fleetz.com.br/",
  },
  {
    id: 3,
    title: "Líder Papel de Parede",
    year: "2026",
    category: "E-commerce",
    role: "Fullstack Developer",
    objective:
      "Catálogo online com gerenciamento de estoque e divulgação do material disponível.",
    desc: "Catálogo online de papéis de parede com gestão de estoque.",
    stack: ["Next.js", "MySQL"],
    color: "olive",
    image: "public/lider-papel-de-parede.svg",
    link: "https://liderpapeldeparede-production.up.railway.app/",
  },
];

const ABOUT = {
  name: "Victor Hugo Baum Schlichting",
  shortName: "Victor Hugo",
  initials: "VHBS",
  tagline:
    "Desenvolvedor fullstack — React, Node.js, NestJS, Prisma. Produto, código e infra.",
  location: "Praia Grande, SP",
  years: "3,5 anos de experiência",
  since: "Atuando desde 2022",
  currently: "Disponível para CLT — aberto a novas oportunidades.",
  availability: "OPEN TO CLT",
  email: "victorgow2@gmail.com",
  whatsapp: "5513981075843",
  whatsappHref: "https://wa.me/5513981075843",
  whatsappDisplay: "+55 (13) 98107-5843",
  github: "github.com/vhbs",
  githubHandle: "vhbs",
  linkedin: "linkedin.com/in/victorschlichting",
  linkedinHandle: "victorschlichting",
  bio: "Sou desenvolvedor fullstack atuando desde 2022 com tecnologias modernas do ecossistema JavaScript — React, Node.js, NestJS e Prisma. Tenho familiaridade tanto com aplicações legadas quanto com a construção de sistemas modernos do zero, integrando frontend, backend e infraestrutura.",
  bio2: "Minha atuação combina boas práticas de código, organização de projetos e mentalidade de produto. Já lidei com desafios que vão de manutenção de sistemas em produção a automações com Python em nuvem (AWS Lambda, EventBridge, S3). Tenho domínio de MySQL e PostgreSQL, Git, deploy com Docker e versionamento em múltiplos ambientes.",
  bio3: "Busco oportunidades onde eu possa crescer junto com o time, contribuir com soluções consistentes e evoluir tecnicamente com responsabilidade e autonomia.",
};

// Tech stack shown in the about/colophon sections
const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Prisma",
  "Python",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "Docker",
  "Git",
  "AWS Lambda",
  "EventBridge",
  "RabbitMQ",
  "Tailwind",
];

// "How I work" — practical experience keywords
const PRACTICES = [
  "Manutenção de legado",
  "Sistemas em produção",
  "Automação em nuvem (AWS)",
  "APIs REST",
  "Deploy com Docker",
  "Múltiplos ambientes",
  "Mentalidade de produto",
  "Boas práticas & code review",
];

// Theme presets consumed by variants via the `theme` prop
const THEMES = {
  minimal: {
    default: {
      bg: "#faf8f4",
      ink: "#1a1816",
      muted: "#605c56",
      accent: "#b8a888",
    },
    sage: {
      bg: "#f2f4ef",
      ink: "#1b2118",
      muted: "#556050",
      accent: "#7a9a6a",
    },
    ocean: {
      bg: "#f2f5f8",
      ink: "#0f1a24",
      muted: "#4a5866",
      accent: "#4a90c2",
    },
  },
  tech: {
    default: {
      bg: "#05080d",
      ink: "#e6edf3",
      muted: "#7d8590",
      accent: "#39ff88",
    },
    neon: {
      bg: "#05080d",
      ink: "#e6edf3",
      muted: "#7d8590",
      accent: "#ff2e8a",
    },
    amber: {
      bg: "#0c0a06",
      ink: "#f2e8d0",
      muted: "#8a7e65",
      accent: "#ffb020",
    },
  },
  brutal: {
    default: {
      bg: "#ffe93b",
      ink: "#0a0a0a",
      muted: "#4a4a4a",
      accent: "#ff3e7f",
    },
    cobalt: {
      bg: "#2d4eff",
      ink: "#ffffff",
      muted: "#b8c2ff",
      accent: "#ffe93b",
    },
    lime: {
      bg: "#caff3e",
      ink: "#0a0a0a",
      muted: "#3a4a10",
      accent: "#ff3e7f",
    },
  },
};

const FONT_PAIRS = {
  default: {
    display: '"Fraunces", Georgia, serif',
    body: '"Inter", -apple-system, sans-serif',
    mono: 'ui-monospace, "JetBrains Mono", Menlo, monospace',
  },
  sans: {
    display: '"Inter", -apple-system, sans-serif',
    body: '"Inter", -apple-system, sans-serif',
    mono: 'ui-monospace, "JetBrains Mono", Menlo, monospace',
  },
  mono: {
    display: '"JetBrains Mono", ui-monospace, monospace',
    body: '"JetBrains Mono", ui-monospace, monospace',
    mono: '"JetBrains Mono", ui-monospace, monospace',
  },
};

const DENSITIES = {
  compact: { sectionGap: 60, innerPad: 40, cardGap: 28 },
  normal: { sectionGap: 100, innerPad: 56, cardGap: 40 },
  loose: { sectionGap: 140, innerPad: 72, cardGap: 56 },
};

// IntersectionObserver-based scroll reveal.
// Pass the scrollable container ref as `root`; falls back to viewport.
function useScrollReveal(root, options = {}) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, root: root?.current || null, ...options },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [root]);
  return [ref, visible];
}

// Track scroll position of a container, normalized 0..1 against scrollHeight.
function useScrollProgress(scrollRef) {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const el = scrollRef?.current;
    if (!el) return;
    const onScroll = () => setY(el.scrollTop);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [scrollRef]);
  return y;
}

// Reveal wrapper — fades + translates in once on scroll-into-view.
function Reveal({ root, delay = 0, y = 24, children, style = {}, as = "div" }) {
  const [ref, visible] = useScrollReveal(root);
  const Tag = as;
  return (
    <Tag
      ref={ref}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`,
        transition: `opacity 0.7s cubic-bezier(0.2,0,0.1,1) ${delay}ms, transform 0.8s cubic-bezier(0.2,0,0.1,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

// Honest striped SVG placeholder for project thumbs
function Placeholder({
  label,
  tone = "neutral",
  aspect = "4 / 3",
  style = {},
}) {
  const palettes = {
    neutral: { bg: "#eceae5", stripe: "#d9d5cc", ink: "#4a453d" },
    dark: { bg: "#0e1117", stripe: "#161b22", ink: "#7d8590" },
    terracotta: { bg: "#e8d4c4", stripe: "#d4bba6", ink: "#5c3a24" },
    slate: { bg: "#d9dde3", stripe: "#c5cad2", ink: "#2d3748" },
    forest: { bg: "#d2dbd2", stripe: "#b9c5b9", ink: "#1a3a28" },
    sand: { bg: "#ecdfc6", stripe: "#d9c9a8", ink: "#6b5028" },
    plum: { bg: "#d9cfda", stripe: "#c4b5c6", ink: "#3d2a40" },
    olive: { bg: "#d9d6b8", stripe: "#c4c09a", ink: "#464224" },
  };
  const p = palettes[tone] || palettes.neutral;
  const uid = React.useId();
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: aspect,
        overflow: "hidden",
        background: p.bg,
        ...style,
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          <pattern
            id={`stripes-${uid}`}
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect width="4" height="8" fill={p.stripe} />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#stripes-${uid})`}
          opacity="0.5"
        />
      </svg>
      {label && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
            fontSize: 11,
            letterSpacing: "0.08em",
            color: p.ink,
            opacity: 0.7,
            textTransform: "uppercase",
          }}
        >
          [ {label} ]
        </div>
      )}
    </div>
  );
}

// ProjectThumb — shows the Placeholder first, then crossfades in the project
// image once it finishes loading. Uses object-fit: contain to preserve the
// full image without cropping or stretching.
function ProjectThumb({
  src,
  label,
  tone = "neutral",
  aspect = "4 / 3",
  fit = "contain",
  padding = "7%",
}) {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <div style={{ position: "relative" }}>
      <Placeholder label={label} tone={tone} aspect={aspect} />
      {src && (
        <img
          src={src}
          alt={label}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
          loading="lazy"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: fit,
            background: "#fff",
            padding,
            boxSizing: "border-box",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s cubic-bezier(0.2,0,0.1,1)",
          }}
        />
      )}
    </div>
  );
}

function AvatarPlaceholder({ size = 80, tone = "neutral", initials = "VH" }) {
  const palettes = {
    neutral: { bg: "#e0dcd3", ink: "#4a453d" },
    dark: { bg: "#161b22", ink: "#7d8590" },
    sand: { bg: "#e8d9bc", ink: "#8a7450" },
  };
  const p = palettes[tone] || palettes.neutral;
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: p.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "ui-monospace, monospace",
        fontSize: size * 0.28,
        color: p.ink,
        letterSpacing: "0.05em",
        fontWeight: 600,
      }}
    >
      {initials}
    </div>
  );
}

Object.assign(window, {
  PROJECTS,
  ABOUT,
  SKILLS,
  PRACTICES,
  THEMES,
  FONT_PAIRS,
  DENSITIES,
  useScrollReveal,
  useScrollProgress,
  Reveal,
  Placeholder,
  ProjectThumb,
  AvatarPlaceholder,
});
