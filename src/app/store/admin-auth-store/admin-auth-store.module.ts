import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import {
  ADMIN_AUTH_FEATURE_NAME,
  adminAuthReducer,
} from './store/admin-auth-reducer';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AdminAuthEffects } from './store/admin-auth.effects';
import { JwtModule } from '@auth0/angular-jwt';
import { AdminAuthInterceptor } from './interseptors/admin-auth.interceptor';
import { initAdminModule } from './store/admin-auth.actions';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: (request) => request as any,
      },
    }),
    StoreModule.forFeature(ADMIN_AUTH_FEATURE_NAME, adminAuthReducer),
    EffectsModule.forFeature([AdminAuthEffects]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdminAuthInterceptor,
      multi: true,
    },
  ],
})
export class AdminAuthStoreModule {
  constructor(private _store$: Store) {
    this._store$.dispatch(initAdminModule());
  }
}
