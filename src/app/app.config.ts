import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { jwtInterceptor, serverErrorInterceptor } from '@lib/interceptors';
import { TransferStateService } from '@lib/services/transfer-state.service';

export const appConfig: ApplicationConfig = {
    providers: [
        // provideRouter(routes, withComponentInputBinding()),
        TransferStateService,
        provideHttpClient(withInterceptors([serverErrorInterceptor, jwtInterceptor])),
    ],
};
