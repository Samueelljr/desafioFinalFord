import { Component, ViewChild, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ModalLoginComponent } from '../modal/modal-login/modal-login.component';
import { ModalRegisterComponent } from '../modal/modal-register/modal-register.component';
import { AuthService } from '../../services/auth.service';
import { User } from 'firebase/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true, // Use standalone: true se seu projeto for standalone
  imports: [
    CommonModule,
    TranslateModule,
    ModalLoginComponent,
    ModalRegisterComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// Adicionado "implements OnInit, OnDestroy" para seguir as boas práticas
export class HeaderComponent implements OnInit, OnDestroy {
  isOpen = false;
  nomeUsuario: string | null = null;
  isLoged = false;
  noLoged = true; // Valor inicial correto
  openLanguage = false;
  isDarkMode = false;
  selectedLanguage = 'pt';
  isScrolled = false;
  innerWidth = window.innerWidth;

  // 👇 AQUI ESTÁ A CORREÇÃO PRINCIPAL: APENAS AS DUAS VARIÁVEIS NECESSÁRIAS 👇
  private unsubscribeAuthChange: (() => void) | null = null;
  private subscription: Subscription | null = null;

  @ViewChild(ModalLoginComponent) modal!: ModalLoginComponent;
  @ViewChild(ModalRegisterComponent) modalRegister!: ModalRegisterComponent;

  constructor(
    private authService: AuthService,
    private translateService: TranslateService
  ) {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.selectedLanguage = savedLang;
    }
    this.translateService.use(this.selectedLanguage);
  }

  ngOnInit() {
    // 1) Captura a FUNÇÃO de unsubscribe do Firebase
    this.unsubscribeAuthChange = this.authService.onAuthChange((user: User | null) => {
      this.nomeUsuario = user?.displayName || null;
    });

    // 2) Captura o OBJETO Subscription do RxJS
    this.subscription = this.authService.user$.subscribe(user => {
      this.isLoged = !!user;
      this.noLoged = !user;
    });

    // 3) Lógica do Tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }

    this.initBtnDropdown();
  }

  ngOnDestroy() {
    // Cancela a escuta do Firebase (executa a função)
    if (this.unsubscribeAuthChange) {
      this.unsubscribeAuthChange();
    }

    // Cancela a escuta do RxJS (chama o método .unsubscribe())
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // --- O restante do seu código permanece igual ---

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 2;
  }
  
  languages = [
    { code: 'pt', name: 'Português', flag: 'assets/images/flags/brasil.png' },
    { code: 'en', name: 'English', flag: 'assets/images/flags/eua.png' },
    { code: 'es', name: 'Espanhol', flag: 'assets/images/flags/esp.png' }
  ];

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }

  getSelectedFlag(): string {
    return this.languages.find(lang => lang.code === this.selectedLanguage)?.flag || '';
  }

  setLanguage(lang: string) {
    this.selectedLanguage = lang;
    localStorage.setItem('lang', lang);
    this.translateService.use(lang);
    this.openLanguage = false;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  openLogin() {
    if (this.modal) {
      this.modal.open();
      this.isOpen = false;
    }
  }

  openRegister() {
    if (this.modalRegister) {
      this.modalRegister.open();
      this.isOpen = false;
    }
  }

  initBtnDropdown() {
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
    });
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  logout() {
    this.authService.logout();
  }

  reloadHome() {
    window.location.reload();
  }
}