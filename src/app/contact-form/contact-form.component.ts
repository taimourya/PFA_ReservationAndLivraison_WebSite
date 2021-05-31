import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../services/ContactService';
import { faEnvelopeSquare, faTag, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  faEnvelopeSquare = faEnvelopeSquare;
  faTag = faTag;
  faPencilAlt = faPencilAlt;
  
  

  sending: boolean = false;
  sendDone: boolean = false;



  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

  }

  submited(form: NgForm) {
    this.sending = true;
    this.contactService.sendMessage(form.value['email'], form.value['sujet'], form.value['message']);
    setTimeout(
      () => {
        this.sending = false;
        this.sendDone = true;
      }, 2000
    );
  }

}
