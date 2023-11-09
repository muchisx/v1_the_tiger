// Styled Components
import { BodyOverlayStyled, BodyLock } from './BodyOverlay.styles';

// Types
type Props = {
  onClickAction?: () => void;
};

function BodyOverlay(props: Props) {
  const { onClickAction } = props;
  return (
    <BodyOverlayStyled onClick={onClickAction} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <BodyLock />
    </BodyOverlayStyled>
  );
}

export default BodyOverlay;
