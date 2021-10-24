import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { LoginUsuario } from '../models/loginUsuario';
import { GLOBAL } from '../services/global';

//luisnovoa22@hotmail.com
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
    
    public msjErrorLogin : Boolean = false;
    public title = 'orthosmile';
    public loginUsuario: LoginUsuario;
    public identity = '';
    public token = '';
  
    constructor(
      private usuarioService: UsuarioService
      ) 
    {
      this.loginUsuario = new LoginUsuario('','','true');
    }
  
    ngOnInit(): void
    {
       /* this.identity = this.usuarioService.getIdentity();
        this.token = this.usuarioService.getToken();  */ 
    }
  
    public onSubmit()
    {
      console.log('datos petición', this.loginUsuario);
      this.msjErrorLogin = false;
      this.usuarioService.signup(this.loginUsuario).subscribe(
        response => 
        {        
          if(response)
          {
            let resp = <any> response;
            if(resp.token)
            {
              let tokenUsuario = resp.token.split('.')[1];
              localStorage.setItem('token', resp.token);
              //this.identity = JSON.parse(window.atob(tokenUsuario));
              //this.identity = window.atob(tokenUsuario);
              localStorage.setItem('identity', window.atob(tokenUsuario));
              console.log(localStorage.getItem('identity'));
              window.location.href = GLOBAL.urlComponents + 'menu';
            }          
          }
        },
        error => 
        {
          console.log('error', error);
          this.msjErrorLogin = true;
        }
      );
    }
  
    public logOut()
    {
      localStorage.removeItem('token');
      localStorage.removeItem('identity');
      localStorage.clear();
      this.identity = '';
      this.token = '';
    }

}