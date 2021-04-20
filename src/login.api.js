const mockedUser = {
    id: '123',
    name: 'LuisCoronel',
    avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};
  
export default async function loginApi(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (username === 'luis' && password === 'coronel') {
            return resolve(mockedUser);
        }
        return reject(new Error('Username or password invalid'));
        }, 500);
    });
}