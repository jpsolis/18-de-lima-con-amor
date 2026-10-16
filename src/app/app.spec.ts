import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { BUSINESS, REVIEWS, SERVICES } from './core/business.data';

describe('App (landing De Lima con Amor)', () => {
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    root = fixture.nativeElement as HTMLElement;
  });

  it('muestra el nombre del negocio en el h1', () => {
    expect(root.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim()).toBe('De Lima con Amor');
  });

  it('tiene las cuatro secciones enlazadas desde el menú', () => {
    for (const id of ['inicio', 'servicios', 'opiniones', 'contacto']) {
      expect(root.querySelector(`section#${id}`)).withContext(id).not.toBeNull();
      expect(root.querySelector(`nav a[href="#${id}"]`)).withContext(`nav ${id}`).not.toBeNull();
    }
  });

  it('muestra entre 4 y 6 servicios con descripción', () => {
    const cards = root.querySelectorAll('#servicios .grid > li');
    expect(cards.length).toBe(SERVICES.length);
    expect(cards.length).toBeGreaterThanOrEqual(4);
    expect(cards.length).toBeLessThanOrEqual(6);
    cards.forEach((c) => expect(c.querySelector('p')?.textContent?.trim().length).toBeGreaterThan(10));
  });

  it('muestra tres reseñas con nombre y estrellas, más el enlace a Google', () => {
    const cards = root.querySelectorAll('#opiniones .grid > li');
    expect(cards.length).toBe(3);
    cards.forEach((c, i) => {
      expect(c.textContent).toContain(REVIEWS[i].author);
      expect(c.querySelector('[role="img"]')?.getAttribute('aria-label')).toBe('5 de 5 estrellas');
    });
    expect(root.querySelector(`#opiniones a[href="${BUSINESS.google.reviewsUrl}"]`)).not.toBeNull();
  });

  it('el contacto incluye dirección, mapa, los 7 horarios, teléfono, Instagram y WhatsApp', () => {
    const contact = root.querySelector('#contacto')!;
    expect(contact.textContent).toContain(BUSINESS.address.street);
    expect(contact.querySelector('iframe')?.getAttribute('src')).toBe(BUSINESS.mapEmbedUrl);
    expect(contact.querySelectorAll('.hours tr').length).toBe(7);
    expect(contact.querySelector(`a[href="${BUSINESS.phoneHref}"]`)).not.toBeNull();
    expect(contact.querySelector(`a[href="${BUSINESS.social.instagram.url}"]`)).not.toBeNull();
    expect(contact.querySelector('a[href^="https://wa.me/"]')).not.toBeNull();
  });

  it('todos los botones de WhatsApp usan el número del local y el mensaje prellenado', () => {
    const links = Array.from(root.querySelectorAll<HTMLAnchorElement>('a[href^="https://wa.me/"]'));
    // header + hero + 6 servicios + contacto + flotante
    expect(links.length).toBe(10);
    for (const a of links) {
      const url = new URL(a.href);
      expect(url.pathname).toBe(`/${BUSINESS.whatsappNumber}`);
      expect(url.searchParams.get('text')).toContain('Hola, vi su página web y quisiera tener más información');
      expect(a.target).toBe('_blank');
    }
  });

  it('el botón flotante de WhatsApp está fijo y tiene nombre accesible', () => {
    const fab = root.querySelector<HTMLAnchorElement>('app-whatsapp-fab a')!;
    expect(fab.getAttribute('aria-label')).toContain('WhatsApp');
    expect(getComputedStyle(fab).position).toBe('fixed');
  });

  it('todas las imágenes tienen texto alternativo', () => {
    root.querySelectorAll('img').forEach((img) => expect(img.getAttribute('alt')?.trim()).toBeTruthy());
  });
});
