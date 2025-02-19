const Motorista = require('../models/motorista');

exports.listarMotoristas = async (req, res) => {
    try {
        const motoristas = await Motorista.findAll();
        res.render('motoristas', { motoristas });
    } catch (err) {
        req.flash('error_msg', 'Erro ao buscar motoristas');
        res.redirect('/');
    }
};

exports.cadastrarMotorista = (req, res) => {
    res.render('cadastrarMotorista');
};

exports.salvarMotorista = async (req, res) => {
    const { nome, cnh, validade_cnh } = req.body;
    try {
        await Motorista.create({ nome, cnh, validade_cnh });
        req.flash('success_msg', 'Motorista cadastrado com sucesso');
        res.redirect('/motoristas');
    } catch (err) {
        req.flash('error_msg', 'Erro ao cadastrar motorista');
        res.redirect('/motoristas/cadastrar');
    }
};

exports.editarMotorista = async (req, res) => {
    try {
        const motorista = await Motorista.findByPk(req.params.id);
        if (!motorista) {
            req.flash('error_msg', 'Motorista não encontrado');
            return res.redirect('/motoristas');
        }
        res.render('editarMotorista', { motorista });
    } catch (err) {
        req.flash('error_msg', 'Erro ao buscar motorista');
        res.redirect('/motoristas');
    }
};

exports.atualizarMotorista = async (req, res) => {
    const { nome, cnh, validade_cnh } = req.body;
    try {
        await Motorista.update({ nome, cnh, validade_cnh }, { where: { id: req.params.id } });
        req.flash('success_msg', 'Motorista atualizado com sucesso');
        res.redirect('/motoristas');
    } catch (err) {
        req.flash('error_msg', 'Erro ao atualizar motorista');
        res.redirect('/motoristas/editar/' + req.params.id);
    }
};

exports.excluirMotorista = async (req, res) => {
    try {
        await Motorista.destroy({ where: { id: req.params.id } });
        req.flash('success_msg', 'Motorista excluído com sucesso');
        res.redirect('/motoristas');
    } catch (err) {
        req.flash('error_msg', 'Erro ao excluir motorista');
        res.redirect('/motoristas');
    }
};