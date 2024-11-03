import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

export interface Item {
  name: string;
  email: string;
  subject: string;
  message: string;
}


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  isLoggedIn$: Observable<boolean>; // Use an Observable for real-time updates

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(public auth: AngularFireAuth, public firestore: AngularFirestore) {
    this.itemsCollection = firestore.collection<Item>('ContactForm');
    this.items = this.itemsCollection.valueChanges();
    this.isLoggedIn$ = this.auth.authState.pipe(
      map(user => !!user) // Convert user object to true/false (logged in or not)
    );
   }

   addItem(item: Item) {
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

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };




  // login() {
  //   this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }

  logout() {
    this.auth.signOut();
  }

  signInWithGoogle() {
    console.log("signing in with google");
    
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        console.log('Signed in with Google!');
        // Form will be shown automatically due to authState subscription     
        
      })
      .catch(error => console.error('Error signing in:', error));
  }


  async onSubmit() {
    console.log("submitting form data");

    if (!this.auth.user) {
      console.log('User not signed in!');    
         return; // Don't submit if the user is not signed in
    }

    try {
      // this.formData.name = this.auth.user.displayName || '' ;
      // this.formData.email = this.auth.user.email || '';
     
      //const contactsCollection = ('ContactForm'); // collection(, 'ContactForm'); // Reference to 'contacts' collection
      //await addDoc(this.formData); // Add data to Firestore
      this.addItem(this.formData);
      console.log('Form data submitted successfully!');
      // Optionally reset the form or show a success message
    } catch (error) {
      console.error('Error submitting form data:', error);
      // Handle the error (e.g., display an error message)
    }
  }

}





