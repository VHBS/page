// Variant A — Minimalista
// White canvas, large serif display, warm neutrals, generous whitespace.
// Entrance/scroll reveals + subtle hero parallax.

function VariantMinimal({
  theme = "default",
  fontPair = "default",
  density = "normal",
}) {
  const [filter, setFilter] = React.useState("All");
  const [hover, setHover] = React.useState(null);
  const scrollRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const scrollY = useScrollProgress(scrollRef);

  const scrollTo = (ref) => (e) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const T = (THEMES.minimal && THEMES.minimal[theme]) || THEMES.minimal.default;
  const F = FONT_PAIRS[fontPair] || FONT_PAIRS.default;
  const D = DENSITIES[density] || DENSITIES.normal;

  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];
  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const minStyles = {
    wrap: {
      fontFamily: F.body,
      color: T.ink,
      background: T.bg,
      minHeight: "100%",
      overflow: "auto",
      height: "100%",
    },
    inner: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: `64px ${D.innerPad}px 120px`,
    },
    navBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: D.sectionGap,
      fontSize: 13,
    },
    mark: {
      fontFamily: F.display,
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: "-0.01em",
    },
    nav: { display: "flex", gap: 28, color: T.muted },
    navLink: { color: "inherit", textDecoration: "none", cursor: "pointer" },
    hero: { marginBottom: D.sectionGap + 20 },
    heroKicker: {
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "0.15em",
      color: T.muted,
      marginBottom: 28,
    },
    heroH1: {
      fontFamily: F.display,
      fontSize: 88,
      lineHeight: 1.02,
      letterSpacing: "-0.035em",
      fontWeight: 300,
      margin: 0,
      marginBottom: 40,
      textWrap: "balance",
      transform: `translateY(${-scrollY * 0.15}px)`,
      transition: "transform 0.1s linear",
    },
    heroEm: { fontStyle: "italic", fontWeight: 400 },
    heroMeta: {
      display: "flex",
      gap: 40,
      fontSize: 14,
      color: T.muted,
      flexWrap: "wrap",
    },
    sectionLabel: {
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      color: T.muted,
      marginBottom: 24,
      fontWeight: 500,
    },
    filterRow: { display: "flex", gap: 6, marginBottom: 48, flexWrap: "wrap" },
    chip: (active) => ({
      padding: "7px 14px",
      fontSize: 13,
      border: "1px solid",
      borderColor: active ? T.ink : "#e0dcd3",
      background: active ? T.ink : "transparent",
      color: active ? T.bg : T.muted,
      borderRadius: 100,
      cursor: "pointer",
      transition: "all 0.15s",
      fontFamily: "inherit",
    }),
    workGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: `64px ${D.cardGap}px`,
    },
    card: {
      cursor: "pointer",
      transition: "transform 0.4s cubic-bezier(0.2, 0, 0.1, 1)",
    },
    cardThumb: {
      marginBottom: 20,
      overflow: "hidden",
      transition: "transform 0.6s cubic-bezier(0.2, 0, 0.1, 1)",
    },
    cardMeta: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      fontSize: 12,
      color: T.muted,
      marginBottom: 6,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
    cardTitle: {
      fontFamily: F.display,
      fontSize: 24,
      fontWeight: 400,
      letterSpacing: "-0.01em",
      margin: 0,
      marginBottom: 6,
    },
    cardDesc: {
      fontSize: 14,
      color: T.muted,
      lineHeight: 1.5,
      margin: 0,
      marginBottom: 12,
      maxWidth: 420,
    },
    stackRow: { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 },
    stackPill: {
      fontFamily: F.mono,
      fontSize: 10,
      padding: "2px 8px",
      border: `1px solid ${T.accent}`,
      color: T.muted,
      borderRadius: 100,
      letterSpacing: "0.02em",
    },
    about: {
      marginTop: D.sectionGap,
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      gap: 80,
      alignItems: "start",
    },
    aboutLabel: {
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      color: T.muted,
      fontWeight: 500,
    },
    aboutBody: {
      fontFamily: F.display,
      fontSize: 26,
      lineHeight: 1.4,
      fontWeight: 300,
      letterSpacing: "-0.01em",
      margin: 0,
      marginBottom: 20,
      textWrap: "pretty",
      color: T.ink,
    },
    aboutBodySm: {
      fontSize: 15,
      lineHeight: 1.65,
      color: T.muted,
      margin: 0,
      marginBottom: 16,
    },
    contact: {
      marginTop: D.sectionGap + 40,
      paddingTop: 48,
      borderTop: "1px solid #e0dcd3",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      gap: 40,
    },
    contactH: {
      fontFamily: F.display,
      fontSize: 56,
      fontWeight: 300,
      letterSpacing: "-0.03em",
      margin: 0,
      lineHeight: 1,
    },
    contactEmail: {
      fontSize: 14,
      color: T.ink,
      textDecoration: "none",
      borderBottom: "1px solid currentColor",
      paddingBottom: 2,
    },
    footer: {
      marginTop: 64,
      paddingTop: 28,
      paddingBottom: 8,
      borderTop: "1px solid #e0dcd3",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16,
      fontSize: 12,
      color: T.muted,
      textTransform: "uppercase",
      letterSpacing: "0.14em",
    },
    socials: { display: "flex", gap: 8 },
    socialLink: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 14px",
      border: "1px solid #e0dcd3",
      borderRadius: 100,
      color: T.ink,
      textDecoration: "none",
      fontSize: 12,
      letterSpacing: "0.08em",
      transition: "all 0.2s cubic-bezier(0.2,0,0.1,1)",
    },
  };

  const SocialIcon = ({ kind }) => {
    const common = {
      width: 14,
      height: 14,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.6,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    if (kind === "linkedin")
      return (
        <svg {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    if (kind === "github")
      return (
        <svg {...common}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    if (kind === "email")
      return (
        <svg {...common}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    if (kind === "whatsapp")
      return (
        <svg {...common}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    return null;
  };

  return (
    <div ref={scrollRef} style={minStyles.wrap}>
      <div style={minStyles.inner}>
        <nav style={minStyles.navBar}>
          <span style={minStyles.mark}>
            {ABOUT.shortName}
            <span style={{ color: T.accent }}>*</span>
          </span>
          <div style={minStyles.nav}>
            <a
              href="#projetos"
              style={minStyles.navLink}
              onClick={scrollTo(projectsRef)}
            >
              Projetos
            </a>
            <a
              href="#sobre"
              style={minStyles.navLink}
              onClick={scrollTo(aboutRef)}
            >
              Sobre
            </a>
            <a
              href="#contato"
              style={minStyles.navLink}
              onClick={scrollTo(contactRef)}
            >
              Contato
            </a>
            {/* <span style={{ color: T.accent }}>◉ {ABOUT.availability}</span> */}
          </div>
        </nav>

        <Reveal root={scrollRef} delay={50}>
          <section style={minStyles.hero}>
            <div style={minStyles.heroKicker}>
              Fullstack Developer · {ABOUT.since}
            </div>
            <h1 style={minStyles.heroH1}>
              Construindo <em style={minStyles.heroEm}>software consistente</em>
              <br />
              para times que <em style={minStyles.heroEm}>precisam entregar</em>
              .
            </h1>
            <div style={minStyles.heroMeta}>
              <span>{ABOUT.location}</span>
              <span>{ABOUT.years}</span>
              {/* <span>{ABOUT.currently}</span> */}
            </div>
          </section>
        </Reveal>

        <Reveal root={scrollRef}>
          <section ref={projectsRef} style={{ scrollMarginTop: 40 }}>
            <div style={minStyles.sectionLabel}>
              Projetos selecionados —{" "}
              {filtered.length.toString().padStart(2, "0")}
            </div>
            <div style={minStyles.filterRow}>
              {categories.map((c) => (
                <button
                  key={c}
                  style={minStyles.chip(filter === c)}
                  onClick={() => setFilter(c)}
                >
                  {c === "All" ? "Todos" : c}
                </button>
              ))}
            </div>
            <div style={minStyles.workGrid}>
              {filtered.map((p, i) => (
                <Reveal key={p.id} root={scrollRef} delay={i * 90}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...minStyles.card,
                      display: "block",
                      color: "inherit",
                      textDecoration: "none",
                      transform:
                        hover && hover !== p.id ? "scale(0.985)" : "scale(1)",
                      opacity: hover && hover !== p.id ? 0.5 : 1,
                      transition: "all 0.4s cubic-bezier(0.2, 0, 0.1, 1)",
                    }}
                    onMouseEnter={() => setHover(p.id)}
                    onMouseLeave={() => setHover(null)}
                  >
                    <div
                      style={{
                        ...minStyles.cardThumb,
                        transform: hover === p.id ? "scale(1.02)" : "scale(1)",
                      }}
                    >
                      <ProjectThumb
                        src={p.image}
                        label={p.title}
                        tone={p.color}
                        aspect="5 / 4"
                      />
                    </div>
                    <div style={minStyles.cardMeta}>
                      <span>{p.category}</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 style={minStyles.cardTitle}>{p.title}</h3>
                    <p style={minStyles.cardDesc}>{p.objective}</p>
                    <div style={minStyles.stackRow}>
                      {p.stack.map((s) => (
                        <span key={s} style={minStyles.stackPill}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal root={scrollRef}>
          <section
            ref={aboutRef}
            style={{ ...minStyles.about, scrollMarginTop: 40 }}
          >
            <div style={minStyles.aboutLabel}>Sobre</div>
            <div>
              <p style={minStyles.aboutBody}>{ABOUT.bio}</p>
              <p style={minStyles.aboutBodySm}>{ABOUT.bio2}</p>
              <p style={minStyles.aboutBodySm}>{ABOUT.bio3}</p>
              <div
                style={{
                  marginTop: 40,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 32,
                  fontSize: 13,
                  color: T.muted,
                }}
              >
                <div>
                  <div style={{ ...minStyles.aboutLabel, marginBottom: 12 }}>
                    Stack
                  </div>
                  {SKILLS.map((s) => (
                    <div key={s} style={{ padding: "3px 0" }}>
                      {s}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ ...minStyles.aboutLabel, marginBottom: 12 }}>
                    Como eu trabalho
                  </div>
                  {PRACTICES.map((c) => (
                    <div key={c} style={{ padding: "3px 0" }}>
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal root={scrollRef}>
          <section
            ref={contactRef}
            style={{ ...minStyles.contact, scrollMarginTop: 40 }}
          >
            <h2 style={minStyles.contactH}>
              Bora conversar.
              <br />
              <em style={{ fontStyle: "italic" }}>Calmamente.</em>
            </h2>
            <a
              href={ABOUT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              style={minStyles.contactEmail}
            >
              {ABOUT.whatsappDisplay} →
            </a>
          </section>
        </Reveal>

        <Reveal root={scrollRef}>
          <footer style={minStyles.footer}>
            <span>
              © {new Date().getFullYear()} {ABOUT.name}
            </span>
            <div style={minStyles.socials}>
              <a
                href={`mailto:${ABOUT.email}`}
                style={minStyles.socialLink}
                aria-label="Email"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = T.ink;
                  e.currentTarget.style.background = T.ink;
                  e.currentTarget.style.color = T.bg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e0dcd3";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = T.ink;
                }}
              >
                <SocialIcon kind="email" /> Email
              </a>
              <a
                href={ABOUT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                style={minStyles.socialLink}
                aria-label="WhatsApp"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = T.ink;
                  e.currentTarget.style.background = T.ink;
                  e.currentTarget.style.color = T.bg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e0dcd3";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = T.ink;
                }}
              >
                <SocialIcon kind="whatsapp" /> WhatsApp
              </a>
              <a
                href={`https://${ABOUT.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                style={minStyles.socialLink}
                aria-label="LinkedIn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = T.ink;
                  e.currentTarget.style.background = T.ink;
                  e.currentTarget.style.color = T.bg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e0dcd3";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = T.ink;
                }}
              >
                <SocialIcon kind="linkedin" /> LinkedIn
              </a>
              <a
                href={`https://${ABOUT.github}`}
                target="_blank"
                rel="noopener noreferrer"
                style={minStyles.socialLink}
                aria-label="GitHub"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = T.ink;
                  e.currentTarget.style.background = T.ink;
                  e.currentTarget.style.color = T.bg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e0dcd3";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = T.ink;
                }}
              >
                <SocialIcon kind="github" /> GitHub
              </a>
            </div>
          </footer>
        </Reveal>
      </div>
    </div>
  );
}

Object.assign(window, { VariantMinimal });
