export const useCdn = false

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'production',
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'nyjc2nrg',
)

export const readToken = process.env.SANITY_API_READ_TOKEN || ''
export const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-21'

export const studioUrl = '/studio'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) { throw new Error(errorMessage) }
  return v
}