import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PhotoItem from '../atoms/PhotoItem/PhotoItem.vue'

describe('PhotoItem', () => {
  it('renders properly', () => {
    const wrapper = mount(PhotoItem, {
      props: {
        id: 'some-id-here',
        src: 'some-src-here',
        alt: 'some-alt-here',
        author: 'some author here',
      },
    })

    expect(wrapper.find('img').attributes('src')).equals('some-src-here')
  })
})
