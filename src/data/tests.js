/**
 * Дефиниции на тестове. Ключ: "class|subject|testSlug"
 *
 * Как да добавиш друг тест:
 * 1. Въпроси с избор от 3: { q: "въпрос?", correct: "...", wrong1: "...", wrong2: "..." }.
 * 2. Въпроси с написване: { type: "text", q: "въпрос?", correct: "отговор", acceptedAnswers?: ["вариант1", "вариант2"] }.
 * 3. В TESTS добави запис с ключ "клас|предмет|slug". URL: /testove/клас/предмет/slug
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
  '5|istoriya|drevna-trakiya': {
    title: 'Древна Тракия',
    slug: 'drevna-trakiya',
    questions: ISTORIYA_DREVNA_TRAKIYA_QUESTIONS,
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
