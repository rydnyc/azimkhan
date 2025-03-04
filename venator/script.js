document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;
    tg.expand();
    document.getElementById("username").textContent = tg.initDataUnsafe.user?.first_name || "Гость";
});

document.getElementById("sendData").addEventListener("click", () => {
    const tg = window.Telegram.WebApp;
    fetch("/send_data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: tg.initDataUnsafe.user?.id,
            username: tg.initDataUnsafe.user?.first_name
        })
    }).then(response => response.json())
      .then(data => alert(data.status === "ok" ? "Данные отправлены!" : "Ошибка!"));
});

