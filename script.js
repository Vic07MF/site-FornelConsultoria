// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")
    })
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })

        // Close mobile menu if open
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
      }
    })
  })

  // FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question")
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", function () {
    const faqItem = this.parentElement
    const isActive = faqItem.classList.contains("active")

    // Fecha todos
    document.querySelectorAll(".faq-item").forEach((faq) => {
      faq.classList.remove("active")
    })

    // Abre o clicado se não estava ativo
    if (!isActive) {
      faqItem.classList.add("active")
    }
  })
})

  // Form submission
  const contactForm = document.querySelector(".contact-form form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const data = Object.fromEntries(formData)

      // Simple validation
      if (!data.nome || !data.empresa || !data.telefone || !data.email) {
        alert("Por favor, preencha todos os campos obrigatórios.")
        return
      }

      // Simulate form submission
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
      this.reset()
    })
  }

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.backdropFilter = "blur(10px)"
    } else {
      header.style.background = "#ffffff"
      header.style.backdropFilter = "none"
    }
  })

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".service-card, .client-segment, .blog-post, .team-member, .testimonial",
  )
  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Add mobile navigation styles
const style = document.createElement("style")
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: white;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 2rem;
            transition: left 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            margin: 1rem 0;
        }
        
        .nav-menu a {
            font-size: 1.2rem;
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        .faq-item.active p {
            display: block;
        }
        
        .faq-item p {
            display: none;
        }
        
        .faq-item:first-child p {
            display: block;
        }
    }
`
document.head.appendChild(style)
