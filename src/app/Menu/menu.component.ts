import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { LoginUsuario } from '../models/loginUsuario';
import { GLOBAL } from '../services/global';

@Component({
    selector: 'menu_principal',
    templateUrl: './menu.component.html',
    providers: [UsuarioService]
})
export class MenuComponent implements OnInit {

    public identity = '';
    public token = '';
    public rol = '';

    constructor(
        private usuarioService: UsuarioService
        ) 
      {
      
      }

    ngOnInit(): void
    {
        this.identity = this.usuarioService.getIdentity();
        this.token = this.usuarioService.getToken();
        if(this.usuarioService.getIdentity()) {
            this.rol = JSON.parse(this.usuarioService.getIdentity()).rol;
            console.log('datos dentro del identity', JSON.parse(this.usuarioService.getIdentity()));
        }  
    }

    public logOut()
    {
        window.location.href = GLOBAL.urlComponents;
        localStorage.removeItem('token');
        localStorage.removeItem('identity');
        localStorage.clear();
        this.identity = '';
        this.token = '';
        console.log('termina logOut');      
    }

}