import type { Preview } from '@storybook/react'
import '../src/index.css'
import '../src/storybook.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#FFFFFF' },
        { name: 'primary900', value: '#1F304A' },
        { name: 'primary200', value: '#DBDEE2' },
        { name: 'primary050', value: '#F4F5F6' },
      ],
    },
    viewport: {
      defaultViewport: 'iPhone15',
      viewports: {
        macBookPro: {
          name: 'MacBook Pro',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
        iPhone15: {
          name: 'iPhone 15',
          styles: {
            width: '393px',
            height: '852px',
          },
        },
        iPhoneSE: {
          name: 'iPhone SE',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
      },
    },
    options: {
      storySort: {
        order: [
          'Button',
          'Atoms', [
            'Dropdowns', [
              'Dropdown Input',
              'Async Dropdown Input',
            ]
          ]
        ],
      },
    }
  },
}

export default preview
