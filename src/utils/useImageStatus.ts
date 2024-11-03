import { useState } from 'react';
import { type ImageProps } from 'expo-image';

type ImageStatus = 'loading' | 'error' | 'success';

type ImageLoadingCallbacks = Pick<
  ImageProps,
  'onLoadStart' | 'onLoad' | 'onError'
>;

export const useImageStatus = (props: ImageLoadingCallbacks) => {
  const [status, setStatus] = useState<ImageStatus>('loading');

  const onLoadStart: ImageProps['onLoadStart'] = () => {
    if (props?.onLoadStart) {
      props.onLoadStart();
    }
    setStatus('loading');
  };

  const onLoad: ImageProps['onLoad'] = (event) => {
    if (props?.onLoad) {
      props.onLoad(event);
    }
    setStatus('success');
  };

  const onError: ImageProps['onError'] = (event) => {
    if (props?.onError) {
      props.onError(event);
    }
    setStatus('error');
  };

  return {
    status,
    onLoadStart,
    onLoad,
    onError,
  };
};
