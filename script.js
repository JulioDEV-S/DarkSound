async function getDownloadLink() {
    const urlInput = document.getElementById('videoUrl').value;
    const statusDiv = document.getElementById('statusMessage');
    const resultArea = document.getElementById('resultArea');
    const downloadLink = document.getElementById('downloadLink');
    const btn = document.getElementById('downloadBtn');

    // URL DA SUA API NO RENDER (Troque pelo seu link real)
    const API_BASE_URL = "https://SEU-APP.onrender.com"; 

    if (!urlInput || (!urlInput.includes('youtube.com') && !urlInput.includes('youtu.be'))) {
        statusDiv.innerHTML = '<span style="color: #ff4b4b;">Link inválido. Insira um link do YouTube.</span>';
        return;
    }

    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
    statusDiv.innerHTML = 'Conectando à Dark API...';
    resultArea.classList.add('hidden');

    try {
        // Chama a sua API Python
        const response = await fetch(`${API_BASE_URL}/convert?url=${encodeURIComponent(urlInput)}`);
        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        statusDiv.innerHTML = `<span style="color: #00ff88;">Sucesso: ${data.title}</span>`;
        resultArea.classList.remove('hidden');

        // Configura o botão para baixar
        // Usamos a rota /stream para forçar o download e evitar bloqueios de CORS do YouTube
        downloadLink.href = `${API_BASE_URL}/stream?url=${encodeURIComponent(data.download_url)}`;
        downloadLink.innerText = "Download MP3";
        
        // Opcional: Mostrar a thumbnail
        // Você pode criar uma tag img no HTML para exibir data.thumbnail

    } catch (error) {
        statusDiv.innerHTML = `<span style="color: #ff4b4b;">Erro: ${error.message}</span>`;
        console.error(error);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<span class="btn-text">Baixar MP3</span><i class="fas fa-download"></i>';
    }
}
