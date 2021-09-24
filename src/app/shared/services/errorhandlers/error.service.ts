import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService extends ErrorHandler {
  handleError(error: Error) {
    if (error) {
      console.log(error.message);
    } else {
      console.log('Nahi aaya error');
    }
  }
}
