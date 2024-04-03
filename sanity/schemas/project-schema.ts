import { hostname } from "os";
import { title } from "process";
import { fieldNeedsEscape } from "sanity";

const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            titile: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            titile: 'Slug',
            type: 'slug',
            options: { source: 'name'}
        },
        {
            name: 'image',
            titile: 'Image',
            type: 'image',
            options: { hotspot: true},
            fields: [ {
                name: 'alt',
                titile: 'Alt',
                type: 'string'
            }
            ] 
        },
        // {
        //     name: 'url',
        //     titile: 'URL',
        //     type: 'url'
        // },
        {
            name: 'content',
            titile: 'Content',
            type: 'array',
            of: [{type: 'block'}]
        }
    ]
}

export default project;