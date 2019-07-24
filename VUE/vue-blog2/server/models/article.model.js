const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArticleSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  }
}, {
  timestamps: {
    created: 'createdAt',
    updated: 'updatedAt'
  },
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id
      delete ret.id
    }
  }
})

mongoose.model('Article', ArticleSchema)