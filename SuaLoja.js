document.getElementById('store-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const storeName = document.getElementById('store-name').value;
    const storeBackground = document.getElementById('store-background').files[0];
    const storeProfile = document.getElementById('store-profile').files[0];
    const storeDescription = document.getElementById('store-description').value;

    if (storeName && storeBackground && storeProfile && storeDescription) {
        // Salvar as informações no localStorage
        localStorage.setItem('storeName', storeName);
        localStorage.setItem('storeDescription', storeDescription);

        // Converter as imagens para Base64 e salvar no localStorage
        const readerBackground = new FileReader();
        readerBackground.onload = function() {
            localStorage.setItem('storeBackground', readerBackground.result);
        };
        readerBackground.readAsDataURL(storeBackground);

        const readerProfile = new FileReader();
        readerProfile.onload = function() {
            localStorage.setItem('storeProfile', readerProfile.result);
            // Redirecionar para a página "SuaLoja"
            window.location.href = 'sualoja.html';
        };
        readerProfile.readAsDataURL(storeProfile);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});