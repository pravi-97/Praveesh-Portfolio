'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('open', open);
});
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('open');
}));
const sections = [...document.querySelectorAll('main > section[id]')];
const links = [...document.querySelectorAll('.nav-link')];
const setActive = id => links.forEach(link => {
  const active = link.getAttribute('href') === '#' + id;
  link.classList.toggle('active', active);
  if (active) link.setAttribute('aria-current', 'location');
  else link.removeAttribute('aria-current');
});
let pending = false;
function updateActive() {
  const offset = window.innerWidth <= 900 ? 150 : 120;
  let current = sections[0];
  for (const section of sections) if (section.getBoundingClientRect().top <= offset) current = section;
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 30) current = sections.at(-1);
  setActive(current.id);
  pending = false;
}
window.addEventListener('scroll', () => { if (!pending) { pending = true; requestAnimationFrame(updateActive); } }, {passive: true});
window.addEventListener('resize', updateActive);
updateActive();
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const dialog = document.querySelector('#project-dialog');
document.querySelector('[data-open-project]').addEventListener('click', () => dialog.showModal());
dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
const form = document.querySelector('#contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const name = String(values.get('name')).trim();
  const email = String(values.get('email')).trim();
  const message = String(values.get('message')).trim();
  if (!name || !message) {
    document.querySelector('#form-status').textContent = 'Please add your name and a message before continuing.';
    return;
  }
  const subject = encodeURIComponent('Portfolio enquiry from ' + name);
  const body = encodeURIComponent(message + '\n\nFrom: ' + name + '\nEmail: ' + email);
  window.location.href = 'mailto:praveesh.894@gmail.com?subject=' + subject + '&body=' + body;
  document.querySelector('#form-status').textContent = 'Your email draft is ready. Complete sending in your email app, or email praveesh.894@gmail.com directly.';
});
