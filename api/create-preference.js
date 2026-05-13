// api/create-preference.js
// Vercel Serverless Function — crea una preferencia de pago en Mercado Pago
// La preferenceId se devuelve al frontend para inicializar el Brick

import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  // Solo aceptamos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { tier, buyer } = req.body;

  // Validación básica
  if (!tier?.price || !buyer?.email || !buyer?.name) {
    return res.status(400).json({ error: 'Faltan datos obligatorios.' });
  }

  try {
    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: [
          {
            id: tier.id,
            title: `GYMBROWEAR — ${tier.label}`,
            description: `Lote mayorista de ${tier.units} de ropa fitness premium`,
            quantity: 1,
            unit_price: tier.price,
            currency_id: 'MXN',
          },
        ],
        payer: {
          name: buyer.name,
          email: buyer.email,
          phone: {
            area_code: '52',
            number: buyer.phone || '',
          },
        },
        // URLs a las que MP redirige si el usuario sale del Brick
        back_urls: {
          success: `${process.env.SITE_URL || 'http://localhost:5173'}?pago=exitoso`,
          failure: `${process.env.SITE_URL || 'http://localhost:5173'}?pago=error`,
          pending: `${process.env.SITE_URL || 'http://localhost:5173'}?pago=pendiente`,
        },
        // Notificación webhook cuando MP confirme el pago
        notification_url: process.env.SITE_URL
          ? `${process.env.SITE_URL}/api/webhook`
          : undefined,
        statement_descriptor: 'GYMBROWEAR',
        // La preferencia expira en 24 horas
        expires: true,
        expiration_date_to: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        metadata: {
          tier_id: tier.id,
          buyer_rfc: buyer.rfc || '',
          buyer_business: buyer.business || '',
        },
      },
    });

    // Devolvemos solo el ID (el frontend lo usa para inicializar el Brick)
    res.status(200).json({ id: response.id });
  } catch (error) {
    console.error('[create-preference] Error:', error);
    res.status(500).json({ error: 'No se pudo crear la preferencia de pago.' });
  }
}
