import { ModalWindowComponent } from './../modal-window/modal-window.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-add-card',
  templateUrl: './movie-add-card.component.html',
  styleUrls: ['./movie-add-card.component.scss'],
})
export class MovieAddCardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  addCard() {
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      data: { title: 'Добавить фильм', type: 'add' },
      width: '30%',
      minWidth: '200px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {}
}
