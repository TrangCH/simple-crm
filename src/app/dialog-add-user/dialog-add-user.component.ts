import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate!: Date;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime(); // Zeit, die nach dem 01.01.1070 vergangen ist in ms.
    console.log('User', this.user);

    this.firestore
    .collection('user')
    .add(this.user.toJSON())
    .then((result: any) => {
      console.log('adding user finifhes', result);
    });
  }

}
