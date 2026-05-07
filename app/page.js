'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --navy: #1a2e4a;
          --teal: #0d7377;
          --teal-light: #e6f4f4;
          --teal-mid: #14a085;
          --white: #ffffff;
          --off-white: #f8fafb;
          --gray: #6b7a8d;
          --light-border: #e2e8f0;
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; background: var(--white); color: var(--navy); overflow-x: hidden; }
        h1, h2, h3 { font-family: 'Playfair Display', serif; }

        /* NAV */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 40px;
          height: 72px;
          display: flex; align-items: center; justify-content: space-between;
          transition: all 0.3s ease;
          background: ${scrolled ? 'rgba(255,255,255,0.97)' : 'transparent'};
          box-shadow: ${scrolled ? '0 1px 24px rgba(26,46,74,0.08)' : 'none'};
        }
        .nav-logo { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 700; color: var(--navy); text-decoration: none; letter-spacing: -0.02em; }
        .nav-logo span { color: var(--teal); }
        .nav-links { display: flex; gap: 36px; align-items: center; }
        .nav-links a { text-decoration: none; color: var(--navy); font-size: 0.95rem; font-weight: 500; opacity: 0.75; transition: opacity 0.2s; }
        .nav-links a:hover { opacity: 1; }
        .nav-cta {
          background: var(--teal); color: white; padding: 10px 24px;
          border-radius: 8px; font-weight: 600; font-size: 0.9rem;
          text-decoration: none; opacity: 1 !important;
          transition: background 0.2s, transform 0.2s;
        }
        .nav-cta:hover { background: var(--navy) !important; transform: translateY(-1px); }

        /* HERO */
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--navy) 0%, #0f2035 50%, #0a3d4a 100%);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center; padding: 120px 24px 80px;
          position: relative; overflow: hidden;
        }
        .hero::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(13,115,119,0.25) 0%, transparent 70%);
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(13,115,119,0.2); border: 1px solid rgba(13,115,119,0.4);
          color: #7dd8d8; padding: 8px 18px; border-radius: 100px;
          font-size: 0.85rem; font-weight: 500; margin-bottom: 32px;
          position: relative; z-index: 1;
          animation: fadeUp 0.8s ease both;
        }
        .hero-badge::before { content: '🌺'; }
        .hero h1 {
          font-size: clamp(2.8rem, 6vw, 5.2rem); font-weight: 900;
          color: white; line-height: 1.05; letter-spacing: -0.03em;
          max-width: 900px; margin-bottom: 24px;
          position: relative; z-index: 1;
          animation: fadeUp 0.8s 0.1s ease both;
        }
        .hero h1 span { color: #4ecdc4; }
        .hero p {
          font-size: clamp(1.1rem, 2vw, 1.35rem); color: rgba(255,255,255,0.72);
          max-width: 620px; line-height: 1.7; margin-bottom: 48px;
          position: relative; z-index: 1;
          animation: fadeUp 0.8s 0.2s ease both;
        }
        .hero-actions {
          display: flex; gap: 16px; flex-wrap: wrap; justify-content: center;
          position: relative; z-index: 1;
          animation: fadeUp 0.8s 0.3s ease both;
        }
        .btn-primary {
          background: var(--teal); color: white; padding: 16px 36px;
          border-radius: 10px; font-weight: 600; font-size: 1.05rem;
          text-decoration: none; transition: all 0.2s;
          box-shadow: 0 4px 24px rgba(13,115,119,0.4);
        }
        .btn-primary:hover { background: #0a9396; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(13,115,119,0.5); }
        .btn-secondary {
          background: rgba(255,255,255,0.1); color: white; padding: 16px 36px;
          border-radius: 10px; font-weight: 600; font-size: 1.05rem;
          text-decoration: none; border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.2s;
        }
        .btn-secondary:hover { background: rgba(255,255,255,0.18); transform: translateY(-2px); }
        .hero-scroll {
          position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
          color: rgba(255,255,255,0.4); font-size: 0.8rem; text-align: center;
          animation: bounce 2s infinite;
        }
        .hero-scroll::after { content: '↓'; display: block; font-size: 1.2rem; margin-top: 4px; }

        /* STATS BAR */
        .stats-bar {
          background: var(--off-white); border-bottom: 1px solid var(--light-border);
          padding: 32px 40px;
          display: flex; justify-content: center; gap: 80px; flex-wrap: wrap;
        }
        .stat { text-align: center; }
        .stat-num { font-family: 'Playfair Display', serif; font-size: 2.2rem; font-weight: 700; color: var(--navy); line-height: 1; }
        .stat-label { font-size: 0.85rem; color: var(--gray); margin-top: 4px; }

        /* SECTIONS */
        section { padding: 100px 24px; }
        .container { max-width: 1160px; margin: 0 auto; }
        .section-label { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--teal); margin-bottom: 16px; }
        .section-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; color: var(--navy); line-height: 1.15; margin-bottom: 20px; letter-spacing: -0.02em; }
        .section-sub { font-size: 1.1rem; color: var(--gray); line-height: 1.7; max-width: 560px; }

        /* HOW IT WORKS */
        .how-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 32px; margin-top: 64px; }
        .how-card {
          padding: 40px 32px; border-radius: 16px;
          background: var(--off-white); border: 1px solid var(--light-border);
          position: relative; transition: transform 0.2s, box-shadow 0.2s;
        }
        .how-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(26,46,74,0.1); }
        .how-num {
          font-family: 'Playfair Display', serif; font-size: 4rem; font-weight: 900;
          color: var(--teal-light); line-height: 1; margin-bottom: 20px;
          position: absolute; top: 24px; right: 28px;
        }
        .how-icon { font-size: 2rem; margin-bottom: 16px; }
        .how-card h3 { font-size: 1.2rem; font-weight: 700; color: var(--navy); margin-bottom: 10px; }
        .how-card p { font-size: 0.95rem; color: var(--gray); line-height: 1.6; }

        /* VERTICALS */
        .verticals { background: var(--navy); }
        .verticals .section-title { color: white; }
        .verticals .section-label { color: #4ecdc4; }
        .verticals .section-sub { color: rgba(255,255,255,0.6); }
        .vert-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 56px; }
        .vert-card {
          padding: 32px; border-radius: 14px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.2s; cursor: default;
        }
        .vert-card:hover { background: rgba(13,115,119,0.2); border-color: rgba(13,115,119,0.4); transform: translateY(-2px); }
        .vert-icon { font-size: 2.4rem; margin-bottom: 16px; }
        .vert-card h3 { font-size: 1.15rem; font-weight: 700; color: white; margin-bottom: 8px; }
        .vert-card p { font-size: 0.9rem; color: rgba(255,255,255,0.55); line-height: 1.6; }
        .vert-tag {
          display: inline-block; margin-top: 16px;
          background: rgba(13,115,119,0.3); color: #4ecdc4;
          padding: 4px 12px; border-radius: 100px; font-size: 0.78rem; font-weight: 600;
        }

        /* PRICING */
        .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 56px; max-width: 960px; margin-left: auto; margin-right: auto; }
        .price-card {
          padding: 40px 32px; border-radius: 16px;
          border: 2px solid var(--light-border);
          background: white; position: relative; transition: all 0.2s;
        }
        .price-card:hover { border-color: var(--teal); box-shadow: 0 16px 48px rgba(13,115,119,0.12); transform: translateY(-4px); }
        .price-card.featured {
          border-color: var(--teal); background: var(--navy);
          box-shadow: 0 24px 64px rgba(26,46,74,0.2);
        }
        .price-badge {
          position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
          background: var(--teal); color: white; padding: 4px 16px;
          border-radius: 100px; font-size: 0.78rem; font-weight: 700; white-space: nowrap;
        }
        .price-tier { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--teal); margin-bottom: 12px; }
        .price-card.featured .price-tier { color: #4ecdc4; }
        .price-card h3 { font-size: 1.5rem; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
        .price-card.featured h3 { color: white; }
        .price-amount { font-family: 'Playfair Display', serif; font-size: 3rem; font-weight: 900; color: var(--navy); line-height: 1; }
        .price-card.featured .price-amount { color: white; }
        .price-period { font-size: 0.9rem; color: var(--gray); }
        .price-card.featured .price-period { color: rgba(255,255,255,0.5); }
        .price-divider { height: 1px; background: var(--light-border); margin: 28px 0; }
        .price-card.featured .price-divider { background: rgba(255,255,255,0.1); }
        .price-features { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
        .price-features li { font-size: 0.92rem; color: var(--gray); display: flex; gap: 10px; align-items: flex-start; }
        .price-card.featured .price-features li { color: rgba(255,255,255,0.75); }
        .price-features li::before { content: '✓'; color: var(--teal); font-weight: 700; flex-shrink: 0; }
        .price-card.featured .price-features li::before { color: #4ecdc4; }
        .price-btn {
          width: 100%; padding: 14px; border-radius: 10px; font-weight: 600; font-size: 0.95rem;
          text-align: center; text-decoration: none; display: block; transition: all 0.2s;
          background: var(--teal-light); color: var(--teal);
        }
        .price-btn:hover { background: var(--teal); color: white; }
        .price-card.featured .price-btn { background: var(--teal); color: white; }
        .price-card.featured .price-btn:hover { background: #0a9396; }

        /* FOOTER */
        footer {
          background: var(--navy); color: rgba(255,255,255,0.5);
          padding: 60px 40px 40px; text-align: center;
        }
        .footer-logo { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 700; color: white; margin-bottom: 12px; }
        .footer-logo span { color: #4ecdc4; }
        .footer-sub { font-size: 0.9rem; margin-bottom: 32px; }
        .footer-links { display: flex; gap: 32px; justify-content: center; flex-wrap: wrap; margin-bottom: 40px; }
        .footer-links a { color: rgba(255,255,255,0.5); text-decoration: none; font-size: 0.88rem; transition: color 0.2s; }
        .footer-links a:hover { color: white; }
        .footer-divider { height: 1px; background: rgba(255,255,255,0.08); margin-bottom: 28px; }
        .footer-copy { font-size: 0.8rem; }

        /* ANIMATIONS */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(8px); } }

        @media (max-width: 768px) {
          nav { padding: 0 20px; }
          .nav-links { display: none; }
          .stats-bar { gap: 40px; padding: 24px 20px; }
          section { padding: 72px 20px; }
          .hero { padding: 100px 20px 60px; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent', boxShadow: scrolled ? '0 1px 24px rgba(26,46,74,0.08)' : 'none' }}>
        <a href="/" className="nav-logo">Form<span>Buddy</span></a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#verticals">Verticals</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact" className="nav-cta">Get Started</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">Built for Hawaii. Powered by automation.</div>
        <h1>The <span>Operating System</span> for Hawaii Service Businesses</h1>
        <p>Intake forms, workflow automation, and client management — purpose-built for construction, healthcare, tourism, churches, and nonprofits across the islands.</p>
        <div className="hero-actions">
          <a href="#pricing" className="btn-primary">Start Free Trial</a>
          <a href="#how" className="btn-secondary">See How It Works</a>
        </div>
        <div className="hero-scroll">Scroll</div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {[['5', 'Industry Verticals'], ['3', 'Service Tiers'], ['100%', 'Hawaii-Focused'], ['M365', 'Native Integration']].map(([n, l]) => (
          <div className="stat" key={l}>
            <div className="stat-num">{n}</div>
            <div className="stat-label">{l}</div>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <section id="how">
        <div className="container">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">From intake to outcome<br />in four steps</h2>
          <p className="section-sub">FormBuddy handles the paperwork so you can focus on the work. Every submission flows automatically from form to file to follow-up.</p>
          <div className="how-grid">
            {[
              { icon: '📋', num: '01', title: 'Client fills your form', desc: 'Branded intake forms built for your vertical — mobile-friendly, professional, and fast.' },
              { icon: '⚡', num: '02', title: 'Automation kicks in', desc: 'Power Automate routes the submission, logs it to your tracker, and generates a formatted summary.' },
              { icon: '📊', num: '03', title: 'Your dashboard updates', desc: 'Every case, client, and status visible in one place. No manual entry, no missed follow-ups.' },
              { icon: '✅', num: '04', title: 'Deliver and document', desc: 'Close cases with audit trails, email-ready summaries, and export-ready records.' },
            ].map(({ icon, num, title, desc }) => (
              <div className="how-card" key={num}>
                <div className="how-num">{num}</div>
                <div className="how-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section className="verticals" id="verticals">
        <div className="container">
          <div className="section-label">Industry Verticals</div>
          <h2 className="section-title">Built for the businesses<br />that build Hawaii</h2>
          <p className="section-sub">Every vertical gets a purpose-built intake system, automation flow, and dashboard — not a generic template.</p>
          <div className="vert-grid">
            {[
              { icon: '🏗️', title: 'Construction & Trades', desc: 'Job intake, site inspection reports, subcontractor onboarding, and permit documentation.', tag: 'Available Now' },
              { icon: '🏥', title: 'Healthcare & Billing', desc: 'Physician onboarding, patient intake, prior auth workflows, and compliance documentation.', tag: 'Available Now' },
              { icon: '🌺', title: 'Tourism & Hospitality', desc: 'Guest intake, booking requests, incident reports, and vendor onboarding flows.', tag: 'Available Now' },
              { icon: '⛪', title: 'Churches & Faith Orgs', desc: 'Member intake, volunteer onboarding, ministry requests, and event registration.', tag: 'Available Now' },
              { icon: '🤝', title: 'Nonprofits & Community', desc: 'Client intake, service requests, grant documentation, and case management.', tag: 'Available Now' },
            ].map(({ icon, title, desc, tag }) => (
              <div className="vert-card" key={title}>
                <div className="vert-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="vert-tag">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background: 'var(--off-white)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-sub" style={{ margin: '0 auto 0' }}>No hidden fees. No long-term contracts. Cancel anytime.</p>
          <div className="pricing-grid">
            {[
              {
                tier: 'Starter', name: 'Intake', price: '$149', period: '/month',
                features: ['1 intake form', 'Excel auto-logging', 'Email-ready summaries', 'Up to 100 submissions/mo', 'Email support'],
                featured: false
              },
              {
                tier: 'Most Popular', name: 'Professional', price: '$299', period: '/month',
                features: ['Up to 5 forms', 'SharePoint integration', 'Dashboard + analytics', 'Approval routing', 'Up to 500 submissions/mo', 'Priority support'],
                featured: true
              },
              {
                tier: 'Scale', name: 'Enterprise', price: '$599', period: '/month',
                features: ['Unlimited forms', 'Custom automation flows', 'Multi-user access', 'White-label option', 'Unlimited submissions', 'Dedicated onboarding'],
                featured: false
              },
            ].map(({ tier, name, price, period, features, featured }) => (
              <div className={`price-card ${featured ? 'featured' : ''}`} key={name}>
                {featured && <div className="price-badge">Most Popular</div>}
                <div className="price-tier">{tier}</div>
                <h3>{name}</h3>
                <div style={{ marginTop: 16, marginBottom: 4 }}>
                  <span className="price-amount">{price}</span>
                  <span className="price-period">{period}</span>
                </div>
                <div className="price-divider" />
                <ul className="price-features">
                  {features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <a href="#contact" className="price-btn">Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ background: 'linear-gradient(135deg, var(--teal) 0%, #0a5c60 100%)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: 20 }}>Ready to run your business<br />on FormBuddy?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>Join Hawaii service businesses already automating their intake, workflows, and client management.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:hello@formbuddy.co" className="btn-primary" style={{ background: 'white', color: 'var(--teal)' }}>Contact Us</a>
            <a href="#pricing" className="btn-secondary">View Plans</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Form<span>Buddy</span></div>
        <div className="footer-sub">The Operating System for Hawaii Service Businesses</div>
        <div className="footer-links">
          <a href="#how">How It Works</a>
          <a href="#verticals">Verticals</a>
          <a href="#pricing">Pricing</a>
          <a href="mailto:hello@formbuddy.co">Contact</a>
        </div>
        <div className="footer-divider" />
        <div className="footer-copy">© 2026 FormBuddy — A Brownefield Holdings, LLC Product · formbuddy.co</div>
      </footer>
    </>
  )
}
