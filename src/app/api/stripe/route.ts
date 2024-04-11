import prisma from "@/lib/db";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const signature = request.headers.get("strip-signature");

  //verify webhook come from stripe
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return Response.json(null, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      await prisma.user.update({
        where: {
          email: body.data.object.customer_email,
        },
        data: {
          hasAccess: true,
        },
      });
      break;
    default:
      console.log("event type not handled %{event.type");
  }

  //fulfill order
  await prisma.user.update({
    where: {
      email: body.data.object.customer_email,
    },
    data: {
      hasAccess: true,
    },
  });

  return Response.json(null, { status: 200 });
}
