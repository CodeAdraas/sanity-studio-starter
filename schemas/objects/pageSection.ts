import {defineField} from 'sanity' 

export default defineField({
    name: 'pageSection',
    title: 'Pagina sectie',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Sectie titel',
            description: 'Niet zichtbaar op de site',
            initialValue: 'Sectie'
        },
        {
            name: 'anchorId',
            type: 'string',
            title: 'Haak ID',
            description: 'Niet zichtbaar op de site, wordt gebruikt ter referentie van haak links',
            initialValue: 'Sectie'
        },
        {
            name: 'body',
            type: 'body',
            title: 'Inhoud',
            validation: R => R.required()
        }
    ],
    // @TODO: something of body modules preview
    preview: {
        select: {
            title: 'title',
            anchorId: 'anchorId'
        },
        prepare({title, anchorId}) {
            return {
                title,
                subtitle: anchorId ? `#${anchorId}` : 'Geen haak'
            }
        }
    }
})