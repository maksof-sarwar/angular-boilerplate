import { Inject, Injectable, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TransferStateService {
    constructor(private transferState: TransferState, @Inject(PLATFORM_ID) private platformId: Object) {}

    init(key: string, observer: Observable<any>) {
        const dataKey = makeStateKey<any>(key);

        if (this.transferState.hasKey(dataKey)) {
            return of(this.transferState.get(dataKey, null));
        }
        // Perform API request on the server
        return observer.pipe(
            tap((data) => {
                this.transferState.set(dataKey, data);
            }),
        );
    }
}
