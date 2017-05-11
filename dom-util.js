
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  if (!node) {
    return;
  }
  callback(node);
  node.childNodes.forEach(node => visitAllNodes(node, callback));
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  const flat = [];
  visitAllNodes(node, node => flat.push(node));
  return flat;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};