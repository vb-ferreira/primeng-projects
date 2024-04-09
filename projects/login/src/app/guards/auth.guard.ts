import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem('email')) {
    return true;
  } else {
    const router = inject(Router);
    // Ao tentar acessar qualquer página sem permissão, o usuário será redirecionado ao login
    return router.navigate(['login']);
  }
};
