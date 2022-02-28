const desafio1asRosasNaoFalamThen = () => {
  const geraIntervaloAleatorio = (): number => Math.floor(Math.random() * 3 * 1000);
  
  const timeout = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const queixoMeAsRosas = ()=> {
    return new Promise(resolve=>{
        resolve(timeout(geraIntervaloAleatorio())
          .then(() => {
          console.log('Queixo-me as rosas')
          }))
      })
  }

  const masQueBobagem = ()=> {
    return new Promise(resolve=>{
        resolve(timeout(geraIntervaloAleatorio())
          .then(() => {
          console.log('Mas que bobagem')
          }))
      })
  }

  const asRosasNaoFalam = ()=> {
    return new Promise (resolve=>{
        resolve(timeout(geraIntervaloAleatorio())
          .then(() => {
          console.log('As rosas não falam')
          }))
      })
  }

  const simplesmenteAsRosasExalam = ()=> {
    return new Promise(resolve=>{
        resolve(timeout(geraIntervaloAleatorio())
          .then(() => {
          console.log('Simplesmente as rosas exalam')
          }))
      })
  }

  const oPerfumeQueRoubamDeTi = ()=> {
    return new Promise(resolve=>{
        resolve(timeout(geraIntervaloAleatorio())
          .then(() => {
          console.log('O perfume que roubam de ti, ai')
          }))
      })
  }

  queixoMeAsRosas()
  .then(()=> masQueBobagem())
  .then(()=>asRosasNaoFalam())
  .then(()=>simplesmenteAsRosasExalam())
  .then(()=>oPerfumeQueRoubamDeTi())
}

desafio1asRosasNaoFalamThen();

const desafio1asRosasNaoFalamAsync = async() => {
  const geraIntervaloAleatorio = (): number => Math.floor(Math.random() * 3 * 1000);
  
  const timeout = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const queixoMeAsRosas = async ()=> {
    await timeout(geraIntervaloAleatorio())
    console.log('Queixo-me as rosas')
  }

  const masQueBobagem = async ()=> {
    await timeout(geraIntervaloAleatorio())
    console.log('Mas que bobagem')
  }

  const asRosasNaoFalam = async ()=> {
    await timeout(geraIntervaloAleatorio())
    console.log('As rosas não falam')
  }

  const simplesmenteAsRosasExalam = async ()=> {
    await timeout(geraIntervaloAleatorio())
    console.log('Simplesmente as rosas exalam')
  }

  const oPerfumeQueRoubamDeTi = async ()=> {
    await timeout(geraIntervaloAleatorio())
    console.log('O perfume que roubam de ti, ai')
  }

  await queixoMeAsRosas()
  await masQueBobagem()
  await asRosasNaoFalam()
  await simplesmenteAsRosasExalam()
  await oPerfumeQueRoubamDeTi()
}

desafio1asRosasNaoFalamAsync()
