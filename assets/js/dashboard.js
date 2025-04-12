// Preenchimento dos cards do dashboard

function loadDashboard() {
  const vagasEl = document.getElementById("qtd-vagas");
  const candidatosEl = document.getElementById("qtd-candidatos");

  if (vagasEl && candidatosEl) {
    vagasEl.textContent = mockVagas.length;
    candidatosEl.textContent = mockCandidatosDetalhado.length;
  }
}
