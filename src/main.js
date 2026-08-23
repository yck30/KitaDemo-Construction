import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

gsap.registerPlugin(ScrollTrigger);

let lenis = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.11 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* Split section headings into line spans for masked reveals */
document.querySelectorAll(".split-lines").forEach((el) => {
  el.innerHTML = el.textContent
    .trim()
    .split("\n")
    .map((l) => l.trim())
    .join(" ")
    .split(" ")
    .map((w) => `<span class="w"><span class="wi">${w}</span></span>`)
    .join(" ");
  el.querySelectorAll(".w").forEach((w) => {
    w.style.display = "inline-block";
    w.style.overflow = "hidden";
    w.style.verticalAlign = "bottom";
  });
});

if (!reduced) {
  /* Hero on-load choreography */
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  
  tl.from(".nav", { opacity: 0, y: -20, duration: 0.8 })
    .from(".hero__badge", { opacity: 0, y: 20, duration: 0.8 }, 0.15)
    .from(".hero__title .wi", { yPercent: 115, duration: 1.1, stagger: 0.035 }, 0.25)
    .from(".hero__sub", { opacity: 0, y: 20, duration: 0.8 }, 0.5)
    .from(".hero__ctas", { opacity: 0, y: 20, duration: 0.8 }, 0.7);

  /* Generic image parallax (scale settle) */
  document.querySelectorAll(".parallax-img").forEach((img) => {
    gsap.fromTo(
      img,
      { scale: 1.18, yPercent: -6 },
      {
        scale: 1,
        yPercent: 0,
        ease: "none",
        scrollTrigger: { trigger: img, start: "top 95%", end: "top 20%", scrub: true },
      }
    );
  });

  const directional = (el, make, start = "top 88%") => {
    ScrollTrigger.create({
      trigger: el,
      start,
      onEnter: () => make(1),
      onEnterBack: () => make(-1),
    });
  };

  /* Masked word reveals for big headings */
  document.querySelectorAll(".split-lines:not(.hero__title)").forEach((el) => {
    const words = el.querySelectorAll(".wi");
    words.forEach((w) => (w.style.display = "inline-block"));
    directional(el, (dir) => {
      gsap.fromTo(
        words,
        { yPercent: 115 * dir },
        { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.035, overwrite: "auto" }
      );
    }, "top 85%");
  });

  /* Stagger reveals for metrics */
  directional(".metrics__grid", (dir) => {
    gsap.fromTo(
      ".metric",
      { opacity: 0, y: 30 * dir },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", overwrite: "auto" }
    );
  }, "top 90%");

  /* Stagger reveals for case cards */
  directional(".cases__grid", (dir) => {
    gsap.fromTo(
      ".case-card",
      { opacity: 0, y: 40 * dir },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", overwrite: "auto" }
    );
  }, "top 85%");

  /* Stagger reveals for feature items */
  directional(".features__grid", (dir) => {
    gsap.fromTo(
      ".feature-item",
      { opacity: 0, y: 40 * dir },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", overwrite: "auto" }
    );
  }, "top 85%");

  /* Stagger reveals for on-site footage cards */
  directional(".footage-showcase", (dir) => {
    gsap.fromTo(
      ".footage-card",
      { opacity: 0, y: 35 * dir },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", overwrite: "auto" }
    );
  }, "top 85%");

  /* Reveal for credentials content */
  directional(".credentials__container", (dir) => {
    gsap.fromTo(
      ".credentials__content, .dl-box",
      { opacity: 0, y: 30 * dir },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", overwrite: "auto" }
    );
  }, "top 85%");

  /* Form items stagger */
  directional(".rfp__container", (dir) => {
    gsap.fromTo(
      ".rfp__header",
      { opacity: 0, y: 30 * dir },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", overwrite: "auto" }
    );
    gsap.fromTo(
      ".field, .rfp__submit",
      { opacity: 0, y: 20 * dir },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power3.out", overwrite: "auto", delay: 0.2 }
    );
  }, "top 85%");

  /* KitaBuild Signature section reveal */
  directional(".kitabuild-signature", (dir) => {
    gsap.fromTo(
      ".kitabuild-signature__left, .kitabuild-signature__stats, .kitabuild-signature__actions",
      { opacity: 0, y: 30 * dir },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", overwrite: "auto" }
    );
  }, "top 90%");
}

/* ==========================================================================
   INTERACTIVE TECH SPECS MODAL LOGIC
   ========================================================================== */
const specsModal = document.getElementById("specsModal");
const specsBackdrop = document.getElementById("specsModalBackdrop");
const closeSpecsBtn = document.getElementById("closeSpecsBtn");
const closeSpecsBtn2 = document.getElementById("closeSpecsBtn2");
const specTriggers = [
  document.getElementById("openSpecsBtn2"),
  document.getElementById("navSpecsTrigger"),
].filter(Boolean);

// Open specs drawer modal
function openModal() {
  if (!specsModal) return;
  specsModal.removeAttribute("hidden");
  document.body.style.overflow = "hidden";
  if (lenis) lenis.stop();
  closeSpecsBtn?.focus();
}

// Close specs drawer modal
function closeModal() {
  if (!specsModal) return;
  specsModal.setAttribute("hidden", "");
  document.body.style.overflow = "";
  if (lenis) lenis.start();
}

specTriggers.forEach((btn) => {
  btn.addEventListener("click", () => {
    openModal();
  });
});

specsBackdrop?.addEventListener("click", closeModal);
closeSpecsBtn?.addEventListener("click", closeModal);
closeSpecsBtn2?.addEventListener("click", closeModal);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && specsModal && !specsModal.hasAttribute("hidden")) {
    closeModal();
  }
});

/* Illustrative Demo RFP Form Simulation */
const dummySubmitBtn = document.getElementById("dummyRfpSubmitBtn");
const rfpDemoAlert = document.getElementById("rfpDemoAlert");

dummySubmitBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  if (!dummySubmitBtn) return;
  
  const originalText = dummySubmitBtn.textContent;
  dummySubmitBtn.disabled = true;
  dummySubmitBtn.textContent = "Calculating BOQ Parameters...";
  
  setTimeout(() => {
    dummySubmitBtn.textContent = "✓ BOQ Simulation Generated (Demo)";
    dummySubmitBtn.style.background = "var(--emerald)";
    rfpDemoAlert?.removeAttribute("hidden");
    
    setTimeout(() => {
      dummySubmitBtn.disabled = false;
      dummySubmitBtn.textContent = originalText;
      dummySubmitBtn.style.background = "";
    }, 4500);
  }, 800);
});

window.__ready = true;

