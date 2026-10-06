/**
 * Contenido de la página pública para eliminar la cuenta.
 *
 * Google Play exige, a toda app que permite crear cuentas, una URL web donde
 * el usuario pueda pedir que se elimine su cuenta **sin tener la app
 * instalada**, y que diga qué datos se borran y cuáles se conservan. Esta URL
 * es la que se declara en Play Console → Seguridad de los datos.
 *
 * Lo que dice sale del backend (`account-deletion.service.ts`). Si el borrado
 * cambia, hay que actualizar esto y la sección "eliminar" de la política.
 */
import { SUPPORT_EMAIL } from "@/lib/privacy-policy";

export { SUPPORT_EMAIL };

export const LAST_UPDATED = "6 de octubre de 2026";

export const META_TITLE = "Eliminar tu cuenta de Jopi";

export const META_DESCRIPTION =
  "Cómo eliminar tu cuenta de Jopi desde la aplicación o por correo, qué datos se borran y cuáles se conservan por obligación legal.";

export const TITLE = "Eliminar tu cuenta de Jopi";

export const LEDE =
  "Puedes eliminar tu cuenta de Jopi cuando quieras. La forma más rápida es desde la aplicación; si ya no la tienes instalada, escríbenos y lo hacemos por ti.";

export const IN_APP_TITLE = "Desde la aplicación";

export const IN_APP_STEPS = [
  "Abre Jopi e inicia sesión.",
  "Entra a Cuenta y luego a Privacidad.",
  "Toca «Eliminar mi cuenta».",
  "Revisa el resumen: si hay algo pendiente, la app te dice qué hacer.",
  "Confirma dos veces: la segunda escribiendo la palabra ELIMINAR.",
];

export const BY_EMAIL_TITLE = "Sin la aplicación, por correo";

export const BY_EMAIL_BODY = `Escríbenos a ${SUPPORT_EMAIL} desde el correo con el que creaste la cuenta, con el asunto «Eliminar mi cuenta». Para proteger tu cuenta podemos pedirte que confirmes que eres el titular. La eliminamos en un máximo de 15 días hábiles y te avisamos al terminar.`;

export const EMAIL_SUBJECT = "Eliminar mi cuenta";

export const DELETED_TITLE = "Qué se borra";

export const DELETED = [
  "Tu nombre, correo, número de celular y foto de perfil.",
  "Las direcciones de tu cuenta y las fotos que adjuntaste a tus solicitudes.",
  "Las tarjetas guardadas y, si eres aliado, tus cuentas bancarias.",
  "Tus notificaciones y los dispositivos registrados para recibirlas.",
  "Tu sesión: no podrás volver a entrar ni recuperar la cuenta.",
];

export const KEPT_TITLE = "Qué se conserva, y por qué";

export const KEPT = [
  {
    title: "Registros de servicios y pagos",
    body: "La ley contable y tributaria colombiana nos obliga a conservarlos. Quedan sin tu nombre, correo ni celular, y se guardan solo el tiempo que la ley exige.",
  },
  {
    title: "Una huella cifrada de tu celular",
    body: "Es irreversible: no permite saber cuál era tu número. Solo sirve para que la promoción de bienvenida no se pueda repetir borrando la cuenta y creando otra con el mismo celular.",
  },
];

export const BEFORE_TITLE = "Antes de eliminarla";

export const BEFORE = [
  "El saldo a favor que tengas —Jopi Créditos o el saldo de tu cartera de aliado— se pierde. Si quieres conservarlo, úsalo o retíralo antes.",
  "Si eres aliado y tienes un saldo pendiente con Jopi por comisiones de servicios en efectivo, debes pagarlo primero. Puedes hacerlo con tarjeta desde la misma pantalla de la app.",
  "Si tienes servicios en curso, un cobro en efectivo sin confirmar o un retiro en camino, deben terminar antes.",
];
