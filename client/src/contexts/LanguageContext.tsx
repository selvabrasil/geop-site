import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Language = "en" | "pt" | "es" | "zh";

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    nav_manual: "User Manual",
    nav_privacy: "Privacy Policy",
    nav_lang: "Language",

    // Hero
    hero_tagline: "Offline Geospatial Navigation",
    hero_title_1: "Navigate with precision,",
    hero_title_2: "online or offline.",
    hero_description: "GeOp is a geospatial navigation browser that works with Open Street Maps online and GeoPDF maps offline. Create tracks, mark waypoints, and navigate anywhere — with or without connectivity.",
    hero_cta: "Discover Features",

    // Features
    features_title: "Built for Explorers",
    features_subtitle: "Every feature designed for real-world navigation scenarios.",
    feature_1_title: "Online Navigation",
    feature_1_desc: "Browse maps using Open Street Maps when you have an internet connection. Access global map data in real-time.",
    feature_2_title: "Offline GeoPDF",
    feature_2_desc: "Import GeoPDF maps and navigate completely offline. Your maps work anywhere, even without signal.",
    feature_3_title: "Track & Waypoints",
    feature_3_desc: "Create GPS tracks, mark important waypoints, and export your data for analysis or sharing.",
    feature_4_title: "Export & Share",
    feature_4_desc: "Export your tracks and waypoints in standard formats. Share routes with your team or save for future reference.",

    // App Showcase
    showcase_title: "Intuitive Interface",
    showcase_description: "Designed for clarity and ease of use. Select your map source, import GeoPDFs, and start navigating immediately.",

    // How it Works
    how_title: "How It Works",
    how_1_step: "01",
    how_1_title: "Choose Your Map Source",
    how_1_desc: "Select between Standard OSM for online navigation or import your GeoPDF files for offline use.",
    how_2_step: "02",
    how_2_title: "Create Tracks & Points",
    how_2_desc: "Mark waypoints, record GPS tracks, and plan your routes directly on the map.",
    how_3_step: "03",
    how_3_title: "Navigate & Export",
    how_3_desc: "Follow your planned routes in real-time and export all data for documentation or sharing.",

    // CTA
    cta_title: "Ready to Navigate?",
    cta_description: "GeOp gives you the freedom to explore without limits. Download and start navigating today.",
    cta_button: "Download GeOp",

    // Footer
    footer_rights: "All rights reserved.",
    footer_manual: "User Manual",
    footer_privacy: "Privacy Policy",

    // Manual Page
    manual_title: "User Manual",
    manual_back: "Back to Home",
    manual_intro: "Welcome to the GeOp User Manual. This guide will help you get the most out of your geospatial navigation experience.",
    manual_sec1_title: "Getting Started",
    manual_sec1_content: "After installing GeOp, open the application. You will see the main screen with two options: Standard OSM for online navigation and Import GeoPDF for offline maps. Select the mode that suits your needs.",
    manual_sec2_title: "Online Mode (Open Street Maps)",
    manual_sec2_content: "Tap on 'Standard OSM' to begin online navigation. The app will load Open Street Maps data for your current location or any area you navigate to. Ensure you have an active internet connection for this mode.",
    manual_sec3_title: "Offline Mode (GeoPDF)",
    manual_sec3_content: "Tap on 'Import GeoPDF' to add offline maps to your collection. You can also open GeoPDF files directly from file managers or messaging apps like WhatsApp. Your imported maps appear in the Map Collection section.",
    manual_sec4_title: "Creating Tracks",
    manual_sec4_content: "While viewing a map, use the track creation tools to mark your route. Tap points along your path to create waypoints. The app records your GPS position automatically when tracking is enabled.",
    manual_sec5_title: "Exporting Data",
    manual_sec5_content: "Export your tracks and waypoints in KML format. Use the export function in the menu to save your data to a file or share it with other applications.",

    // Privacy Page
    privacy_title: "Privacy Policy",
    privacy_back: "Back to Home",
    privacy_intro: "This Privacy Policy describes how GeOp collects, uses, and protects your personal information.",
    privacy_sec1_title: "Data Collection",
    privacy_sec1_content: "GeOp collects GPS coordinates and map usage data solely for the purpose of navigation functionality. No personal information is collected beyond what is necessary for the app to function.",
    privacy_sec2_title: "Location Data",
    privacy_sec2_content: "Location data is processed locally on your device. GeOp uses your GPS position for navigation and track recording. Location data is not transmitted to external servers unless you explicitly choose to export or share your data.",
    privacy_sec3_title: "Map Data",
    privacy_sec3_content: "When using Open Street Maps (online mode), map data is fetched from OSM servers. When using GeoPDF (offline mode), maps are stored locally on your device. GeOp does not collect or transmit your imported map data.",
    privacy_sec4_title: "Data Storage",
    privacy_sec4_content: "All tracks, waypoints, and imported maps are stored locally on your device. GeOp does not use cloud storage or external servers to store your navigation data. You have full control over your data.",
    privacy_sec5_title: "Third-Party Services",
    privacy_sec5_content: "GeOp uses Open Street Maps as its online map provider. The privacy policies of third-party services apply when using their respective features. We recommend reviewing the OSM privacy policy for details on their data practices.",
    privacy_sec6_title: "Contact",
    privacy_sec6_content: "If you have questions about this Privacy Policy, please contact us through the application or the developer contact information provided in the app store listing.",
  },
  pt: {
    // Navigation
    nav_manual: "Manual do Usuário",
    nav_privacy: "Política de Privacidade",
    nav_lang: "Idioma",

    // Hero
    hero_tagline: "Navegação Geoespacial Offline",
    hero_title_1: "Navegue com precisão,",
    hero_title_2: "online ou offline.",
    hero_description: "GeOp é um navegador geoespacial que funciona com Open Street Maps online e mapas GeoPDF offline. Crie trilhas, marque pontos de referência e navegue em qualquer lugar — com ou sem conectividade.",
    hero_cta: "Descubra os Recursos",

    // Features
    features_title: "Construído para Exploradores",
    features_subtitle: "Cada recurso projetado para cenários reais de navegação.",
    feature_1_title: "Navegação Online",
    feature_1_desc: "Navegue por mapas usando Open Street Maps quando tiver conexão com a internet. Acesse dados de mapas globais em tempo real.",
    feature_2_title: "GeoPDF Offline",
    feature_2_desc: "Importe mapas GeoPDF e navegue completamente offline. Seus mapas funcionam em qualquer lugar, mesmo sem sinal.",
    feature_3_title: "Trilhas e Pontos",
    feature_3_desc: "Crie trilhas GPS, marque pontos de referência importantes e exporte seus dados para análise ou compartilhamento.",
    feature_4_title: "Exportar e Compartilhar",
    feature_4_desc: "Exporte suas trilhas e pontos em formatos padrão. Compartilhe rotas com sua equipe ou salve para referência futura.",

    // App Showcase
    showcase_title: "Interface Intuitiva",
    showcase_description: "Projetada para clareza e facilidade de uso. Selecione sua fonte de mapa, importe GeoPDFs e comece a navegar imediatamente.",

    // How it Works
    how_title: "Como Funciona",
    how_1_step: "01",
    how_1_title: "Escolha sua Fonte de Mapa",
    how_1_desc: "Selecione entre OSM padrão para navegação online ou importe seus arquivos GeoPDF para uso offline.",
    how_2_step: "02",
    how_2_title: "Crie Trilhas e Pontos",
    how_2_desc: "Marque pontos de referência, grave trilhas GPS e planeje suas rotas diretamente no mapa.",
    how_3_step: "03",
    how_3_title: "Navegue e Exporte",
    how_3_desc: "Siga suas rotas planejadas em tempo real e exporte todos os dados para documentação ou compartilhamento.",

    // CTA
    cta_title: "Pronto para Navegar?",
    cta_description: "GeOp lhe dá a liberdade de explorar sem limites. Baixe e comece a navegar hoje.",
    cta_button: "Baixar GeOp",

    // Footer
    footer_rights: "Todos os direitos reservados.",
    footer_manual: "Manual do Usuário",
    footer_privacy: "Política de Privacidade",

    // Manual Page
    manual_title: "Manual do Usuário",
    manual_back: "Voltar ao Início",
    manual_intro: "Bem-vindo ao Manual do Usuário do GeOp. Este guia ajudará você a aproveitar ao máximo sua experiência de navegação geoespacial.",
    manual_sec1_title: "Começando",
    manual_sec1_content: "Após instalar o GeOp, abra o aplicativo. Você verá a tela principal com duas opções: OSM Padrão para navegação online e Importar GeoPDF para mapas offline. Selecione o modo que atende às suas necessidades.",
    manual_sec2_title: "Modo Online (Open Street Maps)",
    manual_sec2_content: "Toque em 'OSM Padrão' para iniciar a navegação online. O aplicativo carregará dados do Open Street Maps para sua localização atual ou qualquer área para a qual você navegar. Certifique-se de ter uma conexão ativa com a internet.",
    manual_sec3_title: "Modo Offline (GeoPDF)",
    manual_sec3_content: "Toque em 'Importar GeoPDF' para adicionar mapas offline à sua coleção. Você também pode abrir arquivos GeoPDF diretamente de gerenciadores de arquivos ou aplicativos de mensagens como o WhatsApp. Seus mapas importados aparecem na seção Coleção de Mapas.",
    manual_sec4_title: "Criando Trilhas",
    manual_sec4_content: "Ao visualizar um mapa, use as ferramentas de criação de trilhas para marcar sua rota. Toque em pontos ao longo do caminho para criar pontos de referência. O aplicativo grava sua posição GPS automaticamente quando o rastreamento está ativado.",
    manual_sec5_title: "Exportando Dados",
    manual_sec5_content: "Exporte suas trilhas e pontos de referência em formato KML. Use a função de exportação no menu para salvar seus dados em um arquivo ou compartilhá-los com outros aplicativos.",

    // Privacy Page
    privacy_title: "Política de Privacidade",
    privacy_back: "Voltar ao Início",
    privacy_intro: "Esta Política de Privacidade descreve como o GeOp coleta, usa e protege suas informações pessoais.",
    privacy_sec1_title: "Coleta de Dados",
    privacy_sec1_content: "O GeOp coleta coordenadas GPS e dados de uso de mapas exclusivamente para a funcionalidade de navegação. Nenhuma informação pessoal é coletada além do necessário para o funcionamento do aplicativo.",
    privacy_sec2_title: "Dados de Localização",
    privacy_sec2_content: "Os dados de localização são processados localmente no seu dispositivo. O GeOp usa sua posição GPS para navegação e gravação de trilhas. Dados de localização não são transmitidos para servidores externos, a menos que você escolha exportar ou compartilhar seus dados.",
    privacy_sec3_title: "Dados de Mapas",
    privacy_sec3_content: "Ao usar Open Street Maps (modo online), os dados do mapa são obtidos dos servidores OSM. Ao usar GeoPDF (modo offline), os mapas são armazenados localmente no seu dispositivo. O GeOp não coleta nem transmite os dados dos seus mapas importados.",
    privacy_sec4_title: "Armazenamento de Dados",
    privacy_sec4_content: "Todas as trilhas, pontos de referência e mapas importados são armazenados localmente no seu dispositivo. O GeOp não usa armazenamento em nuvem ou servidores externos para armazenar seus dados de navegação. Você tem controle total sobre seus dados.",
    privacy_sec5_title: "Serviços de Terceiros",
    privacy_sec5_content: "O GeOp usa o Open Street Maps como provedor de mapas online. As políticas de privacidade de serviços de terceiros se aplicam ao usar seus respectivos recursos. Recomendamos revisar a política de privacidade do OSM para detalhes sobre suas práticas de dados.",
    privacy_sec6_title: "Contato",
    privacy_sec6_content: "Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo aplicativo ou pelas informações de contato do desenvolvedor fornecidas na loja de aplicativos.",
  },
  es: {
    // Navigation
    nav_manual: "Manual de Usuario",
    nav_privacy: "Política de Privacidad",
    nav_lang: "Idioma",

    // Hero
    hero_tagline: "Navegación Geoespacial Offline",
    hero_title_1: "Navega con precisión,",
    hero_title_2: "online o sin conexión.",
    hero_description: "GeOp es un navegador geoespacial que funciona con Open Street Maps en línea y mapas GeoPDF sin conexión. Crea rutas, marca puntos de referencia y navega en cualquier lugar — con o sin conectividad.",
    hero_cta: "Descubre las Funciones",

    // Features
    features_title: "Diseñado para Exploradores",
    features_subtitle: "Cada función diseñada para escenarios reales de navegación.",
    feature_1_title: "Navegación en Línea",
    feature_1_desc: "Explora mapas usando Open Street Maps cuando tienes conexión a internet. Accede a datos de mapas globales en tiempo real.",
    feature_2_title: "GeoPDF sin Conexión",
    feature_2_desc: "Importa mapas GeoPDF y navega completamente sin conexión. Tus mapas funcionan en cualquier lugar, incluso sin señal.",
    feature_3_title: "Rutas y Puntos",
    feature_3_desc: "Crea rutas GPS, marca puntos de referencia importantes y exporta tus datos para análisis o compartir.",
    feature_4_title: "Exportar y Compartir",
    feature_4_desc: "Exporta tus rutas y puntos en formatos estándar. Comparte rutas con tu equipo o guárdalas para referencia futura.",

    // App Showcase
    showcase_title: "Interfaz Intuitiva",
    showcase_description: "Diseñada para claridad y facilidad de uso. Selecciona tu fuente de mapa, importa GeoPDFs y comienza a navegar inmediatamente.",

    // How it Works
    how_title: "Cómo Funciona",
    how_1_step: "01",
    how_1_title: "Elige tu Fuente de Mapa",
    how_1_desc: "Selecciona entre OSM estándar para navegación en línea o importa tus archivos GeoPDF para uso sin conexión.",
    how_2_step: "02",
    how_2_title: "Crea Rutas y Puntos",
    how_2_desc: "Marca puntos de referencia, graba rutas GPS y planifica tus recorridos directamente en el mapa.",
    how_3_step: "03",
    how_3_title: "Navega y Exporta",
    how_3_desc: "Sigue tus rutas planificadas en tiempo real y exporta todos los datos para documentación o compartir.",

    // CTA
    cta_title: "¿Listo para Navegar?",
    cta_description: "GeOp te da la libertad de explorar sin límites. Descarga y comienza a navegar hoy.",
    cta_button: "Descargar GeOp",

    // Footer
    footer_rights: "Todos los derechos reservados.",
    footer_manual: "Manual de Usuario",
    footer_privacy: "Política de Privacidad",

    // Manual Page
    manual_title: "Manual de Usuario",
    manual_back: "Volver al Inicio",
    manual_intro: "Bienvenido al Manual de Usuario de GeOp. Esta guía te ayudará a aprovechar al máximo tu experiencia de navegación geoespacial.",
    manual_sec1_title: "Primeros Pasos",
    manual_sec1_content: "Después de instalar GeOp, abre la aplicación. Verás la pantalla principal con dos opciones: OSM Estándar para navegación en línea e Importar GeoPDF para mapas sin conexión. Selecciona el modo que se adapte a tus necesidades.",
    manual_sec2_title: "Modo en Línea (Open Street Maps)",
    manual_sec2_content: "Toca 'OSM Estándar' para iniciar la navegación en línea. La aplicación cargará datos de Open Street Maps para tu ubicación actual o cualquier área a la que navegues. Asegúrate de tener una conexión activa a internet.",
    manual_sec3_title: "Modo sin Conexión (GeoPDF)",
    manual_sec3_content: "Toca 'Importar GeoPDF' para agregar mapas sin conexión a tu colección. También puedes abrir archivos GeoPDF directamente desde administradores de archivos o aplicaciones de mensajería como WhatsApp. Tus mapas importados aparecen en la sección Colección de Mapas.",
    manual_sec4_title: "Creando Rutas",
    manual_sec4_content: "Al ver un mapa, usa las herramientas de creación de rutas para marcar tu recorrido. Toca puntos a lo largo de tu camino para crear puntos de referencia. La aplicación registra tu posición GPS automáticamente cuando el rastreo está activado.",
    manual_sec5_title: "Exportando Datos",
    manual_sec5_content: "Exporta tus rutas y puntos de referencia en formato KML. Usa la función de exportación en el menú para guardar tus datos en un archivo o compartirlos con otras aplicaciones.",

    // Privacy Page
    privacy_title: "Política de Privacidad",
    privacy_back: "Volver al Inicio",
    privacy_intro: "Esta Política de Privacidad describe cómo GeOp recopila, utiliza y protege tu información personal.",
    privacy_sec1_title: "Recopilación de Datos",
    privacy_sec1_content: "GeOp recopila coordenadas GPS y datos de uso de mapas exclusivamente para la funcionalidad de navegación. No se recopila información personal más allá de lo necesario para que la aplicación funcione.",
    privacy_sec2_title: "Datos de Ubicación",
    privacy_sec2_content: "Los datos de ubicación se procesan localmente en tu dispositivo. GeOp utiliza tu posición GPS para navegación y grabación de rutas. Los datos de ubicación no se transmiten a servidores externos a menos que elijas explícitamente exportar o compartir tus datos.",
    privacy_sec3_title: "Datos de Mapas",
    privacy_sec3_content: "Al usar Open Street Maps (modo en línea), los datos del mapa se obtienen de los servidores de OSM. Al usar GeoPDF (modo sin conexión), los mapas se almacenan localmente en tu dispositivo. GeOp no recopila ni transmite los datos de tus mapas importados.",
    privacy_sec4_title: "Almacenamiento de Datos",
    privacy_sec4_content: "Todas las rutas, puntos de referencia y mapas importados se almacenan localmente en tu dispositivo. GeOp no utiliza almacenamiento en la nube ni servidores externos para almacenar tus datos de navegación. Tienes control total sobre tus datos.",
    privacy_sec5_title: "Servicios de Terceros",
    privacy_sec5_content: "GeOp utiliza Open Street Maps como proveedor de mapas en línea. Las políticas de privacidad de servicios de terceros se aplican al usar sus respectivas funciones. Recomendamos revisar la política de privacidad de OSM para obtener detalles sobre sus prácticas de datos.",
    privacy_sec6_title: "Contacto",
    privacy_sec6_content: "Si tienes preguntas sobre esta Política de Privacidad, contáctanos a través de la aplicación o la información de contacto del desarrollador proporcionada en la tienda de aplicaciones.",
  },
  zh: {
    // Navigation
    nav_manual: "用户手册",
    nav_privacy: "隐私政策",
    nav_lang: "语言",

    // Hero
    hero_tagline: "离线地理空间导航",
    hero_title_1: "精准导航，",
    hero_title_2: "在线或离线。",
    hero_description: "GeOp 是一款地理空间导航浏览器，在线使用 Open Street Maps，离线使用 GeoPDF 地图。创建轨迹、标记航点，在任何地方导航——无论是否有网络连接。",
    hero_cta: "了解功能",

    // Features
    features_title: "为探险者打造",
    features_subtitle: "每个功能都为真实世界的导航场景而设计。",
    feature_1_title: "在线导航",
    feature_1_desc: "在有互联网连接时使用 Open Street Maps 浏览地图。实时访问全球地图数据。",
    feature_2_title: "离线 GeoPDF",
    feature_2_desc: "导入 GeoPDF 地图并完全离线导航。您的地图在任何地方都能使用，即使没有信号。",
    feature_3_title: "轨迹与航点",
    feature_3_desc: "创建 GPS 轨迹，标记重要航点，并导出数据用于分析或分享。",
    feature_4_title: "导出与分享",
    feature_4_desc: "以标准格式导出您的轨迹和航点。与团队分享路线或保存以备将来参考。",

    // App Showcase
    showcase_title: "直观界面",
    showcase_description: "为清晰和易用而设计。选择您的地图来源，导入 GeoPDF，立即开始导航。",

    // How it Works
    how_title: "工作原理",
    how_1_step: "01",
    how_1_title: "选择地图来源",
    how_1_desc: "选择标准 OSM 进行在线导航，或导入您的 GeoPDF 文件进行离线使用。",
    how_2_step: "02",
    how_2_title: "创建轨迹和航点",
    how_2_desc: "在地图上标记航点，记录 GPS 轨迹，直接规划您的路线。",
    how_3_step: "03",
    how_3_title: "导航与导出",
    how_3_desc: "实时跟踪您规划的路线，并导出所有数据用于文档记录或分享。",

    // CTA
    cta_title: "准备好导航了吗？",
    cta_description: "GeOp 赋予您无限制探索的自由。立即下载并开始导航。",
    cta_button: "下载 GeOp",

    // Footer
    footer_rights: "保留所有权利。",
    footer_manual: "用户手册",
    footer_privacy: "隐私政策",

    // Manual Page
    manual_title: "用户手册",
    manual_back: "返回首页",
    manual_intro: "欢迎使用 GeOp 用户手册。本指南将帮助您充分利用您的地理空间导航体验。",
    manual_sec1_title: "入门指南",
    manual_sec1_content: "安装 GeOp 后，打开应用程序。您将看到主界面有两个选项：标准 OSM 用于在线导航，导入 GeoPDF 用于离线地图。选择适合您需求的模式。",
    manual_sec2_title: "在线模式（Open Street Maps）",
    manual_sec2_content: "点击'标准 OSM'开始在线导航。应用程序将为您的当前位置或您导航到的任何区域加载 Open Street Maps 数据。确保您有活跃的互联网连接。",
    manual_sec3_title: "离线模式（GeoPDF）",
    manual_sec3_content: "点击'导入 GeoPDF'将离线地图添加到您的收藏中。您还可以直接从文件管理器或 WhatsApp 等消息应用程序打开 GeoPDF 文件。您导入的地图显示在地图收藏部分。",
    manual_sec4_title: "创建轨迹",
    manual_sec4_content: "查看地图时，使用轨迹创建工具标记您的路线。沿路径点击点来创建航点。启用跟踪时，应用程序会自动记录您的 GPS 位置。",
    manual_sec5_title: "导出数据",
    manual_sec5_content: "以 KML 格式导出您的轨迹和航点。使用菜单中的导出功能将数据保存到文件或与其他应用程序分享。",

    // Privacy Page
    privacy_title: "隐私政策",
    privacy_back: "返回首页",
    privacy_intro: "本隐私政策描述了 GeOp 如何收集、使用和保护您的个人信息。",
    privacy_sec1_title: "数据收集",
    privacy_sec1_content: "GeOp 仅出于导航功能目的收集 GPS 坐标和地图使用数据。除了应用程序运行所必需的信息外，不收集任何个人信息。",
    privacy_sec2_title: "位置数据",
    privacy_sec2_content: "位置数据在您的设备上本地处理。GeOp 使用您的 GPS 位置进行导航和轨迹记录。除非您明确选择导出或分享数据，否则位置数据不会传输到外部服务器。",
    privacy_sec3_title: "地图数据",
    privacy_sec3_content: "使用 Open Street Maps（在线模式）时，地图数据从 OSM 服务器获取。使用 GeoPDF（离线模式）时，地图存储在您的设备本地。GeOp 不会收集或传输您导入的地图数据。",
    privacy_sec4_title: "数据存储",
    privacy_sec4_content: "所有轨迹、航点和导入的地图都存储在您的设备本地。GeOp 不使用云存储或外部服务器存储您的导航数据。您对自己的数据拥有完全控制权。",
    privacy_sec5_title: "第三方服务",
    privacy_sec5_content: "GeOp 使用 Open Street Maps 作为在线地图提供商。使用第三方服务的各自功能时，适用其隐私政策。我们建议查看 OSM 隐私政策以了解其数据实践的详细信息。",
    privacy_sec6_title: "联系方式",
    privacy_sec6_content: "如果您对本隐私政策有任何疑问，请通过应用程序或应用商店列表中提供的开发者联系信息与我们联系。",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = useCallback(
    (key: string) => translations[language][key] || key,
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
