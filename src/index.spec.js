import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginComponent from '@dword-design/tester-plugin-component'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'
import packageName from 'depcheck-package-name'

export default tester(
  {
    works: {
      nuxtConfig: {
        modules: [packageName`nuxt-svg-loader`],
      },
      page: endent`
      <template>
        <self class="foo" :icon="FaCalendar" />
      </template>

      <script>
      import FaCalendar from '${packageName`@fortawesome/fontawesome-free`}/svgs/solid/calendar.svg'

      export default {
        computed: {
          FaCalendar: () => FaCalendar,
        },
      }
      </script>

    `,
      async test() {
        await this.page.goto('http://localhost:3000')
        await this.page.setViewport({
          height: 100,
          width: 100,
        })
        await this.page.waitForSelector('.foo')
        expect(
          await this.page.screenshot({ fullPage: true })
        ).toMatchImageSnapshot(this)
      },
    },
  },
  [
    testerPluginComponent({ componentPath: require.resolve('./index.vue') }),
    testerPluginPuppeteer(),
  ]
)
