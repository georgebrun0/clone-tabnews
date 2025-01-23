function status(request, response) {
  response
    .status(200)
    .json({ Chave: "Alunos do curso.dev são acima da média!" });
}

export default status;
