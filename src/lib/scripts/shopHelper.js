export const formatPrice = (price) => price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });