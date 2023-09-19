import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferStateService } from '@lib/services/transfer-state.service';
import { map } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule, HttpClientModule],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    constructor(private _http: HttpClient, private transfer: TransferStateService) {}
    cart = [];
    ngOnInit(): void {
        this.transfer
            .init('apiData', this._http.get('https://dummyjson.com/carts').pipe(map((c: any) => c['carts'])))
            .subscribe((c) => {
                this.cart = c;
            });

        // this._themeService.init();
    }
}
