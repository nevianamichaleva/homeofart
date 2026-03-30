/**
 * Дефиниции на тестове. Ключ: "class|subject|testSlug"
 *
 * Въпросите по предмет са в отделни файлове:
 * - bulgarski-tests.js (Български език)
 * - geografia-tests.js (География)
 * - english-tests.js (Английски език)
 * - istoriya-tests.js (История)
 * - priroda-tests.js (Човек и природа)
 * - literatura-tests.js (Литература)
 *
 * URL на тест: /test-pilot/клас/предмет/slug
 */

import {
  BULGARSKI_EZIK_LITERATURA_V_KLAS_2008_QUESTIONS,
  BULGARSKI_EZIK_LITERATURA_V_KLAS_2009_QUESTIONS,
  BULGARSKI_EZIK_LITERATURA_V_KLAS_QUESTIONS,
  BULGARSKI_GLAGOL_MINALO_QUESTIONS,
  BULGARSKI_GRAMATIKA_4_QUESTIONS,
  BULGARSKI_GRAMATIKA_IZBOR_QUESTIONS,
  BULGARSKI_GRAMATIKA_ZADACHI_QUESTIONS,
  BULGARSKI_MORFOLOGIYA_QUESTIONS,
  BULGARSKI_NARECHIE_QUESTIONS,
  BULGARSKI_OBOBSHTENIE_QUESTIONS,
  BULGARSKI_PRAKTICHESKI_QUESTIONS,
  BULGARSKI_PREDLOG_QUESTIONS,
  BULGARSKI_PRICHASTIQ_QUESTIONS,
  BULGARSKI_PRITEJATELNO_MESTOIMENIE_QUESTIONS,
  BULGARSKI_TETRADKA_IZBOR_QUESTIONS,
  BULGARSKI_VAZVRATNO_MESTOIMENIE_QUESTIONS,
} from './bulgarski-tests';

import {
  GEOGRAFIA_DOPALNITELNI_QUESTIONS,
  GEOGRAFIA_IKONOMIKA_PART1,
  GEOGRAFIA_IKONOMIKA_PART2,
  GEOGRAFIA_IKONOMIKA_PART3,
  GEOGRAFIA_IZBOR_30_QUESTIONS,
  GEOGRAFIA_MIX_QUESTIONS,
  GEOGRAFIA_OBOBSTAVASHT_QUESTIONS,
  GEOGRAFIA_POPALVANE_QUESTIONS,
} from './geografia-tests';

import {
  ENGLISH_6A_FIXED_TIMES_QUESTIONS,
  ENGLISH_ADVERBS_TRANSPORT_QUESTIONS,
  ENGLISH_GRAMMAR_6ABC_QUESTIONS,
  ENGLISH_HAVE_GO_DO_GET_QUESTIONS,
  ENGLISH_LANGUAGE_REVISION_QUESTIONS,
  ENGLISH_PRESENT_SIMPLE_AT_QUESTIONS,
  ENGLISH_ROUNDUP_6_WRITE_IN_QUESTIONS,
  ENGLISH_TIME_QUESTIONS,
  ENGLISH_UNIT_6C_QUESTIONS,
} from './english-tests';

import {
  ISTORIYA_DREVNA_TRAKIYA_QUESTIONS,
  ISTORIYA_TRAKIYA_OBSHTESTVO_QUESTIONS,
  ISTORIA_CARSTVO_ODRISI,
  ISTORIA_ODRISKI_CARE,
  ISTORIA_RELIGIA,
  KULTURA_TRAKIYA,
  ISTORIA_UPRAJNENIE,
  ISTORIA_OBOBSHTENIE_TRAKIYA,
  ISTORIA_SVAURZVANE_QUESTIONS,
  ISTORIA_PODREDBA_QUESTIONS,
} from './istoriya-tests';

import {
  PRIRODA_CHP_TEST2_VESHTESTVA_I_TEHNI_SVOYSTVA_QUESTIONS,
  PRIRODA_OBOBSHTENIE_VARIANT_1_QUESTIONS,
  PRIRODA_OBOBSHTENIE_VARIANT_2_QUESTIONS,
  PRIRODA_VESHTESTVATA_I_TEHNITE_SVOYSTVA_QUESTIONS,
  PRIRODA_VESHTESTVA_SMESI_I_PROMENI_MIX_QUESTIONS,
  PRIRODA_VODA_VAZDUH_SMESI_KONTROL_QUESTIONS,
  PRIRODA_VOZDUH_QUESTIONS,
} from './priroda-tests';

import {
  LITERATURA_DA_PROVERIM_VAR1_QUESTIONS,
  LITERATURA_DA_PROVERIM_VAR2_QUESTIONS,
  LITERATURA_FOLKLOR_KALENDAR_QUESTIONS,
} from './literatura-tests';

const TESTS = {
  '5|bg|morfolojiya': {
    title: 'Морфология – Изменяеми части на речта. Местоимение',
    slug: 'morfolojiya',
    questions: BULGARSKI_MORFOLOGIYA_QUESTIONS,
  },
  '5|bg|praktitcheski-zadachi': {
    title: 'Практически задачи – текст, морфология, правопис (стр. 62–63)',
    slug: 'praktitcheski-zadachi',
    questions: BULGARSKI_PRAKTICHESKI_QUESTIONS,
  },
  '5|bg|gramatika-izbor': {
    title: 'Граматика с избор – части на речта, време, синтаксис, правопис',
    slug: 'gramatika-izbor',
    questions: BULGARSKI_GRAMATIKA_IZBOR_QUESTIONS,
  },
  '5|bg|gramatika-zadachi': {
    title: 'Граматика – глаголи, предлози, причастия, наречия, местоимения',
    slug: 'gramatika-zadachi',
    questions: BULGARSKI_GRAMATIKA_ZADACHI_QUESTIONS,
  },
  '5|bg|vazvratno-mestoimenie': {
    title: 'Възвратно лично местоимение – се / си',
    slug: 'vazvratno-mestoimenie',
    questions: BULGARSKI_VAZVRATNO_MESTOIMENIE_QUESTIONS,
  },
  '5|bg|pritejatelno-mestoimenie': {
    title: 'Притежателно и възвратно притежателно местоимение',
    slug: 'pritejatelno-mestoimenie',
    questions: BULGARSKI_PRITEJATELNO_MESTOIMENIE_QUESTIONS,
  },
  '5|bg|glagol-minalo-vreme': {
    title: 'Глагол – минало свършено и минало несвършено време',
    slug: 'glagol-minalo-vreme',
    questions: BULGARSKI_GLAGOL_MINALO_QUESTIONS,
  },
  '5|bg|prichastiq': {
    title: 'Причастия – минало свършено и несвършено деятелно причастие',
    slug: 'prichastiq',
    questions: BULGARSKI_PRICHASTIQ_QUESTIONS,
  },
  '5|bg|narechie': {
    title: 'Неизменяеми части на речта. Наречие',
    slug: 'narechie',
    questions: BULGARSKI_NARECHIE_QUESTIONS,
  },
  '5|bg|predlog': {
    title: 'Неизменяеми части на речта. Предлог',
    slug: 'predlog',
    questions: BULGARSKI_PREDLOG_QUESTIONS,
  },
  '5|bg|obobshtenie': {
    title: 'Обобщение – думите като части на речта',
    slug: 'obobshtenie',
    questions: BULGARSKI_OBOBSHTENIE_QUESTIONS,
  },
  '5|bg|ezik-literatura-v-klas': {
    title: 'Български език и литература V клас (външно оценяване)',
    slug: 'ezik-literatura-v-klas',
    questions: BULGARSKI_EZIK_LITERATURA_V_KLAS_QUESTIONS,
  },
  '5|bg|ezik-literatura-v-klas-2009': {
    title: 'Български език и литература V клас – юни 2009',
    slug: 'ezik-literatura-v-klas-2009',
    questions: BULGARSKI_EZIK_LITERATURA_V_KLAS_2009_QUESTIONS,
  },
  '5|bg|ezik-literatura-v-klas-2008': {
    title: 'Български език и литература V клас – май 2008',
    slug: 'ezik-literatura-v-klas-2008',
    questions: BULGARSKI_EZIK_LITERATURA_V_KLAS_2008_QUESTIONS,
  },
  '5|bg|tetradka-izbor': {
    title: 'Български език – упражнения от тетрадка (избор)',
    slug: 'tetradka-izbor',
    questions: BULGARSKI_TETRADKA_IZBOR_QUESTIONS,
  },
  '5|bg|gramatika-4': {
    title: 'Български език – граматика (избор от 4 отговора)',
    slug: 'gramatika-4',
    questions: BULGARSKI_GRAMATIKA_4_QUESTIONS,
  },
  '5|geografia|geografia-ikonomika-1': {
    title: 'География и стопанство (част 1)',
    slug: 'geografia-ikonomika-1',
    questions: GEOGRAFIA_IKONOMIKA_PART1,
  },
  '5|geografia|geografia-ikonomika-2': {
    title: 'География и стопанство (част 2)',
    slug: 'geografia-ikonomika-2',
    questions: GEOGRAFIA_IKONOMIKA_PART2,
  },
  '5|geografia|geografia-ikonomika-3': {
    title: 'География и стопанство (част 3)',
    slug: 'geografia-ikonomika-3',
    questions: GEOGRAFIA_IKONOMIKA_PART3,
  },
  '5|geografia|geografia-obobstavasht': {
    title: 'География – обобщаващ тест (тематичен контрол 4)',
    slug: 'geografia-obobstavasht',
    questions: GEOGRAFIA_OBOBSTAVASHT_QUESTIONS,
  },
  '5|geografia|geografia-dopalnitelni': {
    title: 'География – селища, стопанство, транспорт',
    slug: 'geografia-dopalnitelni',
    questions: GEOGRAFIA_DOPALNITELNI_QUESTIONS,
  },
  '5|geografia|geografia-izbor-30': {
    title: 'География – население, стопанство, отрасли, ООН, ЕС (30 въпроса)',
    slug: 'geografia-izbor-30',
    questions: GEOGRAFIA_IZBOR_30_QUESTIONS,
  },
  '5|geografia|geografia-popylvane': {
    title: 'География – попълване (1 дума или цифра)',
    slug: 'geografia-popylvane',
    questions: GEOGRAFIA_POPALVANE_QUESTIONS,
  },
  '5|geografia|geografia-mix': {
    title: 'География – население, раси, религии, селища, стопанство (избор и попълване)',
    slug: 'geografia-mix',
    questions: GEOGRAFIA_MIX_QUESTIONS,
  },
  '5|english|language-revision': {
    title: 'Language Revision (English)',
    slug: 'language-revision',
    questions: ENGLISH_LANGUAGE_REVISION_QUESTIONS,
  },
  '5|english|have-go-do-get': {
    title: 'Have / Go / Do / Get',
    slug: 'have-go-do-get',
    questions: ENGLISH_HAVE_GO_DO_GET_QUESTIONS,
  },
  '5|english|adverbs-and-transport': {
    title: 'Adverbs of frequency & Transport',
    slug: 'adverbs-and-transport',
    questions: ENGLISH_ADVERBS_TRANSPORT_QUESTIONS,
  },
  '5|english|present-simple-at': {
    title: 'Present Simple & at (time)',
    slug: 'present-simple-at',
    questions: ENGLISH_PRESENT_SIMPLE_AT_QUESTIONS,
  },
  '5|english|time': {
    title: 'Time in words and numbers',
    slug: 'time',
    questions: ENGLISH_TIME_QUESTIONS,
  },
  '5|istoriya|drevna-trakiya': {
    title: 'Древна Тракия',
    slug: 'drevna-trakiya',
    questions: ISTORIYA_DREVNA_TRAKIYA_QUESTIONS,
  },
  '5|istoriya|trakiya-obshtestvo': {
    title: 'Общество и всекидневен живот на траките (урок 27)',
    slug: 'trakiya-obshtestvo',
    questions: ISTORIYA_TRAKIYA_OBSHTESTVO_QUESTIONS,
  },
  '5|istoriya|carstvo-odrisi': {
    title: 'История – Одриско царство',
    slug: 'carstvo-odrisi',
    questions: ISTORIA_CARSTVO_ODRISI,
  },
  '5|istoriya|odriski-care': {
    title: 'История – Одриски царе',
    slug: 'odriski-care',
    questions: ISTORIA_ODRISKI_CARE,
  },
  '5|istoriya|religia': {
    title: 'История – Религия на траките',
    slug: 'religia',
    questions: ISTORIA_RELIGIA,
  },
  '5|istoriya|kultura-trakiya': {
    title: 'История – Култура на траките',
    slug: 'kultura-trakiya',
    questions: KULTURA_TRAKIYA,
  },
  '5|istoriya|uprajnenie': {
    title: 'История – Управление',
    slug: 'uprajnenie',
    questions: ISTORIA_UPRAJNENIE,
  },
  '5|istoriya|obobshtenie-trakiya': {
    title: 'История – Обобщение Тракия',
    slug: 'obobshtenie-trakiya',
    questions: ISTORIA_OBOBSHTENIE_TRAKIYA,
  },
  '5|istoriya|svarzvane': {
    title: 'История – Свързване (личност/термин с описание)',
    slug: 'svarzvane',
    questions: ISTORIA_SVAURZVANE_QUESTIONS,
  },
  '5|istoriya|podredba': {
    title: 'История – Подреждане по време (Урок 26)',
    slug: 'podredba',
    questions: ISTORIA_PODREDBA_QUESTIONS,
  },
  '5|priroda|vozduh': {
    title: 'Човек и природа – Въздухът',
    slug: 'vozduh',
    questions: PRIRODA_VOZDUH_QUESTIONS,
  },
  '5|priroda|veshtestva-smesi-promeni-mix': {
    title: 'Човек и природа – Вещества, смеси и промени (избор и попълване)',
    slug: 'veshtestva-smesi-promeni-mix',
    questions: PRIRODA_VESHTESTVA_SMESI_I_PROMENI_MIX_QUESTIONS,
  },
  '5|priroda|veshtestvata-i-tehnite-svoystva': {
    title: 'Човек и природа – Веществата и техните свойства',
    slug: 'veshtestvata-i-tehnite-svoystva',
    questions: PRIRODA_VESHTESTVATA_I_TEHNITE_SVOYSTVA_QUESTIONS,
  },
  '5|priroda|obobshtenie-variant-1': {
    title: 'Човек и природа – Обобщение (Вариант 1)',
    slug: 'obobshtenie-variant-1',
    questions: PRIRODA_OBOBSHTENIE_VARIANT_1_QUESTIONS,
  },
  '5|priroda|obobshtenie-variant-2': {
    title: 'Човек и природа – Обобщение (Вариант 2)',
    slug: 'obobshtenie-variant-2',
    questions: PRIRODA_OBOBSHTENIE_VARIANT_2_QUESTIONS,
  },
  '5|priroda|voda-vazduh-i-smesi-kontrol': {
    title: 'Човек и природа – Вода, въздух и смеси (контрол)',
    slug: 'voda-vazduh-i-smesi-kontrol',
    questions: PRIRODA_VODA_VAZDUH_SMESI_KONTROL_QUESTIONS,
  },
  '5|priroda|chp-test-2-veshtestva': {
    title: 'Човек и природа – Тест 2: Веществата и техните свойства',
    slug: 'chp-test-2-veshtestva',
    questions: PRIRODA_CHP_TEST2_VESHTESTVA_I_TEHNI_SVOYSTVA_QUESTIONS,
  },
  '5|literatura|da-proverim-var1': {
    title: 'Да проверим – Литература (Вариант 1)',
    slug: 'da-proverim-var1',
    questions: LITERATURA_DA_PROVERIM_VAR1_QUESTIONS,
  },
  '5|literatura|da-proverim-var2': {
    title: 'Да проверим – Литература (Вариант 2)',
    slug: 'da-proverim-var2',
    questions: LITERATURA_DA_PROVERIM_VAR2_QUESTIONS,
  },
  '5|literatura|folklore-kalendar': {
    title: 'Литература – фолклорен календар, празници и обичаи',
    slug: 'folklore-kalendar',
    questions: LITERATURA_FOLKLOR_KALENDAR_QUESTIONS,
  },
  '5|english|unit-6c-once-a-week': {
    title: 'Unit 6c – Once a week (frequency & personality)',
    slug: 'unit-6c-once-a-week',
    questions: ENGLISH_UNIT_6C_QUESTIONS,
  },
  '5|english|roundup-6-write-in': {
    title: 'Round up 3 & 6b/6c – с написване на отговор',
    slug: 'roundup-6-write-in',
    questions: ENGLISH_ROUNDUP_6_WRITE_IN_QUESTIONS,
  },
  '5|english|grammar-6abc': {
    title: 'Grammar Summary & 6c/7a (попълване и a,b,c)',
    slug: 'grammar-6abc',
    questions: ENGLISH_GRAMMAR_6ABC_QUESTIONS,
  },
  '5|english|6a-fixed-times': {
    title: '6a – Present simple & fixed times (попълване и тестови)',
    slug: '6a-fixed-times',
    questions: ENGLISH_6A_FIXED_TIMES_QUESTIONS,
  },
};

/**
 * Връща данни за тест по клас, предмет и slug на теста, или null ако няма такъв тест.
 */
export function getTest(classNum, subject, testSlug) {
  const key = `${classNum}|${subject}|${testSlug}`;
  return TESTS[key] ?? null;
}

/**
 * Връща списък с всички тестове за обобщената страница.
 * Всеки елемент: { classNum, subject, slug, title, questionCount }
 */
export function getAllTests() {
  return Object.entries(TESTS).map(([key, data]) => {
    const [classNum, subject, slug] = key.split('|');
    return {
      classNum,
      subject,
      slug,
      title: data.title,
      questionCount: data.questions.length,
    };
  });
}
