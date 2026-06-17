'use client';

import { portfolioSchema } from './schema';
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioItems } from '../data/portfolio';
import Image from 'next/image';
import Script from 'next/script';

const FLIP_OPEN = { duration: 820, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'both' };
const FLIP_CLOSE = { duration: 470, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'both' };
const PANEL_DELAY = 380; // panel reveal after the photo is most of the way home
const NAV_PAUSE = 180;   // hide → swap → re-show, so the stagger replays

export default function PortfolioClient() {
  const jsonLd = portfolioSchema;
  const projects = portfolioItems;
  const total = String(projects.length).padStart(2, '0');

  const [open, setOpen] = useState(null);       // index | null
  const [showPanel, setShowPanel] = useState(false);
  const [closing, setClosing] = useState(false);
  const [navKey, setNavKey] = useState(0);       // bump to replay the stagger

  const fromRectRef = useRef(null);   // clicked tile's bounds (the FLIP "from")
  const slotRef = useRef(null);       // the flying image element (the FLIP target)
  const animRef = useRef(null);       // handle to the in-flight WAA animation
  const shouldFlipRef = useRef(false);
  const panelTimer = useRef(null);
  const navTimer = useRef(null);
  const closeTimer = useRef(null);
  const touchStart = useRef(null);

  const reduced = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 767px)').matches;

  const current = open != null ? projects[open] : null;

  function openItem(index, e) {
    fromRectRef.current = e.currentTarget.getBoundingClientRect();
    shouldFlipRef.current = true;
    document.body.style.overflow = 'hidden';
    setClosing(false);
    setShowPanel(false);
    setNavKey((k) => k + 1);
    setOpen(index);
  }

  // Run (or skip) the open FLIP after the lightbox commits to the DOM. Only on
  // a fresh open — navigation just updates the image, it does not re-FLIP.
  useLayoutEffect(() => {
    if (open == null || !shouldFlipRef.current) return;
    shouldFlipRef.current = false;
    const slot = slotRef.current;
    const from = fromRectRef.current;
    if (!slot || !from || reduced()) {
      setShowPanel(true);
      return;
    }
    if (animRef.current) animRef.current.cancel();
    slot.style.transformOrigin = 'top left';
    const to = slot.getBoundingClientRect();
    const sx = from.width / to.width;
    const sy = from.height / to.height;
    const tx = from.left - to.left;
    const ty = from.top - to.top;
    const endRadius = isMobile() ? '0px' : '8px 0 0 8px';
    // WAA, not a CSS transition: in a re-rendering component, style
    // reconciliation would clobber an in-flight inline transition and freeze
    // the transform mid-flight. element.animate() runs off the style object.
    animRef.current = slot.animate(
      [
        { transform: `translate(${tx}px, ${ty}px) scale(${sx}, ${sy})`, borderRadius: '5px' },
        { transform: 'none', borderRadius: endRadius },
      ],
      FLIP_OPEN
    );
    clearTimeout(panelTimer.current);
    panelTimer.current = setTimeout(() => setShowPanel(true), reduced() ? 0 : PANEL_DELAY);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function step(dir) {
    if (open == null) return;
    const n = (open + dir + projects.length) % projects.length;
    setShowPanel(false);
    clearTimeout(navTimer.current);
    navTimer.current = setTimeout(() => {
      setOpen(n);
      setNavKey((k) => k + 1);
      setShowPanel(true);
    }, reduced() ? 0 : NAV_PAUSE);
  }

  function close() {
    const slot = slotRef.current;
    const from = fromRectRef.current;
    setShowPanel(false);
    setClosing(true);
    if (slot && from && !reduced()) {
      if (animRef.current) animRef.current.cancel();
      slot.style.transformOrigin = 'top left';
      const to = slot.getBoundingClientRect();
      const sx = from.width / to.width;
      const sy = from.height / to.height;
      const tx = from.left - to.left;
      const ty = from.top - to.top;
      const startRadius = isMobile() ? '0px' : '8px 0 0 8px';
      animRef.current = slot.animate(
        [
          { transform: 'none', borderRadius: startRadius },
          { transform: `translate(${tx}px, ${ty}px) scale(${sx}, ${sy})`, borderRadius: '5px' },
        ],
        FLIP_CLOSE
      );
    }
    document.body.style.overflow = '';
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      if (animRef.current) animRef.current.cancel();
      setOpen(null);
      setClosing(false);
    }, reduced() ? 180 : FLIP_CLOSE.duration);
  }

  // Keyboard: Esc closes, ←/→ navigate — only while open.
  useEffect(() => {
    if (open == null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Unmount safety: restore scroll, cancel anim + timers.
  useEffect(
    () => () => {
      document.body.style.overflow = '';
      if (animRef.current) animRef.current.cancel();
      clearTimeout(panelTimer.current);
      clearTimeout(navTimer.current);
      clearTimeout(closeTimer.current);
    },
    []
  );

  // Touch: horizontal swipe = prev/next, swipe down = close.
  function onTouchStart(e) {
    const t = e.changedTouches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }
  function onTouchEnd(e) {
    const s = touchStart.current;
    if (!s) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - s.x;
    const dy = t.clientY - s.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 45) step(dx < 0 ? 1 : -1);
    else if (dy > 70) close();
    touchStart.current = null;
  }

  const rise = (delay) => ({
    animation: `gtRise .7s cubic-bezier(.16,1,.3,1) both`,
    animationDelay: delay,
  });

  const navBtnBase =
    'absolute top-1/2 -translate-y-1/2 z-[3] hidden md:flex items-center justify-center ' +
    'w-[52px] h-[52px] rounded-full text-cloud text-[26px] leading-none font-serif cursor-pointer ' +
    'border border-cloud/30 bg-cloud/5 backdrop-blur-[4px] transition-colors duration-200 ' +
    'hover:bg-cloud/[.16] hover:border-cloud/50';

  return (
    <div className="min-h-screen bg-paper">
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="px-4 sm:px-10 pt-20 pb-[110px]">
        {/* ===== Heading ===== */}
        <motion.div
          initial={{ y: -24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[680px] mx-auto text-center mb-14"
        >
          <p className="eyebrow mb-5">Selected Work</p>
          <h1 className="font-serif text-ink text-5xl md:text-[54px] leading-none tracking-[-.015em]">
            Our Portfolio
          </h1>
          <p className="text-base leading-[1.75] font-light text-[#3a3c33] mt-[22px]">
            Explore our garden maintenance, drip irrigation systems, Japanese maple installations,
            native plantings, and property enhancements across metro Atlanta.{' '}
            <span className="text-stone">Select any piece to view it closer.</span>
          </p>
        </motion.div>

        {/* ===== Grid ===== */}
        <div className="max-w-[1120px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {projects.map((item, index) => {
            // First row (lg = 4 cols) is above the fold and holds the LCP
            // candidate: don't fade those from opacity:0 (it stalls the LCP
            // timer) and load their images eagerly.
            const isAboveFold = index < 4;
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={(e) => openItem(index, e)}
                initial={isAboveFold ? { scale: 0.97 } : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.05 }}
                aria-label={`Open ${item.title} — ${item.category}`}
                className="group relative block w-full text-left aspect-[4/5] rounded-[5px] overflow-hidden cursor-pointer
                           transition-shadow duration-300 hover:shadow-[0_24px_50px_-18px_rgba(20,22,15,.45)]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={75}
                  priority={isAboveFold}
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105"
                />
                {/* bottom-up scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,20,12,.62)] via-[rgba(18,20,12,.08)] to-transparent" />
                {/* always-visible tag + title */}
                <div className="absolute left-[18px] right-[18px] bottom-4 text-cloud">
                  <div className="text-[9.5px] font-semibold leading-none tracking-[.2em] uppercase text-cloud/[.78] mb-2">
                    {item.category}
                  </div>
                  <div className="font-serif text-[19px] leading-[1.12] line-clamp-2">{item.title}</div>
                </div>
                {/* + glyph */}
                <span className="absolute top-3 right-3 w-[30px] h-[30px] rounded-full border border-cloud/[.55] flex items-center justify-center text-cloud text-[15px] opacity-[.85]">
                  +
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* ===== CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-serif text-forest-green mb-8">
            Ready for Your Gardening, Maintenance, or Irrigation Project?
          </h2>
          <a href="/contact" className="btn-primary">
            Start Your Project
          </a>
        </motion.div>
      </div>

      {/* ===== Lightbox (mounts on open only) ===== */}
      {open != null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current ? `${current.title} — project detail` : 'Project detail'}
          className="fixed inset-0 z-[9999] flex items-stretch md:items-center justify-center p-0 md:p-7"
        >
          {/* backdrop */}
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="gt-backdrop absolute inset-0 cursor-default"
            style={{
              opacity: closing ? 0 : 1,
              transition: 'opacity .5s ease',
              animation: closing ? 'none' : 'gtFade .55s ease both',
            }}
          />

          {/* edge prev / next (desktop) */}
          <button type="button" aria-label="Previous project" onClick={() => step(-1)} className={`${navBtnBase} left-6`}>
            ‹
          </button>
          <button type="button" aria-label="Next project" onClick={() => step(1)} className={`${navBtnBase} right-6`}>
            ›
          </button>

          {/* plate */}
          <div className="relative z-[2] flex flex-col md:flex-row w-full md:w-[min(92vw,1140px)] h-full md:h-[min(82vh,720px)]">
            {/* image side — the flying element (transform driven by WAA) */}
            <div
              ref={slotRef}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              className="relative overflow-hidden grow-0 shrink-0 basis-[62%] md:basis-[58%]
                         shadow-[0_60px_130px_-28px_rgba(18,20,12,.6)]"
              style={{ borderRadius: '8px 0 0 8px', willChange: 'transform', background: '#cdd4bd' }}
            >
              {/* ken-burns fill layer — keyed by index so it replays on nav.
                  Must NOT share a transform with the FLIP element above. */}
              <div key={`ken-${open}`} className="gt-ken absolute inset-0" style={{ animation: 'gtKen 9s cubic-bezier(.2,.7,.2,1) both' }}>
                {current && (
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 58vw"
                    quality={75}
                    className="object-cover"
                  />
                )}
              </div>
              {/* depth overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(120% 90% at 30% 20%, rgba(255,255,255,.16), transparent 55%), linear-gradient(to top, rgba(18,20,12,.34), transparent 42%)',
                }}
              />
              {/* close */}
              <button
                type="button"
                aria-label="Close"
                onClick={close}
                className="absolute top-[18px] right-[18px] w-11 h-11 md:w-[38px] md:h-[38px] rounded-full flex items-center justify-center
                           text-cloud text-[17px] leading-none cursor-pointer border border-cloud/40 bg-[rgba(18,20,12,.32)] backdrop-blur-[6px]
                           transition-colors duration-200 hover:bg-[rgba(18,20,12,.55)]"
              >
                ✕
              </button>
            </div>

            {/* caption panel */}
            <div
              data-show={showPanel ? 'true' : 'false'}
              className="gt-panel relative overflow-hidden grow-0 shrink-0 basis-[38%] md:basis-[42%] bg-cloud
                         rounded-t-[16px] md:rounded-t-none md:rounded-r-[8px] p-7 md:py-[56px] md:px-[52px]
                         shadow-[0_-20px_60px_-20px_rgba(18,20,12,.4)] md:shadow-[0_60px_130px_-28px_rgba(18,20,12,.6)]"
            >
              {showPanel && current && (
                <div key={`cap-${navKey}`} className="flex flex-col h-full justify-center">
                  {/* header row */}
                  <div className="gt-rise flex justify-between items-center mb-[30px]" style={rise('0s')}>
                    <span className="text-[11px] font-semibold leading-none tracking-[.2em] uppercase text-moss">
                      {current.category}
                    </span>
                    <span className="flex items-center gap-3">
                      {/* mobile-only inline nav */}
                      <span className="flex md:hidden items-center gap-2">
                        <button type="button" aria-label="Previous project" onClick={() => step(-1)}
                          className="w-11 h-11 -my-2 flex items-center justify-center text-forest text-[22px] font-serif leading-none">‹</button>
                        <button type="button" aria-label="Next project" onClick={() => step(1)}
                          className="w-11 h-11 -my-2 flex items-center justify-center text-forest text-[22px] font-serif leading-none">›</button>
                      </span>
                      <span className="text-[12px] font-medium leading-none tracking-[.14em] text-[#9b988b]">
                        {String(open + 1).padStart(2, '0')} <span className="text-[#ccc8bb]">/ {total}</span>
                      </span>
                    </span>
                  </div>

                  {/* title */}
                  <h2
                    className="gt-rise font-serif text-ink text-[28px] md:text-[38px] leading-[1.06] tracking-[-.01em] m-0"
                    style={rise('.08s')}
                  >
                    {current.title}
                  </h2>

                  {/* hairline */}
                  <div
                    className="gt-line h-px bg-[#D8D2C5] my-[26px] origin-left"
                    style={{ animation: 'gtLine .8s cubic-bezier(.16,1,.3,1) both', animationDelay: '.18s' }}
                  />

                  {/* body */}
                  <p
                    className="gt-rise text-[14.5px] md:text-[15.5px] leading-[1.8] font-light text-[#3a3c33] m-0"
                    style={rise('.24s')}
                  >
                    {current.description}
                  </p>

                  {/* meta row */}
                  <div className="gt-rise flex items-center gap-[22px] mt-10" style={rise('.34s')}>
                    <span className="flex items-center gap-[9px] text-[13px] font-medium leading-none text-moss">
                      <span className="w-[6px] h-[6px] rounded-full bg-moss" />
                      {current.location}
                    </span>
                    <span className="w-px h-[14px] bg-[#D8D2C5]" />
                    <a
                      href="/contact"
                      className="text-[12px] font-semibold leading-none tracking-[.06em] uppercase text-forest hover:text-moss transition-colors"
                    >
                      Contact us today →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
