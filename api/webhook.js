// api/webhook.js
// Recibe notificaciones de Mercado Pago cuando un pago cambia de estado
// MP llama a este endpoint automáticamente (no el usuario)

import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { type, data } = req.body;

  // Solo nos importan notificaciones de pagos
  if (type === 'payment' && data?.id) {
    try {
      const payment = new Payment(client);
      const paymentInfo = await payment.get({ id: data.id });

      console.log('[webhook] Pago recibido:', {
        id: paymentInfo.id,
        status: paymentInfo.status,
        amount: paymentInfo.transaction_amount,
        email: paymentInfo.payer?.email,
        tier: paymentInfo.additional_info?.items?.[0]?.title,
      });

      // AQUÍ puedes agregar:
      // - Enviar email de confirmación al comprador
      // - Registrar el pedido en tu base de datos
      // - Notificarte por WhatsApp con Twilio o WA Business API
    } catch (error) {
      console.error('[webhook] Error al verificar pago:', error);
    }
  }

  // MP espera un 200 para saber que recibimos la notificación
  res.status(200).end();
}
