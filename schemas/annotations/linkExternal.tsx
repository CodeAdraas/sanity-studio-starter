import { defineField } from "sanity";
import {EarthGlobeIcon} from '@sanity/icons'

export default defineField({
    name: 'annotationLinkExternal',
    title: 'Externe link',
    type: 'object',
    icon: EarthGlobeIcon,
    fields: [
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule) => Rule.required().uri({scheme: ['http', 'https', 'mailto']}),
        },
        // Open in a new window
        {
            title: 'Open in a new window?',
            name: 'targetBlank',
            type: 'boolean',
            initialValue: true,
        },
    ]
})