const conn = require('./conn');
const { STRING, TEXT, UUID, UUIDV4, FLOAT, ENUM, BOOLEAN, DECIMAL } =
  conn.Sequelize;

const Task = conn.define('task', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  title: {
    type: TEXT,
  },
  description: {
    type: TEXT,
  },
  price: {
    type: FLOAT,
  },
  street: {
    type: TEXT,
  },
  city: {
    type: TEXT,
  },
  state: {
    type: TEXT,
  },
  country: {
    type: TEXT,
  },
  zipCode: {
    type: STRING,
    validate: {
      is: /^[0-9]{5}(?:-[0-9]{4})?$/,
    },
  },
  lat: {
    type: DECIMAL,
  },
  lng: {
    type: DECIMAL,
  },
  category: {
    type: ENUM(
      'virtual',
      'shopping',
      'misc',
      'moving',
      'sport',
      'gaming',
      'photography',
      'beauty',
      'cleaning'
    ),
  },
  taskDoerId: {
    type: UUID,
  },
  isComplete: {
    type: BOOLEAN,
  },
});

module.exports = Task;
