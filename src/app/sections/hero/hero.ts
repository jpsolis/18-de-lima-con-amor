import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BUSINESS } from '../../core/business.data';
import { whatsappLink } from '../../core/whatsapp';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly business = BUSINESS;
  protected readonly wa = whatsappLink();
}
