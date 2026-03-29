import { business } from "@/content/business";
import type { Dictionary } from "@/content/i18n/schema";

export const zh = {
  localeLabel: "中文",
  meta: {
    siteDescription: "面向墨尔本及全澳客户的精品会计与税务服务网站，适合个人、投资者与小型企业客户。",
    keywords: [
      "墨尔本会计师",
      "墨尔本税务会计",
      "墨尔本华人会计",
      "澳洲报税会计",
      "墨尔本小企业会计",
      "BAS GST 会计 墨尔本"
    ]
  },
  nav: {
    links: [
      { label: "首页", href: "" },
      { label: "关于我们", href: "/about" },
      { label: "服务项目", href: "/services" },
      { label: "常见问题", href: "/faq" },
      { label: "洞察文章", href: "/insights" },
      { label: "联系我们", href: "/contact" }
    ],
    ctaLabel: "预约咨询",
    mobileMenuLabel: "打开导航菜单",
    languageSwitcherLabel: "切换语言"
  },
  common: {
    homeLabel: "首页",
    skipToContent: "跳到主要内容",
    learnMore: "了解更多",
    exploreServices: "查看服务",
    contactUs: "联系我们",
    readMore: "继续阅读",
    viewAllFaqs: "查看全部问答"
  },
  footer: {
    description: "为个人与成长型企业提供清晰、细致、可信赖的会计与税务支持，帮助客户更从容地处理税务事务。",
    quickLinksTitle: "快速链接",
    servicesTitle: "主要服务",
    contactTitle: "联系方式",
    serviceAreaLabel: "服务范围",
    privacyLabel: "隐私政策",
    rightsReserved: "保留所有权利。"
  },
  home: {
    metaTitle: "墨尔本会计与税务服务",
    metaDescription: "面向墨尔本及全澳客户的专业会计与税务支持，适合个人报税、企业税务与 ATO 相关事务。",
    hero: {
      eyebrow: "墨尔本会计与税务事务所",
      title: "为个人与成长型企业提供清晰、稳妥、值得信赖的会计与税务支持。",
      description:
        "无论是个人报税、投资与房产税务，还是企业合规与 ATO 沟通，我们都以清晰解释、细致审阅和稳健流程帮助客户更安心地推进每一步。",
      primary: { label: "预约咨询", href: "/contact" },
      secondary: { label: "查看服务", href: "/services" },
      trustPoints: [
        "聚焦澳洲个人与企业常见税务场景",
        "适合投资者、小企业与需要双语沟通的客户",
        "重视长期清晰度，而不仅是一次性提交"
      ],
      panel: {
        title: "从最贴合你情况的服务方向开始。",
        description: "如果你暂时不确定，也可以先提交咨询，我们会协助你判断下一步。",
        expectationsLabel: "你可以期待的服务体验",
      },
      quickLinks: {
        title: "常见咨询起点",
        description: "大多数咨询都会先落在这几个核心服务之一。"
      }
    },
    trustBar: ["立足墨尔本", "服务个人与小企业", "中英双语网站架构"],
    services: {
      eyebrow: "核心服务",
      title: "围绕真实客户需求建立的重点服务结构。",
      description:
        "核心服务围绕客户最常见的税务与合规需求展开，方便快速找到合适的入口。",
      cards: [
        {
          title: "个人税务",
          description: "个人报税、投资收入、ETF 与股票、出租房、资本利得税，以及更复杂的收入情况。",
          href: "/services/individual-tax",
          tag: "个人客户"
        },
        {
          title: "企业税务",
          description: "面向 sole trader、company 与 trust 的税务与合规支持，并提供实务层面的业务建议。",
          href: "/services/business-tax",
          tag: "企业客户"
        },
        {
          title: "BAS 与 GST",
          description: "协助季度申报、GST 处理与账务衔接，让日常合规流程更顺畅。",
          href: "/services/business-tax",
          tag: "合规支持"
        },
        {
          title: "ATO 协助",
          description: "当 ATO 发来审查、询问或资料要求时，提供更清晰、更稳妥的应对支持。",
          href: "/services/ato-support",
          tag: "ATO 事项"
        },
        {
          title: "税务规划",
          description: "帮助客户更早梳理税务决策，而不是等到截止日期前才被动处理。",
          href: "/services/business-tax",
          tag: "前瞻规划"
        },
        {
          title: "投资与房产税务",
          description: "适合持有股票、ETF、出租房或涉及资本利得事项的客户。",
          href: "/services/individual-tax",
          tag: "投资客户"
        }
      ]
    },
    values: {
      eyebrow: "为什么选择我们",
      title: "专业、温和、细致，让税务支持更让人安心。",
      description: "我们希望客户感受到的是稳妥与清晰，而不是复杂术语、仓促流程或难以跟进的沟通。",
      items: [
        {
          title: "沟通清楚",
          description: "我们会说明下一步要做什么、为什么要这样做，以及客户需要准备哪些资料。"
        },
        {
          title: "细节扎实",
          description: "税务工作往往成败在细节，我们重视审阅、记录与资料逻辑的一致性。"
        },
        {
          title: "建议务实",
          description: "建议会结合客户真实情况、时间节点与资料条件，而不是停留在空泛表述。"
        },
        {
          title: "跟进及时",
          description: "保持专业响应与明确节奏，让客户知道当前进展与接下来的安排。"
        }
      ]
    },
    audiences: {
      eyebrow: "我们服务哪些客户",
      title: "围绕最常见、也最需要稳定支持的客户群体展开。",
      description: "我们主要服务个人客户、投资者与小型企业，尤其适合重视清晰沟通与稳妥处理的人群。",
      items: [
        {
          title: "情况逐渐复杂的个人客户",
          description: "例如拥有多项收入、投资、扣除项目，或近期发生身份、工作、家庭变化的客户。"
        },
        {
          title: "投资者与房产持有人",
          description: "适合持有股票、ETF、出租房，或需要更清晰处理资本利得事项的客户。"
        },
        {
          title: "小型企业经营者",
          description: "包括 sole trader、company 与 trust，希望获得更稳妥的税务与合规支持。"
        },
        {
          title: "重视中文沟通体验的家庭与创业者",
          description: "在税务义务、资料准备与 ATO 往来中，清楚的双语表达能显著降低沟通压力。"
        }
      ]
    },
    process: {
      eyebrow: "合作流程",
      title: "简单清楚的流程，让每一步都更从容。",
      description: "我们希望客户在进入服务后，始终知道现在发生什么、下一步是什么。",
      steps: [
        {
          title: "先告诉我们你的情况",
          description: "通过咨询表单或初步沟通，说明你的税务、企业或 ATO 相关情况。"
        },
        {
          title: "我们审阅并给出建议",
          description: "梳理工作范围、所需资料、关键问题与最合理的下一步安排。"
        },
        {
          title: "进入准备与支持阶段",
          description: "在资料整理、申报准备或 ATO 回复过程中，保持清晰且稳健的沟通。"
        },
        {
          title: "你更清楚地继续往前走",
          description: "最终不仅完成当前事项，也更了解后续的时间点、合规要求与决策重点。"
        }
      ]
    },
    faqPreview: {
      eyebrow: "常见问题预览",
      title: "在联系之前，先快速了解几个常见问题。",
      description: "先用几个常见问题帮助你快速判断当前需求与下一步方向。",
      items: [
        {
          question: "你们只服务墨尔本客户吗？",
          answer: "不是。墨尔本是重点服务市场，但也可以根据情况支持全澳远程客户。"
        },
        {
          question: "如果我的税务情况比普通报税复杂，你们也能处理吗？",
          answer: "可以。个人税务服务覆盖投资、房产、资本利得以及较复杂的收入情况。"
        },
        {
          question: "联系前我需要先准备好全部资料吗？",
          answer: "不需要。先提供一个简要说明即可，我们会再告诉你下一步需要准备哪些关键文件。"
        }
      ]
    },
    cta: {
      title: "想先聊聊你的税务或会计需求？",
      description: "通过咨询表单告诉我们你的情况，我们可以进一步说明合适的服务方向与下一步安排。",
      primary: { label: "联系我们", href: "/contact" },
      secondary: { label: "查看常见问题", href: "/faq" }
    }
  },
  about: {
    metaTitle: "关于事务所",
    metaDescription: "了解事务所的服务理念、负责人介绍，以及网站背后的专业定位与沟通方式。",
    hero: {
      eyebrow: "关于我们",
      title: "以清晰、细致与长期信任为核心的精品会计与税务事务所。",
      description:
        "了解事务所的服务理念、沟通方式，以及客户可以期待的合作体验。"
    },
    founder: {
      title: business.founderName,
      role: "创始人",
      summary: [
        `事务所由 ${business.founderName} 负责，专注于提供更有条理、更值得信赖的会计与税务支持。`,
        "我们希望客户在接触服务时感受到的是专业与安心，而不是过度销售、复杂术语或沟通上的距离感。",
        "事务所重视清晰解释、审慎判断与长期有用的建议，而不只是完成一次性提交。"
      ],
      warmNote: "客户可以期待专业、温和且容易沟通的合作方式，让税务事项更容易理解和推进。"
    },
    philosophy: {
      title: "服务理念",
      description: "好的专业服务，不只是完成工作，更是让客户清楚理解自己的位置与下一步。",
      items: [
        {
          title: "先让事情变清楚",
          description: "客户应该知道当前问题是什么、为什么重要，以及下一步最值得先处理什么。"
        },
        {
          title: "把细节做扎实",
          description: "很多看起来普通的税务事务，真正决定质量的往往是审阅、记录与跟进细节。"
        },
        {
          title: "建议要贴近实际",
          description: "所有建议都会结合客户的真实收入结构、资料条件、时间安排与业务阶段。"
        }
      ]
    },
    qualifications: {
      title: "资质与注册信息",
      description: "这里列出事务所的专业资质，方便客户快速了解。",
      items: ["澳洲注册税务代理（Registered Tax Agent）", "澳洲特许会计师（Chartered Accountant）"]
    },
    reasons: {
      title: "为什么客户愿意选择精品事务所",
      description: "很多客户希望获得的并不是更响亮的营销口号，而是更清楚、更可靠的专业合作体验。",
      items: [
        {
          title: "更重视背景与上下文",
          description: "当客户情况并不完全标准化时，精品事务所更适合做深入了解与细致处理。"
        },
        {
          title: "更适合双语沟通",
          description: "中英文沟通有助于许多家庭与创业者更轻松地讨论税务事项。"
        },
        {
          title: "更适合建立长期关系",
          description: "目标不只是完成一次申报，而是帮助客户逐渐建立更清晰的税务节奏与记录习惯。"
        }
      ]
    },
    cta: {
      title: "如果你正在寻找更清晰、更可靠的税务支持，可以从一次咨询开始。",
      description: "告诉我们你的情况，我们会协助判断适合的服务方向与下一步安排。",
      primary: { label: "联系事务所", href: "/contact" },
      secondary: { label: "查看服务", href: "/services" }
    }
  },
  servicesPage: {
    metaTitle: "服务项目",
    metaDescription: "查看个人税务、企业税务、ATO 协助等核心服务，适合墨尔本及全澳客户的会计税务支持。",
    hero: {
      eyebrow: "服务项目",
      title: "围绕清晰度、合规性与实际支持而设计的服务结构。",
      description:
        "服务分类的目的，是让客户更快找到与自己情况最接近的支持方向。"
    },
    intro:
      "当前服务范围覆盖个人税务、企业税务、BAS、GST 与 ATO 相关事项中的常见需求。",
    cards: [
      {
        title: "个人税务",
        description: "适合个人报税、投资收入、出租房、资本利得税与较复杂收入结构的客户。",
        href: "/services/individual-tax",
        tag: "核心服务"
      },
      {
        title: "企业税务",
        description: "支持 sole trader、company 与 trust，涵盖 BAS、GST、合规申报与实务建议。",
        href: "/services/business-tax",
        tag: "核心服务"
      },
      {
        title: "ATO 协助",
        description: "帮助客户更有条理地应对 ATO 审查、询问、资料要求与相关沟通。",
        href: "/services/ato-support",
        tag: "核心服务"
      },
      {
        title: "BAS 与 GST 协调",
        description: "适合需要提升季度流程清晰度、账务衔接与申报把握度的企业客户。",
        href: "/services/business-tax",
        tag: "延伸支持"
      },
      {
        title: "投资与房产税务",
        description: "面向股票、ETF、出租房与资本事项较多的个人客户。",
        href: "/services/individual-tax",
        tag: "延伸支持"
      },
      {
        title: "税务规划与持续建议",
        description: "适合希望在截止日期之前就更早掌握税务方向与准备节奏的客户。",
        href: "/contact",
        tag: "顾问支持"
      }
    ],
    supportAreas: {
      title: "相关支持方向",
      description: "除核心服务外，也可围绕相关税务问题、持续咨询与日常合规需求提供支持。",
      items: ["中文客户沟通支持", "墨尔本及全澳远程服务", "投资者与房东常见税务问题", "成长型企业的持续税务支持"]
    },
    process: {
      title: "所有服务都遵循同样清晰的合作逻辑",
      description: "不论是报税、企业合规还是 ATO 事项，处理节奏都会保持一致且容易理解。",
      steps: [
        {
          title: "先确认情况",
          description: "了解工作性质、时间点、复杂度与当前资料情况。"
        },
        {
          title: "再界定范围与建议",
          description: "说明需要处理的重点、潜在风险，以及最合理的下一步。"
        },
        {
          title: "进入准备与支持",
          description: "在处理过程中持续保持清楚沟通与稳妥推进。"
        }
      ]
    },
    cta: {
      title: "如果还不确定你的情况应该归入哪一类服务，也没关系。",
      description: "先发送简要咨询，我们可以协助你判断更适合的服务方向。",
      primary: { label: "联系我们", href: "/contact" },
      secondary: { label: "查看常见问题", href: "/faq" }
    }
  },
  serviceDetails: {
    individualTax: {
      metaTitle: "个人税务服务",
      metaDescription: "面向个人报税、投资收入、出租房、资本利得税及复杂收入情况的税务支持。",
      hero: {
        eyebrow: "个人税务",
        title: "让个人报税与投资税务处理更清楚、更稳妥。",
        description:
          "这一服务页面向个人客户、投资者与税务情况逐渐复杂的家庭，帮助他们更安心地完成报税与资料整理。"
      },
      overview: {
        title: "服务覆盖内容",
        body: "首页与服务架构的重点之一，就是为高频且更有商业价值的个人税务场景提供清晰入口。",
        bullets: [
          "年度个人报税准备与审阅",
          "投资收入，包括股票与 ETF",
          "出租房收入与扣除项目",
          "资本利得税相关支持",
          "收入结构较复杂时的资料与逻辑梳理"
        ]
      },
      highlightsTitle: "适用场景",
      highlights: [
        {
          title: "不仅仅是简单报税",
          description: "当你的报税涉及多个收入来源、扣除项目或需要更多说明时，这项服务更有价值。"
        },
        {
          title: "投资收入与资本事项",
          description: "适合涉及分红、基金、ETF、股票处置等事项，需要更清楚整理的人群。"
        },
        {
          title: "出租房与房产税务",
          description: "帮助房东更稳妥地处理收入、支出、记录与相关税务问题。"
        }
      ],
      suitableTitle: "这项服务适合哪些客户",
      suitableItems: [
        "收入与扣除项目较多的个人客户",
        "持有股票、ETF 或基金的投资者",
        "拥有出租房的纳税人",
        "希望把税务资料整理得更清楚的家庭"
      ],
      faqTitle: "个人税务常见问题",
      faqItems: [
        {
          question: "你们可以处理股票、ETF 或资本利得税吗？",
          answer: "可以。这些正是此服务页面重点覆盖的高频复杂税务场景。"
        },
        {
          question: "联系前我需要先整理好全部资料吗？",
          answer: "不需要。先说明基本情况即可，我们会再告诉你哪些文件最值得优先准备。"
        },
        {
          question: "如果我不在墨尔本，也可以咨询吗？",
          answer: "可以。墨尔本是重点市场，但也可根据情况支持全澳远程客户。"
        }
      ],
      cta: {
        title: "如果你的个人税务情况比普通报税更复杂，欢迎先和我们聊一聊。",
        description: "把你的基本情况告诉我们，我们会说明下一步如何展开。",
        primary: { label: "立即咨询", href: "/contact" },
        secondary: { label: "返回服务页", href: "/services" }
      }
    },
    businessTax: {
      metaTitle: "企业税务服务",
      metaDescription: "面向 sole trader、company 与 trust 的企业税务支持，涵盖 BAS、GST 与日常合规。",
      hero: {
        eyebrow: "企业税务",
        title: "让企业税务与合规工作更有条理，而不是总在最后一刻赶进度。",
        description:
          "这项服务特别适合希望建立更稳定税务节奏的小型企业主，包括 BAS、GST、申报与日常协调支持。"
      },
      overview: {
        title: "服务覆盖内容",
        body: "页面聚焦澳洲小企业最常见、最需要稳定支持的税务与合规场景。",
        bullets: [
          "支持 sole trader、company 与 trust",
          "BAS 与 GST 审阅或协调",
          "税务合规准备",
          "与 bookkeeping 流程的配合支持",
          "成长型小企业的实务税务建议"
        ]
      },
      highlightsTitle: "适用场景",
      highlights: [
        {
          title: "季度与年度合规压力较大",
          description: "适合希望把 BAS、GST 与年度工作节奏梳理得更清楚的企业客户。"
        },
        {
          title: "账务与申报衔接不够顺畅",
          description: "如果 bookkeeping 与申报之间常常出现信息断层，这项服务会特别有帮助。"
        },
        {
          title: "老板需要更实际的税务判断",
          description: "除了完成合规工作，也帮助企业主更清楚当前重点与接下来的安排。"
        }
      ],
      suitableTitle: "这项服务适合哪些客户",
      suitableItems: [
        "希望更稳定处理税务事项的 sole trader",
        "需要清晰合规支持的 company 与 trust",
        "想提升 BAS 与 GST 把握度的小企业主",
        "需要协调账务、记录与申报流程的经营者"
      ],
      faqTitle: "企业税务常见问题",
      faqItems: [
        {
          question: "这项服务只做报税，还是也能做持续支持？",
          answer: "可以做持续支持。页面定位并不局限于一次性提交，而是适合长期合规与税务配合。"
        },
        {
          question: "你们可以和现有 bookkeeper 配合吗？",
          answer: "可以。企业税务服务可以根据需要与现有 bookkeeping 流程配合，帮助提升申报与记录衔接。"
        },
        {
          question: "适合新成立或正在成长的小企业吗？",
          answer: "适合。页面内容本身就是围绕成长型小企业的常见需求来设计的。"
        }
      ],
      cta: {
        title: "如果你想让企业税务流程更清晰、更可控，可以先发来简要咨询。",
        description: "告诉我们你的业务结构与当前需求，我们会帮助判断最合适的下一步。",
        primary: { label: "联系事务所", href: "/contact" },
        secondary: { label: "查看全部服务", href: "/services" }
      }
    },
    atoSupport: {
      metaTitle: "ATO 协助服务",
      metaDescription: "当 ATO 发来审查、询问或资料要求时，提供更稳妥、更清晰的应对支持。",
      hero: {
        eyebrow: "ATO 协助",
        title: "当 ATO 来信需要处理时，让应对过程更有条理。",
        description:
          "很多客户在收到 ATO 通知后感到压力，通常不是因为问题一定很严重，而是因为时间、措辞与资料都需要更稳妥地处理。"
      },
      overview: {
        title: "服务覆盖内容",
        body: "此页面用于承接客户在 ATO 相关沟通中最常见、最需要帮助的几个场景。",
        bullets: [
          "ATO 审查支持",
          "税务风险审阅准备",
          "回复资料要求或询问",
          "文件与记录整理建议",
          "更实际的沟通与应对支持"
        ]
      },
      highlightsTitle: "适用场景",
      highlights: [
        {
          title: "先搞清楚 ATO 到底在问什么",
          description: "帮助客户理解来信内容、重点风险与最需要优先准备的资料。"
        },
        {
          title: "把回复过程整理得更清楚",
          description: "将零散资料与信息整合成更有逻辑的回应方式，减少来回沟通的压力。"
        },
        {
          title: "降低不必要的紧张与拖延",
          description: "当步骤与时间点都更明确时，客户会更容易稳定推进。"
        }
      ],
      suitableTitle: "这项服务适合哪些客户",
      suitableItems: [
        "收到 ATO 通知的个人客户",
        "面对审查或资料要求的企业主",
        "不确定该准备哪些文件的客户",
        "希望更冷静、有条理处理 ATO 事项的人"
      ],
      faqTitle: "ATO 协助常见问题",
      faqItems: [
        {
          question: "如果 ATO 已经给了截止日期，现在联系还来得及吗？",
          answer: "通常越早联系越好。只要还有处理空间，越早开始梳理资料与回应越稳妥。"
        },
        {
          question: "咨询时我需要提供什么？",
          answer: "建议提供问题简述、ATO 来信或通知，以及你知道的关键日期。"
        },
        {
          question: "这项服务只适用于严重争议吗？",
          answer: "不是。较早阶段的审阅、询问或资料要求，也非常适合尽早获得支持。"
        }
      ],
      cta: {
        title: "如果你正面对 ATO 来信或资料要求，欢迎尽快联系我们。",
        description: "把问题概要与相关时间点发给我们，我们可以协助判断下一步。",
        primary: { label: "立即联系", href: "/contact" },
        secondary: { label: "查看常见问题", href: "/faq" }
      }
    }
  },
  faqPage: {
    metaTitle: "常见问题",
    metaDescription: "整理关于服务范围、合作方式、联系前准备事项等常见问题，方便客户先快速了解。",
    hero: {
      eyebrow: "常见问题",
      title: "先了解几个客户最常问的问题",
      description: "这里整理了关于服务范围、合作方式与咨询准备的常见问题。"
    },
    groups: [
      {
        title: "关于合作方式",
        description: "适合第一次接触事务所时最常见的问题。",
        items: [
          {
            question: "你们通常服务哪些客户？",
            answer: "目前网站定位主要面向个人、投资者与小型企业，尤其适合希望获得更清晰沟通与细致支持的客户。"
          },
          {
            question: "你们只服务墨尔本客户吗？",
            answer: "不是。墨尔本是主要目标市场，但也可以根据情况支持全澳远程客户。"
          },
          {
            question: "联系前必须把所有资料准备齐吗？",
            answer: "不需要。先有一个基本说明就足够，我们会再告知哪些资料最值得优先整理。"
          }
        ]
      },
      {
        title: "关于服务范围",
        description: "帮助客户快速判断网站当前提供的核心服务。",
        items: [
          {
            question: "你们同时处理个人与企业税务吗？",
            answer: "是的。网站首版重点覆盖个人税务、企业税务与 ATO 协助三大服务方向。"
          },
          {
            question: "BAS 与 GST 也可以协助吗？",
            answer: "可以。BAS 与 GST 支持归在企业税务服务内，适合需要更稳妥季度流程的客户。"
          },
          {
            question: "出租房、投资收入这类情况也适合咨询吗？",
            answer: "适合。这些正是个人税务页面重点覆盖的复杂场景之一。"
          }
        ]
      },
      {
        title: "关于开始咨询",
        description: "说明咨询时应该提供哪些内容，以及网站目前的双语定位。",
        items: [
          {
            question: "咨询时应该写些什么？",
            answer: "建议简要说明你的情况、时间要求，以及是否涉及 ATO 来信或较复杂的资料背景。"
          },
          {
            question: "多久会收到回复？",
            answer: "大多数咨询会在 1 至 2 个工作日内收到回复。"
          },
          {
            question: "网站支持中文与英文吗？",
            answer: "支持。中文与英文沟通都可以帮助客户更清楚地说明情况并理解下一步。"
          }
        ]
      }
    ],
    cta: {
      title: "如果你的问题没有在这里出现，也欢迎直接联系我们。",
      description: "告诉我们你的情况，我们会帮助你判断更合适的服务方向。",
      primary: { label: "联系我们", href: "/contact" },
      secondary: { label: "查看服务", href: "/services" }
    }
  },
  contactPage: {
    metaTitle: "联系我们",
    metaDescription: "联系事务所，咨询个人税务、企业税务、BAS、GST 或 ATO 相关支持。",
    hero: {
      eyebrow: "联系我们",
      title: "从一次清楚的咨询开始。",
      description:
        "通过咨询表单简要说明你的情况，我们会进一步判断服务是否合适、下一步需要准备什么，以及可能的处理方向。"
    },
    intro: "表单保持简洁，但足够收集做出第一轮判断所需的关键信息，适合移动端和桌面端填写。",
    detailsTitle: "事务所信息",
    detailsDescription: "你可以直接使用以下方式联系事务所，或通过表单提交咨询。",
    details: [
      { label: "事务所名称", value: business.name },
      { label: "ABN", value: business.abn },
      { label: "邮箱", value: business.email, href: `mailto:${business.email}` },
      { label: "微信", value: business.weChat, href: `https://weChat.com/${business.weChat}` }
    ],
    serviceAreaTitle: "服务范围",
    serviceAreaText: `${business.city}, ${business.state}，并可支持全澳远程客户。`,
    formTitle: "发送咨询",
    formDescription: "告诉我们你需要帮助的事项，以及是否有时间点、复杂情况或 ATO 相关背景。",
    responseNote: "大多数咨询会在 1 至 2 个工作日内收到回复。"
  },
  contactForm: {
    nameLabel: "姓名",
    namePlaceholder: "请输入你的姓名",
    emailLabel: "邮箱",
    emailPlaceholder: "you@example.com",
    phoneLabel: "电话（可选）",
    phonePlaceholder: "方便联系你的号码",
    serviceLabel: "需要的服务",
    servicePlaceholder: "请选择服务",
    messageLabel: "留言内容",
    messagePlaceholder: "请简要说明你的情况、时间安排，以及是否涉及 ATO 或较复杂税务事项。",
    honeypotLabel: "公司名称",
    serviceOptions: ["个人税务", "企业税务", "ATO 协助", "BAS / GST", "一般咨询"],
    submitLabel: "提交咨询",
    submittingLabel: "提交中...",
    successTitle: "已收到你的咨询。",
    successBody: "我们已收到你的咨询，并会尽快查看相关内容后回复你。",
    errorTitle: "提交失败，请稍后再试。",
    errorBody: "你也可以改用页面上的邮箱方式直接联系事务所。",
    privacyNotice: "提交表单即表示你同意我们使用所填写的信息来回复你的咨询。",
    fieldErrors: {
      name: "请填写至少 2 个字符的姓名。",
      email: "请输入有效的邮箱地址。",
      phone: "电话号码仅可填写数字，开头最多可加一个 +。",
      service: "请选择或填写你需要的服务。",
      message: "请提供更具体的情况说明，方便我们判断下一步。"
    }
  },
  privacyPage: {
    metaTitle: "隐私政策",
    metaDescription: "说明网站咨询信息如何被收集、使用与保存的隐私说明。",
    hero: {
      eyebrow: "隐私政策",
      title: "隐私政策",
      description: "说明通过网站提交咨询时，相关信息会如何被处理与保存。"
    },
    intro:
      "本政策用于说明你通过网站提交咨询时，相关信息如何被收集、使用与管理。",
    sections: [
      {
        title: "我们收集哪些信息",
        body: [
          "当你通过网站提交咨询时，我们可能会收集你的姓名、邮箱、电话，以及你主动提供的咨询内容。",
          "在配置分析工具后，网站也可能收集基础访问数据，以帮助了解网站使用情况。"
        ]
      },
      {
        title: "我们如何使用这些信息",
        body: [
          "这些信息主要用于回应咨询、判断服务范围，并与潜在客户进行后续沟通。",
          "在必要时，也可能用于业务管理、记录保存与合规目的。"
        ]
      },
      {
        title: "信息保存与披露",
        body: [
          "提交的信息可能会保存在用于管理咨询与客户沟通的安全系统中。",
          "除非为提供服务、符合法律义务或经过你的同意，我们不会随意披露个人信息。"
        ]
      },
      {
        title: "政策更新",
        body: [
          "本政策可能会根据业务流程、法律要求或合规安排的变化进行更新。",
          "网站上发布的版本应始终视为最新版本。"
        ]
      }
    ],
    contactPrompt: "如果你对隐私处理有疑问，请通过联系页面中的方式与事务所联系。"
  },
  insightsPage: {
    metaTitle: "洞察文章",
    metaDescription: "围绕澳洲个人税务、企业合规、BAS、GST 与 ATO 事项整理的实用文章，适合个人、投资者与小企业客户。",
    hero: {
      eyebrow: "洞察文章",
      title: "围绕澳洲常见税务场景整理的实用文章。",
      description:
        "从个人税务到企业合规与 ATO 沟通，这里会持续整理更清楚、也更容易理解的重点内容。"
    },
    archive: {
      resultsTitle: "最新发布",
      resultsDescription: "先从最近发布的文章开始，也可以继续按年份和月份浏览下方归档。",
      yearLabel: "年份",
      monthLabel: "月份",
      allDatesLabel: "全部日期",
      clearFiltersLabel: "清除筛选",
      noResultsTitle: "当前筛选下还没有文章。",
      noResultsDescription: "可以切换其他月份或年份，或返回完整文章列表。",
      previousPageLabel: "上一页",
      nextPageLabel: "下一页",
      pageLabel: "第"
    },
    cta: {
      title: "如果你的情况需要更直接的建议，也欢迎联系我们。",
      description: "如果你希望结合自身情况进一步判断下一步，可以直接向事务所发起咨询。",
      primary: { label: "联系事务所", href: "/contact" },
      secondary: { label: "查看服务", href: "/services" }
    }
  },
  notFound: {
    title: "页面不存在",
    description: "你访问的页面可能已经移动，或暂时无法使用。",
    primary: { label: "返回首页", href: "" },
    secondary: { label: "查看服务", href: "/services" }
  }
} satisfies Dictionary;
