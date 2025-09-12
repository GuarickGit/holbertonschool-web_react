/// <reference path="./Teacher.ts" />   // On importe les définitions de Teacher.ts (l’interface Teacher)
/// <reference path="./Subject.ts" />   // On importe la classe Subject dont Java va hériter

namespace Subjects {
  // On enrichit l’interface Teacher grâce à la "declaration merging"
  // Ici, on ajoute un nouvel attribut optionnel : "experienceTeachingJava"
  // Ce champ contiendra le nombre d’années (ou d’unités) d’expérience en Java
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // La classe Java hérite de Subject
  // Elle a donc accès à l’attribut "teacher" et à la méthode "setTeacher"
  export class Java extends Subject {
    // Méthode qui retourne une chaîne fixe listant les prérequis pour Java
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    // Méthode qui retourne le nom d’un prof disponible pour enseigner Java
    getAvailableTeacher(): string {
      // Si l’enseignant n’a pas de valeur ou a 0 pour "experienceTeachingJava"
      // alors on considère qu’il n’y a pas de prof disponible
      if (!this.teacher.experienceTeachingJava) {
        return "No available teacher";
      }
      // Sinon, on affiche le prénom du prof disponible
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
