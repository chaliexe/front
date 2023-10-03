import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  redirectToIg(){
    window.open('https://www.instagram.com/' )
  }
  redirectToFb(){
    window.open('https://www.facebook.com/?locale=es_LA')
  }

  redirectToWpp() {
    window.open('https://wa.me/+5493462548527', '_blank')

  }

}
