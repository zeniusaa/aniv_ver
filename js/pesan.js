// ===== PESAN.JS — Messages page logic =====

const CODES = [
  '18062001', // Pesan 01 — Mama & Papa
  '16042025', // Pesan 02 — Kakak Reza
  '24042025', // Pesan 03 — Adik Nisa
  '18062025', // Pesan 04 — Sahabat Dian
  '22062025', // Pesan 05 — Sahabat Bagas
  '08072025', // Pesan 06 — Teman Kuliah Sari
  '12082025', // Pesan 07 — Teman Kuliah Aldi
  '22072025', // Pesan 08 — Rekan Kerja Mira
  '23082025', // Pesan 09 — Rekan Kerja Hendra
  '04092025', // Pesan 10 — Guru SMA Pak Budi
  '12092025', // Pesan 11 — Tante Rina
  '17092025', // Pesan 12 — Om Dodi
  '05102025', // Pesan 13 — Sepupu Fitri
  '18102025', // Pesan 14 — Sahabat Rizky
  '28102025', // Pesan 15 — Komunitas Kak Yuda
  '11112025', // Pesan 16 — Teman Masa Kecil Nia
  '09112025', // Pesan 17 — Sahabat Luna
  '14122025', // Pesan 18 — Kakak Kelas Mas Fajar
  '27122025', // Pesan 19 — Teman Gym Roni
  '20012026', // Pesan 20 — Tetangga Bu Wati
  '25032026', // Pesan 21 — Teman Online Kira
  '26032026', // Pesan 22 — Adik Kelas Dafa
  '10052026', // Pesan 23 — Teman Dekat Sera
  '16052026', // Pesan 24 — Rekan Pak Anton
  '24052026', // Pesan 25 — Semua yang Mencintaimu
];

const ENTRIES = [
  {
    from: "Gadis cantik lahirr",
    msg: "Haii cayanggkuu. Kenapa ya kamu lahirr ke dunia duluan ga nungguin akuu. Terus udah lahirr juga malah ga dateng pas aku lahir. Semoga kamu tetap menjadi orang yang semangat, bahagia, cerdas, dan beruntung yaa.",
    photos: ["picture/18062001/1.jpg","picture/18062001/2.jpg","picture/18062001/3.jpg","picture/18062001/4.jpg","picture/18062001/5.jpg","picture/18062001/6.jpg","picture/18062001/7.jpg"]
  },
  {
    from: "Malah jadi pasien",
    msg: "Gadis ini malah kerumah sakit aku tuh pengen ketemu tapi aku malu malu buatt datengg. Kamu sudah pernah mengalami OP aku belum semoga kita selalu di berikan kesehatan yaa",
    photos: ["picture/16042025/1.jpg","picture/16042025/2.jpg","picture/16042025/3.jpg"]
  },
  {
    from: "Nonton jumbo di bioskop",
    msg: "Wihh ini momen yang bisa di sebut memulaii hubungann kita sampaii harii ini. Sebuah rencana yang kirain ga jadi tapi tiba tiba malah jadii. Youu knoww seseneng apa aku saat ituu. Dengan sepatu basah dan dingin pun aku terabass GASS. Posisi juga kan aku udah mau pulang",
    photos: ["picture/24042025/1.jpg","picture/24042025/2.jpg","picture/24042025/3.jpg","picture/24042025/4.jpg","picture/24042025/5.jpg","picture/24042025/6.jpg","picture/24042025/7.jpg","picture/24042025/8.jpg","picture/24042025/9.jpg","picture/24042025/10.jpg"]
  },
  {
    from: "First aniv with me",
    msg: "Akhirnya aku merayakan ulang tahun kamu juga. Jujur prepare bikin kado waktu itu bingung mau apa kebetulan ada pameran parfum dan di saat itu kamu juga lagi sering belii parfum, Jadi aku beliin ini. Di tas yang aku kasih ada tulisan MOM semoga kamu bisa jadi mom buat anak kita nanti wkwkwk",
    photos: ["picture/18062025/1.jpg","picture/18062025/2.jpg","picture/18062025/3.jpg","picture/18062025/4.jpg","picture/18062025/5.jpg","picture/18062025/6.jpg","picture/18062025/7.jpg","picture/18062025/8.jpg","picture/18062025/9.jpg"]
  },
  {
    from: "Kondangan for the first time with us",
    msg: "Weshhh perasaan kita ke kondangan mantan kamu semua yaa. Tapi gapapa setiap kondangan mantan yang kamu datengin harus ada akunya yaa",
    photos: ["picture/22062025/1.jpg","picture/22062025/2.jpg","picture/22062025/3.jpg","picture/22062025/4.jpg","picture/22062025/5.jpg","picture/22062025/6.jpg","picture/22062025/7.jpg","picture/22062025/8.jpg"]
  },
  {
    from: "Ohh ini tuh namanya Musium date",
    msg: "For the first time aku melihat dirimu yang cantikk ya di gimana gimanain juga ku kira sifat dewasa kamu teh Cuma itu aja ternyata banyak sifat lain yang kamu belum keluarkan",
    photos: ["picture/08072025/1.jpg","picture/08072025/2.jpg","picture/08072025/3.jpg","picture/08072025/4.jpg","picture/08072025/5.jpg","picture/08072025/6.jpg","picture/08072025/7.jpg","picture/08072025/8.jpg"]
  },
  {
    from: "Sengg mode Abna sangatt hott wkwkw",
    msg: "Sengg dengan segala model tempurnya untuk mengadapi dunia pendidikan. Walaupun kamu bukan background ngajar tapi kamu sudahh hebatt bangett bisa sekuat ini sampai harii ini. Semogaa bisaa terus bahagiaa walaupun tidak sesuai ekspetasi",
    photos: ["picture/12082025/1.jpg","picture/12082025/2.jpg","picture/12082025/3.jpg","picture/12082025/4.jpg","picture/12082025/5.jpg","picture/12082025/6.jpg","picture/12082025/7.jpg","picture/12082025/8.jpg"]
  },
  {
    from: "Alam alam nihh yee",
    msg: "Ijoo ijoo lagii nihh yaaa, udah lama kita ga jalan jalan lagi liat ijo berdua doang. Kangen liat kamu kecapean wkwkw",
    photos: ["picture/22072025/1.jpg","picture/22072025/2.jpg","picture/22072025/3.jpg","picture/22072025/4.jpg","picture/22072025/5.jpg"]
  },
  {
    from: "Ikeaa Datee",
    msg: "Setelah musium terbitlah IKEA yeeee. Disini aku ga banyak foto tapi foto kamu disini pada baguss heran wkwkw.",
    photos: ["picture/23082025/1.jpg","picture/23082025/2.jpg","picture/23082025/3.jpg","picture/23082025/4.jpg","picture/23082025/5.jpg","picture/23082025/6.jpg","picture/23082025/7.jpg"]
  },
  {
    from: "Prewedd sengg??",
    msg: "Ga niat untuk foto tapii koo fotonya baguss baguss sihh. Udahh setara foto prewedd. Jadi when ya seng wedd nya wkwkwk",
    photos: ["picture/04092025/1.jpg","picture/04092025/2.jpg","picture/04092025/3.jpg","picture/04092025/4.jpg","picture/04092025/5.jpg","picture/04092025/6.jpg","picture/04092025/7.jpg","picture/04092025/8.jpg"]
  },
  {
    from: "Balonnn apa tuhh sengg",
    msg: "Subuh subuh mengejar balon balon yang terbang ituu. Dari mulai kita kena foging terus di spam telpon sama bocil bocill yang menggangu wkwkwk. Tapi semoga kamu seneng",
    photos: ["picture/12092025/1.jpg","picture/12092025/2.jpg","picture/12092025/3.jpg","picture/12092025/4.jpg","picture/12092025/5.jpg","picture/12092025/6.jpg","picture/12092025/7.jpg","picture/12092025/8.jpg"]
  },
  {
    from: "Pantaii nih? REALLY!",
    msg: "Akhirnya pantai pantaii yang beneran walaupun prepare bakal kepanasan ehh malah full hujann dingin bangett tapi Soo happy to come there with youu <3",
    photos: ["picture/17092025/1.jpg","picture/17092025/2.jpg","picture/17092025/3.jpg","picture/17092025/4.jpg","picture/17092025/5.jpg","picture/17092025/6.jpg","picture/17092025/7.jpg","picture/17092025/8.jpg"]
  },
  {
    from: "GIASS",
    msg: "Udahh kan liat liatnya jadi kapan beli mobilnya??",
    photos: ["picture/05102025/1.jpg","picture/05102025/2.jpg","picture/05102025/3.jpg","picture/05102025/4.jpg","picture/05102025/5.jpg","picture/05102025/6.jpg","picture/05102025/7.jpg","picture/05102025/8.jpg"]
  },
  {
    from: "Princess ku turun ke bumi",
    msg: "Walaupun aku ga ada di sini tapi foto foto yang kamu ambil menujukan sebahagia apa kamu disana. Dengan gaun ituu princessku turun bak ratu",
    photos: ["picture/18102025/1.jpg","picture/18102025/2.jpg","picture/18102025/3.jpg","picture/18102025/4.jpg","picture/18102025/5.jpg","picture/18102025/6.jpg","picture/18102025/7.jpg","picture/18102025/8.jpg"]
  },
  {
    from: "Kayanya bikin konten seruu",
    msg: "Makan makan yang kalo di kontenin kayanya seruu. Dimulai dari konten yang heboh dan banyyak cibiran sampe yang viewsnya banyakk. Sepertinya kita harus merosting resto lagi biar rame",
    photos: ["picture/28102025/1.jpg","picture/28102025/2.jpg","picture/28102025/3.jpg","picture/28102025/4.jpg","picture/28102025/5.jpg","picture/28102025/6.jpg"]
  },
  {
    from: "Ada yang mau berendam",
    msg: "Berendam ke sari aterr walaupun kena hujan awal dan akhirnya tapi enak sih kata akumah kata kamu gimana? Jujurly aku suka banget kamu pake kerudung yang item ituu",
    photos: ["picture/11112025/1.jpg","picture/11112025/2.jpg","picture/11112025/3.jpg","picture/11112025/4.jpg","picture/11112025/5.jpg","picture/11112025/6.jpg","picture/11112025/7.jpg","picture/11112025/8.jpg"]
  },
  {
    from: "Ijo Ijo nya bisa di makan",
    msg: "AEON punya Matchaa?? Semuaa kita beli eskrimnya crosaint nya jugaa sampe muall muall makan ijoo ijoo tapii enakk kooo",
    photos: ["picture/09112025/1.jpg","picture/09112025/2.jpg","picture/09112025/3.jpg","picture/09112025/4.jpg","picture/09112025/5.jpg","picture/09112025/6.jpg","picture/09112025/7.jpg"]
  },
  {
    from: "Jalan jalan lagii",
    msg: "Ini juga yaa harusnya tuhh sepii tapii ko jadi ramee. Maafkan kakanda jika hasil fotonya tidak baguss. tapii kamuu gemesss",
    photos: ["picture/14122025/1.jpg","picture/14122025/2.jpg","picture/14122025/3.jpg","picture/14122025/4.jpg","picture/14122025/5.jpg","picture/14122025/6.jpg","picture/14122025/7.jpg","picture/14122025/8.jpg"]
  },
  {
    from: "Wehh dimana tuhh???",
    msg: "Shayang kenit ya inituh namanya. Foto foto yang akhirnya kamu postt tapi emang jujur foto fotonya baguss baguss bangett jadi harus menjelajah lagii",
    photos: ["picture/27122025/1.jpg","picture/27122025/2.jpg","picture/27122025/3.jpg","picture/27122025/4.jpg","picture/27122025/5.jpg","picture/27122025/6.jpg","picture/27122025/7.jpg","picture/27122025/8.jpg"]
  },
  {
    from: "Jadi kapan muncak lagi???",
    msg: "Kata tiktok si pemula yaa TAPII KO 3 JAM BARU SAMPE PUNCAKK. Sebuahh perjalanan yang diawali dengan hepi serem sampe ngosngosan. So happy to exprerience withh youu sengg",
    photos: ["picture/20012026/1.jpg","picture/20012026/2.jpg","picture/20012026/3.jpg","picture/20012026/4.jpg","picture/20012026/5.jpg","picture/20012026/6.jpg","picture/20012026/7.jpg","picture/20012026/8.jpg"]
  },
  {
    from: "Udah di pantaii lagii aja",
    msg: "Katanya ke pangalengan malah tembuss ke pantai. Atau pangalengan itu pantai yaa wkwk. Beneran gada niat ke sini tapi liat di gmaps tuh deket jadi yakali ga sekalian",
    photos: ["picture/25032026/1.jpg","picture/25032026/2.jpg","picture/25032026/3.jpg","picture/25032026/4.jpg","picture/25032026/5.jpg","picture/25032026/6.jpg","picture/25032026/7.jpg","picture/25032026/8.jpg"]
  },
  {
    from: "Gagal curuk wkwkw",
    msg: "Inikah yang dinamakan gangguan pihak ke 3 wkwkw. Harus revisi sihh whenn sengg??",
    photos: ["picture/26032026/1.jpg","picture/26032026/2.jpg","picture/26032026/3.jpg","picture/26032026/4.jpg","picture/26032026/5.jpg","picture/26032026/6.jpg","picture/26032026/7.jpg"]
  },
  {
    from: "Malah OP lagii si cantik ini",
    msg: "Setelah sekian lama kamu sehatt ehh malah dateng lagii ke rumah sakit. Lama lagi yang ini mah sampe jadi pasien rawat inap. Sedihh bangett pass kamu di ruang OP suka pengen cerik kalo inget lagii tehh",
    photos: ["picture/10052026/1.jpg","picture/10052026/2.jpg","picture/10052026/3.jpg","picture/10052026/4.jpg","picture/10052026/5.jpg","picture/10052026/6.jpg","picture/10052026/7.jpg"]
  },
  {
    from: "Segalanya di garut",
    msg: "Mungkin kota paling bikin kamu atau mungkin kita bisa beristirahat dengan tenang ga mikiran gawean itu garut yaa. Eh tapi kamu di garut ge malah gawee kumaha sih wkwkw",
    photos: ["picture/16052026/1.jpg","picture/16052026/2.jpg","picture/16052026/3.jpg","picture/16052026/4.jpg","picture/16052026/5.jpg","picture/16052026/6.jpg","picture/16052026/7.jpg","picture/16052026/8.jpg"]
  },
  {
    from: "Bandung is blue",
    msg: "Juara with you. Yang juara bukan Cuma yang angkat piala tapi yang juara adala yang bisa tetap selalu bersama wahahah",
    photos: ["picture/24052026/1.jpg","picture/24052026/2.jpg","picture/24052026/3.jpg","picture/24052026/4.jpg","picture/24052026/5.jpg","picture/24052026/6.jpg","picture/24052026/7.jpg","picture/24052026/8.jpg"]
  },
];

// ─── State ───
const unlockedSet = new Set();

// ─── SVG placeholders ───
const PH_LOCK  = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(159,161,255,0.45)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
const PH_CARD  = `<div class="card-placeholder"><div class="ph-icon">${PH_LOCK}</div></div>`;
const PH_MODAL = `<div class="modal-ph"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(181,186,255,0.25)" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>`;

// ─── Build the grid ───
const grid = document.getElementById('grid');
ENTRIES.forEach(function (e, i) {
  const n    = String(i + 1).padStart(2, '0');
  const card = document.createElement('div');
  card.className = 'card card--locked';
  card.id = 'card-' + i;
  card.style.animationDelay = (i * 0.035) + 's';
  card.innerHTML = buildLockedCard(n);
  card.addEventListener('click', function () {
    if (unlockedSet.has(i)) openModal(i);
  });
  grid.appendChild(card);
});

function buildLockedCard(n) {
  return `
    <span class="card-num">${n}</span>
    <div class="card-img-wrap">${PH_CARD}</div>
    <div class="card-body">
      <p class="card-from card-from--hidden">— &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <p class="card-msg card-msg--locked">Pesan ini terkunci.<br>Masukkan kode untuk membuka.</p>
      <p class="card-lock-label">🔒 Terkunci</p>
    </div>
  `;
}

function buildUnlockedCard(i) {
  const e = ENTRIES[i];
  const n = String(i + 1).padStart(2, '0');
const imgHtml = (e.photos && e.photos.length)
  ? `<img src="${e.photos[0]}" alt="Foto dari ${e.from}" loading="lazy">`
  : `<div class="card-placeholder card-placeholder--open"><div class="ph-icon ph-icon--open"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(217,249,223,0.5)" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div></div>`;
  return `
    <span class="card-num card-num--open">${n}</span>
    <div class="card-img-wrap">${imgHtml}</div>
    <div class="card-body card-body--open">
      <p class="card-from">— ${e.from}</p>
      <p class="card-msg">"${e.msg.substring(0, 80)}${e.msg.length > 80 ? '\u2026' : ''}"</p>
      <p class="card-read">Baca selengkapnya →</p>
    </div>
  `;
}

// ─── Code input logic ───
const codeInputs = document.querySelectorAll('.code-box input');
const hintEl     = document.getElementById('code-hint');

codeInputs.forEach(function (inp, idx) {
  inp.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace') {
      e.preventDefault();
      if (inp.value) { inp.value = ''; }
      else if (idx > 0) { codeInputs[idx - 1].value = ''; codeInputs[idx - 1].focus(); }
      return;
    }
    if (e.key === 'ArrowLeft'  && idx > 0)                      { e.preventDefault(); codeInputs[idx-1].focus(); return; }
    if (e.key === 'ArrowRight' && idx < codeInputs.length - 1) { e.preventDefault(); codeInputs[idx+1].focus(); return; }
    if (e.key === 'Enter') { tryCode(); return; }
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      inp.value = e.key;
      if (idx < codeInputs.length - 1) codeInputs[idx + 1].focus();
      if (Array.from(codeInputs).every(function(i){ return i.value !== ''; })) setTimeout(tryCode, 120);
      return;
    }
    if (!e.ctrlKey && !e.metaKey) e.preventDefault();
  });

  inp.addEventListener('input', function () {
    const clean = inp.value.replace(/\D/g, '');
    if (!clean) { inp.value = ''; return; }
    if (clean.length > 1) {
      clean.split('').forEach(function (ch, offset) {
        if (codeInputs[idx + offset]) codeInputs[idx + offset].value = ch;
      });
      codeInputs[Math.min(idx + clean.length, codeInputs.length - 1)].focus();
    } else {
      inp.value = clean;
      if (idx < codeInputs.length - 1) codeInputs[idx + 1].focus();
    }
    if (Array.from(codeInputs).every(function(i){ return i.value !== ''; })) setTimeout(tryCode, 120);
  });

  inp.addEventListener('paste', function (e) {
    e.preventDefault();
    const pasted = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '').slice(0, 8);
    pasted.split('').forEach(function (ch, i) { if (codeInputs[i]) codeInputs[i].value = ch; });
    codeInputs[Math.min(pasted.length, codeInputs.length - 1)].focus();
    if (pasted.length === 8) setTimeout(tryCode, 120);
  });

  inp.addEventListener('focus', function () { inp.select(); });
});

// Focus first input on load (skip on mobile to avoid keyboard popup)
window.addEventListener('load', function () {
  if (window.innerWidth > 768 && codeInputs[0]) codeInputs[0].focus();
});

function getTypedCode() {
  return Array.from(codeInputs).map(function(i){ return i.value; }).join('');
}

function setHint(msg, type) {
  hintEl.textContent = msg;
  hintEl.className   = 'code-hint' + (type ? ' code-hint--' + type : '');
}

function shakeInputs() {
  codeInputs.forEach(function (inp) {
    inp.classList.add('inp--error');
    setTimeout(function () { inp.classList.remove('inp--error'); }, 450);
  });
}

function clearInputs() {
  codeInputs.forEach(function (i) { i.value = ''; });
  // Only refocus on non-mobile
  if (window.innerWidth > 768) codeInputs[0].focus();
}

function tryCode() {
  const typed = getTypedCode();
  if (typed.length < 8) return;

  // ── Master code: buka semua sekaligus ──
  if (typed === '06012004') {
    ENTRIES.forEach(function (_, i) {
      if (!unlockedSet.has(i)) {
        unlockedSet.add(i);
        unlockCard(i);
      }
    });
    updateUnlockCounter();
    setHint('Semua pesan terbuka!', 'success');
    setTimeout(function () { setHint(''); clearInputs(); }, 2500);
    return;
  }

  const matchIdx = CODES.indexOf(typed);

  if (matchIdx !== -1) {
    // ── Already unlocked ──
    if (unlockedSet.has(matchIdx)) {
      const n = String(matchIdx + 1).padStart(2, '0');
      setHint('Pesan #' + n + ' sudah terbuka!', 'success');
      highlightCard(matchIdx);
      openModal(matchIdx);
      setTimeout(function () { setHint(''); clearInputs(); }, 2000);
      return;
    }

    // ── New unlock ──
    unlockedSet.add(matchIdx);
    const n = String(matchIdx + 1).padStart(2, '0');
    setHint('Pesan #' + n + ' dari ' + ENTRIES[matchIdx].from + ' terbuka! 🎉', 'success');
    updateUnlockCounter();
    unlockCard(matchIdx);

    // Auto-open modal after unlock animation
    setTimeout(function () { openModal(matchIdx); }, 400);

    setTimeout(function () { setHint(''); clearInputs(); }, 2500);

  } else {
    setHint('Kode salah. Coba lagi.', 'error');
    shakeInputs();
    setTimeout(function () { clearInputs(); setHint(''); }, 1800);
  }
}

function unlockCard(idx) {
  const card = document.getElementById('card-' + idx);
  if (!card) return;

  card.classList.add('card--unlocking');
  setTimeout(function () {
    card.classList.remove('card--locked', 'card--unlocking');
    card.classList.add('card--unlocked');
    card.innerHTML = buildUnlockedCard(idx);
    card.addEventListener('click', function () { openModal(idx); });
    void card.offsetWidth;
    card.classList.add('card--popin');
  }, 350);

  setTimeout(function () {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 500);
}

function highlightCard(idx) {
  const card = document.getElementById('card-' + idx);
  if (!card) return;
  card.classList.add('card--highlight');
  setTimeout(function () { card.classList.remove('card--highlight'); }, 900);
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function updateUnlockCounter() {
  const el = document.getElementById('unlock-counter');
  if (el) el.textContent = unlockedSet.size + ' / 25 terbuka';
}

// ─── Modal ───
function openModal(idx) {
  const e = ENTRIES[idx];
  const n = String(idx + 1).padStart(2, '0');
  const imgEl = document.getElementById('m-img');

  if (e.photos && e.photos.length > 1) {
    // Buat slideshow
    let currentSlide = 0;
    imgEl.innerHTML = `
      <img id="modal-slide-img" src="${e.photos[0]}" alt="">
      <button class="slide-prev" onclick="changeSlide(-1)">&#8249;</button>
      <button class="slide-next" onclick="changeSlide(1)">&#8250;</button>
      <div class="slide-dots" id="slide-dots">
        ${e.photos.map((_, i) => `<span class="dot ${i===0?'dot--active':''}" onclick="goSlide(${i})"></span>`).join('')}
      </div>
    `;
    window._slides = e.photos;
    window._currentSlide = 0;
    window.changeSlide = function(dir) {
      window._currentSlide = (window._currentSlide + dir + window._slides.length) % window._slides.length;
      document.getElementById('modal-slide-img').src = window._slides[window._currentSlide];
      document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('dot--active', i === window._currentSlide));
    };
    window.goSlide = function(i) {
      window._currentSlide = i;
      document.getElementById('modal-slide-img').src = window._slides[i];
      document.querySelectorAll('.dot').forEach((d, j) => d.classList.toggle('dot--active', j === i));
    };
  } else if (e.photos && e.photos.length === 1) {
    imgEl.innerHTML = `<img src="${e.photos[0]}" alt="">`;
  } else {
    imgEl.innerHTML = PH_MODAL;
  }

  document.getElementById('m-tag').textContent  = 'Pesan #' + n + ' dari 25';
  document.getElementById('m-from').textContent = '— ' + e.from;
  document.getElementById('m-msg').textContent  = '\u201c' + e.msg + '\u201d';

  document.getElementById('modal-wrap').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.querySelector('.modal-close-btn')?.focus(), 420);
}

function closeModal(evt) {
  if (evt && document.getElementById('modal-box').contains(evt.target)) return;
  document.getElementById('modal-wrap').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

// ─── Music Player ───
const PLAYLIST = [
  { src: 'sound/bs1.mp3', title: 'Beautiful',            artist: 'D.O. (EXO)'   },
  { src: 'sound/bs2.mp3', title: 'Treasure',             artist: 'Bruno Mars'    },
  { src: 'sound/bs3.mp3', title: 'For Life',             artist: 'EXO'           },
  { src: 'sound/bs4.mp3', title: 'Just The Way You Are', artist: 'Bruno Mars'    },
  { src: 'sound/bs5.mp3', title: "I'm Gonna Love You",   artist: 'D.O.'          },
];

window.addEventListener('load', function () {
  const audio     = document.getElementById('bg-audio');
  const bar       = document.getElementById('music-bar');
  const iPlay     = document.getElementById('icon-play');
  const iPause    = document.getElementById('icon-pause');
  const eqBars    = document.getElementById('eq-bars');
  const slider    = document.getElementById('vol-slider');
  const titleEl   = document.getElementById('music-title');
  const subEl     = document.getElementById('music-sub');
  let   playing   = false;
  let   trackIdx  = 0;

  if (!audio) return;

  function loadTrack(idx, autoplay) {
    const t = PLAYLIST[idx];
    audio.src        = t.src;
    audio.load();
    if (titleEl) titleEl.textContent = t.title;
    if (subEl)   subEl.textContent   = t.artist;

    // highlight active di bar (opsional)
    document.querySelectorAll('.track-item').forEach(function(el, i) {
      el.classList.toggle('track-item--active', i === idx);
    });

    if (autoplay) {
      audio.play()
        .then(function() { setPlaying(true); })
        .catch(function() {});
    } else {
      setPlaying(false);
    }
  }

  audio.volume = parseFloat(slider.value);
  slider.addEventListener('input', function () { audio.volume = parseFloat(slider.value); });

  function setPlaying(state) {
    playing = state;
    iPlay.style.display  = state ? 'none'  : 'block';
    iPause.style.display = state ? 'block' : 'none';
    eqBars.classList.toggle('paused', !state);

    if (state) {
      setTimeout(function () {
        if (playing) bar.classList.add('music-bar--mini');
      }, 1500);
    } else {
      bar.classList.remove('music-bar--mini');
    }
  }

  window.toggleMusic = function () {
    if (!playing) {
      audio.play()
        .then(function () { setPlaying(true); })
        .catch(function () {
          const t = document.getElementById('music-toast');
          if (t) t.textContent = '⚠️ Tidak dapat memutar audio.';
        });
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  window.prevTrack = function () {
    trackIdx = (trackIdx - 1 + PLAYLIST.length) % PLAYLIST.length;
    loadTrack(trackIdx, true);
  };

  window.nextTrack = function () {
    trackIdx = (trackIdx + 1) % PLAYLIST.length;
    loadTrack(trackIdx, true);
  };

  // Auto-next saat lagu habis
  audio.addEventListener('ended', function () {
    trackIdx = (trackIdx + 1) % PLAYLIST.length;
    loadTrack(trackIdx, true);
  });

  // Load lagu pertama
  loadTrack(0, false);

  // Auto-play
  audio.play()
    .then(function () { setPlaying(true); })
    .catch(function () {});

  setTimeout(function () {
    const t = document.getElementById('music-toast');
    if (t) t.remove();
  }, 5000);
});