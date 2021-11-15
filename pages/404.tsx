import { useRouter } from 'next/router';
import { isBrowser } from '@/coreMethods/dataPersistence';

const FourOhFour = (): void => {
  const router = useRouter();
  if (isBrowser) {
    router.push('/');
  }
  return null;
};

export default FourOhFour;
