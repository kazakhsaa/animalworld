document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-content');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    function showModal(imgUrl) {
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-image-container">
                    <img src="${imgUrl}" alt="Artwork" class="zoomable-image">
                </div>
                <input type="range" min="1" max="3" value="1" step="0.01" class="zoom-control">
            </div>
        `;
        modal.style.display = 'flex';

        const zoomableImage = modal.querySelector('.zoomable-image');
        const zoomControl = modal.querySelector('.zoom-control');
        
        // Update zoom based on slider
        zoomControl.addEventListener('input', (e) => {
            const scale = e.target.value;
            zoomableImage.style.transform = `scale(${scale})`;
        });
    }

    gallery.addEventListener('click', e => {
        if (e.target.closest('.art-piece')) {
            const imgUrl = e.target.closest('.art-piece').querySelector('img').src;
            showModal(imgUrl);
        }
    });

    window.addEventListener('click', e => {
        if (e.target.classList.contains('close-modal') || e.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});
