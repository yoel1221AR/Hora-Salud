import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription, map, min, startWith, take } from 'rxjs';
import {
  Component,
  HostListener,
  ViewChild,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Output,
  Input,
  OnDestroy,
} from '@angular/core';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { MatDialogService } from 'src/app/shared/services/mat-dialog.service';
import { Lang } from 'src/app/shared/models/Lang';
import { LangService } from 'src/app/shared/services/lang.service';
import { DateAdapter } from '@angular/material/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-fs-header',
  templateUrl: './fs-header.component.html',
  styleUrls: ['./fs-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FsHeaderComponent implements OnInit, OnDestroy {
  @Input() logoSrc: string = '';
  langs: Lang[] = [];
  @Output() linkSelected = new EventEmitter<any>();
  myControl = new FormControl('');
  @Input() pageTitle: string = '';
  options!: any[];
  filteredOptions!: Observable<any[]>;
 /*  dataPerfil!: IdataProfile;
  name!: ICustomers;
  notifications!: IFsNotification[]; */
  notifications$!: Subscription;
  /* profile!: FsProfile; */
  setNotifications: boolean = false;
  onLangChangeSub!: Subscription;
  subscriptionName!: Subscription;
    @ViewChild('drawer') drawer!: MatDrawer;
    @ViewChild(MatAccordion) accordion!: MatAccordion;
   /*  profile!: FsProfile; */
    closed: boolean = true;
    panelOpenState = false;
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
    listItems!: any[];
  

  constructor(
    public langService: LangService,
    private translateService: TranslateService,
    private router: Router,
    private matDialogService: MatDialogService,
  /*   private store: Store<NotificationState>,
    private notiService: FsNotificationsService,
    private fsProfileService: FsProfileService, */
    private dateAdapter: DateAdapter<any>
  ) {}

  ngOnInit() {

    this.setListItems();
/*     this.initializeNotifications(); */
    this.setFilteredOptions();
    const languageMapping: { [key: string]: string } = {
      en: 'en-in',
      es: 'es',
      pt: 'pt',
    };
  /*   this.onLangChangeSub = this.translateService.onLangChange.subscribe(
      (language) => {
        setTimeout(() => {
          this.initializeNotifications();
        }, 100);

        this.dateAdapter.setLocale(languageMapping[language.lang]);
        return this.setFilteredOptions();
      }
    ); */
    this.loading();
   /*  this.subscriptionName = this.fsProfileService.profileUpdated$.subscribe(
      () => {
        this.getProfileById();
      }
    ); */

 /*    this.getProfileById(); */
  }

  ngOnDestroy(): void {
    this.subscriptionName.unsubscribe();
    this.onLangChangeSub.unsubscribe();
  }

  private setFilteredOptions() {
    this.setOptions();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private setOptions() {
    this.options = [
      {
        link: 'home',
        text: this.translateService.instant('FS.HEADER.OPTIONS.START'),
        selected: false,
      },
      {
        link: 'cards',
        text: this.translateService.instant('FS.HEADER.OPTIONS.CARD'),
        selected: false,
      },
      {
        link: 'loan',
        text: this.translateService.instant('FS.HEADER.OPTIONS.LOANS'),
        selected: false,
      },
      {
        link: 'pay-service',
        text: this.translateService.instant('FS.HEADER.OPTIONS.PAY SERVICE'),
        selected: false,
      },
      {
        link: 'operaciones',
        text: this.translateService.instant('FS.HEADER.OPTIONS.OPERATIONS'),
        selected: false,
      },
      {
        link: 'we-offer',
        text: this.translateService.instant('FS.HEADER.OPTIONS.WE OFFER YOU'),
        selected: false,
      },
      {
        link: 'insurances',
        text: this.translateService.instant('FS.HEADER.OPTIONS.INSURANCE'),
        selected: false,
      },
      {
        link: 'points',
        text: this.translateService.instant('FS.HEADER.OPTIONS.POINTS'),
        selected: false,
      },
      {
        link: 'help',
        text: this.translateService.instant('FS.HEADER.OPTIONS.SUPPORT'),
        selected: false,
      },
    ];
  }

/*   private getProfileById() {
    this.fsProfileService.getProfileData().subscribe((data) => {
      this.profile = data;
    });
  }
 */
/*   private initializeNotifications() {
    this.notiService
      .getNotifications()

      .subscribe({
        next: (value: IFsNotification[]) => {
          this.store.dispatch(setNotifications({ data: value }));
          this.setNotifications = true;
          this.notifications = value;
        },
      });

      this.notifications$ = this.store.select(lastNotifications).subscribe({
      next: (notifications: IFsNotification[]) => {
        if (!notifications.length && !this.setNotifications) {
          this.notiService
            .getNotifications()
            .pipe(take(1))
            .subscribe({
              next: (value: IFsNotification[]) => {
                this.store.dispatch(setNotifications({ data: value }));
              },
            });
        }
        this.setNotifications = true;
        this.notifications = notifications;
      },
    }); 
  }*/

  _filter(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.text.toLowerCase().includes(filterValue)
    );
  }
/*   openDialog(): void {
    this.matDialogService.openDialog(FsCardsBlockComponent, {});
  } */

  loading() {
    this.langs = this.langService.getAllLanguages();
  }
  selectLang(lang: string) {
    this.langService.setCurrentLanguage(lang);
  }

  getcurrentLang() {
    return this.langService.getCurrentLanguage().code.toUpperCase();
  }
  toggleAllNotifications(): void {
    this.router.navigate(['finsuite', 'notifications']);
  }

  onSelect(option: any) {
    this.router.navigate(['/finsuite/' + option]);
    this.linkSelected.emit(option);
    this.myControl.reset();
  }

  prevenRefresh(event: any) {
    event.preventDefault();
  }
/*   readedNotification(notification: IFsNotification) {
    if (!notification.readed) {
      this.store.dispatch(readedNotification({ id: notification.id }));
      this.notiService.readedNotifications([notification.id]);
    }
  } */
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

    navigate(){
      this.router.navigate(['/private']);
    }
}
