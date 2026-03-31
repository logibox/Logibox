import type { Locale } from "@/i18n/routing";

export type Localized<T> = Record<Locale, T>;

export type BlogPost = {
  slug: string;
  publishedAt: string;
  title: Localized<string>;
  excerpt: Localized<string>;
  bodyMarkdown: Localized<string>;
};

export type ServiceItem = {
  slug: string;
  title: Localized<string>;
  summary: Localized<string>;
  bodyMarkdown: Localized<string>;
};

export type LocationItem = {
  slug: string;
  name: Localized<string>;
  summary: Localized<string>;
  bodyMarkdown: Localized<string>;
};

export type GuideItem = {
  slug: string;
  title: Localized<string>;
  summary: Localized<string>;
  bodyMarkdown: Localized<string>;
};

function blogPosts(): BlogPost[] {
  return Array.from({ length: 30 }, (_, i) => {
    const n = i + 1;
    return {
      slug: `insights-${String(n).padStart(2, "0")}-food-logistics`,
      publishedAt: `2024-${String((i % 12) + 1).padStart(2, "0")}-15`,
      title: {
        en: `Food logistics in Azerbaijan — insight ${n}`,
        az: `Azərbaycanda qida logistikası — insight ${n}`,
      },
      excerpt: {
        en: `Cold chain, packing standards, and on-time delivery: how leading food brands work with LogiBox. Part ${n} of our field notes.`,
        az: `Soyuq zəncir, paketləmə standartları və vaxtında çatdırılma: aparıcı qida brendləri LogiBox ilə necə işləyir. ${n}-ci qeyd.`,
      },
      bodyMarkdown: {
        en: `## Summary\n\nLogiBox combines **insured transport**, **HACCP-aware packing**, and nationwide routing from hubs near Baku.\n\n## Takeaway\n\nMeasure dwell time at handover points — it is often the largest risk to shelf life.\n\n---\n\n*Article ${n} — editorial content for demonstration; replace with your production copy.*`,
        az: `## Xülasə\n\nLogiBox **sığortalı daşımanı**, **HACCP-düzgün paketləməni** və Bakı yaxınlığındakı hub-lardan respublika üzrə marşrutlaşdırmanı birləşdirir.\n\n## Nəticə\n\nƏl dəyişmə nöqtələrində gözləmə müddətini ölçün — bəzən bu, raf ömrü üçün ən böyük riskdir.\n\n---\n\n*Məqalə ${n} — nümayiş üçün redaktə mətni; istehsal üçün öz mətninizlə əvəz edin.*`,
      },
    };
  });
}

const SERVICE_SEEDS: Localized<{ title: string; summary: string }>[] = [
  {
    en: {
      title: "Temperature-controlled transport",
      summary: "Chilled and frozen lanes with live temperature logs.",
    },
    az: {
      title: "Temperatur nəzarətli daşıma",
      summary: "Canlı temperatur jurnalları ilə soyudulmuş və dondurulmuş marşrutlar.",
    },
  },
  {
    en: {
      title: "Food-grade primary packing",
      summary: "Films, trays, and MAP options that meet retail specs.",
    },
    az: {
      title: "Qida təsnifatlı ilkin paketləmə",
      summary: "Pərakəndə tələblərinə uyğun plyonka, qab və MAP həlləri.",
    },
  },
  {
    en: {
      title: "Secondary packaging & labelling",
      summary: "Retail-ready cases, SSCC labels, and Azerbaijan compliance cues.",
    },
    az: {
      title: "İkinci dərəcəli paketləmə və etiket",
      summary: "Pərakəndəyə hazır qutular, SSCC etiketləri və AZ uyğunluq qeydləri.",
    },
  },
  {
    en: {
      title: "Warehouse cross-dock",
      summary: "Short dwell consolidation for fast-moving SKUs.",
    },
    az: {
      title: "Sklad kross-dok",
      summary: "Sürətli SKU-lar üçün qısa gözləməli konsolidasiya.",
    },
  },
  {
    en: {
      title: "Last-mile for HORECA",
      summary: "Scheduled drops for kitchens with narrow receiving windows.",
    },
    az: {
      title: "HORECA üçün son mərhələ",
      summary: "Dar qəbul pəncərələri olan mətbəxlər üçün planlı çatdırılma.",
    },
  },
  {
    en: {
      title: "Export documentation support",
      summary: "Certificates and packing lists aligned to destination markets.",
    },
    az: {
      title: "İxrac sənədləşmə dəstəyi",
      summary: "Hədəf bazarların tələblərinə uyğun sertifikatlar və paket siyahıları.",
    },
  },
  {
    en: {
      title: "Recall-ready traceability",
      summary: "Batch-level tracking from pack line to delivery POD.",
    },
    az: {
      title: "Geri çağırışa hazır izləmə",
      summary: "Paket xəttindən POD-a qədər partiya səviyyəli izləmə.",
    },
  },
  {
    en: {
      title: "Yard management & slotting",
      summary: "Predictable gate times for high-volume inbound.",
    },
    az: {
      title: "Yerləşmə və slot idarəetməsi",
      summary: "Yüksək həcmli qəbul üçün proqnozlaşdırılan darvaza vaxtları.",
    },
  },
  {
    en: {
      title: "Co-packing partner network",
      summary: "Audited partners for promotional packs and variety builds.",
    },
    az: {
      title: "Ko-pakinq tərəfdaş şəbəkəsi",
      summary: "Aksiya paketləri və assorti yığımları üçün yoxlanmış tərəfdaşlar.",
    },
  },
  {
    en: {
      title: "Insurance & claims workflow",
      summary: "Clear escalation paths when exceptions occur in transit.",
    },
    az: {
      title: "Sığorta və iddia prosesi",
      summary: "Yolda istisnalar baş verəndə aydın eskalasiya yolları.",
    },
  },
];

function services(): ServiceItem[] {
  return SERVICE_SEEDS.map((s, i) => ({
    slug: `service-${String(i + 1).padStart(2, "0")}-${slug(enTitle(s))}`,
    title: { en: s.en.title, az: s.az.title },
    summary: { en: s.en.summary, az: s.az.summary },
    bodyMarkdown: {
      en: `## ${s.en.title}\n\n${s.en.summary}\n\n### How LogiBox delivers\n\nDedicated account teams, standardized SOPs, and telemetry-backed SLAs.\n\n*Replace with your commercial terms and case studies.*`,
      az: `## ${s.az.title}\n\n${s.az.summary}\n\n### LogiBox necə çatdırır\n\nXüsusi hesab komandaları, standartlaşdırılmış SOP-lar və telemetriya ilə təsdiqlənən SLA-lar.\n\n*Kommersiya şərtləri və keyslərlə əvəz edin.*`,
    },
  }));
}

function enTitle(s: Localized<{ title: string; summary: string }>): string {
  return s.en.title;
}

function slug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

const LOCATION_SEEDS: Localized<{ name: string; summary: string }>[] = [
  {
    en: { name: "Baku metro distribution", summary: "Hub-led runs across the capital region." },
    az: { name: "Bakı metro paylanması", summary: "Paytaxt regionu üzrə hub əsaslı daşınmalar." },
  },
  {
    en: { name: "Absheron corridor", summary: "High-frequency shuttles for dairy and bakery." },
    az: { name: "Abşeron dəhlizi", summary: "Süd və çörək üçün tez-tez sutkalar." },
  },
  {
    en: { name: "Ganja regional lane", summary: "Western Azerbaijan coverage with staged relays." },
    az: { name: "Gəncə regional xətti", summary: "Mərhələli relay ilə Qərbi Azərbaycan əhatəsi." },
  },
  {
    en: { name: "Sumgait industrial zone", summary: "Heavy SKU inbound for packing partners." },
    az: { name: "Sumqayıt sənaye zonası", summary: "Paket tərəfdaşları üçün yüksək çəki daxilolma." },
  },
  {
    en: { name: "Mingachevir cross-dock", summary: "Central waypoint for north-south temperature loads." },
    az: { name: "Mingəçevir kross-dok", summary: "Şimal-cənub temperatur yükü üçün mərkəzi nöqtə." },
  },
  {
    en: { name: "Shirvan consolidation", summary: "Mixed case builds for regional retailers." },
    az: { name: "Şirvan konsolidasiyası", summary: "Regional pərakəndəçilər üçün qarışıq qutu yığımı." },
  },
  {
    en: { name: "Lankaran fresh produce", summary: "Ventilated trucks and fast unpack protocols." },
    az: { name: "Lənkəran təzə məhsul", summary: "Havalandırılan maşınlar və sürətli boşaltma protokolları." },
  },
  {
    en: { name: "Sheki mountain route", summary: "Altitude-aware routing for sensitive goods." },
    az: { name: "Şəki dağ marşrutu", summary: "Həssas mallar üçün hündürlük nəzərə alınmış marşrut." },
  },
  {
    en: { name: "Nakhchivan express", summary: "Document-heavy lane with expedited handover." },
    az: { name: "Naxçıvan ekspress", summary: "Sənədli xətt və təcili əl dəyişmə." },
  },
  {
    en: { name: "Gabala resort supply", summary: "Seasonal peaks for HORECA in tourist zones." },
    az: { name: "Qəbələ kurort təchizatı", summary: "Turizm zonalarında HORECA üçün mövsümi piklər." },
  },
  {
    en: { name: "Khachmaz northern reach", summary: "Coastal humidity controls for salty snacks." },
    az: { name: "Xaçmaz şimal əhatəsi", summary: "Duzlu qəlyanaltılar üçün sahil rütubətinə nəzarət." },
  },
  {
    en: { name: "Yevlakh relay yard", summary: "Mid-country staging for long-haul consolidation." },
    az: { name: "Yevlax relay həyəti", summary: "Uzaq məsafə konsolidasiyası üçün orta ölkə mərhələsi." },
  },
  {
    en: { name: "Barda cross-border prep", summary: "Pre-clearance packing patterns for exports." },
    az: { name: "Bərdə sərhəd öncəsi hazırlıq", summary: "İxrac üçün ön təmizləmə paket nümunələri." },
  },
  {
    en: { name: "Shamakhi wine corridor", summary: "Shock-isolated pallets for glass-forward SKUs." },
    az: { name: "Şamaxı şərab dəhlizi", summary: "Şüşə SKU-lar üçün zərbədən izolyasiyalı paletlər." },
  },
  {
    en: { name: "Caspian port handoff", summary: "Sea-to-road transitions with sealed integrity checks." },
    az: { name: "Xəzər liman təhvil", summary: "Möhürlü bütövlük yoxlamaları ilə dəniz-yol keçidləri." },
  },
  {
    en: { name: "Heydar Aliyev airport lane", summary: "Airside-adjacent packing for time-critical SKUs." },
    az: { name: "Heydər Əliyev hava limanı xətti", summary: "Vaxt kritiki SKU-lar üçün hava tərəfi yaxın paketləmə." },
  },
];

function locations(): LocationItem[] {
  return LOCATION_SEEDS.map((row, i) => ({
    slug: `lane-${String(i + 1).padStart(2, "0")}-${slug(row.en.name)}`,
    name: { en: row.en.name, az: row.az.name },
    summary: { en: row.en.summary, az: row.az.summary },
    bodyMarkdown: {
      en: `## ${row.en.name}\n\n${row.en.summary}\n\n### Coverage\n\nDaily departures where demand supports full truck utilization; shared runs elsewhere with protected load integrity.\n\n*Replace with operational detail.*`,
      az: `## ${row.az.name}\n\n${row.az.summary}\n\n### Əhatə\n\nTələbat tam yük utilizasiyasını dəstəkləyəndə gündəlik yola düşmələr; digər hallarda yük bütövlüyü qorunan birgə reyslər.\n\n*Əməliyyat detalı ilə əvəz edin.*`,
    },
  }));
}

const GUIDE_SEEDS: Localized<{ title: string; summary: string }>[] = [
  {
    en: { title: "HACCP handover checklist", summary: "Questions to ask before goods leave the pack line." },
    az: { title: "HACCP təhvil yoxlama siyahısı", summary: "Paket xəttindən çıxmazdan əvvəl veriləcək suallar." },
  },
  {
    en: { title: "Pallet pattern for chilled poultry", summary: "Airflow-friendly stacking for long lanes." },
    az: { title: "Soyudulmuş quş üçün palet nümunəsi", summary: "Uzun xətlər üçün hava axınına uyğun yığma." },
  },
  {
    en: { title: "SSCC labelling primer", summary: "Serial shipping container codes for retail DCs." },
    az: { title: "SSCC etiketləməyə giriş", summary: "Pərakəndə paylama mərkəzləri üçün konteyner kodları." },
  },
  {
    en: { title: "Dwell time reduction", summary: "Yard, gate, and dock choreography." },
    az: { title: "Gözləmə müddətinin azaldılması", summary: "Həyət, darvaza və rampa ardıcıllığı." },
  },
  {
    en: { title: "Claims pack: what to photograph", summary: "Evidence that speeds carrier resolution." },
    az: { title: "İddia paketi: nə çəkmək lazımdır", summary: "Daşıyıcı həllini sürətləndirən sübutlar." },
  },
  {
    en: { title: "Temperature logger placement", summary: "Single vs multi-sensor configurations." },
    az: { title: "Temperatur jurnalının yerləşməsi", summary: "Tək və çox sensor konfiqurasiyaları." },
  },
  {
    en: { title: "Export-ready inner packs", summary: "Lang and destination-specific film choices." },
    az: { title: "İxraca hazır daxili paketlər", summary: "Dil və hədəf bazar üçün plyonka seçimi." },
  },
  {
    en: { title: "Routing for shelf-life margins", summary: "When to prefer night departures." },
    az: { title: "Raf ömrü marjası üçün marşrut", summary: "Gecə yola düşmənin üstünlüyü nə vaxt olur." },
  },
  {
    en: { title: "Co-pack partner audit sheet", summary: "Minimum controls before SKUs combine." },
    az: { title: "Ko-pak yoxlama vərəqi", summary: "SKU-lar birləşməzdən əvvəl minimal nəzarətlər." },
  },
  {
    en: { title: "Retail promotion builds", summary: "Variety packs without crushing primary packs." },
    az: { title: "Pərakəndə aksiya yığımları", summary: "İlkin paketləri əzmədən assorti paketlər." },
  },
  {
    en: { title: "Cross-contamination guardrails", summary: "Segregation patterns in mixed DCs." },
    az: { title: "Çarpaz tutulma sərhədləri", summary: "Qarışıq paylama mərkəzlərində seqreqasiya." },
  },
  {
    en: { title: "KPI dictionary for shippers", summary: "OTIF, dwell, and temperature compliance." },
    az: { title: "Daşıyıcılar üçün KPI lüğəti", summary: "OTIF, gözləmə və temperatur uyğunluğu." },
  },
];

function guides(): GuideItem[] {
  return GUIDE_SEEDS.map((g, i) => ({
    slug: `guide-${String(i + 1).padStart(2, "0")}-${slug(g.en.title)}`,
    title: { en: g.en.title, az: g.az.title },
    summary: { en: g.en.summary, az: g.az.summary },
    bodyMarkdown: {
      en: `## ${g.en.title}\n\n${g.en.summary}\n\n### Field notes\n\nUse this guide alongside your QA playbook. LogiBox can embed checkpoints into the transport plan.\n\n*Illustrative content only.*`,
      az: `## ${g.az.title}\n\n${g.az.summary}\n\n### Sahə qeydləri\n\nBu təlimatı QA dəstinizlə birlikdə istifadə edin. LogiBox yoxlamaları daşınma planına daxil edə bilər.\n\n*Yalnız nümunə məzmun.*`,
    },
  }));
}

export const BLOG_POSTS = blogPosts();
export const SERVICES = services();
export const LOCATIONS = locations();
export const GUIDES = guides();
</think>

I fixed a syntax error in the location seeds and completed the data file.

<｜tool▁calls▁begin｜><｜tool▁call▁begin｜>
StrReplace