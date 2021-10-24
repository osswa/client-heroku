import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { UsuarioService } from '../../services/usuario.service';
import { Recepcionista } from '../../models/recepcionista';
import { GLOBAL } from '../../services/global';

@Component({
    selector: 'recepcionista_agrega',
    templateUrl: './agregaRecepcionista.component.html',
    providers: [UsuarioService]
})
export class RecepcionistaAgrega implements OnInit {

    public identity = '';
    public token = '';
    public rol = '';
    public recepcionista : Recepcionista;
    public url = GLOBAL.url;

    constructor(
        private usuarioService: UsuarioService
        ) 
      {
        this.recepcionista = new Recepcionista('','','','','','','','','','','','','','','','','','','','','');
      }

    ngOnInit(): void
    {
        this.identity = this.usuarioService.getIdentity();
        this.token = this.usuarioService.getToken();
        if(this.usuarioService.getIdentity()) {
            this.rol = JSON.parse(this.usuarioService.getIdentity()).rol;
        }  
    }

    onSubmit() {
      console.log('formulario recepcionista', this.recepcionista);
      
       this.msjCarga( 'Guradando los datos!', '', false);
       this.usuarioService.guardaRecepcionista(this.recepcionista).subscribe(
        response => 
        {        
          if(response) {

            let user = <any> response;
            console.log('recepcionista guardado', user.usuario);
            if(this.filesToUpload) {
              this.makeFileRequest(this.url + 'upload_imagen_usuario/' + user.usuario._id, [], this.filesToUpload)
                  .then(
                    result => {
                      console.log('guarda imagen respuesta', result);
                      let usuario = <any> result;                      
                      this.msjExito('Recepcionista guardado!!');
                      setTimeout(() => {                        
                        window.location.href = GLOBAL.urlComponents + 'menu';
                      }, 2000); 
                      //Swal.close()         
                    },
                    error => {
                      this.msjError('Error, imagen no guardada!!');
                      console.log('error de imagen', error);
                    });             
            }
          }
        },
        error => 
        {
          console.log('error', error);
          this.msjError('Error, recepcionista no guardado!!');        
        }
      );
    }

    public filesToUpload: Array<File> = [];
    public imagePath : any;
    imgURL: any;
    public message: string = '';
  
    preview(files : any) {
      if (files.length === 0)
        return;
  
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
  
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
      }
    }

    fileChangeEvent(fileInput: any) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
      console.log('filesToUpload', this.filesToUpload);
    }    

    makeFileRequest(url: string, params: Array<String>, files: Array<File>){
      let token = this.token;
      //console.log('token', token);

      return new Promise(function(resolve, reject){
        var formData: any = new FormData();
        var xhr = new XMLHttpRequest();

        for(let i = 0; i < files.length; i++) {
          formData.append('imagen', files[i], files[i].name);
        }

        xhr.onreadystatechange = function() {
          if(xhr.readyState == 4) {
            if(xhr.status == 200) {
              resolve(JSON.parse(xhr.response));
            } else {
              reject(xhr.response);
            }
          }
        }
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Authorization', token);
        xhr.send(formData);
      });
    }
    
    msjCarga(title : String, html : String, allowOutsideClick : boolean){ 
      Swal.fire({
        title,
        html,
        allowOutsideClick        
      });
      Swal.showLoading();
    } 

    msjError(title : String) {
      Swal.fire({
        icon: 'error',
        title,
        showConfirmButton: false,
        timer: 2000
      });
    }

    msjExito(title : String) {
      Swal.fire({
        icon: 'success',
        title,
        showConfirmButton: false,
        timer: 2000
      });
    }
}
//timerProgressBar: true,