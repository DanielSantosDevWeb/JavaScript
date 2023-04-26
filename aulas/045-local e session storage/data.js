const data = {
  projetos: [
    {
      nome: "daniel",
    },
    {
      nome: "projetos02",
    },
  ],
  categorias: {
    categorias: "infaestrutura",
  },
};

const projeto03 = {
  nome: "projeto03",
};

const addData = () => {
  localStorage.setItem("projetos", JSON.stringify(data.projetos));

  const obj = JSON.parse(localStorage.getItem("projetos"));

  const objAt = obj.push(projeto03);

  console.log(obj);

  localStorage.setItem("projetos", JSON.stringify(obj));
};

addData();
