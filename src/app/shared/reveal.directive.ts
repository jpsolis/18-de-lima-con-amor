import { Directive, ElementRef, OnDestroy, afterNextRender, inject, input } from '@angular/core';

/**
 * Revela el elemento al entrar en pantalla (fade + translateY, solo transform/opacity).
 * Solo actúa en el navegador: el HTML prerenderizado se ve completo aunque no cargue JS.
 * Con prefers-reduced-motion o sin IntersectionObserver no se anima.
 * Los estilos `.reveal` / `.is-visible` viven en styles.css.
 */
@Directive({
  selector: '[appReveal]',
  host: { '[style.--reveal-delay]': 'delay() + "ms"' },
})
export class Reveal implements OnDestroy {
  /** Retardo en ms, para escalonar tarjetas (40–80 ms por elemento). */
  readonly delay = input(0, { alias: 'appReveal', transform: (v: number | string) => Number(v) || 0 });

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced || typeof IntersectionObserver === 'undefined') return;

      // Lo que ya está en pantalla al cargar no se oculta (evita parpadeo tras la hidratación).
      const rect = this.el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) return;

      this.el.classList.add('reveal');
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            this.el.classList.add('is-visible');
            this.observer?.disconnect();
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
      );
      this.observer.observe(this.el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
