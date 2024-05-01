type PaletteSizeType = `${number} * ${number} * ${number}`

export interface Logistic {
  id: string | number
  carry_type: 'ground' | 'air' | 'sea' | 'rail'
  action: 'import' | 'export' | 'clearance'
  condition: 'EXW' | 'FOB' | 'FCA' | 'CFR' | 'Door to Door'
  product_type: 'normal' | 'dangerous' | 'temp_dependent' | 'oil'
  loading_place: string
  unloading_place: string
  vehicle_type?: 'container' | 'truck' | 'train' | 'airplane'
  amount_type?: 'full' | 'groupage' | 'bulk'
  container_type?: 'GP 20' | 'HD 20' | 'GP 40' | 'HQ 40' | 'OT 20' | 'OT 40' | 'REF 20' | 'REF 40' | 'FR 20' | 'FR 40'
  container_count?: number
  truck_type?: 'tent' | 'refrigerator' | 'surface' | 'tanker'
  truck_count?: number
  palette_count?: number
  palette_size?: PaletteSizeType
  total_weight?: number | string
  total_price?: number
  name: string
  arrangable: boolean
  description?: string
  document?: string | URL
}

export const logistics: Logistic[] = [
  {
    id: 1,
    carry_type: 'ground',
    action: 'import',
    arrangable: true,
    condition: 'EXW',
    name: 'شربت لاغری',
    loading_place: 'قزاقستان',
    product_type: 'temp_dependent',
    unloading_place: 'ایران',
    amount_type: 'full',
    container_count: 4,
    container_type: 'HD 20',
    description: 'این دارو باید با احتیاط حمل شود و در دمای زیر ۲۵ درجه و در جای خشک نگهداری شود',
    document: '/images/others/drug.png',
    palette_count: 12,
    palette_size: '120 * 100 * 200',
    total_price: 200000000,
    total_weight: '120kg',
    truck_count: 20,
    truck_type: 'refrigerator',
    vehicle_type: 'truck'
  }
]
