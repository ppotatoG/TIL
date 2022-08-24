const API_END_POINT = API_END_POINT;

export const request = async (url, options = {}) => {
    try {
        const fullUrl = `${API_END_POINT}${url}`;
        const response = await fetch(fullUrl, options);

        console.log(response)

        if(response.ok) {
            const json = await response.json();
            return json;
        }
        throw new Error('통신 실패');
    } catch (e) {
        alert(e.message);
    }
}