import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthHttpInterceptor } from './services/auth-http.interceptor';
import { HTTP_CLIENT } from './shared/http-client.provider';
import { NgHttpClientService } from './services/ng-http-client.service';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)],
    declarations: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpInterceptor,
            multi: true
        },
        {
            provide: HTTP_CLIENT,
            useClass: NgHttpClientService,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
