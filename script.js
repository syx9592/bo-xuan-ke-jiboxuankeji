document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;

            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });

    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close');

    mainImage.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = mainImage.src;
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    const colorOptions = document.querySelectorAll('.color-option');

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            colorOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
        });
    });

    const quantityInput = document.getElementById('quantity-input');
    const quantityPlus = document.getElementById('quantity-plus');
    const quantityMinus = document.getElementById('quantity-minus');

    quantityPlus.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    quantityMinus.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tab = link.dataset.tab;

            tabLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            tabContents.forEach(content => {
                if (content.id === tab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    const shareButton = document.querySelector('.btn-share');
    shareButton.addEventListener('click', () => {
        const url = window.location.origin + window.location.pathname;
        navigator.clipboard.writeText(url).then(() => {
            alert('链接已复制到剪贴板！');
        }, () => {
            alert('复制链接失败，请手动复制。');
        });
    });
});
