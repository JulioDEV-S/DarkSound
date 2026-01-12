async function getDownloadLink() {
    const urlInput = document.getElementById('videoUrl').value;
    const statusDiv = document.getElementById('statusMessage');
    const resultArea = document.getElementById('resultArea');
    const downloadLink = document.getElementById('downloadLink');
    const btn = document.getElementById('downloadBtn');

    // Validação simples
    if (!urlInput || !urlInput.includes('youtube.com') && !urlInput.includes('youtu.be')) {
        statusDiv.innerHTML = '<span style="color: #ff4b4b;">Por favor, insira um link válido do YouTube.</span>';
        return;
    }

    // Efeito de carregamento
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
    statusDiv.innerHTML = 'Extraindo áudio do servidor...';
    resultArea.classList.add('hidden');

    try {
        // -----------------------------------------------------------
        // AQUI ENTRA A INTEGRAÇÃO COM A API (BACK-END)
        // Como o GitHub Pages é estático, você usaria uma API como a RapidAPI aqui.
        // Abaixo está uma SIMULAÇÃO de sucesso para mostrar o design.
        // -----------------------------------------------------------
        
        // Simulando delay de rede (2 segundos)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Sucesso Simulado
        statusDiv.innerHTML = '<span style="color: #00ff88;">Conversão concluída!</span>';
        resultArea.classList.remove('hidden');
        
        // Em um cenário real, a API retornaria o link do MP3 aqui:
        downloadLink.href = "#"; // Substituir pelo link real retornado pela API
        downloadLink.innerText = "Baixar MP3 (Demo)";

    } catch (error) {
        statusDiv.innerHTML = 'Erro ao processar. Tente novamente.';
        console.error(error);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<span class="btn-text">Baixar MP3</span><i class="fas fa-download"></i>';
    }
}
