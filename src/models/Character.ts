import { Episode } from "./episode";
import { Location } from "./location";

export class Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: string;
    episode: Episode[];
    url: string;
    created: string;
  
    constructor() {
      this.id = 0;
      this.name = '';
      this.status = '';
      this.species = '';
      this.type = '';
      this.gender = '';
      this.origin = new Location();
      this.location = new Location();
      this.image = '';
      this.episode = [];
      this.url = '';
      this.created = '';
    }
  }