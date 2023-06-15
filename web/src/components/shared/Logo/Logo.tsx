// Types
import type { Props } from './Logo.types';
// Styled Components
import { ContainerLink, LetterSpan, WordWrap } from './Logo.styles';

function Logo(props: Props) {
  const { isUppercase } = props;
  const wordsArray = ['Miguel', 'Ángel'];

  return (
    <ContainerLink className="logo" to="/">
      {wordsArray.map((word, i) => {
        const lettersArray = word.split('');

        return (
          <WordWrap index={i} isUppercase={isUppercase} key={word}>
            {lettersArray.map((letter) => (
              <LetterSpan key={letter}>{letter}</LetterSpan>
            ))}
          </WordWrap>
        );
      })}
    </ContainerLink>
  );
}

export default Logo;
