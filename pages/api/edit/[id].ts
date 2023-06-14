import prisma from '../../../lib/prisma';

// PUT /api/edit/:id
export default async function handle(req, res) {
  const { title, content } = req.body;
  const postId = req.query.id;
  const post = await prisma.post.update({
    where: { id: postId },
    data: { title: title, content: content },
  });
  res.json(post);
}