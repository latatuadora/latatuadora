/**
 * Address.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
  attributes: {
    street: {
      type: "string",
    },
    numInt: {
      type: "int"
    },
    numExt: {
      type: "int"
    },
    lat: {
      type: "string"
    },
    long: {
      type: "string"
    },
    stateId: {
      model: "State"
    },
    suburbId: {
      model: "Suburb"
    },
    townId: {
      model: "Town"
    },
    zc: {
      type: "integer"
    }
  },
  tableName: 'Address'
  
};

