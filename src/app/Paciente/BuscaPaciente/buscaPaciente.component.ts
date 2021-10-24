import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { LoginUsuario } from '../../models/loginUsuario';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'paciente_busca',
    templateUrl: './buscaPaciente.component.html',
    providers: [UsuarioService]
})
export class PacienteBusca implements OnInit {

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
        }  
    }



}