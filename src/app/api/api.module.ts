import {
  provideAngularQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [provideAngularQuery(new QueryClient())],
})
export class ApiModule {}
