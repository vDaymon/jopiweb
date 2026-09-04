/**
 * Contenido de la política de privacidad pública.
 *
 * Existe por dos motivos concretos: Google Play exige una URL pública de
 * política de privacidad para publicar, y la Ley 1581 de 2012 obliga a tener
 * una política de tratamiento de datos disponible para el titular.
 *
 * Está construida sobre lo que la aplicación hace de verdad, no sobre una
 * plantilla. Cada afirmación sale de un sitio concreto del código:
 *
 * - Ubicación: `location_service.dart` y `active_job_provider.dart`.
 * - Fotos: `photos.service.ts` (caducan a los 15 días, enlaces a 15 minutos).
 * - SMS: `phone-verification.service.ts` — el detalle vive en /verificacion-sms.
 * - Documentos del aliado: `data_policy_sheet.dart`, versión 1.2.
 * - Borrado y exportación: `privacy_screen.dart`, hoy por soporte.
 *
 * Si alguno de esos comportamientos cambia, hay que actualizar este archivo:
 * es una declaración pública que Google puede contrastar con la app.
 */

export const SUPPORT_EMAIL = "soporte@jopiapp.com";

/** Fecha de la última revisión. Se actualiza a mano. */
export const LAST_UPDATED = "4 de septiembre de 2026";

export type Section = {
  id: string;
  title: string;
  body?: string;
  items?: { title: string; body: string }[];
  bullets?: string[];
  rows?: [string, string][];
  /** Recuadro destacado al final de la sección. */
  callout?: string;
};

export const META_TITLE = "Política de privacidad — Jopi";

export const META_DESCRIPTION =
  "Qué datos recoge Jopi, para qué los usa, cuándo comparte tu ubicación, cuánto tiempo conserva la información y cómo ejercer tus derechos. Ley 1581 de 2012.";

export const TITLE = "Política de privacidad";

export const LEDE =
  "Jopi conecta a personas que necesitan un servicio en casa con quienes viven de ese oficio. Para que eso funcione hace falta tratar algunos datos personales. Aquí está, sin rodeos, cuáles son, para qué se usan y qué puedes exigirnos.";

export const SUMMARY_LABEL = "En una línea";

export const SUMMARY =
  "Recogemos lo mínimo para que un servicio ocurra: quién eres, dónde estás mientras el servicio está en curso y qué necesitas arreglar. No vendemos datos, no hacemos publicidad con ellos y no guardamos tu tarjeta.";

export const SECTIONS: Section[] = [
  {
    id: "responsable",
    title: "Quién trata tus datos",
    body: "Jopi App es la responsable del tratamiento de la información personal que recogemos a través de la aplicación y de este sitio. Operamos en Colombia y esta política se rige por la Ley 1581 de 2012 y el Decreto 1377 de 2013.",
    rows: [
      ["Responsable", "Jopi App"],
      ["Contacto", SUPPORT_EMAIL],
      ["País de operación", "Colombia"],
    ],
  },
  {
    id: "datos",
    title: "Qué datos recogemos",
    body: "Depende de si usas Jopi para pedir un servicio o para prestarlo. Nadie entrega más de lo que su papel necesita.",
    items: [
      {
        title: "Si pides servicios",
        body: "Nombre, correo, número de celular y contraseña. La dirección donde necesitas el servicio y su ubicación en el mapa. Las fotos que adjuntes para explicar el trabajo. Si entras con Google, recibimos de Google tu nombre, tu correo y tu foto de perfil, nada más.",
      },
      {
        title: "Si prestas servicios",
        body: "Todo lo anterior, y además: imágenes de tu documento de identidad por ambas caras, una fotografía tuya sosteniendo el documento, tu certificado de antecedentes y los certificados de los oficios que ofreces. Para pagarte, los datos de tu cuenta bancaria.",
      },
      {
        title: "Datos del teléfono",
        body: "Tu ubicación en las condiciones que se explican abajo, y un identificador que Firebase asigna a tu dispositivo para poder enviarte avisos. No leemos tus contactos, tu galería ni tus mensajes.",
      },
    ],
    callout:
      "La imagen de tu rostro y de tu documento son datos sensibles según la ley colombiana. Entregarlos es voluntario y no estás obligado a autorizarlo, pero sin ellos no podemos verificar tu identidad ni activarte como aliado: es lo que protege a quien te abre la puerta de su casa.",
  },
  {
    id: "ubicacion",
    title: "Tu ubicación: cuándo y por qué",
    body: "Es el dato más delicado que tratamos, así que va explicado en detalle. Jopi usa la ubicación de tres formas distintas, y ninguna es permanente.",
    items: [
      {
        title: "Del cliente, al publicar una solicitud",
        body: "Para saber dónde hay que ir y para buscar aliados cerca. Mientras decides a quién contratar, los aliados solo ven tu zona aproximada. Tu dirección exacta se comparte únicamente con el aliado que elijas.",
      },
      {
        title: "Del aliado, mientras busca trabajo",
        body: "Si tiene activado el interruptor de disponibilidad, la app consulta su posición cada pocos segundos para mostrarle las solicitudes cercanas. Esto ocurre solo con la aplicación abierta. Al desactivar el interruptor, deja de consultarse.",
      },
      {
        title: "Del aliado, durante un servicio en curso",
        body: "Desde que acepta el trabajo hasta que lo termina, su posición se envía al cliente para que lo vea acercarse en el mapa. Esto sí continúa con la aplicación en segundo plano y con la pantalla apagada, porque el aliado va conduciendo. Mientras ocurre, Android muestra una notificación permanente —«Compartiendo tu ubicación»— que no se puede descartar, y en iPhone el indicador de ubicación permanece visible.",
      },
      {
        title: "Cuándo se apaga",
        body: "El envío se detiene al terminar o cancelar el servicio, y también en cuanto el aliado se pone como no disponible. No hay seguimiento fuera de esos momentos: Jopi no registra dónde estuviste ayer ni construye un historial de tus desplazamientos.",
      },
    ],
    callout:
      "La ubicación en segundo plano existe por una sola razón: que sepas si quien va a tu casa está a diez minutos o a una hora. No se usa para publicidad, no se comparte con terceros y no se conserva como historial.",
  },
  {
    id: "fotos",
    title: "Las fotos de tus solicitudes",
    body: "Las fotos que adjuntas a una solicitud —el tapete, la fuga, el mueble— sirven para que el aliado entienda el trabajo y pueda calcular su precio. Nada más. No se publican, no se usan en publicidad, no se venden.",
    bullets: [
      "Se guardan cifradas y los enlaces para verlas caducan a los 15 minutos.",
      "Se borran solas a los 15 días.",
      "Si cancelas la solicitud o expira sin aliado, se eliminan de inmediato: no tiene sentido conservar fotos de un servicio que no ocurrió.",
    ],
  },
  {
    id: "sms",
    title: "Mensajes de texto",
    body: "Solo enviamos un tipo de mensaje: un código de verificación de seis cifras que tú mismo pides desde la aplicación al escribir tu número. Nunca publicidad, promociones ni boletines. El detalle completo —cuándo se envía, el texto exacto, los límites por número y por día— está publicado aparte en la página de verificación por SMS.",
  },
  {
    id: "avisos",
    title: "Notificaciones",
    body: "Usamos las notificaciones para avisarte de lo que pasa con tus servicios: ofertas recibidas, un aliado en camino, un pago confirmado. Para eso, Firebase Cloud Messaging asigna un identificador a tu dispositivo que guardamos asociado a tu cuenta. Al cerrar sesión, ese identificador se elimina. Las notificaciones promocionales son un ajuste aparte que puedes desactivar en la app.",
  },
  {
    id: "pagos",
    title: "Pagos",
    body: "Los cobros los procesa Wompi, una pasarela de pagos colombiana vigilada. El número de tu tarjeta viaja a Wompi y nunca pasa por nuestros servidores: Jopi guarda únicamente una referencia con la que puede volver a cobrar, los últimos cuatro dígitos y la franquicia, que es lo que ves al elegir tarjeta.",
    callout:
      "Si eres aliado, los datos de tu cuenta bancaria se guardan cifrados y se usan solo para transferirte tu saldo. Eres responsable de que sean correctos: si registras una cuenta equivocada, el dinero se envía a esa cuenta.",
  },
  {
    id: "terceros",
    title: "Con quién se comparte",
    body: "Con nadie que no sea necesario para que el servicio funcione. No vendemos datos ni los cedemos con fines comerciales. Estos son todos los terceros que intervienen y para qué:",
    rows: [
      ["Amazon Web Services", "Servidores, base de datos y envío de SMS"],
      ["Google Maps", "Mapas, direcciones y rutas"],
      ["Firebase (Google)", "Envío de notificaciones"],
      ["Wompi", "Procesamiento de pagos y transferencias"],
    ],
    callout:
      "Entre usuarios se comparte lo justo: el cliente ve el nombre, la ciudad y la calificación del aliado; el aliado ve el nombre del cliente, la dirección del servicio y —solo si el cliente lo autoriza en sus ajustes— su teléfono para coordinar.",
  },
  {
    id: "conservacion",
    title: "Cuánto tiempo conservamos la información",
    rows: [
      ["Fotos de solicitudes", "15 días"],
      ["Códigos de verificación", "24 horas"],
      ["Posición durante un servicio", "Mientras el servicio está en curso"],
      ["Documentos de verificación", "Mientras la cuenta esté activa"],
      ["Historial de servicios y pagos", "Lo que exija la ley contable y tributaria"],
    ],
    body: "Cuando pides la eliminación de tu cuenta, suprimimos tus datos salvo aquellos que estemos obligados a conservar, como los registros de facturación.",
  },
  {
    id: "derechos",
    title: "Tus derechos",
    body: "Como titular de tus datos, la Ley 1581 de 2012 te reconoce estos derechos, y puedes ejercerlos sin dar explicaciones:",
    bullets: [
      "Conocer, actualizar y rectificar tus datos personales.",
      "Solicitar prueba de la autorización que diste.",
      "Ser informado del uso que hemos dado a tus datos.",
      "Revocar la autorización y pedir que se supriman.",
      "Presentar quejas ante la Superintendencia de Industria y Comercio.",
    ],
    callout: `Para ejercer cualquiera de ellos —incluidos eliminar tu cuenta o pedir una copia de tu información— escríbenos a ${SUPPORT_EMAIL}. Respondemos en un máximo de 15 días hábiles. En la aplicación encuentras los mismos accesos dentro de Cuenta → Privacidad.`,
  },
  {
    id: "seguridad",
    title: "Cómo protegemos la información",
    bullets: [
      "Todo el tráfico entre la aplicación y nuestros servidores viaja cifrado.",
      "Las contraseñas se guardan con bcrypt: ni nosotros podemos leerlas.",
      "Los datos bancarios y las fotos se almacenan cifrados.",
      "Los números de teléfono se enmascaran en los registros del servidor.",
      "El acceso a los documentos de verificación está limitado al personal autorizado, sujeto a deberes de confidencialidad.",
    ],
  },
  {
    id: "menores",
    title: "Menores de edad",
    body: "Jopi no está dirigida a menores de 18 años y no recogemos datos de menores a sabiendas. Si detectamos una cuenta de un menor, la eliminamos. Si crees que un menor a tu cargo nos entregó información, escríbenos y la suprimimos.",
  },
  {
    id: "cambios",
    title: "Cambios en esta política",
    body: "Si cambiamos algo relevante, actualizamos la fecha del encabezado y, cuando el cambio afecte a cómo tratamos tus datos, te lo avisamos dentro de la aplicación. La versión vigente es siempre la publicada en esta página.",
  },
];

export const CONTACT_TITLE = "Preguntas sobre tus datos";

export const CONTACT_BODY =
  "Cualquier duda sobre esta política, o cualquier solicitud sobre tu información —acceso, corrección, exportación o eliminación— la atendemos por correo.";
