
function afficherEtoiles(n) {
    console.log('*'.repeat(n));
  }
  afficherEtoiles(1)
//   afficherEtoiles(5)

function afficherRectangle(hauteur, largeur) {
    for (let i = 0; i < hauteur; i++) {
        let ligne = "";
        for (let j = 0; j < largeur; j++) {
          ligne += "*";
        }
        // console.log(ligne);
    }
  }
// afficherRectangle(5, 5)

function afficherTriangleDroite(n) {
    for (let i = 1; i <= n; i++) {
        let ligne = "\\"; 
        ligne = "*".repeat(i - 1) + ligne; 
         console.log(ligne); 
    }
}
 afficherTriangleDroite(5)

function afficherTriangleGauche(n) {
    for (let i = 1; i <= n; i++) {
        let espaces = " ".repeat(n - i);
        let ligne = espaces + "/" + "*".repeat(i - 1);
        console.log(ligne); 
    }
}
afficherTriangleGauche(5)
