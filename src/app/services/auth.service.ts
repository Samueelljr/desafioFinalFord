import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Observable com o usuário logado (null se deslogado)
  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.user$ = authState(this.auth);
  }

   // Retorna o usuário atual
   getCurrentUser(): Promise<User | null> {
    return Promise.resolve(this.auth.currentUser);
  }

  // Observa mudanças no login/logout
 onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(this.auth, callback);
}

  // LOGIN
  async login(email: string, password: string) {
    const cred = await signInWithEmailAndPassword(this.auth, email, password);
    console.log("Usuário logado:", cred.user);
    console.log("DisplayName:", cred.user.displayName);
    return cred
  }

  // CADASTRO + definir displayName (nome)
  async registerWithName(nome: string, email: string, password: string) {
    const cred = await createUserWithEmailAndPassword(this.auth, email, password);
    await updateProfile(cred.user, { displayName: nome }); // <- AQUI grava o nome
    return cred;
  }

  // (Opcional) Atualizar nome depois (caso precise)
  async updateDisplayName(nome: string) {
    if (this.auth.currentUser) {
      await updateProfile(this.auth.currentUser, { displayName: nome });
    }
  }

  // LOGOUT
  logout() {
    sessionStorage.removeItem('isAdmin');
    localStorage.removeItem('isAdmin');
    return this.auth.signOut();
  }

  // Helpers
  get currentUser(): User | null {
    return this.auth.currentUser;
  }

  get currentDisplayName(): string | null {
    return this.auth.currentUser?.displayName ?? null;
  }
}
