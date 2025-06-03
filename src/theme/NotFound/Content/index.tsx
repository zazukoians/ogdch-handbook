import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/NotFound/Content';
import Content from './content.mdx'

export default function NotFoundContent({className}: Props): ReactNode {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Content />
        </div>
      </div>
    </main>
  );
}
