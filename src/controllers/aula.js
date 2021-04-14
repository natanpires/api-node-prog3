const db = require('../models')

function Aulas() {
  this.AulaModel = db.Aula;

  this.find = async ({ params }) => {
    const id = parseInt(params.id) || false;
    try {
      if (!id) {
        return await this.AulaModel.findAll();
      }
      return await this.AulaModel.findByPk(id);
    } catch (error) {
      throw { error, code: 422 };
    }
  };

  this.create = async ({ body }) => {
    try {
      return await this.AulaModel.create(body);
    } catch (error) {
      throw { error, code: 422 };
    }
  };

  this.update = async ({ body, params }) => {
    const id = parseInt(params.id);
    try {
      if (!body.name) throw { message: "MISSING PARAMETER", parameter: "name", code: 400 }
      const aula = await this.AulaModel.findByPk(id);
      aula.nome = body.nome;
      await aula.save();
      return aula;
    } catch (error) {
      throw { error, code: error?.code || 422 };
    }
  };

  this.remove = async ({ params }) => {
    try {
      const aula = await this.AulaModel.findByPk(parseInt(params.id));
      await aula.destroy();
      return { status: "success" };
    } catch (error) {
      throw { error, code: 422 };
    }
  };
};

exports.default = Aulas;
