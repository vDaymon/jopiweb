/**
 * Contenido de la página pública de verificación por SMS.
 *
 * Existe para el trámite de salida del sandbox de AWS End User Messaging: el
 * revisor necesita ver, en un sitio público de la marca, quién recibe los
 * mensajes, cómo los pide el usuario y el texto exacto que se envía.
 *
 * Todo lo que se afirma aquí sale de `phone-verification.service.ts` y
 * `sms.service.ts` en el backend. Si cambian los topes, la vigencia o el
 * texto del mensaje, hay que actualizar este archivo: es una declaración
 * pública que AWS contrasta con el comportamiento real.
 */

export type Lang = "es" | "en";

/** Texto literal que sale por SNS, con el código de ejemplo. */
export const SMS_SAMPLE = "123456 es tu codigo de Jopi. Vence en 4 minutos. No lo compartas.";

export const SUPPORT_EMAIL = "soporte@jopiapp.com";

/** Fecha de la última revisión de este contenido. Se actualiza a mano. */
export const LAST_UPDATED = { es: "4 de septiembre de 2026", en: "September 4, 2026" };

export const ALT = {
  es: { href: "/sms-verification", label: "English" },
  en: { href: "/verificacion-sms", label: "Español" },
} as const;

type Copy = {
  metaTitle: string;
  metaDescription: string;
  back: string;
  updated: string;
  title: string;
  lede: string;
  summaryLabel: string;
  summary: string;
  sections: {
    id: string;
    title: string;
    body?: string;
    items?: { title: string; body: string }[];
    steps?: string[];
    rows?: [string, string][];
  }[];
  sampleLabel: string;
  sampleNote: string;
  contactTitle: string;
  contactBody: string;
};

export const COPY: Record<Lang, Copy> = {
  es: {
    metaTitle: "Verificación por SMS — Jopi",
    metaDescription:
      "Qué mensajes de texto envía Jopi, quién los recibe, cómo los solicita el usuario y con qué frecuencia. Jopi solo envía códigos de verificación de un solo uso; nunca publicidad.",
    back: "Volver a jopiapp.com",
    updated: "Última actualización",
    title: "Verificación por SMS",
    lede:
      "Esta página explica exactamente qué mensajes de texto envía Jopi, quién los recibe y cómo los pide el usuario. La publicamos para que cualquiera —usuarios, operadores móviles o nuestro proveedor de mensajería— pueda comprobar cómo usamos el SMS.",
    summaryLabel: "En una línea",
    summary:
      "Jopi envía un único tipo de mensaje: un código de verificación de 6 dígitos, de un solo uso, que el usuario pide desde la app tocando un botón. No enviamos publicidad, promociones ni boletines por SMS.",
    sections: [
      {
        id: "quien",
        title: "Quién recibe los mensajes",
        body:
          "Solo la persona que escribe su propio número de celular colombiano dentro de la app de Jopi y pulsa el botón para pedir el código. Nada más envía un mensaje.",
        items: [
          {
            title: "Nunca compramos ni importamos listas",
            body:
              "No adquirimos bases de datos de números, no importamos agendas de contactos y no recibimos números de terceros. Un número solo entra al sistema cuando su propio dueño lo escribe en la app.",
          },
          {
            title: "Solo celulares de Colombia",
            body:
              "El servidor rechaza cualquier número que no sea un celular colombiano de 10 dígitos que empiece por 3. Se normaliza a +57 y todo lo demás devuelve error antes de intentar el envío. Jopi opera únicamente en Colombia.",
          },
          {
            title: "Un mensaje por solicitud",
            body:
              "No hay mensajes recurrentes, programados ni automáticos. Cada SMS corresponde a una acción que el usuario acaba de hacer con el dedo en la pantalla.",
          },
        ],
      },
      {
        id: "cuando",
        title: "Cuándo se envía",
        body: "Hay exactamente tres momentos en los que un usuario puede recibir un SMS de Jopi:",
        items: [
          {
            title: "Al crear una cuenta de cliente",
            body:
              "Quien se registra para pedir servicios verifica su celular antes de que la cuenta exista. Sirve para que el aliado pueda llamarlo y para que cada persona tenga una sola cuenta.",
          },
          {
            title: "Al registrarse como aliado",
            body:
              "Los profesionales que ofrecen servicios verifican su celular durante el registro, por las mismas razones y porque su número es el canal de contacto con el cliente.",
          },
          {
            title: "Al añadir el celular a una cuenta de Google",
            body:
              "Quien entró con Google no tiene celular asociado. Cuando completa su perfil y añade el número, lo verifica una vez con el mismo código.",
          },
        ],
      },
      {
        id: "como",
        title: "Cómo lo pide el usuario",
        body:
          "El SMS nunca se envía solo. Estos son los pasos exactos dentro de la app, y el mensaje sale únicamente después del paso 4:",
        steps: [
          "El usuario abre la app de Jopi y elige crear una cuenta.",
          "Aparece una hoja titulada «Verifica tu celular» que explica para qué se necesita el número: «Lo necesitamos para que tu aliado pueda llamarte, y para que cada persona tenga una sola cuenta.»",
          "El usuario escribe su propio número de 10 dígitos en un campo con el prefijo +57 fijo.",
          "El usuario pulsa el botón «Enviarme el código». Esta es la acción explícita que autoriza y provoca el envío.",
          "Llega el SMS con el código de 6 dígitos, y el usuario lo escribe en la app para terminar de verificar.",
        ],
      },
      {
        id: "texto",
        title: "Texto exacto del mensaje",
        body:
          "Solo existe una plantilla. Lo único que cambia entre un mensaje y otro son los 6 dígitos del código:",
      },
      {
        id: "frecuencia",
        title: "Frecuencia y límites",
        body:
          "Los topes están en el servidor y se aplican a todos por igual. Existen para proteger al usuario de recibir mensajes que no pidió y para evitar el fraude de SMS:",
        rows: [
          ["Espera mínima entre solicitudes", "60 segundos"],
          ["Solicitudes seguidas antes de la espera larga", "2"],
          ["Espera tras esas dos solicitudes", "15 minutos"],
          ["Máximo por número cada 24 horas", "5 mensajes"],
          ["Solicitudes por IP", "5 por minuto"],
          ["Vigencia del código", "4 minutos"],
          ["Intentos permitidos por código", "3"],
          ["Países de destino", "Solo Colombia (+57)"],
        ],
      },
      {
        id: "nunca",
        title: "Lo que nunca enviamos",
        items: [
          {
            title: "Nada de marketing",
            body:
              "No enviamos publicidad, promociones, descuentos, encuestas, boletines ni recordatorios comerciales por SMS. Todos los mensajes son de tipo transaccional.",
          },
          {
            title: "Sin lista de suscripción",
            body:
              "No existe una lista de envíos a la que uno se suscriba, por lo que tampoco hay campañas de las que darse de baja. Si dejas de pedir códigos, dejas de recibir mensajes.",
          },
          {
            title: "Las notificaciones van por otro canal",
            body:
              "Los avisos de la app —ofertas de aliados, estado del servicio, mensajes del chat— se envían como notificaciones push dentro de la aplicación, nunca por SMS.",
          },
        ],
      },
      {
        id: "seguridad",
        title: "Cómo tratamos el código y el número",
        items: [
          {
            title: "El código se guarda cifrado",
            body:
              "Nunca se almacena en texto plano: se guarda su hash con bcrypt, igual que una contraseña. Ni siquiera nosotros podemos leer el código que se envió.",
          },
          {
            title: "Se genera con un generador criptográfico",
            body:
              "Los 6 dígitos salen del generador aleatorio criptográfico del sistema, no de una función predecible, para que ver varios códigos no permita adivinar el siguiente.",
          },
          {
            title: "Se borra a las 24 horas",
            body:
              "Los registros de códigos se eliminan automáticamente pasado un día. Un código usado o vencido no sirve para nada y no se conserva.",
          },
          {
            title: "El número nunca aparece entero en los registros",
            body:
              "En los logs del servidor el teléfono va enmascarado, mostrando solo los primeros y últimos dígitos.",
          },
        ],
      },
    ],
    sampleLabel: "Mensaje recibido",
    sampleNote:
      "El texto va sin tildes a propósito. Un SMS con acentos se codifica en UCS-2 y el límite baja de 160 a 70 caracteres, lo que partiría el mensaje en dos y duplicaría su coste.",
    contactTitle: "Preguntas o bajas",
    contactBody:
      "Si recibiste un código que no pediste, o quieres que bloqueemos tu número para que nunca reciba mensajes de Jopi, escríbenos y lo resolvemos:",
  },
  en: {
    metaTitle: "SMS verification — Jopi",
    metaDescription:
      "What text messages Jopi sends, who receives them, how users request them and how often. Jopi only sends one-time verification codes, never marketing.",
    back: "Back to jopiapp.com",
    updated: "Last updated",
    title: "SMS verification",
    lede:
      "This page explains exactly what text messages Jopi sends, who receives them and how users request them. We publish it so that anyone — users, mobile carriers or our messaging provider — can verify how we use SMS.",
    summaryLabel: "In one line",
    summary:
      "Jopi sends a single type of message: a 6-digit, one-time verification code that the user requests from the app by tapping a button. We send no advertising, promotions or newsletters by SMS.",
    sections: [
      {
        id: "who",
        title: "Who receives the messages",
        body:
          "Only the person who types their own Colombian mobile number into the Jopi app and taps the button to request the code. Nothing else sends a message.",
        items: [
          {
            title: "We never buy or import lists",
            body:
              "We do not purchase phone number databases, we do not import contact books and we do not receive numbers from third parties. A number enters the system only when its own owner types it into the app.",
          },
          {
            title: "Colombian mobile numbers only",
            body:
              "The server rejects any number that is not a 10-digit Colombian mobile starting with 3. It is normalised to +57 and everything else returns an error before any send is attempted. Jopi operates in Colombia only.",
          },
          {
            title: "One message per request",
            body:
              "There are no recurring, scheduled or automatic messages. Every SMS corresponds to an action the user has just taken with their finger on the screen.",
          },
        ],
      },
      {
        id: "when",
        title: "When it is sent",
        body: "There are exactly three moments when a user can receive an SMS from Jopi:",
        items: [
          {
            title: "Creating a customer account",
            body:
              "People signing up to request services verify their mobile number before the account exists. This lets the service provider call them, and keeps one account per person.",
          },
          {
            title: "Registering as a service provider",
            body:
              "Professionals offering services verify their mobile during registration, for the same reasons and because their number is the contact channel with the customer.",
          },
          {
            title: "Adding a phone to a Google account",
            body:
              "People who signed in with Google have no phone number attached. When they complete their profile and add the number, they verify it once with the same code.",
          },
        ],
      },
      {
        id: "how",
        title: "How the user requests it",
        body:
          "The SMS is never sent on its own. These are the exact steps inside the app, and the message goes out only after step 4:",
        steps: [
          "The user opens the Jopi app and chooses to create an account.",
          "A sheet titled “Verifica tu celular” (Verify your mobile) appears, explaining why the number is needed: “We need it so your service provider can call you, and so each person has a single account.”",
          "The user types their own 10-digit number into a field with a fixed +57 prefix.",
          "The user taps the button labelled “Enviarme el código” (Send me the code). This is the explicit action that authorises and triggers the send.",
          "The SMS arrives with the 6-digit code, and the user types it into the app to finish verifying.",
        ],
      },
      {
        id: "text",
        title: "Exact message text",
        body:
          "There is only one template. The only thing that changes between messages is the 6 digits of the code:",
      },
      {
        id: "frequency",
        title: "Frequency and limits",
        body:
          "These caps live on the server and apply to everyone equally. They exist to protect users from messages they did not ask for, and to prevent SMS pumping fraud:",
        rows: [
          ["Minimum wait between requests", "60 seconds"],
          ["Consecutive requests before the long wait", "2"],
          ["Wait after those two requests", "15 minutes"],
          ["Maximum per number every 24 hours", "5 messages"],
          ["Requests per IP address", "5 per minute"],
          ["Code validity", "4 minutes"],
          ["Attempts allowed per code", "3"],
          ["Destination countries", "Colombia only (+57)"],
        ],
      },
      {
        id: "never",
        title: "What we never send",
        items: [
          {
            title: "No marketing whatsoever",
            body:
              "We send no advertising, promotions, discounts, surveys, newsletters or commercial reminders by SMS. Every message is transactional.",
          },
          {
            title: "No subscription list",
            body:
              "There is no mailing list to subscribe to, so there are no campaigns to unsubscribe from. Stop requesting codes and you stop receiving messages.",
          },
          {
            title: "App alerts use a different channel",
            body:
              "App notifications — provider offers, job status, chat messages — are delivered as push notifications inside the application, never by SMS.",
          },
        ],
      },
      {
        id: "security",
        title: "How we handle the code and the number",
        items: [
          {
            title: "The code is stored hashed",
            body:
              "It is never stored in plain text: we keep a bcrypt hash of it, the same way a password is stored. Not even we can read the code that was sent.",
          },
          {
            title: "Generated with a cryptographic RNG",
            body:
              "The 6 digits come from the system's cryptographic random generator, not a predictable function, so seeing several codes does not help anyone guess the next one.",
          },
          {
            title: "Deleted after 24 hours",
            body:
              "Code records are removed automatically after one day. A used or expired code is worthless and is not retained.",
          },
          {
            title: "The number is never written in full to logs",
            body:
              "Server logs mask the phone number, showing only the first and last digits.",
          },
        ],
      },
    ],
    sampleLabel: "Message received",
    sampleNote:
      "The Spanish text carries no accents on purpose. An SMS with accented characters is encoded as UCS-2, which drops the limit from 160 to 70 characters — splitting the message in two and doubling its cost.",
    contactTitle: "Questions or opt-out",
    contactBody:
      "If you received a code you did not request, or you want us to block your number so it never receives messages from Jopi, write to us and we will take care of it:",
  },
};
