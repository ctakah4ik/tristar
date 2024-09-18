import { API_KEY_QUERY_STRING } from '../services/constants';

export const addApiKeyToQueryString = (queryString: string): string => {
    if (queryString) {
        return `${queryString}&${API_KEY_QUERY_STRING}`;
    }

    return `?${API_KEY_QUERY_STRING}`;
};
