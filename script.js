//.............For  SongList and Navbar............. 

const togglIcon = document.getElementById("tgl");
const songCategoryName = document.querySelector(".songName-list"); 
if (togglIcon.classList.contains("fa-bars")) {
    songCategoryName.classList.add("hide");
}
togglIcon.addEventListener("click", () => {
    if (togglIcon.classList.contains("fa-bars")) {
        togglIcon.classList.remove("fa-bars");
        togglIcon.classList.add("fa-xmark");
        songCategoryName.classList.remove("hide");
        songCategoryName.classList.add("show");
    }
    else {
        songCategoryName.classList.remove("show");
        songCategoryName.classList.add("hide");
        togglIcon.classList.add("fa-bars");
        togglIcon.classList.remove("fa-xmark");
    }
})

//.............For Corousel effect ............. 

const carousel = document.querySelector('.wrapper');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
let currentItemIndex = 0;
let autoRotateInterval;

function startAutoRotate() {
    autoRotateInterval = setInterval(nextItem, 3000);
}

function stopAutoRotate() {
    clearInterval(autoRotateInterval);
}

function nextItem() {
    stopAutoRotate();
    currentItemIndex = (currentItemIndex + 1) % carousel.children.length;
    const carouselItems = carousel.children;
    const carouselItem = carouselItems[currentItemIndex];
    carousel.appendChild(carouselItem);
    startAutoRotate();
}
function prevItem() {
    currentItemIndex = (currentItemIndex - 1 + carousel.children.length) % carousel.children.length;
    const carouselItems = carousel.children;
    const carouselItem = carouselItems[currentItemIndex];
    carousel.appendChild(carouselItem);
}


nextBtn.addEventListener("click", nextItem);
prevBtn.addEventListener("click", prevItem);
carousel.addEventListener("mouseover", stopAutoRotate);
carousel.addEventListener("mouseout", startAutoRotate);
// Start auto-rotation initially
startAutoRotate();

//.............Corousel ends  ............. 


// for music

//  ..................Source information array of objects................
const newBollywood = [
  { songTitle: "Dehleez pe mere dil ki", filePath: "./NewBollywood/1.mp3", coverImg: "./NewBollywoodCover/1.jpg" },
  { songTitle: "Malang (Title Track)", filePath: "./NewBollywood/2.mp3", coverImg: "./NewBollywoodCover/2.jpg" },
  { songTitle: "Na Hoke Bhi Kareeb Tu", filePath: "./NewBollywood/3.mp3", coverImg: "./NewBollywoodCover/3.jpg" },
  { songTitle: "Jo Tu Na Mila", filePath: "./NewBollywood/4.mp3", coverImg: "./NewBollywoodCover/4.jpg" },
  { songTitle: "Kuch is Tarah", filePath: "./NewBollywood/5.mp3", coverImg: "./NewBollywoodCover/5.jpg" },
  { songTitle: "Khamosiyaan", filePath: "./NewBollywood/6.mp3", coverImg: "./NewBollywoodCover/6.jpg" },
  { songTitle: "Chal Ghar Chalen", filePath: "./NewBollywood/7.mp3", coverImg: "./NewBollywoodCover/7.jpg" },
  { songTitle: "Sukriya-Sadak-2", filePath: "./NewBollywood/8.mp3", coverImg: "./NewBollywoodCover/8.jpg" },
  { songTitle: "Muskurane ki wajah tum ho", filePath: "./NewBollywood/9.mp3", coverImg: "./NewBollywoodCover/9.jpg" },
  { songTitle: "Main Phir Bhi Tum Ko Chahunga", filePath: "./NewBollywood/10.mp3", coverImg: ".//NewBollywoodCover/10.jpg" },
  { songTitle: "Tere Bina 1921", filePath: "./NewBollywood/11.mp3", coverImg: "./NewBollywoodCover/11.jpg" },
  { songTitle: "Banjaara - Ek Villain ", filePath: "./NewBollywood/12.mp3", coverImg: "./NewBollywoodCover/12.jpg" },
  { songTitle: "Bekhayali - Kabir Singh ", filePath: "./NewBollywood/13.mp3", coverImg: "./NewBollywoodCover/13.jpg" },
  { songTitle: "Chaahat - Blood Money ", filePath: "./NewBollywood/14.mp3", coverImg: "./NewBollywoodCover/14.jpg" },
  { songTitle: "Haan Ke Haan - Maharaj ", filePath: "./NewBollywood/15.mp3", coverImg: "./NewBollywoodCover/15.jpg" },
  { songTitle: "Jeene Laga Hoon - Ramaiya Vastavaiya", filePath: "./NewBollywood/16.mp3", coverImg: "./NewBollywoodCover/16.jpg" },
  { songTitle: "Kabhi Na Kabhi To Miloge - Shaapit", filePath: "./NewBollywood/17.mp3", coverImg: "./NewBollywoodCover/17.jpg" },
  { songTitle: "Main Agar Kahoon - Om Shanti Om", filePath: "./NewBollywood/18.mp3", coverImg: "./NewBollywoodCover/18.jpg" },
  { songTitle: "Mareez - E - Ishq - Zid", filePath: "./NewBollywood/19.mp3", coverImg: "./NewBollywoodCover/19.jpg" },
  { songTitle: "Milne Hai Mujhse Aayi - Aashiqui 2", filePath: "./NewBollywood/20.mp3", coverImg: "./NewBollywoodCover/20.jpg" },
  { songTitle: "Maahi - Dunki", filePath: "./NewBollywood/21.mp3", coverImg: "./NewBollywoodCover/21.jpg" },
  { songTitle: "Pehle Bhi Main - Animal", filePath: "./NewBollywood/22.mp3", coverImg: "./NewBollywoodCover/22.jpg" },
  { songTitle: "Phir Na Aisi Raat Aayegi - Laal Singh Chaddha", filePath: "./NewBollywood/23.mp3", coverImg: "./NewBollywoodCover/23.jpg" },
  { songTitle: "Saathiyaa - Singham ", filePath: "./NewBollywood/24.mp3", coverImg: "./NewBollywoodCover/24.jpg" },
  { songTitle: "Sawaar Loon - Lootera", filePath: "./NewBollywood/25.mp3", coverImg: "./NewBollywoodCover/25.jpg" },
  { songTitle: "Saware - Phantom", filePath: "./NewBollywood/26.mp3", coverImg: "./NewBollywoodCover/26.jpg" },
  { songTitle: "Atif Aslam_ Pehli Dafa", filePath: "./NewBollywood/27.mp3", coverImg: "./NewBollywoodCover/27.jpg" },
  { songTitle: "Dekha Hazaro Dafaa -Rustom", filePath: "./NewBollywood/28.mp3", coverImg: "./NewBollywoodCover/28.jpg" },
  { songTitle: "Jaan-Nisaar", filePath: "./NewBollywood/29.mp3", coverImg: "./NewBollywoodCover/29.jpg" },
  { songTitle: "Sun sathiyaa -ABCD-2", filePath: "./NewBollywood/30.mp3", coverImg: "./NewBollywoodCover/30.jpg" },
];

//old song Array object
const oldSongArray = [
  { songTitle: "Aaj Phir Jeene Ki Tamanna Hai - Guide (1965)", filePath: "./oldsongs/1.mp3", coverImg: "./oldsongCover/1.jpg" },
  { songTitle: "Aaj Unse Pehli Mulaqat Hogi - Paraya Dhan", filePath: "./oldsongs/2.mp3", coverImg: "./oldsongCover/2.jpg" },
  { songTitle: "Aajkal Paon Zaamin Par Nahin Padte - Ghar", filePath: "./oldsongs/3.mp3", coverImg: "./oldsongCover/3.jpg"},
  { songTitle: "Aane Se Uske Aaye Bahar - Jeene Ki Raah", filePath: "./oldsongs/4.mp3", coverImg: "./oldsongCover/4.jpg" },
  { songTitle: "Aap Ki Nazron Ne Samjha - Anpadh", filePath: "./oldsongs/5.mp3", coverImg: "./oldsongCover/5.jpg" },
  { songTitle: "Ae Hawa - Babu", filePath: "./oldsongs/6.mp3", coverImg: "./oldsongCover/6.jpg" },
  { songTitle: "Chahoonga Main Tujhe - Dosti (1964)", filePath: "./oldsongs/7.mp3", coverImg: "./oldsongCover/7.jpg" },
  { songTitle: "Chand Mera Dil Chandni Ho Tum - Hum Kisise Kum Naheen", filePath: "./oldsongs/8.mp3", coverImg: "./oldsongCover/8.jpg" },
  { songTitle: "Chhaila Babu Tu Kaisa Dildar With Dialogue - Kartavya", filePath: "./oldsongs/9.mp3", coverImg: "./oldsongCover/9.jpg" },
  { songTitle: "Chhu Kar Mere Manko - Yaarana", filePath: "./oldsongs/10.mp3", coverImg: ".//oldsongCover/10.jpg" },
  { songTitle: "Dariya Mein Phenk Do Chabi - Aas Paas", filePath: "./oldsongs/11.mp3", coverImg: "./oldsongCover/11.jpg" },
  { songTitle: "Do Lafzon Ki Hai Dil Ki Kahani - The Great Gambler", filePath: "./NewBollywood/12.mp3", coverImg: "./oldsongCover/12.jpg" },
  { songTitle: "Ek Main Aur Ek Tu - Khel Khel Mein", filePath: "./oldsongs/13.mp3", coverImg: "./oldsongCover/13.jpg" },
  { songTitle: "Goom Hai Kisi Ke Pyar Mein Revival - Raampur Ka Lakshman", filePath: "./oldsongs/14.mp3", coverImg: "./oldsongCover/14.jpg" },
  { songTitle: "Ham The Jinke Sahare - Safar", filePath: "./oldsongs/15.mp3", coverImg: "./oldsongCover/15.jpg" },
  { songTitle: "Haye Haye Yeh Majboori - Roti Kapada Aur Makaan", filePath: "./oldsongs/16.mp3", coverImg: "./oldsongCover/16.jpg" },
  { songTitle: "Itna Na Mujhse Tu Pyar Badha - Chhaya (1961)", filePath: "./oldsongs/17.mp3", coverImg: "./oldsongCover/17.jpg" },
  { songTitle: "Kiska Rasta Dekhe - Joshila", filePath: "./oldsongs/18.mp3", coverImg: "./oldsongCover/18.jpg" },
  { songTitle: "Koi Bata De Dil Hai Jahan - Main Chup Rahungi", filePath: "./oldsongs/19.mp3", coverImg: "./oldsongCover/19.jpg" },
  { songTitle: "Koi Shahri Babu - Loafer 1973", filePath: "./oldsongs/20.mp3", coverImg: "./oldsongCover/20.jpg" },
  { songTitle: "Loote Koi Man Ka Nagar - Abhimaan", filePath: "./oldsongs/21.mp3", coverImg: "./oldsongCover/21.jpg" },
  { songTitle: "Main Na Bhoolunga- Roti Kapada Aur Makaan", filePath: "./oldsongs/22.mp3", coverImg: "./oldsongCover/22.jpg" },
  { songTitle: "Man Kyoon Behka Re Behka Aadhi Raat Ko - Utsav", filePath: "./oldsongs/23.mp3", coverImg: "./oldsongCover/23.jpg" },
  { songTitle: "Mujhe Tum Yaad Karna - Mashaal", filePath: "./oldsongs/24.mp3", coverImg: "./oldsongCover/24.jpg" },
  { songTitle: "Naam Gum Jayega-Kinara", filePath: "./oldsongs/25.mp3", coverImg: "./oldsongCover/25.jpg" },
  { songTitle: "Nigahen Milane Ko Jee Chahta Hai - Aashiq Dil Hi Toh Hai", filePath: "./oldsongs/26.mp3", coverImg:"./oldsongCover/26.jpg" },
  { songTitle: "Pardesiyon Se Na Ankhiyan Milana - Jab Jab Phool Khile", filePath: "./oldsongs/27.mp3", coverImg: "./oldsongCover/27.jpg" },
  { songTitle: "Tera Saath Hai To (Female) - Pyaasa Sawan", filePath: "./oldsongs/28.mp3", coverImg: "./oldsongCover/28.jpg" },
  { songTitle: "Tere Kaaran Mere Saajan - Aan Milo Sajna", filePath: "./oldsongs/29.mp3", coverImg: "./oldsongCover/29.jpg" },
  { songTitle: "Tumari Kasam Tum Bahut - Gaban ", filePath: "./oldsongs/30.mp3", coverImg: "./oldsongCover/30.jpg" },
  { songTitle: "Tumhari Nazar Kyon Khafa Ho Gayi - Do Kaliyan", filePath: "./oldsongs/31.mp3", coverImg: "./oldsongCover/31.jpg" },
  { songTitle: "Tumse Dur Rehke - Adalat", filePath: "./oldsongs/32.mp3", coverImg: "./oldsongCover/32.jpg" },
  { songTitle: "Ye Samaa Samaa Hai Pyar Ka - Jab Jab Phool Khile", filePath: "./oldsongs/33.mp3", coverImg: "./oldsongCover/33.jpg" },
  { songTitle: "Yeh Kya Hua - Amar Prem", filePath: "./oldsongs/34.mp3", coverImg: "./oldsongCover/34.jpg" },
  { songTitle: "Zindagi Pyar Ka Geet HaiFemale - Souten", filePath: "./oldsongs/35.mp3", coverImg: "./oldsongCover/35.jpg" },
  { songTitle: "Afsana Likh Rahi Hoon Dil-E-Bekarr Ka", filePath: "./oldsongs/36.mp3", coverImg: "./oldsongCover/36.jpg" },
  { songTitle: "Dheere Dheere Chal Chand (Love Marriage)", filePath: "./oldsongs/37.mp3", coverImg: "./oldsongCover/37.jpg" },
];

//90's song Array 

const nineteesArray = [
  { songTitle: "Aayega Maja Ab Barsaat ka -Andaaz", filePath: "./90's/1.mp3", coverImg: "./90'sCover/1.jpg" },
  { songTitle: "Badal Gayi Hai Ye Dunia-Andolan", filePath: "./90's/2.mp3", coverImg: "./90'sCover/2.jpg" },
  { songTitle: "Beech Bajariya-Ansh", filePath: "./90's/3.mp3", coverImg: "./90'sCover/3.jpg"},
  { songTitle: "Chaahat Na Hoti-Chahat", filePath: "./90's/4.mp3", coverImg: "./90'sCover/4.jpg" },
  { songTitle: "Dil Ka Alam-Ashiqui", filePath: "./90's/5.mp3", coverImg: "./90'sCover/5.jpg" },
  { songTitle: "Dil Ka Qaraar -Sangharsh", filePath: "./90's/6.mp3", coverImg: "./90'sCover/6.jpg" },
  { songTitle: "Hamare Baad - Aan Men At Work", filePath: "./90's/7.mp3", coverImg: "./90'sCover/7.jpg" },
  { songTitle: "Hamen Jab Se Mohabbat - Border", filePath: "./90's/8.mp3", coverImg: "./90'sCover/8.jpg" },
  { songTitle: "Hamne Sanam Ko Khat Likha - Shakti", filePath: "./90's/9.mp3", coverImg: "./90'sCover/9.jpg" },
  { songTitle: "128-Hum Tere Bin Kahin Reh Nahin Paate - Sadak", filePath: "./90's/10.mp3", coverImg: ".//90'sCover/10.jpg" },
  { songTitle: "Jaaneman Chupke Chupke - Muskaan", filePath: "./90's/11.mp3", coverImg: "./90'sCover/11.jpg" },
  { songTitle: "Jaate Ho Pardesh Piya - Jeena Teri Gali Mein", filePath: "./NewBollywood/12.mp3", coverImg: "./90'sCover/12.jpg" },
  { songTitle: "Jo Bhi Kasmein - Raaz", filePath: "./90's/13.mp3", coverImg: "./90'sCover/13.jpg" },
  { songTitle: "Kasam se- Jaanwar", filePath: "./90's/14.mp3", coverImg: "./90'sCover/14.jpg" },
  { songTitle: "Kisi Din Banoongi Main - Raja", filePath: "./90's/15.mp3", coverImg: "./90'sCover/15.jpg" },
  { songTitle: "Koi Kya Pahechane - Saajan Ki Baahon Mein", filePath: "./90's/16.mp3", coverImg: "./90'sCover/16.jpg" },
  { songTitle: "Koyal Si Teri Boli - Beta", filePath: "./90's/17.mp3", coverImg: "./90'sCover/17.jpg" },
  { songTitle: "Kya Karte They Sajna - Lal Dupatta Malmal Ka", filePath: "./90's/18.mp3", coverImg: "./90'sCover/18.jpg" },
  { songTitle: "Maar Gayi Mujhe Teree Judaai - Judaai (1980)", filePath: "./90's/19.mp3", coverImg: "./90'sCover/19.jpg" },
  { songTitle: "Meri Mehbooba - Pardes", filePath: "./90's/20.mp3", coverImg: "./90'sCover/20.jpg" },
  { songTitle: "Meri Wafayen Yaad Karoge - Sainik", filePath: "./90's/21.mp3", coverImg: "./90'sCover/21.jpg" },
  { songTitle: "Mohabbat Hai Kya Cheez - Prem Rog", filePath: "./90's/22.mp3", coverImg: "./90'sCover/22.jpg" },
  { songTitle: "Na Kajare Ki Dhar (Duet Version) - Mohra", filePath: "./90's/23.mp3", coverImg: "./90'sCover/23.jpg" },
  { songTitle: "Sanam Bewafa - Sanam Bewafa", filePath: "./90's/24.mp3", coverImg: "./90'sCover/24.jpg" },
  { songTitle: "Tere Dard Se Dil - Deewana", filePath: "./90's/25.mp3", coverImg: "./90'sCover/25.jpg" },
  { songTitle: "Tere Har Sawal - Janata Ki Adalat", filePath: "./90's/26.mp3", coverImg: "./90'sCover/26.jpg" },
  { songTitle: "Teri Mohabbat Ne Dil - Rang", filePath: "./90's/27.mp3", coverImg: "./90'sCover/27.jpg" },
  { songTitle: "Tu Pyar Hai Kisi Aur Ka - Dil Hai Ke Manta Nahin", filePath: "./90's/28.mp3", coverImg: "./90'sCover/28.jpg" },
  { songTitle: "Tujhe Dekha To - Dilwale Dulhania Le Jayenge", filePath: "./90's/29.mp3", coverImg: "./90'sCover/29.jpg" },
  { songTitle: "Tum Yaad Na Aaya Karo I - Jeene Nahin Doonga", filePath: "./90's/30.mp3", coverImg: "./90'sCover/30.jpg" },
  { songTitle: "Tumse Milne Ko Dil - Phool Aur Kaante", filePath: "./90's/31.mp3", coverImg: "./90'sCover/31.jpg" },
  { songTitle: "Wada Na Tod - Dil Tujhko Diya", filePath: "./90's/32.mp3", coverImg: "./90'sCover/32.jpg" },
  { songTitle: "Ye Hai Sanamkhana - Dhartiputra", filePath: "./90's/33.mp3", coverImg: "./90'sCover/33.jpg" },
  { songTitle: "Ye Mausam Bhi Gaya - Balmaa", filePath: "./90's/34.mp3", coverImg: "./90'sCover/34.jpg" },
  { songTitle: "Yeh Aankhen Hai Aaina - Stunttman", filePath: "./90's/35.mp3", coverImg: "./90'sCover/35.jpg" },
  { songTitle: "Yeh Vaada Raha - Yeh Vaada Raha", filePath: "./90's/36.mp3", coverImg: "./90'sCover/36.jpg" },
  { songTitle: "Aayegi Har Pal Tujhe Meri Yaad - Andolan", filePath: "./90's/37.mp3", coverImg: "./90'sCover/37.jpg" },
  { songTitle: "Dil Jigar Ke Jaan Achchha Hai - (Jaanam)", filePath: "./90's/38.mp3", coverImg: "./90'sCover/38.jpg" },
  { songTitle: "Dil Nashe Mein Choor Hai ", filePath: "./90's/39.mp3", coverImg: "./90'sCover/39.jpg" },
  { songTitle: "Tu-Chand-Hai-Poonam-Ka", filePath: "./90's/40.mp3", coverImg: "./90'sCover/40.jpg" },
  { songTitle: "Waqt Kate Nahin Kat Ta Hai", filePath: "./90's/41.mp3", coverImg: "./90'sCover/41.jpg" },
];

//Gazal Array of object

const gazalArray = [
  { songTitle: "Aapki Yaad Aati Rahi Raat Bhar - Gaman", filePath: "./gazal/1.mp3", coverImg: "./gazalCover/1.jpg" },
  { songTitle: "Chupke Chupke Raat Din - Nikaah", filePath: "./gazal/2.mp3", coverImg: "./gazalCover/2.jpg" },
  { songTitle: "Hoshwalon Ko Khabar Kya - Sarfarosh", filePath: "./gazal/3.mp3", coverImg: "./gazalCover/3.jpg" },
  { songTitle: "Kisi Nazar Ko Tera Intezar Aaj Bhi Hai - Aitbaar", filePath: "./gazal/4.mp3", coverImg: "./gazalCover/4.jpg" },
  { songTitle: "Koi Fariyaad - Tum Bin", filePath: "./gazal/5.mp3", coverImg: "./gazalCover/5.jpg" },
  { songTitle: "Maine Dil Se Kaha - Rog", filePath: "./gazal/6.mp3", coverImg: "./gazalCover/6.jpg" },
  { songTitle: "Seene Mein Jalan - Gaman", filePath: "./gazal/7.mp3", coverImg: "./gazalCover/7.jpg" },
  { songTitle: "Tum Ko Dekha To Yeh Khayal Aaya - Saath Saath", filePath: "./gazal/8.mp3", coverImg: "./gazalCover/8.jpg" },
  { songTitle: "Us Mod Se Shuroo Karen ", filePath: "./gazal/9.mp3", coverImg: "./gazalCover/9.jpg" },
  { songTitle: "Aa Bhi Jao Zindagi Kam Hai (Album Version)", filePath: "./gazal/10.mp3", coverImg: ".//gazalCover/10.jpg" },
  { songTitle: "Aap Ko Dekhkar ", filePath: "./gazal/11.mp3", coverImg: "./gazalCover/11.jpg" },
  { songTitle: "Apni Dhun Mein Rehta Hoon", filePath: "./gazal/12.mp3", coverImg: "./gazalCover/12.jpg" },
  { songTitle: "Duniya Kisi Ke Pyar Mein Janat Se", filePath: "./gazal/13.mp3", coverImg: "./gazalCover/13.jpg" },
  { songTitle: "Humko Kiske Gham Ne Maara", filePath: "./gazal/14.mp3", coverImg: "./gazalCover/14.jpg" },
  { songTitle: "Jaane-Iss-Dil-Ka-Haal-Hadiqa-Kiani", filePath: "./gazal/15.mp3", coverImg: "./gazalCover/15.jpg" },
  { songTitle: "Kal Chaudhvin Ki Raat Thi (Live) ", filePath: "./gazal/16.mp3", coverImg: "./gazalCover/16.jpg" },
  { songTitle: "Mujhe Tum Nazar Se Gira To Rahe Ho", filePath: "./gazal/17.mp3", coverImg: "./gazalCover/17.jpg" },
  { songTitle: "Pyaar Ka Pehla Khat", filePath: "./gazal/18.mp3", coverImg: "./gazalCover/18.jpg" },
  { songTitle: "Ye Ju Muhabatun Ki Qasam", filePath: "./gazal/19.mp3", coverImg: "./gazalCover/19.jpg" },
];

let songList = document.getElementsByClassName("songList")[0];
//..........creating and setting attributes of each element ..........
function removeAllChildren(parentElement) {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}
function createSongList(songArray,songList){
 removeAllChildren(songList);
    songArray.forEach((element,i)=>{
    
      const songContain=document.createElement('div');
      songContain.classList.add('songContainer');
      songContain.id=`${i}`;
    
      const imgElement=document.createElement('img');
      imgElement.src = element.coverImg;
    songContain.appendChild(imgElement);
    
      const songNameElement=document.createElement('div');
      songNameElement.classList.add('songName');
    songNameElement.textContent = element.songTitle;
      songContain.appendChild(songNameElement);
    
      const durationElement=document.createElement('div');
      durationElement.classList.add('duration');
    songContain.appendChild(durationElement);
    // ........appending all the element to the songList........
    songList.appendChild(songContain);
    
      const audio = new Audio(element.filePath);
      audio.addEventListener('loadedmetadata', () => {
          const durationMinutes = Math.floor(audio.duration / 60);
          const durationSeconds = Math.floor(audio.duration % 60);
          document.getElementsByClassName("duration")[i].textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
      });
    });}
    let currentSongArray=newBollywood;
    createSongList(newBollywood,songList);
    // createSongList(newBollywood);
    const allsong=document.getElementById('allSong');
    const oldSong=document.getElementById('oldSong');
    const ninetees=document.getElementById('ninetees');
    const newSong=document.getElementById('newSong');
    const gazal=document.getElementById('gazal');
    const naat=document.getElementById('naat');
    const bhojpuri=document.getElementById('bhojpuri');
    const rap=document.getElementById('rap');
    const english=document.getElementById('english');
    
    allsong.addEventListener('click',()=>{
      currentSongArray=newBollywood;
        createSongList(newBollywood,songList);
    });

    oldSong.addEventListener('click',()=>{
      currentSongArray=oldSongArray;
        createSongList(oldSongArray,songList);
       
    }); 

    ninetees.addEventListener('click',()=>{
      currentSongArray=nineteesArray;
        createSongList(nineteesArray,songList);
    }); 

    newSong.addEventListener('click',()=>{
      currentSongArray=newBollywood;
      createSongList(newBollywood,songList);
    }); 

    gazal.addEventListener('click',()=>{
      currentSongArray=gazalArray;
        createSongList(gazalArray,songList);
    }); 
    
    // naat.addEventListener('click',()=>{
    //     createSongList(newBollywood,songList);
    // }); 
    // bhojpuri.addEventListener('click',()=>{
    //     createSongList(newBollywood,songList);
    // }); 
    // rap.addEventListener('click',()=>{
    //     createSongList(newBollywood,songList);
    // }); 
    // english.addEventListener('click',()=>{
    //     createSongList(newBollywood,songList);
    // }); 


let audioElement = new Audio(); // Create an empty audio element
const prevSongBtn=document.getElementById('prevSongBtn');
const playPauseBtn=document.getElementById('playPauseBtn');
const nextSongBtn=document.getElementById('nextSongBtn');
const currentPlayedSong=document.getElementById('currentPlayedSong');
const gif=document.getElementById('gif');
const progressBar=document.getElementById('progressBar');
const player=document.querySelector('.player');


let songIndex=0;
  songList.addEventListener('click', (e) => {
    player.classList.add('visible');
    songIndex=parseInt(e.target.id);
    console.log("this is song!");
    audioElement.src = currentSongArray[songIndex].filePath;
    audioElement.currentTime=0;
    audioElement.play();
    playPauseBtn.classList.remove('fa-play');
    playPauseBtn.classList.add('fa-pause');
   gif.style.opacity=1;
    currentPlayedSong.innerText=currentSongArray[songIndex].songTitle;
  });


// ..........handling playPauseBtn..........
playPauseBtn.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    playPauseBtn.classList.remove('fa-play');
    playPauseBtn.classList.add('fa-pause');
    gif.style.opacity=1;
  }
  //........we'll correct later on........
  else{
    audioElement.pause();
    playPauseBtn.classList.add('fa-play');
    playPauseBtn.classList.remove('fa-pause');
    gif.style.opacity=0;
  }
});



// ..............Handling nextBtn..............
function nxt(){
    if(songIndex>=currentSongArray.length){
      songIndex=0;
      }
      else{
        songIndex++;
      }
        audioElement.src =currentSongArray[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        playPauseBtn.classList.remove('fa-play');
        playPauseBtn.classList.add('fa-pause');
       gif.style.opacity=1;
        currentPlayedSong.innerText=currentSongArray[songIndex].songTitle;
    }

  audioElement.addEventListener('ended',nxt);
  nextSongBtn.addEventListener('click',nxt);

//..........handling prevBtn..........
prevSongBtn.addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex=currentSongArray.length-1;
  }
  else{
    songIndex--;
  }
  audioElement.src = currentSongArray[songIndex].filePath;
    audioElement.currentTime=0;
    audioElement.play();
    playPauseBtn.classList.remove('fa-play');
    playPauseBtn.classList.add('fa-pause');
   gif.style.opacity=1;
    currentPlayedSong.innerText=currentSongArray[songIndex].songTitle;
});


// .................audioElement.................
audioElement.addEventListener('timeupdate',()=>{
 progressBar.value=parseInt((audioElement.currentTime/audioElement.duration)*100);;
});

progressBar.addEventListener('change',()=>{
  audioElement.currentTime=((progressBar.value)*(audioElement.duration))/100;
})