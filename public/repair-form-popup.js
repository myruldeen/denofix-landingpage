document.addEventListener('click', (event) => {
  const link = event.target.closest('[data-repair-form-popup]');
  if (!link) return;
  event.preventDefault();
  const width = 920;
  const height = Math.min(1000, window.screen.availHeight - 80);
  const left = Math.max(0, Math.round((window.screen.availWidth - width) / 2));
  const top = Math.max(0, Math.round((window.screen.availHeight - height) / 2));
  window.open(
    link.href,
    'denofixRepairForm',
    `popup=yes,width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
  );
});
