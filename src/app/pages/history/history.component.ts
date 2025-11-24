import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';
import { ParkingRecord } from 'src/app/dtos/parking-record';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyRegistries: ParkingRecord[] = [];

  constructor(private service: HistoryService) { }

  ngOnInit(): void {
    this.service.getHistory().subscribe((historyRegistries) => {
      this.historyRegistries = historyRegistries;
    });
  }

  printTotal(total: number) {
    if (total)
      return "R$ " + total;
    else
      return "Não saiu";
  }

  printLeave(leave: string) {
    if (leave)
      return leave;
    else
      return "Não saiu";
  }

}
