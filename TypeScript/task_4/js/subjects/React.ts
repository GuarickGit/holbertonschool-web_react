/// <reference path="./Teacher.ts" />   // On inclut Teacher.ts pour accéder et étendre l’interface Teacher
/// <reference path="./Subject.ts" />   // On inclut Subject.ts car React hérite de Subject

namespace Subjects {
  // On enrichit encore une fois l’interface Teacher (declaration merging)
  // On ajoute un champ optionnel : "experienceTeachingReact"
  // Il indiquera l’expérience de l’enseignant en React (par exemple, nombre d’années)
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // La classe React hérite de la classe Subject
  // Elle a donc un attribut "teacher" et une méthode "setTeacher"
  export class React extends Subject {
    // Retourne une phrase fixe décrivant les prérequis de la matière React
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    // Retourne un message indiquant si un professeur est disponible pour React
    getAvailableTeacher(): string {
      // Si l’attribut "experienceTeachingReact" n’est pas défini ou vaut 0,
      // on considère qu’il n’y a pas de professeur disponible
      if (!this.teacher.experienceTeachingReact) {
        return "No available teacher";
      }
      // Sinon, on affiche le prénom du professeur disponible
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
