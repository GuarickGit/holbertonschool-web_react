/// <reference path="./Teacher.ts" />   // On inclut Teacher.ts pour pouvoir utiliser l’interface Teacher

namespace Subjects {
  // La classe Subject représente une matière générique
  export class Subject {
    // Attribut de type Teacher (le prof affecté à cette matière)
    // Le "!" dit à TypeScript : "ne t’inquiète pas, je vais bien l’initialiser avant usage"
    teacher!: Teacher;

    // Méthode setter : permet d’associer un professeur à cette matière
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
