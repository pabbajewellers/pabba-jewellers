let currentLang="en";

document.getElementById("langToggle").onclick=()=>{
  currentLang=currentLang==="en"?"te":"en";
  document.getElementById("langToggle").innerText=currentLang==="en"?"తెలుగు":"English";
  applyLanguage();
};

function applyLanguage(){
  document.querySelectorAll("[data-en]").forEach(el=>{
    el.innerText=el.dataset[currentLang];
  });
}

fetch("products.json")
.then(res=>res.json())
.then(products=>{
  const grid=document.getElementById("productGrid");
  products.forEach((p,i)=>{
    grid.innerHTML+=`
      <div class="card" onclick="openModal(${i})">
        <img src="images/${p.image}">
        <h3 class="gold">${p["title_"+currentLang]}</h3>
      </div>`;
  });

  window.products=products;
});

function openModal(i){
  const p=products[i];
  modal.style.display="flex";
  modalImg.src="images/"+p.image;
  modalTitle.innerText=p["title_"+currentLang];
  modalDesc.innerText=p["desc_"+currentLang];

  const msg=`Hi, I'm interested in the ${p.title_en}`;
  waBtn.onclick=()=>window.open(`https://wa.me/918978569063?text=${encodeURIComponent(msg)}`);
}

function closeModal(){modal.style.display="none";}
