import { DocumentTextIcon } from '@sanity/icons'
import { defaultLayoutFields } from '../utils/defaultLayoutFields'
import { defaultFieldsets } from '../utils/defaultFieldsets'

export default {
  name: 'contentBlock',
  title: 'Content Block',
  type: 'object',
  icon: DocumentTextIcon,
  preview: {
    prepare() {
      return {
        title: 'Content',
      }
    }
  },
  fieldsets: [
    ...defaultFieldsets
  ],
  fields: [
    {
      title: 'Number of Columns',
      name: 'numberOfColumns',
      type: 'string',
      initialValue: '1',
      options: {
        list: [
          { title: '1', value: '1' },
          { title: '2', value: '2' },
        ],
      },
    },
    {
      title: 'Style',
      name: 'style',
      type: 'string',
      initialValue: 'full',
      options: {
        list: [
          { title: 'Narrow', value: 'narrow' },
          { title: 'Full Width',  value: 'full' },
        ],
      },
      hidden: ({parent}) => parent?.numberOfColumns === '2'
    },
    {
      name: 'columnOne',
      title: 'Column One',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'columnTwo',
      title: 'Column Two',
      type: 'array',
      of: [{ type: 'block' }],
      hidden: ({parent}) => parent?.numberOfColumns === '1'
    },
    ...defaultLayoutFields
  ]
}