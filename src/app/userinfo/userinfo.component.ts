import { Component, OnInit } from '@angular/core';
import ressortList from '../../assets/ressortlist.json'
import { Linkitmember } from '../linkitmember'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  constructor( private router: Router ) { }

  model = new Linkitmember(0,"Siggi Hartmann", ressortList.ressorts[0].name,"17681528058","siggi.hartmann@linkit.tech");

  title = 'signature-generator';
  ressorts = ressortList.ressorts;
  ngOnInit(): void {
  }

  submitted = false;
  onSubmit() { this.submitted = true; 
    this.router.navigate(['/result'], { queryParams: { "name" : this.model.name, "role" : this.model.role, "mail": this.model.mail, "phone" : this.model.phone } });
  }

}
