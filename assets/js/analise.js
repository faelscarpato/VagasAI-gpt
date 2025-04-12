// Análise com IA, upload e pós-processamento

const analisarBtn = document.getElementById("analisar-button"); const resultadoDiv = document.getElementById("analise-resultado"); const curriculoText = document.getElementById("curriculo-text"); const btnPDF = document.getElementById("baixar-pdf-analise"); const btnAddCandidato = document.getElementById("adicionar-candidato-pos-analise");

analisarBtn?.addEventListener("click", () => { const texto = curriculoText.value.trim(); const vaga = document.getElementById("vaga-analise-select").value; if (!texto || !vaga) return alert("Preencha o currículo e selecione uma vaga.");

// Simula análise com IA const score = Math.floor(Math.random() * 41) + 60; resultadoDiv.innerText = Análise para vaga: ${vaga}\nScore: ${score}\n\nResumo da IA:\nCandidato demonstra boas habilidades para a vaga.;

// Exibe botões adicionais btnPDF?.classList.remove("hidden"); btnAddCandidato?.classList.remove("hidden");

// Guarda score na DOM (hack simples) document.getElementById("cv-score-text")?.remove(); const span = document.createElement("span"); span.id = "cv-score-text"; span.textContent = score; span.className = "hidden"; resultadoDiv.appendChild(span); });

btnPDF?.addEventListener("click", () => { const { jsPDF } = window.jspdf; const doc = new jsPDF(); doc.text(resultadoDiv.innerText, 10, 10); doc.save("analise-curriculo.pdf"); });

btnAddCandidato?.addEventListener("click", () => { const texto = curriculoText.value; const nome = (texto.match(/Nome\s*:\s*(.*)/i) || [])[1] || "Candidato"; const email = (texto.match(/[\w.-]+@[\w.-]+.[a-z]{2,}/) || [])[0] || ""; const score = parseInt(document.getElementById("cv-score-text")?.textContent || "0"); const vaga = document.getElementById("vaga-analise-select").value;

document.getElementById("candidato-nome").value = nome; document.getElementById("candidato-email").value = email; document.getElementById("candidato-score").value = score; document.getElementById("candidato-vaga").value = vaga; document.getElementById("candidato-status").value = "Em Análise"; loadVagasForModal(); document.getElementById("novo-candidato-modal").classList.remove("modal-hidden"); });

// Upload de currículos const uploadInput = document.getElementById("curriculo-arquivo"); uploadInput?.addEventListener("change", async (e) => { const file = e.target.files[0]; if (!file) return;

const ext = file.name.split(".").pop().toLowerCase(); const reader = new FileReader();

if (ext === "txt") { reader.onload = e => curriculoText.value = e.target.result; reader.readAsText(file); } else if (ext === "pdf") { reader.onload = async e => { const typedArray = new Uint8Array(e.target.result); const pdf = await pdfjsLib.getDocument(typedArray).promise; let text = ""; for (let i = 1; i <= pdf.numPages; i++) { const page = await pdf.getPage(i); const content = await page.getTextContent(); text += content.items.map(item => item.str).join(" ") + "\n"; } curriculoText.value = text; }; reader.readAsArrayBuffer(file); } else if (ext === "docx") { reader.onload = async e => { const result = await mammoth.extractRawText({ arrayBuffer: e.target.result }); curriculoText.value = result.value; }; reader.readAsArrayBuffer(file); } });

