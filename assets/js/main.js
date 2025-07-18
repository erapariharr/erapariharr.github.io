/**
* Template Name: Yummy
* Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
// new add
document.addEventListener("DOMContentLoaded", function () {
  const articleContainer = document.getElementById("medium-articles");

  fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@eraparihar98")
    .then(response => response.json())
    .then(data => {
      const items = data.items.slice(0, 6); // Show top 3 articles

      items.forEach(item => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.style.padding = "10px";

        // extract image
        const imgMatch = item.content.match(/<img.*?src="(.*?)"/);
        const imageUrl = imgMatch ? imgMatch[1] : "assets/img/events-1.jpg";   

        // const slide = document.createElement("div");
        // slide.className = "swiper-slide event-item d-flex flex-column justify-content-end";
        // slide.style.backgroundImage = `url('${item.thumbnail || "assets/img/events-1.jpg"}')`;
        // Extract first image from item.content or fallback
        // const imgMatch = item.content.match(/<img.*?src="(.*?)"/);
        // const imageUrl = imgMatch ? imgMatch[1] : "assets/img/events-1.jpg";
        // slide.style.backgroundImage = `url('${imageUrl}')`;

        // slide.innerHTML = `
        //   <div class="price align-self-start">${item.title}</div>
        //   <p class="description">${item.description.replace(/<[^>]*>/g, "").substring(0, 120)}...</p>
        //   <a href="${item.link}" target="_blank" class="align-self-start text-white mt-2" style="text-decoration:underline;">Read on Medium →</a>
        // `;

        slide.innerHTML = `
          <div class="article-card">
            <img src="${imageUrl}" alt="Article Image" class="article-img">
            <div class="article-content">
              <div>
                <div class="article-title">${item.title}</div>
                <div class="article-description">${item.description.replace(/<[^>]*>/g, "").substring(0, 120)}...</div>
              </div>
              <a href="${item.link}" target="_blank" class="article-link">Read on Medium →</a>
            </div>
          </div>
        `;

        articleContainer.appendChild(slide);
      });
    })
    .catch(error => {
      articleContainer.innerHTML = "<p class='text-white'>Failed to load articles.</p>";
      console.error("Error fetching Medium feed:", error);
    });
});
