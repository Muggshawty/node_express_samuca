import express from "express";
const app = express();
const PORT = 3000;

const cursos = [
    { id: 1, nome: 'Desenvolvimento Web Full Stack', duracao: '6 meses' },
    { id: 2, nome: 'Data Science e Inteligência Artificial', duracao: '8 meses' },
    { id: 3, nome: 'UX/UI Design', duracao: '3 meses' }
];

const professores = [
    { id: 1, nome: 'Ana Silva', especialidade: 'Backend (Node.js)' },
    { id: 2, nome: 'Carlos Souza', especialidade: 'Data Science (Python)' },
    { id: 3, nome: 'Mariana Costa', especialidade: 'Design de Experiência' }
];

app.get('/', (req, res) => {
    res.send('Bem-vindo à TechAcademy! Explore nossos cursos e transforme sua carreira.');
});


app.get('/cursos', (req, res) => {
    res.json(cursos);
});

app.get('/professores', (req, res) => {
    res.json(professores);
});


app.get('/contato', (req, res) => {
    res.json({
        telefone: '(11) 99999-8888',
        email: 'contato@techacademy.com',
        endereco: 'Av. Paulista, 1000 - São Paulo, SP'
    });
});


app.use((req, res) => {
    res.status(404).send('Erro 404 Página não encontrada!');
});


app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
});
