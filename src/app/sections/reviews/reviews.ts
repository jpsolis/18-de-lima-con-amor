import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BUSINESS, REVIEWS } from '../../core/business.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-reviews',
  imports: [Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews {
  protected readonly google = BUSINESS.google;
  protected readonly reviews = REVIEWS;
  protected readonly starSlots = [1, 2, 3, 4, 5];

  protected initials(name: string): string {
    return name
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase() ?? '')
      .join('');
  }
}
