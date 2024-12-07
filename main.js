const Blockchain = require('./blockchain');
const GeraEndereco = require('./geraEndereco');
const Transacao = require('./transacao');

const blockchain = new Blockchain();
const enderecoRemetente = GeraEndereco.gerarEnderecoAleatorio();
const enderecoDestinatario = GeraEndereco.gerarEnderecoAleatorio();

const transacoes = [
    new Transacao(enderecoRemetente, enderecoDestinatario, 100),
    new Transacao(enderecoDestinatario, enderecoRemetente, 50),
];

console.log('Adicionando transações válidas...');
blockchain.adicionarBloco(transacoes);

console.log('TRANSAÇÃO VÁLIDA:');
blockchain.imprimirCadeia();

blockchain.exibirHistoricoTransacoes(enderecoRemetente);
blockchain.exibirHistoricoTransacoes(enderecoDestinatario);

try {
    const transacaoFalsa = new Transacao('EnderecoInvalido123', enderecoDestinatario, 200);
    blockchain.adicionarBloco([transacaoFalsa]);
} catch (error) {
    console.error(`Erro ao adicionar transação falsa: ${error.message}`);
}

console.log(`A cadeia é válida? ${blockchain.cadeiaValida()}`);