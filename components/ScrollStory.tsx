"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/**
 * Scroll-driven storytelling for the home page. Sections stay server components and
 * opt in through data attributes:
 *   data-hero-*        pinned, scrubbed hero sequence
 *   data-split         heading revealed word by word
 *   data-reveal        element fades up
 *   data-stagger       children fade up one after another
 *   data-clip-reveal   image frame wipes open ("up" | "left"); inner [data-clip-img] settles from a zoom
 *   data-pop           badge spins/pops in
 *   data-count         number counts up (keeps any suffix, e.g. "0%")
 *   data-scale-in      block grows into place
 */
export default function ScrollStory() {
  const progress = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Not gated on prefers-reduced-motion: Windows "Animation effects: off" reports reduce,
    // which would silently disable the whole story on many machines.
    mm.add("all", () => {
      /* Reading progress ------------------------------------------------ */
      gsap.fromTo(
        progress.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        },
      );

      /* Hero: intro on load ---------------------------------------------- */
      const hero = document.querySelector<HTMLElement>("[data-hero]");
      if (hero) {
        const q = gsap.utils.selector(hero);
        const title = new SplitText(q("[data-hero-title]"), { type: "chars", mask: "chars" });

        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(q("[data-hero-bg]"), { scale: 1.35, duration: 2.4, ease: "power2.out" }, 0)
          .from(q("[data-hero-badge]"), { y: -24, autoAlpha: 0, duration: 0.9 }, 0.3)
          .from(title.chars, { yPercent: 115, duration: 1.1, stagger: 0.035 }, 0.45)
          .from(q("[data-hero-copy]"), { y: 30, autoAlpha: 0, duration: 1 }, 1.1)
          .from(q("[data-hero-cta] > *"), { y: 30, autoAlpha: 0, duration: 0.9, stagger: 0.12 }, 1.3)
          .from(q("[data-hero-cue]"), { autoAlpha: 0, duration: 0.8 }, 1.7);

        /* Hero: pinned scroll story ------------------------------------- */
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: hero, start: "top top", end: "+=130%", pin: true, scrub: 1 },
          })
          .to(q("[data-hero-bg-scale]"), { scale: 1.3 }, 0)
          .to(q("[data-hero-overlay]"), { opacity: 1 }, 0)
          .to(q("[data-hero-fade]"), { y: -60, autoAlpha: 0, stagger: 0.05, duration: 0.35 }, 0)
          .to(q("[data-hero-left]"), { xPercent: -60, autoAlpha: 0, duration: 0.6 }, 0.1)
          .to(q("[data-hero-right]"), { xPercent: 45, autoAlpha: 0, duration: 0.6 }, 0.1)
          .fromTo(
            q("[data-hero-chapter]"),
            { y: 60, autoAlpha: 0, scale: 0.92 },
            { y: 0, autoAlpha: 1, scale: 1, duration: 0.4 },
            0.55,
          )
          .to(q("[data-hero-chapter-line]"), { scaleX: 1, duration: 0.3 }, 0.75)
          .to(q("[data-hero-chapter]"), { y: -40, autoAlpha: 0, duration: 0.25 }, 1.15);
      }

      /* Sub-page hero: intro, then drifts away as the page scrolls ------- */
      const pageHero = document.querySelector<HTMLElement>("[data-page-hero]");
      if (pageHero) {
        const q = gsap.utils.selector(pageHero);
        const title = new SplitText(q("[data-page-hero-title]"), { type: "words", mask: "words" });

        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(q("[data-page-hero-bg]"), { scale: 1.3, duration: 2.2, ease: "power2.out" }, 0)
          .from(q("[data-page-hero-badge]"), { x: -30, autoAlpha: 0, duration: 0.9 }, 0.25)
          .from(title.words, { yPercent: 115, duration: 1.1, stagger: 0.09 }, 0.4)
          .from(q("[data-page-hero-copy]"), { y: 30, autoAlpha: 0, duration: 1 }, 0.9);

        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: pageHero, start: "top top", end: "bottom top", scrub: true },
          })
          .to(q("[data-page-hero-bg]"), { yPercent: 25 }, 0)
          .to(q("[data-page-hero-content]"), { y: -80, autoAlpha: 0 }, 0);
      }

      /* Headings: word-by-word mask reveal ------------------------------- */
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        SplitText.create(el, {
          type: "words",
          mask: "words",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.words, {
              yPercent: 110,
              duration: 1,
              ease: "power4.out",
              stagger: 0.07,
              scrollTrigger: { trigger: el, start: "top 85%" },
            }),
        });
      });

      /* Single elements fade up ------------------------------------------ */
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 50,
          autoAlpha: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      /* Groups: children cascade ----------------------------------------- */
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
        // Cards carry CSS hover transitions that would fight the tween; park them until done
        gsap.set(el.children, { transition: "none" });
        gsap.from(el.children, {
          y: 70,
          autoAlpha: 0,
          rotateX: -12,
          transformOrigin: "50% 100%",
          duration: 1,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: { trigger: el, start: "top 82%" },
          onComplete: () => gsap.set(el.children, { clearProps: "all" }),
        });
      });

      /* Image frames wipe open, the photo settles from a slow zoom ------- */
      gsap.utils.toArray<HTMLElement>("[data-clip-reveal]").forEach((el) => {
        const from = el.dataset.clipReveal === "left" ? "inset(0% 100% 0% 0%)" : "inset(100% 0% 0% 0%)";
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 80%" } });
        tl.fromTo(
          el,
          { clipPath: from },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" },
        ).from(el.querySelector("[data-clip-img]"), { scale: 1.4, duration: 1.8, ease: "power3.out" }, 0.2);

        // Gentle drift while the frame travels through the viewport
        gsap.fromTo(
          el,
          { y: 40 },
          {
            y: -40,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      /* Badges pop ------------------------------------------------------- */
      gsap.utils.toArray<HTMLElement>("[data-pop]").forEach((el) => {
        gsap.from(el, {
          scale: 0,
          rotate: -90,
          duration: 1,
          ease: "back.out(1.8)",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      /* Stats count up --------------------------------------------------- */
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count ?? "0");
        const suffix = el.textContent?.replace(/[\d.]/g, "") ?? "";
        const counter = { v: 0 };
        gsap.to(counter, {
          v: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => {
            el.textContent = `${Math.round(counter.v)}${suffix}`;
          },
        });
      });

      /* Finale grows into place ------------------------------------------ */
      gsap.utils.toArray<HTMLElement>("[data-scale-in]").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.86, borderRadius: "3rem" },
          {
            scale: 1,
            borderRadius: "1rem",
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "center center", scrub: 1 },
          },
        );
      });
    });

    /* Timeline: pinned chapter-by-chapter journey (desktop) --------------- */
    mm.add("(min-width: 1024px)", () => {
      const section = document.querySelector<HTMLElement>("[data-timeline]");
      if (!section) return;
      const q = gsap.utils.selector(section);
      const items = q("[data-timeline-item]");
      const dots = q("[data-timeline-dot]");
      const images = q("[data-timeline-image]");

      gsap.set(images, { autoAlpha: 1, clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set(images[0], { clipPath: "inset(0% 0% 0% 0%)" });
      gsap.set(items.slice(1), { opacity: 0.25 });
      gsap.set(dots[0], { scale: 1.6, "--tw-ring-color": "rgba(198,161,91,0.25)" });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "center center+=40", // header is 80px tall
          end: `+=${items.length * 70}%`,
          pin: true,
          scrub: 1,
          // Created after the reveals below it; measure first so their offsets include the pin
          refreshPriority: 1,
        },
      });
      tl.fromTo(q("[data-timeline-progress]"), { scaleY: 0 }, { scaleY: 1, duration: items.length }, 0);

      items.forEach((_, i) => {
        if (i === 0) return;
        tl.to(items[i], { opacity: 1, duration: 0.4 }, i)
          .to(dots[i - 1], { scale: 1, "--tw-ring-color": "rgba(198,161,91,0)", duration: 0.3 }, i)
          .to(dots[i], { scale: 1.6, "--tw-ring-color": "rgba(198,161,91,0.25)", duration: 0.3 }, i)
          .to(images[i], { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "power2.inOut" }, i - 0.2)
          .from(images[i].querySelector("img"), { scale: 1.3, duration: 0.9 }, i - 0.2);
      });
    });

    /* Timeline on small screens: no pin, milestones simply cascade -------- */
    mm.add("(max-width: 1023px)", () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-timeline-item]");
      items.forEach((item) => {
        gsap.from(item, {
          x: -30,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 88%" },
        });
      });
    });
  });

  return (
    <div
      ref={progress}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[60] h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-bright to-gold-light"
    />
  );
}
