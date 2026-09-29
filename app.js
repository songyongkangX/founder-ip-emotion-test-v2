const emotions = {
  怒: { type: '立场型', purpose: '建立人设、替用户说话', advice: '亮态度、划边界、替用户说话', frequency: '每周 1–2 条' },
  喜: { type: '结果型', purpose: '晒成果、给希望', advice: '晒战绩、晒学员案例，给希望', frequency: '每周 1 条' },
  哀: { type: '故事型', purpose: '拉信任、讲经历', advice: '讲转折、讲真实经历，让人看见你的来路', frequency: '每两周 1 条' },
  惧: { type: '痛点型', purpose: '制造紧迫感、引流', advice: '点出风险，但不要持续制造焦虑', frequency: '发售前集中用' },
  爱: { type: '陪伴型', purpose: '拉近距离、社群维护', advice: '多回应、多分享幕后，让用户感到被接住', frequency: '每周 1 条' },
  恶: { type: '筛选型', purpose: '建立高端感、筛选客户', advice: '说清楚不服务谁，建立边界与专业感', frequency: '发售前集中用' },
  欲: { type: '向往型', purpose: '制造渴望、品牌片', advice: '展示理想结果，让用户看见想成为的自己', frequency: '每月 1 条' }
};

const emotionGuides = {
  喜: { essence: '希望被验证', trigger: '她能做到，我也可以', peak: '我当初也不信，直到……', style: '轻快、松弛、有节奏', scene: '明亮色系、简约大方、暖光明亮', format: '亮结果 → 说来源 → 给希望' },
  怒: { essence: '边界被侵犯后的反击', trigger: '她替我说了我不敢说的', peak: '你也可以学会说不', style: '坚定、直接、不拖沓', scene: '深色系、干练利落、中性冷光', format: '亮态度 → 说原因 → 亮底线' },
  哀: { essence: '真实地被看见', trigger: '我也经历过，我懂', peak: '我怎么走出来的', style: '柔和、真实、有停顿', scene: '暖色偏暗、舒适居家、暖光偏暗', format: '低谷 → 感受 → 转折 → 感悟' },
  惧: { essence: '对失去的警觉', trigger: '再不改变就晚了', peak: '现在做还来得及', style: '紧凑、严肃、有压迫', scene: '深色系、干练专业、中性偏冷', format: '抛痛点 → 放大后果 → 给方向' },
  爱: { essence: '无条件地看见对方', trigger: '你把我当人看', peak: '不管怎样，我都在', style: '温柔、亲切、像聊天', scene: '柔和暖色、舒适温暖、暖光柔和', format: '回应问题 → 给方法 → 温暖收尾' },
  恶: { essence: '对标准的坚守', trigger: '她有底线', peak: '被筛选是一种认可', style: '冷静、笃定、不讨好', scene: '深色 / 中性色、干练简约、中性光', format: '说不服务谁 → 说为什么 → 说我服务谁' },
  欲: { essence: '对更好状态的向往', trigger: '我也想活成这样', peak: '我也可以走这条路', style: '从容、松弛、有质感', scene: '有质感色系、有设计感、自然光 / 暖光', format: '展示状态 → 说路径 → 给行动' }
};

const mbtiInsights = {
  ENFJ: ['爱、喜、欲', '陪伴型、结果型、向往型', '感染力强、会讲故事、能带动情绪', '恶（筛选）、惧（痛点）'],
  ENFP: ['喜、欲、爱', '结果型、向往型、陪伴型', '热情、有能量、能制造向往', '恶、惧'],
  ENTJ: ['恶、怒、喜', '筛选型、立场型、结果型', '气场强、有权威感、敢说真话', '爱、哀'],
  ENTP: ['怒、喜、欲', '立场型、结果型、向往型', '观点犀利、逻辑强、能破圈', '爱、哀'],
  ESFJ: ['爱、喜、哀', '陪伴型、结果型、故事型', '亲和、温暖、让人信任', '恶、怒'],
  ESFP: ['喜、欲、爱', '结果型、向往型、陪伴型', '表现力强、有感染力', '恶、惧'],
  ESTJ: ['恶、怒、喜', '筛选型、立场型、结果型', '权威、务实、有结果', '爱、哀'],
  ESTP: ['怒、喜、欲', '立场型、结果型、向往型', '直接、有冲击力、敢做敢说', '爱、哀'],
  INFJ: ['爱、哀、喜', '陪伴型、故事型、结果型', '深度共情、有洞察力', '恶、怒'],
  INFP: ['哀、爱、欲', '故事型、陪伴型、向往型', '真实、有灵魂、能打动人', '恶、怒'],
  INTJ: ['恶、惧、喜', '筛选型、痛点型、结果型', '战略思维、能看透本质', '爱、哀'],
  INTP: ['惧、恶、喜', '痛点型、筛选型、结果型', '逻辑严密、能讲透问题', '爱、哀'],
  ISFJ: ['爱、哀、喜', '陪伴型、故事型、结果型', '温暖、可靠、有耐心', '恶、怒'],
  ISFP: ['哀、爱、欲', '故事型、陪伴型、向往型', '真诚、有审美、能共情', '恶、怒'],
  ISTJ: ['惧、恶、喜', '痛点型、筛选型、结果型', '严谨、可信、有体系', '爱、哀'],
  ISTP: ['惧、怒、恶', '痛点型、立场型、筛选型', '冷静、直接、解决问题', '爱、哀']
};

const industryRecipes = [
  ['喜', '欲、爱', '怒、恶'],
  ['喜', '爱、惧', '怒、恶'],
  ['爱', '哀、喜', '怒、恶、惧'],
  ['惧', '喜、怒', '哀、爱'],
  ['爱', '哀、喜', '怒、恶'],
  ['惧', '恶、怒', '哀、爱'],
  ['惧', '喜、恶', '哀、爱'],
  ['怒', '恶、喜', '哀、爱'],
  ['怒', '恶、喜', '爱、哀']
];

const priceStrategies = [
  ['爱', '哀、惧', '低门槛，靠陪伴、共情和紧迫感成交', '陪伴型、故事型、痛点型'],
  ['喜', '欲、爱', '中门槛，靠结果、向往和陪伴成交', '结果型、向往型、陪伴型'],
  ['恶', '怒、喜', '高门槛，靠筛选、立场和结果成交', '筛选型、立场型、结果型'],
  ['恶', '怒', '高端门槛，靠“不服务谁”和实力成交', '筛选型、立场型'],
  ['恶', '怒、喜', '超高门槛，靠筛选、立场和结果背书成交', '筛选型、立场型、结果型']
];

const audienceStrategies = {
  gender: [
    ['爱、喜', '哀、惧', '先共情，再给希望，最后用紧迫感成交'],
    ['恶、怒', '喜、惧', '先亮态度，再晒结果，最后用筛选建高端'],
    ['喜、恶', '爱、怒', '用结果吸引，用筛选建立标准']
  ],
  age: [
    ['喜、欲', '怒、爱', '给希望、给向往，用结果说话'],
    ['惧、恶', '喜、怒', '制造紧迫感，用筛选建信任'],
    ['爱、哀', '喜、惧', '先共情，再给解法，用案例建信任'],
    ['爱、喜', '哀、惧', '陪伴加结果，用真实案例打动']
  ],
  profession: [
    ['恶、怒', '喜、惧', '亮底线、晒结果，用筛选建高端'],
    ['惧、喜', '爱、恶', '制造紧迫，用结果和陪伴成交'],
    ['喜、欲', '怒、爱', '给希望、给向往，用立场建人设'],
    ['爱、哀', '喜、惧', '先共情，再给希望，用陪伴成交'],
    ['喜、欲', '怒、爱', '给希望、给路径，用结果吸引']
  ],
  income: [
    ['爱、惧', '哀、喜', '用陪伴建立信任，用紧迫感推动决策'],
    ['喜、爱', '欲、惧', '用结果给希望，用陪伴拉距离'],
    ['恶、喜', '怒、惧', '用筛选建高端，用结果做背书'],
    ['恶、怒', '喜', '用“不服务谁”建门槛，用结果做信任']
  ]
};

const barrierStrategies = [
  ['喜', '看到真实案例、结果', '结果型'],
  ['爱', '看到有人陪、有人带', '陪伴型'],
  ['恶、怒', '看到你的底线和原则', '筛选型、立场型'],
  ['惧', '看到“现在就是最好时机”', '痛点型'],
  ['恶', '看到“贵有贵的道理”', '筛选型'],
  ['爱、哀', '看到“很多人都这样走过来了”', '陪伴型、故事型'],
  ['恶', '看到你“不服务谁”的边界', '筛选型'],
  ['怒', '看到你“和别人不一样”', '立场型'],
  ['惧、欲', '看到“现在不报的代价”', '痛点型、向往型']
];

const baseQuestions = [
  ['行业与产品', '你的行业赛道是？', [['美业 / 护肤 / 穿搭 / 医美', '喜+2，欲+1，爱+1'], ['大健康 / 养生 / 营养 / 中医', '喜+1，爱+1，惧+1'], ['疗愈 / 心理咨询 / 身心灵', '爱+2，哀+1，喜+1'], ['教育 / 教培 / 学科辅导', '惧+2，喜+1，怒+1'], ['心理学 / 情感咨询 / 婚姻修复', '爱+2，哀+2'], ['律师 / 法律咨询', '惧+1，恶+1，怒+1'], ['保险 / 理财 / 财富管理', '惧+2，喜+1，恶+1'], ['工厂老板 / 实体老板 / 传统企业主', '怒+1，恶+1，喜+1'], ['IP知识付费教学 / 操盘手 / 自媒体教练', '怒+2，恶+1，喜+1'], ['其他行业', '根据产品判断']], 'multi', 2],
  ['行业与产品', '你的核心产品主要帮用户解决什么？', [['帮人赚钱 / 提升收入', '怒+2，恶+1，喜+1'], ['帮人变美 / 变好 / 变健康', '喜+2，欲+1，爱+1'], ['帮人安心 / 缓解焦虑 / 疗愈', '爱+2，哀+1'], ['帮人省时间 / 避坑 / 少走弯路', '惧+1，怒+1，恶+1']], 'multi', 2],
  ['行业与产品', '你的客单价属于？', [['1–5000 元', '爱+2，哀+1，惧+1'], ['5000–1 万', '喜+1，欲+1，爱+1'], ['1 万–5 万', '恶+2，怒+1，喜+1'], ['5 万–10 万', '恶+2，怒+2'], ['10 万以上', '恶+2，怒+2，喜+1']], 'multi', 2],
  ['行业与产品', '你的交付方式是？', [['一对一深度服务（陪跑 / 私教 / 咨询）', '恶+1，爱+1，喜+1'], ['一对多课程 / 训练营', '惧+1，喜+1，怒+1'], ['社群 / 会员制陪伴', '爱+2，哀+1'], ['内容 / 工具 / 模板类产品', '喜+1，欲+1，惧+1']], 'multi', 2],
  ['用户心理', '你的用户最怕失去什么？', [['怕失去钱 / 机会', '惧+2'], ['怕被人评判 / 不被接纳', '爱+1，哀+2'], ['怕走弯路 / 被割韭菜', '怒+2，恶+1'], ['怕平庸 / 没结果', '喜+1，欲+2']], 'multi', 2],
  ['用户心理', '你的用户最想得到什么？', [['想赚钱 / 想成功', '怒+1，喜+2，欲+1'], ['想变美 / 变自信', '喜+2，欲+2'], ['想安心 / 想被理解', '爱+2，哀+1'], ['想少走弯路 / 想有人带', '惧+1，恶+1，喜+1']], 'multi', 2],
  ['用户心理', '你的用户决定付费时，最大的障碍是什么？', [['怕花钱没效果', '惧+2'], ['怕自己坚持不下来', '惧+1，哀+1'], ['怕遇到不靠谱的人', '怒+2，恶+1'], ['怕现在不是最好时机', '惧+1，欲+1'], ['觉得价格太高', '恶+1，喜+1'], ['怕身边人笑话', '爱+2，哀+1'], ['不知道该选谁', '恶+2，怒+1'], ['之前买过类似的没效果', '怒+2，哀+1'], ['怕错过机会', '欲+2，惧+1'], ['其他障碍', '根据情况判断']], 'multi', 3],
  ['个人特质', '你平时的说话风格是？', [['语速快、犀利、一针见血', '怒+2，恶+1'], ['语速慢、温柔、娓娓道来', '爱+2，哀+1'], ['轻快、幽默、有感染力', '喜+2，欲+1'], ['沉稳、权威、逻辑严密', '惧+1，恶+1，喜+1']], 'multi', 2],
  ['个人特质', '你生气的时候通常会？', [['直接表达，不怕冲突', '怒+2，恶+1'], ['忍着不说，自己消化', '哀+2，爱+1'], ['用幽默化解', '喜+1，欲+1'], ['冷静分析，讲道理', '惧+1，恶+1']], 'single', 1],
  ['个人特质', '你讲自己经历时，更偏向？', [['平静叙述，像讲故事', '哀+2，爱+1'], ['有情绪起伏，像演讲', '怒+1，喜+1，欲+1'], ['轻描淡写，不渲染', '恶+1，喜+1'], ['逻辑清晰，像上课', '惧+1，恶+1']], 'multi', 2],
  ['个人特质', '你的长相 / 气质更接近？', [['气场强、干练、有距离感', '恶+2，怒+1'], ['亲和、温暖、邻家感', '爱+2，哀+1'], ['阳光、活力、有能量', '喜+2，欲+1'], ['知性、专业、可信赖', '惧+1，喜+1']], 'multi', 2],
  ['个人特质', '你面对镜头时，最自然的状态是？', [['直接开怼，敢说真话', '怒+2，恶+1'], ['温柔分享，像跟朋友聊天', '爱+2，哀+1'], ['自信展示，晒结果', '喜+2，欲+1'], ['严肃分析，给干货', '惧+1，恶+1']], 'multi', 2],
  ['个人特质', '你更喜欢哪种表达方式？', [['讲观点、亮态度', '怒+2，恶+1'], ['讲故事、讲经历', '哀+2，爱+1'], ['讲结果、讲案例', '喜+2，欲+1'], ['讲方法、讲逻辑', '惧+1，恶+1']], 'multi', 2],
  ['八字五行 · 可选', '你的日主五行是？', [['火（丙、丁）', '怒+2，喜+1'], ['土（戊、己）', '恶+1，喜+1'], ['木（甲、乙）', '怒+1，欲+1'], ['水（壬、癸）', '哀+1，爱+1'], ['金（庚、辛）', '惧+1，恶+1']], 'single', 1],
  ['八字五行 · 可选', '你的八字身强还是身弱？', [['身强', '怒+1，喜+1，恶+1'], ['身弱', '哀+1，爱+1，惧+1']], 'single', 1]
];

const mbtiQuestions = [
  ['MBTI 快速测评', '周末你更倾向于？', [['出门见人、参加活动，跟人聊天能恢复能量', 'E+1'], ['一个人待着、看书、追剧，独处才能恢复能量', 'I+1']], 'single', 1],
  ['MBTI 快速测评', '你接收信息时，更相信？', [['亲眼看到的事实、具体的数据、真实的案例', 'S+1'], ['直觉、灵感、“我感觉这件事能成”', 'N+1']], 'single', 1],
  ['MBTI 快速测评', '你做决策时，更依赖？', [['逻辑分析、利弊权衡、数据支撑', 'T+1'], ['感受、共情、“这件事让我舒不舒服”', 'F+1']], 'single', 1],
  ['MBTI 快速测评', '你做事的方式更偏向？', [['提前计划、按部就班、有明确的截止时间', 'J+1'], ['随机应变、走一步看一步、享受过程', 'P+1']], 'single', 1],
  ['MBTI 快速测评', '你在社交场合通常是？', [['主动开口、带动气氛、认识新朋友', 'E+1'], ['等别人来找我、观察为主、只跟熟人说话', 'I+1']], 'single', 1],
  ['MBTI 快速测评', '你更喜欢的表达方式是？', [['讲具体的事、讲细节、讲“我做了什么”', 'S+1'], ['讲趋势、讲可能性、讲“这件事意味着什么”', 'N+1']], 'single', 1],
  ['MBTI 快速测评', '别人找你倾诉时，你第一反应是？', [['帮他分析问题、给出解决方案', 'T+1'], ['先接住他的情绪、让他觉得被理解', 'F+1']], 'single', 1],
  ['MBTI 快速测评', '你面对截止日期的态度是？', [['提前完成、留足余地、不喜欢最后一刻赶工', 'J+1'], ['最后时刻灵感爆发，deadline是第一生产力', 'P+1']], 'single', 1]
];
const profileQuestions = [
  ['用户画像', '你的用户性别主要是？', [['女性为主', '爱+2，哀+1，喜+1'], ['男性为主', '恶+2，怒+1，惧+1'], ['男女比例均衡', '喜+1，恶+1，爱+1']], 'multi', 2],
  ['用户画像', '你的用户年龄主要是？', [['20–30岁', '喜+2，欲+1，怒+1'], ['30–40岁', '惧+1，喜+1，恶+1'], ['40–50岁', '爱+1，哀+1，惧+1'], ['50岁以上', '爱+2，哀+1，喜+1']], 'multi', 2],
  ['用户画像', '你的用户职业主要是？', [['创业者 / 老板 / 企业主', '恶+2，怒+1，喜+1'], ['职场白领 / 上班族', '惧+1，喜+1，爱+1'], ['自由职业者 / 个体户', '喜+1，欲+1，怒+1'], ['宝妈 / 家庭主妇', '爱+2，哀+1，惧+1'], ['学生 / 刚毕业', '喜+2，欲+1，怒+1']], 'multi', 2],
  ['用户画像', '你的用户收入水平主要是？', [['月入5000以下', '爱+2，哀+1，惧+1'], ['月入5000–2万', '喜+1，欲+1，爱+1'], ['月入2万–10万', '恶+1，怒+1，喜+1'], ['月入10万以上', '恶+2，怒+2']], 'multi', 2]
];
const scenarioQuestions = [
  ['情景反应', '线下课定价9800，学员说“太贵了”，你会怎么回？', [['展示价值和学员案例', '喜+2，恶+1'], ['强调课程门槛和筛选标准', '恶+2，怒+1'], ['理解顾虑，分享自己的犹豫经历', '爱+2，哀+1'], ['强调现在不投资的机会成本', '惧+2']], 'single', 1],
  ['情景反应', '发现另一个IP明显借鉴你的课程大纲和文案，你会怎么做？', [['公开表达立场', '怒+2，恶+1'], ['继续做自己的事，用结果说话', '恶+1，喜+1'], ['内心难受但不想撕破脸', '哀+2，爱+1'], ['告诉团队和核心学员真相', '恶+1，怒+1']], 'single', 1],
  ['情景反应', '付费学员公开说“你的方法根本没用”，你会怎么处理？', [['先私聊，问清情况并解决', '爱+2'], ['公开回应，把逻辑讲清楚', '惧+1，恶+1'], ['拿出其他学员成功案例', '喜+2'], ['强调不行动什么方法都没用', '怒+2']], 'single', 1],
  ['情景反应', '团队发错直播时间导致学员错过，你的第一反应是？', [['先道歉并沟通补偿', '爱+1，哀+1'], ['内部追责，对外承担责任', '怒+2，恶+1'], ['公开道歉，坦诚管理问题', '哀+2，爱+1'], ['把它变成创业踩坑内容', '喜+2，欲+1']], 'single', 1],
  ['情景反应', '认识多年的朋友请你免费打广告，你会怎么回应？', [['时间有价，可以帮但不免费', '恶+2，怒+1'], ['这次免费，下次收费', '爱+1，恶+1'], ['直接拒绝免费推广', '恶+2'], ['为难但最后还是帮了', '爱+2']], 'single', 1],
  ['情景反应', '看到圈里有人用明显有问题的模式割韭菜，你会怎么做？', [['发视频公开批评', '怒+2'], ['在社群里提醒学员', '恶+1，爱+1'], ['专注做自己的事', '恶+1，喜+1'], ['心疼受害者但不知道该不该管', '哀+2，爱+1']], 'single', 1]
];
const questions = [...mbtiQuestions, ...baseQuestions.slice(0, 4), ...profileQuestions, ...baseQuestions.slice(4, 7), ...scenarioQuestions, ...baseQuestions.slice(7)];

let current = 0;
let answers = Array.from({ length: questions.length }, () => []);
let mbtiType = '未完成';
const scores = () => Object.fromEntries(Object.keys(emotions).map(key => [key, 0]));
const $ = id => document.getElementById(id);
const scoreFromText = text => { const result = {}; [...text.matchAll(/([怒喜哀惧爱恶欲])\+(\d)/g)].forEach(match => { result[match[1]] = Number(match[2]); }); return result; };

function show(id) { ['introView', 'quizView', 'resultView'].forEach(view => $(view).classList.toggle('hidden', view !== id)); }
function showToast(message) { const toast = $('toast'); toast.textContent = message; toast.classList.add('visible'); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('visible'), 2400); }
function makeShareUrl(includeAnswers = false) { const url = new URL(window.location.href); url.hash = ''; if (includeAnswers) { url.search = ''; url.searchParams.set('answers', answers.map(selection => selection.length ? selection.reduce((mask, index) => mask | (1 << index), 0) : 'x').join('.')); } return url.toString(); }
async function shareUrl(url, message) { try { if (navigator.share) { await navigator.share({ title: '创始人 IP 情绪风格测评', text: message, url }); } else { await navigator.clipboard.writeText(url); showToast('分享链接已复制，发给学员即可'); } } catch (error) { if (error.name !== 'AbortError') { try { await navigator.clipboard.writeText(url); showToast('分享链接已复制'); } catch (clipboardError) { showToast('请复制浏览器地址栏链接分享'); } } } }
function openShareModal() { const url = makeShareUrl(); $('shareUrlInput').value = url; $('shareQrImage').src = `https://quickchart.io/qr?size=260&margin=2&text=${encodeURIComponent(url)}`; $('shareModal').classList.remove('hidden'); document.body.classList.add('modal-open'); }
function closeShareModal() { $('shareModal').classList.add('hidden'); document.body.classList.remove('modal-open'); }
async function copyShareUrl() { const url = $('shareUrlInput').value; try { await navigator.clipboard.writeText(url); } catch (error) { $('shareUrlInput').select(); document.execCommand('copy'); } showToast('测评网址已复制'); }
function downloadQr() { const link = document.createElement('a'); link.download = '创始人IP情绪风格测评二维码.png'; link.href = $('shareQrImage').src; link.target = '_blank'; link.click(); }
function loadSharedResult() { const encoded = new URLSearchParams(window.location.search).get('answers'); if (!encoded || !/^[0-9x]+(?:\.[0-9x]+)*$/.test(encoded)) return false; const tokens = encoded.includes('.') ? encoded.split('.') : [...encoded]; if (tokens.length !== questions.length) return false; if (tokens.some((token, index) => token !== 'x' && Number(token) > (1 << questions[index][2].length) - 1)) return false; answers = tokens.map((token, index) => { if (token === 'x') return []; const mask = Number(token); return Array.from({ length: questions[index][2].length }, (_, optionIndex) => optionIndex).filter(optionIndex => mask & (1 << optionIndex)); }); renderResults(); show('resultView'); $('headerStatus').textContent = '已打开分享结果'; return true; }
function renderQuestion() {
  const [section, title, options, mode, maxSelection] = questions[current];
  const optional = current >= questions.length - 2;
  const sectionLabel = current < 8 ? '第一部分 · MBTI 快速测评' : current < 12 ? '第二部分 · 行业与产品' : current < 16 ? '第三部分 · 用户画像' : current < 19 ? '第四部分 · 用户心理' : current < 25 ? '第五部分 · 情景反应' : current < 31 ? '第六部分 · 个人特质' : '第七部分 · 八字五行（可选）';
  $('sectionLabel').textContent = sectionLabel;
  $('questionTitle').textContent = title; $('currentNumber').textContent = String(current + 1).padStart(2, '0'); $('progressBar').style.width = `${((current + 1) / questions.length) * 100}%`; $('skipHint').textContent = mode === 'single' ? '单选题 · 请选择最符合的一项' : `多选题 · 最多选择 ${maxSelection} 项`;
  const modeLabel = mode === 'single' ? '单选题' : maxSelection === 2 ? '双选题 · 最多 2 项' : '多选题 · 最多 ' + maxSelection + ' 项';
  $('questionMode').textContent = optional ? '可选 · ' + modeLabel : modeLabel;
  if (optional) $('skipHint').textContent = '可选题 · 不填写也可以继续';
  $('options').innerHTML = options.map((option, index) => `<div class="option ${answers[current].includes(index) ? 'selected' : ''}" data-index="${index}"><span class="option-letter">${answers[current].includes(index) ? '✓' : String.fromCharCode(65 + index)}</span><div class="option-copy"><strong>${option[0]}</strong></div></div>`).join('');
  document.querySelectorAll('.option').forEach(option => option.addEventListener('click', () => { const index = Number(option.dataset.index); const selected = answers[current]; if (selected.includes(index)) answers[current] = selected.filter(item => item !== index); else if (mode === 'single') answers[current] = [index]; else if (selected.length < maxSelection) answers[current] = [...selected, index]; else { showToast(`本题最多选择 ${maxSelection} 项`); return; } renderQuestion(); }));
  $('prevButton').disabled = current === 0; $('nextButton').disabled = !optional && answers[current].length === 0; $('nextButton').innerHTML = current === questions.length - 1 ? '查看结果 <span>↗</span>' : optional ? '下一题（可跳过） <span>→</span>' : '下一题 <span>→</span>';
}
function calculate() { const total = scores(); const mbti = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }; answers.forEach((selection, questionIndex) => selection.forEach(answer => { const scoreText = questions[questionIndex][2][answer][1]; Object.entries(scoreFromText(scoreText)).forEach(([emotion, value]) => { total[emotion] += value; }); [...scoreText.matchAll(/([ESNTFJIP])\+1/g)].forEach(match => { if (mbti[match[1]] !== undefined) mbti[match[1]] += 1; }); })); mbtiType = `${mbti.E >= mbti.I ? 'E' : 'I'}${mbti.S >= mbti.N ? 'S' : 'N'}${mbti.T >= mbti.F ? 'T' : 'F'}${mbti.J >= mbti.P ? 'J' : 'P'}`; return Object.entries(total).sort((a, b) => b[1] - a[1]); }
function renderAdvancedInsights(primary, support, ranked) {
  const guide = emotionGuides[primary];
  const mbti = mbtiInsights[mbtiType] || ['喜、爱', '结果型、陪伴型', '真实、稳定、容易建立信任', '恶、惧'];
  const avoid = ranked.slice(-2).map(item => item[0]).join('、');
  const ratio = primary + ' 60% + ' + support[0] + ' 25% + ' + support[1] + ' 15%';

  $('executionGrid').innerHTML = [
    '<article class="execution-card execution-primary"><span class="card-kicker">主情绪 · ' + primary + '</span><h4>' + emotions[primary].type + '怎么拍</h4><p>' + guide.format + '</p><small>' + guide.style + ' · ' + guide.scene + '</small></article>',
    '<article class="execution-card"><span class="card-kicker">MBTI · ' + mbtiType + '</span><h4>你的天然优势</h4><p>' + mbti[2] + '</p><small>适合：' + mbti[1] + '；建议练习：' + mbti[3] + '</small></article>',
    '<article class="execution-card"><span class="card-kicker">CONTENT MIX</span><h4>一周内容配方</h4><p>' + ratio + '</p><small>先用主情绪建立识别度，再用辅助情绪完成信任与转化。</small></article>'
  ].join('');

  const industryHTML = answers[8].map(index => {
    const recipe = industryRecipes[index] || [primary, support.join('、'), avoid];
    return '<article class="cross-card"><span class="card-kicker">行业配方</span><strong>' + questions[8][2][index][0] + '</strong><p>主情绪：' + recipe[0] + '　辅助：' + recipe[1] + '<br>尽量避开：' + recipe[2] + '</p></article>';
  }).join('') || '<article class="cross-card"><span class="card-kicker">行业配方</span><strong>按你的情绪得分生成</strong><p>主情绪：' + primary + '　辅助：' + support.join('、') + '</p></article>';

  const priceHTML = answers[10].map(index => {
    const strategy = priceStrategies[index];
    return strategy ? '<article class="cross-card"><span class="card-kicker">客单价策略</span><strong>' + questions[10][2][index][0] + '</strong><p>主情绪：' + strategy[0] + '　辅助：' + strategy[1] + '<br>' + strategy[2] + '<br>视频：' + strategy[3] + '</p></article>' : '';
  }).join('');

  const audienceGroups = [
    ['用户性别', 12, audienceStrategies.gender],
    ['用户年龄', 13, audienceStrategies.age],
    ['用户职业', 14, audienceStrategies.profession],
    ['用户收入', 15, audienceStrategies.income]
  ];
  const audienceHTML = audienceGroups.reduce((html, group) => {
    const label = group[0]; const questionIndex = group[1]; const table = group[2];
    return html + answers[questionIndex].map(index => {
      const strategy = table[index];
      return strategy ? '<article class="cross-card"><span class="card-kicker">' + label + '</span><strong>' + questions[questionIndex][2][index][0] + '</strong><p>主情绪：' + strategy[0] + '　辅助：' + strategy[1] + '<br>' + strategy[2] + '</p></article>' : '';
    }).join('');
  }, '');

  const barrierHTML = answers[18].map(index => {
    const strategy = barrierStrategies[index];
    return strategy ? '<article class="cross-card"><span class="card-kicker">付费障碍</span><strong>' + questions[18][2][index][0] + '</strong><p>用 ' + strategy[0] + '，让用户看到：' + strategy[1] + '<br>适合：' + strategy[2] + '</p></article>' : '';
  }).join('');
  $('crossInsightGrid').innerHTML = '<div class="cross-group"><div class="cross-group-heading"><p class="eyebrow">AUDIENCE × EMOTION</p><h3>用户画像交叉分析</h3></div><div class="cross-card-grid">' + audienceHTML + '</div></div><div class="cross-group"><div class="cross-group-heading"><p class="eyebrow">BUSINESS × EMOTION</p><h3>行业、客单价与成交策略</h3></div><div class="cross-card-grid">' + industryHTML + priceHTML + barrierHTML + '</div></div>';

  $('emotionGuideGrid').innerHTML = Object.keys(emotionGuides).map(emotion => {
    const item = emotionGuides[emotion];
    return '<article class="emotion-guide-card"><div class="emotion-guide-top"><span class="emotion-symbol">' + emotion + '</span><div><strong>' + emotions[emotion].type + '</strong><small>' + item.essence + '</small></div></div><p>用户触动：' + item.trigger + '</p><p>最高层次：' + item.peak + '</p><div class="guide-meta"><span>' + item.style + '</span><span>' + item.format + '</span></div></article>';
  }).join('');
  queueMicrotask(() => document.querySelectorAll('.advice-item span').forEach(item => { item.textContent = item.textContent.replace(/，建议[^。]+。$/, '。'); }));
}
function renderResults() {
  const ranked = calculate(); const primary = ranked[0][0]; const support = ranked.slice(1, 3).map(item => item[0]); const avoid = ranked.slice(-2).map(item => item[0]); const max = ranked[0][1] || 1;
  renderAdvancedInsights(primary, support, ranked);
  $('completionCopy').textContent = '完成度 ' + Math.round(answers.slice(0, -2).filter(selection => selection.length).length / (questions.length - 2) * 100) + '%';
  $('dominantEmotion').textContent = primary; $('dominantType').textContent = emotions[primary].type; $('dominantSummary').textContent = `${emotions[primary].advice}。你的内容首先要让用户感受到${emotions[primary].purpose.replace('建立人设、', '').replace('、替用户说话', '')}。`; $('dominantScore').textContent = `得分 ${ranked[0][1]}`; $('dominantPurpose').textContent = emotions[primary].purpose;
  $('resultTitle').textContent = `${primary} × ${support.join(' × ')} 配方`; $('resultSubtitle').textContent = `${emotions[primary].type}为主，${emotions[support[0]].type}与${emotions[support[1]].type}辅助`;
  $('scoreBars').innerHTML = ranked.map(([emotion, score]) => `<div class="score-bar-row"><strong>${emotion}</strong><div class="score-bar-track"><div class="score-bar-fill" style="width:${Math.max(5, score / max * 100)}%"></div></div><span>${score}</span></div>`).join('');
  $('primaryEmotion').textContent = `${primary} · ${emotions[primary].type}`; $('supportEmotions').textContent = support.map(emotion => `${emotion} · ${emotions[emotion].type}`).join(' + '); $('contentRatio').textContent = '60% + 25% + 15%';
  $('contentAdvice').innerHTML = [primary, ...support].map((emotion, index) => `<div class="advice-item"><strong>${[60, 25, 15][index]}% ${emotion} · ${emotions[emotion].type}</strong><span>${emotions[emotion].advice}。${emotions[emotion].purpose}，建议${emotions[emotion].frequency}。</span></div>`).join(''); $('avoidAdvice').textContent = `${avoid.join('、')}：分数较低，暂时不要把它们当作主要表达。你的内容更适合从「${emotions[primary].type}」出发，保持真实比刻意补齐所有情绪更重要。`; $('completionCopy').textContent = `完成度 ${Math.round(answers.filter(selection => selection.length).length / questions.length * 100)}%`; $('signalCopy').textContent = ranked[0][1] - ranked[1][1] >= 3 ? '情绪信号清晰' : '情绪组合丰富'; $('emotionTags').innerHTML = ranked.slice(0, 4).map(([emotion, score], index) => `<span class="emotion-tag tag-${index}">${emotion} · ${emotions[emotion].type}<b>${score}</b></span>`).join('');
  const profile = [['MBTI 类型', mbtiType], ['行业赛道', answerText(8)], ['核心产品', answerText(9)], ['客单价', answerText(10)], ['交付方式', answerText(11)], ['用户性别', answerText(12)], ['用户年龄', answerText(13)], ['用户职业', answerText(14)], ['用户收入', answerText(15)], ['用户最怕', answerText(16)], ['用户最想要', answerText(17)], ['用户决策障碍', answerText(18)], ['主情绪', `${primary} · ${emotions[primary].type}`], ['辅助情绪 1', `${support[0]} · ${emotions[support[0]].type}`], ['辅助情绪 2', `${support[1]} · ${emotions[support[1]].type}`], ['避开情绪', avoid.join('、')], ['主推视频类型', emotions[primary].type], ['内容配比', `${primary} 60% + ${support[0]} 25% + ${support[1]} 15%`]];
  $('profileGrid').innerHTML = profile.map((item, index) => `<div class="profile-item ${index === 12 ? 'wide' : ''}"><span>${item[0]}</span><strong>${item[1]}</strong></div>`).join(''); $('headerStatus').textContent = '测评已完成';
}
function answerText(index) { const selection = answers[index]; return selection.length ? selection.map(answer => questions[index][2][answer][0]).join('、') : '未填写'; }
function ensureResultLayout() { const description = document.querySelector('.intro-description'); const note = document.querySelector('.micro-note'); if (description) description.textContent = '用情绪表达做爆款，用信任表达做成交。10 分钟找到属于你的情绪配方、内容比例和可直接执行的视频方向。'; if (note) note.textContent = '15 题 · 约 10 分钟 · 单选与多选'; const homeShare = $('shareTestButton'); const resultShare = $('shareResultButton'); const shareModal = $('shareModal'); if (homeShare) homeShare.remove(); if (resultShare) resultShare.remove(); if (shareModal) shareModal.remove(); const saveButton = $('saveImageButton'); const resultActions = document.querySelector('.result-actions'); if (saveButton && resultActions && !resultActions.contains(saveButton)) resultActions.prepend(saveButton); if (!$('dominantResult') && $('resultCard')) $('resultCard').insertAdjacentHTML('beforebegin', '<div id="dominantResult" class="dominant-result"><div class="dominant-orb"><span id="dominantEmotion">怒</span><small>主情绪</small></div><div class="dominant-copy"><p class="eyebrow">YOUR DOMINANT SIGNAL</p><h3><strong id="dominantType">立场型</strong>人格</h3><p id="dominantSummary">你最适合用清晰的立场和边界，让用户迅速记住你。</p><div class="dominant-meta"><span id="dominantScore">得分 0</span><span id="dominantFrequency">每周 1–2 条</span></div></div><div class="dominant-badge">TOP<br><strong>01</strong></div></div>'); }
function downloadResult() { const canvas = document.createElement('canvas'); canvas.width = 1200; canvas.height = 760; const context = canvas.getContext('2d'); context.fillStyle = '#202320'; context.fillRect(0, 0, canvas.width, canvas.height); context.fillStyle = '#d8ef72'; context.fillRect(70, 72, 95, 10); context.fillStyle = '#f4f1ea'; context.font = '700 24px sans-serif'; context.fillText('FOUNDER IP PROFILE', 70, 145); context.font = '600 58px serif'; context.fillText($('resultTitle').textContent, 70, 215); context.fillStyle = '#aeb3a9'; context.font = '20px sans-serif'; context.fillText($('resultSubtitle').textContent, 70, 255); const rows = [...document.querySelectorAll('.score-bar-row')]; rows.forEach((row, index) => { const y = 335 + index * 38; context.fillStyle = '#f4f1ea'; context.font = '700 18px sans-serif'; context.fillText(row.children[0].textContent, 75, y); context.fillStyle = '#424940'; context.fillRect(125, y - 14, 700, 11); context.fillStyle = '#d8ef72'; context.fillRect(125, y - 14, 700 * parseFloat(row.children[1].firstElementChild.style.width) / 100, 11); context.fillStyle = '#aeb3a9'; context.font = '16px sans-serif'; context.fillText(row.children[2].textContent, 850, y); }); context.fillStyle = '#ff795f'; context.font = '700 22px sans-serif'; context.fillText('内容配比  60% + 25% + 15%', 70, 680); context.fillStyle = '#aeb3a9'; context.font = '16px sans-serif'; context.fillText('创始人 IP 情绪风格测评 · 保存于你的内容档案', 70, 720); const link = document.createElement('a'); link.download = '创始人IP情绪风格测评结果.png'; link.href = canvas.toDataURL('image/png'); link.click(); }

function downloadResult() {
  const canvas = document.createElement('canvas'); canvas.width = 1400; canvas.height = 1780; const context = canvas.getContext('2d'); const ranked = calculate(); const primary = ranked[0][0];
  const rounded = (x, y, width, height, radius, fill, stroke) => { context.beginPath(); context.roundRect(x, y, width, height, radius); context.fillStyle = fill; context.fill(); if (stroke) { context.strokeStyle = stroke; context.stroke(); } };
  const wrapped = (text, x, y, width, lineHeight, color, font) => { context.fillStyle = color; context.font = font; let line = ''; let cursorY = y; [...text].forEach(character => { const next = line + character; if (context.measureText(next).width > width && line) { context.fillText(line, x, cursorY); line = character; cursorY += lineHeight; } else line = next; }); if (line) context.fillText(line, x, cursorY); return cursorY; };
  context.fillStyle = '#f6f1fb'; context.fillRect(0, 0, canvas.width, canvas.height); context.fillStyle = '#e7d7ff'; context.fillRect(0, 0, canvas.width, 290); context.fillStyle = '#6d43d9'; context.fillRect(82, 75, 118, 12); context.fillStyle = '#211b32'; context.font = '700 24px sans-serif'; context.fillText('FOUNDER IP / EMOTIONAL POSITIONING', 82, 135); context.font = '600 58px serif'; context.fillText('创始人 IP 情绪风格报告', 82, 210); context.fillStyle = '#777083'; context.font = '20px sans-serif'; context.fillText('用情绪表达做爆款，用信任表达做成交。', 84, 252);
  rounded(70, 330, 1260, 310, 28, '#2b1d43'); context.fillStyle = '#d9f47b'; context.font = '700 18px sans-serif'; context.fillText('YOUR DOMINANT SIGNAL · TOP 01', 110, 390); context.fillStyle = '#ffffff'; context.font = '600 70px serif'; context.fillText(`${primary}型人格`, 110, 480); wrapped(`${emotions[primary].advice}。你的内容首先要让用户感受到${emotions[primary].purpose.replace('建立人设、', '').replace('、替用户说话', '')}。`, 112, 535, 760, 34, '#ded1ea', '20px sans-serif'); context.fillStyle = '#d9f47b'; context.beginPath(); context.arc(1160, 470, 105, 0, Math.PI * 2); context.fill(); context.fillStyle = '#2b1d43'; context.textAlign = 'center'; context.font = '700 74px serif'; context.fillText(primary, 1160, 490); context.font = '16px sans-serif'; context.fillText(`${emotions[primary].type} · 得分 ${ranked[0][1]}`, 1160, 530); context.textAlign = 'left';
  context.fillStyle = '#777083'; context.font = '700 16px sans-serif'; context.fillText('七情绪分布 · 从高到低', 82, 705); ranked.forEach(([emotion, score], index) => { const y = 765 + index * 45; context.fillStyle = '#211b32'; context.font = '700 19px sans-serif'; context.fillText(`${String(index + 1).padStart(2, '0')}  ${emotion}`, 90, y); rounded(230, y - 18, 760, 14, 7, '#e1d9eb'); rounded(230, y - 18, Math.max(25, 760 * score / (ranked[0][1] || 1)), 14, 7, index === 0 ? '#6d43d9' : '#b175d8'); context.fillStyle = '#777083'; context.font = '16px sans-serif'; context.fillText(`${score} · ${emotions[emotion].type}`, 1030, y); });
  rounded(70, 1135, 600, 270, 22, '#ffffff', '#ded6ea'); rounded(700, 1135, 630, 270, 22, '#ffffff', '#ded6ea'); context.fillStyle = '#6d43d9'; context.font = '700 15px sans-serif'; context.fillText('CONTENT DIRECTION', 105, 1185); context.fillStyle = '#211b32'; context.font = '600 29px serif'; context.fillText('内容配比', 105, 1235); context.font = '700 22px sans-serif'; context.fillText(`${primary} 60% + ${ranked[1][0]} 25% + ${ranked[2][0]} 15%`, 105, 1290); wrapped(`主情绪：${emotions[primary].advice}。辅助情绪：${emotions[ranked[1][0]].advice}。`, 105, 1345, 500, 28, '#777083', '17px sans-serif'); context.fillStyle = '#6d43d9'; context.font = '700 15px sans-serif'; context.fillText('ACTION NOTES', 735, 1185); context.fillStyle = '#211b32'; context.font = '600 29px serif'; context.fillText('下一步这样拍', 735, 1235); wrapped(`主推类型：${emotions[primary].type}。${emotions[primary].purpose}。${emotions[primary].frequency}。`, 735, 1290, 520, 28, '#777083', '17px sans-serif');
  context.fillStyle = '#777083'; context.font = '700 15px sans-serif'; context.fillText('IP 情绪风格档案卡', 82, 1500); const profileRows = [...document.querySelectorAll('.profile-item')].slice(0, 9); profileRows.forEach((item, index) => { const x = 82 + (index % 3) * 425; const y = 1540 + Math.floor(index / 3) * 62; context.fillStyle = '#777083'; context.font = '13px sans-serif'; context.fillText(item.querySelector('span').textContent, x, y); context.fillStyle = '#211b32'; context.font = '600 16px sans-serif'; context.fillText(item.querySelector('strong').textContent.slice(0, 22), x, y + 26); }); context.fillStyle = '#aaa0b4'; context.font = '14px sans-serif'; context.fillText('创始人 IP 情绪风格测评 · 结果报告', 82, 1740);
  const link = document.createElement('a'); link.download = '创始人IP情绪风格完整结果报告.png'; link.href = canvas.toDataURL('image/png'); link.click();
}

ensureResultLayout(); $('startButton').addEventListener('click', () => { current = 0; answers = Array.from({ length: questions.length }, () => []); show('quizView'); $('headerStatus').textContent = '正在测评'; renderQuestion(); }); $('prevButton').addEventListener('click', () => { if (current > 0) { current--; renderQuestion(); } }); $('nextButton').addEventListener('click', () => { if (current < questions.length - 1) { current++; renderQuestion(); } else { renderResults(); show('resultView'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }); $('restartButton').addEventListener('click', () => { show('introView'); $('headerStatus').textContent = '准备开始'; window.history.replaceState({}, '', window.location.pathname); window.scrollTo({ top: 0, behavior: 'smooth' }); }); $('saveImageButton').addEventListener('click', downloadResult); loadSharedResult();

function refreshIntroCopy() {
  const description = document.querySelector('.intro-description');
  const note = document.querySelector('.micro-note');
  const legacyFrequency = $('dominantFrequency');
  if (legacyFrequency) {
    legacyFrequency.id = 'dominantPurpose';
    legacyFrequency.textContent = '';
  }
  if (description) description.innerHTML = '用情绪表达做爆款，让更多人看到你<br>用信任表达做成交，让更多人选择你<br>通过 MBTI、七情情绪和用户画像，找到适合你的短视频表达风格与拍摄方向';
  if (note) note.textContent = '33 题 · 约 10 分钟 · 含 2 题可选';
}

refreshIntroCopy();
