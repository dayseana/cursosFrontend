import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }
 
  //private API_URL = 'http://localhost:8000/api/';
  private API_URL = 'https://evening-depths-29423.herokuapp.com/api/';

  login(email: String, senha: String) {
    return new Promise((resolve, reject) => {
      var postData = {
        "email": email,
        "senha": senha,
      };

      this.http.post(this.API_URL + 'alunosLogin', postData)
	.subscribe(
          (result: any) => {
            console.log(result);
            resolve(result);
          },
          (error) => {
            console.log(error);
            reject(error);
	  }
        );
      }
    );
  }
}
