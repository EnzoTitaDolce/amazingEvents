function renderizador(){
    const consulta=window.location.search
    const parametros=new URLSearchParams(consulta)
    let name=parametros.get('id')
    let category=parametros.get('category')
    let details=parametros.get('description')
    let imgUrl=parametros.get('imgUrl')
    let price=parametros.get('price')
    

    let title=document.getElementById('title')
    title.innerHTML="<h3>"+name+"</h3>"
    let image=document.getElementById('image')
    image.setAttribute('src',imgUrl)
    let description=document.getElementById('description')
    description.innerHTML=details
    let subtitulo=document.getElementById('category')
    subtitulo.innerHTML=category
}