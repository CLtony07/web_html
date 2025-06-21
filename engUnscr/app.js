// Application state
class UnscrambleApp {
    constructor() {
        this.problems = [
            {
                "id": 1,
                "english": "Thus, it will become much more difficult for talented players growing up in rural areas and/or in poor families to learn to play the sport at a professional level.",
                "korean": "따라서 시골 지역과/이나 가난한 가정에서 성장하는 재능 있는 선수들이 프로 수준으로 그 스포츠를 하는 것을 배우기가 훨씬 더 어려워질 것이다.",
                "words": ["Thus,", "it", "will", "become", "much", "more", "difficult", "for", "talented", "players", "growing", "up", "in", "rural", "areas", "and/or", "in", "poor", "families", "to", "learn", "to", "play", "the", "sport", "at", "a", "professional", "level."]
            },
            {
                "id": 2,
                "english": "Moreover, young players learning the sport will be forced to do so in indoor venues, which are much more expensive and harder to access than traditional outdoor play.",
                "korean": "게다가 그 스포츠를 배우는 어린 선수들은 실내 경기장에서 그렇게 해야 할 것인데 실내 경기장은 기존의 야외 경기보다 훨씬 더 비싸고, 접근하기가 더 어렵다.",
                "words": ["Moreover,", "young", "players", "learning", "the", "sport", "will", "be", "forced", "to", "do", "so", "in", "indoor", "venues,", "which", "are", "much", "more", "expensive", "and", "harder", "to", "access", "than", "traditional", "outdoor", "play."]
            },
            {
                "id": 3,
                "english": "But social forces, such as society's tendency to define older persons as a national burden rather than a national treasure, play an important role, as well.",
                "korean": "그러나 노인을 국가의 보물이라기보다는 국가의 짐으로 정의하려는 사회의 풍조와 같은 사회적 영향력도 중요한 역할을 한다.",
                "words": ["But", "social", "forces,", "such", "as", "society's", "tendency", "to", "define", "older", "persons", "as", "a", "national", "burden", "rather", "than", "a", "national", "treasure,", "play", "an", "important", "role,", "as", "well."]
            },
            {
                "id": 4,
                "english": "The bottom line is that American culture is youth oriented, which makes older people feel bad about their age.",
                "korean": "요점은 미국 문화가 젊음을 지향하고, 이는 노인으로 하여금 자신의 나이에 대해 속상하게 만든다는 것이다.",
                "words": ["The", "bottom", "line", "is", "that", "American", "culture", "is", "youth", "oriented,", "which", "makes", "older", "people", "feel", "bad", "about", "their", "age."]
            },
            {
                "id": 5,
                "english": "One important way in which our culture enhances our ability to survive and thrive in the world is by passing along the tools it has created to make our daily living more effective and efficient.",
                "korean": "우리 문화가 세상에서 생존하고 번성하는 우리의 능력을 향상하는 한 가지 중요한 방법은 일상생활을 더 효과적이고 효율적으로 만들기 위해 그것이 만들어 온 도구를 전수하는 것이다.",
                "words": ["One", "important", "way", "in", "which", "our", "culture", "enhances", "our", "ability", "to", "survive", "and", "thrive", "in", "the", "world", "is", "by", "passing", "along", "the", "tools", "it", "has", "created", "to", "make", "our", "daily", "living", "more", "effective", "and", "efficient."]
            },
            {
                "id": 6,
                "english": "our system of numbers allows us to perform precise calculations related to building construction, engine design, and cooking.",
                "korean": "우리의 ‘숫자 체계’는 우리가 건물 건축, 엔진 설계, 요리와 관련된 정확한 계산을 수행할 수 있도록 한다.",
                "words": ["our", "system", "of", "numbers", "allows", "us", "to", "perform", "precise", "calculations", "related", "to", "building", "construction,", "engine", "design,", "and", "cooking."]
            },
            {
                "id": 7,
                "english": "By the way, computers are cognitive tools as well as physical ones because they help us think in increasingly sophisticated ways.",
                "korean": "그런데 ‘컴퓨터’는 우리가 점점 더 정교한 방식으로 사고할 수 있도록 도와주기 때문에, 실체가 있는 도구일 뿐만 아니라 인지적 도구이기도 하다.",
                "words": ["By", "the", "way,", "computers", "are", "cognitive", "tools", "as", "well", "as", "physical", "ones", "because", "they", "help", "us", "think", "in", "increasingly", "sophisticated", "ways."]
            },
            {
                "id": 8,
                "english": "some animal producers are adding other labels to their foods, such as \"open pasture\" or \"pasture-raised,\" to indicate that animals are raised in a pasture rather than fattened in a confined facility.",
                "korean": "일부 동물 생산자들은 동물이 좁고 갇힌 시설에서 살찌워지지 않고 목초지에서 사육된다는 것을 나타내기 위해 식품에 ‘개방 목초지’나 ‘목초지 사육’과 같은 다른 라벨을 추가하고 있다.",
                "words": ["some", "animal", "producers", "are", "adding", "other", "labels", "to", "their", "foods,", "such", "as", "\"open", "pasture\"", "or", "\"pasture-raised,\"", "to", "indicate", "that", "animals", "are", "raised", "in", "a", "pasture", "rather", "than", "fattened", "in", "a", "confined", "facility."]
            },
            {
                "id": 9,
                "english": "critics say the government's standards are not strict enough to ensure that farm animals are raised, transported, and slaughtered in a humane way.",
                "korean": "비평가들은 정부의 기준이 농장 동물이 잔혹하지 않은 방식으로 사육되고, 운송되고, 도축되는 것을 보장하기에 충분히 엄격하지 않다고 말한다.",
                "words": ["critics", "say", "the", "government's", "standards", "are", "not", "strict", "enough", "to", "ensure", "that", "farm", "animals", "are", "raised,", "transported,", "and", "slaughtered", "in", "a", "humane", "way."]
            },
            {
                "id": 10,
                "english": "If you had been walking around Philadelphia in the summer of 1787 and had come across Independence Hall, you would have encountered something strange.",
                "korean": "만약 여러분이 1787년 여름에 필라델피아를 돌아다니다가 독립 기념관을 우연히 발견했다면, 여러분은 이상한 무언가와 마주쳤을 것이다.",
                "words": ["If", "you", "had", "been", "walking", "around", "Philadelphia", "in", "the", "summer", "of", "1787", "and", "had", "come", "across", "Independence", "Hall,", "you", "would", "have", "encountered", "something", "strange."]
            },
            {
                "id": 11,
                "english": "Still, there was an underlying recognition of the need for a quiet container in which to do difficult thinking as a group.",
                "korean": "그럼에도 불구하고 집단으로 난해한 사고를 할 조용한 공간의 필요에 대한 근본적인 인식이 있었다.",
                "words": ["Still,", "there", "was", "an", "underlying", "recognition", "of", "the", "need", "for", "a", "quiet", "container", "in", "which", "to", "do", "difficult", "thinking", "as", "a", "group."]
            },
            {
                "id": 12,
                "english": "Encoding is the term that is most often used to describe the way in which information is put into memory.",
                "korean": "인코딩은 정보가 기억으로 입력되는 방식을 설명하는 데 가장 자주 사용되는 용어이다.",
                "words": ["Encoding", "is", "the", "term", "that", "is", "most", "often", "used", "to", "describe", "the", "way", "in", "which", "information", "is", "put", "into", "memory."]
            },
            {
                "id": 13,
                "english": "Each squash you see is given some low level of processing so that what is encoded into memory is the experience of seeing many squashes.",
                "korean": "여러분이 보는 각각의 호박은 어느 정도 낮은 수준의 처리를 거치므로, 기억에 인코딩되는 것은 많은 호박을 보는 경험이다.",
                "words": ["Each", "squash", "you", "see", "is", "given", "some", "low", "level", "of", "processing", "so", "that", "what", "is", "encoded", "into", "memory", "is", "the", "experience", "of", "seeing", "many", "squashes."]
            },
            {
                "id": 14,
                "english": "But the cultural animal tunes in to his society, and as society's standards change from year to year or century to century, each individual learns to want whatever currently signifies the good life.",
                "korean": "그러나 문화적 동물은 자신의 사회에 주의를 기울이고, 사회의 기준이 해마다 또는 세기마다 변함에 따라, 각 개인은 현재 행복한 삶을 의미하는 것이 무엇이든 그것을 원하는 법을 배운다.",
                "words": ["But", "the", "cultural", "animal", "tunes", "in", "to", "his", "society,", "and", "as", "society's", "standards", "change", "from", "year", "to", "year", "or", "century", "to", "century,", "each", "individual", "learns", "to", "want", "whatever", "currently", "signifies", "the", "good", "life."]
            },
            {
                "id": 15,
                "english": "lf nature had programmed us merely to find food, shelter, and someone with whom to live, people would have had little urge to find ways to make life better once those basic natural goals were satisfied.",
                "korean": "만약 자연이 우리를 단순히 식량, 주거지, 함께 살 사람을 찾도록 만들었다면, 사람들은 그러한 기본적인 자연적 목표가 일단 충족되면 삶을 더 좋게 만들 방법을 찾으려는 욕구가 거의 없었을 것이다.",
                "words": ["lf", "nature", "had", "programmed", "us", "merely", "to", "find", "food,", "shelter,", "and", "someone", "with", "whom", "to", "live,", "people", "would", "have", "had", "little", "urge", "to", "find", "ways", "to", "make", "life", "better", "once", "those", "basic", "natural", "goals", "were", "satisfied."]
            },
            {
                "id": 16,
                "english": "Thus it is good to have a secondary, detailed processing system that an correct these mistakes.",
                "korean": "따라서 이러한 오류를 수정할 수 있는 이차적이고, 세부적인 처리 시스템을 갖추는 것이 좋다.",
                "words": ["Thus", "it", "is", "good", "to", "have", "a", "secondary,", "detailed", "processing", "system", "that", "an", "correct", "these", "mistakes."]
            },
            {
                "id": 17,
                "english": "Joseph LeDoux, an American neuroscientist, suggests that humans have a nonconscious \"danger detector\" that sizes up incoming information before it reaches conscious awareness.",
                "korean": "미국의 신경 과학자인 Joseph LeDoux는 인간은 들어오는 정보가 의식적인 인식에 도달하기 전에 그것을 평가하는 무의식적인 ‘위험 감지기’를 가지고 있다고 말한다.",
                "words": ["Joseph", "LeDoux,", "an", "American", "neuroscientist,", "suggests", "that", "humans", "have", "a", "nonconscious", "\"danger", "detector\"", "that", "sizes", "up", "incoming", "information", "before", "it", "reaches", "conscious", "awareness."]
            },
            {
                "id": 18,
                "english": "On the contrary, they are significantly more likely to recognize where their knowledge ends and where it begins.",
                "korean": "오히려, 그들은 자신의 지식이 어디서 끝나고 어디서 시작되는지를 알아낼 가능성이 훨씬 더 크다.",
                "words": ["On", "the", "contrary,", "they", "are", "significantly", "more", "likely", "to", "recognize", "where", "their", "knowledge", "ends", "and", "where", "it", "begins."]
            },
            {
                "id": 19,
                "english": "It encourages us to improve ourselves, teaches us how things function, hints at what's possible, and, most importantly, allows us to tune out and focus on what counts.",
                "korean": "그것은 우리가 자신을 발전시키도록 독려하고, 우리에게 일이 어떻게 돌아가는지 알려 주며, 무엇이 가능한지를 암시하고, 가장 중요하게는 우리가 주변 상황에 신경 쓰지 않고 중요한 것에 집중할 수 있도록 해 준다.",
                "words": ["It", "encourages", "us", "to", "improve", "ourselves,", "teaches", "us", "how", "things", "function,", "hints", "at", "what's", "possible,", "and,", "most", "importantly,", "allows", "us", "to", "tune", "out", "and", "focus", "on", "what", "counts."]
            },
            {
                "id": 20,
                "english": "Initially, when conflict occurred, it happened mostly in areas where there was competition for natural resources needed for the survival and functioning of particular societies.",
                "korean": "초기에 갈등이 발생했을 때, 그것은 주로 특정 사회의 생존과 기능에 필요한 천연자원을 두고 경쟁이 벌어지는 지역에서 발생했다.",
                "words": ["Initially,", "when", "conflict", "occurred,", "it", "happened", "mostly", "in", "areas", "where", "there", "was", "competition", "for", "natural", "resources", "needed", "for", "the", "survival", "and", "functioning", "of", "particular", "societies."]
            },
            {
                "id": 21,
                "english": "The buffalo roamed over the Plains, thus causing conflict between tribes for territory and for the buffalo which was their main food source.",
                "korean": "버펄로는 대초원 지대를 돌아다녔고, 그리하여 영토와 그들의 주요 식량 공급원인 버펄로에 대한 부족 간의 갈등을 일으켰다.",
                "words": ["The", "buffalo", "roamed", "over", "the", "Plains,", "thus", "causing", "conflict", "between", "tribes", "for", "territory", "and", "for", "the", "buffalo", "which", "was", "their", "main", "food", "source."]
            },
            {
                "id": 22,
                "english": "School administrators worry constantly about how much freedom they should grant teachers when it comes to these platforms, as well as the questions involved in allowing students to use network services for personal or educational use.",
                "korean": "학교 관리자는 학생들이 개인적이거나 교육적인 용도로 네트워크 서비스를 사용하도록 허용하는 것과 관련된 문제뿐만 아니라, 이러한 플랫폼에 관한 한 교사에게 어느 정도의 자유를 주어야 하는지에 대해서 끊임없이 걱정한다.",
                "words": ["School", "administrators", "worry", "constantly", "about", "how", "much", "freedom", "they", "should", "grant", "teachers", "when", "it", "comes", "to", "these", "platforms,", "as", "well", "as", "the", "questions", "involved", "in", "allowing", "students", "to", "use", "network", "services", "for", "personal", "or", "educational", "use."]
            },
            {
                "id": 23,
                "english": "They question why education is not keeping up with their own technology preferences, and why teachers and administrators aren't seeing the possibilities of how they can become leaders with technology.",
                "korean": "그들은 교육이 왜 자신의 기술 선호를 따라가지 못하고 있는지, 왜 교사와 관리자는 그들이 기술을 통해 리더가 될 수 있는 방법의 가능성을 보고 있지 않은지 의문을 제기한다.",
                "words": ["They", "question", "why", "education", "is", "not", "keeping", "up", "with", "their", "own", "technology", "preferences,", "and", "why", "teachers", "and", "administrators", "aren't", "seeing", "the", "possibilities", "of", "how", "they", "can", "become", "leaders", "with", "technology."]
            },
            {
                "id": 24,
                "english": "The term's etymological roots take us back to the Latin verb creare, which meant bringing something forth –making or producing something.",
                "korean": "그 용어의 어원적 뿌리는 라틴어 동사 ‘creare’로 거슬러 올라가는데, 이 단어는 무언가를 산출하는 것, 즉 무언가를 만들거나 생산하는 것을 의미했다.",
                "words": ["The", "term's", "etymological", "roots", "take", "us", "back", "to", "the", "Latin", "verb", "creare,", "which", "meant", "bringing", "something", "forth", "–making", "or", "producing", "something."]
            },
            {
                "id": 25,
                "english": "It is only in the fifteenth century that the present tense (to create) and present participle (creating) of the verb began to be used.",
                "korean": "그 동사의 현재 시제(to create)와 현재분사(creating)가 사용되기 시작한 것은 불과 15세기에 이르러서이다.",
                "words": ["It", "is", "only", "in", "the", "fifteenth", "century", "that", "the", "present", "tense", "(to", "create)", "and", "present", "participle", "(creating)", "of", "the", "verb", "began", "to", "be", "used."]
            },
            {
                "id": 26,
                "english": "Historically, the worst times for labor have been those characterized by both worker-replacing technological change and slow productivity growth.",
                "korean": "역사적으로 노동에 있어 최악의 시기는 노동자를 대체하는 기술 변화와 느린 생산성 성장 둘 모두를 특징으로 하는 시기였다.",
                "words": ["Historically,", "the", "worst", "times", "for", "labor", "have", "been", "those", "characterized", "by", "both", "worker-replacing", "technological", "change", "and", "slow", "productivity", "growth."]
            },
            {
                "id": 27,
                "english": "brilliant technologies are much preferable for labor to mediocre ones because as they make us richer, they create more demand for other goods and services produced by humans.",
                "korean": "뛰어난 기술은 우리를 더 부유하게 만들면서 인간에 의해 생산되는 다른 상품과 서비스에 대한 더 많은 수요를 창출하기 때문에 그저 그런 기술보다 노동에 훨씬 더 낫다.",
                "words": ["brilliant", "technologies", "are", "much", "preferable", "for", "labor", "to", "mediocre", "ones", "because", "as", "they", "make", "us", "richer,", "they", "create", "more", "demand", "for", "other", "goods", "and", "services", "produced", "by", "humans."]
            },
            {
                "id": 28,
                "english": "The basic reason for the increasing opportunity cost is that some resources and skills cannot be easily adapted from their current uses to alternative uses.",
                "korean": "기회비용이 증가하는 기본적인 이유는 일부 자원과 기술이 현재 용도에서 대체 용도로 쉽게 조정될 수 없기 때문이다.",
                "words": ["The", "basic", "reason", "for", "the", "increasing", "opportunity", "cost", "is", "that", "some", "resources", "and", "skills", "cannot", "be", "easily", "adapted", "from", "their", "current", "uses", "to", "alternative", "uses."]
            },
            {
                "id": 29,
                "english": "And, the more you produce of one good, the more you are forced to employ inputs that are relatively more suitable for producing other goods.",
                "korean": "그리고 어떤 상품을 더 많이 생산할수록 다른 상품을 생산하는 데 상대적으로 더 적합한 생산 요소를 더 많이 사용할 수밖에 없다.",
                "words": ["And,", "the", "more", "you", "produce", "of", "one", "good,", "the", "more", "you", "are", "forced", "to", "employ", "inputs", "that", "are", "relatively", "more", "suitable", "for", "producing", "other", "goods."]
            },
            {
                "id": 30,
                "english": "This was because, up until the Industrial Revolution, any gains in productivity farming peoples generated as a result of working harder, adopting new technologies, techniques, or crops, or acquiring new land were always soon consumed by populations that quickly grew to numbers that could not be sustained.",
                "korean": "이것은 산업 혁명에 이르기 전까지 농경 민족이 더 열심히 일하거나 새로운 기술, 기법, 또는 작물을 채택하거나 새로운 토지를 확보한 결과로 발생된 어떠한 생산성 증가라도 (그 규모가) 유지될 수 없을 정도로 빠르게 성장한 인구에 의해 늘 곧바로 소비되었기 때문이었다.",
                "words": ["This", "was", "because,", "up", "until", "the", "Industrial", "Revolution,", "any", "gains", "in", "productivity", "farming", "peoples", "generated", "as", "a", "result", "of", "working", "harder,", "adopting", "new", "technologies,", "techniques,", "or", "crops,", "or", "acquiring", "new", "land", "were", "always", "soon", "consumed", "by", "populations", "that", "quickly", "grew", "to", "numbers", "that", "could", "not", "be", "sustained."]
            },
            {
                "id": 31,
                "english": "In many respects, the hundreds of generations of farmers who lived before the fosil-fuel revolution paid for our extended lifespans and expanded waistlines now by enduring lives that were mostly shorter, gloomier, and harder than ours, and almost certainly tougher than those of their foraging ancestors.",
                "korean": "여러 측면에서, 화석 연료 혁명 이전에 살았던 수백 세대의 농부들은 대개 우리의 삶보다 더 짧고 더 우울하며 더 힘들었던, 그리고 거의 확실히 그들의 수렵 채집을 하던 조상의 삶보다 더 힘들었던 삶을 견딤으로써 현재 우리의 연장된 수명과 늘어난 허리둘레에 대한 대가를 지불했다.",
                "words": ["In", "many", "respects,", "the", "hundreds", "of", "generations", "of", "farmers", "who", "lived", "before", "the", "fosil-fuel", "revolution", "paid", "for", "our", "extended", "lifespans", "and", "expanded", "waistlines", "now", "by", "enduring", "lives", "that", "were", "mostly", "shorter,", "gloomier,", "and", "harder", "than", "ours,", "and", "almost", "certainly", "tougher", "than", "those", "of", "their", "foraging", "ancestors."]
            },
            {
                "id": 32,
                "english": "Contrary to common sense, memory and imagination may not be two independent processes; our memory clearly relies on constructive processes that are sometimes prone to error and distortion.",
                "korean": "상식과는 반대로 기억과 상상은 두 개의 독립적인 과정이 아닐 수도 있는데, 우리의 기억은 때때로 오류와 왜곡이 발생하기 쉬운 구성적인 과정에 분명히 의존한다.",
                "words": ["Contrary", "to", "common", "sense,", "memory", "and", "imagination", "may", "not", "be", "two", "independent", "processes;", "our", "memory", "clearly", "relies", "on", "constructive", "processes", "that", "are", "sometimes", "prone", "to", "error", "and", "distortion."]
            },
            {
                "id": 33,
                "english": "lf so, it would be more efficient for the brain to share a common constructive process for memory and imagination rather than maintaining two independent processes.",
                "korean": "그렇다면 뇌가 기억과 상상에 관해서 공통의 구성적 과정을 공유하는 것이 두 개의 독립적인 과정을 유지하는 것보다 더 효율적일 것이다.",
                "words": ["lf", "so,", "it", "would", "be", "more", "efficient", "for", "the", "brain", "to", "share", "a", "common", "constructive", "process", "for", "memory", "and", "imagination", "rather", "than", "maintaining", "two", "independent", "processes."]
            },
            {
                "id": 34,
                "english": "Children are relatively new to a world that's largely controlled by adults, so many of the activities that occupy their days need explanation.",
                "korean": "아이들은 주로 어른들에 의해 통제되는 세상에 비교적 익숙하지 않기 때문에, 그들의 하루를 차지하는 활동 중 많은 것이 설명을 필요로 한다.",
                "words": ["Children", "are", "relatively", "new", "to", "a", "world", "that's", "largely", "controlled", "by", "adults,", "so", "many", "of", "the", "activities", "that", "occupy", "their", "days", "need", "explanation."]
            },
            {
                "id": 35,
                "english": "And if you're a child, and an adult willing to pay you to do something, that's clue that you wouldn't otherwise enjoy doing it.",
                "korean": "그리고 만약 여러분이 아이인데, 한 어른이 여러분에게 기꺼이 돈을 주며 무언가를 하게 한다면, 그것은 그렇지 않으면 여러분이 그것을 하는 것을 즐기지 않을 것이라는 단서이다.",
                "words": ["And", "if", "you're", "a", "child,", "and", "an", "adult", "willing", "to", "pay", "you", "to", "do", "something,", "that's", "clue", "that", "you", "wouldn't", "otherwise", "enjoy", "doing", "it."]
            },
            {
                "id": 36,
                "english": "It is this guaranteed cost of competition that allows deceptive individuals to exaggerate their strengths and play down their weaknesses without necessarily getting caught.",
                "korean": "속이는 개체가 반드시 들키지 않고도 그들의 강점을 과장하고 약점을 축소할 수 있도록 하는 것은 바로 이러한 경쟁에 대한 확실한 비용이다.",
                "words": ["It", "is", "this", "guaranteed", "cost", "of", "competition", "that", "allows", "deceptive", "individuals", "to", "exaggerate", "their", "strengths", "and", "play", "down", "their", "weaknesses", "without", "necessarily", "getting", "caught."]
            },
            {
                "id": 37,
                "english": "Of course, if everyone else is also keeping calm while they check the reactions of others, everyone will conclude that help is not needed or that norms make helping inappropriate.",
                "korean": "당연히, 다른 모든 사람들도 타인의 반응을 확인하면서 침착함을 유지하고 있다면, 모두가 도움이 필요하지 않거나 규범상 도움을 주는 것이 부적절하다고 결론을 내릴 것이다.",
                "words": ["Of", "course,", "if", "everyone", "else", "is", "also", "keeping", "calm", "while", "they", "check", "the", "reactions", "of", "others,", "everyone", "will", "conclude", "that", "help", "is", "not", "needed", "or", "that", "norms", "make", "helping", "inappropriate."]
            },
            {
                "id": 38,
                "english": "In one series of studies, experimenters arranged for smoke to pour into a laboratory room in which students were sitting completing questionnaires.",
                "korean": "한 일련의 연구에서 실험자들은 학생들이 앉아서 설문지를 작성하고 있는 실험실에 연기가 쏟아져 들어오도록 설계했다.",
                "words": ["In", "one", "series", "of", "studies,", "experimenters", "arranged", "for", "smoke", "to", "pour", "into", "a", "laboratory", "room", "in", "which", "students", "were", "sitting", "completing", "questionnaires."]
            },
            {
                "id": 39,
                "english": "The religions of the old empires were predicated on the belief that the material world was controlled and inhabited by supernatural beings and forces, and that the reason for the behavior of these supernatural forces was largely unknowable.",
                "korean": "고대 제국의 종교는 초자연적인 존재와 힘이 물질세계를 지배하고 거기에 깃들어 있으며, 이러한 초자연적인 힘의 작용에 대한 이유는 대체로 알 수 없다는 믿음에 근거했다.",
                "words": ["The", "religions", "of", "the", "old", "empires", "were", "predicated", "on", "the", "belief", "that", "the", "material", "world", "was", "controlled", "and", "inhabited", "by", "supernatural", "beings", "and", "forces,", "and", "that", "the", "reason", "for", "the", "behavior", "of", "these", "supernatural", "forces", "was", "largely", "unknowable."]
            },
            {
                "id": 40,
                "english": "Many ancient civilizations, such as the Egyptian, Babylonian, and Aztec empires, spent a large proportion of social capital (covering such things as the time, wealth, skill, and public space of the society) on religious activity.",
                "korean": "이집트, 바빌로니아, 아즈텍 제국과 같은 많은 고대 문명은 종교활동에 (사회의 시간, 부, 기술 및 공공 공간과 같은 것을 포함하는) 사회 자본의 상당 부분을 사용했다.",
                "words": ["Many", "ancient", "civilizations,", "such", "as", "the", "Egyptian,", "Babylonian,", "and", "Aztec", "empires,", "spent", "a", "large", "proportion", "of", "social", "capital", "(covering", "such", "things", "as", "the", "time,", "wealth,", "skill,", "and", "public", "space", "of", "the", "society)", "on", "religious", "activity."]
            }
        ];
        
        this.currentProblemIndex = 0;
        this.selectedWords = [];
        this.wordsWithIds = [];
        this.shuffledWordsWithIds = []; // 섞인 순서를 유지하는 별도 배열
        this.completedProblems = new Set();
        this.correctAnswers = 0;
        this.insertPosition = null;
        
        this.initializeElements();
        this.loadProblem();
        this.attachEventListeners();
    }

    initializeElements() {
        this.progressFill = document.getElementById('progressFill');
        this.progressText = document.getElementById('progressText');
        this.wordCount = document.getElementById('wordCount');
        this.problemNumber = document.getElementById('problemNumber');
        this.koreanText = document.getElementById('koreanText');
        this.answerContainer = document.getElementById('answerContainer');
        this.wordsContainer = document.getElementById('wordsContainer');
        this.feedbackArea = document.getElementById('feedbackArea');
        this.completionModal = document.getElementById('completionModal');
        
        // Buttons
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.checkBtn = document.getElementById('checkBtn');
        this.restartBtn = document.getElementById('restartBtn');
    }

    attachEventListeners() {
        this.prevBtn.addEventListener('click', () => this.previousProblem());
        this.nextBtn.addEventListener('click', () => this.nextProblem());
        this.resetBtn.addEventListener('click', () => this.resetProblem());
        this.checkBtn.addEventListener('click', () => this.checkAnswer());
        this.restartBtn.addEventListener('click', () => this.restartApp());
    }

    generateWordIds(words) {
        return words.map((word, index) => ({
            id: `word_${index}_${this.currentProblemIndex + 1}`,
            text: word,
            used: false
        }));
    }

    // Fisher-Yates shuffle algorithm for proper randomization
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    loadProblem() {
        const problem = this.problems[this.currentProblemIndex];
        
        // Update UI elements
        this.progressFill.style.width = `${((this.currentProblemIndex + 1) / this.problems.length) * 100}%`;
        this.progressText.textContent = `문제 ${this.currentProblemIndex + 1} / ${this.problems.length}`;
        this.wordCount.textContent = `${problem.words.length} words`;
        this.problemNumber.textContent = `문제 ${this.currentProblemIndex + 1}`;
        this.koreanText.textContent = problem.korean;
        
        // Generate word IDs and create shuffled version
        this.wordsWithIds = this.generateWordIds(problem.words);
        this.shuffledWordsWithIds = this.shuffleArray(this.wordsWithIds);
        
        // Reset state
        this.selectedWords = [];
        this.insertPosition = null;
        this.clearFeedback();
        this.updateAnswerArea();
        this.renderWordButtons();
        this.updateButtons();
    }

    renderWordButtons() {
        this.wordsContainer.innerHTML = '';
        
        // 섞인 순서를 유지하여 렌더링
        this.shuffledWordsWithIds.forEach(wordObj => {
            const button = document.createElement('button');
            button.className = 'word-btn';
            button.textContent = wordObj.text;
            button.dataset.wordId = wordObj.id;
            
            if (wordObj.used) {
                button.classList.add('used');
            }
            
            button.addEventListener('click', () => this.selectWord(wordObj));
            this.wordsContainer.appendChild(button);
        });
    }

    selectWord(wordObj) {
        if (wordObj.used) return;
        
        // Mark word as used
        wordObj.used = true;
        
        if (this.insertPosition !== null) {
            // Insert at specified position
            this.selectedWords.splice(this.insertPosition, 0, wordObj);
            this.insertPosition = null; // Reset insertion position
        } else {
            // Add to end
            this.selectedWords.push(wordObj);
        }
        
        // Update UI - 섞인 순서는 유지하면서 단어 상태만 업데이트
        this.updateAnswerArea();
        this.renderWordButtons(); // 같은 섞인 순서로 다시 렌더링
        this.clearFeedback();
    }

    removeWord(wordObj) {
        // Remove from selected words
        const index = this.selectedWords.findIndex(w => w.id === wordObj.id);
        if (index > -1) {
            this.selectedWords.splice(index, 1);
        }
        
        // Mark as not used in the shuffled array
        const shuffledWord = this.shuffledWordsWithIds.find(w => w.id === wordObj.id);
        if (shuffledWord) {
            shuffledWord.used = false;
        }
        
        // Reset insertion position
        this.insertPosition = null;
        
        // Update UI
        this.updateAnswerArea();
        this.renderWordButtons(); // 같은 섞인 순서로 다시 렌더링
        this.clearFeedback();
    }

    setInsertPosition(position) {
        this.insertPosition = position;
        this.updateAnswerArea();
    }

    updateAnswerArea() {
        if (this.selectedWords.length === 0) {
            this.answerContainer.innerHTML = `
                <button class="insert-btn ${this.insertPosition === 0 ? 'active' : ''}" onclick="app.setInsertPosition(0)">+</button>
                <div class="answer-placeholder">단어를 클릭하여 문장을 완성하세요</div>
            `;
            this.answerContainer.classList.remove('has-words');
        } else {
            this.answerContainer.classList.add('has-words');
            this.answerContainer.innerHTML = '';
            
            // Add initial insertion button
            const initialInsertBtn = document.createElement('button');
            initialInsertBtn.className = `insert-btn ${this.insertPosition === 0 ? 'active' : ''}`;
            initialInsertBtn.textContent = '+';
            initialInsertBtn.onclick = () => this.setInsertPosition(0);
            this.answerContainer.appendChild(initialInsertBtn);
            
            // Add words with insertion buttons in between
            this.selectedWords.forEach((wordObj, index) => {
                // Add word
                const wordElement = document.createElement('div');
                wordElement.className = 'answer-word';
                wordElement.innerHTML = `
                    ${wordObj.text}
                    <button class="remove-btn" onclick="app.removeWord({id: '${wordObj.id}', text: '${wordObj.text.replace(/'/g, "\\'").replace(/"/g, "&quot;").replace(/;/g, "\\;")}', used: true})">×</button>
                `;
                this.answerContainer.appendChild(wordElement);
                
                // Add insertion button after word
                const insertBtn = document.createElement('button');
                insertBtn.className = `insert-btn ${this.insertPosition === index + 1 ? 'active' : ''}`;
                insertBtn.textContent = '+';
                insertBtn.onclick = () => this.setInsertPosition(index + 1);
                this.answerContainer.appendChild(insertBtn);
            });
        }
    }

    checkAnswer() {
        if (this.selectedWords.length === 0) {
            this.showFeedback('답안을 작성해주세요.', 'incorrect');
            return;
        }
        
        // Convert selected words to word list and check with frequency comparison
        const userWords = this.selectedWords.map(wordObj => wordObj.text);
        const correctWords = this.problems[this.currentProblemIndex].words;

        const problem = this.problems[this.currentProblemIndex];
        const isCorrect = JSON.stringify(userWords) === JSON.stringify(correctWords);
        
        if (isCorrect) {
            this.correctAnswers++;
            this.completedProblems.add(this.currentProblemIndex);
            this.showFeedback('🎉 정답입니다!', 'correct', problem.english, problem.korean);
        } else {
            this.showFeedback('❌ 틀렸습니다. 다시 시도해보세요.', 'incorrect', problem.english, problem.korean);
        }
    }

    showFeedback(message, type, eng, kor) {
        this.feedbackArea.innerHTML = `
            <div class="feedback ${type}">${message}<br>
                <p style="font-size: 14px; opacity: 0.9;"><strong>정답:</strong> ${eng}</p>
                <p style="margin-top: -14px; margin-bottom: -14px; font-size: 14px; opacity: 0.8; color: var(--color-text-secondary);"><strong>해석:</strong> ${kor}</p>
            </div>
        `;
    }

    clearFeedback() {
        this.feedbackArea.innerHTML = '';
    }

    // 다시시작 시에만 새로 섞기
    resetProblem() {
        const problem = this.problems[this.currentProblemIndex];
        
        // Reset selected words
        this.selectedWords = [];
        this.insertPosition = null;
        
        // Re-generate word IDs and create new shuffled version
        this.wordsWithIds = this.generateWordIds(problem.words);
        this.shuffledWordsWithIds = this.shuffleArray(this.wordsWithIds);
        
        // Update UI
        this.updateAnswerArea();
        this.renderWordButtons();
        this.clearFeedback();
    }

    previousProblem() {
        if (this.currentProblemIndex > 0) {
            this.currentProblemIndex--;
            this.loadProblem();
        }
    }

    nextProblem() {
        if (this.currentProblemIndex < this.problems.length - 1) {
            this.currentProblemIndex++;
            this.loadProblem();
        } else {
            this.showCompletionModal();
        }
    }

    updateButtons() {
        this.prevBtn.disabled = this.currentProblemIndex === 0;
        this.nextBtn.disabled = this.currentProblemIndex === this.problems.length - 1;
    }

    showCompletionModal() {
        const accuracy = Math.round((this.correctAnswers / this.problems.length) * 100);
        
        document.getElementById('totalProblems').textContent = this.problems.length;
        document.getElementById('correctAnswers').textContent = this.correctAnswers;
        document.getElementById('accuracyRate').textContent = `${accuracy}%`;
        
        this.completionModal.classList.add('show');
    }

    restartApp() {
        this.currentProblemIndex = 0;
        this.selectedWords = [];
        this.completedProblems.clear();
        this.correctAnswers = 0;
        this.insertPosition = null;
        this.completionModal.classList.remove('show');
        this.loadProblem();
    }
}

// Initialize the application
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new UnscrambleApp();
});