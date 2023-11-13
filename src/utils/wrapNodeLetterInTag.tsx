import { ReactNode, createElement } from 'react';
import type { ModifierPayload } from './getDeepModifiedNode';

export default function wrapNodeLetterInTag(node: ReactNode, tag: string): ModifierPayload {
  let result = node;
  let lettersWrapped = 0;

  if (typeof node === 'string' || typeof node === 'number') {
    const words = String(node)
      .split(' ')
      .filter((word) => word.length > 0);

    result = words.map((word, wordIndex) => {
      const letters = String(word).split('');
      lettersWrapped += letters.length;

      const letterElements = letters.map((letter, letterIndex) => {
        return createElement(
          tag,
          { className: letter !== ' ' ? 'letter' : '', key: `${letterIndex}-${letter}` },
          letter
        );
      });

      const spaceElement =
        words.length - 1 === wordIndex
          ? null
          : createElement(tag, { className: 'space', key: `${wordIndex}-space` }, <>&nbsp;</>);

      const wordElement = createElement(tag, { className: 'word', key: `${wordIndex}-${word}` }, [
        letterElements,
        spaceElement,
      ]);

      return wordElement;
    });
  }

  return {
    modifiedNode: result,
    nodesModified: lettersWrapped,
  };
}
