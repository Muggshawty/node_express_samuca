import express from "express";
const app = express();
const PORT = 3000;


app.get('/somar/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    
    const resultado = num1 + num2;
    
    res.json({ resultado });
});


app.get('/subtrair/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    
    const resultado = num1 - num2;
    
    res.json({ resultado });
});


app.get('/multiplicar/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    
    const resultado = num1 * num2;
    
    res.json({ resultado });
});

app.get('/dividir/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    
    if (num2 === 0) {
        return res.status(400).json({ erro: "Não é possível dividir por zero." });
    }
    
    const resultado = num1 / num2;
    
    res.json({ resultado });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
