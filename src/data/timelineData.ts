import type { EraData } from './types';
import { era1800s } from './eras/1800s';
import { era1900s } from './eras/1900s';
import { eraPresent } from './eras/present';
import { eraFuture } from './eras/future';

export const timelineData: Record<string, EraData> = {
  "1800s": era1800s,
  "1900s": era1900s,
  "present": eraPresent,
  "future": eraFuture,
};

export * from './types';
