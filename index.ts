// pages/api/cadastro.ts

import type { NextApiRequest, NextApiResponse } from 'next';

interface Cliente {
  nome: string;
  email: string;
  telefone: string;
  endereco?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const cliente: Cliente = req.body;

    // Aqui você pode processar os dados (salvar no banco de dados, etc.)
    console.log('Dados recebidos:', cliente);

    // Resposta de sucesso
    res.status(200).json({ message: 'Cadastro realizado com sucesso!', cliente });
  } else {
    // Responde com um erro se não for um método POST
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}

fetch('/api/cadastro', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    nome: 'Seu Nome',
    email: 'seuemail@example.com',
    telefone: '123456789',
    endereco: 'Seu Endereço',
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro:', error));

