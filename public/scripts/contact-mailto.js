document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('mailto-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const to = form.dataset.to || 'contact@example.com';
    const name = form.querySelector('[name="name"]')?.value.trim() || '';
    const email = form.querySelector('[name="email"]')?.value.trim() || '';
    const message = form.querySelector('[name="message"]')?.value.trim() || '';

    const subject = `Contact from Website: ${name || 'No name provided'}`;
    const body = [`Name: ${name}`, `Email: ${email}`, '', 'Message:', message].join('\n');

    // open user’s default mail client
    window.location.href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
