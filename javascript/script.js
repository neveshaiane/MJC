// tutorial.js

// Function to get the correct image path based on the current URL and base element
function getImagePath(imageName) {
    const isHtmlPageWithBase = document.querySelector('base') !== null;
    const currentPath = window.location.pathname;

    if (isHtmlPageWithBase) {
        // Handle pages with <base> element
        return `media/${imageName}`;
    } else if (currentPath.includes('/html/')) {
        // Handle PHP pages that are two layers deep
        return `../../../media/${imageName}`;
    } else {
        // Default case for root level or index.html
        return `media/${imageName}`;
    }
}


// Function to show the tutorial pop-up
function showTutorial() {
    // Check if the tutorial is already visible
    if (document.getElementById('tutorialContainer')) {
        return; // Tutorial is already visible, do nothing
    }

    // Create an overlay for the darkened background
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '998'; // Just below the tutorial container and close_x button
    overlay.style.pointerEvents = 'none'; // doesn't block clicking the close_x button

    // Create a container for the tutorial
    const tutorialContainer = document.createElement('div');
    tutorialContainer.id = 'tutorialContainer';
    tutorialContainer.style.position = 'absolute';
    const questionButton = document.getElementById('question');
    const rect = questionButton.getBoundingClientRect();
    tutorialContainer.style.top = `${rect.bottom + window.scrollY - 5}px`;
    tutorialContainer.style.left = `${rect.left + window.scrollX - 595}px`; // Adjust based on your question button position
    tutorialContainer.style.backgroundColor = '#F2D0C4';
    tutorialContainer.style.color = '#73463C';
    tutorialContainer.style.padding = '20px';
    tutorialContainer.style.border = '2px solid #73463C';
    tutorialContainer.style.borderRadius = '10px';
    tutorialContainer.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.5)';
    tutorialContainer.style.zIndex = '999';
    tutorialContainer.style.width = '600px';
    tutorialContainer.style.boxSizing = 'border-box';

    // Add tutorial content
    const tutorialContent = document.createElement('div');
    tutorialContent.innerHTML = `
        <h2>Tutoriel du site</h2>
        <p>Bienvenue sur le site de la MJC Abbaye Base de Ressources !<br><br>
        
        Ce site est conçu pour vous aider à trouver des ressources utiles pour vos ateliers sociolinguistiques.<br><br>

        Les ressources sont classées par thèmes et sous-thèmes sociolinguistiques.<br><br>
        
        Vous pouvez naviguer sur le site en cliquant sur les tuiles étiquetées.<br><br> 
        
        Une fois que vous avez atteint la page d'un sous-thème, vous verrez toutes les ressources de cette catégorie. Vous pouvez ensuite utiliser la barre de recherche pour les filtrer en tapant n'importe quel mot qui peut apparaître dans le titre d'un document.<br><br>
        
        Pour revenir à la page précédente, cliquez sur la flèche en haut à gauche.<br><br>
        
        Pour revenir à la page d'accueil, cliquez sur l'image de la maison dans le coin supérieur gauche.<br><br>
        
        Bonne recherche !<br><br><br>
        
        p.s. Si vous avez des documents à ajouter au site web, contactez votre coordinateur d'atelier.</p>
    `;

    tutorialContainer.appendChild(tutorialContent);
    document.body.appendChild(overlay);
    document.body.appendChild(tutorialContainer);

    // Change the question button to the close button
    questionButton.src = getImagePath('close_x.png'); // Temporary X button image

    questionButton.removeEventListener('click', showTutorial);
    questionButton.addEventListener('click', closeTutorial);
}

// Function to close the tutorial pop-up
function closeTutorial(event) {
    event.preventDefault();

    const tutorialContainer = document.getElementById('tutorialContainer');
    const overlay = document.getElementById('overlay');
    if (tutorialContainer) {
        document.body.removeChild(tutorialContainer);
    }
    if (overlay) {
        document.body.removeChild(overlay);
    }

    // Change the close button back to the question button
    const questionButton = document.getElementById('question');
    questionButton.src = getImagePath('question.png'); // Original question button image

    questionButton.removeEventListener('click', closeTutorial);
    questionButton.addEventListener('click', showTutorial);
}

// Add event listener to the question button
document.addEventListener('DOMContentLoaded', function() {
    const questionButton = document.getElementById('question');
    if (questionButton) {
        questionButton.addEventListener('click', function(event) {
            event.preventDefault();
            showTutorial();
        });
    }
});


// Fonction pour revenir à la page précédente, pour éviter de devoir specifier un lien pour le bouton class .revenir_bouton sur chaque page
function goBack() {
    window.history.back();
  }