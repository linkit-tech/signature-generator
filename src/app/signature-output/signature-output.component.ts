import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signature-output',
  templateUrl: './signature-output.component.html',
  styleUrls: ['./signature-output.component.scss']
})
export class SignatureOutputComponent implements OnInit {

  constructor( private route: ActivatedRoute ) { }

  name : string;
  role : string;
  mail : string;
  phone : string;
  logoUrl :string; 

  colorLogo = ["linkit_dunkelblau.png","linkit_gelb.png","linkit_gruen.png","linkit_hellblau.png","linkit_orange.png","linkit_pink.png","linkit_rot.png","linkit_tuerkis.png"];

  ngOnInit(): void {
    let colorStr = this.colorLogo[Math.floor(Math.random() * this.colorLogo.length)];
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.role = params['role'];
      this.mail = params['mail'];
      this.phone = params['phone'];
    });
    this.logoUrl = "https://www.linkit.tech/assets/img/logo/" + colorStr ;
  }

 copyToClip() {
  let str = document.getElementById('signaturecontent').innerHTML;
    function listener(e) {
      e.clipboardData.setData("text/html", str);
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
  };
  

}
