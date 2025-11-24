import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  state: number=0;
  constructor() { }

  ngOnInit(): void {
  }
  prepareRegister(){
    this.state = 1;
  }

  register(){
    const modal: any = document.getElementById('total-modal');
    if (modal) {
      modal.showModal();
    }
  }
}
