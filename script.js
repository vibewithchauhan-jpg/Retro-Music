/* =====================================================
   SADABAHAR GAANE
   100 SONGS
===================================================== */


/* =====================================================
   SONG DATABASE
===================================================== */

const songs = [

    {
        title: "Tujhe Dekha To Ye Jana Sanam",
        artist: "Dilwale Dulhania Le Jayenge (1995)",
        file: "songs/song1.mp3"
    },

    {
        title: "Dheere Dheere Se Meri Zindagi Mein Aana",
        artist: "Aashiqui (1990)",
        file: "songs/song2.mp3"
    },

    {
        title: "Mera Dil Bhi Kitna Pagal Hai",
        artist: "Saajan (1991)",
        file: "songs/song3.mp3"
    },

    {
        title: "Pehla Nasha",
        artist: "Jo Jeeta Wohi Sikandar (1992)",
        file: "songs/song4.mp3"
    },

    {
        title: "Aisi Deewangi",
        artist: "Deewana (1992)",
        file: "songs/song5.mp3"
    },

    {
        title: "Teri Mohabbat Ne Dil",
        artist: "Rang (1993)",
        file: "songs/song6.mp3"
    },

    {
        title: "Baazigar O Baazigar",
        artist: "Baazigar (1993)",
        file: "songs/song7.mp3"
    },

    {
        title: "Tu Cheez Badi Hai Mast Mast",
        artist: "Mohra (1994)",
        file: "songs/song8.mp3"
    },

    {
        title: "Ek Ladki Ko Dekha",
        artist: "1942: A Love Story (1994)",
        file: "songs/song9.mp3"
    },

    {
        title: "Aaye Ho Meri Zindagi Mein",
        artist: "Raja Hindustani (1996)",
        file: "songs/song10.mp3"
    },

    {
        title: "Nazar Ke Samne",
        artist: "Aashiqui (1990)",
        file: "songs/song11.mp3"
    },

    {
        title: "Jiye To Jiye Kaise",
        artist: "Saajan (1991)",
        file: "songs/song12.mp3"
    },

    {
        title: "Sochenge Tumhe Pyar",
        artist: "Deewana (1992)",
        file: "songs/song13.mp3"
    },

    {
        title: "Saat Samundar Paar",
        artist: "Vishwatma (1992)",
        file: "songs/song14.mp3"
    },

    {
        title: "Kahin Mujhe Pyar Hua To Nahin",
        artist: "Rang (1993)",
        file: "songs/song15.mp3"
    },

    {
        title: "Ye Kaali Kaali Aankhen",
        artist: "Baazigar (1993)",
        file: "songs/song16.mp3"
    },

    {
        title: "Tere Dar Pe Sanam",
        artist: "Phir Teri Kahani Yaad Aayee (1993)",
        file: "songs/song17.mp3"
    },

    {
        title: "Chura Ke Dil Mera",
        artist: "Main Khiladi Tu Anari (1994)",
        file: "songs/song18.mp3"
    },

    {
        title: "Pehla Pehla Pyar Hai",
        artist: "Hum Aapke Hain Koun..! (1994)",
        file: "songs/song19.mp3"
    },

    {
        title: "Pardesi Pardesi",
        artist: "Raja Hindustani (1996)",
        file: "songs/song20.mp3"
    },

    {
        title: "Tu Meri Zindagi Hai",
        artist: "Aashiqui (1990)",
        file: "songs/song21.mp3"
    },

    {
        title: "Bahut Pyar Karte Hain",
        artist: "Saajan (1991)",
        file: "songs/song22.mp3"
    },

    {
        title: "Dil Hai Ke Manta Nahin",
        artist: "Dil Hai Ke Manta Nahin (1991)",
        file: "songs/song23.mp3"
    },

    {
        title: "Yahan Ke Hum Sikandar",
        artist: "Jo Jeeta Wohi Sikandar (1992)",
        file: "songs/song24.mp3"
    },

    {
        title: "Tumhein Dekhen Meri Aankhen",
        artist: "Rang (1993)",
        file: "songs/song25.mp3"
    },

    {
        title: "Chhupana Bhi Nahin Aata",
        artist: "Baazigar (1993)",
        file: "songs/song26.mp3"
    },

    {
        title: "Jab Se Tumko Dekha Hai Sanam",
        artist: "Damini (1993)",
        file: "songs/song27.mp3"
    },

    {
        title: "Didi Tera Devar Deewana",
        artist: "Hum Aapke Hain Koun..! (1994)",
        file: "songs/song28.mp3"
    },

    {
        title: "Tip Tip Barsa Paani",
        artist: "Mohra (1994)",
        file: "songs/song29.mp3"
    },

    {
        title: "Do Dil Mil Rahe Hain",
        artist: "Pardes (1997)",
        file: "songs/song30.mp3"
    },

    {
        title: "Ab Tere Bin",
        artist: "Aashiqui (1990)",
        file: "songs/song31.mp3"
    },

    {
        title: "Tumse Milne Ki Tamanna Hai",
        artist: "Saajan (1991)",
        file: "songs/song32.mp3"
    },

    {
        title: "O Mere Sapno Ke Saudagar",
        artist: "Dil Hai Ke Manta Nahin (1991)",
        file: "songs/song33.mp3"
    },

    {
        title: "Koi Na Koi Chahiye",
        artist: "Deewana (1992)",
        file: "songs/song34.mp3"
    },

    {
        title: "Mere Pyar Ka Hisaab",
        artist: "Rang (1993)",
        file: "songs/song35.mp3"
    },

    {
        title: "Kitabein Bahut Si",
        artist: "Baazigar (1993)",
        file: "songs/song36.mp3"
    },

    {
        title: "Tu Hi Re",
        artist: "Bombay (1995)",
        file: "songs/song37.mp3"
    },

    {
        title: "Aayega Maza Ab Barsaat Ka",
        artist: "Andaaz (2003)",
        file: "songs/song38.mp3"
    },

    {
        title: "Mujhse Juda Hokar",
        artist: "Hum Aapke Hain Koun..! (1994)",
        file: "songs/song39.mp3"
    },

    {
        title: "Main Koi Aisa Geet Gaoon",
        artist: "Yes Boss (1997)",
        file: "songs/song40.mp3"
    },

    {
        title: "Main Duniya Bhula Dunga",
        artist: "Aashiqui (1990)",
        file: "songs/song41.mp3"
    },

    {
        title: "Tu Shayar Hai",
        artist: "Saajan (1991)",
        file: "songs/song42.mp3"
    },

    {
        title: "Adayein Bhi Hain",
        artist: "Dil Hai Ke Manta Nahin (1991)",
        file: "songs/song43.mp3"
    },

    {
        title: "Tu Na Ja Mere Badshah",
        artist: "Khuda Gawah (1992)",
        file: "songs/song44.mp3"
    },

    {
        title: "Coming Coming Coming",
        artist: "Rang (1993)",
        file: "songs/song45.mp3"
    },

    {
        title: "Nayak Nahin Khalnayak Hoon Main",
        artist: "Khal Nayak (1993)",
        file: "songs/song46.mp3"
    },

    {
        title: "Ghoonghat Ki Aad Se",
        artist: "Hum Hain Rahi Pyar Ke (1993)",
        file: "songs/song47.mp3"
    },

    {
        title: "Wah Wah Ramji",
        artist: "Hum Aapke Hain Koun..! (1994)",
        file: "songs/song48.mp3"
    },

    {
        title: "Pyar Hua Chupke Se",
        artist: "1942: A Love Story (1994)",
        file: "songs/song49.mp3"
    },

    {
        title: "Chand Taare",
        artist: "Yes Boss (1997)",
        file: "songs/song50.mp3"
    },

    {
        title: "Sanson Ki Zarurat Hai Jaise",
        artist: "Aashiqui (1990)",
        file: "songs/song51.mp3"
    },

    {
        title: "Dekha Hai Pehli Baar",
        artist: "Saajan (1991)",
        file: "songs/song52.mp3"
    },

    {
        title: "Kabhi Main Kahoon",
        artist: "Lamhe (1991)",
        file: "songs/song53.mp3"
    },

    {
        title: "Teri Umeed Tera Intezaar",
        artist: "Deewana (1992)",
        file: "songs/song54.mp3"
    },

    {
        title: "Dil Cheer Ke Dekh Tera Hi Naam Hoga",
        artist: "Rang (1993)",
        file: "songs/song55.mp3"
    },

    {
        title: "Ae Mere Humsafar",
        artist: "Baazigar (1993)",
        file: "songs/song56.mp3"
    },

    {
        title: "Paalki Mein Hoke Sawar Chali Re",
        artist: "Khal Nayak (1993)",
        file: "songs/song57.mp3"
    },

    {
        title: "Joote De Do Paise Le Lo",
        artist: "Hum Aapke Hain Koun..! (1994)",
        file: "songs/song58.mp3"
    },

    {
        title: "Kuchh Na Kaho",
        artist: "1942: A Love Story (1994)",
        file: "songs/song59.mp3"
    },

    {
        title: "Aankhon Ki Gustakhiyan",
        artist: "Hum Dil De Chuke Sanam (1999)",
        file: "songs/song60.mp3"
    },

    {
        title: "Jaan-E-Jigar Jaaneman",
        artist: "Aashiqui (1990)",
        file: "songs/song61.mp3"
    },

    {
        title: "Hum Pyar Karne Wale",
        artist: "Dil (1990)",
        file: "songs/song62.mp3"
    },

    {
        title: "Kaise Mijaz Aapka",
        artist: "Dil Hai Ke Manta Nahin (1991)",
        file: "songs/song63.mp3"
    },

    {
        title: "Roothkar Humse Kabhi",
        artist: "Jo Jeeta Wohi Sikandar (1992)",
        file: "songs/song64.mp3"
    },

    {
        title: "Dil Cheer Ke Dekh Tera Hi Naam Hoga (Female)",
        artist: "Rang (1993)",
        file: "songs/song65.mp3"
    },

    {
        title: "Aaja Sajan Aaja",
        artist: "Khal Nayak (1993)",
        file: "songs/song66.mp3"
    },

    {
        title: "Ae Kaash Kahin Aisa Hota",
        artist: "Mohra (1994)",
        file: "songs/song67.mp3"
    },

    {
        title: "Yeh Mausam Ka Jaadu Hai Mitwa",
        artist: "Hum Aapke Hain Koun..! (1994)",
        file: "songs/song68.mp3"
    },

    {
        title: "Aaj Main Upar",
        artist: "Khamoshi: The Musical (1996)",
        file: "songs/song69.mp3"
    },

    {
        title: "Meri Mehbooba",
        artist: "Pardes (1997)",
        file: "songs/song70.mp3"
    },

    {
        title: "Mujhe Neend Na Aaye",
        artist: "Dil (1990)",
        file: "songs/song71.mp3"
    },

    {
        title: "Humne Ghar Chhoda Hai",
        artist: "Dil (1990)",
        file: "songs/song72.mp3"
    },

    {
        title: "Megha Re Megha",
        artist: "Lamhe (1991)",
        file: "songs/song73.mp3"
    },

    {
        title: "Deewana Mujhsa Nahin",
        artist: "Khuda Gawah (1992)",
        file: "songs/song74.mp3"
    },

    {
        title: "Hum Tum Picture Dekh Rahe Ho",
        artist: "Rang (1993)",
        file: "songs/song75.mp3"
    },

    {
        title: "Ye Dil Deewana",
        artist: "Pardes (1997)",
        file: "songs/song76.mp3"
    },

    {
        title: "Dil To Pagal Hai",
        artist: "Dil To Pagal Hai (1997)",
        file: "songs/song77.mp3"
    },

    {
        title: "Bholi Si Surat",
        artist: "Dil To Pagal Hai (1997)",
        file: "songs/song78.mp3"
    },

    {
        title: "Aankhon Se Tune Ye Kya Keh Diya",
        artist: "Ghulam (1998)",
        file: "songs/song79.mp3"
    },

    {
        title: "Taal Se Taal Mila",
        artist: "Taal (1999)",
        file: "songs/song80.mp3"
    },

    {
        title: "Khambe Jaisi Khadi Hai",
        artist: "Dil (1990)",
        file: "songs/song81.mp3"
    },

    {
        title: "Aana Mere Pyar Ko",
        artist: "Kabhi Haan Kabhi Naa (1994)",
        file: "songs/song82.mp3"
    },

    {
        title: "Ae Kash Ke Hum",
        artist: "Kabhi Haan Kabhi Naa (1994)",
        file: "songs/song83.mp3"
    },

    {
        title: "Ghar Se Nikalte Hi",
        artist: "Papa Kehte Hain (1996)",
        file: "songs/song84.mp3"
    },

    {
        title: "Neend Churayi Meri",
        artist: "Ishq (1997)",
        file: "songs/song85.mp3"
    },

    {
        title: "Koi Ladki Hai",
        artist: "Dil To Pagal Hai (1997)",
        file: "songs/song86.mp3"
    },

    {
        title: "Ae Ajnabi",
        artist: "Dil Se.. (1998)",
        file: "songs/song87.mp3"
    },

    {
        title: "Satrangi Re",
        artist: "Dil Se.. (1998)",
        file: "songs/song88.mp3"
    },

    {
        title: "Jiya Jale",
        artist: "Dil Se.. (1998)",
        file: "songs/song89.mp3"
    },

    {
        title: "Ramta Jogi",
        artist: "Taal (1999)",
        file: "songs/song90.mp3"
    },

    {
        title: "Poocho Zara Poocho",
        artist: "Raja Hindustani (1996)",
        file: "songs/song91.mp3"
    },

    {
        title: "Bahon Ke Darmiyan",
        artist: "Khamoshi: The Musical (1996)",
        file: "songs/song92.mp3"
    },

    {
        title: "Jaadu Hai Tera Hi Jaadu",
        artist: "Ghulam (1998)",
        file: "songs/song93.mp3"
    },

    {
        title: "Aati Kya Khandala",
        artist: "Ghulam (1998)",
        file: "songs/song94.mp3"
    },

    {
        title: "Dil Se Re",
        artist: "Dil Se.. (1998)",
        file: "songs/song95.mp3"
    },

    {
        title: "Chand Chhupa Badal Mein",
        artist: "Hum Dil De Chuke Sanam (1999)",
        file: "songs/song96.mp3"
    },

    {
        title: "Tadap Tadap Ke",
        artist: "Hum Dil De Chuke Sanam (1999)",
        file: "songs/song97.mp3"
    },

    {
        title: "Dholi Taro Dhol Baaje",
        artist: "Hum Dil De Chuke Sanam (1999)",
        file: "songs/song98.mp3"
    },

    {
        title: "Mhare Hiwda Mein Naache Mor",
        artist: "Hum Saath-Saath Hain (1999)",
        file: "songs/song99.mp3"
    },

    {
        title: "Pehli Pehli Baar Mohabbat Ki Hai",
        artist: "Sirf Tum (1999)",
        file: "songs/song100.mp3"
    }

];


/* =====================================================
   ELEMENTS
===================================================== */

const audio =
    document.getElementById("audio");

const playButton =
    document.getElementById("playButton");

const previousButton =
    document.getElementById("previousButton");

const nextButton =
    document.getElementById("nextButton");

const volumeButton =
    document.getElementById("volumeButton");

const shuffleButton =
    document.getElementById("shuffleButton");

const progress =
    document.getElementById("progress");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");

const volumeSlider =
    document.getElementById("volumeSlider");

const songTitle =
    document.getElementById("songTitle");

const songArtist =
    document.getElementById("songArtist");

const panelTitle =
    document.getElementById("panelTitle");

const panelArtist =
    document.getElementById("panelArtist");

const favoriteButton =
    document.getElementById("favoriteButton");

const panelFavorite =
    document.getElementById("panelFavorite");

const panelShuffle =
    document.getElementById("panelShuffle");

const panelRepeat =
    document.getElementById("panelRepeat");

const vinyl =
    document.querySelector(".vinyl-small");

const bigVinyl =
    document.getElementById("bigVinyl");

const musicPanel =
    document.getElementById("musicPanel");

const sideMusicButton =
    document.getElementById("sideMusicButton");

const closePanel =
    document.getElementById("closePanel");

const aboutButton =
    document.getElementById("aboutButton");

const aboutPopup =
    document.getElementById("aboutPopup");

const popupClose =
    document.getElementById("popupClose");

const themeButton =
    document.getElementById("themeButton");

const playCollection =
    document.getElementById("playCollection");

const randomButton =
    document.getElementById("randomButton");

const infoButton =
    document.getElementById("infoButton");

const supportButton =
    document.getElementById("supportButton");

const notification =
    document.getElementById("notification");

const notificationText =
    document.getElementById("notificationText");


/* =====================================================
   VARIABLES
===================================================== */

let currentSong = 0;

let isPlaying = false;

let isShuffle = false;

let isRepeat = false;

let isFavorite = false;

let savedVolume = 0.8;

let notificationTimer;


/* =====================================================
   INITIAL VOLUME
===================================================== */

audio.volume = 0.8;


/* =====================================================
   FORMAT TIME
===================================================== */

function formatTime(seconds) {

    if (
        !seconds ||
        isNaN(seconds)
    ) {

        return "0:00";

    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    const secondsLeft =
        Math.floor(
            seconds % 60
        );


    return (

        minutes +
        ":" +
        String(
            secondsLeft
        ).padStart(
            2,
            "0"
        )

    );

}


/* =====================================================
   LOAD SONG
===================================================== */

function loadSong(index) {

    if (!songs.length) {

        return;

    }


    if (index < 0) {

        index =
            songs.length - 1;

    }


    if (index >= songs.length) {

        index = 0;

    }


    currentSong =
        index;


    const song =
        songs[currentSong];


    audio.src =
        song.file;


    songTitle.textContent =
        song.title;


    songArtist.textContent =
        song.artist;


    panelTitle.textContent =
        song.title;


    panelArtist.textContent =
        song.artist;


    progress.value =
        0;


    currentTime.textContent =
        "0:00";


    duration.textContent =
        "0:00";


    updateFavoriteUI();

}


/* =====================================================
   PLAY
===================================================== */

function playSong() {


    if (!songs.length) {

        showNotification(
            "No songs available."
        );

        return;

    }


    audio
        .play()
        .then(() => {


            isPlaying =
                true;


            updatePlayButton();


            vinyl.classList.add(
                "playing"
            );


            bigVinyl.classList.add(
                "playing"
            );


        })
        .catch(() => {


            showNotification(

                "song1.mp3 se song100.mp3 tak files check karo."

            );


        });

}


/* =====================================================
   PAUSE
===================================================== */

function pauseSong() {

    audio.pause();


    isPlaying =
        false;


    updatePlayButton();


    vinyl.classList.remove(
        "playing"
    );


    bigVinyl.classList.remove(
        "playing"
    );

}


/* =====================================================
   UPDATE PLAY BUTTON
===================================================== */

function updatePlayButton() {

    playButton.innerHTML =

        isPlaying

            ?

            '<i class="fa-solid fa-pause"></i>'

            :

            '<i class="fa-solid fa-play"></i>';

}


/* =====================================================
   PLAY / PAUSE
===================================================== */

playButton.addEventListener(

    "click",

    () => {

        if (isPlaying) {

            pauseSong();

        }

        else {

            playSong();

        }

    }

);


/* =====================================================
   NEXT
===================================================== */

function nextSong() {


    if (!songs.length) {

        return;

    }


    if (isShuffle) {


        let randomIndex;


        do {


            randomIndex =

                Math.floor(

                    Math.random() *
                    songs.length

                );


        }

        while (

            randomIndex ===
            currentSong &&
            songs.length > 1

        );


        currentSong =
            randomIndex;

    }

    else {


        currentSong++;


        if (
            currentSong >=
            songs.length
        ) {

            currentSong = 0;

        }

    }


    loadSong(
        currentSong
    );


    playSong();

}


/* =====================================================
   PREVIOUS
===================================================== */

function previousSong() {


    if (!songs.length) {

        return;

    }


    currentSong--;


    if (
        currentSong < 0
    ) {

        currentSong =
            songs.length - 1;

    }


    loadSong(
        currentSong
    );


    playSong();

}


/* =====================================================
   BUTTONS
===================================================== */

nextButton.addEventListener(
    "click",
    nextSong
);


previousButton.addEventListener(
    "click",
    previousSong
);


/* =====================================================
   PROGRESS UPDATE
===================================================== */

audio.addEventListener(

    "timeupdate",

    () => {


        if (!audio.duration) {

            return;

        }


        const percentage =

            (
                audio.currentTime /
                audio.duration
            ) *
            100;


        progress.value =
            percentage;


        currentTime.textContent =

            formatTime(
                audio.currentTime
            );

    }

);


/* =====================================================
   DURATION
===================================================== */

audio.addEventListener(

    "loadedmetadata",

    () => {


        duration.textContent =

            formatTime(
                audio.duration
            );

    }

);


/* =====================================================
   SEEK
===================================================== */

progress.addEventListener(

    "input",

    () => {


        if (!audio.duration) {

            return;

        }


        audio.currentTime =

            (
                progress.value /
                100
            ) *
            audio.duration;

    }

);


/* =====================================================
   VOLUME SLIDER
===================================================== */

volumeSlider.addEventListener(

    "input",

    () => {


        const volume =

            Number(
                volumeSlider.value
            ) / 100;


        audio.volume =
            volume;


        if (volume > 0) {

            savedVolume =
                volume;

        }


        updateVolumeIcon();

    }

);


/* =====================================================
   VOLUME BUTTON
===================================================== */

volumeButton.addEventListener(

    "click",

    () => {


        if (audio.volume > 0) {


            savedVolume =
                audio.volume;


            audio.volume =
                0;


            volumeSlider.value =
                0;

        }

        else {


            audio.volume =
                savedVolume;


            volumeSlider.value =
                savedVolume * 100;

        }


        updateVolumeIcon();

    }

);


/* =====================================================
   VOLUME ICON
===================================================== */

function updateVolumeIcon() {


    if (
        audio.volume === 0
    ) {


        volumeButton.innerHTML =

            '<i class="fa-solid fa-volume-xmark"></i>';

    }

    else if (
        audio.volume < .5
    ) {


        volumeButton.innerHTML =

            '<i class="fa-solid fa-volume-low"></i>';

    }

    else {


        volumeButton.innerHTML =

            '<i class="fa-solid fa-volume-high"></i>';

    }

}


/* =====================================================
   SHUFFLE
===================================================== */

function toggleShuffle() {


    isShuffle =
        !isShuffle;


    shuffleButton.classList.toggle(
        "active",
        isShuffle
    );


    panelShuffle.classList.toggle(
        "active",
        isShuffle
    );


    showNotification(

        isShuffle
            ? "Shuffle ON"
            : "Shuffle OFF"

    );

}


shuffleButton.addEventListener(
    "click",
    toggleShuffle
);


panelShuffle.addEventListener(
    "click",
    toggleShuffle
);


/* =====================================================
   REPEAT
===================================================== */

function toggleRepeat() {


    isRepeat =
        !isRepeat;


    audio.loop =
        isRepeat;


    panelRepeat.classList.toggle(
        "active",
        isRepeat
    );


    showNotification(

        isRepeat
            ? "Repeat ON"
            : "Repeat OFF"

    );

}


panelRepeat.addEventListener(
    "click",
    toggleRepeat
);


/* =====================================================
   FAVORITE
===================================================== */

function toggleFavorite() {


    isFavorite =
        !isFavorite;


    updateFavoriteUI();


    showNotification(

        isFavorite
            ? "Added to Favorites ❤️"
            : "Removed from Favorites"

    );

}


function updateFavoriteUI() {


    favoriteButton.classList.toggle(
        "active",
        isFavorite
    );


    panelFavorite.classList.toggle(
        "active",
        isFavorite
    );


    favoriteButton.innerHTML =

        isFavorite

            ?

            '<i class="fa-solid fa-heart"></i>'

            :

            '<i class="fa-regular fa-heart"></i>';


    panelFavorite.innerHTML =

        isFavorite

            ?

            '<i class="fa-solid fa-heart"></i>'

            :

            '<i class="fa-regular fa-heart"></i>';

}


favoriteButton.addEventListener(
    "click",
    toggleFavorite
);


panelFavorite.addEventListener(
    "click",
    toggleFavorite
);


/* =====================================================
   SONG ENDED
===================================================== */

audio.addEventListener(

    "ended",

    () => {


        if (!isRepeat) {

            nextSong();

        }

    }

);


/* =====================================================
   RANDOM SONG
===================================================== */

randomButton.addEventListener(

    "click",

    () => {


        if (!songs.length) {

            return;

        }


        let randomIndex;


        do {


            randomIndex =

                Math.floor(

                    Math.random() *
                    songs.length

                );


        }

        while (

            randomIndex ===
            currentSong &&
            songs.length > 1

        );


        loadSong(
            randomIndex
        );


        playSong();


        showNotification(
            "Random song selected 🎵"
        );

    }

);


/* =====================================================
   PLAY FIRST SONG
===================================================== */

playCollection.addEventListener(

    "click",

    () => {


        loadSong(0);

        playSong();

    }

);


/* =====================================================
   SIDE PANEL
===================================================== */

sideMusicButton.addEventListener(

    "click",

    () => {


        musicPanel.classList.add(
            "open"
        );

    }

);


infoButton.addEventListener(

    "click",

    () => {


        musicPanel.classList.add(
            "open"
        );

    }

);


closePanel.addEventListener(

    "click",

    () => {


        musicPanel.classList.remove(
            "open"
        );

    }

);


/* =====================================================
   ABOUT
===================================================== */

aboutButton.addEventListener(

    "click",

    () => {


        aboutPopup.classList.add(
            "show"
        );

    }

);


popupClose.addEventListener(

    "click",

    () => {


        aboutPopup.classList.remove(
            "show"
        );

    }

);


aboutPopup.addEventListener(

    "click",

    event => {


        if (
            event.target ===
            aboutPopup
        ) {


            aboutPopup.classList.remove(
                "show"
            );


        }

    }

);


/* =====================================================
   SUPPORT
===================================================== */

supportButton.addEventListener(

    "click",

    () => {


        showNotification(
            "Thank you ❤️"
        );

    }

);


/* =====================================================
   THEME
===================================================== */

themeButton.addEventListener(

    "click",

    () => {


        document.body.classList.toggle(
            "light-theme"
        );


        const lightMode =

            document.body.classList.contains(
                "light-theme"
            );


        themeButton.innerHTML =

            lightMode

                ?

                '<i class="fa-solid fa-moon"></i> Dark Theme'

                :

                '<i class="fa-solid fa-wand-magic-sparkles"></i> Change Theme';


        showNotification(

            lightMode

                ?

                "Light Theme"

                :

                "Cinematic Theme"

        );

    }

);


/* =====================================================
   NOTIFICATION
===================================================== */

function showNotification(message) {


    notificationText.textContent =
        message;


    notification.classList.add(
        "show"
    );


    clearTimeout(
        notificationTimer
    );


    notificationTimer =

        setTimeout(

            () => {


                notification.classList.remove(
                    "show"
                );


            },

            2500

        );

}


/* =====================================================
   KEYBOARD CONTROLS
===================================================== */

document.addEventListener(

    "keydown",

    event => {


        if (
            event.target.tagName ===
            "INPUT"
        ) {

            return;

        }


        /* SPACE */

        if (
            event.code ===
            "Space"
        ) {


            event.preventDefault();


            if (isPlaying) {

                pauseSong();

            }

            else {

                playSong();

            }

        }


        /* RIGHT ARROW */

        if (
            event.code ===
            "ArrowRight"
        ) {

            nextSong();

        }


        /* LEFT ARROW */

        if (
            event.code ===
            "ArrowLeft"
        ) {

            previousSong();

        }

    }

);


/* =====================================================
   INITIALIZE
===================================================== */

loadSong(0);

updateVolumeIcon();


/* =====================================================
   WELCOME
===================================================== */

setTimeout(

    () => {


        showNotification(

            "Sadabahar Gaane mein aapka swagat hai ❤️"

        );


    },

    900

);