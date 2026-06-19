import { useState, useEffect } from "react";

const primaryColor = "#37ca37";
const secondaryColor = "#188bf6";
const redColor = "#D00000";
const darkBlue = "#033856";
const darkText = "#494949";
const grayText = "#7a7a7a";
const yellowAccent = "#FEB020";
const bgLight = "#fafafa";
const bgGray = "#f3f3f3";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 47, seconds: 12 });
  const [hoveredBtn, setHoveredBtn] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with backend/CRM (LeadConnector / GoHighLevel)
    setSubmitted(true);
  };

  const pad = (n) => String(n).padStart(2, "0");

  const benefits = [
    { icon: "🧠", title: "Pewność siebie", desc: "Twoje dziecko nauczy się wierzyć w siebie i swoje możliwości w każdej sytuacji." },
    { icon: "🏆", title: "Nawyki sukcesu", desc: "Odkryje nawyki, które prowadzą do sukcesów w szkole, sporcie i życiu codziennym." },
    { icon: "💬", title: "Komunikacja", desc: "Poprawi umiejętności komunikacji i wyrażania swoich emocji w zdrowy sposób." },
    { icon: "🎯", title: "Wyznaczanie celów", desc: "Nauczy się wyznaczać cele i konsekwentnie do nich dążyć." },
    { icon: "❤️", title: "Odporność emocjonalna", desc: "Zbuduje odporność na stres i trudne sytuacje, radząc sobie z nimi skutecznie." },
    { icon: "🌟", title: "Motywacja wewnętrzna", desc: "Rozwinie wewnętrzną motywację, która będzie go napędzać przez całe życie." },
  ];

  const testimonials = [
    {
      name: "Monika W.",
      child: "mama 9-latka",
      text: "Po kursie mój syn stał się zupełnie innym dzieckiem. Zaczął wierzyć w siebie, przestał bać się odpowiadać przy tablicy. Naprawdę niesamowita zmiana!",
      stars: 5,
    },
    {
      name: "Tomasz K.",
      child: "tata 11-latki",
      text: "Córka była bardzo nieśmiała. Teraz sama zgłasza się do zajęć dodatkowych i ma mnóstwo przyjaciół. Polecam każdemu rodzicowi!",
      stars: 5,
    },
    {
      name: "Agnieszka R.",
      child: "mama 8-latka",
      text: "Sceptycznie podchodziłam do kursu online dla dzieci, ale wyniki mnie zaskoczyły. Mój syn jest bardziej samodzielny i pewny siebie. Dziękuję!",
      stars: 5,
    },
  ];

  const faqs = [
    { q: "Dla jakiego wieku jest ten program?", a: "Program jest przeznaczony dla dzieci w wieku 7-14 lat. Materiały są dostosowane do różnych etapów rozwoju." },
    { q: "Jak długo trwa kurs?", a: "Kurs składa się z 8 modułów. Każdy moduł to około 2-3 godziny materiału, który można realizować w swoim tempie przez 30 dni." },
    { q: "Czy potrzebuję specjalnego sprzętu?", a: "Wystarczy komputer, tablet lub smartfon z dostępem do internetu. Nic więcej nie jest potrzebne." },
    { q: "Co jeśli kurs nie spełni moich oczekiwań?", a: "Oferujemy 30-dniową gwarancję zwrotu pieniędzy. Jeśli kurs nie przyniesie efektów, zwrócimy pełną kwotę bez pytań." },
    { q: "Czy rodzice muszą uczestniczyć w kursie?", a: "Zachęcamy rodziców do aktywnego uczestnictwa! Dlatego w pakiecie znajdziesz specjalny poradnik dla rodziców." },
  ];

  const modules = [
    { num: "01", title: "Poznaj siebie", desc: "Odkrywanie mocnych stron i unikalnych talentów dziecka" },
    { num: "02", title: "Moc pozytywnego myślenia", desc: "Techniki zmiany negatywnych myśli na wspierające" },
    { num: "03", title: "Komunikacja bez granic", desc: "Wyrażanie siebie z pewnością i szacunkiem dla innych" },
    { num: "04", title: "Wyznaczanie celów", desc: "Jak marzyć wielko i realizować swoje plany krok po kroku" },
    { num: "05", title: "Radzenie sobie ze stresem", desc: "Skuteczne techniki relaksacji i zarządzania emocjami" },
    { num: "06", title: "Budowanie relacji", desc: "Przyjaźń, współpraca i rozwiązywanie konfliktów" },
    { num: "07", title: "Odporność i wytrwałość", desc: "Jak nie poddawać się po pierwszej porażce" },
    { num: "08", title: "Mój plan sukcesu", desc: "Stworzenie indywidualnego planu działania na przyszłość" },
  ];

  const styles = {
    root: {
      fontFamily: "'Open Sans', sans-serif",
      color: darkText,
      backgroundColor: "#ffffff",
      overflowX: "hidden",
    },
    // NAVBAR
    navbar: {
      background: "#ffffff",
      boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      padding: "0 20px",
    },
    navInner: {
      maxWidth: 1100,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 70,
    },
    logo: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: 22,
      fontWeight: 700,
      color: darkBlue,
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: 8,
    },
    logoAccent: { color: primaryColor },
    navLinks: {
      display: "flex",
      gap: 28,
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navLink: {
      color: darkText,
      textDecoration: "none",
      fontSize: 15,
      fontWeight: 600,
      transition: "color 0.2s",
    },
    navCta: {
      background: primaryColor,
      color: "#fff",
      padding: "10px 22px",
      borderRadius: 8,
      textDecoration: "none",
      fontWeight: 700,
      fontSize: 15,
      transition: "background 0.2s, transform 0.2s",
    },
    hamburger: {
      display: "none",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 28,
      color: darkBlue,
    },
    mobileMenu: {
      display: menuOpen ? "flex" : "none",
      flexDirection: "column",
      background: "#fff",
      padding: "20px",
      gap: 16,
      borderTop: "1px solid #eee",
    },
    // COUNTDOWN BAR
    countdownBar: {
      background: redColor,
      color: "#fff",
      textAlign: "center",
      padding: "10px 20px",
      fontSize: 14,
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      flexWrap: "wrap",
    },
    countdownNum: {
      background: "rgba(0,0,0,0.25)",
      borderRadius: 6,
      padding: "4px 10px",
      fontFamily: "monospace",
      fontSize: 20,
      fontWeight: 700,
      minWidth: 48,
      display: "inline-block",
      textAlign: "center",
    },
    // HERO
    hero: {
      background: `linear-gradient(135deg, ${darkBlue} 0%, #0a4f78 100%)`,
      color: "#fff",
      padding: "60px 20px 80px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },
    heroBadge: {
      display: "inline-block",
      background: yellowAccent,
      color: "#000",
      fontWeight: 700,
      fontSize: 13,
      padding: "6px 18px",
      borderRadius: 50,
      marginBottom: 20,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    heroTitle: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: "clamp(28px, 5vw, 52px)",
      fontWeight: 700,
      lineHeight: 1.2,
      marginBottom: 20,
      color: "#fff",
    },
    heroTitleAccent: { color: yellowAccent },
    heroSubtitle: {
      fontSize: "clamp(16px, 2.5vw, 22px)",
      lineHeight: 1.6,
      marginBottom: 32,
      maxWidth: 720,
      margin: "0 auto 32px",
      color: "rgba(255,255,255,0.9)",
    },
    heroBtn: {
      display: "inline-block",
      background: primaryColor,
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: 20,
      padding: "18px 42px",
      borderRadius: 12,
      textDecoration: "none",
      boxShadow: "0 8px 30px rgba(55,202,55,0.4)",
      transition: "transform 0.2s, box-shadow 0.2s",
      cursor: "pointer",
      border: "none",
      marginBottom: 16,
    },
    heroSubBtn: {
      display: "block",
      color: "rgba(255,255,255,0.7)",
      fontSize: 14,
      marginTop: 8,
    },
    heroStats: {
      display: "flex",
      justifyContent: "center",
      gap: 40,
      marginTop: 50,
      flexWrap: "wrap",
    },
    heroStat: {
      textAlign: "center",
    },
    heroStatNum: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: 36,
      fontWeight: 700,
      color: yellowAccent,
      display: "block",
    },
    heroStatLabel: {
      fontSize: 14,
      color: "rgba(255,255,255,0.8)",
    },
    // SECTION COMMON
    section: {
      padding: "70px 20px",
      maxWidth: 1100,
      margin: "0 auto",
    },
    sectionAlt: {
      background: bgLight,
      padding: "70px 20px",
    },
    sectionAltInner: {
      maxWidth: 1100,
      margin: "0 auto",
    },
    sectionLabel: {
      color: primaryColor,
      fontWeight: 700,
      fontSize: 13,
      textTransform: "uppercase",
      letterSpacing: 2,
      marginBottom: 12,
      display: "block",
    },
    sectionTitle: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: "clamp(24px, 4vw, 40px)",
      fontWeight: 700,
      color: darkBlue,
      marginBottom: 16,
      lineHeight: 1.25,
    },
    sectionTitleRed: { color: redColor },
    sectionSubtitle: {
      fontSize: 18,
      color: grayText,
      maxWidth: 640,
      lineHeight: 1.65,
      marginBottom: 48,
    },
    // PROBLEM SECTION
    problemBox: {
      background: "#fff8f8",
      border: `2px solid #ffd6d6`,
      borderRadius: 16,
      padding: "32px 36px",
      marginBottom: 16,
    },
    problemList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    problemItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: 14,
      marginBottom: 16,
      fontSize: 16,
      lineHeight: 1.5,
      color: darkText,
    },
    problemIcon: {
      fontSize: 22,
      flexShrink: 0,
      marginTop: 2,
    },
    // BENEFITS GRID
    benefitsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 24,
    },
    benefitCard: {
      background: "#fff",
      border: "1px solid #e8f4e8",
      borderRadius: 16,
      padding: "28px 24px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    benefitIcon: {
      fontSize: 40,
      marginBottom: 14,
      display: "block",
    },
    benefitTitle: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: 20,
      fontWeight: 700,
      color: darkBlue,
      marginBottom: 8,
    },
    benefitDesc: {
      color: grayText,
      fontSize: 15,
      lineHeight: 1.6,
    },
    // MODULES
    modulesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 20,
    },
    moduleCard: {
      background: "#fff",
      borderRadius: 14,
      padding: "22px 20px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
      borderLeft: `4px solid ${primaryColor}`,
      display: "flex",
      gap: 16,
      alignItems: "flex-start",
    },
    moduleNum: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: 32,
      fontWeight: 700,
      color: primaryColor,
      lineHeight: 1,
      flexShrink: 0,
    },
    moduleTitle: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: 17,
      fontWeight: 700,
      color: darkBlue,
      marginBottom: 6,
    },
    moduleDesc: {
      fontSize: 14,
      color: grayText,
      lineHeight: 1.5,
    },
    // TESTIMONIALS
    testimonialsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
      gap: 24,
    },
    testimonialCard: {
      background: "#fff",
      borderRadius: 16,
      padding: "28px 24px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      position: "relative",
    },
    testimonialQuote: {
      fontSize: 48,
      color: primaryColor,
      lineHeight: 1,
      marginBottom: 8,
      fontFamily: "Georgia, serif",
    },
    testimonialText: {
      fontSize: 15,
      lineHeight: 1.7,
      color: darkText,
      marginBottom: 20,
      fontStyle: "italic",
    },
    testimonialName: {
      fontWeight: 700,
      color: darkBlue,
      fontSize: 15,
    },
    testimonialRole: {
      fontSize: 13,
      color: grayText,
    },
    testimonialStars: {
      color: yellowAccent,
      fontSize: 18,
      marginBottom: 12,
    },
    // PRICING
    pricingCard: {
      background: "#fff",
      borderRadius: 20,
      boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
      overflow: "hidden",
      maxWidth: 520,
      margin: "0 auto",
    },
    pricingHeader: {
      background: `linear-gradient(135deg, ${darkBlue}, #0a4f78)`,
      color: "#fff",
      padding: "32px 36px",
      textAlign: "center",
    },
    pricingBadge: {
      background: yellowAccent,
      color: "#000",
      fontWeight: 700,
      fontSize: 12,
      padding: "4px 14px",
      borderRadius: 50,
      textTransform: "uppercase",
      letterSpacing: 1,
      display: "inline-block",
      marginBottom: 16,
    },
    pricingName: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: 30,
      fontWeight: 700,
      marginBottom: 8,
    },
    pricingOldPrice: {
      fontSize: 18,
      textDecoration: "line-through",
      color: "rgba(255,255,255,0.6)",
      marginBottom: 4,
    },
    pricingPrice: {
      fontSize: 54,
      fontWeight: 700,
      color: yellowAccent,
      lineHeight: 1,
      marginBottom: 4,
    },
    pricingCurrency: { fontSize: 24, verticalAlign: "super", lineHeight: 1 },
    pricingPeriod: { fontSize: 16, color: "rgba(255,255,255,0.8)" },
    pricingBody: {
      padding: "32px 36px",
    },
    pricingFeature: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14,
      fontSize: 15,
      color: darkText,
    },
    pricingCheck: {
      color: primaryColor,
      fontWeight: 700,
      fontSize: 18,
      flexShrink: 0,
    },
    pricingBtn: {
      display: "block",
      width: "100%",
      background: primaryColor,
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: 20,
      padding: "18px",
      borderRadius: 12,
      border: "none",
      cursor: "pointer",
      textAlign: "center",
      textDecoration: "none",
      marginBottom: 16,
      boxShadow: "0 6px 24px rgba(55,202,55,0.35)",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    pricingGuarantee: {
      textAlign: "center",
      fontSize: 13,
      color: grayText,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
    },
    // FORM
    formSection: {
      background: `linear-gradient(135deg, ${darkBlue} 0%, #0a4f78 100%)`,
      padding: "70px 20px",
    },
    formCard: {
      background: "#fff",
      borderRadius: 20,
      padding: "48px 40px",
      maxWidth: 560,
      margin: "0 auto",
      boxShadow: "0 16px 60px rgba(0,0,0,0.20)",
    },
    formTitle: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: 28,
      fontWeight: 700,
      color: darkBlue,
      marginBottom: 8,
      textAlign: "center",
    },
    formSubtitle: {
      color: grayText,
      fontSize: 15,
      textAlign: "center",
      marginBottom: 32,
      lineHeight: 1.6,
    },
    formGroup: { marginBottom: 20 },
    formLabel: {
      display: "block",
      fontSize: 14,
      fontWeight: 600,
      color: darkText,
      marginBottom: 8,
    },
    formInput: {
      width: "100%",
      padding: "14px 16px",
      border: "2px solid #e2e8f0",
      borderRadius: 10,
      fontSize: 16,
      color: darkText,
      outline: "none",
      transition: "border-color 0.2s",
      boxSizing: "border-box",
      fontFamily: "'Open Sans', sans-serif",
    },
    formBtn: {
      width: "100%",
      background: primaryColor,
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: 18,
      padding: "18px",
      borderRadius: 12,
      border: "none",
      cursor: "pointer",
      marginTop: 8,
      boxShadow: "0 6px 24px rgba(55,202,55,0.35)",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    formDisclaimer: {
      fontSize: 12,
      color: grayText,
      textAlign: "center",
      marginTop: 16,
      lineHeight: 1.6,
    },
    // FAQ
    faqItem: {
      background: "#fff",
      borderRadius: 12,
      marginBottom: 12,
      boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
      overflow: "hidden",
    },
    faqQuestion: {
      padding: "20px 24px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 16,
      fontWeight: 600,
      color: darkBlue,
    },
    faqAnswer: {
      padding: "0 24px 20px",
      fontSize: 15,
      color: grayText,
      lineHeight: 1.7,
    },
    // GUARANTEE
    guaranteeBox: {
      background: "#f0fff4",
      border: `2px solid ${primaryColor}`,
      borderRadius: 16,
      padding: "36px 40px",
      textAlign: "center",
      maxWidth: 700,
      margin: "0 auto",
    },
    guaranteeIcon: { fontSize: 60, marginBottom: 16 },
    guaranteeTitle: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: 28,
      fontWeight: 700,
      color: darkBlue,
      marginBottom: 12,
    },
    guaranteeText: {
      fontSize: 16,
      color: grayText,
      lineHeight: 1.7,
    },
    // FOOTER
    footer: {
      background: darkBlue,
      color: "rgba(255,255,255,0.7)",
      padding: "48px 20px 28px",
      textAlign: "center",
    },
    footerLogo: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: 22,
      fontWeight: 700,
      color: "#fff",
      marginBottom: 16,
      display: "block",
    },
    footerLinks: {
      display: "flex",
      justifyContent: "center",
      gap: 24,
      marginBottom: 24,
      flexWrap: "wrap",
    },
    footerLink: {
      color: "rgba(255,255,255,0.6)",
      fontSize: 13,
      textDecoration: "none",
    },
    footerCopy: {
      fontSize: 13,
      color: "rgba(255,255,255,0.4)",
      marginTop: 16,
    },
    // DIVIDER
    divider: {
      height: 4,
      background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
      border: "none",
      margin: 0,
    },
  };

  return (
    <div style={styles.root}>
      {/* Google Fonts */}
      {/* TODO: Move Google Fonts to index.html for production */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* COUNTDOWN BAR */}
      <div style={styles.countdownBar}>
        <span>🔥 OFERTA SPECJALNA kończy się za:</span>
        <span>
          <span style={styles.countdownNum}>{pad(countdown.hours)}</span>
          {" : "}
          <span style={styles.countdownNum}>{pad(countdown.minutes)}</span>
          {" : "}
          <span style={styles.countdownNum}>{pad(countdown.seconds)}</span>
        </span>
        <span>— Zapisz się teraz i oszczędź 50%!</span>
      </div>

      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.navInner}>
          <a href="#" style={styles.logo}>
            🌟 <span>Dziecko<span style={styles.logoAccent}>Sukcesu</span></span>
          </a>
          <ul style={{ ...styles.navLinks, "@media(max-width:768px)": { display: "none" } }}>
            <li><a href="#o-kursie" style={styles.navLink}>O kursie</a></li>
            <li><a href="#moduly" style={styles.navLink}>Moduły</a></li>
            <li><a href="#opinie" style={styles.navLink}>Opinie</a></li>
            <li><a href="#faq" style={styles.navLink}>FAQ</a></li>
          </ul>
          <a
            href="#zapisz-sie"
            style={{
              ...styles.navCta,
              ...(hoveredBtn === "nav" ? { background: "#2ab02a", transform: "scale(1.04)" } : {}),
            }}
            onMouseEnter={() => setHoveredBtn("nav")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            Zapisz się →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: -80, right: -80, width: 300, height: 300,
          borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", bottom: -60, left: -60, width: 200, height: 200,
          borderRadius: "50%", background: "rgba(55,202,55,0.08)", pointerEvents: "none"
        }} />
        <div style={{ position: "relative", maxWidth: 860, margin: "0 auto" }}>
          <span style={styles.heroBadge}>✨ Program dla dzieci 7–14 lat</span>
          <h1 style={styles.heroTitle}>
            Pomóż swojemu dziecku{" "}
            <span style={styles.heroTitleAccent}>uwierzyć w siebie</span>{" "}
            i osiągać <span style={styles.heroTitleAccent}>sukcesy</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Sprawdzony kurs online, który w 8 tygodni da Twojemu dziecku pewność siebie,
            nawyki sukcesu i narzędzia do radzenia sobie z wyzwaniami codziennego życia.
          </p>
          {/* TODO: Link href to real checkout page */}
          <a
            href="#zapisz-sie"
            style={{
              ...styles.heroBtn,
              ...(hoveredBtn === "hero" ? { transform: "scale(1.05)", boxShadow: "0 12px 40px rgba(55,202,55,0.55)" } : {}),
            }}
            onMouseEnter={() => setHoveredBtn("hero")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            🚀 Chcę zapisać dziecko na kurs!
          </a>
          <span style={styles.heroSubBtn}>🔒 Bezpieczna płatność · 30 dni gwarancji zwrotu</span>

          <div style={styles.heroStats}>
            <div style={styles.heroStat}>
              <span style={styles.heroStatNum}>2 400+</span>
              <span style={styles.heroStatLabel}>szczęśliwych rodzin</span>
            </div>
            <div style={styles.heroStat}>
              <span style={styles.heroStatNum}>8</span>
              <span style={styles.heroStatLabel}>modułów programu</span>
            </div>
            <div style={styles.heroStat}>
              <span style={styles.heroStatNum}>4.9⭐</span>
              <span style={styles.heroStatLabel}>średnia ocena kursu</span>
            </div>
            <div style={styles.heroStat}>
              <span style={styles.heroStatNum}>30 dni</span>
              <span style={styles.heroStatLabel}>gwarancja zwrotu</span>
            </div>
          </div>
        </div>
      </section>

      <hr style={styles.divider} />

      {/* PROBLEM SECTION */}
      <section style={{ ...styles.sectionAlt }}>
        <div style={styles.sectionAltInner}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={styles.sectionLabel}>Czy to brzmi znajomo?</span>
            <h2 style={{ ...styles.sectionTitle, marginBottom: 16 }}>
              Czy Twoje dziecko{" "}
              <span style={styles.sectionTitleRed}>zmaga się z tym?</span>
            </h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}>
            <div style={styles.problemBox}>
              <ul style={styles.problemList}>
                {[
                  "Boi się odpowiadać przed klasą i wycofuje się",
                  "Szybko rezygnuje, gdy coś jest trudne",
                  "Porównuje się z innymi i czuje się gorsze",
                  "Ma trudności z nawiązywaniem przyjaźni",
                ].map((item, i) => (
                  <li key={i} style={styles.problemItem}>
                    <span style={styles.problemIcon}>😟</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ ...styles.problemBox, background: "#f0fff4", border: `2px solid #b2f5c0` }}>
              <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: darkBlue, marginBottom: 16, fontWeight: 700 }}>
                Po naszym kursie Twoje dziecko będzie:
              </p>
              <ul style={styles.problemList}>
                {[
                  "Mówić o sobie z dumą i pewnością siebie",
                  "Wytrwale dążyć do swoich celów",
                  "Czuć się wartościowe i wyjątkowe",
                  "Łatwo budować zdrowe relacje z rówieśnikami",
                ].map((item, i) => (
                  <li key={i} style={styles.problemItem}>
                    <span style={styles.problemIcon}>✅</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="o-kursie" style={styles.section}>
        <span style={styles.sectionLabel}>Co zyska Twoje dziecko?</span>
        <h2 style={styles.sectionTitle}>6 kluczowych umiejętności,<br />które zmienią jego życie</h2>
        <p style={styles.sectionSubtitle}>
          Nasz program to kompleksowe podejście do rozwoju dziecka — łączymy psychologię,
          coaching i edukację w atrakcyjnej, dziecięcej formie.
        </p>
        <div style={styles.benefitsGrid}>
          {benefits.map((b, i) => (
            <div
              key={i}
              style={{
                ...styles.benefitCard,
                ...(hoveredBtn === `benefit-${i}` ? {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.12)"
                } : {}),
              }}
              onMouseEnter={() => setHoveredBtn(`benefit-${i}`)}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              <span style={styles.benefitIcon}>{b.icon}</span>
              <div style={styles.benefitTitle}>{b.title}</div>
              <div style={styles.benefitDesc}>{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <hr style={styles.divider} />

      {/* MODULES */}
      <section id="moduly" style={styles.sectionAlt}>
        <div style={styles.sectionAltInner}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={styles.sectionLabel}>Program kursu</span>
            <h2 style={styles.sectionTitle}>8 modułów zmieniających życie</h2>
            <p style={{ ...styles.sectionSubtitle, margin: "0 auto" }}>
              Każdy moduł to 2-3 godziny angażujących ćwiczeń, filmów i zadań praktycznych,
              stworzonych specjalnie z myślą o dzieciach.
            </p>
          </div>
          <div style={styles.modulesGrid}>
            {modules.map((m, i) => (
              <div key={i} style={styles.moduleCard}>
                <span style={styles.moduleNum}>{m.num}</span>
                <div>
                  <div style={styles.moduleTitle}>{m.title}</div>
                  <div style={styles.moduleDesc}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            {/* TODO: Link to real checkout */}
            <a
              href="#zapisz-sie"
              style={{
                ...styles.heroBtn,
                display: "inline-block",
                ...(hoveredBtn === "modules-cta" ? {
                  transform: "scale(1.04)",
                  boxShadow: "0 12px 40px rgba(55,202,55,0.50)"
                } : {}),
              }}
              onMouseEnter={() => setHoveredBtn("modules-cta")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              🎯 Chcę, żeby moje dziecko miało dostęp!
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="opinie" style={styles.section}>
        <span style={styles.sectionLabel}>Opinie rodziców</span>
        <h2 style={styles.sectionTitle}>Co mówią rodzice,<br />których dzieci ukończyły kurs?</h2>
        <p style={styles.sectionSubtitle}>
          Ponad 2 400 rodzin zaufało naszemu programowi. Oto, co mówią o efektach.
        </p>
        <div style={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div key={i} style={styles.testimonialCard}>
              <div style={styles.testimonialStars}>{"⭐".repeat(t.stars)}</div>
              <div style={styles.testimonialQuote}>"</div>
              <p style={styles.testimonialText}>{t.text}</p>
              <div style={styles.testimonialName}>{t.name}</div>
              <div style={styles.testimonialRole}>{t.child}</div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div style={{
          background: bgGray,
          borderRadius: 14,
          padding: "28px 32px",
          marginTop: 48,
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 24,
          textAlign: "center",
        }}>
          {[
            { num: "2 400+", label: "rodziców zapisało dzieci" },
            { num: "97%", label: "ocenia kurs jako przydatny" },
            { num: "4.9/5", label: "średnia ocena kursu" },
            { num: "30 dni", label: "gwarancja zwrotu" },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 32,
                fontWeight: 700,
                color: primaryColor,
              }}>{stat.num}</div>
              <div style={{ fontSize: 14, color: grayText }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <hr style={styles.divider} />

      {/* PRICING */}
      <section id="zapisz-sie" style={styles.sectionAlt}>
        <div style={styles.sectionAltInner}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={styles.sectionLabel}>Cennik</span>
            <h2 style={styles.sectionTitle}>Inwestycja w przyszłość<br />Twojego dziecka</h2>
            <p style={{ ...styles.sectionSubtitle, margin: "0 auto" }}>
              Jednorazowa płatność, dożywotni dostęp do materiałów.
            </p>
          </div>
          <div style={styles.pricingCard}>
            <div style={styles.pricingHeader}>
              <span style={styles.pricingBadge}>🔥 Najlepsza oferta</span>
              <div style={styles.pricingName}>Dziecko Sukcesu — Pełny Dostęp</div>
              {/* TODO: Replace with real pricing */}
              <div style={styles.pricingOldPrice}>Wartość: 997 zł</div>
              <div style={styles.pricingPrice}>
                <span style={styles.pricingCurrency}>zł</span>497
              </div>
              <div style={styles.pricingPeriod}>jednorazowa płatność · dożywotni dostęp</div>
            </div>
            <div style={styles.pricingBody}>
              {[
                "8 modułów wideo dla dzieci (2-3h każdy)",
                "Ćwiczenia i karty pracy do każdego modułu",
                "Poradnik dla rodziców (bonus)",
                "Dostęp do prywatnej grupy wsparcia",
                "Certyfikat ukończenia kursu",
                "Dożywotni dostęp do wszystkich materiałów",
                "Aktualizacje programu gratis na zawsze",
              ].map((f, i) => (
                <div key={i} style={styles.pricingFeature}>
                  <span style={styles.pricingCheck}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
              {/* TODO: Replace with real checkout link */}
              <a
                href="#"
                style={{
                  ...styles.pricingBtn,
                  ...(hoveredBtn === "pricing" ? {
                    transform: "scale(1.03)",
                    boxShadow: "0 10px 36px rgba(55,202,55,0.45)"
                  } : {}),
                }}
                onMouseEnter={() => setHoveredBtn("pricing")}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                🚀 Zapisz dziecko teraz!
              </a>
              <div style={styles.pricingGuarantee}>
                <span>🔒</span>
                <span>Bezpieczna płatność SSL · 30 dni gwarancji zwrotu pieniędzy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section style={styles.section}>
        <div style={styles.guaranteeBox}>
          <div style={styles.guaranteeIcon}>🛡️</div>
          <h2 style={styles.guaranteeTitle}>30-dniowa gwarancja zwrotu pieniędzy</h2>
          <p style={styles.guaranteeText}>
            Jesteśmy pewni jakości naszego kursu. Jeśli w ciągu 30 dni stwierdzisz,
            że program nie przynosi efektów, zwrócimy Ci pełną kwotę — bez pytań,
            bez warunków. To nasza obietnica.
          </p>
        </div>
      </section>

      <hr style={styles.divider} />

      {/* LEAD FORM */}
      <section style={styles.formSection}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ ...styles.sectionTitle, color: "#fff" }}>
              Pobierz bezpłatny przewodnik<br />
              <span style={{ color: yellowAccent }}>"7 kroków do pewności siebie dziecka"</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, lineHeight: 1.6 }}>
              Wypełnij formularz i otrzymaj e-book na maila zupełnie za darmo!
            </p>
          </div>
          {submitted ? (
            <div style={{
              ...styles.formCard,
              textAlign: "center",
              padding: "60px 40px",
            }}>
              <div style={{ fontSize: 60, marginBottom: 20 }}>🎉</div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, color: darkBlue, marginBottom: 12 }}>
                Gotowe! Sprawdź swoją skrzynkę
              </h3>
              <p style={{ color: grayText, fontSize: 15, lineHeight: 1.7 }}>
                Za chwilę otrzymasz e-mail z bezpłatnym przewodnikiem.
                Sprawdź też folder SPAM, jeśli wiadomość nie dotarła.
              </p>
            </div>
          ) : (
            <form style={styles.formCard} onSubmit={handleSubmit}>
              <h3 style={styles.formTitle}>Tak, chcę bezpłatny e-book!</h3>
              <p style={styles.formSubtitle}>
                Dołącz do ponad 2 400 rodziców, którzy już pobrali nasz przewodnik.
              </p>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Imię rodzica</label>
                <input
                  type="text"
                  required
                  placeholder="Np. Monika"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={styles.formInput}
                  // TODO: Add onFocus border color change
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Adres e-mail</label>
                <input
                  type="email"
                  required
                  placeholder="twoj@email.pl"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={styles.formInput}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Numer telefonu (opcjonalnie)</label>
                <input
                  type="tel"
                  placeholder="+48 000 000 000"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={styles.formInput}
                />
              </div>
              <button
                type="submit"
                style={{
                  ...styles.formBtn,
                  ...(hoveredBtn === "form" ? {
                    transform: "scale(1.02)",
                    boxShadow: "0 10px 36px rgba(55,202,55,0.45)"
                  } : {}),
                }}
                onMouseEnter={() => setHoveredBtn("form")}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                📬 Wyślij mi bezpłatny e-book!
              </button>
              <p style={styles.formDisclaimer}>
                🔒 Twoje dane są bezpieczne. Nie spamujemy i nie udostępniamy danych osobom trzecim.
                {/* TODO: Add link to privacy policy */}
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={styles.section}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={styles.sectionLabel}>Masz pytania?</span>
          <h2 style={styles.sectionTitle}>Najczęściej zadawane pytania</h2>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={styles.faqItem}>
              <div
                style={styles.faqQuestion}
                onClick={() => setActiveTab(activeTab === i ? -1 : i)}
              >
                <span>{faq.q}</span>
                <span style={{
                  fontSize: 22,
                  color: primaryColor,
                  transition: "transform 0.2s",
                  transform: activeTab === i ? "rotate(45deg)" : "rotate(0)",
                  display: "inline-block",
                }}>+</span>
              </div>
              {activeTab === i && (
                <div style={styles.faqAnswer}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{
        background: `linear-gradient(135deg, ${darkBlue} 0%, #0a4f78 100%)`,
        padding: "70px 20px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(26px, 4vw, 42px)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: 20,
            lineHeight: 1.25,
          }}>
            Daj swojemu dziecku{" "}
            <span style={{ color: yellowAccent }}>najlepszy prezent</span> — wiarę w siebie
          </h2>
          <p style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.85)",
            marginBottom: 36,
            lineHeight: 1.7,
          }}>
            Każdy dzień bez pewności siebie to dzień, w którym Twoje dziecko nie realizuje
            swojego pełnego potencjału. Nie czekaj — zacznij teraz.
          </p>
          {/* TODO: Replace href with real checkout */}
          <a
            href="#zapisz-sie"
            style={{
              ...styles.heroBtn,
              display: "inline-block",
              fontSize: 22,
              padding: "22px 52px",
              ...(hoveredBtn === "final-cta" ? {
                transform: "scale(1.05)",
                boxShadow: "0 14px 44px rgba(55,202,55,0.55)"
              } : {}),
            }}
            onMouseEnter={() => setHoveredBtn("final-cta")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            🚀 Zapisz dziecko na kurs!
          </a>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginTop: 16 }}>
            🔒 30 dni gwarancji zwrotu · Bezpieczna płatność · Dożywotni dostęp
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <span style={styles.footerLogo}>🌟 DzieckoSukcesu</span>
        <p style={{ fontSize: 14, marginBottom: 24, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 24px" }}>
          Pomagamy dzieciom budować pewność siebie i nawyki sukcesu,
          by mogły osiągać swoje marzenia.
        </p>
        <div style={styles.footerLinks}>
          {/* TODO: Add real policy links */}
          <a href="#" style={styles.footerLink}>Polityka prywatności</a>
          <a href="#" style={styles.footerLink}>Regulamin</a>
          <a href="#" style={styles.footerLink}>Kontakt</a>
          <a href="#" style={styles.footerLink}>O nas</a>
        </div>
        <div style={styles.footerCopy}>
          © {new Date().getFullYear()} DzieckoSukcesu · wychowaniezpasja.pl · Wszystkie prawa zastrzeżone.
          {/* TODO: Replace with real company details */}
        </div>
      </footer>

      {/* Sticky bottom CTA on mobile */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: primaryColor,
        padding: "14px 20px",
        textAlign: "center",
        zIndex: 999,
        boxShadow: "0 -4px 20px rgba(0,0,0,0.15)",
        display: "none", // TODO: Show on mobile via media query — use CSS class in index.css
      }} id="sticky-cta">
        <a href="#zapisz-sie" style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: 18,
          textDecoration: "none",
        }}>
          🚀 Zapisz dziecko — tylko 497 zł
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #sticky-cta { display: block !important; }
          nav ul { display: none !important; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        section { animation: fadeInUp 0.5s ease both; }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

export default App;