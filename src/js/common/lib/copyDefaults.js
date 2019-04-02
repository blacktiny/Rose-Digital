import RoseDigitalLogoWithName from '~assets/Logos/logo-rose-digital.png'
import RoseDigitalLogo from '~assets/Logos/logo-rd-mark.svg'

import Evan from '~assets/Images/Staff/Staff_ERose.jpg'
import Ed from '~assets/Images/Staff/Staff_EIzzo.jpg'
import Sarah from '~assets/Images/Staff/Staff_SSargent.jpg'
import Jordan from '~assets/Images/Staff/Staff_JLong.jpg'

import AboutImage from '~assets/Images/Miscellaneous/RD_Header_About.jpg'
import WhatWeDoImage from '~assets/Images/Miscellaneous/RD_Header_WhatWeDo.jpg'
import GuideLinesForImprovingAPIImage from '~assets/Images/News/Guidelines-for-Improving-API-Design.jpg'

import AdidasLogo from '~assets/Logos/clients/logo-adidas.png'
import AdidasShortVideo from '~assets/Video/RD_Video_Client_ADIDAS_Short.mp4'
import AdidasInset from '~assets/Images/Work/Adidas/NYL_Adidas_01.png'
import AnnexLogo from '~assets/Logos/partners/logo-annex88.png'

import BridgestoneLogo from '~assets/Logos/clients/logo-bridgestone-firestone.png'
import ComcastLogo from '~assets/Logos/clients/logo-comcast-xfinity.png'
import ClaritureLogo from '~assets/Logos/clients/logo-clariture.png'
import EccoLogo from '~assets/Logos/clients/logo-ecco.png'
import EverBridgeLogo from '~assets/Logos/clients/logo-everbridge-hippabridge.png'
import MaestroLogo from '~assets/Logos/clients/logo-maestro.png'
import MotorolaLogo from '~assets/Logos/clients/logo-motorola.png'
import RedRoofLogo from '~assets/Logos/clients/logo-red-roof.png'
import TmobileLogo from '~assets/Logos/clients/logo-tmobile.png'
import UniqloLogo from '~assets/Logos/clients/logo-uniqlo.png'

import NylPicture from '~assets/Images/Work/NYL/NYL_Placeholder.jpg'
import NylMediaInset from '~assets/Images/Work/NYL/NYL_Mobile_01.png'
import McCannLogo from '~assets/Logos/partners/logo-mccann.png'

import SapientLogo from '~assets/Logos/partners/logo-sapientrazorfish.png'
import BlockLogo from '~assets/Logos/partners/logo-thebloc.png'

import FMLogo from '~assets/Logos/clients/logo-fm-music.png'
import FuseLogo from '~assets/Logos/clients/logo-fuse.png'
import FuseShortVideo from '~assets/Video/RD_Video_Client_FUSE_Short.mp4'
import FuseMobile from '~assets/Images/Work/FUSE/Fuse_Mobile_01.png'
import FuseTablet from '~assets/Images/Work/FUSE/fm-tablet-01.png'
import FuseBefore from '~assets/Images/Work/FUSE/fm-desktop-before.png'
import FuseAfter from '~assets/Images/Work/FUSE/fm-desktop-after.png'

import SkanskaLogo from '~assets/Logos/clients/logo-skanska.png'
import SkanskaPicture from '~assets/Images/Work/Skanska/Skanska_Desktop_01.png'
import SkanskaHeroMedia from '~assets/Images/Work/Skanska/Skanska_04.png'
import SkanskaMediaInset from '~assets/Images/Work/Skanska/Skanska_Devices_01.png'

import AELogo from '~assets/Logos/clients/logo-amex.png'
import AMEXPicture from '~assets/Images/Work/AMEX/amex-desktop-02.png'
import AMEXPictureDevices from '~assets/Images/Work/AMEX/Amex-DevicesDeskTab-01.png'
import AMEXShortVideo from '~assets/Video/RD_Video_Client_AMEX_Short.mp4'

import FordLogo from '~assets/Logos/clients/logo-ford.png'
import FordShortVideo from '~assets/Video/RD_Video_Client_FORD_Short.mp4'
import FordMediaInset from '~assets/Images/Work/Ford/Ford-DevicesDeskTabMob-01.png'

import DMXLogo from '~assets/Logos/clients/logo-dmx.png'
import DealerMarketExTablet from '~assets/Images/Work/DMX/DMX-Tablet-01.png'
import DealerMarketExMobile from '~assets/Images/Work/DMX/DMX-Mobile-01.png'
import DealerMarketExDevices from '~assets/Images/Work/DMX/DMX-DevicesDeskTab-01.png'
import DealerMarketExHeroMedia from '~assets/Images/Work/DMX/dmx-01.jpg'
import FCAImg from '~assets/Images/Work/DMX/dmx-indicator-logo-fca.jpg'

import ZoetisLogo from '~assets/Logos/clients/logo-zoetis.png'
import ZoetisPicture from '~assets/Images/Work/Zoetis/rd-web-work-zoetis-01.jpg'
import ZoetisMediaInset from '~assets/Images/Work/Zoetis/Zoetis-Devices-DeskMob-01.png'

import BGCLogo from '~assets/Logos/clients/logo-bgc.png'
import BardPicture from '~assets/Images/Work/BARD/bard-5b.jpg'
import BardMediaInset from '~assets/Images/Work/BARD/BARD-Tablet-01.png'
import NYTimesImg from '~assets/Logos/partners/logo-nyt.svg'
import FavIcon from '~assets/icons/favicon.ico'

const copyDefaults = {
  header: {
    roseDigital: {
      name: 'Rose Digital',
      logo: RoseDigitalLogoWithName,
      favIcon: FavIcon
    }
  },
  footer: {
    title: 'oh, hello!',
    logo: RoseDigitalLogo,
    chat: 'chat now',
    copyRight: '© 2019 Rose Digital, LLC.',
    phoneNumber: '914 715 9980',
    email: 'info@rosedigital.co',
    address: ['530 7th Ave, Suite 505', 'New York, NY 10018'],
    subscribe: {
      title: 'subscribe to our newsletter',
      placeholder: 'enter your email address'
    }
  },
  home: {
    carouselItems: [
      {
        client: 'Adidas',
        source: AdidasShortVideo,
        path: '/work/adidas'
      },
      { client: 'Fuse', source: FuseShortVideo, path: '/work/fuse' },
      {
        client: 'AMEX',
        source: AMEXShortVideo,
        path: '/work/american-express'
      },
      { client: 'Ford', source: FordShortVideo, path: '/work/ford' }
    ],
    toptier: {
      title: 'top-tier tech products',
      logos: [
        [
          {
            url: 'https://www.adidas.com/us',
            src: AdidasLogo,
            name: 'AdidasLogo'
          },
          {
            url: 'https://www.adidas.com/us',
            src: AELogo,
            name: 'AELogo'
          },
          {
            url: 'https://www.adidas.com/us',
            src: BGCLogo,
            name: 'BGCLogo'
          },
          {
            url: 'https://www.adidas.com/us',
            src: BridgestoneLogo,
            name: 'BridgestoneLogo'
          },
          {
            url: 'https://www.adidas.com/us',
            src: ClaritureLogo,
            name: 'ClaritureLogo',
            className: 'hidden-md hidden-sm hidden-xs'
          },
          {
            url: 'https://www.adidas.com/us',
            src: ComcastLogo,
            name: 'ComcastLogo',
            className: 'hidden-md hidden-sm hidden-xs'
          }
        ],
        [
          {
            url: '',
            src: DMXLogo,
            name: 'DMXLogo'
          },
          {
            url: '',
            src: EverBridgeLogo,
            name: 'EverBridgeLogo'
          },
          {
            url: '',
            src: FMLogo,
            name: 'FMLogo'
          },
          {
            url: '',
            src: FordLogo,
            name: 'FordLogo'
          },
          {
            url: '',
            src: FuseLogo,
            name: 'FuseLogo',
            className: 'hidden-md hidden-sm hidden-xs'
          },
          {
            url: '',
            src: MaestroLogo,
            name: 'MaestroLogo',
            className: 'hidden-md hidden-sm hidden-xs'
          }
        ],
        [
          {
            url: '',
            src: MotorolaLogo,
            name: 'MotorolaLogo'
          },
          {
            url: '',
            src: RedRoofLogo,
            name: 'RedRoofLogo'
          },
          {
            url: '',
            src: SkanskaLogo,
            name: 'SkanskaLogo'
          },
          {
            url: '',
            src: TmobileLogo,
            name: 'TmobileLogo'
          },
          {
            url: '',
            src: UniqloLogo,
            name: 'UniqloLogo',
            className: 'hidden-md hidden-sm hidden-xs'
          },
          {
            url: '',
            src: ZoetisLogo,
            name: 'ZoetisLogo',
            className: 'hidden-md hidden-sm hidden-xs'
          }
        ]
      ]
    },
    about: {
      sectionTitle: 'about',
      title: 'Rose Digital designs and develops top-tier tech products',
      path: '/about',
      content:
        'We work with world class companies and agencies who want to build exceptional technology products, services and platforms that users deeply value and enjoy using.'
    },
    whatWeDo: {
      sectionTitle: 'what we do',
      title: 'app development, web design, IT consulting',
      path: '/what-we-do',
      content:
        'Single page apps, hybrid mobile apps, native mobile apps, mvp builds, corporate applications, project scoping, system design, process planning, project management, agile and lean consulting, graphic design, interface design, user experience design, search engine optimization, authoring.'
    },
    allWorkTitle: 'all work',
    allWork: [
      {
        type: 'video',
        src: AdidasShortVideo,
        postPreviewTitle: 'adidas',
        description: 'augmented reality',
        content:
          'When Adidas and Annex 88 wanted to use cutting edge technology to launch a new product, they looked to Rose Digital. Together we created a unique web-based augmented reality experience that handled thousands of users per second across any smartphones with WebGL and WebRTC enabled.',
        variant: 'custom',
        classN: 'no-pad',
        path: 'adidas'
      },
      {
        type: 'image',
        src: NylPicture,
        postPreviewTitle: 'new york lottery',
        description: 'mobile app',
        content:
          'The New York Lottery is the largest lottery in the United States. Passionate players are able to engage with the lottery through a variety of mediums — vendors, the mobile apps, the website and the LinkNYC tablets on the streets of New York. Behind these interfaces there is complexity in both the back end and front end Rose Digital was tasked with building new features to delight the users as well as rearchitecting both the back and front end to form a more stable ecosystem on top of which the New York Lottery team can innovate.',
        variant: 'halfWidth',
        path: 'new-york-lottery'
      },
      {
        type: 'video',
        src: FuseShortVideo,
        postPreviewTitle: 'fuse',
        description: 'redesign & implementation',
        content:
          'Fuse is undergoing a full enterprise transformation. The content digital distribution is moving from 70% editorial and 30% video to the opposite. Rose Digital was contracted to help Fuse strategize around, design and implement a responsive web experience that would drive up user engagement and help re-invigorate the brand across all of their web and mobile properties. ',
        variant: 'halfWidth',
        path: 'fuse'
      },
      {
        type: 'image',
        src: SkanskaPicture,
        align: 'textRight',
        postPreviewTitle: 'skanska',
        description: 'web app',
        content:
          'Skanska has helped build some of the most iconic structures in the world. Now they are turning the landmark James A. Farley Post Office into a world-class train hall servicing the massive Amtrak and LIRR traffic through New York. Rose Digital was tasked with designing and building a single page app to showcase the amazing work underway and attract MWBE construction partners.',
        variant: 'halfWidth',
        path: 'skanska'
      },
      {
        type: 'image',
        align: 'textLeft',
        src: AMEXPicture,
        postPreviewTitle: 'american express',
        description: 'microservices + web app',
        content:
          'American Express is building a new business in Non-Card Lending. To do that, they needed to integrate many different identity, risk analysis, data processing and front end systems. Rose Digital built a set of back end  microservices to cover all of the business logic supporting the Working Capital Terms platform. We also built a React + Redux web app as well as a Quickbooks Plugin App. Our team’s work was used as the template on which front end development for the division was built.',
        variant: 'default',
        classN: 'no-pad',
        path: 'american-express'
      },
      {
        type: 'video',
        src: FordShortVideo,
        postPreviewTitle: 'ford',
        description: 'iphone app',
        content:
          'Rebuilt owner.ford.com to improve the user experience, increase conversion and improve site content management. We then built the native iOS and Android applications which can be found in the Apple App Store and Google Play Store respectively.',
        variant: 'default',
        classN: 'no-pad',
        path: 'ford'
      }
    ],
    news: {
      title: 'news',
      newsPreview: [
        {
          src: WhatWeDoImage,
          title: 'Rose Digital: A Top NY Company',
          subtitle: 'news'
        },
        {
          src: GuideLinesForImprovingAPIImage,
          title: 'guidlines for improving api design',
          subtitle: 'development   how to / best practices'
        }
      ],
      link: 'all posts'
    },
    media: {
      title: 'in the media',
      link: 'all media',
      path: '/what-we-do',
      mediaPreview: [
        {
          title: 'Companies Need to Build and Safeguard Their Mobile Identity',
          url:
            'http://www.alleywatch.com/2016/04/companies-need-build-safeguard-mobile-identity/',
          type: 'article',
          mediaCo: 'alley watch',
          quote:
            '"Companies should be proactive in building and protecting their mobile brand identity."',
          style: 'italic'
        },
        {
          title: 'Bridging the Digital Divide',
          type: 'event',
          url:
            'http://www.alleywatch.com/2016/04/companies-need-build-safeguard-mobile-identity/',
          mediaCo: 'a technology roundtable',
          date: 'June 3, 2018',
          className: 'hidden-xs hidden-sm hidden-lg hidden-xl'
        },
        {
          title: 'Business Leaders Radio with Amy Toepper',
          url: 'https://www.youtube.com/watch?v=jv-aMW44Vnw&feature=youtu.be',
          type: 'podcast',
          mediaCo: 'business leaders radio',
          date: 'April 10, 2018',
          className: 'hidden-xs hidden-sm hidden-lg hidden-xl'
        }
      ]
    }
  },
  about: {
    heroImg: AboutImage,
    header: 'about',
    rose: {
      header: 'Rose Digital',
      paragraphs: [
        {
          body: [
            {
              copy:
                'Rose Digital is a minority-owned technology consulting firm. We work with world class companies and agencies who want to '
            },
            {
              copy:
                'build top tier technology products, services and platforms ',
              style: 'bold'
            },
            {
              copy:
                'that users deeply value and enjoy using. We excel in modern web and mobil application architecture, development, deployment and maintenance at scale. We design for, and expect, that our digital experiences will reliably support loads well into the millions of users per month.'
            }
          ]
        },
        {
          style: 'space-between-paragraph-main-content',
          body: [
            {
              copy:
                'Our passion is partnering with large, impactful companies and government agencies in order to help them leverage modern technology to better serve their users or customers. '
            },
            {
              copy:
                'We get excited about solving hard technical problems with widespread impact. ',
              style: 'bold'
            },
            {
              copy:
                'Our goal is to deliver our clients not only a successful product deployment but best practices and tools for high efficiency agile development in the future.'
            }
          ]
        }
      ]
    },
    contact: {
      header: 'contact',

      number: { text: '914 715 9980' },
      email: { text: 'info@rosedigital.co', style: 'bold' },
      address: [
        {
          text: '530 7th Ave, Suite 505',
          style: 'address-break'
        },
        {
          text: 'New York, NY 10018'
        }
      ],
      newsletter: 'subscribe to our newsletter'
    },
    leadership: {
      header: 'leadership',
      people: [
        {
          name: 'Evan Rose',
          title: ['Managing Partner', 'Founder'],
          body: `Evan Rose has been building web and mobile applications since 2009. His focus is on usable, performant application interfaces. He attended the Harvard University and graduated with a degree in Social Anthropology.
          Evan has launched two venture backed startups, is a board member and investment team member of NFTE Ventures and chairs the Harvard Club Tech and Entrepreneurship Panel. Most recently he was a Senior Presentation Layer Engineer and Mobile Application Architect at Razorfish.`,
          img: Evan
        },
        {
          name: 'Edward Izzo',
          title: ['VP of Technology'],
          body: `Edward Izzo has been delivering technology solutions for over twenty years to healthcare, finance, and a host of startups. He believes in agility with
          maturity—creating secure, stable software as fast as possible. At the New York Stock Exchange he led the backend development of the Issuer Lifecycle Manager ILM), a new platform initiative designed to unify the company’s regulatory systems. At Remedy Partners, the largest Awardee Convener under Medicare’s BPCI program, he served as principal SET (software engineer in test) responsible for the integrity of the entire product suite.`,
          img: Ed
        },
        {
          name: 'Jordan Long',
          title: ['VP of Business', 'Development'],
          body:
            'Jordan Long has been leading revenue and go-to-market strategy since 2013, focused on high-tech and industrial companies with proprietary technology.  The youngest strategist on Intel’s B2B rebrand, Jordan crafted the strategy that ultimately become the award winning “Experience Amazing” campaign using data as a story telling tool for solutions selling. As the third commercial at Bluedot Innovation, she led the company to acquisition by securing marquee clients such as Amazon and Coca-Cola within one year. As Director of Business Development for the Americas at Accor Hospitality, Jordan led the launch of the company’s first digital product, John Paul Digital Concierge.',
          img: Jordan
        },
        {
          name: 'Sarah Sargent',
          title: ['Creative Director'],
          body: `Sarah Sargent has been leading design and marketing initiatives since 2008 in the entertainment, retail and hospitality industries. Her passion is brand development and complex UX, evolving over the last decade with in-house agencies (HBO) to traditional agencies handling small and large companies (GE). She attended University of South Florida with degrees in Graphic Design and Art History.`,
          img: Sarah
        },
        {
          name: 'Paula Marisi',
          title: ['Program Manager'],
          body: '',
          img: ''
        }
      ]
    },
    joinOurTeam: {
      header: 'join our team',
      url: 'https://angel.co/rose-digital-us/jobs',
      body: {
        text: 'Explore our current ',
        link: 'job postings'
      }
    }
  },
  whatWeDo: {
    heroImg: WhatWeDoImage,
    header: 'what we do',
    services: {
      header: 'services',
      body: [
        {
          header: 'app development',
          link: 'app development',
          linkID: 'app-dev',
          bulletList: [
            'Native and Hybrid Mobile Application Development',
            'Single Page Application (SPA) Development',
            'Modular Codebase Architecture',
            'Minimum Viable Product (MVP) Builds',
            'AngularJS(1.x,2), React _+ Redux, RxJS Functional Applications',
            'Content Strategy',
            'Usability Testing',
            'Micro-services Architecture and Databased Design',
            'DevOps and Continuous Integration',
            'Search Engine Optimization',
            'Authoring',
            'Corporate Applications'
          ]
        },
        {
          header: 'design',
          link: 'design',
          linkID: 'design',
          bulletList: [
            'User Experience )UX)',
            'User Interface (UI) Design',
            'Graphic Design'
          ]
        },
        {
          header: 'consulting',
          link: 'consulting',
          linkID: 'consulting',
          bulletList: [
            'Project Scoping',
            'System Design',
            'Process Planning',
            'Project Management',
            'Agile Project Management and Development'
          ]
        }
      ]
    },
    how: {
      header: 'how we do it',
      body: [
        {
          copy: 'We partner with our clients like an internal startup—',
          style: 'bold'
        },
        {
          copy:
            'rapidly acclimating to your enterprise environment and quickly delivering working product. We follow agile development methodology with a focus on lean product roadmaps. With '
        },
        {
          copy: 'deliveries every two weeks your team ',
          style: 'bold'
        },
        {
          copy:
            'will be able to quickly see measurable value. Rose Digital brings the efficiency and creativity of a startup to the enterprises and agencies '
        },
        {
          copy:
            'developing digital products with the reach to impact the world.',
          style: 'bold'
        }
      ]
    },
    expertise: {
      header: 'expertise',
      body: [
        {
          header: 'hybrid and native mobile applications',
          link: 'hybrid & native mobile apps',
          linkID: 'mobile-app',
          style: 'top-expertise',
          body:
            'We specialize in developing high performance mobile applications which will be used at scale. Our team uses the latest in mobile development tools to increase code reusability and shorten time to market while maintaining native application performance.',
          bulletList: [
            'Apache Cordova',
            'Ionic',
            'React Native',
            'Appcelerator Titanium',
            'Xamarin',
            'Nativescript',
            'Objective C',
            'Java',
            'Swift'
          ]
        },
        {
          header: 'microservice architecture',
          link: 'microservice architecture',
          linkID: 'micro-arch',
          body:
            'Performant user interfaces need to be backed by highly available and scalable services. Our teams focus on developing decoupled microservices which increases the overall stability, testability and scalability of the business logic and database layers.',
          bulletList: [
            'Angular JS',
            'React JS',
            'RxJS',
            'CycleJS',
            'Redux',
            'VueJS',
            'Node JS',
            'Java',
            'Python',
            'MongoDB',
            'Oracle SQL',
            'PostgresSQL',
            'CouchDB',
            'Redis'
          ]
        },
        {
          header: 'responsive, single page applications',
          link: 'responsive single page apps',
          linkID: 'single-page',
          body:
            'Modern users expect the applications they engage with to be seamless. Whether the end user is a consumer or an enterprise customer, cutting edge applications developed by consumer technology companies have raised the bar. Gone are the days of slow response times and non-dynamic application interfaces. Our team has deep experience in building complex, enterprise focused single page applications that facilitate delightful user experiences.'
        }
      ]
    },
    media: {
      header: 'in the media',
      media: [
        {
          title: 'Companies Need to Build and Safeguard Their Mobile Identity',
          url:
            'http://www.alleywatch.com/2016/04/companies-need-build-safeguard-mobile-identity/',
          type: 'article',
          mediaCo: 'alley watch',
          quote:
            '"Companies should be proactive in building and protecting their mobile brand identity."',
          style: 'italic'
        },
        {
          title: 'Bridging the Digital Divide',
          type: 'event',
          url:
            'http://www.alleywatch.com/2016/04/companies-need-build-safeguard-mobile-identity/',
          mediaCo: 'a technology roundtable',
          date: 'June 3, 2018'
        },
        {
          title: 'Business Leaders Radio with Amy Toepper',
          url: 'https://www.youtube.com/watch?v=jv-aMW44Vnw&feature=youtu.be',
          type: 'podcast',
          mediaCo: 'business leaders radio',
          date: 'April 10, 2018'
        },
        {
          title: 'Amex Challenges Square, OnDeck With Online Loan Marketplace',
          url:
            'http://www.bloomberg.com/news/articles/2016-07-05/amex-challenges-square-on-deck-with-small-business-loans-online-iq9gqual',
          type: 'article',
          mediaCo: 'bloomberg technology',
          quote: `"Working Capital Terms represents 'a new type of product for American Express that could eliminate the need for the very expensive, unsustainable products from Square and other online lenders,' said Gil Luria, an analyst at Wedbushg Securities Inc."`,
          style: 'italic'
        },
        {
          title: 'How I Did It: Evan Rose, Software Engineer',
          url:
            'http://www.blackenterprise.com/education/how-i-did-it-evan-rose-software-engineer/',
          type: 'article',
          mediaCo: 'blackenterprise.com',
          quote:
            '"My passion is to build things,” Rose says. “To me, the coding and the development of software is a creative pursuit and not so much math-related."',
          style: 'italic'
        },
        {
          title: 'Ten apps that prove UX is the key to successful adoption',
          url:
            'http://www.zdnet.com/pictures/ten-apps-that-prove-ux-is-the-key-to-successful-adoption/',
          type: 'article',
          mediaCo: 'zdnet',
          summary:
            'Evan Rose talks about Slack and Justworks and what makes those apps great in terms of user experience.'
        },
        {
          title: 'nerd power: from engineers to entrepreneurs',
          url:
            'http://www.blackenterprise.com/technology/nerd-power-engineers-entrepreneurs/',
          type: 'article',
          mediaCo: 'blackenterprise.com',
          quote:
            '"Many of the developers I know are ‘product people’,” says Evan Rose, founder of Rose Digital. “When you’re a person who is driven to create, you have the skills to create, and the cost of launching a company is so low, it creates the perfect conditions for entrepreneurship."',
          style: 'italic'
        },
        {
          title:
            'How mobile app monetization is challenging conventional payment methods',
          type: 'article',
          url:
            'http://www.alleywatch.com/2016/04/companies-need-build-safeguard-mobile-identity/',
          mediaCo: 'mobile business insights',
          quote:
            '"Mobile apps are no longer merely extensions of visual identity efforts that serve to build brands and maintain them in the public eye. These apps are important potential sources of revenue for the companies that publish them."',
          style: 'italic'
        },
        {
          title: 'The Anatomy of an Effective B2B Mobile App',
          type: 'article',
          url:
            'http://www.alleywatch.com/2016/04/companies-need-build-safeguard-mobile-identity/',
          mediaCo: 'digital doughnut',
          quote:
            '“Discover the key features and functionalities of a mobile app dedicated to B2B customers.”',
          style: 'italic'
        },
        {
          title: 'Companies Need to Build and Safeguard Their Mobile Identity',
          url:
            'http://www.alleywatch.com/2016/04/companies-need-build-safeguard-mobile-identity/',
          type: 'article',
          mediaCo: 'alley watch',
          quote:
            '"Companies should be proactive in building and protecting their mobile brand identity."',
          style: 'italic'
        },
        {
          title: 'Bridging the Digital Divide',
          type: 'event',
          url:
            'http://www.alleywatch.com/2016/04/companies-need-build-safeguard-mobile-identity/',
          mediaCo: 'a technology roundtable',
          date: 'June 3, 2018'
        },
        {
          title: 'Business Leaders Radio with Amy Toepper',
          url: 'https://www.youtube.com/watch?v=jv-aMW44Vnw&feature=youtu.be',
          type: 'podcast',
          mediaCo: 'business leaders radio',
          date: 'April 10, 2018'
        },
        {
          title: 'Amex Challenges Square, OnDeck With Online Loan Marketplace',
          url:
            'http://www.bloomberg.com/news/articles/2016-07-05/amex-challenges-square-on-deck-with-small-business-loans-online-iq9gqual',
          type: 'article',
          mediaCo: 'bloomberg technology',
          quote: `"Working Capital Terms represents 'a new type of product for American Express that could eliminate the need for the very expensive, unsustainable products from Square and other online lenders,' said Gil Luria, an analyst at Wedbushg Securities Inc."`,
          style: 'italic'
        },
        {
          title: 'How I Did It: Evan Rose, Software Engineer',
          url:
            'http://www.blackenterprise.com/education/how-i-did-it-evan-rose-software-engineer/',
          type: 'article',
          mediaCo: 'blackenterprise.com',
          quote:
            '"My passion is to build things,” Rose says. “To me, the coding and the development of software is a creative pursuit and not so much math-related."',
          style: 'italic'
        },
        {
          title: 'Ten apps that prove UX is the key to successful adoption',
          url:
            'http://www.zdnet.com/pictures/ten-apps-that-prove-ux-is-the-key-to-successful-adoption/',
          type: 'article',
          mediaCo: 'zdnet',
          summary:
            'Evan Rose talks about Slack and Justworks and what makes those apps great in terms of user experience.'
        },
        {
          title: 'nerd power: from engineers to entrepreneurs',
          url:
            'http://www.blackenterprise.com/technology/nerd-power-engineers-entrepreneurs/',
          type: 'article',
          mediaCo: 'blackenterprise.com',
          quote:
            '"Many of the developers I know are ‘product people’,” says Evan Rose, founder of Rose Digital. “When you’re a person who is driven to create, you have the skills to create, and the cost of launching a company is so low, it creates the perfect conditions for entrepreneurship."',
          style: 'italic'
        },
        {
          title:
            'How mobile app monetization is challenging conventional payment methods',
          type: 'article',
          url:
            'http://www.alleywatch.com/2016/04/companies-need-build-safeguard-mobile-identity/',
          mediaCo: 'mobile business insights',
          quote:
            '"Mobile apps are no longer merely extensions of visual identity efforts that serve to build brands and maintain them in the public eye. These apps are important potential sources of revenue for the companies that publish them."',
          style: 'italic'
        },
        {
          title: 'The Anatomy of an Effective B2B Mobile App',
          type: 'article',
          url:
            'http://www.alleywatch.com/2016/04/companies-need-build-safeguard-mobile-identity/',
          mediaCo: 'digital doughnut',
          quote:
            '“Discover the key features and functionalities of a mobile app dedicated to B2B customers.”',
          style: 'italic'
        },
        {
          title: 'Companies Need to Build and Safeguard Their Mobile Identity',
          url:
            'http://www.alleywatch.com/2016/04/companies-need-build-safeguard-mobile-identity/',
          type: 'article',
          mediaCo: 'alley watch',
          quote:
            '"Companies should be proactive in building and protecting their mobile brand identity."',
          style: 'italic'
        },
        {
          title: 'Bridging the Digital Divide',
          type: 'event',
          url:
            'http://www.alleywatch.com/2016/04/companies-need-build-safeguard-mobile-identity/',
          mediaCo: 'a technology roundtable',
          date: 'June 3, 2018'
        },
        {
          title: 'Business Leaders Radio with Amy Toepper',
          url: 'https://www.youtube.com/watch?v=jv-aMW44Vnw&feature=youtu.be',
          type: 'podcast',
          mediaCo: 'business leaders radio',
          date: 'April 10, 2018'
        },
        {
          title: 'Amex Challenges Square, OnDeck With Online Loan Marketplace',
          url:
            'http://www.bloomberg.com/news/articles/2016-07-05/amex-challenges-square-on-deck-with-small-business-loans-online-iq9gqual',
          type: 'article',
          mediaCo: 'bloomberg technology',
          quote: `"Working Capital Terms represents 'a new type of product for American Express that could eliminate the need for the very expensive, unsustainable products from Square and other online lenders,' said Gil Luria, an analyst at Wedbushg Securities Inc."`,
          style: 'italic'
        },
        {
          title: 'How I Did It: Evan Rose, Software Engineer',
          url:
            'http://www.blackenterprise.com/education/how-i-did-it-evan-rose-software-engineer/',
          type: 'article',
          mediaCo: 'blackenterprise.com',
          quote:
            '"My passion is to build things,” Rose says. “To me, the coding and the development of software is a creative pursuit and not so much math-related."',
          style: 'italic'
        },
        {
          title: 'Ten apps that prove UX is the key to successful adoption',
          url:
            'http://www.zdnet.com/pictures/ten-apps-that-prove-ux-is-the-key-to-successful-adoption/',
          type: 'article',
          mediaCo: 'zdnet',
          summary:
            'Evan Rose talks about Slack and Justworks and what makes those apps great in terms of user experience.'
        },
        {
          title: 'nerd power: from engineers to entrepreneurs',
          url:
            'http://www.blackenterprise.com/technology/nerd-power-engineers-entrepreneurs/',
          type: 'article',
          mediaCo: 'blackenterprise.com',
          quote:
            '"Many of the developers I know are ‘product people’,” says Evan Rose, founder of Rose Digital. “When you’re a person who is driven to create, you have the skills to create, and the cost of launching a company is so low, it creates the perfect conditions for entrepreneurship."',
          style: 'italic'
        },
        {
          title:
            'How mobile app monetization is challenging conventional payment methods',
          type: 'article',
          url:
            'http://www.alleywatch.com/2016/04/companies-need-build-safeguard-mobile-identity/',
          mediaCo: 'mobile business insights',
          quote:
            '"Mobile apps are no longer merely extensions of visual identity efforts that serve to build brands and maintain them in the public eye. These apps are important potential sources of revenue for the companies that publish them."',
          style: 'italic'
        },
        {
          title: 'The Anatomy of an Effective B2B Mobile App',
          type: 'article',
          url:
            'http://www.alleywatch.com/2016/04/companies-need-build-safeguard-mobile-identity/',
          mediaCo: 'digital doughnut',
          quote:
            '“Discover the key features and functionalities of a mobile app dedicated to B2B customers.”',
          style: 'italic'
        }
      ]
    },
    loadMore: 'load more'
  },
  news: {
    header: 'by rose digital',
    topHeader: 'top posts',
    sort: ['recent', 'popular', 'oldest'],
    filter: [
      'argmented reality',
      'press release',
      'branding',
      'project management',
      'company news',
      'rose digital news',
      'design',
      'security',
      'development',
      'tech news',
      'how to / best practices',
      'user engagement',
      'machine learning',
      'user experience',
      'marketing',
      'value of mobile apps',
      'mobile apps',
      'web apps',
      'news',
      'website'
    ],
    posts: [
      {
        type: ['news'],
        src: WhatWeDoImage,
        title: 'rose digital: a top my company',
        path: '',
        date: 'November 12, 2018',
        top: false,
        viewNumber: 1
      },
      {
        type: ['development', 'how to / best practices'],
        src: WhatWeDoImage,
        title: 'guidelines for improving api design',
        path: 'guidelines-for-improving-api-design',
        date: 'October 25, 2018',
        top: false,
        viewNumber: 3
      },
      {
        type: ['argmented reality'],
        src: WhatWeDoImage,
        title:
          'the business value of argmented reality drives roi in services, sales, and manufacturing',
        path:
          'the-business-value-of-augmented-reality-drives-roi-in-services-sales-and-manufacturing',
        date: 'October 16, 2018',
        top: false,
        viewNumber: 2
      },
      {
        type: ['development', 'how to / best practices'],
        src: WhatWeDoImage,
        title:
          'putting the right technical team in place for quality and resource efficiency',
        path:
          'putting-the-right-technical-team-in-place-for-quality-and-resource-efficiency',
        date: 'October 9, 2018',
        top: false,
        viewNumber: 1
      },
      {
        type: ['tech news'],
        src: WhatWeDoImage,
        title: 'key mobile technology news and events - september 2018',
        path: 'key-mobile-technology-news-and-events---september-2018',
        date: 'September 27, 2018',
        top: true,
        viewNumber: 2
      },
      {
        type: ['marketing', 'mobile apps'],
        src: WhatWeDoImage,
        title: 'mobile app marketing: benefits of location-based marketing',
        path: 'mobile-app-marketing-benefits-of-location-based-marketing',
        date: 'September 13, 2018',
        top: true,
        viewNumber: 5
      },
      {
        type: ['project management'],
        src: WhatWeDoImage,
        title: 'best project management',
        path: 'best-project-management',
        date: 'September 4, 2018',
        top: true,
        viewNumber: 3
      },
      {
        type: ['MOBILE APPS', 'DEVELOPMENT'],
        src: WhatWeDoImage,
        title: 'The Best Websites for Learning Mobile Development',
        path: 'the-best-websites-for-learning-mobile-development',
        date: '2017-11-17',
        top: false,
        viewNumber: 4
      }
    ]
  },
  posts: {
    'rose-digital-a-top-my-company': {
      heroMedia: { media: AdidasShortVideo, type: 'video' },
      title: 'rose digital: a top my company',
      date: 'November 12, 2018',
      timeStamp: 2,
      postTags: ['rose digital news', 'how to / best practices'],
      body: [
        {
          type: 'copy',
          content: [
            `We are proud to announce that Rose Digital has recently been featured in
            the Leading Mobile App Developers Across the United Staes report for 2018, prepared by Clutch.
            We have also been named a top augmented reality, as well as top artificial intelligence company in New York.`,
            `Clutch, the online ratings and reviews firm, establishes a clear and consistent
            baseline for quality content across the world. Based ni Wsshington D.C., Clutch comiles client testmonials,
            case studies, and objective quantitative information that combine to create a powerful tool for
            understanding B2B companies.`,
            `Another interesting source for keeping up with B2B news is The Manifest.
            The online magazine also named Rose Digital a top AR/VR company in NYC.`,
            `While these achievements are exciting and tellng, we couldn't have gotten there
            without help from our clients, who pushed us to excel.`,
            `TJ Docena, Producer at Annex88, was thrilled to work with Rose Digital.
            "The team is composed of knowledgeable and experienced people that choose projects based on
            what they're passionate about, and it whows. Since the work was so new, the reserach
            they did nand provided us with was impressive. They found things that had never been done before,
            identified where there was competition, and validated and tested the product."`,
            `The CEO of a SaaS Platform was impressed with Rose Digital as well.
            "Rose Digital is very confident in their software developing skills. which was very comforting
            for our team. Their in-house staff is exceptionally talented at translating the needs of
            the end-user into a useful platform."`
          ]
        },
        {
          type: 'quote',
          content: `The team is composed of knowledgeable and experienced people that choose projects based on
            what they're passionate about, and it shows.`,
          fromPerson: true
        },
        {
          type: 'quotePerson',
          content: 'CEO, SaaS Platform'
        },
        {
          type: 'sectionTitle',
          content: 'An Agile Approach to Complex Projects'
        },
        {
          type: 'listStyle',
          content: [
            `At Rose Digital, we believe in constant and close comunication with our clients.
            Each project is treated like an internal startupm with a mixed team of devloeprs and client representatives workig together to achieve the end goal.`
          ]
        },
        {
          type: 'listStyle',
          content: [
            `Our 8 steps approach is the success formula we have developed after direct expereinces with clients:`,
            `1. We discover the client's problem`,
            `2. We create the functional specification of the project`,
            `3. We build the initial prototype`,
            `4. We deliver the MVP`,
            `5. We listen to user feedback`,
            `6. We iterate the nesessary steps`,
            `7. We perform integration testing`,
            `8. We deliver the project and support the client with implementation.`
          ],
          lineHeight: 2
        },
        {
          type: 'image',
          src: WhatWeDoImage,
          marginTop: 60
        },
        {
          type: 'listStyle',
          content: [
            `This agile work process helped us adapt to the most advanced demands made by clients
            and complete some of the most challenging projects.`
          ]
        },
        {
          type: 'sectionTitle',
          content: `Looking Ahead`
        },
        {
          type: 'listStyle',
          content: [
            `The recognition offered by the Clutch report motivates us to improve our services
            and become an one-stop-shop for all our clients needs for:`,
            `• Hybrid and native mobile applications`,
            `• Responsive single pages applications`,
            `• Microservice architecture`,
            `• Autoscaling environments, continuous integration and automated testing`,
            `• Augmented reality experiences,`
          ],
          lineHeight: 2
        },
        {
          type: 'listStyle',
          content: [
            `At Rose Digital, your vision is taken from theoretical concept and delivered to you
            as a fully functional product. Let's dream together, let's build together!`
          ]
        }
      ]
    },
    'guidelines-for-improving-api-design': {
      heroMedia: { media: NylPicture, type: 'img' },
      title: 'guidelines for improving api design',
      date: 'October 25, 2018'
    },
    'the-business-value-of-argmented-reality-drives-roi-in-services-sales-and-manufacturing': {
      heroMedia: { media: FuseShortVideo, type: 'video' },
      title:
        'the business value of argmented reality drives roi in services, sales, and manufacturing',
      date: 'October 16, 2018'
    },
    'putting-the-right-technical-team-in-place-for-quality-and-resource-efficiency': {
      heroMedia: { media: AMEXPicture, type: 'image' },
      title:
        'putting the right technical team in place for quality and resource efficiency',
      date: 'October 9, 2018'
    },
    'key-mobile-technology-news-and-events-september-2018': {
      heroMedia: { media: FordShortVideo, type: 'video' },
      title: 'key mobile technology news and events - september 2018',
      date: 'September 27, 2018'
    },
    'mobile-app-marketing-benefits-of-location-based-marketing': {
      heroMedia: { media: SkanskaPicture, type: 'image' },
      title: 'mobile app marketing: benefits of location-based marketing',
      date: 'September 13, 2018'
    },
    'best-project-management': {
      heroMedia: { media: SkanskaPicture, type: 'image' },
      title: 'best project management',
      date: 'September 4, 2018'
    }
  },
  clients: {
    viewNext: {
      link: 'view next project'
    },
    keyPerformance: {
      title: 'key performance indicators'
    },
    adidas: {
      heroMedia: { media: AdidasShortVideo, type: 'video' },
      clientWorkTypeAndDescription: {
        title: 'adidas deerupt',
        workType: 'augmented reality',
        skillDescription: [
          'React + Redux Static Architecture',
          '3D Animation Design',
          'Custom ThreeJS',
          'Animation Coded',
          'JSARToolkit Binding Customization'
        ],
        body: [
          {
            copy:
              'When Adidas and Annex 88 wanted to use cutting edge technology to launch a new product, they looked to Rose Digital. Together we created a unique web-based augmented reality experience that handled thousands of users per second across any smartphones with WebGL and WebRTC enabled.'
          }
        ],
        agencyPartner: {
          name: 'agency partner',
          logo: AnnexLogo
        }
      },
      media: [
        {
          version: 'img4Text5',
          image: AdidasInset,
          body: [
            {
              copy: 'WebGL',
              style: 'xl-body bold-inline',
              color: 'case-studies'
            },
            { copy: '&', style: 'xxl-body bold-inline' },
            {
              copy: 'WebRTC',
              style: 'xl-body bold-inline',
              color: 'case-studies'
            }
          ]
        }
      ],
      keyPerformanceBody: {
        body: [
          {
            body: [
              { copy: '<5', style: 'xxl-body bold-inline' },
              {
                copy: '%',
                style: 'xxl-body bold-inline',
                color: 'case-studies'
              }
            ],
            caption: {
              body: [{ copy: 'bounce rate' }]
            }
          },
          {
            body: [
              { copy: '63', style: 'xxl-body bold-inline' },
              {
                copy: '%',
                style: 'xxl-body bold-inline',
                color: 'case-studies'
              }
            ],
            caption: {
              body: [{ copy: 'flow completion' }]
            }
          },
          {
            body: [
              { copy: '61', style: 'xxl-body bold-inline' },
              {
                copy: '%',
                style: 'xxl-body bold-inline',
                color: 'case-studies'
              }
            ],
            caption: {
              body: [{ copy: 'share' }]
            }
          },
          {
            body: [
              { copy: '1', style: 'xxl-body bold-inline' },
              {
                copy: ',',
                style: 'xxl-body bold-inline',
                color: 'case-studies'
              },
              { copy: '700', style: 'xxl-body bold-inline' }
            ],
            caption: {
              body: [{ copy: 'peak users per second' }]
            }
          }
        ]
      },
      next: 'new-york-lottery'
    },
    'new-york-lottery': {
      heroMedia: { media: NylPicture, type: 'image' },
      clientWorkTypeAndDescription: {
        title: 'new york lottery',
        workType: 'native iOS/android apps',
        skillDescription: [
          'NYL Tech',
          'Objective C',
          'Java',
          'Node',
          'AWS Lambda'
        ],
        body: [
          {
            copy:
              'The New York Lottery is the largest lottery in the United States. Passionate players are able to engage with the lottery through a variety of mediums — vendors, the mobile apps, the website and the LinkNYC tablets on the streets of New York. Behind these interfaces there is complexity in both the back end and front end Rose Digital was tasked with building new features to delight the users as well as rearchitecting both the back and front end to form a more stable ecosystem on top of which the New York Lottery team can innovate.'
          }
        ],
        agencyPartner: {
          name: 'agency partner',
          logo: McCannLogo
        }
      },
      media: [
        {
          version: 'imgCentered4',
          image: NylMediaInset
        }
      ],
      next: 'fuse'
    },
    fuse: {
      heroMedia: { media: FuseShortVideo, type: 'video' },
      clientWorkTypeAndDescription: {
        title: 'fuse.tv  |  fm.tv',
        mobileTitle: 'fuse.tv  fm.tv',
        workType: 'redesign & implementation',
        skillDescription: [
          'Server Side Rendered',
          'React + Redux Front End',
          'Serverless Web Application Architecture',
          'Fully Responsive',
          'Headless CMS Back End',
          'Reusable, composable component library'
        ],
        body: [
          {
            copy:
              'Fuse is undergoing a full enterprise transformation. The content digital distribution is moving from 70% editorial and 30% video to the opposite. Rose Digital was contracted to help Fuse strategize around, design and implement a responsive web experience that would drive up user engagement and help re-invigorate the brand across all of their web and mobile properties.'
          }
        ]
      },
      media: [
        {
          version: 'img4Text5',
          image: FuseMobile,
          body: [
            { copy: 'fully', style: 'xxl-body  bold-inline' },
            {
              copy: 'responsive',
              style: 'xl-body  bold-inline',
              color: 'case-studies'
            }
          ]
        },
        {
          version: 'text5Img5',
          image: FuseTablet,
          body: [
            {
              copy: 'headless',
              style: 'lg-body bold-inline',
              color: 'case-studies'
            },
            { copy: 'cms', style: 'fuse-224 bold-inline' }
          ]
        },
        {
          version: 'beforeAfter',
          image: [FuseBefore, FuseAfter],
          body: ['before', 'after']
        }
      ],
      keyPerformanceBody: {
        body: [
          {
            body: [
              {
                copy: '+',
                style: 'fuse-body bold-inline',
                color: 'case-studies'
              },
              { copy: '40', style: 'fuse-body bold-inline' },
              {
                copy: '%',
                style: 'fuse-body bold-inline',
                color: 'case-studies'
              }
            ],
            caption: {
              body: [
                { copy: 'session duration ' },
                { copy: 'increase', style: 'bold' }
              ]
            }
          }
        ]
      },
      next: 'american-express'
    },
    'american-express': {
      heroMedia: { media: AMEXShortVideo, type: 'video' },
      clientWorkTypeAndDescription: {
        title: 'american express',
        workType: 'working capital terms',
        skillDescription: [
          'Test coverage > 95%',
          'Set React + Redux UI',
          'Development guidelines for 9 Scrum Teams',
          'Developed Reusable UI Components',
          'Java + Spring Back End',
          'Fully documented APIs with Swagger'
        ],
        body: [
          {
            copy:
              'American Express is building a new business in Non-Card Lending. To do that, they needed to integrate many different identity, risk analysis, data processing and front end systems. Rose Digital built a set of '
          },
          {
            copy: 'back end  microservices to cover all of the business logic ',
            style: 'bold'
          },
          {
            copy: 'supporting the Working Capital Terms platform. '
          },
          {
            copy:
              'We also built a React + Redux web app as well as a Quickbooks Plugin App. ',
            style: 'bold'
          },
          {
            copy:
              'Our team’s work was used as the template on which front end development for the division was built.'
          }
        ]
      },
      media: [
        {
          version: 'img9',
          image: AMEXPictureDevices
        }
      ],
      keyPerformanceBody: {
        body: [
          {
            body: [{ copy: '8', style: 'amex-body bold-inline' }],
            caption: {
              body: [{ copy: 'figure loan volume' }]
            }
          },
          {
            body: [
              { copy: '800', style: 'amex-body bold-inline' },
              {
                copy: '%',
                style: 'amex-body bold-inline',
                color: 'case-studies'
              }
            ],
            caption: {
              body: [{ copy: 'reduction in backend response times' }]
            }
          },
          {
            body: [
              {
                copy: '<',
                style: 'amex-body bold-inline',
                color: 'case-studies'
              },
              { copy: '1s', style: 'amex-body bold-inline' }
            ],
            caption: {
              body: [{ copy: 'time to interactive (tti)' }]
            }
          }
        ]
      },
      next: 'ford'
    },
    ford: {
      heroMedia: { media: FordShortVideo, type: 'video' },
      clientWorkTypeAndDescription: {
        title: 'ford',
        workType: 'owner desktop & mobile',
        skillDescription: [
          'Full site rebuild and re-platforming using modern web technology',
          'CMS built on Adobe Experience Manager',
          'Front end build on AngularJS, LESS, HTML5, CSS3',
          'Mobile/tablet optimized',
          'Autoscaling server setup'
        ],
        body: [
          {
            copy: 'Rebuilt owner.ford.com ',
            style: 'bold'
          },
          {
            copy:
              'to improve the user experience, increase conversion and improve site content management. We then built the '
          },
          {
            copy: 'native iOS and Android applications ',
            style: 'bold'
          },
          {
            copy:
              'which can be found in the Apple App Store and Google Play Store respectively.'
          }
        ],
        agencyPartner: {
          name: 'agency partner',
          logo: SapientLogo
        }
      },
      media: [
        {
          version: 'img9',
          image: FordMediaInset
        }
      ],
      keyPerformanceBody: {
        body: [
          {
            body: [
              {
                copy: '+',
                style: 'xxl-body bold-inline',
                color: 'case-studies'
              },
              {
                copy: '20',
                style: 'xxl-body bold-inline'
              },
              {
                copy: '%',
                style: 'xxl-body bold-inline',
                color: 'case-studies'
              }
            ],
            caption: {
              body: [{ copy: 'engagement on key features' }],
              secondaryBody: '(Dealer Search, Registration Conversion)'
            }
          }
        ]
      },
      next: 'skanska'
    },
    skanska: {
      heroMedia: { media: SkanskaHeroMedia, type: 'image' },
      clientWorkTypeAndDescription: {
        title: 'skanska',
        workType: 'single page app',
        skillDescription: [
          'responsive design',
          'autoscaling server setup',
          'wordpress cms'
        ],
        body: [
          {
            copy:
              'Skanska has helped build some of the most iconic structures in the world. Now they are turning the landmark James A. Farley Post Office into a world-class train hall servicing the massive Amtrak and LIRR traffic through New York. Rose Digital was tasked with designing and building a single page app to showcase the amazing work underway and attract MWBE construction partners.'
          }
        ]
      },
      media: [
        {
          version: 'img9',
          image: SkanskaMediaInset
        }
      ],
      keyPerformanceBody: {
        body: [
          {
            body: [{ copy: '597', style: 'xxl-body bold-inline' }],
            caption: {
              body: [{ copy: 'attracted mwbe partners' }]
            }
          },
          {
            body: [
              { copy: '100', style: 'xxl-body bold-inline' },
              {
                copy: '%',
                style: 'xxl-body bold-inline',
                color: 'case-studies'
              }
            ],
            caption: {
              body: [{ copy: 'uptime' }]
            }
          }
        ]
      },
      next: 'dealer-market-exchange'
    },
    'dealer-market-exchange': {
      heroMedia: { media: DealerMarketExHeroMedia, type: 'image' },
      clientWorkTypeAndDescription: {
        title: 'dealer market exchange',
        workType: 'web app',
        skillDescription: [
          'Real time dashboard',
          'React + Redux implementation',
          'Reusable component library',
          'Fully functional vehicle auction and syndication functionality'
        ],
        body: [
          {
            copy:
              'Dealer Market Exchange is building a suite of tools to help vehicle wholesalers like dealerships to value, buy and sell cars with the same ease that consumers have come to expect. To do that, Rose Digital helped build a suite of mobile and web applications to become the new operating system for vehicle dealerships starting with Fiat Chrysler and other major dealer groups.'
          }
        ]
      },
      media: [
        {
          version: 'img4Img6',
          image: [DealerMarketExMobile, DealerMarketExDevices],
          description: ['dmx appraise it', 'dmx dashboard']
        }
      ],
      keyPerformanceBody: {
        body: [
          {
            body: [
              {
                copy: '$',
                style: 'xxl-body bold-inline',
                color: 'case-studies'
              },
              { copy: '9', style: 'xxl-body bold-inline' },
              {
                copy: 'mil',
                style: 'mil-font bold-inline',
                color: 'case-studies'
              }
            ],
            caption: {
              body: [{ copy: 'funding raised' }]
            }
          },
          {
            image: { image: FCAImg, width: '334px' },
            caption: {
              body: [{ copy: 'partnership secured' }]
            }
          }
        ]
      },
      next: 'zoetis'
    },
    zoetis: {
      heroMedia: { media: ZoetisPicture, type: 'image' },
      clientWorkTypeAndDescription: {
        title: 'Zoetis',
        workType: 'single page web app',
        skillDescription: [
          'Single page responsive application',
          'Mobile web app',
          'Custom mobile navigation',
          'learning managment system'
        ],
        body: [
          {
            copy:
              'Zoetis wanted to launch a web and mobile-based Learning Management System to aid veterinary students in learning to become successful veterinarians. Rose Digital architected and built a single page web application using AngularJS. This included a dynamic course path chooser based on the user’s current level of academic attainment, a full learning management platform and a social network for learners baked in. Vetvance has helped over 10,000 veterinary students to ﬁnd their path to employment or even entrepreneurship.'
          }
        ],
        agencyPartner: {
          name: 'agency partner',
          logo: BlockLogo
        }
      },
      media: [
        {
          version: 'img9',
          image: ZoetisMediaInset
        }
      ],
      keyPerformanceBody: {
        body: [
          {
            body: [
              {
                copy: '+',
                style: 'xxl-body bold-inline',
                color: 'case-studies'
              },
              { copy: '10', style: 'xxl-body bold-inline' },
              {
                copy: 'k',
                style: 'xxl-body bold-inline',
                color: 'case-studies'
              }
            ],
            caption: {
              body: [{ copy: 'active veterinary students' }]
            }
          }
        ]
      },
      next: 'bard-grad-center'
    },
    'bard-grad-center': {
      heroMedia: { media: BardPicture, type: 'image' },
      clientWorkTypeAndDescription: {
        title: 'bard graduate center',
        workType: 'iPad interactives',
        skillDescription: [
          'Responsive Design',
          'AngularJS single page mobile web application'
        ],
        body: [
          {
            copy:
              'Carrying Coca and American Style are iPad interactives designed to go with physical museum exhibits at the Bard Graduate Center Cultural Museum. Each interactive was designed to function as a single page application which could be dropped into any container. Special care was given to the touch handling as there was the possibility for multiple users interacting at any given time.'
          }
        ]
      },
      media: [
        {
          version: 'img9',
          image: BardMediaInset
        }
      ],
      keyPerformanceBody: {
        body: [
          {
            image: { image: NYTimesImg, width: '334px' },
            caption: {
              body: [{ copy: 'feature' }]
            }
          }
        ]
      },
      next: 'adidas'
    }
  },
  caseStudyList: [
    {
      type: 'video',
      src: AdidasShortVideo,
      postPreviewTitle: 'adidas',
      description: 'augmented reality',
      content:
        'When Adidas and Annex 88 wanted to use cutting edge technology to launch a new product, they looked to Rose Digital. Together we created a unique web-based augmented reality experience that handled thousands of users per second across any smartphones with WebGL and WebRTC enabled.',
      variant: 'default',
      path: 'adidas'
    },
    {
      type: 'image',
      src: NylPicture,
      postPreviewTitle: 'new york lottery',
      description: 'mobile app',
      content:
        'The New York Lottery is the largest lottery in the United States. Passionate players are able to engage with the lottery through a variety of mediums — vendors, the mobile apps, the website and the LinkNYC tablets on the streets of New York. Behind these interfaces there is complexity in both the back end and front end Rose Digital was tasked with building new features to delight the users as well as rearchitecting both the back and front end to form a more stable ecosystem on top of which the New York Lottery team can innovate.',
      variant: 'halfWidth',
      path: 'new-york-lottery'
    },
    {
      type: 'video',
      src: FuseShortVideo,
      postPreviewTitle: 'fuse',
      description: 'redesign & implementation',
      content:
        'Fuse is undergoing a full enterprise transformation. The content digital distribution is moving from 70% editorial and 30% video to the opposite. Rose Digital was contracted to help Fuse strategize around, design and implement a responsive web experience that would drive up user engagement and help re-invigorate the brand across all of their web and mobile properties. ',
      variant: 'halfWidth',
      path: 'fuse'
    },
    {
      type: 'image',
      align: 'textLeft',
      src: AMEXPicture,
      postPreviewTitle: 'american express',
      description: 'microservices + web app',
      content:
        'American Express is building a new business in Non-Card Lending. To do that, they needed to integrate many different identity, risk analysis, data processing and front end systems. Rose Digital built a set of back end  microservices to cover all of the business logic supporting the Working Capital Terms platform. We also built a React + Redux web app as well as a Quickbooks Plugin App. Our team’s work was used as the template on which front end development for the division was built.',
      variant: 'default',
      path: 'american-express'
    },
    {
      type: 'video',
      src: FordShortVideo,
      postPreviewTitle: 'ford',
      description: 'iphone app',
      content:
        'Rebuilt owner.ford.com to improve the user experience, increase conversion and improve site content management. We then built the native iOS and Android applications which can be found in the Apple App Store and Google Play Store respectively.',
      variant: 'default',
      path: 'ford'
    },
    {
      type: 'image',
      src: SkanskaPicture,
      align: 'textRight',
      postPreviewTitle: 'skanska',
      description: 'web app',
      content:
        'Skanska has helped build some of the most iconic structures in the world. Now they are turning the landmark James A. Farley Post Office into a world-class train hall servicing the massive Amtrak and LIRR traffic through New York. Rose Digital was tasked with designing and building a single page app to showcase the amazing work underway and attract MWBE construction partners.',
      variant: 'default',
      path: 'skanska'
    },
    {
      type: 'image',
      src: DealerMarketExTablet,
      postPreviewTitle: 'dealer market exchange',
      description: 'web app',
      content:
        'Dealer Market Exchange is building a suite of tools to help vehicle wholesalers like dealerships to value, buy and sell cars with the same ease that consumers have come to expect. To do that, Rose Digital helped build a suite of mobile and web applications to become the new operating system for vehicle dealerships starting with Fiat Chrysler and other major dealer groups.',
      variant: 'halfWidth',
      path: 'dealer-market-exchange'
    },
    {
      type: 'image',
      src: ZoetisPicture,
      postPreviewTitle: 'zoetis',
      description: 'iphone app',
      content:
        'Zoetis wanted to launch a web and mobile-based Learning Management System to aid veterinary students in learning to become successful veterinarians. Rose Digital architected and built a single page web application using AngularJS. This included a dynamic course path chooser based on the user’s current level of academic attainment, a full learning management platform and a social network for learners baked in. Vetvance has helped over 10,000 veterinary students to ﬁnd their path to employment or even entrepreneurship.',
      variant: 'halfWidth',
      path: 'zoetis'
    },
    {
      type: 'image',
      src: BardPicture,
      postPreviewTitle: 'bard grad center',
      description: 'web app',
      content:
        'Carrying Coca and American Style are iPad interactives designed to go with physical museum exhibits at the Bard Graduate Center Cultural Museum. Each interactive was designed to function as a single page application which could be dropped into any container. Special care was given to the touch handling as there was the possibility for multiple users interacting at any given time.',
      variant: 'halfWidth',
      path: 'bard-grad-center'
    }
  ],
  windowWidth: {
    desktopWindowWidth: window.innerWidth > 991,
    mobileWindowWidth: window.innerWidth <= 412
  },
  truncate: {
    numberOfLines: { default: 3, halfWidthTablet: 6, imageOnSide: 7, fullWidthFlex: 4, halfWidthDesktop: 4 },
    deviceSizes: [
      {
        type: 'smMobile',
        windowWidthMax: 320,
        characterCount: { default: 27 },
        mobile: true
      },
      {
        type: 'mdMobile',
        windowWidthMax: 375,
        characterCount: { default: 35 },
        mobile: true
      },
      {
        type: 'lgMobile',
        windowWidthMax: 420,
        characterCount: { default: 38 },
        mobile: true
      },
      {
        type: 'smTablet',
        windowWidthMax: 814,
        characterCount: { halfWidth: 29, default: 65 },
        tablet: true
      },
      {
        type: 'mdTablet',
        windowWidthMax: 1000,
        characterCount: { halfWidth: 36, default: 80 },
        tablet: true
      },
      {
        type: 'xxsDesktop',
        windowWidthMax: 1024,
        characterCount: { imageOnSide: 25, halfWidth: 41, custom: 55, default: 65 },
        desktop: true
      },
      {
        type: 'xsDesktop',
        windowWidthMax: 1100,
        characterCount: { imageOnSide: 25, halfWidth: 42, custom: 60, default: 70 },
        desktop: true
      },
      {
        type: 'smDesktop',
        windowWidthMax: 1200,
        characterCount: { imageOnSide: 27, halfWidth: 43, custom: 65, default: 107 },
        desktop: true
      },
      {
        type: 'mdDesktop',
        windowWidthMax: 1300,
        characterCount: { imageOnSide: 35, halfWidth: 50, custom: 69, default: 120 },
        desktop: true
      },
      {
        type: 'lgDesktop',
        windowWidthMax: 1450,
        characterCount: { imageOnSide: 42, halfWidth: 60, custom: 78, default: 130 },
        desktop: true
      },
      {
        type: 'xlDesktop',
        windowWidthMax: 1600,
        characterCount: { imageOnSide: 46, halfWidth: 72, custom: 87, default: 150 },
        desktop: true
      },
      {
        type: 'xxlDesktop',
        windowWidthMax: Infinity,
        characterCount: { imageOnSide: 56, halfWidth: 83, custom: 99, default: 160 },
        desktop: true
      }
    ]
  }
}

const {
  header,
  footer,
  home,
  about,
  whatWeDo,
  news,
  posts,
  clients,
  caseStudyList,
  windowWidth,
  truncate
} = copyDefaults

export const getCopy = section => {
  if (section.includes('roseDigital')) {
    return header.roseDigital
  } else if (section.includes('footer')) {
    return footer
  } else if (section.includes('home')) {
    return home
  } else if (section.includes('toptier')) {
    return home.toptier
  } else if (section.includes('mediaHome')) {
    return home.media
  } else if (section.includes('about')) {
    return about
  } else if (section.includes('contact')) {
    return about.contact
  } else if (section.includes('newsletter')) {
    return news
  } else if (section.includes('posts')) {
    return posts
  } else if (section.includes('joinOurTeam')) {
    return about.joinOurTeam
  } else if (section.includes('leadership')) {
    return about.leadership
  } else if (section.includes('whatWeDo')) {
    return whatWeDo
  } else if (section.includes('services')) {
    return whatWeDo.services
  } else if (section.includes('how')) {
    return whatWeDo.how
  } else if (section.includes('expertise')) {
    return whatWeDo.expertise
  } else if (section.includes('media')) {
    return whatWeDo.media
  } else if (section.includes('loadMore')) {
    return whatWeDo.loadMore
  } else if (section.includes('clients')) {
    return clients
  } else if (section.includes('case-studies-list')) {
    return caseStudyList
  } else if (section.includes('window-width')) {
    return windowWidth
  } else if (section.includes('truncate')) {
    return truncate
  }
}
