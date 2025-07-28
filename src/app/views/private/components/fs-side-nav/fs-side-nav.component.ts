import {
  Component,
  HostListener,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { ThemeService } from 'src/app/shared/services/theme.service';
import { MatDialogService } from 'src/app/shared/services/mat-dialog.service';
import { Lang } from 'src/app/shared/models/Lang';
import { LangService } from 'src/app/shared/services/lang.service';
import { DateAdapter } from '@angular/material/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-fs-side-nav',
  templateUrl: './fs-side-nav.component.html',
  styleUrls: ['./fs-side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FsSideNavComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  langs: Lang[] = [];
 /*  profile!: FsProfile; */
  closed: boolean = true;
  panelOpenState = false;
  pageTitle = 'INICIO';
  mode!: MatDrawerMode;
  exitItem = {
    text: 'CERRAR SESIÓN',
    link: '',
    icon: 'fas fa-sign-out-alt',
  };
  companyLogo!: string;
  displayLogoMobile: boolean = false;
  windowWidth: number = window.innerWidth;
  shouldShowBlock: boolean = true;
  pageTitleMap = new Map<string, string>([
    ['/finsuite/home', ''],
    ['/finsuite/cards/new-card', 'FS.TITLE.TITLENEWCARD'],
    ['/finsuite/cards', 'FS.TITLE.TITLECARD'],
    ['/finsuite/operaciones', 'FS.TITLE.TITLEOPERATIONS'],
    ['/finsuite/points', 'FS.TITLE.TITLEPOINTS'],
    ['/finsuite/loan', 'FS.TITLE.TITLELOAN'],
    ['/finsuite/pay-service', 'FS.TITLE.TITLEPAYSERVICE'],
    ['/finsuite/we-offer', 'FS.TITLE.TITLEWEOFFER'],
    ['/finsuite/insurances', 'FS.TITLE.TITLEINSURANCE'],
    ['/finsuite/cards/setting', 'FS.TITLE.TITLECONFIG'],
    ['/finsuite/notifications', 'FS.TITLE.NOTIFICATIONS'],
    ['/finsuite/profile', 'FS.TITLE.TITLEPROFILE'],
    ['/finsuite/fixed-deposit', 'FS.TITLE.FIXED-DEPOSIT'],
    ['/finsuite/help', 'FS.TITLE.HELP'],
    ['/finsuite/edit', 'FS.TITLE.ACCOUNT-SETTINGS'],
  ]);
  themeConfigSub: Subscription = new Subscription();
  onRouteChangeSub: Subscription = new Subscription();
  onLangChangeSub!: Subscription;
  listItems!: any[];

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private themeService: ThemeService,
    private matDialogService: MatDialogService,
    public langService: LangService,
    private dateAdapter: DateAdapter<any>
  ) {
    this.updateMode(window.innerWidth);
  }
/* 
  modalLogout() {
    this.matDialogService.openDialog(FsModalLogoutComponent, {
      width: '25rem',
      minHeight: '10rem',
      panelClass: '',
      data: {
        logout: () => this.exit(),
      },
    });
  } */

  ngOnInit() {
   /*  this.themeConfigSub = this.themeService.currentConfigObj$.subscribe(
      (config) => {
        this.companyLogo = config.logo;
      }
    ); */

    this.langs = this.langService.getAllLanguages();
    this.setListItems();
    this.onLangChangeSub = this.translateService.onLangChange.subscribe(() => {
      this.setListItems();
      this.exitItem.text;
    });
    this.headerOnRouteChange();
    const CurrentURL = this.router.url;
    this.shouldDisplayLogoOnMobile(CurrentURL);
    const pageTitle = this.pageTitleMap.get(CurrentURL) || '';
    this.pageTitle = pageTitle;
  }

/*   private getProfileById() {
    this.fsProfileService.getProfileData().subscribe((data) => {
      this.profile = data;
    });
  } */

  ngOnDestroy(): void {
    this.themeConfigSub.unsubscribe();
    this.onRouteChangeSub.unsubscribe();
    this.onLangChangeSub.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    this.updateMode(this.windowWidth);
  }

/*   exit() {
    this.authService.logOut();
  } */

  selectLang(lang: string) {
    this.langService.setCurrentLanguage(lang);
    this.closeAccordion();
  }

  closeAccordion() {
    this.accordion?.closeAll();
  }

  setListItems() {
    this.listItems = [
      {
        text: 'INICIO',  // Título en mayúsculas
        link: 'home',  // Página en minúsculas
        icon: 'fas fa-home'  // Ícono de FontAwesome
      },
      {
        text: 'CONFIGURACIÓN',  // Título en mayúsculas
        link: 'configuration',  // Página en minúsculas
        icon: 'fas fa-cogs'  // Ícono de configuración
      },
/*       {
        text: 'GESTIÓN PERSONAL',  // Título en mayúsculas
        link: 'personnel-management',  // Página en minúsculas
        icon: 'fas fa-users-cog'  // Ícono de gestión de personal
      }, */
      {
        text: 'FORMACIÓN',  // Título en mayúsculas
        link: 'training',  // Página en minúsculas
        icon: 'fas fa-chalkboard-teacher'  // Ícono de formación
      },
      {
        text: 'FORMULARIOS',  // Título en mayúsculas
        link: 'forms',  // Página en minúsculas
        icon: 'fas fa-file-alt'  // Ícono de formularios
      },
 /*      {
        text: 'PLAN HR',  // Título en mayúsculas
        link: 'hr-plan',  // Página en minúsculas
        icon: 'fas fa-briefcase'  // Ícono de plan HR
      }, */
      {
        text: 'INFORMES DE ASISTENCIAS',  // Título en mayúsculas
        link: 'attendance-reports',  // Página en minúsculas
        icon: 'fas fa-file-invoice'  // Ícono de informes de asistencias
      },
      {
        text: 'ASISTENCIAS',  // Título en mayúsculas
        link: 'attendances',  // Página en minúsculas
        icon: 'fas fa-calendar-check'  // Ícono de asistencias
      },
      {
        text: 'EMPLEADOS',  // Título en mayúsculas
        link: 'employees',  // Página en minúsculas
        icon: 'fas fa-id-badge'  // Ícono de empleados
      },
      {
        text: 'RESPONSABILIDAD SOLIDARIA',  // Título en mayúsculas
        link: 'solidarity-responsibility',  // Página en minúsculas
        icon: 'fas fa-hand-holding-heart'  // Ícono de responsabilidad solidaria
      },
      {
        text: 'SANCIONES',  // Título en mayúsculas
        link: 'sanctions',  // Página en minúsculas
        icon: 'fas fa-gavel'  // Ícono de sanciones
      },
      {
        text: 'ADMINISTRACIÓN DE VIÁTICOS',  // Título en mayúsculas
        link: 'per-diem-management',  // Página en minúsculas
        icon: 'fas fa-cash-register'  // Ícono de administración de viáticos
      },
    ];
    
    
  }

  private updateMode(windowWidth: number) {
    if (windowWidth > 950) {
      this.mode = 'side';
    } else {
      this.mode = 'over';
    }
  }

 /*  toggleDrawer() {
    this.toggleService.toggle();
  }
 */
  headerOnRouteChange() {
    this.onRouteChangeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        if (
          currentRoute.includes('cards/pagar') ||
          currentRoute.includes('cards/reponer') ||
          currentRoute.includes('cards/bloquear') ||
          currentRoute.includes('cards/setting')
        ) {
          this.shouldShowBlock = false;
        } else {
          this.shouldShowBlock = true;
        }
        if (currentRoute.includes('/home')) {
          this.displayLogoMobile = true;
        } else {
          this.displayLogoMobile = false;
        }
        const pageTitle = this.pageTitleMap.get(currentRoute) || '';
        this.pageTitle = pageTitle;
      }
    });
  }

  shouldDisplayLogoOnMobile(CurrentURL: string) {
    if (CurrentURL === '/finsuite/home') {
      this.displayLogoMobile = true;
    }
  }
  changeStatusSideNav() {
    if (!this.drawer?.opened) {
      this.drawer.open();
      this.closed = false;
    } else {
      this.drawer?.close();
      this.closed = true;
    }
  }
  open() {
    this.drawer.open();
    this.closed = false;
  }
  close() {
    this.drawer.close();
    this.closed = true;
    this.closeAccordion();
  }

  linkSelected(event: any) {
    this.listItems.map((item) => {
      item.selected = false;
    });

    this.listItems.map((item) => {
      if (item.link === event) {
        item.selected = true;
      }
    });
  }
}
