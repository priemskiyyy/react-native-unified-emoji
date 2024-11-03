import Emoji from '../components/Emoji';
import { render } from '@testing-library/react-native';

jest.mock('expo-image', () => ({
  Image: 'Image',
}));
describe('Emoji', () => {
  it('renders correctly', () => {
    const { toJSON, getByTestId } = render(<Emoji testID={'emoji'}>👋</Emoji>);
    expect(toJSON()).toMatchSnapshot();
    expect(getByTestId('emoji')).toBeTruthy();
  });
  it('not crash when children is empty', () => {
    // @ts-ignore
    const { toJSON } = render(<Emoji />);
    expect(toJSON()).toMatchSnapshot();
  });
});
