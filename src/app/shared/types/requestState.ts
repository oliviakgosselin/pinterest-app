import {FieldErrors} from './fieldErrors';

export interface RequestState {
    inProgress?: boolean;
    success?: boolean;
    error?: boolean;
    fieldErrors?: FieldErrors;
}
