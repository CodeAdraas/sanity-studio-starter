import {defineField} from "sanity";
import {LinkIcon} from '@sanity/icons'
import {PAGE_REFERENCES} from "../../constants";

export default defineField({
    name: 'annotationLinkInternal',
    title: 'Interne link',
    type: 'object',
    icon: LinkIcon,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'reference',
            type: 'reference',
            weak: true,
            validation: (Rule) => Rule.required(),
            to: PAGE_REFERENCES,
        },
    ]
})