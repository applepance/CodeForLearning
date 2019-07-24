const mongoose = require('mongoose');
const Article = mongoose.model('Article');
exports.getArticles = async (req, res) => {
  const total = await Article.find({}).exec().length;
  const data = await Article.find({}).exec();
  res.json({
    total,
    data
  })
}