import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-nav',
  templateUrl: './login-nav.component.html',
  styleUrls: ['./login-nav.component.css']
})
export class LoginNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profile()
  {
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'success',
      position: 'top-end',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    })
  }

}
