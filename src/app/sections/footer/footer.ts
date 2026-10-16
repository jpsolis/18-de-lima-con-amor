import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BUSINESS } from '../../core/business.data';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="foot">
      <div class="brand-stripe" aria-hidden="true"></div>
      <div class="container foot-inner">
        <img src="images/logo.png" [alt]="business.name" width="184" height="138" loading="lazy" />
        <div>
          <p>{{ business.kind }} · Gastronomía peruana</p>
          <p>{{ business.address.street }}, {{ business.address.city }}, {{ business.address.country }}</p>
          <p class="small">© {{ year }} {{ business.name }}</p>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .foot {
      background: var(--bg);
      color: var(--muted);
      /* espacio para que el botón flotante no tape el texto */
      padding-bottom: calc(var(--space-9) - var(--space-4));
    }
    .foot-inner {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--space-5);
      padding-top: var(--space-7);
    }
    img { width: auto; height: 72px; }
    p { font-size: 0.9375rem; }
    .small { margin-top: var(--space-2); font-size: 0.875rem; }
  `,
})
export class Footer {
  protected readonly business = BUSINESS;
  protected readonly year = new Date().getFullYear();
}
