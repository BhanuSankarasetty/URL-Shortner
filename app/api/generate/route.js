import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.url || !body.shorturl) {
      return Response.json({ success: false, error: true, message: 'Missing url or shorturl' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Check if the short url exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return Response.json({ success: false, error: true, message: 'URL already exists!' });
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl
    });

    return Response.json({ success: true, error: false, message: 'URL Generated Successfully' });

  } catch (err) {
    console.error("POST /api/generate error:", err);
    return Response.json({ success: false, error: true, message: 'Internal Server Error' }, { status: 500 });
  }
}
