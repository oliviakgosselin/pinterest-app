import {StoreRequestStateUpdater} from '../types/storeRequestStateUpdater';

export function getStoreRequestStateUpdater(
    store: any
): StoreRequestStateUpdater {
    return (requestName, requestState) => {
        store.setState({
            ...store.state,
            requests: {
                ...store.state.requests,
                [requestName]: requestState,
            },
        });
    };
}
