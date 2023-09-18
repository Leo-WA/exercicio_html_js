function pegarvalores () {
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    if (isNaN(campoA) || isNaN(campoB)) {
      alert('Por favor, insira valores válidos nos campos.');
      return;
    }

    if (campoB > campoA) {
      alert('Campo B é maior que Campo A. Campo válido.');
    } else if (campoB < campoA) {
      alert('Campo B é menor que Campo A. Campo inválido.');
    } else {
      alert('Campo B é igual a Campo A.');
    }
  }