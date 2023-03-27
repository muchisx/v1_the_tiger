import styled from 'styled-components';
import { Link } from 'react-router-dom';

type WordWrapAttributes = {
  instance: number;
};
type WordWrapProps = {
  isUppercase?: boolean;
};

type Props = WordWrapProps;

const ContainerLink = styled(Link)`
  display: flex;
  padding: 2px;
  gap: 8px;
  font-family: var(--heading-family);
  text-decoration: none;
`;

const WordWrap = styled.div<WordWrapProps & WordWrapAttributes>`
  text-transform: ${(props) => (props.isUppercase ? 'uppercase' : 'none')};
  display: flex;
  gap: 1px;
  color: var(
    --logo-${(props) => (props.instance === 0 ? 'primary' : 'secondary')}
  );
`;

const LetterSpan = styled.span`
  font-size: 28px;
`;

function LogoStyled(props: Props) {
  const { isUppercase } = props;
  const instances = ['Miguel', 'Ángel'];

  return (
    <ContainerLink to="/">
      {instances.map((instance, i) => {
        const lettersArray = instance.split('');

        return (
          <WordWrap instance={i} isUppercase={isUppercase} key={instance}>
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
