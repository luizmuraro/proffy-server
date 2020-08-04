import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        { name: 'Luiz Guilherme', age: 38 },
        { name: 'Lucas', age: 33 },
        { name: 'Ronaldo', age: 22 }
    ]


    return response.json(users);
});

app.listen(3333);