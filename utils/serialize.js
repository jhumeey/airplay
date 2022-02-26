export async function serializeFunc({ id, fields }) {
  return {
    id: id,
    name: fields.name,
    description: fields.description,
    link: fields.link,
    tag: fields.tag,
    createdAt: createdAt.toString()
  }
}