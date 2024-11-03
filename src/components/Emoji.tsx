import React from 'react';
import { Image, type ImageProps, type ImageSource } from 'expo-image';
import { getEmojiCdnPath } from '../utils/getEmojiCdnPath';
import { EmojiSet } from '../constants/set';
import { useImageStatus } from '../utils/useImageStatus';
import NativeEmoji from './NativeEmoji';

export type EmojiProps = {
  children: string;
  source?: ImageSource;
  set?: EmojiSet;
  Fallback?: typeof NativeEmoji;
  Loader?: React.FunctionComponent<Pick<EmojiProps, 'children'>>;
} & Omit<ImageProps, 'children' | 'source'>;

const Emoji: React.FunctionComponent<EmojiProps> = ({
  children,
  source: _source = {},
  Fallback = NativeEmoji,
  Loader = () => null,
  set = EmojiSet.Apple,
  ...imageProps
}) => {
  const { status, ...handlers } = useImageStatus(imageProps);

  if (!children) {
    return null;
  }

  const uri = getEmojiCdnPath(children, set);

  const source: ImageSource = {
    ...(_source ?? {}),
    uri: uri,
    cacheKey: uri,
  };

  if (status === 'error') {
    return <Fallback children={children} />;
  }

  return (
    <>
      <Image {...imageProps} {...handlers} source={source} />
      {status === 'loading' && <Loader children={children} />}
    </>
  );
};

export default Emoji;
