const conn = require('./conn');
const { STRING, TEXT, UUID, UUIDV4, INTEGER } = conn.Sequelize;

const Review = conn.define('review', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  rating: {
    type: INTEGER,
    allowNull: false,
  },
  title: {
    type: STRING,
  },
  comment: {
    type: TEXT,
  },
  taskDoerId: {
    type: UUID,
  },
  taskId: {
    type: UUID,
    unique: true,
  },
});

module.exports = Review;
