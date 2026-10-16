import { ChangeDetectionStrategy, Component } from '@angular/core';
import { whatsappLink } from '../../core/whatsapp';
import { Icon } from '../../shared/icon';

/** Botón flotante de WhatsApp, visible en toda la página, con el mensaje ya escrito. */
@Component({
  selector: 'app-whatsapp-fab',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      class="fab"
      [href]="wa"
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp (se abre en una pestaña nueva)"
    >
      <app-icon name="whatsapp" [size]="30" />
      <span class="label" aria-hidden="true">¿Consultas? Escríbenos</span>
    </a>
  `,
  styles: `
    :host { display: contents; }
    .fab {
      position: fixed;
      right: max(var(--space-4), env(safe-area-inset-right));
      bottom: max(var(--space-4), env(safe-area-inset-bottom));
      z-index: var(--z-fab);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-3);
      min-width: 62px;
      height: 62px;
      padding: 0 var(--space-4);
      border-radius: 999px;
      background: var(--wa);
      color: var(--on-wa);
      font-weight: 700;
      text-decoration: none;
      box-shadow: var(--shadow-fab);
      transition: transform var(--dur-fast) var(--ease-out), background-color var(--dur-fast);
    }
    .fab:hover { background: var(--wa-hover); transform: translateY(-2px); }
    .fab:active { transform: scale(0.97); }
    .fab::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      border: 2px solid var(--wa);
      animation: ring 3.2s ease-out infinite;
      pointer-events: none;
    }
    .label { display: none; white-space: nowrap; }
    @media (min-width: 768px) {
      .label { display: inline; }
      .fab { padding: 0 var(--space-6) 0 var(--space-4); }
    }
    @keyframes ring {
      0% { transform: scale(1); opacity: 0.7; }
      70%, 100% { transform: scale(1.3); opacity: 0; }
    }
    @media (prefers-reduced-motion: reduce) { .fab::after { display: none; } }
  `,
})
export class WhatsappFab {
  protected readonly wa = whatsappLink();
}
