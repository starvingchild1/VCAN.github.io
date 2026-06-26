// Shared navigation and footer component
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

function buildNav() {
    const pages = [
        { href: 'index.html', label: 'Home' },
        { href: 'about.html', label: 'About Us' },
        { href: 'csr-funding.html', label: 'CSR Funding' },
        { href: 'tech-impact.html', label: 'Tech & Impact' },
        { href: 'ra-services.html', label: 'RA Services' },
        { href: 'contact.html', label: 'Contact' },
    ];

    const linksHTML = pages.map(p => `
    <a href="${p.href}" class="nav-link ${currentPage === p.href ? 'active' : ''}">${p.label}</a>
  `).join('');

    document.getElementById('nav-placeholder').innerHTML = `
    <nav class="navbar" id="navbar">
      <div class="navbar-inner">
        <a href="index.html" class="logo">
          <svg class="logo-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="12" fill="#1a3828"/>
            <path d="M10 14L20 32L24 24L28 32L38 14" stroke="#22c55e" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="24" cy="37" r="3" fill="#86efac"/>
          </svg>
          <div class="logo-text">
            <span class="logo-name">Vcan</span>
            <span class="logo-tagline">Bridging Businesses & Impact</span>
          </div>
        </a>

        <div class="nav-links" id="navLinks">
          ${linksHTML}
          <a href="contact.html" class="btn btn-primary nav-cta" style="margin-left:8px;">Partner With Us</a>
        </div>

        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `;

    // Hamburger toggle
    const ham = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    ham.addEventListener('click', () => {
        ham.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
        link.addEventListener('click', () => {
            ham.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

    // Scroll effect
    window.addEventListener('scroll', () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
    });
}

function buildFooter() {
    document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-top">
        <div class="container">
          <div class="footer-top-grid">
            <div class="footer-col">
              <h4>Find Us</h4>
              <p>KSR Enclave, First Floor, Prem Kunj,<br>2-108, Plot no. 43, beside Intelli Tots<br>Preschool, Telangana 500050</p>
            </div>
            <div class="footer-col footer-contact">
              <h4>Contact Us</h4>
              <a href="tel:+918008060593">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 11.6 19.79 19.79 0 011.61 3C1.6 1.98 2.34 1.1 3.36 1H6.36a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.28 8.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                +91 8008060593
              </a>
              <a href="tel:+919573064713">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 11.6 19.79 19.79 0 011.61 3C1.6 1.98 2.34 1.1 3.36 1H6.36a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.28 8.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                +91 9573064713
              </a>
            </div>
            <div class="footer-col">
              <h4>Follow Our Journey</h4>
              <div class="social-links">
                <a href="#" class="social-link fb" aria-label="Facebook">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="#" class="social-link ig" aria-label="Instagram">
                  <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" class="social-link yt" aria-label="YouTube">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon fill="#fff" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
                </a>
                <a href="#" class="social-link li" aria-label="LinkedIn">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom-inner">
            <div class="footer-logo-area">
              <a href="index.html" class="logo">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="12" fill="#1a3828"/>
                  <path d="M10 14L20 32L24 24L28 32L38 14" stroke="#22c55e" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="24" cy="37" r="3" fill="#86efac"/>
                </svg>
                <div>
                  <div class="logo-name" style="font-size:1.1rem;">Vcan</div>
                  <div class="footer-tagline">An Exclusive product by</div>
                </div>
              </a>
              <div class="footer-badges">
                <span class="badge">RA SERVICES</span>
                <span class="badge">ISO 9001:2015</span>
              </div>
            </div>

            <nav class="footer-nav-links">
              <a href="index.html">Home</a>
              <a href="about.html">About Us</a>
              <a href="csr-funding.html">CSR Funding</a>
              <a href="tech-impact.html">Tech & Impact</a>
              <a href="contact.html">Contact</a>
            </nav>

            <div class="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
}

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                entry.target.dataset.counted = true;
                const target = parseInt(entry.target.dataset.target);
                const suffix = entry.target.dataset.suffix || '';
                let start = 0;
                const duration = 2000;
                const step = target / (duration / 16);
                const timer = setInterval(() => {
                    start += step;
                    if (start >= target) {
                        start = target;
                        clearInterval(timer);
                    }
                    entry.target.textContent = Math.floor(start) + suffix;
                }, 16);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    buildNav();
    buildFooter();
    initScrollReveal();
    animateCounters();
});
