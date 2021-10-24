import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { LoginUsuario } from '../models/loginUsuario';
import { Recepcionista } from '../models/recepcionista';
//.pipe(map(res => res.json()));

@Injectable()
export class UsuarioService {

    public url: string;

    constructor(private _http: HttpClient) 
    {
        this.url = GLOBAL.url;
    }

    signup(userToLogin: LoginUsuario) 
    {
        let body = JSON.stringify(userToLogin);

        let headers = new HttpHeaders({'Content-Type':'application/json'});

        return this._http.post(this.url + 'login', body, {headers: headers})
                        .pipe(map(res => res));
    }

    guardaRecepcionista(recepcionista : Recepcionista) {

        let body = JSON.stringify(recepcionista);
        let headers = new HttpHeaders({'Content-Type':'application/json'});

        return this._http.post(this.url + 'guarda_recepcionista', body, {headers: headers});
    }

    getIdentity(): string
    {
        let datos = localStorage.getItem('identity');
        let identity = '';
        if(datos)
        {
            identity = datos;
        }
        return identity;
    }

    getToken(): string
    {
        let datos = localStorage.getItem('token');
        let token = '';
        if(datos)
        {
            token = datos;
        }
        return token;
    }
}