const Sequelize = require('sequelize')
const db = require('../db')

const Warehouse = db.define('warehouse', {
  sameDepartment: {
    type: Sequelize.BOOLEAN
  },
  receivedOnTime: {
    type: Sequelize.BOOLEAN
  },
  returned: {
    type: Sequelize.BOOLEAN
  },
  accuratePullList: {
    type: Sequelize.INTEGER
  },
  finishedOnTime: {
    type: Sequelize.BOOLEAN
  },
  makeUpRuns: {
    type: Sequelize.ENUM({
      values: ['yes', 'no']
    })
  },
  issues: {
    type: Sequelize.TEXT
  },
  truckCondition: {
    type: Sequelize.INTEGER
  }
})
module.exports = Warehouse
