import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input('dialog-id') dialog_id: string="default-modal-dialog";
  @Input() width: number = 990;
  @Input() height: number = 587;
  constructor() { }

  
  ngOnInit(): void {
  }

  @ViewChild('dlg') dialog!: ElementRef<any>;

  open() {
    this.dialog.nativeElement.showModal();
  }

  close() {
    this.dialog.nativeElement.close();
  }


}
