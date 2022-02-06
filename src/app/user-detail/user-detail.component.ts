import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: any = '';
  user: User = new User();

  constructor(private route:ActivatedRoute, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id'); // id aus app-routing.module.ts
      console.log('Got Id', this.userId);
      this.getUser();
  })
  }

  getUser() {
    this.firestore
    .collection('users')
    .doc(this.userId)
    .valueChanges()
    .subscribe((user: any) => {
      // Wir wandeln unser JSON user in ein Objekt vom Typ User um. Wir haben Typ User in user.class.ts
      this.user = new User(user); // Aktualisierung: JSON user wird in das neue User Objekt platziert. 
      
      console.log('Retrieved user', this.user);
    });
  }

}
