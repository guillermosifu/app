const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    Swal.fire({
        title: '💘​',
        text: 'Sabia que dirias que si!!',
        imageUrl: 'https://www.vanguardia.com/binrepository/716x477/0c0/0d0/none/12204/VTKN/los_gorditos_son_mejores_en_la_cama_VL317030_MG20444826.jpg',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})