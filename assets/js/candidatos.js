// Lista de candidatos
function loadCandidatosList() {
  const container = document.getElementById("candidatos-list");
  if (!container) return;

  container.innerHTML = "";
  mockCandidatosDetalhado.forEach(c => {
    const div = document.createElement("div");
    div.className = "bg-white border p-4 rounded shadow-sm mb-3";
    div.innerHTML = `
      <h3 class="text-base font-bold text-indigo-700">${c.nome}</h3>
      <p class="text-sm text-gray-600">${c.email} - ${c.vaga}</p>
      <p class="text-xs text-gray-400">Status: ${c.status} | Score: ${c.score}</p>
    `;
    container.appendChild(div);
  });
}

// Abrir modal para novo candidato manual
const btnNovo = document.getElementById("adicionar-candidato-button");
const modalCandidato = document.getElementById("novo-candidato-modal");
if (btnNovo && modalCandidato) {
  btnNovo.addEventListener("click", () => {
    document.getElementById("candidato-nome").value = "";
    document.getElementById("candidato-email").value = "";
    document.getElementById("candidato-score").value = "";
    document.getElementById("candidato-status").value = "Em Análise";
    document.getElementById("candidato-vaga").value = "";
    loadVagasForModal();
    modalCandidato.classList.remove("modal-hidden");
  });
}

function loadVagasForModal() {
  const select = document.getElementById("candidato-vaga");
  select.innerHTML = '<option value="">Selecione uma vaga</option>';
  mockVagas.forEach(v => {
    const opt = document.createElement("option");
    opt.value = v.titulo;
    opt.textContent = v.titulo;
    select.appendChild(opt);
  });
}
