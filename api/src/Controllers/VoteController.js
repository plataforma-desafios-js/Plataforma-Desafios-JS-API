import Submissao from '../Models/Submissao';

export async function create(req, res) {
  const submissao = await Submissao.findById(req.params.idSubmissao);
  submissao.set({ votes_count: submissao.votes + 1, votes: [submissao.votes, ...req.body._id] });
  req.io.emit('submissao', submissao);
  return res.json(submissao);
}
