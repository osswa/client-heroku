import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { LoginUsuario } from './models/loginUsuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UsuarioService],
})
export class AppComponent implements OnInit {
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
    /*this.identity = this.usuarioService.getIdentity();
    this.token = this.usuarioService.getToken();   */
  }

  public onSubmit()
  {
    /*console.log('datos petición', this.loginUsuario);
    this.usuarioService.signup(this.loginUsuario).subscribe(
      response => 
      {        
        if(response)
        {
          let resp = <any> response;
          if(resp.token)
          {
            let tokenUsuario = resp.token.split('.')[1];
            localStorage.setItem('token', tokenUsuario);
            //this.identity = JSON.parse(window.atob(tokenUsuario));
            this.identity = window.atob(tokenUsuario);
            localStorage.setItem('identity', this.identity);
            console.log(localStorage.getItem('identity'));
          }          
        }
      },
      error => 
      {
        console.log('error', error);
      }
    );*/
  }

  public logOut()
  {
    /*localStorage.removeItem('token');
    localStorage.removeItem('identity');
    localStorage.clear();
    this.identity = '';
    this.token = '';*/
  }
}
