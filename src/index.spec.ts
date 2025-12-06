import FaCalendar from '@fortawesome/fontawesome-free/svgs/solid/calendar.svg?component';
import { expect, test } from '@playwright/experimental-ct-vue';

import Self from './index.vue';

test('works', async ({ mount }) => {
  const component = await mount(Self, { props: { icon: FaCalendar } });
  await expect(component).toHaveScreenshot();
});
