function menuNav() {
    if (itens.style.display == 'flex'){
        itens.style.display = 'none';
        imenu.style.display = 'flex';
        iclose.style.display = 'none';
        
    }   else{
            itens.style.display = 'flex';
            iclose.style.display = 'flex';
            imenu.style.display = 'none';
        }

   
}

function menuPesquisar(){
    if (pesquisar.style.display == 'flex'){
        pesquisar.style.display = 'none';
        ilupa.style.display = 'flex';
        icloselupa.style.display = 'none';
        
    }   else{
            pesquisar.style.display = 'flex';
            icloselupa.style.display = 'flex';
            ilupa.style.display = 'none';
        }
}

