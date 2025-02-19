const Motorista = require('../models/motorista');

// Função para listar motoristas
exports.listarMotoristas = async (req, res) => {
    try {
        const motoristas = await Motorista.findAll();
        res.render('motoristas', { motoristas });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar motoristas');
    }
};

// Função para criar um motorista
exports.cadastrarMotorista = async (req, res) => {
    const { nome, cnh, validade_cnh } = req.body;
    try {
        await Motorista.create({ nome, cnh, validade_cnh });
        res.redirect('/motoristas');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao cadastrar motorista');
    }
};

// Função para editar um motorista
exports.editarMotorista = async (req, res) => {
    const motoristaId = req.params.id;
    const { nome, cnh, validade_cnh } = req.body;
    try {
        await Motorista.update({ nome, cnh, validade_cnh }, {
            where: { id: motoristaId }
        });
        res.redirect('/motoristas');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao editar motorista');
    }
};

// Função para excluir um motorista
exports.excluirMotorista = async (req, res) => {
    const motoristaId = req.params.id;
    try {
        await Motorista.destroy({ where: { id: motoristaId } });
        res.redirect('/motoristas');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao excluir motorista');
    }
};