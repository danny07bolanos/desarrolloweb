corpo.document.designMode = "on";
document.querySelector('#bold').addEventListener('click', bold)
document.querySelector('#italic').addEventListener('click', italic)
document.querySelector('#underline').addEventListener('click', underline)
document.querySelector('#print').addEventListener('click', imprimir)



document.querySelector('#linea').addEventListener('click', linea)
document.querySelector('#nolinea').addEventListener('click', nolinea)

document.querySelector('#guardar').addEventListener('click', guardar)




function changeFont(param){
    corpo.document.execCommand('fontName', 'false', param)
}

function changeSize(tam){
    corpo.document.execCommand('fontSize', 'false', tam)
}

function changeColor(cor){
    corpo.document.execCommand('foreColor', 'false', cor)
}

function bold(cor){
    corpo.document.execCommand('bold', 'false', cor)
}
function italic(cor){
    corpo.document.execCommand('italic', 'false', cor)
}
function underline(cor){
    corpo.document.execCommand('underline', 'false', cor)
}
function imprimir(){
    document.querySelector('#menu').style.display="none"
    document.querySelector('iframe').style="width: 90%; height: 95vh; border: none;"
    window.print()
    return continuar()
}
function continuar(){
    document.querySelector('div#menu').style.display="flex"
    document.querySelector('iframe').style.border="1px solid black"
}

function guardar(){
    document.querySelector('#menu').style.display="none"
    document.querySelector('iframe').style="width: 90%; height: 95vh; border: none;"
    window.open()
    return continuar()

}





function linea(){
    esquerda = document.querySelector('#nolinea').style
    obj = document.querySelector('#linea').style
    if(obj.color === 'yellow'){
        obj.color = 'black'
        corpo.document.execCommand('indent', false)
    } else {
        obj.color = 'white'
        esquerda.color = 'black'
        direita.color = 'white'
        corpo.document.execCommand('indent')
    }
}

function nolinea(){
    direita = document.querySelector('#linea').style
    obj = document.querySelector('#nolinea').style
    if(obj.color === 'white'){
        obj.color = 'black'
        corpo.document.execCommand('outdent', false)
    } else {
        obj.color = 'yellow'
        esquerda.color = 'white'
        direita.color = 'black'
        corpo.document.execCommand('outdent')
    }
}