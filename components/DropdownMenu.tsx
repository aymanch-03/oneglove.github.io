const DropdownMenu = () => {
  const data = [
    {
      question: "What is the purpose of this",
      answer: "the purpose is nothing",
    },
    {
      question: "What is the name of this",
      answer: "the purpose is nothing",
    },
    {
      question: "What is the fulltask of this",
      answer: "the purpose is nothing",
    },
    {
      question: "What is the purpose of this",
      answer: "the purpose is nothing",
    },
    {
      question: "What is the purpose of this",
      answer: "the purpose is nothing",
    },
  ];
  const list = [
    {
      question: "Hey HOW ARE YOU",
      answer: "I'm fine thank you",
    },
    {
      question: "WHAT IS THIS",
      answer: "a bfchjioWEFC",
    },
    {
      question: "What is the fulltask of this",
      answer: "the purpose is nothing",
    },
    {
      question: "What is the purpose of this",
      answer: "the purpose is nothing",
    },
    {
      question: "What is the purpose of this",
      answer: "the purpose is nothing",
    },
  ];
  const all = [...data, ...list];
  console.log(all);

  return (
    <div className="text-white">
      {data.map((item, index) => (
        <div key={index}>
          <div>{item.question}</div>
          <div>{item.answer}</div>
        </div>
      ))}
      {list.map((e, index) => {
        return (
          <div key={index}>
            {e.question}
            {e.answer}
          </div>
        );
      })}
    </div>
  );
};

export default DropdownMenu;
