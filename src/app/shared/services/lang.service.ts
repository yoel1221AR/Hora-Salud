import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Lang } from '../models/Lang';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private languages: Lang[] = [
    { code: 'en', label: 'AB.HEADER.LANGUAGES.PT',  img: 'assets/icons/top-nav/banderita_EEUU_48x38-01.svg' },
    { code: 'es', label: 'AB.HEADER.LANGUAGES.ES', img: 'assets/icons/top-nav/BANDERAS_ARGENTINA.svg'},
   
  ];

  private currentLanguageSubject: BehaviorSubject<Lang> =
    new BehaviorSubject<Lang>(this.languages[0]);

  public currentLanguage$: Observable<Lang> =
    this.currentLanguageSubject.asObservable();

  constructor(private translateService: TranslateService) {

    
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.setCurrentLanguage(savedLanguage);
    } else {
      this.setCurrentLanguage(this.languages[0].code);
    }
  }

  getCurrentLanguage(): Lang {
    return this.currentLanguageSubject.value;
  }

  setCurrentLanguage(code: string): void {
    const selectedLanguage = this.languages.find((lang) => lang.code === code);

    if (selectedLanguage) {
      this.translateService.use(selectedLanguage.code);
      localStorage.setItem('language', selectedLanguage.code); // Guardar en localStorage
      this.currentLanguageSubject.next(selectedLanguage);
    }
  }

  getAllLanguages(): Lang[] {
    return this.languages;
  }
}
