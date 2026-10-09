/** Replace these placeholders before publishing. Phone numbers use international digits only. */
export const business = {
  name: 'ATELIER BYTE', city: { fr: 'Marrakech', ar: 'مراكش' },
  address: 'YOUR_ADDRESS', hours: 'YOUR_BUSINESS_HOURS',
  phone: 'YOUR_PHONE_NUMBER', whatsapp: 'YOUR_WHATSAPP_NUMBER',
  mapUrl: 'YOUR_MAP_LINK',
};
export const whatsappReady = /^\d{8,15}$/.test(business.whatsapp);
export function whatsappUrl(message: string) { return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`; }
