export const randomizeAnswers = (answers: string[]) => {
  const identifiedArray = Object.entries(answers);
  for (let i = identifiedArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [identifiedArray[i], identifiedArray[j]] = [
      identifiedArray[j],
      identifiedArray[i],
    ];
  }
  return identifiedArray;
};
