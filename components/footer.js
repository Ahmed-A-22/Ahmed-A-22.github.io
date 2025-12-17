// Reusable footer component
function loadFooter() {
  // Determine if we're in a subdirectory
  const isSubpage = window.location.pathname.includes('/case_studies/');
  const basePath = isSubpage ? '..' : '.';

  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <p>
      <a href="https://github.com/Ahmed-A-22" target="_blank">GitHub</a> •
      <a href="https://www.linkedin.com/in/ahmed-alsammarai/" target="_blank">LinkedIn</a> •
      <a href="${basePath}/assets/cv/Ahmed_Alsammarai_CV.pdf" target="_blank">Download CV</a> •
      <a href="mailto:ahmed.alsammarai1994@gmail.com">Email</a>
    </p>
    <p class="location">
      Based in Romania • Open to Remote UK / EU / UAE / Saudi Arabia Roles
    </p>
  `;

  // Insert footer at the end of body
  document.body.appendChild(footer);
}

// Load footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);
