export class Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.air_date = '';
    this.episode = '';
    this.characters = [];
    this.url = '';
    this.created = '';
  }
}  