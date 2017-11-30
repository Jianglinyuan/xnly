'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('../view/index.nj', { title: 'XNLY' });
  }
}

module.exports = HomeController;
