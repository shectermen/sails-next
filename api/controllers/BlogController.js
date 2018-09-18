module.exports = {
  post (req, res) {
    const { params, query } = req;
    sails.config.next.app.render(req, res, '/post', { ...params, ...query });
  }
}