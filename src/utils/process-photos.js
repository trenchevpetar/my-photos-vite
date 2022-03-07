import { uuid } from './uuid'

export const processPhotos = (photos, factor = 3) => {
  return photos.map((x) => {
    const width = ~~(x.width / factor)
    const height = ~~(x.height / factor)

    return {
      ...x,
      download_url: `https://picsum.photos/id/${x.id}/${width}/${height}`,
      id: uuid(),
      height,
      width,
    }
  })
}
