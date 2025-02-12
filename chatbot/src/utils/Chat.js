
export default async function chatApi(msg) {
    const url = 'https://chatgpt-42.p.rapidapi.com/o3mini';
    const options = {
        method: 'POST',
        headers: {
         'x-rapidapi-key': '4e1551ab77msh2a2ecbbb51cb55dp1aff5ejsn9bd5b578672d',
		'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
		'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messages: [
                {
                    role: 'user',
                    content: msg
                }
            ],
            web_access: false
        })
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        return JSON.parse(result);
    } catch (error) {
        console.error(error);
    }
}
