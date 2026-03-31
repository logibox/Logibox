import type { Locale } from "@/i18n/routing";

export type LegalPageId =
  | "privacy"
  | "terms"
  | "cookies"
  | "reviewPolicy"
  | "accessibility";

const privacy: Record<Locale, string> = {
  en: `## Privacy policy (demo)\n\n**Effective date:** March 31, 2026\n\nLogiBox ("we", "us") explains how we handle information on this marketing website. This is **not** legal advice. Engage counsel for Azerbaijan PDPL / GDPR overlap where applicable.\n\n### Data we may collect\n\n- **Contact form submissions:** name, email, message content (when you email or call, records may be stored in our CRM).\n- **Analytics:** aggregated usage such as pages viewed and approximate region (if analytics cookies are enabled — see Cookie policy).\n- **Server logs:** IP address, user agent, timestamp — retained for security troubleshooting.\n\n### How we use data\n\nTo respond to inquiries, improve site reliability, and understand which content helps visitors.\n\n### Retention\n\nVaries by system; sales leads are typically retained for the commercial relationship duration unless you request erasure.\n\n### Your choices\n\nUse the contact details on the Contact page to request access, correction, or deletion where law allows.\n\n### Changes\n\nWe may update this page; the effective date will change accordingly.\n`,
  az: `## Məxfilik siyasəti (nümunə)\n\n**Qüvvəyə minmə tarixi:** 31 mart 2026\n\nLogiBox ("biz") bu marketinq saytında məlumatın necə idarə oluna biləcəyini izah edir. Bu **hüquqi məsləhət deyil**. Azərbaycan PDPL / GDPR kəsişməsi üçün vəkilin məsləhəti götürün.\n\n### Topaya biləcəyimiz məlumatlar\n\n- **Əlaqə forması / e-poçt:** ad, ünvan, mesaj (CRM-də saxlana bilər).\n- **Analitika:** baxılan səhifələr və təxmini region (kuki aktivdirsə — Kuki siyasətinə baxın).\n- **Server jurnalları:** IP, user agent, vaxt möhürü — təhlükəsizlik üçün.\n\n### İstifadə məqsədi\n\nSorğulara cavab, sayt etibarlılığı və məzmun effektivliyi.\n\n### Saxlama müddəti\n\nSistemdən asılıdır; satış leads-i adətən münasibət müddətincə, silmə tələbi ilə pozula bilər.\n\n### Seçimləriniz\n\nƏlaqə səhifəsindəki vasitələrlə qanun çərçivəsində çıxış, düzəliş və ya silmə tələb edin.\n\n### Dəyişikliklər\n\nBu səhifəni yeniləyə bilərik; tarix dəyişəcək.\n`,
};

const terms: Record<Locale, string> = {
  en: `## Terms of use (demo)\n\n**Effective date:** March 31, 2026\n\n### The site\n\nThis website introduces LogiBox services. Content is for general information — not a binding offer until shipments are governed by executed contracts and tariffs.\n\n### No warranty\n\nWe provide the site **as-is** without warranties of accuracy or fitness for a particular purpose.\n\n### Limitation of liability\n\nTo the extent permitted by law, LogiBox is not liable for indirect losses arising from use of this site.\n\n### Third-party links\n\nOutbound links are for convenience; we do not control third-party policies.\n\n### Governing framework\n\nDisputes related to this site are subject to the laws of Azerbaijan unless a separate transport agreement specifies otherwise.\n\n### Contact\n\nOperational questions: use the Contact page.\n`,
  az: `## İstifadə şərtləri (nümunə)\n\n**Qüvvəyə minmə tarixi:** 31 mart 2026\n\n### Sayt\n\nBu sayt LogiBox xidmətlərini təqdim edir. Məzmun ümumi məlumat üçündür — bağlayıcı təklif yalnız imzalanmış müqavilə və tariflər çərçivəsindədir.\n\n### Zəmanət yoxdur\n\nSayt **olduğu kimi** verilir; xüsusi məqsəd üçün düzgünlük zəmanəti verilmir.\n\n### Məsuliyyətin məhdudlaşdırılması\n\nQanun icazə verdiyi çərçivədə bu saytdan dolayı zərərlərə görə birbaşa məsuliyyət daşımırıq.\n\n### Üçüncü tərəf linkləri\n\nRahatlıq üçündür; onların siyasətlərini nəzarət etmirik.\n\n### Hüquqi çərçivə\n\nBu saytla bağlı mübahisələr, ayrıca daşıma müqaviləsində başqa göstərilməyibsə, Azərbaycan qanunlarına tabedir.\n\n### Əlaqə\n\nƏməliyyat sualları: Əlaqə səhifəsi.\n`,
};

const cookies: Record<Locale, string> = {
  en: `## Cookie policy (demo)\n\n**Effective date:** March 31, 2026\n\n### What are cookies\n\nSmall text files stored on your device to remember preferences or measure traffic.\n\n### Cookies we may use\n\n- **Necessary:** session security, load balancing.\n- **Analytics (optional):** aggregated visit patterns — only if you consent where required.\n- **Preference:** language selection persistence.\n\n### Managing cookies\n\nUse browser settings to block or delete cookies. Blocking necessary cookies may break site features.\n\n### Updates\n\nWe will adjust this document when our tracking stack changes.\n`,
  az: `## Kuki siyasəti (nümunə)\n\n**Qüvvəyə minmə tarixi:** 31 mart 2026\n\n### Kukilər nədir\n\nSeçimləri xatırlamaq və ya trafiki ölçmək üçün cihazınızda saxlanılan kiçik mətn faylları.\n\n### İstifadə edə biləcəyimiz kukilər\n\n- **Zəruri:** sessiya təhlükəsizliyi, balanslama.\n- **Analitika (istəyə bağlı):** aqreqasiya ziyarət nümunələri — harada tələb olunursa razılıq ilə.\n- **Seçim:** dil saxlanması.\n\n### İdarəetmə\n\nBrauzer parametrləri ilə kukiləri bloklayın və ya silin. Zəruri kukilərin bloklanması funksiyalara təsir edə bilər.\n\n### Yeniləmələr\n\nİzləmə yığını dəyişəndə bu sənədi yeniləyəcəyik.\n`,
};

const reviewPolicy: Record<Locale, string> = {
  en: `## Review & testimonial policy (demo)\n\n### What we publish\n\nWe may display **paraphrased or quoted** feedback from customers with their permission. Identifiers may be anonymized ("supply chain lead, retail") to protect confidentiality.\n\n### What we do not do\n\n- We do not pay for positive reviews on this marketing site.\n- We do not claim third-party marketplace ratings unless sourced and linked.\n\n### Moderation\n\nTestimonials are reviewed for authenticity and relevance. Outdated statements may be removed when services materially change.\n\n### Reporting concerns\n\nEmail our sales desk if you believe a statement is inaccurate — we will investigate.\n`,
  az: `## Rəy və tövsiyə siyasəti (nümunə)\n\n### Nəyi dərc edirik\n\nMüştəri icazəsi ilə **tərcümə olunmuş və ya sitat** rəyləri göstərə bilərik. Məxfilik üçün identifikatorlar anonimləşdirilə bilər ("təchizat rəhbəri, pərakəndə").\n\n### Nə etmirik\n\n- Bu marketinq saytında müsbət rəy üçün ödəniş etmirik.\n- Üçüncü tərəf platforma reytinqlərini mənbə və link olmadan iddia etmirik.\n\n### Moderasiya\n\nTövsiyələr autentiklik üçün yoxlanır. Xidmət əhəmiyyətli dəyişəndə köhnəlmiş ifadələr silinə bilər.\n\n### Narazılıq\n\nBir ifadanın yanlış olduğunu düşünürsünüzsə satış masasına yazın — yoxlayarıq.\n`,
};

const accessibility: Record<Locale, string> = {
  en: `## Accessibility statement (demo)\n\nWe aim for **WCAG 2.1 AA** alignment on this site: semantic headings, sufficient contrast (LogiBox brand palette), keyboard focus for navigation, and respects for \`prefers-reduced-motion\` in animated areas.\n\n### Known gaps\n\nSome third-party embeds (if added later) may not meet the same bar — we will provide alternatives where feasible.\n\n### Feedback\n\nContact us with specific barriers you encounter; we prioritize fixes that unblock quoting and onboarding.\n`,
  az: `## Əlçatanlıq bəyanatı (nümunə)\n\nBu sayt üçün **WCAG 2.1 AA** yönümlü cəhd: semantik başlıqlar, kifayət edən kontrast (LogiBox palitrası), naviqasiya üçün klaviatura fokusu və animasiyalarda \`prefers-reduced-motion\` hörməti.\n\n### Məlum boşluqlar\n\nSonradan əlavə olunan bəzi üçüncü tərəf vidcetlər eyni səviyyədə olmaya bilər — mümkün olan yerlərdə alternativ verəcəyik.\n\n### Geri əlaqə\n\nXüsusi maneələri bildirin; təklif və onboarding üçün düzəlişlərə üstünlük veririk.\n`,
};

export const legalBodies: Record<LegalPageId, Record<Locale, string>> = {
  privacy,
  terms,
  cookies,
  reviewPolicy,
  accessibility,
};

export const legalTitles: Record<
  LegalPageId,
  Record<Locale, string>
> = {
  privacy: { en: "Privacy policy", az: "Məxfilik siyasəti" },
  terms: { en: "Terms of use", az: "İstifadə şərtləri" },
  cookies: { en: "Cookie policy", az: "Kuki siyasəti" },
  reviewPolicy: {
    en: "Review & testimonial policy",
    az: "Rəy və tövsiyə siyasəti",
  },
  accessibility: { en: "Accessibility", az: "Əlçatanlıq" },
};
