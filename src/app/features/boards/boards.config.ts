import {APP_CONFIG} from '../../app.config';

export const BOARDS_CONFIG = {
    requests: {
        listBoards: {
            name: 'listBoards',
            url: `${APP_CONFIG.apiBaseUrl}/me/boards/?access_token=${APP_CONFIG.apiAccessToken}&fields=id%2Curl%2Cname`,
        },
        addBoard: {
            name: 'addBoard',
            url: `${APP_CONFIG.apiBaseUrl}/boards/?access_token=${APP_CONFIG.apiAccessToken}&fields=id%2Curl%2Cname`,
        },
    },
};
