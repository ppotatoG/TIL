const API_END_POINT = 'https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev';

export const request = async (url, options = {}) => {
    try {
        const fullUrl = `${API_END_POINT}${url}`;
        const response = await fetch(fullUrl, options);

        if(response.ok) {
            const json = await response.json();
            return json;
        }
        throw new Error('통신 실패');
    } catch (e) {
        alert(e.message);
    }
}