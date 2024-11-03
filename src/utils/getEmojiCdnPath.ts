import { EmojiSet } from '../constants/set';

export const getEmojiCdnPath = (
  emoji: string,
  set: EmojiSet = EmojiSet.Apple
): string => {
  return `https://emojicdn.elk.sh/${emoji}?style=${set}`;
};
