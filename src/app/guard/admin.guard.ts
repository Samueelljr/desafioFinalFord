import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  // Injeta o serviço de roteamento
  const router = inject(Router);

  // Verifica se a flag 'isAdmin' está no localStorage
  const isAdmin = sessionStorage.getItem('isAdmin');
  console.log('ADMIN GUARD ATIVADO | Valor de isAdmin:', isAdmin);
  if (isAdmin === 'true') {
    return true; // Acesso permitido
  } else {
    // Se não for admin, redireciona para a página inicial
    router.navigate(['/']);
    return false; // Acesso bloqueado
  }
};