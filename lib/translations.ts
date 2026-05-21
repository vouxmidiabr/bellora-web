export type Language = "EN" | "PT" | "ES";

export interface Translations {
  navFeatures: string;
  navPlatform: string;
  navHow: string;
  navPricing: string;
  navCta: string;
  heroPill: string;
  heroH: string;
  heroSub: string;
  heroBtn1: string;
  heroBtn2: string;
  heroTrust: string;
  phoneGreet: string;
  phoneTitle: string;
  phoneSub: string;
  catRoomService: string;
  catHousekeeping: string;
  catMaintenance: string;
  catReception: string;
  trackerT: string;
  trackerS: string;
  marqueeLabel: string;
  featLabel: string;
  featHead: string;
  feat1Title: string; feat1Body: string;
  feat2Title: string; feat2Body: string;
  feat3Title: string; feat3Body: string;
  feat4Title: string; feat4Body: string;
  feat5Title: string; feat5Body: string;
  feat6Title: string; feat6Body: string;
  platLabel: string;
  platHead: string;
  platSub: string;
  platGuestTitle: string;
  platStaffTitle: string;
  gBc: string;
  gCatRS: string; gCatHK: string; gCatMt: string; gCatRc: string;
  otTitle: string;
  step1: string; step2: string; step3: string; step4: string;
  badge1: string; badge2: string; badge3: string;
  tk1Item: string; tk1Badge: string; tk1Dept: string;
  tk2Item: string; tk2Badge: string; tk2Dept: string;
  tk3Item: string; tk3Badge: string; tk3Dept: string;
  platFooter: string;
  howLabel: string;
  howHead: string;
  howSub: string;
  how1Title: string; how1Body: string;
  how2Title: string; how2Body: string;
  how3Title: string; how3Body: string;
  priceLabel: string;
  priceHead: string;
  priceSub: string;
  priceFrom: string;
  priceMo: string;
  priceAdapted: string;
  priceF1: string; priceF2: string; priceF3: string; priceF4: string;
  priceCtaQ: string;
  priceCtaDesc: string;
  priceDemoBtn: string;
  ctaH: string;
  ctaSub: string;
  ctaBtn: string;
  ctaFn: string;
  demoTitle: string;
  demoSub: string;
  demoName: string;
  demoHotel: string;
  demoEmail: string;
  demoPhone: string;
  demoRooms: string;
  demoRoomsPlaceholder: string;
  demoSubmit: string;
  demoSending: string;
  demoSuccessTitle: string;
  demoSuccessSub: string;
  demoClose: string;
  demoError: string;
  footDesc: string;
  footCopy: string;
  footCol1: string; footCol2: string; footCol3: string;
  kpiLabel: string;
  kpiSub: string;
  kpiNote: string;
}

export const translations: Record<Language, Translations> = {
  EN: {
    navFeatures: "Features", navPlatform: "Platform", navHow: "How it works", navPricing: "Pricing", navCta: "Request Demo",
    heroPill: "Now live · Portugal & Spain",
    heroH: "The guest <span class=\"grad-text\">experience</span><br>platform for modern hotels.",
    heroSub: "From room service to maintenance, every request is managed in real time and in any language. Zero apps, zero friction, zero missed orders.",
    heroBtn1: "Request a Demo", heroBtn2: "See it live →", heroTrust: "Trusted by hotels across Europe",
    phoneGreet: "Hello, Carlos", phoneTitle: "How can we<br>help you?", phoneSub: "Select what you need",
    catRoomService: "Room Service", catHousekeeping: "Housekeeping", catMaintenance: "Maintenance", catReception: "Reception",
    trackerT: "Room Service · On the way", trackerS: "Breakfast on its way",
    marqueeLabel: "Trusted by leading hotels",
    featLabel: "What Bellora Does",
    featHead: "Built for every touchpoint of<br>the guest journey.",
    feat1Title: "No app required", feat1Body: "Guests connect via QR code in their room. No download, no account, no friction. Scan once and every service is right there.",
    feat2Title: "Real-time tracking", feat2Body: "Guests follow their request live from submission to delivery, like Uber but for hotel services. Status updates at every step.",
    feat3Title: "Multilingual by default", feat3Body: "Auto-detects the guest's language. Full support for Portuguese, English, and Spanish, with no configuration needed.",
    feat4Title: "Live ops dashboard", feat4Body: "Every request visible in real time, color-coded by SLA status, routed to the right department automatically.",
    feat5Title: "Role-based access", feat5Body: "From kitchen staff to general manager, granular permissions ensure each person sees exactly what they need.",
    feat6Title: "TV mode for kitchens", feat6Body: "A dedicated full-screen display for wall monitors. Purpose-built for the kitchen floor, no mouse needed.",
    platLabel: "The Platform", platHead: "Two interfaces.<br>One seamless experience.",
    platSub: "Guests order effortlessly. Staff execute flawlessly. Everything syncs in real time.",
    platGuestTitle: "Guest Interface", platStaffTitle: "Staff Dashboard",
    gBc: "Room 204 · Carlos Silva · EN language",
    gCatRS: "Room Service", gCatHK: "Housekeeping", gCatMt: "Maintenance", gCatRc: "Reception",
    otTitle: "Order status", step1: "Order received", step2: "Preparing", step3: "On the way", step4: "Delivered",
    badge1: "● 3 New", badge2: "● 2 Preparing", badge3: "● 1 On the way",
    tk1Item: "Full breakfast", tk1Badge: "On the way", tk1Dept: "Kitchen",
    tk2Item: "Extra towels", tk2Badge: "New", tk2Dept: "Housekeeping",
    tk3Item: "Daily special", tk3Badge: "Preparing", tk3Dept: "Kitchen",
    platFooter: "Real-time · updates every 3s via WebSocket",
    howLabel: "How It Works", howHead: "Up and running in<br>one afternoon.", howSub: "No IT team. No complex integrations. We handle everything.",
    how1Title: "We configure your hotel", how1Body: "Rooms, staff accounts, departments, and services, all set up by our team. You start receiving orders the same day.",
    how2Title: "Guests connect via QR", how2Body: "Place QR codes in each room. Guests scan and request instantly: no app download, no registration, nothing to install.",
    how3Title: "Your team manages live", how3Body: "Staff get instant alerts. Managers track SLAs, ratings, and KPIs in real time, with data to continuously improve.",
    priceLabel: "Pricing", priceHead: "Simple and transparent.", priceSub: "One plan, fully adapted to your hotel. No hidden fees.",
    priceFrom: "From", priceMo: "€199/mo",
    priceAdapted: "Tailored to your hotel's size · Enterprise pricing available",
    priceF1: "Free setup", priceF2: "First month free", priceF3: "No lock-in contract", priceF4: "Support included",
    priceCtaQ: "Want to know the exact price for your hotel?",
    priceCtaDesc: "Book a 30-minute demo. We'll show you Bellora live and send you a personalised proposal the same day.",
    priceDemoBtn: "Book a demo",
    ctaH: "Ready to transform your<br><span class=\"grad-text\">guest experience?</span>",
    ctaSub: "Book a 30-minute demo. We'll show you Bellora live and configure it for your hotel, on the same day.",
    ctaBtn: "Book Your Demo →", ctaFn: "No commitment required · Free setup included",
    demoTitle: "Book a Demo", demoSub: "30 minutes. Live walkthrough. Personalised proposal on the same day.", demoName: "Your name", demoHotel: "Hotel name", demoEmail: "Email", demoPhone: "Phone (optional)", demoRooms: "Number of rooms", demoRoomsPlaceholder: "Select a range", demoSubmit: "Book my demo →", demoSending: "Sending...", demoSuccessTitle: "We'll be in touch!", demoSuccessSub: "We received your request and will contact you within one business day to confirm the demo.", demoClose: "Close", demoError: "Something went wrong. Please try again.",
    footDesc: "Guest experience platform for modern hotels. Built in Portugal.",
    footCopy: "© 2025 Bellora. All rights reserved.",
    footCol1: "Product", footCol2: "Company", footCol3: "Get Started",
    kpiLabel: "Avg. response", kpiSub: "SLA compliance", kpiNote: "78% within target ↑12%",
  },
  PT: {
    navFeatures: "Funcionalidades", navPlatform: "Plataforma", navHow: "Como funciona", navPricing: "Preços", navCta: "Pedir Demo",
    heroPill: "Já disponível · Portugal & Espanha",
    heroH: "A plataforma de <span class=\"grad-text\">experiência</span><br>do hóspede para hotéis modernos.",
    heroSub: "Do room service à manutenção, cada pedido é gerido em tempo real e em qualquer idioma. Zero apps, zero fricção, zero pedidos perdidos.",
    heroBtn1: "Pedir uma Demo", heroBtn2: "Ver em direto →", heroTrust: "Com a confiança de hotéis em toda a Europa",
    phoneGreet: "Olá, Carlos", phoneTitle: "Como podemos<br>ajudá-lo?", phoneSub: "Selecione o que precisa",
    catRoomService: "Room Service", catHousekeeping: "Limpeza", catMaintenance: "Manutenção", catReception: "Receção",
    trackerT: "Room Service · A caminho", trackerS: "Pequeno-almoço a caminho",
    marqueeLabel: "Com a confiança dos melhores hotéis",
    featLabel: "O Que o Bellora Faz",
    featHead: "Construído para cada ponto de contacto<br>da experiência do hóspede.",
    feat1Title: "Sem app necessária", feat1Body: "Os hóspedes ligam-se via QR code no quarto. Sem download, sem conta, sem fricção. Um scan e todos os serviços estão disponíveis.",
    feat2Title: "Rastreamento em tempo real", feat2Body: "Os hóspedes seguem o pedido em direto, como o Uber mas para serviços hoteleiros. Atualizações de estado em cada passo.",
    feat3Title: "Multilingue por defeito", feat3Body: "Deteta automaticamente o idioma do hóspede. Suporte completo para português, inglês e espanhol, sem qualquer configuração necessária.",
    feat4Title: "Dashboard operacional ao vivo", feat4Body: "Cada pedido visível em tempo real, com código de cores por estado SLA, encaminhado automaticamente para o departamento certo.",
    feat5Title: "Acesso por função", feat5Body: "Da equipa de cozinha ao diretor geral, permissões detalhadas garantem que cada pessoa vê exatamente o que precisa.",
    feat6Title: "Modo TV para cozinhas", feat6Body: "Ecrã dedicado em modo full-screen para monitores de parede. Criado especificamente para a cozinha, sem rato necessário.",
    platLabel: "A Plataforma", platHead: "Duas interfaces.<br>Uma experiência fluida.",
    platSub: "Os hóspedes pedem sem esforço. A equipa executa com precisão. Tudo sincronizado em tempo real.",
    platGuestTitle: "Interface do Hóspede", platStaffTitle: "Dashboard da Equipa",
    gBc: "Quarto 204 · Carlos Silva · Idioma PT",
    gCatRS: "Room Service", gCatHK: "Limpeza", gCatMt: "Manutenção", gCatRc: "Receção",
    otTitle: "Estado do pedido", step1: "Pedido recebido", step2: "A preparar", step3: "A caminho", step4: "Entregue",
    badge1: "● 3 Novos", badge2: "● 2 A preparar", badge3: "● 1 A caminho",
    tk1Item: "Café da manhã completo", tk1Badge: "A caminho", tk1Dept: "Cozinha",
    tk2Item: "Toalhas extra", tk2Badge: "Novo", tk2Dept: "Housekeeping",
    tk3Item: "Prato do dia", tk3Badge: "A preparar", tk3Dept: "Cozinha",
    platFooter: "Tempo real · atualizações a cada 3s via WebSocket",
    howLabel: "Como Funciona", howHead: "Pronto a funcionar<br>numa tarde.", howSub: "Sem equipa de IT. Sem integrações complexas. Nós tratamos de tudo.",
    how1Title: "Configuramos o seu hotel", how1Body: "Quartos, contas de staff, departamentos e serviços, tudo configurado pela nossa equipa. Começa a receber pedidos no mesmo dia.",
    how2Title: "Os hóspedes ligam-se via QR", how2Body: "Coloque QR codes em cada quarto. Os hóspedes acedem e pedem instantaneamente: sem download de app, sem registo, nada para instalar.",
    how3Title: "A equipa gere em tempo real", how3Body: "O staff recebe alertas instantâneos. Os gestores acompanham SLAs, avaliações e KPIs em tempo real, com dados para melhorar continuamente.",
    priceLabel: "Preços", priceHead: "Simples e sem surpresas.", priceSub: "Um plano, adaptado ao seu hotel. Sem taxas ocultas.",
    priceFrom: "A partir de", priceMo: "€199/mês",
    priceAdapted: "Adaptado ao tamanho do seu hotel · Preços enterprise disponíveis",
    priceF1: "Configuração gratuita", priceF2: "Primeiro mês gratuito", priceF3: "Sem contrato de permanência", priceF4: "Suporte incluído",
    priceCtaQ: "Quer saber o preço exacto para o seu hotel?",
    priceCtaDesc: "Marque uma demo de 30 minutos. Mostramos a Bellora ao vivo e enviamos uma proposta personalizada no mesmo dia.",
    priceDemoBtn: "Marcar uma demo",
    ctaH: "Pronto para transformar a<br><span class=\"grad-text\">experiência do hóspede?</span>",
    ctaSub: "Marque uma demo de 30 minutos. Mostramos o Bellora ao vivo e configuramos tudo para o seu hotel, no mesmo dia.",
    ctaBtn: "Marcar a Sua Demo →", ctaFn: "Sem compromisso · Configuração gratuita incluída",
    demoTitle: "Marcar uma Demo", demoSub: "30 minutos. Demo ao vivo. Proposta personalizada no mesmo dia.", demoName: "O seu nome", demoHotel: "Nome do hotel", demoEmail: "Email", demoPhone: "Telefone (opcional)", demoRooms: "Número de quartos", demoRoomsPlaceholder: "Selecione um intervalo", demoSubmit: "Marcar a minha demo →", demoSending: "A enviar...", demoSuccessTitle: "Entraremos em contacto!", demoSuccessSub: "Recebemos o seu pedido e iremos contactá-lo num dia útil para confirmar a demo.", demoClose: "Fechar", demoError: "Algo correu mal. Por favor tente novamente.",
    footDesc: "Plataforma de experiência do hóspede para hotéis modernos. Criada em Portugal.",
    footCopy: "© 2025 Bellora. Todos os direitos reservados.",
    footCol1: "Produto", footCol2: "Empresa", footCol3: "Começar",
    kpiLabel: "Resp. média", kpiSub: "Conformidade SLA", kpiNote: "78% dentro do alvo ↑12%",
  },
  ES: {
    navFeatures: "Funcionalidades", navPlatform: "Plataforma", navHow: "Cómo funciona", navPricing: "Precios", navCta: "Solicitar Demo",
    heroPill: "Ya disponible · Portugal & España",
    heroH: "La plataforma de <span class=\"grad-text\">experiencia</span><br>del huésped para hoteles modernos.",
    heroSub: "Desde el servicio de habitaciones hasta el mantenimiento, cada solicitud se gestiona en tiempo real y en cualquier idioma. Cero apps, cero fricciones, cero pedidos perdidos.",
    heroBtn1: "Solicitar una Demo", heroBtn2: "Ver en directo →", heroTrust: "Con la confianza de hoteles de toda Europa",
    phoneGreet: "Hola, Carlos", phoneTitle: "¿Cómo podemos<br>ayudarle?", phoneSub: "Seleccione lo que necesita",
    catRoomService: "Room Service", catHousekeeping: "Limpieza", catMaintenance: "Mantenimiento", catReception: "Recepción",
    trackerT: "Room Service · En camino", trackerS: "Desayuno en camino",
    marqueeLabel: "Con la confianza de los mejores hoteles",
    featLabel: "Qué Hace Bellora",
    featHead: "Construido para cada punto de contacto<br>del viaje del huésped.",
    feat1Title: "Sin app requerida", feat1Body: "Los huéspedes se conectan mediante código QR en su habitación. Sin descarga, sin cuenta, sin fricción. Escanea una vez y todos los servicios están disponibles.",
    feat2Title: "Seguimiento en tiempo real", feat2Body: "Los huéspedes siguen su solicitud en directo desde el envío hasta la entrega, como Uber pero para servicios de hotel.",
    feat3Title: "Multilingüe por defecto", feat3Body: "Detecta automáticamente el idioma del huésped. Soporte completo para portugués, inglés y español, sin ninguna configuración necesaria.",
    feat4Title: "Dashboard operativo en vivo", feat4Body: "Cada solicitud visible en tiempo real, codificada por color según el estado SLA, dirigida automáticamente al departamento correcto.",
    feat5Title: "Acceso basado en roles", feat5Body: "Desde el personal de cocina hasta el director general, los permisos granulares garantizan que cada persona ve exactamente lo que necesita.",
    feat6Title: "Modo TV para cocinas", feat6Body: "Una pantalla dedicada en modo completo para monitores de pared. Diseñado específicamente para la cocina, sin ratón necesario.",
    platLabel: "La Plataforma", platHead: "Dos interfaces.<br>Una experiencia fluida.",
    platSub: "Los huéspedes piden sin esfuerzo. El equipo ejecuta a la perfección. Todo sincronizado en tiempo real.",
    platGuestTitle: "Interfaz del Huésped", platStaffTitle: "Panel del Personal",
    gBc: "Habitación 204 · Carlos Silva · Idioma ES",
    gCatRS: "Room Service", gCatHK: "Limpieza", gCatMt: "Mantenimiento", gCatRc: "Recepción",
    otTitle: "Estado del pedido", step1: "Pedido recibido", step2: "En preparación", step3: "En camino", step4: "Entregado",
    badge1: "● 3 Nuevos", badge2: "● 2 En preparación", badge3: "● 1 En camino",
    tk1Item: "Desayuno completo", tk1Badge: "En camino", tk1Dept: "Cocina",
    tk2Item: "Toallas extra", tk2Badge: "Nuevo", tk2Dept: "Limpieza",
    tk3Item: "Plato del día", tk3Badge: "En preparación", tk3Dept: "Cocina",
    platFooter: "Tiempo real · actualizaciones cada 3s via WebSocket",
    howLabel: "Cómo Funciona", howHead: "Listo para funcionar<br>en una tarde.", howSub: "Sin equipo de IT. Sin integraciones complejas. Nosotros nos encargamos de todo.",
    how1Title: "Configuramos su hotel", how1Body: "Habitaciones, cuentas de personal, departamentos y servicios, todo configurado por nuestro equipo. Empieza a recibir pedidos el mismo día.",
    how2Title: "Los huéspedes se conectan via QR", how2Body: "Coloque códigos QR en cada habitación. Los huéspedes escanean y solicitan instantáneamente: sin descargar app, sin registro, nada que instalar.",
    how3Title: "Su equipo gestiona en directo", how3Body: "El personal recibe alertas instantáneas. Los gestores siguen SLAs, valoraciones y KPIs en tiempo real, con datos para mejorar continuamente.",
    priceLabel: "Precios", priceHead: "Simple y sin sorpresas.", priceSub: "Un plan, adaptado a su hotel. Sin tarifas ocultas.",
    priceFrom: "Desde", priceMo: "€199/mes",
    priceAdapted: "Adaptado al tamaño de su hotel · Precios enterprise disponibles",
    priceF1: "Configuración gratuita", priceF2: "Primer mes gratis", priceF3: "Sin contrato de permanencia", priceF4: "Soporte incluido",
    priceCtaQ: "¿Quiere saber el precio exacto para su hotel?",
    priceCtaDesc: "Reserve una demo de 30 minutos. Le mostramos Bellora en directo y le enviamos una propuesta personalizada el mismo día.",
    priceDemoBtn: "Reservar una demo",
    ctaH: "¿Listo para transformar la<br><span class=\"grad-text\">experiencia del huésped?</span>",
    ctaSub: "Reserve una demo de 30 minutos. Le mostramos Bellora en directo y lo configuramos para su hotel, el mismo día.",
    ctaBtn: "Reservar Su Demo →", ctaFn: "Sin compromiso · Configuración gratuita incluida",
    demoTitle: "Reservar una Demo", demoSub: "30 minutos. Demo en directo. Propuesta personalizada el mismo día.", demoName: "Su nombre", demoHotel: "Nombre del hotel", demoEmail: "Email", demoPhone: "Teléfono (opcional)", demoRooms: "Número de habitaciones", demoRoomsPlaceholder: "Seleccione un rango", demoSubmit: "Reservar mi demo →", demoSending: "Enviando...", demoSuccessTitle: "Nos pondremos en contacto!", demoSuccessSub: "Hemos recibido su solicitud y le contactaremos en un día hábil para confirmar la demo.", demoClose: "Cerrar", demoError: "Algo salió mal. Por favor, inténtelo de nuevo.",
    footDesc: "Plataforma de experiencia del huésped para hoteles modernos. Creada en Portugal.",
    footCopy: "© 2025 Bellora. Todos los derechos reservados.",
    footCol1: "Producto", footCol2: "Empresa", footCol3: "Empezar",
    kpiLabel: "Resp. media", kpiSub: "Cumplimiento SLA", kpiNote: "78% dentro del objetivo ↑12%",
  },
};
