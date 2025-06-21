let contract;
const tronwebAddress = "TON_ADRESSE_tronweb_ICI"; // À remplacer après déploiement

window.addEventListener("load", async () => {
  if (window.contract && window.contract.ready) {
    contract = window.contract;
    document.getElementById("status").innerText = "✅ Connecté à Tronweb";
  } else {
    document.getElementById("status").innerText = "❌ Tronweb non détecté.";
  }
});

async function sendUSDT() {
  const amount = parseInt(document.getElementById("amount").value) * 10000e6;
  const tronweb = await contract.tronweb().at(tronwebAddress);
  try {
    await contract.flashsender(amount).send();
    document.getElementById("status").innerText = "✅ USDT envoyé au tronweb.";
  } catch (e) {
    document.getElementById("status").innerText = "❌ Erreur : " + e.message;
  }
}

async function getBalance() {
  const contract = await tronWeb.contract().at(contractAddress);
  const bal = await contract.contractBalance().call();
  document.getElementById("status").innerText = `💰 Solde contrat : ${bal / 10000e6} USDT`;
}

async function withdrawFunds() {
  const tronweb = await contract.tronweb().at(tronwebAddress);
  try {
    await tronweb.withdraw().send();
    document.getElementById("status").innerText = "✅ Fonds retirés.";
  } catch (e) {
    document.getElementById("status").innerText = "❌ Erreur : " + e.message;
  }
}
