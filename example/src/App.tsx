import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Emoji, EmojiSet } from 'react-native-unified-emoji';
import { Fragment } from 'react';

const Emojis = ['👋', '🚀', '🎉', '🙈', '🔥'];

const Demo = [
  {
    category: 'Apple',
    set: EmojiSet.Apple,
    emojis: Emojis,
  },
  {
    category: 'Google',
    set: EmojiSet.Google,
    emojis: Emojis,
  },
  {
    category: 'Twitter',
    set: EmojiSet.Twitter,
    emojis: Emojis,
  },
  {
    category: 'Facebook',
    set: EmojiSet.Facebook,
    emojis: Emojis,
  },
];

const renderEmoji = (emoji: string, category: EmojiSet) => (
  <Emoji style={styles.emoji} key={emoji + category} set={category}>
    {emoji}
  </Emoji>
);

const renderCategory = (category: (typeof Demo)[number]) => (
  <Fragment key={category.category}>
    <Text style={styles.category}>{category.category}</Text>
    <View style={styles.emojis}>
      {category.emojis.map((emoji) => renderEmoji(emoji, category.set))}
    </View>
  </Fragment>
);

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Demo.map(renderCategory)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 80,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  emojis: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  emoji: {
    width: 60,
    height: 60,
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
});
