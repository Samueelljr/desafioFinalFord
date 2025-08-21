import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validator, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
contactForm;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', [Validators.required, Validators.minLength(10)]]
    });
  }



  onSubmit() {
    if (this.contactForm.valid) {
      const nomeCompleto = this.contactForm.get('nomeCompleto')?.value;
      const email = this.contactForm.get('email')?.value;
      const mensagem = this.contactForm.get('mensagem')?.value;
  
      emailjs.send(
        'service_bewgr6a',
        'template_b5v5qf8',
        {
          name: nomeCompleto,
          email: email,
          mensagem: mensagem
        },
        'Ssp36LhMfhF_Z9pFq'
      )
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        this.contactForm.reset();
      })
      .catch((err) => {
        console.error(err);
        alert('Erro ao enviar mensagem.');
      });
    }
  }}