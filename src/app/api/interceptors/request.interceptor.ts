import type {
  HttpInterceptorFn,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';

import { DEFAULT_LANG } from '@shared/global/i18n';

export const requestInterceptor: HttpInterceptorFn = <T>(
  request: HttpRequest<T>,
  next: HttpHandlerFn,
) => {
  const headers = request.headers
    .set('Language', localStorage.getItem('translocoLang') || DEFAULT_LANG)
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`);

  return next(request.clone({ headers }));
};
