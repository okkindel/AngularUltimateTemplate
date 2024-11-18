import { provideTranslocoPersistLang } from '@jsverse/transloco-persist-lang';
import { provideTransloco, TranslocoModule } from '@jsverse/transloco';
import { provideHttpClient } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';

import { TranslocoHttpLoader } from './transloco-loader';

@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideHttpClient(),
    provideTransloco({
      loader: TranslocoHttpLoader,
      config: {
        availableLangs: ['en', 'pl'],
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
        defaultLang: 'en',
      },
    }),
    provideTranslocoPersistLang({
      storage: { useValue: localStorage },
    }),
  ],
})
export class TranslocoRootModule {}
