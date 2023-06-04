import BodyOverlayStyled from './BodyOverlay.styles';

type Props = {
  onClickAction?: () => void;
};

function BodyOverlay(props: Props) {
  const { onClickAction } = props;
  return <BodyOverlayStyled onClick={onClickAction} />;
}

export default BodyOverlay;
