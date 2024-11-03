import { useImageStatus } from '../utils/useImageStatus';
import { act, renderHook } from '@testing-library/react-native';

describe('useImageStatus', () => {
  it('should return loading status initially', () => {
    const { result } = renderHook(() =>
      useImageStatus({
        onLoad: jest.fn(),
        onError: jest.fn(),
        onLoadStart: jest.fn(),
      })
    );

    expect(result.current.status).toBe('loading');
  });

  it('should return success status after onLoad is called', () => {
    const onLoadMock = jest.fn();
    const { result } = renderHook(() =>
      useImageStatus({
        onLoad: onLoadMock,
        onError: jest.fn(),
        onLoadStart: jest.fn(),
      })
    );

    act(() => {
      result.current.onLoad({ nativeEvent: {} } as any);
    });

    expect(onLoadMock).toBeCalled();
    expect(result.current.status).toBe('success');
  });

  it('should return error status after onError is called', () => {
    const onErrorMock = jest.fn();
    const { result } = renderHook(() =>
      useImageStatus({
        onLoad: jest.fn(),
        onError: onErrorMock,
        onLoadStart: jest.fn(),
      })
    );

    act(() => {
      result.current.onError({ nativeEvent: {} } as any);
    });

    expect(onErrorMock).toBeCalled();
    expect(result.current.status).toBe('error');
  });

  it('should return loading status after onLoadStart is called', () => {
    const onLoadStartMock = jest.fn();
    const { result } = renderHook(() =>
      useImageStatus({
        onLoad: jest.fn(),
        onError: jest.fn(),
        onLoadStart: onLoadStartMock,
      })
    );

    act(() => {
      result.current.onLoadStart();
    });

    expect(onLoadStartMock).toBeCalled();
    expect(result.current.status).toBe('loading');
  });
});
