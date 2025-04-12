// Navegação e inicialização geral

window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section-content");
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.getAttribute("href");

      sections.forEach(sec => sec.classList.add("hidden"));
      document.querySelector(target).classList.remove("hidden");
    });
  });

  // Ativar dashboard inicial
  document.querySelector("#dashboard-content")?.classList.remove("hidden");

  loadDashboard();
  loadVagasList();
  loadCandidatosList();
  loadVagasForAnalysis();
});

// Menu toggle (mobile)
document.getElementById("menu-toggle")?.addEventListener("click", () => {
  document.getElementById("mobile-menu")?.classList.toggle("hidden");
});
