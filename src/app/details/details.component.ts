import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Character } from '../../models/Character';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  characterId: number = 0;
  character: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.characterId = +params['id']; 
      this.getCharacterDetails(this.characterId);
    });
  }

  getCharacterDetails(id: number) {
    this.apiService.getCharacterById(id).subscribe((data: Character) => {
      this.character = data;
    });
  }

  back() {
    this.router.navigate(['/']);
  }
}