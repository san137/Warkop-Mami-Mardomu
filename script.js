      // Navbar scroll effect
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
      });

      // Mobile menu
      const hamburger = document.getElementById('hamburger');
      const mobileNav = document.getElementById('mobileNav');
      const overlay = document.getElementById('overlay');

      function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('open');
        overlay.classList.toggle('show');
        document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
      }

      hamburger.addEventListener('click', toggleMenu);
      overlay.addEventListener('click', toggleMenu);

      document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
          if (mobileNav.classList.contains('open')) toggleMenu();
        });
      });

      // Accordion toggle
      document.querySelectorAll('.menu-category-block').forEach(block => {
        block.querySelector('.menu-cat-header').addEventListener('click', () => {
          const isOpen = block.classList.toggle('open');
          const label = block.querySelector('.toggle-text');
          if (label) label.textContent = isOpen ? 'Tutup' : 'Lihat';
        });
      });

      // Menu filter
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const filter = btn.dataset.filter;
          document.querySelectorAll('.menu-category-block').forEach(block => {
            const show = filter === 'all' || block.dataset.category === filter;
            block.style.display = show ? 'block' : 'none';
          });
        });
      });

            // Init feather icons
      if (typeof feather !== 'undefined') feather.replace();

      // Scroll reveal
      const reveals = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 100 * (Array.from(reveals).indexOf(entry.target) % 4));
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      reveals.forEach(el => observer.observe(el));
  
