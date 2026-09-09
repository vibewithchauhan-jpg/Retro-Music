document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // 100 SADABAHAR SONGS
    // =========================

    const songs = [
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


    // =========================
    // ELEMENTS
    // =========================

    const audio = document.getElementById("audio");

    const playButton = document.getElementById("playButton");
    const previousButton = document.getElementById("previousButton");
    const nextButton = document.getElementById("nextButton");

    const shuffleButton = document.getElementById("shuffleButton");
    const panelShuffle = document.getElementById("panelShuffle");

    const favoriteButton = document.getElementById("favoriteButton");
    const panelFavorite = document.getElementById("panelFavorite");

    const panelRepeat = document.getElementById("panelRepeat");

    const progress = document.getElementById("progress");
    const currentTime = document.getElementById("currentTime");
    const duration = document.getElementById("duration");

    const volumeSlider = document.getElementById("volumeSlider");
    const volumeButton = document.getElementById("volumeButton");

    const songTitle = document.getElementById("songTitle");
    const songArtist = document.getElementById("songArtist");

    const panelTitle = document.getElementById("panelTitle");
    const panelArtist = document.getElementById("panelArtist");

    const vinyl = document.querySelector(".vinyl-small");
    const bigVinyl = document.getElementById("bigVinyl");

    const playCollection = document.getElementById("playCollection");
    const randomButton = document.getElementById("randomButton");

    const sideMusicButton = document.getElementById("sideMusicButton");
    const musicPanel = document.getElementById("musicPanel");
    const closePanel = document.getElementById("closePanel");

    const infoButton = document.getElementById("infoButton");

    const themeButton = document.getElementById("themeButton");

    const aboutButton = document.getElementById("aboutButton");
    const aboutPopup = document.getElementById("aboutPopup");
    const popupClose = document.getElementById("popupClose");

    const supportButton = document.getElementById("supportButton");

    const notification = document.getElementById("notification");
    const notificationText = document.getElementById("notificationText");


    // =========================
    // PLAYER STATE
    // =========================

    let currentSong = 0;
    let isShuffle = false;
    let isRepeat = false;
    let isFavorite = false;


    // =========================
    // NOTIFICATION
    // =========================

    function showNotification(message) {

        if (!notification || !notificationText) return;

        notificationText.textContent = message;

        notification.classList.add("show");

        setTimeout(() => {
            notification.classList.remove("show");
        }, 2000);
    }


    // =========================
    // TIME FORMAT
    // =========================

    function formatTime(seconds) {

        if (!seconds || isNaN(seconds)) {
            return "0:00";
        }

        const minutes = Math.floor(seconds / 60);

        const secs = Math.floor(seconds % 60)
            .toString()
            .padStart(2, "0");

        return `${minutes}:${secs}`;
    }


    // =========================
    // LOAD SONG
    // =========================

    function loadSong(index) {

        if (!audio) return;

        currentSong = index;

        const title = songs[currentSong];

        // IMPORTANT:
        // MP3 files are in ROOT of GitHub repo
        // song1.mp3
        // song2.mp3
        // song3.mp3
        // ...
        // song100.mp3

        const fileName = `song${currentSong + 1}.mp3`;

        audio.src = fileName;

        audio.load();

        // Update title

        if (songTitle) {
            songTitle.textContent = title;
        }

        if (panelTitle) {
            panelTitle.textContent = title;
        }

        // Artist area

        const artistText = "Sadabahar Collection";

        if (songArtist) {
            songArtist.textContent = artistText;
        }

        if (panelArtist) {
            panelArtist.textContent = artistText;
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

        // Update browser title

        document.title = `${title} • Sadabahar Gaane`;
    }


    // =========================
    // PLAY SONG
    // =========================

    async function playSong() {

        if (!audio) return;

        try {

            await audio.play();

            updatePlayButton(true);

            if (vinyl) {
                vinyl.classList.add("playing");
            }

            if (bigVinyl) {
                bigVinyl.classList.add("playing");
            }

        } catch (error) {

            console.error("Audio play error:", error);

            showNotification(
                "Song file nahi mila. song1.mp3 check karo."
            );

        }
    }


    // =========================
    // PAUSE SONG
    // =========================

    function pauseSong() {

        if (!audio) return;

        audio.pause();

        updatePlayButton(false);

        if (vinyl) {
            vinyl.classList.remove("playing");
        }

        if (bigVinyl) {
            bigVinyl.classList.remove("playing");
        }
    }


    // =========================
    // PLAY / PAUSE BUTTON
    // =========================

    function togglePlay() {

        if (!audio) return;

        if (audio.paused) {
            playSong();
        } else {
            pauseSong();
        }
    }


    function updatePlayButton(isPlaying) {

        if (!playButton) return;

        const icon = playButton.querySelector("i");

        if (!icon) return;

        if (isPlaying) {

            icon.classList.remove("fa-play");
            icon.classList.add("fa-pause");

            playButton.title = "Pause";

        } else {

            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");

            playButton.title = "Play";
        }
    }


    // =========================
    // NEXT SONG
    // =========================

    function nextSong() {

        if (isShuffle) {

            let newIndex;

            do {
                newIndex = Math.floor(Math.random() * songs.length);
            } while (
                newIndex === currentSong &&
                songs.length > 1
            );

            currentSong = newIndex;

        } else {

            currentSong++;

            if (currentSong >= songs.length) {
                currentSong = 0;
            }
        }

        loadSong(currentSong);

        playSong();
    }


    // =========================
    // PREVIOUS SONG
    // =========================

    function previousSong() {

        // If song has played more than 3 seconds,
        // restart current song

        if (audio && audio.currentTime > 3) {

            audio.currentTime = 0;

            return;
        }

        currentSong--;

        if (currentSong < 0) {
            currentSong = songs.length - 1;
        }

        loadSong(currentSong);

        playSong();
    }


    // =========================
    // SHUFFLE
    // =========================

    function toggleShuffle() {

        isShuffle = !isShuffle;

        if (shuffleButton) {
            shuffleButton.classList.toggle("active", isShuffle);
        }

        if (panelShuffle) {
            panelShuffle.classList.toggle("active", isShuffle);
        }

        showNotification(
            isShuffle
                ? "Shuffle ON"
                : "Shuffle OFF"
        );
    }


    // =========================
    // REPEAT
    // =========================

    function toggleRepeat() {

        isRepeat = !isRepeat;

        if (panelRepeat) {
            panelRepeat.classList.toggle("active", isRepeat);
        }

        showNotification(
            isRepeat
                ? "Repeat ON"
                : "Repeat OFF"
        );
    }


    // =========================
    // FAVORITE
    // =========================

    function updateFavoriteButtons() {

        const buttons = [
            favoriteButton,
            panelFavorite
        ];

        buttons.forEach(button => {

            if (!button) return;

            const icon = button.querySelector("i");

            if (!icon) return;

            if (isFavorite) {

                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");

                button.classList.add("active");

            } else {

                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");

                button.classList.remove("active");
            }
        });
    }


    function toggleFavorite() {

        isFavorite = !isFavorite;

        updateFavoriteButtons();

        showNotification(
            isFavorite
                ? "Added to Favorites"
                : "Removed from Favorites"
        );
    }


    // =========================
    // PROGRESS
    // =========================

    if (audio) {

        audio.addEventListener("loadedmetadata", () => {

            if (duration) {
                duration.textContent =
                    formatTime(audio.duration);
            }

            if (progress) {
                progress.max = 100;
            }
        });


        audio.addEventListener("timeupdate", () => {

            if (!audio.duration) return;

            const percent =
                (audio.currentTime / audio.duration) * 100;

            if (progress) {
                progress.value = percent;
            }

            if (currentTime) {
                currentTime.textContent =
                    formatTime(audio.currentTime);
            }
        });


        audio.addEventListener("ended", () => {

            if (isRepeat) {

                audio.currentTime = 0;

                playSong();

            } else {

                nextSong();
            }
        });


        audio.addEventListener("play", () => {

            updatePlayButton(true);

            if (vinyl) {
                vinyl.classList.add("playing");
            }

            if (bigVinyl) {
                bigVinyl.classList.add("playing");
            }
        });


        audio.addEventListener("pause", () => {

            updatePlayButton(false);

            if (vinyl) {
                vinyl.classList.remove("playing");
            }

            if (bigVinyl) {
                bigVinyl.classList.remove("playing");
            }
        });


        audio.addEventListener("error", () => {

            console.error(
                "Could not load:",
                audio.src
            );

            showNotification(
                `song${currentSong + 1}.mp3 load nahi hua`
            );
        });
    }


    // =========================
    // PROGRESS SLIDER
    // =========================

    if (progress) {

        progress.addEventListener("input", () => {

            if (!audio || !audio.duration) return;

            audio.currentTime =
                (progress.value / 100) * audio.duration;
        });
    }


    // =========================
    // VOLUME
    // =========================

    if (audio) {

        audio.volume = 0.8;
    }


    if (volumeSlider) {

        volumeSlider.addEventListener("input", () => {

            const volume =
                Number(volumeSlider.value) / 100;

            if (audio) {
                audio.volume = volume;
            }

            if (volumeButton) {

                const icon =
                    volumeButton.querySelector("i");

                if (icon) {

                    if (volume === 0) {

                        icon.className =
                            "fa-solid fa-volume-xmark";

                    } else if (volume < 0.5) {

                        icon.className =
                            "fa-solid fa-volume-low";

                    } else {

                        icon.className =
                            "fa-solid fa-volume-high";
                    }
                }
            }
        });
    }


    // =========================
    // MUTE
    // =========================

    if (volumeButton) {

        volumeButton.addEventListener("click", () => {

            if (!audio) return;

            audio.muted = !audio.muted;

            const icon =
                volumeButton.querySelector("i");

            if (!icon) return;

            if (audio.muted) {

                icon.className =
                    "fa-solid fa-volume-xmark";

            } else {

                icon.className =
                    "fa-solid fa-volume-high";
            }
        });
    }


    // =========================
    // PLAYER BUTTONS
    // =========================

    if (playButton) {
        playButton.addEventListener(
            "click",
            togglePlay
        );
    }


    if (nextButton) {
        nextButton.addEventListener(
            "click",
            nextSong
        );
    }


    if (previousButton) {
        previousButton.addEventListener(
            "click",
            previousSong
        );
    }


    if (shuffleButton) {
        shuffleButton.addEventListener(
            "click",
            toggleShuffle
        );
    }


    if (panelShuffle) {
        panelShuffle.addEventListener(
            "click",
            toggleShuffle
        );
    }


    if (panelRepeat) {
        panelRepeat.addEventListener(
            "click",
            toggleRepeat
        );
    }


    if (favoriteButton) {
        favoriteButton.addEventListener(
            "click",
            toggleFavorite
        );
    }


    if (panelFavorite) {
        panelFavorite.addEventListener(
            "click",
            toggleFavorite
        );
    }


    // =========================
    // PLAY MUSIC BUTTON
    // =========================

    if (playCollection) {

        playCollection.addEventListener(
            "click",
            () => {

                loadSong(currentSong);

                playSong();
            }
        );
    }


    // =========================
    // SURPRISE ME
    // =========================

    if (randomButton) {

        randomButton.addEventListener(
            "click",
            () => {

                currentSong =
                    Math.floor(
                        Math.random() * songs.length
                    );

                loadSong(currentSong);

                playSong();

                showNotification(
                    `Playing #${currentSong + 1}`
                );
            }
        );
    }


    // =========================
    // NOW PLAYING PANEL
    // =========================

    if (infoButton && musicPanel) {

        infoButton.addEventListener(
            "click",
            () => {

                musicPanel.classList.toggle("open");
            }
        );
    }


    if (sideMusicButton && musicPanel) {

        sideMusicButton.addEventListener(
            "click",
            () => {

                musicPanel.classList.add("open");
            }
        );
    }


    if (closePanel && musicPanel) {

        closePanel.addEventListener(
            "click",
            () => {

                musicPanel.classList.remove("open");
            }
        );
    }


    // =========================
    // ABOUT
    // =========================

    if (aboutButton && aboutPopup) {

        aboutButton.addEventListener(
            "click",
            () => {

                aboutPopup.classList.add("show");
            }
        );
    }


    if (popupClose && aboutPopup) {

        popupClose.addEventListener(
            "click",
            () => {

                aboutPopup.classList.remove("show");
            }
        );
    }


    if (aboutPopup) {

        aboutPopup.addEventListener(
            "click",
            event => {

                if (event.target === aboutPopup) {

                    aboutPopup.classList.remove("show");
                }
            }
        );
    }


    // =========================
    // SUPPORT
    // =========================

    if (supportButton) {

        supportButton.addEventListener(
            "click",
            () => {

                showNotification(
                    "Thank you for supporting Sadabahar ❤️"
                );
            }
        );
    }


    // =========================
    // THEME
    // =========================

    if (themeButton) {

        themeButton.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "light-theme"
                );

                showNotification(
                    document.body.classList.contains(
                        "light-theme"
                    )
                        ? "Light Theme"
                        : "Dark Theme"
                );
            }
        );
    }


    // =========================
    // KEYBOARD CONTROLS
    // =========================

    document.addEventListener(
        "keydown",
        event => {

            // Don't interfere while typing

            if (
                event.target.tagName === "INPUT" ||
                event.target.tagName === "TEXTAREA"
            ) {
                return;
            }


            // Space = Play/Pause

            if (event.code === "Space") {

                event.preventDefault();

                togglePlay();
            }


            // Arrow Right = Next

            if (event.code === "ArrowRight") {

                nextSong();
            }


            // Arrow Left = Previous

            if (event.code === "ArrowLeft") {

                previousSong();
            }
        }
    );


    // =========================
    // START FIRST SONG
    // =========================

    loadSong(0);

    updateFavoriteButtons();

    console.log(
        "Sadabahar Music Player Loaded Successfully"
    );

    console.log(
        `100 songs available`
    );

});
