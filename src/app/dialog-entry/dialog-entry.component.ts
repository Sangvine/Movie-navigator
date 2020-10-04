import { ModalWindowComponent } from './../modal-window/modal-window.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { relative } from 'path';

@Component({
  template: '',
})
export class DialogEntryComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.navigate(['detail/0'], { relativeTo: this.route });
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
