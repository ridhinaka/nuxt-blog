import lozad from 'lozad';

export default async function (ctx, inject) {
  if (lozad) {
    const lozadOptions = [
      '.lozad',
      {}
    ]
    const observer = lozad(...lozadOptions);
    inject('lozad', observer);
  }
};
