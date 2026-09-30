const API_URL = 'https://script.google.com/macros/s/AKfycbwSQDl4UzG52FazSZATxAbZsRi1jb0u4glTCEk-miwanvGhAW3CD91DLCNqWHc9JMFo/exec';

        document.getElementById('rifaForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const btn = document.getElementById('btnSubmit');
            const msg = document.getElementById('mensagem');

            btn.innerText = 'Enviando...';
            btn.disabled = true;

            const formData = new FormData(this);
            const data = new URLSearchParams(formData);

            fetch(API_URL, {
                method: 'POST',
                body: data
            })
            .then(response => response.json())
            .then(result => {

                // Esconde o formulário
                document.getElementById('formulario').style.display = 'none';

                // Mostra a tela de conclusão
                document.getElementById('conclusao').style.display = 'block';

            })
            .catch(error => {

                msg.style.color = 'red';
                msg.innerText = 'Erro ao enviar. Tente novamente.';

            })
            .finally(() => {

                btn.innerText = 'Solicitar Número';
                btn.disabled = false;

            });
        });