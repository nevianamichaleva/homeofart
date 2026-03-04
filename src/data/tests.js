/**
 * Дефиниции на тестове. Ключ: "class|subject|testSlug"
 *
 * Как да добавиш друг тест:
 * 1. Създай масив с въпроси (всеки обект: { q: "въпрос?", correct: "верен отговор", wrong1: "...", wrong2: "..." }).
 * 2. В обекта TESTS добави нов запис с ключ "клас|предмет|slug-на-теста".
 *    Пример: за 6 клас, математика, тест "algebra": ключът е '6|matematika|algebra'.
 * 3. URL-ът ще бъде: /testove/6/matematika/algebra
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

const TESTS = {
  '5|geografia|geografia-ikonomika-test': {
    title: 'География и стопанство',
    slug: 'geografia-ikonomika-test',
    questions: GEOGRAFIA_IKONOMIKA_QUESTIONS,
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
