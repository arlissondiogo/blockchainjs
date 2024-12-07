class Validador {
    static validarEndereco(endereco) {
        const regex = /^BR[a-fA-F0-9]{40}$/;
        return regex.test(endereco);
    }

    static validarTransacao(transacao) {
        return (
            this.validarEndereco(transacao.remetente) &&
            this.validarEndereco(transacao.destinatario) &&
            transacao.quantia > 0
        );
    }
}
module.exports = Validador;

