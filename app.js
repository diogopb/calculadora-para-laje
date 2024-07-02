function calcArea(largura, altura) {
    return largura * altura;
}

function calcVigotas(largura, altura, tipo) {
    if (tipo === 'largura') {
        return largura / 0.43;
    } else if (tipo === 'altura') {
        return altura / 0.43;
    }
}

function calcIsopor(area) {
    return area * 2.26;
}

function calcCimento(area) {
    return area / 2.5;
}

function calcAreiaLata(cimento) {
    return cimento * 7;
}

function calcAreiaMetro(areiaLata) {
    return areiaLata / 50;
}

function calcBritaLata(cimento) {
    return cimento * 3.5;
}

function calcBritaMetro(britaLata) {
    return britaLata / 50;
}

function calcVergalhaoM2(area) {
    return area * 6.66;
}

function calcVergalhaoQtde(vergalhaoM2) {
    return vergalhaoM2 / 12;
}

function calcMalha(area) {
    return area / 6;
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const largura = parseFloat(document.getElementById('largura').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const tipoVigotas = document.getElementById('tipoVigotas').value;

    const areaTotal = calcArea(largura, altura);
    const qtdeVigotas = calcVigotas(largura, altura, tipoVigotas);
    const qtdeIsopor = calcIsopor(areaTotal);
    const qtdeCimento = calcCimento(areaTotal);
    const qtdeAreiaLata = calcAreiaLata(qtdeCimento);
    const qtdeAreiaMetro = calcAreiaMetro(qtdeAreiaLata);
    const qtdeBritaLata = calcBritaLata(qtdeCimento);
    const qtdeBritaMetro = calcBritaMetro(qtdeBritaLata);
    const qtdeVergalhaoM2 = calcVergalhaoM2(areaTotal);
    const qtdeVergalhaoQtde = calcVergalhaoQtde(qtdeVergalhaoM2);
    const qtdeMalha = calcMalha(areaTotal);

    document.getElementById('area').textContent = areaTotal.toFixed(2);
    document.getElementById('quantidadeVigotas').textContent = qtdeVigotas.toFixed(1);
    document.getElementById('quantidadeIsopor').textContent = qtdeIsopor.toFixed(1);
    document.getElementById('quantidadeCimento').textContent = qtdeCimento.toFixed(1);
    document.getElementById('quantidadeAreiaLata').textContent = qtdeAreiaLata.toFixed(1);
    document.getElementById('quantidadeAreiaMetro').textContent = qtdeAreiaMetro.toFixed(2);
    document.getElementById('quantidadeBritaLata').textContent = qtdeBritaLata.toFixed(1);
    document.getElementById('quantidadeBritaMetro').textContent = qtdeBritaMetro.toFixed(2);
    document.getElementById('quantidadeVergalhaoM2').textContent = qtdeVergalhaoM2.toFixed(1);
    document.getElementById('quantidadeVergalhao').textContent = qtdeVergalhaoQtde.toFixed(1);
    document.getElementById('quantidadeMalha').textContent = qtdeMalha.toFixed(1);

    document.getElementById('resultado').style.display = 'block';
});
