// Replay helpers for the SMIL line icons in components/Icon.astro.
// Mirrors the approach used on 4am-home: the SVG document timeline is the
// animation, so "replay" is just rewinding it.

export const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const replay = (svg: SVGSVGElement) => {
  svg.setCurrentTime(0);
  svg.unpauseAnimations();
};

/** Freeze at frame 0 (nothing drawn yet). */
export const hold = (svg: SVGSVGElement) => {
  svg.pauseAnimations();
  svg.setCurrentTime(0);
};

/** Jump to the final frame (fully drawn). */
export const finish = (svg: SVGSVGElement) => {
  svg.pauseAnimations();
  svg.setCurrentTime(60);
};

/**
 * Wire up `svg[data-md]` triggers inside `root`.
 *   hover  → replay when the closest a / button / [data-md-scope] is hovered
 *   inview → hold, then draw once when the scope scrolls into view
 *            (optional `data-md-delay` in ms, e.g. to wait for a fade-in)
 * Returns a cleanup function; pass an AbortSignal to tie it to a page lifecycle.
 */
export function initLineMd(root: ParentNode = document, signal?: AbortSignal) {
  const icons = Array.from(root.querySelectorAll<SVGSVGElement>("svg[data-md]"));
  if (!icons.length) return () => {};

  if (reducedMotion()) {
    icons.forEach(finish);
    return () => {};
  }

  const timers = new Set<number>();
  const observers: IntersectionObserver[] = [];

  for (const svg of icons) {
    const modes = (svg.dataset.md ?? "").split(/\s+/);
    const scope =
      svg.closest<HTMLElement>("[data-md-scope]") ?? svg.closest<HTMLElement>("a,button,.group") ?? svg.parentElement;

    if (modes.includes("hover") && scope) {
      scope.addEventListener("pointerenter", () => replay(svg), { signal });
    }

    if (modes.includes("inview")) {
      hold(svg);
      const delay = Number(svg.dataset.mdDelay ?? 0);
      const target = scope ?? svg;
      if (!("IntersectionObserver" in window)) {
        replay(svg);
        continue;
      }
      const io = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          io.disconnect();
          if (delay > 0) {
            const id = window.setTimeout(() => replay(svg), delay);
            timers.add(id);
          } else {
            replay(svg);
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
      );
      io.observe(target);
      observers.push(io);
    }
  }

  const cleanup = () => {
    timers.forEach((id) => window.clearTimeout(id));
    observers.forEach((io) => io.disconnect());
  };
  signal?.addEventListener("abort", cleanup, { once: true });
  return cleanup;
}
