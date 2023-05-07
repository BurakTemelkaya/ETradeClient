import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-diaglog',
  templateUrl: './delete-diaglog.component.html',
  styleUrls: ['./delete-diaglog.component.scss']
})
export class DeleteDiaglogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDiaglogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteState,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export enum DeleteState {
  Yes,
  No
}
