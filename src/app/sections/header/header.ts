import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BUSINESS } from '../../core/business.data';
import { whatsappLink } from '../../core/whatsapp';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-header',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: { '(document:keydown.escape)': 'close()' },
})
export class Header {
  protected readonly name = BUSINESS.name;
  protected readonly wa = whatsappLink();
  protected readonly open = signal(false);

  protected readonly links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#opiniones', label: 'Opiniones' },
    { href: '#contacto', label: 'Contacto' },
  ];

  protected toggle(): void {
    this.open.update((v) => !v);
  }

  protected close(): void {
    this.open.set(false);
  }
}
