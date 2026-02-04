"use client";

import { useEffect } from "react";

const animateCounts = (element: HTMLElement) => {
  const target = Number(element.dataset.target ?? "0");
  const suffix = element.dataset.suffix ?? "";
  let current = 0;
  const step = Math.max(1, Math.floor(target / 60));

  const tick = () => {
    current = Math.min(target, current + step);
    element.textContent = `${current.toLocaleString()}${suffix}`;
    if (current < target) {
      requestAnimationFrame(tick);
    }
  };

  tick();
};

export default function MotionProvider() {
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
    const countElements = document.querySelectorAll<HTMLElement>("[data-count]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((element) => observer.observe(element));

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            animateCounts(element);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    countElements.forEach((element) => countObserver.observe(element));

    const magneticItems = document.querySelectorAll<HTMLElement>("[data-magnetic]");
    const parallaxItems = document.querySelectorAll<HTMLElement>("[data-parallax]");

    const handleMagneticMove = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const relX = event.clientX - rect.left - rect.width / 2;
      const relY = event.clientY - rect.top - rect.height / 2;
      target.style.transform = `translate(${relX * 0.08}px, ${relY * 0.08}px)`;
    };

    const handleMagneticLeave = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      target.style.transform = "translate(0, 0)";
    };

    magneticItems.forEach((item) => {
      item.addEventListener("mousemove", handleMagneticMove);
      item.addEventListener("mouseleave", handleMagneticLeave);
    });

    const handleParallax = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (event.clientX / innerWidth - 0.5) * 20;
      const offsetY = (event.clientY / innerHeight - 0.5) * 20;
      parallaxItems.forEach((item) => {
        item.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    window.addEventListener("mousemove", handleParallax);

    return () => {
      observer.disconnect();
      countObserver.disconnect();
      magneticItems.forEach((item) => {
        item.removeEventListener("mousemove", handleMagneticMove);
        item.removeEventListener("mouseleave", handleMagneticLeave);
      });
      window.removeEventListener("mousemove", handleParallax);
    };
  }, []);

  return null;
}
