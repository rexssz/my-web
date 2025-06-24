
        // Jam
        function updateClock() {
            const now = new Date();
            let hour = now.getHours();
            let min = now.getMinutes();

            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;

            document.getElementById('hour').textContent = hour ;
            document.getElementById('minutes').textContent = min;
        }
        setInterval(updateClock, 1000);
        updateClock();

        // Tanggal
        function dateNow() {
            const now = new Date();
            const date = now.toLocaleDateString('id-ID');
            document.getElementById('date').textContent = date
        }
        setInterval(dateNow, 1000);
        dateNow()

        // Quote Random
        const quotes = [
            "Hidup itu bukan soal menunggu badai reda, tapi belajar menari di tengah hujan.",
            "Jangan takut gagal, karena gagal adalah bagian dari perjalanan menuju sukses.",
            "Lebih baik lelah karena belajar daripada menyesal karena tertinggal.",
            "Kesuksesan tidak datang kepada orang yang menunggu, tapi yang berusaha.",
            "Langit bukan batas, itu hanya awal.",
            "Kerja kerasmu hari ini adalah cerita suksesmu di masa depan.",
            "Mimpi besar butuh tekad besar—dan kamu punya itu di dalam dirimu.",
            "Setiap hari adalah kesempatan baru untuk jadi lebih hebat dari kemarin.",
            "Jangan takut gagal, karena dari kegagalan kita belajar cara meraih kemenangan.",
            "Kesuksesan bukan soal siapa yang paling cepat, tapi siapa yang paling konsisten melangkah meski pelan."
        ];
        function showRandomQuote() {
            const q = quotes[Math.floor(Math.random() * quotes.length)];
            document.getElementById('quote').textContent = `"${q}"`;
        }
        showRandomQuote();

        // add button shortcuts
        const btnAdd = document.getElementById("addShrct");
        const shortcuts = document.getElementById('shortcuts');
        const popUp = document.getElementById('popupInput');
        const btnClose = document.getElementById('closeBtn');
        let name = document.getElementById('Name');
        let link = document.getElementById("Link");
        const addBtn = document.getElementById('addBtn');
        
        btnAdd.addEventListener("click", () =>{
            popUp.style.display = "flex";
        });

        btnClose.addEventListener("click", () =>{
            popUp.style.display = "none";
        });
        
        window.addEventListener("click", (e) => {
            if(e.target === popUp) {
                popUp.style.display = "none";
            }
        });

        addBtn.addEventListener("click", () => {
            const webShort = document.createElement('a')
            webShort.href = `${link}`;
               
        })
