import {inject} from '@angular/core';
import {Router} from '@angular/router';

export const LoginGuard = () => {

  const router: Router = inject(Router)

  if (localStorage.getItem('clienteAtual')) {
    return router.navigateByUrl('/');
  }
  return;
}
