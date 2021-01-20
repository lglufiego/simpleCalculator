function calcular(tipo,valor){
    if (tipo === 'acao'){
      if (valor === 'c'){
        document.getElementById('resultado').value = ''
      }
      if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
        document.getElementById('resultado').value += valor        
      }
      if (valor === '=' || valor === 'Enter') {
        try {
            valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        } catch (err){
          document.getElementById('resultado').value = 'ERROR'
          }
      }
    }
    else if (tipo === 'valor'){
      document.getElementById('resultado').value += valor
    }
  }

  document.addEventListener('keydown', (event) => {
    if (document.getElementById('resultado').value == 'ERROR'){
      document.getElementById('resultado').value = ''
    }
  }, false)

  document.addEventListener('keydown', (event) => {
    const keyName = event.key
    if (!isNaN(keyName)){
      tipo = 'valor'
      console.log(keyName)
      calcular(tipo,keyName)
    } else {
      calcular('acao',keyName)
      console.log(keyName)
    }
  }, false)