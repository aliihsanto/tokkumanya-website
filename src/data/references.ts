export interface Reference {
  name: string;
  type: 'shipping-line' | 'fleet' | 'agency' | 'industrial' | 'certification';
  logo?: string;
  country?: string;
}

export const references: Reference[] = [
  // Shipping Lines & Fleet Operators
  { name: 'Mediterranean Shipping Company (MSC)', type: 'shipping-line', country: 'CH' },
  { name: 'CMA CGM Group', type: 'shipping-line', country: 'FR' },
  { name: 'Maersk Line', type: 'shipping-line', country: 'DK' },
  { name: 'Hapag-Lloyd', type: 'shipping-line', country: 'DE' },
  { name: 'Evergreen Marine', type: 'shipping-line', country: 'TW' },
  { name: 'COSCO Shipping', type: 'shipping-line', country: 'CN' },
  { name: 'Yang Ming Marine', type: 'shipping-line', country: 'TW' },
  { name: 'PIL Pacific International Lines', type: 'shipping-line', country: 'SG' },

  // Turkish Fleets & Agencies
  { name: 'Türk Deniz Kuvvetleri', type: 'fleet', country: 'TR' },
  { name: 'Arkas Denizcilik', type: 'fleet', country: 'TR' },
  { name: 'Densa Denizcilik', type: 'fleet', country: 'TR' },
  { name: 'Kiran Holding Denizcilik', type: 'fleet', country: 'TR' },
  { name: 'Besiktas Shipping', type: 'fleet', country: 'TR' },
  { name: 'Karadeniz Holding', type: 'fleet', country: 'TR' },
  { name: 'Geden Lines', type: 'fleet', country: 'TR' },
  { name: 'Palmali Shipping', type: 'fleet', country: 'TR' },

  // International Fleets
  { name: 'Sovcomflot (SCF)', type: 'fleet', country: 'RU' },
  { name: 'Navios Maritime', type: 'fleet', country: 'GR' },
  { name: 'Diana Shipping', type: 'fleet', country: 'GR' },
  { name: 'Star Bulk Carriers', type: 'fleet', country: 'GR' },
  { name: 'Golden Ocean Group', type: 'fleet', country: 'NO' },
  { name: 'Pacific Basin Shipping', type: 'fleet', country: 'HK' },

  // Agencies & Brokers
  { name: 'Inchcape Shipping Services', type: 'agency', country: 'GB' },
  { name: 'GAC Group', type: 'agency', country: 'AE' },
  { name: 'Wilhelmsen Ships Service', type: 'agency', country: 'NO' },
  { name: 'Bernhard Schulte Shipmanagement', type: 'agency', country: 'DE' },

  // Certifications & Memberships
  { name: 'ISSA - International Ship Suppliers Association', type: 'certification' },
  { name: 'TURSSA - Türkiye Gemi Tedarikçileri Derneği', type: 'certification' },
  { name: 'ISO 9001:2015', type: 'certification' },
  { name: 'ISO 22000 - Gıda Güvenliği', type: 'certification' },
  { name: 'HACCP Sertifikası', type: 'certification' },
];

export const referenceTranslations: Record<string, Record<string, string>> = {
  title: { tr: 'Referanslarımız', en: 'Our References', ru: 'Наши партнёры', zh: '我们的合作伙伴', es: 'Nuestras Referencias', ar: 'مراجعنا', fr: 'Nos Références' },
  subtitle: {
    tr: 'Yıllar içinde birlikte çalıştığımız ve güvenlerini kazandığımız firma ve kuruluşlar.',
    en: 'Companies and organizations we have worked with and earned their trust over the years.',
    ru: 'Компании и организации, с которыми мы работаем и заслужили их доверие.',
    zh: '多年来与我们合作并信任我们的公司和组织。',
    es: 'Empresas y organizaciones con las que hemos trabajado y ganado su confianza.',
    ar: 'الشركات والمؤسسات التي عملنا معها وكسبنا ثقتها على مر السنين.',
    fr: 'Entreprises et organisations avec lesquelles nous avons travaillé et gagné leur confiance.',
  },
  shippingLines: { tr: 'Denizcilik Hatları', en: 'Shipping Lines', ru: 'Судоходные линии', zh: '航运公司', es: 'Líneas Navieras', ar: 'خطوط الشحن', fr: 'Lignes Maritime' },
  fleets: { tr: 'Filo Operatörleri', en: 'Fleet Operators', ru: 'Флотские операторы', zh: '船队运营商', es: 'Operadores de Flota', ar: 'مشغلو الأساطيل', fr: 'Opérateurs de Flotte' },
  agencies: { tr: 'Acenteler & Yönetim', en: 'Agencies & Management', ru: 'Агентства и управление', zh: '代理与管理', es: 'Agencias y Gestión', ar: 'الوكالات والإدارة', fr: 'Agences & Gestion' },
  certifications: { tr: 'Sertifikalar & Üyelikler', en: 'Certifications & Memberships', ru: 'Сертификаты и членство', zh: '认证与会员资格', es: 'Certificaciones y Membresías', ar: 'الشهادات والعضويات', fr: 'Certifications & Adhésions' },
  metaTitle: { tr: 'Referanslarımız | Tok Ship Supply', en: 'Our References | Tok Ship Supply', ru: 'Наши партнёры | Tok Ship Supply', zh: '合作伙伴 | Tok Ship Supply', es: 'Referencias | Tok Ship Supply', ar: 'مراجعنا | Tok Ship Supply', fr: 'Références | Tok Ship Supply' },
  metaDesc: {
    tr: 'Tok Ship Supply referansları. Uluslararası denizcilik şirketleri, filo operatörleri ve acentelerle güvenilir iş ortaklığı.',
    en: 'Tok Ship Supply references. Trusted partnerships with international shipping companies, fleet operators and agencies.',
    ru: 'Партнёры Tok Ship Supply. Надёжное сотрудничество с международными судоходными компаниями.',
    zh: 'Tok Ship Supply合作伙伴。与国际航运公司的可靠合作关系。',
    es: 'Referencias de Tok Ship Supply. Asociaciones confiables con empresas navieras internacionales.',
    ar: 'مراجع Tok Ship Supply. شراكات موثوقة مع شركات الشحن الدولية.',
    fr: 'Références de Tok Ship Supply. Partenariats de confiance avec les compagnies maritimes internationales.',
  },
};
