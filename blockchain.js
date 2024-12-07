const Bloco = require('./bloco');
const Validador = require('./validador');  

class Blockchain {
    constructor() {
        this.cadeia = [this.criarBlocoGenesis()];
        this.historicoTransacoes = {};
    }

    criarBlocoGenesis() {
        return new Bloco('0', [], 4);
    }

    adicionarBloco(transacoes) {
        transacoes.forEach((transacao) => {
            if (!Validador.validarTransacao(transacao)) {
                throw new Error(`Transação inválida: ${JSON.stringify(transacao)}`);
            }

            if (!this.historicoTransacoes[transacao.remetente]) {
                this.historicoTransacoes[transacao.remetente] = [];
            }
            if (!this.historicoTransacoes[transacao.destinatario]) {
                this.historicoTransacoes[transacao.destinatario] = [];
            }

            this.historicoTransacoes[transacao.remetente].push(transacao);
            this.historicoTransacoes[transacao.destinatario].push(transacao);
        });

        const novoBloco = new Bloco(
            this.cadeia[this.cadeia.length - 1].hash,
            transacoes,
            4
        );
        this.cadeia.push(novoBloco);
    }

    cadeiaValida() {
        for (let i = 1; i < this.cadeia.length; i++) {
            const blocoAtual = this.cadeia[i];
            const blocoAnterior = this.cadeia[i - 1];

            if (
                blocoAtual.hash !== blocoAtual.calcularHash() ||
                blocoAtual.hashAnterior !== blocoAnterior.hash
            ) {
                return false;
            }
        }
        return true;
    }

    imprimirCadeia() {
        console.log('===== Cadeia de Blocos =====');
        this.cadeia.forEach((bloco, index) => {
            console.log(`\n--- Bloco ${index} ---`);
            console.log(`Hash: ${bloco.hash}`);
            console.log(`Hash Anterior: ${bloco.hashAnterior}`);
            console.log(`Transações: ${JSON.stringify(bloco.dados, null, 2)}`);
        });
        console.log('===========================');
    }

    exibirHistoricoTransacoes(endereco) {
        console.log(`\nHistórico de transações para o endereço: ${endereco}`);
        const transacoes = this.historicoTransacoes[endereco];

        if (!transacoes || transacoes.length === 0) {
            console.log('Nenhuma transação encontrada para este endereço.');
        } else {
            transacoes.forEach((transacao) => console.log(transacao));
        }
    }
}
module.exports = Blockchain;
