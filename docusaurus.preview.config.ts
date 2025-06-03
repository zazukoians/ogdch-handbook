import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import config from './docusaurus.config';

export default {
  ...config,
  onBrokenLinks: 'ignore'
} satisfies Config
