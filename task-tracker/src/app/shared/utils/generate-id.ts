export function generateId(): string {
  const chars = 'abcdef0123456789';
  let id = '';
  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      id += '-';
    } else if (i === 14) {
      id += '4';
    } else if (i === 19) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    } else {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }
  return id;
}
