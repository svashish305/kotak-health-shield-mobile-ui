import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';


export class DateValidator {
    static dateValidator(AC: AbstractControl) {
        if (AC && AC.value) {
            const mdt = moment([AC.value.year, AC.value.month - 1, AC.value.day]).format('DD-MMM-YYYY');
            if (!moment(mdt, 'DD-MMM-YYYY', true).isValid()) {
                var years = moment().diff(moment().format('DD-MMM-YYYY'), 'years', false);
                if (years >= 18 && years <= 65) {
                    return { dateValidator: true };
                }
            }
            return null;
        }
        return null;
    }
}
