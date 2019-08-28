export class Patient {

    constructor(
      public id: number,
      public firstname: string,
      public lastname: string,
      public diagnosis: string, 
      public examined: boolean,
      public examinedOn?: any,
      public notes?: string
    ) {  }
  
  }