import { ChangeDetectionStrategy, Component, afterNextRender, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BUSINESS } from '../../core/business.data';
import { whatsappLink } from '../../core/whatsapp';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly business = BUSINESS;
  protected readonly wa = whatsappLink();
  protected readonly mapUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(BUSINESS.mapEmbedUrl);

  /** Día de hoy (0–6). Se calcula en el navegador: el HTML prerenderizado no sabe qué día es. */
  protected readonly today = signal<number | null>(null);

  constructor() {
    afterNextRender(() => this.today.set(new Date().getDay()));
  }
}
