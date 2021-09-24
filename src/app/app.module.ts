import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorService } from './shared/services/errorhandlers/error.service';
import { HttperrorInterceptor } from './shared/services/errorhandlers/httperror.interceptor';
import { SharedModule } from './shared/shared.module';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, Error404PageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    LoggerModule.forRoot({
      serverLoggingUrl: 'http://localhost:3000/devlogs',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.WARN,
      disableConsoleLogging: false,
    })
  ],
  providers: [
    {
      provide:ErrorHandler,
      useClass:ErrorService
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttperrorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
