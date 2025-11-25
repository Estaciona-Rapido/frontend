import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './home.service';
import { Scenario } from 'src/app/dtos/scenario';
import { ParkingRegisterProposal } from 'src/app/dtos/parking-register-proposal';
import { HttpErrorResponse } from '@angular/common/http';
import { ModalComponent } from 'src/app/components/modal/modal.component';

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
  plate: string="";
  parkingRegisterProposal: ParkingRegisterProposal = {
    plate: "",
    priceModelId: -1
  };
  priceModelIdSelected: number=-1;


  @ViewChild('successModal') successModal!: ModalComponent;
  @ViewChild('errorModal') errorModal!: ModalComponent;
  @ViewChild('exceededModal') exceededModal!: ModalComponent;
  @ViewChild('closedModal') closedModal!: ModalComponent;
  @ViewChild('totalModal') totalModal!: ModalComponent;



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
    if (!this.currentScenario.open) {
      this.closedModal.open();
    } else if (this.occupancy >= this.currentScenario.capacity) {
      this.exceededModal.open();
    } else {
      this.state = 1;
    }
  }

  seekPriceOptionSelected(event: any){
    this.priceModelIdSelected = event.target.value;
  }

  cancelRegister() {
    this.state=0;
  }

  register() {
    this.parkingRegisterProposal.plate = this.plate;
    this.parkingRegisterProposal.priceModelId = this.priceModelIdSelected;
    this.service.register(this.parkingRegisterProposal).subscribe((response) => {
      this.successModal.open();
    }, (error: HttpErrorResponse) => {
      if (error.status == 400) {
        this.errorModal.open();
      }
    });
  }

  checkout(){
    this.totalModal.open();
  }

  resetHome(){
    this.successModal.close();
    this.state=0;
    this.plate='';
  }
}
