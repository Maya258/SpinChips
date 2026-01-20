const phone = "27734248102";
const modal = document.getElementById("orderModal");
const modalDeal = document.getElementById("modalDeal");
const qtyInput = document.getElementById("quantityInput");
const totalEl = document.getElementById("totalPrice");

let deal = "";
let price = 0;

document.querySelectorAll(".price-strip").forEach(btn => {
    btn.onclick = () => {
        deal = btn.dataset.deal;
        price = Number(btn.dataset.price);
        qtyInput.value = 1;
        modalDeal.textContent = deal;
        update();
        modal.style.display = "flex";
    };
});

function update() {
    totalEl.textContent = "R" + qtyInput.value * price;
}

document.getElementById("increase").onclick = () => {
    qtyInput.value++;
    update();
};

document.getElementById("decrease").onclick = () => {
    if (qtyInput.value > 1) qtyInput.value--;
    update();
};

document.querySelector(".close").onclick = close;
modal.onclick = e => { if (e.target === modal) close(); };

function close() { modal.style.display = "none"; }

document.getElementById("sendOrder").onclick = () => {
    const msg = `Hello \nOrder: ${qtyInput.value} x ${deal}\nTotal: R${qtyInput.value * price}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
    close();
};
