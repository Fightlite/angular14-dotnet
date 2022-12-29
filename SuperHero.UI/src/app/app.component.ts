import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  heroToEdit: SuperHero | undefined;
  
  constructor(
    private superHeroService: SuperHeroService,
  ) {}

  ngOnInit(): void {
    this.superHeroService.getSuperHeros().subscribe((heroes: SuperHero[]) => this.heroes = heroes)
  }

  initNewHero(): void {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }

  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }
}
