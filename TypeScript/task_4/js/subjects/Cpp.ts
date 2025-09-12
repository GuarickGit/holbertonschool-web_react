/// <reference path="./Teacher.ts" />   // On dit à TypeScript d'inclure les définitions du fichier Teacher.ts
/// <reference path="./Subject.ts" />   // On inclut aussi Subject.ts pour pouvoir hériter de la classe Subject

namespace Subjects {
  // On étend l'interface Teacher déjà existante avec un nouvel attribut optionnel
  // Ici, "experienceTeachingC" est un nombre représentant l'expérience en enseignement du langage C
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // La classe Cpp hérite de Subject (elle a donc accès à "teacher" et "setTeacher")
  export class Cpp extends Subject {
    // Méthode qui retourne une chaîne de caractères fixe indiquant les prérequis pour Cpp
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    // Méthode qui retourne le nom d'un prof disponible
    getAvailableTeacher(): string {
      // Si le prof n'a pas de valeur pour experienceTeachingC (undefined ou 0), pas de prof dispo
      if (!this.teacher.experienceTeachingC) {
        return "No available teacher";
      }
      // Sinon, on affiche le prénom du prof
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
