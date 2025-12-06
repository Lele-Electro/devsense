import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    showError(message: string, error: any = null): void {
        let errorMessage = message;
        if (error) {
            if (error.error?.message) {
                errorMessage += `: ${error.error.message}`;
            } else if (error.message) {
                errorMessage += `: ${error.message}`;
            }
        }
        console.log('%c ❌ ERROR: ' + errorMessage, 'background: #f44336; color: white; font-size: 16px; font-weight: bold; padding: 4px 8px; border-radius: 4px;');
        // alert(errorMessage); // Using native alert for now, can be replacezd with a more sophisticated solution later
    }

    showSuccess(message: string): void {
        console.log('%c 🎉 SUCCESS: ' + message, 'background: #4CAF50; color: white; font-size: 16px; font-weight: bold; padding: 4px 8px; border-radius: 4px;');
        // alert(message);

    }
}