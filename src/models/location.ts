export class Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.type = '';
    this.dimension = '';
    this.residents = [];
    this.url = '';
    this.created = '';
  }
}  