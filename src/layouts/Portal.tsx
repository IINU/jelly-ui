import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  id: string;
  children?: ReactNode;
}

export function Portal({ children, id }: Props) {
  const [mount, setMount] = useState<HTMLElement | null>(null);
  const el = document.createElement('div');

  useEffect(() => {
    setMount(document.getElementById(id));
  }, [id]);

  useEffect(() => {
    if (!mount) return;

    mount.appendChild(el);

    return () => {
      if (mount.contains(el)) {
        mount.removeChild(el);
      }
    };
  }, [el, mount]);

  return mount ? createPortal(children, el) : null;
}
