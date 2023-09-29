import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  redirectToWpp() {
    window.open('https://wa.me/+5493462548527', '_blank')

  }

}
