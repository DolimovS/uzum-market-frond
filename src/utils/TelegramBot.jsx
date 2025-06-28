const  token=import.meta.env.VITE_BOT_TOKEN
export const sendToTelegram = () => {
  const botToken = token;
  const chatId = "6379829918";
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cart.length) {
    alert("Savat bo'sh!");
    return;
  }

  const text = cart.map((item, index) =>
    `${index + 1}. 📦 ${item.nomi}\n💰 Narxi: ${item.narxi} so'm\n📦 Soni: ${item.count || 1}`
  ).join("\n\n");

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: `🛒 Yangi buyurtma:\n\n${text}`
    })
  })
    .then(res => res.json())
    .then(data => {
      alert("Buyurtma telegramga yuborildi ✅");
    })
    .catch(err => {
      alert("Xatolik yuz berdi ❌");
      console.error(err);
    });
};

