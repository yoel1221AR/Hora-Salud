import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/abssa/services/login.service';

@Component({
  selector: 'app-ab-login-view',
  templateUrl: './ab-login-view.component.html',
  styleUrls: ['./ab-login-view.component.scss']
})
export class AbLoginViewComponent {
  loginForm: FormGroup;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private loginService: LoginService,
    private http: HttpClient, private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

 async onSubmit() {
    if (this.loginForm.valid) {
      try {
        // Obtener la IP pública
        const ipResponse = await this.http
          .get<{ ip: string }>('https://api.ipify.org?format=json')
          .toPromise();

        const payload = {
          ip: ipResponse?.ip || 'IP desconocida',
          usuario: this.loginForm.value.username,
        };

        // Intentar el login
        const response = await this.loginService.loginPreAdmin(payload).toPromise();
        console.log('Login exitoso:', response);
        this.nextPage()

      } catch (error) {
        console.log('Error en el login:', error);
        
      }
    }
  } 

  nextPage() {
    this.router.navigate(['/public/ab-login-abssa']);
  }
}
