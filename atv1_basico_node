import express from "express";
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Bem-vindo ao nosso servidor Express!Esta é a página inicial.');
});


app.get('/sobre', (req, res) => {
    res.send('Sobre Nós: Somos uma empresa focada em criar soluções web modernas e eficientes.');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
});
