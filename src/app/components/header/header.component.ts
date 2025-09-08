
import { Component, ViewChild, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ModalLoginComponent } from '../modal/modal-login/modal-login.component';
import { ModalRegisterComponent } from '../modal/modal-register/modal-register.component';
import { AuthService } from '../../services/auth.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    TranslateModule,
    ModalLoginComponent,
    ModalRegisterComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpen = false;
  nomeUsuario: string | null = null;
  private unsubscribe: any;
  isLoged? = false;
  noLoged? = false;
  openLanguage = false;

  selectedLanguage = 'pt';

  constructor(private authService: AuthService,
    private translateService: TranslateService
  ) {

    const savedLang = localStorage.getItem('lang');
    if(savedLang) {
      this.selectedLanguage = savedLang;
    }
    this.translateService.setFallbackLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  getSelectedFlag(): string{
    return (
      this.languages.find(lang => lang.code === this.selectedLanguage)?.flag ||
      'assets/images/flags/brasil.png'
    );
  };

  setLanguage(lang: string) {
    this.selectedLanguage = lang;
    localStorage.setItem('lang', lang);
    this.translateService.use(lang);
    this.openLanguage = false;
  }


  languages = [
    { code: 'pt', name: 'Português', flag: 'assets/images/flags/brasil.png' },
    { code: 'en', name: 'English', flag: 'assets/images/flags/eua.png' },
    { code: 'es', name: 'Espanhol', flag: 'assets/images/flags/esp.png' }
  ]

  ngOnInit() {
    // Monitora login/logout
    this.unsubscribe = this.authService.onAuthChange((user: User | null) => {
      this.nomeUsuario = user?.displayName || null;
    });

    this.authService.user$.subscribe(user => {
      this.isLoged = !!user;
      this.noLoged = !user;
    });
  }

  ngOnDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  @ViewChild(ModalLoginComponent, {static: false}) modal!: ModalLoginComponent;

  ngAfterViewInit() {
    // Só para conferir que o ViewChild foi inicializado
    console.log('Modal:', this.modal);
  }

  openLogin() {
    if (this.modal) {
      this.modal.open();
      this.isOpen = false;
    } 
  }

  @ViewChild(ModalRegisterComponent, {static: false}) modalRegister!: ModalRegisterComponent;

  openRegister() {
    this.modalRegister.open();
    this.isOpen = false;
  }

  innerWidth = window.innerWidth;

  initBtnDropdown() {
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
    })
  }

  isVisible(): boolean {
    return this.innerWidth > 568; // Mostra só se for maior que 568px
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
    onWindowScroll() {
      if(window.scrollY > 2) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }
  
    logout() {
      this.authService.logout()
    }
}

