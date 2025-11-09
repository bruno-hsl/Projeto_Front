//Hamburguer
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

//Orçamento
const tarefas = {
    alvenaria: { tempoPorM2: 1.5, custoHora: 50, custoMaterialPorM2: 30 },
    pintura: { tempoPorM2: 0.5, custoHora: 40, custoMaterialPorM2: 15 },
    reboco: { tempoPorM2: 1.0, custoHora: 45, custoMaterialPorM2: 20 }
};

document.getElementById("formOrcamento").addEventListener("submit", function (e) {
    e.preventDefault();

    const tarefa = document.getElementById("tarefa").value;
    const area = parseFloat(document.getElementById("area").value);
    const ajudantes = parseInt(document.getElementById("ajudantes").value);

    const dados = tarefas[tarefa];
    const tempoTotal = (dados.tempoPorM2 * area) / ajudantes;
    const custoMaoDeObra = tempoTotal * dados.custoHora * ajudantes;
    const custoMaterial = dados.custoMaterialPorM2 * area;
    const custoTotal = custoMaoDeObra + custoMaterial;

    document.getElementById("resultadoOrcamento").innerHTML = `
      <p><strong>Tempo estimado:</strong> ${tempoTotal.toFixed(1)} horas</p>
      <p><strong>Custo de mão de obra:</strong> R$ ${custoMaoDeObra.toFixed(2)}</p>
      <p><strong>Custo de materiais:</strong> R$ ${custoMaterial.toFixed(2)}</p>
      <p><strong>Total:</strong> R$ ${custoTotal.toFixed(2)}</p>
    `;
});