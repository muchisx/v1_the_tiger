import { VideoHTMLAttributes } from 'react';
// Styled Components
import { Video, VideoResponsiveStyled } from './VideoResponsive.styles';
// Types
import type { Width, Height } from '../../../types/css.types';
import { VideoType } from '../../../types/media.types';

type Source = {
  srcURL: string;
  srcType: VideoType;
};

export type Props = {
  height: Height;
  width: Width;
  $src: Source | Source[];
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  padding?: string;
} & VideoHTMLAttributes<HTMLVideoElement>;

function VideoResponsive(props: Props) {
  const { height, width, fit = 'cover', padding, $src, ...attrs } = props;
  const sources = Array.isArray($src) ? $src : [$src];

  return (
    <VideoResponsiveStyled $height={height} $width={width} $padding={padding}>
      <Video fit={fit} {...attrs}>
        {sources.map((item) => (
          <source src={item.srcURL} type={item.srcType} key={item.srcURL} />
        ))}
      </Video>
    </VideoResponsiveStyled>
  );
}

export default VideoResponsive;
