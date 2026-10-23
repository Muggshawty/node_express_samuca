import express from "express";
const app = express();
const PORT = 3000;

const produtos = [
    { id: 1, nome: "Teclado Mecânico RGB", preco: 299.90 },
    { id: 2, nome: "Mouse Gamer 16000 DPI", preco: 149.90 },
    { id: 3, nome: "Monitor UltraWide 29'", preco: 1299.00 },
    { id: 4, nome: "Headset Bluetooth", preco: 249.90 },
    { id: 5, nome: "Mousepad Speed XL", preco: 79.90 }
];

app.get('/produtos', (req, res) => {
   
    res.status(200).json(produtos);
});


app.get('/produtos/:id', (req, res) => {
    
    const idProcurado = parseInt(req.params.id);
    
    
    const produto = produtos.find(p => p.id === idProcurado);

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado." });
    }

 
    res.status(200).json(produto);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
});
