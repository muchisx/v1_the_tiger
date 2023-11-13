import { ReactNode, createElement } from 'react';

export default function wrapNodeLetterInTag(node: ReactNode, tag: string): ReactNode {
  let result = node;

  if (typeof node === 'string' || typeof node === 'number') {
    const words = String(node).split(' ');

    result = words.map((word, wordIndex) => {
      const letters = String(word).split('');

      const letterElements = letters.map((letter, letterIndex) =>
        createElement(
          tag,
          { className: letter !== ' ' ? 'letter' : '', key: `${letterIndex}-${letter}` },
          letter
        )
      );

      const spaceElement =
        words.length - 1 === wordIndex
          ? null
          : createElement(tag, { className: 'space', key: `${wordIndex}-space` }, <>&nbsp;</>);

      const wordElement = createElement(tag, { className: 'word', key: `${wordIndex}-${word}` }, [
        letterElements,
      ]);

      return wordElement;
    });
  }

  return result;
}
