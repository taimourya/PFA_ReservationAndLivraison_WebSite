import { Component, OnInit } from '@angular/core';
import { faMapMarked, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  faMapMarked = faMapMarked;
  faPhone = faPhone;
  faEnvelopeOpen = faEnvelopeOpen;

  constructor() { }

  ngOnInit(): void {
  }

}
