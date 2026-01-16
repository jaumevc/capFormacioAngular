
import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    imports: [UpperCasePipe],
})      
export class HeroPageComponent {
      name = signal('Ironman') ;
      age =  signal(45);

      heroDescription = computed( () => {
        const descripcio=`${ this.name() } - ${ this.age() } años`
        return descripcio;
      });

    //   getHeroDescription(): string {
    //       return `${ this.name() } - ${ this.age() } años`;
    //   }

    capitalizeName = computed( () => {
        return this.name().toUpperCase();
      });

      
      changeHero(): void {
          this.name.set('Spiderman');
          this.age.set(30);
      }

      resetForm()   : void {
          this.name.set('Ironman');
          this.age.set(45);
      }

      changeAge() : void {
          this.age.update( v=> v + 15 );
      }

}
