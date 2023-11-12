import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css'
})
export class PageLoginComponent {

  name!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', { name: this.name, email: this.email, password: this.password, confirmPassword: this.confirmPassword });
  }
}
