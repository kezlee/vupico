import sdp1 from '../../../public/sdp/4.png'
import sdp2 from '../../../public/sdp/view-building-with-airport-ship-port_18660-1088.png'
import sdp3 from '../../../public/sdp/LCA Project.png'
import sdp4 from '../../../public/sdp/Home Screen Mockup.png'
import sdp5 from '../../../public/sdp/isometric-modern-cityscape-template_1284-39383.png'
import { faClipboard, faClone, faLineChart, faNetworkWired, faObjectUngroup } from '@fortawesome/free-solid-svg-icons'
import Banner1 from "../../../public/home/accelerate.jpeg";
import Banner2 from "../../../public/home/track-value.jpeg";
import Banner3 from "../../../public/home/innovate.jpeg";
import Industries1 from "../../../public/sdp/imagee.png";
import Industries2 from "../../../public/sdp/imagee2.png";
import Industries3 from "../../../public/sdp/imagee3.png";
import Industries4 from "../../../public/sdp/imagee4.png";
import Industries5 from "../../../public/sdp/imagee5.png";
import Industries6 from "../../../public/sdp/imagee6.png";
import SolutionSuite1 from "../../../public/sdp/s1.png";
import SolutionSuite2 from "../../../public/sdp/s2.png";
import SolutionSuite3 from "../../../public/sdp/s3.png";
import SolutionSuite4 from "../../../public/sdp/s4.png";
import { faFacebook, faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export const NavLinks = [
  { label: "Home", url: "/" },
  { label: "SDP", url: "/sdp" },
  { label: "Services", url: "/services" },
];

export const sdpModules = [
  {content: 'Extended Producer Responsibility', icon: faLineChart},
  {content: 'Life Cycle Assessment (LCA)', icon: faObjectUngroup},
  {content: 'Carbon Management', icon: faNetworkWired },
  {content: 'Supplier Data Protocol', icon: faClipboard},
  {content: 'Environmental, Social and Governance', icon: faClone},
  {content: 'Master Data Governance Sustainability(MDG-S)', icon: faClone},
]

export const socialList = [
  {icon: faTwitter, url: ''},
  {icon: faLinkedin, url: ''},
  {icon: faYoutube, url: ''},
]

export const HomeBanners = [
  {imgUrl: Banner1, altTxt: "Accelerate"},
  {imgUrl: Banner2, altTxt: "Track Value"},
  {imgUrl: Banner3, altTxt: "Innovate"},
]

export const TestimonialSocialList = [
  {icon: faFacebook, url: ''},
  {icon: faTwitter, url: ''},
  {icon: faLinkedin, url: ''},
  {icon: faGithub, url: ''},
]

export const SdpContentEmpowering = [
  {
    isImageLeft: false,
    imgUrl: sdp1,
    description: 'Are you a manufacturer, distributor, importer, or do you trade globally? If so, your firm is impacted by international legislation around CO2 emissions, water, palm oil, paper, packaging etc. Conditions imposed by regulations such as:',
    list: [
      'Extended Producer Responsibility (EPR) includes licensing, disposal, recycling, and routine reporting obligations.',
      'Environmental Social Governance (ESG) including Carbon reporting, LCA, regulatory reports and beyond compliance reports.',
    ],
  },
  {
    isImageLeft: true,
    imgUrl: sdp2,
    description: 'VUPICO SDP enables organizations to execute their sustainable business strategy based on data and insights to drive sustainable transformation. We do this by providing a sustainability data platform that enables businesses to enrich, manage, and govern data, building a framework for efficient sustainability data models to support:',
    list: [
      'Regulatory reporting',
      'LCA / Carbon simulations to reduce environmental impact and drive cost efficiencies Providing insights and analysis across your supply-chain ecosystems',
      'AI and ML recommendations',
      'Future eco-labelling (certification)',
      'Traceability',
    ],
    button: {text: 'Talk to us', url: ''},
  },
]

export const sdpContentHow = [
  {
    isImageLeft: true,
    imgUrl: sdp3,
    description: 'By capturing and integrating your raw data, VUPICO SDP can provide not only statutory reporting but also benchmarking, what-if analysis, and recommendations on the best course of action to achieve cost reductions and positive environmental impacts according to your operation.<br /><br />VUPICO SDP will enable to:',
    list: [
      'Gather, optimize, and integrate organizational datasets',
      'Access database of global standards and frameworks based on industry / country / state',
      'Optimise data quality and governance of your sustainability related master data',
      'Build regulatory and custom reports',
      'Establish benchmarking, forecasting and analytics based on business strategy, common local and international standards and local regulations',
    ],
    button: {text: 'Contact Us', url: ''},
  },
  {
    isImageLeft: false,
    imgUrl: sdp4,
    description: 'VUPICO SDP enables your sustainability journey to collect, manage, and model your sustainability data throughout the circular economy, encompassing:',
    list: [
      '<b class="font-bold">PROCUREMENT</b> : understand the environmental impact of raw materials and vendors.',
      '<b class="font-bold">MANUFACTURING</b> : uncover how processes impact your carbon emissions and ways to improve efficiencies.',
      '<b class="font-bold">LOGISTICS</b> : Identify how transportation, warehousing and factories in your circular economy are impacting cost and environment.',
      '<b class="font-bold">USAGE</b> : Are items recyclable, re-usable, and combustible? Can the format of usage be improved to reduce packaging, transport costs or unnecessary waste?',
      '<b class="font-bold">WASTE MANGEMENT</b> : Track what % of your products circularity.',
    ],
    disclaimer: 'Use case scenarios or simulations with analytics to inform the most effective and efficient pathway to improving environmental impact and building sustainable businesses.'
  },
]

export const sdpContentBenefits = [
  {
    isImageLeft: true,
    imgUrl: sdp5,
    list: [
      'A single place to collect, store, manage, and govern your sustainability data',
      'Enhance organizational data management and quality while capturing sustainability data.',
      'Quickly Establish EPR/LCA/Carbon Reporting Capability and Benchmarking',
      'Save time on statutory reporting.',
      'Improve visibility into the entire circular economy.',
      'Evaluate your environmental impact and costs through simulation.',
      'Align sustainability and business goals',
      'Ecolabeling, ESG rating and ranking, and sustainability assurance',
      'Maintain positive customer and investor relations.',
      'Identify the most efficient and effective sustainable practices.',
    ],
    button: {text: 'Reach out for a detailed discussion', url: ''},
  },
]

export const IndustriesList = [
  {icon: Industries1, desc: 'Manufacturing' },
  {icon: Industries2, desc: 'Utlilities' },
  {icon: Industries3, desc: 'Energy' },
  {icon: Industries4, desc: 'FMCG/CPG' },
  {icon: Industries5, desc: 'Oil & Gas' },
  {icon: Industries6, desc: 'Automotive' },
]

export const SolutionSuiteList = [
  {icon: SolutionSuite1, desc: 'Data Migration', url: '/' },
  {icon: SolutionSuite2, desc: 'Master Data as a Service', url: '/' },
  {icon: SolutionSuite3, desc: 'Data Governance', url: '/' },
  {icon: SolutionSuite4, desc: 'BI, Analytics & Reporting', url: '/' },
]