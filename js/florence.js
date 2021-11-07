document.getElementById('botaoEsconder').onclick = function () {
  let colunaPrincipal = document.getElementById('colunaPrincipal')
  let colunaEsconder = document.getElementById('colunaEsconder')
  let timelineCard = document.getElementById('timelineCard')

  if (colunaEsconder.classList.contains('d-md-block')) {
    colunaEsconder.classList.remove('d-md-block')

    colunaPrincipal.classList.remove('col-md-7')
    colunaPrincipal.classList.add('col-md-11')
  } else {
    colunaEsconder.classList.add('d-md-block')

    colunaPrincipal.classList.remove('col-md-11')
    colunaPrincipal.classList.add('col-md-7')
  }

  if (document.body.contains(timelineCard)) {
    if (timelineCard.classList.contains('d-md-block')) {
      timelineCard.classList.remove('d-md-block')
    } else {
      timelineCard.classList.add('d-md-block')
    }
  }
}