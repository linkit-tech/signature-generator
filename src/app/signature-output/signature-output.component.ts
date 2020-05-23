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

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.role = params['role'];
      this.mail = params['mail'];
      this.phone = params['phone'];
    });

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
