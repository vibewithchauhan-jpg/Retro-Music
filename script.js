// ============================================
// SADABAHAR GAANE - MUSIC PLAYER
// ============================================

// -------------------------
// SONG LIST
// -------------------------

const songs = [
    ["Tujhe Dekha To Ye Jana Sanam", "Dilwale Dulhania Le Jayenge (1995)"],
    ["Dheere Dheere Se Meri Zindagi Mein Aana", "Aashiqui (1990)"],
    ["Mera Dil Bhi Kitna Pagal Hai", "Saajan (1991)"],
    ["Pehla Nasha", "Jo Jeeta Wohi Sikandar (1992)"],
    ["Aisi Deewangi", "Deewana (1992)"],
    ["Teri Mohabbat Ne Dil", "Rang (1993)"],
    ["Baazigar O Baazigar", "Baazigar (1993)"],
    ["Tu Cheez Badi Hai Mast Mast", "Mohra (1994)"],
    ["Ek Ladki Ko Dekha", "1942: A Love Story (1994)"],
    ["Aaye Ho Meri Zindagi Mein", "Raja Hindustani (1996)"],
    ["Nazar Ke Samne", "Aashiqui (1990)"],
    ["Jiye To Jiye Kaise", "Saajan (1991)"],
    ["Sochenge Tumhe Pyar", "Deewana (1992)"],
    ["Saat Samundar Paar", "Vishwatma (1992)"],
    ["Kahin Mujhe Pyar Hua To Nahin", "Rang (1993)"],
    ["Ye Kaali Kaali Aankhen", "Baazigar (1993)"],
    ["Tere Dar Pe Sanam", "Phir Teri Kahani Yaad Aayee (1993)"],
    ["Chura Ke Dil Mera", "Main Khiladi Tu Anari (1994)"],
    ["Pehla Pehla Pyar Hai", "Hum Aapke Hain Koun..! (1994)"],
    ["Pardesi Pardesi", "Raja Hindustani (1996)"],
    ["Tu Meri Zindagi Hai", "Aashiqui (1990)"],
    ["Bahut Pyar Karte Hain", "Saajan (1991)"],
    ["Dil Hai Ke Manta Nahin", "Dil Hai Ke Manta Nahin (1991)"],
    ["Yahan Ke Hum Sikandar", "Jo Jeeta Wohi Sikandar (1992)"],
    ["Tumhein Dekhen Meri Aankhen", "Rang (1993)"],
    ["Chhupana Bhi Nahin Aata", "Baazigar (1993)"],
    ["Jab Se Tumko Dekha Hai Sanam", "Damini (1993)"],
    ["Didi Tera Devar Deewana", "Hum Aapke Hain Koun..! (1994)"],
    ["Tip Tip Barsa Paani", "Mohra (1994)"],
    ["Do Dil Mil Rahe Hain", "Pardes (1997)"],
    ["Ab Tere Bin", "Aashiqui (1990)"],
    ["Tumse Milne Ki Tamanna Hai", "Saajan (1991)"],
    ["O Mere Sapno Ke Saudagar", "Dil Hai Ke Manta Nahin (1991)"],
    ["Koi Na Koi Chahiye", "Deewana (1992)"],
    ["Mere Pyar Ka Hisaab", "Rang (1993)"],
    ["Kitabein Bahut Si", "Baazigar (1993)"],
    ["Tu Hi Re", "Bombay (1995)"],
    ["Aayega Maza Ab Barsaat Ka", "Andaaz (2003)"],
    ["Mujhse Juda Hokar", "Hum Aapke Hain Koun..! (1994)"],
    ["Main Koi Aisa Geet Gaoon", "Yes Boss (1997)"],
    ["Main Duniya Bhula Dunga", "Aashiqui (1990)"],
    ["Tu Shayar Hai", "Saajan (1991)"],
    ["Adayein Bhi Hain", "Dil Hai Ke Manta Nahin (1991)"],
    ["Tu Na Ja Mere Badshah", "Khuda Gawah (1992)"],
    ["Coming Coming Coming", "Rang (1993)"],
    ["Nayak Nahin Khalnayak Hoon Main", "Khal Nayak (1993)"],
    ["Ghoonghat Ki Aad Se", "Hum Hain Rahi Pyar Ke (1993)"],
    ["Wah Wah Ramji", "Hum Aapke Hain Koun..! (1994)"],
    ["Pyar Hua Chupke Se", "1942: A Love Story (1994)"],
    ["Chand Taare", "Yes Boss (1997)"],
    ["Sanson Ki Zarurat Hai Jaise", "Aashiqui (1990)"],
    ["Dekha Hai Pehli Baar", "Saajan (1991)"],
    ["Kabhi Main Kahoon", "Lamhe (1991)"],
    ["Teri Umeed Tera Intezaar", "Deewana (1992)"],
    ["Dil Cheer Ke Dekh Tera Hi Naam Hoga", "Rang (1993)"],
    ["Ae Mere Humsafar", "Baazigar (1993)"],
    ["Paalki Mein Hoke Sawar Chali Re", "Khal Nayak (1993)"],
    ["Joote De Do Paise Le Lo", "Hum Aapke Hain Koun..! (1994)"],
    ["Kuchh Na Kaho", "1942: A Love Story (1994)"],
    ["Aankhon Ki Gustakhiyan", "Hum Dil De Chuke Sanam (1999)"],
    ["Jaan-E-Jigar Jaaneman", "Aashiqui (1990)"],
    ["Hum Pyar Karne Wale", "Dil (1990)"],
    ["Kaise Mijaz Aapka", "Dil Hai Ke Manta Nahin (1991)"],
    ["Roothkar Humse Kabhi", "Jo Jeeta Wohi Sikandar (1992)"],
    ["Dil Cheer Ke Dekh Tera Hi Naam Hoga (Female)", "Rang (1993)"],
    ["Aaja Sajan Aaja", "Khal Nayak (1993)"],
    ["Ae Kaash Kahin Aisa Hota", "Mohra (1994)"],
    ["Yeh Mausam Ka Jaadu Hai Mitwa", "Hum Aapke Hain Koun..! (1994)"],
    ["Aaj Main Upar", "Khamoshi: The Musical (1996)"],
    ["Meri Mehbooba", "Pardes (1997)"],
    ["Mujhe Neend Na Aaye", "Dil (1990)"],
    ["Humne Ghar Chhoda Hai", "Dil (1990)"],
    ["Megha Re Megha", "Lamhe (1991)"],
    ["Deewana Mujhsa Nahin", "Khuda Gawah (1992)"],
    ["Hum Tum Picture Dekh Rahe Ho", "Rang (1993)"],
    ["Ye Dil Deewana", "Pardes (1997)"],
    ["Dil To Pagal Hai", "Dil To Pagal Hai (1997)"],
    ["Bholi Si Surat", "Dil To Pagal Hai (1997)"],
    ["Aankhon Se Tune Ye Kya Keh Diya", "Ghulam (1998)"],
    ["Taal Se Taal Mila", "Taal (1999)"],
    ["Khambe Jaisi Khadi Hai", "Dil (1990)"],
    ["Aana Mere Pyar Ko", "Kabhi Haan Kabhi Naa (1994)"],
    ["Ae Kash Ke Hum", "Kabhi Haan Kabhi Naa (1994)"],
    ["Ghar Se Nikalte Hi", "Papa Kehte Hain (1996)"],
    ["Neend Churayi Meri", "Ishq (1997)"],
    ["Koi Ladki Hai", "Dil To Pagal Hai (1997)"],
    ["Ae Ajnabi", "Dil Se.. (1998)"],
    ["Satrangi Re", "Dil Se.. (1998)"],
    ["Jiya Jale", "Dil Se.. (1998)"],
    ["Ramta Jogi", "Taal (1999)"],
    ["Poocho Zara Poocho", "Raja Hindustani (1996)"],
    ["Bahon Ke Darmiyan", "Khamoshi: The Musical (1996)"],
    ["Jaadu Hai Tera Hi Jaadu", "Ghulam (1998)"],
    ["Aati Kya Khandala", "Ghulam (1998)"],
    ["Dil Se Re", "Dil Se.. (1998)"],
    ["Chand Chhupa Badal Mein", "Hum Dil De Chuke Sanam (1999)"],
    ["Tadap Tadap Ke", "Hum Dil De Chuke Sanam (1999)"],
    ["Dholi Taro Dhol Baaje", "Hum Dil De Chuke Sanam (1999)"],
    ["Mhare Hiwda Mein Naache Mor", "Hum Saath-Saath Hain (1999)"],
    ["Pehli Pehli Baar Mohabbat Ki Hai", "Sirf Tum (1999)"]
];


// -------------------------
// ELEMENTS
// -------------------------

const audio = document.getElementById("audio");

const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");

const panelTitle = document.getElementById("panelTitle");
const panelArtist = document.getElementById("panelArtist");

const playButton = document.getElementById("playButton");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const shuffleButton = document.getElementById("shuffleButton");

const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

const volumeSlider = document.getElementById("volumeSlider");

const playCollection = document.getElementById("playCollection");
const randomButton = document.getElementById("randomButton");

const sideMusicButton = document.getElementById("sideMusicButton");
const musicPanel = document.getElementById("musicPanel");
const closePanel = document.getElementById("closePanel");


// -------------------------
// PLAYER STATE
// -------------------------

let currentSong = 0;
let isPlaying = false;
let shuffleMode = false;


// -------------------------
// FORMAT TIME
// -------------------------

function formatTime(seconds) {

    if (!isFinite(seconds)) {
        return "0:00";
    }

    const minutes = Math.floor(seconds / 60);

    const secs = Math.floor(seconds % 60);

    return minutes + ":" + String(secs).padStart(2, "0");
}


// -------------------------
// LOAD SONG
// -------------------------

function loadSong(index) {

    if (index < 0) {
        index = songs.length - 1;
    }

    if (index >= songs.length) {
        index = 0;
    }

    currentSong = index;

    const song = songs[currentSong];

    // MP3 file
    audio.src = "song" + (currentSong + 1) + ".mp3";

    audio.load();

    // Change title
    if (songTitle) {
        songTitle.textContent = song[0];
    }

    if (songArtist) {
        songArtist.textContent = song[1];
    }

    if (panelTitle) {
        panelTitle.textContent = song[0];
    }

    if (panelArtist) {
        panelArtist.textContent = song[1];
    }

    // Reset progress
    if (progress) {
        progress.value = 0;
    }

    if (currentTime) {
        currentTime.textContent = "0:00";
    }

    if (duration) {
        duration.textContent = "0:00";
    }
}


// -------------------------
// PLAY
// -------------------------

function playSong() {

    audio.play()
        .then(() => {

            isPlaying = true;

            updatePlayIcon();

        })
        .catch(error => {

            console.log("Audio play error:", error);

        });
}


// -------------------------
// PAUSE
// -------------------------

function pauseSong() {

    audio.pause();

    isPlaying = false;

    updatePlayIcon();
}


// -------------------------
// PLAY / PAUSE ICON
// -------------------------

function updatePlayIcon() {

    if (!playButton) return;

    const icon = playButton.querySelector("i");

    if (!icon) return;

    if (isPlaying) {

        icon.classList.remove("fa-play");

        icon.classList.add("fa-pause");

    } else {

        icon.classList.remove("fa-pause");

        icon.classList.add("fa-play");

    }
}


// -------------------------
// PLAY BUTTON
// -------------------------

if (playButton) {

    playButton.addEventListener("click", () => {

        if (isPlaying) {

            pauseSong();

        } else {

            playSong();

        }

    });

}


// -------------------------
// PLAY COLLECTION
// -------------------------

if (playCollection) {

    playCollection.addEventListener("click", () => {

        playSong();

    });

}


// -------------------------
// NEXT SONG
// -------------------------

function nextSong() {

    if (shuffleMode) {

        let newIndex;

        do {

            newIndex = Math.floor(Math.random() * songs.length);

        } while (newIndex === currentSong && songs.length > 1);

        loadSong(newIndex);

    } else {

        loadSong(currentSong + 1);

    }

    playSong();
}


if (nextButton) {

    nextButton.addEventListener("click", nextSong);

}


// -------------------------
// PREVIOUS SONG
// -------------------------

function previousSong() {

    loadSong(currentSong - 1);

    playSong();
}


if (previousButton) {

    previousButton.addEventListener("click", previousSong);

}


// -------------------------
// AUTO NEXT
// -------------------------

audio.addEventListener("ended", () => {

    nextSong();

});


// ============================================
// IMPORTANT: PROGRESS / SEEK BAR
// ============================================

// Audio time changes
audio.addEventListener("timeupdate", () => {

    if (!audio.duration || !isFinite(audio.duration)) {
        return;
    }

    const percentage =
        (audio.currentTime / audio.duration) * 100;

    if (progress) {

        progress.value = percentage;

    }

    if (currentTime) {

        currentTime.textContent =
            formatTime(audio.currentTime);

    }

    if (duration) {

        duration.textContent =
            formatTime(audio.duration);

    }

});


// --------------------------------------------
// जब slider को खींचेंगे / click करेंगे
// --------------------------------------------

if (progress) {

    progress.addEventListener("input", () => {

        if (!audio.duration || !isFinite(audio.duration)) {
            return;
        }

        const seekTime =
            (Number(progress.value) / 100) *
            audio.duration;

        audio.currentTime = seekTime;

        if (currentTime) {

            currentTime.textContent =
                formatTime(seekTime);

        }

    });

}


// --------------------------------------------
// Audio metadata loaded
// --------------------------------------------

audio.addEventListener("loadedmetadata", () => {

    if (duration) {

        duration.textContent =
            formatTime(audio.duration);

    }

});


// ============================================
// VOLUME
// ============================================

audio.volume = 0.8;


if (volumeSlider) {

    volumeSlider.value = 80;

    volumeSlider.addEventListener("input", () => {

        audio.volume =
            Number(volumeSlider.value) / 100;

    });

}


// ============================================
// SHUFFLE
// ============================================

if (shuffleButton) {

    shuffleButton.addEventListener("click", () => {

        shuffleMode = !shuffleMode;

        shuffleButton.classList.toggle(
            "active",
            shuffleMode
        );

    });

}


if (randomButton) {

    randomButton.addEventListener("click", () => {

        let randomIndex;

        do {

            randomIndex =
                Math.floor(Math.random() * songs.length);

        } while (
            randomIndex === currentSong &&
            songs.length > 1
        );

        loadSong(randomIndex);

        playSong();

    });

}


// ============================================
// SIDE MUSIC PANEL
// ============================================

if (sideMusicButton && musicPanel) {

    sideMusicButton.addEventListener("click", () => {

        musicPanel.classList.add("active");

    });

}


if (closePanel && musicPanel) {

    closePanel.addEventListener("click", () => {

        musicPanel.classList.remove("active");

    });

}


// ============================================
// INITIAL SONG
// ============================================

loadSong(0);
