import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { LoadingService } from '../../services/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  private loadingSubscription?: Subscription;

  constructor(
    private loadingService: LoadingService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadingSubscription = this.loadingService.isLoading$.subscribe(value => {
      this.isLoading = value;
      this.cdr.detectChanges(); 
    });
  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }
}
