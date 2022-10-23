import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.css'],
})
export class CarroselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      const banners = document.querySelectorAll('[ data-js="banner"]');

      if (banners[0].className.includes('display-none')) {
        banners[0].classList.remove('display-none');
        banners[1].classList.add('display-none');
      } else {
        banners[1].classList.remove('display-none');
        banners[0].classList.add('display-none');
      }
    }, 5000);
  }
}
