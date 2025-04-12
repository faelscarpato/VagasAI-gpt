// Exibe lista de vagas
function loadVagasList() {
  const container = document.getElementById("vagas-list");
  if (!container) return;

  container.innerHTML = "";
  mockVagas.forEach(vaga => {
    const div = document.createElement("div");
    div.className = "bg-white border p-4 rounded shadow-sm mb-3";
    div.innerHTML = `
      <h3 class="text-lg font-bold text-indigo-700">${vaga.titulo}</h3>
      <p class="text-sm text-gray-500">ID: ${vaga.id}</p>
    `;
    container.appendChild(div);
  });
}

// Preenche select na análise de currículo
function loadVagasForAnalysis() {
  const select = document.getElementById("vaga-analise-select");
  if (!select) return;

  select.innerHTML = '<option value="">Selecione uma vaga</option>';
  mockVagas.forEach(v => {
    const option = document.createElement("option");
    option.value = v.titulo;
    option.textContent = v.titulo;
    select.appendChild(option);
  });
}
 