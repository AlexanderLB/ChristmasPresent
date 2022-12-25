function ocultar(){
    vista=document.getElementById('hide_text').style.display;
    if (vista='none')
    vista='block';
    else
    vista='none';
    document.getElementById('hide_text').style.display = vista;
}