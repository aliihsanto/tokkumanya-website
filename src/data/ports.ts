export interface Port {
  id: string;
  region: 'black-sea' | 'marmara' | 'aegean' | 'mediterranean';
  lat: number;
  lng: number;
  names: Record<string, string>;
  nearbyPorts: string[];
}

export const ports: Port[] = [
  // === KARADENIZ / BLACK SEA ===
  { id: 'samsun', region: 'black-sea', lat: 41.2867, lng: 36.3300, names: { tr: 'Samsun', en: 'Samsun', ru: 'Самсун', zh: '萨姆松', es: 'Samsun', ar: 'سامسون', fr: 'Samsun' }, nearbyPorts: ['trabzon', 'sinop', 'ordu', 'terme'] },
  { id: 'trabzon', region: 'black-sea', lat: 41.0015, lng: 39.7178, names: { tr: 'Trabzon', en: 'Trabzon', ru: 'Трабзон', zh: '特拉布宗', es: 'Trebisonda', ar: 'طرابزون', fr: 'Trébizonde' }, nearbyPorts: ['samsun', 'rize', 'giresun', 'hopa'] },
  { id: 'zonguldak', region: 'black-sea', lat: 41.4564, lng: 31.7987, names: { tr: 'Zonguldak', en: 'Zonguldak', ru: 'Зонгулдак', zh: '宗古尔达克', es: 'Zonguldak', ar: 'زونغولداك', fr: 'Zonguldak' }, nearbyPorts: ['eregli', 'bartin', 'istanbul'] },
  { id: 'sinop', region: 'black-sea', lat: 42.0231, lng: 35.1531, names: { tr: 'Sinop', en: 'Sinop', ru: 'Синоп', zh: '锡诺普', es: 'Sinope', ar: 'سينوب', fr: 'Sinop' }, nearbyPorts: ['samsun', 'bartin', 'terme'] },
  { id: 'giresun', region: 'black-sea', lat: 40.9128, lng: 38.3895, names: { tr: 'Giresun', en: 'Giresun', ru: 'Гиресун', zh: '吉雷松', es: 'Giresun', ar: 'غيرسون', fr: 'Giresun' }, nearbyPorts: ['trabzon', 'ordu', 'samsun'] },
  { id: 'ordu', region: 'black-sea', lat: 40.9839, lng: 37.8764, names: { tr: 'Ordu', en: 'Ordu', ru: 'Орду', zh: '奥尔杜', es: 'Ordu', ar: 'أوردو', fr: 'Ordu' }, nearbyPorts: ['giresun', 'samsun', 'fatsa', 'unye'] },
  { id: 'rize', region: 'black-sea', lat: 41.0201, lng: 40.5234, names: { tr: 'Rize', en: 'Rize', ru: 'Ризе', zh: '里泽', es: 'Rize', ar: 'ريزا', fr: 'Rize' }, nearbyPorts: ['trabzon', 'hopa'] },
  { id: 'hopa', region: 'black-sea', lat: 41.3921, lng: 41.4231, names: { tr: 'Hopa', en: 'Hopa', ru: 'Хопа', zh: '霍帕', es: 'Hopa', ar: 'هوبا', fr: 'Hopa' }, nearbyPorts: ['rize', 'trabzon'] },
  { id: 'bartin', region: 'black-sea', lat: 41.6344, lng: 32.3375, names: { tr: 'Bartın', en: 'Bartin', ru: 'Бартын', zh: '巴尔滕', es: 'Bartín', ar: 'بارتن', fr: 'Bartın' }, nearbyPorts: ['zonguldak', 'eregli', 'sinop'] },
  { id: 'eregli', region: 'black-sea', lat: 41.2906, lng: 31.4231, names: { tr: 'Ereğli', en: 'Eregli', ru: 'Эрегли', zh: '埃雷利', es: 'Ereğli', ar: 'أريغلي', fr: 'Ereğli' }, nearbyPorts: ['zonguldak', 'bartin'] },
  { id: 'fatsa', region: 'black-sea', lat: 41.0451, lng: 37.5010, names: { tr: 'Fatsa', en: 'Fatsa', ru: 'Фатса', zh: '法特萨', es: 'Fatsa', ar: 'فاتسا', fr: 'Fatsa' }, nearbyPorts: ['ordu', 'unye', 'samsun'] },
  { id: 'unye', region: 'black-sea', lat: 41.1314, lng: 37.2811, names: { tr: 'Ünye', en: 'Unye', ru: 'Унье', zh: '于尼耶', es: 'Ünye', ar: 'أونيا', fr: 'Ünye' }, nearbyPorts: ['fatsa', 'ordu', 'samsun', 'terme'] },
  { id: 'terme', region: 'black-sea', lat: 41.2100, lng: 36.9700, names: { tr: 'Terme', en: 'Terme', ru: 'Терме', zh: '泰尔梅', es: 'Terme', ar: 'تيرمي', fr: 'Terme' }, nearbyPorts: ['samsun', 'unye', 'sinop'] },

  // === MARMARA ===
  { id: 'istanbul', region: 'marmara', lat: 41.0082, lng: 28.9784, names: { tr: 'İstanbul', en: 'Istanbul', ru: 'Стамбул', zh: '伊斯坦布尔', es: 'Estambul', ar: 'اسطنبول', fr: 'Istanbul' }, nearbyPorts: ['ambarli', 'tuzla', 'gemlik', 'derince', 'tekirdag'] },
  { id: 'ambarli', region: 'marmara', lat: 41.0028, lng: 28.6889, names: { tr: 'Ambarlı', en: 'Ambarli', ru: 'Амбарлы', zh: '安巴尔利', es: 'Ambarlı', ar: 'أمبارلي', fr: 'Ambarlı' }, nearbyPorts: ['istanbul', 'tekirdag', 'tuzla'] },
  { id: 'tuzla', region: 'marmara', lat: 40.8200, lng: 29.3000, names: { tr: 'Tuzla', en: 'Tuzla', ru: 'Тузла', zh: '图兹拉', es: 'Tuzla', ar: 'توزلا', fr: 'Tuzla' }, nearbyPorts: ['istanbul', 'derince', 'yalova'] },
  { id: 'gemlik', region: 'marmara', lat: 40.4356, lng: 29.1567, names: { tr: 'Gemlik', en: 'Gemlik', ru: 'Гемлик', zh: '盖姆利克', es: 'Gemlik', ar: 'غمليك', fr: 'Gemlik' }, nearbyPorts: ['mudanya', 'yalova', 'bandirma'] },
  { id: 'bandirma', region: 'marmara', lat: 40.3522, lng: 27.9731, names: { tr: 'Bandırma', en: 'Bandirma', ru: 'Бандырма', zh: '班德尔马', es: 'Bandırma', ar: 'بانديرما', fr: 'Bandırma' }, nearbyPorts: ['gemlik', 'tekirdag', 'mudanya'] },
  { id: 'tekirdag', region: 'marmara', lat: 40.9781, lng: 27.5113, names: { tr: 'Tekirdağ', en: 'Tekirdag', ru: 'Текирдаг', zh: '泰基尔达', es: 'Tekirdağ', ar: 'تيكيرداغ', fr: 'Tekirdağ' }, nearbyPorts: ['istanbul', 'ambarli', 'bandirma'] },
  { id: 'yalova', region: 'marmara', lat: 40.6567, lng: 29.2756, names: { tr: 'Yalova', en: 'Yalova', ru: 'Ялова', zh: '亚洛瓦', es: 'Yalova', ar: 'يالوفا', fr: 'Yalova' }, nearbyPorts: ['tuzla', 'gemlik', 'mudanya'] },
  { id: 'derince', region: 'marmara', lat: 40.7531, lng: 29.8189, names: { tr: 'Derince', en: 'Derince', ru: 'Деринджe', zh: '德林杰', es: 'Derince', ar: 'دارينجة', fr: 'Derince' }, nearbyPorts: ['istanbul', 'tuzla', 'yalova'] },
  { id: 'mudanya', region: 'marmara', lat: 40.3772, lng: 28.8831, names: { tr: 'Mudanya', en: 'Mudanya', ru: 'Муданья', zh: '穆达尼亚', es: 'Mudanya', ar: 'مودانيا', fr: 'Mudanya' }, nearbyPorts: ['gemlik', 'yalova', 'bandirma'] },

  // === EGE / AEGEAN ===
  { id: 'izmir', region: 'aegean', lat: 38.4192, lng: 27.1287, names: { tr: 'İzmir', en: 'Izmir', ru: 'Измир', zh: '伊兹密尔', es: 'Esmirna', ar: 'إزمير', fr: 'Izmir' }, nearbyPorts: ['aliaga', 'dikili', 'cesme', 'kusadasi'] },
  { id: 'aliaga', region: 'aegean', lat: 38.8003, lng: 26.9717, names: { tr: 'Aliağa', en: 'Aliaga', ru: 'Алиага', zh: '阿利亚加', es: 'Aliağa', ar: 'علي آغا', fr: 'Aliağa' }, nearbyPorts: ['izmir', 'dikili', 'canakkale'] },
  { id: 'dikili', region: 'aegean', lat: 39.0722, lng: 26.8878, names: { tr: 'Dikili', en: 'Dikili', ru: 'Дикили', zh: '迪基利', es: 'Dikili', ar: 'ديكيلي', fr: 'Dikili' }, nearbyPorts: ['aliaga', 'izmir', 'canakkale'] },
  { id: 'cesme', region: 'aegean', lat: 38.3236, lng: 26.3028, names: { tr: 'Çeşme', en: 'Cesme', ru: 'Чешме', zh: '切什梅', es: 'Çeşme', ar: 'تشيشمي', fr: 'Çeşme' }, nearbyPorts: ['izmir', 'kusadasi'] },
  { id: 'kusadasi', region: 'aegean', lat: 37.8579, lng: 27.2610, names: { tr: 'Kuşadası', en: 'Kusadasi', ru: 'Кушадасы', zh: '库沙达斯', es: 'Kuşadası', ar: 'كوشاداسي', fr: 'Kuşadası' }, nearbyPorts: ['izmir', 'cesme', 'bodrum'] },
  { id: 'bodrum', region: 'aegean', lat: 37.0344, lng: 27.4305, names: { tr: 'Bodrum', en: 'Bodrum', ru: 'Бодрум', zh: '博德鲁姆', es: 'Bodrum', ar: 'بودروم', fr: 'Bodrum' }, nearbyPorts: ['kusadasi', 'marmaris'] },
  { id: 'canakkale', region: 'aegean', lat: 40.1553, lng: 26.4142, names: { tr: 'Çanakkale', en: 'Canakkale', ru: 'Чанаккале', zh: '恰纳卡莱', es: 'Çanakkale', ar: 'تشاناكالي', fr: 'Çanakkale' }, nearbyPorts: ['dikili', 'aliaga', 'bandirma', 'tekirdag'] },

  // === AKDENİZ / MEDITERRANEAN ===
  { id: 'mersin', region: 'mediterranean', lat: 36.8121, lng: 34.6415, names: { tr: 'Mersin', en: 'Mersin', ru: 'Мерсин', zh: '梅尔辛', es: 'Mersin', ar: 'مرسين', fr: 'Mersin' }, nearbyPorts: ['iskenderun', 'tasucu', 'ceyhan', 'antalya'] },
  { id: 'iskenderun', region: 'mediterranean', lat: 36.5840, lng: 36.1715, names: { tr: 'İskenderun', en: 'Iskenderun', ru: 'Искендерун', zh: '伊斯肯德伦', es: 'Alejandreta', ar: 'الإسكندرون', fr: 'Iskenderun' }, nearbyPorts: ['mersin', 'ceyhan', 'dortyol'] },
  { id: 'antalya', region: 'mediterranean', lat: 36.8841, lng: 30.7056, names: { tr: 'Antalya', en: 'Antalya', ru: 'Анталья', zh: '安塔利亚', es: 'Antalya', ar: 'أنطاليا', fr: 'Antalya' }, nearbyPorts: ['mersin', 'finike', 'alanya', 'marmaris'] },
  { id: 'marmaris', region: 'mediterranean', lat: 36.8510, lng: 28.2744, names: { tr: 'Marmaris', en: 'Marmaris', ru: 'Мармарис', zh: '马尔马里斯', es: 'Marmaris', ar: 'مارماريس', fr: 'Marmaris' }, nearbyPorts: ['bodrum', 'fethiye', 'antalya'] },
  { id: 'fethiye', region: 'mediterranean', lat: 36.6594, lng: 29.1231, names: { tr: 'Fethiye', en: 'Fethiye', ru: 'Фетхие', zh: '费特希耶', es: 'Fethiye', ar: 'فتحية', fr: 'Fethiye' }, nearbyPorts: ['marmaris', 'antalya', 'finike'] },
  { id: 'alanya', region: 'mediterranean', lat: 36.5437, lng: 31.9994, names: { tr: 'Alanya', en: 'Alanya', ru: 'Аланья', zh: '阿拉尼亚', es: 'Alanya', ar: 'ألانيا', fr: 'Alanya' }, nearbyPorts: ['antalya', 'mersin', 'tasucu'] },
  { id: 'tasucu', region: 'mediterranean', lat: 36.3217, lng: 33.8828, names: { tr: 'Taşucu', en: 'Tasucu', ru: 'Ташуджу', zh: '塔舒朱', es: 'Taşucu', ar: 'طاشوجو', fr: 'Taşucu' }, nearbyPorts: ['mersin', 'alanya'] },
  { id: 'ceyhan', region: 'mediterranean', lat: 36.8775, lng: 35.8175, names: { tr: 'Ceyhan', en: 'Ceyhan', ru: 'Джейхан', zh: '杰伊汉', es: 'Ceyhan', ar: 'جيهان', fr: 'Ceyhan' }, nearbyPorts: ['iskenderun', 'mersin', 'dortyol'] },
  { id: 'dortyol', region: 'mediterranean', lat: 36.8500, lng: 36.2167, names: { tr: 'Dörtyol', en: 'Dortyol', ru: 'Дёртйол', zh: '多特约尔', es: 'Dörtyol', ar: 'دورتيول', fr: 'Dörtyol' }, nearbyPorts: ['iskenderun', 'ceyhan'] },
  { id: 'finike', region: 'mediterranean', lat: 36.2978, lng: 30.1478, names: { tr: 'Finike', en: 'Finike', ru: 'Финике', zh: '菲尼凯', es: 'Finike', ar: 'فينيكا', fr: 'Finike' }, nearbyPorts: ['antalya', 'fethiye'] },
];

export const regions: Record<string, Record<string, string>> = {
  'black-sea': { tr: 'Karadeniz', en: 'Black Sea', ru: 'Чёрное море', zh: '黑海', es: 'Mar Negro', ar: 'البحر الأسود', fr: 'Mer Noire' },
  'marmara': { tr: 'Marmara', en: 'Sea of Marmara', ru: 'Мраморное море', zh: '马尔马拉海', es: 'Mar de Mármara', ar: 'بحر مرمرة', fr: 'Mer de Marmara' },
  'aegean': { tr: 'Ege', en: 'Aegean Sea', ru: 'Эгейское море', zh: '爱琴海', es: 'Mar Egeo', ar: 'بحر إيجة', fr: 'Mer Égée' },
  'mediterranean': { tr: 'Akdeniz', en: 'Mediterranean', ru: 'Средиземное море', zh: '地中海', es: 'Mar Mediterráneo', ar: 'البحر الأبيض المتوسط', fr: 'Mer Méditerranée' },
};

export function getPortBySlug(slug: string): Port | undefined {
  return ports.find(p => p.id === slug);
}

export function getPortsByRegion(region: string): Port[] {
  return ports.filter(p => p.region === region);
}

export function getNearbyPorts(portId: string): Port[] {
  const port = getPortBySlug(portId);
  if (!port) return [];
  return port.nearbyPorts.map(id => getPortBySlug(id)).filter(Boolean) as Port[];
}
