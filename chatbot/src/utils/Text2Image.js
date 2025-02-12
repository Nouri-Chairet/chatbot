export default async function Text2ImageApi(text) {
    const url = 'https://chatgpt-vision1.p.rapidapi.com/texttoimage';
    const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '9e6adfc8b6mshe736177f701b195p13af22jsn62eed22b7c04',
		'x-rapidapi-host': 'chatgpt-vision1.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		text: text,
		negative_prompt: '',
		width: 512,
		height: 512
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