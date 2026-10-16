import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BUSINESS, INSTAGRAM_POSTS, SERVICES } from '../../core/business.data';
import { whatsappTopicLink } from '../../core/whatsapp';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';

/** Un color del logo por tarjeta, en el mismo orden del degradado. */
const ACCENTS = ['var(--magenta-text)', 'var(--coral)', 'var(--orange)', 'var(--yellow)', 'var(--lime)', 'var(--magenta-text)'];

@Component({
  selector: 'app-services',
  imports: [Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  protected readonly services = SERVICES.map((s, i) => ({
    ...s,
    accent: ACCENTS[i % ACCENTS.length],
    wa: whatsappTopicLink(s.waTopic),
  }));
  protected readonly posts = INSTAGRAM_POSTS;
  protected readonly instagram = BUSINESS.social.instagram;
}
