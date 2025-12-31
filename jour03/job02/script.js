$(document).ready(function() {
    // Tableau des images avec leur ordre correct
    const images = [
        { src: 'images/arc1.png', order: 1 },
        { src: 'images/arc2.png', order: 2 },
        { src: 'images/arc3.png', order: 3 },
        { src: 'images/arc4.png', order: 4 },
        { src: 'images/arc5.png', order: 5 },
        { src: 'images/arc6.png', order: 6 }
    ];
    
    // État actuel des images
    let currentImages = [...images];
    
    // Initialiser le jeu
    function initGame() {
        $('#rainbow-container').empty();
        
        currentImages.forEach((img, index) => {
            const $img = $('<img>', {
                class: 'rainbow-piece',
                src: img.src,
                'data-order': img.order,
                'data-index': index,
                alt: `Arc-en-ciel pièce ${img.order}`
            });
            
            $('#rainbow-container').append($img);
        });
        
        $('#message').hide();
    }
    
    // Mélanger les images
    function shuffleImages() {
        // Fisher-Yates shuffle algorithm
        for (let i = currentImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [currentImages[i], currentImages[j]] = [currentImages[j], currentImages[i]];
        }
        
        initGame();
        $('#message').hide();
    }
    
    // Vérifier si l'arc-en-ciel est dans le bon ordre
    function checkOrder() {
        let isCorrect = true;
        
        // Vérifier chaque image dans le conteneur
        $('#rainbow-container img').each(function(index) {
            const displayedOrder = $(this).data('order');
            const correctOrder = index + 1;
            
            if (displayedOrder !== correctOrder) {
                isCorrect = false;
                return false; // Sortir de la boucle each
            }
        });
        
        // Afficher le message
        const $message = $('#message');
        if (isCorrect) {
            $message.text('🎉 Vous avez gagné ! 🎉').removeClass('lose').addClass('win');
        } else {
            $message.text('😢 Vous avez perdu ! 😢').removeClass('win').addClass('lose');
        }
        $message.fadeIn(500);
    }
    
    // Remettre les images dans l'ordre
    function resetOrder() {
        // Trier les images par ordre croissant
        currentImages.sort((a, b) => a.order - b.order);
        initGame();
        $('#message').hide();
    }
    
    // Gérer le clic sur une image pour l'échanger avec la suivante
    function setupImageClick() {
        $(document).on('click', '.rainbow-piece', function() {
            const clickedIndex = $(this).index();
            const nextIndex = (clickedIndex + 1) % currentImages.length;
            
            // Échanger les images dans le tableau
            [currentImages[clickedIndex], currentImages[nextIndex]] = 
            [currentImages[nextIndex], currentImages[clickedIndex]];
            
            // Réafficher les images
            initGame();
            $('#message').hide();
        });
    }
    
    // Initialisation
    initGame();
    setupImageClick();
    
    // Événements des boutons
    $('#shuffleBtn').click(shuffleImages);
    $('#checkBtn').click(checkOrder);
    $('#resetBtn').click(resetOrder);
});