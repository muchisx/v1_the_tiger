import styled from 'styled-components';
import { Link } from 'react-router-dom';

type WordWrapAttributes = { index: number };
type WordWrapProps = { isUppercase?: StyledProps['isUppercase'] };
export type StyledProps = {
  isUppercase?: boolean;
};

const ContainerLink = styled(Link)`
  display: flex;
  padding: 2px;
  gap: 8px;
  font-family: var(--heading-family);
  font-size: 28px;
  text-decoration: none;
`;

const WordWrap = styled.div<WordWrapProps & WordWrapAttributes>`
  text-transform: ${(props) => (props.isUppercase ? 'uppercase' : 'none')};
  display: flex;
  color: var(--logo-${(props) => (props.index === 0 ? 'primary' : 'secondary')});
`;

const LetterSpan = styled.span`
  font-weight: 500;
`;

function LogoStyled(props: StyledProps) {
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

LogoStyled.defaultProps = {
  isUppercase: false,
};

export default LogoStyled;
