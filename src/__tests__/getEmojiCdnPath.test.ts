import { EmojiSet } from '../constants/set';
import { getEmojiCdnPath } from '../utils/getEmojiCdnPath';

describe('getEmojiCdnPath', () => {
  it.each([
    [
      '😊',
      EmojiSet.Apple,
      `https://emojicdn.elk.sh/😊?style=${EmojiSet.Apple}`,
    ],
    [
      '😊',
      EmojiSet.Google,
      `https://emojicdn.elk.sh/😊?style=${EmojiSet.Google}`,
    ],
    [
      '😊',
      EmojiSet.Twitter,
      `https://emojicdn.elk.sh/😊?style=${EmojiSet.Twitter}`,
    ],
    [
      '😊',
      EmojiSet.Facebook,
      `https://emojicdn.elk.sh/😊?style=${EmojiSet.Facebook}`,
    ],
    ['😊', undefined, `https://emojicdn.elk.sh/😊?style=${EmojiSet.Apple}`],
    [
      '😂',
      EmojiSet.Apple,
      `https://emojicdn.elk.sh/😂?style=${EmojiSet.Apple}`,
    ],
    [
      '😂',
      EmojiSet.Google,
      `https://emojicdn.elk.sh/😂?style=${EmojiSet.Google}`,
    ],
    [
      '👾',
      EmojiSet.Twitter,
      `https://emojicdn.elk.sh/👾?style=${EmojiSet.Twitter}`,
    ],
    [
      '🌍',
      EmojiSet.Facebook,
      `https://emojicdn.elk.sh/🌍?style=${EmojiSet.Facebook}`,
    ],
    [
      '👍',
      EmojiSet.Apple,
      `https://emojicdn.elk.sh/👍?style=${EmojiSet.Apple}`,
    ],
    ['👍', undefined, `https://emojicdn.elk.sh/👍?style=${EmojiSet.Apple}`],
    [
      'abc',
      EmojiSet.Google,
      `https://emojicdn.elk.sh/abc?style=${EmojiSet.Google}`,
    ],
  ])('%s', (emoji, set, expected) => {
    expect(getEmojiCdnPath(emoji, set)).toBe(expected);
  });
});
