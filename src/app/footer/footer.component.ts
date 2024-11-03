import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

export interface Email { 
  email: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  //isLoggedIn$: Observable<boolean>; // Use an Observable for real-time updates
  email : string = '';
  private itemsCollection: AngularFirestoreCollection<Email>;
  items: Observable<Email[]>;

  constructor(public auth: AngularFireAuth, public firestore: AngularFirestore) {
    this.itemsCollection = firestore.collection<Email>('newsletter');
    this.items = this.itemsCollection.valueChanges();
    // this.isLoggedIn$ = this.auth.authState.pipe(
    //   map(user => !!user) // Convert user object to true/false (logged in or not)
    // );
   }

   addItem(item: Email) {
    this.itemsCollection.add(item)
      .then(() => {
        console.log('Document added successfully!');
        // Optionally reset the form or display a success message
      })
      .catch(error => {
        console.error('Error adding document: ', error);
        // Handle the error (e.g., display an error message)
      });
  }


  onSubmit() {
    const newEmail: Email = { email: this.email }; // Create the object

    this.addItem(newEmail);
    console.log("submitting form data");
  }
}
