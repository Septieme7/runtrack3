// Attendre que le document soit prêt
$(document).ready(function() {
    
    // Bouton pour afficher la citation
    $('#showBtn').click(function() {
        $('#citation').fadeIn(500); // Afficher avec animation
    });
    
    // Bouton pour cacher la citation
    $('#hideBtn').click(function() {
        $('#citation').fadeOut(500); // Cacher avec animation
    });
    
    // Optionnel : bouton pour toggle (montrer/cacher)
    // $('#toggleBtn').click(function() {
    //     $('#citation').toggle(500);
    // });
});