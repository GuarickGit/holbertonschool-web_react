// Définition de l'interface Student :
// elle impose que tout "Student" ait 4 propriétés avec ces types
interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

// Création du premier étudiant en respectant l'interface Student
const student1: Student = {
  firstName: "Thyam",
  lastName: "Fresne",
  age: 4,
  location: "France"
}

// Création du deuxième étudiant
const student2: Student = {
  firstName: "Aaron",
  lastName: "Fresne",
  age: 1,
  location: "France"
}

// Tableau typé Student[] : il contient uniquement des objets Student
const studentsList: Student[] = [student1, student2]

// Attendre que le DOM (page HTML) soit chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', () => {
  // Création d'un élément <table>
  const table = document.createElement('table');
  // Ajout de la table au body du document
  document.body.appendChild(table);

  // Boucle sur chaque étudiant du tableau
  for (const student of studentsList) {
	// Création d'une ligne <tr> pour l'étudiant
	const row = document.createElement('tr');

	// Première cellule <td> : le prénom
	const firstNameCell = document.createElement('td');
	firstNameCell.textContent = student.firstName;

	// Deuxième cellule <td> : la localisation
	const locationCell = document.createElement('td');
	locationCell.textContent = student.location;

	// On insère les deux cellules dans la ligne
	row.appendChild(firstNameCell);
	row.appendChild(locationCell);

	// On insère la ligne dans la table
	table.appendChild(row)
  }
});
