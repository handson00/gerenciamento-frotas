// script.js

// Exemplo de função para validação de formulário
document.querySelector('form').addEventListener('submit', function (e) {
    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;
  
    if (!email || !senha) {
      alert('Por favor, preencha todos os campos!');
      e.preventDefault();
    }
  });
  