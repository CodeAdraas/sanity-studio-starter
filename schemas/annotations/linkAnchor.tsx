import {defineField} from 'sanity'
import {EnterRightIcon} from '@sanity/icons'

export default defineField({
    name: 'annotationLinkAnchor',
    title: 'Hakk link',
    type: 'object',
    icon: EnterRightIcon,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: R => R.required()
        },
        {
            name: 'anchorId',
            type: 'string',
            title: 'Haak ID',
        }
    ]
})