import {
  provideAngularQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { requestInterceptor } from './interceptors/request.interceptor';

@NgModule({
  providers: [
    provideHttpClient(withInterceptors([requestInterceptor])),
    provideAngularQuery(new QueryClient()),
  ],
})
export class ApiModule {}
