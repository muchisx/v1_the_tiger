import { Children, ReactNode, isValidElement, cloneElement } from 'react';

export default function getDeepModifiedNode(
  node: ReactNode,
  modifier: (node: ReactNode) => ReactNode
): ReactNode {
  return Children.map(node, (child) => {
    let currentNode = child;

    if (!isValidElement(currentNode)) {
      return modifier(currentNode);
    }

    if (currentNode.props.children) {
      const props = {
        children: getDeepModifiedNode(currentNode.props.children, modifier),
      };
      if (isValidElement(child)) {
        currentNode = cloneElement(child, props);
      }
    }
    return modifier(currentNode);
  });
}
