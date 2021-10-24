import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { LoginUsuario } from '../../models/loginUsuario';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'recepcionista_busca',
    templateUrl: './buscaRecepcionista.component.html',
    providers: [UsuarioService]
})
export class RecepcionistaBusca implements OnInit {

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

    filter : String = '';
    time : any;
    applyFilter() {
                
        //console.log(filterValue.trim().toLowerCase());
        clearTimeout(this.time);
        this.time = setTimeout(() => {
                console.log('name>>>', this.filter);   
            }, 1000);       
    }


}