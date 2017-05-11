const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const tree = flattenTreeToArray(root);
  return _.find(tree, el => el.id === id);
};

const getElementsByClassName = function(root, className) {
  const tree = flattenTreeToArray(root);
  const hasClassName = _.filter(tree, el => el.className != undefined);
  return _.filter(hasClassName, el => _.contains((el.className).split(' '), className));                
};

const getElementsByTagName = function(root, tagName) {
  const tree = flattenTreeToArray(root);
  return _.filter(tree, el => el.tagName === tagName);
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
