import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Scenario } from 'src/app/dtos/scenario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  state: number=0;
  currentScenario: Scenario = {
    id: BigInt(-1),
    scenarioName: "Não encontrado",
    open: false,
    capacity: BigInt(-1),
    prices: []
  };
  occupancy: bigint=BigInt(-1);

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.service.getCurrentScenario().subscribe((currentScenario) => {
      this.currentScenario = currentScenario;
    });
    this.service.getOccupancy().subscribe((occupancy) => {
      this.occupancy = occupancy;
    });
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
