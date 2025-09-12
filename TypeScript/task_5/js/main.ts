// On définit une interface pour les crédits "majeurs"
// Elle contient un nombre de crédits et un "brand" (une étiquette)
// qui permet de différencier ce type d'objet d'un autre type similaire
interface MajorCredits {
	credits: number;
	brand: "Major";
}

// Même chose pour les crédits "mineurs"
// Le "brand" ici est "Minor", ce qui fait que TypeScript
// ne pourra pas confondre un MinorCredits avec un MajorCredits
interface MinorCredits {
	credits: number;
	brand: "Minor";
}

// Fonction qui additionne deux objets de type MajorCredits
// Elle renvoie un nouvel objet MajorCredits contenant :
// - la somme des crédits des deux matières
// - la marque "Major" pour rester cohérent avec l'interface
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		brand: "Major"
	};
}

// Fonction qui additionne deux objets de type MinorCredits
// Même principe que la précédente, mais avec le type MinorCredits
// et la marque "Minor"
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		brand: "Minor"
	}
}
