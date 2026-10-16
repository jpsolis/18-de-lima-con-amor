import { BUSINESS } from './business.data';

/** Enlace wa.me con el mensaje ya escrito para el cliente final. */
export function whatsappLink(message: string = BUSINESS.whatsappMessage): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Mensaje base más el tema consultado, p. ej. "…más información sobre los ceviches". */
export function whatsappTopicLink(topic: string): string {
  return whatsappLink(`${BUSINESS.whatsappMessage} sobre ${topic}`);
}
