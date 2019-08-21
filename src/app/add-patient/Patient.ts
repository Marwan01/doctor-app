export class Patient {

    constructor(
      public id: number,
      public firstname: string,
      public lastname: string,
      public alterEgo?: string //optional
    ) {  }
  
  }