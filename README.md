# 🔗 BlockchainJS

## 🌟 Visão Geral

BlockchainJS é um projeto de código aberto que simula os princípios fundamentais de uma blockchain, oferecendo uma implementação didática e clara dos conceitos básicos de cadeias de blocos usando JavaScript puro.

## 🎯 Objetivos do Projeto

- Desmistificar os conceitos complexos de blockchain
- Fornecer uma implementação transparente e educacional
- Demonstrar os princípios básicos de mineração, transações e validação

## ✨ Características Principais

### 🧱 Estrutura de Blocos

- Bloco personalizado com:
  - Hash único
  - Hash do bloco anterior
  - Timestamp
  - Dados de transação
  - Prova de trabalho (Proof of Work)

### 💸 Sistema de Transações

- Geração de endereços aleatórios
- Validação rigorosa de transações
- Rastreamento de histórico de transações

### 🔒 Segurança

- Mineração com dificuldade configurável
- Validação de integridade da cadeia
- Endereçamento seguro com formato específico

## 🛠 Tecnologias Utilizadas

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-14+-green?logo=node.js)
![Crypto](https://img.shields.io/badge/Crypto-Nativo-blue)

## 🚀 Configuração Rápida

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- npm (v6 ou superior)

### Instalação Passo a Passo

```bash
# Clonar o repositório
git clone https://github.com/arlissondiogo/blockchainjs.git

# Navegar para o diretório do projeto
cd blockchainjs

# Instalar dependências
npm install

# Executar o projeto
npm run dev
```

## 📂 Estrutura de Diretórios

```
blockchainjs/
│
├── src/
│   ├── blockchain.js      # Lógica principal da blockchain
│   ├── bloco.js           # Classe de criação de blocos
│   ├── transacao.js       # Gerenciamento de transações
│   ├── validador.js       # Validações de segurança
│   └── geraEndereco.js    # Gerador de endereços
│
├── main.js                # Ponto de entrada
├── package.json           # Configurações do projeto
└── README.md              # Documentação
```

## 🧪 Exemplos de Uso

```javascript
// Criando uma nova blockchain
const blockchain = new Blockchain();

// Gerando endereços
const remetente = GeraEndereco.gerarEnderecoAleatorio();
const destinatario = GeraEndereco.gerarEnderecoAleatorio();

// Criando transações
const transacoes = [
    new Transacao(remetente, destinatario, 100),
    new Transacao(destinatario, remetente, 50)
];

// Adicionando bloco à blockchain
blockchain.adicionarBloco(transacoes);

// Verificando validade da cadeia
console.log(`Cadeia válida? ${blockchain.cadeiaValida()}`);
```

## 🔍 Como Funciona

### Mineração de Bloco

1. Gera um hash único
2. Aplica prova de trabalho
3. Adiciona à cadeia existente

### Validação de Transação

- Verifica formato do endereço
- Confirma quantidade positiva
- Garante integridade da transação

## 🚧 Limitações Conhecidas

- Implementação educacional, não indicada para produção
- Sem carteira real
- Sem consenso distribuído
- Sem persistência de dados

## 📞 Link do Projeto

[Link do Projeto](https://github.com/arlissondiogo/blockchainjs.git)

---

## 🧾 Licença

Distribuído sob a Licença MIT. Veja `LICENSE` para mais informações.