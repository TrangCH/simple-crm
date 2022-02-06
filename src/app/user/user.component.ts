import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = new User();
  allUsers : any = [];

  /**
   * public dialog: MatDialog ist wichtig, damit man schon bereits vorhandenen Funktionen aus Angular verwenden kann.
   * Siehe unten: openDialog()
   */
  constructor(public dialog: MatDialog, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
    .collection('users') // Hier, welche collection wir abonnieren möchten. Wie bei dialog-add-user.comp.ts
    .valueChanges({idField: 'customIdName'}) // Immer, wenn sich das Ding ändert, dann abonnieren wir diese Änderung:
    .subscribe((changes: any) => {
      console.log('Received changes from DB', changes);
      this.allUsers = changes;
      // Immer, wenn wir eine Änderung erhalten, werden die beiden Zeilen hier darüber aufgerufen und 
      // this.allUsers geht hoch und allUsers wird geupdated.
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
