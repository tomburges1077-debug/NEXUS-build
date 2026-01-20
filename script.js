// — Dados mockados de peças (substitua por API real depois)
const PC_PARTS = {
  cpu: [
    { name: "Ryzen 5 5600X", price: 25000, img: "https://via.placeholder.com/150", amazon: "#" },
    { name: "Intel i7-12700K", price: 40000, img: "https://via.placeholder.com/150", amazon: "#" }
  ],
  gpu: [
    { name: "RTX 3070", price: 80000, img: "https://via.placeholder.com/150", amazon: "#" },
    { name: "RX 6800 XT", price: 90000, img: "https://via.placeholder.com/150", amazon: "#" }
  ],
  ram: [
    { name: "16GB DDR4", price: 12000, img: "https://via.placeholder.com/150", amazon: "#" },
    { name: "32GB DDR4", price: 20000, img: "https://via.placeholder.com/150", amazon: "#" }
  ],
  storage: [
    { name: "1TB SSD", price: 15000, img: "https://via.placeholder.com/150", amazon: "#" },
    { name: "2TB SSD", price: 25000, img: "https://via.placeholder.com/150", amazon: "#" }
  ]
};

// — Popula selects
function populateSelect(id, list) {
  const sel = document.getElementById(id);
  list.forEach((item, i) => {
    sel.innerHTML += `<option value="${i}">${item.name} — ¥${item.price}</option>`;
  });
}
populateSelect("select-cpu", PC_PARTS.cpu);
populateSelect("select-gpu", PC_PARTS.gpu);
populateSelect("select-ram", PC_PARTS.ram);
populateSelect("select-storage", PC_PARTS.storage);

// — Calcula preço total
function calcTotal() {
  const cpu = PC_PARTS.cpu[+select-cpu.value];
  const gpu = PC_PARTS.gpu[+select-gpu.value];
  const ram = PC_PARTS.ram[+select-ram.value];
  const storage = PC_PARTS.storage[+select-storage.value];
  const total = cpu.price + gpu.price + ram.price + storage.price;
  return total;
}
document.getElementById("select-cpu").addEventListener("change", updateUI);
document.getElementById("select-gpu").addEventListener("change", updateUI);
document.getElementById("select-ram").addEventListener("change", updateUI);
document.getElementById("select-storage").addEventListener("change", updateUI);

function updateUI() {
  document.getElementById("total-price").innerText = "¥" + calcTotal();
  updateBuyLinks();
  update3DModel();
}

function updateBuyLinks() {
  const list = document.getElementById("links-list");
  list.innerHTML = "";
  ["cpu","gpu","ram","storage"].forEach(type => {
    const part = PC_PARTS[type][+document.getElementById("select-"+type).value];
    list.innerHTML += `<li><a href="${part.amazon}" target="_blank">${part.name} — Comprar</a></li>`;
  });
}

// — FPS cálculo (mock)
document.getElementById("btn-calc-fps").addEventListener("click", ()=> {
  const fpsData = [90, 120, 150]; // mock low/med/high
  new Chart(document.getElementById("fps-chart"), {
    type: "bar",
    data: {
      labels: ["Baixo", "Médio", "Alto"],
      datasets: [{ label: "FPS", data: fpsData, backgroundColor: ["#ff4d4d","#4d94ff","#7fff7f"] }]
    }
  });
});

// — Three.js simples placeholder (sem modelos reais)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth/400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias:true });
renderer.setSize(window.innerWidth, 400);
document.getElementById("three-canvas").appendChild(renderer.domElement);
const cube = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color:0x00ffcc}));
scene.add(cube);
camera.position.z = 3;
function animate() {
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
