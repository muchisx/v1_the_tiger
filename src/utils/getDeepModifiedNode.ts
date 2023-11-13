import { Children, ReactNode, isValidElement, cloneElement } from 'react';

export type ModifierPayload = {
  modifiedNode: ReactNode;
  nodesModified: number;
};

type GetDeepModifierNodePayload = {
  node: ReactNode;
  nodesModifiedTotal: number;
};

export default function getDeepModifiedNode(
  node: ReactNode,
  modifier: (node: ReactNode) => ModifierPayload
): GetDeepModifierNodePayload {
  let nodesModifiedTotal = 0;

  const deepNode = Children.map(node, (child) => {
    const { modifiedNode, nodesModified } = modifier(child);

    if (isValidElement(modifiedNode)) {
      if (modifiedNode.props.children) {
        const nextNode = getDeepModifiedNode(modifiedNode.props.children, modifier);

        nodesModifiedTotal += nextNode.nodesModifiedTotal;
        const props = {
          children: nextNode.node,
        };

        return cloneElement(modifiedNode, props);
      }

      return modifiedNode;
    }

    nodesModifiedTotal += nodesModified;
    return modifiedNode;
  });

  return {
    node: deepNode,
    nodesModifiedTotal,
  };
}
