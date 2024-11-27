export interface quarterType {
    quarter: number;
    title: string;
    subjects: string[];
  }
  
  export interface degreesType {
    id: number;
    idForeign?: number;
    title?: string;
    img?: string;
    pdf?: string;
    area?: string;
    type: string;
    competencies: string[];
    quarters: quarterType[];
  }
  