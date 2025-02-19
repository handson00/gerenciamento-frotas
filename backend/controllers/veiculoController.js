const Veiculo = require('../models/veiculo');

exports.listarVeiculos = async (req, res) => {
    try {
        const veiculos = await Veiculo.findAll();
        res.render('veiculos', { veiculos });
    } catch (err) {
        req.flash('error_msg', 'Erro ao buscar veículos');
        res.redirect('/');
    }
};

exports.cadastrarVeiculo = (req, res) => {
    res.render('cadastrarVeiculo');
};

exports.salvarVeiculo = async (req, res) => {
    const { modelo, placa, status } = req.body;
    try {
        await Veiculo.create({ modelo, placa, status });
        req.flash('success_msg', 'Veículo cadastrado com sucesso');
        res.redirect('/veiculos');
    } catch (err) {
        req.flash('error_msg', 'Erro ao cadastrar veículo');
        res.redirect('/veiculos/cadastrar');
    }
};

exports.editarVeiculo = async (req, res) => {
    try {
        const veiculo = await Veiculo.findByPk(req.params.id);
        if (!veiculo) {
            req.flash('error_msg', 'Veículo não encontrado');
            return res.redirect('/veiculos');
        }
        res.render('editarVeiculo', { veiculo });
    } catch (err) {
        req.flash('error_msg', 'Erro ao buscar veículo');
        res.redirect('/veiculos');
    }
};

exports.atualizarVeiculo = async (req, res) => {
    const { modelo, placa, status } = req.body;
    try {
        await Veiculo.update({ modelo, placa, status }, { where: { id: req.params.id } });
        req.flash('success_msg', 'Veículo atualizado com sucesso');
        res.redirect('/veiculos');
    } catch (err) {
        req.flash('error_msg', 'Erro ao atualizar veículo');
        res.redirect('/veiculos/editar/' + req.params.id);
    }
};

exports.excluirVeiculo = async (req, res) => {
    try {
        await Veiculo.destroy({ where: { id: req.params.id } });
        req.flash('success_msg', 'Veículo excluído com sucesso');
        res.redirect('/veiculos');
    } catch (err) {
        req.flash('error_msg', 'Erro ao excluir veículo');
        res.redirect('/veiculos');
    }
};