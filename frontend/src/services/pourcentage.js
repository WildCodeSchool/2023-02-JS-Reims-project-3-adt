export default function pourcentage(questionList) {
  const divisor =
    questionList.length -
    questionList.filter((question) => question.response === "Non Concerné")
      .length;

  if (divisor === 0) {
    return 0;
  }

  return (
    (100 *
      questionList.filter((question) => question.response === "Atteint")
        .length) /
    divisor
  ).toFixed();
}
