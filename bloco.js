const crypto = require('crypto');

class Bloco {
    constructor(hashAnterior, dados, dificuldade) {
        this.hashAnterior = hashAnterior;
        this.dados = dados;
        this.timestamp = Date.now();
        this.nonce = 0;
        this.hash = this.minerarBloco(dificuldade);
    }

    calcularHash() {
        const registro = this.hashAnterior + this.timestamp + this.nonce + JSON.stringify(this.dados);
        return crypto.createHash('sha256').update(registro).digest('hex');
    }

    minerarBloco(dificuldade) {
        const prefixoDificuldade = '0'.repeat(dificuldade);
        let hashCalculado;

        do {
            this.nonce++;
            hashCalculado = this.calcularHash();
        } while (!hashCalculado.startsWith(prefixoDificuldade));

        return hashCalculado;
    }
}

module.exports = Bloco; 
