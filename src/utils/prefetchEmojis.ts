import { Image, type ImagePrefetchOptions } from 'expo-image';
import type { EmojiSet } from '../constants/set';
import { getEmojiCdnPath } from './getEmojiCdnPath';

export const prefetchEmojis = async (
  emojis: {
    emoji: string;
    set: EmojiSet;
  }[],
  options: ImagePrefetchOptions = {}
) => {
  if (!emojis || !emojis.length) {
    return;
  }

  const urls = emojis.map(({ emoji, set }) => getEmojiCdnPath(emoji, set));

  Image.prefetch(urls, options);
};
