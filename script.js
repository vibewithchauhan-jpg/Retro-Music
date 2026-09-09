/* =========================================================
   RETRO MUSIC PLAYER
   FINAL COPY-PASTE VERSION
   ========================================================= */


/* =========================================================
   100 SONG TITLES
   ========================================================= */

const SONG_TITLES = [

    "Tujhe Dekha To Ye Jana Sanam",
    "Dheere Dheere Se Meri Zindagi Mein Aana",
    "Mera Dil Bhi Kitna Pagal Hai",
    "Pehla Nasha",
    "Aisi Deewangi",
    "Teri Mohabbat Ne Dil",
    "Baazigar O Baazigar",
    "Tu Cheez Badi Hai Mast Mast",
    "Ek Ladki Ko Dekha",
    "Aaye Ho Meri Zindagi Mein",
    "Nazar Ke Samne",
    "Jiye To Jiye Kaise",
    "Sochenge Tumhe Pyar",
    "Saat Samundar Paar",
    "Kahin Mujhe Pyar Hua To Nahin",
    "Ye Kaali Kaali Aankhen",
    "Tere Dar Pe Sanam",
    "Chura Ke Dil Mera",
    "Pehla Pehla Pyar Hai",
    "Pardesi Pardesi",
    "Tu Meri Zindagi Hai",
    "Bahut Pyar Karte Hain",
    "Dil Hai Ke Manta Nahin",
    "Yahan Ke Hum Sikandar",
    "Tumhein Dekhen Meri Aankhen",
    "Chhupana Bhi Nahin Aata",
    "Jab Se Tumko Dekha Hai Sanam",
    "Didi Tera Devar Deewana",
    "Tip Tip Barsa Paani",
    "Do Dil Mil Rahe Hain",
    "Ab Tere Bin",
    "Tumse Milne Ki Tamanna Hai",
    "O Mere Sapno Ke Saudagar",
    "Koi Na Koi Chahiye",
    "Mere Pyar Ka Hisaab",
    "Kitabein Bahut Si",
    "Tu Hi Re",
    "Aayega Maza Ab Barsaat Ka",
    "Mujhse Juda Hokar",
    "Main Koi Aisa Geet Gaoon",
    "Main Duniya Bhula Dunga",
    "Tu Shayar Hai",
    "Adayein Bhi Hain",
    "Tu Na Ja Mere Badshah",
    "Coming Coming Coming",
    "Nayak Nahin Khalnayak Hoon Main",
    "Ghoonghat Ki Aad Se",
    "Wah Wah Ramji",
    "Pyar Hua Chupke Se",
    "Chand Taare",
    "Sanson Ki Zarurat Hai Jaise",
    "Dekha Hai Pehli Baar",
    "Kabhi Main Kahoon",
    "Teri Umeed Tera Intezaar",
    "Dil Cheer Ke Dekh Tera Hi Naam Hoga",
    "Ae Mere Humsafar",
    "Paalki Mein Hoke Sawar Chali Re",
    "Joote De Do Paise Le Lo",
    "Kuchh Na Kaho",
    "Aankhon Ki Gustakhiyan",
    "Jaan-E-Jigar Jaaneman",
    "Hum Pyar Karne Wale",
    "Kaise Mijaz Aapka",
    "Roothkar Humse Kabhi",
    "Dil Cheer Ke Dekh Tera Hi Naam Hoga (Female)",
    "Aaja Sajan Aaja",
    "Ae Kaash Kahin Aisa Hota",
    "Yeh Mausam Ka Jaadu Hai Mitwa",
    "Aaj Main Upar",
    "Meri Mehbooba",
    "Mujhe Neend Na Aaye",
    "Humne Ghar Chhoda Hai",
    "Megha Re Megha",
    "Deewana Mujhsa Nahin",
    "Hum Tum Picture Dekh Rahe Ho",
    "Ye Dil Deewana",
    "Dil To Pagal Hai",
    "Bholi Si Surat",
    "Aankhon Se Tune Ye Kya Keh Diya",
    "Taal Se Taal Mila",
    "Khambe Jaisi Khadi Hai",
    "Aana Mere Pyar Ko",
    "Ae Kash Ke Hum",
    "Ghar Se Nikalte Hi",
    "Neend Churayi Meri",
    "Koi Ladki Hai",
    "Ae Ajnabi",
    "Satrangi Re",
    "Jiya Jale",
    "Ramta Jogi",
    "Poocho Zara Poocho",
    "Bahon Ke Darmiyan",
    "Jaadu Hai Tera Hi Jaadu",
    "Aati Kya Khandala",
    "Dil Se Re",
    "Chand Chhupa Badal Mein",
    "Tadap Tadap Ke",
    "Dholi Taro Dhol Baaje",
    "Mhare Hiwda Mein Naache Mor",
    "Pehli Pehli Baar Mohabbat Ki Hai"

];


/* =========================================================
   AUTOMATIC SONG CREATION
   song1.mp3
   song2.mp3
   ...
   song100.mp3
   ========================================================= */

const tracks = SONG_TITLES.map((title, index) => {

    return {

        title: title,

        artist: "Sadabahar Collection",

        audio: `song${index + 1}.mp3`,

        duration: "00:00"

    };

});


/* =========================================================
   ELEMENTS
   ========================================================= */

const audio =
    document.getElementById("audio");

const playBtn =
    document.getElementById("playBtn");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

const shuffleBtn =
    document.getElementById("shuffleBtn");

const repeatBtn =
    document.getElementById("repeatBtn");

const progressContainer =
    document.getElementById("progressContainer");

const progressBar =
    document.getElementById("progressBar");

const progressDot =
    document.getElementById("progressDot");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");

const volumeSlider =
    document.getElementById("volumeSlider");

const trackTitle =
    document.getElementById("trackTitle");

const trackArtist =
    document.getElementById("trackArtist");

const trackNumber =
    document.getElementById("trackNumber");

const playlist =
    document.getElementById("playlist");

const playlistCount =
    document.getElementById("playlistCount");

const vinyl =
    document.getElementById("vinyl");

const statusText =
    document.getElementById("statusText");

const likeBtn =
    document.getElementById("likeBtn");

const themeToggle =
    document.getElementById("themeToggle");

const visualToggle =
    document.getElementById("visualToggle");

const bgVideo =
    document.getElementById("bgVideo");


/* =========================================================
   PLAYER STATE
   ========================================================= */

let currentTrack = 0;

let isPlaying = false;

let isShuffle = false;

let repeatMode = false;


/* =========================================================
   INITIALIZE
   ========================================================= */

function init() {

    if (playlistCount) {

        playlistCount.textContent =
            `${String(tracks.length).padStart(2, "0")} TRACKS`;

    }

    renderPlaylist();

    loadTrack(currentTrack);

    if (audio) {

        audio.volume = 0.8;

    }

    updateClock();

}


/* =========================================================
   LOAD TRACK
   ========================================================= */

function loadTrack(index) {

    if (!tracks.length) return;

    currentTrack = index;

    const track =
        tracks[currentTrack];

    if (trackTitle) {

        trackTitle.textContent =
            track.title;

    }

    if (trackArtist) {

        trackArtist.textContent =
            track.artist;

    }

    if (trackNumber) {

        trackNumber.textContent =
            `${String(currentTrack + 1).padStart(2, "0")} / ${String(tracks.length).padStart(2, "0")}`;

    }

    if (duration) {

        duration.textContent =
            track.duration;

    }

    if (currentTime) {

        currentTime.textContent =
            "00:00";

    }

    if (progressBar) {

        progressBar.style.width =
            "0%";

    }

    if (progressDot) {

        progressDot.style.left =
            "0%";

    }

    if (audio) {

        audio.src =
            track.audio;

        audio.load();

    }

    updatePlaylistActive();

}


/* =========================================================
   PLAY
   ========================================================= */

function playTrack() {

    if (!tracks.length || !audio) return;

    audio.play()

        .then(() => {

            isPlaying = true;

            if (playBtn) {

                playBtn.textContent =
                    "Ⅱ";

            }

            if (vinyl) {

                vinyl.classList.add(
                    "playing"
                );

            }

            if (statusText) {

                statusText.textContent =
                    "NOW PLAYING";

            }

            updatePlaylistActive();

        })

        .catch(() => {

            if (statusText) {

                statusText.textContent =
                    "AUDIO LINK ERROR";

            }

        });

}


/* =========================================================
   PAUSE
   ========================================================= */

function pauseTrack() {

    if (!audio) return;

    audio.pause();

    isPlaying = false;

    if (playBtn) {

        playBtn.textContent =
            "▶";

    }

    if (vinyl) {

        vinyl.classList.remove(
            "playing"
        );

    }

    if (statusText) {

        statusText.textContent =
            "PAUSED";

    }

}


/* =========================================================
   PLAY / PAUSE
   ========================================================= */

if (playBtn) {

    playBtn.addEventListener(
        "click",
        () => {

            if (isPlaying) {

                pauseTrack();

            } else {

                playTrack();

            }

        }
    );

}


/* =========================================================
   NEXT
   ========================================================= */

function nextTrack() {

    if (!tracks.length) return;

    if (isShuffle) {

        let randomIndex;

        do {

            randomIndex =
                Math.floor(
                    Math.random() *
                    tracks.length
                );

        }

        while (
            randomIndex === currentTrack &&
            tracks.length > 1
        );

        currentTrack =
            randomIndex;

    } else {

        currentTrack++;

        if (
            currentTrack >=
            tracks.length
        ) {

            currentTrack = 0;

        }

    }

    loadTrack(currentTrack);

    playTrack();

}


if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        nextTrack
    );

}


/* =========================================================
   PREVIOUS
   ========================================================= */

function previousTrack() {

    if (!tracks.length) return;

    if (
        audio &&
        audio.currentTime > 3
    ) {

        audio.currentTime = 0;

        return;

    }

    currentTrack--;

    if (currentTrack < 0) {

        currentTrack =
            tracks.length - 1;

    }

    loadTrack(currentTrack);

    playTrack();

}


if (prevBtn) {

    prevBtn.addEventListener(
        "click",
        previousTrack
    );

}


/* =========================================================
   SHUFFLE
   ========================================================= */

if (shuffleBtn) {

    shuffleBtn.addEventListener(
        "click",
        () => {

            isShuffle =
                !isShuffle;

            shuffleBtn.classList.toggle(
                "active",
                isShuffle
            );

        }
    );

}


/* =========================================================
   REPEAT
   ========================================================= */

if (repeatBtn) {

    repeatBtn.addEventListener(
        "click",
        () => {

            repeatMode =
                !repeatMode;

            repeatBtn.classList.toggle(
                "active",
                repeatMode
            );

        }
    );

}


/* =========================================================
   SONG ENDED
   ========================================================= */

if (audio) {

    audio.addEventListener(
        "ended",
        () => {

            if (repeatMode) {

                audio.currentTime = 0;

                playTrack();

            } else {

                nextTrack();

            }

        }
    );

}


/* =========================================================
   PROGRESS
   ========================================================= */

if (audio) {

    audio.addEventListener(
        "timeupdate",
        () => {

            if (!audio.duration) return;

            const percent =
                (
                    audio.currentTime /
                    audio.duration
                ) * 100;

            if (progressBar) {

                progressBar.style.width =
                    `${percent}%`;

            }

            if (progressDot) {

                progressDot.style.left =
                    `${percent}%`;

            }

            if (currentTime) {

                currentTime.textContent =
                    formatTime(
                        audio.currentTime
                    );

            }

            if (duration) {

                duration.textContent =
                    formatTime(
                        audio.duration
                    );

            }

        }
    );

}


/* =========================================================
   SEEK
   ========================================================= */

if (progressContainer) {

    progressContainer.addEventListener(
        "click",
        event => {

            if (
                !audio ||
                !audio.duration
            ) return;

            const rect =
                progressContainer
                    .getBoundingClientRect();

            const position =
                event.clientX -
                rect.left;

            const percentage =
                position /
                rect.width;

            audio.currentTime =
                percentage *
                audio.duration;

        }
    );

}


/* =========================================================
   VOLUME
   ========================================================= */

if (volumeSlider) {

    volumeSlider.addEventListener(
        "input",
        () => {

            if (audio) {

                audio.volume =
                    volumeSlider.value;

            }

        }
    );

}


/* =========================================================
   AUDIO METADATA
   ========================================================= */

if (audio) {

    audio.addEventListener(
        "loadedmetadata",
        () => {

            if (!audio.duration) return;

            if (duration) {

                duration.textContent =
                    formatTime(
                        audio.duration
                    );

            }

            if (tracks[currentTrack]) {

                tracks[currentTrack]
                    .duration =
                    formatTime(
                        audio.duration
                    );

            }

            renderPlaylist();

        }
    );

}


/* =========================================================
   FORMAT TIME
   ========================================================= */

function formatTime(seconds) {

    if (
        isNaN(seconds) ||
        !isFinite(seconds)
    ) {

        return "00:00";

    }

    const minutes =
        Math.floor(
            seconds / 60
        );

    const secondsLeft =
        Math.floor(
            seconds % 60
        );

    return `${String(minutes).padStart(2, "0")}:${String(secondsLeft).padStart(2, "0")}`;

}


/* =========================================================
   PLAYLIST
   ========================================================= */

function renderPlaylist() {

    if (!playlist) return;

    playlist.innerHTML = "";

    tracks.forEach(
        (track, index) => {

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                "track";

            item.dataset.index =
                index;

            item.innerHTML = `

                <div class="track-index">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div>

                    <div class="track-name">
                        ${escapeHTML(track.title)}
                    </div>

                    <div class="track-artist">
                        ${escapeHTML(track.artist)}
                    </div>

                </div>

                <div class="track-duration">
                    ${track.duration}
                </div>

            `;

            item.addEventListener(
                "click",
                () => {

                    loadTrack(index);

                    playTrack();

                }
            );

            playlist.appendChild(
                item
            );

        }
    );

    updatePlaylistActive();

}


/* =========================================================
   ACTIVE SONG
   ========================================================= */

function updatePlaylistActive() {

    const items =
        document.querySelectorAll(
            ".track"
        );

    items.forEach(
        (item, index) => {

            item.classList.toggle(
                "active",
                index === currentTrack
            );

        }
    );

}


/* =========================================================
   FAVORITE
   ========================================================= */

if (likeBtn) {

    likeBtn.addEventListener(
        "click",
        () => {

            likeBtn.classList.toggle(
                "active"
            );

            if (
                likeBtn.classList.contains(
                    "active"
                )
            ) {

                likeBtn.innerHTML =
                    "♥ <span>Favorited</span>";

            } else {

                likeBtn.innerHTML =
                    "♡ <span>Favorite</span>";

            }

        }
    );

}


/* =========================================================
   THEME TOGGLE
   ========================================================= */

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light"
            );

            if (
                document.body.classList.contains(
                    "light"
                )
            ) {

                themeToggle.textContent =
                    "☾";

            } else {

                themeToggle.textContent =
                    "☼";

            }

        }
    );

}


/* =========================================================
   ANIMATION TOGGLE
   ========================================================= */

if (visualToggle) {

    visualToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "animation-off"
            );

            if (
                document.body.classList.contains(
                    "animation-off"
                )
            ) {

                visualToggle.textContent =
                    "○";

                if (bgVideo) {

                    bgVideo.pause();

                }

            } else {

                visualToggle.textContent =
                    "◌";

                if (bgVideo) {

                    bgVideo
                        .play()
                        .catch(
                            () => {}
                        );

                }

            }

        }
    );

}


/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.code ===
            "Space"
        ) {

            event.preventDefault();

            if (isPlaying) {

                pauseTrack();

            } else {

                playTrack();

            }

        }

        if (
            event.code ===
            "ArrowRight"
        ) {

            nextTrack();

        }

        if (
            event.code ===
            "ArrowLeft"
        ) {

            previousTrack();

        }

    }
);


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(text) {

    return String(text)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   LIVE CLOCK
   ========================================================= */

function updateClock() {

    const footerTime =
        document.getElementById(
            "footerTime"
        );

    function update() {

        const now =
            new Date();

        const hours =
            String(
                now.getHours()
            ).padStart(2, "0");

        const minutes =
            String(
                now.getMinutes()
            ).padStart(2, "0");

        if (footerTime) {

            footerTime.textContent =
                `${hours}:${minutes}`;

        }

    }

    update();

    setInterval(
        update,
        1000
    );

}


/* =========================================================
   START
   ========================================================= */

init();
