'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

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
          --navy: #1a2e4a; --teal: #0d7377; --teal-light: #e6f4f4;
          --white: #ffffff; --off-white: #f8fafb; --gray: #6b7a8d; --light-border: #e2e8f0;
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; background: var(--white); color: var(--navy); overflow-x: hidden; }
        h1, h2, h3 { font-family: 'Playfair Display', serif; }
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 0 40px; height: 72px; display: flex; align-items: center; justify-content: space-between; transition: all 0.3s ease; }
        .nav-logo { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 700; color: var(--navy); text-decoration: none; }
        .nav-logo span { color: var(--teal); }
        .nav-links { display: flex; gap: 36px; align-items: center; }
        .nav-links a { text-decoration: none; color: var(--navy); font-size: 0.95rem; font-weight: 500; opacity: 0.75; transition: opacity 0.2s; }
        .nav-links a:hover { opacity: 1; }
        .nav-cta { background: var(--teal); color: white !important; padding: 10px 24px; border-radius: 8px; font-weight: 600; opacity: 1 !important; }
        .hero { min-height: 100vh; background: linear-gradient(135deg, #1a2e4a 0%, #0f2035 50%, #0a3d4a 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 120px 24px 80px; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(13,115,119,0.25) 0%, transparent 70%); }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(13,115,119,0.2); border: 1px solid rgba(13,115,119,0.4); color: #7dd8d8; padding: 8px 18px; border-radius: 100px; font-size: 0.85rem; font-weight: 500; margin-bottom: 32px; position: relative; z-index: 1; animation: fadeUp 0.8s ease both; }
        .hero h1 { font-size: clamp(2.8rem, 6vw, 5.2rem); font-weight: 900; color: white; line-height: 1.05; letter-spacing: -0.03em; max-width: 900px; margin-bottom: 24px; position: relative; z-index: 1; animation: fadeUp 0.8s 0.1s ease both; }
        .hero h1 span { color: #4ecdc4; }
        .hero p { font-size: clamp(1.1rem, 2vw, 1.35rem); color: rgba(255,255,255,0.72); max-width: 620px; line-height: 1.7; margin-bottom: 48px; position: relative; z-index: 1; animation: fadeUp 0.8s 0.2s ease both; }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; position: relative; z-index: 1; animation: fadeUp 0.8s 0.3s ease both; }
        .btn-primary { background: var(--teal); color: white; padding: 16px 36px; border-radius: 10px; font-weight: 600; font-size:
