import React from 'react';
import { Text, type TextProps } from 'react-native';

export type NativeEmojiProps = {
  children: string;
} & TextProps;

const NativeEmoji: React.FunctionComponent<NativeEmojiProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <Text {...props}>{children}</Text>
    </>
  );
};

export default NativeEmoji;
