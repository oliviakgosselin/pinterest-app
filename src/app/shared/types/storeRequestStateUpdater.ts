import {RequestState} from './requestState';

export type StoreRequestStateUpdater = (
    requestName: string,
    requestState: RequestState
) => void;
