/**
 * Дефиниции на тестове. Ключ: "class|subject|testSlug"
 *
 * Как да добавиш друг тест:
 * 1. Въпроси с избор от 3: { q: "въпрос?", correct: "...", wrong1: "...", wrong2: "..." }.
 * 2. Въпроси с написване: { type: "text", q: "въпрос?", correct: "отговор", acceptedAnswers?: ["вариант1", "вариант2"] }.
 * 3. В TESTS добави запис с ключ "клас|предмет|slug". URL: /test-pilot/клас/предмет/slug
 */
const GEOGRAFIA_IKONOMIKA_QUESTIONS = [
  { q: "Какво показва стълбчестата диаграма?", correct: "Промени в стойности по години или сравнение между различни обекти", wrong1: "Дяловете на всяка част от едно цяло в %", wrong2: "Териториалното разпределение на дейностите" },
  { q: "Какво показва кръговата диаграма?", correct: "Дяловете на всяка част от едно цяло в % от цялото", wrong1: "Промени по години", wrong2: "Границите на държавите" },
  { q: "Какво изобразява стопанската карта?", correct: "Териториалното разпределение на стопанските дейности", wrong1: "Политическите граници", wrong2: "Гъстотата на населението" },
  { q: "Кои са трите основни групи стопански дейности?", correct: "Добивни, обработващи, обслужващи", wrong1: "Земеделски, промишлени, търговски", wrong2: "Държавни, частни, смесени" },
  { q: "Към коя група спада земеделието?", correct: "Добивни дейности", wrong1: "Обработващи дейности", wrong2: "Обслужващи дейности" },
  { q: "Към коя група спада промишлеността?", correct: "Обработващи дейности", wrong1: "Добивни дейности", wrong2: "Обслужващи дейности" },
  { q: "Към коя група спадат транспортът и туризмът?", correct: "Обслужващи дейности", wrong1: "Добивни дейности", wrong2: "Обработващи дейности" },
  { q: "Как се отчита най-големият дял в кръгова диаграма?", correct: "По най-големия сектор от кръга", wrong1: "По най-високия стълб", wrong2: "По най-тъмния цвят на картата" },
  { q: "Какво показват легендите на картата?", correct: "Значението на символите и цветовете", wrong1: "Границите на държавите", wrong2: "Броя на населението" },
  { q: "Какво означава „териториално разпределение“?", correct: "Къде са разположени дейностите в пространството", wrong1: "Колко струва производството", wrong2: "Кой управлява района" },
  { q: "Какво изучава населението (географията на населението)?", correct: "Броя, разпределението и движението на хората", wrong1: "Само икономиката на държавите", wrong2: "Само политическите граници" },
  { q: "Кои са основните причини за преселване?", correct: "Икономически, политически и природни", wrong1: "Само религиозни", wrong2: "Само климатични" },
  { q: "Какво е гъстота на населението?", correct: "Брой хора на 1 кв. км", wrong1: "Брой държави на континент", wrong2: "Брой градове в държава" },
  { q: "Къде населението е най-гъсто?", correct: "В равнини, крайбрежия и райони с добри условия за живот", wrong1: "В пустини и полярни райони", wrong2: "В планините над 3000 m" },
  { q: "Какво представлява държавата?", correct: "Територия с население и управление", wrong1: "Само територия с граници", wrong2: "Организация без суверенитет" },
  { q: "Какво показва политическата карта?", correct: "Държавите и техните граници", wrong1: "Стопанските дейности по райони", wrong2: "Климатичните зони" },
  { q: "Кои са основните форми на управление?", correct: "Монархия и република", wrong1: "Унитарна и федеративна", wrong2: "Северна и южна" },
  { q: "Какво е стопанството?", correct: "Съвкупността от всички дейности за производство и потребление на стоки и услуги", wrong1: "Само земеделие и промишленост", wrong2: "Само държавните предприятия" },
  { q: "От какво зависи развитието на стопанството?", correct: "От природни условия, ресурси, население и технологии", wrong1: "Само от размера на държавата", wrong2: "Само от броя на градовете" },
  { q: "Кой континент е най-многоброен по население?", correct: "Азия", wrong1: "Европа", wrong2: "Африка" },
  { q: "Къде гъстотата на населението е най-ниска?", correct: "Австралия", wrong1: "Азия", wrong2: "Европа" },
  { q: "Как се нарича придвижването на хора от едно място на друго?", correct: "Миграция", wrong1: "Урбанизация", wrong2: "Емиграция само" },
  { q: "Коя е основната причина за движение на населението?", correct: "Търсене на по-добри условия за живот", wrong1: "Само войни", wrong2: "Само климат" },
  { q: "Преобладаваща религия в Европа?", correct: "Християнство", wrong1: "Ислям", wrong2: "Будизъм" },
  { q: "Преобладаваща религия в България?", correct: "Православно християнство", wrong1: "Католицизъм", wrong2: "Протестантство" },
  { q: "Какво е селско селище?", correct: "Населено място, където хората се занимават главно със земеделие", wrong1: "Малък град с промишленост", wrong2: "Курортно място" },
  { q: "Какво е град?", correct: "Селище с развита промишленост и услуги", wrong1: "Място само със земеделие", wrong2: "Всяко селище над 1000 души" },
  { q: "Какво е икономическа карта?", correct: "Карта, показваща стопанските дейности", wrong1: "Карта само с граници", wrong2: "Карта на релефа" },
  { q: "Какво включват добивните дейности?", correct: "Добив на природни ресурси – руди, въглища, нефт, дървесина", wrong1: "Производство на машини и текстил", wrong2: "Транспорт и туризъм" },
  { q: "Какво включват преработващите (обработващите) дейности?", correct: "Производство на стоки от суровини – машини, храни, текстил", wrong1: "Добив на руди и въглища", wrong2: "Образование и здраве" },
  { q: "Какво включват обслужващите дейности?", correct: "Услуги – транспорт, търговия, туризъм, образование", wrong1: "Добив на нефт и руди", wrong2: "Производство на метали" },
  { q: "Какво е население?", correct: "Всички хора, които живеят на определена територия", wrong1: "Само работещите в държавата", wrong2: "Само градското население" },
  { q: "Какво е държава?", correct: "Територия с постоянно население, граници и управление", wrong1: "Само територия с граници", wrong2: "Организация без територия" },
  { q: "Как се групират държавите по устройство?", correct: "Унитарни и федеративни", wrong1: "Монархии и републики", wrong2: "Северни и южни" },
  { q: "Кои са основните елементи на стопанството?", correct: "Природни ресурси, труд, капитали, технологии", wrong1: "Само пари и банки", wrong2: "Само държавата" },
  { q: "Какво е международно разделение на труда?", correct: "Специализация на държавите в производство на определени стоки", wrong1: "Разделяне на работния ден", wrong2: "Миграция на работници" },
  { q: "Какви са последиците от стопанската дейност върху природата?", correct: "Замърсяване, изчерпване на ресурси, промяна на ландшафта", wrong1: "Само подобрение на околната среда", wrong2: "Само растеж на населението" },
  { q: "Какво е транспорт?", correct: "Дейност по превоз на хора и стоки", wrong1: "Производство на автомобили", wrong2: "Продажба на билети" },
  { q: "Колко е населението на Земята днес?", correct: "Над 8 милиарда души", wrong1: "Около 5 милиарда души", wrong2: "Около 10 милиарда души" },
  { q: "През кой век започва бързото нарастване на населението?", correct: "През XVIII век", wrong1: "През X век", wrong2: "През XX век" },
  { q: "Кои райони са най-гъсто населени?", correct: "Крайбрежията", wrong1: "Пустините", wrong2: "Полярните райони" },
  { q: "Кои райони са слабо населени?", correct: "Пустините", wrong1: "Крайбрежията", wrong2: "Равнините" },
  { q: "Каква е средната гъстота на населението на Земята?", correct: "Около 54 души на кв. км", wrong1: "Около 10 души на кв. км", wrong2: "Около 200 души на кв. км" },
  { q: "Какво представлява миграцията?", correct: "Преселване на хора от едно място на друго", wrong1: "Раждаемост в даден район", wrong2: "Разширяване на градовете" },
  { q: "Къде се наблюдават най-големи миграционни потоци?", correct: "Към Европа и Северна Америка", wrong1: "Към пустините", wrong2: "Към полярните райони" },
  { q: "Какво е характерно за населението на развитите страни?", correct: "Ниска раждаемост и застаряване", wrong1: "Висока раждаемост и бърз растеж", wrong2: "Равномерна възрастова структура" },
  { q: "България е член на:", correct: "ООН, НАТО и ЕС", wrong1: "Само ООН", wrong2: "Само ЕС" },
  { q: "Каква информация предоставя политическата карта?", correct: "Местоположение на държавите, големина, граници, столици, водни пространства", wrong1: "Само стопански дейности", wrong2: "Само релеф" },
  { q: "Колко държави членуват в ООН?", correct: "193", wrong1: "258", wrong2: "27" },
  { q: "Какво представлява НАТО и каква е неговата цел?", correct: "Военен и политически съюз; цел: да гарантира независимостта и териториалната цялост на членките", wrong1: "Икономически съюз за търговия", wrong2: "Организация за опазване на природата" },
  { q: "Кога България влиза в НАТО?", correct: "През 2004 г.", wrong1: "През 2007 г.", wrong2: "През 1989 г." },
  { q: "Колко държави членуват в ЕС (към 2022 г.)?", correct: "27 държави", wrong1: "28 държави", wrong2: "193 държави" },
  { q: "Кога България става член на ЕС?", correct: "През 2007 г.", wrong1: "През 2004 г.", wrong2: "През 2013 г." },
  { q: "Каква е целта на ООН?", correct: "Опазване на мира и сигурността, намаляване на бедността, образование, опазване на природата", wrong1: "Само военна отбрана", wrong2: "Само икономическа помощ" },
  { q: "Коя държава се е обединила?", correct: "Германия", wrong1: "Чехословакия", wrong2: "Югославия" },
  { q: "Коя държава се е разделила на две нови държави?", correct: "Чехословакия (на Чехия и Словакия)", wrong1: "Германия", wrong2: "СССР" },
  { q: "Защо наричат стопанството „двигател“ на общественото развитие?", correct: "Защото задоволява потребностите от стоки и услуги, подобрява качеството на живота, осигурява работа и доходи", wrong1: "Защото произвежда само машини", wrong2: "Защото контролира държавата" },
  { q: "Какво е цената и от какво се определя?", correct: "Паричната стойност на стока/услуга; определя се от разходи, труд, търсене и предлагане", wrong1: "Само от държавата", wrong2: "Само от количеството" },
  { q: "Как се поделят страните според икономическото развитие?", correct: "Слаборазвити и силно развити", wrong1: "Северни и южни", wrong2: "Малки и големи" },
  { q: "Какво е стопанската карта?", correct: "Тематична карта, която с условни знаци изобразява стопанските дейности в определена територия", wrong1: "Карта само с граници на държавите", wrong2: "Карта на населението" },
  { q: "Първа стъпка при четене на стълбчеста диаграма?", correct: "Прочетете заглавието – то показва за какво се отнася диаграмата", wrong1: "Проследете данните по години", wrong2: "Определете вертикалната ос" },
  { q: "За какво се използва кръговата диаграма?", correct: "За разкриване на структурата на икономиката (или друг цялостен показател)", wrong1: "За промени по години", wrong2: "За сравнение между държави" },
  { q: "Коя зърнена култура има най-голям дял в световното производство (2020)?", correct: "Царевица (37%)", wrong1: "Пшеница (27%)", wrong2: "Ориз" },
  { q: "В кои части на света се отглежда най-много ориз?", correct: "Предимно Азия (Индия, Китай, Югоизточна Азия)", wrong1: "Северна Америка", wrong2: "Австралия" },
  { q: "Населението е... и... на стоки и услуги.", correct: "Производител и потребител", wrong1: "Само потребител", wrong2: "Само производител" },
  { q: "Как се нарича придвижването на хора от едно място на друго?", correct: "Миграция (преселване)", wrong1: "Урбанизация", wrong2: "Емиграция" },
  { q: "Какво е държава и кои са нейните белези?", correct: "Териториална организация с население, власт и суверенитет; белези: територия, население, държавна власт, признание", wrong1: "Само територия с граници", wrong2: "Организация без власт" },
  { q: "Какво е групиране на стопанските дейности?", correct: "Разделяне на дейностите на добивни, обработващи и обслужващи по преобладаващата дейност", wrong1: "Разделяне по държави", wrong2: "Разделяне по години" },
  { q: "Към коя икономическа група принадлежи дърводобивът?", correct: "Първичен сектор (добивни дейности)", wrong1: "Вторичен сектор", wrong2: "Третичен сектор" },
  { q: "Към коя икономическа група принадлежат роботите на поточна линия в завод?", correct: "Вторичен сектор (обработващи)", wrong1: "Първичен сектор", wrong2: "Третичен сектор" },
  { q: "Към коя икономическа група принадлежи обучението в класна стая?", correct: "Третичен сектор (обслужващи – образование)", wrong1: "Първичен сектор", wrong2: "Вторичен сектор" },
  { q: "Към коя икономическа група принадлежи отглеждането на овце и агнета?", correct: "Първичен сектор (добивни – земеделие)", wrong1: "Вторичен сектор", wrong2: "Третичен сектор" },
  { q: "Селища, чиито жители се занимават главно с неземеделска дейност, се наричат:", correct: "Градове", wrong1: "Села", wrong2: "Курорти" },
  { q: "Съотношението между броя на населението и площта на територията представлява:", correct: "Средна гъстота на населението", wrong1: "Миграция", wrong2: "Урбанизация" },
  { q: "Държави, които се управляват от органи, избрани от населението, са:", correct: "Републики", wrong1: "Монархии", wrong2: "Унитарни" },
  { q: "Неща, които се използват за производството на стоки и услуги, се наричат:", correct: "Стопански фактори", wrong1: "Пазар", wrong2: "Цени" },
  { q: "Място, където се извършва размяна на стоки и услуги срещу пари, се нарича:", correct: "Пазар", wrong1: "Завод", wrong2: "Държава" },
  { q: "Селище, жителите на което се занимават главно със земеделие, се нарича:", correct: "Село", wrong1: "Град", wrong2: "Столица" },
  { q: "Държави със силна централна власт се наричат:", correct: "Унитарни", wrong1: "Федеративни", wrong2: "Републики" },
  { q: "Паричната стойност на стоките и услугите представлява:", correct: "Тяхната цена", wrong1: "Пазара", wrong2: "Капитала" },
  { q: "Коя от изброените организации е военна организация?", correct: "Организация на Северноатлантическия договор (НАТО)", wrong1: "ООН", wrong2: "ЕС" },
];

const GEOGRAFIA_IKONOMIKA_PART1 = GEOGRAFIA_IKONOMIKA_QUESTIONS.slice(0, 26);
const GEOGRAFIA_IKONOMIKA_PART2 = GEOGRAFIA_IKONOMIKA_QUESTIONS.slice(26, 52);
const GEOGRAFIA_IKONOMIKA_PART3 = GEOGRAFIA_IKONOMIKA_QUESTIONS.slice(52, 78);

/** География и икономика 5. клас – Тест 4 Тематичен контрол (обобщаващ). 20 въпроса с избор. */
const GEOGRAFIA_OBOBSTAVASHT_QUESTIONS = [
  { q: 'Най-многобройно е населението на:', correct: 'Азия', wrong1: 'Северна Америка', wrong2: 'Европа' },
  { q: 'Средната гъстота на населението е най-малка в:', correct: 'Австралия', wrong1: 'Азия', wrong2: 'Европа' },
  { q: 'Придвижването на големи групи хора от едно място на друго се нарича:', correct: 'миграция', wrong1: 'миграционен поток', wrong2: 'обезлюдяване' },
  { q: 'Основна причина за движението на населението е:', correct: 'неравномерното разпределение на благата между хората', wrong1: 'природното разнообразие', wrong2: 'развитието на науката и техниката' },
  { q: 'Посочете ГРЕШНИЯ отговор. Принадлежността на хората към дадена раса се определя от:', correct: 'езиците, които говорят', wrong1: 'цвета на кожата', wrong2: 'формата на устните' },
  { q: 'За коя раса се отнасят белезите: жълтеникава кожа; нисък ръст; права черна коса; слабо изпъкнал нос?', correct: 'монголоидна', wrong1: 'европеидна', wrong2: 'негроидно-австралоидна' },
  { q: 'На коя раса са представители българите, руснаците, румънците?', correct: 'на европеидната', wrong1: 'на монголоидната', wrong2: 'на негроидно-австралоидната' },
  { q: 'Открийте ГРЕШНИЯ отговор. Религията е:', correct: 'съвкупност от раси', wrong1: 'съвкупност от вярвания', wrong2: 'съвкупност от правила на поведение' },
  { q: 'Коя е преобладаващата религия в Европа, Америка и Австралия?', correct: 'християнство', wrong1: 'юдаизъм', wrong2: 'ислям' },
  { q: 'Преобладаваща част от хората в България са:', correct: 'православни християни', wrong1: 'протестанти', wrong2: 'католици' },
  { q: 'Селищата се поделят на градове и села в зависимост от:', correct: 'трудовата дейност на хората', wrong1: 'образованието на хората', wrong2: 'географското им положение' },
  { q: 'Открийте ГРЕШНИЯ отговор. Градовете са:', correct: 'селища, чието население се занимава със земеделие', wrong1: 'селища, чието население е заето в производството на стоки и услуги', wrong2: 'селища, в които са оформени зони за труд, за живеене и за отдих' },
  { q: 'В селата населението се занимава главно с:', correct: 'земеделие', wrong1: 'транспорт', wrong2: 'търговия' },
  { q: 'Основен проблем на селата е:', correct: 'силното обезлюдяване', wrong1: 'замърсяването на въздуха', wrong2: 'голямата пренаселеност' },
  { q: 'Открийте ГРЕШНИЯ отговор. Политическата карта:', correct: 'изработва се със способа на количествения фон', wrong1: 'е вид тематична карта', wrong2: 'изобразява границите на държавите' },
  { q: 'Приемането на законите се извършва от:', correct: 'парламента', wrong1: 'правителството', wrong2: 'президента' },
  { q: 'НАТО е:', correct: 'военно-политическа организация', wrong1: 'обединение на държавите в Европа', wrong2: 'обединение за свободна търговия' },
  { q: 'Кой фактор за развитие на стопанството определя природните условия, близостта до важни пътнища и пристанища, през което се внасят и изнасят суровини и готови изделия?', correct: 'географското положение', wrong1: 'икономическата политика на държавата', wrong2: 'природните фактори' },
  { q: 'Транспортът, търговията и туризмът се отнасят към:', correct: 'обслужващите дейности', wrong1: 'обработващите дейности', wrong2: 'добивните дейности' },
  { q: 'Кръговата диаграма е най-подходяща за изобразяването на:', correct: 'структурата на икономиката', wrong1: 'разпределението на стопанските дейности', wrong2: 'динамиката на дадено производство по години' },
];

/** География – селища, стопанство, промишленост, транспорт (допълнителни въпроси). */
const GEOGRAFIA_DOPALNITELNI_QUESTIONS = [
  { q: 'Вярно ли е? С появата на земеделието се появява нуждата хората да имат постоянен дом близо до земята, която обработват.', correct: 'Вярно', wrong1: 'Грешно', wrong2: 'Частично вярно' },
  { q: 'Вярно ли е? Селищата се различават по времето на възникване, външния си облик, преобладаващата трудова дейност, броя на жителите им. Има постоянни и временни селища.', correct: 'Вярно', wrong1: 'Грешно', wrong2: 'Частично вярно' },
  { q: 'Кое от следните твърдения е вярно?', correct: 'Всички изброени', wrong1: 'Годишно хиляди села по света напълно се обезлюдяват и изчезват от географската карта.', wrong2: 'Много села по света нямат канализация, питейна вода, електричество.' },
  { q: 'Коя стопанска дейност осигурява храни за хората, фуражи за животните, суровини за обработващата дейност?', correct: 'растениевъдство', wrong1: 'животновъдство', wrong2: 'търговия' },
  { q: 'Добив на въглища, нефт, природен газ и електроенергия се отнасят към кой промишлен отрасъл?', correct: 'енергетика', wrong1: 'металургия', wrong2: 'химическа промишленост' },
  { q: 'Брашно, млечни продукти, захар, консерви се произвеждат от кой промишлен отрасъл?', correct: 'хранително-вкусова промишленост', wrong1: 'лека промишленост', wrong2: 'машиностроене' },
  { q: 'Машини, кораби, автомобили, електроника, електротехника се произвеждат от кой промишлен отрасъл?', correct: 'машиностроене', wrong1: 'металургия', wrong2: 'енергетика' },
  { q: 'Желязо, мед, олово се произвеждат от кой промишлен отрасъл?', correct: 'металургия', wrong1: 'химическа промишленост', wrong2: 'машиностроене' },
  { q: 'Лекарства, минерални торове, изкуствени влакна, пластмаси, бои, масла се произвеждат от кой промишлен отрасъл?', correct: 'химическа промишленост', wrong1: 'лека промишленост', wrong2: 'хранително-вкусова промишленост' },
  { q: 'Обувки, чорапи, мебели, текстилни изделия се произвеждат от кой промишлен отрасъл?', correct: 'лека промишленост', wrong1: 'машиностроене', wrong2: 'енергетика' },
  { q: 'За кой вид транспорт се отнася характеристиката: „Този транспорт е евтин и е на първо място по обем на превозени товари“?', correct: 'морски', wrong1: 'автомобилен', wrong2: 'железопътен' },
  { q: 'Наличието на чист въздух, гори, ливади, чисти води е предпоставка за развитието на:', correct: 'туризъм', wrong1: 'производство на електроенергия', wrong2: 'добив на полезни изкопаеми' },
  { q: 'Най-голямата по площ държава в света е:', correct: 'Русия', wrong1: 'САЩ', wrong2: 'Китай' },
];

/** Language Revision – 5th grade English (Grammar, Vocabulary, Phrases) */
const ENGLISH_LANGUAGE_REVISION_QUESTIONS = [
  // Grammar – verbs (Exercise 1)
  { q: "He's a teacher. He ___ in a school in Madrid.", correct: "works", wrong1: "don't work", wrong2: "comes" },
  { q: "My cousins ___ in the UK. They live in Germany.", correct: "don't live", wrong1: "live", wrong2: "work" },
  { q: "Maria ___ tennis or basketball. She hates sport.", correct: "doesn't play", wrong1: "plays", wrong2: "takes" },
  { q: "I ___ Polish. I only speak English.", correct: "don't speak", wrong1: "speak", wrong2: "come" },
  { q: "My sister ___ very good photos of animals.", correct: "takes", wrong1: "don't take", wrong2: "works" },
  { q: "Do you ___ from America?", correct: "come", wrong1: "not come", wrong2: "speak" },
  // Grammar – pronouns (Exercise 2)
  { q: "A: Do you like rock music? B: No, I hate ___.", correct: "it", wrong1: "him", wrong2: "us" },
  { q: "A: My mum likes The Beatles! B: My mum likes ___, too.", correct: "them", wrong1: "it", wrong2: "her" },
  { q: "A: Is this your book? B: Yes, please give it to ___.", correct: "me", wrong1: "him", wrong2: "us" },
  { q: "A: Do you like Nicole Kidman? B: No, I'm not keen on ___.", correct: "her", wrong1: "him", wrong2: "them" },
  { q: "A: Are these your brothers with you? B: Yes, it's a photo of ___ on our holiday.", correct: "them", wrong1: "us", wrong2: "me" },
  // Vocabulary – jobs and places (Exercise 3)
  { q: "Where does a plumber work?", correct: "building site", wrong1: "hospital", wrong2: "school" },
  { q: "Where does a doctor work?", correct: "hospital", wrong1: "shop", wrong2: "farm" },
  { q: "Where does a teacher work?", correct: "school", wrong1: "film studio", wrong2: "office" },
  { q: "Where does a secretary work?", correct: "office", wrong1: "building site", wrong2: "farm" },
  { q: "Where does a farmer work?", correct: "farm", wrong1: "hospital", wrong2: "shop" },
  { q: "Where does an actor work?", correct: "film studio", wrong1: "school", wrong2: "building site" },
  // Vocabulary – scrambled adjectives (Exercise 4): bretrile, looc, tictafans, gorbin, tagre, tanibrili, drew, fulwa, nynut
  { q: "Rearrange the letters to make an adjective of opinion: bretrile", correct: "terrible", wrong1: "brilliant", wrong2: "tablet" },
  { q: "Rearrange the letters to make an adjective of opinion: looc", correct: "cool", wrong1: "cold", wrong2: "pool" },
  { q: "Rearrange the letters to make an adjective of opinion: tictafans", correct: "fantastic", wrong1: "fantasy", wrong2: "fact" },
  { q: "Rearrange the letters to make an adjective of opinion: gorbin", correct: "boring", wrong1: "going", wrong2: "bring" },
  { q: "Rearrange the letters to make an adjective of opinion: tagre", correct: "great", wrong1: "target", wrong2: "gate" },
  { q: "Rearrange the letters to make an adjective of opinion: tanibrili", correct: "brilliant", wrong1: "terrible", wrong2: "natural" },
  { q: "Rearrange the letters to make an adjective of opinion: drew", correct: "weird", wrong1: "red", wrong2: "word" },
  { q: "Rearrange the letters to make an adjective of opinion: fulwa", correct: "awful", wrong1: "full", wrong2: "law" },
  { q: "Rearrange the letters to make an adjective of opinion: nynut", correct: "funny", wrong1: "nut", wrong2: "tunnel" },
  // Phrases (Exercise 5)
  { q: "A: Can I borrow your camera, please? B: ___", correct: "Yes, OK.", wrong1: "That's right.", wrong2: "Don't look at me!" },
  { q: "A: Look, here's my new iPad. B: ___", correct: "Cool!", wrong1: "Yes, OK.", wrong2: "That's right." },
  // Conversation Rob & Liz (Exercise 6)
  { q: "Rob: Do you want to watch my new DVD? Liz: ___", correct: "Yes, OK. What film is it?", wrong1: "Who's in it?", wrong2: "Oh, I love him." },
  { q: "Rob: It's called Alice in Wonderland. Liz: ___", correct: "Who's in it?", wrong1: "Yes, OK. What film is it?", wrong2: "I'm not keen on her." },
  { q: "Rob: Johnny Depp. Liz: ___", correct: "Oh, I love him. I think he's fantastic.", wrong1: "He's awful.", wrong2: "Who's in it?" },
  { q: "Rob: Me, too. What do you think of Helena Bonham Carter? She's in it, too. Liz: ___", correct: "I'm not keen on her. She's weird.", wrong1: "Oh, I love him.", wrong2: "Yes, OK. What film is it?" },
];

/** Test 1: Have / Go / Do / Get – 5th grade English */
const ENGLISH_HAVE_GO_DO_GET_QUESTIONS = [
  { q: "I ______ up at 7 o'clock every day.", correct: "get", wrong1: "have", wrong2: "do" },
  { q: "She ______ to school by bus.", correct: "goes", wrong1: "has", wrong2: "gets" },
  { q: "We ______ homework in the afternoon.", correct: "do", wrong1: "have", wrong2: "get" },
  { q: "They ______ breakfast at 8 a.m.", correct: "have", wrong1: "go", wrong2: "do" },
  { q: "He ______ to bed at 10 p.m.", correct: "goes", wrong1: "does", wrong2: "has" },
  { q: "I ______ dressed before school.", correct: "get", wrong1: "go", wrong2: "do" },
  { q: "She ______ a shower in the morning.", correct: "has", wrong1: "does", wrong2: "goes" },
  { q: "We ______ to football practice on Mondays.", correct: "go", wrong1: "have", wrong2: "get" },
  { q: "He ______ his teeth before bed.", correct: "does", wrong1: "gets", wrong2: "goes" },
  { q: "I ______ home at 4 p.m.", correct: "get", wrong1: "do", wrong2: "have" },
  { q: "I ______ lunch at school.", correct: "have", wrong1: "go", wrong2: "get" },
  { q: "She ______ up early.", correct: "gets", wrong1: "has", wrong2: "goes" },
  { q: "We ______ shopping on Saturday.", correct: "go", wrong1: "have", wrong2: "get" },
  { q: "He ______ his homework after dinner.", correct: "does", wrong1: "gets", wrong2: "has" },
  { q: "They ______ to the park in the evening.", correct: "go", wrong1: "have", wrong2: "get" },
  { q: "I ______ dressed quickly.", correct: "get", wrong1: "do", wrong2: "go" },
  { q: "She ______ a bath at night.", correct: "has", wrong1: "gets", wrong2: "goes" },
  { q: "We ______ home late.", correct: "get", wrong1: "have", wrong2: "do" },
  { q: "Match: get ___", correct: "dressed", wrong1: "homework", wrong2: "breakfast" },
  { q: "Match: have ___", correct: "breakfast", wrong1: "to school", wrong2: "homework" },
  { q: "Match: do ___", correct: "homework", wrong1: "to bed", wrong2: "a shower" },
  { q: "Match: go ___", correct: "to school", wrong1: "dressed", wrong2: "breakfast" },
  { q: "Match: have ___ (shower)", correct: "a shower", wrong1: "to school", wrong2: "homework" },
  { q: "Match: go ___ (bed)", correct: "to bed", wrong1: "dressed", wrong2: "breakfast" },
];

/** Test 2: Adverbs of frequency & Transport (by/on/in) – 5th grade English */
const ENGLISH_ADVERBS_TRANSPORT_QUESTIONS = [
  { q: "I ______ brush my teeth before bed. (every time)", correct: "always", wrong1: "never", wrong2: "sometimes" },
  { q: "She ______ watches TV after school. (3–4 times a week)", correct: "often", wrong1: "never", wrong2: "always" },
  { q: "We ______ eat fast food. (0 times)", correct: "never", wrong1: "always", wrong2: "often" },
  { q: "They ______ go to the park on Sundays.", correct: "usually", wrong1: "never", wrong2: "sometimes" },
  { q: "He ______ forgets his homework. (almost every time)", correct: "often", wrong1: "never", wrong2: "sometimes" },
  { q: "I ______ get up at 7 a.m. (every day)", correct: "always", wrong1: "never", wrong2: "often" },
  { q: "She ______ plays computer games. (2 times a month)", correct: "sometimes", wrong1: "always", wrong2: "never" },
  { q: "We ______ visit our grandparents. (many times)", correct: "often", wrong1: "never", wrong2: "sometimes" },
  { q: "He ______ drinks milk. (not at all)", correct: "never", wrong1: "always", wrong2: "usually" },
  { q: "I ______ help my parents at home.", correct: "usually", wrong1: "never", wrong2: "always" },
  { q: "Which is correct? I go to school by bus. (always)", correct: "I always go to school by bus.", wrong1: "I go always to school by bus.", wrong2: "Always I go to school by bus." },
  { q: "Which is correct? She is late. (never)", correct: "She is never late.", wrong1: "She never is late.", wrong2: "Never she is late." },
  { q: "Which is correct? We play football after school. (often)", correct: "We often play football after school.", wrong1: "We play often football after school.", wrong2: "Often we play football after school." },
  { q: "Which is correct? They are tired in the morning. (sometimes)", correct: "They are sometimes tired in the morning.", wrong1: "They sometimes are tired in the morning.", wrong2: "Sometimes they are tired in the morning." },
  { q: "I go to school ___ bus.", correct: "by", wrong1: "on", wrong2: "in" },
  { q: "She travels ___ train.", correct: "by", wrong1: "on", wrong2: "in" },
  { q: "We go ___ car.", correct: "by", wrong1: "in", wrong2: "on" },
  { q: "They travel ___ plane.", correct: "by", wrong1: "in", wrong2: "on" },
  { q: "He goes to work ___ bike.", correct: "by", wrong1: "on", wrong2: "in" },
  { q: "She travels ___ foot.", correct: "on", wrong1: "by", wrong2: "in" },
];

/** Test 3: Present Simple & at (time) – 5th grade English */
const ENGLISH_PRESENT_SIMPLE_AT_QUESTIONS = [
  { q: "She ______ school at 8 o'clock. (start / starts)", correct: "starts", wrong1: "start", wrong2: "starting" },
  { q: "I ______ dinner at 7 p.m. (have / has)", correct: "have", wrong1: "has", wrong2: "having" },
  { q: "They ______ football at 5 o'clock. (play / plays)", correct: "play", wrong1: "plays", wrong2: "playing" },
  { q: "He ______ TV at night. (watch / watches)", correct: "watches", wrong1: "watch", wrong2: "watching" },
  { q: "We ______ up at 6:30. (get / gets)", correct: "get", wrong1: "gets", wrong2: "getting" },
  { q: "My dad ______ to work at 9 a.m. (go / goes)", correct: "goes", wrong1: "go", wrong2: "going" },
  { q: "I ______ my homework at 4 o'clock. (do / does)", correct: "do", wrong1: "does", wrong2: "doing" },
  { q: "Anna ______ a book at bedtime. (read / reads)", correct: "reads", wrong1: "read", wrong2: "reading" },
  { q: "The lesson ______ at 2 p.m. (finish / finishes)", correct: "finishes", wrong1: "finish", wrong2: "finishing" },
  { q: "Tom and Ben ______ lunch at noon. (eat / eats)", correct: "eat", wrong1: "eats", wrong2: "eating" },
  { q: "I wake up ___ 7 o'clock.", correct: "at", wrong1: "in", wrong2: "on" },
  { q: "She goes to bed ___ night.", correct: "at", wrong1: "in", wrong2: "on" },
  { q: "We meet ___ 5:30 p.m.", correct: "at", wrong1: "in", wrong2: "on" },
  { q: "He has English ___ noon.", correct: "at", wrong1: "in", wrong2: "on" },
  { q: "They have breakfast ___ 8 a.m.", correct: "at", wrong1: "in", wrong2: "on" },
  { q: "The film starts ___ 6 o'clock.", correct: "at", wrong1: "in", wrong2: "on" },
  { q: "I study ___ the weekend.", correct: "at", wrong1: "in", wrong2: "on" },
  { q: "She calls me ___ midnight.", correct: "at", wrong1: "in", wrong2: "on" },
  { q: "Correct: She go to bed at 10 o'clock.", correct: "She goes to bed at 10 o'clock.", wrong1: "She go to bed at 10 o'clock.", wrong2: "She going to bed at 10 o'clock." },
  { q: "Correct: I has dinner at 7 p.m.", correct: "I have dinner at 7 p.m.", wrong1: "I has dinner at 7 p.m.", wrong2: "I am have dinner at 7 p.m." },
  { q: "Correct: He play football at 5 o'clock.", correct: "He plays football at 5 o'clock.", wrong1: "He play football at 5 o'clock.", wrong2: "He playing football at 5 o'clock." },
  { q: "Correct: We goes to school at 8 a.m.", correct: "We go to school at 8 a.m.", wrong1: "We goes to school at 8 a.m.", wrong2: "We going to school at 8 a.m." },
];

/** Test 4: Time in words and numbers – 5th grade English */
const ENGLISH_TIME_QUESTIONS = [
  { q: "Write the time in words: 3:00", correct: "three o'clock", wrong1: "half past three", wrong2: "quarter past three" },
  { q: "Write the time in words: 7:15", correct: "quarter past seven", wrong1: "quarter to seven", wrong2: "half past seven" },
  { q: "Write the time in words: 9:30", correct: "half past nine", wrong1: "quarter past nine", wrong2: "quarter to nine" },
  { q: "Write the time in words: 4:45", correct: "quarter to five", wrong1: "quarter past four", wrong2: "half past four" },
  { q: "Write the time in words: 12:00", correct: "twelve o'clock", wrong1: "half past twelve", wrong2: "quarter past twelve" },
  { q: "Write the time in words: 5:10", correct: "ten past five", wrong1: "ten to five", wrong2: "quarter past five" },
  { q: "Write the time in words: 8:20", correct: "twenty past eight", wrong1: "twenty to eight", wrong2: "half past eight" },
  { q: "Write the time in words: 6:35", correct: "twenty-five to seven", wrong1: "twenty-five past six", wrong2: "half past six" },
  { q: "Write the time in words: 10:50", correct: "ten to eleven", wrong1: "ten past ten", wrong2: "quarter to eleven" },
  { q: "Write the time in words: 1:05", correct: "five past one", wrong1: "five to one", wrong2: "quarter past one" },
  { q: "It's half past four. What time is it?", correct: "4:30", wrong1: "4:15", wrong2: "4:45" },
  { q: "It's quarter past nine. What time is it?", correct: "9:15", wrong1: "9:30", wrong2: "9:45" },
  { q: "It's quarter to seven. What time is it?", correct: "6:45", wrong1: "7:15", wrong2: "7:45" },
  { q: "It's ten past three. What time is it?", correct: "3:10", wrong1: "3:50", wrong2: "10:03" },
  { q: "It's twenty to eight. What time is it?", correct: "7:40", wrong1: "8:20", wrong2: "7:20" },
  { q: "It's five past one. What time is it?", correct: "1:05", wrong1: "1:50", wrong2: "5:01" },
  { q: "It's twenty-five past six. What time is it?", correct: "6:25", wrong1: "6:35", wrong2: "5:25" },
  { q: "It's ten to eleven. What time is it?", correct: "10:50", wrong1: "11:10", wrong2: "10:10" },
  { q: "2:30 is:", correct: "half past two", wrong1: "quarter to two", wrong2: "half to two" },
  { q: "11:45 is:", correct: "quarter to twelve", wrong1: "quarter past eleven", wrong2: "half past eleven" },
  { q: "6:15 is:", correct: "quarter past six", wrong1: "quarter to six", wrong2: "half past six" },
  { q: "9:50 is:", correct: "ten to ten", wrong1: "ten past nine", wrong2: "ten to nine" },
  { q: "4:05 is:", correct: "five past four", wrong1: "five to four", wrong2: "half past four" },
  { q: "7:40 is:", correct: "twenty to eight", wrong1: "twenty past seven", wrong2: "forty past seven" },
];

/** История 5 клас – Древна Тракия (по учебника, обобщение и кратки въпроси) */
const ISTORIYA_DREVNA_TRAKIYA_QUESTIONS = [
  // Страница 106 – обобщение, въпрос 2
  { q: "Кой тракийски цар отишъл с войска при Троя като съюзник на обсадения град?", correct: "Резос", wrong1: "Котис I", wrong2: "Терес" },
  // Въпрос 3
  { q: "Героят Одисей убил кой тракийски цар и отвел неговите „бързобеги“ коне?", correct: "Резос", wrong1: "Ситалк", wrong2: "Терес" },
  // Въпрос 5 – Тукидид
  { q: "Кой тракийски цар „пръв основал обширното царство на одрисите“, според Тукидид?", correct: "Терес", wrong1: "Ситалк", wrong2: "Резос" },
  // Въпрос 6
  { q: "Кой одриски цар сключил договор с Атина за участие в Пелопонеската война?", correct: "Ситалк", wrong1: "Терес", wrong2: "Котис I" },
  // Въпрос 7 – Валерий Максим
  { q: "Кой цар казал: „И аз ще им дам правата на моето племе“, когато получил права на атински гражданин?", correct: "Севт III", wrong1: "Котис I", wrong2: "Ситалк" },
  // Въпрос 8
  { q: "Кой одриски цар воювал успешно в района на протока Дарданели?", correct: "Котис I", wrong1: "Терес", wrong2: "Севт III" },
  // Въпрос 9
  { q: "В резултат от заговор с участието на Атина кой цар бил убит, а държавата му завладяна от Филип II?", correct: "Котис I", wrong1: "Ситалк", wrong2: "Севт III" },
  // Херодот – първо празно място
  { q: "„Най-многобройни от всички народи след индийците са ___.“ (Херодот) Попълнете.", correct: "траките", wrong1: "гърците", wrong2: "персите" },
  // Племена – Добруджа, Дунавска равнина, най-дълготрайна държава
  { q: "В земите на днешна Добруджа живеели кое тракийско племе?", correct: "гетите", wrong1: "одрисите", wrong2: "трибалите" },
  { q: "Западната част на Дунавската равнина била населявана от кое тракийско племе?", correct: "трибалите", wrong1: "гетите", wrong2: "одрисите" },
  { q: "Кое тракийско племе създало най-дълготрайната тракийска държава?", correct: "одрисите", wrong1: "трибалите", wrong2: "гетите" },
  // Кратки въпроси – колона 1 (стр. 104–105)
  { q: "Коя е северната граница на Древна Тракия?", correct: "Карпатите", wrong1: "Егейско море", wrong2: "Р. Вардар" },
  { q: "С кое събитие се свързват първите сведения за траките?", correct: "Троянската война", wrong1: "Гръцката колонизация", wrong2: "Пелопонеската война" },
  { q: "Колко време продължило морското господство на траките?", correct: "Около 80 години", wrong1: "Около 20 години", wrong2: "Над 200 години" },
  { q: "Кое тракийско племе създало най-могъщото и трайно царство?", correct: "одрисите", wrong1: "трибалите", wrong2: "гетите" },
  { q: "Кой тракийски цар бил съюзник на Атина в Пелопонеската война?", correct: "Ситалк", wrong1: "Резос", wrong2: "Котис I" },
  { q: "Край кой днешен град е разположен Севтополис?", correct: "Казанлък", wrong1: "Пловдив", wrong2: "Несебър" },
  { q: "Кое е античното име на Созопол?", correct: "Аполония", wrong1: "Месембрия", wrong2: "Одесос" },
  { q: "Кое е другото име на бог Дионис в Тракия?", correct: "Сабазий", wrong1: "Зевс", wrong2: "Орфей" },
  { q: "Къде слязъл Орфей според мита?", correct: "В подземното царство (в Ада)", wrong1: "На Олимп", wrong2: "В Троя" },
  // Колона 2
  { q: "Коя е южната граница на Древна Тракия?", correct: "Егейско море", wrong1: "Карпатите", wrong2: "Черно море" },
  { q: "В кое събитие участвал цар Резос?", correct: "Троянската война", wrong1: "Пелопонеската война", wrong2: "Гръцката колонизация" },
  { q: "Кой е първият известен цар на одриската държава?", correct: "Терес", wrong1: "Ситалк", wrong2: "Резос" },
  { q: "Кой тракийски цар бил убит при заговор с участието на Атина?", correct: "Котис I", wrong1: "Ситалк", wrong2: "Севт III" },
  { q: "Защо Севтополис не може да бъде посетен от туристи?", correct: "Затънал е под водите на язовир", wrong1: "Е затворен за реставрация", wrong2: "Е в чужбина" },
  { q: "Кое е античното име на Несебър?", correct: "Месембрия", wrong1: "Аполония", wrong2: "Одесос" },
  { q: "Кои са най-многобройните антични паметници в днешните български земи?", correct: "Тракийските могили (гробници)", wrong1: "Римските бани", wrong2: "Гръцките храмове" },
  { q: "Коя е жената на Орфей според мита?", correct: "Евридика", wrong1: "Медея", wrong2: "Ариадна" },
  // Паметници и култура
  { q: "Кой тракийски паметник е в списъка на ЮНЕСКО за световно наследство (гробница с стенописи)?", correct: "Казанлъшката гробница", wrong1: "Севтополис", wrong2: "Аполония" },
  { q: "Коя тракийска гробница е в списъка на ЮНЕСКО за световно наследство?", correct: "Свещарската гробница", wrong1: "Гробницата при Мезек", wrong2: "Аполония" },
  { q: "Как се нарича обширното царство, основано от цар Терес?", correct: "Одриското царство", wrong1: "Трибалското царство", wrong2: "Гетското царство" },
  { q: "Кой древногръцки историк разказва за одрисите и техния цар Терес?", correct: "Тукидид", wrong1: "Херодот", wrong2: "Платон" },
  { q: "Какво според Херодот би било траките, ако бяха „единодушни“ и под един господар?", correct: "Непобедими", wrong1: "Слаби", wrong2: "Малобройни" },
];

/** Човек и природа 5 клас – Въздухът */
const PRIRODA_VOZDUH_QUESTIONS = [
  { q: "Какво представлява въздухът?", correct: "Смес от различни газове", wrong1: "Един чист газ", wrong2: "Само кислород" },
  { q: "Къде се намира въздухът около Земята?", correct: "В атмосферата", wrong1: "Само в облаците", wrong2: "Само около океаните" },
  { q: "Кое свойство на въздуха доказва опитът с балона и везната?", correct: "Въздухът има маса", wrong1: "Въздухът няма тегло", wrong2: "Балоните са по-тежки от водата" },
  { q: "Кое от следните е свойство на въздуха?", correct: "Заема място и има обем", wrong1: "Няма обем", wrong2: "Не може да се свива" },
  { q: "Как изглежда чистият въздух?", correct: "Без цвят и мирис", wrong1: "Син на цвят", wrong2: "Силен мирис" },
  { q: "Кой газ е най-много във въздуха?", correct: "Азот", wrong1: "Кислород", wrong2: "Въглероден диоксид" },
  { q: "Какво количество азот има приблизително в 100 L въздух?", correct: "Около 78 L", wrong1: "Около 50 L", wrong2: "Около 10 L" },
  { q: "Какво количество кислород има приблизително в 100 L въздух?", correct: "Около 21 L", wrong1: "Около 60 L", wrong2: "Около 5 L" },
  { q: "Кой газ е необходим за дишането на живите организми?", correct: "Кислород", wrong1: "Азот", wrong2: "Аргон" },
  { q: "Каква е ролята на кислорода при горенето?", correct: "Поддържа горенето", wrong1: "Спира горенето", wrong2: "Няма значение за горенето" },
  { q: "Кой газ не поддържа горенето и не участва в дишането?", correct: "Азот", wrong1: "Кислород", wrong2: "Въглероден диоксид" },
  { q: "Кой газ е необходим на растенията за фотосинтеза?", correct: "Въглероден диоксид", wrong1: "Азот", wrong2: "Аргон" },
  { q: "Какво представлява въглеродният диоксид?", correct: "Газ, отделян при дишане и горене", wrong1: "Газ само в морската вода", wrong2: "Газ без връзка с дишането" },
  { q: "Какво съдържа въздухът освен азот и кислород?", correct: "Водни пари, въглероден диоксид и други газове", wrong1: "Само прах", wrong2: "Само водород" },
  { q: "От какво зависи количеството водни пари във въздуха?", correct: "От температурата и наличието на водни басейни", wrong1: "Само от вятъра", wrong2: "Само от височината на планините" },
  { q: "Какво се образува, когато водните пари се охладят?", correct: "Конденз", wrong1: "Азот", wrong2: "Кислород" },
  { q: "Какво представлява росата?", correct: "Кондензирали водни пари върху повърхности", wrong1: "Замръзнал дъжд", wrong2: "Вид облак" },
  { q: "Защо съставът на въздуха се променя в различните райони?", correct: "Заради човешка дейност и природни условия", wrong1: "Защото въздухът е един и същ навсякъде", wrong2: "Заради въртенето на Земята" },
  { q: "Къде въздухът обикновено е по-чист?", correct: "В планините и далеч от градове", wrong1: "В големите индустриални градове", wrong2: "Само край фабрики" },
  { q: "Защо въздухът в градовете е по-замърсен?", correct: "Заради транспорта и промишлеността", wrong1: "Заради растенията", wrong2: "Заради морската вода" },
  { q: "Какво се е увеличило в атмосферата през последните десетилетия?", correct: "Количеството въглероден диоксид", wrong1: "Количеството азот", wrong2: "Количеството аргон" },
  { q: "Каква е една от причините за глобалното затопляне?", correct: "Повишеното съдържание на въглероден диоксид", wrong1: "Намаляването на кислорода", wrong2: "Увеличаването на азота" },
  { q: "Защо алпинистите дишат по-трудно на голяма височина?", correct: "Защото въздухът съдържа по-малко кислород", wrong1: "Защото има повече азот", wrong2: "Защото няма въздух" },
  { q: "Какво представлява въздухът?", correct: "Смес от газове", wrong1: "Един газ", wrong2: "Само кислород" },
  { q: "Къде се намира въздухът около Земята?", correct: "В атмосферата", wrong1: "Само в облаците", wrong2: "Само около океаните" },
  { q: "До каква височина приблизително се простира слоят на атмосферата според текста?", correct: "Около 15 км", wrong1: "Около 1 км", wrong2: "Около 100 км" },
  { q: "Как изглежда чистият въздух?", correct: "Няма цвят и мирис", wrong1: "Син на цвят", wrong2: "Жълт на цвят" },
  { q: "Какво доказва опитът с балона и везната?", correct: "Че въздухът има маса", wrong1: "Че въздухът няма тегло", wrong2: "Че балонът съдържа вода" },
  { q: "Какво свойство има въздухът според текста?", correct: "Може да се свива и разширява", wrong1: "Не се променя", wrong2: "Не заема място" },
  { q: "Кой газ е най-много във въздуха?", correct: "Азот", wrong1: "Кислород", wrong2: "Въглероден диоксид" },
  { q: "Колко приблизително е кислородът в 100 L въздух?", correct: "21 L", wrong1: "50 L", wrong2: "5 L" },
  { q: "Колко приблизително е азотът в 100 L въздух?", correct: "78 L", wrong1: "40 L", wrong2: "10 L" },
  { q: "Кой газ поддържа горенето?", correct: "Кислород", wrong1: "Азот", wrong2: "Аргон" },
  { q: "Какво се случва с пламъка в среда от азот?", correct: "Загасва", wrong1: "Гори по-силно", wrong2: "Става син" },
  { q: "Какво съдържа въздухът освен азот и кислород?", correct: "Водни пари и въглероден диоксид", wrong1: "Само прах", wrong2: "Само водород" },
  { q: "Какво се образува когато водните пари се кондензират при положителна температура?", correct: "Роса", wrong1: "Сняг", wrong2: "Градушка" },
  { q: "Как се нарича кондензиралата вода при отрицателни температури?", correct: "Слана", wrong1: "Дъжд", wrong2: "Мъгла" },
  { q: "От какво зависи съставът на въздуха?", correct: "От надморската височина и района", wrong1: "Само от сезона", wrong2: "Само от ветровете" },
  { q: "Къде въздухът е по-чист според текста?", correct: "В планините и далеч от градове", wrong1: "В индустриалните зони", wrong2: "До магистралите" },
  { q: "Какво се е увеличило във въздуха през последните 100 години?", correct: "Въглеродният диоксид", wrong1: "Азотът", wrong2: "Аргонът" },
  { q: "Каква е основната причина за увеличаването на въглеродния диоксид?", correct: "Изгаряне на въглища и нефт", wrong1: "Дъждовете", wrong2: "Земетресенията" },
  { q: "Какво е следствие от увеличения въглероден диоксид?", correct: "Глобално затопляне", wrong1: "Заледяване на Земята", wrong2: "Намаляване на облаците" },
  { q: "Защо алпинистите дишат по-трудно на голяма височина?", correct: "Има по-малко кислород", wrong1: "Има повече азот", wrong2: "Няма въздух" }
];

/** История 5 клас – Урок 27: Общество и всекидневен живот на траките */
const ISTORIYA_TRAKIYA_OBSHTESTVO_QUESTIONS = [
  { q: "Кои заемали водещо място в тракийското общество?", correct: "Владетелите на отделните тракийски племена", wrong1: "Занаятчиите", wrong2: "Търговците" },
  { q: "Какво правели тракийските царе по време на война?", correct: "Водели войската", wrong1: "Работели в храмовете", wrong2: "Занимавали се със земеделие" },
  { q: "Какво сключвали царете освен че водели войни?", correct: "Мир", wrong1: "Търговски договори с Рим", wrong2: "Съюзи с Египет" },
  { q: "Какво разпределяли владетелите след война?", correct: "Плячката", wrong1: "Земята на гърците", wrong2: "Градските пазари" },
  { q: "Коя била най-многобройната част от тракийското общество?", correct: "Свободните земеделци", wrong1: "Жреците", wrong2: "Търговците" },
  { q: "С какво се занимавали свободните траки?", correct: "Земеделие и скотовъдство", wrong1: "Мореплаване", wrong2: "Само търговия" },
  { q: "В какво били изкусни тракийските майстори?", correct: "Обработката на метали", wrong1: "Изработката на хартия", wrong2: "Стъкларството" },
  { q: "Къде се появили гръцки колонии според урока?", correct: "По крайбрежието на Черно море", wrong1: "В Родопите", wrong2: "В Средна Азия" },
  { q: "Какво изнасяли траките за гръцките колонии?", correct: "Злато, сребро, дървен материал и восък", wrong1: "Коприна", wrong2: "Чай" },
  { q: "Какво внасяли траките от гръцкия свят?", correct: "Красиви керамични съдове, зехтин и вино", wrong1: "Хартия и барут", wrong2: "Кафе и какао" },
  { q: "Къде живеели тракийските владетели?", correct: "В царски резиденции", wrong1: "В палатки", wrong2: "В пещери" },
  { q: "Какво организирали владетелите за своите приближени?", correct: "Пиршества", wrong1: "Състезания с колесници", wrong2: "Търговски пазари" },
  { q: "Какви напитки се споменават в описанието на пиршеството?", correct: "Вино", wrong1: "Бира", wrong2: "Чай" },
  { q: "Как били облечени траките според текста?", correct: "С дълги вълнени наметала", wrong1: "С копринени дрехи", wrong2: "С ленени туники" },
  { q: "С какво се украсявали траките?", correct: "Златни и сребърни украшения", wrong1: "Дървени украшения", wrong2: "Само камъни" },
  { q: "Кой открива Севтополис според надписа?", correct: "Георги Китов", wrong1: "Богдан Филов", wrong2: "Васил Златарски" },
  { q: "Какво показва планът на Севтополис?", correct: "Разположението на улици, дворец и крепостни стени", wrong1: "План на храм в Атина", wrong2: "Карта на Египет" },
  { q: "От кой град е монетата с бог Аполон?", correct: "Аполония", wrong1: "Севтополис", wrong2: "Филипопол" },
  { q: "Кой бог е изобразен на монетата?", correct: "Аполон", wrong1: "Зевс", wrong2: "Арес" },
  { q: "Какво показват откритите златни предмети на траките?", correct: "Високо майсторство в обработката на металите", wrong1: "Липса на занаяти", wrong2: "Че металите били рядкост" }
  { q: "С какво е известен тракийският цар Резос?", correct: "С белите си „бързобеги“ коне и участието в Троянската война", wrong1: "С основаването на Севтополис", wrong2: "С договора с Атина" },
  { q: "Кои са функциите на тракийските владетели (царе/вождове)?", correct: "Командване на войска, сключване на мир, приемане на пратеници, събиране на данъци, дори определяне на земеделие", wrong1: "Само водене на войни", wrong2: "Само търговия с елините" },
  { q: "Най-многобройната група в тракийското общество са:", correct: "зависимите земеделци", wrong1: "робовете", wrong2: "гръцките колонисти" },
  { q: "За какво се използвали робовете при траките?", correct: "В домакинството (не в земеделие и занаяти)", wrong1: "В земеделието и занаятите", wrong2: "В армията" },
  { q: "В какво били майстори тракийските занаятчии?", correct: "В обработката на метали", wrong1: "В производството на керамика", wrong2: "В корабоплаването" },
  { q: "Кога се развила гръцката колонизация по тракийското крайбрежие?", correct: "През VII–VI в. пр. Хр.", wrong1: "През IV в. пр. Хр.", wrong2: "През II в. пр. Хр." },
  { q: "Какво контролирали гръцките колонии по брега?", correct: "Търговията между вътрешността на Тракия и Гърция", wrong1: "Само риболова", wrong2: "Войската на тракийските царе" },
  { q: "Какво изнасяли траките за елините?", correct: "Злато, сребро, зърно, дървесина, восък, роби", wrong1: "Само керамика и вино", wrong2: "Само злато" },
  { q: "Какво внасяли траките от елините?", correct: "Фина керамика, зехтин, скъпи вина", wrong1: "Зърно и дървесина", wrong2: "Роби" },
  { q: "През кой век възникнал тракийският град Севтополис?", correct: "IV в. пр. Хр.", wrong1: "VII в. пр. Хр.", wrong2: "II в. пр. Хр." },
  { q: "Кой древногръцки автор описва тракийско царско пиршество при цар Севт II?", correct: "Ксенофонт", wrong1: "Херодот", wrong2: "Тукидид" },
  { q: "Какво правят благородните при пиршеството у Севт II според Ксенофонт?", correct: "Седят в кръг, на 20 триножни маси има месо и квасен хляб, царят чупи и раздава хляб", wrong1: "Пируват само с вино", wrong2: "Танцуват в двореца" },
  { q: "Какво носели траките за студени зими?", correct: "Кожени шапки от лисича кожа и дълги вълнени плаща", wrong1: "Само вълнени шапки", wrong2: "Кожени обувки само" },
  { q: "Какво носели благородните тракийски жени?", correct: "Изящни накити от сребро и злато", wrong1: "Само кожени дрехи", wrong2: "Гръцки монети като украса" },
  { q: "Къде е открита златната маска от края на V в. пр. Хр.?", correct: "При гр. Шипка (тракийски гроб)", wrong1: "В Севтополис", wrong2: "В Аполония" },
  { q: "При какво е открит и къде е Севтополис днес?", correct: "Открит при строежа на язовир „Копринка“, потопен под водите му", wrong1: "Стои открит при Казанлък", wrong2: "Разкопан при Пловдив" },
  { q: "Коя е елинската колония на мястото на днешен Созопол?", correct: "Аполония", wrong1: "Месембрия", wrong2: "Одесос" },
  { q: "Какво изобразява сребърният съд от Башова могила при Дуванлии?", correct: "Надбягване с колесници", wrong1: "Царско пиршество", wrong2: "Търговия с елините" },
  { q: "Коя група заемала водещо място в тракийското общество?", correct: "Владетелите на отделните племена", wrong1: "Занаятчиите", wrong2: "Търговците" },
  { q: "Каква била основната роля на тракийския владетел?", correct: "Да води войските, да сключва мир и да разпределя плячката", wrong1: "Да ръководи само религиозните обреди", wrong2: "Да събира данъци за гръцките колонии" },
  { q: "Какво определяли царете според традицията?", correct: "Размерите на данъците и кои земи да се заселват", wrong1: "Цените на стоките на пазара", wrong2: "Законите на гръцките полиси" },
  { q: "Коя група подпомагала владетелите в управлението на държавата?", correct: "Знатните и управителите на области", wrong1: "Чуждестранни търговци", wrong2: "Робите" },
  { q: "Кои хора най-често били наемани като войници от тракийските владетели?", correct: "Гръцки наемници", wrong1: "Персийски моряци", wrong2: "Египетски жреци" },
  { q: "Коя била най-многобройната част от тракийското общество?", correct: "Свободните земеделци", wrong1: "Жреците", wrong2: "Благородниците" },
  { q: "С какво се занимавали основно обикновените траки?", correct: "Земеделие, скотовъдство и занаяти", wrong1: "Само морска търговия", wrong2: "Само добив на злато" },
  { q: "Какво показват откритите златни и сребърни предмети от тракийски съкровища?", correct: "Високо развитие на занаятите и металургията", wrong1: "Че траките не са използвали метали", wrong2: "Че металите били внасяни готови" },
  { q: "Кога започва по-активната гръцка колонизация по тракийските земи?", correct: "През VII – VI в. пр. Хр.", wrong1: "През II в. сл. Хр.", wrong2: "През X в. пр. Хр." },
  { q: "Къде се появили гръцките колонии в Тракия?", correct: "По крайбрежието на Черно море и Егейско море", wrong1: "В планините на вътрешността", wrong2: "Само по река Дунав" },
  { q: "Какви стоки изнасяли траките към гръцките колонии?", correct: "Злато, сребро, дървен материал, восък и роби", wrong1: "Коприна и порцелан", wrong2: "Чай и подправки" },
  { q: "Какви предмети внасяли траките от гръцкия свят?", correct: "Керамични съдове, зехтин и вино", wrong1: "Ориз и чай", wrong2: "Хартия и барут" },
  { q: "Какво показва засиленият обмен между траки и елини?", correct: "Тесни икономически и културни връзки", wrong1: "Пълна изолация на траките", wrong2: "Изчезване на тракийската култура" },
  { q: "Как са изглеждали домовете на богатите траки?", correct: "Големи къщи с дворове и помещения за гости", wrong1: "Само малки колиби без дворове", wrong2: "Жилища изцяло под земята" },
  { q: "Какво представлявали пиршествата на владетелите?", correct: "Големи празненства с гости, музика и богата храна", wrong1: "Военни съвети без храна", wrong2: "Религиозни пости" },
  { q: "Какви дрехи носели обикновено траките?", correct: "Дълги вълнени наметала и кожени обувки", wrong1: "Копринени туники като в Китай", wrong2: "Само кожени доспехи" },
  { q: "С какво украсявали себе си богатите траки?", correct: "Златни и сребърни накити", wrong1: "Дървени украшения", wrong2: "Камъни без обработка" },
  { q: "Какво показват тракийските гробници и съкровища?", correct: "Богатството и социалното неравенство в обществото", wrong1: "Че всички траки били бедни", wrong2: "Че нямало владетели" },
  { q: "Каква била ролята на градове като Севтополис?", correct: "Центрове на управление и търговия", wrong1: "Само военни лагери", wrong2: "Само религиозни светилища" },
  { q: "Какво показват откритите монети от тракийските градове?", correct: "Развитие на търговията и градския живот", wrong1: "Липса на икономика", wrong2: "Че траките не използвали пари" },
  { q: "Какво било отношението между тракийските владетели и гръцките колонии?", correct: "Имали търговски и политически контакти", wrong1: "Никога не общували", wrong2: "Колониите управлявали траките" },
  { q: "Кой основно живеел извън градовете в тракийските земи?", correct: "Земеделците и скотовъдците", wrong1: "Жреците", wrong2: "Гръцките търговци" },
  { q: "Какво показва ежедневният живот на траките според археологическите находки?", correct: "Смесване на местни традиции с гръцко влияние", wrong1: "Пълно изчезване на местните традиции", wrong2: "Отказ от всякакви външни влияния" }
];

/** Unit 6c – Once a week: frequency, personality quiz, like/dislike + -ing, surprise & comment */
const ENGLISH_UNIT_6C_QUESTIONS = [
  // Frequency phrases (quiz options)
  { q: "Which phrase means 'one time in seven days'?", correct: "once a week", wrong1: "once a month", wrong2: "every week" },
  { q: "Which phrase means 'two times in a month'?", correct: "twice a month", wrong1: "twice a week", wrong2: "two months" },
  { q: "Where do we usually put 'every day' in: I play computer games ___?", correct: "at the end: I play computer games every day.", wrong1: "after the verb: I every day play computer games.", wrong2: "at the start: Every day I play computer games." },
  { q: "Complete: How often do you ___ the net?", correct: "surf", wrong1: "surfs", wrong2: "surfing" },
  { q: "Complete: How often do you ___ your English vocabulary?", correct: "revise", wrong1: "revises", wrong2: "revising" },
  { q: "Complete: How often do you ___ out with your friends?", correct: "hang", wrong1: "hangs", wrong2: "hanging" },
  // Like / love / hate + -ing (grammar)
  { q: "I like ___ computer games.", correct: "playing", wrong1: "play", wrong2: "to play" },
  { q: "She loves ___ books.", correct: "reading", wrong1: "read", wrong2: "reads" },
  { q: "I hate ___ English vocabulary.", correct: "revising", wrong1: "revise", wrong2: "revises" },
  { q: "They don't like ___ a sport.", correct: "playing", wrong1: "play", wrong2: "plays" },
  { q: "We can say: I like ___ (noun).", correct: "football", wrong1: "playing football only", wrong2: "to football" },
  // Express surprise and comment
  { q: "Which expression do we use to show surprise?", correct: "Really?", wrong1: "I think so.", wrong2: "Maybe." },
  { q: "Which expression shows positive comment?", correct: "That's great. Well done!", wrong1: "That's awful.", wrong2: "That's not very good." },
  { q: "Which expression shows negative comment?", correct: "That's not very good.", wrong1: "Wow!", wrong2: "That's interesting." },
  { q: "When someone says 'Every day', you can repeat and react with:", correct: "Every day? Wow! That's great.", wrong1: "Every day. So what?", wrong2: "I never." },
  { q: "Which is a way to express surprise?", correct: "You're joking!", wrong1: "That's good.", wrong2: "I don't know." },
  // Activities from the quiz and exercises
  { q: "How often do you go jogging? Choose a frequency phrase.", correct: "three times a week", wrong1: "three weeks", wrong2: "three time a week" },
  { q: "Complete the sentence: Sandra ___ her mobile every evening.", correct: "uses", wrong1: "use", wrong2: "using" },
  { q: "Which sentence is correct?", correct: "I play football twice a week.", wrong1: "I twice a week play football.", wrong2: "I play twice a week football." },
  { q: "How often do you ___ to a party?", correct: "go", wrong1: "goes", wrong2: "going" },
  { q: "How often do you ___ an email?", correct: "write", wrong1: "writes", wrong2: "writing" },
  { q: "How often do you ___ your bike?", correct: "ride", wrong1: "rides", wrong2: "riding" },
  { q: "Which activity fits 'PARTY PERSON'?", correct: "have a barbecue", wrong1: "revise vocabulary", wrong2: "surf the net" },
  { q: "Which activity fits 'COMPUTER KID'?", correct: "chat to friends online", wrong1: "go jogging", wrong2: "have a party" },
  { q: "Which activity fits 'SERIOUS STUDENT'?", correct: "get 100% in a test", wrong1: "ride your bike", wrong2: "hang out with friends" },
  { q: "Which activity fits 'SPORTS STAR'?", correct: "play a sport", wrong1: "write an email", wrong2: "watch a DVD in English" },
  { q: "We ask about frequency with:", correct: "How often do you...?", wrong1: "How many do you...?", wrong2: "How long do you...?" },
  { q: "From the list: get up very late, tidy your bedroom, go to bed early – we use these with:", correct: "How often do you...?", wrong1: "How much...?", wrong2: "Where do you...?" },
];

/**
 * Round up 3 & 6b/6c – въпроси с избор И с написване на отговор.
 * type: 'text' = потребителят пише отговор; acceptedAnswers = приема се всеки от списъка (без значение малки/големи букви).
 */
const ENGLISH_ROUNDUP_6_WRITE_IN_QUESTIONS = [
  // Round up – Complete the chat (Exercise 1)
  { type: 'text', q: "Where ___ ? (Nero asks DJ Bob)", correct: "do you come from", acceptedAnswers: ["do you come from"] },
  { type: 'text', q: "So, do ___ French?", correct: "you speak", acceptedAnswers: ["you speak"] },
  { type: 'text', q: "My parents ___ English at home, just French.", correct: "don't speak", acceptedAnswers: ["don't speak", "dont speak"] },
  { type: 'text', q: "At school, we ___ in French!", correct: "study", acceptedAnswers: ["study"] },
  { type: 'text', q: "___ come from Argentina? (Do your parents)", correct: "Do your parents", acceptedAnswers: ["Do your parents", "Do your parents "] },
  { type: 'text', q: "Ha, ha, ___. No. (very funny)", correct: "very funny", acceptedAnswers: ["very funny"] },
  { type: 'text', q: "I ___ in Brazil. I live in Argentina!", correct: "don't live", acceptedAnswers: ["don't live", "dont live"] },
  { type: 'text', q: "They ___ in a big hospital here in Buenos Aires.", correct: "work", acceptedAnswers: ["work"] },
  { type: 'text', q: "They're ___. (parents' job)", correct: "doctors", acceptedAnswers: ["doctors"] },
  // Round up – Mike's survey (Exercise 2). Напиши изречението.
  { type: 'text', q: "Mike: He goes to football matches ___. (2 times, month)", correct: "twice a month", acceptedAnswers: ["twice a month", "twice a Month"] },
  { type: 'text', q: "Mike: He ___ three times a week. (take exercise)", correct: "takes exercise", acceptedAnswers: ["takes exercise", "takes exercise three times a week"] },
  { type: 'text', q: "Mike: He visits his grandparents ___. (1 time, month)", correct: "once a month", acceptedAnswers: ["once a month"] },
  { type: 'text', q: "Mike: He eats fast food ___. (2 times, week)", correct: "twice a week", acceptedAnswers: ["twice a week"] },
  { type: 'text', q: "Mike: He eats fruit ___. (3 times, day)", correct: "three times a day", acceptedAnswers: ["three times a day", "3 times a day"] },
  { type: 'text', q: "Mike: He does homework ___. (every, day)", correct: "every day", acceptedAnswers: ["every day"] },
  // 6c – Complete the phrases (frequency)
  { type: 'text', q: "Tuesday / Wednesday / Thursday = ___", correct: "three days a week", acceptedAnswers: ["three days a week", "3 days a week"] },
  { type: 'text', q: "15th May, 30th May, 15th June, 30th June... = ___", correct: "twice a month", acceptedAnswers: ["twice a month", "2 times a month"] },
  { type: 'text', q: "Mon / Tue / Wed / Thu / Fri / Sat / Sun = every day (or ___ )", correct: "seven days a week", acceptedAnswers: ["seven days a week", "every day", "7 days a week"] },
  { type: 'text', q: "10.00, 10.20, 10.40, 11.00... = ___", correct: "every twenty minutes", acceptedAnswers: ["every twenty minutes", "every 20 minutes", "three times an hour"] },
  // 6c – Sort the words: He doesn't like practising the guitar.
  { type: 'text', q: "Sort the words: doesn't / He / the / guitar / like / practising", correct: "He doesn't like practising the guitar.", acceptedAnswers: ["He doesn't like practising the guitar.", "He doesnt like practising the guitar."] },
  { type: 'text', q: "Sort the words: watching / love / DVDs / We", correct: "We love watching DVDs.", acceptedAnswers: ["We love watching DVDs.", "We love watching DVDs"] },
  { type: 'text', q: "Sort the words: like / Does / she / concerts / to / going", correct: "Does she like going to concerts?", acceptedAnswers: ["Does she like going to concerts?", "Does she like going to concerts"] },
  { type: 'text', q: "Sort the words: brother / hates / My / tennis / playing", correct: "My brother hates playing tennis.", acceptedAnswers: ["My brother hates playing tennis.", "My brother hates playing tennis"] },
  // 6b – Put words in order (adverbs of frequency)
  { type: 'text', q: "Put in order: brush / in / my / I / the / always / teeth / morning.", correct: "I always brush my teeth in the morning.", acceptedAnswers: ["I always brush my teeth in the morning.", "I always brush my teeth in the morning"] },
  { type: 'text', q: "Put in order: your / always / eat / breakfast? / sister / Does", correct: "Does your sister always eat breakfast?", acceptedAnswers: ["Does your sister always eat breakfast?", "Does your sister always eat breakfast"] },
  { type: 'text', q: "Put in order: parents / on / work / Sunday. / never / My / go / to", correct: "My parents never go to work on Sunday.", acceptedAnswers: ["My parents never go to work on Sunday.", "My parents never go to work on Sunday"] },
  { type: 'text', q: "Put in order: never / friends / the / evening. / in / phone / I / my", correct: "I never phone my friends in the evening.", acceptedAnswers: ["I never phone my friends in the evening.", "I never phone my friends in the evening"] },
  // Page 32 – Put words in order
  { type: 'text', q: "Put in order: always / bed / go / I / early. / to", correct: "I always go to bed early.", acceptedAnswers: ["I always go to bed early.", "I always go to bed early"] },
  { type: 'text', q: "Put in order: go / We / holiday / twice / on / a / year.", correct: "We go on holiday twice a year.", acceptedAnswers: ["We go on holiday twice a year.", "We go on holiday twice a year"] },
  { type: 'text', q: "Put in order: goes / Sam / swimming / once / a / week.", correct: "Sam goes swimming once a week.", acceptedAnswers: ["Sam goes swimming once a week.", "Sam goes swimming once a week"] },
  { type: 'text', q: "Put in order: sister / My / a / has / shower / twice / day. / a", correct: "My sister has a shower twice a day.", acceptedAnswers: ["My sister has a shower twice a day.", "My sister has a shower twice a day"] },
  // Page 32 – Complete the questions (How often...?)
  { type: 'text', q: "How often ___ to work? (My parents go to work five days a week.)", correct: "do your parents go", acceptedAnswers: ["do your parents go", "do your parents go to work"] },
  { type: 'text', q: "How often ___ English? (I study English twice a week.)", correct: "do you study", acceptedAnswers: ["do you study", "do you study English"] },
  { type: 'text', q: "How often ___ your grandparents? (I visit my grandparents three times a month.)", correct: "do you visit", acceptedAnswers: ["do you visit", "do you visit your grandparents"] },
  { type: 'text', q: "How often ___ TV? (I watch TV every night.)", correct: "do you watch", acceptedAnswers: ["do you watch", "do you watch TV"] },
  // Page 32 – Complete the dialogue (like + -ing)
  { type: 'text', q: "Rob: Yes, I do. I ___ (love/go) to the shopping centre.", correct: "love going", acceptedAnswers: ["love going", "love go"] },
  { type: 'text', q: "Steve: ___ (you/like/surf) the net? Rob: No, I don't.", correct: "Do you like surfing", acceptedAnswers: ["Do you like surfing", "Do you like surfing the net"] },
  { type: 'text', q: "Rob: I ___ (not/like/use) computers.", correct: "don't like using", acceptedAnswers: ["don't like using", "dont like using"] },
  // Donald's week (6b) – избор или кратък текст
  { q: "Donald plays computer games in the evening every day. So he ___ plays computer games in the evening.", correct: "always", wrong1: "sometimes", wrong2: "never" },
  { q: "Donald is late for school on Mon, Tue, Thu but not Wed, Fri. So he is ___ late for school.", correct: "sometimes", wrong1: "always", wrong2: "never" },
];

/**
 * Grammar Summary & 6c/7a – попълване и тестови (a, b, c) по учебника.
 */
const ENGLISH_GRAMMAR_6ABC_QUESTIONS = [
  // —— Grammar Summary: Possessive of (попълване) ——
  { type: 'text', q: "Write your name at the ___ (top/the page), please.", correct: "top of the page", acceptedAnswers: ["top of the page", "the top of the page"] },
  { type: 'text', q: "Sofia is the ___ (capital/Bulgaria).", correct: "capital of Bulgaria", acceptedAnswers: ["capital of Bulgaria"] },
  { type: 'text', q: "This is the ___ (end/the story).", correct: "end of the story", acceptedAnswers: ["end of the story", "the end of the story"] },
  // —— Object pronouns (Lesson 5c): избор a,b,c ——
  { q: "I like football, but Adam doesn't like ___.", correct: "it", wrong1: "him", wrong2: "them" },
  { q: "Are they your new friends? Can I meet ___?", correct: "them", wrong1: "they", wrong2: "us" },
  { q: "My sister loves that song. Play ___ again.", correct: "it", wrong1: "her", wrong2: "she" },
  { q: "Where is Tom? I need to talk to ___.", correct: "him", wrong1: "he", wrong2: "his" },
  { q: "Mum is waiting. Let's go with ___.", correct: "her", wrong1: "she", wrong2: "us" },
  { q: "The teacher asked ___ a question. (I)", correct: "me", wrong1: "I", wrong2: "my" },
  // —— Present simple + at (попълване) ——
  { type: 'text', q: "What time does the concert start? It ___ seven o'clock.", correct: "starts at", acceptedAnswers: ["starts at", "starts at seven o'clock"] },
  { type: 'text', q: "And what time does it ___? (finish)", correct: "finish", acceptedAnswers: ["finish", "finish at"] },
  { q: "The museum opens ___ nine o'clock.", correct: "at", wrong1: "in", wrong2: "on" },
  { q: "We have English ___ noon.", correct: "at", wrong1: "in", wrong2: "on" },
  // —— Adverbs of frequency (6b): попълване и избор ——
  { type: 'text', q: "I ___ go to bed at nine o'clock. (never) – напишете изречението.", correct: "I never go to bed at nine o'clock.", acceptedAnswers: ["I never go to bed at nine o'clock.", "I never go to bed at nine o'clock"] },
  { q: "Where do we put 'always' in: He is late? (He ___ is late.)", correct: "He is always late.", wrong1: "He always is late.", wrong2: "Always he is late." },
  { q: "My sister ___ has breakfast at home.", correct: "usually", wrong1: "never", wrong2: "sometimes" },
  { q: "We ___ go to school by bus.", correct: "often", wrong1: "never", wrong2: "hardly ever" },
  // —— Lesson 6c: How often + adverbial (попълване) ——
  { type: 'text', q: "How often do you brush your teeth? (twice a day) – кратък отговор.", correct: "Twice a day.", acceptedAnswers: ["Twice a day.", "Twice a day", "I brush my teeth twice a day."] },
  { type: 'text', q: "Do you like surfing the net? – напишете въпроса с you/like/surf.", correct: "Do you like surfing the net?", acceptedAnswers: ["Do you like surfing the net?", "Do you like surfing the net"] },
  { type: 'text', q: "I love ___ to friends on the phone. (chat)", correct: "chatting", acceptedAnswers: ["chatting", "chat to friends"] },
  { type: 'text', q: "I ___ like cooking. (not)", correct: "don't like", acceptedAnswers: ["don't like", "dont like", "do not like"] },
  { type: 'text', q: "She ___ playing the piano. (hate)", correct: "hates", acceptedAnswers: ["hates", "hate"] },
  // —— Lesson 7a: Present continuous – избор a,b,c (по картинките) ——
  { q: "What is she eating? (picture: apple) a) an apple  b) an orange  c) a banana", correct: "an apple", wrong1: "an orange", wrong2: "a banana" },
  { q: "What is he playing? (picture: football) a) tennis  b) football  c) basketball", correct: "football", wrong1: "tennis", wrong2: "basketball" },
  { q: "What is she reading? (picture: magazine) a) a book  b) a magazine  c) a newspaper", correct: "a magazine", wrong1: "a book", wrong2: "a newspaper" },
  { q: "What is he listening to? (picture: MP3) a) the radio  b) an MP3 player  c) a podcast", correct: "an MP3 player", wrong1: "the radio", wrong2: "a podcast" },
  { q: "What is your dad cooking? (picture: chips) a) a cake  b) chips  c) pizza", correct: "chips", wrong1: "a cake", wrong2: "pizza" },
  { q: "What's the weather like? (picture: snow) a) It's raining  b) It's snowing  c) It's sunny", correct: "It's snowing", wrong1: "It's raining", wrong2: "It's sunny" },
  // —— Cinema timetable (Grammar Summary) – избор ——
  { q: "The film 'Not Fair!' has two showings. One is at 18.45. The other is at:", correct: "22.15", wrong1: "19.35", wrong2: "17.20" },
  { q: "Which film has a showing at 19.35?", correct: "Men On Mars", wrong1: "Three In A Boat", wrong2: "The Rock Star" },
  { q: "The Rock Star – second showing is at:", correct: "22.15", wrong1: "18.45", wrong2: "19.35" },
];

/**
 * 6a – Present simple с фиксирани часове, предлог at, имейл със разписания, Marco's routine.
 * По картинките: Grammar (fixed times + at) и Workbook 6a.
 */
const ENGLISH_6A_FIXED_TIMES_QUESTIONS = [
  // —— Present simple + at, граматика (попълване и избор) ——
  { type: 'text', q: "The museum ___ at nine o'clock. (open)", correct: "opens", acceptedAnswers: ["opens", "opens at nine o'clock"] },
  { type: 'text', q: "The shop ___ at 6 p.m. (close)", correct: "closes", acceptedAnswers: ["closes", "closes at 6 p.m."] },
  { type: 'text', q: "The bus ___ at 11.40 a.m. (arrive)", correct: "arrives", acceptedAnswers: ["arrives", "arrives at 11.40 a.m."] },
  { type: 'text', q: "The match ___ at 4.45 p.m. (finish)", correct: "finishes", acceptedAnswers: ["finishes", "finishes at 4.45 p.m."] },
  { q: "With times we use the preposition:", correct: "at", wrong1: "on", wrong2: "in" },
  { q: "Correct form: The bus ___ at 4 p.m.", correct: "leaves", wrong1: "leave", wrong2: "leaving" },
  { q: "Correct question: ___ the shops open?", correct: "What time do", wrong1: "What time the", wrong2: "What time does the" },
  { q: "School starts ___ 9 a.m.", correct: "at", wrong1: "on", wrong2: "in" },
  // —— Email: European concerts trip (разписания) – избор a,b,c ——
  { q: "Banks ___ at half past nine. (schedule: National Bank 09.30–15.30)", correct: "open", wrong1: "start", wrong2: "leave" },
  { q: "The plane ___ London at twenty past ten.", correct: "leaves", wrong1: "starts", wrong2: "opens" },
  { q: "The plane ___ in Amsterdam at ten past eleven.", correct: "arrives", wrong1: "finishes", wrong2: "closes" },
  { q: "The doors ___ at six. (Concert: Doors open 6 p.m.)", correct: "open", wrong1: "start", wrong2: "arrive" },
  { q: "The concert ___ at quarter past seven.", correct: "starts", wrong1: "opens", wrong2: "arrives" },
  { q: "The concert ___ at ten thirty-five.", correct: "finishes", wrong1: "closes", wrong2: "leaves" },
  { q: "The train to Berlin ___ at five to eleven. (Amsterdam 22.55)", correct: "leaves", wrong1: "opens", wrong2: "starts" },
  { q: "We ___ in Berlin at twenty to six in the morning. (Berlin 05.40)", correct: "arrive", wrong1: "finish", wrong2: "close" },
  // —— Workbook 6a: Complete the sentences (попълване) ——
  { type: 'text', q: "This shop ___ (open) at half past eight.", correct: "opens", acceptedAnswers: ["opens"] },
  { type: 'text', q: "Lessons at our school ___ (start) at eight o'clock.", correct: "start", acceptedAnswers: ["start"] },
  { type: 'text', q: "My last lesson ___ (finish) at half past three.", correct: "finishes", acceptedAnswers: ["finishes"] },
  { type: 'text', q: "My father's office ___ (close) at six p.m.", correct: "closes", acceptedAnswers: ["closes"] },
  { type: 'text', q: "Your train ___ (leave) at ten past nine.", correct: "leaves", acceptedAnswers: ["leaves"] },
  { type: 'text', q: "Trains from London ___ (arrive) here at five past three.", correct: "arrive", acceptedAnswers: ["arrive"] },
  // —— Write questions and answers (попълване) ——
  { type: 'text', q: "What time does the English class start? (5.00) – кратък отговор.", correct: "It starts at five o'clock.", acceptedAnswers: ["It starts at five o'clock.", "It starts at 5.00.", "At five o'clock."] },
  { type: 'text', q: "What time does the concert finish? (9.45) – отговор с It.", correct: "It finishes at 9.45.", acceptedAnswers: ["It finishes at 9.45.", "It finishes at nine forty-five."] },
  { type: 'text', q: "What time does the film start? (6.00) – въпрос с does.", correct: "What time does the film start?", acceptedAnswers: ["What time does the film start?", "What time does the film start"] },
  // —— Marco's daily routine (chart) – избор и попълване ——
  { q: "What time does Marco get up? (chart)", correct: "7.15", wrong1: "7.35", wrong2: "8.15" },
  { q: "What time does Marco have breakfast?", correct: "7.35", wrong1: "7.15", wrong2: "8.15" },
  { q: "What time does Marco go to school?", correct: "8.15", wrong1: "7.35", wrong2: "16.30" },
  { q: "Marco has lunch from 12.30 to 13.30. What does he eat? (chart)", correct: "Pizza and fruit", wrong1: "Eggs", wrong2: "Nothing" },
  { q: "What does Marco never do? (chart)", correct: "Watch TV", wrong1: "Do homework", wrong2: "Play computer games" },
  { q: "When does Marco play computer games? (chart)", correct: "Always, after dinner", wrong1: "Never", wrong2: "In the morning" },
  { type: 'text', q: "Marco goes to bed at ___. (chart: 22.30)", correct: "22.30", acceptedAnswers: ["22.30", "10.30 p.m.", "half past ten"] },
  { type: 'text', q: "Marco has breakfast at 7.35. He eats ___ for breakfast. (chart: Eggs)", correct: "eggs", acceptedAnswers: ["eggs", "Eggs"] },
];

import {
  BULGARSKI_EZIK_LITERATURA_V_KLAS_2008_QUESTIONS,
  BULGARSKI_EZIK_LITERATURA_V_KLAS_2009_QUESTIONS,
  BULGARSKI_EZIK_LITERATURA_V_KLAS_QUESTIONS,
  BULGARSKI_GLAGOL_MINALO_QUESTIONS,
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
  '5|priroda|vozduh': {
    title: 'Човек и природа – Въздухът',
    slug: 'vozduh',
    questions: PRIRODA_VOZDUH_QUESTIONS,
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
 * @param {string} classNum - клас (напр. "5")
 * @param {string} subject - предмет (напр. "geografia")
 * @param {string} testSlug - slug на теста (напр. "geografia-ikonomika-test")
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
