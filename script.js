document.getElementById('readMoreBtn').addEventListener('click', function() {
    const mission = document.querySelector('.mission');
    const whyChooseUs = document.querySelector('.why-choose-us');
    const partnership = document.querySelector('.partnership');
    const creators = document.querySelector('.creators');

    if (mission.style.display === 'none') {
        mission.style.display = 'block';
        whyChooseUs.style.display = 'block';
        partnership.style.display = 'block';
        creators.style.display = 'block';
        this.textContent = 'Leia Menos';
    } else {
        mission.style.display = 'none';
        whyChooseUs.style.display = 'none';
        partnership.style.display = 'none';
        creators.style.display = 'none';
        this.textContent = 'Leia Mais';
    }
});
