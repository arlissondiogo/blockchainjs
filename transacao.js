// Corrigindo o caminho da importação
const Validador = require('./validador');  // Certifique-se de que o caminho esteja correto

class Transacao {
    constructor(remetente, destinatario, quantia) {
        if (!Validador.validarEndereco(remetente) || !Validador.validarEndereco(destinatario)) {
            throw new Error('Endereço de remetente ou destinatário inválido.');
        }

        if (quantia <= 0) {
            throw new Error('A quantia deve ser maior que zero.');
        }

        this.remetente = remetente;
        this.destinatario = destinatario;
        this.quantia = quantia;
    }
}

module.exports = Transacao;  // Exporta a classe Transacao
