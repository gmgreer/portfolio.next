import {createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: "wxhoyz8p",
    apiVersion: "2022-11-29",
    useCdn: false,
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) => 
    createImageUrlBuilder(config).image(source)