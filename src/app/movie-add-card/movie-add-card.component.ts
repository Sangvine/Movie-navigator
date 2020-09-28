import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AddFormComponent } from './../add-form/add-form.component';
import { ModalWindowComponent } from './../modal-window/modal-window.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-add-card',
  templateUrl: './movie-add-card.component.html',
  styleUrls: ['./movie-add-card.component.scss'],
})
export class MovieAddCardComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public router: Router,
    private location: Location
  ) {}

  addCard() {
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      data: {
        title: 'Добавить фильм',
        type: 'add',
        template: AddFormComponent,
      },
      width: '30%',
      minWidth: '200px',
    });
    this.router.navigate(['add']);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.location.back();
    });
  }

  ngOnInit(): void {}
}
