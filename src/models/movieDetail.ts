import z from 'zod'

export const DepartmentSchema = z.enum([
    'Acting',
    'Art',
    'Camera',
    'Costume & Make-Up',
    'Crew',
    'Directing',
    'Editing',
    'Production',
    'Sound',
    'Visual Effects',
    'Writing',
])
export type Department = z.infer<typeof DepartmentSchema>

export const BelongsToCollectionSchema = z.object({
    id: z.number(),
    name: z.string(),
    poster_path: z.string(),
    backdrop_path: z.string(),
})
export type BelongsToCollection = z.infer<typeof BelongsToCollectionSchema>

export const CastSchema = z.object({
    adult: z.boolean(),
    gender: z.number(),
    id: z.number(),
    known_for_department: DepartmentSchema,
    name: z.string(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.union([z.null(), z.string()]),
    cast_id: z.number().optional(),
    character: z.string().optional(),
    credit_id: z.string(),
    order: z.number().optional(),
    department: DepartmentSchema.optional(),
    job: z.string().optional(),
})
export type Cast = z.infer<typeof CastSchema>;

export const GenreSchema = z.object({
    id: z.number(),
    name: z.string(),
})
export type Genre = z.infer<typeof GenreSchema>

export const ProductionCompanySchema = z.object({
    id: z.number(),
    logo_path: z.union([z.null(), z.string()]),
    name: z.string(),
    origin_country: z.string(),
})
export type ProductionCompany = z.infer<typeof ProductionCompanySchema>

export const ProductionCountrySchema = z.object({
    iso_3166_1: z.string(),
    name: z.string(),
})
export type ProductionCountry = z.infer<typeof ProductionCountrySchema>

export const SpokenLanguageSchema = z.object({
    english_name: z.string(),
    iso_639_1: z.string(),
    name: z.string(),
})
export type SpokenLanguage = z.infer<typeof SpokenLanguageSchema>

export const CreditsSchema = z.object({
    cast: z.array(CastSchema),
    crew: z.array(CastSchema),
})
export type Credits = z.infer<typeof CreditsSchema>

export const MovieDetailSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string(),
    belongs_to_collection: BelongsToCollectionSchema,
    budget: z.number(),
    genres: z.array(GenreSchema),
    homepage: z.string(),
    id: z.number(),
    imdb_id: z.string(),
    origin_country: z.array(z.string()),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string(),
    production_companies: z.array(ProductionCompanySchema),
    production_countries: z.array(ProductionCountrySchema),
    release_date: z.string(),
    revenue: z.number(),
    runtime: z.number(),
    spoken_languages: z.array(SpokenLanguageSchema),
    status: z.string(),
    tagline: z.string(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
    credits: CreditsSchema,
})
export type MovieDetail = z.infer<typeof MovieDetailSchema>