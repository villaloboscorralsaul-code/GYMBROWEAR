// api/process-payment.js
// Vercel Serverless Function — procesa el pago desde el Brick de MP
// El Brick tokeniza la tarjeta del usuario y manda el token a ESTE endpoint
// NUNCA llegan datos de tarjeta en crudo — MP los tokeniza primero

import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { buyer, tier, ...paymentData } = req.body;

  try {
    const payment = new Payment(client);

    const response = await payment.create({
      body: {
        ...paymentData,
        // Metadata adicional para identificar el pedido
        additional_info: {
          items: [
            {
              id: tier?.id || 'unknown',
              title: `GYMBROWEAR — ${tier?.label || 'Lote'}`,
              quantity: 1,
              unit_price: tier?.price || 0,
            },
          ],
          payer: {
            first_name: buyer?.name?.split(' ')[0] || '',
            last_name: buyer?.name?.split(' ').slice(1).join(' ') || '',
            phone: { number: buyer?.phone || '' },
          },
        },
      },
    });

    // Respondemos con el estado del pago
    // status: 'approved' | 'pending' | 'rejected'
    res.status(200).json({
      status: response.status,
      status_detail: response.status_detail,
      id: response.id,
    });
  } catch (error) {
    console.error('[process-payment] Error:', error);
    res.status(500).json({ error: 'No se pudo procesar el pago.' });
  }
}
