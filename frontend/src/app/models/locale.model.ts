export interface LocaleInterface {
    _id?: string,
    _userId?: string,
    name: string,
    description: string,
    type: 'Casa' | 'Hotel' | 'Fazenda' | 'Turistico' | 'Comércio',
    status: 'Active' | 'Inactive',
    address: string,
    updatedAt?: Date,
    createdAt?: Date
}
export const localeTypes = [
    { action: 'Casa', value: 'Casa' },
    { action: 'Hotel', value: 'Hotel' },
    { action: 'Fazenda', value: 'Fazenda' },
    { action: 'Local Turístico', value: 'Turistico' },
    { action: 'Comércio', value: 'Comércio' }]